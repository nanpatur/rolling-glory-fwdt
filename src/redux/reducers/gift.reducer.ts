import { SET_GIFT_LIST, SET_GIFT_DETAIL, CLEAR_GIFT_DETAIL } from "../actions/gift.action";
import { IGiftReduxState, giftDefaultState } from "../states/gift.state";
import { AnyAction } from "redux";

const giftReducer = (state: IGiftReduxState = giftDefaultState, action: AnyAction) => {
  switch (action.type) {
    case SET_GIFT_LIST:
      return {
        ...state,
        giftList: action.payload
      };
    case SET_GIFT_DETAIL:
      return {
        ...state,
        gift: action.payload
      };
    case CLEAR_GIFT_DETAIL:
      return {
        ...state,
        gift: undefined
      }
    default:
      return state;
  }
}

export default giftReducer;
