// Fetches Wikipedia featured images for birth years 1930-2024
// Usage: node scripts/fetch-year-images.js
// Output: src/data/year-images.json

const fs = require('fs');
const path = require('path');
const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    const options = { headers: { 'User-Agent': 'DateCalc.app/1.0 (hello@datecalc.app)' } };
    https.get(url, options, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { resolve(null); }
      });
    }).on('error', reject);
  });
}

function upgradeThumb(src, targetWidth = 900) {
  // Replace Wikipedia thumbnail width with larger size
  return src.replace(/\/\d+px-/, `/${targetWidth}px-`);
}

async function fetchImage(year) {
  try {
    const data = await get(`https://en.wikipedia.org/api/rest_v1/page/summary/${year}`);
    if (!data || !data.thumbnail) return null;

    const src = upgradeThumb(data.thumbnail.source, 900);
    const caption = (data.description || String(year)).slice(0, 120);

    return { src, alt: `${year} — ${caption}`, caption };
  } catch(e) {
    return null;
  }
}

async function main() {
  const out = {};
  const years = [];
  for (let y = 1930; y <= 2024; y++) years.push(y);

  console.log(`Fetching images for ${years.length} years...`);

  for (const year of years) {
    process.stdout.write(`  ${year}... `);
    const img = await fetchImage(year);
    if (img) {
      out[year] = img;
      process.stdout.write(`✓\n`);
    } else {
      process.stdout.write(`—\n`);
    }
    // Be polite with Wikipedia API
    await new Promise(r => setTimeout(r, 200));
  }

  const outPath = path.join(__dirname, '..', 'src', 'data', 'year-images.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`\nSaved ${Object.keys(out).length} images → ${outPath}`);
}

main().catch(console.error);
