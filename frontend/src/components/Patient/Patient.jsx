import React from 'react'
import { Row,Col } from 'react-bootstrap'
import './Patient.scss'
function Patient({cita}) {
    const {colesterol_total,trigliceridos,hdl,ldl}=cita.perfil_lipidico
    
    return (
        <div className="cita mt-4 mb-4 pt-4 pb-4">
                <div style={{textAlign:'center',display:'flex'}}>
                    <div className='pr-2' style={{width:'100%'}}>
                        <h2 style={{color: '#007bff',fontWeight:'500'}}>Pefil lipídico </h2>

                    </div>
                    <div  style={{width:'100%',position:'relative'}}>
                        <p className='pr-2' style={{color:'#86d990',position:'absolute',bottom:'0',right:'0'}}>Fecha de examen: <span style={{color: '#007bff'}} > {cita.fecha}</span> </p>
                        
                    </div>
                </div>
                    <Row className="mb-3">
                        <Col>
                            <p style={{width:'100%'}}>Colesterol Total:</p>
                            <strong>{colesterol_total} mg/dL</strong>
                        </Col>
                        <Col>
                            <p style={{width:'100%'}}>Triglicéridos: </p>
                            <strong>{trigliceridos} mg/dL</strong>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <p style={{width:'100%'}}>HDL:</p>
                            <strong>{hdl} mg/dL</strong>
                        </Col>
                        <Col>
                            <p style={{width:'100%'}}>LDL: </p>
                            <strong>{ldl} mg/dL</strong>
                        </Col>
                    </Row>
                </div>
    )
}

export default Patient
