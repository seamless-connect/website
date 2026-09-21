import type { Metadata } from "next";
import { ExternalArrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "../sponsors/sponsors.module.css";

const charterUrl =
  "https://github.com/seamless-connect/spec/blob/main/governance/CHARTER.md";

export const metadata: Metadata = {
  alternates: {
    canonical: "/charter/",
  },
  title: "Project Charter | Seamless Connect",
  description:
    "The mission, scope, operating principles, and administrative home of Seamless Connect.",
};

const charterPrinciples = [
  "Focuses initially on domains, DNS, DNSSEC, service onboarding, delegation, discovery, and related coordination.",
  "Supports both human-initiated and machine-initiated workflows.",
  "Favors open standards, interoperable implementations, and portable integration patterns.",
  "Remains neutral among competing providers and platforms.",
  "Keeps technical participation open regardless of financial sponsorship.",
  "Separates technical decision-making from funding influence.",
  "Supports shared infrastructure where it can reduce duplicated integrations and ecosystem friction.",
  "May expand into adjacent Internet coordination problems when there is a clear interoperability need.",
];

export default function CharterPage() {
  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Project charter</p>
        <p>Open infrastructure for cross-provider Internet coordination.</p>
      </section>

      <article className={styles.document}>
        <h1>Project Charter</h1>
        <p>
          Seamless Connect is an open infrastructure project for coordinating
          operations between independently operated Internet services.
        </p>
        <p>
          Its initial focus is domain and DNS-related operations: helping service
          providers, DNS providers, registrars, registries, and other infrastructure
          operators securely coordinate changes without requiring bespoke
          integrations between every participant.
        </p>
        <p>
          The project is designed as shared Internet infrastructure for both
          conventional cloud services and emerging agentic services.
        </p>

        <h2>What the charter establishes</h2>
        <p>
          The Seamless Connect charter defines the project&apos;s mission, scope, and
          operating principles.
        </p>
        <p>In particular, it establishes that Seamless Connect:</p>
        <ul>
          {charterPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>

        <h2>Governance and administrative home</h2>
        <p>
          Seamless Connect is currently hosted and governed administratively by the
          Foundation for Agentic Networks (FAN), a 501(c)(3) nonprofit.
        </p>
        <p>
          Its long-term administrative home is intentionally not fixed. As the
          community grows, members may choose to remain within FAN, move to the Linux
          Foundation, or adopt another neutral structure based on the needs and
          preferences of the project community.
        </p>

        <aside className={styles.callout}>
          <span>Canonical source</span>
          <h2>Read the full charter</h2>
          <p>
            The complete charter, including technical governance, funding principles,
            standards participation, project assets, and amendment procedures, is
            maintained publicly in the Seamless Connect GitHub repository.
          </p>
          <div className={styles.inlineActions}>
            <a
              className="button button-light"
              href={charterUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read the full charter on GitHub <ExternalArrow />
            </a>
          </div>
        </aside>

        <p className={styles.sourceNote}>
          <span>Community governance</span>
          <a href={charterUrl} target="_blank" rel="noreferrer">
            Propose and review changes in the public repository <ExternalArrow />
          </a>
        </p>
      </article>

      <SiteFooter page="sponsors" />
    </main>
  );
}
