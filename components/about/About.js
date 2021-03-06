import { useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

// styles
import style from "./About.module.scss";
import button from "../../styles/UI/buttons.module.scss";
import logo from "../../styles/UI/logo.module.scss";

// fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// animation
import { motion, useAnimation } from "framer-motion";
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
    <section className={style.container} id="about">
      <div className={style.about_link}></div>
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
        <div className={logo.logo_card_black}>
          <h1>About</h1>
        </div>
        <div className={style.contents}>
          <div className={style.image}>
            <div>
              <Image src={props.profile} alt={props.image_description} />
            </div>
          </div>
          <div className={style.info}>
            <p className={style.info_description_1}>{props.description_1}</p>
            <p className={style.info_description_2}>{props.description_2}</p>
          </div>
        </div>
        <div className={style.arrow_button_wrapper}>
          <Link to="card" smooth duration={1000}>
            <FontAwesomeIcon
              className={button.arrow_button}
              width="3rem"
              icon={faArrowDown}
            />
          </Link>
        </div>
      </motion.div>
      <div className={style.portfolio_link} id="projects"></div>
    </section>
  );
};

export default About;
