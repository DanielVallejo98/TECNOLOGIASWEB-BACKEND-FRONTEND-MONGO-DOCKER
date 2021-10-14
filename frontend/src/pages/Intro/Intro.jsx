import React from 'react'
import { Carousel,Navbar,Nav,NavDropdown,Form } from "react-bootstrap";
import './Intro.scss'
import Footer from '../../components/Footer/Footer.jsx'
import {Link} from "react-router-dom";
function Intro() {
    return (
        <>
        <header style={{backgroundColor:'#85DCFF'}}>
            <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="/"  ><i className="fas fa-vial fa-2x" style={{color:'rgba(255,255,255,1)'}}></i><h2 className="pl-3" style={{display:'inline-block',fontWeight:'600'}}>Sistema LIS</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                
                <NavDropdown title="Acciones" id="navbarScrollingDropdown" bg="transparent">
                    <NavDropdown.Item href="#action3">Preguntas frecuentes</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Comunícate con un asesor</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Solicta una cita</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <Nav>
                    <Link to="/loginbac" className="m-1">Iniciar Sesión</Link>
                    <Link to="/loginpatient" className="m-1"> Consulta Resultados</Link>
                </Nav>            
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </header>
        <div>
            <Carousel  fade>
                <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 resize"
                    src="./img/login1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={{color:'#000', backgroundColor:'rgba(255,255,255,0.6)'}}>
                    <h3>Consulta de Resultados</h3>
                    <p>Si eres paciente, consulta tus resultados con tu documento de identificación.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 resize"
                    src="./img/login2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption style={{color:'#000', backgroundColor:'rgba(255,255,255,0.6)'}}>
                    <h3>Ingresa el sistema de datos LIS</h3>
                    <p>Si perteneces al personal médico registrado a este sistema, puedes ingresar con tu correo y contraseña.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 resize"
                    src="./img/login3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption style={{color:'#000', backgroundColor:'rgba(255,255,255,0.6)'}}>
                    <h3>Consulta estadísticas del perfil de calidad</h3>
                    <p>Si perteneces al personal médico registrado a este sistema, puedes ingresar con tu correo y contraseña.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        <Footer>

        </Footer>
        
        </>
    )
}

export default Intro
