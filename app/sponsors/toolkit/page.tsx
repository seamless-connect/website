import type { Metadata } from "next";
import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "../../components/site-chrome";
import styles from "../sponsors.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sponsors/toolkit/",
  },
  title: "Champion Toolkit | Seamless Connect",
  description:
    "Public talking points and outreach material for people helping build support for Seamless Connect.",
};

const talkingPoints = [
  ["The problem", "Domain operations increasingly cross provider and organizational boundaries. Without neutral implementation, each workflow can require manual setup, a custom integration, or a proprietary coordination path."],
  ["The scope", "Seamless Connect supports automated domain operations: configuration, discovery, authorization, verification, lifecycle management, and coordination."],
  ["The starting point", "Domain Connect is first because it is deployed, useful, and ready for standards-track adoption. It demonstrates the model without defining the project’s limit."],
  ["Protocol choice", "Seamless Connect is protocol agnostic. Each operation category should use the suitable open protocol, interface, or coordination pattern."],
  ["The funding model", "Sponsors capitalize a focused two-year buildout. At scale, transparent usage fees are intended to recover the cost of operating the shared service."],
  ["The market outcome", "Organizations may use Seamless Connect directly or build commercial services on top. The neutral layer enables competition in experience, support, security, analytics, and orchestration."],
  ["Governance", "Seamless Connect is governed through the Foundation for Agentic Networks (FAN), a United States 501(c)(3) nonprofit. Funding does not buy protocol influence, technical approval, preferential interoperability, listing, or exclusive access."],
];

const questions = [
  ["Is Seamless Connect a DNS or domain project?", "Domain Connect and related domain operations are the concrete first workstreams. The coordination architecture may later extend to other Internet operations where it fits."],
  ["Why start with Domain Connect?", "It has proven utility, an existing implementation ecosystem, and standards-track readiness through the IETF DCONN Working Group. It lets Seamless Connect deliver value now while building reusable infrastructure for what comes next."],
  ["Will every Seamless Connect operation use Domain Connect?", "No. Domain Connect is the first protocol. The technical community should select the most suitable open mechanism for each later operation category."],
  ["Is Seamless Connect competing with commercial integration products?", "No. Seamless Connect establishes neutral infrastructure that commercial products can use and extend. It should make entry and differentiation easier, not prohibit commercial services."],
  ["Who governs Seamless Connect?", "The project is governed through the Foundation for Agentic Networks (FAN), a United States 501(c)(3) nonprofit committed to openness, neutrality, and public benefit."],
  ["Why not let every company build its own integrations?", "They can, but the ecosystem repeatedly pays for the same foundational work. Shared implementation, registries, and conformance tooling reduce duplicated engineering and make interoperability more dependable."],
  ["Why sponsor something that will later charge for usage?", "Sponsorship supplies the concentrated capital needed to create the service and reach useful coverage. Later operating fees are intended to sustain the service transparently rather than create lock-in."],
  ["Does a larger sponsor control the technical roadmap?", "No. Sponsorship supports funding governance and strategic planning, but protocols and technical decisions remain part of the open technical community and applicable standards processes."],
];

