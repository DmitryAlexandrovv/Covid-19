import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import CovidService from './services/covid-service';
import CovidServiceContext from './components/covid-context';
import NewsService from './services/news-service';
import NewsServiceContext from './components/news-context';
import store from './store';


import './index.scss';

const covidService = new CovidService();
const newsService = new NewsService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <NewsServiceContext.Provider value={newsService}>
                <CovidServiceContext.Provider value={covidService}>
                    <Router>
                        <App />
                    </Router>
                </CovidServiceContext.Provider>
            </NewsServiceContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));
