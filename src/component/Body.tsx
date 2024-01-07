import './Body.css'

export const Body = ({mode = "light", totalCount = 0}) => {
    return (
        <div className={`body-${mode}`}>
            <div className={`header-${mode}`}>This Session</div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Scanned</div>
                <div className={`table-value-${mode}`}>{totalCount}</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Flagged</div>
                <div className={`table-value-${mode}`}>17</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Percent Flagged</div>
                <div className={`table-value-${mode}`}>12.7%</div>
            </div>
        </div>
    );
}

export default Body;