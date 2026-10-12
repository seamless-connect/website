import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "./components/site-chrome";

const githubUrl = "https://github.com/seamless-connect";
const operations = [
  ["DNS configuration", "Initial focus", "dns-configuration", "focus"],
  ["DNSSEC", "Discovery and pilot design", "dnssec", "developing"],
  ["Primary / Secondary DNS", "Proposed", "primary-secondary-dns", "proposed"],
  ["Domain registration", "Proposed", "domain-registration", "proposed"],
  ["Agent bootstrapping", "Proposed", "agent-bootstrapping", "proposed"],
];

function Icon({ kind }: { kind: "globe" | "people" | "lock" | "cloud" | "database" | "server" | "code" | "fund" }) {
  const paths = {
    code: <><path d="m11 6-9 10 9 10M21 6l9 10-9 10" /></>,
    fund: <><path d="M4 28V18h5v10M14 28V10h5v18M24 28V3h5v25" /></>,
    globe: <><circle cx="16" cy="16" r="12" /><ellipse cx="16" cy="16" rx="5" ry="12" /><path d="M4 16h24M7 9h18M7 23h18" /></>,
    people: <><circle cx="11" cy="9" r="4" /><circle cx="23" cy="8" r="3" /><path d="M3 28v-5a8 8 0 0 1 16 0v5M23 16a6 6 0 0 1 6 6v5" /></>,
    lock: <><rect x="6" y="13" width="20" height="16" rx="3" /><path d="M10 13V8a6 6 0 0 1 12 0v5M16 20v4" /></>,
    cloud: <path d="M8 26h16a6 6 0 0 0 1-12 9 9 0 0 0-17-2 7 7 0 0 0 0 14Z" />,
    database: <><ellipse cx="16" cy="7" rx="10" ry="4" /><path d="M6 7v18c0 5 20 5 20 0V7M6 13c0 5 20 5 20 0M6 19c0 5 20 5 20 0" /></>,
    server: <><rect x="4" y="4" width="24" height="10" rx="1" /><rect x="4" y="18" width="24" height="10" rx="1" /><path d="M9 9h1M14 9h1M22 9h1M9 23h1M14 23h1M22 23h1" /></>,
  };
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

function Workflow() {
  return <figure className="preview-workflow" id="how" aria-labelledby="workflow-caption">
    <figcaption id="workflow-caption">A conceptual workflow for an authorized operation</figcaption>
    <div className="flow-row"><div className="operation-window"><div className="window-bar" aria-hidden="true"><i /><i /><i /></div><div className="operation-intent"><span>AUTHORIZED OPERATION</span><strong>Configure a domain</strong><p>Discover capabilities<br />Request authorization<br />Coordinate and verify</p></div></div><span className="flow-label">Developer<br />or Agent</span></div>
    <div className="flow-connector" aria-hidden="true">↓</div>
    <div className="flow-row"><div className="flow-node connect-node">Seamless Connect</div><span className="flow-label">Cross-provider<br />coordination</span></div>
    <div className="flow-connector" aria-hidden="true">↓</div>
    <div className="flow-row"><div className="flow-node provider-node" aria-label="Participating Provider"><Icon kind="cloud" /><Icon kind="database" /><Icon kind="server" /></div><span className="flow-label">Participating<br />Provider</span></div>
    <div className="flow-connector" aria-hidden="true">↓</div>
    <div className="flow-row"><div className="flow-node result-node"><span aria-hidden="true">✓</span> Verified Result</div><span className="flow-label">Confirmed<br />operation</span></div>
    <p className="workflow-scope">Illustrative flow. Availability and verification depend on the operation and participating provider integrations.</p>
  </figure>;
}

export default function Home() {
  return (
    <main className="preview-home">
      <SiteHeader page="home" />
      <section className="preview-hero preview-width" id="top" aria-labelledby="home-title">
        <div className="preview-hero-copy"><p className="section-index">Open source · Cross-provider · Nonprofit</p>
          <h1 id="home-title">Domain operations,<br />made seamless.</h1>
          <p className="hero-lede">An open-source developer CLI for discrete, authorized domain operations and agent bootstrapping across providers.</p>
          <div className="hero-actions"><a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">Explore GitHub <ExternalArrow /></a><Link className="home-text-link" href="/use-cases/">See use cases <span aria-hidden="true">→</span></Link></div>
        </div>
        <Workflow />
      </section>
      <section className="preview-band" id="integrate" aria-labelledby="operations-heading"><div className="preview-width preview-split operations-layout">
        <div><p className="section-index">Use cases</p><h2 id="operations-heading">One interface. Multiple operations.</h2><p>Seamless Connect begins with DNS configuration through Domain Connect, with additional workflows planned or developing.</p><Link className="home-text-link" href="/use-cases/">Explore use cases and protocols <span aria-hidden="true">→</span></Link><p className="home-note">Project-level statuses, not live availability. Availability depends on the operation and participating provider integrations.</p></div>
        <table className="operation-table"><caption className="visually-hidden">Project-level capability status</caption><thead><tr><th scope="col">Operation</th><th scope="col">Status</th></tr></thead><tbody>{operations.map(([name, status, anchor, tone]) => <tr key={name}><th scope="row"><Link href={`/use-cases/#${anchor}`}>{name}</Link>{anchor === "dns-configuration" && <small>(via Domain Connect)</small>}</th><td><span className={`status-badge status-${tone}`}>{status}</span></td></tr>)}</tbody></table>
      </div></section>
      <section className="preview-width preview-split infrastructure-layout" id="public-infrastructure" aria-labelledby="open-heading">
        <div><p className="section-index">Open infrastructure</p><h2 id="open-heading">Built for the Internet,<br />not a single provider.</h2><p>Seamless Connect is developed openly as neutral Internet infrastructure. It supports interoperability across competing providers while preserving their authority over authorization, policy, and execution.</p><p>It is maintained as a core Internet utility under nonprofit administration by the <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a>. Technical participation is independent of sponsorship.</p><Link className="home-text-link" href="/charter/">Read the project charter <span aria-hidden="true">→</span></Link></div>
        <ul className="infrastructure-principles"><li><Icon kind="globe" /><div><h3>Open</h3><p>Developed in the open with a transparent process.</p></div></li><li><Icon kind="people" /><div><h3>Neutral</h3><p>Designed to work across competing providers.</p></div></li><li><Icon kind="lock" /><div><h3>Interoperable</h3><p>Built on open standards and common interfaces.</p></div></li></ul>
      </section>
      <section className="participation-band" id="support" aria-labelledby="community-heading">
        <div className="preview-width participation-section"><p className="section-index">Build with us</p>
        <h2 id="community-heading">Help build the Internet’s shared infrastructure</h2>
        <p className="participation-lede">Seamless Connect is an industry-supported open-source project building shared infrastructure for domain operations. Help implement integrations and sustain development.</p>
        <div className="participation-paths">
          <div className="participation-path implement-path"><div className="participation-icon"><Icon kind="code" /></div><h3>Implement</h3><p className="participation-purpose">Make interoperability work.</p><p>We’re seeking DNS providers, service providers, and registrars to build integrations, participate in pilots, and contribute engineering expertise.</p><a className="button button-primary" href={`${githubUrl}/docs/tree/main/integration-checklists`} target="_blank" rel="noreferrer">Become an integration partner <ExternalArrow /></a><nav className="onboarding-links" aria-label="Integration onboarding checklists"><a href={`${githubUrl}/docs/blob/main/integration-checklists/dns-provider-integration-checklist.md`} target="_blank" rel="noreferrer">DNS providers</a><a href={`${githubUrl}/docs/blob/main/integration-checklists/service-provider-integration-checklist.md`} target="_blank" rel="noreferrer">Service providers</a><a href={`${githubUrl}/docs/blob/main/integration-checklists/registrar-integration-checklist.md`} target="_blank" rel="noreferrer">Registrars</a></nav></div>
          <div className="participation-path fund-path"><div className="participation-icon"><Icon kind="fund" /></div><h3>Fund</h3><p className="participation-purpose">Make interoperability sustainable.</p><p>We’re seeking financial sponsors, particularly service providers and registrars that benefit from simpler, more interoperable domain operations. Support engineering, shared infrastructure, and project operations.</p><Link className="button button-primary" href="/sponsors/">Sponsor the project <span aria-hidden="true">→</span></Link></div>
        </div>
        <p className="participation-note">Technical participation is open to everyone and does not require financial sponsorship.</p></div>
      </section>
      <section className="recognition-band" id="ecosystem" aria-labelledby="recognition-heading"><div className="preview-width preview-split recognition-layout">
        <div><p className="section-index">Industry participation</p><h2 id="recognition-heading">Building together.</h2><p>Supported by industry sponsors and Domain Connect maintainers Pawel Kowalik and Sami Kerola.</p><p className="home-note">Industry participation does not imply implemented integrations.</p></div>
        <dl className="preview-recognition"><div><dt>Founding Sponsor · Initial funding</dt><dd><span className="recognition-name namecom">Name.com</span><small>(Identity Digital)</small></dd></div><div><dt>Committed project sponsors</dt><dd><span className="recognition-name cloudflare">Cloudflare</span><span className="recognition-name digicert">DigiCert</span><span className="recognition-name">Datum.net</span></dd></div><div><dt>Nonprofit administrator</dt><dd className="fan-name">Foundation for Agentic Networks (FAN)</dd></div></dl>
      </div></section>
      <SiteFooter page="home" />
    </main>
  );
}
