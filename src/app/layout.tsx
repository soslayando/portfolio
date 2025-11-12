import type { Metadata } from "next";
import { Roboto, Rubik, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://joseandresgranero.com";

// Fuente roboto para cuerpo de texto
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["300", "400", "600", "700", "900"],
});

// Fuente para headings
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
});

// Fuente para logo
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-featured",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title:
    "Jose Andrés Granero - Product Designer — Specialized in UX/UI Architecture & Design Systems",
  description:
    "The portfolio of Jose Andrés Granero, Product Designer, with a focus on UX Architecture and Design Systems. Explore my projects, case studies, and professional journey in creating user-centered digital experiences.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Jose Andres Granero - Portfolio",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Jose Andrés Granero - Product Designer — UX/UI & Design Systems",
    description:
      "Portfolio of Jose Andrés Granero, Product Designer, showcasing UX Architecture and Design Systems projects.",
    url: "https://joseandresgranero.com",
    siteName: "Jose Andrés Granero - Portfolio",
    images: [
      {
        url: `${baseUrl}/social-preview.png`,
        width: 330,
        height: 330,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${rubik.variable} ${jakarta.variable} antialiased font-base`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
