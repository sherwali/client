import React from 'react'
import { isAunthenticated } from '../auth'
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'


 const Dashboard = () => {

    const {user: {_id,name,email,role}} = isAunthenticated()

    const adminLinks= () => {
        return (
            <div>
                <h4>Admin links</h4>
             <ul>
            <li>
                <Link to='/create/category'>Creat Category</Link>
            </li>
            <li>
            <Link to='/create/product'>Update Profile</Link>
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
        

        {adminLinks()}

       </Layout>
    )
}

export default Dashboard