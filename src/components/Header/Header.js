import React from 'react'
import banner from "../../assets/images/Rick_and_Morty.png"
import {Container, Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.scss'

// Animaciones
import styled, { keyframes } from "styled-components";
import {tada} from "react-animations";
const TadaAnimation = keyframes`${tada}`;
const TadaDiv = styled.div`
  animation: infinite 6s ${TadaAnimation};
`;

function Header(){
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <TadaDiv>
                        <img
                        alt=""
                        src={banner}
                        width="130"
                        className="d-inline-block align-top"
                        />
                    </TadaDiv>{' '}
                    {/* The Rick and Morty API */}
                </Navbar.Brand>

                <Nav className="me-auto">
                {/* <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/">Features</Nav.Link> */}
                </Nav>
                
            </Container>
        </Navbar>
    );
}

export default Header