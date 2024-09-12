import React from 'react'

const Projectsitem = ({img, title}) => {
    return (
    
       <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover: projects-background bg-gradient-to-r from-[#2978b5] via-[#29b0b5] to-[#4fc0db] dark:bg-gradient-to-r dark:from-[#5b29b5] dark:via-[#294db5] dark:to-[#9c4fdb] transition duration-300 hover:translate-y-5">
    <img src={img} alt="/" className="rounded-md group-hover:opacity-10" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-white text-center'>Reactjs</p>
                <a href="/">
                    <p className='text center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg transition duration-300 hover:scale-125'>More Info</p>
                </a>
            </div>
        </div>
        
    )
}

export default Projectsitem