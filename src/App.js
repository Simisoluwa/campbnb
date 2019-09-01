import React from 'react';
import './App.css';
import Search from './components/camps/Search';
import Camps from './components/camps/Camps';
import CamperState from './context/camps/campState';

const App = () => {
  return (
    <CamperState>
      <div className="App">
        <Search/>
          <div className="container">
            <Camps/>
          </div>
      </div>
    </CamperState>
  );
}

export default App;
