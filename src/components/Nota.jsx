import React from 'react'

const Nota = ({notas,setNotas,setEdicion,setTitulo,setMensaje,setId}) => {

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
    <div className="flex flex-col justify-around mx-4 mt-12 gap-6">
      
      {notas.map( notita =>(
        <div key={notita.id} className="border-2 border-yellow-400 border-solid rounded p-4">
          <h3 className='text-xl font-bold pb-2'>{notita.titulo}</h3>
          <p className='w-full resize-none outline-none break-words text-lg font-medium'>{notita.mensaje}</p>
        
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