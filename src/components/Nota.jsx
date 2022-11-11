import React from 'react'
import responsiveTArea from '../utilities/responsiveTArea'

const Nota = ({notas,setNotas,setEdicion,setTitulo,setMensaje,setId,setHeight,height}) => {

  const eliminarNota = (id) =>{  
    const filtrado = notas.filter(nota => nota.id !== id)
    setNotas(filtrado)
  }

  const editar = (item) => {
    setEdicion(true)
    setTitulo(item.titulo)
    setMensaje(item.mensaje)
    setId(item.id)

  }

  return (
    <div className="container mx-auto flex items-center flex-col justify-around mt-12 mb-12 gap-6 md:flex-row md:justify-center flex-wrap sd:w-full">
      
      {notas.map( notita =>(
        <div key={notita.id} className="border-2 border-yellow-400 border-solid rounded p-4 w-11/12 md:w-80 lg:w-80">
          <h3 className='text-xl font-bold pb-2 break-words'>{notita.titulo}</h3>
          <textarea
          readOnly="readonly" className={`overflow-hidden w-full h-fit outline-none break-words text-lg font-medium`}>{notita.mensaje}</textarea>
        
          <div className="flex justify-between mt-2">
              <button onClick={() => editar(notita)} className='text-yellow-500 hover:text-yellow-700 text-lg font-semibold'>Editar</button>
              <button onClick={() => eliminarNota(notita.id)} className='text-red-500 hover:text-red-700 text-lg font-semibold'>Eliminar</button>
          </div>
        </div>
      ))}
        
    </div>
  )
}

export default Nota