// For App Router (app/privacy/page.tsx)
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Calendra</strong>, your privacy is important to us. This Privacy Policy outlines the types of personal information we collect and how it is used.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>OAuth data from Google for authentication</li>
        <li>Email address for user identification</li>
        <li>No sensitive data is stored without your consent</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use your information solely for the purpose of logging you in and managing your calendar schedules. We do not sell or share your data with third parties.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We implement best practices to ensure your data is secure and protected.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have any questions about this policy, feel free to contact us at <a href="mailto:indrakumarhn01@gmail.com" className="text-blue-600">indrakumarhn01@gmail.com</a>.
      </p>
    </main>
  );
}
