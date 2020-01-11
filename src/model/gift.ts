export interface IGift {
  id: number;
  name: string;
  info: string;
  description: string;
  points: number;
  stock: number;
  images?: string[];
  image?: string;
  isNew: number;
  rating: string;
  num_reviews: number;
}