import './index.scss';

import NumberInput from '../NumberInput';
import React from 'react';

const HoldingsInput = ({ name, onChange, beforeText, afterText, strong, ...args }) => {
  return (
    <div className='current-holdings-input-wrapper'>
      <label htmlFor={name}>
        <span className={strong}>{beforeText}</span>
        <NumberInput name={name} onChange={onChange} {...args} />
        {afterText}
      </label>
    </div>
  );
};

export default HoldingsInput;
