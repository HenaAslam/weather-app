import{Row,Col,Card} from 'react-bootstrap'


const Cards=(props)=>{
    const KtoC=(k)=>{
        return parseInt(k-273.15)
        }
    return(
<Row className="details-cards">


    <Col xs={3}>
    <Card  >
  <Card.Body>
   <h6><i className="bi bi-thermometer-high"></i>FEELS LIKE</h6>
    <h2> {KtoC(props.city.main.feels_like)} °C</h2>
    
  </Card.Body>
</Card>
</Col>


<Col xs={3}>
    <Card  >
  <Card.Body>
   <h6><i className="bi bi-moisture mr-1"></i>Humidity</h6>
    <h2> {props.city.main.humidity}%</h2>
    
  </Card.Body>
</Card>
</Col>



<Col xs={3}>
    <Card  >
  <Card.Body>
   <h6><i className="bi bi-cloud-haze mr-1"></i>Pressure</h6>
    <h2> {props.city.main.pressure}hpa</h2>
    
  </Card.Body>
</Card>
</Col>

<Col xs={3}>
    <Card  >
  <Card.Body>
   <h6><i className="bi bi-wind mr-1"></i>Wind</h6>
    <h2> {props.city.wind.speed}m/s</h2>
    
  </Card.Body>
</Card>
</Col>
</Row>
    )
}
export default Cards