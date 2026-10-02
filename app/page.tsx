import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "./components/site-chrome";

const githubUrl = "https://github.com/seamless-connect";
const docsUrl = "https://github.com/seamless-connect/docs/blob/main/integration-checklists";

const integrationPaths = [
  { role: "Service Provider", copy: "Connect applications and customer workflows to supported domain and DNS operations.", link: `${docsUrl}/service-provider-integration-checklist.md` },
  { role: "DNS Provider", copy: "Expose interoperable DNS capabilities while keeping control of policy, authorization, and execution.", link: `${docsUrl}/dns-provider-integration-checklist.md` },
  { role: "Registrar", copy: "Coordinate registration, DNSSEC, nameserver, transfer, and related domain operations.", link: `${docsUrl}/registrar-integration-checklist.md` },
];

const earlyUseCases = [
  ["01", "Update DNS", "Operationalize Domain Connect so services can configure customer domains across participating DNS providers."],
  ["02", "DNSSEC", "Coordinate secure, automated workflows between registrars and authoritative DNS providers."],
  ["03", "Domain registration", "Make registration capabilities easier for authorized services and platforms to discover and use."],
  ["04", "Zone transfer", "Support portable, auditable movement of DNS zones between independently operated providers."],
  ["05", "Agent bootstrapping", "Explore open discovery and delegated authorization for machine-initiated Internet operations."],
];

const publicInfrastructure = [
  ["Open standards", "Implement and operationalize open Internet standards, and contribute implementation experience back to standards communities."],
  ["Neutral governance", "Keep technical participation open, provider authority intact, and project decisions grounded in contribution rather than sponsorship."],
  ["Sustainable commons", "Invite voluntary sponsorship, grants, engineering, adoption, testing, and other mission-aligned contributions."],
];

