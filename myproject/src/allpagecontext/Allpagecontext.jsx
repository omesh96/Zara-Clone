import { useReducer } from "react"
import { createContext } from "react"
import { WOMENS_PAGE,MENS_PAGE,KIDS_PAGE,UNMOUNT_WOMENS_PAGE,UNMOUNT_MENS_PAGE,UNMOUNT_KIDS_PAGE,
    WOMENS_DETAILS_PAGE_REQUEST,WOMENS_DETAILS_PAGE_SUCCESS,WOMENS_DETAILS_PAGE_FAILURE,
    SINGLE_PRODUCT_PAGE_REQUEST,SINGLE_PRODUCT_PAGE_SUCCESS,SINGLE_PRODUCT_PAGE_FAILURE,
    CART_DATA_REQUEST,CART_DATA_SUCCESS,CART_DATA_FAILURE

} from "./action"

import reducer from "./reducer"

export const AuthContext=createContext()

const allpageauth={
    isWomenspage:false,
    isMenspage:false,
    isKidspage:false,
    isNothomepage:false,
    isWomensdetailspagedatalodaing:false,
    isWomensdetailspagedataerror:false,
    isSingleproductpageloading:false,
    isSingleproductpageerror:true,

    isCartdataloading:false,
    isCartdataerror:false,

   
}

function AuthContextProvider({children}){
    const [state,dispatch]=useReducer(reducer,allpageauth)
   
    return (
        <>
        <AuthContext.Provider value={{state,dispatch,WOMENS_PAGE,
            MENS_PAGE,KIDS_PAGE,UNMOUNT_WOMENS_PAGE,
            UNMOUNT_MENS_PAGE,UNMOUNT_KIDS_PAGE,WOMENS_DETAILS_PAGE_REQUEST,
            WOMENS_DETAILS_PAGE_SUCCESS,WOMENS_DETAILS_PAGE_FAILURE,
            SINGLE_PRODUCT_PAGE_REQUEST,SINGLE_PRODUCT_PAGE_SUCCESS,SINGLE_PRODUCT_PAGE_FAILURE,
            CART_DATA_REQUEST,CART_DATA_SUCCESS,CART_DATA_FAILURE
           }}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider