import React, { useState } from 'react'
import Nota from './Nota'
import Error from './Error'

const Formulario = () => {
  const [titulo, setTitulo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(true)
  const [edicion, setEdicion] = useState(false)
  const [id, setId] = useState('')
  const [notas, setNotas] = useState(JSON.parse(localStorage.getItem('nota'))??[])

  const obtenerTitulo = (e) =>{
    setTitulo(e.target.value)
  }
  const obtenerMensaje = (e) =>{
    setMensaje(e.target.value)
  }
  const generarId = () =>{
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }
  
  localStorage.setItem('nota', JSON.stringify(notas))
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    
    if (titulo === '' || mensaje === '') {
      setError(false)
      return
    }
    
    const objNotas = {
      titulo,
      mensaje,
      id: generarId()
    }
    
    setNotas([
      ...notas, objNotas
    ])
    
    setTitulo('')
    setMensaje('')
    setError(true)
    console.log(objNotas)
  }

  const editarNota = (e) =>{
    e.preventDefault()

    if (titulo === '' || mensaje === '') {
      setError(false)
      return
    }

    const notaEditada = notas.map(nota => nota.id === id ? {id,titulo,mensaje}: nota)
    setNotas(notaEditada)
    setTitulo('')
    setEdicion(false)
    setError(true)
    setMensaje('')
    setId('')
  }
  return (
    <>
      {error ? '': <Error/>}

      <form onSubmit={edicion ? editarNota : handleSubmit} className='border-2 border-yellow-500 border-solid rounded mx-4 shadow-lg'>
        <div>
          <input 
            type="text" 
            placeholder='Titulo'
            className='w-full border border-b-yellow-500 p-3 resize-none outline-none text-xl font-bold'
            onChange={obtenerTitulo} 
            value={titulo}
          />
          <textarea 
            cols="10" 
            rows="3" 
            placeholder='Mensaje'
            className='w-full resize-none outline-none p-3 text-lg font-medium'
            onChange={obtenerMensaje}
            value={mensaje}
            ></textarea>
        </div>
        <div className="flex justify-end pb-2 pr-2 items-center">
          <button type='submit' className='bg-yellow-400 p-2 rounded-full font-semibold hover:bg-yellow-500'>{edicion ? 'Editar':'Añadir'}</button>
        </div>
      </form>

      {notas.length > 0 ? <Nota setTitulo={setTitulo} setMensaje={setMensaje} notas={notas} setNotas={setNotas} setEdicion={setEdicion} setId={setId}/> : <p className='text-center mt-14 text-slate-700 text-xl font-bold'>No hay notas registradas</p>}
    </>
  )
}

export default Formulario