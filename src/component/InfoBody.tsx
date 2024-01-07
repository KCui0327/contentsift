import './InfoBody.css'

export const InfoBody = ({mode = "light"}) => {
    return (
        <div className={`info-body-${mode}`}>
            <div className={`info-content-${mode}`}>
                <div className={`title-${mode}`}>Developed by:</div>
                <div className={`names-${mode}`}>
                    Aden <br />
                    Kenny <br />
                    William <br />
                    Raian <br />
                </div>
                <div className={`title-${mode}`}>for HackED 2024</div>
                <div className={`title-${mode}`}>Icons by Font Awesome</div>
            </div>
        </div>
    );
}

export default InfoBody;