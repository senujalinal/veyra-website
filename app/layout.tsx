import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { assetPath } from '@/lib/asset-path';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veyrasoft.store'),
  title: {
    default: 'Veyra — Your new tab, beautifully focused',
    template: '%s · Veyra',
  },
  description: 'A beautiful new-tab workspace for bookmarks, widgets, wallpapers and focus.',
  openGraph: {
    title: 'Veyra — Your new tab, beautifully focused',
    description: 'Bookmarks, widgets and focus — together.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Veyra — Your new tab, beautifully focused' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veyra — Your new tab, beautifully focused',
    description: 'Bookmarks, widgets and focus — together.',
    images: ['/og.png'],
  },
  icons: { icon: assetPath('/favicon.png') },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
