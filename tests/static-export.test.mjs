import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputUrl = new URL("../out/", import.meta.url);

async function exportedHtml(pathname) {
  return readFile(new URL(pathname, outputUrl), "utf8");
}

test("exports the homepage and links to support", async () => {
  const html = await exportedHtml("index.html");

  assert.match(html, /Open Infrastructure for Cross-Provider Internet Operations/);
  assert.match(html, /href=["']\/sponsors\/["']/);
  assert.match(html, />Community</);
  assert.match(html, />Docs</);
  assert.match(html, />GitHub /);
  assert.doesNotMatch(html, /wordmark-mark/);
  assert.doesNotMatch(html, /s-mark/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/?"/,
  );
});

test("exports the support page from the canonical sponsor content", async () => {
  const [html, markdown] = await Promise.all([
    exportedHtml("sponsors/index.html"),
    readFile(new URL("../SPONSORS.md", import.meta.url), "utf8"),
  ]);

  const title = markdown.match(/^#\s+(.+)$/m)?.[1];
  assert.ok(title, "SPONSORS.md must contain an H1");
  assert.match(html, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(html, /Help sustain neutral cross-provider infrastructure, starting with Domain Connect\./);
  assert.doesNotMatch(html, /why-participate/);
  assert.doesNotMatch(html, /toolkit/);
  assert.match(html, /href=["']\/funding\/["']/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/"/,
  );
});

test("exports the approved funding statement and links to sponsorship", async () => {
  const [html, markdown] = await Promise.all([
    exportedHtml("funding/index.html"),
    readFile(new URL("../FUNDING.md", import.meta.url), "utf8"),
  ]);

  const title = markdown.match(/^#\s+(.+)$/m)?.[1];
  assert.ok(title, "FUNDING.md must contain an H1");
  assert.match(html, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(html, /Participation and interoperability are not pay-to-play\./);
  assert.match(html, /help sustain it voluntarily\./);
  assert.match(html, /href=["']\/sponsors\/["']/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/funding\/"/,
  );
});

test("redirects retired sponsorship resources to the sponsorship page", async () => {
  const [whyParticipate, toolkit] = await Promise.all([
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
  ]);

  for (const retiredPage of [whyParticipate, toolkit]) {
    assert.match(retiredPage, /http-equiv="refresh" content="0; url=\/sponsors\/"/);
    assert.match(
      retiredPage,
      /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/"/,
    );
  }
});

test("exports the charter summary and links to the canonical charter", async () => {
  const html = await exportedHtml("charter/index.html");

  assert.match(html, /Open infrastructure for cross-provider Internet coordination\./);
  assert.match(html, /What the charter establishes/);
  assert.match(html, /Governance and administrative home/);
  assert.match(
    html,
    /https:\/\/github\.com\/seamless-connect\/spec\/blob\/main\/governance\/CHARTER\.md/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/charter\/"/,
  );
});

test("does not publish the personal events reference or link to it", async () => {
  await assert.rejects(access(new URL("events/index.html", outputUrl)), { code: "ENOENT" });
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
    exportedHtml("charter/index.html"),
    exportedHtml("funding/index.html"),
    exportedHtml("use-cases/index.html"),
  ]);
  for (const html of pages) {
    assert.doesNotMatch(html, /href="\/events\/"|community\/events\.md|Industry calendar|ICANN87|NamesCon/);
  }
});

test("recognizes the founding sponsor, contributors, and nonprofit host", async () => {
  const [homepage, sponsors] = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
  ]);

  assert.match(sponsors, /Founding Sponsor/);
  assert.match(sponsors, /Name\.com \/ Identity Digital/);
  assert.match(sponsors, /Committed Project Sponsors/);
  assert.match(sponsors, /Cloudflare/);
  assert.match(sponsors, /DigiCert/);
  assert.match(sponsors, /Sponsorship is voluntary\./);
  assert.match(sponsors, /Sponsorship Does Not Buy Interoperability/);
  assert.match(sponsors, /optional paid operational services/);
  assert.doesNotMatch(sponsors, /usage fees|usage-based|paid membership/i);
  assert.match(homepage, /Founding Sponsor/);
  assert.match(homepage, /Name\.com<\/span><small>\(Identity Digital\)/);
  assert.match(homepage, /Committed project sponsors/);
  assert.match(homepage, /Cloudflare/);
  assert.match(homepage, /DigiCert/);
  assert.match(homepage, /Nonprofit administrator/);
  assert.match(homepage, /Foundation for Agentic Networks \(FAN\)/);
  assert.match(homepage, /501\(c\)\(3\) nonprofit governance/);
});

test("preserves capability scope and provides a conceptual workflow without invented commands", async () => {
  const homepage = await exportedHtml("index.html");
  const markup = homepage.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert.match(markup, /Domain operations,/);
  assert.match(markup, /made seamless\./);
  assert.match(markup, /neutral coordination layer between service providers, DNS providers, and registrars/);
  assert.match(markup, /Nonprofit administration is provided by/);
  assert.match(markup, /Project-level capability status/);
  for (const [anchor, status] of [["dns-configuration", "Initial focus"], ["dnssec", "Discovery and pilot design"], ["primary-secondary-dns", "Proposed"], ["domain-registration", "Proposed"], ["agent-bootstrapping", "Proposed"]]) {
    assert.match(markup, new RegExp(`href="/use-cases/#${anchor}"[^]*?</th><td><span[^>]*>${status}</span></td>`));
  }
  assert.match(markup, /not live availability/);
  assert.match(markup, /Industry participation does not imply implemented integrations/);
  assert.match(markup, /Technical participation is independent of sponsorship/);
  assert.match(markup, /A conceptual Domain Connect workflow/);
  for (const label of ["Service", "Provider", "Participating DNS Provider", "Configuration outcome"]) assert.ok(markup.includes(label));
  assert.doesNotMatch(markup, /<pre|<code|system-map|dns-strip|integration-grid/);
  assert.match(markup, /href="https:\/\/github.com\/seamless-connect\/docs"/);
});

test("keeps competitive positioning vendor-neutral", async () => {
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("charter/index.html"),
    exportedHtml("sponsors/index.html"),
  ]);

  for (const page of pages) {
    assert.doesNotMatch(page, /Entri|GoDaddy/i);
  }
});

test("uses Seamless Connect consistently and identifies FAN governance", async () => {
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("charter/index.html"),
    exportedHtml("sponsors/index.html"),
  ]);

  for (const page of pages) {
    assert.match(page, /Seamless Connect/);
    assert.match(page, /Foundation for Agentic Networks/);
    assert.doesNotMatch(page, /SeamlessDNS|Seamless DNS/);
    // Hydration payloads may split words across script chunks; check exported markup.
    assert.doesNotMatch(page.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, ""), /\bSeamless\b(?! Connect)/);
    assert.doesNotMatch(page, /Seamless Foundation|Series of LF Projects/);
  }
});

