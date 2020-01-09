import { IGift } from '../../model';
import { createAction } from '../../utilities';

export const SET_GIFT_LIST: string = 'GIFT.SET_GIFT_LIST';
export const SET_GIFT_DETAIL: string = 'GIFT.SET_GIFT_DETAIL';

export function setGiftList(giftList: IGift[]) {
  return createAction<IGift[]>(SET_GIFT_LIST, giftList);
}

export function setGiftDetail(gift: IGift) {
  return createAction<IGift>(SET_GIFT_DETAIL, gift);
}
