export const GET_WEATHER ="GET_WEATHER"
export const GET_WEATHER_LOADING="GET_WEATHER_LOADING"
export const GET_WEATHER_ERROR="GET_WEATHER_ERROR"
export const DELETE="DELETE"

export const getweatherActionAsync = (city) => {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type:GET_WEATHER_LOADING,
          payload:true
        })
        const resp = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fe4d1536d77cdbc2bf8d6d7e5c8a79f`
        )
        if (resp.ok) {
            const data = await resp.json();
            console.log(data)
            
          dispatch({
            type: GET_WEATHER,
            payload: data,
          })
          dispatch({
            type:GET_WEATHER_LOADING,
            payload:false
          })
        } else {
         
          dispatch({
            type:GET_WEATHER_LOADING,
            payload:false
          })
          dispatch({
            type:GET_WEATHER_ERROR,
            payload:true
          })
        }
      } catch (error) {
        console.log(error.message)
        dispatch({
          type:GET_WEATHER_LOADING,
          payload:false
        })
        dispatch({
          type:GET_WEATHER_ERROR,
          payload:true
        })
      }
    }
  }
  
  export const deleteAction=(newCities)=>{
    return{
      type:DELETE,
      payload:newCities
    }
  }