import React from 'react';
import {StatisticsPage, NewsPage} from '../pages/statistics';
import {Route, Switch} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import HomePage from '../pages/homePage';

import Background from './BG.webp';
import './app.scss';

const App = () => {
    return (
            <>
            <div style={{background: `url(${Background}) center center/cover no-repeat`, minHeight: `100vh`}} className="app">
            <Header />
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/statistics' exact component={StatisticsPage}/>
                <Route path='/news' exact component={NewsPage}/>
                <Route path='/statistics/:country' render={
                    ({match}) => {
                        const {country} = match.params;
                        console.log(match)
                        return <StatisticsPage country={country}></StatisticsPage>
                    }
                } />
            </Switch>
            <Footer />
            </div>
            </>
    )
}

export default App;