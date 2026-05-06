import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Driver from './pages/driver/Driver';
import Advertiser from './pages/advertiser/Advertiser';
import Billboard from './pages/billboard/Billboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/billboard" element={<Billboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;