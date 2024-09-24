import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Productslist = ({products}) => {
    return (
       <Container >
        <Row className="justify-content-center align-items-center h-100">
           
            {products.map(product => (
               
                <Col  className="d-flex flex-column align-items-center">
                <div className="text-center">

               
               <Card className="bg-light mb-4" style={{ width: '12rem', border: 'none', margin : '10px 0px'}}  key={product.id}>
               <Card.Img variant="top" src={product.img} /> 

               <Card.Body>
                 <Card.Title style={{fontSize : '15px', textAlign: 'center'}}> {product.arabic}</Card.Title>
                 <div className="text-center">
                 <Button variant="light" style={{textAlign: 'center',fontSize : '15px'}}>Add to basket</Button>
                 </div>
               </Card.Body>
             </Card>
             </div>
                </Col>
               
            
             ))}
        
        </Row>
        </Container>      
     );
}
 
export default Productslist;