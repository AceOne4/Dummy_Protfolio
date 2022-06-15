import ServContent from "./servcontent";
import style from "./services.module.css";
const Services = function (props) {
  return (
    <section ref={props.myref} id="services">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${style.service_container}`}>
        <ServContent name="UI/UX Design" />
        <ServContent name="Web Development" />
        <ServContent name="Contetnt Creation" />
      </div>
    </section>
  );
};
export default Services;
