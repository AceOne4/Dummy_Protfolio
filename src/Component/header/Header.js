import style from "./Header.module.css";
import "../../index.css";
import me from "../../PIC/assets/me.png";
import SocialMedia from "./SocialMedia";
import CV from "../../PIC/assets/cv.pdf";
const Header = function (props) {
  const Downlaodhanlder = () => {
    window.open(CV);
  };
  return (
    <header ref={props.myref} id="home">
      <div className={`container ${style.container_Header}`}>
        <h5>Hello I'm</h5>
        <h1>Ahmed Yassin</h1>
        <h5 className="text-light"> Front End Developer</h5>
        <div className={style.btn_Container}>
          <button onClick={Downlaodhanlder} className="btn">
            Downlaod Cv
          </button>
          <button onClick={props.onClick} className="btn btn-primary">
            Lets Talk
          </button>
        </div>
        <div className={style.image_container}>
          <img src={me} alt="me" />
        </div>
        <SocialMedia style={style.social_container} />
      </div>
    </header>
  );
};
export default Header;
