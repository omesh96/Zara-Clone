import { Alert, AlertDescription, AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertIcon, AlertTitle, Box, Button, Container, Flex, Grid, GridItem, Heading, IconButton, Image, Spacer, Spinner, Text, useDisclosure } from "@chakra-ui/react"
import { useContext, useRef, useState } from "react"
import { useEffect } from "react"
import { AuthContext } from "../allpagecontext/Allpagecontext"
import { GetCartdata, getchangetotalprice, getqtydata, Putqty, removefromcart } from "./addtocartapi"
import womensdetailsstyles from "../insidewomenspage/womensdetails.module.css"
import Totalpricecomponent from "../totalprice"
import {useNavigate} from "react-router-dom"
 
 function Cart(){
 const {state,dispatch,CART_DATA_REQUEST,CART_DATA_SUCCESS,CART_DATA_FAILURE} =useContext(AuthContext)
  const [mycart,setmycart]=useState([])
 const [qty,setqty]=useState(1) 
 const [totalprice,settotalprice]=useState(0)
 const [qtyloading,setqtyloading]=useState(false)
 const { isOpen, onOpen, onClose } = useDisclosure()
 const cancelRef = useRef()
 const [ispayment,setispayment]=useState(false)
 const navigate=useNavigate()

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
     
    useEffect(()=>{
        handletotalprice()
    },[])

    const handletotalprice=()=>{
     console.log(`my cart length`,mycart.length)
     return   getqtydata()
      .then((res)=>{
        return res.data.map((el)=>{
            settotalprice(prev=>prev+(el.price*el.quantity))
        })
      })
     }
       const handletotalpricedec=(id)=>{
        return   getchangetotalprice(id)
        .then((res)=>{
            return settotalprice(prev=>prev-res.data.price)
        })
       }

       const handletotalpriceinc=(id)=>{
        return   getchangetotalprice(id)
        .then((res)=>{
          return settotalprice(prev=>prev+res.data.price)
        })
       }


      console.log(`total price`,totalprice)
    const handleqtydec=(qty,id)=>{
        console.log(`qty`,qty)
        if(qty<=1){
            return deletecart(id)
        }
        else{
            setqtyloading(true)
       Putqty(Number(qty-1),id)
       .then((res)=>{
        return (
            console.log(`dhgfshgfd`,res),
            setqty(prev=>prev+1),
            handletotalpricedec(id)
        )
       })
      
        }
    }
     const handleqtyinc=(qty,id)=>{
        console.log(`qty`,qty)
        handletotalpriceinc(id)
        setqtyloading(true)
       Putqty(Number(qty+1),id)
        .then((res)=>{
            return (
                setqty(prev=>prev+1)
               
            )
        })
     }

     const deletecart=(id)=>{
        handletotalpricedec(id)
        removefromcart(id)
        .then((res)=>{
            return (
                setqty(prev=>prev+1),
                handletotalpricedec(id)
            )
        })
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

      if(ispayment){
          return <Alert style={{position:"relative",top:"300px" }}
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='400px'
        >
          <AlertIcon boxSize='30px' mr={0}  />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Payment Recieved
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            <Heading color="tomato">Thanks for Shopping With Us.</Heading> <br /> Our team will get back to you soon.
          </AlertDescription>
          
          <Button colorScheme='whatsapp' bg="black"  w="300px" mt="10px" onClick={()=>navigate("/")} >
            Keep Shopping</Button>
        </Alert>
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
       <Text as="b" fontSize="2xl">Total Rs : {totalprice}</Text>
       <Spacer />
       <Button w="40%" colorScheme='whatsapp' bg="black" onClick={onOpen}>CONTINUE</Button>
       </Flex>

       <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Cofirm Payment?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure  want to purchase all your item of cart 
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3} onClick={()=>setispayment(true)}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>




     </div>
     </>
    )
 }
 export default Cart