// Homepage — Hub page showcasing all date/time tools
// Generates 3 pages: EN (/), FR (/fr/), ES (/es/)

const TOOL_COUNT = 16;

const TOOLS_EN = [
  {
    cat: 'Age',
    items: [
      { label: 'Age Calculator', href: '/age-calculator/', desc: 'Find your exact age in years, months, weeks, days, and seconds.' },
      { label: 'Chronological Age', href: '/chronological-age-calculator/', desc: 'Calculate age between any two dates precisely.' },
      { label: 'Baby Age Calculator', href: '/baby-age-calculator/', desc: 'Track your baby\'s age in weeks and months.' },
      { label: 'Dog Age Calculator', href: '/dog-age-calculator/', desc: 'Convert your dog\'s age to human years by breed size.' },
      { label: 'Cat Age Calculator', href: '/cat-age-calculator/', desc: 'See your cat\'s age in equivalent human years.' },
    ],
  },
  {
    cat: 'Dates',
    items: [
      { label: 'Days Between Dates', href: '/days-between-dates/', desc: 'Count the exact number of days between two dates.' },
      { label: 'Date Calculator', href: '/date-calculator/', desc: 'Add or subtract days, weeks, months, or years from a date.' },
      { label: 'Business Days Calculator', href: '/business-days-calculator/', desc: 'Count working days excluding weekends.' },
      { label: 'Week Number', href: '/week-number/', desc: 'Find the ISO week number for any date.' },
      { label: 'What Day Is It Today', href: '/what-day-is-it-today/', desc: 'Instantly see today\'s full date, day, and week number.' },
    ],
  },
  {
    cat: 'Countdowns',
    items: [
      { label: 'Days Until Christmas', href: '/days-until-christmas/', desc: 'Live countdown to December 25.' },
      { label: 'Days Until New Year', href: '/days-until-new-year/', desc: 'Countdown to January 1st.' },
      { label: 'Days Until Halloween', href: '/days-until-halloween/', desc: 'Countdown to October 31.' },
      { label: 'Days Until Easter', href: '/days-until-easter/', desc: 'Countdown to the next Easter Sunday.' },
      { label: 'Countdown Timer', href: '/countdown-timer/', desc: 'Set a custom countdown to any target date.' },
    ],
  },
  {
    cat: 'World',
    items: [
      { label: 'Time Zone Converter', href: '/time-zone-converter/', desc: 'Convert times between any two time zones worldwide.' },
    ],
  },
];

const TOOLS_FR = [
  {
    cat: 'Âge',
    items: [
      { label: 'Calculateur d\'âge', href: '/fr/calculateur-age/', desc: 'Trouvez votre âge exact en années, mois, semaines et jours.' },
      { label: 'Âge chronologique', href: '/fr/age-chronologique/', desc: 'Calculez l\'âge entre deux dates quelconques.' },
      { label: 'Âge bébé', href: '/fr/calculateur-age-bebe/', desc: 'Suivez l\'âge de votre bébé en semaines et en mois.' },
      { label: 'Âge du chien', href: '/fr/calculateur-age-chien/', desc: 'Convertissez l\'âge de votre chien en années humaines.' },
      { label: 'Âge du chat', href: '/fr/calculateur-age-chat/', desc: 'Découvrez l\'âge de votre chat en années humaines.' },
    ],
  },
  {
    cat: 'Dates',
    items: [
      { label: 'Jours entre deux dates', href: '/fr/jours-entre-deux-dates/', desc: 'Comptez le nombre exact de jours entre deux dates.' },
      { label: 'Calculateur de date', href: '/fr/calculateur-date/', desc: 'Ajoutez ou soustrayez des jours, semaines ou mois à une date.' },
      { label: 'Jours ouvrables', href: '/fr/calculateur-jours-ouvrables/', desc: 'Comptez les jours ouvrables hors week-ends.' },
      { label: 'Numéro de semaine', href: '/fr/numero-semaine/', desc: 'Trouvez le numéro de semaine ISO pour n\'importe quelle date.' },
      { label: 'Quel jour sommes-nous', href: '/fr/quel-jour-sommes-nous/', desc: 'Voyez instantanément la date complète d\'aujourd\'hui.' },
    ],
  },
  {
    cat: 'Comptes à rebours',
    items: [
      { label: 'Avant Noël', href: '/fr/jours-avant-noel/', desc: 'Compte à rebours en direct jusqu\'au 25 décembre.' },
      { label: 'Avant Nouvel An', href: '/fr/jours-avant-nouvel-an/', desc: 'Compte à rebours jusqu\'au 1er janvier.' },
      { label: 'Avant Halloween', href: '/fr/jours-avant-halloween/', desc: 'Compte à rebours jusqu\'au 31 octobre.' },
      { label: 'Avant Pâques', href: '/fr/jours-avant-paques/', desc: 'Compte à rebours jusqu\'au prochain dimanche de Pâques.' },
      { label: 'Compte à rebours', href: '/fr/compte-a-rebours/', desc: 'Créez un compte à rebours personnalisé vers n\'importe quelle date.' },
    ],
  },
  {
    cat: 'Monde',
    items: [
      { label: 'Fuseaux horaires', href: '/fr/convertisseur-fuseaux-horaires/', desc: 'Convertissez des heures entre n\'importe quels fuseaux horaires.' },
    ],
  },
];

