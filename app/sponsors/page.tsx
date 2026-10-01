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
  title: "Sponsor Seamless Connect",
  description:
    "Help sustain shared infrastructure for Internet interoperability.",
};

const githubUrl = "https://github.com/seamless-connect";
const sourceUrl = "https://github.com/seamless-connect/website/blob/main/SPONSORS.md";

function inlineMarkdown(value: string): ReactNode[] {
  return value
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }

      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        return href.startsWith("/") ? (
          <Link key={index} href={href}>{label}</Link>
        ) : (
          <a key={index} href={href} target="_blank" rel="noreferrer">
            {label} <ExternalArrow />
          </a>
        );
      }

      return part;
    });
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
        <p className="eyebrow"><span /> Sponsor Seamless Connect</p>
        <p>Help sustain shared infrastructure for Internet interoperability.</p>
      </section>

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
          <h2>Help build infrastructure everyone can use.</h2>
          <p>Sponsor the common layer, contribute engineering, or help another ecosystem participant get involved.</p>
        </div>
        <div className="community-actions">
          <Link className="button button-light" href="/funding/">
            Read funding principles
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
