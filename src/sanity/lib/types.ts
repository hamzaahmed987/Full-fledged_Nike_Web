export interface TypeProduct {
  _id: any;  
  productName: string;
  slug: { current: any };
  description: string;
  price: number;
  category: string;
  inventory: number;
  status: string;
  colors: string[];
  imageUrl: string;
}
