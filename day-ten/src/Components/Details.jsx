import {Row, Col, Container, Badge} from 'react-bootstrap'

const Details=(props)=>{
        

    const KtoC=(k)=>{
        return parseInt(k-273.15)
        }

    return(
       

           

         (
     

            <Container className='mt-5'>
 <Row className="justify-content-md-center">
            <Col md="auto">
                <h6 className='city'>{props.city.name},{props.city.sys.country} <em>{props.city.weather[0].description}</em> </h6>
                <Badge variant="dark">{KtoC(props.city.main.temp)}°C</Badge>
                <span className='ml-2'>temperature from {KtoC(props.city.main.temp_min)}°C to {KtoC(props.city.main.temp_max)}°C, wind {props.city.wind.speed}  m/s, clouds {props.city.clouds.all} %</span>
             <p>Geo coords [{props.city.coord.lat},{props.city.coord.lon} ]</p>
              <p>Humidity: {props.city.main.humidity}%</p>
              <p>Feels like: {KtoC(props.city.main.feels_like)} °C</p>
            </Col>
          </Row>
            </Container>

           
      
          )


   )
   
}
export default Details