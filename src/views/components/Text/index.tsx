import React from 'react';
import classnames from 'classnames';
import './style.css';

interface ITextParagraphProps {
  size: '12' | '14' | '16' | '18' | '20' | '22';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

const TextParagraph: React.FC<ITextParagraphProps> = (props) => {
  const className = classnames(
    'app-text-paragraph',
    `size-${props.size}`,
    `weight-${props.weight || 'regular'}`
  )

  return (
    <p className={className}>{props.children}</p>
  )
}

interface ITextSpanProps {
  size: '12' | '14' | '16' | '18' | '20' | '22';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

const TextSpan: React.FC<ITextSpanProps> = (props) => {
  const className = classnames(
    'app-text-span',
    `size-${props.size}`,
    `weight-${props.weight || 'regular'}`
  )

  return (
    <span className={className}>{props.children}</span>
  )
}

const Text = {
  Paragraph: TextParagraph,
  Span: TextSpan
}

export default Text;
