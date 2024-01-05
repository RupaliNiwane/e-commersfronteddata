 import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const selector = useSelector(state=>state);
  console.log(selector);
  return (
    <>
    
     {/* <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"> */}
    <Navbar className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      
        <Navbar.Brand href="/">Shopify.com</Navbar.Brand>
       
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
            <Nav.Link>
            <Link className='no-link' to='/home'>Home</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to='/order'>Order</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to='/contact'>Contact</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to='/shopping'>Shopping</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to='/'>CARD({selector.card.length})</Link>
            </Nav.Link>
    
            <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link>
            <Link className='no-link' to='/login'>Login</Link>
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        
        </Navbar.Collapse>
   
    </Navbar>
    {/* <div className='header-page '> 
         <img src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png' />
      </div> */}

       {/* </nav> */}
    </>
  );
}

export default Header;

