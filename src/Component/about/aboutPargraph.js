import style from "./about.module.css";
import { FaAward, FaUsers } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
const Pargraph = function (props) {
  return (
    <div className={style.pargraph_container}>
      <div className={style.cards}>
        <article>
          <FaAward color="#4db5ff" fontSize="1.4rem" />
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>

        <article>
          <FaUsers color="#4db5ff" fontSize="1.4rem" />
          <h5>Clients</h5>
          <small>3000+ Worldwide</small>
        </article>

        <article>
          <RiProjectorFill color="#4db5ff" fontSize="1.4rem" />
          <h5>Projects</h5>
          <small>80+ Completed</small>
        </article>
      </div>
      <p className={style.Pa}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.d
      </p>
      <button onClick={props.onClick} className="btn btn-primary">
        Lets Talk
      </button>
    </div>
  );
};

export default Pargraph;
