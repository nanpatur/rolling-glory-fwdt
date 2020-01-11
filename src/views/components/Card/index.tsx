import React from 'react';
import Container from '../Container';
import './style.css';
import { IGift } from '../../../model';
import Text from '../Text';
import Image from '../Image';
import Button from '../Button';
import Icon from '../Icon';
import { history } from '../../App';
import Rating from '../Rating';
import { giftService } from '../../../services';

interface ICardProps {
  gift: IGift;
}

const Card: React.FC<ICardProps> = (props) => {
  const { gift } = props;
  const outOfStock = gift.stock === 0
  const cardHoverClassName = `card-hover ${outOfStock ? 'background-gray' : 'background-green'}`

  const goToDetail = () => {
    const slug = gift.name.toLowerCase().split(' ').join('-');
    giftService.setGiftDetail(gift)
    history.push(`/${slug}`);
  }

  const hoverContent = (
    <Container className={cardHoverClassName}>
      <Container className='card-hover-content'>
        <Button fitContent type='secondary-2' size='small' iconPosition='left'>
          <Icon name='love-outline' size='20px' color='white' />
        </Button>
        <Text.Paragraph size='16' weight='medium' color={outOfStock ? 'black' : 'white'}>{gift.name}</Text.Paragraph>
        <Button onCLick={goToDetail} fullX type={outOfStock ? 'secondary-4' : 'secondary-2'} size='small'>
          <Icon name='eye' size='11px' color='white' />&ensp;
          <Text.Span size='12' color='white'>View Detail</Text.Span>
        </Button>
      </Container>
    </Container>
  )

  return (
    <Container className='app-card'>
      {
        !outOfStock && gift.isNew === 1 && (
          <Container className='is-new-label'>
            <Text.Paragraph size='14' weight='bold' color='white'>New</Text.Paragraph>
          </Container>
        )
      }
      {hoverContent}
      <Container>
        <Button fitContent type='secondary-3' size='small' iconPosition='left'>
          <Icon name='love-outline' size='20px' color='gray' />
        </Button>
        {outOfStock && (<Text.Span className='out-of-stock' size='12' weight='semibold' color='red'>Out of stock</Text.Span>)}
      </Container>
      <Container className='card-image'>
        <span>
          <Image src={gift.image || ''} height='265px' />
        </span>
      </Container>
      <Container>
        <Text.Paragraph size='16' weight='medium'>{gift.name}</Text.Paragraph>
        <Icon name='point' size='11px' color='green' />&nbsp;
        <Text.Span size='14' weight='regular' color='green1'>{gift.points} poins</Text.Span><br />
        <Rating value={gift.rating} iconSize='11px' /> - <Text.Span size='12' color='gray'>{`${gift.num_reviews} reviews`}</Text.Span>
      </Container>
    </Container>
  );
}

export default Card;
