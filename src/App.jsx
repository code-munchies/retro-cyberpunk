import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AppContent from './components/AppContent';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContent />
    </Router>
  );
}

export default App;