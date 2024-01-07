import './ReportBody.css'
import Modal from "./ReportModal";
import useModal from "./useModal";



export const ReportBody = ({mode = "light", flaggedPosts = []}) => {
    const { isOpen, toggle } = useModal();
    return (
        <div className={`report-body-${mode}`}>
            {flaggedPosts.map(function(data: any) {
                return (
                    <div className={`report-instance-${mode}`} onClick={toggle}>
                        {data.jsonObj["text"]}
                        <Modal isOpen={isOpen} toggle={toggle} jsonObj={data.jsonObj} mode={mode}></Modal>
                    </div>
                ) 
            })}
        </div>
    );
}

export default Body;