import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greeting name="Ann" />
      <Counter />
    </div>
  );
}

export default App;