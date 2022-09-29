import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../allpagecontext/Allpagecontext"

function Menspage(){
    const {state,dispatch,MENS_PAGE,UNMOUNT_MENS_PAGE}=useContext(AuthContext)

    useEffect(()=>{
      dispatch(MENS_PAGE)
      console.log(`mount mens page`)
      const unmountmenspage=()=>{
        return dispatch(UNMOUNT_MENS_PAGE),
        console.log(`unmount mens page`)
        }
      return unmountmenspage
    },[])
    return (
        <>
         <h1>Mens Page</h1>
        </>
    )
}
export default Menspage