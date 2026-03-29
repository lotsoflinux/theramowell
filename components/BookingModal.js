'use client'

import { useState } from 'react'

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: '',
    date: '',
    time: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const problems = [
    'Knee Pain',
    'Back & Neck Pain',
    'Sprains & Strains',
    'Muscular Conditions',
    'Tendinitis & Bursitis',
    'Chronic Pain Management',
    'Sports Injuries',
    'Stroke',
    'Parkinson\'s Disease',
    'Spinal Cord Injuries',
    'Joint Replacement Recovery',
    'Post-Surgery Recovery',
    'Other',
  ]

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Here you would normally send the data to your backend
    console.log('Booking data:', formData)
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', problem: '', date: '', time: '' })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Book Appointment</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:opacity-80 transition"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Booking Submitted!</h3>
              <p className="text-gray-600">We'll call you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Problem */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Select Your Problem/Condition *
                </label>
                <select
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Choose a condition...</option>
                  {problems.map((problem) => (
                    <option key={problem} value={problem}>
                      {problem}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select time...</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition mt-6"
              >
                Book Appointment
              </button>

              <p className="text-xs text-gray-500 text-center">
                We'll contact you shortly to confirm your booking
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
