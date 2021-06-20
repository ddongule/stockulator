import React, { createContext, useState } from 'react';

export const StockContext = createContext(null);

export const StockContextProvider = ({ children }) => {
  const [currentHoldingsPrice, setCurrentHoldingsPrice] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [company, setCompany] = useState({});
  const [newPrice, setNewPrice] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

  return (
    <StockContext.Provider
      value={{
        currentHoldingsPrice,
        setCurrentHoldingsPrice,
        currentQuantity,
        setCurrentQuantity,
        company,
        setCompany,
        newPrice,
        setNewPrice,
        newQuantity,
        setNewQuantity,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};
