
 import axios from "axios"
  
 export const  Singleproductapi=(el)=>{
    return axios.get(`http://localhost:3008/NEW/${el}`)
 }