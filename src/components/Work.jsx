import React from 'react'
import Workitem1 from './Workitem1'

const data = [
    {
        year: 2020,
        title: 'Content creator',
        duration: '3 years',
        details:
         'eufawoiugfhoaireyguaoeriughapow irughowiruga oeifuvowy rgfpoqwiyfbodsiufhao riygboarwiubfor ugboearygfoaer ygowriugbaoe iyrvgowrybfowirugp    eiuwfhpufaiousyfvoauysegfowefgowyegfowe'
    },
    {
        year: 2020,
        title: 'Content creator',
        duration: '3 years',
        details:
         'eufawoiugfhoaireyguaoeriughapow irughowiruga oeifuvowy rgfpoqwiyfbodsiufhao riygboarwiubfor ugboearygfoaer ygowriugbaoe iyrvgowrybfowirugp    eiuwfhpufaiousyfvoauysegfowefgowyegfowe'
    },
    {
        year: 2020,
        title: 'Content creator',
        duration: '3 years',
        details:
         'eufawoiugfhoaireyguaoeriughapow irughowiruga oeifuvowy rgfpoqwiyfbodsiufhao riygboarwiubfor ugboearygfoaer ygowriugbaoe iyrvgowrybfowirugp    eiuwfhpufaiousyfvoauysegfowefgowyegfowe'
    },
    {
        year: 2020,
        title: 'Content creator',
        duration: '3 years',
        details:
         'eufawoiugfhoaireyguaoeriughapow irughowiruga oeifuvowy rgfpoqwiyfbodsiufhao riygboarwiubfor ugboearygfoaer ygowriugbaoe iyrvgowrybfowirugp    eiuwfhpufaiousyfvoauysegfowefgowyegfowe'
    },
]
const Work = () => {
    return(
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
                Work
            </h1>
            {data.map((item, idx)=> (
                <Workitem1 key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}

        </div>
    )
}

export default Work