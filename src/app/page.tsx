import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to the Online Shop
        </h1>
        <p className="mb-6 text-gray-700">Click below to see our products:</p>
        <Link href="/products" className="text-blue-600 underline hover:text-blue-800">
          View Products
        </Link>
      </div>
    </div>
  );
}
