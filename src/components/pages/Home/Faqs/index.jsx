import {React, useState} from "react";
import styles from "../../../styles";
import FAQ from "./components/FAQ";
import './components/styles.css'
function Faqs() {

    const [faqs, setFaqs] = useState([
        {
          question: "How does Tashi ensure cheat resistance in its multiplayer sessions?",
          answer:
            "Tashi ensures cheat resistance by using its proprietary Tashi Consensus Engine (TCE), which operates on a decentralized network that is controlled by the players themselves. This makes it almost impossible for any single entity to manipulate the game in their favor, providing an equal chance of winning for all players.",
          open: false
        },
        {
          question: "Is Tashi compatible with various game engines?",
          answer:  "Yes, Tashi is designed with compatibility in mind and can be integrated with various game engines, including Unity and Unreal Engine. This allows game developers to use Tashi for a wide range of games and platforms.",
          open: false
        },
        {
          question:
            "How does Tashi maintain high performance in multiplayer sessions?",
          answer:  "Tashi achieves high performance by leveraging its unique consensus protocol, which ensures fast and efficient communication between players' devices during multiplayer sessions. This results in reduced latency and a smoother gaming experience for all players.",
          open: false
        },

        {
            question:
              "Can Tashi help game developers reduce the cost of multiplayer backend infrastructure?",
            answer:  "Absolutely! Tashi's peer-to-peer (P2P) system eliminates the need for costly dedicated servers, reducing the cost of running a multiplayer backend to zero (unless you choose to use our metrics services). This allows indie game developers to focus on creating the best game possible without worrying about the cost of dedicated servers or the complexity of writing netcode.  ",
            open: false
          },
          {
            question:
              "How can I get started with Tashi?",
            answer:  "You can sign up for Tashi's closed beta program at https://docs.tashi.gg/documentation/ Once you're in the program, you'll have access to Tashi's SDK and documentation, which will guide you through integrating Tashi's multiplayer solution into your game.",
            open: false
          },
          {
            question:
              "Are there any additional benefits to using Tashi besides cost savings and cheat resistance?",
            answer:  "Yes! Tashi's consensus-authoritative approach not only saves costs and ensures cheat resistance but is also simple enough for any game developer with no backend experience to implement.",
            open: false
          },
          {
            question:
              "Can Tashi support large-scale multiplayer games?",
            answer:  "Yes, Tashi's peer-to-peer architecture can scale to support large-scale multiplayer games, while maintaining high performance and cheat resistance. This makes Tashi an ideal choice for both indie developers and large gaming studios.",
            open: false
          }
      ]);
    
      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };
  return (
    <section
      id="Features"
      className={`w-screen h-screen ${styles.sectionContainer} violet-background m-auto max-w-7xl`}
    >
      <div className="my-10">
        <h2 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
            FAQ's
        </h2>
      </div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
}

export default Faqs;
