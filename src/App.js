import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('Purple');

  const handleInputChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Background Color: {backgroundColor}</h1>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default App;