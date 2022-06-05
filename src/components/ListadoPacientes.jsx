import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setEdit, remove }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5 '>
      {pacientes.length > 0 ? <>
        <h2 className='font-black text-2xl text-center'>Listado de pacientes</h2>
        <p className='text-center text-lg mt-5'>
          Administra tus {''}
          <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
        </p>
        <div className='md:h-screen overflow-y-scroll'>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setEdit={ setEdit }
                remove ={ remove }
              />
            )
          })} 
        </div>
      </>
        : <>
          <h2 className='font-black text-2xl text-center'>No hay pacientes</h2>
          <p className='text-center text-lg mt-5'>
            Comienza a agregar {''}
            <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
          </p>
        </>}

    </div>
  )
}

export default ListadoPacientes