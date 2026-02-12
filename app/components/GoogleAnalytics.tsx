'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  // Ganti dengan Google Analytics Measurement ID Anda
  // Format: G-XXXXXXXXXX
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

  // Jika belum ada GA ID, tidak render script
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
