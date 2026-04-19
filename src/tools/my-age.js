// /my-age/?dob=YYYY-MM-DD — shareable age-card landing page.
// Client-side JS reads ?dob, renders the card, and populates share buttons.
// Renders in 10 languages with full hreflang + localized CTAs.

const LANGS = ['en', 'fr', 'es', 'pt', 'de', 'it', 'pl', 'ja', 'ko', 'nl'];

const SLUGS = {
  en: 'my-age',
  fr: 'fr/mon-age',
  es: 'es/mi-edad',
  pt: 'pt/minha-idade',
  de: 'de/mein-alter',
  it: 'it/la-mia-eta',
  pl: 'pl/moj-wiek',
  ja: 'ja/watashi-no-nenrei',
  ko: 'ko/nae-nai',
  nl: 'nl/mijn-leeftijd',
};

const AGE_CALC_HREF = {
  en: '/age-calculator/',
  fr: '/fr/calculateur-age/',
  es: '/es/calculadora-edad/',
  pt: '/pt/calculadora-de-idade/',
  de: '/de/altersrechner/',
  it: '/it/calcolo-eta/',
  pl: '/pl/kalkulator-wieku/',
  ja: '/ja/nenrei-keisanki/',
  ko: '/ko/nai-gyesan-gi/',
  nl: '/nl/leeftijdscalculator/',
};

