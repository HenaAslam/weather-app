import { Container, Row ,Col} from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFound=()=>{
return(
 <Container className="mt-5">
    <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="mt-5 err">
            <h1 >404 error</h1>
            <h6 className="mt-4">Seems like you've lost your way...<i className="bi bi-emoji-frown"></i></h6>
            {/* <h6 className="mt-4">This page doesn't exist</h6> */}
            <h6 className="mt-4">Would you like to go back to 
            <Link to="/">
            <span style={{color:" #c1593f"}} className="ml-2">Home</span>
            </Link>
            </h6>
        </Col>
    </Row>
 </Container>
)

}
export default NotFound