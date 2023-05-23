import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='container flex flex-col text-center '>
      <div className='grid grid-cols-2 space-x-48 ml-32 text-2xl items-center leading-normal'><div>Web Developement : <p> Hello, I'm a passionate web developer with expertise in front-end and back-end development. I have a strong command of HTML, CSS, Tailwind CSS, JavaScript, and React.js, with experience in building responsive and interactive websites </p></div>
      <div><Image src='/Web.png' alt= 'Unable to load Image' width={300} height={300}/></div></div>
      <hr className='border bg-white  m-[60px] w-6/6 opacity-30'/>

      <div className='grid grid-cols-2 space-x-48 ml-32 text-2xl items-center leading-normal'><div>Wen Designing :<p>I'm a passionate web designer with a knack for crafting engaging and user-friendly digital experiences. With a blend of creativity and technical expertise, I specialize in creating visually stunning and functional websites using CSS and Tailwind CSS.</p></div>
      <div><Image src='/webdesign.png'  alt= 'Unable to load Image' width={300} height={300}/></div></div>
      <hr className='border bg-white  m-[60px] w-6/6 opacity-30'/>
      <div className='grid grid-cols-2 space-x-48 ml-32 text-2xl items-center leading-normal'><div>React Native Developer: <p> I'm a passionate React Native developer specializing in building high-performance mobile applications. With a strong foundation in JavaScript and a deep understanding of mobile app development, I'm dedicated to creating seamless and engaging experiences for users. My expertise lies in harnessing the power of React Native to develop cross-platform applications that run seamlessly on both iOS and Android devices.</p></div>
      <div><Image src='/react-native.png' alt= 'Unable to load Image'  width={300} height={300}/></div></div>
      
    </div>
  )
}

export default page