import { IoIosCheckmarkCircle } from "react-icons/io";
import style from "./experience.module.css";
const Backend = function () {
  return (
    <div className={style.skills}>
      <div className={style.skill}>
        <h2>Backend Development</h2>
        <div className={style.skils_container}>
          <ul>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              Node Js <small>Intermediate</small>
            </li>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              PHP <small>Basic</small>
            </li>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              Python <small>Intermediate</small>
            </li>
          </ul>
          <ul>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              MonogDB<small>Experienced</small>
            </li>
            <li>
              <IoIosCheckmarkCircle color="4db5ff" />
              My SQL <small>Intermediate</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Backend;
