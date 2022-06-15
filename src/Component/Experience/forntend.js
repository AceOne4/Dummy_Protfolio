import { IoIosCheckmarkCircle } from "react-icons/io";
import style from "./experience.module.css";
const Frontend = function () {
  return (
    <div className={style.skills}>
      <div className={style.skill}>
        <h2>Frontend Development</h2>
        <div className={style.skils_container}>
          <ul>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              HTML
              <small>Experienced</small>
            </li>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              Javascript <small>Experienced</small>
            </li>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              Tailwind <small>Experienced</small>
            </li>
          </ul>
          <ul>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              Css <small>Intermediate</small>
            </li>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              Bootstrap <small>Experienced</small>
            </li>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              react <small>Experienced</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Frontend;
