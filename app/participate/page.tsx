import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import AudiencePaths from "./audience-paths";
import styles from "./participate.module.css";
export const metadata: Metadata = {
 title: "Build with Seamless Connect",
 description: "Help shape open infrastructure for registrars, DNS providers, service providers, developers and agent registries.",
 alternates: { canonical: "/participate/" },
 openGraph: { title: "Build with Seamless Connect", url: "https://seamlessconnect.org/participate/" }
};
export default function ParticipatePage(){return <main className={`preview-home ${styles.page}`}>
<SiteHeader page="sponsors" />
<section id="top" className={`preview-width ${styles.hero}`}><p className="section-index">Open standards · Shared infrastructure</p><h1>Domain operations,<br />working together.</h1><p className={styles.lede}>Register a domain. Connect a service. Bootstrap an agent. We’re building open-source tools to coordinate across domain providers and agent registries.</p><p className={styles.context}>With participation from the core Domain Connect standards maintainers.</p><p className={styles.status}>Early design · Free at the point of use · Community funded</p></section>
<AudiencePaths />
<section className={`preview-band ${styles.band}`} id="project-status"><div className={`preview-width ${styles.shared}`}><div><p className="section-index">Where things stand</p><h2>Help shape what gets built.</h2><p>We’re in early design of the shared infrastructure and developer services. Registration distribution, provider integrations, DNSSEC automation and agent registry integrations—DNS-based and non-DNS-based—are proposed work, not a claim of production availability.</p><p>Design partners bring real workflows, help define requirements and validate integrations as they become available.</p><Link className="home-text-link" href="/use-cases/">Explore use cases and protocols →</Link></div><div><p className="section-index">A public-good model</p><h2>Free use. Voluntary support.</h2><p>Inspired by Let’s Encrypt: nonprofit infrastructure sustained by organizations that benefit from it. Using the tools does not require payment or sponsorship.</p><p>FAN (agenticnet.org), a 501(c)(3) that also hosts the MIT-originated Project NANDA, currently hosts the project.</p><Link className="home-text-link" href="/sponsors/">Support the buildout →</Link></div></div></section>
<section className={`preview-width ${styles.support}`}><p className="section-index">Early support and participation</p><p className={styles.names}>Cloudflare <span>·</span> Name.com <span>·</span> DigiCert <span>·</span> Datum</p><p className={styles.updated}>Updated October 14, 2026 · <a href="https://github.com/seamless-connect/website/tree/main/app/participate">View page source</a></p></section>
<SiteFooter page="home" />
</main>;}
