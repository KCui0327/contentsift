import './TitleBar.css'
import { Slider } from './Button';

function TitleBar() {
    return (
        <div className='TitleBar'>
            <div className='Title'>ContentSift</div>
            <div className='Switch'>
                <Slider stateProp="on" size="large"/>
            </div>
        </div>
    );
}

export default TitleBar;