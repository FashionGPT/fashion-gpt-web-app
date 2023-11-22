import React, { useState } from "react";
import { baseAPIURL } from "../../constants/constants";
import {HStack, Textarea, Button, VStack, Divider, Text, Spinner, SimpleGrid } from '@chakra-ui/react'
import { Card, Image, CardBody, CardFooter, Stack, Spacer } from '@chakra-ui/react'
import {useAuth0} from "@auth0/auth0-react";
function Prompt() {
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState({});
    const [result, setResult] = useState('');
    const [generatedOutfit, setGeneratedOutfit] = useState(undefined);

    const { user } = useAuth0();

    const fetchChatGPTResponse = async () => {
        setIsLoading(true);

        const data = { prompt: userInput,
            userID: user.sub};

        try {
            const response = await fetch(
                `${baseAPIURL}/Generation/outfit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "user": JSON.stringify(user)
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();

            setGeneratedOutfit(result?.result);

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

    function capitalizeEachWord(str) {
        // Split the string into words
        const words = str.split(' ');

        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

        // Join the words back together
        const result = capitalizedWords.join(' ');

        return result;
    }

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

    const handleClick = (event) => {
        const url = event.target.getAttribute('data-url');
        window.open(url, '_blank');
    };

    return (
        <div>
            <VStack>
                <Text fontSize='4xl'>What is your occasion?</Text>
                <HStack>
                    <Textarea resizable='auto' height='10em' width='25em' value={userInput} onChange={onTextAreaChangeHandler} placeholder='EX. Going to skateboarding' />
                    <Button colorScheme='purple' onClick={fetchChatGPTResponse}>Generate</Button>
                </HStack>
                <Divider/>

                {
                    generatedOutfit && (
                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                            <SimpleGrid columns={3} gap={10}>
                                <Card display='flex' justifyContent='center' maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={generatedOutfit?.shirt?.imageUrl}
                                            borderRadius='lg'
                                        />
                                    </CardBody>
                                    <Spacer/>
                                    <Stack alignItems={"center"} mt='6' spacing='3'>
                                        <Text color='black.600' fontSize='2xl'>{capitalizeEachWord(generatedOutfit?.shirt?.name)}</Text>
                                    </Stack>
                                    <CardFooter justifyContent={"center"}>
                                            <Button variant='solid' colorScheme='purple'
                                                    data-url={generatedOutfit?.shirt?.amazonLink}
                                                    onClick={handleClick}>
                                                    Check it out
                                            </Button>
                                    </CardFooter>
                                </Card>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={generatedOutfit?.pants?.imageUrl}
                                            borderRadius='lg'
                                        />
                                    </CardBody>
                                    <Spacer/>
                                    <Stack alignItems={"center"} mt='6' spacing='3'>
                                        <Text color='black.600' fontSize='2xl'>{capitalizeEachWord(generatedOutfit?.pants?.name)}</Text>
                                    </Stack>
                                    <CardFooter justifyContent={"center"}>
                                        <Button variant='solid' colorScheme='purple'
                                                data-url={generatedOutfit?.pants?.amazonLink}
                                                onClick={handleClick}>
                                            Check it out
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={generatedOutfit?.shoes?.imageUrl}
                                            borderRadius='lg'
                                        />
                                    </CardBody>
                                    <Spacer/>
                                    <Stack alignItems={"center"} mt='6' spacing='3'>
                                        <Text color='black.600' fontSize='2xl'>{capitalizeEachWord(generatedOutfit?.shoes?.name)}</Text>
                                    </Stack>
                                    <CardFooter justifyContent={"center"}>
                                        <Button variant='solid' colorScheme='purple'
                                                data-url={generatedOutfit?.shoes?.amazonLink}
                                                onClick={handleClick}>
                                            Check it out
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </SimpleGrid>
                        </div>
                    )
                }
            </VStack>
        </div>
    );
}

export default Prompt;
