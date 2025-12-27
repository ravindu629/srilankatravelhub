'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
}: AdSenseProps) {
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    // Prevent double initialization in development
    if (adRef.current) return;
    adRef.current = true;

    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle && process.env.NODE_ENV === 'production') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with your AdSense client ID
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
}

// AdSense Script Component (add to layout)
export function AdSenseScript() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

// Predefined Ad Components
export function ArticleTopAd() {
  return (
    <div className="my-8">
      <p className="text-xs text-neutral-400 mb-2 text-center">Advertisement</p>
      <AdSense adSlot="1234567890" adFormat="auto" />
    </div>
  );
}

export function ArticleInlineAd() {
  return (
    <div className="my-8">
      <p className="text-xs text-neutral-400 mb-2 text-center">Advertisement</p>
      <AdSense adSlot="0987654321" adFormat="fluid" />
    </div>
  );
}

export function SidebarAd() {
  return (
    <div className="mb-8">
      <p className="text-xs text-neutral-400 mb-2">Advertisement</p>
      <AdSense
        adSlot="1122334455"
        adFormat="vertical"
        style={{ display: 'block', minHeight: '600px' }}
      />
    </div>
  );
}

export function HomePageAd() {
  return (
    <div className="my-12">
      <p className="text-xs text-neutral-400 mb-2 text-center">Advertisement</p>
      <AdSense adSlot="5544332211" adFormat="horizontal" />
    </div>
  );
}
