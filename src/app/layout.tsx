import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTopButton from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thinuja Hettiarachchi - Portfolio",
  description: "Welcome to my portfolio showcasing my work and projects.",
  keywords: ["Thinuja Hettiarachchi", "Portfolio", "React", "Next.js", "AI", "Full Stack"],
  authors: [{ name: "Thinuja Hettiarachchi" }],
  openGraph: {
    title: "Thinuja Hettiarachchi - Portfolio",
    description: "Welcome to my portfolio showcasing my work and projects.",
    url: "https://your-portfolio.com",
    siteName: "Thinuja Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <NavBar />
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
