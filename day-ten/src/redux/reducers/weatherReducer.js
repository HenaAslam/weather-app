

import { GET_WEATHER, GET_WEATHER_ERROR, GET_WEATHER_LOADING, DELETE } from "../action"

const initialState = {
    wea:[],
    isLoading:false,
    isError:false
}
 const weatherReducer=(state=initialState, action)=>
 {
   switch(action.type){
    case  GET_WEATHER:
      return {
        ...state,
        wea:[].concat(action.payload,...state.wea)
      }

      
    
    case DELETE :
        return{
          ...state,
          wea:action.payload
        }
      
      case GET_WEATHER_LOADING:
        return{
          ...state,
          isLoading:action.payload
        }
        case GET_WEATHER_ERROR:
          return{
            ...state,
            isError:action.payload
          }


    default:
      return state
 }
 }

 export default weatherReducer