function SystemMap() {
  const requesters = ["Domain Owners", "Apps", "Agentic Operators"];
  const authoritativeSystems = ["Registrars", "Authoritative DNS", "Agent Registries"];
  const useCases = ["Update DNS", "DNSSEC", "Domain registration", "Zone transfer", "Agent bootstrapping"];

  return (
    <figure className="system-map" aria-labelledby="system-map-caption">
      <figcaption id="system-map-caption" className="visually-hidden">Requesters connect through Seamless Connect to authoritative systems, with control planes and reseller platforms as integration surfaces. Early use cases include updating DNS, DNSSEC, domain registration, zone transfer, and agent bootstrapping.</figcaption>
      <section className="map-group requester-group" aria-labelledby="requester-heading">
        <h2 id="requester-heading">Requesters</h2>
        <div className="map-card-stack">{requesters.map((requester) => <div className="map-card" key={requester}>{requester}</div>)}</div>
      </section>
      <svg className="map-connector desktop-connector left-connector" viewBox="0 0 100 240" preserveAspectRatio="none" aria-hidden="true">
        <defs><marker id="arrow-right" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 8 4 0 8Z" /></marker></defs>
        <path className="connector-branch" d="M0 39H28Q40 39 40 51V108" />
        <path className="connector-branch" d="M0 201H28Q40 201 40 189V132" />
        <path className="connector-main" d="M0 120H100" markerEnd="url(#arrow-right)" />
      </svg>
      <section className="map-center" aria-labelledby="seamless-heading">
        <div className="seamless-node">
          <div><h2 id="seamless-heading">Seamless Connect</h2><p>Discover · Authorize · Coordinate · Verify</p></div>
        </div>
        <div className="mobile-flow-line" aria-hidden="true"><span>↓</span></div>
        <div className="integration-surfaces">
          <h3>Integration surfaces</h3>
          <div><span>Control Planes</span><span>Reseller Platforms</span></div>
        </div>
      </section>
      <svg className="map-connector desktop-connector right-connector" viewBox="0 0 100 240" preserveAspectRatio="none" aria-hidden="true">
        <defs><marker id="arrow-left" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 8 4 0 8Z" /></marker></defs>
        <path className="connector-branch" d="M100 39H72Q60 39 60 51V108" />
        <path className="connector-branch" d="M100 201H72Q60 201 60 189V132" />
        <path className="connector-main" d="M100 120H0" markerEnd="url(#arrow-left)" />
      </svg>
      <div className="mobile-flow-line requester-flow" aria-hidden="true"><span>↓</span></div>
      <section className="map-group authority-group" aria-labelledby="authority-heading">
        <h2 id="authority-heading">Authoritative systems</h2>
        <div className="map-card-stack">{authoritativeSystems.map((system) => <div className="map-card" key={system}>{system}</div>)}</div>
      </section>
      <div className="mobile-flow-line authority-flow" aria-hidden="true"><span>↓</span></div>
      <section className="use-cases" aria-labelledby="use-cases-heading">
        <h2 id="use-cases-heading">Early use cases</h2>
        <div>{useCases.map((useCase) => <span key={useCase}>{useCase}</span>)}</div>
      </section>
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader page="home" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Open, neutral Internet infrastructure</p>
          <h1>Open infrastructure for cross-provider Internet operations.</h1>
          <p className="hero-lede">Seamless Connect gives apps, platforms, registrars, DNS providers, and other Internet services a common way to discover, authorize, coordinate, and verify operations across provider boundaries.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#how">See how it works <span aria-hidden="true">↓</span></a>
            <a className="button button-outline" href={githubUrl} target="_blank" rel="noreferrer">Build with us on GitHub <ExternalArrow /></a>
          </div>
        </div>
        <SystemMap />
      </section>

      <div className="dns-strip" aria-label="Seamless Connect starts with Domain Connect and Update DNS">
        <div className="dns-intro"><span className="globe-icon" aria-hidden="true">◎</span><strong>Starting with Domain Connect / Update DNS</strong></div>
        <span><i className="dot dot-green" /> Standard request</span><span><i className="dot" /> Provider control</span><span><i className="dot dot-blue" /> Verified result</span>
      </div>

      <section className="section connection-section" id="how">
        <div className="section-heading split-heading">
          <div><p className="section-index">01 / How it works</p><h2>One open connection.<br />Provider control.</h2></div>
          <p>Internet operations frequently cross organizational boundaries. Seamless Connect provides a shared coordination layer while each provider keeps control of its systems, policies, APIs, and operational decisions.</p>
        </div>
        <div className="connection-summary">
          <article><span>Request</span><h3>Start an authorized operation.</h3><p>A user, application, or automated system initiates an operation with clear intent.</p></article>
          <article><span>Coordinate</span><h3>Connect across boundaries.</h3><p>Discover capabilities, carry authorization, coordinate the workflow, and make its state observable.</p></article>
          <article><span>Execute</span><h3>Keep provider authority intact.</h3><p>Each participant applies its own capabilities, policies, security controls, and operational systems.</p></article>
        </div>
        <div className="provider-control-note"><strong>Coordination, not replacement.</strong><p>Seamless Connect does not prescribe one universal execution sequence or replace provider infrastructure. It makes independently operated systems easier to connect.</p></div>
      </section>

      <section className="section integration-section" id="integrate">
        <div className="section-heading split-heading">
          <div><p className="section-index">02 / Starting with domains and DNS</p><h2>Solve concrete interoperability problems first.</h2></div>
          <p>Domains and DNS are the project&apos;s starting point because they sit at a common boundary between independently operated Internet services.</p>
        </div>
        <div className="early-use-grid">
          {earlyUseCases.map(([index, title, copy]) => <article key={title}><span>{index}</span><h3>{title}</h3><p>{copy}</p>{index === "01" && <strong>Starting point</strong>}</article>)}
        </div>
        <div className="integration-heading"><p className="section-index">Integration paths</p><h3>Start with the checklist for your role.</h3></div>
        <div className="integration-grid">
          {integrationPaths.map((path, index) => <a href={path.link} target="_blank" rel="noreferrer" key={path.role}><span>0{index + 1}</span><h3>{path.role}</h3><p>{path.copy}</p><strong>Open integration checklist <ExternalArrow /></strong></a>)}
        </div>
      </section>

      <section className="section public-section" id="public-infrastructure">
        <div className="section-heading split-heading">
          <div><p className="section-index">03 / Open public infrastructure</p><h2>The common layer should belong to the ecosystem.</h2></div>
          <p>Seamless Connect reduces the need for privileged bilateral relationships and proprietary control points through open standards, neutral governance, and sustainable public-interest infrastructure.</p>
        </div>
        <div className="public-grid">
          {publicInfrastructure.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <div className="governance-note"><strong>Hosted and governed through FAN.</strong><p>Seamless Connect is hosted by the <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN) <ExternalArrow /></a> under FAN&apos;s United States 501(c)(3) nonprofit governance. Sponsorship does not buy protocol influence, technical approval, exclusive access, or preferential interoperability.</p></div>
        <div className="public-links">
          <a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect <ExternalArrow /></a>
          <a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF DCONN <ExternalArrow /></a>
          <Link href="/charter/">Project charter <ExternalArrow /></Link>
          <Link href="/funding/">Funding principles <ExternalArrow /></Link>
        </div>
        <div className="funding-callout"><div><p className="section-index">Funding the public commons</p><h3>Participation and interoperability are not pay-to-play.</h3></div><p>Support is voluntary and may include sponsorship, grants, engineering, testing, adoption, or advocacy. Optional paid operational services may be offered, but they will never be required for basic interoperability or technical participation.</p></div>
      </section>

      <section className="section ecosystem-section" id="ecosystem">
        <div className="section-heading split-heading">
          <div><p className="section-index">04 / Built with the ecosystem</p><h2>Independent organizations. Shared infrastructure.</h2></div>
          <p>Seamless Connect is being built in the open with infrastructure providers, implementers, standards contributors, and public-interest partners.</p>
        </div>
        <div className="recognition-grid">
          <article><span>Founding Sponsor</span><h3>Name.com / Identity Digital</h3><p>Early financial support, industry experience, implementation participation, and community advocacy.</p></article>
          <article><span>Founding Contributors</span><h3>Cloudflare<br />DigiCert</h3><p>Early technical and ecosystem contributions toward open, interoperable domain operations.</p></article>
          <article className="host-card"><span>Hosted by</span><h3>The Foundation for Agentic Networks (FAN)</h3><p>United States 501(c)(3) nonprofit governance supporting openness, neutrality, and public benefit.</p><a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Visit agenticnet.org <ExternalArrow /></a></article>
        </div>
      </section>

      <section className="community-section" id="support">
        <div><p className="eyebrow"><span /> Participate</p><h2>Help make cross-provider operations seamless.</h2><p>Implement an integration, contribute to the open-source project, participate in a workstream, or help sustain the shared infrastructure.</p></div>
        <div className="community-actions"><a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">Build on GitHub <ExternalArrow /></a><Link className="button button-dark-outline" href="/sponsors/">Sponsor the project</Link></div>
      </section>

      <SiteFooter page="home" />
    </main>
  );
}
