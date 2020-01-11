import React from 'react';
import Icon from '../Icon';
import './style.css';

interface IRatingProps {
  value: string;
  iconSize: string;
}

const Rating: React.FC<IRatingProps> = (props) => {
  const dividedValue = props.value.split('.')
  const value = parseInt(dividedValue[0])

  const startIcon: any = []
  for (let i = 0; i < value; i++) {
    startIcon.push(<Icon name='full-star' size={props.iconSize} color='yellow' />)
  }

  if (dividedValue[1] !== '00') {
    startIcon.push(<Icon name='half-star' size={props.iconSize} color='yellow' />)
  }

  return (
    <span className='app-rating'>
      {
        startIcon.map((icon: any) => icon)
      }
    </span>
  )
}

export default Rating;
