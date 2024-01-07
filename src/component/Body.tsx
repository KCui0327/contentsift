import './Body.css'

export const Body = ({mode = "light"}) => {
    return (
        <div className={`body-${mode}`}>
            <div className={`header-${mode}`}>This Session</div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Scanned</div>
                <div className={`table-value-${mode}`}>127</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Flagged</div>
                <div className={`table-value-${mode}`}>17</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Percent Flagged</div>
                <div className={`table-value-${mode}`}>12.7%</div>
            </div>

            <div className={`header-${mode}`}>All Time</div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Scanned</div>
                <div className={`table-value-${mode}`}>12783</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Flagged</div>
                <div className={`table-value-${mode}`}>489</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Percent Flagged</div>
                <div className={`table-value-${mode}`}>15.9%</div>
            </div>
        </div>
    );
}

export default Body;