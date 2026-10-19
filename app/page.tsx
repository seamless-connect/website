import Link from "next/link";
import IndustryParticipants from "./components/industry-participants";
import styles from "./home-support.module.css";
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
    <figcaption id="workflow-caption">Integrate once. Connect across providers.</figcaption>
    <p className="visually-hidden">Conceptual network: multiple service providers connect through Seamless Connect, a cross-provider coordination hub, to DNS providers and registrars.</p>
    <div className="provider-network">
      <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M24 17H28L36 50H40M24 50H40M24 83H28L36 50M60 50H64L72 17H76M60 50H76M64 50L72 83H76" />
      </svg>
      <div className="network-providers network-services" role="group" aria-label="Generic service providers">
        {["A", "B", "C"].map((provider) => <div className="network-node" key={provider}>Service Provider<span>{provider}</span></div>)}
      </div>
      <div className="network-node network-hub"><strong>Seamless Connect</strong><span>Cross-provider coordination</span></div>
      <div className="network-providers network-infrastructure" role="group" aria-label="Generic infrastructure providers">
        <div className="network-node">DNS Provider<span>A</span></div>
        <div className="network-node">DNS Provider<span>B</span></div>
        <div className="network-node">Registrar</div>
      </div>
    </div>
    <p className="workflow-scope">Conceptual network, not live integrations. Availability and verification depend on the operation and participating provider integrations.</p>
  </figure>;
}

export default function Home() {
  return (
    <main className="preview-home">
      <SiteHeader page="home" />
      <section className="preview-hero preview-width" id="top" aria-labelledby="home-title">
        <div className="preview-hero-copy"><p className="section-index">Open source · Cross-provider · Nonprofit</p>
          <h1 id="home-title">Domain operations,<br />made seamless.</h1>
          <p className="hero-lede">Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.</p>
          <div className="hero-actions"><a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">Explore GitHub <ExternalArrow /></a><Link className="home-text-link" href="/use-cases/">See use cases <span aria-hidden="true">→</span></Link></div>
        </div>
        <Workflow />
      </section>
      <section className="preview-band" id="integrate" aria-labelledby="operations-heading"><div className="preview-width preview-split operations-layout">
        <div><p className="section-index">Use cases</p><h2 id="operations-heading">Integrate once. Reach across providers.</h2><p>Seamless Connect begins with DNS configuration through Domain Connect. The aim is to let participating providers integrate once to reach a broader ecosystem, reducing individual integrations with every counterpart.</p><Link className="home-text-link" href="/use-cases/">Explore use cases and protocols <span aria-hidden="true">→</span></Link><p className="home-note">Project-level statuses, not live availability. Availability depends on the operation and participating provider integrations.</p></div>
        <table className="operation-table"><caption className="visually-hidden">Project-level capability status</caption><thead><tr><th scope="col">Operation</th><th scope="col">Status</th></tr></thead><tbody>{operations.map(([name, status, anchor, tone]) => <tr key={name}><th scope="row"><Link href={`/use-cases/#${anchor}`}>{name}</Link>{anchor === "dns-configuration" && <small>(via Domain Connect)</small>}</th><td><span className={`status-badge status-${tone}`}>{status}</span></td></tr>)}</tbody></table>
      </div></section>
      <section className="preview-width preview-split infrastructure-layout" id="public-infrastructure" aria-labelledby="open-heading">
        <div><p className="section-index">Open infrastructure</p><h2 id="open-heading">Built for the Internet,<br />not a single provider.</h2><p>Seamless Connect is developed openly as neutral Internet infrastructure. It supports interoperability across competing providers while preserving their authority over authorization, policy, and execution.</p><p>Nonprofit administration is provided by the <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a>. Technical participation is independent of sponsorship.</p><p>Provider workflows, APIs, CLIs, and authorized software agents are ways to access the coordination service.</p><Link className="home-text-link" href="/charter/">Read the project charter <span aria-hidden="true">→</span></Link></div>
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
      <section className="recognition-band" id="ecosystem" aria-labelledby="recognition-heading"><div className={`preview-width ${styles.section}`}>
        <p className="section-index">Industry participation</p>
        <h2 id="recognition-heading">Building together.</h2>
        <p className={styles.description}>Technical contributions, integration collaboration, and industry participation to help make cross-provider operations easier.</p>
        <IndustryParticipants />
        <p className={styles.note}>Industry participation does not imply implemented integrations.</p>
      </div></section>
      <section className={`preview-width ${styles.section}`} id="administration-funding" aria-labelledby="administration-heading">
        <p className="section-index">Administration &amp; funding</p>
        <h2 id="administration-heading">Supporting the project.</h2>
        <div className={styles.columns}>
          <article>
            <p className="section-index">Current nonprofit administrator</p>
            <h3><a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a></h3>
            <p>FAN provides the project’s current nonprofit administrative home.</p>
          </article>
          <article>
            <p className="section-index">Crowdfunding channel</p>
            <h3><a href="https://crowdfunding.linuxfoundation.org/initiatives/seamless-connect" target="_blank" rel="noreferrer">Linux Foundation</a></h3>
            <p>Financial contributions can be made through Linux Foundation crowdfunding. The Linux Foundation is not the project administrator.</p>
          </article>
        </div>
      </section>
      <SiteFooter page="home" />
    </main>
  );
}
