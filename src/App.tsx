import './App.css';
import { Footer } from './component/Footer';
import Body from './component/Body';
import { useEffect, useState } from 'react';
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

  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    chrome.storage.local.get(['totalCount'], (res) => {
      setValue(res.totalCount);
      console.log(res.totalCount);
    })
  })
  

  return (
    <div className="App">
      <div className={`TitleBar-${themeState}`}>
        <div className={`Title-${themeState}`}>ContentSift</div>
        <div className={`Switch`}>
            <Slider stateProp="off" toggleThemeState ={(e, state) => toggleThemeState(e, state)}/>
        </div>
      </div>
      {menuState === "home" && <><Body mode={themeState} totalCount={value}/></>}
      {menuState === "info" && <><InfoBody mode={themeState}/></>}
      <Footer toggleState={(e, state) => toggleState(e, state)} mode={themeState} />
    </div>
  );
}

export default App;
