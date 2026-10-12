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
  title: "Seamless Connect — Open Infrastructure for Domain Operations and Agent Bootstrapping",
  description:
    "Seamless Connect is an open-source, cross-provider developer CLI for discrete, authorized domain operations and agent bootstrapping. It is maintained as a core Internet utility under nonprofit administration.",
  openGraph: {
    title: "Seamless Connect — Open Infrastructure for Domain Operations and Agent Bootstrapping",
    description: "Seamless Connect is an open-source, cross-provider developer CLI for discrete, authorized domain operations and agent bootstrapping. It is maintained as a core Internet utility under nonprofit administration.",
    url: "https://seamlessconnect.org/",
    siteName: "Seamless Connect",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Seamless Connect — Open Infrastructure for Domain Operations and Agent Bootstrapping",
    description: "Seamless Connect is an open-source, cross-provider developer CLI for discrete, authorized domain operations and agent bootstrapping. It is maintained as a core Internet utility under nonprofit administration.",
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
