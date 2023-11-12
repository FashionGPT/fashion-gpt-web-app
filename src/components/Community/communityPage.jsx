import React from 'react';
import axios from 'axios';
import "./card.css";



function CommunityPage () {

    const [posts, setPosts] = React.useState([
        {
            _id: "6515c8057b142891511ab2f8",
            title: "test title",
            text: "test texts",
            user: "user",
            outfit: "test"
        },
        {
            _id: "6515c8057b142891511ab2f8",
            title: "test title",
            text: "test texts",
            user: "user",
            outfit: "test"
        }
    ]);
    const [titleText, setTitleText] = React.useState('');
    const [postText, setPostText] = React.useState('');
    const [outfitText, setOutfitText] = React.useState('');

    const [outfits, setOutfits] = React.useState([]);
    
    React.useEffect(() => {
      
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8081/api/v1/Post/community',
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
            setPosts(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });

        let config2 = {
          method: 'post',
          url: 'http://localhost:8081/api/v1/Clothing/outfits-for-user',
          body: {
            "userID": "651397a75a313f06321da9ec"
            },
          headers: { }
        };
        
        axios.request(config2)
        .then((response) => {
            setOutfits(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
        
    }, []);
    
    return (
        <div>
            <h1>Community Page</h1>
            <input placeholder='title' value={titleText} onChange={(event) => {setTitleText(event.target.value)}}></input>
            <input placeholder='text' value={postText} onChange={(event) => {setPostText(event.target.value)}}></input>
            <select id="outfitForm" placeholder="select outfit" data-style="btn-info" name="selectpicker">
                {
                  outfits.map((outfit) => {
                    return (
                    <option
                      key={outfit._id}
                      onClick={() => {
                        setOutfitText(outfit.shirt.name + ", " + outfit.pants.name + ", " + outfit.shoes.name);
                      }}
                      >
                        {outfit.shirt.name + ", " + outfit.pants.name + ", " + outfit.shoes.name}
                      </option>);
                  })
                }
            </select>
            <button onClick={() => {
                let data = JSON.stringify({
                    "title": titleText,
                    "text": postText,
                    "outfit": outfitText,//"65139624709491f3b5286cf4",
                    "user": "6513978b5a313f06321da9eb"
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
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                
            }}>Submit</button>
            {
                posts.map((post) => {
                    return (
                        <div className="card-container">
                            <p>{post.title}</p>
                            <p>{post.text}</p>
                            <p>{post.outfit}</p>
                        </div>
                    )
                })
            }
        </div>  
    )
}

export default CommunityPage;
