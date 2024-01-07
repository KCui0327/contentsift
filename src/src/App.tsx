import './App.css';
import { ChartBar } from './component/ChartBar';
import { Slider } from './component/ Button';

function App() {
  return (
    <div className="App">
      <div className='App TitleBar'>
        <div className='App TitleBar Title'>ContentSift</div>
        <div className='App TitleBar Switch'>
          <Slider stateProp="off"/>
        </div>
      </div>

      <ChartBar title="Violence" level={7}/>
    </div>
  );
}

export default App;
