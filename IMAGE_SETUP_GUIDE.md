# 🖼️ Image Setup Guide for Theramowell

## 📁 Step 1: Create Image Folders

1. Navigate to `c:\theramowell\public\`
2. Create a new folder called `images`

**Final structure:**
```
c:\theramowell\
└── public/
    └── images/
        ├── logo.png
        ├── doctor.jpg
        └── background.jpg
```

---

## 🖥️ Step 2: Add Your Images

### **Logo Image** (`logo.png`)
- **Where**: `c:\theramowell\public\images\logo.png`
- **Size**: 40x40px to 100x100px (will be resized to 40x40px in navbar)
- **Format**: PNG with transparent background (recommended)
- **Used in**: Navbar (top left)

### **Doctor Photo** (`doctor.jpg`)
- **Where**: `c:\theramowell\public\images\doctor.jpg`
- **Size**: At least 600x600px (recommend 800x800px)
- **Format**: JPG or PNG
- **Used in**: Hero section (homepage right side) and About page

### **Background Image** (`background.jpg`)
- **Where**: `c:\theramowell\public\images\background.jpg`
- **Size**: At least 1920x1080px (recommend 1920x1440px)
- **Format**: JPG (for better compression)
- **Used in**: Homepage hero section background

---

## 📸 Image Recommendations

### **Logo**
- Professional clinic logo
- Preferably transparent PNG
- Should have good contrast
- Examples: Simple "T" + text, clinic symbol, etc.

### **Doctor Photo**
- Professional headshot or full body photo
- Well-lit, high quality
- Wearing white coat or professional attire
- Size: Square preferred (1:1 ratio)

### **Background Image**
- Medical/healthcare related imagery
- Hospital, clinic tools, exercise, recovery theme
- Not too busy (will have overlay on top)
- Professional medical background images

**Free resources:**
- Unsplash.com (search: physiotherapy, medical, health)
- Pexels.com (search: doctor, hospital, healthcare)
- Pixabay.com (search: physical therapy, recovery)

---

## ✅ After Adding Images

1. **Stop the dev server** (Ctrl+C)
2. **Clear cache:**
   ```bash
   Remove-Item -Recurse -Force .next
   ```
3. **Restart dev server:**
   ```bash
   npm run dev
   ```
4. **Visit:** http://localhost:3000

---

## 🎨 Modern UI Enhancements (Already Applied)

The components have been updated with:

✅ **Hero Section**
- Background image with gradient overlay
- Doctor's photo display (right side)
- Hover animations on buttons
- Modern shadows and depth

✅ **Navbar**
- Real logo image instead of placeholder
- Professional look
- Responsive design

✅ **About Page**
- Doctor's photo showcase
- Professional image display
- Hover scale effects

---

## 📸 Quick Setup Checklist

- [ ] Create `c:\theramowell\public\images\` folder
- [ ] Add `logo.png` (40x40px minimum)
- [ ] Add `doctor.jpg` (600x600px minimum)
- [ ] Add `background.jpg` (1920x1080px minimum)
- [ ] Restart dev server
- [ ] Visit http://localhost:3000
- [ ] Verify images appear correctly

---

## 🔧 Troubleshooting

**Images not showing?**
1. Check file names match exactly (case-sensitive on Linux)
2. Ensure files are in `public/images/` folder
3. Clear browser cache (Ctrl+Shift+Delete)
4. Clear `.next` folder and restart

**Images look blurry?**
1. Increase image resolution
2. Use Next.js Image component optimization (already in place)

**Logo positioning wrong?**
1. Use square logo (1:1 ratio)
2. PNG with transparent background works best

---

## 🎯 Optional: More Modern Enhancements

Want to make it even more modern? These are already available:

### **Add gradient text**
```javascript
className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
```

### **Add more animations**
- Fade-in on scroll
- Parallax effects
- Smooth transitions

### **Add more sections**
- Testimonials carousel
- Before/After gallery
- Blog/Articles section
- Appointment calendar

---

**Your website is now ready to look professional with your own branding! 🚀**
