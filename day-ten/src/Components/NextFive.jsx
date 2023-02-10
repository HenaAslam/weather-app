import { useEffect , useState} from "react"
import NextFiveDetails from "./NextFiveDetails"
import { ListGroup , Container, Row, Col} from "react-bootstrap"

const NextFive=(props)=>{

    const[weather, setWeather]=useState({})

     useEffect(()=>{
      
        fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  

    const fetchWeather=async()=>{
        try {

            const response = await fetch(
              "https://api.openweathermap.org/data/2.5/forecast?lat="+props.lat+"&lon="+props.lon+"&appid=0fe4d1536d77cdbc2bf8d6d7e5c8a79f"
       
            );
            const data = await response.json();
      
            setWeather(data)    
            
          } catch (error) {
          console.log(error)
          }
    }



    return(

    weather.city && (
            <>

<Container className='mt-5'>
 <Row className="justify-content-md-center">
            <Col md="auto">
             <h6 className="next">Weather for next 5 days</h6>
             <ListGroup>
            
             {weather.list !== undefined && ( weather.list.map((w)=>


                <NextFiveDetails details={w}  key={w.dt}/>

)) }
            
             </ListGroup>
             </Col>
          </Row>
            </Container>
          
            </>
          )
   )
   
}
export default NextFive
