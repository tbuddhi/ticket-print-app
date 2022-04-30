import React from 'react'
import { Routes, Route } from "react-router-dom";
import Modal from 'react-modal';
import './styles/App.scss'

import DashboardWidget from './components/DashboardWidget';
import InvoiceTicket from './components/InvoiceTicket';
import LandingPage from './components/LandingPage';

Modal.setAppElement('#root')

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ticket" element={<InvoiceTicket />} />
        <Route path="/dashboard" element={<DashboardWidget />} />
      </Routes>
    </>
  );
}

export default App;
