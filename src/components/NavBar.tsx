import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Online Shop</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300">Products</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            Login
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
