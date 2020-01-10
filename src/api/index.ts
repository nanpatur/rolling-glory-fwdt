import giftApi, { GiftApi } from "./gift";

interface IApi {
  giftApi: GiftApi;
}

const api: IApi = {
  giftApi
}

export default api;
