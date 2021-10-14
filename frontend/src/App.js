import './App.css';
import { useState } from "react";
import Main from './pages/Main/Main.jsx'
import Intro from './pages/Intro/Intro.jsx'
import LoginBac from './pages/LoginBac/LoginBac.jsx'
import LoginPat from './pages/LoginPat/LoginPat.jsx'
import FormPatient from './pages/FormPatient/FormPatient.jsx'
import Table from './pages/Table/Table.jsx'
import ControlCalidad from './pages/ControlCalidad/ControlCalidad.jsx'
import PatientResults from './pages/PatientResults/PatientResults.jsx'
import BacResults from './pages/BacResults/BacResults.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import Appointment from './pages/Appointment/Appointment.jsx'

import {PatientContext} from './contexts/PatientContext.jsx'
import {BacContext} from './contexts/BacContext.jsx'

import GuardPatient from './Guards/GuardPatient';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GuardBac from './Guards/GuardBac';
import GuardTable from './Guards/GuardTable';


function App() {

  let control=true;
  const patientStorage = JSON.parse(localStorage.getItem("paciente"));
  const [patientLog, setPatientLog] = useState(
    patientStorage ? patientStorage : { isLoggedIn: false }
  );
  const bacStorage = JSON.parse(localStorage.getItem("bac"));
  const [bacLog, setBacLog] = useState(
    bacStorage ? bacStorage : { isLoggedIn: false }
  );
  return (
    <>
    <Router>   
      <Switch >
        <Route path="/" exact >
          <Intro></Intro>
        </Route>  
      </Switch>   
      <PatientContext.Provider value={{patientLog,setPatientLog}}>  
        <Switch >
          <Route path="/loginpatient" exact>
            <LoginPat ></LoginPat>
          </Route>
        </Switch>
        <Switch >

          <GuardPatient path="/resultpatient/:id" component={PatientResults} isLoggedIn={patientLog.isLoggedIn} />
        </Switch>
      </PatientContext.Provider>  
      <BacContext.Provider value={{bacLog, setBacLog}}>    
        <Switch >
          <Route path="/loginbac" exact>
            <LoginBac></LoginBac>
          </Route>  
        </Switch>
        <Switch >
          <GuardBac path="/main/:id" component={Main} isLoggedIn={bacLog.isLoggedIn} /> 
        </Switch>
        <Switch >
          <GuardTable path="/pacientes" component={Table} isLoggedIn={bacLog.isLoggedIn} control={!control}/> 
        </Switch>
        <Switch >
          <GuardBac path="/nuevopaciente" component={FormPatient} isLoggedIn={bacLog.isLoggedIn} /> 
        </Switch>

        <Switch >
          <GuardBac path="/nuevocontrolcalidad" component={ControlCalidad} isLoggedIn={bacLog.isLoggedIn} /> 
        </Switch>
        <Switch >
          <GuardTable path="/controlcalidad" component={Table} isLoggedIn={bacLog.isLoggedIn} control={control}/> 
        </Switch>
        <Switch >
          <GuardBac path="/estadisticaspordia/:fecha" component={Statistics} isLoggedIn={bacLog.isLoggedIn} control={control}/> 
        </Switch>
        <Switch >
          <GuardBac path="/resultspatient/:documento" component={BacResults} isLoggedIn={bacLog.isLoggedIn} /> 
        </Switch>
        <Switch >
          <GuardBac path="/cita/:documento" component={Appointment} isLoggedIn={bacLog.isLoggedIn} /> 
        </Switch>
      </BacContext.Provider> 
           
    </Router>

    </>
  );
}

export default App;
