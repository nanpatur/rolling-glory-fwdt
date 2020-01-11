import React from 'react';
import Container from '../Container';

interface IBreakProps {
  height: string;
}

const Break: React.FC<IBreakProps> = (props) => {
  return (
    <Container height={props.height} />
  )
}

export default Break;
