import Link from "next/link";

const githubUrl = "https://github.com/seamless-connect";

const navigation = [
  ["How it works", "how"],
  ["Integrate", "integrate"],
  ["Roadmap", "roadmap"],
  ["Standards", "standards"],
  ["Community", "community"],
] as const;

export function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗︎</span>;
}

export function SiteHeader({ page }: { page: "home" | "sponsors" }) {
  const homeHref = page === "home" ? "#top" : "/";

  return (
    <header className="site-header">
      <Link className="wordmark" href={homeHref} aria-label="Seamless Connect home">
        <span className="wordmark-mark" aria-hidden="true">S</span>
        <span>Seamless Connect</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map(([label, fragment]) => (
          <Link key={fragment} href={page === "home" ? `#${fragment}` : `/#${fragment}`}>
            {label}
          </Link>
        ))}
        <Link href="/charter/">Charter</Link>
        <Link href="/sponsors/">Support</Link>
      </nav>
      <a
        className="button button-small button-outline"
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        GitHub <ExternalArrow />
      </a>
    </header>
  );
}

export function SiteFooter({ page }: { page: "home" | "sponsors" }) {
  return (
    <footer>
      <Link
        className="wordmark footer-wordmark"
        href={page === "home" ? "#top" : "/"}
      >
        <span className="wordmark-mark" aria-hidden="true">S</span>
        <span>Seamless Connect</span>
      </Link>
      <p>Open infrastructure for authorized operations across Internet providers.</p>
      <div className="footer-links">
        <Link href="/charter/">Charter</Link>
        <Link href="/sponsors/">Support</Link>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect</a>
        <a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF</a>
      </div>
      <p className="footer-legal">
        Seamless Connect is an open-source project governed through the{" "}
        <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a>, a 501(c)(3) nonprofit.
      </p>
    </footer>
  );
}
