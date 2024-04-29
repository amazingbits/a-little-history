import React from 'react';
import data from "../data";
import Button from "../components/Button";
import Text from '../components/Text';
import Image from '../components/Image';
import ImageWrapper from '../components/ImageWrapper';

function Home() {
    const [screenText, setScreenText] = React.useState("");
    const [screenImage, setScreenImage] = React.useState("/images/boy.png");
    const [screenBg, setScreenBg] = React.useState("city-rain-1.jpg");
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
    const [isAnimatedImage, setIsAnimatedImage] = React.useState(false);
    const [dataIndex, setDataIndex] = React.useState(0);
    const buttonRef = React.useRef(null);

    const textSpeed = 100;

    function handleButtonClick() {
        if(data[dataIndex].finish) {
            buttonRef.current.remove();
        }
        setScreenText("");
        if(dataIndex < data.length - 1) {
            setDataIndex(dataIndex + 1);   
        }
        changeImage();
        typeTextEffect(screenText);
    }

    function changeImage() {
        setScreenImage(data[dataIndex].image);
        setScreenBg(data[dataIndex].bg);
        setIsAnimatedImage(data[dataIndex].animated);
    }
    
    function changeButtonStatus(ref, isEnabled) {
        ref.current.disabled = !isEnabled;
    }

    function activateButtonAfterAnimation() {
        changeButtonStatus(buttonRef, false);
        const timeout = setTimeout(() => {
            changeButtonStatus(buttonRef, true);
            clearTimeout(timeout);
        }, ((textSpeed * data[dataIndex].text.length)) * 0.3);
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
        changeImage();
        typeTextEffect(data[dataIndex].text);
        if(screenText.length >= data[dataIndex].text.length) {
            activateButtonAfterAnimation();
        } else {
            changeButtonStatus(buttonRef, false);
        }
    }, [screenText]);

    return ( 
    <div className="container">
        <ImageWrapper backgroundImage={screenBg}>
            <Image src={screenImage} alt="Matilda" isAnimated={isAnimatedImage} />
        </ImageWrapper>
        <Text>{screenText}</Text>
        <Button onClick={handleButtonClick} title="Avançar" id="btn" ref={buttonRef} />
    </div>
    )
}

export default Home;