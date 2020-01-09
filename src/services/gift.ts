import { Store } from "redux";
import { store } from "../redux";
import { setGiftList, setGiftDetail } from "../redux/actions/gift.action";
import { IGift } from "../model";

class GiftService {
  store: Store;

  constructor() {
    this.store = store;
  }

  public setGiftList(giftList: IGift[]): void {
    this.store.dispatch(setGiftList(giftList))
  }

  public setGiftDetail(gift: IGift): void {
    this.store.dispatch(setGiftDetail(gift))
  }
}

export const giftService = new GiftService();
