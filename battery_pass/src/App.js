import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo1.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        B A T T E R Y &ensp; P A S S
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">ABOUT</Nav.Link>
          <Nav.Link href="#pricing">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div className="App">
      <div style={{backgroundImage: "url(bus2.png)", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '60vh'}}>
      <Container>
        <Row>
          <Col md={5}>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1 style={{color: "lightgray"}}><b>Battery Pass</b></h1>
            <br/>
            <h6 style={{color: "lightgray"}}><b>Applying for Grants, Made Easy!</b></h6></Col>
          <Col md={7}></Col>
        </Row>
      </Container>
      </div>
    </div>
    
    </>
  );
}

export default App;
