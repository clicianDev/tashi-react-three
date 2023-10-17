import React from "react";
import styles from "../../styles";
function VersionOne() {
  return (
    <section id="About" className={`w-screen h-screen ${styles.sectionContainer} flex`}>
      <div className={`font-inter`}>
        <div className="hidden lg:block">
          <a className={`${styles.buttonBg}`}>Sample Text</a>
        </div>
        <div className="my-5">
          <h2
            className={`gradient-text text-white text-[54px]  font-semibold`}
          >
            Benefits that we deliver.
          </h2>
          <p className=" font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            <br /> suscipit semper nunc, a ultricies neque imperdiet et.
          </p>
        </div>
        <div className="px-10 pt-10 pb-0 border border-tashi-tertiary rounded-[30px]">
            <h3 className="text-white text-[26px] mb-5">
                Lower Cost
            </h3>
            <p className=" font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>  
          <div className="flex mt-5">
            <div className="border border-tashi-tertiary rounded-t-3xl p-5">
                <img src="./images/about/webload.svg" width={230} height={230}/>
            </div>
            <div className="pl-10 pt-28">
                <div className="border border-tashi-tertiary rounded-r-3xl rounded-tl-3xl p-2 grid grid-cols-5   gap-10">
                    <div className="p-5 rounded-full  border border-tashi-tertiary"></div>
                    <div className="p-5 rounded-full  border border-tashi-tertiary"></div>
                    <div className="p-5 rounded-full  border border-tashi-tertiary"></div>
                    <div className="p-5 rounded-full  border border-tashi-tertiary"></div>
                    <div className="p-5 rounded-full  border border-tashi-tertiary"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VersionOne;
