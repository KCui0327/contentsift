import './Body.css'

export const Body = ({mode = "light", totalCount = 0, totalFlaggedCount = 0}) => {
    return (
        <div className={`body-${mode}`}>
            <div className={`header-${mode}`}>This Session</div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Scanned</div>
                <div className={`table-value-${mode}`}>{totalCount}</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Items Flagged</div>
                <div className={`table-value-${mode}`}>{totalFlaggedCount}</div>
            </div>
            <div className={`info-box-${mode}`}>
                <div className={`table-heading-${mode}`}>Percent Flagged</div>
                <div className={`table-value-${mode}`}>
                    {totalCount == 0 
                        ? 0
                        : Math.round(totalFlaggedCount / totalCount * 100)
                    }%
                </div>
            </div>
        </div>
    );
}

export default Body;