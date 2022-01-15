 import {Add_To_Cart} from '../constant'
 
 const initialState = {
     cardData:[]


 }
 function cardItems(state=initialState,action){

    switch(action.type){
        case Add_To_Cart:
            return{
                ...state,
                cardData:action.data
            }
            break;
        default:
            return state

    }

 }