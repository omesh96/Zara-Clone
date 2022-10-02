import { useEffect } from "react"
import { useState } from "react"

 function Totalpricecomponent({price,handletotalprice,quantity}){
   const [tp,settp]=useState(0)

   settp(prev=>prev+(price*quantity))

     useEffect(()=>{
        handletotalprice(tp,quantity)
     })
    return (
        <>
        
        </>
    )
 }
 export default Totalpricecomponent