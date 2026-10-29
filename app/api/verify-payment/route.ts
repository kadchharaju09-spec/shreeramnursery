import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase server client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key to securely insert from backend
);

export async function POST(req: Request) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      customerDetails,
      cartItems,
      totalAmount 
    } = await req.json();

    const body = razorpay_order_id + '|' + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Save order to Supabase
      const { error } = await supabase.from('orders').insert({
        customer_name: customerDetails.name,
        email: customerDetails.email || '',
        phone: customerDetails.phone,
        address: customerDetails.address,
        amount: totalAmount,
        items: cartItems,
        razorpay_order_id,
        razorpay_payment_id,
      });

      if (error) {
        console.error('Supabase Error saving order:', error);
      }

      return NextResponse.json({ success: true, message: 'Payment verified successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 400 });
    }
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
