import Image from 'next/image'
import Link from 'next/link'
import React from 'react';



export default function Home() {
  return (


    <main className="flex min-h-screen flex-col items-center p-10">
      
    <div className=' grid grid-cols-2 space-x-32 '>
      <div className='text-center mt-24 text-6xl leading-normal'>
        Hi, my name is <a className='text-blue-600' href='/about'>Bharat</a> and I am a passionate <a className='text-blue-600' href='/services'>Web Developer</a>
        <div className='flex space-x-12 m-20 '> 
         <button className='text-sm border rounded-2xl w-40 h-12 hover:bg-gray-600 hover:transform hover:scale-110 '>Download Resume</button>
        <button  className='text-sm border rounded-2xl w-40 h-12 hover:bg-gray-600 hover:transform hover:scale-110'><Link href="https://github.com/Bharat020195">
    Github Link
  </Link>

</button></div>
        </div>
       
      <div><Image src='/Home.png' alt= 'Unable to load Image' width={500} height={500} className='m-6' />
</div>
      
    </div>

    <hr className='border bg-white  m-[60px] w-[1450px] opacity-30'/>
<div className='text-3xl mb-24'>Project Experience : </div>


      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left  ">
        

        <Link
          href="https://github.com/Bharat020195/Myntra-clone"
          className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Myntra-clone
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           Developed a Myntra-clone using Gatsby Js and Tailwind css
          </p>
        </Link>

        <Link
          href="https://github.com/Bharat020195/clone-project"
          className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
           Portfolio-Clone
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Developed a clone website of a developer using Gatsy and taiwind css 
          </p>
        </Link>

        <Link
          href="https://github.com/Bharat020195/clock"
          className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Clock
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Created a Clock using Java Script and Css.
          </p>
        </Link>

        <Link
          href="https://github.com/Bharat020195/todo"
          className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            ToDo 
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Created a Todo website using react, tailwind css and deployed it.
          </p>
        </Link>
        
      
      </div>
    </main>
  )
}
