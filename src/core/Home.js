import Card from './Card'
import React, { useEffect, useState }  from 'react'
import { getProducts } from './apiCore'
import Layout from './Layout'


 const Home = () => {

const [productsBySell, setProductsBySell] = useState([])
const [productsByArrival, setProductsByArrival] = useState([])
const [error, setError] = useState(false)
    
const loadProductsBySell = () => {
    getProducts('sold').then(data => {
        if(data.error){
            setError(data.error)
        } else {
           setProductsBySell(data) 
        }
    })
}

const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
        if(data.error){
            setError(data.error)
        } else {
           setProductsByArrival(data) 
        }
    })
}


useEffect(() => {

    loadProductsByArrival()
    loadProductsBySell()
    
}, [])
    return (
        <Layout title = "Home Page" description="description for home page">

        <h2>Best Selling</h2>
        {productsBySell.map((product,i) => (<Card key={i} product={product} />)) }

        <h2>New arrival</h2>
        {productsByArrival.map((product,i) => (<Card key={i} product={product} />)) }
        </Layout>
    )
}
 export default Home