
 import {Routes,Route} from "react-router-dom"
import Cart from "../cart/cart"
import Login from "../components/Loginpage"
import Signup from "../components/signup"
import WomensDetails from "../insidewomenspage/womensdetails"
import { Notfound } from "../notfoundpage"
import KidsPage from "../Pages/Kidspage"
import Menspage from "../Pages/Menspage"
import Womenspage from "../Pages/womenspage"
import PrivateRoute from "../privateroute/privateroute"
import Singleproductpage from "../singleproductpage/singleproductpage"
 function AllRoutes(){
    return (
         <>
         <Routes>
            <Route path="/" element={<Womenspage />}></Route>
            <Route path="/mens" element={<Menspage />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/kids" element={<KidsPage />}></Route>
          <Route path="/womensdetails/:el" element={<WomensDetails />}></Route>
            <Route path="/singleproduct/:id" element={<Singleproductpage />}></Route>
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/womensdetails" element={<WomensDetails />}></Route>
            <Route path="*" element={<Notfound />}></Route>
         </Routes>
         </>
    )
 }
 export default AllRoutes