
 import {Routes,Route} from "react-router-dom"
import Login from "../components/Loginpage"
import WomensDetails from "../insidewomenspage/womensdetails"
import KidsPage from "../Pages/Kidspage"
import Menspage from "../Pages/Menspage"
import Womenspage from "../Pages/womenspage"
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
            <Route path="/singleproduct" element={<Singleproductpage />}></Route>

         </Routes>
         </>
    )
 }
 export default AllRoutes