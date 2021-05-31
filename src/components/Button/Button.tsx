import React from "react";

import './styles.scss';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
}
const Button: React.FC<Props>  = ({ children, onClick, disabled }) => (
    <button
        className="buttonBase"
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

export default Button;
