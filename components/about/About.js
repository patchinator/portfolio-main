import Image from "next/image";
import style from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const About = (props) => {
  const variants = {
    visible: { opactity: 1 },
    hidden: { opactity: 0 },
  };

  return (
    <section className={style.container}>
      <motion.div
        className={style.about_wrapper}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <div className={style.title}>
          <h1>About</h1>
        </div>
        <div className={style.contents}>
          <div className={style.image}>
            <div>
              <Image
                src={props.profile}
                alt={props.image_description}
                width="400px"
                height="400px"
              />
            </div>
          </div>
          <div className={style.info}>
            <p className={style.info_description_1}>{props.description_1}</p>
            <p className={style.info_description_2}>{props.description_2}</p>
            <div className={style.button_wrapper}>
              <button>
                <FontAwesomeIcon icon={faBook} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
