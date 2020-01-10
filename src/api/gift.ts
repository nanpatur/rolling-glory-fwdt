import { IGift } from "../model";
import apiBase from "./base";

interface GiftListApiResponse {
  gift: IGift[];
  count_all_data: number;
  limit: number;
  page: number;
}

interface GiftSlugApiResponse {
  gift: IGift;
}

export interface GiftApi {
  getList: () => Promise<GiftListApiResponse>;
  getBySlug: () => Promise<GiftSlugApiResponse>;
}

const prefix = '/gift';

const giftApi: GiftApi = {
  getList: () => apiBase.get(prefix),
  getBySlug: () => apiBase.get(prefix),
}

export default giftApi;
