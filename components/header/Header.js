import { Fragment } from "react";
import style from "./Header.module.scss";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Header = (props) => {
  const titleVariants = {
    titleHidden: { opacity: 0 },
    titleVisible: { opacity: 1 },
  };

  return (
    <Fragment>
      <section className={style.container}>
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
            <button>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
