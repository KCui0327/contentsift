import { ChartBar } from "./ChartBar";
import './ReportModal.css'


interface ModalType {
  isOpen: boolean;
  toggle: () => void;
  mode: string;
  jsonObj: any;
}

export default function ReportModal(props: ModalType) {
  return (
    <>
        {props.isOpen && (
        <div className="modal-overlay" >
          <div className={`modal-box-${props.mode}`}>
            <div className="charts">
                <ChartBar title="Hate" mode={props.mode} level={props.jsonObj["hate"]}/>
                <ChartBar title="Self-Harm" mode={props.mode} level={props.jsonObj["selfharm"]}/>
                <ChartBar title="Sexual" mode={props.mode} level={props.jsonObj["sexual"]}/>
                <ChartBar title="Violence" mode={props.mode} level={props.jsonObj["violence"]}/>
            </div>
            {props.jsonObj["veracity"] == true && <div className={`modal-text-${props.mode}`}>Fact</div>}
            {props.jsonObj["veracity"] == false && <div className={`modal-text-${props.mode}`}>False</div>}
            {!(props.jsonObj["veracity"] == false || props.jsonObj["veracity"] == true) && <div className={`modal-text-${props.mode}`}>Undetermined</div>}
          </div>
        </div>
        )}
    </>
  );
}