import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seamlessconnect.org"),
  alternates: {
    canonical: "/",
  },
  title: "Seamless Connect — Open Infrastructure for Cross-Provider Internet Operations",
  description:
    "Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.",
  openGraph: {
    title: "Seamless Connect — Open Infrastructure for Cross-Provider Internet Operations",
    description: "Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.",
    url: "https://seamlessconnect.org/",
    siteName: "Seamless Connect",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Seamless Connect — Open Infrastructure for Cross-Provider Internet Operations",
    description: "Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
