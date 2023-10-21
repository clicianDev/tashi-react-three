import React from "react";
import styles from "../../styles";
function Capabilities() {
  return (
    <section
      id="Capabilities"
      className={`w-screen h-screen ${styles.sectionContainer} mt-20 sm:mt-5 lg:mt-5`}
    >
      <div className={` text-center  font-inter`}>
        <div className="block mb-7">
          <a className={`${styles.buttonBg}`}>Integrations</a>
        </div>
        <h2 className={`gradient-text-2 text-white text-[54px] font-semibold`}>
          Our Capabilities
        </h2>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="lg:col-start-1 lg:col-end-2 border border-tashi-tertiary rounded-3xl p-5">
          <div className="grid grid-rows-3 gap-1  text-left justify-start ">
            <div>
              <img src={`./images/capabilities/icons/thunder.svg`} />
            </div>
            <div>
              <h3 className="text-white font-normal text-2xl">
                Sample text Here
              </h3>
            </div>
            <div>
              <p className="text-gray-400 font-normal text-lg leading-8">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:col-start-3 sm:col-end-4  lg:col-start-3 lg:col-end-4 border border-tashi-tertiary rounded-3xl p-5">
          <div className="grid lgrid-rows-3 gap-1  text-left justify-start ">
            <div>
              <img src={`./images/capabilities/icons/about.svg`} />
            </div>
            <div>
              <h3 className="text-white font-normal text-2xl">
                Sample text Here
              </h3>
            </div>
            <div>
              <p className="text-gray-400 font-normal text-lg leading-8">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-start-1 sm:col-end-2 lg:col-start-1 lg:col-end-2 border border-tashi-tertiary rounded-3xl p-5">
          <div className="grid grid-rows-3 gap-1  text-left justify-start ">
            <div>
              <img src={`./images/capabilities/icons/server.svg`} />
            </div>
            <div>
              <h3 className="text-white font-normal text-2xl">
                Sample text Here
              </h3>
            </div>
            <div>
              <p className="text-gray-400 font-normal text-lg leading-8">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-start-3 sm:col-end-4 lg:col-start-3 lg:col-end-4 border border-tashi-tertiary rounded-3xl p-5">
          <div className="grid grid-rows-3 gap-1  text-left justify-start ">
            <div>
              <img src={`./images/capabilities/icons/settings.svg`} />
            </div>
            <div>
              <h3 className="text-white font-normal text-2xl">
                Sample text Here
              </h3>
            </div>
            <div>
              <p className="text-gray-400 font-normal text-lg leading-8">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
