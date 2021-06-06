import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import Layout from '../core/Layout'
import { signup } from '../auth'



 const Signup = () => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false

    })

    const {name, email, password, success, error} = values

    const handleChange = name => event => {
            setValues({...values, error:false, [name]: event.target.value})
    }

   

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false})
        signup({name, email, password})
        .then(data=> {
            if(data.error) {
                setValues({...values, error: data.error, success: false})
            } else
            {
                setValues({
                    ...values, name: '', email:'', password: '', error: '', success: true
                })
            }

            
        })

    }
 
const signUpForm = () => {
 return   <form>
        <div>
            <label>Name</label>
            <input type="text" onChange={handleChange('name')} value={name} />
        </div>
        <div>
            <label>Email</label>
            <input type="email" onChange={handleChange('email')} value={email} />
        </div>
        <div>
            <label>Password</label>
            <input type="password" onChange={handleChange('password')} value={password}/>
        </div>
        <button onClick={clickSubmit}>Submit</button>
    </form>
    
}
const showError = () => {
   return <div style={{display: error ? '' :  'none'}}>
        {error}
    </div>
}

const showSuccess = () => {
  return  <div style={{display: success ? '' :  'none'}}>
        New Account is Created. Please <Link to="signin">Signin</Link>
    </div>
}
    return (
        <div>
            <Layout title = "signup" description="description of signup page">
                {showSuccess()}
                {showError()}
                {signUpForm()} 
                </Layout>
           
        </div>
    )
}

export default Signup


