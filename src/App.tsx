import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import EVO from './pages/EVO';
import DUO from './pages/DUO';
import DYAD from './pages/DYAD';
import News from './pages/News';
import Events from './pages/Events';
import SetupResources from './pages/SetupResources';
import Maintenance from './pages/Maintenance';
import ContactUs from './pages/ContactUs';
import InvestorRelationsPage from './pages/InvestorRelations';
import Creative from './pages/industries/Creative';
import Industrial from './pages/industries/Industrial';
import Education from './pages/industries/Education';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evo" element={<EVO />} />
          <Route path="/duo" element={<DUO />} />
          <Route path="/dyad" element={<DYAD />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/setup-resources" element={<SetupResources />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/investor-relations" element={<InvestorRelationsPage />} />
          <Route path="/industries/creative" element={<Creative />} />
          <Route path="/industries/industrial" element={<Industrial />} />
          <Route path="/industries/education" element={<Education />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
