import { Row, Container } from "react-bootstrap";
import './Main.scss'
import  MyCard  from "../../components/Card/MyCard.jsx";
import  Header  from "../../components/Header/Header.jsx";
import { useContext } from "react";
import { BacContext } from "../../contexts/BacContext.jsx";
import { useHistory } from "react-router-dom";
function Main() {
    const { setBacLog } = useContext(BacContext);
    const history = useHistory();

    const LogOutBac = () => {
        setBacLog({ isLoggedIn: false });
        localStorage.removeItem("bac");
        history.push("/")
    };
    return (
        <div className='main-page-container'>
        {/* <Header menuClickedFunction={toggleMenuLateral}></Header> */}
        
         <Header  loggedOut={LogOutBac}></Header>
        
        <Container  className="vertical-center">  

            <Row className="justify-content-center ">
            
                   <MyCard
                        header="Ingreso" 
                        link="/img/datos_paciente.jpg" 
                        title="Ingresar nuevo paciente"
                        text="Ingresa los datos personales de un paciente y su perfíl lipídico"
                        msgBtn="Nuevo"
                        route="/nuevopaciente"
                        >
                    </MyCard>
                   <MyCard
                        header="Listado" 
                        link="/img/pacientes.jpg" 
                        title="Listado de pacientes"
                        text="Consulta la información de todos los pacientes registrados en el sistema"
                        msgBtn="Consultar"
                        route="/pacientes"
                        >
                    </MyCard>
                   {/* <MyCard
                        header="CC" 
                        link="/img/cc1.jpg" 
                        title="Control de calidad 1 Y 2"
                        text="Realiza un control de calidad de nivel 1 y 2 del dispositivo"
                        msgBtn="Realizar"
                        route="/nuevocontrolcalidad"
                        >
                    </MyCard>
                   <MyCard
                        header="Consulta CC" 
                        link="/img/cc2.jpg" 
                        title="Consulta de los controles de calidad"
                        text="Consulta controles de calidad y revisa medidas estadísticas como media, varianza, etc."
                        msgBtn="Consultar"
                        route="/controlcalidad"
                        >
                    </MyCard> */}

            </Row>
        </Container>
        </div>
        );
}

export default Main;