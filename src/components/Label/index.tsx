import React from 'react';

import './styles.scss';

type Props = {
    text: string;
}
const Label: React.FC<Props> = ({ text }) => {
    return (
        <div className="label">
            <p>{text}</p>
        </div>
    )
};
export default Label;