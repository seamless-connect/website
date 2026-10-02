import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputUrl = new URL("../out/", import.meta.url);

async function exportedHtml(pathname) {
  return readFile(new URL(pathname, outputUrl), "utf8");
}

test("exports the homepage and links to support", async () => {
  const html = await exportedHtml("index.html");

  assert.match(html, /Open infrastructure for cross-provider Internet operations\./);
  assert.match(html, /href=["']\/sponsors\/["']/);
  assert.match(html, />Support</);
  assert.match(html, />How it works</);
  assert.match(html, />Integrate</);
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
  assert.match(html, /Help sustain shared infrastructure for Internet interoperability\./);
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

test("exports the events summary and links to the canonical calendar", async () => {
  const html = await exportedHtml("events/index.html");

  assert.match(html, /Events across the domain and Internet infrastructure ecosystem\./);
  assert.match(html, /NamesCon Global \+ CloudFest Americas/);
  assert.match(html, /ICANN Contracted Parties Summit/);
  assert.match(html, /IETF 130/);
  assert.match(html, /Agentic Web/);
  assert.match(html, /MCP Dev Summit Toronto/);
  assert.match(html, /USENIX Conference on Secure Agentic-AI Systems/);
  assert.match(html, /Foundation for Agentic Networks and Project NANDA events/);
  assert.match(html, /Inclusion is informational\./);
  assert.doesNotMatch(html, /Very high|Plan for outcomes|should show up next/i);
  assert.match(
    html,
    /https:\/\/github\.com\/seamless-connect\/docs\/blob\/main\/community\/events\.md/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/events\/"/,
  );
});

test("recognizes the founding sponsor, contributors, and nonprofit host", async () => {
  const [homepage, sponsors] = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
  ]);

  assert.match(sponsors, /Founding Sponsor/);
  assert.match(sponsors, /Name\.com \/ Identity Digital/);
  assert.match(sponsors, /Founding Contributors/);
  assert.match(sponsors, /Cloudflare/);
  assert.match(sponsors, /DigiCert/);
  assert.match(sponsors, /Sponsorship is voluntary\./);
  assert.match(sponsors, /Sponsorship Does Not Buy Interoperability/);
  assert.match(sponsors, /optional paid operational services/);
  assert.doesNotMatch(sponsors, /usage fees|usage-based|paid membership/i);
  assert.match(homepage, /Founding Sponsor/);
  assert.match(homepage, /Name\.com \/ Identity Digital/);
  assert.match(homepage, /Founding Contributors/);
  assert.match(homepage, /Cloudflare/);
  assert.match(homepage, /DigiCert/);
  assert.match(homepage, /Hosted by/);
  assert.match(homepage, /Foundation for Agentic Networks \(FAN\)/);
  assert.match(homepage, /501\(c\)\(3\) nonprofit governance/);
});

test("explains the connection model, role paths, and public-commons model", async () => {
  const [homepage, sponsors] = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
  ]);

  assert.match(homepage, /How it works/);
  assert.match(homepage, /One open connection\./);
  assert.match(homepage, /does not prescribe one universal execution sequence/);
  assert.doesNotMatch(homepage, /<h3>Discover<\/h3>|<h3>Authorize<\/h3>|<h3>Evaluate<\/h3>|<h3>Persist<\/h3>/);
  assert.match(homepage, /service-provider-integration-checklist\.md/);
  assert.match(homepage, /dns-provider-integration-checklist\.md/);
  assert.match(homepage, /registrar-integration-checklist\.md/);
  assert.ok(homepage.indexOf("Operationalize Domain Connect") < homepage.indexOf("Explore open discovery"));
  assert.match(homepage, /Participation and interoperability are not pay-to-play\./);
  assert.match(homepage, /Optional paid operational services/);
  assert.match(homepage, /not conditioned on sponsorship/);
  assert.match(sponsors, /Application and Agentic Platforms/);
});

test("exports the responsive ecosystem architecture map", async () => {
  const homepage = await exportedHtml("index.html");

  for (const label of [
    "Requesters",
    "Domain Owners",
    "Apps",
    "Agentic Operators",
    "Integration surfaces",
    "Control Planes",
    "Reseller Platforms",
    "Authoritative systems",
    "Registrars",
    "Authoritative DNS",
    "Agent Registries",
    "Update DNS",
    "DNSSEC",
    "Domain registration",
    "Zone transfer",
    "Agent bootstrapping",
  ]) {
    assert.match(homepage, new RegExp(label));
  }
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
    assert.doesNotMatch(page, /\bSeamless\b(?! Connect)/);
    assert.doesNotMatch(page, /Seamless Foundation|Series of LF Projects/);
  }
});

test("exports the favicon", async () => {
  await access(new URL("favicon.svg", outputUrl));
});
