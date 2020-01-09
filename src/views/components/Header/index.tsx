import React from 'react'
import Container from '../Container';
import './style.css';
import Image from '../Image';

const Header: React.FC = () => {
  return (
    <Container className='app-header'>
      <Image className='header-logo' src='/assets/images/logo-icon-text.png' height='60px' />
    </Container>
  )
}

export default Header;
