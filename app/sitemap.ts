import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/privacy', '/terms', '/cookies', '/refunds', '/license', '/support'];
  return routes.map((route) => ({ url: `https://viora.example${route}`, lastModified: new Date(), changeFrequency: route ? 'yearly' : 'monthly', priority: route ? 0.5 : 1 }));
}
