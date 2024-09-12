import React from 'react'

const Workitem1 = ({year, title, duration, details}) => {
    return(
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>

                    <span className='incline-block px-2 py-1 font-semibold text-white projects-background bg-gradient-to-r from-[#2978b5] via-[#29b0b5] to-[#4fc0db] dark:bg-gradient-to-r dark:from-[#5b29b5] dark:via-[#294db5] dark:to-[#9c4fdb] rounded-md' data-aos-duration='1000' data-aos='zoom-in-right'>{year}</span>
                    <span className='text-lg font-semibold text-[#001b5e]'>{title}</span>
                    <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
                    
                </p>
                <p className='my-2 text-base front-normal text-stone-500'>
                    {details}
                </p>
            </li>
        </ol>

    )
    
}

export default Workitem1