import React from 'react';

const Country = ({country, slug, selected}) => {
    return(
        <option value={slug} selected={selected}>
            {country}
        </option>
    )
}

export default Country;