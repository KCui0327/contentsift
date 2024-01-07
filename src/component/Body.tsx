import './Body.css'

function Body() {
    return (
        <div className='body'>
            <div className='header'>This Session</div>
            <div className='info-box'>
                <div className='table-heading'>Items Scanned</div>
                <div className='table-value'>127</div>
            </div>
            <div className='info-box'>
                <div className='table-heading'>Items Flagged</div>
                <div className='table-value'>17</div>
            </div>
            <div className='info-box'>
                <div className='table-heading'>Percent Flagged</div>
                <div className='table-value'>12.7%</div>
            </div>

            <div className='header'>All Time</div>
            <div className='info-box'>
                <div className='table-heading'>Items Scanned</div>
                <div className='table-value'>12783</div>
            </div>
            <div className='info-box'>
                <div className='table-heading'>Items Flagged</div>
                <div className='table-value'>489</div>
            </div>
            <div className='info-box'>
                <div className='table-heading'>Percent Flagged</div>
                <div className='table-value'>15.9%</div>
            </div>
        </div>
    );
}

export default Body;