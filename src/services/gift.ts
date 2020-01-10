import { store } from "../redux";
import { setGiftList, setGiftDetail } from "../redux/actions/gift.action";
import { IGift } from "../model";
import api from "../api";

class GiftService {

  public async getGiftList() {
    try {
      const { gift } = await api.giftApi.getList()
      console.error('========== ', store.dispatch(setGiftList(gift)))
      store.dispatch(setGiftList(gift))
    } catch (error) {
      console.error(error)
    }
  }

  public setGiftDetail(gift: IGift): void {
    store.dispatch(setGiftDetail(gift))
  }
}

export const giftService = new GiftService();
