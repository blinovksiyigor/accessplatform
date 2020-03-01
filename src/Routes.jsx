import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AuthLayout from './components/auth/layouts/AuthLayout'
import Page404 from './components/pages/404';


const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={AuthLayout}/>
                <Route component={Page404}/>
            </Switch>
       </BrowserRouter>
    );
};

export default routes;