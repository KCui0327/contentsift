import PropTypes from "prop-types";
import "./bar-chart-style.css";

export const ChartBarLight = ({ title = "Title", level = 0}) => {
    return (
        <div className={`chart-bar-dark`}>
            <div className="bar-text title">{title}</div>
            <div className={`bar-elem bar-left-border ${level < 1 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#2ba100"}}/>
            <div className={`bar-elem ${level < 2 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#57a800"}}/>
            <div className={`bar-elem ${level < 3 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#86b000"}}/>
            <div className={`bar-elem ${level < 4 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#b7b500"}}/>
            <div className={`bar-elem ${level < 5 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#bf8e00"}}/>
            <div className={`bar-elem ${level < 6 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#c66200"}}/>
            <div className={`bar-elem ${level < 7 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#ce3300"}}/>
            <div className={`bar-elem bar-right-border ${level < 8 ? 'elem-inactive' : ''}`} style={{backgroundColor: "#d50000"}}/>
            <div className="bar-text value">
                {level === 8 && <>8</>}

                {level === 7 && <>7</>}

                {level === 6 && <>6</>}

                {level === 5 && <>5</>}

                {level === 4 && <>4</>}

                {level === 3 && <>3</>}

                {level === 2 && <>2</>}

                {level === 1 && <>1</>}

                {level === 0 && <>0</>}
            </div>
        </div>
    );
};

ChartBarLight.propTypes = {
    title: PropTypes.string,
    level: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
};
