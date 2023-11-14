import React from 'react'
import InfoData from './FeaturesInfo.json'
function Info() {
    return ( <div className="grid lg:grid-cols-3 gap-5 mt-20">
        {InfoData.map((item, index) => (
            <div key={index} className='features-container px-5 py-10'>
                <div className='mb-20'>
                    <img src='/tashi-logo.svg' className='flex-shrink-0' width={70} height={70} />
                </div>
                <div className='font-inter'>
                    <h3 className='text-white text-2xl font-semibold m-auto mt-2'>{item.title}</h3>
                    <p className='text-white opacity-[0.5] font-normal text-xl'>{item.subtitle}</p>
                </div>

             </div>
        ))}
        
      </div> );
}

export default Info;