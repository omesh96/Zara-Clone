  import axios from "axios"
  
 export const  Womendetailsapi=(el)=>{
    return axios.get(` http://localhost:3008/${el}`)
 }