import React from 'react'
import './Appointment.scss'
import {Form,Button,Row,Col } from "react-bootstrap";
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import { useHistory } from "react-router-dom";
import configData from "../../config.json";
import { useParams } from "react-router-dom";
import  {useEffect}  from "react";
import  {useState}  from "react";
import { useContext } from "react";
import { BacContext } from "../../contexts/BacContext.jsx";

function Appointment() {
    const history=useHistory()
    const {documento} = useParams();
    const [nombre,setNombre]=useState("")
    const [colesterol_total,setColesterol_total]=useState("")
    const [trigliceridos,setTrigliceridos]=useState("")
    const [hdl,setHdl]=useState("")
    const [ldl,setLdl]=useState("")
    const { bacLog } = useContext(BacContext);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const opts ={
            method:'PUT',
            body:JSON.stringify({
                colesterol_total:colesterol_total,
                trigliceridos:trigliceridos,
                hdl:hdl,
                ldl:ldl,
                fecha:new Date().toLocaleString().split(',')[0]

            }),
            headers:{
                'Content-Type': 'application/json'
              }
        }
        fetch(`${configData.SERVER_URL}/cita/${documento}`,opts )
        .then((response) => response.json())
        .then((data) => {
            //console.log(data)
            if(data["msg"]==="nodata"){
                alert(data["msg"])
                history.push(`/main/${bacLog.ID}`);
                //alert("No existe ese documento en el sistema!")
            }else if(data["error"]){
                alert(data["error"])
                history.push(`/cita/${documento}`)
            }
            else{
                alert(data["message"])
                  history.push(`/main/${bacLog.ID}`);
            }
        });
    
        
      };

    useEffect(() => {
        if (documento) {
          fetch(`${configData.SERVER_URL}/pacientes/${documento}`)
            .then((response) => response.json())
            .then((data) => {
                    
                     setNombre(data.nombre)
                     
                }
            );
        }
      }, [documento]);
      
      if(nombre==="")return null
    return (
        <div className="location">
            <div style={{width:'100%', display:'flex',justifyContent:'space-between'}}>
                <BackButton route="/pacientes"></BackButton>
 

  
            </div>
            <div className="title">
                <h1 style={{fontWeight:'800',margin:'0'}} >Agregar resultados de cita nueva</h1>
                <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
            </div>
        <div>
            <Form onSubmit={handleSubmit}>
            <div style={{display:'flex'}}>
            <Col>
            <h6 style={{textAlign:'center',color:'#000'}} className="mb-3 subtitle">Paciente: <span>{nombre}</span></h6>
            <h6 style={{textAlign:'center',color:'#000'}} className="mb-3 subtitle">Documento: <span>{documento}</span></h6>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="COLESTEROLTOTAL1">
                    <Form.Label>Colesterol Total</Form.Label>
                    <Form.Control type="text" placeholder="Colesterol" onChange={(e) => setColesterol_total(e.target.value)}/>

                    </Form.Group>

                    <Form.Group as={Col} controlId="TRIGLICÉRIDOS1">
                    <Form.Label>Triglicéridos</Form.Label>
                    <Form.Control type="text" placeholder="Triglicéridos" onChange={(e) => setTrigliceridos(e.target.value)}/>
 
                    </Form.Group>
                </Row>

     

                <Row className="mb-3">
                <Form.Group as={Col} controlId="HDL1">
                    <Form.Label>HDL</Form.Label>
                    <Form.Control type="text" placeholder="HDL" onChange={(e) => setHdl(e.target.value)}/>

                    </Form.Group>

                    <Form.Group as={Col} controlId="LDL1">
                    <Form.Label>LDL</Form.Label>
                    <Form.Control type="text" placeholder="LDL" onChange={(e) => setLdl(e.target.value)} />

                    </Form.Group>
                </Row>
                </Col>

                </div>
  

                <Button type="submit" className="mt-3" style={{display:'block',textAlign:'center',width:'100%'}}>Guardar</Button>
            </Form>
        </div>
        </div>
    )
}

export default Appointment
