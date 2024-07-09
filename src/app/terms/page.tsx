import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed">
          By using Tacer, you agree to comply with these Terms of Service and our Privacy Policy.
        </p>
        <h2 className="text-2xl font-semibold mt-6">License</h2>
        <p className="text-lg leading-relaxed">
          Tacer grants you a personal, non-transferable, non-exclusive license to use the extension for your personal or business purposes.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Restrictions</h2>
        <p className="text-lg leading-relaxed">
          - You may not modify, adapt, translate, reverse engineer, decompile, or disassemble the extension.
          <br />
          - You may not use the extension for any unlawful or unauthorized purpose.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Updates and Support</h2>
        <p className="text-lg leading-relaxed">
          Tacer may release updates or provide support for the extension at its discretion.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
        <p className="text-lg leading-relaxed">
          Tacer is not liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the extension.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Changes to Terms</h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to update or modify these Terms of Service at any time. Your continued use of the extension after any changes constitutes acceptance of those changes.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions or concerns about these Terms of Service, please contact us at <a href= "mailto:shin20040720@gmail.com" className='underline'>shin20040720@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}
