'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className="max-w-4xl mx-auto p-10 text-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Explore our nursery catalog and pick your favorite plants!</p>
        <Link href="/catalog" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
          Browse Plants
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6 min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t flex justify-between items-center">
        <div>
          <p className="text-gray-600">Total Price:</p>
          <p className="text-2xl font-bold text-gray-900">₹{totalPrice}</p>
        </div>

        <Link
          href="/checkout"
          className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </main>
  );
}
