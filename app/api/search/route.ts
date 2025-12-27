import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const allPosts = getAllPosts();
    
    const results = allPosts.filter((post) => {
      const searchString = `${post.title} ${post.description} ${post.category} ${post.tags.join(' ')}`.toLowerCase();
      return searchString.includes(query);
    });

    return NextResponse.json({ results: results.slice(0, 10) });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ results: [], error: 'Search failed' }, { status: 500 });
  }
}
