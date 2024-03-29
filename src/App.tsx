import './App.css';
import { Footer } from './component/Footer';
import Body from './component/Body';
import { useEffect, useState } from 'react';
import InfoBody from './component/InfoBody';
import {ReportBody} from './component/ReportBody';
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
  const [value1, setValue1] = useState<number>(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    chrome.storage.local.get(['totalCount'], (res) => {
      setValue(res.totalCount);
    })

    chrome.storage.local.get(['totalFlaggedCount'], (res) => {
      setValue1(res.totalFlaggedCount);
    })

    chrome.storage.local.get(['flaggedPosts'], (res) => {
      setPosts(res.flaggedPosts);
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
      {menuState === "home" && <><Body mode={themeState} totalCount={value} totalFlaggedCount={value1}/></>}
      {menuState === "info" && <><InfoBody mode={themeState}/></>}
      {menuState === "report" && <><ReportBody mode={themeState} flaggedPosts={posts}/></>}
      <Footer toggleState={(e, state) => toggleState(e, state)} mode={themeState}/>
    </div>
  );
}

export default App;
