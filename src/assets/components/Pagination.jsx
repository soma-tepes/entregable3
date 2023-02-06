import React from 'react'
import "./styles/Pagination.css"
import { numbersPage } from '../utilss/script'

const Pagination = ({setPage,RESIDENT_PERPAGE,location}) => {
  return (
   <div className='pagination_dad'>
    <ul className='pagination'>
    {
      numbersPage({location,RESIDENT_PERPAGE}).map(numbersPage=>
         <li className={`pagination_list`} onClick={()=>setPage(numbersPage)} 
         key={numbersPage}>{numbersPage}</li>)
    }
  </ul>
  </div>
  )
}

export default Pagination