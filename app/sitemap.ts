import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/privacy', '/terms', '/cookies', '/refunds', '/license', '/support'];
  return routes.map((route) => ({ url: `https://viora-new-tab.senujalinal.chatgpt.site${route}`, lastModified: new Date(), changeFrequency: route ? 'yearly' : 'monthly', priority: route ? 0.5 : 1 }));
}
