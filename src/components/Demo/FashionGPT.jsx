import { useState } from "react";
import { baseAPIURL } from "../../constants/constants";

const FashionGPT = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({});
  const [result, setResult] = useState('');

  const fetchChatGPTResponse = async () => {
    setIsLoading(true);

    const data = { prompt: userInput };

    try {
      const response = await fetch(
        `${baseAPIURL}/ChatGPT/create-outfit-from-chatgpt`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      // alert(
      //   `Pants: ${result.pants}\nShirt: ${result.shirt}\nShoes: ${result.shoes}`
      // );
      setResult(`Pants: ${result.pants}\nShirt: ${result.shirt}\nShoes: ${result.shoes}`);
      setUserInput('');
      setShowAlert(true);
      setAlertData(result);
    } catch (error) {
      console.log(`FashionGPT Error: ${error}`);
    }

    setIsLoading(false);
  };

  const onTextAreaChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <textarea value={userInput} onChange={onTextAreaChangeHandler}></textarea>
      <button type="button" onClick={fetchChatGPTResponse}>
        Submit
      </button>
      <p>{result}</p>
    </div>
  );
};

export default FashionGPT;
