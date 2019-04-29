import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Error404 from './Error404';
import SearchForm from './SearchForm';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SearchForm} />
                <Route path="/search/:keywords" component={App} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;