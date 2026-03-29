'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingModal from '@/components/BookingModal'

export default function About() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90">Learn about Dr. Pujitha and our mission</p>
        </div>
      </section>

      {/* About Dr. Pujitha */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/doctor.jpg"
                    alt="Dr. Pujitha MPT Ortho"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Dr. Pujitha
              </h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                BPT, MPT (Ortho)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dr. Pujitha is a highly qualified healthcare professional specializing in orthopedic physiotherapy. With advanced credentials in Physical Therapy and specialization in Orthopedics, she brings expertise and compassion to every patient interaction.
                </p>
                <p>
                  She specializes in helping individuals recover from injuries, illnesses, or disabilities that affect their movement and physical function. Dr. Pujitha designs and oversees personalized treatment programs, often involving exercises, manual therapy, and specialized equipment.
                </p>
              </div>

              {/* Expertise */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Areas of Expertise</h3>
                <ul className="space-y-3">
                  {[
                    'Orthopedic Rehabilitation',
                    'Sports Medicine & Injury Recovery',
                    'Post-Surgical Rehabilitation',
                    'Chronic Pain Management',
                    'Neurological Conditions',
                    'Manual Therapy Techniques'
                  ].map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Our Mission
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Theramowell, our ultimate goal is to help patients regain their independence and improve their quality of life. We believe that everyone deserves access to quality physiotherapy that promotes healing, strength, and wellness.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Under Dr. Pujitha's leadership, we work with dedication to provide evidence-based, compassionate care in various settings including our clinic, and also provide home-based care when needed. Each treatment plan is customized to meet the unique needs and goals of every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Patient-Centered Care',
                description: 'Your wellbeing is our priority. We listen, understand, and create personalized treatment plans.',
                icon: '❤️'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards of care using evidence-based practices and latest techniques.',
                icon: '⭐'
              },
              {
                title: 'Compassion',
                description: 'We treat every patient with empathy, respect, and dignity throughout their recovery journey.',
                icon: '🤝'
              }
            ].map((value) => (
              <div key={value.title} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a consultation with Dr. Pujitha today and take the first step towards your recovery.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
          >
            Book Consultation
          </button>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
