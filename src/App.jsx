import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Driver from './pages/driver/Driver';
import Advertiser from './pages/advertiser/Advertiser';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/advertiser" element={<Advertiser />} />
      </Routes>
    </Router>
  );
}

export default App;
