import Link from "next/link";

const githubUrl = "https://github.com/seamless-connect";

export function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗︎</span>;
}

export function SiteHeader({ page }: { page: "home" | "sponsors" }) {
  const homeHref = page === "home" ? "#top" : "/";

  return (
    <header className="site-header">
      <Link className="wordmark" href={homeHref} aria-label="Seamless Connect home">Seamless Connect</Link>
      <nav aria-label="Primary navigation">
        <Link href={page === "home" ? "#how" : "/#how"}>How it works</Link>
        <Link href={page === "home" ? "#integrate" : "/#integrate"}>Integrate</Link>
        <Link href="/sponsors/">Support</Link>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
      </nav>
    </header>
  );
}

const footerGroups = [
  { title: "Project", links: [["How it works", "/#how"], ["Charter", "/charter/"], ["Funding principles", "/funding/"], ["Events", "/events/"]] },
  { title: "Build", links: [["Integration guides", "https://github.com/seamless-connect/docs/tree/main/integration-checklists"], ["Documentation", "https://github.com/seamless-connect/docs"], ["Specification", "https://github.com/seamless-connect/spec"], ["GitHub", githubUrl]] },
  { title: "Participate", links: [["Sponsor the project", "/sponsors/"], ["Funding the commons", "/funding/"], ["Community events", "/events/"], ["Contribute", githubUrl]] },
  { title: "Ecosystem", links: [["Domain Connect", "https://www.domainconnect.org/"], ["IETF DCONN", "https://datatracker.ietf.org/wg/dconn/about/"], ["Foundation for Agentic Networks", "https://www.agenticnet.org/"], ["Identity Digital", "https://www.identity.digital/"]] },
];

export function SiteFooter({ page }: { page: "home" | "sponsors" }) {
  return (
    <footer>
      <div className="footer-brand">
        <Link className="wordmark footer-wordmark" href={page === "home" ? "#top" : "/"}>Seamless Connect</Link>
        <p>Open infrastructure for authorized operations across Internet providers.</p>
      </div>
      <div className="footer-directory" aria-label="Footer navigation">
        {footerGroups.map((group) => <section key={group.title}><h2>{group.title}</h2>{group.links.map(([label, href]) => href.startsWith("http") ? <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a> : <Link key={label} href={href}>{label}</Link>)}</section>)}
      </div>
      <p className="footer-legal">Seamless Connect is an open-source project hosted by the <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a> under FAN&apos;s United States 501(c)(3) nonprofit governance. Technical participation and basic interoperability are open and are not conditioned on sponsorship.</p>
    </footer>
  );
}
