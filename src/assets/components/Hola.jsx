import React from 'react'
import './styles/Hola.css'
const Hola = ({handleSubmit}) => {
  return (
    <div className='input_dad'>
    <form onSubmit={handleSubmit} className='form_dad'>
    <input className='form_input' type="text" id="idLocation" placeholder="type a location id"/>
    <button className='form_button'>Search</button>
  </form>
  </div>
  )
}

export default Hola