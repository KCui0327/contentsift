import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFile, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

type FooterProps = {
    mode: string,
    toggleState: (e: React.MouseEvent, state: string) => void;
}

export const Footer: React.FC<FooterProps> = (props) => {


    return (
        <div className={`footer-${props.mode}`}>
          <div className={`icon-button-${props.mode} home-button`} onClick={(e) => props.toggleState(e, "home")}>
            {props.mode === "dark"
                ? <FontAwesomeIcon icon={faHouse} size="2x" inverse/>
                : <FontAwesomeIcon icon={faHouse} size="2x"/>
            }
          </div>
          <div className={`icon-button-${props.mode} info-button`} onClick={(e) => props.toggleState(e, "info")}>
            {props.mode === "dark"
                ? <FontAwesomeIcon icon={faCircleInfo} size="2x" inverse/>
                : <FontAwesomeIcon icon={faCircleInfo} size="2x"/>
            }
          </div>
          <div className={`icon-button-${props.mode} report-button`} onClick={(e) => props.toggleState(e, "report")}>
            {props.mode === "dark"
                ? <FontAwesomeIcon icon={faFile} size="2x" inverse/>
                : <FontAwesomeIcon icon={faFile} size="2x"/>
            }
          </div>
        </div>        
    )
}