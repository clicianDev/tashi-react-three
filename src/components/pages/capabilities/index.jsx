import React from "react";
import styles from "../../styles";
function Capabilities() {
  return (
    <section
      id="About"
      className={`w-screen h-screen ${styles.sectionContainer} `}
    >
      <div className={` text-center py-12 font-inter `}>
        <div className="block mb-7">
          <a className={`${styles.buttonBgTwo}`}>Integrations</a>
        </div>
        <h2 className={`gradient-text-2 text-white text-[54px] font-semibold`}>
          Our Capabilities
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-start-1 col-end-2 border border-tashi-tertiary rounded-3xl p-5">
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
        <div className="col-start-3 col-end-4 border border-tashi-tertiary rounded-3xl p-5">
          <div className="grid grid-rows-3 gap-1  text-left justify-start ">
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
        <div className="col-start-1 col-end-2 border border-tashi-tertiary rounded-3xl p-5">
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
        <div className="col-start-3 col-end-4 border border-tashi-tertiary rounded-3xl p-5">
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
