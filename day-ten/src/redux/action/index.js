export const GET_WEATHER ="GET_WEATHER"

export const getweatherActionAsync = (city) => {
    return async (dispatch, getState) => {
      try {
        const resp = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fe4d1536d77cdbc2bf8d6d7e5c8a79f`
        )
        if (resp.ok) {
            const data = await resp.json();
            
          dispatch({
            type: GET_WEATHER,
            payload: data,
          })
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  
   
    //   setIsLoading(true)
  
        
    
     
      


// setIsLoading(false)

