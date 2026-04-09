// Born In — Age by Birth Year (1930–2024)
// Generates one static page per birth year × 3 languages = 285 pages

const EVENTS = require('../data/events.json');
const EVENTS_FR = require('../data/events_fr.json');
const EVENTS_ES = require('../data/events_es.json');
const EVENTS_PT = require('../data/events_pt.json');
const EVENTS_DE = require('../data/events_de.json');
const EVENTS_IT = require('../data/events_it.json');
const EVENTS_PL = require('../data/events_pl.json');
const EVENTS_JA = require('../data/events_ja.json');
const EVENTS_KO = require('../data/events_ko.json');
const EVENTS_NL = require('../data/events_nl.json');

// Year images — populated by: node scripts/fetch-year-images.js
const YEAR_IMAGES = (() => {
  try { return require('../data/year-images.json'); } catch(e) { return {}; }
})();

const BIRTH_YEARS = [];
for (let y = 1930; y <= 2024; y++) BIRTH_YEARS.push(y);

const BUILD_YEAR = 2026; // current year at build time

const T = {
  en: {
    titleTpl: 'Born in {year}: How Old Am I? — {age1} Years Old in 2026 | DateCalc.app',
    metaDescTpl: 'Born in {year}? You are {age} or {age1} years old in 2026. From {year} to 2026 is {age1} years. Calculate your exact age to the day.',
    kicker: 'Age by Birth Year',
    headlineTpl: 'Born in<br><em>{year}</em>',
    subheadTpl: 'How old are you in 2026 if you were born in {year}?',
    resultsHeader: 'Your age in 2026',
    heroTpl: '{age}<span class="hero-or"> or </span>{age1}',
    heroSuffix: 'years old',
    explainTpl: 'If you were born in {year}, you turn {age1} in 2026. Before your birthday you are still {age}.',
    exactCta: '→ Calculate your exact age',
    exactHref: '/age-calculator/',
    wTitle: 'The World in {year}',
    wLblEvents: 'Events', wLblMusic: 'Music', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prices',
    wLblBread: 'Bread', wLblGas: 'Gas', wLblHouse: 'House',
    seoH2aTpl: 'How old am I if I was born in {year}?',
    seoP1Tpl: 'If you were born in {year}, you are {age} years old for most of 2026, turning {age1} once your birthday arrives. Your exact age depends on whether your birthday has already passed this year. Someone born on January 1, {year} turns {age1} on January 1, 2026, while someone born on December 31, {year} only turns {age1} on December 31, 2026. Use the age calculator above for your precise age down to the day. People born in {year} have lived through {lived} years of history and belong to the {gen} generation.',
    seoH2bTpl: 'What generation was born in {year}?',
    seoP2Tpl: 'People born in {year} belong to the {gen} generation. This generation grew up during a unique period in history and witnessed major changes in technology, culture, and society. Use the calculator above to find your exact chronological age in years, months, weeks, and days.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Life Expectancy Calculator' },
    faqsTpl: [
      { q: 'How old am I if I was born in {year}?', a: 'If you were born in {year}, you are {age} or {age1} years old in 2026. You turn {age1} on your birthday in 2026. Use the age calculator for your exact age to the day.' },
      { q: 'How many years from {year} to 2026?', a: 'From {year} to 2026 is {age1} years. If your birthday has not yet passed in 2026, you are still {age} years old.' },
      { q: 'What day of the week was I born in {year}?', a: 'The day of the week depends on your specific birth date. Use the age calculator and enter your full date of birth to find out exactly which day of the week you were born.' },
      { q: 'How many days old am I if I was born in {year}?', a: 'Someone born on January 1, {year} has lived approximately {days} days as of January 1, 2026. Your exact number of days depends on your birth date. Enter your date of birth in the age calculator for the precise count.' },
      { q: 'What generation am I if I was born in {year}?', a: 'People born in {year} belong to the {gen} generation. Each generation is shaped by the historical events and cultural trends of their formative years.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    genRanges: [{y:1928,n:'Silent Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
  },
  fr: {
    titleTpl: 'Né en {year} : quel âge ai-je ? — {age1} ans en 2026 | DateCalc.app',
    metaDescTpl: 'Né en {year} ? Vous avez {age} ou {age1} ans en 2026. De {year} à 2026, il y a {age1} ans. Calculez votre âge exact au jour près.',
    kicker: 'Âge par année de naissance',
    headlineTpl: 'Né en<br><em>{year}</em>',
    subheadTpl: 'Quel âge avez-vous en 2026 si vous êtes né en {year} ?',
    resultsHeader: 'Votre âge en 2026',
    heroTpl: '{age}<span class="hero-or"> ou </span>{age1}',
    heroSuffix: 'ans',
    explainTpl: 'Si vous êtes né en {year}, vous avez {age1} ans en 2026. Avant votre anniversaire vous avez encore {age} ans.',
    exactCta: '→ Calculer votre âge exact',
    exactHref: '/fr/calculateur-age/',
    wTitle: 'Le monde en {year}',
    wLblEvents: 'Événements', wLblMusic: 'Musique', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prix',
    wLblBread: 'Pain', wLblGas: 'Essence', wLblHouse: 'Maison',
    seoH2aTpl: 'Quel âge ai-je si je suis né en {year} ?',
    seoP1Tpl: 'Si vous êtes né en {year}, vous avez {age} ans pendant la majeure partie de 2026, et vous fêtez vos {age1} ans à votre anniversaire. Quelqu\'un né le 1er janvier {year} a {age1} ans dès le 1er janvier 2026, tandis que quelqu\'un né le 31 décembre {year} n\'a {age1} ans que le 31 décembre 2026. Utilisez le calculateur d\'âge pour votre âge précis au jour près. Les personnes nées en {year} appartiennent à la génération {gen}.',
    seoH2bTpl: 'Quelle génération est née en {year} ?',
    seoP2Tpl: 'Les personnes nées en {year} appartiennent à la génération {gen}. Cette génération a grandi pendant une période unique de l\'histoire et a été témoin de changements majeurs dans la technologie, la culture et la société.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administration de la Sécurité Sociale – Espérance de vie' },
    faqsTpl: [
      { q: 'Quel âge ai-je si je suis né en {year} ?', a: 'Si vous êtes né en {year}, vous avez {age} ou {age1} ans en 2026. Vous avez {age1} ans à partir de votre anniversaire en 2026.' },
      { q: 'Combien d\'années de {year} à 2026 ?', a: 'De {year} à 2026, il y a {age1} ans. Si votre anniversaire n\'est pas encore passé en 2026, vous avez encore {age} ans.' },
      { q: 'Quel jour de la semaine suis-je né en {year} ?', a: 'Le jour de la semaine dépend de votre date de naissance exacte. Utilisez le calculateur d\'âge en entrant votre date de naissance complète.' },
      { q: 'Combien de jours ai-je si je suis né en {year} ?', a: 'Quelqu\'un né le 1er janvier {year} a vécu environ {days} jours au 1er janvier 2026. Entrez votre date de naissance dans le calculateur pour le décompte précis.' },
      { q: 'De quelle génération suis-je si je suis né en {year} ?', a: 'Les personnes nées en {year} appartiennent à la génération {gen}.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    genRanges: [{y:1928,n:'Génération Silencieuse'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Génération X'},{y:1981,n:'Millénial'},{y:1997,n:'Génération Z'},{y:2013,n:'Génération Alpha'}],
  },
  es: {
    titleTpl: 'Si nací en {year} ¿cuántos años tengo? — {age1} años en 2026 | DateCalc.app',
    metaDescTpl: 'Si naciste en {year}, tienes {age} o {age1} años en 2026. De {year} al 2026 son {age1} años. Calcula tu edad exacta al día.',
    kicker: 'Edad por año de nacimiento',
    headlineTpl: 'Nacido en<br><em>{year}</em>',
    subheadTpl: '¿Cuántos años tienes en 2026 si naciste en {year}?',
    resultsHeader: 'Tu edad en 2026',
    heroTpl: '{age}<span class="hero-or"> o </span>{age1}',
    heroSuffix: 'años',
    explainTpl: 'Si naciste en {year}, cumples {age1} años en 2026. Antes de tu cumpleaños aún tienes {age} años.',
    exactCta: '→ Calcular tu edad exacta',
    exactHref: '/es/calculadora-edad/',
    wTitle: 'El mundo en {year}',
    wLblEvents: 'Eventos', wLblMusic: 'Música', wLblFilm: 'Película', wLblTech: 'Tecnología', wLblPrices: 'Precios',
    wLblBread: 'Pan', wLblGas: 'Gasolina', wLblHouse: 'Casa',
    seoH2aTpl: '¿Cuántos años tengo si nací en {year}?',
    seoP1Tpl: 'Si naciste en {year}, tienes {age} años durante la mayor parte de 2026, cumpliendo {age1} años cuando llega tu cumpleaños. Alguien nacido el 1 de enero de {year} cumple {age1} años el 1 de enero de 2026, mientras que alguien nacido el 31 de diciembre de {year} solo cumple {age1} años el 31 de diciembre de 2026. Las personas nacidas en {year} pertenecen a la generación {gen}.',
    seoH2bTpl: '¿Qué generación nació en {year}?',
    seoP2Tpl: 'Las personas nacidas en {year} pertenecen a la generación {gen}. Esta generación creció durante un período único de la historia y fue testigo de grandes cambios en tecnología, cultura y sociedad.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administración del Seguro Social – Esperanza de vida' },
    faqsTpl: [
      { q: '¿Cuántos años tengo si nací en {year}?', a: 'Si naciste en {year}, tienes {age} o {age1} años en 2026. Cumples {age1} años en tu cumpleaños de 2026.' },
      { q: '¿De {year} al 2026 cuántos años son?', a: 'De {year} al 2026 son {age1} años. Si tu cumpleaños aún no ha pasado en 2026, todavía tienes {age} años.' },
      { q: '¿Qué día de la semana nací en {year}?', a: 'El día de la semana depende de tu fecha de nacimiento exacta. Usa la calculadora de edad ingresando tu fecha completa.' },
      { q: '¿Cuántos días tengo si nací en {year}?', a: 'Alguien nacido el 1 de enero de {year} ha vivido aproximadamente {days} días al 1 de enero de 2026.' },
      { q: '¿De qué generación soy si nací en {year}?', a: 'Las personas nacidas en {year} pertenecen a la generación {gen}.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    genRanges: [{y:1928,n:'Generación Silenciosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generación X'},{y:1981,n:'Millennial'},{y:1997,n:'Generación Z'},{y:2013,n:'Generación Alfa'}],
  },
  pt: {
    titleTpl: 'Nascido em {year}: Quantos Anos Tenho? — {age1} Anos em 2026',
    metaDescTpl: 'Nascido em {year}? Você tem {age} ou {age1} anos em 2026. De {year} a 2026 são {age1} anos. Calcule sua idade exata ao dia.',
    kicker: 'Idade por Ano de Nascimento',
    headlineTpl: 'Nascido em<br><em>{year}</em>',
    subheadTpl: 'Quantos anos você tem em 2026 se nasceu em {year}?',
    resultsHeader: 'Sua idade em 2026',
    heroTpl: '{age}<span class="hero-or"> ou </span>{age1}',
    heroSuffix: 'anos',
    explainTpl: 'Se você nasceu em {year}, faz {age1} anos em 2026. Antes do seu aniversário você ainda tem {age} anos.',
    exactCta: '→ Calcular sua idade exata',
    exactHref: '/pt/calculadora-de-idade/',
    wTitle: 'O Mundo em {year}',
    wLblEvents: 'Eventos', wLblMusic: 'Música', wLblFilm: 'Filme', wLblTech: 'Tecnologia', wLblPrices: 'Preços',
    wLblBread: 'Pão', wLblGas: 'Gasolina', wLblHouse: 'Casa',
    seoH2aTpl: 'Quantos anos tenho se nasci em {year}?',
    seoP1Tpl: 'Se você nasceu em {year}, tem {age} anos durante a maior parte de 2026, completando {age1} anos quando chegar seu aniversário. Alguém nascido em 1º de janeiro de {year} faz {age1} anos em 1º de janeiro de 2026, enquanto alguém nascido em 31 de dezembro de {year} só faz {age1} anos em 31 de dezembro de 2026. As pessoas nascidas em {year} pertencem à geração {gen}.',
    seoH2bTpl: 'Qual geração nasceu em {year}?',
    seoP2Tpl: 'As pessoas nascidas em {year} pertencem à geração {gen}. Use a calculadora acima para encontrar sua idade exata em anos, meses, semanas e dias.',
    faqTitle: 'Perguntas frequentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Expectativa de vida' },
    faqsTpl: [
      { q: 'Quantos anos tenho se nasci em {year}?', a: 'Se você nasceu em {year}, tem {age} ou {age1} anos em 2026. Você faz {age1} anos no seu aniversário de 2026.' },
      { q: 'Quantos anos de {year} a 2026?', a: 'De {year} a 2026 são {age1} anos. Se seu aniversário ainda não passou em 2026, você ainda tem {age} anos.' },
      { q: 'Em que dia da semana nasci em {year}?', a: 'O dia da semana depende da sua data de nascimento exata. Use a calculadora de idade inserindo sua data completa.' },
      { q: 'Quantos dias tenho de vida se nasci em {year}?', a: 'Alguém nascido em 1º de janeiro de {year} viveu aproximadamente {days} dias até 1º de janeiro de 2026. Insira sua data de nascimento na calculadora para a contagem precisa.' },
      { q: 'De que geração sou se nasci em {year}?', a: 'As pessoas nascidas em {year} pertencem à geração {gen}.' },
    ],
    weekDays: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    genRanges: [{y:1928,n:'Geração Silenciosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Geração X'},{y:1981,n:'Millennial'},{y:1997,n:'Geração Z'},{y:2013,n:'Geração Alpha'}],
  },
  de: {
    titleTpl: 'Geboren {year}: Wie alt bin ich? — {age1} Jahre alt 2026',
    metaDescTpl: 'Geboren {year}? Du bist {age} oder {age1} Jahre alt im Jahr 2026. Von {year} bis 2026 sind es {age1} Jahre. Berechne dein genaues Alter.',
    kicker: 'Alter nach Geburtsjahr',
    headlineTpl: 'Geboren<br><em>{year}</em>',
    subheadTpl: 'Wie alt bist du 2026, wenn du {year} geboren wurdest?',
    resultsHeader: 'Dein Alter 2026',
    heroTpl: '{age}<span class="hero-or"> oder </span>{age1}',
    heroSuffix: 'Jahre alt',
    explainTpl: 'Wenn du {year} geboren wurdest, wirst du 2026 {age1} Jahre alt. Vor deinem Geburtstag bist du noch {age} Jahre alt.',
    exactCta: '→ Genaues Alter berechnen',
    exactHref: '/de/altersrechner/',
    wTitle: 'Die Welt im Jahr {year}',
    wLblEvents: 'Ereignisse', wLblMusic: 'Musik', wLblFilm: 'Film', wLblTech: 'Technologie', wLblPrices: 'Preise',
    wLblBread: 'Brot', wLblGas: 'Benzin', wLblHouse: 'Haus',
    seoH2aTpl: 'Wie alt bin ich, wenn ich {year} geboren wurde?',
    seoP1Tpl: 'Wenn du {year} geboren wurdest, bist du 2026 die meiste Zeit {age} Jahre alt und wirst {age1} Jahre alt, sobald dein Geburtstag kommt. Die Personen, die {year} geboren wurden, gehören zur Generation {gen}.',
    seoH2bTpl: 'Welche Generation wurde {year} geboren?',
    seoP2Tpl: 'Personen, die {year} geboren wurden, gehören zur Generation {gen}. Verwende den Rechner oben, um dein genaues Alter in Jahren, Monaten, Wochen und Tagen zu berechnen.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Lebenserwartungsrechner' },
    faqsTpl: [
      { q: 'Wie alt bin ich, wenn ich {year} geboren wurde?', a: 'Wenn du {year} geboren wurdest, bist du 2026 {age} oder {age1} Jahre alt. Du wirst {age1} Jahre alt an deinem Geburtstag 2026.' },
      { q: 'Wie viele Jahre sind es von {year} bis 2026?', a: 'Von {year} bis 2026 sind es {age1} Jahre. Wenn dein Geburtstag 2026 noch nicht war, bist du noch {age} Jahre alt.' },
      { q: 'An welchem Wochentag wurde ich {year} geboren?', a: 'Der Wochentag hängt von deinem genauen Geburtsdatum ab. Nutze den Altersrechner und gib dein vollständiges Geburtsdatum ein.' },
      { q: 'Wie viele Tage alt bin ich, wenn ich {year} geboren wurde?', a: 'Jemand, der am 1. Januar {year} geboren wurde, hat bis zum 1. Januar 2026 ungefähr {days} Tage gelebt. Gib dein Geburtsdatum im Rechner ein für die genaue Zahl.' },
      { q: 'Welcher Generation gehöre ich an, wenn ich {year} geboren wurde?', a: 'Personen, die {year} geboren wurden, gehören zur Generation {gen}.' },
    ],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    genRanges: [{y:1928,n:'Stille Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
  },
  it: {
    titleTpl: 'Nato nel {year}: Quanti Anni Ho? — {age1} Anni nel 2026',
    metaDescTpl: 'Nato nel {year}? Hai {age} o {age1} anni nel 2026. Dal {year} al 2026 sono {age1} anni. Calcola la tua età esatta al giorno.',
    kicker: 'Età per Anno di Nascita',
    headlineTpl: 'Nato nel<br><em>{year}</em>',
    subheadTpl: 'Quanti anni hai nel 2026 se sei nato nel {year}?',
    resultsHeader: 'La tua età nel 2026',
    heroTpl: '{age}<span class="hero-or"> o </span>{age1}',
    heroSuffix: 'anni',
    explainTpl: 'Se sei nato nel {year}, compi {age1} anni nel 2026. Prima del tuo compleanno hai ancora {age} anni.',
    exactCta: '→ Calcola la tua età esatta',
    exactHref: '/it/calcolo-eta/',
    wTitle: 'Il Mondo nel {year}',
    wLblEvents: 'Eventi', wLblMusic: 'Musica', wLblFilm: 'Film', wLblTech: 'Tecnologia', wLblPrices: 'Prezzi',
    wLblBread: 'Pane', wLblGas: 'Benzina', wLblHouse: 'Casa',
    seoH2aTpl: 'Quanti anni ho se sono nato nel {year}?',
    seoP1Tpl: 'Se sei nato nel {year}, hai {age} anni per la maggior parte del 2026, compiendo {age1} anni quando arriva il tuo compleanno. Le persone nate nel {year} appartengono alla generazione {gen}.',
    seoH2bTpl: 'Quale generazione è nata nel {year}?',
    seoP2Tpl: 'Le persone nate nel {year} appartengono alla generazione {gen}. Usa il calcolatore sopra per trovare la tua età esatta in anni, mesi, settimane e giorni.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Calcolatore Aspettativa di Vita' },
    faqsTpl: [
      { q: 'Quanti anni ho se sono nato nel {year}?', a: 'Se sei nato nel {year}, hai {age} o {age1} anni nel 2026. Compi {age1} anni al tuo compleanno del 2026.' },
      { q: 'Quanti anni dal {year} al 2026?', a: 'Dal {year} al 2026 sono {age1} anni. Se il tuo compleanno non è ancora passato nel 2026, hai ancora {age} anni.' },
      { q: 'In che giorno della settimana sono nato nel {year}?', a: 'Il giorno della settimana dipende dalla tua data di nascita esatta. Usa il calcolatore di età inserendo la tua data completa.' },
      { q: 'Quanti giorni ho vissuto se sono nato nel {year}?', a: 'Qualcuno nato il 1° gennaio {year} ha vissuto circa {days} giorni fino al 1° gennaio 2026. Inserisci la tua data di nascita nel calcolatore per il conteggio preciso.' },
      { q: 'A quale generazione appartengo se sono nato nel {year}?', a: 'Le persone nate nel {year} appartengono alla generazione {gen}.' },
    ],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    genRanges: [{y:1928,n:'Generazione Silenziosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generazione X'},{y:1981,n:'Millennial'},{y:1997,n:'Generazione Z'},{y:2013,n:'Generazione Alpha'}],
  },
  pl: {
    titleTpl: 'Urodzony w {year}: Ile Mam Lat? — {age1} Lat w 2026',
    metaDescTpl: 'Urodzony w {year}? Masz {age} lub {age1} lat w 2026 roku. Od {year} do 2026 to {age1} lat. Oblicz swój dokładny wiek.',
    kicker: 'Wiek według Roku Urodzenia',
    headlineTpl: 'Urodzony w<br><em>{year}</em>',
    subheadTpl: 'Ile masz lat w 2026, jeśli urodziłeś się w {year}?',
    resultsHeader: 'Twój wiek w 2026',
    heroTpl: '{age}<span class="hero-or"> lub </span>{age1}',
    heroSuffix: 'lat',
    explainTpl: 'Jeśli urodziłeś się w {year}, kończysz {age1} lat w 2026. Przed swoimi urodzinami masz jeszcze {age} lat.',
    exactCta: '→ Oblicz swój dokładny wiek',
    exactHref: '/pl/kalkulator-wieku/',
    wTitle: 'Świat w {year} roku',
    wLblEvents: 'Wydarzenia', wLblMusic: 'Muzyka', wLblFilm: 'Film', wLblTech: 'Technologia', wLblPrices: 'Ceny',
    wLblBread: 'Chleb', wLblGas: 'Benzyna', wLblHouse: 'Dom',
    seoH2aTpl: 'Ile mam lat, jeśli urodziłem się w {year}?',
    seoP1Tpl: 'Jeśli urodziłeś się w {year}, przez większą część 2026 roku masz {age} lat i kończysz {age1} lat w dniu urodzin. Osoby urodzone w {year} należą do pokolenia {gen}.',
    seoH2bTpl: 'Jakie pokolenie urodziło się w {year}?',
    seoP2Tpl: 'Osoby urodzone w {year} należą do pokolenia {gen}. Użyj kalkulatora powyżej, aby znaleźć swój dokładny wiek w latach, miesiącach, tygodniach i dniach.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Kalkulator Oczekiwanej Długości Życia' },
    faqsTpl: [
      { q: 'Ile mam lat, jeśli urodziłem się w {year}?', a: 'Jeśli urodziłeś się w {year}, masz {age} lub {age1} lat w 2026 roku. Kończysz {age1} lat w dniu swoich urodzin w 2026.' },
      { q: 'Ile lat od {year} do 2026?', a: 'Od {year} do 2026 to {age1} lat. Jeśli twoje urodziny jeszcze nie minęły w 2026, masz jeszcze {age} lat.' },
      { q: 'W jaki dzień tygodnia urodziłem się w {year}?', a: 'Dzień tygodnia zależy od twojej dokładnej daty urodzenia. Użyj kalkulatora wieku, wprowadzając pełną datę urodzenia.' },
      { q: 'Ile dni żyję, jeśli urodziłem się w {year}?', a: 'Ktoś urodzony 1 stycznia {year} przeżył do 1 stycznia 2026 roku około {days} dni. Wprowadź datę urodzenia w kalkulatorze, aby uzyskać dokładną liczbę.' },
      { q: 'Do jakiego pokolenia należę, jeśli urodziłem się w {year}?', a: 'Osoby urodzone w {year} należą do pokolenia {gen}.' },
    ],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    genRanges: [{y:1928,n:'Ciche Pokolenie'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Pokolenie X'},{y:1981,n:'Millennial'},{y:1997,n:'Pokolenie Z'},{y:2013,n:'Pokolenie Alpha'}],
  },
  ja: {
    titleTpl: '{year}年生まれ: 2026年で何歳？— {age1}歳',
    metaDescTpl: '{year}年生まれ？2026年に{age}歳または{age1}歳です。{year}年から2026年まで{age1}年。正確な年齢を計算しましょう。',
    kicker: '生まれ年別年齢',
    headlineTpl: '{year}年<br><em>生まれ</em>',
    subheadTpl: '{year}年生まれは2026年に何歳？',
    resultsHeader: '2026年でのあなたの年齢',
    heroTpl: '{age}<span class="hero-or"> または </span>{age1}',
    heroSuffix: '歳',
    explainTpl: '{year}年生まれの場合、2026年に{age1}歳になります。誕生日前は{age}歳です。',
    exactCta: '→ 正確な年齢を計算する',
    exactHref: '/ja/nenrei-keisanki/',
    wTitle: '{year}年の世界',
    wLblEvents: '出来事', wLblMusic: '音楽', wLblFilm: '映画', wLblTech: 'テクノロジー', wLblPrices: '物価',
    wLblBread: 'パン', wLblGas: 'ガソリン', wLblHouse: '住宅',
    seoH2aTpl: '{year}年生まれは何歳ですか？',
    seoP1Tpl: '{year}年生まれの場合、2026年の大部分は{age}歳で、誕生日に{age1}歳になります。{year}年生まれは{gen}に属します。',
    seoH2bTpl: '{year}年生まれはどの世代ですか？',
    seoP2Tpl: '{year}年生まれは{gen}に属します。上の計算機を使って、年・月・週・日単位での正確な年齢を調べてください。',
    faqTitle: 'よくある質問',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: '米国社会保障局 – 平均余命計算機' },
    faqsTpl: [
      { q: '{year}年生まれは何歳ですか？', a: '{year}年生まれの場合、2026年に{age}歳または{age1}歳です。2026年の誕生日に{age1}歳になります。' },
      { q: '{year}年から2026年は何年？', a: '{year}年から2026年は{age1}年です。2026年にまだ誕生日が来ていない場合は{age}歳です。' },
      { q: '{year}年生まれの誕生日は何曜日？', a: '曜日は正確な生年月日によって異なります。年齢計算機に完全な生年月日を入力して確認してください。' },
      { q: '{year}年生まれは何日生きていますか？', a: '{year}年1月1日生まれの人は2026年1月1日までに約{days}日生きています。計算機に生年月日を入力して正確な数を確認してください。' },
      { q: '{year}年生まれはどの世代ですか？', a: '{year}年生まれは{gen}に属します。' },
    ],
    weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    genRanges: [{y:1928,n:'沈黙の世代'},{y:1946,n:'ベビーブーマー'},{y:1965,n:'X世代'},{y:1981,n:'ミレニアル世代'},{y:1997,n:'Z世代'},{y:2013,n:'アルファ世代'}],
  },
  ko: {
    titleTpl: '{year}년생: 2026년에 몇 살? — {age1}세',
    metaDescTpl: '{year}년생? 2026년에 {age}세 또는 {age1}세입니다. {year}년부터 2026년까지 {age1}년. 정확한 나이를 계산하세요.',
    kicker: '출생연도별 나이',
    headlineTpl: '{year}년<br><em>생</em>',
    subheadTpl: '{year}년생은 2026년에 몇 살인가요?',
    resultsHeader: '2026년 나이',
    heroTpl: '{age}<span class="hero-or"> 또는 </span>{age1}',
    heroSuffix: '세',
    explainTpl: '{year}년생이라면 2026년에 {age1}세가 됩니다. 생일 전에는 {age}세입니다.',
    exactCta: '→ 정확한 나이 계산하기',
    exactHref: '/ko/nai-gyesan-gi/',
    wTitle: '{year}년의 세상',
    wLblEvents: '사건', wLblMusic: '음악', wLblFilm: '영화', wLblTech: '기술', wLblPrices: '물가',
    wLblBread: '빵', wLblGas: '휘발유', wLblHouse: '주택',
    seoH2aTpl: '{year}년생은 몇 살인가요?',
    seoP1Tpl: '{year}년생이라면 2026년 대부분 {age}세이며 생일에 {age1}세가 됩니다. {year}년생은 {gen}에 속합니다.',
    seoH2bTpl: '{year}년생은 어느 세대인가요?',
    seoP2Tpl: '{year}년생은 {gen}에 속합니다. 위 계산기를 사용해 연·월·주·일 단위 정확한 나이를 확인하세요.',
    faqTitle: '자주 묻는 질문',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: '미국 사회보장청 – 기대수명 계산기' },
    faqsTpl: [
      { q: '{year}년생은 몇 살인가요?', a: '{year}년생이라면 2026년에 {age}세 또는 {age1}세입니다. 2026년 생일에 {age1}세가 됩니다.' },
      { q: '{year}년부터 2026년까지 몇 년인가요?', a: '{year}년부터 2026년까지 {age1}년입니다. 2026년 생일이 아직 지나지 않았다면 {age}세입니다.' },
      { q: '{year}년생의 생일은 무슨 요일인가요?', a: '요일은 정확한 생년월일에 따라 다릅니다. 나이 계산기에 전체 생년월일을 입력해 확인하세요.' },
      { q: '{year}년생은 며칠 살았나요?', a: '{year}년 1월 1일생은 2026년 1월 1일까지 약 {days}일을 살았습니다. 계산기에 생년월일을 입력해 정확한 수를 확인하세요.' },
      { q: '{year}년생은 어느 세대인가요?', a: '{year}년생은 {gen}에 속합니다.' },
    ],
    weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    genRanges: [{y:1928,n:'침묵의 세대'},{y:1946,n:'베이비붐 세대'},{y:1965,n:'X세대'},{y:1981,n:'밀레니얼 세대'},{y:1997,n:'Z세대'},{y:2013,n:'알파 세대'}],
  },
  nl: {
    titleTpl: 'Geboren in {year}: Hoe Oud Ben Ik? — {age1} Jaar in 2026',
    metaDescTpl: 'Geboren in {year}? Je bent {age} of {age1} jaar in 2026. Van {year} tot 2026 is {age1} jaar. Bereken je exacte leeftijd.',
    kicker: 'Leeftijd per Geboortejaar',
    headlineTpl: 'Geboren in<br><em>{year}</em>',
    subheadTpl: 'Hoe oud ben je in 2026 als je geboren bent in {year}?',
    resultsHeader: 'Jouw leeftijd in 2026',
    heroTpl: '{age}<span class="hero-or"> of </span>{age1}',
    heroSuffix: 'jaar',
    explainTpl: 'Als je geboren bent in {year}, word je {age1} jaar in 2026. Vóór je verjaardag ben je nog {age} jaar.',
    exactCta: '→ Bereken je exacte leeftijd',
    exactHref: '/nl/leeftijdscalculator/',
    wTitle: 'De Wereld in {year}',
    wLblEvents: 'Gebeurtenissen', wLblMusic: 'Muziek', wLblFilm: 'Film', wLblTech: 'Technologie', wLblPrices: 'Prijzen',
    wLblBread: 'Brood', wLblGas: 'Benzine', wLblHouse: 'Huis',
    seoH2aTpl: 'Hoe oud ben ik als ik geboren ben in {year}?',
    seoP1Tpl: 'Als je geboren bent in {year}, ben je het grootste deel van 2026 {age} jaar en word je {age1} jaar op je verjaardag. Mensen geboren in {year} behoren tot de {gen}.',
    seoH2bTpl: 'Tot welke generatie behoren mensen geboren in {year}?',
    seoP2Tpl: 'Mensen geboren in {year} behoren tot de {gen}. Gebruik de calculator hierboven om je exacte leeftijd in jaren, maanden, weken en dagen te vinden.',
    faqTitle: 'Veelgestelde vragen',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Levensverwachtingscalculator' },
    faqsTpl: [
      { q: 'Hoe oud ben ik als ik geboren ben in {year}?', a: 'Als je geboren bent in {year}, ben je {age} of {age1} jaar in 2026. Je wordt {age1} jaar op je verjaardag in 2026.' },
      { q: 'Hoeveel jaar is het van {year} tot 2026?', a: 'Van {year} tot 2026 is {age1} jaar. Als je verjaardag nog niet is geweest in 2026, ben je nog {age} jaar.' },
      { q: 'Op welke dag van de week ben ik geboren in {year}?', a: 'De dag van de week hangt af van je exacte geboortedatum. Gebruik de leeftijdscalculator met je volledige geboortedatum om dit te controleren.' },
      { q: 'Hoeveel dagen heb ik geleefd als ik geboren ben in {year}?', a: 'Iemand geboren op 1 januari {year} heeft tot 1 januari 2026 ongeveer {days} dagen geleefd. Voer je geboortedatum in de calculator in voor het exacte getal.' },
      { q: 'Tot welke generatie behoor ik als ik geboren ben in {year}?', a: 'Mensen geboren in {year} behoren tot de {gen}.' },
    ],
    weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
    genRanges: [{y:1928,n:'Stille Generatie'},{y:1946,n:'Babyboomers'},{y:1965,n:'Generatie X'},{y:1981,n:'Millennials'},{y:1997,n:'Generatie Z'},{y:2013,n:'Generatie Alpha'}],
  },
};

