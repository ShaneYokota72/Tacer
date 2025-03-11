import React from 'react'

export default function page() {
  const termsFeatures = [
    {
      title: "License",
      description: "Tacer grants you a personal, non-transferable, non-exclusive license to use the extension for your personal or business purposes."
    },
    {
      title: "Restrictions",
      description: "You may not modify, adapt, translate, reverse engineer, decompile, or disassemble the extension. You may not use the extension for any unlawful or unauthorized purpose."
    },
    {
      title: "Updates and Support",
      description: "Tacer may release updates or provide support for the extension at its discretion."
    },
    {
      title: "Limitation of Liability",
      description: "Tacer is not liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the extension."
    },
    {
      title: "Changes to Terms",
      description: "We reserve the right to update or modify these Terms of Service at any time. Your continued use of the extension after any changes constitutes acceptance of those changes."
    },
  ]

  return (
    <div className='w-full bg-subtle'>
      <div className='w-3/5 mx-auto py-8'>
        <h1 className="text-3xl font-bold mb-8">Terms of Service
        </h1>
          <div className="space-y-12">
            <p>
              By using Tacer, you agree to comply with these Terms of Service and our Privacy Policy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {termsFeatures.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p>
                If you have any questions or concerns about these Terms of Service, please contact us at tacer.app@gmail.com.
                </p>
              </section>
            </div>
          </div>
      </div>
    </div>
  )
}
