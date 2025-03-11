import React from 'react'

export default function page() {
  const securityFeatures = [
    {
      title: "Information We Collect",
      description: "Personal Information: We collect your email address for authentication and to provide daily updates on your job application statuses. Usage Data: We collect anonymous usage data to improve our service and user experience."
    },
    {
      title: "How We Use Your Information",
      description: "Tacer accesses your Google email address and name to display them in the Chrome extension popup. We also access Gmail contents to assess job application statuses and update your Google Sheets accordingly. Your privacy is important to us, and we ensure compliance with Google's data usage policies."
    },
    {
      title: "Data Sharing and Disclosure",
      description: "We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential."
    },
    {
      title: "Data Retention and Deletion",
      description: "We will retain your personal information for up to 3 months following the deletion of your account. This allows us to ensure compliance with legal requirements, address disputes, and maintain the integrity of our services. You may also request the deletion of your data at any time by contacting us at tacer.app@gmail.com."
    },
    {
      title: "Data Security",
      description: "We prioritize the security of your personal information and use industry-standard measures to protect it from unauthorized access or disclosure."
    },
    {
      title: "Your Choices",
      description: "You can choose to disable certain features of Tacer that require email scanning or revoke access at any time through your browser settings."
    }
  ]

  return (
    <div className='w-full bg-subtle'>
      <div className='w-3/5 mx-auto py-8'>
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-12">
            <p>
              This Privacy Policy outlines how we collect, use, and protect your personal information when you use Tacer, the job application tracking Chrome extension.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
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
                  If you have any questions or concerns about our Privacy Policy or data practices, please contact us at tacer.app@gmail.com.
                </p>
              </section>
            </div>
          </div>
      </div>
    </div>
  )
}
