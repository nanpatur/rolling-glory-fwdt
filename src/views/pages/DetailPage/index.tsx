import React, { useEffect, useState } from 'react'
import { Container, Breadcrumb, Image, Text, Icon, Break, Button, Flex, Tab, StockButton, Rating, LoadingIndicator, NoData } from '../../components';
import { IGift } from '../../../model';
import { RouterProps } from 'react-router';
import { giftService } from '../../../services';
import { useSelector } from 'react-redux';
import { IAppReduxState } from '../../../redux';
import './style.css';

interface IDetailPageProps extends RouterProps {

}

const DetailPage: React.FC<IDetailPageProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const gift = useSelector<IAppReduxState, IGift | undefined>((state) => state.gift.gift);
  const slug = props.history.location.pathname.slice(1)

  useEffect(() => {
    async function getData() {
      await giftService.getGiftDetail(slug);
      setIsLoading(false);
    }
    if (!gift) {
      getData();
    }
    return function cleanup() {
      giftService.clearGiftDetail();
    };
  }, []);

  if (!gift) {
    return isLoading ? (
      <LoadingIndicator />
    ) : (
      <NoData />
    );
  }

  const imageUrl = gift.image && gift.image || gift.images && gift.images[0] || '';
  const outOfStock = gift.stock === 0;

  const tabConfigs = [
    {
      label: 'Info produk', 
      content: (
        <React.Fragment>
          <Text.Paragraph size='20' color='green2'>RINCIAN</Text.Paragraph>
          <Break height='25px' />
          <Text.Paragraph size='14' lineHeight='40px'>
            <div dangerouslySetInnerHTML={{ __html: gift.description }} />
          </Text.Paragraph>
        </React.Fragment>
      )
    }
  ];
  
  const infoProduct = (
    <Container className='detail-info'>
      <Text.Paragraph size='24' weight='bold'>{gift.name}</Text.Paragraph>
      <Break height='15px' />
      <Rating value={gift.rating} iconSize='16px' />&ensp;<Text.Span size='14' color='gray'>{`${gift.num_reviews} reviews`}</Text.Span>
      <Break height='15px' />
      <Icon name='point' size='20px' color='green' />&nbsp;
      <Text.Span size='24' weight='semibold' color='green1'>{gift.points} poins</Text.Span>&ensp;
      {
        outOfStock ? (
          <Text.Span size='14' weight='semibold' color='red'>Out of Stock</Text.Span>
        ) : (
          <Text.Span size='14' weight='semibold' color='green2'>In Stock</Text.Span>
        )
      }
      <Break height='24px' />
      <Text.Paragraph size='14' lineHeight='30px'>
        <div dangerouslySetInnerHTML={{ __html: gift.info }} />
      </Text.Paragraph>
      <Break height='24px' />
      <Text.Paragraph size='14' color='gray'>Jumlah</Text.Paragraph>
      <Break height='15px' />
      <StockButton />
      <Break height='24px' />
      <Container style={{ display: 'flex' }}>
        <Button type='secondary-3' fitContent iconPosition='left'>
          <Icon name='love-outline' size='20px' color='gray' />
        </Button>
        <Button type={outOfStock ? 'disabled' : 'primary'}>
          <Text.Span size='14'>Redeem</Text.Span>
        </Button>
        <Button type={outOfStock ? 'disabled' : 'secondary-1'}>
          <Text.Span size='14'>Add to cart</Text.Span>
        </Button>
      </Container>
    </Container>
  );

  return (
    <Container className='app-detail'>
      <Breadcrumb />
      <Break height='24px' />
      <Flex.Row>
        <Flex.Col>
          <Container className='detail-image'>
            <Container className='is-new-label'>
              <Text.Paragraph size='14' weight='bold' color='white'>New</Text.Paragraph>
            </Container>
            <Image src={imageUrl} height='100%' />
          </Container>
        </Flex.Col>
        <Flex.Col>
          {infoProduct}
        </Flex.Col>
      </Flex.Row>
      <Break height='24px' />
      <Tab tabConfigs={tabConfigs} />
    </Container>
  )
}

export default DetailPage;
