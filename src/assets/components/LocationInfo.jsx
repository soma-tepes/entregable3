import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <section>
    <h2>{location?.name}</h2>
    <ul><span>Type: </span><li>{location?.type}</li>
    <li><span>Dimension </span>{location?.dimension}</li>
    <li><span>Popuation </span>{location?.residents.length}</li></ul>
   </section>
  )
}

export default LocationInfo