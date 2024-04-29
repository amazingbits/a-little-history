import styled from "./ImageWrapper.module.css";

function ImageWrapper({backgroundImage, ...props}) {
    const bg = `url(/images/bg/${backgroundImage})`;
    return (
        <div style={{backgroundImage: bg}} className={styled.wrapper}>
            {props.children}
        </div>
    );
}

export default ImageWrapper;