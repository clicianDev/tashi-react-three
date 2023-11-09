import React from 'react'
import styles
 from '../../../styles';
function GameStack() {
    return ( 
        <section id="Features"  className={`w-screen h-screen ${styles.sectionContainer}  `}>
        <div >
          <h2 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
          dGame-Stack
          </h2>
          <p className="font-normal text-lg text-center text-white lg:px-96">
          Our backend game stack is the most decentralised in the gaming industry
        </p>
        </div>

        <div className='w-full justify-center my-20'>
            <img src='images/gamestack/circle.svg' className='m-auto'/>
        </div>

    </section> );
}

export default GameStack;