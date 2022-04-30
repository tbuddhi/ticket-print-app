import React from 'react'
import './styles/App.scss'
import { Ticket } from './components/Ticket';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function App() {
  return (
    <div >
      <h1>Ticket Printing App</h1>
      <Ticket />
    </div>
  );
}

export default App;
