import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "../sponsors/sponsors.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/use-cases/" },
  title: "Use Cases | Seamless Connect",
  description: "Seamless Connect is an open-source, cross-provider developer CLI for discrete, authorized domain operations and agent bootstrapping.",
};

export default function UseCasesPage() {
  return (
    <main>
      <SiteHeader page="sponsors" />
      <section className={styles.hero}>
        <p className="eyebrow"><span /> Use cases</p>
        <p>One interface. Discrete, authorized operations.</p>
      </section>
      <article className={styles.document}>
        <h1>Use Cases</h1>
        <p>Seamless Connect is an open-source, cross-provider developer CLI for discrete, authorized domain operations and agent bootstrapping.</p>
        <p>These use cases describe the project&apos;s intended workflows. The initial focus is DNS configuration through Domain Connect; broader workflows are proposed or under development. Availability depends on the operation and participating provider integrations. This page is not a claim that every workflow is implemented.</p>
        <ul aria-label="Use case sections">
          <li><a href="#dns-configuration">DNS Configuration (Domain Connect)</a></li>
          <li><a href="#dnssec">DNSSEC</a></li>
          <li><a href="#primary-secondary-dns">Primary / Secondary DNS</a></li>
          <li><a href="#domain-registration">Domain Registration</a></li>
          <li><a href="#agent-bootstrapping">Agent Bootstrapping</a></li>
        </ul>

        <section aria-labelledby="dns-configuration">
          <h2 id="dns-configuration">DNS Configuration (Domain Connect)</h2>
          <p>Configure DNS records across participating providers using Domain Connect templates and domain-owner authorization. For example, connect a domain to a hosting or email service without manually entering each record.</p>
          <p><strong>Initial focus:</strong> operationalizing Domain Connect through a common developer interface. Supported templates and operations depend on each provider integration.</p>
        </section>

        <section aria-labelledby="dnssec">
          <h2 id="dnssec">DNSSEC</h2>
          <p>Coordinate DNSSEC enablement between a registrar and an authoritative DNS provider, including publishing the delegation information needed to establish the chain of trust.</p>
          <p><strong>Discovery and pilot design:</strong> explore authorized coordination across independently operated providers using existing standards.</p>
        </section>

        <section aria-labelledby="primary-secondary-dns">
          <h2 id="primary-secondary-dns">Primary / Secondary DNS</h2>
          <p>Configure primary and secondary DNS zones across providers so multiple authoritative providers can serve the same zone, improving resilience and availability.</p>
          <p><strong>Proposed workflow:</strong> coordinate zone provisioning, full and incremental zone transfers (AXFR/IXFR), TSIG configuration for transfer authentication, and synchronization setup across participating DNS providers.</p>
        </section>

        <section aria-labelledby="domain-registration">
          <h2 id="domain-registration">Domain Registration</h2>
          <p>Register domains through a common developer interface while keeping the domain owner in control of authorization and provider selection.</p>
          <p><strong>Proposed workflow:</strong> coordinate registration requests through participating registrars, subject to their availability, policies, and supported operations.</p>
        </section>

        <section aria-labelledby="agent-bootstrapping">
          <h2 id="agent-bootstrapping">Agent Bootstrapping</h2>
          <p>Publish agent discovery information through participating providers. This proposed use case aligns with the <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a> mission by supporting open, interoperable discovery publication without favoring particular protocols or providers.</p>
          <h3>DNS-based</h3>
          <p>Publish agent discovery records through participating DNS providers, using the record formats required by the selected discovery protocol.</p>
          <h3>Non-DNS</h3>
          <p>Publish agent information through participating agent registries and other discovery systems, using their supported publication interfaces.</p>
          <p><strong>Proposed scope:</strong> authorized publication of discovery information. General agent communication, identity, and orchestration are outside this use case.</p>
        </section>
        <p className={styles.sourceNote}>
          <span>Build with the project</span>
          <a href="https://github.com/seamless-connect/docs" target="_blank" rel="noreferrer">Explore documentation and integration guides ↗︎</a>
        </p>
      </article>
      <SiteFooter page="sponsors" />
    </main>
  );
}
