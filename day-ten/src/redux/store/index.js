import { configureStore,combineReducers } from '@reduxjs/toolkit'
import weatherReducer from '../reducers/weatherReducer'
 

const store = configureStore({
  reducer:combineReducers({
  weatherDetails:weatherReducer
})
})

export default store
