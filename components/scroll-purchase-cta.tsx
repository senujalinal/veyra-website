'use client';

import { useEffect, useState } from 'react';

export function ScrollPurchaseCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateVisibility = () => {
      animationFrame = 0;
      const heroButton = document.querySelector('#hero-buy');
      const pricing = document.querySelector('#pricing');

      if (!heroButton || !pricing) return;

      const heroHasPassed = heroButton.getBoundingClientRect().bottom <= 64;
      const pricingHasStarted = pricing.getBoundingClientRect().top <= window.innerHeight;

      setVisible(heroHasPassed && !pricingHasStarted);
      document.body.classList.toggle('pricing-visible', pricingHasStarted);
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.cancelAnimationFrame(animationFrame);
      document.body.classList.remove('pricing-visible');
    };
  }, []);

  return (
    <a
      className={`button floating-purchase${visible ? ' is-visible' : ''}`}
      href="#pricing"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Get Veyra
    </a>
  );
}
