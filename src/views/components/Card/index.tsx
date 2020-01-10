import React from 'react';
import Container from '../Container';
import './style.css';
import { IGift } from '../../../model';
import Text from '../Text';

interface ICardProps {
  gift?: IGift;
}

const Card: React.FC<ICardProps> = (props) => {
  return (
    <Container className='app-card'>
      <Container>
        button <Text.Span size='12' weight='semibold'>Out of stock</Text.Span>
      </Container>
    </Container>
  );
}

export default Card;
