import React from 'react'
import  StatisticsBase  from "../../components/StatisticsBase/StatisticsBase.jsx";
import { Container } from 'react-bootstrap'
import  BackButton  from "../../components/BackButton/BackButton.jsx";

function Statistics() {
    return (
        <div className="location">
            <div style={{display:'flex',width:'100%'}}>
                <BackButton route="/controlcalidad"></BackButton>
            </div>
            <div className="title">
                <h1 style={{fontWeight:'800',margin:'0'}} >Estadísticas</h1>
                <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
            </div>
            <Container>
                <StatisticsBase></StatisticsBase>
            </Container>
        </div>
    )
}

export default Statistics
