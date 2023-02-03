import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


import React, { Component } from "react";
import { Footer } from './Footer';
import { NavigationBar } from './NavigationBar';

export class Home extends Component {
    render() {
        return (
            <>
            <NavigationBar/>
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
                    <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={6}>
                        <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <Button>Learn More</Button>
                            </div>
                            <div className="flip-card-back">
                                <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                </Form.Group>
                                </Form>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Home;