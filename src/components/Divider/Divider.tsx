import React from 'react';

import './styles.scss';

type Props = {
    width: string;
}

const Divider: React.FC<Props> = ({ width }) => {
    return (
        <div className="divider" style={width ? {width: `${width}${'px'}`} : undefined } />
    )
};
export default Divider;
