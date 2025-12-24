import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import ScrollToTop from './components/ScrollToTop';
import AgencyPricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-primary min-h-screen text-gray-900 font-sans selection:bg-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/pricing" element={<AgencyPricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
