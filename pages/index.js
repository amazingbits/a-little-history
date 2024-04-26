import React from 'react';
import Button from "../components/Button";
import Text from '../components/Text';

const data = [
    {
        image: "/images/matilda.png",
        text: "Era uma vez..."
    },
    {
        image: "/images/matilda.png",
        text: "Outro texto..."
    },
    {
        image: "/images/matilda.png",
        text: "Mais um texto..."
    },
];

function Home() {
    const buttonRef = React.useRef(null);

    function handleButtonClick() {
        alert("mudar texto...");
    }
    
    function activateButton(ref) {
        ref.current.disabled = true;
        setTimeout(() => {
            ref.current.disabled = false;
        }, 100);
    }

    React.useEffect(() => {
        // ...
    }, []);

    return ( 
    <div className="container">
        <img className="image" src="/images/matilda.png" alt="Matilda" />
        <Text msg="Texto inicial..." speed={100} />
        <Button onClick={handleButtonClick} title="Avançar" id="btn" ref={buttonRef} />
    </div>
    )
}

export default Home;