import React from 'react'
import './FormControl.scss'
import {Form,Button,Row,Col } from "react-bootstrap";
function FormControl() {
    
    return (
        <div>
            <Form>
            <div style={{display:'flex'}}>
            <Col>
            <h6 style={{textAlign:'center',color:'#fff'}} className="mb-3 subtitle">Nivel 1.</h6>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="COLESTEROLTOTAL1">
                    <Form.Label>Colesterol Total</Form.Label>
                    <Form.Control type="text" placeholder="Colesterol" />
                    <Form.Text muted>
                        Rango: 5.77 - 7.48
                    </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="TRIGLICÉRIDOS1">
                    <Form.Label>Triglicéridos</Form.Label>
                    <Form.Control type="text" placeholder="Triglicéridos" />
                    <Form.Text muted>
                        Rango: 1.98 - 2.33
                    </Form.Text>
                    </Form.Group>
                </Row>

     

                <Row className="mb-3">
                <Form.Group as={Col} controlId="HDL1">
                    <Form.Label>HDL</Form.Label>
                    <Form.Control type="text" placeholder="HDL" />
                    <Form.Text muted>
                        Rango: 1.40 - 1.86
                    </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="LDL1">
                    <Form.Label>LDL</Form.Label>
                    <Form.Control type="text" placeholder="LDL" />
                    <Form.Text muted>
                        Rango: 3.44 - 4.15
                    </Form.Text>
                    </Form.Group>
                </Row>
                </Col>
            <Col>
            <h6 style={{textAlign:'center',color:'#fff'}} className="mb-3 subtitle">Nivel 2.</h6>

            <Row className="mb-3">
                    <Form.Group as={Col} controlId="COLESTEROLTOTAL2">
                    <Form.Label>Colesterol Total</Form.Label>
                    <Form.Control type="text" placeholder="Colesterol" />
                    <Form.Text muted>
                        Rango: 2.15 - 3.07
                    </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="TRIGLICÉRIDOS2">
                    <Form.Label>Triglicéridos</Form.Label>
                    <Form.Control type="text" placeholder="Triglicéridos" />
                    <Form.Text muted>
                        Rango: 2.15 - 3.07
                    </Form.Text>
                    </Form.Group>
                </Row>

     

                <Row className="mb-3">
                <Form.Group as={Col} controlId="HDL2">
                    <Form.Label>HDL</Form.Label>
                    <Form.Control type="text" placeholder="HDL" />
                    <Form.Text muted>
                        Rango: 0.544 - 0.904
                    </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="LDL2">
                    <Form.Label>LDL</Form.Label>
                    <Form.Control type="text" placeholder="LDL" />
                    <Form.Text muted>
                        Rango: 1.32 - 2.02
                    </Form.Text>
                    </Form.Group>
                </Row>
                </Col>
                </div>
  

                <Button type="submit" className="mt-3" style={{display:'block',textAlign:'center',width:'100%'}}>Guardar control</Button>
            </Form>
        </div>
    )
}

export default FormControl
