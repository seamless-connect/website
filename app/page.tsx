import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "./components/site-chrome";

const githubUrl = "https://github.com/seamless-connect";
const operations = [
  ["DNS configuration", "Initial focus", "dns-configuration"],
  ["DNSSEC", "Discovery and pilot design", "dnssec"],
  ["Primary / Secondary DNS", "Proposed", "primary-secondary-dns"],
  ["Domain registration", "Proposed", "domain-registration"],
  ["Agent bootstrapping", "Proposed", "agent-bootstrapping"],
];

export default function Home() {
  return (
    <main className="simple-home">
      <SiteHeader page="home" />
      <section className="simple-hero home-width" id="top" aria-labelledby="home-title">
        <p className="section-index">Open source · Cross-provider · Nonprofit</p>
        <h1 id="home-title">Domain operations,<br />made seamless.</h1>
        <p className="hero-lede">Seamless Connect is an open-source, cross-provider developer CLI for discrete, authorized domain operations and agent bootstrapping. It is maintained as a core Internet utility under nonprofit administration.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">Explore GitHub <ExternalArrow /></a>
          <Link className="home-text-link" href="/use-cases/">See use cases <span aria-hidden="true">→</span></Link>
        </div>
        <figure className="simple-workflow" id="how" aria-labelledby="workflow-caption">
          <figcaption id="workflow-caption">A conceptual workflow for an authorized operation</figcaption>
          <ol>
            {["Developer / Agent", "Seamless Connect", "Participating Provider", "Verified Result"].map((step, index) => <li key={step}><span className="workflow-number">0{index + 1}</span><strong>{step}</strong>{index < 3 && <span className="workflow-arrow" aria-hidden="true">→</span>}</li>)}
          </ol>
          <p>Providers retain authority over authorization, policy, and execution. Availability and verification depend on the operation and provider integration.</p>
        </figure>
      </section>
      <section className="home-section home-width" id="integrate" aria-labelledby="operations-heading">
        <p className="section-index">Use cases</p>
        <h2 id="operations-heading">One interface. Multiple operations.</h2>
        <p>Beginning with DNS configuration through Domain Connect, with additional workflows planned or developing.</p>
        <table className="operation-table">
          <caption>Project-level capability status</caption>
          <thead><tr><th scope="col">Operation</th><th scope="col">Status</th></tr></thead>
          <tbody>{operations.map(([name, status, anchor]) => <tr key={name}><th scope="row"><Link href={`/use-cases/#${anchor}`}>{name}</Link></th><td>{status}</td></tr>)}</tbody>
        </table>
        <p className="home-note">These statuses describe project scope, not live availability. Availability depends on the operation and participating provider integrations.</p>
        <Link className="home-text-link" href="/use-cases/">Explore use cases and protocols <span aria-hidden="true">→</span></Link>
      </section>
      <section className="home-section home-width" id="public-infrastructure" aria-labelledby="open-heading">
        <p className="section-index">Open infrastructure</p>
        <h2 id="open-heading">Built for the Internet,<br />across providers.</h2>
        <p>Seamless Connect is developed openly as neutral Internet infrastructure, preserving each provider&apos;s authority over authorization, policy, and execution.</p>
        <p>Nonprofit administration is provided by the <a className="home-inline-link" href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a>. Technical participation is independent of sponsorship.</p>
        <Link className="home-text-link" href="/charter/">Read the project charter <span aria-hidden="true">→</span></Link>
      </section>
      <section className="home-section home-width" id="ecosystem" aria-labelledby="recognition-heading">
        <p className="section-index">Industry participation</p>
        <h2 id="recognition-heading">Built together.</h2>
        <dl className="simple-recognition">
          <div><dt>Founding Sponsor</dt><dd>Name.com (Identity Digital)</dd></div>
          <div><dt>Founding Contributors</dt><dd>Cloudflare and DigiCert</dd></div>
          <div><dt>Nonprofit administrator</dt><dd>Foundation for Agentic Networks (FAN)</dd></div>
        </dl>
        <p className="home-note">Industry participation does not imply implemented integrations.</p>
      </section>
      <section className="home-section home-width simple-community" id="support" aria-labelledby="community-heading">
        <p className="section-index">Community</p>
        <h2 id="community-heading">Build with us.</h2>
        <p>Developers, infrastructure operators, and organizations are invited to contribute to this open-source project.</p>
        <div className="hero-actions"><a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">Contribute on GitHub <ExternalArrow /></a><Link className="home-text-link" href="/sponsors/">Support the project <span aria-hidden="true">→</span></Link></div>
      </section>
      <SiteFooter page="home" />
    </main>
  );
}
