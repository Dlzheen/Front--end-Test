import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navv = () => {
  return (
    <Navbar bg="light" expand="lg" style={{padding: '0.5rem 1rem'}} className='navv'>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " style={{ padding : '0px', margin: '0px'}}>
            <Nav.Link href="#" style={{paddingLeft: '0px', paddingRight : 'px'}}>jewellery and accessories</Nav.Link>
            <Nav.Link href="#" style={{paddingLeft: 'px', paddingRight : 'px'}}>Clothing and Shoes</Nav.Link>
            <Nav.Link href="#" style={{paddingLeft: 'px', paddingRight : 'px'}}>Home and Living</Nav.Link>
            <Nav.Link href="#" style={{paddingLeft: 'px', paddingRight : 'px'}}>Wedding and Party</Nav.Link>
            <Nav.Link href="#" style={{paddingLeft: 'px', paddingRight : 'px'}}>Toys and Entertainment</Nav.Link>
            <Nav.Link href="#" style={{paddingLeft: 'px', paddingRight : 'px'}}>Art and Collectibles</Nav.Link>
             <Nav.Link href="#" style={{paddingLeft: 'px', paddingRight : '0px'}}>Craft Supplies and Tools</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navv;