const TOOLS_ES = [
  {
    cat: 'Edad',
    items: [
      { label: 'Calculadora de edad', href: '/es/calculadora-edad/', desc: 'Encuentra tu edad exacta en años, meses, semanas y días.' },
      { label: 'Edad cronológica', href: '/es/edad-cronologica/', desc: 'Calcula la edad entre dos fechas cualesquiera.' },
      { label: 'Edad del bebé', href: '/es/calculadora-edad-bebe/', desc: 'Sigue la edad de tu bebé en semanas y meses.' },
      { label: 'Edad del perro', href: '/es/calculadora-edad-perro/', desc: 'Convierte la edad de tu perro a años humanos.' },
      { label: 'Edad del gato', href: '/es/calculadora-edad-gato/', desc: 'Descubre la edad de tu gato en años humanos.' },
    ],
  },
  {
    cat: 'Fechas',
    items: [
      { label: 'Días entre fechas', href: '/es/dias-entre-fechas/', desc: 'Cuenta el número exacto de días entre dos fechas.' },
      { label: 'Calculadora de fechas', href: '/es/calculadora-fechas/', desc: 'Suma o resta días, semanas o meses a una fecha.' },
      { label: 'Días hábiles', href: '/es/calculadora-dias-habiles/', desc: 'Cuenta los días laborables excluyendo fines de semana.' },
      { label: 'Número de semana', href: '/es/numero-semana/', desc: 'Encuentra el número de semana ISO para cualquier fecha.' },
      { label: '¿Qué día es hoy?', href: '/es/que-dia-es-hoy/', desc: 'Ve al instante la fecha completa de hoy.' },
    ],
  },
  {
    cat: 'Cuentas regresivas',
    items: [
      { label: 'Días para Navidad', href: '/es/dias-para-navidad/', desc: 'Cuenta regresiva en vivo hasta el 25 de diciembre.' },
      { label: 'Días para Año Nuevo', href: '/es/dias-para-ano-nuevo/', desc: 'Cuenta regresiva hasta el 1 de enero.' },
      { label: 'Días para Halloween', href: '/es/dias-para-halloween/', desc: 'Cuenta regresiva hasta el 31 de octubre.' },
      { label: 'Días para Pascua', href: '/es/dias-para-pascua/', desc: 'Cuenta regresiva hasta el próximo domingo de Pascua.' },
      { label: 'Cuenta regresiva', href: '/es/cuenta-regresiva/', desc: 'Crea una cuenta regresiva personalizada hacia cualquier fecha.' },
    ],
  },
  {
    cat: 'Mundo',
    items: [
      { label: 'Conversor de zona horaria', href: '/es/conversor-zona-horaria/', desc: 'Convierte horas entre cualquier zona horaria del mundo.' },
    ],
  },
];

