import React from 'react'
import classnames from 'classnames';

interface IImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<IImageProps> = (props) => {
  const className = classnames(
    'app-image',
    props.className
  )
  const style: React.CSSProperties = {
    ...props.style,
    height: props.height || 'auto',
    width: props.width || 'auto'
  }
  return (
    <img 
      className={className} 
      style={style} 
      src={props.src || ''} 
      alt={props.alt || 'image'} 
    />
  )
}

export default Image;
