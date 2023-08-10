import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <Routes>
          <Route path="/" exact component={Hero} />
          <Route path="/" component={CallToAction} />
        </Routes>
        <Carousel />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
