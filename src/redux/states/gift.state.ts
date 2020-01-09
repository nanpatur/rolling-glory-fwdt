import { IGift } from "../../model";

export interface IGiftReduxState {
  giftList: IGift[];
  gift?: IGift;
}

export const giftDefaultState: IGiftReduxState = {
  giftList: []
}
