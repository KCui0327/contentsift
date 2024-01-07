import { Slider } from './Button';
import './TitleBar.css'

function TitleBar() {
    return (
        <div className='TitleBar'>
            <div className='Title'>ContentSift</div>
            <div className='Switch'>
              <Slider stateProp="off"/>
            </div>
        </div>
    );
}

export default TitleBar;