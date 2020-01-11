import React, { useState } from 'react';
import Container from '../Container';
import './style.css';
import Break from '../Break';
import Flex from '../Flex';

interface ITabConfig {
  label: string;
  content: any;
}

interface ITabProps {
  tabConfigs: ITabConfig[]
}

const Tab: React.FC<ITabProps> = (props) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const tabConfig = props.tabConfigs[selectedIdx]
  const selectIdx = (idx: number) => {
    setSelectedIdx(idx);
  }

  return (
    <Container className='app-tab'>
      <Flex.Row>
        {
          props.tabConfigs.map((config, i) => (
            <Flex.Col key={i}>
              <Container className={'tab-label' + (i === selectedIdx ? ' active' : '')} onClick={() => selectIdx(i)}>{config.label}</Container>
            </Flex.Col>
          ))
        }
      </Flex.Row>
      <Container className='tab-content'>
        <Break height='40px' />
        {tabConfig.content}
      </Container>
    </Container>
  )
}

export default Tab;
