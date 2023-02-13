

import { GET_WEATHER } from "../action"

const initialState = {
    wea:[]
}
 const weatherReducer=(state=initialState, action)=>
 {
   switch(action.type){
    case  GET_WEATHER:
      return {
        ...state,
        wea:[].concat(action.payload,...state.wea)
      }

      
      case "DELETE":
        return{
          ...state,
          wea:action.payload
        }


    default:
      return state
 }
 }

 export default weatherReducer