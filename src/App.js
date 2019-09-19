import React from 'react';
import { Hero } from './components/Hero';
import { StructuredList } from './components/StructuredList';
import './styles/main.scss';



function App() {
  return (
    <main className="oi-wrapper">
      <Hero/>
      <StructuredList/>
      
    </main>
  );
}

export default App;
