import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Alert} from './Alert';

function App() {
  return (
    <div className="App">
      <Alert type="information" heading="Success" closable >
        Everything it's gona be oke!
      </Alert>
    </div>
  );
}

export default App;