export default function ToolkitPage() {
  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Champion toolkit</p>
        <p>Help another organization understand why neutral coordination matters.</p>
      </section>

      <article className={styles.document}>
        <h1>A shared message for a shared project.</h1>
        <p>
          Seamless Connect is a community project for public benefit. This toolkit gives project champions a consistent way to explain its full scope, identify the right internal audience, and move a conversation toward funding or technical participation.
        </p>

        <h2>The 60-second explanation</h2>
        <div className={styles.templateBlock}>
          <p>
            Services increasingly need to configure, authorize, verify, and coordinate domain operations across providers. Today, each operation can require a custom integration, a manual workflow, or dependency on a proprietary intermediary. Open standards help, but the ecosystem still needs neutral infrastructure that makes them usable in practice.
          </p>
          <p>
            Seamless Connect starts with Domain Connect because it is proven and ready for standards-track adoption, then expands to related domain operations. Its reusable architecture may support additional Internet operations later.
          </p>
          <p>
            Sponsors are capitalizing a two-year buildout of production infrastructure, provider-supported integrations, open developer tools, and shared conformance. Organizations can use the resulting layer directly or build commercial products on top. Funding does not buy protocol influence or exclusive access.
          </p>
        </div>

        <h2>Core talking points</h2>
        <div className={styles.talkingPointList}>
          {talkingPoints.map(([title, copy], index) => (
            <div key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{title}</strong><p>{copy}</p></div>
            </div>
          ))}
        </div>

        <h2>Introduction message</h2>
        <div className={styles.templateBlock}>
          <p><strong>Subject: A neutral foundation for automated Internet operations</strong></p>
          <p>
            I’m helping the Seamless Connect community bring together organizations that benefit from reliable automation across providers and networks.
          </p>
          <p>
            Seamless Connect is building a neutral operational layer for domain operations—including configuration, discovery, authorization, policy evaluation, durable execution, and verification. The project starts by operationalizing Domain Connect because it is proven and standards-ready.
          </p>
          <p>
            The two-year buildout will fund production infrastructure, provider-supported integrations, open developer tools, and shared conformance. The goal is a common foundation that organizations can use directly or build differentiated services on top of—without making the ecosystem dependent on a single proprietary path.
          </p>
          <p>
            I think this intersects with your work on [activation, domains, infrastructure, identity, trust, or ecosystem partnerships]. Would you be open to a short conversation with the project team about the roadmap and ways to participate?
          </p>
        </div>

        <h2>Conversation flow</h2>
        <ol className={styles.playbook}>
          <li><strong>Start with their value.</strong><span>Connect Seamless Connect to activation, distribution, migration, support cost, security, trust, or platform opportunity.</span></li>
          <li><strong>Explain the structural problem.</strong><span>Open protocols need neutral implementation and dependable cross-provider coordination to deliver their full value.</span></li>
          <li><strong>Clarify the scope.</strong><span>Domain Connect is the first implementation, followed by related domain operations; broader architectural extensions come later.</span></li>
          <li><strong>Describe the two-year outcome.</strong><span>Production services, provider-supported integrations, reusable capabilities, open tools, conformance, and a sustainable operating model.</span></li>
          <li><strong>Offer the right path.</strong><span>Paid membership, engineering, protocol work, integration, testing, research, adoption, or advocacy.</span></li>
          <li><strong>Agree on one next step.</strong><span>Identify the internal owner, schedule a technical or sponsorship discussion, or request an introduction.</span></li>
        </ol>

        <h2>Frequently asked questions</h2>
        <div className={styles.faqList}>
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <aside className={styles.callout}>
          <span>Keep the distinction clear</span>
          <h2>Technical participation is not a membership benefit.</h2>
          <p>
            Nobody is buying protocol influence. Sponsorship capitalizes shared implementation, research, and adoption. Technical authority comes from open contribution, evidence, interoperability, and the project’s technical governance.
          </p>
        </aside>

        <h2>After the first conversation</h2>
        <p>
          Record the organization’s likely value, internal owner, relevant workstream, participation path, and next action in the private outreach tracker. Do not publish prospect status, recommended asks, relationship notes, or internal volume estimates.
        </p>

        <div className={styles.inlineActions}>
          <Link className="button button-primary" href="/sponsors/">View membership</Link>
          <Link className="button button-outline" href="/sponsors/why-participate/">Review stakeholder value</Link>
        </div>
      </article>

      <section className="community-section">
        <div>
          <p className="eyebrow"><span /> Build the common layer</p>
          <h2>Bring the domain ecosystem into the conversation.</h2>
          <p>Use these materials, make a warm introduction, or participate directly in the open project.</p>
        </div>
        <div className="community-actions">
          <a className="button button-light" href="https://github.com/seamless-connect" target="_blank" rel="noreferrer">
            Join on GitHub <ExternalArrow />
          </a>
        </div>
      </section>

      <SiteFooter page="sponsors" />
    </main>
  );
}
