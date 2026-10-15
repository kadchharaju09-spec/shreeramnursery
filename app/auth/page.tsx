'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase';

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (isSignup) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setErrorMsg(error.message);
      } else {
        setSuccessMsg('Account created successfully! Check your email if verification is required.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMsg(error.message);
      } else {
        setSuccessMsg('Logged in successfully!');
        window.location.href = '/'; // Redirect to homepage or dashboard
      }
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <div className="mb-6 flex rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setIsSignup(false)}
            className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
              !isSignup ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsSignup(true)}
            className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
              isSignup ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Create Account
          </button>
        </div>

        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          {isSignup ? 'Create a New Account' : 'Welcome Back'}
        </h1>

        {errorMsg && <div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-600">{errorMsg}</div>}
        {successMsg && <div className="mb-4 rounded bg-green-50 p-3 text-sm text-green-600">{successMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-green-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-green-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-2.5 text-white font-medium hover:bg-green-700 transition-colors"
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  );
}
