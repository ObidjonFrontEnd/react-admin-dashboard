import React from 'react'
import { Outlet } from 'react-router-dom'

function AutheLAyout() {
 

  return (
    <section className='w-full h-[100vh] bg-gray-100'>
      <Outlet/>
    </section>
  )
}

export default AutheLAyout