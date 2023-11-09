import React from "react";
import styles
 from "../../../styles";
function Contact() {
  return (
    <section
      id="Features"
      className={`w-screen h-screen ${styles.sectionContainer}  py-20 flex hero-background`}
    >
      <div>
        <h2 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
            Contact Us
        </h2>
      </div>
    </section>
  );
}

export default Contact;
