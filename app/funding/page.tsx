import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { ExternalArrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "../sponsors/sponsors.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/funding/",
  },
  title: "Funding the Public Commons | Seamless Connect",
  description:
    "How Seamless Connect funds shared infrastructure while keeping participation and interoperability open.",
};

const sourceUrl = "https://github.com/seamless-connect/website/blob/main/FUNDING.md";

function inlineMarkdown(value: string): ReactNode[] {
  return value
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}

function FundingStatement({ source }: { source: string }) {
  return source
    .trim()
    .split(/\n\s*\n/)
    .map((block, index) =>
      block.startsWith("# ") ? (
        <h1 key={index}>{inlineMarkdown(block.slice(2))}</h1>
      ) : (
        <p key={index}>{inlineMarkdown(block.replace(/\n/g, " "))}</p>
      ),
    );
}

export default function FundingPage() {
  const statement = readFileSync(path.join(process.cwd(), "FUNDING.md"), "utf8");

  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Funding principles</p>
        <p>Shared infrastructure should be sustained by the ecosystem it serves.</p>
      </section>

      <article className={styles.document}>
        <FundingStatement source={statement} />

        <div className={styles.inlineActions}>
          <Link className="button button-primary" href="/sponsors/">
            See sponsorship opportunities
          </Link>
        </div>

        <div className={styles.sourceNote}>
          <span>Open source</span>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            View this statement&apos;s source on GitHub <ExternalArrow />
          </a>
        </div>
      </article>

      <section className="community-section">
        <div>
          <p className="eyebrow"><span /> Sustain the common layer</p>
          <h2>Help keep interoperability open and broadly available.</h2>
          <p>Support the shared infrastructure financially, contribute engineering, or participate in interoperability efforts.</p>
        </div>
        <div className="community-actions">
          <Link className="button button-light" href="/sponsors/">
            Support Seamless Connect
          </Link>
        </div>
      </section>

      <SiteFooter page="sponsors" />
    </main>
  );
}
