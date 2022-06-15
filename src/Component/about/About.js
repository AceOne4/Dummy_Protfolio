import pic from "../../PIC/assets/me-about.jpg";
import Pargraph from "./aboutPargraph";
import style from "./about.module.css";

const About = function (props) {
  return (
    <section ref={props.myref} id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${style.about_container}`}>
        <div className={style.image}>
          <img src={pic} alt="about-me" />
        </div>
        <Pargraph onClick={props.onClick} />
      </div>
    </section>
  );
};
export default About;
