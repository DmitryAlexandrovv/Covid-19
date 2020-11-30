import React, {Component} from 'react';
import {connect} from 'react-redux';
import {pageChanged} from '../../../actions';
import mask from './img/mask.svg';

import './homePage.scss';

class HomePage extends Component {
    componentDidMount(){
        this.props.pageChanged('Home');
    }

    render() {
        return (
            <div className="main">
                <div className="recomendation">
                    <img className="recomendation__icon" src={mask} alt="icon about masks"/>
                    <h3 className="recomendation__title">Wear a mask - save lives</h3>
                    <h4>Wear a mask</h4>
                    <h4>Wash your hands often</h4>
                    <h4>Maintain a safe distance</h4>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    pageChanged,
}

export default connect(null, mapDispatchToProps)(HomePage);