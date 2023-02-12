import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const Home=()=>{
  const navigate=useNavigate()
    return(
        <>
       
        <div className="home d-flex justify-content-center align-items-center" style={{gap:"20px"}}>
            <h1 className="heading">HenaWeather</h1>
          
          <div><Button variant="outline-light" className="btn-sm btn-explore" onClick={()=>{
            navigate("/res")
          }} >
            Explore<span><i className="ml-2 bi bi-arrow-right-circle-fill"></i></span></Button></div>





        </div>
   
          </>
    )
}
export default Home