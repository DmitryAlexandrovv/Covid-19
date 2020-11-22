import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryForm from '../country-form';
import Statistics from '../statistics';
import WithCovidService from '../hoc';
import {menuLoaded, menuRequested, menuSubmitted} from '../../actions';
import {withRouter} from 'react-router-dom';

import './mainPage.scss';

class MainPage extends Component {
    componentDidMount(){
        this.props.menuRequested();

        const {CovidService} = this.props;
        CovidService.getMenuItems()
            .then(res => {
                const slug = this.props.country ? this.props.country : 'global';
                const selectedCountry = res.filter(country => country.Slug === slug);
                this.props.menuSubmitted(selectedCountry[0]);
            })
    }

    handler = (event) => {
        this.props.menuRequested();

        event.preventDefault();
        const {CovidService} = this.props;
        CovidService.getMenuItems()
            .then(res => {
                const selectedCountry = res.filter(country => country.Slug === event.target.value);
                console.log(this.props)
                if (selectedCountry.length === 0) {
                    this.props.menuSubmitted(res[0]);
                    this.props.history.push(res[0].Slug);
                } else {
                    this.props.menuSubmitted(selectedCountry[0]); 
                    this.props.history.push(selectedCountry[0].Slug);  
                }
            })
    }

    componentDidUpdate(prevProps){
        if(this.props.country !== prevProps.country){
            console.log(1);
            this.props.menuRequested();

            const {CovidService} = this.props;
            CovidService.getMenuItems()
                .then(res => {
                    const selectedCountry = res.filter(country => country.Slug === this.props.country);
                    this.props.menuSubmitted(selectedCountry[0]);
                })
        }
    }

    render() {
        return (
            <div className="main">
                <Statistics />
                <CountryForm handler={this.handler} />
            </div>
        )
    }
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
    menuSubmitted,
}

export default withRouter(WithCovidService()(connect(mapStateToProps, mapDispatchToProps)(MainPage)));