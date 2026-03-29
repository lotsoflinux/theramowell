'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Contact form data:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 (XXXXXXXXXX)', '+91 (XXXXXXXXXX)']
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['contact@theramowell.com', 'info@theramowell.com']
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['Clinic Location', '[Street Address], [City], [State]']
    },
    {
      icon: '🕐',
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch with Theramowell for any inquiries</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">Send us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Your message..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden shadow-lg h-full min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-gray-700 font-semibold">Clinic Location Map</p>
                <p className="text-gray-600 text-sm mt-2">Integrated map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I book an appointment?',
                a: 'You can book an appointment through our website using the booking form, call us directly, or visit our clinic.'
              },
              {
                q: 'What should I bring on my first visit?',
                a: 'Please bring any medical reports, previous imaging (X-rays, MRI), and a valid ID. Also, wear comfortable clothes.'
              },
              {
                q: 'Do you provide home-based physiotherapy?',
                a: 'Yes, we provide home-based care for patients who require personalized treatment in the comfort of their homes.'
              },
              {
                q: 'What insurance plans do you accept?',
                a: 'Please contact us directly to confirm which insurance plans we accept. We work with most major providers.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
