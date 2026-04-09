// Age Calculator (live precise counter — updates every second)

const EVENTS = require('../data/events.json');
const EVENTS_FR = require('../data/events_fr.json');
const EVENTS_ES = require('../data/events_es.json');

const T = {
  en: {
    title: 'Age Calculator 2026 – How Old Am I? Free & Instant',
    metaDesc: 'Free age calculator. Enter your date of birth and instantly get your exact age in years, months, weeks, days and seconds — live counter, no sign-up needed.',
    kicker: 'Age Calculator',
    headline: 'How <em>old</em><br>am I?',
    subhead: 'Enter your date of birth — get your exact age, live to the second.',
    dobLabel: 'Date of birth',
    refToggleLabel: 'Calculate for a specific date',
    refLabel: 'Reference date',
    calcBtn: '→ Calculate',
    ariaDay: 'Day', ariaMonth: 'Month', ariaYear: 'Year',
    tipText: '"Knowing your exact age, down to the second, is stranger and more beautiful than you think."',
    examples: ['Born July 15, 1990', 'Born January 1, 2000', 'Born December 25, 1985'],
    resultsHeader: 'Your exact age',
    heroSuffix: 'years old',
    months: 'months', weeks: 'weeks', days: 'days', hours: 'hours',
    zodiacLbl: 'Zodiac', genLbl: 'Generation', dayLbl: 'Day born', leapLbl: 'Leap years lived',
    errInvalid: '→ Invalid date. Please check your input.',
    errFuture: '→ Date of birth cannot be in the future.',
    nextBdayIn: 'Next birthday in',
    nextBdayToday: '🎉 Happy Birthday!',
    dayWord: ['day', 'days'],
    pY: 'y', pM: 'mo', pD: 'd',
    zodiacSigns: ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn'],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    gens: [{y:1928,n:'Silent Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
    wTitle: 'The World When You Were Born',
    wLblEvents: 'Events', wLblMusic: 'Music', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prices',
    wLblBread: 'Bread', wLblGas: 'Gas', wLblHouse: 'House',
    seoH2a: 'How is age calculated?',
    seoP1: 'Your age is calculated by subtracting your birth date from today\'s date, taking into account the varying lengths of each month and the extra day added during leap years. The calculation works in three steps: first it finds the number of full years elapsed, then the remaining months, and finally the remaining days. For example, someone born on July 15, 1990 turns 35 in July 2025, but before that birthday they are still 34 years, 11 months, and some days old. This tool handles all those edge cases automatically — including February 29 birthdays — and displays the result as a live counter that updates every second, reflecting the relentless passage of time.',
    seoH2b: 'Why calculate age to the second?',
    seoP2: 'Knowing your exact age in days, hours, or even seconds has real practical value beyond curiosity. Medical professionals use age in days for pediatric dosing calculations. Legal systems worldwide tie rights and obligations to precise age thresholds — voting at 18, retirement benefits at 62 or 65, pension eligibility, and more. Insurance underwriters use age-in-months for premium calculations. Genealogists verify historical records by cross-checking reported ages against census dates. The live second-by-second counter is also a powerful reminder that your life is always in motion — a perspective that many people find unexpectedly moving.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Life Expectancy' },
    faqs: [
      { q: 'How old am I if I was born in 1980?', a: 'If you were born in 1980, you turned 46 in 2026 (or will turn 46 later in the year, depending on your birthday). Enter your exact birth date above for a precise answer including months, weeks, and days.' },
      { q: 'How old am I if I was born in 1990?', a: 'If you were born in 1990, you are 35 or 36 years old in 2026, depending on whether your birthday has passed. Use the calculator above with your exact date to get your age to the day.' },
      { q: 'How old am I if I was born in 2000?', a: 'If you were born in 2000, you turned 26 in 2026. People born in 2000 are part of Generation Z. Enter your full birth date to see your exact age in months, weeks, and days.' },
      { q: 'How do I calculate my exact age in days?', a: 'Subtract your birth date from today\'s date. There are about 365.25 days per year on average, accounting for leap years. This tool does the math instantly — just enter your birthday and the "Days" figure is shown directly in the results.' },
      { q: 'What is my age if I was born in a leap year?', a: 'If you were born on February 29, your birthday officially falls on March 1 in non-leap years for legal purposes in most countries. Our calculator handles this correctly and still counts your age accurately every year.' },
      { q: 'Can I use this as an age calculator for retirement?', a: 'Yes. Use the "Calculate for a specific date" option and enter your planned retirement date. The tool will show exactly how old you will be on that day — useful for comparing against Social Security eligibility ages (62, 67, or 70 in the US).' },
      { q: 'Can I calculate my age on a future date?', a: 'Yes. Check the "On a specific date" option and enter any reference date in the future to see what age you will be on that day. This is useful for planning milestones like school enrollment, retirement, or insurance renewals.' },
      { q: 'How do I find my age in months?', a: 'Your age in months is your total number of completed years multiplied by 12, plus the remaining complete months. For example, a person who is 35 years and 4 months old is 424 months old. This calculator shows the exact month count in the results strip.' },
    ],
  },
  fr: {
    title: 'Calculateur d\'âge 2026 – Quel âge ai-je ? Gratuit',
    metaDesc: 'Calculateur d\'âge gratuit. Entrez votre date de naissance et obtenez votre âge exact en années, mois, semaines, jours et secondes — compteur en temps réel.',
    kicker: 'Calculateur d\'âge',
    headline: 'Quel <em>âge</em><br>ai-je ?',
    subhead: 'Entrez votre date de naissance — obtenez votre âge exact, en direct à la seconde.',
    dobLabel: 'Date de naissance',
    refToggleLabel: 'Calculer à une date précise',
    refLabel: 'Date de référence',
    calcBtn: '→ Calculer',
    ariaDay: 'Jour', ariaMonth: 'Mois', ariaYear: 'Année',
    tipText: '"Connaître son âge exact, à la seconde près, est plus étrange et plus beau qu\'on ne le croit."',
    examples: ['Né le 15 juillet 1990', 'Né le 1er janvier 2000', 'Né le 25 décembre 1985'],
    resultsHeader: 'Votre âge exact',
    heroSuffix: 'ans',
    months: 'mois', weeks: 'semaines', days: 'jours', hours: 'heures',
    zodiacLbl: 'Zodiaque', genLbl: 'Génération', dayLbl: 'Jour de naissance', leapLbl: 'Années bissextiles vécues',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errFuture: '→ La date de naissance ne peut pas être dans le futur.',
    nextBdayIn: 'Prochain anniversaire dans',
    nextBdayToday: '🎉 Joyeux anniversaire !',
    dayWord: ['jour', 'jours'],
    pY: 'a', pM: 'mo', pD: 'j',
    zodiacSigns: ['Capricorne','Verseau','Poissons','Bélier','Taureau','Gémeaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire','Capricorne'],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    gens: [{y:1928,n:'Génération Silencieuse'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Génération X'},{y:1981,n:'Millénial'},{y:1997,n:'Génération Z'},{y:2013,n:'Génération Alpha'}],
    wTitle: 'Le monde quand vous êtes né',
    wLblEvents: 'Événements', wLblMusic: 'Musique', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prix',
    wLblBread: 'Pain', wLblGas: 'Essence', wLblHouse: 'Maison',
    seoH2a: 'Comment calcule-t-on son âge ?',
    seoP1: 'L\'âge se calcule en soustrayant la date de naissance de la date actuelle, en tenant compte de la longueur variable de chaque mois et du jour supplémentaire des années bissextiles. Le calcul se fait en trois étapes : d\'abord le nombre d\'années complètes écoulées, puis les mois restants, et enfin les jours restants. Par exemple, une personne née le 15 juillet 1990 fête ses 35 ans en juillet 2025, mais avant cet anniversaire elle a encore 34 ans, 11 mois et quelques jours. Cet outil gère tous ces cas particuliers automatiquement — y compris les anniversaires du 29 février — et affiche le résultat sous forme de compteur en direct mis à jour chaque seconde.',
    seoH2b: 'Pourquoi calculer son âge à la seconde ?',
    seoP2: 'Connaître son âge exact en jours, heures ou même en secondes a une vraie valeur pratique au-delà de la simple curiosité. Les médecins utilisent l\'âge en jours pour les calculs pédiatriques. Les systèmes juridiques lient les droits à des seuils d\'âge précis — vote à 18 ans, retraite à 62 ou 65 ans, éligibilité aux pensions. Les assureurs utilisent l\'âge en mois pour calculer les primes. Les généalogistes vérifient les archives historiques en croisant les âges déclarés avec les dates de recensement. Le compteur seconde par seconde rappelle aussi que la vie est toujours en mouvement.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administration de la sécurité sociale américaine – Espérance de vie' },
    faqs: [
      { q: 'Quel âge ai-je si je suis né en 1980 ?', a: 'Si vous êtes né en 1980, vous avez eu 46 ans en 2026 (ou vous les aurez plus tard dans l\'année selon votre date d\'anniversaire). Entrez votre date de naissance exacte ci-dessus pour un résultat précis en mois, semaines et jours.' },
      { q: 'Quel âge ai-je si je suis né en 1990 ?', a: 'Si vous êtes né en 1990, vous avez 35 ou 36 ans en 2026, selon que votre anniversaire est passé ou non. Utilisez le calculateur avec votre date exacte pour connaître votre âge au jour près.' },
      { q: 'Quel âge ai-je si je suis né en 2000 ?', a: 'Si vous êtes né en 2000, vous avez eu 26 ans en 2026. Les personnes nées en 2000 appartiennent à la Génération Z. Entrez votre date de naissance complète pour voir votre âge en mois, semaines et jours.' },
      { q: 'Comment calculer mon âge exact en jours ?', a: 'Soustrayez votre date de naissance d\'aujourd\'hui. Il y a environ 365,25 jours par an en moyenne. Cet outil fait le calcul instantanément — entrez votre anniversaire et le nombre de jours apparaît directement dans les résultats.' },
      { q: 'Quel est mon âge si je suis né une année bissextile ?', a: 'Si vous êtes né le 29 février, votre anniversaire tombe officiellement le 1er mars les années non bissextiles dans la plupart des pays. Notre calculateur gère cela correctement et compte votre âge avec précision chaque année.' },
      { q: 'Puis-je utiliser cet outil comme calculateur d\'âge pour la retraite ?', a: 'Oui. Utilisez l\'option "Calculer à une date précise" et entrez votre date de départ à la retraite prévue. L\'outil affichera exactement quel âge vous aurez ce jour-là, utile pour comparer avec les seuils d\'éligibilité aux pensions.' },
      { q: 'Puis-je calculer mon âge à une date future ?', a: 'Oui. Cochez "À une date précise" et entrez une date future pour connaître votre âge ce jour-là. Très utile pour planifier des jalons comme l\'inscription scolaire, la retraite ou les renouvellements d\'assurance.' },
      { q: 'Comment trouver mon âge en mois ?', a: 'Votre âge en mois est le nombre total d\'années complètes multiplié par 12, plus les mois complets restants. Par exemple, une personne de 35 ans et 4 mois a 424 mois. Ce calculateur affiche le nombre exact de mois dans la barre de résultats.' },
    ],
  },
  es: {
    title: 'Calculadora de Edad 2026 – ¿Cuántos años tengo? Gratis',
    metaDesc: '¿Cuántos años tengo? Ingresa tu fecha de nacimiento y obtén tu edad exacta en años, meses, días y segundos — gratis, sin registro, al instante.',
    kicker: 'Calculadora de edad',
    headline: '¿Cuántos <em>años</em><br>tengo?',
    subhead: 'Ingresa tu fecha de nacimiento — obtén tu edad exacta, en vivo al segundo.',
    dobLabel: 'Fecha de nacimiento',
    refToggleLabel: 'Calcular en una fecha específica',
    refLabel: 'Fecha de referencia',
    calcBtn: '→ Calcular',
    ariaDay: 'Día', ariaMonth: 'Mes', ariaYear: 'Año',
    tipText: '"Conocer tu edad exacta, al segundo, es más extraño y más hermoso de lo que crees."',
    examples: ['Nacido el 15 jul 1990', 'Nacido el 1 ene 2000', 'Nacido el 25 dic 1985'],
    resultsHeader: 'Tu edad exacta',
    heroSuffix: 'años',
    months: 'meses', weeks: 'semanas', days: 'días', hours: 'horas',
    zodiacLbl: 'Zodiaco', genLbl: 'Generación', dayLbl: 'Día de nacimiento', leapLbl: 'Años bisiestos vividos',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errFuture: '→ La fecha de nacimiento no puede ser futura.',
    nextBdayIn: 'Próximo cumpleaños en',
    nextBdayToday: '🎉 ¡Feliz cumpleaños!',
    dayWord: ['día', 'días'],
    pY: 'a', pM: 'me', pD: 'd',
    zodiacSigns: ['Capricornio','Acuario','Piscis','Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio'],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    gens: [{y:1928,n:'Generación Silenciosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generación X'},{y:1981,n:'Millennial'},{y:1997,n:'Generación Z'},{y:2013,n:'Generación Alfa'}],
    wTitle: 'El mundo cuando naciste',
    wLblEvents: 'Eventos', wLblMusic: 'Música', wLblFilm: 'Película', wLblTech: 'Tecnología', wLblPrices: 'Precios',
    wLblBread: 'Pan', wLblGas: 'Gasolina', wLblHouse: 'Casa',
    seoH2a: '¿Cómo se calcula la edad?',
    seoP1: 'La edad se calcula restando la fecha de nacimiento a la fecha actual, teniendo en cuenta la longitud variable de cada mes y el día extra de los años bisiestos. El cálculo se realiza en tres pasos: primero se encuentran los años completos transcurridos, luego los meses restantes y finalmente los días restantes. Por ejemplo, alguien nacido el 15 de julio de 1990 cumple 35 años en julio de 2025, pero antes de ese cumpleaños tiene 34 años, 11 meses y algunos días. Esta herramienta maneja todos esos casos de borde automáticamente, incluidos los cumpleaños del 29 de febrero, y muestra el resultado como un contador en vivo que se actualiza cada segundo.',
    seoH2b: '¿Por qué calcular la edad al segundo?',
    seoP2: 'Conocer tu edad exacta en días, horas o incluso segundos tiene un valor práctico real más allá de la curiosidad. Los profesionales médicos usan la edad en días para cálculos de dosificación pediátrica. Los sistemas legales vinculan derechos y obligaciones a umbrales de edad precisos: votar a los 18, jubilación a los 62 o 65, elegibilidad para pensiones. Las aseguradoras usan la edad en meses para cálculos de primas. Los genealogistas verifican registros históricos cruzando edades declaradas con fechas de censo. El contador segundo a segundo también recuerda que tu vida siempre está en movimiento.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administración del Seguro Social de EE. UU. – Esperanza de vida' },
    faqs: [
      { q: '¿Cuántos años tengo si nací en 1980?', a: 'Si naciste en 1980, cumpliste 46 años en 2026 (o los cumplirás más adelante en el año según tu fecha de nacimiento). Ingresa tu fecha exacta arriba para obtener un resultado preciso en meses, semanas y días.' },
      { q: '¿Cuántos años tengo si nací en 1990?', a: 'Si naciste en 1990, tienes 35 o 36 años en 2026, dependiendo de si ya pasó tu cumpleaños. Usa la calculadora con tu fecha exacta para conocer tu edad al día.' },
      { q: '¿Cuántos años tengo si nací en 2000?', a: 'Si naciste en 2000, cumpliste 26 años en 2026. Las personas nacidas en 2000 pertenecen a la Generación Z. Ingresa tu fecha de nacimiento completa para ver tu edad en meses, semanas y días.' },
      { q: '¿Cómo calculo mi edad exacta en días?', a: 'Resta tu fecha de nacimiento de la fecha de hoy. Hay aproximadamente 365,25 días por año en promedio. Esta herramienta hace el cálculo al instante — ingresa tu cumpleaños y el número de días aparece directamente en los resultados.' },
      { q: '¿Cuál es mi edad si nací en un año bisiesto?', a: 'Si naciste el 29 de febrero, tu cumpleaños cae oficialmente el 1 de marzo en los años no bisiestos en la mayoría de países. Nuestra calculadora maneja esto correctamente y cuenta tu edad con precisión cada año.' },
      { q: '¿Puedo usar esto como calculadora de edad para la jubilación?', a: 'Sí. Usa la opción "Calcular en una fecha específica" e ingresa tu fecha de jubilación planificada. La herramienta mostrará exactamente qué edad tendrás ese día, útil para comparar con los umbrales de elegibilidad para pensiones.' },
      { q: '¿Puedo calcular mi edad en una fecha futura?', a: 'Sí. Marca "En una fecha específica" e ingresa una fecha futura para saber qué edad tendrás ese día. Muy útil para planificar hitos como la inscripción escolar, la jubilación o las renovaciones de seguro.' },
      { q: '¿Cómo encuentro mi edad en meses?', a: 'Tu edad en meses es el número total de años completos multiplicado por 12, más los meses completos restantes. Por ejemplo, una persona de 35 años y 4 meses tiene 424 meses. Esta calculadora muestra el conteo exacto de meses en la barra de resultados.' },
    ],
  },
  pt: {
    title: 'Calculadora de Idade 2026 – Quantos Anos Tenho? Grátis',
    metaDesc: 'Calculadora de idade gratuita. Insira sua data de nascimento e obtenha sua idade exata em anos, meses, dias e segundos — contador ao vivo, sem cadastro.',
    kicker: 'Calculadora de Idade',
    headline: 'Qual é<br><em>a minha<br>idade?</em>',
    subhead: 'Insira sua data de nascimento para calcular sua idade exata',
    resultsHeader: 'Sua idade exata',
    errInvalid: 'Data inválida. Por favor, verifique dia, mês e ano.',
    errFuture: 'A data de nascimento não pode ser no futuro.',
    labelDay: 'Dia', labelMonth: 'Mês', labelYear: 'Ano',
    ariaDay: 'Dia de nascimento', ariaMonth: 'Mês de nascimento', ariaYear: 'Ano de nascimento',
    labelRefDay: 'Dia de referência', labelRefMonth: 'Mês de referência', labelRefYear: 'Ano de referência',
    ariaRefDay: 'Dia de referência', ariaRefMonth: 'Mês de referência', ariaRefYear: 'Ano de referência',
    btnCalc: '→ CALCULAR',
    refToggle: 'Calcular para uma data específica',
    unitYears: 'anos', unitMonths: 'meses', unitWeeks: 'semanas', unitDays: 'dias', unitHours: 'horas',
    zodiacLabel: 'Signo', genLabel: 'Geração',
    examplesTitle: 'Exemplos', examplesNote: 'Clique para preencher o formulário',
    examples: [
      { label: 'Nascido em 15 jul 1990', d: 15, m: 7, y: 1990 },
      { label: 'Nascido em 3 mar 1975',  d: 3,  m: 3, y: 1975 },
      { label: 'Nascido em 22 dez 2000', d: 22, m: 12, y: 2000 },
    ],
    seoH2a: 'Como calcular minha idade exata?',
    seoP1: 'Sua idade é calculada subtraindo sua data de nascimento da data de hoje, levando em conta os diferentes comprimentos de cada mês e o dia extra nos anos bissextos. Por exemplo, alguém nascido em 15 de julho de 1990 faz 35 anos em julho de 2025, mas antes disso ainda tem 34 anos, 11 meses e alguns dias. Esta ferramenta lida com todos esses casos automaticamente.',
    seoH2b: 'Qual é o signo de cada data de nascimento?',
    seoP2: 'O signo zodiacal é determinado pelo mês e dia de nascimento. Por exemplo, nascidos entre 21 de março e 19 de abril são Áries. Use a calculadora acima para encontrar sua idade exata em anos, meses, semanas e dias.',
    wTitle: 'O Mundo em {year}',
    wLblEvents: 'Eventos', wLblMusic: 'Música', wLblFilm: 'Filme', wLblTech: 'Tecnologia', wLblPrices: 'Preços',
    wLblBread: 'Pão', wLblGas: 'Gasolina', wLblHouse: 'Casa',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      { q: 'Como calcular minha idade exata em dias?', a: 'Subtraia sua data de nascimento da data de hoje. Há cerca de 365,25 dias por ano em média, levando em conta os anos bissextos. Esta ferramenta faz o cálculo instantaneamente — basta inserir seu aniversário e o número de "Dias" aparece diretamente nos resultados.' },
      { q: 'Posso usar esta calculadora para saber minha idade na aposentadoria?', a: 'Sim. Use a opção "Calcular para uma data específica" e insira a data planejada de aposentadoria. A ferramenta mostrará exatamente quantos anos você terá naquele dia.' },
      { q: 'Como encontro minha idade em meses?', a: 'Sua idade em meses é o número total de anos completos multiplicado por 12, mais os meses completos restantes. Por exemplo, uma pessoa com 35 anos e 4 meses tem 424 meses. Esta calculadora mostra o total exato de meses nos resultados.' },
      { q: 'Quantas semanas tenho de vida?', a: 'Divida o total de dias da sua vida por 7. Por exemplo, uma pessoa de 35 anos viveu aproximadamente 1.827 semanas. A calculadora mostra esse número diretamente.' },
      { q: 'Qual é a diferença entre idade cronológica e biológica?', a: 'A idade cronológica é o tempo decorrido desde o nascimento, medida em anos, meses e dias. A idade biológica reflete o estado de saúde e envelhecimento celular — é diferente para cada pessoa. Esta calculadora mede a idade cronológica.' },
      { q: 'De que geração sou se nasci em 1990?', a: 'Nascidos em 1990 pertencem à geração Millennial (também chamada Geração Y), geralmente definida entre 1981 e 1996. Esta geração cresceu com a internet e transformações digitais.' },
      { q: 'Posso calcular a idade de outra pessoa?', a: 'Sim. Basta inserir a data de nascimento de outra pessoa no formulário. A calculadora funciona para qualquer data de nascimento passada.' },
      { q: 'A calculadora funciona para anos bissextos?', a: 'Sim. Se você nasceu em 29 de fevereiro, a calculadora lida com esse caso automaticamente, calculando seu aniversário como 28 de fevereiro nos anos não bissextos.' },
    ],
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Expectativa de vida' },
    zodiacSigns: [
      { name: 'Capricórnio', start: [12,22] }, { name: 'Aquário',    start: [1,20] },
      { name: 'Peixes',      start: [2,19]  }, { name: 'Áries',      start: [3,21] },
      { name: 'Touro',       start: [4,20]  }, { name: 'Gêmeos',     start: [5,21] },
      { name: 'Câncer',      start: [6,21]  }, { name: 'Leão',       start: [7,23] },
      { name: 'Virgem',      start: [8,23]  }, { name: 'Libra',      start: [9,23] },
      { name: 'Escorpião',   start: [10,23] }, { name: 'Sagitário',  start: [11,22] },
    ],
    genRanges: [
      { y: 0,    n: 'Geração Alpha' },
      { y: 1928, n: 'Geração Silenciosa' },
      { y: 1946, n: 'Baby Boomer' },
      { y: 1965, n: 'Geração X' },
      { y: 1981, n: 'Millennial' },
      { y: 1997, n: 'Geração Z' },
      { y: 2013, n: 'Geração Alpha' },
    ],
  },
  de: {
    title: 'Altersrechner 2026 – Wie alt bin ich? Kostenlos & Sofort',
    metaDesc: 'Kostenloser Altersrechner. Gib dein Geburtsdatum ein und erhalte dein genaues Alter in Jahren, Monaten, Tagen und Sekunden — Live-Zähler, ohne Anmeldung.',
    kicker: 'Altersrechner',
    headline: 'Wie alt<br>bin <em>ich</em>?',
    subhead: 'Gib dein Geburtsdatum ein — erhalte dein genaues Alter, live bis zur Sekunde.',
    dobLabel: 'Geburtsdatum',
    refToggleLabel: 'Für ein bestimmtes Datum berechnen',
    refLabel: 'Referenzdatum',
    calcBtn: '→ BERECHNEN',
    ariaDay: 'Tag', ariaMonth: 'Monat', ariaYear: 'Jahr',
    tipText: '"Sein genaues Alter bis auf die Sekunde zu kennen, ist seltsamer und schöner, als man denkt."',
    examples: ['Geboren am 15. Juli 1990', 'Geboren am 1. Januar 2000', 'Geboren am 25. Dezember 1985'],
    resultsHeader: 'Dein genaues Alter',
    heroSuffix: 'Jahre alt',
    months: 'Monate', weeks: 'Wochen', days: 'Tage', hours: 'Stunden',
    zodiacLbl: 'Sternzeichen', genLbl: 'Generation', dayLbl: 'Geburtstag', leapLbl: 'Gelebte Schaltjahre',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfe deine Eingabe.',
    errFuture: '→ Das Geburtsdatum darf nicht in der Zukunft liegen.',
    nextBdayIn: 'Nächster Geburtstag in',
    nextBdayToday: '🎉 Herzlichen Glückwunsch zum Geburtstag!',
    dayWord: ['Tag', 'Tagen'],
    pY: 'J', pM: 'Mo', pD: 'T',
    zodiacSigns: ['Steinbock','Wassermann','Fische','Widder','Stier','Zwillinge','Krebs','Löwe','Jungfrau','Waage','Skorpion','Schütze','Steinbock'],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    gens: [{y:1928,n:'Stille Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
    wTitle: 'Die Welt in deinem Geburtsjahr',
    wLblEvents: 'Ereignisse', wLblMusic: 'Musik', wLblFilm: 'Film', wLblTech: 'Technik', wLblPrices: 'Preise',
    wLblBread: 'Brot', wLblGas: 'Benzin', wLblHouse: 'Haus',
    seoH2a: 'Wie wird das Alter berechnet?',
    seoP1: 'Das Alter wird berechnet, indem das Geburtsdatum vom heutigen Datum abgezogen wird, wobei die unterschiedliche Länge der Monate und der Schalttag in Schaltjahren berücksichtigt werden. Die Berechnung erfolgt in drei Schritten: Zuerst werden die vollständigen Jahre ermittelt, dann die verbleibenden Monate und schließlich die verbleibenden Tage. Zum Beispiel wird jemand, der am 15. Juli 1990 geboren wurde, im Juli 2025 35 Jahre alt, aber vor diesem Geburtstag ist er noch 34 Jahre, 11 Monate und einige Tage alt. Dieses Tool behandelt all diese Sonderfälle automatisch — einschließlich Geburtstage am 29. Februar — und zeigt das Ergebnis als Live-Zähler an, der jede Sekunde aktualisiert wird.',
    seoH2b: 'Warum das Alter sekundengenau berechnen?',
    seoP2: 'Das genaue Alter in Tagen, Stunden oder sogar Sekunden zu kennen, hat einen echten praktischen Wert jenseits bloßer Neugier. Mediziner verwenden das Alter in Tagen für pädiatrische Dosierungsberechnungen. Rechtssysteme knüpfen Rechte und Pflichten an genaue Altersschwellen — Wahlrecht mit 18, Rentenanspruch mit 63 oder 67. Versicherungen nutzen das Alter in Monaten für Prämienberechnungen. Der sekundengenaue Live-Zähler erinnert uns außerdem daran, dass das Leben sich stets bewegt.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Lebenserwartung' },
    faqs: [
      { q: 'Wie alt bin ich, wenn ich 1980 geboren wurde?', a: 'Wenn du 1980 geboren wurdest, bist du im Jahr 2026 46 Jahre alt (oder wirst 46, je nachdem ob dein Geburtstag bereits war). Gib oben dein genaues Geburtsdatum ein für eine präzise Antwort in Monaten, Wochen und Tagen.' },
      { q: 'Wie alt bin ich, wenn ich 1990 geboren wurde?', a: 'Wenn du 1990 geboren wurdest, bist du 2026 entweder 35 oder 36 Jahre alt, je nachdem ob dein Geburtstag bereits war. Verwende den Rechner mit deinem genauen Datum, um dein Alter auf den Tag genau zu erhalten.' },
      { q: 'Wie alt bin ich, wenn ich 2000 geboren wurde?', a: 'Wenn du im Jahr 2000 geboren wurdest, bist du im Jahr 2026 26 Jahre alt. Menschen aus dem Jahr 2000 gehören der Generation Z an. Gib dein vollständiges Geburtsdatum ein, um dein Alter in Monaten, Wochen und Tagen zu sehen.' },
      { q: 'Wie berechne ich mein genaues Alter in Tagen?', a: 'Ziehe dein Geburtsdatum vom heutigen Datum ab. Es gibt durchschnittlich ca. 365,25 Tage pro Jahr, was Schaltjahre berücksichtigt. Dieses Tool führt die Berechnung sofort durch — gib deinen Geburtstag ein und die Anzahl der „Tage" wird direkt in den Ergebnissen angezeigt.' },
      { q: 'Wie alt bin ich, wenn ich in einem Schaltjahr geboren wurde?', a: 'Wenn du am 29. Februar geboren wurdest, fällt dein Geburtstag in den meisten Ländern aus rechtlichen Gründen in Nicht-Schaltjahren auf den 1. März. Unser Rechner behandelt dies korrekt und zählt dein Alter jedes Jahr genau.' },
      { q: 'Kann ich diesen Altersrechner für die Rente verwenden?', a: 'Ja. Nutze die Option „Für ein bestimmtes Datum berechnen" und gib dein geplantes Rentendatum ein. Das Tool zeigt dir genau, wie alt du an diesem Tag sein wirst.' },
      { q: 'Kann ich mein Alter an einem zukünftigen Datum berechnen?', a: 'Ja. Aktiviere „Für ein bestimmtes Datum" und gib ein beliebiges zukünftiges Datum ein, um zu sehen, wie alt du dann sein wirst. Nützlich für die Planung von Meilensteinen wie Schulanmeldung, Rente oder Versicherungsverlängerungen.' },
      { q: 'Wie finde ich mein Alter in Monaten?', a: 'Dein Alter in Monaten ist die Gesamtzahl der vollendeten Jahre multipliziert mit 12, plus die verbleibenden vollständigen Monate. Zum Beispiel ist eine Person, die 35 Jahre und 4 Monate alt ist, 424 Monate alt. Dieser Rechner zeigt die genaue Monatsanzahl in der Ergebnisleiste.' },
    ],
    zodiacSigns_arr: ['Steinbock','Wassermann','Fische','Widder','Stier','Zwillinge','Krebs','Löwe','Jungfrau','Waage','Skorpion','Schütze','Steinbock'],
    genRanges: [
      { y: 0,    n: 'Generation Alpha' },
      { y: 1928, n: 'Stille Generation' },
      { y: 1946, n: 'Baby Boomer' },
      { y: 1965, n: 'Generation X' },
      { y: 1981, n: 'Millennial' },
      { y: 1997, n: 'Generation Z' },
      { y: 2013, n: 'Generation Alpha' },
    ],
  },
  it: {
    title: 'Calcolo Età 2026 – Quanti Anni Ho? Gratis e Immediato',
    metaDesc: 'Calcola la tua età esatta in anni, mesi, giorni e secondi. Inserisci la tua data di nascita — gratis, senza registrazione, risultato immediato.',
    kicker: 'Calcolo Età',
    headline: 'Quanti <em>anni</em><br>ho?',
    subhead: 'Inserisci la tua data di nascita — scopri la tua età esatta, in tempo reale al secondo.',
    dobLabel: 'Data di nascita',
    refToggleLabel: 'Calcola per una data specifica',
    refLabel: 'Data di riferimento',
    calcBtn: '→ CALCOLA',
    ariaDay: 'Giorno', ariaMonth: 'Mese', ariaYear: 'Anno',
    tipText: '"Conoscere la propria età esatta, fino al secondo, è più strano e più bello di quanto si pensi."',
    examples: ['Nato il 15 luglio 1990', 'Nato il 1° gennaio 2000', 'Nato il 25 dicembre 1985'],
    resultsHeader: 'La tua età esatta',
    heroSuffix: 'anni',
    months: 'mesi', weeks: 'settimane', days: 'giorni', hours: 'ore',
    zodiacLbl: 'Segno zodiacale', genLbl: 'Generazione', dayLbl: 'Giorno di nascita', leapLbl: 'Anni bisestili vissuti',
    errInvalid: '→ Data non valida. Controlla i dati inseriti.',
    errFuture: '→ La data di nascita non può essere nel futuro.',
    nextBdayIn: 'Prossimo compleanno tra',
    nextBdayToday: '🎉 Buon compleanno!',
    dayWord: ['giorno', 'giorni'],
    pY: 'a', pM: 'me', pD: 'g',
    zodiacSigns: ['Capricorno','Acquario','Pesci','Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario','Capricorno'],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    gens: [{y:1928,n:'Generazione Silenziosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generazione X'},{y:1981,n:'Millennial'},{y:1997,n:'Generazione Z'},{y:2013,n:'Generazione Alpha'}],
    wTitle: 'Il mondo quando sei nato',
    wLblEvents: 'Eventi', wLblMusic: 'Musica', wLblFilm: 'Film', wLblTech: 'Tecnologia', wLblPrices: 'Prezzi',
    wLblBread: 'Pane', wLblGas: 'Benzina', wLblHouse: 'Casa',
    seoH2a: 'Come si calcola l\'età?',
    seoP1: 'L\'età viene calcolata sottraendo la data di nascita dalla data odierna, tenendo conto della diversa durata di ogni mese e del giorno extra negli anni bisestili. Il calcolo avviene in tre fasi: prima si trovano gli anni completi trascorsi, poi i mesi rimanenti e infine i giorni rimanenti. Ad esempio, chi è nato il 15 luglio 1990 compie 35 anni nel luglio 2025, ma prima di quel compleanno ha ancora 34 anni, 11 mesi e alcuni giorni. Questo strumento gestisce automaticamente tutti questi casi particolari — inclusi i compleanni del 29 febbraio — e mostra il risultato come un contatore in tempo reale aggiornato ogni secondo.',
    seoH2b: 'Perché calcolare l\'età al secondo?',
    seoP2: 'Conoscere la propria età esatta in giorni, ore o persino secondi ha un valore pratico reale oltre la semplice curiosità. I professionisti medici usano l\'età in giorni per i calcoli pediatrici. I sistemi legali collegano diritti e obblighi a precise soglie di età — voto a 18 anni, pensione a 67 anni. Le assicurazioni usano l\'età in mesi per i calcoli dei premi. Il contatore secondo per secondo ricorda anche che la vita è sempre in movimento.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Aspettativa di vita' },
    faqs: [
      { q: 'Quanti anni ho se sono nato nel 1980?', a: 'Se sei nato nel 1980, hai compiuto 46 anni nel 2026 (o li compirai più avanti nell\'anno, a seconda del tuo compleanno). Inserisci la tua data di nascita esatta sopra per una risposta precisa in mesi, settimane e giorni.' },
      { q: 'Quanti anni ho se sono nato nel 1990?', a: 'Se sei nato nel 1990, hai 35 o 36 anni nel 2026, a seconda che il tuo compleanno sia già passato. Usa il calcolatore con la tua data esatta per conoscere la tua età al giorno.' },
      { q: 'Quanti anni ho se sono nato nel 2000?', a: 'Se sei nato nel 2000, hai compiuto 26 anni nel 2026. Le persone nate nel 2000 appartengono alla Generazione Z. Inserisci la tua data di nascita completa per vedere la tua età in mesi, settimane e giorni.' },
      { q: 'Come calcolo la mia età esatta in giorni?', a: 'Sottrai la tua data di nascita dalla data di oggi. Ci sono circa 365,25 giorni all\'anno in media, tenendo conto degli anni bisestili. Questo strumento esegue il calcolo istantaneamente — inserisci il tuo compleanno e il numero di "giorni" appare direttamente nei risultati.' },
      { q: 'Qual è la mia età se sono nato in un anno bisestile?', a: 'Se sei nato il 29 febbraio, il tuo compleanno cade ufficialmente il 1° marzo negli anni non bisestili nella maggior parte dei paesi. Il nostro calcolatore gestisce questo correttamente e conta la tua età accuratamente ogni anno.' },
      { q: 'Posso usare questo calcolatore per la pensione?', a: 'Sì. Usa l\'opzione "Calcola per una data specifica" e inserisci la data di pensionamento pianificata. Lo strumento mostrerà esattamente quanti anni avrai quel giorno.' },
      { q: 'Posso calcolare la mia età a una data futura?', a: 'Sì. Attiva "Per una data specifica" e inserisci qualsiasi data futura per vedere quanti anni avrai quel giorno. Utile per pianificare tappe fondamentali come l\'iscrizione scolastica, il pensionamento o i rinnovi assicurativi.' },
      { q: 'Come trovo la mia età in mesi?', a: 'La tua età in mesi è il numero totale di anni completi moltiplicato per 12, più i mesi completi rimanenti. Ad esempio, una persona di 35 anni e 4 mesi ha 424 mesi. Questo calcolatore mostra il conteggio esatto dei mesi nella barra dei risultati.' },
    ],
    zodiacSigns_arr: ['Capricorno','Acquario','Pesci','Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario','Capricorno'],
    genRanges: [
      { y: 0,    n: 'Generazione Alpha' },
      { y: 1928, n: 'Generazione Silenziosa' },
      { y: 1946, n: 'Baby Boomer' },
      { y: 1965, n: 'Generazione X' },
      { y: 1981, n: 'Millennial' },
      { y: 1997, n: 'Generazione Z' },
      { y: 2013, n: 'Generazione Alpha' },
    ],
  },
  pl: {
    title: 'Kalkulator Wieku 2026 – Ile Mam Lat? Za Darmo i Natychmiast',
    metaDesc: 'Oblicz swój dokładny wiek w latach, miesiącach, dniach i sekundach. Wprowadź datę urodzenia — za darmo, bez rejestracji, natychmiast.',
    kicker: 'Kalkulator Wieku',
    headline: 'Ile mam<br><em>lat</em>?',
    subhead: 'Wprowadź datę urodzenia — poznaj swój dokładny wiek, na żywo co do sekundy.',
    dobLabel: 'Data urodzenia',
    refToggleLabel: 'Oblicz dla konkretnej daty',
    refLabel: 'Data referencyjna',
    calcBtn: '→ OBLICZ',
    ariaDay: 'Dzień', ariaMonth: 'Miesiąc', ariaYear: 'Rok',
    tipText: '"Znać swój dokładny wiek co do sekundy to coś dziwniejszego i piękniejszego, niż myślisz."',
    examples: ['Urodzony 15 lipca 1990', 'Urodzony 1 stycznia 2000', 'Urodzony 25 grudnia 1985'],
    resultsHeader: 'Twój dokładny wiek',
    heroSuffix: 'lat',
    months: 'miesiące', weeks: 'tygodnie', days: 'dni', hours: 'godziny',
    zodiacLbl: 'Znak zodiaku', genLbl: 'Pokolenie', dayLbl: 'Dzień urodzenia', leapLbl: 'Przeżyte lata przestępne',
    errInvalid: '→ Nieprawidłowa data. Sprawdź wprowadzone dane.',
    errFuture: '→ Data urodzenia nie może być w przyszłości.',
    nextBdayIn: 'Następne urodziny za',
    nextBdayToday: '🎉 Wszystkiego najlepszego z okazji urodzin!',
    dayWord: ['dzień', 'dni'],
    pY: 'l', pM: 'mies', pD: 'd',
    zodiacSigns: ['Koziorożec','Wodnik','Ryby','Baran','Byk','Bliźnięta','Rak','Lew','Panna','Waga','Skorpion','Strzelec','Koziorożec'],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    gens: [{y:1928,n:'Ciche Pokolenie'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Pokolenie X'},{y:1981,n:'Millennial'},{y:1997,n:'Pokolenie Z'},{y:2013,n:'Pokolenie Alpha'}],
    wTitle: 'Świat w roku twoich urodzin',
    wLblEvents: 'Wydarzenia', wLblMusic: 'Muzyka', wLblFilm: 'Film', wLblTech: 'Technologia', wLblPrices: 'Ceny',
    wLblBread: 'Chleb', wLblGas: 'Benzyna', wLblHouse: 'Dom',
    seoH2a: 'Jak obliczany jest wiek?',
    seoP1: 'Wiek oblicza się przez odjęcie daty urodzenia od dzisiejszej daty, uwzględniając różną długość miesięcy i dodatkowy dzień w latach przestępnych. Obliczenie odbywa się w trzech krokach: najpierw wyznacza się pełne lata, następnie pozostałe miesiące, a na końcu pozostałe dni. Na przykład ktoś urodzony 15 lipca 1990 roku kończy 35 lat w lipcu 2025, ale przed tym urodzinami ma jeszcze 34 lata, 11 miesięcy i kilka dni. Narzędzie obsługuje wszystkie te szczególne przypadki automatycznie — w tym urodziny 29 lutego — i wyświetla wynik jako licznik na żywo aktualizowany co sekundę.',
    seoH2b: 'Dlaczego obliczać wiek co do sekundy?',
    seoP2: 'Znajomość dokładnego wieku w dniach, godzinach czy sekundach ma realną wartość praktyczną poza zwykłą ciekawością. Lekarze używają wieku w dniach do obliczeń dawkowania pediatrycznego. Systemy prawne wiążą prawa i obowiązki z precyzyjnymi progami wiekowymi — prawo głosu w wieku 18 lat, emerytura w wieku 60 lub 65 lat. Ubezpieczyciele używają wieku w miesiącach do obliczania składek. Licznik sekundy po sekundzie przypomina też, że życie jest zawsze w ruchu.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Oczekiwana długość życia' },
    faqs: [
      { q: 'Ile mam lat, jeśli urodziłem się w 1980 roku?', a: 'Jeśli urodziłeś się w 1980 roku, masz 46 lat w 2026 roku (lub skończysz 46 lat później w roku, w zależności od daty urodzin). Wprowadź swoją dokładną datę urodzenia powyżej, aby uzyskać precyzyjną odpowiedź w miesiącach, tygodniach i dniach.' },
      { q: 'Ile mam lat, jeśli urodziłem się w 1990 roku?', a: 'Jeśli urodziłeś się w 1990 roku, masz 35 lub 36 lat w 2026 roku, w zależności od tego, czy twoje urodziny już minęły. Użyj kalkulatora z dokładną datą, aby poznać swój wiek co do dnia.' },
      { q: 'Ile mam lat, jeśli urodziłem się w 2000 roku?', a: 'Jeśli urodziłeś się w 2000 roku, skończyłeś 26 lat w 2026 roku. Osoby urodzone w 2000 roku należą do Pokolenia Z. Wprowadź pełną datę urodzenia, aby zobaczyć swój wiek w miesiącach, tygodniach i dniach.' },
      { q: 'Jak obliczyć mój dokładny wiek w dniach?', a: 'Odejmij datę urodzenia od dzisiejszej daty. Średnio jest ok. 365,25 dni rocznie, co uwzględnia lata przestępne. To narzędzie wykonuje obliczenie natychmiastowo — wprowadź swoją datę urodzin, a liczba „dni" pojawi się bezpośrednio w wynikach.' },
      { q: 'Jaki jest mój wiek, jeśli urodziłem się w roku przestępnym?', a: 'Jeśli urodziłeś się 29 lutego, twoje urodziny oficjalnie przypadają na 1 marca w latach nieprzestępnych w większości krajów. Nasz kalkulator obsługuje to poprawnie i liczy twój wiek dokładnie co roku.' },
      { q: 'Czy mogę użyć tego jako kalkulatora wieku emerytalnego?', a: 'Tak. Skorzystaj z opcji „Oblicz dla konkretnej daty" i wprowadź planowaną datę przejścia na emeryturę. Narzędzie pokaże dokładnie, ile lat będziesz mieć tego dnia.' },
      { q: 'Czy mogę obliczyć swój wiek na przyszłą datę?', a: 'Tak. Zaznacz „Dla konkretnej daty" i wprowadź dowolną przyszłą datę, aby sprawdzić, ile lat będziesz mieć tego dnia. Przydatne do planowania kamieni milowych, takich jak zapisy do szkoły, emerytura czy odnowienia ubezpieczenia.' },
      { q: 'Jak znaleźć swój wiek w miesiącach?', a: 'Twój wiek w miesiącach to łączna liczba pełnych lat pomnożona przez 12, plus pozostałe pełne miesiące. Na przykład osoba mająca 35 lat i 4 miesiące ma 424 miesiące. Ten kalkulator pokazuje dokładną liczbę miesięcy w pasku wyników.' },
    ],
    zodiacSigns_arr: ['Koziorożec','Wodnik','Ryby','Baran','Byk','Bliźnięta','Rak','Lew','Panna','Waga','Skorpion','Strzelec','Koziorożec'],
    genRanges: [
      { y: 0,    n: 'Pokolenie Alpha' },
      { y: 1928, n: 'Ciche Pokolenie' },
      { y: 1946, n: 'Baby Boomer' },
      { y: 1965, n: 'Pokolenie X' },
      { y: 1981, n: 'Millennial' },
      { y: 1997, n: 'Pokolenie Z' },
      { y: 2013, n: 'Pokolenie Alpha' },
    ],
  },
  ja: {
    title: '年齢計算機 2026 – 今何歳？無料・即時',
    metaDesc: '生年月日を入力するだけで、年・月・日・秒単位で正確な年齢がわかります。無料・登録不要・即時。',
    kicker: '年齢計算機',
    headline: '今<br><em>何歳</em>ですか？',
    subhead: '生年月日を入力してください — 毎秒リアルタイムで正確な年齢を表示します。',
    dobLabel: '生年月日',
    refToggleLabel: '特定の日付で計算する',
    refLabel: '基準日',
    calcBtn: '→ 計算する',
    ariaDay: '日', ariaMonth: '月', ariaYear: '年',
    tipText: '"自分の正確な年齢を秒単位で知ることは、思っているより不思議で美しい体験です。"',
    examples: ['1990年7月15日生まれ', '2000年1月1日生まれ', '1985年12月25日生まれ'],
    resultsHeader: '正確な年齢',
    heroSuffix: '歳',
    months: 'ヶ月', weeks: '週', days: '日', hours: '時間',
    zodiacLbl: '星座', genLbl: '世代', dayLbl: '生まれた曜日', leapLbl: '経験したうるう年',
    errInvalid: '→ 無効な日付です。入力を確認してください。',
    errFuture: '→ 生年月日は未来の日付にできません。',
    nextBdayIn: '次の誕生日まで',
    nextBdayToday: '🎉 お誕生日おめでとうございます！',
    dayWord: ['日', '日'],
    pY: '歳', pM: 'ヶ月', pD: '日',
    zodiacSigns: ['山羊座','水瓶座','魚座','牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座'],
    weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    gens: [{y:1928,n:'沈黙の世代'},{y:1946,n:'ベビーブーマー'},{y:1965,n:'X世代'},{y:1981,n:'ミレニアル世代'},{y:1997,n:'Z世代'},{y:2013,n:'アルファ世代'}],
    wTitle: '生まれた年の世界',
    wLblEvents: '出来事', wLblMusic: '音楽', wLblFilm: '映画', wLblTech: 'テクノロジー', wLblPrices: '物価',
    wLblBread: 'パン', wLblGas: 'ガソリン', wLblHouse: '住宅',
    seoH2a: '年齢はどのように計算されますか？',
    seoP1: '年齢は、今日の日付から生年月日を引くことで計算されます。月の長さや閏年の追加日を考慮します。計算は3段階で行われます：まず完全な年数、次に残りの月数、最後に残りの日数を求めます。例えば、1990年7月15日生まれの人は2025年7月に35歳になりますが、その誕生日前は34歳11ヶ月と数日です。このツールは2月29日生まれの場合も含め、すべての特殊なケースを自動的に処理し、毎秒更新されるライブカウンターとして結果を表示します。',
    seoH2b: '秒単位で年齢を計算する意味は？',
    seoP2: '日数、時間、秒単位で正確な年齢を知ることは、単なる好奇心を超えた実用的な価値があります。医師は小児科の投薬計算に日齢を使用します。法制度では年齢の正確な閾値に権利と義務が結びついています — 18歳での選挙権、60歳または65歳での退職など。保険会社は保険料計算に月齢を使用します。秒ごとのカウンターはまた、人生が常に動いていることを思い出させてくれます。',
    faqTitle: 'よくある質問',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: '米国社会保障局 – 平均余命' },
    faqs: [
      { q: '1980年生まれの場合、何歳ですか？', a: '1980年生まれの場合、2026年に46歳です（誕生日によって46歳になる場合もあります）。正確な月数・週数・日数を知るには、上記に正確な生年月日を入力してください。' },
      { q: '1990年生まれの場合、何歳ですか？', a: '1990年生まれの場合、誕生日が過ぎているかどうかによって、2026年に35歳または36歳です。正確な日付で計算機を使用して、日単位の正確な年齢を確認してください。' },
      { q: '2000年生まれの場合、何歳ですか？', a: '2000年生まれの場合、2026年に26歳になりました。2000年生まれの人はZ世代に属します。正確な生年月日を入力して、月・週・日単位の年齢を確認してください。' },
      { q: '日数で正確な年齢を計算するには？', a: '今日の日付から生年月日を引きます。閏年を考慮すると平均して1年は約365.25日です。このツールは即座に計算を実行します — 誕生日を入力すると「日数」が結果に直接表示されます。' },
      { q: '閏年生まれの場合の年齢は？', a: '2月29日生まれの場合、ほとんどの国では閏年でない年には公式に3月1日が誕生日となります。当計算機はこれを正しく処理し、毎年正確に年齢を数えます。' },
      { q: '退職年齢計算機として使用できますか？', a: 'はい。「特定の日付で計算する」オプションを使用して、予定の退職日を入力してください。ツールはその日に何歳になるかを正確に表示します。' },
      { q: '将来の日付で年齢を計算できますか？', a: 'はい。「特定の日付で計算する」を有効にして、任意の将来の日付を入力すると、その日の年齢がわかります。就学、退職、保険更新などの重要なイベントの計画に役立ちます。' },
      { q: '月単位で年齢を調べるには？', a: '月単位の年齢は、完全な年数に12を掛けた数に残りの完全な月数を加えたものです。例えば、35歳4ヶ月の人は424ヶ月です。この計算機は結果バーに正確な月数を表示します。' },
    ],
    zodiacSigns_arr: ['山羊座','水瓶座','魚座','牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座'],
    genRanges: [
      { y: 0,    n: 'アルファ世代' },
      { y: 1928, n: '沈黙の世代' },
      { y: 1946, n: 'ベビーブーマー' },
      { y: 1965, n: 'X世代' },
      { y: 1981, n: 'ミレニアル世代' },
      { y: 1997, n: 'Z世代' },
      { y: 2013, n: 'アルファ世代' },
    ],
  },
  ko: {
    title: '나이 계산기 2026 – 내 나이는? 무료·즉시',
    metaDesc: '생년월일을 입력하면 연, 월, 일, 초 단위로 정확한 나이를 계산합니다. 무료, 회원가입 불필요, 즉시 결과.',
    kicker: '나이 계산기',
    headline: '나는<br><em>몇 살</em>인가?',
    subhead: '생년월일을 입력하세요 — 매초 실시간으로 정확한 나이를 표시합니다.',
    dobLabel: '생년월일',
    refToggleLabel: '특정 날짜로 계산하기',
    refLabel: '기준 날짜',
    calcBtn: '→ 계산하기',
    ariaDay: '일', ariaMonth: '월', ariaYear: '년',
    tipText: '"초 단위까지 정확한 나이를 안다는 것은 생각보다 신기하고 아름다운 경험입니다."',
    examples: ['1990년 7월 15일생', '2000년 1월 1일생', '1985년 12월 25일생'],
    resultsHeader: '정확한 나이',
    heroSuffix: '세',
    months: '개월', weeks: '주', days: '일', hours: '시간',
    zodiacLbl: '별자리', genLbl: '세대', dayLbl: '태어난 요일', leapLbl: '경험한 윤년',
    errInvalid: '→ 잘못된 날짜입니다. 입력을 확인해주세요.',
    errFuture: '→ 생년월일은 미래 날짜일 수 없습니다.',
    nextBdayIn: '다음 생일까지',
    nextBdayToday: '🎉 생일 축하합니다!',
    dayWord: ['일', '일'],
    pY: '세', pM: '개월', pD: '일',
    zodiacSigns: ['염소자리','물병자리','물고기자리','양자리','황소자리','쌍둥이자리','게자리','사자자리','처녀자리','천칭자리','전갈자리','사수자리','염소자리'],
    weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    gens: [{y:1928,n:'침묵의 세대'},{y:1946,n:'베이비붐 세대'},{y:1965,n:'X세대'},{y:1981,n:'밀레니얼 세대'},{y:1997,n:'Z세대'},{y:2013,n:'알파 세대'}],
    wTitle: '내가 태어난 해의 세상',
    wLblEvents: '사건', wLblMusic: '음악', wLblFilm: '영화', wLblTech: '기술', wLblPrices: '물가',
    wLblBread: '빵', wLblGas: '휘발유', wLblHouse: '주택',
    seoH2a: '나이는 어떻게 계산되나요?',
    seoP1: '나이는 오늘 날짜에서 생년월일을 빼서 계산합니다. 월마다 다른 일 수와 윤년의 추가 날을 고려합니다. 계산은 3단계로 이루어집니다: 먼저 완전한 연도 수, 다음으로 남은 월 수, 마지막으로 남은 일 수를 구합니다. 예를 들어 1990년 7월 15일에 태어난 사람은 2025년 7월에 35세가 되지만, 그 생일 전에는 34세 11개월 며칠입니다. 이 도구는 2월 29일생을 포함한 모든 특수한 경우를 자동으로 처리하며, 매초 업데이트되는 실시간 카운터로 결과를 표시합니다.',
    seoH2b: '초 단위로 나이를 계산하는 이유는?',
    seoP2: '일, 시간, 초 단위로 정확한 나이를 아는 것은 단순한 호기심을 넘어 실질적인 가치가 있습니다. 의사들은 소아과 투약 계산에 일령을 사용합니다. 법 체계에서는 정확한 연령 기준에 권리와 의무가 연결되어 있습니다 — 18세 선거권, 60세 또는 65세 퇴직 등. 보험사는 보험료 계산에 월령을 사용합니다. 초 단위 카운터는 또한 삶이 항상 움직이고 있음을 상기시켜줍니다.',
    faqTitle: '자주 묻는 질문',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: '미국 사회보장청 – 기대 수명' },
    faqs: [
      { q: '1980년생이면 몇 살인가요?', a: '1980년생이라면 2026년에 46세입니다(생일에 따라 46세가 되는 경우도 있습니다). 정확한 월, 주, 일 단위 나이를 알려면 위에 정확한 생년월일을 입력하세요.' },
      { q: '1990년생이면 몇 살인가요?', a: '1990년생이라면 생일이 지났는지에 따라 2026년에 35세 또는 36세입니다. 정확한 날짜로 계산기를 사용해 일 단위 나이를 확인하세요.' },
      { q: '2000년생이면 몇 살인가요?', a: '2000년생이라면 2026년에 26세가 되었습니다. 2000년생은 Z세대에 속합니다. 정확한 생년월일을 입력해 월, 주, 일 단위 나이를 확인하세요.' },
      { q: '일 단위로 정확한 나이를 계산하는 방법은?', a: '오늘 날짜에서 생년월일을 빼세요. 윤년을 고려하면 평균 1년은 약 365.25일입니다. 이 도구는 즉시 계산을 수행합니다 — 생일을 입력하면 \'일 수\'가 결과에 바로 표시됩니다.' },
      { q: '윤년에 태어난 경우 나이는?', a: '2월 29일생이라면 대부분의 나라에서 윤년이 아닌 해에는 공식적으로 3월 1일이 생일입니다. 이 계산기는 이를 올바르게 처리하여 매년 정확하게 나이를 셉니다.' },
      { q: '퇴직 나이 계산기로 사용할 수 있나요?', a: '네. \'특정 날짜로 계산하기\' 옵션을 사용해 예정된 퇴직일을 입력하세요. 도구가 그날 몇 살이 되는지 정확하게 보여줍니다.' },
      { q: '미래 날짜로 나이를 계산할 수 있나요?', a: '네. \'특정 날짜로 계산하기\'를 활성화하고 임의의 미래 날짜를 입력하면 그날의 나이를 알 수 있습니다. 입학, 퇴직, 보험 갱신 등 중요한 이벤트 계획에 유용합니다.' },
      { q: '개월 단위로 나이를 알아보는 방법은?', a: '개월 단위 나이는 완전한 연도 수에 12를 곱한 수에 남은 완전한 월 수를 더한 것입니다. 예를 들어 35세 4개월인 사람은 424개월입니다. 이 계산기는 결과 바에 정확한 월 수를 표시합니다.' },
    ],
    zodiacSigns_arr: ['염소자리','물병자리','물고기자리','양자리','황소자리','쌍둥이자리','게자리','사자자리','처녀자리','천칭자리','전갈자리','사수자리','염소자리'],
    genRanges: [
      { y: 0,    n: '알파 세대' },
      { y: 1928, n: '침묵의 세대' },
      { y: 1946, n: '베이비붐 세대' },
      { y: 1965, n: 'X세대' },
      { y: 1981, n: '밀레니얼 세대' },
      { y: 1997, n: 'Z세대' },
      { y: 2013, n: '알파 세대' },
    ],
  },
  nl: {
    title: 'Leeftijdscalculator 2026 – Hoe Oud Ben Ik? Gratis en Direct',
    metaDesc: 'Bereken je exacte leeftijd in jaren, maanden, dagen en seconden. Voer je geboortedatum in — gratis, geen registratie, direct resultaat.',
    kicker: 'Leeftijdscalculator',
    headline: 'Hoe oud<br><em>ben ik</em>?',
    subhead: 'Voer je geboortedatum in — ken je exacte leeftijd, live tot op de seconde.',
    dobLabel: 'Geboortedatum',
    refToggleLabel: 'Bereken voor een specifieke datum',
    refLabel: 'Referentiedatum',
    calcBtn: '→ BEREKEN',
    ariaDay: 'Dag', ariaMonth: 'Maand', ariaYear: 'Jaar',
    tipText: '"Je exacte leeftijd tot op de seconde kennen is vreemder en mooier dan je denkt."',
    examples: ['Geboren 15 juli 1990', 'Geboren 1 januari 2000', 'Geboren 25 december 1985'],
    resultsHeader: 'Jouw exacte leeftijd',
    heroSuffix: 'jaar',
    months: 'maanden', weeks: 'weken', days: 'dagen', hours: 'uren',
    zodiacLbl: 'Sterrenbeeld', genLbl: 'Generatie', dayLbl: 'Geboortedag', leapLbl: 'Schrikkeljaren beleefd',
    errInvalid: '→ Ongeldige datum. Controleer je invoer.',
    errFuture: '→ Geboortedatum mag niet in de toekomst liggen.',
    nextBdayIn: 'Volgende verjaardag over',
    nextBdayToday: '🎉 Gefeliciteerd met je verjaardag!',
    dayWord: ['dag', 'dagen'],
    pY: 'j', pM: 'mnd', pD: 'd',
    zodiacSigns: ['Steenbok','Waterman','Vissen','Ram','Stier','Tweelingen','Kreeft','Leeuw','Maagd','Weegschaal','Schorpioen','Schutter','Steenbok'],
    weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
    gens: [{y:1928,n:'Stille Generatie'},{y:1946,n:'Babyboomers'},{y:1965,n:'Generatie X'},{y:1981,n:'Millennials'},{y:1997,n:'Generatie Z'},{y:2013,n:'Generatie Alpha'}],
    wTitle: 'De wereld in het jaar van je geboorte',
    wLblEvents: 'Gebeurtenissen', wLblMusic: 'Muziek', wLblFilm: 'Film', wLblTech: 'Technologie', wLblPrices: 'Prijzen',
    wLblBread: 'Brood', wLblGas: 'Benzine', wLblHouse: 'Huis',
    seoH2a: 'Hoe wordt leeftijd berekend?',
    seoP1: 'Leeftijd wordt berekend door je geboortedatum van de huidige datum af te trekken, rekening houdend met de verschillende lengte van maanden en de extra dag in schrikkeljaren. De berekening verloopt in drie stappen: eerst worden de volledige jaren bepaald, dan de resterende maanden, en tot slot de resterende dagen. Iemand die bijvoorbeeld op 15 juli 1990 is geboren, wordt in juli 2025 35 jaar, maar vóór die verjaardag is hij of zij nog 34 jaar, 11 maanden en een paar dagen. Dit hulpmiddel verwerkt automatisch alle bijzondere gevallen — inclusief verjaardagen op 29 februari — en toont het resultaat als een live teller die elke seconde wordt bijgewerkt.',
    seoH2b: 'Waarom leeftijd tot op de seconde berekenen?',
    seoP2: 'Je exacte leeftijd in dagen, uren of seconden kennen heeft praktische waarde die verder gaat dan pure nieuwsgierigheid. Artsen gebruiken leeftijd in dagen voor pediatrische doseringberekeningen. Rechtssystemen koppelen rechten en plichten aan precieze leeftijdsdrempels — stemrecht op 18 jaar, pensioen op 60 of 65 jaar. Verzekeraars gebruiken leeftijd in maanden voor premieberekeningen. De teller per seconde herinnert er ook aan dat het leven altijd in beweging is.',
    faqTitle: 'Veelgestelde vragen',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Levensverwachting' },
    faqs: [
      { q: 'Hoe oud ben ik als ik in 1980 ben geboren?', a: 'Als je in 1980 bent geboren, ben je in 2026 46 jaar oud (of je wordt in de loop van het jaar 46, afhankelijk van je geboortedatum). Voer je exacte geboortedatum hierboven in voor een nauwkeurig antwoord in maanden, weken en dagen.' },
      { q: 'Hoe oud ben ik als ik in 1990 ben geboren?', a: 'Als je in 1990 bent geboren, ben je in 2026 35 of 36 jaar oud, afhankelijk van of je verjaardag al is geweest. Gebruik de calculator met je exacte datum voor je leeftijd tot op de dag nauwkeurig.' },
      { q: 'Hoe oud ben ik als ik in 2000 ben geboren?', a: 'Als je in 2000 bent geboren, ben je in 2026 26 jaar geworden. Mensen geboren in 2000 behoren tot Generatie Z. Voer je volledige geboortedatum in om je leeftijd in maanden, weken en dagen te zien.' },
      { q: 'Hoe bereken ik mijn exacte leeftijd in dagen?', a: 'Trek je geboortedatum af van de datum van vandaag. Gemiddeld zijn er ongeveer 365,25 dagen per jaar, rekening houdend met schrikkeljaren. Dit hulpmiddel voert de berekening onmiddellijk uit — voer je verjaardag in en het aantal "dagen" verschijnt direct in de resultaten.' },
      { q: 'Wat is mijn leeftijd als ik in een schrikkeljaar ben geboren?', a: 'Als je op 29 februari bent geboren, valt je verjaardag officieel op 1 maart in niet-schrikkeljaren in de meeste landen. Onze calculator verwerkt dit correct en telt je leeftijd elk jaar nauwkeurig.' },
      { q: 'Kan ik dit gebruiken als pensioensleeftijdscalculator?', a: 'Ja. Gebruik de optie "Bereken voor een specifieke datum" en voer je geplande pensioendatum in. Het hulpmiddel toont precies hoe oud je op die dag zult zijn.' },
      { q: 'Kan ik mijn leeftijd berekenen op een toekomstige datum?', a: 'Ja. Activeer "Voor een specifieke datum" en voer een willekeurige toekomstige datum in om te zien hoe oud je op die dag zult zijn. Handig voor het plannen van mijlpalen zoals schoolinschrijving, pensioen of verzekeringsverlenging.' },
      { q: 'Hoe vind ik mijn leeftijd in maanden?', a: 'Je leeftijd in maanden is het totale aantal volledige jaren vermenigvuldigd met 12, plus de resterende volledige maanden. Iemand van 35 jaar en 4 maanden is bijvoorbeeld 424 maanden oud. Deze calculator toont het exacte aantal maanden in de resultatenbar.' },
    ],
    zodiacSigns_arr: ['Steenbok','Waterman','Vissen','Ram','Stier','Tweelingen','Kreeft','Leeuw','Maagd','Weegschaal','Schorpioen','Schutter','Steenbok'],
    genRanges: [
      { y: 0,    n: 'Generatie Alpha' },
      { y: 1928, n: 'Stille Generatie' },
      { y: 1946, n: 'Babyboomers' },
      { y: 1965, n: 'Generatie X' },
      { y: 1981, n: 'Millennials' },
      { y: 1997, n: 'Generatie Z' },
      { y: 2013, n: 'Generatie Alpha' },
    ],
  },
};

