import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../allpagecontext/Allpagecontext"

function KidsPage(){
    const {state,dispatch,KIDS_PAGE,UNMOUNT_KIDS_PAGE}=useContext(AuthContext)

    useEffect(()=>{
        dispatch(KIDS_PAGE)
        console.log(`mount kids page`)
       const unmountkidspage=()=>{
        return dispatch(UNMOUNT_KIDS_PAGE),
        console.log(`unmount kids page`)
       }
       return unmountkidspage
    },[])
    return (
        <>
         <h1>Kids</h1>
        </>
    )
}
export default KidsPage