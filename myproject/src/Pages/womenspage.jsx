import { AspectRatio, Box, Container, Image } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../allpagecontext/Allpagecontext"
import womensstyle from "../css/womenspage.module.css"
  
 const womenspageimages=["https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-y2k-collection/subhome-xmedia-38//w/1366/IMAGE-landscape-fill-8ffe5012-f7c5-486e-a66a-9c017f1c4ddc-default_0.jpg?ts=1663790133732",
   "https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-39//w/1366/IMAGE-landscape-fill-8a1ce69a-a1f6-4b5c-b04a-c3ea44664c19-default_0.jpg?ts=1663794685596",
  "https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/1366/IMAGE-landscape-fill-f5302ebb-2ddc-4218-81c2-eb0464c2d73f-default_0.jpg?ts=1663576361647",
"https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-38//w/1366/IMAGE-landscape-default-fill-5c2d5cc1-7805-42c8-9238-635ec71551d3-default_0.jpg?ts=1663770211821"]

  function Womenspage(){
    const {state,dispatch,WOMENS_PAGE,UNMOUNT_WOMENS_PAGE} =useContext(AuthContext)

    useEffect(()=>{
    dispatch(WOMENS_PAGE)
    console.log(`mounting womens page`)
    const unmountwomenspage=()=>{
      return (
        dispatch(UNMOUNT_WOMENS_PAGE),  // taki womens page unmount ho jaye
      console.log(`unmount women page`)
       )
    }
    return unmountwomenspage
    },[])

    return (
        <div className={womensstyle.womensdiv}>
         
         <Box boxSize='100%' top="0" >
  <Image src='https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1366/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159' alt='Dan Abramov' w="100%" />
</Box>


     <Box >
     <AspectRatio  ratio={3}  >
  <iframe 
    title='naruto'
    src='https://www.youtube.com/embed/5rTy4oouj4c'
    allowFullScreen
  />
</AspectRatio>
     </Box>

       <Box boxSize="100%" top="0">
       {womenspageimages.map((el,i)=>{
        return <Image key={i} src={el} alt={i} w="100%" />
       })}
       </Box>
     
        </div>
    )
  }
  export default Womenspage