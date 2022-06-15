import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const SocialMedia = function (props) {
  return (
    <div className={props.style}>
      <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="http://www.github.com" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
