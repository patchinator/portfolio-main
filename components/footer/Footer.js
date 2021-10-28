import style from "./Footer.module.scss";
import button from "../../styles/UI/buttons.module.scss";
import logo from "../../styles/UI/logo.module.scss";

import { Link } from "react-scroll";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowUp,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <section className={style.container}>
      <div className={style.footer_offset}></div>
      <div className={style.footer_offset_2}></div>
      <div className={style.footer}>
        <div className={style.footer_wrapper}>
          <Link to="header" smooth duration={1000}>
            <FontAwesomeIcon
              className={button.arrow_button}
              width="3rem"
              icon={faArrowUp}
            />
          </Link>
          <p className={logo.logo_card_small}>{props.contact_message}</p>
          <button className={button.icon_button}>
            <a
              href={`mailto:${props.email_address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon width="2rem" height="2rem" icon={faEnvelope} />
            </a>
          </button>
        </div>
        <p className={style.footer_info}>{props.info}</p>
        <div className={style.details}>
          <button className={button.icon_button}>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon width="2rem" height="2rem" icon={faGithubAlt} />
            </a>
          </button>
          <button className={button.icon_button}>
            <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon width="2rem" height="2rem" icon={faLinkedin} />
            </a>
          </button>
          <button className={button.cv_button}>
            <a target="_blank" rel="noopener noreferrer" href={props.cv}>
              <FontAwesomeIcon icon={faBook} width="2rem" height="2rem" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
