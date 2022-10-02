 
 import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Container,
    Spacer,
    Box,
    HStack,
    Grid,
    Button,
    Text,
    Heading,
    useToast,
    Spinner,
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { useState } from 'react'
 import {NavLink, useNavigate} from "react-router-dom"
import { AuthContext } from '../allpagecontext/Allpagecontext'
import { getuserdata } from '../cart/addtocartapi'


  const initstate={
    email:"",
    password:""
  }
 function  Login(){
    const navigate=useNavigate()
  const [userdata,setuserdata]=useState(initstate)
  const toast = useToast()
 const [loginloading,setloginloading]=useState(false)
  const {state,dispatch,AUTHORISE_USER}=useContext(AuthContext)

   const handlechange=(e)=>{
 const {name,value}=e.target
 setuserdata({...userdata,[name]:value})
   }
 
   const handlesubmit=(e)=>{
    setloginloading(true)
    e.preventDefault()
    getuserdata()
    .then((res)=>{
       return checkcredentials(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
        return (
            console.log(`call completed`),
            setloginloading(false),
            setuserdata(initstate)
        )
    })
   }

  const checkcredentials=(data)=>{
   let filtered=data.filter((el)=>{
       return el.email===userdata.email && el.password===userdata.password
   })
     return finalcheck(filtered)
  }
   
  const finalcheck=(filtered)=>{
    if(filtered.length>0){
        return (
            toast({
                title: 'Login Successfull.',
                description: "Now You Can Shop",
                status: 'success',
                duration: 3000,
                isClosable: true,
              }),
              dispatch(AUTHORISE_USER)
        )
        } else{
        return toast({
         title: 'Wrong Credentials.',
         description: "Password Did Not Match",
         status: 'error',
         duration: 3000,
         isClosable: true,
       })
        }
  }
   
    console.log(`auth`,state.isAuth)
   console.log(`user data`,userdata)
    const {email,password}=userdata
  
  

    if(loginloading){
      return  <Spinner style={{position:"relative",top:"350px" }}
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    }
         if(state.isAuth){
          return  navigate("/cart")
         }

    return (
       
        <div style={{position:"relative",top:"250px",padding:"40px",width:"70%" }}>
          
          <HStack spacing='24px'>
             <Box>
              <form action="" onSubmit={handlesubmit}>
              <FormControl >
        <FormLabel>Email address</FormLabel>
      <Input type='email'placeholder='email' value={email} name="email" onChange={handlechange}  />

      <FormLabel>Password</FormLabel>
      <Input type='password'placeholder='password' value={password} name="password" onChange={handlechange} />
      <Text mt="20px">Dont Have an Account <NavLink style={{color:'teal',fontSize:"18px"}} to="/signup">Sign Up</NavLink> First</Text>
   <Input 
   cursor={"pointer"} type="submit" value="Login"  mt="30px" w="100%" colorScheme='whatsapp' bg="black" color="white" /> 
         </FormControl>
              </form>
             </Box>
<Spacer/>  
            <Box>
            <FormControl >
                <Heading align={"left"} as='h6' size='md'>REGISTER</Heading>
                <Text align={"left"} mt="20px"  >IF YOU STILL DON'T  HAVE A ZARA.COM ACCOUNT,<br /> USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</Text>
          <Text align={"left"} mt="20px">BY GIVING US YOUR DETAILS, PURCHASING IN <br /> ZARA.COM WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</Text>
          <Button align={"left"} mt="30px" w="80%" mr="90px" colorScheme='whatsapp' bg="black"
           onClick={()=>navigate("/signup")}
          >
            Create Account</Button>
 
</FormControl>
            </Box>
          </HStack >
        
                </div >
    )
 }
 export default Login