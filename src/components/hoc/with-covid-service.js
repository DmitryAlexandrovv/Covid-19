import React from 'react';
import CovidServiceContext from '../covid-context';

const WithCovidService = () => (Wrapped) => {
    return (props) => {
        return(
            <CovidServiceContext.Consumer>
                {
                    (CovidService) => {
                        return <Wrapped {...props} CovidService={CovidService}></Wrapped>
                    }
                }
            </CovidServiceContext.Consumer>
        )
    }
};

export default WithCovidService;