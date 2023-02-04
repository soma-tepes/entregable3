import React from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({pagination}) => {
  return (
   <>
   <section className='residentList'>
    {
        pagination()?.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl} />)
     } 
     </section>
     </>
  )
}

export default ResidentList