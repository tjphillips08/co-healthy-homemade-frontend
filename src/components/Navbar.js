import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg" className='py-5'>
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://i.imgur.com/88AlrS5.jpg" 
            className='logo'
            alt="" 
            height="90" 
            width="90"
            
            
            />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Register
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
    )
  }
  
  export default Navigation;