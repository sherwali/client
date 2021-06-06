import {React, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Layout from '../core/Layout'
import { authenticate, signin, isAunthenticated} from '../auth'




 const Signin = () => {

    const [values, setValues] = useState({
     
        email:'forsignin@admin.com',
        password:'asdf1234',
        error:'',
        loading: false,
        redirectToReferrer: false

    })

    const { email, password, loading, error, redirectToReferrer} = values
    const {user} = isAunthenticated()

    const handleChange = name => event => {
            setValues({...values, error:false, [name]: event.target.value})
    }

   

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false, loading: true})
        signin({ email, password})
        .then(data=> {
            if(data.error) {
                setValues({...values, error: data.error, loading: false})
            } else
            {
                authenticate(
                    data, () => {
                        setValues({
                            ...values, redirectToReferrer: true
                        })
                    }
                )
               
            }

            
        })

    }
 
const signUpForm = () => {
 return   <form>
       
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

const showLoading = () => {
  return  loading && (<div> <h2> loading... </h2> </div>)
    
}

    const redirectUser = () => {
        if(redirectToReferrer) {
           if(user && user.role === 1) {
               return <Redirect to='/admin/dashboard' />
           }
           else {
            return <Redirect to="/user/dashboard" />
           }
        }
        if(isAunthenticated()){
            return <Redirect to='/' />
        }
    }
    return (
        <div>
            <Layout title = "signin" description="description of signin page">
                {showLoading()}
                {showError()}
                {signUpForm()} 
                {redirectUser()}
                </Layout>
           
        </div>
    )
}

export default Signin


