import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
     <div className="flex justify-center p-10  ">
    <nav>
      <ul className="flex space-x-20 mb-10">
        <li className="items-center flex border  rounded-xl w-24 h-10 text-center justify-center hover:transform hover:scale-110 hover:text-blue-400">
          <Link href="/">Home</Link>
        </li>
       
        <li className="items-center flex border   rounded-xl w-24 h-10 text-center justify-center hover:transform hover:scale-110 hover:text-blue-400">
          <Link href="/services">Services</Link>
        </li>
        <li className="items-center flex border   rounded-xl w-24 h-10 text-center justify-center hover:transform hover:scale-110 hover:text-blue-400">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="items-center flex border   rounded-xl w-24 h-10 text-center justify-center hover:transform hover:scale-110 hover:text-blue-400">
          <Link href="/about">About</Link>
        </li>
        <li className="items-center flex border  rounded-xl w-24 h-10 text-center justify-center hover:transform hover:scale-110 hover:text-blue-400">
          <Link href="/contact">Contact Me</Link>
        </li>
       
      </ul>
    </nav>
    
  </div>
  )
}

export default Navbar