import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './core/home'
import Base from './core/base'
import Signup from './user/signup'
import Signin from './user/signin'
import PrivateRoute from './auth/PrivateRoutes'
const Routes = () =>{
    return(
        <Router>
            
                <Switch>
                    <PrivateRoute path="/" exact component={Home} />
                    <Route path="/sign-up" component={Signup}/>
                    <Route path="/sign-in" component={Signin}/>
                </Switch>
            
        </Router>
    )
}
export default Routes;

