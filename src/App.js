import React, { useState } from "react";
import Bottomp from "./bottom/Bottom_p";
import "./styles.css";
import Bodyp from "./body/Body_p";
import Top from "./top/Top";

const App = () => {
  const [theme, setTheme] = useState(true);
  const time = new Date().getHours();

  const autoChange = (time) => {
    if (time > 6 && time < 18) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  useState(() => {
    autoChange(time);
  }, [time]);


  const changeTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };



  return (
    <div >
      <div className="btn btn-outline-dark rounded-right" style={{ position: 'fixed', zIndex: 10, width: '88px', maxHeight: '90px', left: '0', right: '80%', top: '40%', opacity: '0.6', backgroundColor: theme === true ? '#fff' : '#000' }}>
        <form className="mt-1 mb-1">
          <label className="mt-1" style={{ color: 'red', marginLeft: 0 }} >Change Theme</label>
          <div style={{ width: '150%', height: '150%', marginLeft: '25%' }} className="form-check form-switch">
            <input className="form-check-input" value={theme} type="checkbox" defaultChecked={theme} onClick={changeTheme} />
          </div>
        </form>
      </div>
      <Top themes={theme} />
      <Bodyp themes={theme} />
      <Bottomp themes={theme} />
    </div>
  )
};

export default App;