import React from 'react';
import styles from '../../styles';

function Blog() {
  return (
    <>
      <section
        id="Blog"
        className={`relative max-w-screen-2xl m-auto w-full h-full ${styles.sectionContainer} violet-background lg:bg-contain bg-top`}
      >
        <div className="relative font-inter py-10 md:py-20">
          <h1 className="justify-center gradient-text-2 text-center text-3xl md:text-4xl lg:text-5xl leading-[1.5] md:leading-[1.6] font-semibold p-5">
          Tashi’s Blog
          </h1>
        </div>

      </section>
    </>
  );
}

export default Blog;
