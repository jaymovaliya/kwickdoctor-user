import React, { memo } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/Pages/SignIn'

function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default memo(App);
