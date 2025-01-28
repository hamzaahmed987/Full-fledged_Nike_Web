import { fetchProductBySlug } from '../../../sanity/lib/utils';
import { TypeProduct } from '../../../sanity/lib/types';
import Image from 'next/image';

// Define the type for the component's props
interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  console.log('Received slug:', params.slug); // Debugging log

  // Fetch product data using the slug
  const product: TypeProduct | null = await fetchProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">{product.productName}</h1>
      <Image
        src={product.imageUrl}
        alt={product.productName}
        height={300}
        width={300}
        className="mx-auto object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold text-gray-900">₹ {product.price}</p>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">In Stock: {product.inventory}</p>
      <p className="text-gray-600">Status: {product.status}</p>

      <div className="flex gap-2 mt-4">
        {product.colors && product.colors.length > 0 ? (
          product.colors.map((color) => (
            <span key={color} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">
              {color}
            </span>
          ))
        ) : (
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">No colors available</span>
        )}
      </div>
    </div>
  );
}


