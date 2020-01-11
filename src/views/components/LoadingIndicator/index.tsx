import React from 'react';
import Container from '../Container';
import classnames from 'classnames';
import './style.css';

interface ILoadingIndicator {
}

const LoadingIndicator: React.FC<ILoadingIndicator> = (props) => {
  const className = classnames(
    'app-loading-indicator'
  )
  return (
    <Container className={className}>
      <div className="loadingio-spinner-ellipsis-vi1x4r9bf5m">
        <div className="ldio-urqaozprqc">
          <div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    </Container>
  )
}

export default LoadingIndicator;
