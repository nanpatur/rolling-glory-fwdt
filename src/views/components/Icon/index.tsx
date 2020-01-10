import React from 'react';
import classnames from 'classnames';
import './style.css';

interface IIconProps {
  name: 'instagram' | 'facebook' | 'twitter';
  color?: 'white' | 'green' | 'yellow';
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
