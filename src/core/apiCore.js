import { API } from '../config'


// export const createCategory = (userId, token, category) => {
//     // console.log(name, email, password)
//  return   fetch(`${API}/category/create/${userId}`, {
//             method: "POST",
//             headers: {
//                 Accept: 'application/json',
//                 "content-type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(category)
//     })
//     .then(response => {
//         return response.json()
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }


// export const createProduct = (userId, token, product) => {
//     // console.log(name, email, password)
//  return   fetch(`${API}/product/create/${userId}`, {
//             method: "POST",
//             headers: {
//                 Accept: 'application/json',
              
//                 Authorization: `Bearer ${token}`
//             },
//             body: product
//     })
//     .then(response => {
//         return response.json()
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

export const getProducts = (sortBy) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}