test("exports the favicon", async () => {
  await access(new URL("favicon.svg", outputUrl));
});


test("exports use cases with navigation, discovery deep link, and capability scope", async () => {
  const [html, homepage] = await Promise.all([
    exportedHtml("use-cases/index.html"),
    exportedHtml("index.html"),
  ]);
  assert.match(homepage, /href="\/use-cases\/">Use Cases</);
  assert.match(html, /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/use-cases\/"/);
  for (const id of ["dns-configuration", "dnssec", "primary-secondary-dns", "domain-registration", "agent-bootstrapping"]) {
    assert.match(html, new RegExp(`id="${id}"`));
    assert.match(html, new RegExp(`href="#${id}"`));
  }
  assert.match(html, /AXFR\/IXFR/);
  assert.match(html, /TSIG/);
  assert.match(html, /DNS-based/);
  assert.match(html, /Non-DNS/);
  assert.match(html, /Proposed scope/);
  assert.match(html, /orchestration are outside this use case/);
});

 test("offers implementation onboarding and independent financial sponsorship", async () => {
  const html = (await exportedHtml("index.html")).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert.match(html, /Help build the Internet’s shared infrastructure/);
  assert.match(html, /Technical participation is open to everyone and does not require financial sponsorship/);
  for (const role of ["dns-provider", "service-provider", "registrar"]) assert.ok(html.includes(`/integration-checklists/${role}-integration-checklist.md`));
  for (const name of ["Datum.net", "Pawel Kowalik", "Sami Kerola", "Implement", "Fund"]) assert.ok(html.includes(name));
  assert.doesNotMatch(html, /Founding Contributors|Build with us\./);
});
