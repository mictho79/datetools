'use strict';

// Post-build hreflang validator.
// Walks dist/**/index.html, extracts every <link rel="alternate" hreflang="..." href="..."/>
// and verifies the referenced URL exists as a file on disk.
// Exits 1 on any broken reference so CI/build fails loud.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const ORIGIN = 'https://datecalc.app';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name === 'index.html') out.push(p);
  }
  return out;
}

function hrefToDiskPath(href) {
  if (!href.startsWith(ORIGIN)) return null;
  let rel = href.slice(ORIGIN.length);
  if (!rel.startsWith('/')) rel = '/' + rel;
  if (!rel.endsWith('/')) rel += '/';
  return path.join(DIST, rel, 'index.html');
}

const HREFLANG_RE = /<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"\s*\/?>/g;
const CANONICAL_RE = /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/;

const files = walk(DIST);
const issues = [];
let totalHreflang = 0;
let totalCanonical = 0;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(DIST, file).replace(/\\/g, '/');

  const canonMatch = html.match(CANONICAL_RE);
  if (canonMatch) {
    totalCanonical++;
    const target = hrefToDiskPath(canonMatch[1]);
    if (target && !fs.existsSync(target)) {
      issues.push({ file: relFile, kind: 'canonical-404', value: canonMatch[1] });
    }
  }

  const seenLangs = new Set();
  let m;
  HREFLANG_RE.lastIndex = 0;
  while ((m = HREFLANG_RE.exec(html)) !== null) {
    totalHreflang++;
    const [, lang, href] = m;
    if (seenLangs.has(lang)) {
      issues.push({ file: relFile, kind: 'hreflang-duplicate', value: `${lang} → ${href}` });
    }
    seenLangs.add(lang);

    const target = hrefToDiskPath(href);
    if (target === null) {
      issues.push({ file: relFile, kind: 'hreflang-offsite', value: `${lang} → ${href}` });
      continue;
    }
    if (!fs.existsSync(target)) {
      issues.push({ file: relFile, kind: 'hreflang-404', value: `${lang} → ${href}` });
    }
  }
}

console.log(`\n── hreflang validation ──`);
console.log(`  scanned: ${files.length} files`);
console.log(`  canonical tags: ${totalCanonical}`);
console.log(`  hreflang tags:  ${totalHreflang}`);

if (issues.length === 0) {
  console.log(`  ✓ all hreflang + canonical targets resolve to existing files\n`);
  return;
}

// Group by kind for readable output
const byKind = issues.reduce((acc, i) => {
  (acc[i.kind] = acc[i.kind] || []).push(i);
  return acc;
}, {});

console.error(`  ✗ ${issues.length} issue(s) found:`);
for (const kind of Object.keys(byKind).sort()) {
  const list = byKind[kind];
  console.error(`\n  [${kind}] ${list.length} occurrence(s) — showing up to 10:`);
  for (const i of list.slice(0, 10)) {
    console.error(`    ${i.file} → ${i.value}`);
  }
  if (list.length > 10) console.error(`    … and ${list.length - 10} more`);
}
console.error('');
process.exit(1);
