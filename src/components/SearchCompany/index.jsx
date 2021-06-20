import './index.scss';

import React, { useContext, useState } from 'react';

import { StockContext } from '../../context/StockContext';
import stockData from '../../data/stock-code-kr.json';

const SearchCompany = () => {
  const [userInput, setUserInput] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const { setCompany } = useContext(StockContext);

  const search = (e) => {
    e.preventDefault();

    const company = stockData.find(({ companyName }) => companyName === userInput);

    if (company === undefined) {
      setIsInputValid(false);

      return;
    }

    setCompany(company);
    setIsInputValid(true);
  };

  return (
    <>
      <form className='company-search-form' onSubmit={search}>
        <input
          type='text'
          placeholder='카카오 / 삼성전자'
          className='search-input'
          onChange={({ target }) => setUserInput(target.value.toUpperCase())}
        />
        <button className='search-button' type='submit'>
          <img
            src='https://img.icons8.com/fluent-systems-filled/48/000000/search.png'
            alt='search'
          />
        </button>
      </form>
      {!isInputValid && (
        <div className='alert'>종목을 찾지 못했습니다. 올바른 이름으로 검색해주세요!</div>
      )}
    </>
  );
};

export default SearchCompany;