// Helper: replace all template tokens in a string
function tpl(str, vars) {
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : '{' + k + '}'));
}

// Helper: replace all template tokens in every string leaf of an object/array
function tplDeep(val, vars) {
  if (typeof val === 'string') return tpl(val, vars);
  if (Array.isArray(val)) return val.map(item => tplDeep(item, vars));
  if (val && typeof val === 'object') {
    const out = {};
    for (const k of Object.keys(val)) out[k] = tplDeep(val[k], vars);
    return out;
  }
  return val;
}

// Helper: get generation name for a birth year
function getGen(year, genRanges) {
  for (let i = genRanges.length - 1; i >= 0; i--) {
    if (year >= genRanges[i].y) return genRanges[i].n;
  }
  return genRanges[0].n;
}

// Decade-specific SEO paragraph (H2 title + body per language)
const SEO_H2C = {
  en: 'Growing up in the {decade}s',
  fr: 'Grandir dans les années {decade}',
  es: 'Crecer en los años {decade}',
  pt: 'Crescer nos anos {decade}',
  de: 'Aufwachsen in den {decade}er Jahren',
  it: 'Crescere negli anni {decade}',
  pl: 'Dorastanie w latach {decade}.',
  ja: '{decade}年代に育つ',
  ko: '{decade}년대에 성장하다',
  nl: 'Opgroeien in de jaren {decade}',
};

