import { useReducer } from "react"
import { createContext } from "react"
import { WOMENS_PAGE,MENS_PAGE,KIDS_PAGE,UNMOUNT_WOMENS_PAGE,UNMOUNT_MENS_PAGE,UNMOUNT_KIDS_PAGE,
    WOMENS_DETAILS_PAGE_REQUEST,WOMENS_DETAILS_PAGE_SUCCESS,WOMENS_DETAILS_PAGE_FAILURE

} from "./action"

import reducer from "./reducer"

export const AuthContext=createContext()

const allpageauth={
    isWomenspage:false,
    isMenspage:false,
    isKidspage:false,
    isWomensdetailspagedatalodaing:false,
    isWomensdetailspagedataerror:false
}

function AuthContextProvider({children}){
    const [state,dispatch]=useReducer(reducer,allpageauth)
   
    return (
        <>
        <AuthContext.Provider value={{state,dispatch,WOMENS_PAGE,
            MENS_PAGE,KIDS_PAGE,UNMOUNT_WOMENS_PAGE,
            UNMOUNT_MENS_PAGE,UNMOUNT_KIDS_PAGE,WOMENS_DETAILS_PAGE_REQUEST,
            WOMENS_DETAILS_PAGE_SUCCESS,WOMENS_DETAILS_PAGE_FAILURE}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider