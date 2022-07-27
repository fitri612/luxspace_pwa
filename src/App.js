import React from 'react';
import Browse from './components/Browse.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';

function App() {
  return (
    // <h1 className="text-3x1 font-bold underline">Hello People with the spirit of learning</h1>
    <>
      <Header/>
      <Hero/>
      <Browse/>
    </>
  );
}

export default App;
