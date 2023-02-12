
import { Col,Card} from "react-bootstrap"
import { parseISO, format } from 'date-fns'


const NextFiveDetails=(props)=>{


  
    const KtoC=(k)=>{
        return parseInt(k-273.15)
        }
    return(
        <>
 

          <Col xs={6} md={3} className="mb-2">
          <Card border="warning" >
        
    <Card.Body>
    <h2> {KtoC(props.details.main.temp)}°C</h2>
          <h6 > {(props.details.weather[0].description)}°C</h6>
          <h6 >  {format(parseISO(props.details.dt_txt), "EEE, MMM do H '`o` clock'")}</h6>
    </Card.Body>
  </Card>

          </Col>
  
  
  </>
    )
}
export default NextFiveDetails