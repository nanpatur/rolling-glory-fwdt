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

const Text = {
  Paragraph: TextParagraph
}

export default Text;
