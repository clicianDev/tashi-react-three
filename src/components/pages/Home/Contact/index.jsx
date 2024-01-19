import React from "react";
import styles from "../../../styles";
import Experience from "../../../Experience";
import Experience3 from "../../../Experience3";

function Contact() {
  return (
    <section
      id="Features"
      className={`relative h-screen px-10  md:px-28 lg:px-32 mx-auto gap-5 hero-background overflow-hidden`}
    >
      <div className="max-w-screen-2xl m-auto relative h-full flex items-center">
        <div className="absolute z-20 lg:px-20 xl:px-0">
          <h2 className="my-10  text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text">
            Contact Us
          </h2>
          <div className="">
            <div className="m-auto grid grid-flow-row gap-5">
              <div className="flex gap-5">
                <img src="/images/icons/phone.svg" />
                <p className="font-inter text-white font-normal text-lg md:text-2xl">
                  +65 9499 3991
                </p>
              </div>
              <div className="flex gap-5">
                <img src="/images/icons/email.svg" />
                <p className="font-inter text-white font-normal text-lg md:text-2xl">
                  contactus@tashi.gg
                </p>
              </div>

              <div className="flex gap-5">
                <img src="/images/icons/pin.svg" />
                <p className="font-inter text-white font-normal text-lg md:text-2xl">
                  1 Fullerton Rd, Singapore 049213
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto absolute mr-[-50%] w-full h-[250px] md:h-[500px] lg:h-[600px] xl:h-[700px] mx-16 sm:mx-0 md:mx-0 lg:mx-0 mt-[-10%] sm:mt-0">
          <Experience3 />
        </div>
      </div>
    </section>
  );
}

export default Contact;
