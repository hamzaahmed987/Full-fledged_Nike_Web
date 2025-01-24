import { fetchProductBySlug } from '../../../sanity/lib/utils';
import { TypeProduct } from '../../../sanity/lib/types';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  console.log('Received slug:', params.slug); // Log the received slug

  // Fetch product data using the slug
  const product = await fetchProductBySlug(params.slug);

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
      
      {/* Ensure the image width is correct */}
      <Image
        src={product.imageUrl}
        alt={product.productName}
        height={"20"}
        width={"300"}
        className="mx-auto object-cover mb-4 rounded-lg"  // Changed to w-full for full width
      />

      <p className="text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold text-gray-900">₹ {product.price}</p>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">In Stock: {product.inventory}</p>
      <p className="text-gray-600">Status: {product.status}</p>
      
      <div className="flex gap-2 mt-4">
        {/* Handle product colors */}
        {product.colors.length > 0 ? (
          product.colors.map((color: string) => (
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
