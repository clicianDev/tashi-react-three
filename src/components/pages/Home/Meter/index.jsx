import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles";
import Data from "./components/Data";

function Meter() {
  const [isSectionActive, setIsSectionActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fastest-consensus-engine"
      className={`relative ${styles.sectionContainer} max-w-screen-2xl violet-background`}
    >
      <div className="font-inter text-center p-5 ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text-2 p-2">
          Fastest Consensus <br/> Engine in the gaming industry
        </h2>
        <p className=" mt-0 md:mt-10 mb-10 md:mb-0 text-base md:text-lg text-white">
          Orders of magnitude faster and higher throughput compared to industry standards
        </p>
      </div>

      <Data isActive={isSectionActive} />
    </section>
  );
}

export default Meter;
