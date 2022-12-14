
 import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../allpagecontext/Allpagecontext"

 const checkalreadyexistdata=()=>{
    let check=GetCartdata()
    .then((res)=>{
        return res.data
    })
    return check

 }

 export const Addtocart=(data)=>{
  
    let filtered=checkalreadyexistdata()

   if(filtered.id===data.id){
    return;
   }

 return  (
    axios.post(`http://localhost:3008/CART`,{
    image_url:data.image_url[0],
    name:data.name,
    price:data.price,
    description:data.description,
    id:data.id,
    quantity:data.quantity
  })
 )
 }

 export const GetCartdata=()=>{
 return  axios.get(`http://localhost:3008/CART`)
 }

 export const Putqty=(qty,id)=>{
   return axios.patch(`http://localhost:3008/CART/${id}`,{
        quantity:Number(qty)
    }, {
        headers: { 'Content-type': 'application/json' }
    })
   
 }

 export const getqtydata=()=>{
    return axios.get(`http://localhost:3008/CART`)
 }
 
 
 export const getchangetotalprice=(id)=>{
    return axios.get(`http://localhost:3008/CART/${id}`)
 }

 export const removefromcart=(id)=>{
    return axios.delete(`http://localhost:3008/CART/${id}`)
 }

 // add userdata sign up

 export const adduserdata=(data)=>{
    return axios.post(`http://localhost:3008/userdata`,{
        name:data.name,
        email:data.email,
        password:data.password,
        address:data.address
    })
 }

 export const getuserdata=()=>{
    return axios.get(`http://localhost:3008/userdata`)
 }