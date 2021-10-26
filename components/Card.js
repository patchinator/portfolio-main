import { Fragment } from "react";
import Image from "next/image";
import style from "./Card.module.scss";
import Language from "./UI/Language";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <Fragment>
      <div className={style.card_container}>
        <div className={style.card_info}>
          <h1 className={style.title}>{props.title}</h1>
          <p className={style.card_text}>{props.paragraph_one}</p>
          <p className={style.card_text}>{props.paragraph_two}</p>
          <div className={style.button_wrapper}>
            <button>
              <FontAwesomeIcon icon={faGitAlt} />
            </button>
            <button>
              <FontAwesomeIcon icon={faGlobe} />
            </button>
          </div>
        </div>
        <div>
          <div className={style.card_image}>
            <Image
              src={props.image_one}
              alt={props.image_one}
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
