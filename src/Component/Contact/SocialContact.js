import style from "./contact.module.css";
const SocialContact = function (props) {
  return (
    <div className={style.card}>
      {props.icon}
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a href="#bla"> Send a Message</a>
    </div>
  );
};
export default SocialContact;
