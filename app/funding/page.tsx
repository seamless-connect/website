import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/sponsor/" },
  robots: { index: false, follow: true },
  title: "Sponsor Seamless Connect",
};

export default function SponsorshipRedirect() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0; url=/sponsor/" />
      <h1>Sponsorship information has moved</h1>
      <p>Funding and sponsorship information is now on one page.</p>
      <Link href="/sponsor/">Continue to Sponsor Seamless Connect</Link>
    </main>
  );
}
