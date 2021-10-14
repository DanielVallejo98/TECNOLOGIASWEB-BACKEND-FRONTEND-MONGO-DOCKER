import React from 'react'
import MaterialTable from '@material-table/core';
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import { useHistory } from "react-router-dom";
import './Table.scss'
import configData from "../../config.json";
import  {useEffect}  from "react";
import  {useState}  from "react";
import { useContext } from "react";
import { BacContext } from "../../contexts/BacContext.jsx";

const columnasPacientes=[
    
    {
        title:'Nombre',
        field:'nombre',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Documento',
        field:'documento',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }


    },
    {
        title:'EPS',
        field:'eps',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
        }

    },
    {
        title:'Género',
        field:'genero',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
]

const columnasControl=[
    {
        title:'Fecha',
        field:'fecha',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Bacteriólogo',
        field:'bac',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Colesterol total nivel 1',
        field:'coles1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Triglicéridos nivel 1',
        field:'tri1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'HDL nivel 1',
        field:'hdl1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'LDL nivel 1',
        field:'ldl1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Colesterol total nivel 2',
        field:'coles2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Triglicéridos nivel 2',
        field:'tri2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'HDL nivel 2',
        field:'hdl2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'LDL nivel 2',
        field:'ldl2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    
]
const datosControl=[
    {fecha:'3/10/21',bac:'bacteriologo1',coles1:1.1, tri1:2.1, hdl1:2.1, ldl1:1.1,coles2:1.1, tri2:0.5, hdl2:0.5, ldl2:0.5},
    {fecha:'2/10/21',bac:'bacteriologo1',coles1:1.2, tri1:2.1, hdl1:2.1, ldl1:2.1,coles2:2.1, tri2:2.1, hdl2:0.5, ldl2:0.5},
    {fecha:'1/10/21',bac:'bacteriologo2',coles1:1.2, tri1:2.1, hdl1:2.1, ldl1:0.5,coles2:0.5, tri2:0.5, hdl2:0.5, ldl2:0.5},
    {fecha:'30/9/21',bac:'bacteriologo2',coles1:1.2, tri1:13.1, hdl1:2.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'29/9/21',bac:'bacteriologo2',coles1:1.2, tri1:4.1, hdl1:0.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'28/9/21',bac:'bacteriologo3',coles1:1.2, tri1:4.1, hdl1:0.1, ldl1:0.1,coles2:0.1, tri2:0.1, hdl2:0.1, ldl2:0.1},
    {fecha:'28/9/21',bac:'bacteriologo3',coles1:1.2, tri1:4.1, hdl1:0.1, ldl1:0.1,coles2:0.1, tri2:0.1, hdl2:0.1, ldl2:0.1},
    {fecha:'28/9/21',bac:'bacteriologo1',coles1:1.12, tri1:1.1, hdl1:1.2, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'28/9/21',bac:'bacteriologo3',coles1:1.21, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'27/9/21',bac:'bacteriologo3',coles1:1.1, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'27/9/21',bac:'bacteriologo2',coles1:1.123, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'26/9/21',bac:'bacteriologo2',coles1:3.1, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    
]
function Table({control}) {
    const history = useHistory()
    const { bacLog } = useContext(BacContext);

    const [datosPacientes,setDatosPacientes]=useState(undefined)
    async function borrar(documento,nuevadata){
        fetch(`${configData.SERVER_URL}/pacientes/${documento}`,{method:'DELETE'})
                .then((response) => response.json())
                .then((data) => {
                        if(data["message"]){
                            setDatosPacientes(nuevadata)
                            alert(data["message"])
                        }else{
                            alert("algo raro pasó")
                        }
                        
                    }
                                        )
    }
    useEffect(() => {

          fetch(`${configData.SERVER_URL}/pacientes`)
            .then((response) => response.json())
            .then((data) => {
                    
                    console.log(data)
                    setDatosPacientes(data)
                }
            );
        }
      , []);
     if (!datosPacientes) return null 
    return (
        <div className="table-container">
            <div className="top-table pb-3" >
                <BackButton route={`/main/${bacLog.ID}`}></BackButton>
                <div style={{width:'80%',textAlign:'center',display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                <h2 style={{color:'rgb(50 48 48 / 87%)',fontWeight:'700'}}>Sistema LIS</h2>
                </div>
                <div style={{width:'100%',textAlign:'right',position:'relative'}}>
                    <h6 style={{position:'absolute',bottom:'-1rem',right:'0',color:'green',fontWeight:'400'}}>{
                        control?'Consulta información de los controles de calidad realizados.':'Consulta información de los pacientes.'}</h6>
                </div>
            </div>
            
        {control ? (
            <>
            <MaterialTable 
                columns={columnasControl}
                data={datosControl}
                title="Control de calidad" 
                actions={
                    [
                        {
                            icon: 'add',
                            tooltip:'Mira información estadística del control de calidad para esta fecha',
                            onClick:(event,rowData)=>  {
                               
                                history.push("/estadisticaspordia/1")
                            
                            }
                            
                        },
                        {
                            icon: 'edit',
                            tooltip:'edita los datos del paciente',
                            onClick:(event,rowData)=>alert("editar: "+rowData.nombre)
                        },

                        {
                            icon: 'delete',
                            tooltip:'Eliminar paciente del sistema',
                            onClick:(event,rowData)=>window.confirm("eliminar paciente del sistema")
                        },
                    ]
                }
                options={{
                    actionsColumnIndex:-1,
                    rowStyle: {
                    backgroundColor: '#EEE',
                    overflowWrap: 'break-word'
                    }
                }}
                localization={
                    {
                        header:{
                            actions:'Acciones'
                        }
                    }
                }
            />

            </>
        ):(
            <>
            <MaterialTable
                columns={columnasPacientes}
                data={datosPacientes}
                title="Listado de pacientes"               
                actions={
                    [
                        {
                            icon: 'add',
                            tooltip:'Agrega una cita el paciente',
                            onClick:(event,rowData)=>{
                                console.log(rowData.documento)
                                history.push(`/cita/${rowData.documento}`)
                                }
                        },

                        {
                            icon: 'search',
                            tooltip:'Ver más información del paciente',
                            onClick:(event,rowData)=>{ history.push(`/resultspatient/${rowData.documento}`)}
                        },
                        {
                            icon: 'delete',
                            tooltip:'Eliminar paciente del sistema',
                            onClick: (event,rowData)=>{
                                
                                        //borrar(rowData.documento)
                                        const nuevadata=datosPacientes.filter(fila=> fila.documento!==rowData.documento)
                                        borrar(rowData.documento,nuevadata)
                                        }
                        },
                    ]
                }
                options={{
                    actionsColumnIndex:-1,
                    rowStyle: {
                    backgroundColor: '#EEE',
                    overflowWrap: 'break-word'
                    }
                }}
                localization={
                    {
                        header:{
                            actions:'Acciones'
                        }
                    }
                }
            />
        </>
        )
    }
    </div> 
    )
}

export default Table
