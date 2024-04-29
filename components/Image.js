import styled from "./Image.module.css";

function Image({isAnimated = false, ...props}) {
    const imageClassName = isAnimated ? "fromLeftAnimation" : "";
    return (
        <img className={`${styled.image} ${imageClassName}`} src={props.src} alt={props.alt} {...props} />
    );
}

export default Image;