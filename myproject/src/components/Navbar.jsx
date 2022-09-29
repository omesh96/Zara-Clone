import { Box, Button, ButtonGroup, Flex, Heading, Input, Spacer, Stack,Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, UnorderedList, ListItem } from '@chakra-ui/react'
import {HamburgerIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
  import styles from "../css/Navbar.module.css"
import { useContext } from 'react'
import { AuthContext } from '../allpagecontext/Allpagecontext'

 const links=[
    {path:"/",title:`Women`},{path:"/mens",title:"Men"},{path:"/kids",title:"Kids"}
 ]
 const womenslinkdata=["NEW","BESTSELLERS","BASIC","SHOES","T-SHIRT","SKIRTS","JACKETS","ACCESSORIES","BAGS","PERFUMES","LEHNGA","SAREE","CHUNRI","TOPS","JEWELERY","HOODIES","SANDLES"]
 const menslinkdata=["NEW","BESTSELLERS","JACKET","SHIRTS","T-SHIRTS","JACKET","SHOES","TROUSERS","HOODIES","TRACKSUITS","SNEAKERS","GILETS","COAT","PANT","PERFUMES","ACCESSORIES","MENS-JEWELERY"]
 const kidslinkdata=["NEW","BESTSELLERS","SCHOOL-BAGS","BASIC","COAT","JACKETS","SWEATERS","ACCESSORIES"]

function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const {state} =useContext(AuthContext)

   
    return (
        <div className={styles.mobilenav}>
        <Flex border={"1px solid black"} minWidth='max-content' alignItems='center' gap='2' >
  <Box p='10'>
   <Flex gap="4">


   <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
       
        <HamburgerIcon />

      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png?20190222225032"
          /></DrawerHeader>
          
          <DrawerBody>
           <Box >
            <Flex style={{display:"flex",justifyContent:"space-evenly"}}>
               {links.map((el)=>{
                return <NavLink className={({isActive})=>{
                    return isActive ? styles.active : styles.default
                  
                }}
                key={el.path} to={el.path} end >{el.title}</NavLink>
               })}
            </Flex>
           </Box>
         
           <Box>
          <UnorderedList>

        {state.isWomenspage && womenslinkdata.map((el,i)=>{
            return <ListItem key={i}><NavLink className={styles.navlink} 
             to={`/womensdetails/${el}`}>{el}</NavLink> </ListItem>
        })}

        {state.isMenspage && menslinkdata.map((el,i)=>{
            return <ListItem key={i}>{el}</ListItem>
        })}

        {state.isKidspage && kidslinkdata.map((el,i)=>{
            return <ListItem key={i}>{el}</ListItem>
        })}
 
</UnorderedList>
          </Box>
          </DrawerBody>

          
        


          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>







    <Stack direction='row'>
  <Box boxSize='200px'>
  <Image
    
    objectFit='cover'
    src='data:image/png;base64,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'
    alt='Dan Abramov'
  />
  </Box>
 </Stack>
   </Flex>
    </Box>


  <Spacer />
  <Box border={"1px solid black"} mt="-20">
  <Flex gap="20" p="10">
  <Input type="text" placeholder='Search'   _placeholder={{ color: 'white' }} />
  <ButtonGroup gap='4' >
   
   <Button colorScheme='white'>Log in</Button>
   <Button colorScheme='white'>Help</Button>
 </ButtonGroup>
  </Flex >
  </Box>

</Flex>
        </div>
    )
 }
 export default Navbar