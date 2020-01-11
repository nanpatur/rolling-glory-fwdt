import React from 'react'
import classnames from 'classnames';
import './style.css';

interface IButtonProps {
  type: 'primary' | 'secondary-1' | 'secondary-2' | 'secondary-3' | 'secondary-4' | 'disabled' | 'loved';
  size?: 'small' | 'medium';
  fullX?: boolean;
  fitContent?: boolean;
  onCLick?: () => any;
}

const Button: React.FC<IButtonProps> = (props) => {
  const handleOnClick = () => {
    if (props.onCLick) {
      props.onCLick()
    }  
  }

  const className = classnames (
    'app-button',
    props.type,
    props.size || 'medium',
    {'full-x': props.fullX},
    {'fit-content': props.fitContent}
  )
  return (
    <button className={className} onClick={handleOnClick}>
      {props.children}
    </button>
  )
}

export default Button;
