import { Box, Button, ButtonGroup, Flex, Heading, Input, Spacer, Stack,Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, UnorderedList, ListItem } from '@chakra-ui/react'
import {HamburgerIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
  import styles from "../css/Navbar.module.css"
import { useContext } from 'react'
import { AuthContext } from '../allpagecontext/Allpagecontext'
import { useEffect } from 'react'

 const links=[
    {path:"/",title:`Women`},{path:"/mens",title:"Men"},{path:"/kids",title:"Kids"}
 ]
 const womenslinkdata=["NEW","BESTSELLERS","BASIC","SHOES","T-SHIRT","SKIRTS","JACKETS","ACCESSORIES","BAGS","PERFUMES","LEHNGA","SAREE","CHUNRI","TOPS","JEWELERY","HOODIES","SANDLES"]
 const menslinkdata=["NEW","BESTSELLERS","JACKET","SHIRTS","T-SHIRTS","JACKET","SHOES","TROUSERS","HOODIES","TRACKSUITS","SNEAKERS","GILETS","COAT","PANT","PERFUMES","ACCESSORIES","MENS-JEWELERY"]
 const kidslinkdata=["NEW","BESTSELLERS","SCHOOL-BAGS","BASIC","COAT","JACKETS","SWEATERS","ACCESSORIES"]

function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const {state,dispatch,WOMENS_PAGE} =useContext(AuthContext)
 
  
    return (
        <div className={styles.mobilenav}>
        <Flex  minWidth='max-content' alignItems='center' gap='2' >
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
    src={state.isNothomepage ? "https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo.png" :"https://www.freepnglogos.com/uploads/zara-brand/clothing-brand-zara-hd-zara-logo-2020-3.jpg"}
    alt='Dan Abramov'
  />
  </Box>
 </Stack>
   </Flex>
    </Box>


  <Spacer />
  <Box  mt="-20">
  <Flex gap="20" p="10">
  <Input type="text" placeholder='Search'   _placeholder={state.isNothomepage ? { color: 'black' } : { color: 'white' }}
   color={state.isNothomepage ? "black" : "gray"} />
  <ButtonGroup gap='4' >
   
   <Button color={state.isNothomepage ? "black" : "gray"} bg={state.isNothomepage ? "white" : "black"}><Link to="/login">Log in</Link></Button>
   <Button color={state.isNothomepage ? "black" : "gray"} bg={state.isNothomepage ? "white" : "black"}>Help</Button>
 </ButtonGroup>
  </Flex >
  </Box>

</Flex>
        </div>
    )
 }
 export default Navbar