'use client'
import { useState } from 'react';

const Contact = () => {
  const [onSubmit, setOnSubmit] = useState(false);

  const handleSubmit = () => {
    setOnSubmit(true);
  };

  return (
    <div>
      <form className='flex flex-col items-center space-y-6 mb-56 text-black' action='https://formspree.io/f/mgebboob' method='POST'>
        <div className='text-2xl font-serif'>Send us a message</div>
        <input type='text' placeholder='Name' name= 'Name' className='w-[600px] h-[40px] rounded-md border border-blue-400' />
        <input type='email' placeholder='Email' name= 'Email' className='w-[600px] h-[40px] rounded-md border border-blue-400' />
        <input type='number' placeholder='Phone Number'  name= 'Phone Number' className='w-[600px] h-[40px] rounded-md border border-blue-400' />
        <textarea placeholder='Enter your message here.' name= 'message' className='w-[600px] h-auto rounded-md border border-blue-400' />
        <button className='bg-blue-700 w-28 h-10 rounded-lg hover:transform hover:scale-105 text-white' type='submit' onClick={handleSubmit}>
          Send Now
        </button>
        {onSubmit && (
          <div className='text-white'>
            Thank you for contacting us. We will get in touch with you soon.
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;


  




