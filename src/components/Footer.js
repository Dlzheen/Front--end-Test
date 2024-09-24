import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light  py-4">
        <Container>
            <Row style={{fontSize : 'small'}}>
                <Col >
                    <h1>CORAL</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                    
                </Col>
                <Col >
                    <h5>CATALOG</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" style={{textDecoration: 'none', color: '#404040'}}>Neklaces</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Hoodis</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >jewellery box</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >T-shirt</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Jacket</a></li>

                    </ul>
                </Col>
                <Col >
                    <h5>ABOUT US</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" style={{textDecoration: 'none', color: '#404040'}}>Our Producers</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Sitemap</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >FAQ</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >About Us</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Terms and Conditions</a></li>

                    </ul>
                </Col>
                <Col>
                <h5>CUSTOMER SERVICES</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" style={{textDecoration: 'none', color: '#404040'}}>Contact Us</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Track Your Order</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Product Care and Repair</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Book and Appointment</a></li>
                        <li><a href="#"style={{textDecoration: 'none', color: '#404040'}} >Shipping and Returns</a></li>

                    </ul>
                </Col>
            </Row>

            <Row className=" mt-3 bg-dark text-white" style={{fontSize: '15px', padding:'5px'}}>
                <Col><div >
              
              <span>&copy; 2022 CORAL,INC.</span>
              
          </div>
          </Col>
                <Col><div className=" text-center">
              
              <span>images go here.</span>
              
          </div></Col>
                <Col>
                <div className=" text-end">
              
              <span>Scroll to Up</span>
              
          </div>
                </Col>

            </Row>
        </Container>
    </footer>
    );
}
 
export default Footer;