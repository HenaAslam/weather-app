import { Navbar, Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
const NavbarComponent=()=>{
return(
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Navbar.Brand href="#">HenaWeather</Navbar.Brand>
 





  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">

      <Link to='/'>
        <div className="nav-link">Home</div>
    
      </Link>
      <Link to='/'>
        <div className="nav-link">Back</div>
    
      </Link>
    </Nav>
   
  </Navbar.Collapse>



  
</Navbar>
)
}
export default NavbarComponent

