import React from 'react'
import styles
 from '../../../styles';
function Integrate() {
    return ( 
        <section id="Integrate"  className={`max-w-screen-2xl m-auto h-full ${styles.sectionContainer} violet-background  grid grid-cols-2 my-10 gap-10`}>
              <div className='w-full justify-center my-20 '>
            <img src='images/integrate.svg' className='m-auto'/>
        </div>
        <div className='mt-[35%] justify-start'>
          <h2 className="gradient-text-2 text-[54px] leading-[60px] font-semibold p-5">
          Integration With <br/>
Public Networks
          </h2>
          <p className="font-normal text-lg text-white mx-5">
          Our public network will inter-operate with all the leading L1's and L2's from the get go
        </p>
        </div>

      

    </section> );
}

export default Integrate;