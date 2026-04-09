// Fetches Wikipedia featured images for birth years 1930-2024
// Downloads images locally to src/data/year-photos/
// Usage: node scripts/fetch-year-images.js
// Output: src/data/year-images.json + src/data/year-photos/*.jpg

const fs = require('fs');
const path = require('path');
const https = require('https');

const PHOTOS_DIR = path.join(__dirname, '..', 'src', 'data', 'year-photos');
if (!fs.existsSync(PHOTOS_DIR)) fs.mkdirSync(PHOTOS_DIR, { recursive: true });

function get(url) {
  return new Promise((resolve, reject) => {
    const options = { headers: { 'User-Agent': 'DateCalc.app/1.0 (hello@datecalc.app)' } };
    https.get(url, options, res => {
      // Follow redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        return get(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { resolve(null); }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const options = { headers: { 'User-Agent': 'DateCalc.app/1.0 (hello@datecalc.app)' } };
    const file = fs.createWriteStream(destPath);
    https.get(url, options, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    }).on('error', err => {
      fs.unlinkSync(destPath);
      resolve(false);
    });
  });
}

function upgradeThumb(src, targetWidth = 600) {
  return src.replace(/\/\d+px-/, `/${targetWidth}px-`);
}

async function fetchImage(year) {
  try {
    const data = await get(`https://en.wikipedia.org/api/rest_v1/page/summary/${year}`);
    if (!data || !data.thumbnail) return null;

    const url = upgradeThumb(data.thumbnail.source, 600);
    const ext = url.match(/\.(jpe?g|png|gif|webp)/i)?.[1]?.toLowerCase() || 'jpg';
    const localFile = path.join(PHOTOS_DIR, `${year}.${ext}`);
    const localPath = `/year-photos/${year}.${ext}`;

    const ok = await downloadImage(url, localFile);
    if (!ok) return null;

    return { src: localPath, alt: `${year}` };
  } catch(e) {
    return null;
  }
}

async function main() {
  const out = {};
  const years = [];
  for (let y = 1930; y <= 2024; y++) years.push(y);

  console.log(`Fetching + downloading images for ${years.length} years...`);

  for (const year of years) {
    // Skip if already downloaded
    const existing = fs.readdirSync(PHOTOS_DIR).find(f => f.startsWith(`${year}.`));
    if (existing) {
      out[year] = { src: `/year-photos/${existing}`, alt: `${year}` };
      process.stdout.write(`  ${year}... (cached)\n`);
      continue;
    }

    process.stdout.write(`  ${year}... `);
    const img = await fetchImage(year);
    if (img) {
      out[year] = img;
      process.stdout.write(`✓\n`);
    } else {
      process.stdout.write(`—\n`);
    }
    await new Promise(r => setTimeout(r, 1500));
  }

  const outPath = path.join(__dirname, '..', 'src', 'data', 'year-images.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`\nSaved ${Object.keys(out).length} images → ${outPath}`);
}

main().catch(console.error);
