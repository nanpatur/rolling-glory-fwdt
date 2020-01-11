import React from 'react';
import classnames from 'classnames';
import './style.css';

interface ITextParagraphProps {
  size: '12' | '14' | '16' | '18' | '20' | '22' | '24';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'red' | 'green1' | 'green2' | 'black' | 'white' | 'gray';
  style?: React.CSSProperties;
  className?: string;
  lineHeight?: string;
}

const TextParagraph: React.FC<ITextParagraphProps> = (props) => {
  const className = classnames(
    'app-text-paragraph',
    props.className,
    `size-${props.size}`,
    `weight-${props.weight || 'regular'}`,
    `color-${props.color || 'black'}`
  )
  const style: React.CSSProperties = {
    ...props.style,
    lineHeight: props.lineHeight
  }

  return (
    <p className={className} style={style}>{props.children}</p>
  )
}

interface ITextSpanProps {
  size: '12' | '14' | '16' | '18' | '20' | '22' | '24';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'red' | 'green1' | 'green2' | 'black' | 'white' | 'gray';
  style?: React.CSSProperties;
  className?: string;
  lineHeight?: string;
}

const TextSpan: React.FC<ITextSpanProps> = (props) => {
  const className = classnames(
    'app-text-span',
    props.className,
    `size-${props.size}`,
    `weight-${props.weight || 'regular'}`,
    `color-${props.color || 'black'}`
  )
  const style: React.CSSProperties = {
    ...props.style,
    lineHeight: props.lineHeight
  }

  return (
    <span className={className} style={style}>{props.children}</span>
  )
}

const Text = {
  Paragraph: TextParagraph,
  Span: TextSpan
}

export default Text;
