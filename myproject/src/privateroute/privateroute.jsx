import { useContext } from "react";
import { AuthContext } from "../allpagecontext/Allpagecontext";
import {Navigate} from "react-router-dom"

 function PrivateRoute({children}){
   const {state}=useContext(AuthContext)

   if(state.isAuth){
    return children
   }
   return <Navigate to="/login" />
 }
 export default PrivateRoute