// Author page (/authors/mike/) + 9 translations. Also provides the article
// signature and the footer tagline used site-wide for E-E-A-T / HCU resilience.

const LANGS = ['en', 'fr', 'es', 'pt', 'de', 'it', 'pl', 'ja', 'ko', 'nl'];

const MIKE_SLUGS = {
  en: 'authors/mike',
  fr: 'fr/auteurs/mike',
  es: 'es/autores/mike',
  pt: 'pt/autores/mike',
  de: 'de/autoren/mike',
  it: 'it/autori/mike',
  pl: 'pl/autorzy/mike',
  ja: 'ja/authors/mike',
  ko: 'ko/authors/mike',
  nl: 'nl/auteurs/mike',
};

// Per-language bio (~150 words), with a culturally-relevant detail.
const BIO = {
  en: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead developer at DateCalc.app.',
    bio: '<p>Mike is the lead developer behind DateCalc.app. Based in France, obsessed with time zones, date edge cases, and making tools work the same way across 10 languages. Has strong opinions about whether weeks start on Sunday or Monday (answer: Monday, ISO 8601, end of debate), when a day "belongs" to a date (midnight UTC? local midnight? the user\'s phone?), and whether leap seconds deserve a calculator of their own (not yet).</p><p>Before this he shipped tools in enterprise ERP and a couple of consumer apps nobody talks about anymore. DateCalc is the project he kept writing in evenings until it outgrew the side-project label.</p><p>Found a bug, a wrong translation, or a date edge case we got wrong? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Written by the DateCalc team · Last updated April 2026',
    articlesLabel: 'Recent articles',
  },
  fr: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead developer chez DateCalc.app.',
    bio: '<p>Mike est le lead developer derrière DateCalc.app. Basé en France, obsédé par les fuseaux horaires, les cas limites des dates et le fait de faire fonctionner les outils de la même façon dans 10 langues. A des opinions tranchées sur la question de savoir si les semaines commencent le dimanche ou le lundi (réponse : lundi, ISO 8601, fin du débat), sur ce qui détermine à quelle date « appartient » un jour (minuit UTC ? minuit local ? le téléphone de l\'utilisateur ?), et sur le fait que les secondes intercalaires méritent un calculateur (pas encore).</p><p>Avant ça il a livré des outils dans de l\'ERP et deux apps grand public dont plus personne ne parle. DateCalc est le projet qu\'il a continué à écrire le soir jusqu\'à ce qu\'il dépasse le stade du side project.</p><p>Un bug, une traduction foireuse, un cas limite qu\'on a raté ? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Écrit par l\'équipe DateCalc · Mis à jour en avril 2026',
    articlesLabel: 'Articles récents',
  },
  es: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead developer de DateCalc.app.',
    bio: '<p>Mike es el lead developer detrás de DateCalc.app. Con base en Francia, obsesionado con zonas horarias, casos límite de fechas y hacer que las herramientas funcionen exactamente igual en 10 idiomas. Tiene opiniones firmes sobre si las semanas empiezan en domingo o lunes (respuesta: lunes, ISO 8601, fin del debate), sobre a qué fecha "pertenece" un día (¿medianoche UTC? ¿medianoche local? ¿la del teléfono del usuario?) y sobre si los segundos intercalares merecen su propia calculadora (todavía no).</p><p>Antes de esto entregó herramientas en ERP empresarial y un par de apps de consumo de las que ya nadie habla. DateCalc es el proyecto que siguió escribiendo por las noches hasta que se le fue de las manos.</p><p>¿Un bug, una traducción mala, un caso límite que se nos escapó? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Escrito por el equipo de DateCalc · Actualizado en abril de 2026',
    articlesLabel: 'Artículos recientes',
  },
  pt: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead developer do DateCalc.app.',
    bio: '<p>Mike é o lead developer por trás do DateCalc.app. Baseado na França, obcecado por fusos horários, casos limite de datas e fazer com que as ferramentas funcionem exatamente igual em 10 idiomas. Tem opiniões firmes sobre se as semanas começam no domingo ou na segunda (resposta: segunda, ISO 8601, fim do debate), sobre a que data um dia "pertence" (meia-noite UTC? meia-noite local? o telefone do usuário?) e sobre se os segundos intercalares merecem uma calculadora própria (ainda não).</p><p>Antes disso entregou ferramentas em ERP corporativo e algumas apps de consumo de que ninguém mais fala. DateCalc é o projeto que ele continuou escrevendo à noite até virar algo maior do que um side project.</p><p>Um bug, uma tradução errada, um caso limite que passou? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Escrito pela equipe DateCalc · Atualizado em abril de 2026',
    articlesLabel: 'Artigos recentes',
  },
  de: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead Developer bei DateCalc.app.',
    bio: '<p>Mike ist der Lead Developer hinter DateCalc.app. Wohnhaft in Frankreich, besessen von Zeitzonen, Grenzfällen bei Datumsberechnungen und der Idee, dass die Tools in 10 Sprachen genau gleich funktionieren müssen. Hat feste Meinungen dazu, ob Wochen am Sonntag oder Montag beginnen (Antwort: Montag, ISO 8601, Ende der Debatte), zu welchem Datum ein Tag "gehört" (Mitternacht UTC? lokale Mitternacht? das Telefon des Nutzers?) und ob Schaltsekunden einen eigenen Rechner verdienen (noch nicht).</p><p>Davor hat er Tools im Enterprise-ERP-Bereich und ein paar Consumer-Apps abgeliefert, über die niemand mehr spricht. DateCalc ist das Projekt, das er abends immer weiter geschrieben hat, bis es kein Nebenprojekt mehr war.</p><p>Bug gefunden, schlechte Übersetzung, einen Grenzfall übersehen? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Geschrieben vom DateCalc-Team · Aktualisiert April 2026',
    articlesLabel: 'Neueste Artikel',
  },
  it: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead developer di DateCalc.app.',
    bio: '<p>Mike è il lead developer dietro DateCalc.app. Basato in Francia, ossessionato dai fusi orari, dai casi limite delle date e dal far funzionare gli strumenti esattamente allo stesso modo in 10 lingue. Ha opinioni forti sul fatto che le settimane inizino di domenica o di lunedì (risposta: lunedì, ISO 8601, fine del dibattito), su a quale data "appartiene" un giorno (mezzanotte UTC? mezzanotte locale? quella del telefono dell\'utente?), e se i secondi intercalari meritino un proprio calcolatore (non ancora).</p><p>Prima di questo ha spedito strumenti in ERP aziendale e un paio di app consumer di cui non parla più nessuno. DateCalc è il progetto che ha continuato a scrivere la sera finché non ha superato lo stadio del side project.</p><p>Bug trovato, traduzione sbagliata, un caso limite che ci siamo persi? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Scritto dal team DateCalc · Aggiornato ad aprile 2026',
    articlesLabel: 'Articoli recenti',
  },
  pl: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead developer w DateCalc.app.',
    bio: '<p>Mike to lead developer stojący za DateCalc.app. Mieszka we Francji, ma obsesję na punkcie stref czasowych, przypadków brzegowych dat i tego, żeby narzędzia działały dokładnie tak samo w 10 językach. Ma mocne opinie na temat tego, czy tydzień zaczyna się w niedzielę czy w poniedziałek (odpowiedź: poniedziałek, ISO 8601, koniec dyskusji), do której daty "należy" dany dzień (północ UTC? lokalna północ? ta z telefonu użytkownika?) i czy sekundy przestępne zasługują na własny kalkulator (jeszcze nie).</p><p>Wcześniej dostarczał narzędzia w korporacyjnym ERP i kilka aplikacji konsumenckich, o których nikt już nie pamięta. DateCalc to projekt, który pisał wieczorami tak długo, aż przestał być pobocznym projektem.</p><p>Znalazłeś buga, złe tłumaczenie albo przypadek brzegowy, którego nie obsłużyliśmy? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Napisane przez zespół DateCalc · Ostatnia aktualizacja kwiecień 2026',
    articlesLabel: 'Najnowsze artykuły',
  },
  ja: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'DateCalc.appのリードデベロッパー。',
    bio: '<p>MikeはDateCalc.appのリードデベロッパーです。フランス在住。タイムゾーン、日付のエッジケース、そして10言語すべてでツールがまったく同じように動くことに執着しています。週が日曜始まりか月曜始まりか（答え：月曜、ISO 8601、議論終了）、ある「日」がどの日付に属するのか（UTCの深夜？ローカルの深夜？ユーザーの端末の？）、そして閏秒に専用計算機が必要か（まだ必要ない）について、強い意見を持っています。日本の週番号の扱い方に特にこだわっており、日本式（日曜始まり・1月1日を含む週を第1週とする方式）とISO式の両方をサポートしています。</p><p>DateCalcの前はエンタープライズERP向けのツールをいくつか作り、その後誰も話題にしない消費者向けアプリも作っていました。DateCalcは、夜に書き続けていたら副業プロジェクトの枠を超えてしまった、そんなプロジェクトです。</p><p>バグ、翻訳の間違い、見落とされたエッジケースを見つけたら、<a href="mailto:hello@datecalc.app">hello@datecalc.app</a> までお知らせください。</p>',
    signature: 'DateCalcチームが執筆 · 2026年4月最終更新',
    articlesLabel: '最近の記事',
  },
  ko: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'DateCalc.app의 리드 개발자.',
    bio: '<p>Mike는 DateCalc.app을 이끄는 리드 개발자입니다. 프랑스 거주. 시간대, 날짜의 경계 케이스, 그리고 10개 언어 모두에서 도구가 정확히 똑같이 동작하는 것에 집착합니다. 한 주가 일요일에 시작하는지 월요일에 시작하는지(답: 월요일, ISO 8601, 논쟁 종료), 어떤 날이 어느 날짜에 "속하는지"(UTC 자정? 로컬 자정? 사용자 전화기의 자정?), 윤초가 전용 계산기를 가질 만한지(아직은 아니오)에 대해 강한 의견이 있습니다. 한국어 버전에서는 만 나이와 한국식 전통 나이(태어나면 1세, 새해마다 한 살씩 증가)를 모두 지원하는 데 특히 신경 써서 설계했습니다.</p><p>그 전에는 기업용 ERP 도구와 이제 아무도 기억하지 못하는 소비자 앱 몇 개를 만들었습니다. DateCalc은 저녁마다 계속 써내려가다가 사이드 프로젝트의 범주를 넘어선 결과물입니다.</p><p>버그, 잘못된 번역, 놓친 경계 케이스를 발견하셨다면 <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>로 연락 주십시오.</p>',
    signature: 'DateCalc 팀 작성 · 2026년 4월 최종 업데이트',
    articlesLabel: '최근 기사',
  },
  nl: {
    title: 'Mike — DateCalc.app',
    h1: 'Mike',
    lead: 'Lead developer bij DateCalc.app.',
    bio: '<p>Mike is de lead developer achter DateCalc.app. Woont in Frankrijk, geobsedeerd door tijdzones, edge cases van datums en het idee dat de tools in 10 talen exact hetzelfde moeten werken. Heeft uitgesproken meningen over de vraag of weken op zondag of maandag beginnen (antwoord: maandag, ISO 8601, einde discussie), bij welke datum een dag "hoort" (middernacht UTC? lokale middernacht? die van de telefoon van de gebruiker?), en of schrikkelseconden een eigen calculator verdienen (nog niet).</p><p>Daarvoor bouwde hij tools in enterprise-ERP en een paar consumenten-apps waar niemand meer over praat. DateCalc is het project dat hij \'s avonds bleef schrijven tot het het label "sideproject" ontgroeide.</p><p>Bug gevonden, slechte vertaling, een edge case gemist? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.</p>',
    signature: 'Geschreven door het DateCalc-team · Laatst bijgewerkt april 2026',
    articlesLabel: 'Recente artikelen',
  },
};

