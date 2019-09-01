import React, { useContext } from 'react';
import CampItems from './CampItems';
import CampContext from '../../context/camps/campContext';

const Camps = () => {
    const campContext = useContext(CampContext);

    return (
        
        <div style={campStyle}>
            {campContext.camps.map(camp => (
                <CampItems key={camp.id} camp={camp}/>
            ))}
        </div>
    )
}

const campStyle = {
    marginTop: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem'
}

export default Camps
