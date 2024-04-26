import React from 'react';
import styled from "./Button.module.css";
import { FaChevronRight as RightIcon } from "react-icons/fa";

const Button = React.forwardRef(function Button(props, ref) {
    return (
        <button className={styled.button} onClick={props.onClick} ref={ref} {...props}>
            <RightIcon className={styled.icon} />
        </button>
    );
});

export default Button;