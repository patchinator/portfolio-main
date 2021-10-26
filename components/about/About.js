import Image from "next/image";
import style from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const About = (props) => {
  return (
    <section>
      <div className={style.about_wrapper}>
        <div className={style.title}>
          <h1>About</h1>
        </div>
        <div className={style.contents}>
          <div className={style.image}>
            <div>
              <Image
                src={props.profile}
                alt={props.description}
                width="400px"
                height="400px"
              />
            </div>
          </div>
          <div className={style.info}>
            <p className={style.info_name}>Patrick</p>
            <p className={style.info_description}>Keen boy</p>
            <button>
              <FontAwesomeIcon icon={faBook} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
