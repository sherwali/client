import   React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAunthenticated, isAuthenticated } from './index'
import { Component } from 'react'



const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={ props => isAunthenticated() ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{
            pathname:'/signin',
            state: { from: props.location }
        }}
        />
    )
    }
    />
)


 export default PrivateRoute