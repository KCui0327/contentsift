import PropTypes from "prop-types";
import "./bar-chart-style.css";

export const ChartBar= ({ title = "Title", level = 0, mode = "light"}) => {
    return (
        <div className={`chart-bar`}>
            <div className={`bar-text-${mode} title`}>{title}</div>
            <div className={`bar-elem bar-left-border ${level < 1 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#2ba100"}}/>
            <div className={`bar-elem ${level < 2 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#57a800"}}/>
            <div className={`bar-elem ${level < 3 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#86b000"}}/>
            <div className={`bar-elem ${level < 4 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#b7b500"}}/>
            <div className={`bar-elem ${level < 5 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#bf8e00"}}/>
            <div className={`bar-elem ${level < 6 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#c66200"}}/>
            <div className={`bar-elem ${level < 7 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#ce3300"}}/>
            <div className={`bar-elem bar-right-border ${level < 8 ? `elem-inactive-${mode}` : ''}`} style={{backgroundColor: "#d50000"}}/>
            <div className={`bar-text-${mode} title`}>
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

ChartBar.propTypes = {
    title: PropTypes.string,
    level: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    mode: PropTypes.oneOf(["light", "dark"]),
};
