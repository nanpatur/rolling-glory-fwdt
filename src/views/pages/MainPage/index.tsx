import React, { useEffect, useState } from 'react';
import { Container, Card, Flex, Text, LoadingIndicator, NoData } from '../../components';
import { giftService } from '../../../services';
import { useSelector } from 'react-redux';
import { IAppReduxState } from '../../../redux';

const MainPage: React.FC<any> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const giftList = useSelector((state: IAppReduxState) => state.gift.giftList)

  useEffect(() => {
    async function getData() {
      await giftService.getGiftList()
      setIsLoading(false)
    }

    getData()
  }, [])

  if (giftList.length === 0) {
    return isLoading ? (
      <LoadingIndicator />
    ) : (
      <NoData />
    )
  }

  return (
    <Container>
      <Flex.Row colPerRow='4'>
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
