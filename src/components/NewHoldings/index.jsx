import './index.scss';

import React, { useContext, useEffect, useState } from 'react';

import HoldingsInput from '../HoldingsInput';
import { LOCALE } from '../../constants/locale';
import { StockContext } from '../../context/StockContext';
import { currencyFormatter } from '../../utils/numberFormatter';
import { getData } from '../../service/getData';
import loadingImage from '../../images/loading.gif';

const NewHoldings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { company, newPrice, setNewPrice, newQuantity, setNewQuantity } = useContext(StockContext);

  const totalPrice = currencyFormatter(LOCALE.KR, newPrice * newQuantity);
  const newKoreanPrice = currencyFormatter(LOCALE.KR, newPrice);

  useEffect(async () => {
    setIsLoading(true);
    const result = await getData(company);

    setIsLoading(false);
    setNewPrice(result);
  }, [company]);

  const validateInput = ({ target: { value } }) => {
    setNewQuantity(Number(value));

    if (Number(value) > 99999) {
      setNewQuantity(Number(value.slice(0, 5)));
    }
  };

  return (
    <>
      {!!company.companyName && isLoading && (
        <div className='loading'>
          <img src={loadingImage} alt='loadingImage' />
        </div>
      )}
      {!isLoading && (
        <div className='new-holdings-wrapper'>
          {!!company.companyName && newPrice !== 0 && (
            <div className='real-time-stock-price'>
              <span className='real-time'>실시간</span>
              <span className='company-name'>{company.companyName}</span>
              <div>
                <span className='price'>{newKoreanPrice}원 </span>/ 1주
              </div>
            </div>
          )}
          {!!company.companyName && newPrice !== 0 && (
            <div className='money-needed'>
              <div className='new-quantity-container'>
                <HoldingsInput
                  name='newQuantity'
                  onChange={validateInput}
                  beforeText='총 '
                  afterText=' 주 더 사고싶어요.'
                  value={newQuantity === 0 ? '' : newQuantity}
                />
              </div>
              <div className='total-price'>
                <span className='strong'>{totalPrice}</span> 원 더 필요해요.
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NewHoldings;
