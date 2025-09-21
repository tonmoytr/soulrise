import Script from "next/script";
import "../styles/globals.css";
import "../styles/webflow.css";

export const metadata = {
  title: "SoulRise",
  description: "SoulRise — compassion in action",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* (Optional) preload a critical local font once fonts are copied */}
        {/* <link rel="preload" href="/assets/fonts/YourFont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        {/* Swiper core CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
      </head>
      <body>
        {children}

        {/* Load jQuery before Webflow interactions if the theme needs it */}
        {/* Swiper JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
          defer
        ></script>
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
          integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
          crossOrigin="anonymous"
        />
        {/* Webflow interactions (from export) */}
        <Script src="/assets/js/webflow.js" strategy="afterInteractive" />
        <Script src="/assets/js/nav.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
