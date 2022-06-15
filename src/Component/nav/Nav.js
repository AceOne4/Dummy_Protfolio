import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageAltDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import style from "./nav.module.css";

const Nav = function (props) {
  console.log(props.shows);
  return (
    <nav>
      <a href="#home" className={props.shows === "home" ? style.active : ""}>
        <AiOutlineHome />
      </a>

      <a href="#about" className={props.shows === "about" ? style.active : ""}>
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        className={props.shows === "experience" ? style.active : ""}
      >
        <BiBook />
      </a>

      <a
        href="#services"
        className={props.shows === "services" ? style.active : ""}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        className={props.shows === "contact" ? style.active : ""}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};
export default Nav;
