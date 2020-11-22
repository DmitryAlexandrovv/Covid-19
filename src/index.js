import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import CovidService from './services/covid-service';
import CovidServiceContext from './components/covid-context';
import store from './store';


import './index.scss';

const covidService = new CovidService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <CovidServiceContext.Provider value={covidService}>
                <Router>
                    <App />
                </Router>
            </CovidServiceContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));