const T = {
  en: {
    title: 'My Age — How many days have I lived? | DateCalc.app',
    metaDesc: 'See your age in years, months, days, hours, and seconds — and share your card. Pass ?dob=YYYY-MM-DD to personalize.',
    kicker: 'Age card',
    h1Default: 'How many days have you lived?',
    h1WithDob: d => `Born in ${d.year}`,
    youAre: 'You are',
    yearsOld: 'years old',
    daysLived: 'days lived',
    zodiac: 'Zodiac',
    generation: 'Generation',
    nextBirthday: 'Next birthday',
    shareHeadline: 'Share your age card',
    shareX: 'Share on X',
    shareFb: 'Share on Facebook',
    shareWa: 'WhatsApp',
    copyLink: 'Copy link',
    copied: 'Link copied!',
    cta: 'Calculate your own age →',
    ctaNoDob: 'Open the age calculator to generate your own shareable card.',
    tweetTpl: d => `I've lived ${d.days.toLocaleString('en-US')} days on this planet 🌍 Find yours at datecalc.app/my-age/`,
    invalidDob: 'The date in the URL isn\'t valid. Try the calculator below.',
  },
  fr: {
    title: 'Mon âge — Combien de jours ai-je vécus ? | DateCalc.app',
    metaDesc: 'Votre âge en années, mois, jours, heures et secondes — et partagez votre carte. Passez ?dob=AAAA-MM-JJ pour personnaliser.',
    kicker: 'Carte d\'âge',
    h1Default: 'Combien de jours avez-vous vécus ?',
    h1WithDob: d => `Né en ${d.year}`,
    youAre: 'Vous avez',
    yearsOld: 'ans',
    daysLived: 'jours vécus',
    zodiac: 'Signe',
    generation: 'Génération',
    nextBirthday: 'Prochain anniversaire',
    shareHeadline: 'Partagez votre carte',
    shareX: 'Partager sur X',
    shareFb: 'Partager sur Facebook',
    shareWa: 'WhatsApp',
    copyLink: 'Copier le lien',
    copied: 'Lien copié !',
    cta: 'Calculer votre âge →',
    ctaNoDob: 'Ouvrez le calculateur d\'âge pour générer votre propre carte partageable.',
    tweetTpl: d => `J'ai vécu ${d.days.toLocaleString('fr-FR')} jours sur cette planète 🌍 Calculez les vôtres sur datecalc.app/fr/mon-age/`,
    invalidDob: 'La date dans l\'URL n\'est pas valide. Essayez le calculateur ci-dessous.',
  },
  es: {
    title: 'Mi edad — ¿Cuántos días he vivido? | DateCalc.app',
    metaDesc: 'Tu edad en años, meses, días, horas y segundos — y comparte tu tarjeta. Pasa ?dob=AAAA-MM-DD para personalizar.',
    kicker: 'Tarjeta de edad',
    h1Default: '¿Cuántos días has vivido?',
    h1WithDob: d => `Nacido en ${d.year}`,
    youAre: 'Tienes',
    yearsOld: 'años',
    daysLived: 'días vividos',
    zodiac: 'Signo',
    generation: 'Generación',
    nextBirthday: 'Próximo cumpleaños',
    shareHeadline: 'Comparte tu tarjeta',
    shareX: 'Compartir en X',
    shareFb: 'Compartir en Facebook',
    shareWa: 'WhatsApp',
    copyLink: 'Copiar enlace',
    copied: '¡Enlace copiado!',
    cta: 'Calcular tu edad →',
    ctaNoDob: 'Abre la calculadora de edad para generar tu propia tarjeta compartible.',
    tweetTpl: d => `He vivido ${d.days.toLocaleString('es-ES')} días en este planeta 🌍 Calcula los tuyos en datecalc.app/es/mi-edad/`,
    invalidDob: 'La fecha en la URL no es válida. Prueba la calculadora de abajo.',
  },
  pt: {
    title: 'Minha idade — Quantos dias eu vivi? | DateCalc.app',
    metaDesc: 'Sua idade em anos, meses, dias, horas e segundos — e compartilhe seu cartão. Passe ?dob=AAAA-MM-DD para personalizar.',
    kicker: 'Cartão de idade',
    h1Default: 'Quantos dias você viveu?',
    h1WithDob: d => `Nascido em ${d.year}`,
    youAre: 'Você tem',
    yearsOld: 'anos',
    daysLived: 'dias vividos',
    zodiac: 'Signo',
    generation: 'Geração',
    nextBirthday: 'Próximo aniversário',
    shareHeadline: 'Compartilhe seu cartão',
    shareX: 'Compartilhar no X',
    shareFb: 'Compartilhar no Facebook',
    shareWa: 'WhatsApp',
    copyLink: 'Copiar link',
    copied: 'Link copiado!',
    cta: 'Calcular sua idade →',
    ctaNoDob: 'Abra a calculadora de idade para gerar seu próprio cartão compartilhável.',
    tweetTpl: d => `Eu vivi ${d.days.toLocaleString('pt-BR')} dias neste planeta 🌍 Calcule os seus em datecalc.app/pt/minha-idade/`,
    invalidDob: 'A data na URL não é válida. Tente a calculadora abaixo.',
  },
  de: {
    title: 'Mein Alter — Wie viele Tage habe ich gelebt? | DateCalc.app',
    metaDesc: 'Dein Alter in Jahren, Monaten, Tagen, Stunden und Sekunden — und teile deine Karte. Übergib ?dob=JJJJ-MM-TT zum Personalisieren.',
    kicker: 'Alters-Karte',
    h1Default: 'Wie viele Tage hast du gelebt?',
    h1WithDob: d => `Geboren ${d.year}`,
    youAre: 'Du bist',
    yearsOld: 'Jahre alt',
    daysLived: 'Tage gelebt',
    zodiac: 'Sternzeichen',
    generation: 'Generation',
    nextBirthday: 'Nächster Geburtstag',
    shareHeadline: 'Teile deine Karte',
    shareX: 'Auf X teilen',
    shareFb: 'Auf Facebook teilen',
    shareWa: 'WhatsApp',
    copyLink: 'Link kopieren',
    copied: 'Link kopiert!',
    cta: 'Dein Alter berechnen →',
    ctaNoDob: 'Öffne den Altersrechner, um deine eigene teilbare Karte zu erstellen.',
    tweetTpl: d => `Ich habe ${d.days.toLocaleString('de-DE')} Tage auf diesem Planeten gelebt 🌍 Berechne deine auf datecalc.app/de/mein-alter/`,
    invalidDob: 'Das Datum in der URL ist ungültig. Probiere den Rechner unten.',
  },
  it: {
    title: 'La mia età — Quanti giorni ho vissuto? | DateCalc.app',
    metaDesc: 'La tua età in anni, mesi, giorni, ore e secondi — e condividi la tua carta. Passa ?dob=AAAA-MM-GG per personalizzare.',
    kicker: 'Carta dell\'età',
    h1Default: 'Quanti giorni hai vissuto?',
    h1WithDob: d => `Nato nel ${d.year}`,
    youAre: 'Hai',
    yearsOld: 'anni',
    daysLived: 'giorni vissuti',
    zodiac: 'Segno',
    generation: 'Generazione',
    nextBirthday: 'Prossimo compleanno',
    shareHeadline: 'Condividi la tua carta',
    shareX: 'Condividi su X',
    shareFb: 'Condividi su Facebook',
    shareWa: 'WhatsApp',
    copyLink: 'Copia il link',
    copied: 'Link copiato!',
    cta: 'Calcola la tua età →',
    ctaNoDob: 'Apri il calcolatore di età per generare la tua carta condivisibile.',
    tweetTpl: d => `Ho vissuto ${d.days.toLocaleString('it-IT')} giorni su questo pianeta 🌍 Calcola i tuoi su datecalc.app/it/la-mia-eta/`,
    invalidDob: 'La data nell\'URL non è valida. Prova il calcolatore qui sotto.',
  },
  pl: {
    title: 'Mój wiek — Ile dni przeżyłem? | DateCalc.app',
    metaDesc: 'Twój wiek w latach, miesiącach, dniach, godzinach i sekundach — podziel się swoją kartą. Podaj ?dob=RRRR-MM-DD, aby spersonalizować.',
    kicker: 'Karta wieku',
    h1Default: 'Ile dni przeżyłeś?',
    h1WithDob: d => `Urodzony w ${d.year}`,
    youAre: 'Masz',
    yearsOld: 'lat',
    daysLived: 'przeżytych dni',
    zodiac: 'Znak zodiaku',
    generation: 'Pokolenie',
    nextBirthday: 'Następne urodziny',
    shareHeadline: 'Udostępnij swoją kartę',
    shareX: 'Udostępnij na X',
    shareFb: 'Udostępnij na Facebooku',
    shareWa: 'WhatsApp',
    copyLink: 'Skopiuj link',
    copied: 'Link skopiowany!',
    cta: 'Oblicz swój wiek →',
    ctaNoDob: 'Otwórz kalkulator wieku, aby wygenerować własną kartę do udostępnienia.',
    tweetTpl: d => `Przeżyłem ${d.days.toLocaleString('pl-PL')} dni na tej planecie 🌍 Sprawdź swoje: datecalc.app/pl/moj-wiek/`,
    invalidDob: 'Data w adresie URL jest nieprawidłowa. Wypróbuj kalkulator poniżej.',
  },
  ja: {
    title: '私の年齢 — 今まで何日生きた？ | DateCalc.app',
    metaDesc: 'あなたの年齢を年・月・日・時・秒で表示し、カードを共有できます。?dob=YYYY-MM-DDでパーソナライズ。',
    kicker: '年齢カード',
    h1Default: 'あなたは今まで何日生きましたか？',
    h1WithDob: d => `${d.year}年生まれ`,
    youAre: 'あなたは',
    yearsOld: '歳',
    daysLived: '日間生きてきました',
    zodiac: '星座',
    generation: '世代',
    nextBirthday: '次の誕生日',
    shareHeadline: 'カードを共有',
    shareX: 'Xで共有',
    shareFb: 'Facebookで共有',
    shareWa: 'WhatsApp',
    copyLink: 'リンクをコピー',
    copied: 'リンクをコピーしました！',
    cta: '自分の年齢を計算する →',
    ctaNoDob: '年齢計算機を開いて、あなた自身の共有可能なカードを作成しましょう。',
    tweetTpl: d => `地球上で${d.days.toLocaleString('ja-JP')}日間生きてきました🌍 あなたは何日？ datecalc.app/ja/watashi-no-nenrei/`,
    invalidDob: 'URLの日付が無効です。下の計算機でお試しください。',
  },
  ko: {
    title: '나의 나이 — 지금까지 며칠 살았나요? | DateCalc.app',
    metaDesc: '나이를 년, 월, 일, 시, 초 단위로 보고 카드를 공유하세요. ?dob=YYYY-MM-DD로 개인화할 수 있습니다.',
    kicker: '나이 카드',
    h1Default: '지금까지 며칠 살았나요?',
    h1WithDob: d => `${d.year}년생`,
    youAre: '당신은',
    yearsOld: '세',
    daysLived: '일을 살아왔습니다',
    zodiac: '별자리',
    generation: '세대',
    nextBirthday: '다음 생일',
    shareHeadline: '카드 공유',
    shareX: 'X에서 공유',
    shareFb: 'Facebook에서 공유',
    shareWa: 'WhatsApp',
    copyLink: '링크 복사',
    copied: '링크가 복사되었습니다!',
    cta: '내 나이 계산하기 →',
    ctaNoDob: '나이 계산기를 열어 자신만의 공유 가능한 카드를 만드세요.',
    tweetTpl: d => `이 지구에서 ${d.days.toLocaleString('ko-KR')}일을 살아왔습니다 🌍 당신은? datecalc.app/ko/nae-nai/`,
    invalidDob: 'URL의 날짜가 유효하지 않습니다. 아래 계산기를 사용해 보세요.',
  },
  nl: {
    title: 'Mijn leeftijd — Hoeveel dagen heb ik geleefd? | DateCalc.app',
    metaDesc: 'Je leeftijd in jaren, maanden, dagen, uren en seconden — en deel je kaart. Geef ?dob=JJJJ-MM-DD mee om te personaliseren.',
    kicker: 'Leeftijdskaart',
    h1Default: 'Hoeveel dagen heb je geleefd?',
    h1WithDob: d => `Geboren in ${d.year}`,
    youAre: 'Je bent',
    yearsOld: 'jaar oud',
    daysLived: 'geleefde dagen',
    zodiac: 'Sterrenbeeld',
    generation: 'Generatie',
    nextBirthday: 'Volgende verjaardag',
    shareHeadline: 'Deel je kaart',
    shareX: 'Delen op X',
    shareFb: 'Delen op Facebook',
    shareWa: 'WhatsApp',
    copyLink: 'Link kopiëren',
    copied: 'Link gekopieerd!',
    cta: 'Bereken je eigen leeftijd →',
    ctaNoDob: 'Open de leeftijdscalculator om je eigen deelbare kaart te genereren.',
    tweetTpl: d => `Ik heb ${d.days.toLocaleString('nl-NL')} dagen op deze planeet geleefd 🌍 Bereken de jouwe op datecalc.app/nl/mijn-leeftijd/`,
    invalidDob: 'De datum in de URL is niet geldig. Probeer de calculator hieronder.',
  },
};

