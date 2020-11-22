import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithCovidService from '../hoc';
import {menuLoaded, menuOnError, menuSubmitted} from '../../actions';
import Infected from './infected/infected';
import Deaths from './deaths/deaths';
import Recovered from './recovered/recovered';
import Error from '../error';
import Spinner from '../spinner';
import {withRouter} from 'react-router-dom';

import './statistics.scss';

class Statistics extends Component {
    render(){
        const {loading, error, confirmed, totalConfirmed, recovered, totalRecovered, deaths, totalDeaths} = this.props;

        
        if(error) {
            return <Error />;
        }

        if(loading) {
            return <Spinner />;
        }

        return(
            <div className="statistics">
                <Infected confirmed={confirmed} totalConfirmed={totalConfirmed} />
                <div className="statistics__dead-recovered">
                    <Deaths deaths={deaths} totalDeaths={totalDeaths} />
                    <Recovered recovered={recovered} totalRecovered={totalRecovered} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        selectedCountry: state.selectedCountry,
        confirmed: state.confirmed,
        totalConfirmed: state.totalConfirmed,
        deaths: state.deaths,
        totalDeaths: state.totalDeaths,
        recovered: state.recovered,
        totalRecovered: state.totalRecovered,
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuOnError,
    menuSubmitted,
}

export default withRouter(WithCovidService()(connect(mapStateToProps, mapDispatchToProps)(Statistics)));