import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/privacy', '/terms', '/cookies', '/refunds', '/license', '/support'];
  return routes.map((route) => ({ url: `https://senujalinal.github.io/veyra-website${route}/`, lastModified: new Date(), changeFrequency: route ? 'yearly' : 'monthly', priority: route ? 0.5 : 1 }));
}
