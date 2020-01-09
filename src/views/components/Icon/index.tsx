import React from 'react';
import classnames from 'classnames';
import './style.css';

interface IIconProps {
  name: 'instagram' | 'facebook' | 'twitter';
  color?: 'white' | 'green' | 'yellow';
}

const Icon: React.FC<IIconProps> = (props) => {
  const className = classnames(
    'app-icon',
    props.name,
    props.color || 'white'
  )
  return (
    <i className={className} />
  )
}

export default Icon;
