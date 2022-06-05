import React from 'react'

const Paciente = ({ paciente, setEdit, remove }) => {

    const { nombre, propietario, email, fecha, sintomas } = paciente

  return (
    <div className='my-10 bg-white shadow-md rounded-md py-10 px-5'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
        nombre:
        <span className='font-normal normal-case'> { nombre }</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:
        <span className='font-normal normal-case'> { propietario } </span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email:
        <span className='font-normal normal-case'> { email }</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha de alta:
        <span className='font-normal normal-case'> { fecha }</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
        Síntomas:
        <span className='font-normal normal-case'> { sintomas }</span>
    </p>
    <div>
        <button onClick={()=>setEdit(paciente)} className='bg-indigo-600 p-3 px-10 text-white text-bold text-center rounded-md hover:bg-indigo-800'>Editar</button>
        <button onClick={()=>remove(paciente)} className='bg-red-600 p-3 px-10 ml-3 text-white text-bold text-center rounded-md hover:bg-red-800'>Eliminar</button>
    </div>
</div>
  )
}

export default Paciente