// components/productCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  slug: string;
  mainImageUrl: string;
  price: number;
  category: string;
  description: string;
}

export function ProductCard({
  title,
  slug,
  mainImageUrl,
  price,
  category,
  description,
}: ProductCardProps) {
  return (
    <div className="border p-4">
      <Link href={`/products/${slug}`}>
        <Image src={mainImageUrl} alt={title} width={400} height={400} className="w-full" />
        <h3 className="text-xl font-medium text-blue-500">{title}</h3>
      </Link>
      <p className="text-gray-600">{category}</p>
      <p className="text-sm text-gray-700">{description}</p>
      <p className="text-xl font-semibold">₹ {price}</p>
    </div>
  );
}
