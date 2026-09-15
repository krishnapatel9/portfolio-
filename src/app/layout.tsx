import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Krishna Patel — Backend Engineer & AI-Native Developer",
  description: "Krishna Patel - Backend Engineer & AI-Native Developer specializing in Node.js, Python, TypeScript, and AI agent orchestration pipelines. Parul University 2026 Grad.",
  keywords: "Krishna Patel, Software Developer, Backend Engineer, AI/ML, Node.js, Python, TypeScript, Parul University",
  alternates: {
    canonical: "https://your-domain.com",
  },
  openGraph: {
    type: "website",
    url: "https://your-domain.com",
    title: "Krishna Patel — Backend Engineer & AI-Native Developer",
    description: "I build backend services and AI-native systems — Node.js/TypeScript APIs, Python automation, and agent orchestration pipelines that ship to production.",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Patel — Backend Engineer & AI-Native Developer",
    description: "I build backend services and AI-native systems — Node.js/TypeScript APIs, Python automation, and agent orchestration pipelines that ship to production.",
    images: ["https://your-domain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Krishna Patel",
              "url": "https://your-domain.com",
              "jobTitle": "Backend & AI-Native Developer",
              "sameAs": [
                "https://github.com/krishnapatel9",
                "https://www.linkedin.com/in/krishna-patel-232544282/"
              ],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-background text-text antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
