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

    const data = { prompt: userInput,
                    userID: "6513978b5a313f06321da9eb"};

    try {
      const response = await fetch(
        `${baseAPIURL}/Generation/outfit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();

      setResult(`Pants: ${result.result.pants.name}\nShirt: ${result.result.shirt.name}\nShoes: ${result.result.shoes.name}`);
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
