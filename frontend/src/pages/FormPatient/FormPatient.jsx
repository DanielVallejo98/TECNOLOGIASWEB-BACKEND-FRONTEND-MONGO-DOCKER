import React from 'react'
import './FormPatient.scss'
import {Form,Button,Row,Col} from "react-bootstrap";
import { useState } from "react";
import {Link} from "react-router-dom"
import { useReducer } from "react";
import configData from "../../config.json";
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import { useContext } from "react";
import { BacContext } from "../../contexts/BacContext.jsx";
import { useHistory } from "react-router-dom";

function FormPatient() {
    const [validated, setValidated] = useState(false);
    const { bacLog } = useContext(BacContext);
    const history = useHistory();

    function checkProperties(obj) {
        let array=[]
        for (var key in obj) {
            if (obj[key] === null || obj[key] === "")
                array.push(0);
        }
        if(array[0]===0)
            return true;
        else{
            return false
        }
    }
    const crearPaciente = async (datos) => {

        const opts ={
            method:'POST',
            body:JSON.stringify(
                datos
            ),
            headers:{
                'Content-Type': 'application/json'
              }
        }
        fetch(`${configData.SERVER_URL}/crearpaciente`,opts)
            .then((response) => response.json())
            .then((data) => {
            if(data["message"]==="Nuevo paciente guardado!"){
                alert(data["message"])
                history.push(`/main/${bacLog.ID}`)
            }else{
                alert(data["message"])
            }
            }
                );
      };

  const handleSubmit = async (event)  => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      
    }
    setValidated(true);
    let notempty=checkProperties(formData)
    if(!notempty) await crearPaciente(formData)
    
   
  };
  const formReducer = (state, data) => {
    if (data.isEvent) {
      return {
        ...state,
        [data.name]: data.value,
      };
    }
    return {
      ...data,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {
    nombre: "",
    eps: "",
    genero: "",
    fecha_nacimiento: "",
    documento: "",
    colesterol_total: "",
    trigliceridos:"",
    ldl:"",
    hdl:""
  
 
    
  });

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
      isEvent: true,
    });
  };

  return (
      <>
    {/* <Header></Header> */}
    <div className="location">
        <BackButton route={`/main/${bacLog.ID}`}></BackButton>
        <div className="title">
            <h1 style={{fontWeight:'800',margin:'0'}} >Perfil lipídico</h1>
            <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="form">
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Nombre completo"
                name="nombre"
                onChange={handleChange}
            />
            <Form.Control.Feedback type="valid">
                Completado!
                </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor escribe el nombre del paciente.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Número de documento</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="D.I"
                name="documento"
                onChange={handleChange}
            />
            <Form.Control.Feedback type="valid">
                Completado!
                </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor escribe el documento del paciente.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="EPS">
            <Form.Label>Selecciona la EPS del paciente</Form.Label>
                <Form.Control as="select" type="select" md="4" required name="eps" onChange={handleChange}>

                    <option value="">Selecciona EPS</option>
                    <option value="sanitas">Sanitas</option>
                    <option value="sura">Sura</option>
                    <option value="nueva-eps">Nuevas EPS</option>
                    <option value="comeva">Comeva</option>

                </Form.Control>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="GENERO">
            <Form.Label>Selecciona el género del paciente</Form.Label>
                <Form.Control as="select"  type="select" md="4" required name="genero" onChange={handleChange}>

                    <option value="">Género</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>

                </Form.Control>
            </Form.Group>
        
        
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" placeholder="Fecha de nacimiento" required name="fecha_nacimiento" onChange={handleChange}/>
            <Form.Control.Feedback type="valid">
                        Completado!
                    </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor elige fecha de nacimiento del paciente.
            </Form.Control.Feedback>
            </Form.Group>

        </Row>
        
        <div className="pruebas">  
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="COLESTEROLTOTAL" >
            <Form.Label>Colesterol total mg/dL</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="1 mg/dL"
                name="colesterol_total"
                onChange={handleChange}
            />
            <Form.Control.Feedback type="valid">
                Completado!
                </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor escribe el colesterol total del paciente.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="TRIGLICERIDOS">
            <Form.Label>Triglicéridos mg/dL</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="1 mg/dL"
                name="trigliceridos"
                onChange={handleChange}
            />
            <Form.Control.Feedback type="valid">
                Completado!
                </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor escribe el valor de los triglicéridos del paciente.
            </Form.Control.Feedback>
            </Form.Group>
            </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="HDL">
            <Form.Label>HDL mg/dL</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="1 mg/dL"
                name="hdl"
                onChange={handleChange}
            />
            <Form.Control.Feedback type="valid">
                Completado!
                </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor escribe el valor de HDL del paciente.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="LDL">
            <Form.Label>LDL mg/dL</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="1 mg/dL"
                name="ldl"
                onChange={handleChange}
            />
            <Form.Control.Feedback type="valid">
                Completado!
                </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Por favor escribe el LDL del paciente.
            </Form.Control.Feedback>
            </Form.Group>
            </Row>
            </div>
        
        <h6 className="mt-3">Recuerda que si el paciente ya existía en la base datos, mejor dirígete <Link to="/pacientes">aquí</Link> para guardar su nueva cita.</h6>
        <Button type="submit" className="mt-3" style={{display:'block',textAlign:'center',width:'100%'}}>Guardar registro</Button>
        </Form>
    </div>
</>

  );
}

export default FormPatient
