import { ArrowRight, Bookmark, Check, ChevronRight, Cloud, Download, Grid2X2, Image, Search, Zap } from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';
import { ProductSlideshow } from '@/components/product-slideshow';

const features = [
  { icon: Grid2X2, title: 'Visual boards', text: 'Keep bookmarks, links and ideas in clean boards you can arrange your way.' },
  { icon: Zap, title: 'Quick save', text: 'Save the page you’re on with a shortcut, then get right back to what matters.' },
  { icon: Cloud, title: 'Sync everywhere', text: 'Sign in once and your workspace follows you across your Chromium browsers.' },
  { icon: Download, title: 'Easy import', text: 'Bring over your existing browser bookmarks in seconds—nothing gets deleted.' },
  { icon: Image, title: 'Live wallpapers', text: 'Choose a calm still or moving backdrop and make every new tab feel personal.' },
  { icon: Search, title: 'Widgets & search', text: 'Find anything instantly, with focus timer, notes, calendar, clock and weather nearby.' },
];

const faqs = [
  ['What happens to my current bookmarks?', 'Nothing is removed. Veyra works alongside your browser bookmarks, and you can import them into visual boards whenever you are ready.'],
  ['Is this a subscription?', 'No. Both options are one-time purchases. The one-year pass never renews automatically, while the lifetime plan is yours for good.'],
  ['Which browsers are supported?', 'Veyra works on desktop versions of Chrome, Edge, Brave, Opera and other Chromium-based browsers.'],
  ['Can I use it on more than one computer?', 'Yes. Sign in with the same account and your boards stay in sync across your computers.'],
  ['Is my information private?', 'Your workspace is yours. Veyra does not sell personal information and does not use your bookmarks for advertising. See the Privacy Policy for full details.'],
  ['Will it slow down my browser?', 'Veyra is designed to stay lightweight. It loads when you open a new tab and avoids unnecessary background work.'],
  ['How do I install after buying?', 'Your receipt includes an install link and activation instructions. Install Veyra, open a new tab, and follow the short setup flow.'],
  ['What if it is not for me?', 'You can request a refund within seven days of purchase, subject to the simple terms in our Refund Policy.'],
];

