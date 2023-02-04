import React from 'react'

const Hola = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" id="idLocation" placeholder="type a location id"/>
    <button>Search</button>
  </form>
  )
}

export default Hola