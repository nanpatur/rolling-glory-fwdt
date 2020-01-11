import React from 'react'
import Container from '../Container';
import './style.css';
import Icon from '../Icon';
import Text from '../Text';

const Footer: React.FC = () => {
  return (
    <Container className='app-footer'>
      <Container className='social-media-icon' float='left'>
        <Icon name='instagram' size='20px' />
        <Icon name='facebook' size='20px' />
        <Icon name='twitter' size='20px' />
      </Container>
      <Container className='footer-copyright'>
        <Text.Paragraph size='14' color='white'>Terms & Condition | Copyright © 2018. All rights reserved. PT Radya Gita Bahagi</Text.Paragraph>
      </Container>
    </Container>
  )
}

export default Footer;
