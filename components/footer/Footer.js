import style from "./Footer.module.scss";
import button from "../../styles/UI/buttons.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className={style.container}>
      <div className={style.footer}>
        <div className={style.footer_wrapper}>
          <Link to="header" smooth duration={1000}>
            <FontAwesomeIcon
              className={button.arrow_button}
              width="3rem"
              icon={faArrowUp}
            />
          </Link>
          <p>Get in contact</p>
          <button>
            <a href="">
              <FontAwesomeIcon width="2rem" height="2rem" icon={faEnvelope} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
