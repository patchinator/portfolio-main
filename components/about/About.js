import { useEffect } from "react";
import Image from "next/image";
import style from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";

const About = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={style.container}>
      <motion.div
        ref={ref}
        className={style.about_wrapper}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1.2 }}
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
