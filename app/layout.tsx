import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veyra-new-tab.senujalinal.chatgpt.site'),
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
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
