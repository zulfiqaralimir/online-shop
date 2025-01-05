import Link from 'next/link';

const products = [
  { id: 1, name: 'Product A', price: '$10' },
  { id: 2, name: 'Product B', price: '$20' },
  { id: 3, name: 'Product C', price: '$30' },
];

export default function Products() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
           <Link
  href={`/products/${product.id}`}
  style={{ color: 'blue', textDecoration: 'underline' }}
>
  {product.name} - {product.price}
</Link>

          </li>
        ))}
      </ul>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go Back Home
      </Link>
    </div>
  );
}
