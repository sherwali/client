import React from 'react'
import { isAunthenticated } from '../auth'
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'


 const Dashboard = () => {

    const {user: {_id,name,email,role}} = isAunthenticated()

    const userLinks= () => {
        return (
            <div>
                <h4>User links</h4>
             <ul>
            <li>
                <Link to='/cart'>My Cart</Link>
            </li>
            <li>
            <Link to='/profile/update'>Update Profile</Link>
            </li>
            <li>{role=== 1 ? 'admin' : 'Registred user'}</li>
        </ul>
            </div>
        )
    }



    return (
       <Layout title={`G'day ${name}`} description='User dashboard'>

        <div>
          <h3> User Information</h3> 
        <ul>
            <li>{name}</li>
            <li>{email}</li>
            <li>{role=== 1 ? 'admin' : 'Registred user'}</li>
        </ul>

        </div>
        <div>
            <h3>purchase history</h3>
            <ul>
            <li>history</li>
           
        </ul>

        </div>

        {userLinks()}

       </Layout>
    )
}

export default Dashboard