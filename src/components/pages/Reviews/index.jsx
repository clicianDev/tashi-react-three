import React from 'react'
import styles from '../../styles'

function Reviews() {
    return ( 
        <section
        id="Reviews"
        className={`w-screen h-screen ${styles.sectionContainer} mt-20 sm:mt-5 lg:mt-5 bg-[#030214] py-20`}
      >
        <div className={` text-center  font-inter`}>
          <div className="block mb-7">
            <a className={`${styles.buttonBg}`}>Sample text here</a>
          </div>
          <h2 className={`gradient-text-2 text-white text-[54px] font-semibold`}>
            Loved by Developers
          </h2>
        </div>
        </section>
     );
}

export default Reviews;