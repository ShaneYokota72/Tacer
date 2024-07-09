import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed">
          This Privacy Policy outlines how we collect, use, and protect your personal information when you use Tacer, the job application tracking Chrome extension.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <p className="text-lg leading-relaxed">
          - <strong>Personal Information:</strong> We collect your email address for authentication and to provide daily updates on your job application statuses.
          <br />
          - <strong>Usage Data:</strong> We collect anonymous usage data to improve our service and user experience.
        </p>
        <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
        <p className="text-lg leading-relaxed">
          - We use your email address to scan for job application status updates and to log applications to your Google Sheet.
          <br />
          - We use usage data to analyze trends and improve Tacer’s features and performance.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
        <p className="text-lg leading-relaxed">
          We prioritize the security of your personal information and use industry-standard measures to protect it from unauthorized access or disclosure.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Your Choices</h2>
        <p className="text-lg leading-relaxed">
          You can choose to disable certain features of Tacer that require email scanning or revoke access at any time through your browser settings.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions or concerns about our Privacy Policy or data practices, please contact us at <a href= "mailto:shin20040720@gmail.com" className='underline'>shin20040720@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}
