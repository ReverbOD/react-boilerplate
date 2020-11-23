import React from 'react';
import reactDOM from 'react-dom';
import './App.scss';
import Logo from '../public/media/img/reactjs-fill.svg';

const App = () => {
  return (
    <div className="main">
      <img className="logo" src={Logo} />
      <h2 className="title">Hello World!</h2>
      <p className="subtitle">This is a ReactJS boilerplate</p>
    </div>
  )
}

reactDOM.render(<App />, document.getElementById('root'))