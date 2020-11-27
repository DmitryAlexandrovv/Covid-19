import React from 'react';
import {MainPage, NewsPage} from '../pages';
import {Route, Switch} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

import Background from './BG.webp';
import './app.scss';

const App = () => {
    return (
            <>
            <div style={{background: `url(${Background}) center center/cover no-repeat`, minHeight: `100vh`}} className="app">
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/news' exact component={NewsPage}/>
                <Route path='/:country' render={
                    ({match}) => {
                        const {country} = match.params;
                        return <MainPage country={country}></MainPage>
                    }
                } />
            </Switch>
            <Footer />
            </div>
            </>
    )
}

export default App;