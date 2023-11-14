import React from "react";
function PromptPage() {
  const [outfit, setOutfit] = React.useState({
  "_id": "654a8934b71147cd401b0703",
  "isFavorite": false,
  "createdAt": "2023-11-07T19:00:04.450Z",
  "updatedAt": "2023-11-07T19:00:04.450Z",
  "shirt": {
      "_id": "654a8933b71147cd401b06fd",
      "createdAt": "2023-11-07T19:00:03.524Z",
      "updatedAt": "2023-11-07T19:00:03.524Z",
      "name": "graphic t-shirt",
      "amazonLink": "https://www.google.com/aclk?sa=l&ai=DChcSEwi7_JKeyLKCAxVAnVoFHUZPDbEYABABGgJ2dQ&gclid=EAIaIQobChMIu_ySnsiyggMVQJ1aBR1GTw2xEAQYASABEgJ1s_D_BwE&sig=AOD64_0J90u5ixypYLGgol0d6vLn020byQ&ctype=5&q=&ved=0ahUKEwiE742eyLKCAxX4SjABHfXjCW8Qww8IjRM&adurl=",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHKWM1fFS5DkCQc2LWSYrH1yXlx5w3b7yUuOp0WxC1EooDpE_IpuZhPv3MtLw&usqp=CAE",
      "type": "Shirt",
      "__v": 0
  },
  "pants": {
      "_id": "654a8933b71147cd401b06ff",
      "createdAt": "2023-11-07T19:00:03.993Z",
      "updatedAt": "2023-11-07T19:00:03.993Z",
      "name": "ripped jeans",
      "amazonLink": "https://www.google.com/aclk?sa=l&ai=DChcSEwiT6NKgyLKCAxU00OMHHWKCBc8YABABGgJ5bQ&gclid=EAIaIQobChMIk-jSoMiyggMVNNDjBx1iggXPEAsYASABEgLwdPD_BwE&sig=AOD64_3LfpkBdKn-YD71oMa2CjTxqIP9eg&ctype=5&q=&ved=0ahUKEwjmkMegyLKCAxWBl4kEHX69BeEQ9A4I1h4&adurl=",
      "imageUrl": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQyHBWzAtWKwUDunrbshZPxSKDlws-Yq8g7A51p-IMIA2IdpVGWL68WCX0LGkYsVm62mKTPC2fAFC1aslKsgoG69An6Qu_Hmtz4CPdqzIf&usqp=CAE",
      "type": "Pants",
      "__v": 0
  },
  "shoes": {
      "_id": "654a8934b71147cd401b0701",
      "createdAt": "2023-11-07T19:00:04.413Z",
      "updatedAt": "2023-11-07T19:00:04.414Z",
      "name": "skateboarding sneakers",
      "amazonLink": "https://www.google.com/aclk?sa=l&ai=DChcSEwif1PqiyLKCAxXJ1sgKHStdAxoYABABGgJxdQ&gclid=EAIaIQobChMIn9T6osiyggMVydbICh0rXQMaEAQYASABEgKSR_D_BwE&sig=AOD64_2NU-ak4W_4qqxgSD8FjryhgdbeMw&ctype=5&q=&ved=0ahUKEwiKrvSiyLKCAxVBQzABHRGtCIEQww8IzhY&adurl=",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnAEawITw7skkHpYPTKEczdRrWq5aUWwrXd1RFm5dtbybIxIDEPyEJvH9q3F9AtPPA7vCDvk4u2tQf3VAJX4qMTg9oxt2nx_BOjwBfIa3axSjORCefxY-a&usqp=CAE",
      "type": "Shoes",
      "__v": 0
  },
  "userID": "651397a75a313f06321da9ec",
  "__v": 0
});
return (
        <div style = {{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h3> Generated Outfit </h3>
        <p>{outfit.shirt.name}</p>
        <img src = {outfit.shirt.imageUrl} style={{maxWidth: 300}}></img>
        <p>{outfit.pants.name}</p>
        <img src = {outfit.pants.imageUrl}  style={{maxWidth: 300}}></img>
        <p>{outfit.shoes.name}</p>
        <img src = {outfit.shoes.imageUrl}  style={{maxWidth: 300}}></img>


        </div>

    );
}

export default PromptPage;