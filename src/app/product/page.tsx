import { fetchAllProducts } from "../../sanity/lib/utils";
import Link from "next/link";
import { TypeProduct } from "../../sanity/lib/types";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await fetchAllProducts();

  if (!products || products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto py-10 flex flex-col px-4 lg:px-10">
        <h1 className="text-4xl font-bold mb-6">No Products Found</h1>
        <p className="text-gray-600">
          We couldn't find any products at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 flex flex-col px-4 lg:px-10">
      <h1 className="text-4xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: TypeProduct) => {
          const {
            _id,
            productName = "Unnamed Product",
            slug,
            imageUrl = "/default-image.jpg",
            price = 0,
            category = "Uncategorized",
            inventory = 0,
            status = "Unavailable",
            colors = [],
          } = product;

          return (
            <div
              key={_id}
              className="border shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >

<Link href={`/products/${slug.current}`} passHref>

    <div className="relative h-56 w-full mb-4 overflow-hidden rounded-lg">
      <Image
      width={400}
        height={200}
        src={imageUrl}
        alt={productName}
        className="object-cover transform hover:scale-105 transition-transform duration-300"
        // layout="fill" // Ensure the image covers the container fully
        objectFit="cover" // Ensure the image is properly cropped
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
      {productName}
    </h3>

</Link>

              <p className="text-lg font-medium text-gray-900 mt-2">₹ {price}</p>
              <p className="text-sm text-gray-600 mt-1">Category: {category}</p>
              <p className="text-sm text-gray-600">In Stock: {inventory}</p>
              <p
                className={`text-sm font-medium mt-2 ${
                  status === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Status: {status}
              </p>
              <div className="flex gap-2 mt-4">
                {Array.isArray(colors) && colors.length > 0 ? (
                  colors.map((color) => (
                    <span
                      key={color}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {color}
                    </span>
                  ))
                ) : (
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">
                    No colors available
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
