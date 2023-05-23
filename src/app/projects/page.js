import React from 'react'
import Link from 'next/link'

const blog = () => {
  return (
    <div className='grid grid-rows-6 text-center text-2xl p-10 space-y-10'>

    <div className='flex flex-col border rounded-2xl p-6 hover:transform hover:scale-105 hover:bg-gray-900'><Link href="https://github.com/Bharat020195/gatsby-starter-blog-tailwind"> Starter-Blog</Link> Developed a Blog using Gatsby Js and Tailwind css</div>
    <div className='flex flex-col border rounded-2xl p-6 hover:transform hover:scale-105 hover:bg-gray-900'><Link href="https://github.com/Bharat020195/Calculator"> Calculator</Link> Developed a calculator which works perfect using Java Script and Css.</div>
    <div className='flex flex-col border rounded-2xl p-6 hover:transform hover:scale-105 hover:bg-gray-900'><Link href="https://github.com/Bharat020195/clock"> Clock </Link> Developed a Clock which works perfect using Java Script and Css. </div>
    <div className='flex flex-col border rounded-2xl p-6 hover:transform hover:scale-105 hover:bg-gray-900'><Link href="https://github.com/Bharat020195/Myntra-clone">Myntra-Clone</Link> Developed Myntra Clone using Gatby Js and Tailwind Css </div>
    <div className='flex flex-col border rounded-2xl p-6 hover:transform hover:scale-105 hover:bg-gray-900'><Link href="https://github.com/Bharat020195/todo"> ToDo </Link> Developed a Adding Todo site using react native and Css and deployed it using Aws </div>
    <div className='flex flex-col border rounded-2xl p-6 hover:transform hover:scale-105 hover:bg-gray-900'><Link href="https://github.com/Bharat020195/Clone-taste"> E-commerce</Link> Developed a E-commerce site which sells Food</div>

   </div>
  )
}

export default blog