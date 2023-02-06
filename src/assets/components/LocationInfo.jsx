import React from 'react'
import './styles/LocationInfo.css'
const LocationInfo = ({location}) => {
  return (
    <section className='location_dad'>
    <h2 className='location_title'>{location?.name}</h2>
    <ul className='location_ul'>
    <li className='location_item'><span>Type: </span>{location?.type}</li>
    <li className='location_item'><span>Dimension </span>{location?.dimension}</li>
    <li className='location_item'><span>Popuation </span>{location?.residents.length}</li></ul>
   </section>
  )
}

export default LocationInfo