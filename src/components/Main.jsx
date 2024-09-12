import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaSnapchat, FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'> 
            <div class='bg-white dark:bg-gray-800 transition-colors duration-300'>
            
            <div class="w-screen projects-background h-screen bg-gradient-to-r from-[#2978b5] via-[#29b0b5] to-[#4fc0db] dark:bg-gradient-to-r dark:from-[#5b29b5] dark:via-[#294db5] dark:to-[#9c4fdb]" >
            
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-6xl text4xl font-bold text-[#2a2f4c] dark:text-[#cdcdff]'> I'm Karthik Emani</h1>
                <h2 className='flex sm:text-4xl text2xl pt-4 text-[#2a2f4c] dark:text-[#cdcdff]'>
                    <TypeAnimation
                    sequence={[
                  // Same substring at the start will only be typed out once, initially
                        "I'm a Learner",
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        "I'm a Tech Enthusiast",
                        3000,
                        "I'm a Developer",
                        3000,
                        "I'm a Student",
                        3000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
                    repeat={Infinity}
                    />


                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='cursor-pointer text-[#2a2f4c] dark:text-[#cdcdff] transition duration-300 hover:translate-y-1'  size={20} />
                    </a>
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className='cursor-pointer text-[#2a2f4c] dark:text-[#cdcdff] transition duration-300 hover:translate-y-1' size={20}/>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='cursor-pointer text-[#2a2f4c] dark:text-[#cdcdff] transition duration-300 hover:translate-y-1' size={20}/>
                    </a>
                    <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
                    <FaSnapchat className='cursor-pointer text-[#2a2f4c] dark:text-[#cdcdff] transition duration-300 hover:translate-y-1' size={20}/>
                    </a>
                </div>
            </div>
            </div>
            
        </div>
       </div>
    )
}

export default Main
