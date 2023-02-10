import { useState } from "react"
import { Container } from "react-bootstrap"



const TimeandDate=(props)=>{


// eslint-disable-next-line no-unused-vars
const [time, setTime]= useState(Date().toLocaleString())



    return(
        <>
    



    
  <Container>

  <h6>{time}</h6>
 

  </Container>
        
        </>
    )
}
export default TimeandDate