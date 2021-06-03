import React from 'react';

import './styles.scss';

type Props = {
    text: string;
    size: string;
    isBold: boolean;
}
// TO-DO: Use classnames library to combine styles instead of inline style

const Label: React.FC<Props> = ({ text, size, isBold }) => {
    return (
        <div className="label" style={{fontSize: size, fontWeight: isBold ? 'bold' : 'normal' }}>
            <p>{text}</p>
        </div>
    )
};
export default Label;