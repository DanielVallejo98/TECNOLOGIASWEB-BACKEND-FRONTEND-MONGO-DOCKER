import React from 'react'
import { Container } from 'react-bootstrap'
import './BacResults.scss'
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import  Patient  from "../../components/Patient/Patient.jsx";
import configData from "../../config.json";
import { useParams } from "react-router-dom";
import  {useEffect}  from "react";
import  {useState}  from "react";


function BacResults() {
    const {documento}=useParams()
    const [nombre, setNombre] = useState("");
    const [eps, setEps] = useState("");
    const [citas, setCitas] = useState([]);
    useEffect(() => {
        if (documento) {
          fetch(`${configData.SERVER_URL}/pacientes/${documento}`)
            .then((response) => response.json())
            .then((data) => {
                    
                     setNombre(data.nombre)
                     setEps(data.eps)
                     setCitas(data.citas)
                    
                }
            );
        }
      }, [documento]);

      if(citas.length===0)return null
    return (
        <div className="location">
            <div style={{width:'100%', display:'flex',justifyContent:'space-between'}}>
                <BackButton route="/pacientes"></BackButton>
 
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
                        <strong>  {eps}</strong>
                    </div>
                    <div>
                        <p>Documento </p>
                        <strong> {documento}</strong>
                    </div>

                </div>
                        {citas.map((cita,i)=> <Patient key={i} cita={cita}></Patient>)}



                
            </Container>
        </div>
    )
}

export default BacResults
