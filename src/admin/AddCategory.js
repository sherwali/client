
import React, {useState} from 'react'
import { isAunthenticated } from '../auth'
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'
import { createCategory } from './apiAdmin'

 const AddCategory = () => {

const [name, setName] = useState('')
const [error, setError] = useState('')
const [success, setSuccess] = useState('')

//destructure user and token from localstorage

const {user, token} = isAunthenticated()

const handleChange = (e) => {
        setError('')
        setName(e.target.value)
}

const clickSubmit = (e) => {
            e.preventDefault()
            setError('')
            setSuccess(false)
            //make request to api to create category....
            {createCategory(user._id, token, {name}).then(
                data => {
                    if(data.error){
                        setError(data.error)
                    }else {
                        setError('')
                        setSuccess(true)
                    }
                })
}}
 


const newCategoryForm = () => {
   return <form onSubmit={clickSubmit}>

        <div>
            <label>name</label>
            <input type='text>' onChange={handleChange} value={name} 
            autoFocus></input>
            <button>Create Category</button>
        </div>
    </form>
}

const showSuccess = () => {
        if(success){
            return <h3>{name} is created</h3>
        }
}

const showError = () => {
    if(error) {
        return <h3>Category should be unique</h3>
    }
}
const goBack = () => {
    return (<div>
        <Link to='/admin/dashboard' >Back to Dashboard</Link>
    </div>)
   
}

    return (
        <Layout title={`G'day ${user.name}`} description='Add a new Category'>

       
         {showSuccess()}
         { showError() }
        {newCategoryForm()}
        {goBack()}

     </Layout>
    )
}

export default AddCategory