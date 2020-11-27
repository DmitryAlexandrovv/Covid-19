import React from 'react';

import './spinner.scss';

const Spinner = () => {
    return(
        <div className="spinner-wrapper hidden">
            <div className="loader">Loading...</div>
        </div>
    )
}

export default Spinner;