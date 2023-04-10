import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import Details from "./Details";
import { deleteAction, getweatherActionAsync } from "../redux/action";

import TimeandDate from "./TimeandDate";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Hamburg");
  // const [cities, setCities] = useState([]);

  const dispatch = useDispatch();

  const applicationSpinner = useSelector(
    (state) => state.weatherDetails.isLoading
  );
  const applicationError = useSelector((state) => state.weatherDetails.isError);

  const handleSubmit = (event) => {
    event.preventDefault();
    setWeather({});

    // fetchWeather();

    dispatch(getweatherActionAsync(city));

    setCity("");
  };
  const weatherFromReduxStore = useSelector(
    (state) => state.weatherDetails.wea
  );
  const handleDelete = (i) => {
    let newCities = weatherFromReduxStore;
    newCities = [...newCities.slice(0, i), ...newCities.slice(i + 1)];

    // setCities(newCities);
    dispatch(deleteAction(newCities));
  };

  return (
    <>
      <div className="text-center mt-4">
        {applicationSpinner && <Spinner animation="border" variant="success" />}
      </div>
      <div className="text-center mt-4">
        {applicationError && (
          <Alert variant="danger">Something's wrong..😒</Alert>
        )}
      </div>
      <h2 className="main-title mb-4 ml-5 mt-5">Weather in your city</h2>
      <TimeandDate city={weather} />
      <hr></hr>
      <Container fluid className=" jumbotron">
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
                  <Button
                    variant="primary"
                    type="submit"
                    className="submit rounded-pill"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      {applicationError && (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p className="text-danger">{applicationError.message}</p>
          </Col>
        </Row>
      )}

      {weather.message === "city not found" && (
        <Alert variant="warning">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Enter a valid city to see the weather. Please refresh to continue!
            :)
          </p>
        </Alert>
      )}
      {/* {weatherFromReduxStore.length>0 && (
   
      )} */}
      {weatherFromReduxStore.length > 0 ? (
        <>
          {weatherFromReduxStore.map((cityData, index) => (
            //  <Details city={weather} />

            <Details
              key={index}
              city={cityData}
              delete={handleDelete}
              del={index}
            />
          ))}
        </>
      ) : (
        <Alert variant="success" className=" text-center">
          Please enter a city name to see the weather details
        </Alert>
      )}
    </>
  );
};

export default Weather;