const TOOLS_PT = [
  {
    cat: 'Idade',
    items: [
      { label: 'Calculadora de Idade', href: '/pt/calculadora-de-idade/', desc: 'Idade exata em anos, meses e dias' },
      { label: 'Idade Cronológica', href: '/pt/idade-cronologica/', desc: 'Diferença entre duas datas' },
      { label: 'Idade do Bebê', href: '/pt/calculadora-idade-bebe/', desc: 'Idade em semanas e meses' },
      { label: 'Idade do Cachorro', href: '/pt/calculadora-idade-cachorro/', desc: 'Anos caninos em humanos' },
      { label: 'Idade do Gato', href: '/pt/calculadora-idade-gato/', desc: 'Anos felinos em humanos' },
    ],
  },
  {
    cat: 'Datas',
    items: [
      { label: 'Dias Entre Datas', href: '/pt/dias-entre-datas/', desc: 'Diferença em dias, semanas' },
      { label: 'Calculadora de Data', href: '/pt/calculadora-de-data/', desc: 'Adicionar ou subtrair dias' },
      { label: 'Dias Úteis', href: '/pt/calculadora-dias-uteis/', desc: 'Contar dias úteis' },
      { label: 'Número da Semana', href: '/pt/numero-da-semana/', desc: 'Semana ISO atual' },
      { label: 'Que Dia É Hoje', href: '/pt/que-dia-e-hoje/', desc: 'Data e semana atual' },
    ],
  },
  {
    cat: 'Contagens',
    items: [
      { label: 'Contagem para o Natal', href: '/pt/dias-para-o-natal/', desc: 'Dias até 25 de dezembro' },
      { label: 'Contagem para Ano Novo', href: '/pt/dias-para-ano-novo/', desc: 'Dias até 1º de janeiro' },
      { label: 'Contagem para Halloween', href: '/pt/dias-para-o-halloween/', desc: 'Dias até 31 de outubro' },
      { label: 'Contagem para Páscoa', href: '/pt/dias-para-a-pascoa/', desc: 'Dias até a Páscoa' },
      { label: 'Temporizador Regressivo', href: '/pt/temporizador-regressivo/', desc: 'Contagem para qualquer data' },
    ],
  },
  {
    cat: 'Mundo',
    items: [
      { label: 'Fuso Horário', href: '/pt/conversor-fuso-horario/', desc: 'Converter fusos horários' },
    ],
  },
];

const TOOLS_BY_LANG = { en: TOOLS_EN, fr: TOOLS_FR, es: TOOLS_ES, pt: TOOLS_PT };

function buildGrid(tools) {
  const cats = tools.map(group => {
    const cards = group.items.map(item =>
      `<a class="tool-card" href="${item.href}">
        <span class="tool-card-name">${item.label}</span>
        <span class="tool-card-desc">${item.desc}</span>
      </a>`
    ).join('\n');
    return `<div class="tool-category">
    <div class="tool-cat-label">${group.cat}</div>
    <div class="tool-grid">${cards}</div>
  </div>`;
  }).join('\n');
  return `  <div class="tool-catalog">\n${cats}\n  </div>`;
}

