import './App.css';
import { ChartBar } from './component/ChartBar';
import { Slider } from './component/Button';
import { Footer } from './component/Footer';
import TitleBar from './component/TitleBar';
import Body from './component/Body';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
