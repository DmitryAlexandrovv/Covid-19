import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryForm from '../../country-form';
import Statistics from '../../statistics';
import WithCovidService from '../../hoc';
import {menuLoaded, menuRequested, menuSubmitted, pageChanged} from '../../../actions';
import {withRouter} from 'react-router-dom';

import './statisticsPage.scss';

class StatisticsPage extends Component {
    componentDidMount(){
        this.props.menuRequested();

        const {CovidService} = this.props;
        const slug = this.props.country ? this.props.country : 'global';
        CovidService.getMenuItems()
            .then(res => {
                const selectedCountry = res.filter(country => country.Slug === slug);
                this.props.menuLoaded(res);
                this.props.menuSubmitted(selectedCountry[0]);
                this.props.pageChanged('Statistics');
            })
    }

    handler = (event) => {
        this.props.menuRequested();

        event.preventDefault();
        const {CovidService} = this.props;
        CovidService.getMenuItems()
            .then(res => {
                const selectedCountry = res.filter(country => country.Slug === event.target.value);
                if (selectedCountry.length === 0) {
                    this.props.menuSubmitted(res[0]);
                    this.props.history.push('/statistics/' +  res[0].Slug);
                } else {
                    console.log(this.props)
                    this.props.menuSubmitted(selectedCountry[0]); 
                    this.props.history.push('/statistics/' + selectedCountry[0].Slug);  
                }
            })
    }

    componentDidUpdate(prevProps){
        if(this.props.country !== prevProps.country){
            this.props.menuRequested();

            const {CovidService} = this.props;
            const slug = this.props.country ? this.props.country : 'global';
            CovidService.getMenuItems()
                .then(res => {
                    const selectedCountry = res.filter(country => country.Slug === slug);
                    this.props.menuSubmitted(selectedCountry[0]);
                })
        }
    }

    render() {
        return (
            <div className="statisticsPage">
                <Statistics />
                <CountryForm handler={this.handler} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuSubmitted,
    pageChanged,
}

export default withRouter(WithCovidService()(connect(mapStateToProps, mapDispatchToProps)(StatisticsPage)));