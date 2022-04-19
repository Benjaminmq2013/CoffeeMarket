import { GET_CLIENT_DATA } from "./Types"

const CheckoutReducer = (state, action) =>{
    switch(action.type){
        case GET_CLIENT_DATA:{
          return state
        }        
        
        default:
        return state;
    }
}

export default CheckoutReducer