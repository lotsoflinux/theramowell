# Theramowell Development & Deployment Guide

## 📦 Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Make Changes
- Edit files in `/components` for component updates
- Edit files in `/app` for page updates
- Changes will hot-reload automatically

---

## 🚀 Deployment to Vercel (Recommended)

### Option 1: Direct Vercel Deployment (Easiest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and your site will be live!

### Option 2: GitHub + Vercel (Recommended for Teams)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial Theramowell website"
   git branch -M main
   git remote add origin https://github.com/yourusername/theramowell.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-configures Next.js
   - Click "Deploy"

3. **Access your site** at the provided Vercel URL

---

## ⚙️ Important Configuration Updates (BEFORE DEPLOYING)

### 1. Update Contact Information

**File: `components/Footer.js`**
```javascript
// Update phone and email
<p className="text-sm mb-2">📞 +91 (XXXXXXXXXX)</p>
<p className="text-sm mb-2">📧 contact@theramowell.com</p>
<p className="text-sm">📍 [Clinic Address]</p>
```

**File: `app/contact/page.js`**
```javascript
// Update contact info array
const contactInfo = [
  {
    icon: '📞',
    title: 'Phone',
    details: ['+91 XXXXXXXXXX', '+91 XXXXXXXXXX']
  },
  // ... update email, address, hours
]
```

### 2. Set Up Environment Variables

**Create `.env.local` file**
```
NEXT_PUBLIC_CLINIC_NAME=Theramowell
NEXT_PUBLIC_CLINIC_PHONE=+91 (XXXXXXXXXX)
NEXT_PUBLIC_CLINIC_EMAIL=contact@theramowell.com
NEXT_PUBLIC_CLINIC_ADDRESS="[Your Address]"
```

### 3. Add Clinic Logo/Images

**Add images to `public/` folder:**
- `public/logo.png` - Clinic logo
- `public/doctor.jpg` - Dr. Pujitha photo
- `public/clinic.jpg` - Clinic photos

**Update components to use images:**
```javascript
// In components/Hero.js
import Image from 'next/image'

<Image 
  src="/doctor.jpg" 
  alt="Dr. Pujitha" 
  width={400} 
  height={400}
/>
```

---

## 📧 Email Integration (Optional but Recommended)

### Setup Email Service with Mailgun/SendGrid/Gmail

1. **Install nodemailer**
   ```bash
   npm install nodemailer
   ```

2. **Update `.env.local`**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

3. **Update `app/api/contact/route.js`**
   ```javascript
   import nodemailer from 'nodemailer'

   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: process.env.SMTP_PORT,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASSWORD,
     },
   })

   // Send email in POST handler
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: process.env.SMTP_USER, // Send to clinic email
     subject: `New Contact: ${name}`,
     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
   })
   ```

---

## 🗄️ Database Setup (Optional)

### Using MongoDB (Free Tier)

1. **Create MongoDB Atlas Account**: [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

2. **Install MongoDB Driver**
   ```bash
   npm install mongodb
   ```

3. **Add to `.env.local`**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/theramowell
   ```

4. **Create booking storage in `lib/mongodb.js`**
   ```javascript
   import { MongoClient } from 'mongodb'

   const client = new MongoClient(process.env.MONGODB_URI)

   export async function saveBooking(bookingData) {
     try {
       await client.connect()
       const db = client.db('theramowell')
       const result = await db.collection('bookings').insertOne(bookingData)
       return result
     } finally {
       await client.close()
     }
   }
   ```

---

## 🧪 Testing

### Run Linting
```bash
npm run lint
```

### Manual Testing Checklist
- [ ] Test all links on each page
- [ ] Check mobile responsiveness (375px, 768px, 1024px)
- [ ] Test booking form validation
- [ ] Test contact form
- [ ] Check counter animations
- [ ] Verify all service conditions display correctly
- [ ] Test navigation menu (desktop and mobile)

---

## 📊 Analytics Setup (Optional)

### Add Google Analytics

1. **Create Google Analytics Account**: [analytics.google.com](https://analytics.google.com)

2. **Get Measurement ID**: Format `G-XXXXXXXXXX`

3. **Install google-analytics package**
   ```bash
   npm install @react-google-analytics/core
   ```

4. **Update `.env.local`**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

5. **Add to `app/layout.js`**
   ```javascript
   import { GoogleAnalytics } from '@react-google-analytics/core'

   export default function RootLayout({ children }) {
     return (
       <html>
         <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
         <body>{children}</body>
       </html>
     )
   }
   ```

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** (already in .gitignore)
2. **Use environment variables** for sensitive data
3. **Validate all form inputs** server-side
4. **Use HTTPS only** (Vercel provides this automatically)
5. **Keep dependencies updated**
   ```bash
   npm update
   npm audit fix
   ```

---

## 🎯 Performance Optimization

### Image Optimization
- Use Next.js Image component for images
- Install sharp for image optimization
  ```bash
  npm install sharp
  ```

### Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
```

### Enable Image Optimization in Vercel
- Automatic in Vercel deployment
- Images cached globally

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Deployment Issues
1. Check Vercel logs: Dashboard → Project → Deployments
2. Ensure all environment variables are set in Vercel
3. Check `.eslintrc.json` for linting issues

---

## 📋 Pre-Launch Checklist

- [ ] Update all contact information
- [ ] Add clinic logo and images
- [ ] Set up email service
- [ ] Test all forms with real data
- [ ] Verify mobile responsiveness
- [ ] Set up custom domain
- [ ] Enable SSL/HTTPS
- [ ] Add Google Analytics
- [ ] Setup backup strategy
- [ ] Create privacy policy page
- [ ] Test on actual devices
- [ ] Set up monitoring/uptime checks

---

## 🚀 Deployment Alternatives

### Deploy on Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Deploy on AWS Amplify
1. Push to GitHub
2. Connect GitHub to AWS Amplify
3. Auto-deploys on push

### Self-Hosted (VPS/Dedicated Server)
```bash
npm run build
npm start
```

---

## 📞 Support Resources

- **Next.js Documentation**: [nextjs.org](https://nextjs.org)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **React Documentation**: [react.dev](https://react.dev)

---

**Ready to launch? Start with the setup steps above!**
