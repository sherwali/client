import React from 'react'
import {API} from '../config'


 const ShowImage = ({item, url}) => {
    return (
        <div>
            <img src={`${API}/${url}/photo/${item._id}`}  alt={item.name} style={{maxWidth:'200px'}}></img>
        </div>
    )
}

export default ShowImage