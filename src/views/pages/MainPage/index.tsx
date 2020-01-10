import React, { useEffect } from 'react';
import { Container, Card, Flex } from '../../components';
import { giftService } from '../../../services';
import { useSelector } from 'react-redux';
import { IAppReduxState } from '../../../redux';

const MainPage: React.FC<any> = (props) => {
  useEffect(() => {
    giftService.getGiftList()
  }, [])

  const giftList = useSelector((state: IAppReduxState) => state.gift.giftList)

  return (
    <Container>
      <Flex.Row>
        {
          giftList.map((gift) => (
            <Flex.Col><Card gift={gift} /></Flex.Col>
          ))
        }
      </Flex.Row>
    </Container>
  )
}

export default MainPage;
