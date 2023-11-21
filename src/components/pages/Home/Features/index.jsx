import React, { useEffect, useRef } from "react";
import styles from "../../../styles";
import Info from "./components/Info";

function Features() {
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry); // Log entry information
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("active");
          sectionRef2.current.classList.add("active");
        } else {
          sectionRef.current.classList.remove("active");
          sectionRef2.current.classList.remove("active");
        }
      });
    }, options);

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  
  return (
<section
  id="Features"
  className={`relative max-w-screen-2xl w-auto m-auto h-full ${styles.sectionContainer} violet-background overflow-hidden`}
>
  <div className="z-10">
    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text">
      Tashi’s Features are Valuable to
      <br /> both Web2 + Web3 Game Devs
    </h2>
  </div>

  <div className="absolute w-[90%]  h-full p-2 z-0 mt-5" >
    <div
    
      className="flex gap-80 justify-center w-full"
    >
      <div   ref={sectionRef} className="justify-center p-5 md:p-2 lg:p-10 xl:p-0 floating">
        <img className="m-auto" src="/images/solutions/Web2.svg" width={250} height={250}/>
      </div>
      <div   ref={sectionRef2} className="justify-center p-5 md:p-2 lg:p-10 xl:p-0 floating2">
        <img className="m-auto" src="/images/solutions/Web3.svg" width={250} height={250} />
      </div>
    </div>
  </div>
  
  <Info />
</section>

  );
}

export default Features;
