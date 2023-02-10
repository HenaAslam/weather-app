import {Row, Col, Container} from 'react-bootstrap'

const Details=(props)=>{
        

    const KtoC=(k)=>{
        return parseInt(k-273.15)
        }

    return(
       

           

         (
     

            <Container className='mt-5'>
 <Row className="justify-content-md-center">
            <Col md="auto">
              <p>
                Current weather in {props.city.name}: {props.city.weather[0].description}
              </p>
              <p>Temperature: {KtoC(props.city.main.temp)}°C</p>
              <p>Humidity: {props.city.main.humidity}%</p>
              <p>Feels like: {KtoC(props.city.main.feels_like)} °C</p>
            </Col>
          </Row>
            </Container>

           
      
          )


   )
   
}
export default Details