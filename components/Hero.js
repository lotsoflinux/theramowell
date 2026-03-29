import Image from 'next/image'

export default function Hero({ onBookingClick }) {
  return (
    <section className="relative text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Medical background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/85 via-cyan-500/85 to-blue-600/85"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wishing You Good Health
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              Dr. Pujitha MPT Ortho specializes in providing expert physiotherapy care to help you recover, strengthen, and reclaim your quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookingClick}
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Book Appointment
              </button>
              <a
                href="/services"
                className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition text-center"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Side - Doctor Photo */}
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-20 rounded-2xl p-8 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/home.jpg"
                  alt="Dr. Pujitha MPT Ortho"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
