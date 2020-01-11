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
  getBySlug: (slug: string) => Promise<GiftSlugApiResponse>;
}

const prefix = '/gift';

const giftApi: GiftApi = {
  getList: () => apiBase.get(prefix),
  getBySlug: (slug: string) => apiBase.get(`${prefix}?slug=${slug}`),
}

export default giftApi;
