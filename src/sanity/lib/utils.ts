import { client } from './client';
import { TypeProduct } from './types';

// Fetch all products
export const fetchAllProducts = async (): Promise<TypeProduct[]> => {
  const query = `*[_type == "product"]{
    _id,
    productName,
    slug,
    description,
    price,
    category,
    inventory,
    status,
    colors,
    "imageUrl": image.asset->url
  }`;

  try {
    const result: TypeProduct[] = await client.fetch(query);
    return result || [];
  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
};

// Fetch product by slug
export const fetchProductBySlug = async (slug: string): Promise<TypeProduct | null> => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    productName,
    slug,
    description,
    price,
    category,
    inventory,
    status,
    colors,
    "imageUrl": image.asset->url
  }`;

  try {
    const result: TypeProduct | null = await client.fetch(query, { slug });
    return result || null;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
};
