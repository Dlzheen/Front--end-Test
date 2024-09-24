import { Container, Row, Col, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const BrndsList = ({brands}) =>  {
    let soursce = 'https://hs.msalla.com/';
  
return ( 
    <Container  >
        <Row className='brand-container'>
   
            
            {brands.map(brand => (
               <Col key={brand.id} style={{paddingTop : '3px', paddingBottom: '3px'}}>
                                           
                    <img 
                     src={soursce + brand.preview.content}
                     alt={brand.name}
                      style={{ width: '70px', height: 'auto' }}
                     />    
                </Col>
            
             ))}
        

        </Row>
        </Container>
     );
}
 
export default BrndsList;