const FOOTER_TAGLINE = {
  en: 'Made with ♥ by a small team in France',
  fr: 'Fait avec ♥ par une petite équipe en France',
  es: 'Hecho con ♥ por un pequeño equipo en Francia',
  pt: 'Feito com ♥ por uma pequena equipe na França',
  de: 'Mit ♥ von einem kleinen Team in Frankreich',
  it: 'Fatto con ♥ da un piccolo team in Francia',
  pl: 'Zrobione z ♥ przez mały zespół we Francji',
  ja: 'フランスの小さなチームが♥を込めて',
  ko: '프랑스의 작은 팀이 ♥을 담아',
  nl: 'Gemaakt met ♥ door een klein team in Frankrijk',
};

function footerTagline(lang) {
  return `<a href="/${MIKE_SLUGS[lang] || MIKE_SLUGS.en}/" style="display:inline-block;margin-top:.6rem;font-family:'Space Mono',monospace;font-size:.78rem;color:#888;text-decoration:none;border-bottom:1px dotted #bbb">${FOOTER_TAGLINE[lang] || FOOTER_TAGLINE.en}</a>`;
}

function mikeAboutHref(lang) {
  return `/${MIKE_SLUGS[lang]}/`;
}

function articleSignature(lang) {
  const t = BIO[lang] || BIO.en;
  const href = mikeAboutHref(lang);
  return `<div class="article-signature" style="margin:2rem 0 1rem;padding-top:1rem;border-top:1px solid #e5e5e5;font-family:'Space Mono',monospace;font-size:.82rem;color:#666"><a href="${href}" style="color:#666;border-bottom:1px dotted #999;text-decoration:none">${t.signature}</a></div>`;
}

