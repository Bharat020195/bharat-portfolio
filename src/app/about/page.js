import React from 'react'
import Image from 'next/image'
const about = () => {
  return (
    <div className='border rounded-3xl ml-64 mr-64 pl-20 pr-20  mb-44 text-3xl min-h-fit '>
     
      <p className='mb-10 mt-10'>Hi this is <a href='/' className='text-blue-500'>Bharat.</a> I can create exciting web experiences. My love and quest for technology helped me adopt the latest and greatest skills and bring the best web experiences.</p>

    <p>I love working with my customers and will be available for them all the time. Our Office is located in Hyderabad, India.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7612.980633875541!2d78.5522657!3d17.436230900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684795129845!5m2!1sen!2sin" width="300" height="200" className='mb-6 ml-48 mt-10'></iframe>
    </div>
    
  )
}

export default about