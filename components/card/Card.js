import { Fragment, useEffect } from "react";

import Image from "next/image";
import style from "./Card.module.scss";
import Language from "../UI/Language";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";

const Card = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Fragment>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className={style.card}
      >
        <div className={style.container}>
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
          <div className={style.image_wrapper}>
            <div className={style.card_image_1}>
              <div className={style.card_image_2}>
                <div className={style.image_wrapper_2}>
                  <Image
                    src={props.image_one}
                    alt={props.image_one}
                    width="450"
                    height="258"
                  />
                </div>
              </div>
              <Image
                src={props.image_two}
                alt={props.image_two}
                width="900"
                height="506"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className={style.languages_wrapper}
      >
        <div className={style.languages}>
          {props.languages.map((language) => (
            <Language
              key={Math.random() * 1000}
              name={language}
              color={language}
              font={language}
            />
          ))}
        </div>
      </motion.div>
    </Fragment>
  );
};

export default Card;
