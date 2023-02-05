import React from 'react'
import { numbersPage } from '../utilss/script'

const Pagination = ({setPage,RESIDENT_PERPAGE,location}) => {
  return (
   
    <ul>
    {
      numbersPage({location,RESIDENT_PERPAGE}).map(numbersPage=>
         <li onClick={()=>setPage(numbersPage)} 
         key={numbersPage}>{numbersPage}</li>)
    }
  </ul>
  )
}

export default Pagination