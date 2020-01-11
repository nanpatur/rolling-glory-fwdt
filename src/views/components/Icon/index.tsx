import React from 'react';
import classnames from 'classnames';
import './style.css';

interface IIconProps {
  name: 'instagram' | 'facebook' | 'twitter' | 'love' | 'love-outline' | 'point' | 'full-star' | 'half-star' | 'eye' | 'no-data';
  color?: 'white' | 'green' | 'yellow' | 'gray' | 'red';
  size: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  const className = classnames(
    'app-icon',
    props.name,
    props.color || 'white'
  )
  const style: React.CSSProperties = {
    height: props.size,
    width: props.size
  }
  return (
    <i style={style} className={className} />
  )
}

export default Icon;
