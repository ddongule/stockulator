import './index.scss';

import React from 'react';

const NumberInput = ({ ...args }) => {
  return <input type='number' {...args} />;
};

export default NumberInput;
