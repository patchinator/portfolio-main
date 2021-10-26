import style from "./Language.module.scss";

const Language = (props) => {
  const colorHandler = (color) => {
    if (color === "HTML5") return "rgb(221,75,37)";
    if (color === "CSS") return "rgb(40,98,233)";
    if (color === "Ruby") return "rgb(232,14,18)";
    if (color === "Ruby on Rails") return "rgb(198,0,0)";
    if (color === "Cloudinary") return "rgb(52,72,197)";
    if (color === "PostreSQL") return "rgb(51,103,145)";
    if (color === "JSX") return "rgb(63,204,251)";
    if (color === "Next.js") return "white";
    if (color === "Chakra-UI") return "rgb(58,199,189)";
    if (color === "Firebase") return "rgb(255,203,45)";
    if (color === "Vercel") return "black";
    if (color === "SCSS") return "rgb(199,100,148)";
  };

  return (
    <div
      className={style.language}
      style={{ background: colorHandler(props.color), color: props.font }}
    >
      {props.name}
    </div>
  );
};

export default Language;
