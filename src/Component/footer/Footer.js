//import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SocialMedia from "../header/SocialMedia";
import style from "./footer.module.css";
const Footer = function () {
  return (
    <footer>
      <a className={style.name} href="#home">
        ACE
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#potfolio">PortFolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <SocialMedia style={style.social} />
      <div className={style.copyright}>
        <p>© ACE all Right Reseved</p>
      </div>
    </footer>
  );
};
export default Footer;
