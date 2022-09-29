

function reducer(state,action){
   switch(action.type){
    case "womens_page":
         return {
           ...state,
           isWomenspage:true
       }
       case "mens_page":
        return {
            ...state,
            isMenspage:true
        }
        case "kids_page":
            return {
                ...state,
                isKidspage:true
            }
            case "unmount_womens_page":
                return {
                    ...state,
                    isWomenspage:false
                }
                case "unmount_mens_page":
                    return {
                        ...state,
                        isMenspage:false
                    }
                    case "unmount_kids_page":
                        return {
                            ...state,
                            isKidspage:false
                        }
                        case "womens_details_page_request":
                            return {
                                ...state,
                                isWomensdetailspagedatalodaing:true
                            }
                            case "womens_details_page_success":
                                return {
                                    ...state,
                                    isWomensdetailspagedatalodaing:false
                                }
                                case "womens_details_page_failure":
                                    return {
                                        ...state,
                                        isWomensdetailspagedataerror:true,
                                        isWomensdetailspagedatalodaing:false
                                    }
   }
}
export default reducer