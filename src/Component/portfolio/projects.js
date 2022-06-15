import pic1 from "../../PIC/assets/portfolio1.jpg";
import pic2 from "../../PIC/assets/portfolio2.jpg";
import pic3 from "../../PIC/assets/portfolio3.jpg";
import pic4 from "../../PIC/assets/portfolio4.jpg";
import pic5 from "../../PIC/assets/portfolio5.png";
import pic6 from "../../PIC/assets/portfolio6.jpg";
import style from "./portfolio.module.css";
const Projects = function () {
  const projectPic = [pic1, pic2, pic3, pic4, pic5, pic6];

  const projectConten = projectPic.map((pic) => {
    return (
      <div>
        <img src={pic} alt="pic" />
        <p>porject name</p>

        <button className="btn">Git Hub</button>
        <button className="btn btn-primary">Live Demo </button>
      </div>
    );
  });
  return (
    <div className={`container ${style.portfolio_container}`}>
      {projectConten}
    </div>
  );
};

export default Projects;
