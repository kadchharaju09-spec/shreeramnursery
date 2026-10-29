'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with Shree Ram Nursery. Your plant order has been received and is being prepared.
        </p>

        {paymentId && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-left">
            <p className="text-gray-500">Payment ID:</p>
            <p className="font-mono font-semibold text-gray-800">{paymentId}</p>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <Link
            href="/catalog"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
