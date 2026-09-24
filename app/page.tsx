import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "./components/site-chrome";

const githubUrl = "https://github.com/seamless-connect";
const docsUrl = "https://github.com/seamless-connect/docs/blob/main/integration-checklists";

const integrationPaths = [
  { role: "Service Provider", copy: "Create a standard Domain Connect request, guide the domain owner through authorization, and consume a consistent completion result.", link: `${docsUrl}/service-provider-integration-checklist.md` },
  { role: "DNS Provider", copy: "Publish discovery metadata, support secure setup flows, apply provider policy, and make DNS changes verifiable.", link: `${docsUrl}/dns-provider-integration-checklist.md` },
  { role: "Registrar", copy: "Connect registration and domain-management journeys to DNS automation while preserving registrar and registry controls.", link: `${docsUrl}/registrar-integration-checklist.md` },
];

const roadmap = [
  { phase: "01 / NOW", title: "Operationalize Domain Connect", copy: "Make a proven, deployed protocol broadly useful through neutral infrastructure, shared tooling, registries, and conformance.", items: ["Neutral hosted service", "Open SDK, CLI, and API", "Templates and conformance"], active: true },
  { phase: "02 / NEXT", title: "Automate domain operations", copy: "Extend coordination beyond DNS records to DNSSEC, nameserver changes, registration, and transfers through open, auditable workflows.", items: ["Automated DNSSEC", "Registration and transfer", "Registrar coordination"] },
  { phase: "03 / LATER", title: "Extend the architecture", copy: "Apply the reusable discovery, authorization, policy, state, and verification architecture to agentic operations where it fits.", items: ["Open discovery patterns", "Delegated authorization", "Protocol-appropriate coordination"] },
];

const principles = [
  ["Open by default", "Specifications, implementations, tests, and registries should be available to every participant."],
  ["Neutral by design", "No single vendor should control how services and providers coordinate or how interoperability is measured."],
  ["Provider autonomy", "Providers retain their own APIs, policies, authorization models, and operational control."],
  ["Conformance first", "Objective, reusable tests make compatibility observable and integrations dependable at scale."],
];

const founders = [
  { name: "Brian Toresdahl", role: "Project Formation, Product, and Ecosystem Development", copy: "Leading project formation, fundraising, partnerships, product, and the development of a sustainable model for neutral, public-benefit infrastructure.", linkedin: "https://www.linkedin.com/in/brian-toresdahl/" },
  { name: "Pawel Kowalik", role: "Standards and Technical Strategy", copy: "Helping shape the project’s technical direction, open architecture, and practical implementation across providers and protocols.", linkedin: "https://www.linkedin.com/in/pawelk/" },
  { name: "Sami Kerola", role: "Technical Lead and Architect", copy: "Leading the design and implementation of Seamless Connect’s technical architecture and shared infrastructure.", linkedin: "https://www.linkedin.com/in/kerolasa/" },
];

