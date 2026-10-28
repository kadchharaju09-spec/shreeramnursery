'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { User, ShoppingCart, LogOut } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { createClient } from '@/utils/supabase/client';
import { useCart } from '@/context/CartContext';
import { User as SupabaseUser } from '@supabase/supabase-js';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  // Get cart item count from CartContext (if CartContext is not set up yet, fallback to 0)
  const cartContext = useCart ? useCart() : null;
  const totalCartCount = cartContext?.cart?.reduce((sum: number, item: any) => sum + item.quantity, 0) || 0;

  const supabase = createClient();

  useEffect(() => {
    // Fetch initial auth user state
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes live
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image
              src="/logo.png"
              alt={BUSINESS_INFO.name}
              width={60}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-gray-700">
            <Link href="/" className="hover:text-green-600 transition font-medium">Home</Link>
            <Link href="/catalog" className="hover:text-green-600 transition font-medium">Catalog</Link>
            <Link href="/about" className="hover:text-green-600 transition font-medium">About</Link>
            <Link href="/contact" className="hover:text-green-600 transition font-medium">Contact</Link>
            
            {/* Shopping Cart Icon */}
            <Link 
              href="/cart" 
              className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-green-600 transition"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </Link>

            {/* Auth / Profile Link */}
            {user ? (
              <div className="flex items-center gap-3 border-l pl-4">
                <Link 
                  href="/account" 
                  className="p-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-green-600 transition flex items-center gap-1 font-medium text-sm"
                  title="My Account"
                >
                  <User className="w-5 h-5 text-green-700" />
                  <span className="max-w-[120px] truncate">{user.email?.split('@')[0]}</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-600 transition"
                  title="Log Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link 
                href="/auth" 
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-green-600 transition"
                title="Sign In / Account"
              >
                <User className="w-5 h-5" />
              </Link>
            )}
          </nav>

          {/* Mobile Actions Area */}
          <div className="flex items-center gap-2 md:hidden">
            <Link 
              href="/cart" 
              className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-green-600 transition"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </Link>

            <Link 
              href={user ? "/account" : "/auth"} 
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-green-600 transition"
              title={user ? "My Account" : "Sign In"}
            >
              <User className={`w-5 h-5 ${user ? 'text-green-700' : ''}`} />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1 p-2 cursor-pointer"
            >
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 text-gray-700 border-t pt-3">
            <Link href="/" className="hover:text-green-600 transition font-medium">Home</Link>
            <Link href="/catalog" className="hover:text-green-600 transition font-medium">Catalog</Link>
            <Link href="/about" className="hover:text-green-600 transition font-medium">About</Link>
            <Link href="/contact" className="hover:text-green-600 transition font-medium">Contact</Link>
            {user && (
              <button 
                onClick={handleLogout}
                className="text-left text-red-500 hover:text-red-700 font-medium pt-2 border-t"
              >
                Log Out
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
