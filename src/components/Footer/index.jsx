import './index.scss';

import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <a target='_blank' rel='noopener noreferrer' href='https://github.com/ddongule'>
        <p className='footer-contents'>
          <span className='icon'>&copy; 2021</span> @ddongule
        </p>
      </a>
    </div>
  );
};

export default Footer;
