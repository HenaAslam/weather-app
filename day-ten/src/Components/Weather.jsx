import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
 import Details from './Details'
 import NextFive from "./NextFive";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const[lat,setLat]=useState('')
  const[lon,setLon]=useState('')

  const handleSubmit =  (event) => {
    event.preventDefault();
    setWeather({});
    setError(null);
    fetchWeather();
};

const fetchWeather=async()=>{
    try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fe4d1536d77cdbc2bf8d6d7e5c8a79f`
        );
        const data = await response.json();
       
        setWeather(data);
        setLat(data.coord.lat)
        setLon(data.coord.lon)
    
      } catch (error) {
        setError(error);
      }
}
 
 

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">

   
        <Col xs={12} md={6}>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs={9}>

                    
              <Form.Control
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />

                </Col>
                <Col xs={3}>

                <Button variant="primary" type="submit">
              Submit
            </Button>
               
                </Col>
              
            </Row>
          
          
      
          


            </Form>
        </Col>
      </Row>
      {error && (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p className="text-danger">{error.message}</p>
          </Col>
        </Row>
      )}
      {weather.name && (
        <>
       <Details city={weather} />
        <NextFive lat={lat} lon={lon} />
        </>
      )}
       
    </Container>
  );
};

export default Weather;
