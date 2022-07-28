import React from 'react';
import Arrived from './components/Arrived.js';
import AsideMenu from './components/AsideMenu.js';
import Browse from './components/Browse.js';
import Clients from './components/Clients.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';

function App() {
  return (
    // <h1 className="text-3x1 font-bold underline">Hello People with the spirit of learning</h1>
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <Arrived/>
      <Clients/>
      <AsideMenu/>
      <Footer/>
    </>
  );
}

export default App;
