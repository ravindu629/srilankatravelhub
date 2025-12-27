# ⚡ Quick Start Guide

Get your Sri Lankan travel blog up and running in 5 minutes!

## 🏃‍♂️ Fast Track Setup

### 1. Install & Run (2 minutes)

```bash
# Navigate to project
cd srilanka-travel-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:3000` 🎉

### 2. Customize Your Site (3 minutes)

**Update Site Info** - Edit `lib/config.ts`:

```typescript
export const siteConfig = {
  name: 'Your Blog Name',          // ← Change this
  description: 'Your description',  // ← Change this
  url: 'https://yourdomain.com',   // ← Your domain
  // Update social links
  links: {
    twitter: 'https://twitter.com/yourhandle',
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourhandle',
    youtube: 'https://youtube.com/@yourchannel',
  },
};
```

**Update Contact Info** - Edit `components/layout/Footer.tsx`:
- Find contact information section
- Update address, email, phone

### 3. Add Your First Post (2 minutes)

Create `content/posts/my-first-post.md`:

```markdown
---
title: "My First Amazing Post"
description: "This is my first blog post about Sri Lanka"
date: "2024-12-26"
author: "Your Name"
category: "Destinations"
image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
tags: ["travel", "sri lanka"]
featured: true
---

# Welcome to My Blog!

This is my first post. Sri Lanka is amazing because...

## Beautiful Beaches

Sri Lanka has some of the most beautiful beaches...

## Rich Culture

The cultural heritage is incredible...
```

Save and refresh your browser - your post appears! ✨

---

## 📋 Pre-Deployment Checklist

Before you deploy, complete these:

- [ ] Added at least 5 blog posts
- [ ] Updated site name and description in `lib/config.ts`
- [ ] Updated contact information in footer
- [ ] Changed social media links
- [ ] Added your images to `/public/images/` (optional)
- [ ] Tested on mobile (Chrome Dev Tools)

---

## 🚀 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow prompts. Done! 🎊

### Option 2: GitHub + Vercel (Recommended)

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your repository
4. Click "Deploy"

Your site is live in ~2 minutes! 🌟

---

## 💰 Add Google AdSense (Optional)

### After Site is Live:

1. **Sign up**: Visit [google.com/adsense](https://www.google.com/adsense)

2. **Get approved**: Submit your site (takes 1-2 weeks)

3. **Add your ID**: Once approved, edit `components/ui/AdSense.tsx`
   
   Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your actual publisher ID

4. **Wait**: Ads appear automatically within 24-48 hours

---

## 📊 What You Get

### Homepage
- ✅ Hero section with slideshow
- ✅ Featured posts
- ✅ Category cards
- ✅ Recent articles
- ✅ Newsletter signup
- ✅ About section

### Blog Features
- ✅ Blog listing page
- ✅ Individual post pages with SEO
- ✅ Category pages
- ✅ Reading time calculation
- ✅ Social sharing buttons
- ✅ Related posts
- ✅ AdSense ad placements

### Pages
- ✅ About page
- ✅ Contact page with form
- ✅ Category pages

### Built-in SEO
- ✅ Meta tags
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Automatic sitemap
- ✅ robots.txt

---

## 🎨 Customization Quick Tips

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    600: '#YOUR_COLOR', // Main color
  },
  accent: {
    600: '#YOUR_COLOR', // Accent color
  },
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont, AnotherFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

### Add New Page

Create `app/your-page/page.tsx`:

```typescript
export default function YourPage() {
  return <div>Your content</div>;
}
```

Automatically available at `/your-page`!

---

## 🆘 Need Help?

### Common Issues

**Q: Posts not showing?**
A: Check markdown files are in `content/posts/` with correct frontmatter

**Q: Images not loading?**
A: Use full URLs from Unsplash or add domain to `next.config.js`

**Q: Build errors?**
A: Run `npm install` again, check Node.js version (need 18+)

### More Help

- 📖 Read full [README.md](README.md)
- 📘 Check [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed instructions
- 🐛 Create an issue on GitHub

---

## 🎯 Next Steps

1. **Content**: Write 10-15 quality posts (300-1000 words each)
2. **SEO**: Submit sitemap to Google Search Console
3. **Marketing**: Share on social media
4. **Monetize**: Apply for Google AdSense
5. **Grow**: Join travel blogger communities

---

## 📈 Success Metrics

### Week 1
- [ ] 10+ blog posts published
- [ ] Site live on custom domain
- [ ] Submitted to Google Search Console

### Month 1
- [ ] 25+ blog posts
- [ ] 1000+ monthly visitors (realistic goal)
- [ ] AdSense approved and running

### Month 3
- [ ] 50+ blog posts
- [ ] 5000+ monthly visitors
- [ ] First AdSense payment ($100+)

---

**🌴 You're ready to share the beauty of Sri Lanka with the world!**

Happy blogging! 🎉

---

*Need the detailed guide? Check [SETUP_GUIDE.md](SETUP_GUIDE.md)*
*Have questions? Read the full [README.md](README.md)*
