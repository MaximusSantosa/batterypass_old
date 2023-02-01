import React, { Component } from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from "./Home";

export class NavigationBar extends Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
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
                    {/* <LinkContainer to="/"> */}
                    <Nav.Link href="/">HOME</Nav.Link>
                    {/* </LinkContainer> */}
                    {/* <LinkContainer to="/about"> */}
                    <Nav.Link href="/about">ABOUT</Nav.Link>
                    {/* </LinkContainer> */}
                    {/* <LinkContainer to="/contact"> */}
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                    {/* </LinkContainer> */}
                    </Nav>
                </Container>
                
            </Navbar>
            </>
        )
    }
}

export default NavigationBar;