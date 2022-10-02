import { Box, Flex, Grid, Spacer, Text,Image, Divider,
     Button, useDisclosure, DrawerOverlay,
      DrawerContent, DrawerCloseButton,
       DrawerHeader, DrawerBody, Input, 
       DrawerFooter, Drawer, Container,
        TabList, Tab, Tabs, Spinner, useToast } from "@chakra-ui/react"

import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { useRef } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../allpagecontext/Allpagecontext"
import { Singleproductapi } from "./singleproductapi"
import {useNavigate} from "react-router-dom"
import { Addtocart } from "../cart/addtocartapi"

    
    function Singleproductpage(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const params=useParams()
    const [singleproduct,setsingleproduct]=useState({})
    const toast = useToast()
    const {state,dispatch,SINGLE_PRODUCT_PAGE_REQUEST,
        SINGLE_PRODUCT_PAGE_SUCCESS,SINGLE_PRODUCT_PAGE_FAILURE} =useContext(AuthContext)
       const navigate=useNavigate()
    

    console.log(`params`,params)

  useEffect(()=>{
      handlegetsingleproductdata(params)
  },[])

   const handlegetsingleproductdata=(params)=>{
    dispatch(SINGLE_PRODUCT_PAGE_REQUEST)
    Singleproductapi(params.id)
    .then((res)=>{
        return (
            console.log(`single product data`,res.data),
            setsingleproduct(res.data),
            dispatch(SINGLE_PRODUCT_PAGE_SUCCESS)
        )
    })
    .catch((err)=>{
        return (
            console.log(err),
            dispatch(SINGLE_PRODUCT_PAGE_FAILURE)
        )
    })
    .finally(()=>{
        return (
            console.log(`call completed`)
        )
    })
   }
 if(state.isSingleproductpageloading){
    return <Spinner  thickness='8px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl' 
    style={{position:"relative",top:"300px" }} />
 }
 
    return (
        <div style={{position:"relative",top:"200px" }}>
       

             <Box>
             <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",
         lg:"repeat(3,1fr)" }} gap={6} p="10">

    <Box  w="50%"  >
        <Box align="left"> <Text  as='b'>{singleproduct.name}</Text></Box>
        
        <Box mt="10" align="left" >{singleproduct.side_description}</Box>
        <Text  mt="10" align="left">{singleproduct.side_description}</Text>
    </Box>




    <Box  h="500px" bg='blue.500' scrollBehavior={`inside`} overflow="scroll"
      border={"1px solid red"} >
       <Box>
       {singleproduct.image_url ?.map((el)=>{
            return <Image src={el} />
        })}
       </Box>
    </Box>



    <Box   p="10" border={"1px solid red"} >
      <Text as="b">{singleproduct.name}</Text>
      <Text mt="10" align="left">{singleproduct.description}</Text>
         <Text mt="15" align="left">{singleproduct.price}</Text>
         <Text mt="4" align="left"> MRP incl. of all taxes</Text>

         <Divider mt="15" />
          <Container>
          <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>S</Tab>
    <Tab>M</Tab>
    <Tab>L</Tab>
    <Tab>XL</Tab>
    <Tab>XXL</Tab>
    
  </TabList>
 
</Tabs>
          </Container>
          <Divider  />
         <Flex>
       <Text>FIND YOUR SIZE</Text>
       <Spacer/>
       <Text>SIZE GUIDE</Text>
         </Flex>

          <Button mt="15" w="100%" bg="black" color="white"
           ref={btnRef} colorScheme='teal' 
          
           onClick={()=>{
            return (
                onOpen(),
                Addtocart(singleproduct),
               setTimeout(()=>{
                return  toast({
                    title: `${singleproduct.name} has been Added To your Cart`,
                    description: "Thank You !",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
               },1000)
            )
           }}

          >
            ADD TO BAG</Button>
            <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
           <Text fontSize='20px' color='tomato'>{singleproduct.name}</Text>
          
          <Container mt="20">
            <Image src={singleproduct.image_url ? singleproduct.image_url[0] : null} 
            alt="pic" />
            <Text>{singleproduct.price}</Text>
          </Container>
         
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={()=>navigate("/cart")} colorScheme='blue' bg="black" color="white">GO TO BASKET</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>






            <Text mt="5" align="left">Check in Store Availability</Text>
        <Text mt="3" align="left">Delivery Exchange and Returns</Text>
    </Box>


  </Grid>

             </Box>
        </div>
    )
 }
 export default Singleproductpage