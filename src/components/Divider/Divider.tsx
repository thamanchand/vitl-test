import React from 'react';

import './styles.scss';

type Props = {
    isSmall: boolean;
}

const Divider: React.FC<Props> = ({ isSmall }) => {
    return (
        <div className="divider" style={isSmall ? { width: '50px' } : { width: '100%' }} />
    )
};
export default Divider;