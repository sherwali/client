import React, {useState, useEffect} from 'react'
import { isAunthenticated } from '../auth'
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'
import { createProduct } from './apiAdmin'

 const AddProduct = () => {
     const {user, token} = isAunthenticated()
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

      useEffect(() => {
         setValues({...values, formData: new FormData()})
      })

      const handleChange = name => event => {
         const value = name === 'photo' ? event.target.files[0] : event.target.value
         formData.set(name, value)
         setValues({...values, [name]: value})
      }

         const clickSubmit = (event) => {

         }
        const newPostForm = () => {
          return  <form onSubmit={clickSubmit}>

            <h4>Post Photo</h4>

           <div>
            <input onChange={handleChange('photo')} type='file' name='photo' accept='image/*' ></input>
            </div>

            <div>
               <label>Name</label> 
               <input onChange={handleChange('name')} type='text' value={name} ></input>
            </div>

            <div>
               <label>Description</label> 
               <textarea onChange={handleChange('description')} type='text' value={description} ></textarea>
            </div>

            <div>
               <label>price</label> 
               <input onChange={handleChange('price')} type='number' value={price} ></input>
            </div>

            <div>
               <label>Category</label> 
               <select onChange={handleChange('category')}  >

                <option value='60b2878fd2424108080e5f71'>node</option>
                <option value='60b28798d2424108080e5f72'>php</option>
                <option value='60b2879fd2424108080e5f73'>react</option>
                <option value='60b287b0d2424108080e5f74'>javascript</option>
               </select>
            </div>

            <div>
               <label>Shipping</label> 
               <select onChange={handleChange('shipping')}  >

                <option value='0'>No</option>
                <option value='1'>Yes</option>
               
               </select>
            </div>
            <div>
               <label>Quantity</label> 
               <input onChange={handleChange('quantity')} type='number' value={quantity} ></input>
            </div>

         <button type='submit'>Submit</button>
            </form>
        }

    return (
        <div>
             <Layout title='Add new Product' description={`G'day ${user.name}`}>

    {newPostForm()}

</Layout>
        </div>
    )
}


export default AddProduct