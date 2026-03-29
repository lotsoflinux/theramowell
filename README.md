# Theramowell - Physiotherapy Clinic Website

A modern, responsive web application for Theramowell physiotherapy clinic specializing in orthopedic rehabilitation.

## Features

✅ **Home Page**
- Welcome message with focus on good health
- Live counters showing experience, happy clients, and conditions treated
- Quick appointment booking button
- Services overview with call-to-action

✅ **Services Page**
- Detailed breakdown of three service categories:
  - Muscular Conditions (Knee pain, sprains, back pain, etc.)
  - Neurological Conditions (Stroke, Parkinson's, etc.)
  - Post-Op / Rehab Conditions (Joint replacement, surgery recovery, etc.)

✅ **About Page**
- Dr. Pujitha's professional profile (BPT, MPT Ortho)
- Areas of expertise
- Mission and values
- Personalized care philosophy

✅ **Contact Page**
- Contact information display
- Contact form
- Clinic hours and location
- FAQ section
- Map placeholder

✅ **Appointment Booking Modal**
- Patient name and phone number
- Problem/condition selection
- Date and time slot selection
- Submission confirmation

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript/React
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd theramowell
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
theramowell/
├── app/
│   ├── layout.js           # Root layout with navbar and footer
│   ├── page.js             # Home page
│   ├── globals.css         # Global styles
│   ├── services/
│   │   └── page.js         # Services page
│   ├── about/
│   │   └── page.js         # About Dr. Pujitha
│   └── contact/
│       └── page.js         # Contact form and info
├── components/
│   ├── Navbar.js           # Navigation bar
│   ├── Footer.js           # Footer
│   ├── Hero.js             # Hero section
│   ├── Counter.js          # Animated counter component
│   ├── BookingModal.js     # Appointment booking modal
│   └── ServiceCard.js      # Service display card
├── public/                 # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Deployment to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-url>
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js and configure it
- Click "Deploy"

## Customization

### Update Contact Information
Edit the contact details in:
- `components/Footer.js` - Footer contact info
- `app/contact/page.js` - Contact page details

### Modify Statistics
Edit the stats in `app/page.js`:
```javascript
const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2000+', label: 'Happy Clients' },
  { value: '50+', label: 'Conditions Treated' },
]
```

### Customize Colors
Edit the Tailwind theme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#ec4899',
    },
  },
}
```

## Environment Variables

Create a `.env.local` file for any sensitive configuration:
```
NEXT_PUBLIC_CLINIC_PHONE=+91-XXXXXXXXX
NEXT_PUBLIC_CLINIC_EMAIL=contact@theramowell.com
```

## Features to Add (Optional)

- Google Analytics integration
- Email notifications for bookings
- Online payment integration
- Blog section for health tips
- Testimonials/reviews section
- Multi-language support
- Appointment management dashboard

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Theramowell physiotherapy clinic.

## Support

For technical issues or improvements, please contact the development team.

---

**Made with ❤️ for Theramowell Physiotherapy Clinic**
