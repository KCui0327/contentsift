import './App.css';
import { ChartBar } from './component/ChartBar';
import { Slider } from './component/Button';

function App() {
  return (
    <div className="App">
      <div className='TitleBar'>
        <div className='Title'>ContentSift</div>
        <div className='Switch'>
          <Slider stateProp="off"/>
        </div>
      </div>
    </div>
  );
}

export default App;
