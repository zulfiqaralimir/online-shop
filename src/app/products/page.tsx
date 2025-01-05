import Link from 'next/link';

const products = [
  { id: 1, name: 'Product A', price: '$10' },
  { id: 2, name: 'Product B', price: '$20' },
  { id: 3, name: 'Product C', price: '$30' },
];

export default function Products() {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="text-lg">
            <Link href={`/products/${product.id}`} className="text-blue-600 underline hover:text-blue-800">
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="block mt-6 text-blue-600 underline hover:text-blue-800">
        Go Back Home
      </Link>
    </div>
  );
}
