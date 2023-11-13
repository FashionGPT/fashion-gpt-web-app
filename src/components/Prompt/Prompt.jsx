import { useState } from "react";
import { baseAPIURL } from "../../constants/constants";
import {HStack, Textarea, Button, VStack, Divider, Text, Spinner} from '@chakra-ui/react'
function Prompt() {
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState({});
    const [result, setResult] = useState('');

    const fetchChatGPTResponse = async () => {
        setIsLoading(true);

        const data = { prompt: userInput,
            userID: "651397a75a313f06321da9ec"};

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
        return <div>
            <VStack>
                <Text fontSize='4xl'>What is your occasion?</Text>
                <HStack>
                    <Textarea resizable='auto' height='10em' width='25em' value={userInput} onChange={onTextAreaChangeHandler} placeholder='EX. Going to skateboarding' />
                    <Button colorScheme='purple' onClick={fetchChatGPTResponse}>Generate</Button>
                </HStack>
                <Divider/>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </VStack>
        </div>;
    }

    return (
        <div>
            <VStack>
                <Text fontSize='4xl'>What is your occasion?</Text>
                <HStack>
                    <Textarea resizable='auto' height='10em' width='25em' value={userInput} onChange={onTextAreaChangeHandler} placeholder='EX. Going to skateboarding' />
                    <Button colorScheme='purple' onClick={fetchChatGPTResponse}>Generate</Button>
                </HStack>
                <Divider/>
                <Text fontSize='4xl'>{result}</Text>
            </VStack>

        </div>
    );
}

export default Prompt;