const HOWTO = {
  en: {
    name: 'How to calculate your exact age',
    description: 'Step-by-step guide to calculating your precise age in years, months, weeks, and days.',
    steps: [
      { name: 'Enter your date of birth', text: 'Type your birth day, month, and year in the DD / MM / YYYY fields.' },
      { name: 'Click Calculate', text: 'Press the Calculate button or hit Enter. Your exact age appears instantly.' },
      { name: 'Read your result', text: 'The results strip shows your age in years, months, weeks, days, and hours — updated live every second.' },
      { name: 'Calculate for a specific date (optional)', text: 'Check "Calculate for a specific date" and enter a reference date to find your age on any past or future day.' },
    ],
  },
  fr: {
    name: 'Comment calculer votre âge exact',
    description: 'Guide étape par étape pour calculer votre âge précis en années, mois, semaines et jours.',
    steps: [
      { name: 'Entrez votre date de naissance', text: 'Saisissez votre jour, mois et année de naissance dans les champs JJ / MM / AAAA.' },
      { name: 'Cliquez sur Calculer', text: 'Appuyez sur le bouton Calculer ou sur Entrée. Votre âge exact s\'affiche instantanément.' },
      { name: 'Lisez votre résultat', text: 'Les résultats affichent votre âge en années, mois, semaines, jours et heures — mis à jour en direct chaque seconde.' },
      { name: 'Calculer pour une date précise (optionnel)', text: 'Cochez "Calculer à une date précise" et entrez une date de référence pour connaître votre âge à n\'importe quelle date passée ou future.' },
    ],
  },
  es: {
    name: 'Cómo calcular tu edad exacta',
    description: 'Guía paso a paso para calcular tu edad precisa en años, meses, semanas y días.',
    steps: [
      { name: 'Introduce tu fecha de nacimiento', text: 'Escribe tu día, mes y año de nacimiento en los campos DD / MM / AAAA.' },
      { name: 'Haz clic en Calcular', text: 'Pulsa el botón Calcular o presiona Enter. Tu edad exacta aparece al instante.' },
      { name: 'Lee tu resultado', text: 'La franja de resultados muestra tu edad en años, meses, semanas, días y horas — actualizada en vivo cada segundo.' },
      { name: 'Calcular para una fecha específica (opcional)', text: 'Marca "Calcular para una fecha específica" e introduce una fecha de referencia para saber tu edad en cualquier día pasado o futuro.' },
    ],
  },
  pt: {
    name: 'Como calcular sua idade exata',
    description: 'Guia passo a passo para calcular sua idade precisa em anos, meses, semanas e dias.',
    steps: [
      { name: 'Digite sua data de nascimento', text: 'Insira seu dia, mês e ano de nascimento nos campos DD / MM / AAAA.' },
      { name: 'Clique em Calcular', text: 'Pressione o botão Calcular ou Enter. Sua idade exata aparece instantaneamente.' },
      { name: 'Leia seu resultado', text: 'A faixa de resultados mostra sua idade em anos, meses, semanas, dias e horas — atualizada ao vivo a cada segundo.' },
      { name: 'Calcular para uma data específica (opcional)', text: 'Marque "Calcular para uma data específica" e insira uma data de referência para saber sua idade em qualquer dia passado ou futuro.' },
    ],
  },
  de: {
    name: 'So berechnest du dein genaues Alter',
    description: 'Schritt-für-Schritt-Anleitung zur Berechnung deines genauen Alters in Jahren, Monaten, Wochen und Tagen.',
    steps: [
      { name: 'Geburtsdatum eingeben', text: 'Gib deinen Geburtstag, Monat und Jahr in die Felder TT / MM / JJJJ ein.' },
      { name: 'Auf Berechnen klicken', text: 'Drücke die Schaltfläche Berechnen oder die Eingabetaste. Dein genaues Alter erscheint sofort.' },
      { name: 'Ergebnis ablesen', text: 'Die Ergebnisleiste zeigt dein Alter in Jahren, Monaten, Wochen, Tagen und Stunden — live jede Sekunde aktualisiert.' },
      { name: 'Für ein bestimmtes Datum berechnen (optional)', text: 'Aktiviere "Für ein bestimmtes Datum berechnen" und gib ein Referenzdatum ein, um dein Alter an einem beliebigen vergangenen oder zukünftigen Tag zu ermitteln.' },
    ],
  },
  it: {
    name: 'Come calcolare la tua età esatta',
    description: 'Guida passo dopo passo per calcolare la tua età precisa in anni, mesi, settimane e giorni.',
    steps: [
      { name: 'Inserisci la tua data di nascita', text: 'Digita il tuo giorno, mese e anno di nascita nei campi GG / MM / AAAA.' },
      { name: 'Clicca su Calcola', text: 'Premi il pulsante Calcola o Invio. La tua età esatta appare istantaneamente.' },
      { name: 'Leggi il risultato', text: 'La striscia dei risultati mostra la tua età in anni, mesi, settimane, giorni e ore — aggiornata in tempo reale ogni secondo.' },
      { name: 'Calcola per una data specifica (opzionale)', text: 'Seleziona "Calcola per una data specifica" e inserisci una data di riferimento per conoscere la tua età in qualsiasi giorno passato o futuro.' },
    ],
  },
  pl: {
    name: 'Jak obliczyć swój dokładny wiek',
    description: 'Przewodnik krok po kroku do obliczania swojego dokładnego wieku w latach, miesiącach, tygodniach i dniach.',
    steps: [
      { name: 'Wpisz datę urodzenia', text: 'Wpisz swój dzień, miesiąc i rok urodzenia w polach DD / MM / RRRR.' },
      { name: 'Kliknij Oblicz', text: 'Naciśnij przycisk Oblicz lub Enter. Twój dokładny wiek pojawi się natychmiast.' },
      { name: 'Odczytaj wynik', text: 'Pasek wyników pokazuje Twój wiek w latach, miesiącach, tygodniach, dniach i godzinach — aktualizowany na żywo co sekundę.' },
      { name: 'Oblicz dla konkretnej daty (opcjonalnie)', text: 'Zaznacz "Oblicz dla konkretnej daty" i wpisz datę referencyjną, aby poznać swój wiek w dowolnym przeszłym lub przyszłym dniu.' },
    ],
  },
  ja: {
    name: '正確な年齢の計算方法',
    description: '年・月・週・日単位で正確な年齢を計算するステップバイステップガイド。',
    steps: [
      { name: '生年月日を入力する', text: 'DD / MM / YYYYのフィールドに誕生日・月・年を入力します。' },
      { name: '計算するをクリック', text: '「計算する」ボタンを押すかEnterキーを押します。正確な年齢が即座に表示されます。' },
      { name: '結果を読む', text: '結果バーには年・月・週・日・時間単位の年齢が表示されます — 毎秒ライブで更新されます。' },
      { name: '特定の日付で計算する（オプション）', text: '「特定の日付で計算する」をチェックし、基準日を入力すると、任意の過去または未来の日の年齢がわかります。' },
    ],
  },
  ko: {
    name: '정확한 나이 계산 방법',
    description: '연, 월, 주, 일 단위로 정확한 나이를 계산하는 단계별 가이드.',
    steps: [
      { name: '생년월일 입력', text: 'DD / MM / YYYY 필드에 생일, 월, 연도를 입력합니다.' },
      { name: '계산하기 클릭', text: '계산하기 버튼을 누르거나 Enter 키를 누릅니다. 정확한 나이가 즉시 표시됩니다.' },
      { name: '결과 확인', text: '결과 바에 연, 월, 주, 일, 시간 단위의 나이가 표시됩니다 — 매초 실시간으로 업데이트됩니다.' },
      { name: '특정 날짜로 계산하기 (선택사항)', text: '\'특정 날짜로 계산하기\'를 체크하고 기준 날짜를 입력하면 과거 또는 미래의 임의 날짜에서의 나이를 알 수 있습니다.' },
    ],
  },
  nl: {
    name: 'Hoe je je exacte leeftijd berekent',
    description: 'Stapsgewijze handleiding voor het berekenen van je precieze leeftijd in jaren, maanden, weken en dagen.',
    steps: [
      { name: 'Voer je geboortedatum in', text: 'Typ je geboortedag, maand en jaar in de velden DD / MM / JJJJ.' },
      { name: 'Klik op Bereken', text: 'Druk op de knop Bereken of druk op Enter. Je exacte leeftijd verschijnt onmiddellijk.' },
      { name: 'Lees je resultaat', text: 'De resultatenbalk toont je leeftijd in jaren, maanden, weken, dagen en uren — live bijgewerkt elke seconde.' },
      { name: 'Bereken voor een specifieke datum (optioneel)', text: 'Vink "Bereken voor een specifieke datum" aan en voer een referentiedatum in om je leeftijd op een willekeurige dag in het verleden of de toekomst te vinden.' },
    ],
  },
};