function hreflangTags() {
  const out = LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="https://datecalc.app/${MIKE_SLUGS[l]}/">`);
  out.push(`<link rel="alternate" hreflang="x-default" href="https://datecalc.app/${MIKE_SLUGS.en}/">`);
  return out.join('\n');
}

function personJsonLd(lang) {
  const t = BIO[lang] || BIO.en;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mike",
    "jobTitle": t.lead,
    "url": `https://datecalc.app/${MIKE_SLUGS[lang]}/`,
    "worksFor": { "@type": "Organization", "name": "DateCalc.app", "url": "https://datecalc.app/" },
  }, null, 2);
}

function renderAuthorHTML(lang) {
  const t = BIO[lang] || BIO.en;
  const canonical = `https://datecalc.app/${MIKE_SLUGS[lang]}/`;
  const latinPreload = (lang === 'ja' || lang === 'ko') ? '' : `<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="index, follow">
<title>${t.title}</title>
<meta name="description" content="${t.lead} ${t.bio.replace(/<[^>]+>/g, '').slice(0, 110)}">
<link rel="canonical" href="${canonical}">
${hreflangTags()}
${latinPreload}
<link rel="stylesheet" href="/style.css">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<script type="application/ld+json">
${personJsonLd(lang)}
</script>
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header><div class="masthead"><a href="${lang === 'en' ? '/' : '/' + lang + '/'}" class="masthead-brand">DateCalc<span>.</span>app</a></div></header>
<div class="page">
<main id="main-content" style="max-width:680px;margin:3rem auto;padding:0 1.5rem">
  <div class="author-card">
    <div class="author-avatar" aria-hidden="true">M</div>
    <div class="author-meta"><h1>${t.h1}</h1><p class="author-lead">${t.lead}</p></div>
  </div>
  <div class="author-bio">${t.bio}</div>
</main>
<style>
.author-card{display:flex;gap:1rem;align-items:center;margin:2rem 0}
.author-avatar{width:72px;height:72px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:2rem;flex-shrink:0}
.author-meta h1{font-family:'Playfair Display',serif;font-size:2rem;margin:0}
.author-lead{margin:.2rem 0 0;color:var(--muted);font-size:.92rem}
.author-bio p{line-height:1.7;margin-bottom:.9rem;color:#222}
.author-bio a{color:var(--accent)}
</style>
<footer>© 2026 DateCalc.app · <a href="${lang === 'en' ? '/about/' : '/' + lang + '/'}">DateCalc.app</a></footer>
</div>
</body>
</html>`;
}

function sitemapGroup() {
  return LANGS.map(l => ({ lang: l, path: `/${MIKE_SLUGS[l]}/` }));
}

module.exports = {
  LANGS,
  MIKE_SLUGS,
  BIO,
  FOOTER_TAGLINE,
  footerTagline,
  mikeAboutHref,
  articleSignature,
  renderAuthorHTML,
  personJsonLd,
  sitemapGroup,
};
