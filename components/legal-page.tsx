import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <main className="legal-shell">
    <Link className="brand" href="/"><Image src={assetPath('/veyra-logo.png')} width={36} height={36} alt="" /><span>Veyra</span></Link>
    <h1>{title}</h1>
    <p className="legal-meta">Effective 6 September 2026</p>
    {children}
    <Link className="legal-back" href="/"><ArrowLeft size={17} /> Back to Veyra</Link>
  </main>;
}
