import { Fragment } from "react";
import Image from "next/image";
import foodie_1 from "../images/foodie_1.png";
import style from "./Card.module.scss";
import Language from "./UI/Language";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <Fragment>
      <div className={style.card_container}>
        <h1 className={style.title}>{props.title}</h1>
        <div className={style.card_info}>
          <p className={style.card_text}>{props.paragraph_one}</p>
          <p className={style.card_text}>{props.paragraph_two}</p>
          <div className={style.button_wrapper}>
            <button>Git</button>
            <button>Site</button>
          </div>
        </div>
        <div>
          <div className={style.card_image}>
            <Image
              src={foodie_1}
              alt={foodie_1}
              width="900"
              height="506"
            ></Image>
          </div>
        </div>
      </div>
      <div className={style.languages_wrapper}>
        <div className={style.languages}>
          <Language name="HTML5" color="rgb(221,75,37)" />
          <Language name="JSX" color="rgb(63,204,251)" />
          <Language name="Next.js" color="white" />
          <Language name="Chakra-UI" color="rgb(58,199,189)" />
          <Language name="Firebase" color="rgb(255,203,45)" />
          <Language name="Vercel" color="black" font="white" />
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
