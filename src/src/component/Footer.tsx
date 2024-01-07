import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Footer.css";

export const Footer = ({mode = "light"}) => {
    return (
        <div className={`footer-${mode}`}>
          <div className ="icon-button home-button">
            {mode === "dark"
                ? <FontAwesomeIcon icon={faHouse} size="2x" inverse/>
                : <FontAwesomeIcon icon={faHouse} size="2x"/>
            }
          </div>
          <div className="icon-button settings-button">
            {mode === "dark"
                ? <FontAwesomeIcon icon={faGear} size="2x" inverse/>
                : <FontAwesomeIcon icon={faGear} size="2x"/>
            }
          </div>
          <div className="icon-button info-button">
            {mode === "dark"
                ? <FontAwesomeIcon icon={faCircleInfo} size="2x" inverse/>
                : <FontAwesomeIcon icon={faCircleInfo} size="2x"/>
            }
          </div>
        </div>        
    )
}

Footer.propTypes = {
    mode: PropTypes.oneOf(["light", "dark"]),
};