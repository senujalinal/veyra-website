'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { productSlides } from '@/data/slides';

const INTERVAL = 4800;

export function ProductSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % productSlides.length), INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="hero-deck" aria-roledescription="carousel" aria-label="Veyra product screens" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} onPointerDown={(event) => { pointerStart.current = event.clientX; }} onPointerUp={(event) => {
      if (pointerStart.current === null) return;
      const distance = event.clientX - pointerStart.current;
      if (Math.abs(distance) > 45) setActive((current) => (current + (distance < 0 ? 1 : -1) + productSlides.length) % productSlides.length);
      pointerStart.current = null;
    }}>
      <div className="hero-deck-wrap">
        {productSlides.map((slide, index) => {
          const slot = (index - active + productSlides.length) % productSlides.length;
          return <button className={`slide-window slot-${slot}`} type="button" key={slide.src} onClick={() => setActive(index)} aria-label={slot === 0 ? `Current slide: ${slide.alt}` : `Show slide: ${slide.alt}`} aria-hidden={slot > 2} tabIndex={slot > 2 ? -1 : 0}>
            <span className="slide-bar"><i /><i /><i /><span>New Tab</span></span>
            <span className="slide-image"><Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 860px) 90vw, 936px" priority={index === 0} /></span>
          </button>;
        })}
      </div>
      <div className="hero-deck-dots" aria-label="Choose a product screen">
        {productSlides.map((slide, index) => <button type="button" key={slide.src} className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} aria-label={`Show product screen ${index + 1}`} aria-current={index === active ? 'true' : undefined} />)}
      </div>
    </div>
  );
}
