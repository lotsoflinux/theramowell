export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Theramowell</h3>
            <p className="text-sm">
              Dedicated to providing quality physiotherapy services and helping patients recover their mobility and independence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Contact Info</h3>
            <p className="text-sm mb-2">📞 +91 (XXXXXXXXXX)</p>
            <p className="text-sm mb-2">📧 contact@theramowell.com</p>
            <p className="text-sm">📍 [Clinic Address]</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Theramowell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
