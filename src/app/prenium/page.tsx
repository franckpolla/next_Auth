import Logout from '@/components/ui/logout'
import NavbarDemo from '@/components/ui/nav'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div >
            <Logout />
        </div>
        <div className='mt-24'>
        <h1>Prenium</h1>
        <p>This is the page component</p>
        </div>
    </div>
  )
}

export default page