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
  assert.match(html, /href=["']\/sponsor\/["']/);
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

test("exports one concise sponsor page with independent funding and administration", async () => {
  const html = await exportedHtml("sponsor/index.html");
  assert.match(html, /<h1>Support the shared infrastructure/);
  assert.match(html, /href="https:\/\/crowdfunding.linuxfoundation.org\/initiatives\/seamless-connect"/);
  assert.match(html, /current nonprofit administrator/);
  assert.match(html, /The Linux Foundation is not the project administrator/);
  assert.match(html, /Technical participation and basic interoperability are open to everyone/);
  assert.match(html, /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsor\/"/);
  assert.doesNotMatch(html, /usage-based|usage fees|optional paid|Founding Premier|Sponsorship Levels|\$250,000|\$25,000/i);
});

test("exports direct static redirects with visible fallbacks for every retired route", async () => {
  for (const route of ["funding", "sponsors", "sponsors/why-participate", "sponsors/toolkit"]) {
    const html = await exportedHtml(`${route}/index.html`);
    assert.match(html, /http-equiv="refresh" content="0; url=\/sponsor\/"/);
    assert.match(html, /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsor\/"/);
    assert.match(html, /<meta name="robots" content="noindex, follow"/);
    assert.match(html, /<a href="\/sponsor\/">Continue to Sponsor Seamless Connect<\/a>/);
  }
});

test("active pages link directly to the canonical sponsorship route", async () => {
  for (const route of ["index.html", "sponsor/index.html", "participate/index.html", "charter/index.html", "use-cases/index.html"]) {
    const html = await exportedHtml(route);
    assert.match(html, /href="\/sponsor\/"/);
    assert.doesNotMatch(html, /href="\/(?:funding|sponsors)\/"/);
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
    exportedHtml("sponsor/index.html"),
    exportedHtml("charter/index.html"),
    exportedHtml("funding/index.html"),
    exportedHtml("use-cases/index.html"),
  ]);
  for (const html of pages) {
    assert.doesNotMatch(html, /href="\/events\/"|community\/events\.md|Industry calendar|ICANN87|NamesCon/);
  }
});

test("preserves sponsorship recognition while separating homepage participation and administration", async () => {
  const [homepage, sponsors] = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsor/index.html"),
  ]);

  assert.match(sponsors, /Founding Sponsors/);
  assert.match(sponsors, /Cloudflare/);
  assert.match(sponsors, /DigiCert/);
  assert.match(sponsors, /Sponsorship is voluntary\./);
  assert.match(sponsors, /Contributions do not purchase protocol influence/);
  assert.doesNotMatch(sponsors, /usage fees|usage-based|paid membership/i);
  assert.doesNotMatch(homepage, /Founding Sponsor|Committed project sponsors|Pawel Kowalik|Sami Kerola/);
  const participate = await exportedHtml("participate/index.html");
  const list = /<ul[^>]*aria-label="Industry participants"[^>]*>[\s\S]*?<\/ul>/;
  assert.equal(homepage.match(list)?.[0], participate.match(list)?.[0]);
  assert.ok(homepage.match(list));
  const sponsorList = /<ul[^>]*aria-label="Founding sponsors"[^>]*>[\s\S]*?<\/ul>/;
  assert.equal(sponsors.match(sponsorList)?.[0].replace('Founding sponsors', 'Industry participants'), homepage.match(list)?.[0]);
  assert.doesNotMatch(sponsors, /Our sponsors|Committed Project Sponsors/);
  for (const company of ["Cloudflare", "Name.com", "DigiCert", "Datum.net", "Cloud 66"]) {
    assert.ok(homepage.match(list)[0].includes(`>${company}</li>`));
  }
  assert.match(homepage, /Current nonprofit administrator/);
  assert.match(homepage, /Foundation for Agentic Networks \(FAN\)/);
  assert.match(homepage, /href="https:\/\/www.agenticnet.org\/"/);
  assert.match(homepage, /href="https:\/\/crowdfunding.linuxfoundation.org\/initiatives\/seamless-connect"/);
  assert.match(homepage, /The Linux Foundation is not the project administrator/);
  assert.match(homepage, /501\(c\)\(3\) nonprofit governance/);
});

test("preserves capability scope and provides a conceptual workflow without invented commands", async () => {
  const homepage = await exportedHtml("index.html");
  const markup = homepage.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert.match(markup, /Domain operations,/);
  assert.match(markup, /made seamless\./);
  assert.match(markup, /neutral coordination layer between service providers, DNS providers, and registrars/);
  assert.match(markup, /Nonprofit administration is provided by/);
  assert.match(markup, /Project roadmap/);
  assert.match(markup, /<th scope="col">Roadmap<\/th>/);
  assert.doesNotMatch(markup, /<th scope="col">Status<\/th>/);
  for (const anchor of ["dns-configuration", "dnssec", "primary-secondary-dns", "domain-registration", "agent-bootstrapping"]) {
    assert.ok(markup.includes(`href="/use-cases/#${anchor}"`));
  }
  assert.match(markup, /not live availability/);
  assert.match(markup, /Industry participation does not imply implemented integrations/);
  assert.match(markup, /Technical participation is independent of sponsorship/);
  assert.match(markup, /ONE INTEGRATION\. MANY PROVIDERS\./);
  assert.equal((markup.match(/marker-start="url\(#network-arrow\)"/g) || []).length, 6);
  assert.equal((markup.match(/marker-end="url\(#network-arrow\)"/g) || []).length, 6);
  for (const label of ["ONE INTEGRATION. MANY PROVIDERS.", "Online Services", "Websites, Email, SaaS", "Developer Tools", "CLI, SDKs, Terraform", "AI Agents &amp; Platforms", "Codex, ChatGPT Work, autonomous agents", "DNS Provider", "Registrar", "Cross-provider coordination", "Conceptual network, not live integrations"]) assert.ok(markup.includes(label));
  assert.doesNotMatch(markup, /<pre|<code|system-map|dns-strip|integration-grid/);
  assert.match(markup, /href="https:\/\/github.com\/seamless-connect\/docs"/);
});

test("keeps competitive positioning vendor-neutral", async () => {
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("charter/index.html"),
    exportedHtml("sponsor/index.html"),
  ]);

  for (const page of pages) {
    assert.doesNotMatch(page, /Entri|GoDaddy/i);
  }
});

test("uses Seamless Connect consistently and identifies FAN governance", async () => {
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("charter/index.html"),
    exportedHtml("sponsor/index.html"),
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

 test("offers implementation onboarding with separate administration and funding", async () => {
  const html = (await exportedHtml("index.html")).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert.match(html, /Help build the Internet’s shared infrastructure/);
  assert.match(html, /Technical participation is open to everyone and does not require financial sponsorship/);
  for (const role of ["dns-provider", "service-provider", "registrar"]) assert.ok(html.includes(`/integration-checklists/${role}-integration-checklist.md`));
  for (const name of ["Datum.net", "Cloud 66", "Implement", "Supporting the project."]) assert.ok(html.includes(name));
  assert.doesNotMatch(html, /Founding Contributors|Build with us\.|<h3>Fund<\/h3>/);
});
