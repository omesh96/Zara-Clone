import { Button, Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../allpagecontext/Allpagecontext"

function Menspage(){
    const {state,dispatch,MENS_PAGE,UNMOUNT_MENS_PAGE}=useContext(AuthContext)

    const navigate=useNavigate()
    return (
        <div style={{position:"relative",top:"350px" }}>
            <Heading>Soory this page is under construction <br />
              meanwhile you can go to <NavLink style={{color:"blue"}}  to="/">Womens Section</NavLink>
            </Heading>
            <Button colorScheme='whatsapp' bg="black"  w="300px" mt="20px" onClick={()=>navigate("/")}>HOME PAGE</Button>
        </div>
    )
}
export default Menspage