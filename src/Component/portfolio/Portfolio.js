import Projects from "./projects";
import style from "./portfolio.module.css";
const PortFolio = function () {
  return (
    <section id="potfolio">
      <h5 className={style.push}>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Projects />
    </section>
  );
};
export default PortFolio;
