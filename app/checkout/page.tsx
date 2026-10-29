'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { createClient } from '@/utils/supabase';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
        setFormData((prev) => ({
          ...prev,
          name: user.user_metadata?.full_name || '',
        }));
      }
    });
  }, [supabase]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return alert('Your cart is empty');

    setLoading(true);

    try {
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalPrice * 100 }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || 'Failed to create order');

      const scriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!scriptLoaded) {
        alert('Razorpay SDK failed to load. Check your connection.');
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Shree Ram Nursery',
        description: 'Plant Purchase Order',
        order_id: orderData.id,
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              customerDetails: formData,   // 👈 Passes name, phone, address, city, pincode
              cartItems: cart,             // 👈 Passes items purchased
              totalAmount: totalPrice,     // 👈 Passes total price
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyRes.ok && verifyData.success) {
            clearCart();
            router.push(`/order-success?payment_id=${response.razorpay_payment_id}`);
          } else {
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: formData.name,
          email: user?.email || 'customer@shreeramnursery.online',
          contact: formData.phone,
        },
        theme: {
          color: '#16a34a',
        },
      };

      const paymentObject = (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      console.error(error);
      alert(error.message || 'Something went wrong during checkout.');
    } finally {
      setLoading(false);
    }
  };

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <button onClick={() => router.push('/catalog')} className="bg-green-600 text-white px-6 py-3 rounded-md">
          Go to Catalog
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6 min-h-[70vh]">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleCheckout} className="space-y-4 bg-white p-6 rounded-lg shadow border">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Shipping Details</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
              placeholder="Raju Kadchha"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
              placeholder="9876543210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
            <textarea
              name="address"
              required
              rows={3}
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
              placeholder="House No, Street, Landmark"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md p-2"
                placeholder="Porbandar"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                required
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md p-2"
                placeholder="360575"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition mt-4"
          >
            {loading ? 'Processing...' : `Pay ₹${totalPrice} via Razorpay`}
          </button>
        </form>

        <div className="bg-gray-50 p-6 rounded-lg border h-fit">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x {item.quantity}</span>
                <span className="font-medium">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-lg text-gray-900">
            <span>Total Payable:</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
