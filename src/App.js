import React from 'react';
import reactDOM from 'react-dom';
import './App.scss';
import Logo from '../dist/images/f153eb9f28437192c6a0a852d44cd96e.png';

const App = () => {
  return (
    <div className="main">
      <img className="logo" src={Logo} />
      <h2 className="subtitle">Hello World!</h2>
    </div>
  )
}

reactDOM.render(<App />, document.getElementById('root'))