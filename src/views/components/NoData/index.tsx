import React from 'react';
import Container from '../Container';
import Text from '../Text';
import './style.css';
import Icon from '../Icon';
import Break from '../Break';

interface INoData {}

const NoData: React.FC<INoData> = (props) => {
  return (
    <Container className='app-no-data'>
      <Icon name='no-data' size='100px' color='green' />
      <Break height='24px' />
      <Text.Paragraph size='18' weight='semibold'>Data not found</Text.Paragraph>
    </Container>
  );
}

export default NoData;
