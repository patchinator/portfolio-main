import style from "./Language.module.scss";
import { motion } from "framer-motion";

const Language = (props) => {
  const colorHandler = (color) => {
    if (color === "HTML5") return "rgb(221,75,37)";
    if (color === "CSS") return "rgb(40,98,233)";
    if (color === "Ruby") return "rgb(232,14,18)";
    if (color === "Ruby on Rails") return "rgb(198,0,0)";
    if (color === "Cloudinary") return "rgb(52,72,197)";
    if (color === "PostreSQL") return "rgb(51,103,145)";
    if (color === "Javascript") return "rgb(239,216,29)";
    if (color === "Next.js") return "white";
    if (color === "Chakra-UI") return "rgb(58,199,189)";
    if (color === "Firebase") return "rgb(255,203,45)";
    if (color === "React") return "rgb(63,204,251)";
    if (color === "Vercel") return "black";
    if (color === "SCSS") return "rgb(199,100,148)";
    if (color === "Mapbox API") return "rgb(66, 100, 251)";
    return "rgb(240, 240, 240)";
  };

  const fontColorHandler = (font) => {
    if (font === "HTML5") return "white";
    if (font === "CSS") return "white";
    if (font === "Ruby") return "white";
    if (font === "Ruby on Rails") return "white";
    if (font === "Cloudinary") return "white";
    if (font === "PostreSQL") return "white";
    if (font === "Javascript") return "black";
    if (font === "Next.js") return "black";
    if (font === "Chakra-UI") return "black";
    if (font === "Firebase") return "black";
    if (font === "React") return "black";
    if (font === "Vercel") return "white";
    if (font === "SCSS") return "white";
    if (font === "Mapbox API") return "white";
  };

  return (
    <motion.div
      whileHover={{
        scale: [1.02, 1.03, 1.05, 1.07, 1.05],
        transition: { duration: 0.2 },
      }}
      className={style.language}
      style={{
        background: colorHandler(props.color),
        color: fontColorHandler(props.font),
      }}
    >
      {props.name}
    </motion.div>
  );
};

export default Language;
