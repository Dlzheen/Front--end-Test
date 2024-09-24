import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Productslist = ({products, cat}) => {
    return (
       <Container >
        <Row>
           
            {products.map(product => (
               
                <Col>
               <Card className="m-2 bg-light" style={{ width: '12rem', border: 'none'}}  key={product.id}>
               <Card.Img variant="top" src={product.img} /> 

               <Card.Body>
                 <Card.Title style={{fontSize : '15px', textAlign: 'center'}}> {product.arabic}</Card.Title>
                 <div className="text-center">
                 <Button variant="light" style={{textAlign: 'center',fontSize : '15px'}}>Add to basket</Button>
                 </div>
               </Card.Body>
             </Card>
                </Col>
               
            
             ))}
        
        </Row>
        </Container>      
     );
}
 
export default Productslist;