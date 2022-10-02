import { Box, CircularProgress, Container, 
    Flex, Grid, GridItem, Heading,Image, Spacer, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../allpagecontext/Allpagecontext";
import { Womendetailsapi } from "./womendetailsapi";
import womensdetailsstyles from "../insidewomenspage/womensdetails.module.css"
 

 function WomensDetails(){
    const {state,dispatch,WOMENS_DETAILS_PAGE_REQUEST,WOMENS_DETAILS_PAGE_SUCCESS,WOMENS_DETAILS_PAGE_FAILURE}=useContext(AuthContext)
    const [data,setdata]=useState([])
    const params=useParams()
    const navigate=useNavigate()
    console.log(`params`,params);

    useEffect(()=>{
      handlegetdetailsdata(params)
    },[])

    const handlegetdetailsdata=(params)=>{
       
        dispatch(WOMENS_DETAILS_PAGE_REQUEST)
        Womendetailsapi(params.el)
        .then((res)=>{
           return   (
            setdata(res.data),
           dispatch(WOMENS_DETAILS_PAGE_SUCCESS)
           )
        })
        .catch((err)=>{
          return (
            console.log(err),
            dispatch(WOMENS_DETAILS_PAGE_FAILURE)
          )
        })
        .finally(()=>{
            return console.log(`call completed`)
        })
    }
    console.log(`dtatatatat`,data)
    
     if(state.isWomensdetailspagedatalodaing){
        return <Spinner  thickness='8px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl' 
        style={{position:"relative",top:"300px" }} />
     }
    return (
        <div style={{position:"relative",top:"300px" }}>
       

         <Box>
          <Grid w="full" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",
         lg:"repeat(3,1fr)" }} gap={6}>
            {data ?.map((el)=>{
                return <GridItem className={womensdetailsstyles.grid_box}
                p='4' rounded='md' bg='white' key={el.id}>
                    <Image onClick={()=> navigate(`/singleproduct/${el.id}`)}
                     cursor={"pointer"} src={el.image_url[0]}
                     alt={el.name} />
                   <Flex>
                    <Box>{el.name}</Box>
                    <Spacer />
                   <Box>Price : Rs {el.price}</Box>
                    </Flex>   
                
                </GridItem>
            })}
          </Grid>
          </Box>
        </div>
    )
 }
 export default WomensDetails