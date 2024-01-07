import './App.css';
import ToggleButton from './component/ Button';
import { ChartBar } from './component/ChartBar';

function App() {
  return (
    <div className="App">
      <div className='TitleBar'>
        <div className='Title'>ContentSift</div>
      </div>

      <ChartBar title="Violence" level={7}/>
    </div>
  );
}

export default App;
