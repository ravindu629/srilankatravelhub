# 🚀 Complete Setup & Deployment Guide

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [Adding Google AdSense](#adding-google-adsense)
3. [SEO Configuration](#seo-configuration)
4. [Deployment Guide](#deployment-guide)
5. [Post-Deployment Checklist](#post-deployment-checklist)

---

## 1. Local Development Setup

### Step 1: Install Dependencies

```bash
cd srilanka-travel-blog
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Step 3: Add Your Content

Create blog posts in `content/posts/` with this format:

```markdown
---
title: "Your Amazing Title"
description: "SEO-friendly description"
date: "2024-12-26"
author: "Your Name"
category: "Destinations"
image: "https://images.unsplash.com/photo-..."
tags: ["beach", "adventure"]
featured: false
---

# Your Content Here

Write your amazing content...
```

---

## 2. Adding Google AdSense

### Step 1: Sign Up for AdSense

1. Visit [https://www.google.com/adsense](https://www.google.com/adsense)
2. Sign up with your Google account
3. Submit your website for review
4. Wait for approval (can take 1-2 weeks)

### Step 2: Get Your Publisher ID

After approval:
1. Log into AdSense dashboard
2. Navigate to "Account" → "Account Information"
3. Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXXX`)

### Step 3: Update Your Code

**Update AdSense Component** (`components/ui/AdSense.tsx`):

```typescript
// Replace this line (appears multiple times):
data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
// With your actual publisher ID:
data-ad-client="ca-pub-1234567890123456"
```

**Update AdSense Script** (`components/ui/AdSense.tsx`):

```typescript
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-ACTUAL-ID"
```

### Step 4: Create Ad Units

1. In AdSense dashboard, go to "Ads" → "By ad unit"
2. Create these ad units:
   - **Display Ad (Homepage)**: Responsive
   - **Display Ad (Article Top)**: Responsive
   - **Display Ad (Article Inline)**: In-article
   - **Display Ad (Sidebar)**: Vertical rectangle

3. Copy each Ad Unit ID

### Step 5: Add Ad Unit IDs

In `components/ui/AdSense.tsx`, replace the placeholder ad slots:

```typescript
// Homepage ad
export function HomePageAd() {
  return (
    <div className="my-12">
      <p className="text-xs text-neutral-400 mb-2 text-center">Advertisement</p>
      <AdSense adSlot="YOUR-HOMEPAGE-AD-SLOT-ID" adFormat="horizontal" />
    </div>
  );
}

// Repeat for other ad components
```

### Step 6: Verify Installation

1. Deploy your site (see Deployment section)
2. Wait 24-48 hours
3. AdSense will scan your site
4. Ads will start appearing automatically

---

## 3. SEO Configuration

### Step 1: Update Site Configuration

Edit `lib/config.ts`:

```typescript
export const siteConfig = {
  name: 'Explore Sri Lanka', // Your site name
  description: 'Your description here',
  url: 'https://yourdomain.com', // Your actual domain
  ogImage: 'https://yourdomain.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/yourhandle',
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourhandle',
    youtube: 'https://youtube.com/@yourchannel',
  },
  // ... rest of config
};
```

### Step 2: Add Google Search Console

1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership using one of these methods:
   - HTML file upload
   - HTML tag (recommended for Next.js)
   - Google Analytics
   - Google Tag Manager

**For HTML tag verification**, add to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  verification: {
    google: 'your-verification-code-here',
  },
};
```

### Step 3: Submit Sitemap

Create `app/sitemap.ts`:

```typescript
import { getAllPosts } from '@/lib/posts';

export default function sitemap() {
  const baseUrl = 'https://yourdomain.com';
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const routes = ['', '/blog', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...routes, ...postUrls];
}
```

After deployment, submit your sitemap:
- URL: `https://yourdomain.com/sitemap.xml`
- Submit in Google Search Console → Sitemaps

### Step 4: Create robots.txt

Create `app/robots.ts`:

```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}
```

---

## 4. Deployment Guide

### Option A: Deploy to Vercel (Recommended)

**Step 1: Prepare Repository**

```bash
git init
git add .
git commit -m "Initial commit"
```

Push to GitHub, GitLab, or Bitbucket.

**Step 2: Deploy**

1. Visit [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your Git repository
4. Vercel auto-detects Next.js
5. Click "Deploy"

**Step 3: Configure Domain**

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

**Step 4: Environment Variables** (if needed)

In Vercel dashboard:
1. Go to "Settings" → "Environment Variables"
2. Add any required variables
3. Redeploy

### Option B: Deploy to Netlify

**Step 1: Prepare for Netlify**

Add `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Step 2: Deploy**

1. Visit [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your repository
4. Configure build settings (auto-detected)
5. Deploy

### Option C: Self-Hosting

**Step 1: Build**

```bash
npm run build
```

**Step 2: Start Production Server**

```bash
npm start
```

**Step 3: Use Process Manager**

```bash
# Install PM2
npm install -g pm2

# Start app
pm2 start npm --name "srilanka-blog" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

**Step 4: Configure Nginx**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 5. Post-Deployment Checklist

### Immediate Checks (Day 1)

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images loading properly
- [ ] Mobile responsiveness working
- [ ] Navigation functioning
- [ ] Forms working (contact, newsletter)
- [ ] SSL certificate active (https)

### SEO Setup (Week 1)

- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] robots.txt accessible
- [ ] Meta descriptions on all pages
- [ ] Open Graph tags working (test on [opengraph.xyz](https://opengraph.xyz))
- [ ] Twitter cards functioning
- [ ] Google Analytics added (optional)

### AdSense Setup (Week 1-2)

- [ ] AdSense code installed
- [ ] All ad slots configured
- [ ] Site submitted for AdSense review
- [ ] Ads displaying correctly (after approval)
- [ ] Ad placements optimized

### Content (Ongoing)

- [ ] At least 10 quality blog posts published
- [ ] Images optimized (use [TinyPNG](https://tinypng.com))
- [ ] Internal linking implemented
- [ ] Categories populated
- [ ] About page completed
- [ ] Contact information updated

### Performance (Week 2)

- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Score above 90 on mobile
- [ ] Score above 95 on desktop
- [ ] Images in WebP format
- [ ] Lazy loading working

### Marketing (Month 1)

- [ ] Social media accounts created
- [ ] Share on social platforms
- [ ] Email signature updated
- [ ] Submit to web directories
- [ ] Join travel blogger communities
- [ ] Guest posting opportunities

---

## Troubleshooting Common Issues

### Issue: Ads Not Showing

**Solutions:**
1. Wait 24-48 hours after deployment
2. Check AdSense approval status
3. Verify publisher ID is correct
4. Ensure site has sufficient content (10+ posts recommended)
5. Check browser ad blockers

### Issue: Poor SEO Performance

**Solutions:**
1. Add more content (aim for 500+ words per post)
2. Improve meta descriptions
3. Add alt text to all images
4. Create internal links between posts
5. Build backlinks from other sites

### Issue: Slow Loading

**Solutions:**
1. Optimize images (use WebP format)
2. Enable image caching
3. Use CDN (Vercel includes this)
4. Minimize JavaScript
5. Lazy load images below fold

### Issue: Build Errors

**Solutions:**
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Check for TypeScript errors
4. Verify all imports are correct
5. Check Node.js version (should be 18+)

---

## Maintenance Schedule

### Daily
- Monitor site uptime
- Check for errors in console

### Weekly
- Publish new blog posts
- Respond to comments/messages
- Check analytics

### Monthly
- Review SEO performance
- Update outdated content
- Check AdSense earnings
- Backup content
- Update dependencies: `npm update`

---

## Support Resources

- **Next.js Issues**: [github.com/vercel/next.js/issues](https://github.com/vercel/next.js/issues)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **AdSense Help**: [support.google.com/adsense](https://support.google.com/adsense)

---

**🎉 Congratulations! Your blog is now live and optimized for success!**

For questions, refer to the main README.md or create an issue in your repository.