const DECADE_P3 = {
  en: {
    1930: 'Growing up in the 1930s meant living through the Great Depression, one of the most severe economic crises in modern history. Despite widespread hardship, the decade saw the rise of cinema, radio broadcasting, and remarkable cultural achievements. Those born in the 1930s would go on to witness and shape much of the twentieth century.',
    1940: 'The 1940s were defined by World War II and its aftermath, which reshaped the entire world order. Those born in this decade grew up as the United Nations was founded, the Cold War began, and post-war reconstruction transformed daily life. The decade ended with a surge of optimism and the dawn of television.',
    1950: 'Born in the 1950s, you came into a world of post-war prosperity and cautious optimism in the Western world. The decade saw the rise of rock and roll, early space exploration, and television entering family homes across continents. Cold War tensions shaped politics, while consumer culture and suburban life became the new norm.',
    1960: 'The 1960s were one of the most transformative decades of the twentieth century — the civil rights movement, the space race, and a cultural revolution all unfolded at once. Those born in this decade grew up amid the Vietnam War, the Beatles, and fundamental challenges to social norms. It was an era that permanently changed politics, culture, and individual identity.',
    1970: 'The 1970s brought the oil crisis, the end of the Vietnam War, and political upheaval including Watergate. For those born in this decade, childhood coincided with the dawn of personal computing, the rise of disco and punk, and growing environmental awareness. The 1970s quietly laid the groundwork for the technological revolution that followed.',
    1980: 'Those born in the 1980s grew up during dramatic political change — the fall of the Berlin Wall, the end of the Cold War, and the rise of the personal computer. MTV transformed music culture, video games entered living rooms, and the first seeds of the internet were planted. This generation came of age exactly as the digital world was taking shape.',
    1990: 'The 1990s saw the internet go mainstream, mobile phones become personal devices, and pop culture explode globally. Those born in this decade grew up with video games, the World Wide Web, and a golden age spanning grunge, hip-hop, and boy bands. The end of the Cold War brought a period of relative optimism, even as new challenges emerged.',
    2000: 'Born in the 2000s, you entered the world at the start of the digital millennium. September 11, the rise of social media, and the introduction of the smartphone all defined this decade. True digital natives, those born in the 2000s grew up with the internet, streaming, and connected devices as everyday childhood realities.',
    2010: 'The 2010s were shaped by the smartphone revolution, the dominance of social media, and accelerating climate awareness. Streaming replaced physical media, and on-demand content became the norm worldwide. Those born in this decade are growing up in the most connected world in history, facing both extraordinary opportunity and significant global challenges.',
    2020: 'Those born in the 2020s entered a world reshaped by the COVID-19 pandemic, the fastest vaccine development in history, and an accelerating AI revolution. Remote work, digital-first education, and rapid technological transformation define this decade. This generation will grow up navigating change at a pace unlike any before.',
  },
  fr: {
    1930: 'Grandir dans les années 1930 signifiait vivre la Grande Dépression, l\'une des crises économiques les plus sévères de l\'histoire moderne. Malgré les difficultés généralisées, la décennie vit l\'essor du cinéma, de la radio et de remarquables réalisations culturelles. Les personnes nées dans les années 1930 allaient façonner une grande partie du XXe siècle.',
    1940: 'Les années 1940 furent définies par la Seconde Guerre mondiale et ses répercussions, qui remodèlent l\'ordre mondial entier. Ceux nés dans cette décennie grandirent alors que l\'ONU était fondée, la Guerre froide commençait, et la reconstruction d\'après-guerre transformait la vie quotidienne. La décennie se termina sur un élan d\'optimisme et l\'avènement de la télévision.',
    1950: 'Né dans les années 1950, vous êtes venu au monde durant une période de prospérité d\'après-guerre et d\'optimisme prudent en Occident. La décennie vit naître le rock and roll, les premières explorations spatiales, et la télévision entrer dans les foyers. La guerre froide planait sur la politique, tandis que la société de consommation devenait la nouvelle norme.',
    1960: 'Les années 1960 furent l\'une des décennies les plus transformatrices du XXe siècle — droits civiques, course à l\'espace et révolution culturelle se déployèrent simultanément. Ceux nés dans cette décennie grandirent avec la guerre du Vietnam, les Beatles et une remise en question fondamentale des normes sociales. Une ère qui changea durablement la politique, la culture et l\'identité individuelle.',
    1970: 'Les années 1970 apportèrent le choc pétrolier, la fin de la guerre du Vietnam et des bouleversements politiques dont le Watergate. Pour ceux nés dans cette décennie, l\'enfance coïncida avec l\'aube de l\'informatique personnelle, l\'essor du disco et du punk, et une conscience écologique grandissante. Les années 1970 posèrent discrètement les bases de la révolution technologique à venir.',
    1980: 'Les personnes nées dans les années 1980 grandirent dans un contexte de changements politiques majeurs — chute du mur de Berlin, fin de la Guerre froide, et essor de l\'ordinateur personnel. MTV transforma la culture musicale, les jeux vidéo envahirent les salons, et les premières graines d\'internet furent plantées. Cette génération devint adulte exactement au moment où le monde numérique prenait forme.',
    1990: 'Les années 1990 virent internet se démocratiser, le téléphone mobile devenir personnel, et la culture pop exploser à l\'échelle mondiale. Ceux nés dans cette décennie grandirent avec les jeux vidéo, le World Wide Web, et un âge d\'or musical allant du grunge au hip-hop. La fin de la Guerre froide apporta un optimisme relatif, même si de nouveaux défis émergèrent.',
    2000: 'Né dans les années 2000, vous êtes entré dans le monde au début du millénaire numérique. Le 11 septembre, l\'essor des réseaux sociaux et l\'arrivée du smartphone ont profondément marqué cette décennie. Véritables natifs numériques, les personnes nées dans les années 2000 ont grandi avec internet, le streaming et les appareils connectés comme réalités quotidiennes.',
    2010: 'Les années 2010 furent marquées par la révolution du smartphone, la domination des réseaux sociaux et une conscience climatique croissante. Le streaming remplaça les supports physiques, et le contenu à la demande devint la norme mondiale. Ceux nés dans cette décennie grandissent dans le monde le plus connecté de l\'histoire, avec d\'extraordinaires opportunités et de grands défis.',
    2020: 'Les personnes nées dans les années 2020 sont entrées dans un monde reconfiguré par la pandémie de Covid-19, le développement de vaccins le plus rapide de l\'histoire, et une révolution de l\'intelligence artificielle en accélération. Télétravail, éducation numérique et transformation technologique rapide définissent cette décennie. Cette génération grandira dans un monde en mutation à une vitesse inédite.',
  },
  es: {
    1930: 'Crecer en los años 1930 significaba vivir la Gran Depresión, una de las crisis económicas más severas de la historia moderna. A pesar de las dificultades generalizadas, la década vio el auge del cine, la radio y notables logros culturales. Los nacidos en los años 1930 fueron testigos y moldearon gran parte del siglo XX.',
    1940: 'Los años 1940 estuvieron definidos por la Segunda Guerra Mundial y sus consecuencias, que remodelaron el orden mundial. Los nacidos en esta década crecieron mientras se fundaban las Naciones Unidas, comenzaba la Guerra Fría y la reconstrucción de posguerra transformaba la vida cotidiana. La década terminó con un impulso de optimismo y la llegada de la televisión.',
    1950: 'Nacido en los años 1950, llegaste a un mundo de prosperidad de posguerra y optimismo cauteloso en Occidente. La década vio nacer el rock and roll, la exploración espacial temprana y la televisión entrar en los hogares. Las tensiones de la Guerra Fría marcaron la política, mientras la cultura de consumo y la vida suburbana se convertían en la nueva norma.',
    1960: 'Los años 1960 fueron una de las décadas más transformadoras del siglo XX — el movimiento por los derechos civiles, la carrera espacial y la revolución cultural se desplegaron simultáneamente. Los nacidos en esta década crecieron con la guerra de Vietnam, los Beatles y un cuestionamiento fundamental de las normas sociales. Una era que cambió definitivamente la política, la cultura y la identidad.',
    1970: 'Los años 1970 trajeron la crisis del petróleo, el fin de la guerra de Vietnam y la agitación política del Watergate. Para los nacidos en esta década, la infancia coincidió con el amanecer de la informática personal, el auge del disco y el punk, y una creciente conciencia ambiental. Los años 1970 sentaron silenciosamente las bases de la revolución tecnológica que siguió.',
    1980: 'Los nacidos en los años 1980 crecieron en un período de cambios políticos dramáticos — la caída del Muro de Berlín, el fin de la Guerra Fría y el auge del ordenador personal. MTV transformó la cultura musical, los videojuegos entraron en los salones y se plantaron las primeras semillas de internet. Esta generación llegó a la madurez exactamente cuando el mundo digital tomaba forma.',
    1990: 'Los años 1990 vieron internet popularizarse, el teléfono móvil convertirse en algo personal y la cultura pop explotar globalmente. Los nacidos en esta década crecieron con videojuegos, la World Wide Web y una edad dorada que abarcó desde el grunge hasta el hip-hop. El fin de la Guerra Fría trajo un período de optimismo relativo, aunque surgieron nuevos desafíos.',
    2000: 'Nacido en los años 2000, entraste al mundo al inicio del milenio digital. El 11 de septiembre, el auge de las redes sociales y la llegada del smartphone marcaron profundamente esta década. Verdaderos nativos digitales, los nacidos en los años 2000 crecieron con internet, el streaming y los dispositivos conectados como realidades cotidianas desde la infancia.',
    2010: 'Los años 2010 estuvieron marcados por la revolución del smartphone, el dominio de las redes sociales y una creciente conciencia climática. El streaming reemplazó a los soportes físicos y el contenido bajo demanda se convirtió en la norma. Los nacidos en esta década crecen en el mundo más conectado de la historia, con oportunidades extraordinarias y grandes retos globales.',
    2020: 'Los nacidos en los años 2020 entraron en un mundo reconfigurado por la pandemia de COVID-19, el desarrollo de vacunas más rápido de la historia y una acelerada revolución de inteligencia artificial. El teletrabajo, la educación digital y la transformación tecnológica rápida definen esta década. Esta generación crecerá navegando cambios a un ritmo sin precedentes.',
  },
  pt: {
    1930: 'Crescer nos anos 1930 significava viver a Grande Depressão, uma das crises econômicas mais severas da história moderna. Apesar das dificuldades generalizadas, a década viu o surgimento do cinema, do rádio e de notáveis realizações culturais. Os nascidos nos anos 1930 testemunhariam e moldariam grande parte do século XX.',
    1940: 'Os anos 1940 foram definidos pela Segunda Guerra Mundial e suas consequências, que remodelaram toda a ordem mundial. Os nascidos nesta década cresceram enquanto a ONU era fundada, a Guerra Fria começava e a reconstrução do pós-guerra transformava a vida cotidiana. A década terminou com um impulso de otimismo e o advento da televisão.',
    1950: 'Nascido nos anos 1950, você chegou a um mundo de prosperidade do pós-guerra e otimismo cauteloso no Ocidente. A década viu nascer o rock and roll, as primeiras explorações espaciais e a televisão entrar nos lares. As tensões da Guerra Fria marcaram a política, enquanto a cultura de consumo e a vida suburbana se tornavam a nova norma.',
    1960: 'Os anos 1960 foram uma das décadas mais transformadoras do século XX — o movimento pelos direitos civis, a corrida espacial e a revolução cultural se desdobraram simultaneamente. Os nascidos nesta década cresceram com a Guerra do Vietnã, os Beatles e um questionamento fundamental das normas sociais. Uma era que mudou definitivamente a política, a cultura e a identidade.',
    1970: 'Os anos 1970 trouxeram a crise do petróleo, o fim da Guerra do Vietnã e turbulências políticas como o Watergate. Para os nascidos nesta década, a infância coincidiu com o alvorecer da informática pessoal, o surgimento do disco e do punk, e uma crescente consciência ambiental. Os anos 1970 lançaram silenciosamente as bases da revolução tecnológica que se seguiu.',
    1980: 'Os nascidos nos anos 1980 cresceram em um período de mudanças políticas dramáticas — a queda do Muro de Berlim, o fim da Guerra Fria e o surgimento do computador pessoal. A MTV transformou a cultura musical, os videogames invadiram as salas de estar e as primeiras sementes da internet foram plantadas. Esta geração chegou à maturidade exatamente quando o mundo digital tomava forma.',
    1990: 'Os anos 1990 viram a internet se popularizar, o celular se tornar pessoal e a cultura pop explodir globalmente. Os nascidos nesta década cresceram com videogames, a World Wide Web e uma era de ouro musical que abrangeu do grunge ao hip-hop. O fim da Guerra Fria trouxe um período de otimismo relativo, ainda que novos desafios surgissem.',
    2000: 'Nascido nos anos 2000, você entrou no mundo no início do milênio digital. O 11 de setembro, o surgimento das redes sociais e a chegada do smartphone marcaram profundamente esta década. Verdadeiros nativos digitais, os nascidos nos anos 2000 cresceram com a internet, o streaming e os dispositivos conectados como realidades cotidianas desde a infância.',
    2010: 'Os anos 2010 foram marcados pela revolução dos smartphones, o domínio das redes sociais e uma crescente consciência climática. O streaming substituiu as mídias físicas e o conteúdo sob demanda tornou-se a norma. Os nascidos nesta década crescem no mundo mais conectado da história, com oportunidades extraordinárias e grandes desafios globais.',
    2020: 'Os nascidos nos anos 2020 entraram em um mundo reconfigurado pela pandemia de COVID-19, o desenvolvimento de vacinas mais rápido da história e uma acelerada revolução de inteligência artificial. O trabalho remoto, a educação digital e a rápida transformação tecnológica definem esta década. Esta geração crescerá navegando mudanças em um ritmo sem precedentes.',
  },
  de: {
    1930: 'In den 1930er Jahren aufzuwachsen bedeutete, die Große Depression zu erleben, eine der schwersten Wirtschaftskrisen der modernen Geschichte. Trotz weit verbreiteter Not erlebte das Jahrzehnt den Aufstieg des Kinos, des Radios und bemerkenswerte kulturelle Errungenschaften. Die in den 1930er Jahren Geborenen sollten einen Großteil des zwanzigsten Jahrhunderts mitgestalten.',
    1940: 'Die 1940er Jahre wurden durch den Zweiten Weltkrieg und seine Folgen definiert, die die gesamte Weltordnung neu gestalteten. Die in diesem Jahrzehnt Geborenen wuchsen auf, als die Vereinten Nationen gegründet wurden, der Kalte Krieg begann und der Wiederaufbau nach dem Krieg den Alltag veränderte. Das Jahrzehnt endete mit einem Optimismus und dem Aufkommen des Fernsehens.',
    1950: 'In den 1950er Jahren geboren, kamen Sie in eine Welt des Nachkriegswohlstands und vorsichtigen Optimismus im Westen. Das Jahrzehnt erlebte den Aufstieg des Rock-and-Roll, frühe Weltraumforschung und den Einzug des Fernsehens in die Wohnzimmer. Der Kalte Krieg prägte die Politik, während Konsumkultur und Vorstadtleben zur neuen Norm wurden.',
    1960: 'Die 1960er Jahre waren eines der transformativsten Jahrzehnte des zwanzigsten Jahrhunderts — Bürgerrechtsbewegung, Wettlauf ins All und Kulturrevolution entfalteten sich gleichzeitig. Die in diesem Jahrzehnt Geborenen wuchsen mit dem Vietnamkrieg, den Beatles und einer grundlegenden Infragestellung gesellschaftlicher Normen auf. Eine Ära, die Politik, Kultur und Identität dauerhaft veränderte.',
    1970: 'Die 1970er Jahre brachten die Ölkrise, das Ende des Vietnamkriegs und politische Umwälzungen wie die Watergate-Affäre. Für die in diesem Jahrzehnt Geborenen fiel die Kindheit mit dem Beginn der Heimcomputerzeit, dem Aufstieg von Disco und Punk sowie einem wachsenden Umweltbewusstsein zusammen. Die 1970er legten heimlich den Grundstein für die folgende Technologierevolution.',
    1980: 'Die in den 1980er Jahren Geborenen wuchsen in einer Zeit dramatischen politischen Wandels auf — Mauerfall, Ende des Kalten Krieges und Aufstieg des Personal Computers. MTV veränderte die Musikkultur, Videospiele zogen in die Wohnzimmer ein und die ersten Samen des Internets wurden gepflanzt. Diese Generation wurde genau dann erwachsen, als die digitale Welt Form annahm.',
    1990: 'Die 1990er Jahre erlebten den Durchbruch des Internets, das Handy wurde persönliches Gerät und die Popkultur explodierte weltweit. Die in diesem Jahrzehnt Geborenen wuchsen mit Videospielen, dem World Wide Web und einem goldenen Zeitalter auf, das von Grunge bis Hip-Hop reichte. Das Ende des Kalten Krieges brachte relativen Optimismus, auch wenn neue Herausforderungen entstanden.',
    2000: 'In den 2000er Jahren geboren, kamen Sie zu Beginn des digitalen Jahrtausends auf die Welt. Der 11. September, der Aufstieg sozialer Medien und die Einführung des Smartphones prägten dieses Jahrzehnt. Echte Digital Natives, die in den 2000ern Geborenen wuchsen mit Internet, Streaming und vernetzten Geräten als alltäglichen Kindheitsrealitäten auf.',
    2010: 'Die 2010er Jahre wurden durch die Smartphone-Revolution, die Dominanz sozialer Medien und ein wachsendes Klimabewusstsein geprägt. Streaming ersetzte physische Medien und On-Demand-Inhalte wurden weltweit zur Norm. Die in diesem Jahrzehnt Geborenen wachsen in der vernetzesten Welt der Geschichte auf, mit außergewöhnlichen Chancen und großen globalen Herausforderungen.',
    2020: 'Die in den 2020er Jahren Geborenen kamen in eine Welt, die durch die COVID-19-Pandemie, die schnellste Impfstoffentwicklung der Geschichte und eine beschleunigte KI-Revolution neu gestaltet wurde. Homeoffice, digitale Bildung und rasanter technologischer Wandel prägen dieses Jahrzehnt. Diese Generation wird in einer Welt aufwachsen, die sich mit beispielloser Geschwindigkeit verändert.',
  },
  it: {
    1930: 'Crescere negli anni Trenta significava vivere la Grande Depressione, una delle crisi economiche più severe della storia moderna. Nonostante le difficoltà diffuse, il decennio vide l\'ascesa del cinema, della radio e notevoli realizzazioni culturali. I nati negli anni Trenta avrebbero testimoniato e plasmato gran parte del ventesimo secolo.',
    1940: 'Gli anni Quaranta furono definiti dalla Seconda Guerra Mondiale e dalle sue conseguenze, che riplasmarono l\'intero ordine mondiale. I nati in questo decennio crebbero mentre veniva fondata l\'ONU, iniziava la Guerra Fredda e la ricostruzione postbellica trasformava la vita quotidiana. Il decennio si concluse con un impulso di ottimismo e l\'avvento della televisione.',
    1950: 'Nato negli anni Cinquanta, sei arrivato in un mondo di prosperità postbellica e ottimismo cauto in Occidente. Il decennio vide nascere il rock and roll, le prime esplorazioni spaziali e la televisione entrare nelle case. Le tensioni della Guerra Fredda marcarono la politica, mentre la cultura dei consumi e la vita suburbana diventavano la nuova norma.',
    1960: 'Gli anni Sessanta furono uno dei decenni più trasformativi del ventesimo secolo — il movimento per i diritti civili, la corsa allo spazio e la rivoluzione culturale si dispiegarono simultaneamente. I nati in questo decennio crebbero con la guerra del Vietnam, i Beatles e una messa in discussione fondamentale delle norme sociali. Un\'era che cambiò definitivamente politica, cultura e identità.',
    1970: 'Gli anni Settanta portarono la crisi petrolifera, la fine della guerra del Vietnam e sconvolgimenti politici come il Watergate. Per i nati in questo decennio, l\'infanzia coincise con l\'alba dell\'informatica personale, l\'ascesa del disco e del punk, e una crescente coscienza ambientale. Gli anni Settanta posero silenziosamente le basi della rivoluzione tecnologica che seguì.',
    1980: 'I nati negli anni Ottanta crebbero in un periodo di drammatici cambiamenti politici — la caduta del Muro di Berlino, la fine della Guerra Fredda e l\'ascesa del personal computer. MTV trasformò la cultura musicale, i videogiochi invasero i salotti e i primi semi di internet furono piantati. Questa generazione divenne adulta esattamente quando il mondo digitale prendeva forma.',
    1990: 'Gli anni Novanta videro internet diffondersi, il cellulare diventare personale e la cultura pop esplodere a livello globale. I nati in questo decennio crebbero con i videogiochi, il World Wide Web e un\'età dell\'oro musicale che spaziava dal grunge all\'hip-hop. La fine della Guerra Fredda portò un periodo di ottimismo relativo, anche se emersero nuove sfide.',
    2000: 'Nato negli anni 2000, sei entrato nel mondo all\'inizio del millennio digitale. L\'11 settembre, l\'ascesa dei social media e l\'arrivo dello smartphone segnarono profondamente questo decennio. Veri nativi digitali, i nati negli anni 2000 sono cresciuti con internet, lo streaming e i dispositivi connessi come realtà quotidiane dell\'infanzia.',
    2010: 'Gli anni 2010 furono segnati dalla rivoluzione degli smartphone, dal dominio dei social media e da una crescente consapevolezza climatica. Lo streaming sostituì i supporti fisici e i contenuti on demand diventarono la norma. I nati in questo decennio crescono nel mondo più connesso della storia, con opportunità straordinarie e grandi sfide globali.',
    2020: 'I nati negli anni 2020 sono entrati in un mondo riconfigurato dalla pandemia di COVID-19, dallo sviluppo più rapido di vaccini nella storia e da un\'accelerata rivoluzione dell\'intelligenza artificiale. Smart working, istruzione digitale e rapida trasformazione tecnologica definiscono questo decennio. Questa generazione crescerà navigando cambiamenti a un ritmo senza precedenti.',
  },
  pl: {
    1930: 'Dorastanie w latach trzydziestych oznaczało przeżycie Wielkiego Kryzysu, jednego z najcięższych kryzysów gospodarczych w nowoczesnej historii. Mimo powszechnych trudności dekada przyniosła rozkwit kina, radia i niezwykłe osiągnięcia kulturalne. Urodzeni w latach trzydziestych mieli być świadkami i kształtować znaczną część dwudziestego wieku.',
    1940: 'Lata czterdzieste zostały zdominowane przez II wojnę światową i jej następstwa, które przeształtowały cały ład światowy. Urodzeni w tej dekadzie dorastali w czasach, gdy zakładano ONZ, zaczynała się zimna wojna, a powojenna odbudowa zmieniała codzienne życie. Dekada zakończyła się falą optymizmu i nadejściem telewizji.',
    1950: 'Urodzony w latach pięćdziesiątych, przyszedłeś na świat w erze powojennego dobrobytu i ostrożnego optymizmu na Zachodzie. Dekada przyniosła narodziny rock and rolla, pierwsze eksploracje kosmiczne i telewizję w domach. Napięcia zimnej wojny kształtowały politykę, podczas gdy kultura konsumpcyjna i życie na przedmieściach stawały się nową normą.',
    1960: 'Lata sześćdziesiąte były jedną z najbardziej transformacyjnych dekad XX wieku — ruch praw obywatelskich, wyścig kosmiczny i rewolucja kulturalna rozwinęły się jednocześnie. Urodzeni w tej dekadzie dorastali w cieniu wojny w Wietnamie, Beatlesów i fundamentalnego kwestionowania norm społecznych. Era, która na trwałe zmieniła politykę, kulturę i tożsamość.',
    1970: 'Lata siedemdziesiąte przyniosły kryzys naftowy, koniec wojny w Wietnamie i polityczne wstrząsy, w tym aferę Watergate. Dla urodzonych w tej dekadzie dzieciństwo zbiegło się ze świtem informatyki osobistej, rozkwitem disco i punka oraz rosnącą świadomością ekologiczną. Lata siedemdziesiąte po cichu kładły fundamenty pod rewolucję technologiczną, która nastąpiła.',
    1980: 'Urodzeni w latach osiemdziesiątych dorastali w czasie dramatycznych przemian politycznych — upadku Muru Berlińskiego, końca zimnej wojny i rozkwitu komputera osobistego. MTV zmieniło kulturę muzyczną, gry wideo wkroczyły do salonów, a pierwsze ziarna internetu zostały zasiane. To pokolenie dorosło dokładnie wtedy, gdy świat cyfrowy nabierał kształtu.',
    1990: 'Lata dziewięćdziesiąte przyniosły upowszechnienie internetu, telefon komórkowy stał się osobistym urządzeniem, a kultura pop eksplodowała globalnie. Urodzeni w tej dekadzie dorastali z grami wideo, World Wide Web i złotą erą muzyczną od grunge po hip-hop. Koniec zimnej wojny przyniósł okres względnego optymizmu, choć pojawiły się też nowe wyzwania.',
    2000: 'Urodzony w latach dwutysięcznych, wkroczyłeś na świat na początku cyfrowego milenium. Zamachy 11 września, rozkwit mediów społecznościowych i pojawienie się smartfona głęboko naznaczyły tę dekadę. Prawdziwi cyfrowi tubylcy, urodzeni w latach 2000 dorastali z internetem, streamingiem i połączonymi urządzeniami jako codziennymi realiami dzieciństwa.',
    2010: 'Lata dziesiąte XXI wieku były kształtowane przez rewolucję smartfonów, dominację mediów społecznościowych i rosnącą świadomość klimatyczną. Streaming zastąpił nośniki fizyczne, a treści na żądanie stały się normą. Urodzeni w tej dekadzie dorastają w najbardziej połączonym świecie w historii, z niezwykłymi możliwościami i wielkimi globalnymi wyzwaniami.',
    2020: 'Urodzeni w latach dwudziestych XXI wieku wkroczyli na świat przekształcony przez pandemię COVID-19, najszybszy w historii rozwój szczepionek i przyspieszoną rewolucję sztucznej inteligencji. Praca zdalna, edukacja cyfrowa i szybka transformacja technologiczna definiują tę dekadę. To pokolenie będzie dorastać w świecie zmieniającym się w bezprecedensowym tempie.',
  },
  ja: {
    1930: '1930年代に育つことは、現代史上最も深刻な経済危機のひとつである世界大恐慌を生き抜くことを意味しました。広まった苦難にもかかわらず、この10年は映画、ラジオ放送の台頭と卓越した文化的成果をもたらしました。1930年代に生まれた人々はその後、20世紀の多くを目撃し形作ることになりました。',
    1940: '1940年代は第二次世界大戦とその余波によって定義され、世界秩序全体を再形成しました。この10年に生まれた人々は、国連創設、冷戦の始まり、戦後復興が日常生活を変える中で育ちました。10年代はテレビの夜明けとともに楽観主義の波で締めくくられました。',
    1950: '1950年代に生まれた方は、西洋の戦後繁栄と慎重な楽観主義の世界に来ました。この10年はロックンロールの誕生、初期の宇宙探査、家庭へのテレビ普及をもたらしました。冷戦の緊張が政治を形作り、消費文化と郊外生活が新しい規範となりました。',
    1960: '1960年代は20世紀最も変革的な10年のひとつでした — 公民権運動、宇宙競争、文化革命が同時に展開しました。この10年に生まれた人々はベトナム戦争、ビートルズ、社会規範への根本的な挑戦の中で育ちました。政治、文化、個人のアイデンティティを永遠に変えた時代でした。',
    1970: '1970年代は石油危機、ベトナム戦争の終結、ウォーターゲートを含む政治的混乱をもたらしました。この10年に生まれた人々にとって、幼少期はパーソナルコンピューターの夜明け、ディスコとパンクの台頭、環境意識の高まりと重なりました。1970年代はその後の技術革命の基礎を静かに築きました。',
    1980: '1980年代に生まれた人々は劇的な政治変化の中で育ちました — ベルリンの壁崩壊、冷戦終結、パーソナルコンピューターの台頭。MTVが音楽文化を変革し、ビデオゲームがリビングルームに入り、インターネットの最初の種が蒔かれました。この世代はデジタル世界が形を取り始めるまさにその時に成熟しました。',
    1990: '1990年代はインターネットが一般化し、携帯電話が個人デバイスとなり、ポップカルチャーがグローバルに爆発しました。この10年に生まれた人々はビデオゲーム、ワールドワイドウェブ、グランジからヒップホップにまたがる黄金時代とともに育ちました。冷戦の終結は相対的な楽観主義の時代をもたらしましたが、新たな課題も生まれました。',
    2000: '2000年代に生まれた方はデジタルミレニアムの始まりに世界に来ました。9月11日、ソーシャルメディアの台頭、スマートフォンの登場がこの10年を深く定義しました。真のデジタルネイティブである2000年代生まれは、インターネット、ストリーミング、接続デバイスを日常の子供時代の現実として育ちました。',
    2010: '2010年代はスマートフォン革命、ソーシャルメディアの支配、加速する気候意識によって形作られました。ストリーミングが物理メディアに取って代わり、オンデマンドコンテンツが世界標準となりました。この10年に生まれた人々は史上最も接続された世界で育ち、並外れた機会と重大なグローバル課題の両方に直面しています。',
    2020: '2020年代に生まれた人々はCOVID-19パンデミック、史上最速のワクチン開発、加速するAI革命によって再形成された世界に入りました。リモートワーク、デジタルファーストの教育、急速な技術変革がこの10年を定義します。この世代はかつてないスピードで変化をナビゲートしながら育っていきます。',
  },
  ko: {
    1930: '1930년대에 성장한다는 것은 현대사에서 가장 심각한 경제 위기 중 하나인 대공황을 살아내는 것을 의미했습니다. 광범위한 어려움에도 불구하고 이 10년은 영화, 라디오 방송의 부상과 놀라운 문화적 성취를 가져왔습니다. 1930년대에 태어난 사람들은 이후 20세기의 많은 부분을 목격하고 형성하게 됩니다.',
    1940: '1940년대는 제2차 세계대전과 그 여파로 정의되어 전체 세계 질서를 재편했습니다. 이 10년에 태어난 사람들은 유엔 창설, 냉전 시작, 전후 재건이 일상을 변화시키는 가운데 성장했습니다. 10년은 텔레비전의 여명과 함께 낙관주의의 물결로 마무리되었습니다.',
    1950: '1950년대에 태어난 분은 서방 세계의 전후 번영과 조심스러운 낙관주의 세계에 왔습니다. 이 10년은 로큰롤의 탄생, 초기 우주 탐사, 가정의 텔레비전 보급을 가져왔습니다. 냉전 긴장이 정치를 형성했으며, 소비 문화와 교외 생활이 새로운 규범이 되었습니다.',
    1960: '1960년대는 20세기에서 가장 변혁적인 10년 중 하나였습니다 — 민권 운동, 우주 경쟁, 문화 혁명이 동시에 펼쳐졌습니다. 이 10년에 태어난 사람들은 베트남 전쟁, 비틀즈, 사회 규범에 대한 근본적인 도전 속에서 성장했습니다. 정치, 문화, 개인 정체성을 영구히 바꾼 시대였습니다.',
    1970: '1970년대는 석유 위기, 베트남 전쟁의 종료, 워터게이트를 포함한 정치적 격동을 가져왔습니다. 이 10년에 태어난 사람들의 유년기는 개인용 컴퓨터의 여명, 디스코와 펑크의 부상, 환경 의식의 성장과 겹쳤습니다. 1970년대는 이후의 기술 혁명의 기반을 조용히 마련했습니다.',
    1980: '1980년대에 태어난 사람들은 극적인 정치 변화 속에서 성장했습니다 — 베를린 장벽 붕괴, 냉전 종식, 개인용 컴퓨터의 부상. MTV가 음악 문화를 변혁했고, 비디오 게임이 거실에 들어왔으며, 인터넷의 첫 씨앗이 심어졌습니다. 이 세대는 디지털 세계가 형태를 갖추기 시작한 바로 그때 성숙했습니다.',
    1990: '1990년대는 인터넷이 대중화되고 휴대폰이 개인 기기가 되었으며 팝 문화가 전 세계적으로 폭발했습니다. 이 10년에 태어난 사람들은 비디오 게임, 월드와이드웹, 그런지부터 힙합까지 아우르는 황금기와 함께 성장했습니다. 냉전의 종식은 상대적 낙관주의의 시기를 가져왔지만 새로운 도전도 등장했습니다.',
    2000: '2000년대에 태어난 분은 디지털 밀레니엄의 시작에 세상에 왔습니다. 9.11, 소셜 미디어의 부상, 스마트폰의 등장이 이 10년을 깊이 정의했습니다. 진정한 디지털 원주민인 2000년대 생은 인터넷, 스트리밍, 연결 기기를 일상적인 어린 시절 현실로 성장했습니다.',
    2010: '2010년대는 스마트폰 혁명, 소셜 미디어의 지배, 가속화되는 기후 인식으로 형성되었습니다. 스트리밍이 물리적 미디어를 대체했고 온디맨드 콘텐츠가 전 세계 표준이 되었습니다. 이 10년에 태어난 사람들은 역사상 가장 연결된 세계에서 성장하며 비범한 기회와 중대한 전 세계 도전 모두에 직면하고 있습니다.',
    2020: '2020년대에 태어난 사람들은 COVID-19 팬데믹, 역사상 가장 빠른 백신 개발, 가속화하는 AI 혁명으로 재편된 세계에 왔습니다. 원격 근무, 디지털 우선 교육, 빠른 기술 변혁이 이 10년을 정의합니다. 이 세대는 전례 없는 속도로 변화를 헤쳐 나가며 성장할 것입니다.',
  },
  nl: {
    1930: 'Opgroeien in de jaren dertig betekende de Grote Depressie meemaken, een van de ernstigste economische crises in de moderne geschiedenis. Ondanks wijdverspreide ontberingen kende het decennium de opkomst van cinema, radio-uitzendingen en opmerkelijke culturele prestaties. Degenen die in de jaren dertig werden geboren, zouden een groot deel van de twintigste eeuw getuige zijn en vormgeven.',
    1940: 'De jaren veertig werden bepaald door de Tweede Wereldoorlog en zijn nasleep, die de gehele wereldorde opnieuw vormgaven. Degenen die in dit decennium werden geboren, groeiden op terwijl de VN werd opgericht, de Koude Oorlog begon en de wederopbouw na de oorlog het dagelijks leven transformeerde. Het decennium eindigde met een golf van optimisme en het aanbreken van de televisie.',
    1950: 'Geboren in de jaren vijftig, kwam je in een wereld van naoorlogse welvaart en voorzichtig optimisme in het Westen. Het decennium zag de geboorte van rock-\'n-roll, vroege ruimteverkenning en televisie die introk in huiskamers. Koude Oorlog-spanningen bepaalden de politiek, terwijl consumptiecultuur en buitenwijk-leven de nieuwe norm werden.',
    1960: 'De jaren zestig waren een van de meest transformatieve decennia van de twintigste eeuw — de burgerrechtenbeweging, de ruimtewedloop en een culturele revolutie ontvouwden zich tegelijk. Degenen die in dit decennium werden geboren, groeiden op met de Vietnamoorlog, de Beatles en fundamentele uitdagingen aan sociale normen. Een tijdperk dat politiek, cultuur en identiteit permanent veranderde.',
    1970: 'De jaren zeventig brachten de oliecrisis, het einde van de Vietnamoorlog en politieke omwentelingen waaronder Watergate. Voor degenen die in dit decennium werden geboren, viel de kindertijd samen met het begin van de persoonlijke computer, de opkomst van disco en punk, en een groeiend milieubewustzijn. De jaren zeventig legden stilletjes de grondslag voor de technologische revolutie die volgde.',
    1980: 'Degenen die in de jaren tachtig werden geboren, groeiden op in een tijd van dramatische politieke veranderingen — de val van de Berlijnse Muur, het einde van de Koude Oorlog en de opkomst van de personal computer. MTV transformeerde de muziekcultuur, videogames deden hun intrede in de huiskamer en de eerste zaden van het internet werden geplant. Deze generatie werd volwassen precies toen de digitale wereld vorm aannam.',
    1990: 'De jaren negentig zagen internet mainstream worden, de mobiele telefoon persoonlijk worden en de popcultuur wereldwijd exploderen. Degenen die in dit decennium werden geboren, groeiden op met videogames, het World Wide Web en een gouden tijdperk dat van grunge tot hiphop reikte. Het einde van de Koude Oorlog bracht een periode van relatief optimisme, ook al doken nieuwe uitdagingen op.',
    2000: 'Geboren in de jaren 2000, betrad je de wereld aan het begin van het digitale millennium. 11 september, de opkomst van sociale media en de introductie van de smartphone hebben dit decennium diepgaand bepaald. Echte digital natives, geboren in de jaren 2000, groeiden op met internet, streaming en verbonden apparaten als dagelijkse kindertijdrealiteiten.',
    2010: 'De jaren 2010 werden gevormd door de smartphonerevolutie, de dominantie van sociale media en een groeiend klimaatbewustzijn. Streaming verving fysieke media en on-demand content werd wereldwijd de norm. Degenen die in dit decennium werden geboren, groeien op in de meest verbonden wereld in de geschiedenis, met buitengewone kansen en grote mondiale uitdagingen.',
    2020: 'Degenen die in de jaren 2020 werden geboren, kwamen in een wereld die is herschapen door de COVID-19-pandemie, de snelste vaccinontwikkeling in de geschiedenis en een versnellende AI-revolutie. Thuiswerken, digitaal-eerst onderwijs en snelle technologische transformatie bepalen dit decennium. Deze generatie zal opgroeien in een wereld die verandert in een tempo zoals nooit tevoren.',
  },
};

