import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    category: data.category,
    image: data.image,
    tags: data.tags || [],
    content,
    readingTime: stats.text,
    featured: data.featured || false,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured).slice(0, 3);
}

export function getRecentPosts(limit: number = 6): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

export function getCategories() {
  const allPosts = getAllPosts();
  const categoryMap = new Map<string, number>();

  allPosts.forEach((post) => {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  });

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    description: `Explore ${name.toLowerCase()} destinations`,
    count,
  }));
}

export function getAllTags() {
  const allPosts = getAllPosts();
  const tagMap = new Map<string, number>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      const count = tagMap.get(tag) || 0;
      tagMap.set(tag, count + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
