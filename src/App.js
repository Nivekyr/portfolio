import './App.scss';
import React from 'react';
import { PortfolioProvider } from './context';
import Home from './components/Home';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedback from './components/Feedback';
import Mywork from './components/Mywork';
import Aside from './components/Aside';




function App() {
  return (
   <PortfolioProvider>
    <Aside/>
    <Hero/>
    <Home/>
    <Experience/>
    <Mywork/>
    <Feedback/>
    <Contact/>
  </PortfolioProvider>
  );
}

export default App;
