import React, { useState } from 'react';
import Container from '../Container';
import './style.css';
import Text from '../Text';

const StockButton: React.FC = () => {
  const [value, setValue] = useState<number>(1)

  const increaseValue = () => {
    setValue(value + 1)
  }
  
  const decreaseValue = () => {
    if (value === 0) { return; }
    setValue(value - 1)
  }

  return (
    <Container className='app-stock-button'>
      <button onClick={decreaseValue}>
        <Text.Span size='24'>-</Text.Span>
      </button>
      <input type='number' value={value} />
      <button onClick={increaseValue}>
        <Text.Span size='24'>+</Text.Span>
      </button>
    </Container>
  );
}

export default StockButton;
