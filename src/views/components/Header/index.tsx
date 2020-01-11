import React from 'react'
import Container from '../Container';
import './style.css';
import Image from '../Image';
import { history } from '../../App';

const Header: React.FC = () => {
  const goToHome = () => {
    history.push('/');
  }

  return (
    <Container className='app-header'>
      <Image onClick={goToHome} className='header-logo' src='/assets/images/logo-icon-text.png' height='60px' />
    </Container>
  )
}

export default Header;
