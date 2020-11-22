import React from 'react';
import {MainPage} from '../pages';
import {Route, Switch} from 'react-router-dom';

import Background from './BG.webp';

const App = () => {
    return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`, minHeight: `100vh`}} className="app">
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/:country' render={
                    ({match}) => {
                        const {country} = match.params;
                        return <MainPage country={country}></MainPage>
                    }
                } />
            </Switch>
            </div>
    )
}

export default App;