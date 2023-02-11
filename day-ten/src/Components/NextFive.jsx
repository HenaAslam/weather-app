import { useEffect , useState} from "react"
import NextFiveDetails from "./NextFiveDetails"
import { Container, Row,Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"


const NextFive=(props)=>{


    const params = useParams()
    
    const  latAndlon = params.city.split(',');
console.log(latAndlon);
   
const[isLoading,setIsLoading]=useState(true)
    const[weather, setWeather]=useState({})

     useEffect(()=>{
      
        fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  

    const fetchWeather=async()=>{
        try {

            const response = await fetch(
              "https://api.openweathermap.org/data/2.5/forecast?lat="+latAndlon[0]+"&lon="+latAndlon[1]+"&appid=0fe4d1536d77cdbc2bf8d6d7e5c8a79f"
       
            );
            const data = await response.json();
            console.log(data)
            setIsLoading(false)
            setWeather(data)    
            
          } catch (error) {
          console.log(error)
          setIsLoading(false)
          }
    }



    return(
      

       

    weather.city && (
            <>



<Container className='mt-5'>
<h4 className="main-title">Forcast for next couple of hours. </h4>
<div className="text-center mt-4">{isLoading && (  <Spinner animation="border" variant="warning" />)}</div>
 <Row className="justify-content-md-center">
           


             {weather.list !== undefined && ( weather.list.map((w)=>


                <NextFiveDetails details={w}  key={w.dt}/>

)

          ) }
            

          </Row>
            </Container>
          
            </>
          )
   )
   
}
export default NextFive
