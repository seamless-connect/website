import type { Metadata } from "next";
import { ExternalArrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "./events.module.css";

const calendarUrl =
  "https://github.com/seamless-connect/docs/blob/main/community/events.md";

export const metadata: Metadata = {
  alternates: {
    canonical: "/events/",
  },
  title: "Industry Events | Seamless Connect",
  description:
    "A practical 12-month calendar for Seamless Connect standards, implementation, and ecosystem engagement.",
};

const events = [
  {
    date: "17–22 Oct 2026",
    name: "ICANN87",
    location: "Bali, Indonesia",
    priority: "High",
    note: "Registries, registrars, DNS operators, and policy relationships. Conflicts with NANOG 98.",
    url: "https://meetings.icann.org/en/calendar",
  },
  {
    date: "19–21 Oct 2026",
    name: "NANOG 98",
    location: "Miami, Florida",
    priority: "Very high",
    note: "Operator and infrastructure partners, technical feedback, and pilot recruitment.",
    url: "https://nanog.org/events/nanog-98/",
  },
  {
    date: "26–30 Oct 2026",
    name: "RIPE 93",
    location: "Sofia, Bulgaria",
    priority: "High",
    note: "European operators, deployability feedback, and provider relationships. Conflicts with TechEX26.",
    url: "https://www.ripe.net/meetings/calendar/ripe-93/",
  },
  {
    date: "26–30 Oct 2026",
    name: "Internet2 TechEX26",
    location: "Minneapolis, Minnesota",
    priority: "Medium",
    note: "Research-and-education networking, cloud, identity, and shared-infrastructure partners.",
    url: "https://events.internet2.edu/website/93141/home/",
  },
  {
    date: "8–11 Nov 2026",
    name: "DNS-OARC 47",
    location: "Vancouver, Canada",
    priority: "High",
    note: "DNS operations, DNSSEC automation, conformance, and technical credibility.",
    url: "https://indico.dns-oarc.net/event/58/",
  },
  {
    date: "11–12 Nov 2026",
    name: "CloudFest Americas + NamesCon Global",
    location: "Miami, Florida",
    priority: "Very high",
    note: "The strongest combined business-development audience across cloud, hosting, domains, and DNS.",
    url: "https://cloudfest.com/americas/",
  },
  {
    date: "14–20 Nov 2026",
    name: "IETF 127",
    location: "San Francisco, California",
    priority: "Very high",
    note: "Domain Connect/dconn, DNS, discovery, authorization, and related standards work.",
    url: "https://www.ietf.org/meeting/upcoming/",
  },
  {
    date: "22–24 Feb 2027",
    name: "NANOG 99",
    location: "Boston, Massachusetts",
    priority: "High",
    note: "North American operators and infrastructure implementers. Overlaps the start of APRICOT.",
    url: "https://nanog.org/events/future/",
  },
  {
    date: "24 Feb–4 Mar 2027",
    name: "APRICOT 2027",
    location: "Hong Kong",
    priority: "Medium–high",
    note: "Asia-Pacific operators, service providers, and regional ecosystem development.",
    url: "https://2027.apricot.net/about",
  },
  {
    date: "6–12 Mar 2027",
    name: "IETF 128",
    location: "Kuala Lumpur, Malaysia",
    priority: "Very high",
    note: "Standards progression and implementation feedback; follows APRICOT. ICANN88 starts the next day.",
    url: "https://www.ietf.org/meeting/upcoming/",
  },
  {
    date: "13–18 Mar 2027",
    name: "ICANN88",
    location: "Lisbon, Portugal",
    priority: "High",
    note: "Broad names-community participation and domain-industry relationships.",
    url: "https://meetings.icann.org/en/calendar",
  },
  {
    date: "24–28 May 2027",
    name: "RIPE 94",
    location: "Vilnius, Lithuania",
    priority: "High",
    note: "European operator engagement, implementation feedback, and technical partners.",
    url: "https://www.ripe.net/meetings/calendar/ripe-94/",
  },
  {
    date: "14–17 Jun 2027",
    name: "ICANN89",
    location: "Vancouver, Canada",
    priority: "High",
    note: "Focused policy work and partnership follow-through with registries and registrars.",
    url: "https://www.icann.org/en/engagement-calendar/details/icann89-vancouver-policy-forum-2027-06-14",
  },
  {
    date: "28–30 Jun 2027",
    name: "NANOG 100",
    location: "San Francisco, California",
    priority: "High",
    note: "A milestone operator meeting suited to a mature demo or deployment report.",
    url: "https://nanog.org/events/future/",
  },
  {
    date: "17–23 Jul 2027",
    name: "IETF 129",
    location: "Berlin, Germany",
    priority: "Very high",
    note: "Standards progress backed by running code, interoperability results, and deployment evidence.",
    url: "https://www.ietf.org/meeting/upcoming/",
  },
];

export default function EventsPage() {
  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Community calendar</p>
        <h1>Where Seamless Connect should show up next.</h1>
        <p>
          A practical 12-month view of the standards, DNS, domain, cloud, and
          operator events most relevant to the project.
        </p>
        <a
          className="button button-outline"
          href={calendarUrl}
          target="_blank"
          rel="noreferrer"
        >
          View the canonical calendar on GitHub <ExternalArrow />
        </a>
      </section>

      <section className={styles.calendar} aria-labelledby="calendar-title">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow"><span /> 22 Sep 2026–22 Sep 2027</p>
            <h2 id="calendar-title">Plan for outcomes, not attendance.</h2>
          </div>
          <p>
            Priorities reflect opportunities to advance standards, recruit
            implementers and pilot partners, and build the ecosystem. Dates and
            locations were checked on 22 September 2026; confirm with organizers
            before booking.
          </p>
        </div>

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
              <span className={styles.priority}>{event.priority}</span>
            </article>
          ))}
        </div>

        <aside className={styles.canonical}>
          <div>
            <span>Canonical source</span>
            <h2>Details, conflicts, and planning guidance live in the docs repository.</h2>
          </div>
          <a
            className="button button-light"
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open the full calendar <ExternalArrow />
          </a>
        </aside>
      </section>

      <SiteFooter page="sponsors" />
    </main>
  );
}
