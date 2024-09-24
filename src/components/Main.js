import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag  } from '@fortawesome/free-solid-svg-icons';

import { Card, Container, Col, Row,Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const Main = () => {

  
    return ( 
      <div >

        <Container className='bg-light' fluid>
          <Container>   

        <Row className="justify-content-md-center" >

        <Col className="text-center" style={{  padding: '15px', display: 'flex', justifyContent: 'center'}}>
        <Card className='bg-light' style={{ display: 'flex', justifyContent: 'center',border: 'none'}}>
      <Card.Header className='bg-light' style={{border: 'none', textAlign: 'left'}}>
          <Card.Title>Collections</Card.Title>
        <Card.Text>
          You can explore and Shope many different collections from various brands here. 
        </Card.Text>
        <Button variant="dark"><span><FontAwesomeIcon icon={faShoppingBag } /></span>&nbsp;Shop Now</Button></Card.Header>
      
    </Card>

        </Col>

        <Col  className="text-center" style={{ padding: '15px'}}>
    
        <Image src="https://images.unsplash.com/photo-1726591383725-59f0d79a6a5d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
         className='main-img' rounded />

       
        </Col>
        
       
      </Row>
      </Container>
        </Container>
    
    </div>
        
    );
}
 
export default Main;




