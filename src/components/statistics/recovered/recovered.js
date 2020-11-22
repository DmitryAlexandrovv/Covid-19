import React from 'react';

const Recovered = ({totalRecovered, recovered}) => {
    return(
        <div className="recovered">
            <h5 className="statistics__subtitle">Recovered:</h5>
            <h3 className="statistics__total alright">{totalRecovered}</h3>
            <h5 className="today">+{recovered}</h5>
        </div>
    )
}

export default Recovered;