import { Box, Button, Container, Flex, Grid, GridItem, Heading, IconButton, Image, Spacer, Spinner, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { AuthContext } from "../allpagecontext/Allpagecontext"
import { GetCartdata, getqtydata, Putqty, removefromcart } from "./addtocartapi"
import womensdetailsstyles from "../insidewomenspage/womensdetails.module.css"
 
 function Cart(){
 const {state,dispatch,CART_DATA_REQUEST,CART_DATA_SUCCESS,CART_DATA_FAILURE} =useContext(AuthContext)
  const [mycart,setmycart]=useState([])
 const [qty,setqty]=useState(1) 
 const [totalprice,settotalprice]=useState(0)
 const [qtyloading,setqtyloading]=useState(false)

 useEffect(()=>{
        handlegetcartdata()
    },[qty])

    const handlegetcartdata=()=>{
        dispatch(CART_DATA_REQUEST)
        setqtyloading(true)
        GetCartdata()
        .then((res)=>{
            return (
                console.log(res),
                dispatch(CART_DATA_SUCCESS),
                setmycart(res.data),
                setqtyloading(false)
            )
        })
        .catch((err)=>{
            return (
                console.log(err),
                dispatch(CART_DATA_FAILURE).
                setqtyloading(false)
            )
        })
        .finally(()=>{
            return (console.log(`call completed`),
            state.isCartdataloading=false,
            setqtyloading(false)
            )
        })
    }
      
    const handleqtydec=(qty,id)=>{
        console.log(`qty`,qty)
        if(qty<=1){
            return deletecart(id)
        }
        else{
            setqtyloading(true)
       Putqty(Number(qty-1),id)
     setTimeout(()=>{
        return  getqtydata(id)
        .then((res)=>{
          return setqty(qty+1)
        })
     },1000)
      
        }
    }
     const handleqtyinc=(qty,id)=>{
        console.log(`qty`,qty)
        setqtyloading(true)
       Putqty(Number(qty+1),id)
     setTimeout(()=>{
        return  getqtydata(id)
        .then((res)=>{
          return setqty(qty+1)
        })
     },1000)
     }

     const deletecart=(id)=>{
        removefromcart(id)
        handlegetcartdata()
     }

    console.log(`my cart`,mycart)

    if(state.isCartdatalodaing){
        return <Spinner  thickness='8px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl' 
        style={{position:"relative",top:"300px" }} />
     }
    return (
        <>
        <div style={{position:"relative",top:"300px" }}>
       
     
     
      <Heading>Cart</Heading>
     
      
      
     
     

   <Container>
<Box>
 <Grid w="full" templateColumns={{base:"repeat(1,1fr)",md:"repeat(1,1fr)",
lg:"repeat(1,1fr)" }} gap={6}> 
   {mycart ?.map((el)=>{
       return <GridItem className={womensdetailsstyles.grid_box}
       p='4' rounded='md' bg='white' key={el.id}>
          <Flex >
           <Box><Text as="b">{el.name}</Text></Box>
           
           </Flex>  

          <Flex style={{justifyContent:"center",alignItem:"center"}}>
          <Image h="300px"
            cursor={"pointer"} src={el.image_url}
            alt={el.name} />
            <Spacer />
            <Box mt="60px" ml="15px">
                <Text as="b">Price : Rs {el.price}</Text>
                <Text align="left">{el.description}</Text>
                </Box>
          </Flex>
        
         <Box >
         <Button  onClick={()=>handleqtydec(el.quantity,el.id)} colorScheme='blue'>- </Button>
         <Button isLoading={qtyloading ? true : false} colorScheme='red'>{ el.quantity }</Button>
         <Button  onClick={()=>handleqtyinc(el.quantity,el.id)} colorScheme='blue'>+</Button>
         </Box>
       </GridItem>
   })}
 </Grid>
 </Box>
 </Container>

        </div>

        <div style={{position:"fixed",bottom:"0",border:"1px solid red",width:"30%",padding:"20px"
      }}>
       <Flex>
       <Text as="b" fontSize="2xl">Total Rs : 0</Text>
       <Spacer />
       <Button w="40%" colorScheme='whatsapp' bg="black">CONTINUE</Button>
       </Flex>
     </div>
     </>
    )
 }
 export default Cart