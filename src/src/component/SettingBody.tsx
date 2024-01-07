import { Slider } from './Button';
import './SettingBody.css'

function SettingBody() {
    return (
        <div className='SettingBody'>
            <div className='Content'>
                <div className='Title'>Supported Sites</div>
                <div className='Names'>
                    <div className='Press'>X (Twitter) </div>
                    <Slider stateProp='off' />
                </div>
                <div className='Names'>
                    <div className='Press'>Instagram </div>
                    <Slider stateProp='off' />
                </div>
                <div className='Names'>
                    <div className='Press'>Facebook </div>
                    <Slider stateProp='off' />
                </div>
                <div className='Names'>
                    <div className='Title'>Manual Scanning</div>
                    <Slider stateProp='off' />
                </div>
                <div className='Names'>
                    <div className='Title'>Night Mode</div>
                    <Slider stateProp='off' />
                </div>
            </div>
        </div>
    );
}

export default SettingBody;