import React from 'react'
import { Container,Button } from 'react-bootstrap'
import './PatientResults.scss'
import  Patient  from "../../components/Patient/Patient.jsx";
import { useContext } from "react";
import { PatientContext } from "../../contexts/PatientContext.jsx";
import { useHistory } from "react-router-dom";
import configData from "../../config.json";
import { useParams } from "react-router-dom";
import  {useEffect}  from "react";
import  {useState}  from "react";



function PatientResults() {
    const { setPatientLog } = useContext(PatientContext);
    const history = useHistory();
    const { id } = useParams();
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [eps, setEps] = useState("");
    const [cita, setCita] = useState(undefined);
    useEffect(() => {
        if (id) {
          fetch(`${configData.SERVER_URL}/pacienteresultado/${id}`)
            .then((response) => response.json())
            .then((data) => {
                    
                     setNombre(data.nombre)
                     setDocumento(data.documento)
                     setEps(data.eps)
                     setCita(data.citas[data.citas.length-1])
                    console.log(data.citas[data.citas.length-1])
                }
            );
        }
      }, [id]);

    const LogOut = () => {
        setPatientLog({ isLoggedIn: false });
        localStorage.removeItem("paciente");
        history.push("/")
    };
    if(!cita)return null;
    return (
        <div className="location">
            <div style={{width:'100%', display:'flex',justifyContent:'end'}}>

 
                        <Button variant="outline-danger" onClick={() => LogOut()}><i className="fas fa-sign-out-alt fa-lg "></i></Button>
  
            </div>
            <div className="title">
                <h1 style={{fontWeight:'800',margin:'0'}} >Resultados</h1>
                <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
            </div>
            <Container>
                <div className="generic">
                    <div>
                        <p >Nombres </p>
                        <strong> {nombre}</strong>
                    </div>
                    <div>
                        <p >EPS </p>
                        <strong> {eps}</strong>
                    </div>
                    <div>
                        <p>Documento </p>
                        <strong> {documento}</strong>
                    </div>

                </div>
                   <Patient cita={cita}></Patient>
                    
                      
 
                
                
            </Container>
        </div>
    )
}

export default PatientResults
