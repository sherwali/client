import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import Menu from './core/Menu'
import Dashboard from './user/UserDashboard'
import PrivateRoute from './auth/PrivateRoute'


 const Routes = () => {
    return (
        <BrowserRouter>
       
            <Switch>
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/' exact component={Home} />
                <PrivateRoute   path='/user/dashboard' exact component={Dashboard}   />             
                
            </Switch>
           
        </BrowserRouter>
    )
}

export default Routes