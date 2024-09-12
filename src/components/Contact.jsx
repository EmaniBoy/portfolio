import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                Contact
            </h1>
            <form action="https://getform.io/f/pamqveja" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>   
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                    </div>
                    <div className='flex flex-col'>  
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'></input>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'></input>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
                </div>
                <button class="projects-background bg-gradient-to-r from-[#2978b5] via-[#29b0b5] to-[#4fc0db] dark:bg-gradient-to-r dark:from-[#5b29b5] dark:via-[#294db5] dark:to-[#9c4fdb] text-white mt-4 w-full py-3 px-6 rounded-full shadow-lg hover:scale-105 ease-in duration-200">
                    Send Message
                </button>
            </form>

        </div>
    )
}

export default Contact