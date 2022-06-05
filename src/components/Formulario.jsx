import React, { useState, useEffect } from 'react'


const Formulario = () => {

  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'> Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-10 mb-10 mt-10">
        <div className='mb-5'>
           <label htmlFor='mascota' className='block text-gray-700 bold'>Nombre de Mascota</label>
           <input id="mascota" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' type="text" placeholder='Nombre de la mascota' />
        </div>
        <div className='mb-5'>
           <label htmlFor='nombrePropietario' className='block text-gray-700 bold'>Nombre Propietario</label>
           <input id="nombrePropietario" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' type="text" placeholder='Nombre Propietario' />
        </div>
        <div className='mb-5'>
           <label htmlFor='email' className='block text-gray-700 bold'>Email</label>
           <input id="email" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' type="email" placeholder='Email' />
        </div>
        <div className='mb-5'>
           <label htmlFor='date' className='block text-gray-700 bold'>Fecha de Alta</label>
           <input id="date" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' type="date" placeholder='Email' />
        </div>
        <div className='mb-5'>
           <label htmlFor='date' className='block text-gray-700 bold'>Sintomas</label>
           <textarea className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' name="" id="" cols="30" rows="10"  placeholder='Describe los sintomas'/>
        </div>
        <input type="submit" className='bg-indigo-600 w-full rounded-md text-white p-3 font-bold hover:bg-indigo-700 cursor-pointer' value='Agregar paciente' />
      </form>
    </div>
  )
}

export default Formulario