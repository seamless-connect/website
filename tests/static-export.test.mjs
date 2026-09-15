import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputUrl = new URL("../out/", import.meta.url);

async function exportedHtml(pathname) {
  return readFile(new URL(pathname, outputUrl), "utf8");
}

test("exports the homepage and links to support", async () => {
  const html = await exportedHtml("index.html");

  assert.match(html, /The open connection layer for the Internet\./);
  assert.match(html, /href=["']\/sponsors\/["']/);
  assert.match(html, />Support</);
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
  assert.match(html, /Fund the neutral layer for automated Internet operations\./);
  assert.match(html, /why-participate/);
  assert.match(html, /toolkit/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/"/,
  );
});

test("exports the stakeholder value and champion toolkit pages", async () => {
  const [whyParticipate, toolkit] = await Promise.all([
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
  ]);

  assert.match(whyParticipate, /Invest where interoperability becomes economic value\./);
  assert.match(whyParticipate, /Protocol choice and commercial opportunity remain open/);
  assert.match(toolkit, /The 60-second explanation/);
  assert.match(toolkit, /Technical participation is not a membership benefit\./);
  assert.match(
    whyParticipate,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/why-participate\/"/,
  );
  assert.match(
    toolkit,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/toolkit\/"/,
  );
});

test("exports the charter summary and links to the canonical charter", async () => {
  const html = await exportedHtml("charter/index.html");

  assert.match(html, /Open infrastructure for cross-provider Internet coordination\./);
  assert.match(html, /What the charter establishes/);
  assert.match(html, /Governance and administrative home/);
  assert.match(
    html,
    /https:\/\/github\.com\/seamlessdns\/spec\/blob\/main\/governance\/CHARTER\.md/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/charter\/"/,
  );
});

test("recognizes the founding sponsor and founding team", async () => {
  const [homepage, sponsors] = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
  ]);

  assert.match(sponsors, /Founding Sponsor/);
  assert.match(sponsors, /Name\.com/);
  assert.match(homepage, /Founding &amp; launch community/);
  assert.match(homepage, /Brian Toresdahl/);
  assert.match(homepage, /Pawel Kowalik/);
  assert.match(homepage, /Sami Kerola/);
  assert.match(homepage, /linkedin\.com\/in\/brian-toresdahl/);
  assert.match(homepage, /linkedin\.com\/in\/pawelk/);
  assert.match(homepage, /linkedin\.com\/in\/kerolasa/);
});

test("explains the connection model, role paths, and staged roadmap", async () => {
  const [homepage, sponsors, whyParticipate, toolkit] = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
  ]);

  assert.match(homepage, /How one connection works/);
  assert.match(homepage, /One connection\./);
  assert.match(homepage, /does not prescribe one universal execution sequence/);
  assert.doesNotMatch(homepage, /<h3>Discover<\/h3>|<h3>Authorize<\/h3>|<h3>Evaluate<\/h3>|<h3>Persist<\/h3>/);
  assert.match(homepage, /service-provider-integration-checklist\.md/);
  assert.match(homepage, /dns-provider-integration-checklist\.md/);
  assert.match(homepage, /registrar-integration-checklist\.md/);
  assert.ok(homepage.indexOf("Operationalize Domain Connect") < homepage.indexOf("agentic operations"));
  assert.match(sponsors, /architectural extension/);
  assert.match(whyParticipate, /Value by operation category/);
  assert.match(toolkit, /Is Seamless Connect a DNS or domain project\?/);
});

test("keeps competitive positioning vendor-neutral", async () => {
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("charter/index.html"),
    exportedHtml("sponsors/index.html"),
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
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
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
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
