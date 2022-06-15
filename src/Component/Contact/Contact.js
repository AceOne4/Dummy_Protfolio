import SocialContact from "./SocialContact";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import style from "./contact.module.css";
const Contact = function (props) {
  const icons = [
    <AiOutlineMail fontSize="25px" />,
    <RiMessengerLine fontSize="25px" />,
    <AiOutlineWhatsApp fontSize="25px" />,
  ];

  return (
    <section ref={props.myref} id="contact">
      <h5 className={style.push}>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${style.contact_Container}`}>
        <div className={style.cards_container}>
          <SocialContact icon={icons[0]} name="email" description="bal" />
          <SocialContact icon={icons[1]} name="Messenger" description="bal" />
          <SocialContact icon={icons[2]} name="WhatsApp" description="bal" />
        </div>
        <form className={style.input_container}>
          <input placeholder="Your Full Name" type="text" />
          <input placeholder="Your Email" type="Email" />
          <textarea
            id={style.message}
            placeholder="Your Message"
            name="message"
            rows="4"
            cols="50"
          />

          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
