import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes';
import './App.css';

function App() {


 const [pacientes, setPacientes ] = useState([]);
 const [edit, setEdit ] = useState({})
 
 useEffect(() => {
  const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLS)
  }
  obtenerLS();
}, []);


useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify( pacientes ))
}, [pacientes])


  function handleDelete(paciente) {
    let result = window.confirm('Estas seguro que deseas eliminar el registro?');
    if (result) {
      const pacienteRemovido = pacientes.filter(pacienteState => pacienteState.id !== paciente.id);
      setPacientes(pacienteRemovido);
    }

  }




  return (
    <div className="App container mx-auto mt-10  ">
      <Header/>
      <div className='mt-12 md:flex'>
      <Formulario 
      setPacientes={setPacientes}
      pacientes={pacientes}
      edit={edit}
      setEdit={setEdit}/>

      <ListadoPacientes 
      pacientes={pacientes}
      setEdit={setEdit}
      remove={handleDelete}/>
      
      </div>
  
    </div>
  );
}

export default App;
