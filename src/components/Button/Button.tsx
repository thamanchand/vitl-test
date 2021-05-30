import React from "react";

import './styles.scss';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
}
const Button: React.FC<Props>  = ({ children, onClick }) => (
    <button
        className="buttonBase"
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
