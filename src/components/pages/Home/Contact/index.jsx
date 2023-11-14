import React from "react";
import styles from "../../../styles";
import Experience from "../../../Experience";

function Contact() {
  return (
    <section
      id="Features"
      className={`relative h-screen px-32 mx-auto flex items-center gap-5 hero-background overflow-hidden m-auto max-w-screen-2xl`}
    >
      <div className=" absolute">
        <h2 className="gradient-text-2 text-[54px] leading-[60px] font-semibold p-5 mb-10">
          Contact Us
        </h2>
        <div className="">
          <div className="grid grid-flow-row gap-5">
            <div className="flex gap-5">
              <img src="/images/icons/phone.svg" />
              <p className="font-inter text-white font-normal text-2xl">
                +65 9499 3991
              </p>
            </div>
            <div className="flex gap-5">
              <img src="/images/icons/email.svg" />
              <p className="font-inter text-white font-normal text-2xl">
                contactus@tashi.gg
              </p>
            </div>
            <div className="flex gap-5">
              <img src="/images/icons/pin.svg" />
              <p className="font-inter text-white font-normal text-2xl">
                1 Fullerton Rd, Singapore 049213
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-screen m-auto">
      <Experience/>
      </div>
  
    
 
      
   
    </section>
  );
}

export default Contact;
