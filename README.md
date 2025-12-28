# 🌴 Explore Sri Lanka - Travel Blog

A modern, SEO-optimized travel blog built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful design, AdSense integration, and comprehensive blog functionality for showcasing Sri Lankan travel and tourism.

## ✨ Features

### Core Features

- 🎨 **Modern Design** - Unique, eye-catching design with smooth animations
- 📱 **Fully Responsive** - Perfect on all devices from mobile to desktop
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router for blazing fast performance
- 🔍 **SEO Friendly** - Comprehensive metadata, Open Graph tags, and structured data
- 💰 **AdSense Ready** - Pre-integrated Google AdSense components
- 📝 **Markdown Blog Posts** - Write content in Markdown with frontmatter
- 🏷️ **Categories & Tags** - Organize content effectively
- 🔗 **Social Sharing** - Built-in social media share buttons
- 📰 **Newsletter** - Newsletter subscription component
- 📊 **Reading Time** - Automatic reading time calculation

### Technical Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Gray Matter** for markdown frontmatter parsing
- **Markdown-it** for markdown to HTML conversion
- **React Icons** for beautiful icons
- **Image Optimization** with Next.js Image component

## 📁 Project Structure

```
srilanka-travel-blog/
├── app/
│   ├── about/
│   │   └── page.tsx                # About page
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx           # Individual blog post page
│   │   └── page.tsx               # Blog listing page
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx           # Category page
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── layout.tsx                 # Root layout with SEO
│   ├── page.tsx                   # Homepage
│   └── globals.css                # Global styles
├── components/
│   ├── blog/
│   │   └── BlogCard.tsx          # Blog card component
│   ├── home/
│   │   ├── Categories.tsx        # Categories section
│   │   ├── Hero.tsx              # Hero section
│   │   └── Newsletter.tsx        # Newsletter component
│   ├── layout/
│   │   ├── Footer.tsx            # Site footer
│   │   └── Header.tsx            # Site header with navigation
│   └── ui/
│       └── AdSense.tsx           # AdSense ad components
├── content/
│   └── posts/                    # Markdown blog posts
│       ├── sigiriya-ancient-rock-fortress.md
│       ├── ultimate-guide-sri-lankan-cuisine.md
│       └── ella-hill-country-paradise.md
├── lib/
│   ├── config.ts                 # Site configuration
│   ├── markdown.ts               # Markdown utilities
│   └── posts.ts                  # Post fetching utilities
├── public/
│   ├── images/                   # Static images
│   └── fonts/                    # Custom fonts (if any)
├── types/
│   └── index.ts                  # TypeScript type definitions
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📝 Creating Blog Posts

Blog posts are written in Markdown with YAML frontmatter. Create a new `.md` file in `content/posts/`:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2024-12-26"
author: "Author Name"
category: "Destinations"
image: "https://example.com/image.jpg"
tags: ["tag1", "tag2", "tag3"]
featured: true
---

# Your Content Here

Write your post content in Markdown...
```

### Frontmatter Fields

- **title** (required): Post title
- **description** (required): Brief description for SEO and previews
- **date** (required): Publication date in YYYY-MM-DD format
- **author** (required): Author name
- **category** (required): Post category
- **image** (required): Featured image URL
- **tags** (optional): Array of tags
- **featured** (optional): Set to `true` for featured posts

## 🎨 Customization

### Site Configuration

Edit `lib/config.ts` to update site information:

```typescript
export const siteConfig = {
  name: "Your Site Name",
  description: "Your site description",
  url: "https://yoursite.com",
  // ... other settings
};
```

### Colors and Styling

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  },
}
```

### Fonts

The site uses Google Fonts (Playfair Display and Lora). Change fonts in `app/layout.tsx`.

## 💰 AdSense Integration

### Setup AdSense

1. **Get your AdSense Publisher ID:**

   - Sign up at [Google AdSense](https://www.google.com/adsense)
   - Get your publisher ID (ca-pub-XXXXXXXXXXXXXXXXX)

2. **Update AdSense Configuration:**

In `components/ui/AdSense.tsx`, replace the placeholder with your actual publisher ID:

```typescript
data-ad-client="ca-pub-YOUR-PUBLISHER-ID"
```

In `app/layout.tsx`, update the AdSense script:

```typescript
<AdSenseScript />
```

3. **Configure Ad Slots:**

Update ad slot IDs in `components/ui/AdSense.tsx`:

```typescript
<AdSense adSlot="YOUR-AD-SLOT-ID" />
```

### Ad Placements

- **Homepage**: `<HomePageAd />` - Between sections
- **Blog Posts**:
  - `<ArticleTopAd />` - Before content
  - `<ArticleInlineAd />` - Middle of content
- **Sidebar**: `<SidebarAd />` - In sidebar

## 🔍 SEO Features

### Implemented SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML
- ✅ Image optimization with Next.js Image
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs

### Generating Sitemap

Create `app/sitemap.ts`:

```typescript
import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `https://yoursite.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://yoursite.com",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Your site is live!

### Deploy to Other Platforms

- **Netlify**: Similar to Vercel
- **AWS Amplify**: Supports Next.js SSR
- **Self-hosted**: Use `npm run build` and serve with Node.js

## 📊 Performance Tips

1. **Image Optimization**: Always use Next.js `Image` component
2. **Font Loading**: Fonts are optimized with `next/font`
3. **Code Splitting**: Automatic with Next.js App Router
4. **Lazy Loading**: Components load only when needed
5. **Caching**: Configure caching headers in `next.config.js`

## 🎯 Adding New Features

### Add a New Page

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. The route is automatically available

Example for `/services`:

```typescript
// app/services/page.tsx
export default function ServicesPage() {
  return <div>Services</div>;
}
```

### Add a New Component

1. Create a new file in `components/`
2. Export your component
3. Import and use it in your pages

## 🐛 Troubleshooting

### Build Errors

**Error**: `Module not found`

- Run `npm install` to ensure all dependencies are installed

**Error**: `Type error in TypeScript`

- Check your type definitions in `types/index.ts`

### Runtime Errors

**Issue**: Posts not displaying

- Ensure markdown files are in `content/posts/`
- Check frontmatter format

**Issue**: Images not loading

- Verify image URLs are correct
- Add domains to `next.config.js` if using external images

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Markdown Guide](https://www.markdownguide.org)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support, please contact: info@exploresrilanka.com

---

Built with ❤️ for Sri Lankan travel enthusiasts
