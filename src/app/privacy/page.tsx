import React from 'react'

export default function page() {
  const securityFeatures = [
    {
      title: "Information We Collect",
      description: "Personal Information: We collect your email address for authentication and to provide daily updates on your job application statuses. Usage Data: We collect anonymous usage data to improve our service and user experience."
    },
    {
      title: "How We Use Your Information",
      description: "We use your email address to scan for job application status updates and to log applications to your Google Sheet. We use usage data to analyze trends and improve Tacer's features and performance."
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
    <div className='w-3/5 mx-auto py-8'>
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8">
          <p>
            This Privacy Policy outlines how we collect, use, and protect your personal information when you use Tacer, the job application tracking Chrome extension.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-xl font-semibold">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy or data practices, please contact us at shin20040720@gmail.com.
              </p>
            </section>
          </div>
        </div>
    </div>
  )
}
