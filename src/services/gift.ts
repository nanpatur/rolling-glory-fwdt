import { store } from "../redux";
import { setGiftList, setGiftDetail, clearGiftDetail } from "../redux/actions/gift.action";
import { IGift } from "../model";
import api from "../api";

class GiftService {

  public async getGiftList() {
    try {
      const { gift } = await api.giftApi.getList()
      store.dispatch(setGiftList(gift))
    } catch (error) {
      console.error(error)
    }
  }

  public setGiftDetail(gift: IGift) {
    store.dispatch(setGiftDetail(gift))
  }

  public async getGiftDetail(slug: string) {
    try {
      const { gift } = await api.giftApi.getBySlug(slug)
      this.setGiftDetail(gift)
    } catch (error) {
      console.error(error)      
    }
  }

  public clearGiftDetail () {
    store.dispatch(clearGiftDetail())
  }
}

export const giftService = new GiftService();
