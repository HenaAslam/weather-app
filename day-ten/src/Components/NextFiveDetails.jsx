
import { ListGroup, } from "react-bootstrap"

const NextFiveDetails=(props)=>{

    
    const KtoC=(k)=>{
        return parseInt(k-273.15)
        }
    return(
        <>
    
            <ListGroup.Item>Date: {props.details.dt_txt} Temperature: {KtoC(props.details.main.temp)}°C</ListGroup.Item>
          
  
  
  </>
    )
}
export default NextFiveDetails