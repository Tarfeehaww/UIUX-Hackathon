import React from "react";

export default function Help ()  {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Get Help</h1>
          <p className="mt-2 text-sm">What can we help you with?</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">FAQs</h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div>
              <h3 className="text-lg font-semibold">
                Does my card need international purchase enabled?
              </h3>
              <p className="text-sm mt-2">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified
                at checkout if international purchases need to be enabled.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div>
              <h3 className="text-lg font-semibold">
                Can I pay for my order with multiple methods?
              </h3>
              <p className="text-sm mt-2">
                No, payment for Nike orders cannot be split between multiple payment methods.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div>
              <h3 className="text-lg font-semibold">
                What payment methods are accepted for SNKRS orders?
              </h3>
              <p className="text-sm mt-2">
                You can use any accepted credit card to pay for your SNKRS orders.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div>
              <h3 className="text-lg font-semibold">
                Why don’t I see Apple Pay as an option?
              </h3>
              <p className="text-sm mt-2">
                To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple
                device running the latest OS, be signed in to your iCloud account, and have a supported card in your
                Wallet.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-8">
            {/* Phone Support */}
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l1-2m0 0a2 2 0 012-2h3l3 6H9a2 2 0 01-2-2m-1-2v12a2 2 0 002 2h7a2 2 0 002-2v-5.586a1 1 0 01.293-.707l3.293-3.293A1 1 0 0020 10h-6m-4-5V4m4-1V2m-4 0V1m-4 0v2"
                />
              </svg>
              <div>
                <p className="font-semibold">000 800 919 0566</p>
                <p className="text-sm">Products & Orders: 24 hours a day, 7 days a week</p>
              </div>
            </div>

            {/* Chat Support */}
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h5m-2 8l-2 2m0 0l-2-2m2 2V4m10 10a9 9 0 10-18 0 9 9 0 0018 0z"
                />
              </svg>
              <div>
                <p className="text-sm">24 hours a day, 7 days a week</p>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.218 5.453a4 4 0 004.564 0L21 8m-3 5.618l.2.32C18.8 13.8 17.8 15 16.8 16m-9.2-5l-4.4-2a2 2 0 00-1.2-.4H3a2 2 0 011-1.6z"
                />
              </svg>
              <div>
                <p className="text-sm">We’ll reply within five business days</p>
              </div>
            </div>

            {/* Store Locator */}
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 8a3 3 0 013-3 3 3 0 016 0 3 3 0 01-3 3h4a4 4 0 014 4v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4a4 4 0 014-4z"
                />
              </svg>
              <div>
                <p className="text-sm">Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