const T = {
  en: {
    title: `Free Date Calculators – Age, Countdown & Date Tools | DateCalc.app`,
    metaDesc: `${TOOL_COUNT} free date and time calculators: age calculator, days between dates, countdown timers, time zone converter, and more. Fast, free, no sign-up.`,
    kicker: 'Free Date Calculators',
    headline: 'Date & Time<br><em>Calculators</em>',
    subhead: `${TOOL_COUNT} free tools to calculate ages, dates, countdowns and more.`,
    seoH2a: 'What can you calculate with DateCalc.app?',
    seoP1: 'DateCalc.app is a free collection of date and time calculators covering every common calculation you might need. Whether you want to know exactly how old you are to the second, count the days between two dates, find out how many business days remain before a deadline, or convert a time across time zones — this site has a dedicated tool for it. All calculators run directly in your browser with no account required, no ads blocking your view, and no paywalls. The results are instant and the interface is clean, so you spend time on your task — not on the tool.',
    seoH2b: 'Why use a dedicated date calculator?',
    seoP2: 'Mental date arithmetic is error-prone: month lengths vary, leap years add a day every four years, and time zones shift the calendar date entirely. A dedicated calculator eliminates guesswork. Professionals use them for legal deadlines, contract durations, project timelines, and compliance windows. Parents use baby-age calculators to track developmental milestones. Pet owners compare their animals\' ages in human terms. And everyone counts down to the holidays. DateCalc.app covers all these use cases in English, French, and Spanish, making it a globally accessible resource for anyone who works with dates.',
    faqs: [
      { q: 'What is a date calculator?', a: 'A date calculator is a tool that performs arithmetic on calendar dates — such as counting the days between two dates, adding a number of days to a date, or computing someone\'s age from their birth date. DateCalc.app offers ' + TOOL_COUNT + ' specialized date calculators, each optimized for a specific task.' },
      { q: 'How do I calculate my age?', a: 'Enter your date of birth in the Age Calculator. The tool subtracts your birth date from today\'s date, handling leap years and month-length differences automatically, and shows your exact age in years, months, weeks, days, and even seconds — updated live.' },
      { q: 'How many days are between two dates?', a: 'Use the Days Between Dates calculator. Enter a start date and an end date and the tool instantly returns the total number of calendar days. You can also use the Business Days Calculator if you need to exclude weekends.' },
      { q: 'Is DateCalc.app free?', a: 'Yes — every calculator on DateCalc.app is completely free to use with no sign-up, no subscription, and no hidden fees. The site is ad-supported but designed to stay fast and uncluttered.' },
      { q: 'What languages are supported?', a: 'DateCalc.app is available in English, French (Français), and Spanish (Español). Every tool is fully translated and uses locale-appropriate date formats. Switch languages using the EN / FR / ES buttons at the top of any page.' },
    ],
  },
  fr: {
    title: 'Calculateurs de dates gratuits – Âge, compte à rebours et plus | DateCalc.app',
    metaDesc: `${TOOL_COUNT} calculateurs de dates et d'heures gratuits : calculateur d'âge, jours entre dates, comptes à rebours, convertisseur de fuseaux horaires et plus. Rapide, gratuit, sans inscription.`,
    kicker: 'Calculateurs gratuits',
    headline: 'Calculateurs<br>de <em>dates</em>',
    subhead: `${TOOL_COUNT} outils gratuits pour calculer des âges, des dates, des comptes à rebours et plus encore.`,
    seoH2a: 'Que pouvez-vous calculer avec DateCalc.app ?',
    seoP1: 'DateCalc.app est une collection gratuite de calculateurs de dates et d\'heures couvrant tous les calculs courants dont vous pourriez avoir besoin. Que vous souhaitiez connaître votre âge exact à la seconde près, compter les jours entre deux dates, trouver le nombre de jours ouvrables avant une échéance ou convertir une heure selon les fuseaux horaires — ce site dispose d\'un outil dédié pour chaque besoin. Tous les calculateurs fonctionnent directement dans votre navigateur, sans compte requis, sans publicités intrusives et sans barrières payantes. Les résultats sont instantanés et l\'interface est claire.',
    seoH2b: 'Pourquoi utiliser un calculateur de dates dédié ?',
    seoP2: 'L\'arithmétique mentale des dates est source d\'erreurs : la longueur des mois varie, les années bissextiles ajoutent un jour tous les quatre ans, et les fuseaux horaires décalent la date du calendrier. Un calculateur dédié élimine les approximations. Les professionnels les utilisent pour les délais légaux, la durée des contrats et les calendriers de projet. Les parents utilisent les calculateurs d\'âge bébé pour suivre les étapes du développement. DateCalc.app couvre tous ces cas d\'usage en anglais, en français et en espagnol.',
    faqs: [
      { q: 'Qu\'est-ce qu\'un calculateur de dates ?', a: 'Un calculateur de dates est un outil qui effectue des opérations arithmétiques sur des dates calendaires — comme compter les jours entre deux dates, ajouter un nombre de jours à une date ou calculer l\'âge de quelqu\'un à partir de sa date de naissance. DateCalc.app propose ' + TOOL_COUNT + ' calculateurs de dates spécialisés, chacun optimisé pour une tâche spécifique.' },
      { q: 'Comment calculer mon âge ?', a: 'Entrez votre date de naissance dans le Calculateur d\'âge. L\'outil soustrait votre date de naissance de la date d\'aujourd\'hui en gérant automatiquement les années bissextiles et les différences de longueur des mois, et affiche votre âge exact en années, mois, semaines, jours et même secondes — mis à jour en temps réel.' },
      { q: 'Combien de jours y a-t-il entre deux dates ?', a: 'Utilisez le calculateur Jours entre deux dates. Entrez une date de début et une date de fin, et l\'outil retourne instantanément le nombre total de jours calendaires. Vous pouvez également utiliser le calculateur de jours ouvrables si vous devez exclure les week-ends.' },
      { q: 'DateCalc.app est-il gratuit ?', a: 'Oui — chaque calculateur sur DateCalc.app est entièrement gratuit, sans inscription, sans abonnement et sans frais cachés.' },
      { q: 'Quelles langues sont prises en charge ?', a: 'DateCalc.app est disponible en anglais, en français et en espagnol. Chaque outil est entièrement traduit et utilise des formats de date adaptés à chaque langue. Changez de langue en utilisant les boutons EN / FR / ES en haut de chaque page.' },
    ],
  },
  es: {
    title: 'Calculadoras de fechas gratuitas – Edad, cuenta regresiva y más | DateCalc.app',
    metaDesc: `${TOOL_COUNT} calculadoras de fechas y horas gratuitas: calculadora de edad, días entre fechas, cuentas regresivas, conversor de zona horaria y más. Rápido, gratis, sin registro.`,
    kicker: 'Calculadoras gratuitas',
    headline: 'Calculadoras<br>de <em>fechas</em>',
    subhead: `${TOOL_COUNT} herramientas gratuitas para calcular edades, fechas, cuentas regresivas y más.`,
    seoH2a: '¿Qué puedes calcular con DateCalc.app?',
    seoP1: 'DateCalc.app es una colección gratuita de calculadoras de fechas y horas que cubre todos los cálculos comunes que puedas necesitar. Ya sea que quieras saber exactamente cuántos años tienes al segundo, contar los días entre dos fechas, calcular los días hábiles antes de un plazo o convertir una hora entre zonas horarias — este sitio tiene una herramienta dedicada para ello. Todas las calculadoras funcionan directamente en tu navegador sin necesidad de cuenta, sin anuncios que bloqueen tu vista y sin muros de pago. Los resultados son instantáneos y la interfaz es limpia.',
    seoH2b: '¿Por qué usar una calculadora de fechas dedicada?',
    seoP2: 'La aritmética mental de fechas es propensa a errores: la longitud de los meses varía, los años bisiestos añaden un día cada cuatro años y los husos horarios pueden cambiar la fecha del calendario por completo. Una calculadora dedicada elimina las suposiciones. Los profesionales las usan para plazos legales, duraciones de contratos y calendarios de proyectos. Los padres usan las calculadoras de edad para bebés para rastrear hitos del desarrollo. DateCalc.app cubre todos estos casos de uso en inglés, francés y español.',
    faqs: [
      { q: '¿Qué es una calculadora de fechas?', a: 'Una calculadora de fechas es una herramienta que realiza operaciones aritméticas en fechas del calendario, como contar los días entre dos fechas, sumar días a una fecha o calcular la edad de alguien a partir de su fecha de nacimiento. DateCalc.app ofrece ' + TOOL_COUNT + ' calculadoras de fechas especializadas, cada una optimizada para una tarea específica.' },
      { q: '¿Cómo calculo mi edad?', a: 'Introduce tu fecha de nacimiento en la Calculadora de edad. La herramienta resta tu fecha de nacimiento de la fecha de hoy, gestionando automáticamente los años bisiestos y las diferencias en la longitud de los meses, y muestra tu edad exacta en años, meses, semanas, días e incluso segundos, actualizada en tiempo real.' },
      { q: '¿Cuántos días hay entre dos fechas?', a: 'Usa la calculadora Días entre fechas. Introduce una fecha de inicio y una fecha de fin y la herramienta devuelve instantáneamente el número total de días del calendario. También puedes usar la Calculadora de días hábiles si necesitas excluir los fines de semana.' },
      { q: '¿Es gratuito DateCalc.app?', a: 'Sí — cada calculadora en DateCalc.app es completamente gratuita, sin registro, sin suscripción y sin tarifas ocultas.' },
      { q: '¿Qué idiomas están disponibles?', a: 'DateCalc.app está disponible en inglés, francés (Français) y español. Cada herramienta está completamente traducida y usa formatos de fecha apropiados para cada idioma. Cambia de idioma usando los botones EN / FR / ES en la parte superior de cualquier página.' },
    ],
  },
  pt: {
    title: 'DateCalc.app – Calculadoras de Data e Hora Gratuitas 2026',
    metaDesc: 'Calculadoras de data e hora gratuitas. Calcule idade, dias entre datas, contagens regressivas, fusos horários e mais — grátis, sem cadastro.',
    kicker: 'Calculadoras de Data',
    headline: 'Calculadoras de<br><em>Data & Hora</em><br>Gratuitas',
    subhead: 'Ferramentas simples e precisas para todos os seus cálculos de data',
    seoH2a: 'O que você pode calcular com DateCalc.app?',
    seoP1: 'DateCalc.app é uma coleção gratuita de calculadoras de data e hora que cobre todos os cálculos comuns de que você pode precisar. Seja para saber exatamente quantos anos você tem, contar os dias entre duas datas, calcular os dias úteis antes de um prazo ou converter um horário entre fusos horários — este site tem uma ferramenta dedicada para isso. Todas as calculadoras funcionam diretamente no seu navegador, sem necessidade de conta, sem anúncios bloqueando sua visão e sem barreiras de pagamento. Os resultados são instantâneos e a interface é limpa.',
    seoH2b: 'Por que usar uma calculadora de datas dedicada?',
    seoP2: 'A aritmética mental de datas é propensa a erros: o comprimento dos meses varia, os anos bissextos adicionam um dia a cada quatro anos e os fusos horários podem mudar completamente a data do calendário. Uma calculadora dedicada elimina as suposições. Profissionais as usam para prazos legais, durações de contratos e cronogramas de projetos. Pais usam calculadoras de idade para bebês para acompanhar marcos do desenvolvimento. DateCalc.app cobre todos esses casos de uso em inglês, francês, espanhol e português.',
    faqs: [
      { q: 'Como calcular minha idade exata?', a: 'Use nossa calculadora de idade: insira sua data de nascimento e obtenha sua idade em anos, meses, dias e segundos.' },
      { q: 'Como calcular dias entre duas datas?', a: 'Use a calculadora de dias entre datas: insira as duas datas e obtenha a diferença em dias, semanas e meses.' },
      { q: 'Como converter fusos horários?', a: 'Use o conversor de fuso horário: selecione os fusos de origem e destino e insira o horário para conversão instantânea.' },
    ],
  },
};

module.exports = {
  pages: [
    {
      id: 'home-en',
      isHomepage: true,
      slugs: { en: '', fr: 'fr', es: 'es', pt: 'pt' },
    },
  ],

  render(pageId, lang) {
    const t = T[lang];

    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

    const formGrid = buildGrid(TOOLS_BY_LANG[lang]);

    const resultsSection = '';

    const seoBlock = `<div class="seo-block">
  <div>
    <h2>${t.seoH2a}</h2>
    <p>${t.seoP1}</p>
  </div>
  <div>
    <h2>${t.seoH2b}</h2>
    <p>${t.seoP2}</p>
  </div>
</div>
<div class="faq-block">
  <h2>FAQ</h2>
  ${t.faqs.map(f => `<div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`).join('\n  ')}
</div>`;

    return {
      title: t.title,
      metaDesc: t.metaDesc,
      headlineBlock,
      formGrid,
      resultsSection,
      seoBlock,
      faqs: t.faqs,
      script: '',
      source: null,
    };
  },
};
