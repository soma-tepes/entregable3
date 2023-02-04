import React from 'react'

const Pagination = ({setPage,numbersPage}) => {
  return (
   
    <ul>
    {
      numbersPage().map(numbersPage=> <li onClick={()=>setPage(numbersPage)} key={numbersPage}>{numbersPage}</li>)
    }
  </ul>
  )
}

export default Pagination