import { Link } from "react-scroll";

// styles
import style from "./Header.module.scss";
import button from "../../styles/UI/buttons.module.scss";

// icons
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// animation
import { motion } from "framer-motion";

const Header = (props) => {
  const titleVariants = {
    titleHidden: { opacity: 0 },
    titleVisible: { opacity: 1 },
  };

  return (
    <section className={style.container} id="header">
      <div className={style.details}>
        <motion.h1
          initial="titleHidden"
          animate="titleVisible"
          variants={titleVariants}
          transition={{ duration: 1.5 }}
        >
          {props.name}
        </motion.h1>
        <motion.h2
          initial="titleHidden"
          animate="titleVisible"
          variants={titleVariants}
          transition={{ duration: 2 }}
        >
          {props.role}
        </motion.h2>
        <div>
          <motion.div
            initial="titleHidden"
            animate="titleVisible"
            variants={titleVariants}
            transition={{ duration: 2.5 }}
          >
            <Link to="about" smooth duration={1000}>
              <FontAwesomeIcon
                className={button.arrow_button_white}
                width="3rem"
                icon={faArrowDown}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
