import { GiCheckMark } from "react-icons/gi";
import style from "./services.module.css";
const ServContent = function (props) {
  return (
    <article>
      <div className={style.header}>
        <h2>{props.name}</h2>
      </div>
      <div className={style.content}>
        <div>
          <GiCheckMark color="#4db5ff" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div>
          <GiCheckMark color="#4db5ff" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div>
          <GiCheckMark color="#4db5ff" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div>
          <GiCheckMark color="#4db5ff" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div>
          <GiCheckMark color="#4db5ff" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
    </article>
  );
};
export default ServContent;
