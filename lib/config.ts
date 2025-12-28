export const siteConfig = {
  name: "Sri Lanka Travel Hub",
  description:
    "Discover the pearl of the Indian Ocean - Your ultimate guide to Sri Lankan travel, tourism, culture, and adventures",
  url: "https://srilankatravelhub.com",
  ogImage: "https://srilankatravelhub.com/og-image.jpg",
  links: {
    facebook: "https://www.facebook.com/profile.php?id=61585913333335",
    instagram: "https://www.instagram.com/srilankatravelhub",
    youtube: "https://www.youtube.com/@SriLankaTravelHub",
  },
  author: {
    name: "Sri Lanka Travel Team",
    bio: "A team of passionate travelers and locals dedicated to showcasing the beauty of Sri Lanka",
  },
  contact: {
    email: "ravinduwjerathne@gmail.com",
  },
  // AdSense Configuration (disabled for now)
  adsense: {
    client: "ca-pub-XXXXXXXXXXXXXXXXX",
    enabled: false,
  },
};

export type SiteConfig = typeof siteConfig;
