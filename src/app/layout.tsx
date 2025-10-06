import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anushka Patel — CV",
    template: "%s — Anushka Patel",
  },
  description: "Personal CV website: achievements, projects, interests, and contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Anushka Patel — CV",
    description: "Personal CV website: achievements, projects, interests, and contact.",
    type: "website",
    url: "https://example.com",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">{`(function(){try{var r=document.documentElement;var s=localStorage.getItem('theme');var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var d=s?s==='dark':m;if(d){r.classList.remove('light');r.classList.add('dark');}else{r.classList.remove('dark');r.classList.add('light');}}catch(e){}})();`}</Script>
        {/* JSON-LD Person schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anushka Patel",
              url: "https://example.com",
              sameAs: [
                "https://www.linkedin.com/in/your-profile",
                "https://github.com/your-handle",
                "https://x.com/your-handle",
              ],
              jobTitle: "Product Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "City",
                addressCountry: "Country",
              },
            }),
          }}
        />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
