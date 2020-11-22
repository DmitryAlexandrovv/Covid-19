import React, { Component } from 'react';
import {connect} from 'react-redux';
import Country from '../country';
import WithCovidService from '../hoc';
import Error from '../error';
import Spinner from '../spinner';
import {menuLoaded, menuRequested, menuOnError, menuSubmitted} from '../../actions';
import {withRouter} from 'react-router-dom';

import './countryList.scss';

class CountryList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {CovidService} = this.props;
        CovidService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuOnError());
    }

    render() {
        const {menuItems, loading, error, selectedCountry} = this.props;

        if(error) {
            return <Error />;
        }

        if(loading) {
            return <Spinner />;
        }

        const items = menuItems.map((menuItem, i) => {
            let selected = menuItem.Country === selectedCountry ? true : false;
            return <Country 
                key={menuItem.i}
                country={menuItem.Country}
                slug={menuItem.Slug}
                selected={selected} />
        })

        return (
            <View items={items} handler={this.props.handler} />
        )

    }
}

const View = ({items, handler}) => {
    return(
        <select 
            className="form-control form-control-sm select-css"
            onChange={handler}  >
            {items}
        </select>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        selectedCountry: state.selectedCountry,
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuOnError,
    menuSubmitted,
}

export default withRouter(WithCovidService()(connect(mapStateToProps, mapDispatchToProps)(CountryList)));