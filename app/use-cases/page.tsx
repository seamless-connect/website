import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "../sponsors/sponsors.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/use-cases/" },
  title: "Use Cases | Seamless Connect",
  openGraph: { title: "Use Cases | Seamless Connect", description: "Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.", url: "/use-cases/" },
  twitter: { card: "summary", title: "Use Cases | Seamless Connect", description: "Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect." },
  description: "Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.",
};

export default function UseCasesPage() {
  return (
    <main>
      <SiteHeader page="sponsors" />
      <section className={styles.hero}>
        <p className="eyebrow"><span /> Use cases</p>
        <p>Neutral coordination across independently operated providers.</p>
      </section>
      <article className={styles.document}>
        <h1>Use Cases</h1>
        <p>Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.</p>
        <p>Early industry participation includes Name.com (Identity Digital), Cloudflare, DigiCert, Datum.net, and Cloud 66.</p>
        <p>These use cases describe the project&apos;s intended workflows. The initial focus is DNS configuration through Domain Connect; broader workflows are proposed or under development. Availability depends on the operation and participating provider integrations. Examples below illustrate protocols, proposals, and provider interfaces a workflow may employ; they do not imply implemented support. IETF drafts are works in progress, not finalized standards.</p>
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
          <p><strong>Initial focus:</strong> operationalizing Domain Connect through shared cross-provider coordination. Supported templates and operations depend on each provider integration.</p>
          <p><strong>Examples of applicable protocols and standards:</strong> <a href="https://github.com/Domain-Connect/spec" target="_blank" rel="noreferrer">Domain Connect</a>, <a href="https://www.rfc-editor.org/rfc/rfc2136.html" target="_blank" rel="noreferrer">DNS UPDATE (RFC 2136)</a>, <a href="https://www.rfc-editor.org/rfc/rfc6749.html" target="_blank" rel="noreferrer">OAuth 2.0 (RFC 6749)</a>.</p>
        </section>

        <section aria-labelledby="dnssec">
          <h2 id="dnssec">DNSSEC</h2>
          <p>Coordinate DNSSEC enablement between a registrar and an authoritative DNS provider, including publishing the delegation information needed to establish the chain of trust.</p>
          <p><strong>Discovery and pilot design:</strong> explore authorized coordination across independently operated providers using existing standards.</p>
          <p><strong>Examples of applicable protocols and standards:</strong> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033.html" target="_blank" rel="noreferrer">RFC 4033</a>, <a href="https://www.rfc-editor.org/rfc/rfc4034.html" target="_blank" rel="noreferrer">RFC 4034</a>, <a href="https://www.rfc-editor.org/rfc/rfc4035.html" target="_blank" rel="noreferrer">RFC 4035</a>), <a href="https://www.rfc-editor.org/rfc/rfc7344.html" target="_blank" rel="noreferrer">CDS/CDNSKEY (RFC 7344)</a>, <a href="https://www.rfc-editor.org/rfc/rfc8078.html" target="_blank" rel="noreferrer">RFC 8078</a>, <a href="https://www.rfc-editor.org/rfc/rfc9615.html" target="_blank" rel="noreferrer">RFC 9615</a>.</p>
        </section>

        <section aria-labelledby="primary-secondary-dns">
          <h2 id="primary-secondary-dns">Primary / Secondary DNS</h2>
          <p>Configure primary and secondary DNS zones across providers so multiple authoritative providers can serve the same zone, improving resilience and availability.</p>
          <p><strong>Proposed workflow:</strong> coordinate zone provisioning, full and incremental zone transfers (AXFR/IXFR), TSIG configuration for transfer authentication, and synchronization setup across participating DNS providers.</p>
          <p><strong>Examples of applicable protocols and standards:</strong> <a href="https://www.rfc-editor.org/rfc/rfc5936.html" target="_blank" rel="noreferrer">AXFR (RFC 5936)</a>, <a href="https://www.rfc-editor.org/rfc/rfc1995.html" target="_blank" rel="noreferrer">IXFR (RFC 1995)</a>, <a href="https://www.rfc-editor.org/rfc/rfc1996.html" target="_blank" rel="noreferrer">DNS NOTIFY (RFC 1996)</a>, <a href="https://www.rfc-editor.org/rfc/rfc8945.html" target="_blank" rel="noreferrer">TSIG (RFC 8945)</a>, <a href="https://www.rfc-editor.org/rfc/rfc9103.html" target="_blank" rel="noreferrer">XFR-over-TLS (RFC 9103)</a>.</p>
        </section>

        <section aria-labelledby="domain-registration">
          <h2 id="domain-registration">Domain Registration</h2>
          <p>Coordinate domain registration across participating providers while keeping the domain owner in control of authorization and provider selection.</p>
          <p><strong>Proposed workflow:</strong> coordinate registration requests through participating registrars, subject to their availability, policies, and supported operations.</p>
          <p><strong>Examples of applicable protocols and standards:</strong> EPP (<a href="https://www.rfc-editor.org/rfc/rfc5730.html" target="_blank" rel="noreferrer">RFC 5730</a> / <a href="https://www.rfc-editor.org/rfc/rfc5731.html" target="_blank" rel="noreferrer">RFC 5731</a>), RDAP (<a href="https://www.rfc-editor.org/rfc/rfc9082.html" target="_blank" rel="noreferrer">RFC 9082</a> / <a href="https://www.rfc-editor.org/rfc/rfc9083.html" target="_blank" rel="noreferrer">RFC 9083</a>) — read-only registration data, not registration transactions, <a href="https://docs.name.com/" target="_blank" rel="noreferrer">registrar APIs</a> (provider-specific).</p>
        </section>

        <section aria-labelledby="agent-bootstrapping">
          <h2 id="agent-bootstrapping">Agent Bootstrapping</h2>
          <p>Publish agent discovery information through participating providers. This proposed use case aligns with the <a href="https://www.agenticnet.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a> mission by supporting open, interoperable discovery publication without favoring particular protocols or providers.</p>
          <h3>DNS-based</h3>
          <p>Publish agent discovery records through participating DNS providers, using the record formats required by the selected discovery protocol.</p>
          <p><strong>Examples of applicable protocols and standards:</strong> <a href="https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/" target="_blank" rel="noreferrer">DNS-AID</a> (IETF draft), <a href="https://datatracker.ietf.org/doc/draft-nemethi-dawn-aid/" target="_blank" rel="noreferrer">Agent Identity and Discovery (AID)</a> (IETF draft), <a href="https://datatracker.ietf.org/doc/draft-narajala-courtney-ansv2/" target="_blank" rel="noreferrer">Agent Name Service (ANS)</a> (evolving DNS/PKI proposal with a <a href="https://github.com/agentnameservice/ans-registry" target="_blank" rel="noreferrer">GoDaddy implementation</a>), DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033.html" target="_blank" rel="noreferrer">RFC 4033</a>).</p>
          <h3>Non-DNS</h3>
          <p>Publish agent information through participating agent registries and other discovery systems, using their supported publication interfaces.</p>
          <p><strong>Examples of applicable protocols and standards:</strong> <a href="https://a2a-protocol.org/latest/specification/#8-agent-discovery-the-agent-card" target="_blank" rel="noreferrer">A2A Agent Cards</a>, <a href="https://projectnanda.org/#/./home/13.NANDAIndex" target="_blank" rel="noreferrer">NANDA Index</a> (agent discovery infrastructure) and <a href="https://github.com/projnanda/agentfacts-format" target="_blank" rel="noreferrer">AgentFacts</a> (agent metadata), and other <a href="https://a2a-protocol.org/latest/specification/#82-discovery-mechanisms" target="_blank" rel="noreferrer">agent registries</a>. Publication interfaces vary; these examples do not imply implemented Seamless Connect support.</p>
          <p>Adjacent discovery system: the <a href="https://github.com/modelcontextprotocol/registry/blob/main/docs/README.md" target="_blank" rel="noreferrer">MCP Registry</a> catalogs MCP servers; it is not an equivalent agent registry.</p>
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
