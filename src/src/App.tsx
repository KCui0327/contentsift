import './App.css';
import { Footer } from './component/Footer';
import TitleBar from './component/TitleBar';
import Body from './component/Body';
import { useState } from 'react';
import SettingBody from './component/SettingBody';
import InfoBody from './component/InfoBody';

function App() {
  const [menuState, setMenuState] = useState("home")
  function toggleState(e: React.MouseEvent, state: string) {
    setMenuState(state)
  }

  return (
    <div className="App">
      <TitleBar />
      {menuState === "home" && <><Body /></>}
      {menuState === "settings" && <><SettingBody /></>}
      {menuState === "info" && <><InfoBody /></>}
      <Footer toggleState={(e, state) => toggleState(e, state)} mode="light" />
    </div>
  );
}

export default App;
