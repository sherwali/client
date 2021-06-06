import   React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAunthenticated, isAuthenticated } from './index'
import { Component } from 'react'



const AdminRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={ props => isAunthenticated() && isAunthenticated().user.role === 1 ? (
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


 export default AdminRoute