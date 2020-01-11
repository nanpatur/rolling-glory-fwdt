import React from 'react';
import { withRouter, RouterProps } from 'react-router';
import Text from '../Text';

interface IBreadcrumbProps extends RouterProps {

}

const Breadcrumb: React.FC<IBreadcrumbProps> = (props) => {
  const mainPath = 'List product'
  const bradcrumbStrings = props.history.location.pathname.split('/');
  bradcrumbStrings[bradcrumbStrings.length - 1] = bradcrumbStrings[bradcrumbStrings.length - 1].split('-').map((str) => str).join(' ')
  return (
    <div>
      <Text.Paragraph size='14'><Text.Span size='14'>{mainPath}</Text.Span> {bradcrumbStrings.join(' > ')}</Text.Paragraph>
    </div>
  )
}

export default withRouter(Breadcrumb);
