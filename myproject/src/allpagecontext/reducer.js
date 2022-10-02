

function reducer(state,action){
   switch(action.type){
    case "womens_page":
         return {
           ...state,
           isWomenspage:true,
           isNothomepage:false,
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
                    isWomenspage:false,
                    isNothomepage:true
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
                                    case "single_product_page_request":
                                        return {
                                            ...state,
                                            isSingleproductpageloading:true
                                        }
                                        case "single_product_page_success":
                                            return {
                                                ...state,
                                                isSingleproductpageloading:false
                                            }
                                      case "single_product_page_failure":
                                                return {
                                                    ...state,
                                                    isSingleproductpageloading:false,
                                                    isSingleproductpageerror:true
                                                }
                             case "cart_data_request":
                                return {
                                    ...state,
                                    isCartdataloading:true
                                }  
                                case "cart_data_success":
                                    return {
                                        ...state,
                                        isCartdataloading:false,
                                        isCartdataerror:false
                                    }   
                               case "cart_data_failure":
                                return {
                                    ...state,
                                    isCartdataloading:false,
                                    isCartdataerror:true
                                }                   
                                      
   }
}
export default reducer