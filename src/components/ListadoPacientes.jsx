import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
  return (
   <div className='md:w-1/2 lg:w-3/5 '>
        <h2 className='font-black text-2xl text-center'>Listado de pacientes</h2>
  <p className='text-center text-lg mt-5'>
      Administra tus {''}
      <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
  </p>
  <div className='md:h-screen overflow-y-scroll'>
    <Paciente />
    <Paciente />
    <Paciente />
    <Paciente />
  </div>

   </div>
  )
}

export default ListadoPacientes