module.exports = {
  pages: [
    {
      id: 'age-calculator',
      slugs: { en: 'age-calculator', fr: 'fr/calculateur-age', es: 'es/calculadora-edad', pt: 'pt/calculadora-de-idade', de: 'de/altersrechner', it: 'it/calcolo-eta', pl: 'pl/kalkulator-wieku', ja: 'ja/nenrei-keisanki', ko: 'ko/nai-gyesan-gi', nl: 'nl/leeftijdscalculator' },
    },
  ],

  render(pageId, lang) {
    const t = T[lang];

    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

    const formGrid = `  <div class="form-grid">
    <div class="form-col">
      <div class="field-label">${t.dobLabel}</div>
      <div class="date-row">
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)" aria-label="${t.ariaDay}">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)" aria-label="${t.ariaMonth}">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="1905" max="2026" inputmode="numeric" oninput="clamp(this,1905,2026)" aria-label="${t.ariaYear}">
      </div>
      <label class="ref-toggle-row">
        <input type="checkbox" id="refToggle" onchange="toggleRef()">
        <span>${t.refToggleLabel}</span>
      </label>
      <div class="ref-fields" id="refFields">
        <div class="field-label" style="margin-top:.8rem">${t.refLabel}</div>
        <div class="date-row">
          <input type="number" id="rDay" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)" aria-label="${t.ariaDay}">
          <span>/</span>
          <input type="number" id="rMonth" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)" aria-label="${t.ariaMonth}">
          <span>/</span>
          <input type="number" id="rYear" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)" aria-label="${t.ariaYear}">
        </div>
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => {
          const args = [[1990,7,15],[2000,1,1],[1985,12,25]][i];
          return `<li onclick="fillExample(${args[0]},${args[1]},${args[2]})">${ex} →</li>`;
        }).join('\n        ')}
      </ul>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroAge">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="precise-age" id="preciseAge"></div>
    <div class="stats-strip">
      <div class="stat-item"><div class="stat-num" id="statMonths">—</div><div class="stat-lbl">${t.months}</div></div>
      <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeks}</div></div>
      <div class="stat-item"><div class="stat-num" id="statDays">—</div><div class="stat-lbl">${t.days}</div></div>
      <div class="stat-item"><div class="stat-num" id="statHours">—</div><div class="stat-lbl">${t.hours}</div></div>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.zodiacLbl}</div><div class="fact-val" id="ffZodiac">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.genLbl}</div><div class="fact-val" id="ffGen">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.dayLbl}</div><div class="fact-val" id="ffDay">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.leapLbl}</div><div class="fact-val" id="ffLeap">—</div></div>
    </div>
    <div class="bday-banner" id="bdayBanner"></div>
    <div class="world-when" id="worldWhen"></div>
  </div>`;

    const faqHTML = t.faqs.map(f =>
      `    <div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`
    ).join('\n');

    const seoBlock = `  <div class="seo-block">
    <div><h2>${t.seoH2a}</h2><p>${t.seoP1}</p></div>
    <div><h2>${t.seoH2b}</h2><p>${t.seoP2}</p></div>
  </div>
  <div class="faq-block">
    <h2>${t.faqTitle}</h2>
${faqHTML}
  </div>`;

    // Build a merged events object: periods+tech from translated source, music/film/prices always from EN
    const evSrc = lang === 'fr' ? EVENTS_FR : lang === 'es' ? EVENTS_ES : null;
    let mergedEvents = EVENTS;
    if (evSrc) {
      mergedEvents = {};
      for (const yr of Object.keys(EVENTS)) {
        const enEv = EVENTS[yr];
        const trEv = evSrc[yr];
        if (trEv) {
          mergedEvents[yr] = {
            periods: trEv.periods || enEv.periods,
            tech: trEv.tech || enEv.tech,
            music: enEv.music,
            film: enEv.film,
            prices: enEv.prices,
          };
        } else {
          mergedEvents[yr] = enEv;
        }
      }
    }

    const data = JSON.stringify({
      zodiacSigns: t.zodiacSigns,
      weekDays: t.weekDays,
      gens: t.gens,
      errInvalid: t.errInvalid,
      errFuture: t.errFuture,
      nextBdayIn: t.nextBdayIn,
      nextBdayToday: t.nextBdayToday,
      dayWord: t.dayWord,
      pY: t.pY, pM: t.pM, pD: t.pD,
      wTitle: t.wTitle,
      wLblEvents: t.wLblEvents, wLblMusic: t.wLblMusic, wLblFilm: t.wLblFilm,
      wLblTech: t.wLblTech, wLblPrices: t.wLblPrices,
      wLblBread: t.wLblBread, wLblGas: t.wLblGas, wLblHouse: t.wLblHouse,
      events: mergedEvents,
    });

    const script = `
var D = ${data};
var _liveRef = null;
var _liveTimer = null;

function fmt(n){return n.toLocaleString();}
function pad2(n){return n<10?'0'+n:''+n;}

function getZodiac(d,m){
  var b=[20,19,20,20,21,21,22,22,22,22,21,21];
  var idx=(m===1&&d<=b[0])||(m===12&&d>b[11])?0:d<=b[m-1]?m-1:m;
  return D.zodiacSigns[idx];
}

function getGen(y){
  var gs=D.gens;
  for(var i=gs.length-1;i>=0;i--) if(y>=gs[i].y) return gs[i].n;
  return gs[0].n;
}

function leapCount(from,to){
  var c=0;
  for(var y=from;y<=to;y++) if((y%4===0&&y%100!==0)||y%400===0) c++;
  return c;
}

function updatePrecise(){
  if(!_liveRef) return;
  var now=new Date();
  var ageY=now.getFullYear()-_liveRef.getFullYear();
  var ageM=now.getMonth()-_liveRef.getMonth();
  var ageD=now.getDate()-_liveRef.getDate();
  var h=now.getHours(), min=now.getMinutes(), s=now.getSeconds();
  // borrow if day not yet reached
  if(ageD<0){ ageM--; ageD+=new Date(now.getFullYear(),now.getMonth(),0).getDate(); }
  if(ageM<0){ ageY--; ageM+=12; }
  var parts=[];
  if(ageY>0) parts.push(ageY+D.pY);
  if(ageM>0) parts.push(ageM+D.pM);
  if(ageD>0) parts.push(ageD+D.pD);
  parts.push(pad2(h)+'h '+pad2(min)+'min '+pad2(s)+'s');
  document.getElementById('preciseAge').textContent=parts.join(' · ');
}

function getWorldEvents(year, month){
  var el=document.getElementById('worldWhen');
  var e=D.events[String(year)];
  if(!e){el.innerHTML='';return;}
  var period=month<=4?'1':month<=8?'2':'3';
  var worldArr=(e.periods&&e.periods[period])||e.world||[];
  var rows=[
    ['🌍',D.wLblEvents,worldArr.join(' · ')],
    ['🎵',D.wLblMusic,e.music],
    ['🎬',D.wLblFilm,e.film],
    ['💻',D.wLblTech,e.tech],
    ['🛒',D.wLblPrices,D.wLblBread+' '+e.prices.bread+' · '+D.wLblGas+' '+e.prices.gas+' · '+D.wLblHouse+' '+e.prices.house],
  ];
  var h='<div class="world-when-title">'+D.wTitle+'</div>';
  rows.forEach(function(r){
    h+='<div class="world-row"><span class="world-icon">'+r[0]+'</span><span class="world-lbl">'+r[1]+'</span><span class="world-val">'+r[2]+'</span></div>';
  });
  el.innerHTML=h;
}

function stopLive(){
  if(_liveTimer){clearInterval(_liveTimer); _liveTimer=null;}
  _liveRef=null;
  document.getElementById('preciseAge').textContent='';
  document.getElementById('worldWhen').innerHTML='';
}

function toggleRef(){
  document.getElementById('refFields').classList.toggle('show', document.getElementById('refToggle').checked);
}

function fillExample(y,m,d){
  document.getElementById('day').value=d;
  document.getElementById('month').value=m;
  document.getElementById('year').value=y;
  calculate();
}

function calculate(){
  var d=parseInt(document.getElementById('day').value);
  var m=parseInt(document.getElementById('month').value);
  var y=parseInt(document.getElementById('year').value);
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show');
  res.classList.remove('show');
  stopLive();

  if(!d||!m||!y||d<1||d>31||m<1||m>12||y<1905||y>2026){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }
  var bday=new Date(y,m-1,d);
  if(isNaN(bday)||bday.getDate()!==d){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }

  var useRefDate=document.getElementById('refToggle').checked;
  var ref;
  if(useRefDate){
    ref=new Date(
      parseInt(document.getElementById('rYear').value),
      parseInt(document.getElementById('rMonth').value)-1,
      parseInt(document.getElementById('rDay').value)
    );
  } else {
    ref=new Date(); ref.setHours(0,0,0,0);
  }

  if(bday>ref){err.textContent=D.errFuture; err.classList.add('show'); return;}

  var ageY=ref.getFullYear()-bday.getFullYear();
  var ageM=ref.getMonth()-bday.getMonth();
  var ageD2=ref.getDate()-bday.getDate();
  if(ageD2<0){ageM--; ageD2+=new Date(ref.getFullYear(),ref.getMonth(),0).getDate();}
  if(ageM<0){ageY--; ageM+=12;}

  var totalDays=Math.floor((ref-bday)/86400000);
  var totalWeeks=Math.floor(totalDays/7);
  var totalMonths=ageY*12+ageM;
  var totalHours=totalDays*24;
  var leaps=leapCount(y, ref.getFullYear());

  var next=new Date(ref.getFullYear(),m-1,d);
  if(next<=ref) next.setFullYear(next.getFullYear()+1);
  var daysNext=Math.ceil((next-ref)/86400000);

  document.getElementById('heroAge').textContent=ageY;
  document.getElementById('statMonths').textContent=fmt(totalMonths);
  document.getElementById('statWeeks').textContent=fmt(totalWeeks);
  document.getElementById('statDays').textContent=fmt(totalDays);
  document.getElementById('statHours').textContent=fmt(totalHours);
  document.getElementById('ffZodiac').textContent=getZodiac(d,m);
  document.getElementById('ffGen').textContent=getGen(y);
  document.getElementById('ffDay').textContent=D.weekDays[bday.getDay()];
  document.getElementById('ffLeap').textContent=leaps;

  var banner=document.getElementById('bdayBanner');
  if(daysNext===0){
    banner.textContent=D.nextBdayToday;
  } else {
    var dw=daysNext===1?D.dayWord[0]:D.dayWord[1];
    banner.textContent=D.nextBdayIn+' '+daysNext+' '+dw;
  }

  getWorldEvents(y, m);

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});

  // Start live counter only when using today (not a custom ref date)
  if(!useRefDate){
    _liveRef=bday;
    updatePrecise();
    _liveTimer=setInterval(updatePrecise,1000);
  }
}

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source, howto: HOWTO[lang] };
  },
};
