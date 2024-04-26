import React from 'react';
import styles from "./Text.module.css";

function Text({msg, speed, ...props}) {
    const [txt, setTxt] = React.useState("");
    const [ci, setCi] = React.useState(0);

    React.useEffect(() => {
        let timeout;

        if(ci < msg.length) {
            timeout = setTimeout(() => {
                setTxt(txt + msg[ci]);
                setCi(ci + 1);
            }, speed);
        }

        return () => clearTimeout(timeout);

    }, [ci]);

    return ( 
    <p className={styles.text} {...props}>
        {txt}
    </p>
    );
}

export default Text;