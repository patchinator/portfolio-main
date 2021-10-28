import style from "./Footer.module.scss";
import button from "../../styles/UI/buttons.module.scss";
import logo from "../../styles/UI/logo.module.scss";

import { Link } from "react-scroll";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          <div>
            <button className={button.icon_button}>
              <a
                href="mailto:patrickhoveman@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon width="2rem" height="2rem" icon={faEnvelope} />
              </a>
            </button>
            <button className={button.icon_button}>
              <a
                href="mailto:patrickhoveman@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  width="2rem"
                  height="2rem"
                  icon={faGithubAlt}
                />
              </a>
            </button>
            <button className={button.icon_button}>
              <a
                href="mailto:patrickhoveman@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon width="2rem" height="2rem" icon={faLinkedin} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
