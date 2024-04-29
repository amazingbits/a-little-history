import React from 'react';
import Button from "../components/Button";
import Text from '../components/Text';
import Image from '../components/Image';

const data = [
    {
        image: "/images/matilda.png",
        animated: false,
        text: "Era uma vez..."
    },
    {
        image: "/images/matilda.png",
        animated: true,
        text: "Outro texto..."
    },
    {
        image: "/images/matilda.png",
        animated: false,
        text: "Mais um texto..."
    },
];

function Home() {
    const [screenText, setScreenText] = React.useState("");
    const [screenImage, setScreenImage] = React.useState("");
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
    const [isAnimatedImage, setIsAnimatedImage] = React.useState(false);
    const [dataIndex, setDataIndex] = React.useState(0);
    const buttonRef = React.useRef(null);

    const textSpeed = 150;

    function handleButtonClick() {
        setScreenText("");
        if(dataIndex < data.length - 1) {
            setDataIndex(dataIndex + 1);   
        }
        setScreenImage(data[dataIndex].image);
        setIsAnimatedImage(data[dataIndex].animated);
        typeTextEffect(screenText);

        console.log(dataIndex, " - ", screenText);
    }
    
    function changeButtonStatus(ref, isEnabled) {
        ref.current.disabled = !isEnabled;
    }

    function activateButtonAfterAnimation() {
        changeButtonStatus(buttonRef, false);
        const timeout = setTimeout(() => {
            changeButtonStatus(buttonRef, true);
            clearTimeout(timeout);
        }, (textSpeed * data[dataIndex].text.length) + 1500);
    }

    function typeTextEffect(text) {
        let timeout;
        setCurrentTextIndex(0);
        if(currentTextIndex < text.length) {
            timeout = setTimeout(() => {
                setScreenText(screenText + text[currentTextIndex]);
                setCurrentTextIndex(currentTextIndex + 1);
            }, textSpeed);
        }

        return () => clearTimeout(timeout);
    }

    React.useEffect(() => {
        setScreenImage(data[dataIndex].image);
        setIsAnimatedImage(data[dataIndex].animated);
        typeTextEffect(data[dataIndex].text);
        activateButtonAfterAnimation();
    }, [screenText]);

    return ( 
    <div className="container">
        <div className="center">
            <Image src={screenImage} alt="Matilda" isAnimated={isAnimatedImage} />
        </div>
        <Text>{screenText}</Text>
        <Button onClick={handleButtonClick} title="Avançar" id="btn" ref={buttonRef} />
    </div>
    )
}

export default Home;