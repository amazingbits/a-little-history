import React from 'react';
import styles from "./Text.module.css";

function Text(props) {
    /*
    const [txt, setTxt] = React.useState("");
    const [ci, setCi] = React.useState(0);

    const type = () => {
        let timeout;

        if(ci < msg.length) {
            timeout = setTimeout(() => {
                setTxt(txt + msg[ci]);
                setCi(ci + 1);
            }, speed);
        }

        return () => clearTimeout(timeout);
    }

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

    type();
    */
    return ( 
    <p className={styles.text} {...props}>{props.children}</p>
    );
}

export default Text;