import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Theramowell - Physiotherapy Clinic',
  description: 'Expert physiotherapy care by Dr. Pujitha MPT Ortho. Specialized in orthopedic rehabilitation and physical therapy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
