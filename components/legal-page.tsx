import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <main className="legal-shell">
    <Link className="brand" href="/"><Image src="/veyra-logo.png" width={36} height={36} alt="" /><span>Veyra</span></Link>
    <h1>{title}</h1>
    <p className="legal-meta">Effective 6 September 2026</p>
    <p className="legal-notice">This is a launch-ready policy template. Add your legal business name, registered address, payment provider and governing jurisdiction before accepting payments. Contact: veyrasoft@gmail.com.</p>
    {children}
    <Link className="legal-back" href="/"><ArrowLeft size={17} /> Back to Veyra</Link>
  </main>;
}
