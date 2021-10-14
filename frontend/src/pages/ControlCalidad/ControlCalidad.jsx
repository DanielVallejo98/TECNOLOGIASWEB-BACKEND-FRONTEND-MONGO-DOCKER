import React, { useState , useEffect } from 'react'
import './ControlCalidad.scss'
import  FormControl  from "../../components/FormControl/FormControl.jsx";
import  BackButton  from "../../components/BackButton/BackButton.jsx";


function ControlCalidad() {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    return (
        <div className="location">
        <div style={{display:'flex',width:'100%'}}>
            <BackButton route="/main"></BackButton>
            <div style={{display:'flex',flexDirection:'column',color:'#fff'}}>
                <h6 style={{fontWeight:'400', textAlign:'center'}}>Tiempo en que se guardará el registro del control:</h6>
                <p style={{textAlign:'center'}}> Hora : {date.toLocaleTimeString()} y Fecha : {date.toLocaleDateString()}</p>

            </div>
            </div>
            <div className="title">
                <h1 style={{fontWeight:'800',margin:'0'}} >Control de calidad</h1>
                <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
            </div>
            
            <FormControl ></FormControl>

        </div>
    )
}

export default ControlCalidad
