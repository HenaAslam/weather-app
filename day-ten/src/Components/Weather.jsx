import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col,Alert } from "react-bootstrap";
 import Details from './Details'

//  import TimeandDate from "./TimeandDate"

const Weather = () => {

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Hamburg");
  const [error, setError] = useState(null);
  

  const handleSubmit =  (event) => {
    event.preventDefault();
    setWeather({});
    setError(null);
    fetchWeather();
};

useEffect(()=>{
    fetchWeather()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
const fetchWeather=async()=>{
    try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fe4d1536d77cdbc2bf8d6d7e5c8a79f`
        );
        const data = await response.json();
    
        setWeather(data);
        console.log(data)
      
     
    
      } catch (error) {
        setError(error);
       
      }
}
 
 

  return (
    <>

    <h2 className="main-title mb-4 ml-5 mt-5">Weather in your city</h2>
    <hr></hr>
    <Container fluid  className=" jumbotron">
      <Row className="justify-content-md-center">

   
        <Col xs={12} md={6}>
        <Form onSubmit={handleSubmit}>
            <Row>
            
                <Col xs={10}>

                    
              <Form.Control
              className="rounded-pill "
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />

                </Col>
                <Col xs={2}>

                <Button variant="primary" type="submit" className="submit rounded-pill">
              Submit
            </Button>
               
                </Col>
              
            </Row>
          
          
      
          


            </Form>
        </Col>
      </Row>
      </Container>
      {error && (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p className="text-danger">{error.message}</p>
          </Col>
        </Row>
      )}
         {/* if(data.){
        console.log("hello")
       } */}
       {weather.message==="city not found" && (<Alert variant="warning" >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
        Please enter a valid city to see the weather.
        </p>
      </Alert>)}
      {weather.name && (
        <>
        {/* <TimeandDate city={weather}/> */}
       <Details city={weather} />
        {/* <NextFive lat={lat} lon={lon} /> */}
        </>
      )}
       
    
    </>
  );
};

export default Weather;
