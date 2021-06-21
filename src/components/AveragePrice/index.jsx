import './index.scss';

import React, { useContext } from 'react';

import { LOCALE } from '../../constants/locale';
import { StockContext } from '../../context/StockContext';
import { currencyFormatter } from '../../utils/numberFormatter';

const AveragePrice = () => {
  const { company, currentQuantity, newQuantity, currentHoldingsPrice, newPrice } =
    useContext(StockContext);

  const averagePrice = Math.floor(
    (currentQuantity * currentHoldingsPrice + newQuantity * newPrice) /
      (newQuantity + currentQuantity)
  );

  const formattedPrice = isNaN(averagePrice) ? '' : currencyFormatter(LOCALE.KR, averagePrice);

  return (
    <>
      {!!company.companyName && newPrice && !isNaN(averagePrice) && (
        <div className='current-holdings-total-price'>
          지금 구매하시면 평균 가격이 <br /> <span className='price'>{formattedPrice}원</span>이
          되네요!
        </div>
      )}
    </>
  );
};

export default AveragePrice;
