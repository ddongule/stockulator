import Home from './components/pages/Home';
import React from 'react';
import { StockContextProvider } from './context/StockContext';

function App() {
  return (
    <StockContextProvider>
      <Home />
    </StockContextProvider>
  );
}

export default App;