function hreflangTags() {
  const out = LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="https://datecalc.app/${SLUGS[l]}/">`);
  out.push(`<link rel="alternate" hreflang="x-default" href="https://datecalc.app/${SLUGS.en}/">`);
  return out.join('\n');
}

function clientScript(lang) {
  const t = T[lang];
  // tweet template is a function — we render its source-string into the script
  const tweetTplStr = t.tweetTpl.toString();
  return `
(function(){
  var T = ${JSON.stringify({
    youAre: t.youAre, yearsOld: t.yearsOld, daysLived: t.daysLived,
    zodiac: t.zodiac, generation: t.generation, nextBirthday: t.nextBirthday,
    shareX: t.shareX, copyLink: t.copyLink, copied: t.copied,
    invalidDob: t.invalidDob,
  })};
  var tweetTpl = ${tweetTplStr};
  var params = new URLSearchParams(location.search);
  var dobRaw = params.get('dob') || '';
  var m = dobRaw.match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
  var card = document.getElementById('age-card');
  var noDob = document.getElementById('no-dob');
  var invalid = document.getElementById('invalid-dob');
  if (!m) { card.hidden = true; noDob.hidden = false; return; }
  var year = +m[1], month = +m[2], day = +m[3];
  var dob = new Date(year, month - 1, day);
  if (isNaN(dob.getTime()) || dob.getFullYear() !== year) {
    card.hidden = true; invalid.hidden = false; return;
  }
  var now = new Date();
  var ageY = now.getFullYear() - year - ((now.getMonth() < month - 1 || (now.getMonth() === month - 1 && now.getDate() < day)) ? 1 : 0);
  var msPerDay = 86400000;
  var days = Math.floor((now - dob) / msPerDay);
  var zodiacs = [
    ['Capricorn', 1, 19], ['Aquarius', 2, 18], ['Pisces', 3, 20], ['Aries', 4, 19],
    ['Taurus', 5, 20], ['Gemini', 6, 20], ['Cancer', 7, 22], ['Leo', 8, 22],
    ['Virgo', 9, 22], ['Libra', 10, 22], ['Scorpio', 11, 21], ['Sagittarius', 12, 21], ['Capricorn', 12, 31]
  ];
  var z = 'Capricorn';
  for (var i = 0; i < zodiacs.length; i++) { if (month < zodiacs[i][1] || (month === zodiacs[i][1] && day <= zodiacs[i][2])) { z = zodiacs[i][0]; break; } }
  var gens = [
    [1928, 'Silent'], [1946, 'Baby Boomer'], [1965, 'Gen X'],
    [1981, 'Millennial'], [1997, 'Gen Z'], [2013, 'Gen Alpha'],
  ];
  var gen = 'Gen Alpha';
  for (var j = 0; j < gens.length; j++) { if (year < gens[j][0]) { gen = j === 0 ? 'Lost' : gens[j-1][1]; break; } if (j === gens.length - 1) gen = gens[j][1]; }
  var next = new Date(now.getFullYear(), month - 1, day);
  if (next < now) next.setFullYear(next.getFullYear() + 1);
  var daysUntilBday = Math.ceil((next - now) / msPerDay);
  // Populate the DOM
  document.getElementById('ac-age').textContent = ageY;
  document.getElementById('ac-age-label').textContent = T.yearsOld;
  document.getElementById('ac-days').textContent = days.toLocaleString('${lang === 'pt' ? 'pt-BR' : lang === 'ja' ? 'ja-JP' : lang === 'ko' ? 'ko-KR' : lang === 'en' ? 'en-US' : lang + '-' + lang.toUpperCase()}');
  document.getElementById('ac-days-label').textContent = T.daysLived;
  document.getElementById('ac-zodiac-v').textContent = z;
  document.getElementById('ac-zodiac-l').textContent = T.zodiac;
  document.getElementById('ac-gen-v').textContent = gen;
  document.getElementById('ac-gen-l').textContent = T.generation;
  document.getElementById('ac-bday-v').textContent = daysUntilBday;
  document.getElementById('ac-bday-l').textContent = T.nextBirthday;
  document.title = T.youAre + ' ' + ageY + ' ' + T.yearsOld + ' — DateCalc.app';
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = T.youAre + ' ' + ageY + ' ' + T.yearsOld + ' · ' + days.toLocaleString() + ' ' + T.daysLived + ' · ' + gen;
  // Share buttons
  var shareUrl = location.href;
  var tweet = tweetTpl({ year: year, age: ageY, days: days, gen: gen, zodiac: z });
  var xBtn = document.getElementById('share-x');
  if (xBtn) xBtn.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
  var fbBtn = document.getElementById('share-fb');
  if (fbBtn) fbBtn.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);
  var waBtn = document.getElementById('share-wa');
  if (waBtn) waBtn.href = 'https://wa.me/?text=' + encodeURIComponent(tweet);
  var copyBtn = document.getElementById('share-copy');
  if (copyBtn) copyBtn.addEventListener('click', function(e){
    e.preventDefault();
    navigator.clipboard && navigator.clipboard.writeText(shareUrl).then(function(){
      var o = copyBtn.textContent; copyBtn.textContent = T.copied;
      setTimeout(function(){ copyBtn.textContent = o; }, 2000);
    });
  });
})();`;
}

function renderMyAgeHTML(lang) {
  const t = T[lang];
  const canonical = `https://datecalc.app/${SLUGS[lang]}/`;
  const latinPreload = (lang === 'ja' || lang === 'ko') ? '' : `<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="index, follow">
<title>${t.title}</title>
<meta name="description" content="${t.metaDesc}">
<link rel="canonical" href="${canonical}">
${hreflangTags()}
<meta property="og:type" content="website">
<meta property="og:title" content="${t.title}">
<meta property="og:description" content="${t.metaDesc}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="https://datecalc.app/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${t.title}">
<meta name="twitter:description" content="${t.metaDesc}">
<meta name="twitter:image" content="https://datecalc.app/og.png">
${latinPreload}
<link rel="stylesheet" href="/style.css">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header><div class="masthead"><a href="${lang === 'en' ? '/' : '/' + lang + '/'}" class="masthead-brand">DateCalc<span>.</span>app</a></div></header>
<div class="page">
<main id="main-content" class="my-age">
  <p class="kicker">${t.kicker}</p>
  <h1 id="my-age-h1">${t.h1Default}</h1>

  <div id="age-card" class="age-card" hidden>
    <div class="ac-main"><span class="ac-num" id="ac-age">—</span><span class="ac-lbl" id="ac-age-label">${t.yearsOld}</span></div>
    <div class="ac-sub"><span class="ac-num" id="ac-days">—</span><span class="ac-lbl" id="ac-days-label">${t.daysLived}</span></div>
    <div class="ac-grid">
      <div><span class="ac-chip-l" id="ac-zodiac-l">${t.zodiac}</span><span class="ac-chip-v" id="ac-zodiac-v">—</span></div>
      <div><span class="ac-chip-l" id="ac-gen-l">${t.generation}</span><span class="ac-chip-v" id="ac-gen-v">—</span></div>
      <div><span class="ac-chip-l" id="ac-bday-l">${t.nextBirthday}</span><span class="ac-chip-v" id="ac-bday-v">—</span></div>
    </div>
    <h2>${t.shareHeadline}</h2>
    <div class="share-row">
      <a id="share-x" href="#" target="_blank" rel="noopener noreferrer">${t.shareX}</a>
      <a id="share-fb" href="#" target="_blank" rel="noopener noreferrer">${t.shareFb}</a>
      <a id="share-wa" href="#" target="_blank" rel="noopener noreferrer">${t.shareWa}</a>
      <button id="share-copy" type="button">${t.copyLink}</button>
    </div>
    <p class="my-age-cta"><a href="${AGE_CALC_HREF[lang]}">${t.cta}</a></p>
  </div>

  <div id="no-dob" class="my-age-empty">
    <p>${t.ctaNoDob}</p>
    <p><a href="${AGE_CALC_HREF[lang]}" class="cta-btn">${t.cta}</a></p>
  </div>

  <div id="invalid-dob" class="my-age-empty" hidden>
    <p>${t.invalidDob}</p>
    <p><a href="${AGE_CALC_HREF[lang]}" class="cta-btn">${t.cta}</a></p>
  </div>
</main>
<style>
.my-age{max-width:680px;margin:2rem auto;padding:0 1.5rem}
.my-age .kicker{color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-size:.78rem;margin:0 0 .4rem;font-family:'Space Mono',monospace}
.my-age h1{font-family:'Playfair Display',serif;font-size:2rem;margin:0 0 1.6rem}
.age-card{border:1px solid #ddd;border-radius:6px;padding:1.8rem 1.4rem;background:#fafafa}
.ac-main{display:flex;align-items:baseline;gap:.6rem;margin-bottom:.4rem}
.ac-num{font-family:'Playfair Display',serif;font-size:3.2rem;line-height:1;color:var(--accent)}
.ac-lbl{color:#333;font-size:1rem}
.ac-sub{display:flex;align-items:baseline;gap:.5rem;margin-bottom:1.4rem;font-family:'Space Mono',monospace}
.ac-sub .ac-num{font-size:1.4rem;color:#111}
.ac-sub .ac-lbl{font-size:.88rem;color:#666}
.ac-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin-bottom:1.6rem}
.ac-grid>div{border:1px solid #e5e5e5;padding:.6rem .7rem;border-radius:3px;background:#fff}
.ac-chip-l{display:block;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#888;margin-bottom:.2rem}
.ac-chip-v{display:block;font-family:'Playfair Display',serif;font-size:1.1rem;color:#111}
.age-card h2{font-family:'Playfair Display',serif;font-size:1.1rem;margin:1.4rem 0 .6rem}
.share-row{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.2rem}
.share-row a,.share-row button{display:inline-block;padding:.5rem .8rem;border:1px solid var(--accent);background:#fff;color:var(--accent);text-decoration:none;font-family:'Space Mono',monospace;font-size:.82rem;cursor:pointer;border-radius:3px}
.share-row a:hover,.share-row button:hover{background:var(--accent);color:#fff}
.my-age-cta{margin-top:1rem;font-family:'Space Mono',monospace;font-size:.88rem}
.my-age-cta a{color:var(--accent)}
.my-age-empty{margin:1rem 0 3rem;color:#333;line-height:1.6}
.my-age-empty .cta-btn{display:inline-block;padding:.6rem 1rem;background:var(--accent);color:#fff;text-decoration:none;border-radius:3px;font-family:'Space Mono',monospace;font-size:.88rem;margin-top:.4rem}
@media(max-width:600px){.ac-grid{grid-template-columns:1fr}.ac-num{font-size:2.5rem}}
</style>
<footer style="max-width:680px;margin:2rem auto;padding:0 1.5rem;font-size:.82rem;color:#888">© 2026 DateCalc.app · <a href="${lang === 'en' ? '/about/' : '/' + lang + '/'}" style="color:#888">About</a></footer>
</div>
<script>${clientScript(lang)}</script>
</body>
</html>`;
}

function sitemapGroup() {
  return LANGS.map(l => ({ lang: l, path: `/${SLUGS[l]}/` }));
}

module.exports = {
  LANGS,
  SLUGS,
  renderMyAgeHTML,
  sitemapGroup,
};
