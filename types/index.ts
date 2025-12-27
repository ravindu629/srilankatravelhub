export interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  images?: string[]; // Array of up to 5 additional images
  tags: string[];
  featured: boolean;
  readingTime: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export interface Author {
  name: string;
  bio: string;
  avatar?: string;
}

export interface SiteMetadata {
  name: string;
  description: string;
  url: string;
  ogImage: string;
}
