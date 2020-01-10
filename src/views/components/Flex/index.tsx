import React from 'react';
import Container from '../Container';
import classname from 'classnames';
import './style.css';

interface IRowProps {

}

const Row: React.FC<IRowProps> = (props) => {
  const className = classname(
    'app-flex-row'
  );
  return (
    <Container className={className}>
      {props.children}
    </Container>
  );
}

interface IColProps {
  
}

const Col: React.FC<IColProps> = (props) => {
  const className = classname(
    'app-flex-col'
  );
  return (
    <Container className={className}>
      {props.children}
    </Container>
  );
}

const Flex = {
  Row,
  Col
}

export default Flex;
