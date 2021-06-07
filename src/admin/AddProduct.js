import React, {useState, useEffect} from 'react'
import { isAunthenticated } from '../auth'
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'
import { createProduct, getCategories } from './apiAdmin'

 const AddProduct = () => {
     
     const [values, setValues] = useState({
         name: '',
         description: '',
         price: '',
         categories: [],
         category: '',
         shipping: '',
         quantity: '',
         photo: '',
         loading: '',
         error: '',
         createdProduct: '',
         redirectToProfile: false,
         FormData: ''
     })

     const {user, token} = isAunthenticated()

     const { 
    name, 
     description,
     price,
     categories,
     category,
     shipping,
     quantity,
   
     loading,
     error,
     createdProduct,
     redirectToProfile,
     formData} = values


     
     //load categories and set from data
      const init = () => {
         getCategories().then(data => {
            if(data.error){
               setValues({...values, error: data.error})
            } else {
               setValues({...values, categories: data, formData: new FormData()})
            }
         })
      }


      useEffect(() => {
         
         init()

      }, [])

      const handleChange = name => event => {
         const value = name === 'photo' ? event.target.files[0] : event.target.value
         formData.set(name, value)
         setValues({...values, [name]: value})
      }

         const clickSubmit = (event) => {

            event.preventDefault()
            setValues({...values, error: '', loading: true})
            createProduct(user._id, token, formData)
            .then(data => {
               if(data.error) {
                  setValues({...values, error: data.error})
               } else {
                  setValues({...values, name:'', description: '', photo: '', price: '', quantity: '',
               loadin: false, createdProduct: data.name
               })
               }
            })


         }
        const newPostForm = () => {
          return  <form onSubmit={clickSubmit}>

            <h4>Post Photo</h4>

           <div>
            <input onChange={handleChange('photo')} type='file' name='photo' accept='image/*' ></input>
            </div>
            <br></br> <br></br>
            <div>
               <label>Name</label> 
               <input onChange={handleChange('name')} type='text' value={name} ></input>
            </div>
            <br></br> <br></br>
            <div>
               <label>Description</label> 
               <textarea onChange={handleChange('description')} type='text' value={description} ></textarea>
            </div>
            <br></br> <br></br>
            <div>
               <label>price</label> 
               <input onChange={handleChange('price')} type='number' value={price} ></input>
            </div>
            <br></br> <br></br>
            <div>
               <label>Category</label> 
               <select onChange={handleChange('category')}  >

                <option>Please Select</option>
              { categories && categories.map((c, i) => (<option key = {i} value={c._id}>{c.name}</option>)) }
               </select>
            </div>
         <br></br> <br></br>
            <div>
               <label>Shipping</label> 
               <select onChange={handleChange('shipping')}  >
               <option>Please Select</option>
                <option value='0'>No</option>
                <option value='1'>Yes</option>
               
               </select>
            </div>
            <br></br> <br></br>
            <div>
               <label>Quantity</label> 
               <input onChange={handleChange('quantity')} type='number' value={quantity} ></input>
            </div>
            <br></br> <br></br>
         <button>Submit</button>
            </form>
        }
        const showError = () => {
          return <div style={{display: error ? '' : 'none'}}> {`${error} `}</div>
        }

        const showSuccess = () => {
         return <div style={{display: createdProduct ? '' : 'none'}}> {`${createdProduct} is created`} </div>
       }

       const showLoading = () => 
         loading && (
            <div>
               <h2>Loading...</h2>
            </div>
         )

    return (
        <div>
             <Layout title='Add new Product' description={`G'day ${user.name}`}>
      {showLoading()}
      {showError()}
      {showSuccess()}
    {newPostForm()}

</Layout>
        </div>
    )
}


export default AddProduct