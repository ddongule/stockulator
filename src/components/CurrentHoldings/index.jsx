import './index.scss';

import React, { useContext } from 'react';

import HoldingsInput from '../HoldingsInput';
import { StockContext } from '../../context/StockContext';

const CurrentHoldings = () => {
  const {
    newPrice,
    company,
    newQuantity,
    setCurrentHoldingsPrice,
    currentHoldingsPrice,
    setCurrentQuantity,
    currentQuantity,
  } = useContext(StockContext);

  const validatePrice = ({ target: { value } }) => {
    setCurrentHoldingsPrice(Number(value));

    if (Number(value) > 9999999) {
      setCurrentHoldingsPrice(Number(value.slice(0, 7)));
    }
  };

  const validateQuantity = ({ target: { value } }) => {
    setCurrentQuantity(Number(value));

    if (Number(value) > 99999) {
      setCurrentQuantity(Number(value.slice(0, 5)));
    }
  };

  return (
    <>
      {!!company && newQuantity !== 0 && (
        <div className='current-holdings-form-wrapper'>
          <div className='container'>
            <div className='input-container'>
              <HoldingsInput
                name='holdings-price'
                onChange={validatePrice}
                beforeText='내가 가진 평균 단가는'
                afterText=' 원,'
                strong='strong'
                value={currentHoldingsPrice === 0 ? '' : currentHoldingsPrice}
              />
              <HoldingsInput
                name='quantity'
                onChange={validateQuantity}
                beforeText='총 '
                afterText=' 주 있어요.'
                value={currentQuantity === 0 ? '' : currentQuantity}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentHoldings;
