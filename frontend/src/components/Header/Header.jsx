import React from 'react'
import {Navbar,Nav,Form,Button } from "react-bootstrap";

function Header({loggedOut}) {
    return (
        <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/main" style={{color:'black'}}><strong>Sistema LIS</strong> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="/nuevopaciente">Ingresar nuevo paciente</Nav.Link>
            <Nav.Link href="/pacientes">Ver pacientes</Nav.Link>

            {/* <Nav.Link href="/nuevocontrolcalidad" >Realiza CC</Nav.Link>
            <Nav.Link href="/controlcalidad" >Consulta CC</Nav.Link> */}
            </Nav>
            <Form className="d-flex" onSubmit={loggedOut}>
            
            <Button variant="outline-danger" type="submit"><i className="fas fa-sign-out-alt fa-lg "></i></Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
            )
}

export default Header
