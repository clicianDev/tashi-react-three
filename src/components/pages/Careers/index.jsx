import React, { useState } from 'react';
import styles from '../../styles';
import Filter from './components/Filter';
import Jobs from './components/Jobs';



function Careers() {
  const [itemSelected, setItemSelected] = useState();
  const handleSelectedItem = (selectedItem) => {
    setItemSelected(selectedItem);
  };

  return (
    <>
      <section
        id="Team"
        className={`relative max-w-screen-2xl m-auto w-full h-full ${styles.sectionContainer} violet-background lg:bg-contain bg-top`}
      >
        <div className="relative font-inter py-10 md:py-20">
          <h1 className="justify-center gradient-text-2 text-center text-3xl md:text-4xl lg:text-5xl leading-[1.5] md:leading-[1.6] font-semibold p-5">
            Join Us
          </h1>
          <p className="font-normal text-base md:text-lg lg:text-xl text-center desc-color mx-5 lg:px-10">
          We're currently looking for help in the following areas:
          </p>
        </div>
        <Filter selectedItem={handleSelectedItem}/>
        <Jobs selectedItem={itemSelected}/>
      </section>
    </>
  );
}

export default Careers;
