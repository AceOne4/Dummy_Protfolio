import Backend from "./backend";
import Frontend from "./forntend";
import style from "./experience.module.css";
const Experience = function (props) {
  return (
    <section ref={props.myref} id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className={`container ${style.exp_container}`}>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
export default Experience;
