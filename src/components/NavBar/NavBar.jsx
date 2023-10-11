import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" className="rounded">
        <Container>
          <Navbar.Brand href="/">ToDo</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Tasks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;