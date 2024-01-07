import './SettingBody.css'
import { Slider } from './Button';

function SettingBody() {
    return (
        <div className='setting-body'>
            <div className='title'>Supported Sites</div>
            <div className='setting-bar-sm'>
                <div className='subheading'>X (Twitter)</div>
                <Slider stateProp="on" size="medium"/>
            </div>
            <div className='setting-bar-sm'>
                <div className='subheading'>Instagram</div>
                <Slider stateProp="on" size="medium"/>
            </div>
            <div className='setting-bar-sm'>
                <div className='subheading'>Facebook</div>
                <Slider stateProp="on" size="medium"/>
            </div>
            <div className='setting-bar-lg'>
                <div className='subheading'>Manual Scanning</div>
                <Slider stateProp="on" size="medium"/>
            </div>
            <div className='setting-bar-lg'>
                <div className='subheading'>Night Mode</div>
                <Slider stateProp="on" size="medium"/>
            </div>
        </div>
    );
}

export default SettingBody;