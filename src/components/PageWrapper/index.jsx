import React from 'react';
import './index.scss';

const PageWrapper = ({ children }) => {
  return (
    <div className='page'>
      <div className='page-container'>{children}</div>
    </div>
  );
};

export default PageWrapper;
