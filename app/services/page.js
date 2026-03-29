'use client'

import { useState } from 'react'
import BookingModal from '@/components/BookingModal'

export default function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const services = {
    'Muscular Conditions': {
      icon: '💪',
      color: 'from-blue-500 to-blue-600',
      conditions: [
        'Knee Pain',
        'Sprains & Strains',
        'Back & Neck Pain',
        'Tendinitis & Bursitis',
        'Chronic Pain Management',
        'Sports Injuries',
        'Muscle Strains'
      ]
    },
    'Neurological Conditions': {
      icon: '🧠',
      color: 'from-cyan-500 to-cyan-600',
      conditions: [
        'Stroke Recovery',
        'Parkinson\'s Disease',
        'Spinal Cord Injuries',
        'Peripheral Neuropathies'
      ]
    },
    'Post-Op / Rehab Conditions': {
      icon: '🏥',
      color: 'from-pink-500 to-pink-600',
      conditions: [
        'Joint Replacement',
        'Spinal Surgery',
        'Ligament Reconstruction',
        'Fracture Rehabilitation',
        'General Post-Surgery Recovery'
      ]
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90">
            Comprehensive physiotherapy and rehabilitation services for various conditions
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {Object.entries(services).map(([category, data]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <span className="text-5xl mr-4">{data.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{category}</h2>
              </div>

              <div className={`bg-gradient-to-r ${data.color} rounded-xl p-8 text-white`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.conditions.map((condition) => (
                    <div
                      key={condition}
                      className="flex items-center bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-lg font-semibold">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't see your condition? Contact us to discuss your specific needs.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Book Your Consultation
          </button>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
