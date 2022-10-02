import { Button, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
 import { useNavigate } from "react-router-dom"

 export const Notfound=()=>{
    const navigate=useNavigate()
    return (
        <div style={{position:"relative",top:"350px" }}>
            <Heading>Soory this page is Not Found <br />
              you can go to <Link to="/">Womens Section</Link>
            </Heading>
            <Button onClick={()=>navigate("/")}>HOME PAGE</Button>
        </div>
    )
 }