function SystemMap() {
  const requesters = ["Domain Owners", "Apps", "Agentic Operators"];
  const authoritativeSystems = ["Registrars", "Authoritative DNS", "Agent Registries"];
  const useCases = ["Update DNS", "DNSSEC", "Register Domain", "Zone Transfer", "Agent Bootstrapping"];

  return (
    <figure className="system-map" aria-labelledby="system-map-caption">
      <figcaption id="system-map-caption" className="visually-hidden">Requesters connect through Seamless Connect to authoritative systems, with control planes and reseller platforms as integration surfaces. Common use cases include updating DNS, DNSSEC, domain registration, zone transfer, and agent bootstrapping.</figcaption>
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
          <span className="s-mark" aria-hidden="true">S</span>
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
        <h2 id="use-cases-heading">Common use cases</h2>
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
          <h1>The open connection layer for the Internet.</h1>
          <p className="hero-lede">Seamless Connect lets services make authorized changes across Internet providers through one open interface—starting with domains and DNS.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#how">See how it works <span aria-hidden="true">↓</span></a>
            <a className="button button-outline" href={githubUrl} target="_blank" rel="noreferrer">View on GitHub <ExternalArrow /></a>
          </div>
        </div>
        <SystemMap />
      </section>

      <div className="dns-strip" aria-label="Seamless Connect starts with Domain Connect">
        <div className="dns-intro"><span className="globe-icon" aria-hidden="true">◎</span><strong>Starting with Domain Connect</strong></div>
        <span><i className="dot dot-green" /> Standard request</span><span><i className="dot" /> Provider control</span><span><i className="dot dot-blue" /> Verified result</span>
      </div>

      <section className="section connection-section" id="how">
        <div className="section-heading split-heading">
          <div><p className="section-index">01 / How one connection works</p><h2>One connection.<br />Provider control.</h2></div>
          <p>A Service Provider connects through Seamless Connect to the customer’s provider. The shared layer coordinates the interaction while each provider retains control of its systems and policies.</p>
        </div>
        <div className="connection-summary">
          <article><span>Service Provider</span><h3>Use one open connection.</h3><p>Integrate once to initiate supported operations across participating providers.</p></article>
          <article><span>Seamless Connect</span><h3>Coordinate across boundaries.</h3><p>Connect services and providers through open standards and shared infrastructure.</p></article>
          <article><span>Provider</span><h3>Keep authority and control.</h3><p>Apply provider-specific capabilities, policies, authorization, and operational systems.</p></article>
        </div>
        <div className="provider-control-note"><strong>Coordination, not replacement.</strong><p>The exact workflow depends on the operation. Seamless Connect does not prescribe one universal execution sequence or replace provider APIs, policies, authorization models, or operational authority.</p></div>
      </section>

      <section className="section integration-section" id="integrate">
        <div className="section-heading split-heading">
          <div><p className="section-index">02 / Integrate by role</p><h2>A clear path for every participant.</h2></div>
          <p>Start with the current Domain Connect integration checklist for your role. Each guide maps the decisions, capabilities, security work, and validation needed to participate.</p>
        </div>
        <div className="integration-grid">
          {integrationPaths.map((path, index) => <a href={path.link} target="_blank" rel="noreferrer" key={path.role}><span>0{index + 1}</span><h3>{path.role}</h3><p>{path.copy}</p><strong>Open integration checklist <ExternalArrow /></strong></a>)}
        </div>
      </section>

      <section className="section problem-section" id="why">
        <div className="section-heading">
          <div><p className="section-index">03 / Why this matters</p><h2>The Internet is connected.<br />Its operations aren&apos;t.</h2></div>
          <div className="problem-content">
            <p className="large-copy">Services increasingly need to configure and verify resources across organizational boundaries. Today, each provider can require a different integration or a manual workflow.</p>
            <div className="contrast-grid">
              <article><span className="card-label card-label-muted">Today</span><h3>Every operation becomes a custom integration.</h3><ul><li>Manual configuration steps</li><li>Provider-specific APIs</li><li>Duplicated integration work</li><li>Support-heavy operations</li></ul></article>
              <article className="future-card"><span className="card-label">With Seamless Connect</span><h3>One neutral layer coordinates the ecosystem.</h3><ul><li>Portable operational workflows</li><li>Provider choice and autonomy</li><li>Durable, observable execution</li><li>Normalized completion status</li></ul></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section building-section" id="roadmap">
        <div className="section-heading split-heading">
          <div><p className="section-index">04 / Roadmap</p><h2>Useful now.<br />Designed to extend.</h2></div>
          <p>Seamless Connect begins with Domain Connect, expands to more domain operations, and only later applies its reusable architecture beyond that starting scope.</p>
        </div>
        <div className="roadmap">
          {roadmap.map((item) => <article className={item.active ? "roadmap-card active" : "roadmap-card"} key={item.phase}><div className="roadmap-topline"><span>{item.phase}</span>{item.active && <span className="now-pill"><i /> In progress</span>}</div><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.items.map((feature) => <li key={feature}>{feature}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="section governance-section" id="standards">
        <div className="section-heading split-heading">
          <div><p className="section-index">05 / Standards &amp; governance</p><h2>Open standards.<br />Neutral coordination.</h2></div>
          <p>Domain Connect is a deployed open protocol, and the IETF DCONN Working Group is advancing it on the standards track. Seamless Connect is building shared implementation around that open work.</p>
        </div>
        <div className="principles-grid">
          {principles.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <div className="governance-note"><strong>Governed through FAN.</strong><p>Seamless Connect is governed through the <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN) <ExternalArrow /></a>, a United States 501(c)(3) nonprofit committed to openness, neutrality, and public benefit. Sponsorship does not buy protocol influence, technical approval, or exclusive access.</p></div>
        <div className="standards-callout">
          <span className="callout-mark">D/C</span>
          <div><p className="section-index">Standards in motion</p><h3>A proven protocol and an open standards process.</h3><p>Follow the deployed Domain Connect ecosystem and the IETF working group developing the standard.</p></div>
          <div className="callout-links"><a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect <ExternalArrow /></a><a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF DCONN <ExternalArrow /></a></div>
        </div>
      </section>

      <section className="section team-section" id="community">
        <div className="section-heading split-heading">
          <div><p className="section-index">06 / Founding &amp; launch community</p><h2>Building the neutral layer together.</h2></div>
          <p>Seamless Connect is being formed in the open by contributors spanning project strategy, standards, architecture, product, partnerships, and provider operations.</p>
        </div>
        <div className="launch-sponsor">
          <div><span className="card-label">Founding sponsor</span><h3>Name.com</h3></div>
          <p>Name.com provides early financial support, industry experience, and community advocacy to help launch neutral infrastructure for automated domain operations.</p>
          <Link href="/sponsors/">See how to participate <ExternalArrow /></Link>
        </div>
        <div className="team-grid">
          {founders.map((founder, index) => <article key={founder.name}><span>0{index + 1}</span><h3><a href={founder.linkedin} target="_blank" rel="noreferrer">{founder.name} <ExternalArrow /></a></h3><strong>{founder.role}</strong><p>{founder.copy}</p></article>)}
        </div>
        <div className="team-note"><strong>Founders establish the project. The community shapes its technical direction.</strong><p>Technical authority is rooted in open contribution, transparent decision-making, and the applicable standards communities.</p></div>
      </section>

      <section className="community-section" id="support">
        <div><p className="eyebrow"><span /> Sponsor or build</p><h2>Help make cross-provider operations seamless.</h2><p>Support the buildout, follow the integration checklist for your role, or contribute to the open-source implementation and standards work.</p></div>
        <div className="community-actions"><Link className="button button-light" href="/sponsors/">Sponsor the project</Link><a className="button button-dark-outline" href={githubUrl} target="_blank" rel="noreferrer">Build on GitHub <ExternalArrow /></a></div>
      </section>

      <SiteFooter page="home" />
    </main>
  );
}
