'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase';
import { useRouter } from 'next/navigation';
import { User, Package, LogOut } from 'lucide-react';

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    async function loadUserData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth');
      } else {
        setUser(user);
      }
      setLoading(false);
    }
    loadUserData();
  }, [supabase, router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return <div className="p-12 text-center text-gray-500">Loading your profile...</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 min-h-[70vh]">
      <div className="bg-white shadow rounded-lg p-6 mb-6 flex justify-between items-center border">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full text-green-700">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
            <p className="text-gray-600 text-sm">{user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-red-200 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6 border">
        <div className="flex items-center gap-2 text-gray-800 font-bold text-xl mb-4">
          <Package className="w-5 h-5 text-green-600" />
          <h2>Order History</h2>
        </div>

        <p className="text-gray-500 text-sm">You haven't placed any online orders yet.</p>
      </div>
    </main>
  );
}
