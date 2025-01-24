export interface TypeProduct {
  _id: string;  // Changed 'id' to '_id' to match Sanity's structure
  productName: string;
  slug: { current: string };
  description: string;
  price: number;
  category: string;
  inventory: number;
  status: string;
  colors: string[];
  imageUrl: string;
}
