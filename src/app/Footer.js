import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-between border border-white w-[1435px] pl-6 pr-6 pt-2 pb-2 rounded-md mt-10 lg:w-auto'>
    <div className='text-xl'>Bharat`s Portfolio</div>
    <Link href='/'>www.diyasolutions.co.in</Link>
    <div> &#169;  All Rights Reserved</div>

    </div>
  )
}

export default Footer