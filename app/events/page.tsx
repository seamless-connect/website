import type { Metadata } from "next";
import { ExternalArrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "./events.module.css";

const calendarUrl =
  "https://github.com/seamless-connect/docs/blob/main/community/events.md";

export const metadata: Metadata = {
  alternates: { canonical: "/events/" },
  title: "Industry Events | Seamless Connect",
  description:
    "A curated calendar of domain, DNS, Internet standards, agentic web, cloud, and network-infrastructure events relevant to Seamless Connect.",
};

type Event = {
  date: string;
  name: string;
  location: string;
  note: string;
  url: string;
  status?: string;
};

const events2026: Event[] = [
  { date: "22–23 Sep", name: "TLDCON 2026", location: "Tashkent + online", note: "ccTLD registries and registrars across Eastern Europe and Central Asia.", url: "https://tldcon.ru/en/" },
  { date: "29 Sep", name: "ROW15", location: "Online", note: "Technical registration operations, including EPP, RDAP, registry lock, and RPKI.", url: "https://regiops.net/" },
  { date: "17–22 Oct", name: "ICANN87", location: "Bali + online", note: "Registries, registrars, DNS operators, technical coordination, and names policy.", url: "https://meetings.icann.org/en/calendar" },
  { date: "19–21 Oct", name: "NANOG 98", location: "Miami", note: "North American network operators and Internet-infrastructure implementers.", url: "https://nanog.org/events/nanog-98/" },
  { date: "26–30 Oct", name: "RIPE 93", location: "Sofia", note: "European Internet operations across routing, DNS, measurement, and security.", url: "https://www.ripe.net/meetings/calendar/ripe-93/" },
  { date: "26–30 Oct", name: "Internet2 TechEX26", location: "Minneapolis", note: "Research-and-education networking, cloud, identity, and shared infrastructure.", url: "https://events.internet2.edu/website/93141/home/" },
  { date: "8–12 Nov", name: "DNS-OARC 47", location: "Vancouver", note: "DNS operations and research; the core workshop is 9–10 November.", url: "https://indico.dns-oarc.net/event/58/" },
  { date: "11–12 Nov", name: "NamesCon Global + CloudFest Americas", location: "Miami", note: "Domains, registries, registrars, hosting, cloud, DNS, and infrastructure vendors.", url: "https://namescon.com/" },
  { date: "14–20 Nov", name: "IETF 127", location: "San Francisco", note: "Standards work across Domain Connect/dconn, DNS, discovery, and authorization.", url: "https://www.ietf.org/meeting/upcoming/" },
  { date: "20 Nov", name: "NDDCamp Rennes", location: "Rennes", note: "Focused French meeting for domain registrars and adjacent technical and legal communities.", url: "https://www.nddcamp.eu/index.html" },
  { date: "6–7 Dec", name: "Domain Summit Asia", location: "Bangkok", note: "Business-focused registry, registrar, hosting, security, legal, and domains gathering.", url: "https://www.domainsummit.com/" },
];

const events2027: Event[] = [
  { date: "18–19 Jan", name: "Domain Summit Africa", location: "Diani Beach", note: "Planned regional registry, registrar, hosting, security, legal, and domains meeting.", url: "https://www.domainsummit.com/", status: "Tentative" },
  { date: "25–27 Jan", name: "ICA Annual Member Meeting", location: "Las Vegas", note: "Domain commerce community spanning investors, brokers, registrars, registries, and service providers.", url: "https://ica.vegas/" },
  { date: "February", name: "APTLD91", location: "Brisbane", note: "Asia-Pacific ccTLD operations, policy, security, resilience, and coordination.", url: "https://aptld.org/about/newsroom/20394/", status: "Dates TBA" },
  { date: "22–24 Feb", name: "NANOG 99", location: "Boston", note: "North American network operators and infrastructure implementers.", url: "https://nanog.org/events/future/" },
  { date: "24 Feb–4 Mar", name: "APRICOT 2027", location: "Hong Kong", note: "Asia-Pacific Internet operations, peering, routing, training, and APNIC 63.", url: "https://2027.apricot.net/" },
  { date: "6–12 Mar", name: "IETF 128", location: "Kuala Lumpur", note: "Standards development and implementation feedback for DNS and Internet operations.", url: "https://www.ietf.org/meeting/upcoming/" },
  { date: "13–18 Mar", name: "ICANN88", location: "Lisbon", note: "Broad ICANN community work across registries, registrars, DNS, and policy.", url: "https://meetings.icann.org/en/calendar" },
  { date: "15–18 Mar", name: "CloudFest Global", location: "Rust, Germany", note: "Cloud, hosting, web platforms, domains, and Internet infrastructure.", url: "https://www.cloudfest.com/event" },
  { date: "19 Mar", name: "NDDCamp Strasbourg", location: "Strasbourg", note: "Focused domain-name meeting for registrars and technical, legal, and commercial participants.", url: "https://www.nddcamp.eu/index.html" },
  { date: "24–28 May", name: "RIPE 94", location: "Vilnius", note: "European operators working across routing, DNS, measurements, and security.", url: "https://www.ripe.net/meetings/ripe-meetings/upcoming-ripe-meetings/" },
  { date: "6–8 Jun", name: "Nordic Domain Days", location: "Stockholm", note: "International registries, registrars, resellers, hosting providers, and service providers.", url: "https://nordicdomaindays.com/news/thank-you-for-an-incredible-nordic-domain-days-2026" },
  { date: "14–17 Jun", name: "ICANN89", location: "Vancouver", note: "Focused names-policy work and registry/registrar coordination.", url: "https://www.icann.org/en/engagement-calendar/details/icann89-vancouver-policy-forum-2027-06-14" },
  { date: "28–30 Jun", name: "NANOG 100", location: "San Francisco", note: "Milestone North American operator and infrastructure meeting.", url: "https://nanog.org/events/future/" },
  { date: "17–23 Jul", name: "IETF 129", location: "Berlin", note: "Standards progression, interoperability, and implementation coordination.", url: "https://www.ietf.org/meeting/upcoming/" },
  { date: "16–17 Aug", name: "Domain Summit Europe", location: "Belgrade", note: "Proposed European registry, registrar, hosting, and domains gathering.", url: "https://www.domainsummit.com/", status: "Planned" },
  { date: "September", name: "APTLD92", location: "Vietnam", note: "Planned Asia-Pacific ccTLD member meeting hosted by VNNIC.", url: "https://aptld.org/documents/board/20880/", status: "Dates TBA" },
  { date: "October", name: "NANOG 101", location: "New Orleans", note: "North American network-operator and Internet-infrastructure community.", url: "https://nanog.org/events/future/", status: "Dates TBA" },
  { date: "30 Oct–4 Nov", name: "ICANN90", location: "To be announced", note: "Global names policy, identifier systems, and registry/registrar coordination.", url: "https://meetings.icann.org/en/calendar" },
  { date: "6–12 Nov", name: "IETF 130", location: "Vancouver", note: "Standards and implementation work across DNS and adjacent Internet protocols.", url: "https://www.ietf.org/meeting/upcoming/" },
  { date: "15–19 Nov", name: "RIPE 95", location: "Madrid", note: "European Internet operations spanning DNS, routing, security, and measurement.", url: "https://www.ripe.net/meetings/ripe-meetings/upcoming-ripe-meetings/" },
];

const agenticWebEvents: Event[] = [
  { date: "5–6 Oct 2026", name: "MCP Dev Summit Toronto", location: "Toronto", note: "MCP infrastructure, orchestration, identity, authorization, registries, security, and production operations.", url: "https://events.linuxfoundation.org/mcp-dev-summit-toronto/" },
  { date: "22–23 Oct 2026", name: "AGNTCon + MCPCon North America", location: "San Jose", note: "Agentic engineering, MCP, interoperability, multi-agent systems, security, governance, and production infrastructure.", url: "https://events.linuxfoundation.org/agntcon-mcpcon-north-america/" },
  { date: "19–20 Nov 2026", name: "MCP Dev Summit Nairobi", location: "Nairobi", note: "Real-world agentic systems, MCP development, multi-agent coordination, enterprise integration, and secure infrastructure.", url: "https://events.linuxfoundation.org/mcp-dev-summit-nairobi/" },
  { date: "15 Mar 2027", name: "Agentics Day: MCP + Agents Europe", location: "Barcelona", note: "MCP architecture, security, trust, production use, enterprise integration, and connections to tools and data.", url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/co-located-events/agentics-day-mcp-agents/" },
  { date: "28–29 Apr 2027", name: "AGNTCon + MCPCon North America 2027", location: "San Francisco", note: "Open agentic AI protocols, interoperability, and infrastructure behind agent systems.", url: "https://events.linuxfoundation.org/agntcon-mcpcon-north-america-2027/" },
  { date: "7–8 Jun 2027", name: "USENIX Conference on Secure Agentic-AI Systems (SAIS '27)", location: "Santa Clara", note: "Secure and privacy-preserving design, verification, and deployment of autonomous AI agents.", url: "https://www.usenix.org/conference/sais27" },
  { date: "15–16 Sep 2027", name: "AGNTCon + MCPCon Europe 2027", location: "London", note: "Open agentic AI, MCP, interoperability, and production agent infrastructure.", url: "https://events.linuxfoundation.org/agntcon-mcpcon-europe-2027/" },
];

const watchlist = [
  ["ICANN Contracted Parties Summit", "https://www.icann.org/en/contracted-parties/summit"],
  ["Registration Operations Workshop (ROW)", "https://regiops.net/"],
  ["CENTR meetings and Jamboree", "https://www.centr.org/events.html"],
  ["DNS-OARC workshops", "https://indico.dns-oarc.net/"],
  ["Verisign Registrar Days", "https://www.verisign.com/en_US/channel-resources/domain-registry-products/registrar-resources/index.xhtml"],
  ["Domain Days Dubai", "https://www.domaindays.com/"],
  ["TLDCON", "https://tldcon.ru/en/"],
  ["NamesCon Global", "https://namescon.com/"],
] as const;

function EventList({ events }: { events: Event[] }) {
  return (
    <div className={styles.eventList}>
      {events.map((event) => (
        <article className={styles.event} key={`${event.name}-${event.date}`}>
          <div className={styles.when}>
            <span>{event.date}</span>
            <small>{event.location}</small>
          </div>
          <div className={styles.what}>
            <a href={event.url} target="_blank" rel="noreferrer">
              {event.name} <ExternalArrow />
            </a>
            <p>{event.note}</p>
          </div>
          {event.status && <span className={styles.status}>{event.status}</span>}
        </article>
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <main>
      <SiteHeader page="sponsors" />
      <section className={styles.hero}>
        <p className="eyebrow"><span /> Industry calendar</p>
        <h1>Events across the domain and Internet infrastructure ecosystem.</h1>
        <p>
          A curated reference for the registry, registrar, DNS, standards,
          agentic web, cloud, hosting, and network-operator communities connected to
          Seamless Connect&apos;s work.
        </p>
        <a className="button button-outline" href={calendarUrl} target="_blank" rel="noreferrer">
          View the canonical calendar on GitHub <ExternalArrow />
        </a>
      </section>

      <section className={styles.calendar} aria-labelledby="calendar-title">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow"><span /> Updated 22 September 2026</p>
            <h2 id="calendar-title">A neutral industry reference.</h2>
          </div>
          <p>
            Inclusion is informational. It does not mean Seamless Connect, its
            contributors, or its sponsors plan to attend, speak, sponsor, or
            exhibit. Confirm logistics with each organizer before making plans.
          </p>
        </div>

        <div className={styles.yearBlock}>
          <h2>Remaining 2026</h2>
          <EventList events={events2026} />
        </div>
        <div className={styles.yearBlock}>
          <h2>2027</h2>
          <EventList events={events2027} />
        </div>

        <section className={styles.categoryBlock} aria-labelledby="agentic-web-title">
          <div className={styles.categoryIntro}>
            <p className="eyebrow"><span /> Interoperable agent infrastructure</p>
            <h2 id="agentic-web-title">Agentic Web</h2>
            <p>
              Events covering agent interoperability, discovery, identity,
              authorization, trust, secure operations, and open infrastructure.
            </p>
          </div>
          <EventList events={agenticWebEvents} />
          <p className={styles.categoryNote}>
            <a href="https://www.agenticnet.org/events" target="_blank" rel="noreferrer">
              Foundation for Agentic Networks and Project NANDA events <ExternalArrow />
            </a>{" "}
            are also relevant. Their public calendar does not currently list
            specific upcoming dates; dated entries can be added as announced.
          </p>
        </section>

        <section className={styles.watch} aria-labelledby="watch-title">
          <div>
            <p className="eyebrow"><span /> Dates not yet published</p>
            <h2 id="watch-title">Announcements to watch</h2>
          </div>
          <p>
            These recurring or expected events are relevant, but their next
            dates or complete logistics were not available when this page was checked.
          </p>
          <ul>
            {watchlist.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer">{name} <ExternalArrow /></a>
              </li>
            ))}
          </ul>
        </section>

        <aside className={styles.canonical}>
          <div>
            <span>Canonical source</span>
            <h2>Full descriptions and maintenance notes live in the docs repository.</h2>
          </div>
          <a className="button button-light" href={calendarUrl} target="_blank" rel="noreferrer">
            Open the full calendar <ExternalArrow />
          </a>
        </aside>
      </section>
      <SiteFooter page="sponsors" />
    </main>
  );
}
