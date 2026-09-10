import type { Metadata } from "next";
import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "../../components/site-chrome";
import styles from "../sponsors.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sponsors/why-participate/",
  },
  title: "Why Participate | Seamless Connect",
  description:
    "How neutral infrastructure for domain operations creates value across the Internet ecosystem.",
};

const stakeholders = [
  {
    title: "Service Providers",
    value: "Acquire, activate, and serve customers",
    copy: "Cross-provider operations often happen while a customer is adopting or using a paid product. Reliable automation can improve activation, shorten time to value, reduce abandonment, and remove a major source of support work.",
    buyer: "Product, engineering, growth, platform, or ecosystem leadership",
    work: "Domain configuration, verification, provider discovery, authorization, and embedded activation",
  },
  {
    title: "Registrars",
    value: "Expand distribution and retain customer relationships",
    copy: "Registration, transfer, nameserver, and DNSSEC workflows connect registrars to new demand. A shared layer can make registrar capabilities easier for services to adopt without a separate integration for every partner.",
    buyer: "Product, domains, partnerships, platform, or engineering leadership",
    work: "Registration, registrar transfer, nameserver changes, DNSSEC, and registrar coordination",
  },
  {
    title: "DNS Providers",
    value: "Reduce integration cost and improve migration",
    copy: "Consistent implementations and objective conformance tooling can reduce bespoke support, make capabilities discoverable, and create dependable paths for customers and automated systems using the provider.",
    buyer: "DNS product, engineering, ecosystem, or strategic partnerships leadership",
    work: "DNS updates, zone transfer, DNSSEC, conformance, discovery, and authorization",
  },
  {
    title: "Commercial Integration Platforms",
    value: "Build differentiated products on a dependable base",
    copy: "A neutral foundation lets commercial providers focus on experience, orchestration, analytics, security, support, and service levels instead of recreating the underlying integration and coordination layer.",
    buyer: "Platform, product, developer experience, partnerships, or corporate development leadership",
    work: "Embedded experiences, enterprise operations, monitoring, orchestration, and services above the shared layer",
  },
];

const operationCategories = [
  ["DNS configuration", "The proven first use case: automate domain connection and verification through Domain Connect and provider-supported integrations."],
  ["Domain lifecycle", "Extend automation to DNSSEC, nameserver changes, registration, registrar transfer, and zone transfer."],
  ["Discovery", "Let services find providers, capabilities, endpoints, and applicable policies through suitable open mechanisms."],
  ["Authorization", "Support delegated, policy-controlled action across organizational and provider boundaries."],
  ["Verification", "Make identities, capabilities, requests, and results independently verifiable where the operation requires it."],
  ["Coordination", "Enable auditable workflows among services, DNS providers, and registrars without forcing them into a single provider-specific path."],
];

export default function WhyParticipatePage() {
  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Why participate</p>
        <p>Shared infrastructure creates value across the domain ecosystem.</p>
      </section>

      <article className={styles.document}>
        <h1>Invest where interoperability becomes economic value.</h1>
        <p>
          The organization implementing an operation and the organization capturing its value are not always the same. Seamless Connect gives participants a way to share implementation costs while each benefits through activation, distribution, retention, operational efficiency, trust, or new commercial opportunity.
        </p>

        <div className={styles.stakeholderGrid}>
          {stakeholders.map((stakeholder, index) => (
            <section className={styles.stakeholderCard} key={stakeholder.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{stakeholder.title}</h2>
              <strong>{stakeholder.value}</strong>
              <p>{stakeholder.copy}</p>
              <dl>
                <div><dt>Likely internal champion</dt><dd>{stakeholder.buyer}</dd></div>
                <div><dt>Relevant work</dt><dd>{stakeholder.work}</dd></div>
              </dl>
            </section>
          ))}
        </div>

        <h2>Value by operation category</h2>
        <p>
          Seamless Connect begins with Domain Connect because it is proven and ready for standards-track adoption. The project is protocol agnostic and will use the open mechanism best suited to each additional operation category.
        </p>
        <div className={styles.transactionList}>
          {operationCategories.map(([name, value]) => (
            <div key={name}>
              <strong>{name}</strong>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <aside className={styles.callout}>
          <span>Why fund instead of wait?</span>
          <h2>The buildout determines whether the neutral layer exists.</h2>
          <p>
            Sponsors provide the concentrated capital needed to establish production infrastructure, provider-supported integrations, reusable coordination capabilities, and ecosystem adoption. Once the service reaches scale, transparent operating fees can sustain it at a lower marginal cost than repeatedly rebuilding or licensing the same foundations.
          </p>
        </aside>

        <h2>Protocol choice and commercial opportunity remain open</h2>
        <p>
          Seamless Connect is infrastructure, not a mandated protocol or end-user product. Operation categories may use Domain Connect, other standards, or new open interfaces where needed. Organizations may use the shared layer directly or build commercial services on top of it.
        </p>
        <p>
          Embedded experiences, enterprise support, monitoring, analytics, security, orchestration, and service-level commitments remain areas for vigorous competition. <strong>The common coordination layer should be neutral; differentiation should happen above it.</strong>
        </p>

        <div className={styles.inlineActions}>
          <Link className="button button-primary" href="/sponsors/">View membership</Link>
          <Link className="button button-outline" href="/sponsors/toolkit/">Open the champion toolkit</Link>
        </div>
      </article>

      <section className="community-section">
        <div>
          <p className="eyebrow"><span /> Participate your way</p>
          <h2>Funding, engineering, research, adoption, and advocacy all matter.</h2>
          <p>Paid membership supports capitalization. Technical participation and protocol work remain open and independent.</p>
        </div>
        <div className="community-actions">
          <a className="button button-light" href="https://github.com/seamlessdns" target="_blank" rel="noreferrer">
            Join on GitHub <ExternalArrow />
          </a>
        </div>
      </section>

      <SiteFooter page="sponsors" />
    </main>
  );
}
