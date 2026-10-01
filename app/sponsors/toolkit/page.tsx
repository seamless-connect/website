import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sponsors/",
  },
  robots: {
    index: false,
    follow: true,
  },
  title: "Sponsor Seamless Connect",
};

export default function RetiredToolkitPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0; url=/sponsors/" />
      <p>This resource has moved to the consolidated sponsorship page.</p>
      <Link href="/sponsors/">Continue to sponsorship</Link>
    </main>
  );
}
