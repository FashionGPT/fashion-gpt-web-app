import React, {useState, useEffect } from 'react';
import { baseAPIURL } from "../../constants/constants";
import "./ClothingFeed.css";

function ClothingFeed () {
    const [clothingData, setClothingData] = useState([]);
    useEffect(() => {
        fetchClothingData();
    }, []);

    const fetchClothingData = () => {
        fetch(`${baseAPIURL}/Clothing/clothing-feed`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.result);
                const formattedData = data.result.map((clothing) => ({
                    ...clothing,
                    createdAt: new Date(clothing.createdAt).toDateString(),
                }));
                const filteredData = formattedData.filter((clothing) => clothing?.shirt?.imageUrl)
                setClothingData(filteredData);
            })
            .catch((error) => {
                console.error('error', error);
            });
    };

    return (
    <div>
        <div className="clothing-container">
            <h1 className="clothing-title">Feed</h1>
            {clothingData.map((clothing) => (
                
                <div className = "out">
                    <div className="date-container">
                        <h1 className="clothing-date">Created On: {clothing.createdAt}</h1>
                    </div>
                <div key={clothing._id} className="clothing-card">
                    {
                        clothing?.shirt?.name && (
                            <div className="clothing-content">
                                <div>
                                    <h3 className="shirt-title">{clothing.shirt.name}</h3>
                                </div>
                                <div className="shirt-container">
                                    <a href={clothing.shirt.amazonLink} target="_blank">
                                        <img className="shirt-pic" src={clothing.shirt.imageUrl}></img>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                    {
                        clothing?.pants?.name && (
                            <div className="clothing-content">
                                <div>
                                    <h3 className="pants-name">{clothing.pants.name}</h3>
                                </div>
                                <div className="pants-container">
                                    <a href={clothing.pants.amazonLink} target="_blank">
                                        <img className="pants-image"src={clothing.pants.imageUrl}></img>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                    {
                        clothing?.shoes?.name && (
                            <div className="clothing-content">
                                <div>
                                    <h3 className="shoe-name">{clothing.shoes.name}</h3>
                                </div>
                                <div className="shoes-container">    
                                    <a href={clothing.shoes.amazonLink} target="_blank">
                                        <img className="shoe-image"src={clothing.shoes.imageUrl}></img>
                                    </a>
                                </div>    
                            </div>
                        )
                    }
                </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ClothingFeed