import './App.css';
import { Footer } from './component/Footer';
import TitleBar from './component/TitleBar';
import SettingBody from './component/SettingBody';
// import InfoBody from './component/InfoBody';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <SettingBody />
      <Footer />
    </div>
  );
}

export default App;