// Helper: build world events block HTML from EVENTS data
function buildWorldBlock(year, t, lang) {
  const evSrc = lang === 'fr' ? EVENTS_FR : lang === 'es' ? EVENTS_ES : lang === 'pt' ? EVENTS_PT : lang === 'de' ? EVENTS_DE : lang === 'it' ? EVENTS_IT : lang === 'pl' ? EVENTS_PL : lang === 'ja' ? EVENTS_JA : lang === 'ko' ? EVENTS_KO : lang === 'nl' ? EVENTS_NL : EVENTS;
  const ev = evSrc[String(year)] || EVENTS[String(year)]; // fallback to EN
  const evEn = EVENTS[String(year)]; // always use English for music, film, prices
  if (!evEn) return '';

  // Collect all world events across all 3 periods (from translated source)
  let worldEvents = [];
  if (ev && ev.periods) {
    ['1', '2', '3'].forEach(p => {
      if (ev.periods[p]) worldEvents = worldEvents.concat(ev.periods[p]);
    });
  } else if (evEn.periods) {
    ['1', '2', '3'].forEach(p => {
      if (evEn.periods[p]) worldEvents = worldEvents.concat(evEn.periods[p]);
    });
  } else if (evEn.world) {
    worldEvents = evEn.world;
  }

  const techText = (ev && ev.tech) ? ev.tech : (evEn.tech || '');

  const wTitle = tpl(t.wTitle, { year });
  const rows = [
    ['🌍', t.wLblEvents, worldEvents.join(' · ')],
    ['🎵', t.wLblMusic, evEn.music || ''],
    ['🎬', t.wLblFilm, evEn.film || ''],
    ['💻', t.wLblTech, techText],
    ['🛒', t.wLblPrices,
      t.wLblBread + ' ' + (evEn.prices ? evEn.prices.bread : '') +
      ' · ' + t.wLblGas + ' ' + (evEn.prices ? evEn.prices.gas : '') +
      ' · ' + t.wLblHouse + ' ' + (evEn.prices ? evEn.prices.house : ''),
    ],
  ];

  let html = `<div class="world-when">`;
  html += `<div class="world-when-title">${wTitle}</div>`;
  rows.forEach(r => {
    if (!r[2]) return; // skip empty rows
    html += `<div class="world-row"><span class="world-icon">${r[0]}</span><span class="world-lbl">${r[1]}</span><span class="world-val">${r[2]}</span></div>`;
  });
  html += `</div>`;
  return html;
}

