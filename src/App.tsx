import './App.css';
import { Footer } from './component/Footer';
import Body from './component/Body';
import { useState } from 'react';
import InfoBody from './component/InfoBody';
import { Slider } from './component/Button';

function App() {
  const [menuState, setMenuState] = useState("home")
  function toggleState(e: React.MouseEvent, state: string) {
    setMenuState(state)
  }

  const [themeState, setThemeState] = useState("light")
  function toggleThemeState(e: React.MouseEvent, state: string) {
    setThemeState(state)
  }

  return (
    <div className="App">
      <div className={`TitleBar-${themeState}`}>
        <div className={`Title-${themeState}`}>ContentSift</div>
        <div className={`Switch`}>
            <Slider stateProp="off" toggleThemeState ={(e, state) => toggleThemeState(e, state)}/>
        </div>
      </div>
      {menuState === "home" && <><Body mode={themeState}/></>}
      {menuState === "info" && <><InfoBody mode={themeState}/></>}
      <Footer toggleState={(e, state) => toggleState(e, state)} mode={themeState} />
    </div>
  );
}

export default App;
