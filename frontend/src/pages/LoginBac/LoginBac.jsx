import React from 'react'
import './LoginBac.scss'
import {Form,Button, Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { BacContext } from "../../contexts/BacContext.jsx";
import { useHistory } from "react-router-dom";
import configData from "../../config.json";
import Alert from 'react-bootstrap/Alert'



  function loginBac(data) {
      const {_id,nombre,documento}=data
    return {
      ID:_id.$oid,  
      NOMBRE: nombre,
      DOCUMENTO:documento
    };
  }

function LoginBac() {
    const [show, setShow] = useState(false);

    const date = new Date().getFullYear();
    const history = useHistory();
    
    const { setBacLog } = useContext(BacContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  

 
  const handleSubmitBac = async (e) => {
    e.preventDefault();
    const opts ={
        method:'POST',
        body:JSON.stringify({
            email:email,
            password:password
        }),
        headers:{
            'Content-Type': 'application/json'
          }
    }
    fetch(`${configData.SERVER_URL}/loginbac`,opts)
        .then((response) => response.json())
        .then((data) => {
            //console.log(token)
            if(data["msg"]==="nodata"){
                setShow(true)
                
                setEmail("")
                setPassword("")
                //alert("No existe ese documento en el sistema!")
            }else{
                const bacInfo = loginBac(data);
                  bacInfo.isLoggedIn = true;
              
                  //console.log(patientInfo);
                  setBacLog(bacInfo);
                  localStorage.setItem("bac", JSON.stringify(bacInfo));
                  history.push(`/main/${bacInfo.ID}`);
            }
        });
  };
    return (
        
        <div className="login-bac-container">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible show={show} >
            <Alert.Heading>No existe este usuario!</Alert.Heading>
                  <p>Verifica que hayas ingresado tu correo y contraseña adecuadamente.</p>
        </Alert>
            <Container className="vertical-center">

                            <div id="container-beaker">
                                <div id="beaker">
                                    <div id="liquid">
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                    </div>
                                </div>
                                <div id="tube">
                                    <div id="liquid-tube">
                                        <div className="bubble2"></div>
                                        <div className="bubble2"></div>
                                        <div className="bubble2"></div>
                                    </div>
                                </div>
                            </div>
            
                
  
                    <div className="container-info">
                        <i className="fas fa-vial fa-10x i-class" style={{position:'relative',bottom:'5rem'}}></i>
                        <h2 style={{fontWeight:'600',position:'relative',bottom:'5rem',marginBottom:'2rem',textAlign:'center'}} >
                            Ingresa al sistema!
                        </h2>

                        <Form style={{position:'relative',bottom:'5rem'}} onSubmit={handleSubmitBac}>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo" onChange={(e) => setEmail(e.target.value)} className="borrar" value={email}/>
                                <Form.Text className="text-muted">
                                No compartiremos tu cuenta con nadie.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} className="borrar" value={password}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{display:'block',width:'100%'}}>
                                Ingresar
                            </Button>
                        </Form>

                            
                        <div style={{position:'relative',bottom:'2rem',textAlign:'center'}}>
                            © {date}
                        </div>
                    </div>

            </Container>       
        </div>
    )
}

export default LoginBac
