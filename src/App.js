import './style.scss';
import classNames from 'classnames';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div className={classNames("menu-modal", {'menu-modal--open':open})}></div>
      <div className="menu" onClick={e => setOpen(!open)}>
        <div className={classNames("menu-burger", {'menu-burger--open':open})}>
          <div className={classNames("menu-burger-bar1", {'menu-burger--open-bar1':open})}></div>
          <div className={classNames("menu-burger-bar2", {'menu-burger--open-bar2':open})}></div>
          <div className={classNames("menu-burger-bar3", {'menu-burger--open-bar3':open})}></div>
        </div>
        </div>
      
    </div>
  );
}

export default App;
