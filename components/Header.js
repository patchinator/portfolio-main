import { Fragment } from "react";
import style from "./Header.module.scss";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Fragment>
      <section className={style.container}>
        <div className={style.details}>
          <h1>Patrick Hoveman</h1>
          <h2>Junior Web Developer</h2>
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
