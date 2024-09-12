import React from 'react'
import Projectsitem from './Projectsitem'
import Portfoliopic1Img from '../assets/Portfoliopic1.jpg'
import Portfoliopic2Img from '../assets/Portfoliopic2.jpg'
import Portfoliopic3Img from '../assets/Portfoliopic3.jpg'
import Portfoliopic4Img from '../assets/Portfoliopic4.jpg'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cumque necessitatibus accusamus sequi, autem distinctio, quibusdam 
                officia dolore officiis adipisci magnam maxime commodi nam nesciunt 
                ex corrupti numquam facere ab? Quod!
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
            <div data-aos="fade-right" data-aos-duration='1000' data-aos-easing='ease-out'><Projectsitem img={Portfoliopic1Img} title='Project 1' /></div>    
            <div data-aos="fade-left" data-aos-duration='1000' data-aos-easing='ease-out'><Projectsitem img={Portfoliopic2Img} title='Project 2'/></div>
            <div data-aos="fade-right" data-aos-duration='1000' data-aos-easing='ease-out'><Projectsitem img={Portfoliopic3Img} title='Project 3'/></div>
            <div data-aos="fade-left" data-aos-duration='1000' data-aos-easing='ease-out'><Projectsitem img={Portfoliopic4Img} title='Project 4'/></div>
            </div>
        </div>
    )
}

export default Projects 
