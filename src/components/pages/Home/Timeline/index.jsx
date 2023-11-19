import React from 'react'
import styles from '../../../styles';
function Timeline() {
    return ( 
        <section id="Timeline"  className={`max-w-screen-2xl m-auto h-full ${styles.sectionContainer}`}>
            <div className='container'>
            <ul id='cards'>
                <li className='card' id='card1'>
                    <div className='card-body'>
                        <h2 className='text-white'>Card 1</h2>
                    </div>
                </li>
                <li className='card' id='card2'>
                    <div className='card-body'>
                        <h2>Card 1</h2>
                    </div>
                </li>
                <li className='card' id='card3'>
                    <div className='card-body'>
                        <h2>Card 1</h2>
                    </div>
                </li>
            </ul>
        </div>
        </section>
        
     );
}

export default Timeline;