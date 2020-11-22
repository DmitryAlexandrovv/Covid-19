import React from 'react';
import CountryList from '../country-list';

import './countryForm.scss'

const CountryForm = ({handler}) => {
    return(
        <form id="select-country" className="d-flex justify-content-center flex-column">
            <CountryList handler={handler}></CountryList>
        </form>
    )
}

export default CountryForm