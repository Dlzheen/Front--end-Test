
import {Container, Col, Row, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 
const Featured = () => {
    return (
       <Container fluid >
       <div className='features-sec' style={{justifyContent: 'center'}}  > 

       <Container style={{justifyContent: 'center'}}>
      
      <Row className="justify-content-md-center" style={{justifyContent: 'center'}}>
        <Col className="text-center" style={{  padding: '15px', display: 'flex', justifyContent: 'center'}} ></Col>
        <Col xs={5}></Col>
        <Col style={{  padding: '100px', display: 'flex', justifyContent: 'center'}}>
        <div>
        <h1 className='text-white'>Perfumes</h1>
        <p className='text-white'>Lorem ipsum dolor sit amint obcaecati blanditiis deleniti eius?</p>
        <Button variant='light'>See Collecion</Button>
        </div>
        </Col>
      </Row>
    </Container>
       
       </div>
    
       </Container>
  );
}

export default Featured;



