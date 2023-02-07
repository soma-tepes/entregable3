import React from 'react'
import './styles/LocationInfo.css'
const LocationInfo = ({location}) => {
  return (
    <div className='location_dad_nav'>
    <section className='location_dad'>
    
    <ul className='location_ul'>
    <li className='location_item'><span>Name:</span> {location?.name} </li>
    <li className='location_item'><span>Type: </span>{location?.type}</li>
    <li className='location_item'><span>Dimension: </span>{location?.dimension}</li>
    <li className='location_item'><span>Population: </span>{location?.residents.length}</li></ul>
   </section>
   </div>
  )
}

export default LocationInfo