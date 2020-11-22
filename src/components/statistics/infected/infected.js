import React from 'react';

const Infected = ({totalConfirmed, confirmed}) => {
    return(
        <div className="statistics__infected">
            <h3 className="statistics__title">Infected:</h3>
            <h3 className="statistics__total danger">{totalConfirmed}</h3>
            <h5 className="today">+{confirmed}</h5>
        </div>
    )
}

export default Infected;