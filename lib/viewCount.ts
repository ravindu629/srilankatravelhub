// Simple view count storage using localStorage
// For production, you should use a database

export function getViewCount(slug: string): number {
  if (typeof window === 'undefined') return 0;
  
  const views = localStorage.getItem(`views_${slug}`);
  return views ? parseInt(views, 10) : 0;
}

export function incrementViewCount(slug: string): number {
  if (typeof window === 'undefined') return 0;
  
  const currentViews = getViewCount(slug);
  const newViews = currentViews + 1;
  localStorage.setItem(`views_${slug}`, newViews.toString());
  
  return newViews;
}

export function formatViewCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

// Initialize random view counts for demo (run once per post)
export function initializeViewCount(slug: string): void {
  if (typeof window === 'undefined') return;
  
  const existing = localStorage.getItem(`views_${slug}`);
  if (!existing) {
    // Generate random view count between 100-2000 for demo
    const randomViews = Math.floor(Math.random() * 1900) + 100;
    localStorage.setItem(`views_${slug}`, randomViews.toString());
  }
}
