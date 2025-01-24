export interface Producttype {
  _id: string; // Unique identifier for the product
  productName: string; // Name of the product
  _type: "product"; // Fixed type for products
  image: {
    asset: {
      _ref: string; // Reference to the image asset
      _type: "image"; // Fixed type for image
    };
  };
  price: number; // Price of the product
  description?: string; // Optional description of the product
  category: string; // Category to which the product belongs
  slug: {
    _type: "slug"; // Fixed type for slug
    current: string; // Slug's current value (URL-friendly identifier)
  };
  _key: string; // Key for unique identification (useful in lists)
  inventory: number; // Available inventory count
  status: string; // Status of the product (e.g., "available", "out of stock")
  colors: string[]; // Array of available color options for the product
}