module.exports = {
  pages: BIRTH_YEARS.map(y => ({
    id: `born-in-${y}`,
    slugs: {
      en: `born-in-${y}`,
      fr: `fr/ne-en-${y}`,
      es: `es/nacido-en-${y}`,
      pt: `pt/nascido-em-${y}`,
      de: `de/geboren-in-${y}`,
      it: `it/nato-nel-${y}`,
      pl: `pl/urodzony-w-${y}`,
      ja: `ja/umareta-${y}`,
      ko: `ko/taeeona-${y}`,
      nl: `nl/geboren-in-${y}`,
    },
  })),

  render(pageId, lang) {
    const t = T[lang];
    const year = parseInt(pageId.replace('born-in-', ''), 10);

    // Core age computations
    const age = BUILD_YEAR - year - 1;   // age before birthday in BUILD_YEAR
    const age1 = BUILD_YEAR - year;       // age after birthday in BUILD_YEAR
    const days = Math.floor((BUILD_YEAR - year) * 365.25);
    const lived = BUILD_YEAR - year;
    const gen = getGen(year, t.genRanges);

    // Token map used for all template substitutions
    const vars = { year, age, age1, days, lived, gen };

    // Optimised title/desc for high-traffic years (1950–2017)
    const OPT_YEARS = year >= 1950 && year <= 2017;
    const OPT_TITLE = {
      en: 'Born in {year}? You\'re {age1} in 2026 — Exact Age Calculator',
      fr: 'Né en {year} : quel âge en 2026 ? — {age1} ans | DateCalc',
      es: '¿Cuántos años son de {year} a 2026? — {age1} años | DateCalc',
      pt: 'Nascido em {year}? Você tem {age1} anos em 2026 — Calculadora de Idade',
      de: 'Geboren {year}? Du bist {age1} Jahre alt 2026 — Altersrechner',
      it: 'Nato nel {year}? Hai {age1} anni nel 2026 — Calcolo Età',
      pl: 'Urodzony w {year}? Masz {age1} lat w 2026 — Kalkulator Wieku',
      ja: '{year}年生まれ？2026年に{age1}歳 — 年齢計算機',
      ko: '{year}년생? 2026년에 {age1}세 — 나이 계산기',
      nl: 'Geboren in {year}? Je bent {age1} jaar in 2026 — Leeftijdscalculator',
    };
    const OPT_DESC = {
      en: 'Born in {year}? You are {age} or {age1} years old in 2026. Calculate your exact age in years, months and days — free, instant, no sign-up.',
      fr: 'Né en {year} ? Vous avez {age} ou {age1} ans en 2026. De {year} à 2026, il y a {age1} ans. Calculez votre âge exact au jour près — gratuit.',
      es: 'Si naciste en {year}, tienes {age} o {age1} años en 2026. Del {year} al 2026 son {age1} años. Edad exacta en años, meses y días — gratis, al instante.',
      pt: 'Nascido em {year}? Você tem {age} ou {age1} anos em 2026. Calcule sua idade exata em anos, meses e dias — grátis, instantâneo, sem cadastro.',
      de: 'Geboren {year}? Du bist {age} oder {age1} Jahre alt im Jahr 2026. Berechne dein genaues Alter in Jahren, Monaten und Tagen — kostenlos, sofort, ohne Anmeldung.',
      it: 'Nato nel {year}? Hai {age} o {age1} anni nel 2026. Calcola la tua età esatta in anni, mesi e giorni — gratis, immediato, senza registrazione.',
      pl: 'Urodzony w {year}? Masz {age} lub {age1} lat w 2026 roku. Oblicz swój dokładny wiek w latach, miesiącach i dniach — za darmo, natychmiast, bez rejestracji.',
      ja: '{year}年生まれ？2026年に{age}歳または{age1}歳。年・月・日単位で正確な年齢を計算 — 無料・即時・登録不要。',
      ko: '{year}년생? 2026년에 {age}세 또는 {age1}세입니다. 연·월·일 단위로 정확한 나이를 계산하세요 — 무료, 즉시, 회원가입 불필요.',
      nl: 'Geboren in {year}? Je bent {age} of {age1} jaar in 2026. Bereken je exacte leeftijd in jaren, maanden en dagen — gratis, direct, geen registratie.',
    };

    // Resolve all template strings
    const title = tpl(OPT_YEARS ? OPT_TITLE[lang] : t.titleTpl, vars);
    const metaDesc = tpl(OPT_YEARS ? OPT_DESC[lang] : t.metaDescTpl, vars);
    const headlineHtml = tpl(t.headlineTpl, vars);
    const heroText = tpl(t.heroTpl, vars);
    const explainText = tpl(t.explainTpl, vars);
    const seoH2a = tpl(t.seoH2aTpl, vars);
    const seoP1 = tpl(t.seoP1Tpl, vars);
    const seoH2b = tpl(t.seoH2bTpl, vars);
    const seoP2 = tpl(t.seoP2Tpl, vars);
    const decade = Math.floor(year / 10) * 10;
    const seoH2c = tpl(SEO_H2C[lang] || SEO_H2C.en, { decade });
    const seoP3 = (DECADE_P3[lang] || DECADE_P3.en)[decade] || '';

    // Resolved FAQs
    const faqs = t.faqsTpl.map(f => tplDeep(f, vars));

    // World events block
    const worldBlock = buildWorldBlock(year, t, lang);

    // Blocks — newspaper front page layout
    const yearImg = YEAR_IMAGES[year];
    const imgBlock = yearImg ? `
        <div class="np-photo-wrap">
          <img src="${yearImg.src}" alt="${yearImg.alt}" class="np-photo" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.np-photo-wrap').style.display='none'">
        </div>` : '';

    // Prev/next year navigation
    const slugPfx = { en: 'born-in-', fr: 'fr/ne-en-', es: 'es/nacido-en-', pt: 'pt/nascido-em-', de: 'de/geboren-in-', it: 'it/nato-nel-', pl: 'pl/urodzony-w-', ja: 'ja/umareta-', ko: 'ko/taeeona-', nl: 'nl/geboren-in-' };
    const pfx = slugPfx[lang] || slugPfx.en;
    const prevHref = year > 1930 ? `/${pfx}${year - 1}/` : null;
    const nextHref = year < 2024 ? `/${pfx}${year + 1}/` : null;
    const vol = year - 1929;

    const headlineBlock = `  <div class="headline-block np-front">
    <div class="np-gazette-hdr">
      ${prevHref ? `<a href="${prevHref}" class="np-nav-link np-nav-prev">← ${year - 1}</a>` : ''}
      ${nextHref ? `<a href="${nextHref}" class="np-nav-link np-nav-next">${year + 1} →</a>` : ''}
      <div class="np-rule-top"></div>
      <div class="np-gazette-title">The DateCalc Gazette</div>
      <div class="np-rule-double"></div>
      <div class="np-edition">Est. ${year} &nbsp;·&nbsp; Vol. ${vol} &nbsp;·&nbsp; ${BUILD_YEAR} Edition</div>
      <div class="np-rule-bottom"></div>
    </div>
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${headlineHtml}</h1>
  </div>`;

    // No form — results auto-show
    const formGrid = '';

    const resultsSection = `  <div class="results-section auto-show np-results" id="results">
    <div class="np-two-col">
      <div class="np-age-col">
        <div class="results-header">${t.resultsHeader}</div>
        <div class="age-display">
          <span class="age-number">${heroText}</span>
          <span class="age-suffix">${t.heroSuffix}</span>
        </div>
        <p style="color:var(--muted);font-size:.9rem;margin:.5rem 0 1.5rem">${explainText}</p>
        <a href="${t.exactHref}" class="calc-btn" style="display:inline-block;text-decoration:none">${t.exactCta}</a>
      </div>
      <div class="np-world-col">
        ${worldBlock}
        ${imgBlock}
      </div>
    </div>
  </div>`;

    const faqHTML = faqs.map(f =>
      `    <div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`
    ).join('\n');

    const seoBlock = `  <div class="seo-block">
    <div><h2>${seoH2a}</h2><p>${seoP1}</p></div>
    <div><h2>${seoH2b}</h2><p>${seoP2}</p></div>
    ${seoP3 ? `<div><h2>${seoH2c}</h2><p>${seoP3}</p></div>` : ''}
  </div>
  <div class="faq-block">
    <h2>${t.faqTitle}</h2>
${faqHTML}
  </div>`;

    // No interactive form — page is fully static
    const script = `
// No interactive form — page is fully static
`;

    return { title, metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs, source: t.source };
  },
};
