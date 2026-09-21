import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { ExternalArrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "./sponsors.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sponsors/",
  },
  title: "Support Seamless Connect",
  description:
    "Fund neutral infrastructure for authorized domain operations across providers.",
};

const githubUrl = "https://github.com/seamless-connect";
const sourceUrl = "https://github.com/seamless-connect/website/blob/main/SPONSORS.md";

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

function MarkdownDocument({ source }: { source: string }) {
  const lines = source.trim().split("\n");
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push(<h1 key={index}>{inlineMarkdown(line.slice(2))}</h1>);
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={index}>{inlineMarkdown(line.slice(3))}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={index}>{inlineMarkdown(line.slice(4))}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: ReactNode[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(
          <li key={index}>{inlineMarkdown(lines[index].trim().slice(2))}</li>,
        );
        index += 1;
      }
      blocks.push(<ul key={`list-${index}`}>{items}</ul>);
      continue;
    }

    if (
      line.startsWith("|") &&
      index + 1 < lines.length &&
      /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[index + 1].trim())
    ) {
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(
          lines[index]
            .trim()
            .slice(1, -1)
            .split("|")
            .map((cell) => cell.trim()),
        );
        index += 1;
      }
      const [head, , ...body] = rows;
      blocks.push(
        <div className={styles.tableScroll} key={`table-${index}`}>
          <table>
            <thead>
              <tr>
                {head.map((cell) => <th key={cell}>{inlineMarkdown(cell)}</th>)}
              </tr>
            </thead>
            <tbody>
              {body.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{inlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,3} |- |\|)/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`p-${index}`}>{inlineMarkdown(paragraph.join(" "))}</p>);
  }

  return <>{blocks}</>;
}

export default function SponsorsPage() {
  const markdown = readFileSync(path.join(process.cwd(), "SPONSORS.md"), "utf8");

  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Support Seamless Connect</p>
        <p>Fund the neutral layer for automated Internet operations.</p>
      </section>

      <nav className={styles.pageLinks} aria-label="Sponsorship resources">
        <Link href="/sponsors/why-participate/">
          <span>01</span>
          <strong>Why participate</strong>
          <p>The economic case for services, DNS providers, and registrars.</p>
        </Link>
        <Link href="/sponsors/toolkit/">
          <span>02</span>
          <strong>Champion toolkit</strong>
          <p>Talking points and outreach material for community advocates.</p>
        </Link>
      </nav>

      <article className={styles.document}>
        <MarkdownDocument source={markdown} />
        <div className={styles.sourceNote}>
          <span>Open source</span>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            View this page&apos;s source on GitHub <ExternalArrow />
          </a>
        </div>
      </article>

      <section className="community-section">
        <div>
          <p className="eyebrow"><span /> Build the neutral foundation with us</p>
          <h2>Invest in infrastructure for cross-provider domain operations.</h2>
          <p>Support the two-year buildout, contribute engineering, or help another organization understand the opportunity.</p>
        </div>
        <div className="community-actions">
          <Link className="button button-light" href="/sponsors/toolkit/">
            Use the toolkit
          </Link>
          <a className="button button-dark-outline" href={githubUrl} target="_blank" rel="noreferrer">
            Join on GitHub <ExternalArrow />
          </a>
        </div>
      </section>

      <SiteFooter page="sponsors" />
    </main>
  );
}
