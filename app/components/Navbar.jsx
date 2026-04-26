import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
   <div className="p-4 border-b-[6px] border-[#195BA2] text-yellow-500">

         <div className='flex flex-col  gap-4 sm:flex-row justify-between items-center'>
            <Link href={'/'}> <img src="https://rosuvasheartinterventions.com/assets/logo.svg"
             alt=""
             className='w-36' />
            </Link>
           

            <Link href={'/'} className=' hover:scale-95 duration-200  sm:text-lg text-sm bg-[#195BA2] rounded-full p-4 text-white  '>
                Complex Intervention Procedures Case Series
            </Link>

         </div>
    </div>
  )
}

export default Navbar