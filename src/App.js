import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App container mx-auto mt-10  ">
      <Header/>
      <div className='mt-12 md:flex'>
      <Formulario/>
      <ListadoPacientes/>
      </div>
  
    </div>
  );
}

export default App;
