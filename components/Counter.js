'use client'

import { useEffect, useRef, useState } from 'react'

export default function Counter({ value, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animateCount = () => {
    const numValue = parseInt(value)
    const increment = Math.ceil(numValue / 50)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numValue) {
        setCount(numValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)
  }

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
        {count}
        {value.includes('+') ? '+' : ''}
      </div>
      <p className="text-gray-600 font-semibold text-lg">{label}</p>
    </div>
  )
}
