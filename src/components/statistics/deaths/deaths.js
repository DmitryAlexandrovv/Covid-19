import React from 'react';

const Deaths = ({totalDeaths, deaths}) => {
    return(
        <div className="deaths">
            <h5 className="statistics__subtitle">Deaths:</h5>
            <h3 className="statistics__total danger">{totalDeaths}</h3>
            <h5 className="today">+{deaths}</h5>
        </div>
    )
}

export default Deaths;