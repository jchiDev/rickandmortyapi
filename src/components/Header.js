import React from 'react'
import logo from "../assets/images/logo.jpg"
import banner from "../assets/images/banner.jpg"
import {Container, Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap'

function Header(){
    return(
        <Navbar bg="light" variant="light">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    The Rick and Morty API
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Buscar"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header