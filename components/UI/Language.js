import style from "./Language.module.scss";

const Language = (props) => {
  return (
    <div
      className={style.language}
      style={{ background: props.color, color: props.font }}
    >
      {props.name}
    </div>
  );
};

export default Language;
