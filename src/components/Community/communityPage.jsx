import React from 'react';
import axios from 'axios';
import "./card.css";



function CommunityPage () {

    const [posts, setPosts] = React.useState([]);
    const [titleText, setTitleText] = React.useState('');
    const [postText, setPostText] = React.useState('');
    const [outfitText, setOutfitText] = React.useState('');

    const [outfits, setOutfits] = React.useState([]);
    const [selectedOutfitId, setSelectedOutfitId] = React.useState('');
    const [userId, setUserId] = React.useState("6513978b5a313f06321da9eb");

    function fetchPosts() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8081/api/v1/Post/community',
            headers: { }
        };

        axios.request(config)
            .then((response) => {
                let arr = response?.data?.result;
                if (arr) {
                    arr = arr.reverse();
                }
                setPosts(arr);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    React.useEffect(() => {

        fetchPosts();

        axios.post('http://localhost:8081/api/v1/Clothing/outfits-for-user', {
            "userID": userId
        })
        .then((response) => {
            let arr = response?.data?.result;
            if (arr) {
                arr = arr.reverse();
            }
            console.debug("Got outfits for user", arr);
            setOutfits(arr);
            if (arr && arr.length > 0) {
                setSelectedOutfitId(arr[0]._id);
            }
        })
        .catch((error) => {
            console.error("Error getting outfits for user", error);
        });

    }, []);

    return (
        <div>
            <h1>Community Page</h1>
            <input placeholder='title' value={titleText} onChange={(event) => {setTitleText(event.target.value)}}></input>
            <input placeholder='text' value={postText} onChange={(event) => {setPostText(event.target.value)}}></input>
            <select id="outfitForm" placeholder="select outfit" data-style="btn-info" name="selectpicker" onChange={(e) => {
                setSelectedOutfitId(e?.target?.value || '');
            }}>
                {
                  outfits.map((outfit) => {
                    return (
                    <option
                      key={outfit._id}
                      value={outfit._id}
                      onClick={() => {
                        setOutfitText(outfit?.shirt?.name + ", " + outfit?.pants?.name + ", " + outfit?.shoes?.name);
                        // setSelectedOutfitId(outfit?._id || '');
                        console.debug("Selected outfit", outfit?._id);
                      }}
                      >
                        {outfit?.shirt?.name + ", " + outfit?.pants?.name + ", " + outfit?.shoes?.name}
                      </option>);
                  })
                }
            </select>
            <button onClick={() => {
                let data = JSON.stringify({
                    "title": titleText,
                    "text": postText,
                    "outfit": selectedOutfitId,//"65139624709491f3b5286cf4",
                    "user": userId
                  });

                  let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8081/api/v1/Post/create',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    data : data
                  };

                  axios.request(config)
                  .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setTitleText('');
                    setPostText('');
                    fetchPosts();
                  })
                  .catch((error) => {
                    console.log(error);
                  });

            }}>Submit</button>
            {
                posts.map((post) => {
                    return (
                        <div className="card-container" key={post._id}>
                            <p>{post.title}</p>
                            <p>{post.text}</p>
                            <div>
                                { post.outfit.shirt &&
                                    <div>
                                        <p>
                                            {post.outfit.shirt.name}
                                        </p>
                                        <img src={post.outfit.shirt.imageUrl}></img>
                                    </div>
                                }

                                { post.outfit.pants &&
                                    <div>
                                        <p>
                                            {post.outfit.pants.name}
                                        </p>
                                        <img src={post.outfit.pants.imageUrl}></img>
                                    </div>
                                }

                                { post.outfit.shoes &&
                                    <div>
                                        <p>
                                            {post.outfit.shoes.name}
                                        </p>
                                        <img src={post.outfit.shoes.imageUrl}></img>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommunityPage;
