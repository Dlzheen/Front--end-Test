import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbarr = () => {
    return ( 

        <Navbar bg="light" dir="rtl" style={{padding: '0rem 0.5rem'}} className='navv'>
        
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <span> Account&nbsp; </span> <span><FontAwesomeIcon icon={faUser} /></span>
            </Nav.Link>
          <Nav.Link href="#">
          <span> Shopping &nbsp; </span> <span><FontAwesomeIcon icon={faShoppingCart} /></span>
          </Nav.Link>
        </Nav>

        <Nav className="mx-auto">
            <span style={{fontSize: 'large'}}>
            CORAL
            </span>
        
        </Nav>
        <Nav>
          <Nav.Link href="#about">
         <FontAwesomeIcon icon={faSearch} />
      </Nav.Link>
        </Nav>
      </Navbar>
    );
  };

   
 
export default Navbarr;