const reviews = [
  ['It turned a mess of tabs into a workspace I actually enjoy opening. The live backgrounds are beautiful without getting in the way.', 'Ariana J.'],
  ['I imported years of bookmarks, split them into boards, and could finally find everything. It feels fast even with a lot saved.', 'Marcus L.'],
  ['The focus timer, notes and quick search are exactly the right amount of functionality. My new tab finally feels useful.', 'Sofia K.'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Veyra home"><NextImage src="/veyra-logo.png" width={38} height={38} alt="" /><span>Veyra</span></a>
        <div className="nav-links"><a href="#features">Features</a><a href="#how">How it works</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
        <a className="button button-small" href="#pricing">Get Veyra</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span className="status-dot" /> Browser extension</div>
        <h1>Your new tab,<br /><span>beautifully focused.</span></h1>
        <p className="hero-copy">Bring your bookmarks, tools, notes and daily focus into one calm, personal workspace—ready every time you open a tab.</p>
        <div className="hero-actions"><a className="button" href="#pricing">Get Veyra <ArrowRight size={17} /></a><a className="text-link" href="#features">See what’s inside</a></div>
        <div className="social-proof"><div className="avatars" aria-hidden="true"><span>AJ</span><span>ML</span><span>SK</span><span>+</span></div><p><strong>800+ people</strong> already use Veyra</p></div>
        <ProductSlideshow />
        <div className="browser-row" aria-label="Veyra works with Chrome, Yandex Browser, Microsoft Edge, Opera, Brave and more Chromium browsers">
          <span>Works with</span>
          <div className="browser-icons">
            <NextImage src="/browsers/chrome.png" width={38} height={38} alt="Google Chrome" title="Google Chrome" />
            <NextImage src="/browsers/yandex.png" width={38} height={38} alt="Yandex Browser" title="Yandex Browser" />
            <NextImage src="/browsers/microsoft.png" width={38} height={38} alt="Microsoft Edge" title="Microsoft Edge" />
            <NextImage src="/browsers/opera.png" width={38} height={38} alt="Opera" title="Opera" />
            <NextImage src="/browsers/brave.png" width={38} height={38} alt="Brave" title="Brave" />
          </div>
          <b>+ more</b>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-head"><div className="eyebrow">Why Veyra</div><h2>Your browser opens a new tab.<br />Veyra opens your day.</h2><p>Stop treating bookmarks like a filing cabinet. Put the things you care about on the page you already see all day.</p></div>
        <div className="compare-grid">
          <article className="compare-card dim"><p className="card-kicker">A normal new tab</p><ul><li><span>×</span>A blank page or someone else’s shortcuts</li><li><span>×</span>Too many tabs open “for later”</li><li><span>×</span>Bookmarks buried inside folders</li><li><span>×</span>Useful tools scattered across apps</li></ul></article>
          <article className="compare-card bright"><p className="card-kicker">Your new tab with Veyra</p><ul><li><Check />Everything saved where you can see it</li><li><Check />One shortcut to save, then close the tab</li><li><Check />Visual boards that stay memorable</li><li><Check />Widgets and focus tools in one place</li></ul></article>
        </div>

        <div className="section-head feature-heading"><div className="eyebrow">Features</div><h2>Everything you need.<br />Nothing you don’t.</h2></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><span className="icon-box"><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section how-section" id="how"><div className="shell">
        <div className="section-head"><div className="eyebrow">How it works</div><h2>From checkout to a calmer browser<br />in a few minutes.</h2></div>
        <div className="steps"><article><span>01</span><div><h3>Choose your access</h3><p>Pick one year or lifetime.</p></div><ChevronRight /></article><article><span>02</span><div><h3>Open the link</h3><p>Installation arrives with your receipt.</p></div><ChevronRight /></article><article><span>03</span><div><h3>Make it yours</h3><p>Import, customize, and start fresh.</p></div></article></div>
      </div></section>

      <section className="section shell">
        <div className="section-head"><div className="eyebrow">Loved by focused people</div><h2>A better new-tab habit.</h2></div>
        <div className="reviews">{reviews.map(([quote, name]) => <figure key={name}><div className="stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption>{name}</figcaption></figure>)}</div>
      </section>

      <section className="section shell" id="pricing">
        <div className="section-head"><div className="eyebrow">Pricing</div><h2>Upgrade your everyday browsing.</h2><p className="offer">Launch offer · 50% off</p></div>
        <div className="pricing-grid">
          <article className="price-card"><p className="card-kicker">1-Year Pass</p><div className="price"><s>$25.60</s><strong>$12.80</strong><span>/ year</span></div><small>ONE-TIME PAYMENT · NO AUTO-RENEWAL</small><ul><li><Check /><span><strong>Full access</strong> for 12 months</span></li><li><Check /><span><strong>Unlimited</strong> boards and pages</span></li><li><Check /><span>All widgets, wallpapers and updates</span></li><li><Check /><span>Use on all your computers</span></li><li><Check /><span>Friendly support included</span></li></ul><a className="button secondary-button" href="mailto:veyrasoft@gmail.com?subject=Veyra%201-Year%20Pass">Get one year for $12.80</a><p className="guarantee">7-day money-back guarantee</p></article>
          <article className="price-card featured"><span className="best">Best value</span><p className="card-kicker">Lifetime Access</p><div className="price"><s>$45.60</s><strong>$22.80</strong></div><small>ONE-TIME PAYMENT · YOURS FOREVER</small><ul><li><Check /><span><strong>Lifetime access</strong> · pay once</span></li><li><Check /><span><strong>Unlimited</strong> boards and pages</span></li><li><Check /><span>All widgets, wallpapers and updates</span></li><li><Check /><span>Use on all your computers</span></li><li><Check /><span>Priority support included</span></li></ul><a className="button" href="mailto:veyrasoft@gmail.com?subject=Veyra%20Lifetime%20Access">Get lifetime for $22.80</a><p className="guarantee">7-day money-back guarantee</p></article>
        </div>
      </section>

      <figure className="mid-quote shell">
        <div className="quote-mark" aria-hidden="true">“</div>
        <blockquote>After a week with Veyra, going back to a plain new tab wasn’t an option anymore.</blockquote>
        <figcaption>Matt S.</figcaption>
      </figure>

      <section className="section shell faq-section" id="faq">
        <div className="section-head"><div className="eyebrow">FAQ</div><h2>Questions, answered.</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="final-cta"><div className="orb orb-one" /><div className="orb orb-two" /><div className="shell"><Bookmark size={28} /><h2>Turn your new tab<br />into a workspace.</h2><p>Buy once and get instant access. Keep it for a year at $12.80, or forever for a one-time $22.80.</p><div className="final-actions"><a className="button" href="mailto:veyrasoft@gmail.com?subject=Veyra%20Lifetime%20Access">Get lifetime for $22.80</a><a className="button secondary-button" href="mailto:veyrasoft@gmail.com?subject=Veyra%201-Year%20Pass">Get 1 year for $12.80</a></div><span className="final-guarantee">7-day money-back guarantee</span></div></section>

      <footer><div className="shell footer-inline"><span>© 2026 Veyrasoft. All rights reserved.</span><div className="footer-links"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link><Link href="/cookies">Cookies</Link><Link href="/refunds">Refunds</Link><Link href="/license">Licence</Link><Link href="/support">Support</Link><a href="mailto:veyrasoft@gmail.com">veyrasoft@gmail.com</a></div></div></footer>
    </main>
  );
}
