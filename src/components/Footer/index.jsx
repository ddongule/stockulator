import './index.scss';

import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/ddongule/average-stock-price'
      >
        <p className='footer-contents'>
          <span className='icon'>&copy; 2021</span> ddongule / average-stock-price
        </p>
      </a>
    </div>
  );
};

export default Footer;
