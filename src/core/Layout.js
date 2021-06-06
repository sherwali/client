import  Menu  from './Menu'
import React from 'react'

 const Layout = ({title = 'Title', description = 'Description', children}) => {
    return (
        <div>
            <Menu />
           <h2>{title}</h2>
           <p>{description}</p> 
           <div>{children}</div>
           
        </div>
    )
}
export default Layout