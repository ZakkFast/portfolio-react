
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#9bc1bc] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/aa89f660-58ff-46fc-a8df-1f0f50f2f291" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ed6a5a] text-[#333]'>Contact</p>
                <p className='text-[#333] py-4'>Fill out the form below to get in touch.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#ed6a5a] hover:text-[#333] font-bold border-[#333] border-2 hover:bg-[#ed6a5a] hover:border-[#ed6a5a] px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact