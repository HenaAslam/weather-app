import { useState } from "react"




const TimeandDate=(props)=>{


// eslint-disable-next-line no-unused-vars
const [time, setTime]= useState(Date().toLocaleString())



    return(
        <>
    



    


  <h6 className="ml-5"><strong>{time}</strong></h6>
 


        
        </>
    )
}
export default TimeandDate