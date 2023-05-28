import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">COSERTEC SAS</Navbar.Brand>
          <Nav className="me-auto gap-3 pl-3">
            <Link to='/'> Inicio </Link> 
            <Link to='/reports'> Informes </Link>
            {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;