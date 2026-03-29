'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Counter from '@/components/Counter'
import BookingModal from '@/components/BookingModal'
import ServiceCard from '@/components/ServiceCard'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '2000+', label: 'Happy Clients' },
    { value: '50+', label: 'Conditions Treated' },
  ]

  const services = [
    {
      title: 'Muscular Conditions',
      count: '7 Conditions',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Neurological Conditions',
      count: '4 Conditions',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Post-Op / Rehab',
      count: '5 Conditions',
      color: 'from-pink-500 to-pink-600',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero onBookingClick={() => setIsBookingOpen(true)} />

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Track Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Counter key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                count={service.count}
                color={service.color}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-lg mb-8 opacity-90">
            Book your appointment today and begin your journey to better health.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
          >
            Book an Appointment
          </button>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
