import React from 'react';
import './App.scss';
import Main from './package/Main';

function App() {
  return (
    <div className="App">
      <Main
        theme={{ text: 'dimgray', paper: 'white', textBold: 'black', textLight: 'lightgray' }}
      />
    </div>
  );
}

export default App;
