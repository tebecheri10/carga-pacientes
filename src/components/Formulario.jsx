import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import React, { useState, useEffect } from 'react'
import Error from './Error'


const Formulario = ({ setPacientes, pacientes, edit, setEdit }) => {
  const [nombre, setNombre ] = useState("")
  const [propietario, setPropietario ] = useState("")
  const [email, setEmail ] = useState("")
  const [fecha, setFecha ] = useState("")
  const [sintomas, setSintomas ] = useState("")

  const [error, setError] = useState(false)

  useEffect(()=>{
    if (Object.keys(edit).length > 0 ){
        setNombre(edit.nombre)
        setPropietario(edit.propietario)
        setEmail(edit.email)
        setFecha(edit.fecha)
        setSintomas(edit.sintomas)
    }
  },[edit])

  const createId = ()=>{
     const random = Math.random().toString(36).substr(2);
     const fecha = Date.now().toString(36);
     return random + fecha
  }

  const handleSubmit = (e)=>{
      e.preventDefault();

      if([nombre, propietario, email, fecha, sintomas].includes("")){
            setError(true)
      }
      else{
            setError(false)
      }
      const formData = {
        nombre, 
        propietario,
        email,
        fecha,
        sintomas
    
      }

      if(edit.id ){
        formData.id = edit.id;
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === edit.id ? formData : pacienteState)
        setPacientes(pacientesActualizados)
        setEdit({})
      }
      else{
        formData.id = createId()
        setPacientes([...pacientes, formData])
      }

  
      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")
  }

  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5">
      <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'> Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-10 mb-10 mt-10">
        <div className='mb-5'>
           <label htmlFor='mascota' className='block text-gray-700 bold'>Nombre de Mascota</label>
           <input id="mascota" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' value={nombre} type="text" placeholder='Nombre de la mascota' onChange={e=>setNombre(e.target.value)} />
        </div>
        <div className='mb-5'>
           <label htmlFor='nombrePropietario' className='block text-gray-700 bold'>Nombre Propietario</label>
           <input id="nombrePropietario" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' value={propietario} type="text" placeholder='Nombre Propietario' onChange={e=>setPropietario(e.target.value)} />
        </div>
        <div className='mb-5'>
           <label htmlFor='email' className='block text-gray-700 bold'>Email</label>
           <input id="email" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' value={email} type="email" placeholder='Email'  onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-5'>
           <label htmlFor='date' className='block text-gray-700 bold'>Fecha de Alta</label>
           <input id="date" className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' value={fecha} type="date" placeholder='fecha de alta'  onChange={e=>setFecha(e.target.value)} />
        </div>
        <div className='mb-5'>
           <label htmlFor='date' className='block text-gray-700 bold'>Sintomas</label>
           <textarea className='border-2 mt-2 rounded-md w-full p-2 border-stone-700 placeholder-gray-500	' value={sintomas} name="" id="" cols="30" rows="10"  placeholder='Describe los sintomas'  onChange={e=>setSintomas(e.target.value)}/>
        </div>
        {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}
        <input type="submit" className='bg-indigo-600 w-full rounded-md text-white p-3 font-bold hover:bg-indigo-700 cursor-pointer' value={edit.id?'Editar paciente': "Agregar paciente"} />
      </form>
    </div>
  )
}

export default Formulario