'use client';

import Link from "next/link";
import PayPalButton from "@/components/PayPalButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="text-center max-w-3xl mx-auto">
        {/* Test div to verify Tailwind */}
        <div className="bg-red-500 p-4 mb-4">Test Tailwind</div>
        
        <h1 className="text-5xl font-bold text-[#4F46E5] mb-4">DiaryAI</h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your thoughts into text instantly. Speak naturally, and watch your words come to life.
        </p>
        <Link 
          href="/record" 
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#4F46E5] text-white font-medium hover:bg-[#4338CA] transition-colors"
        >
          Start Recording
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl w-full">
        <div className="p-6 rounded-lg bg-opacity-5 bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Voice Recording</h3>
          <p className="text-gray-600">Record your thoughts with crystal clear audio quality.</p>
        </div>

        <div className="p-6 rounded-lg bg-opacity-5 bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Instant Transcription</h3>
          <p className="text-gray-600">AI-powered transcription with high accuracy.</p>
        </div>

        <div className="p-6 rounded-lg bg-opacity-5 bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Easy Export</h3>
          <p className="text-gray-600">Download your transcriptions in multiple formats.</p>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
        <div className="max-w-md mx-auto bg-white shadow-sm rounded-lg p-8 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Pro Plan</h3>
              <p className="text-gray-500">For serious journalers</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">$9.99</p>
              <p className="text-gray-500">per month</p>
            </div>
          </div>
          <ul className="space-y-3 mb-8 text-gray-600">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unlimited recordings
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              90-day history access
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Priority transcription
            </li>
          </ul>
          <PayPalButton onSuccess={() => console.log('Subscription successful!')} />
        </div>
      </div>
    </main>
  );
}
