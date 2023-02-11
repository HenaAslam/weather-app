import {Row, Col, Container, Badge,Button,Spinner } from 'react-bootstrap'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Details=(props)=>{
        
  // const sunrise=new Date(props.city.sys.sunrise*1000)
  // const sunset=new Date(props.city.sys.sunset*1000)
  let sunrise=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(props.city.sys.sunrise*1000);
  let sunset=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(props.city.sys.sunset*1000);
const  sr = sunrise.split(',');
const  ss=sunset.split(",")



    const navigate=useNavigate()

    const getImage=(id)=>{
        if(id>=200 && id<=300){
          return <img src="https://cdn-icons-png.flaticon.com/512/17/17785.png" alt="thunder" height="50" width="50" />
        }
        if(id>=300 && id<=400){
            return <img src="https://static.thenounproject.com/png/3644167-200.png" alt="thunder" height="50" width="50" />
          }
         
          if(id>=500 && id<=600){
            return <img src="https://thumbs.dreamstime.com/b/rain-icon-trendy-flat-style-isolated-grey-background-cloud-rain-symbol-your-web-site-design-logo-app-ui-modern-fore-rain-203778809.jpg" alt="thunder" height="50" width="50" />
          }
          if(id>=600 && id<=700){
            return <img src="https://www.shutterstock.com/image-vector/simple-black-snowflake-rounded-corners-260nw-1500901745.jpg" alt="thunder" height="50" width="50" />
          }
          if(id>=700 && id<=799){
            return <img src="https://previews.123rf.com/images/bsd555/bsd5552004/bsd555200402487/145638969-fog-blue-rgb-color-icon-foggy-weather-meteorological-forecast-atmosphere-humidity-natural-phenomenon.jpg" alt="thunder" height="50" width="50" />
          }
          if(id===800){
            return <img src="https://cdn-icons-png.flaticon.com/512/3222/3222794.png" alt="thunder" height="50" width="50" />
          }
          if(id>=801 && id<=900){
            return <img src="data:image/png;base64,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" alt="thunder" height="50" width="50" />
          }

    }
   

    const KtoC=(k)=>{
        return parseInt(k-273.15)
        }
      
      

    return(
       

           

         (
          <>
         <div className="text-center mt-4">{props.load&& (  <Spinner animation="border" variant="warning" />)}</div>


            <Container className='mt-5 pb-4 mb-2' style={{borderBottom:"1px solid grey"}}>
 <Row className="justify-content-md-center">
              <Col xs={2} className="mt-2">
               {getImage(props.city.weather[0].id)}
            </Col>

            <Col xs={6} >
            
           
          
          <Link to={'/details/' + [[props.city.coord.lat ,props.city.coord.lon]]}>
                <h6 className='city'>
                    {props.city.name},{props.city.sys.country} <em style={{color:"black"}}>{props.city.weather[0].description}</em>
                 </h6>
                 </Link>
                <Badge variant="dark">{KtoC(props.city.main.temp)}°C</Badge>
                <span className='ml-2 degree'>temperature varies from {KtoC(props.city.main.temp_min)}°C to {KtoC(props.city.main.temp_max)}°C, wind {props.city.wind.speed}  m/s, clouds {props.city.clouds.all} %</span>
             <p className='degree mt-2'>Geo coords [<span style={{color:"#e96e50"}}>{props.city.coord.lat},{props.city.coord.lon}</span> ]</p>
              <p className='degree ' >Humidity: {props.city.main.humidity}%</p>
              <p className='degree '>Feels like: {KtoC(props.city.main.feels_like)} °C</p>
             
              {/* {console.log(new Date(props.city.sys.sunrise*1000))} */}
               <div className="mb-5">
                
                <Badge variant="warning">Sunrise:{sr[1]}</Badge> 
               <Badge variant="secondary" className='ml-5' >Sunset:{ss[1]}</Badge>
               
               
               </div>  
              <Button variant="outline-dark " className="btn-sm mb-5 submit ml-0" onClick={()=>{
               navigate('/details/'+[props.city.coord.lat,props.city.coord.lon])
              }}>More info</Button>
                 <Button variant="outline-dark " className="btn-sm mb-5 submit ml-3" onClick={(e)=>{
                

      props.delete(props.del)
       }}>Delete</Button>
       

            </Col>
            
            <Col xs={4} className="mt-2 mr-md-n5">
               <div className="anim mb-5">
                {/* {getGif(KtoC(props.city.main.temp))} */}
                {getImage(props.city.weather[0].id)}
                </div>
            </Col>


          </Row>
          <Cards city={props.city}/>
            </Container>

           
            </>


          )


   )
   
}
export default Details