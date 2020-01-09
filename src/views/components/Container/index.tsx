import React from 'react';
import classnames from 'classnames';
import './style.css';

interface IContainer {
  className?: string;
  style?: React.CSSProperties;
  fullScreenX?: boolean;
  fullScreenY?: boolean;
  fullX?: boolean;
  fullY?: boolean;
  height?: string;
  float?: 'left' | 'right';
}

const Container: React.FC<IContainer> = (props) => {
  const className = classnames(
    'app-container',
    props.className,
    {'full-screen-x': props.fullScreenX},
    {'full-screen-y': props.fullScreenY},
    {'full-x': props.fullX},
    {'full-y': props.fullY},
  )
  const style: React.CSSProperties = {
    ...props.style,
    height: props.height,
    float: props.float
  }
  return (
    <div className={className} style={style}>
      {props.children}
    </div>
  )
}

export default Container;
