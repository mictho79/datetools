// Time Zone Converter

const ZONES = [
  { id: 'Pacific/Honolulu',     label: 'Honolulu (HST)' },
  { id: 'America/Anchorage',    label: 'Anchorage (AKST)' },
  { id: 'America/Los_Angeles',  label: 'Los Angeles (PST/PDT)' },
  { id: 'America/Denver',       label: 'Denver (MST/MDT)' },
  { id: 'America/Chicago',      label: 'Chicago (CST/CDT)' },
  { id: 'America/New_York',     label: 'New York (EST/EDT)' },
  { id: 'America/Sao_Paulo',    label: 'São Paulo (BRT)' },
  { id: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (ART)' },
  { id: 'Atlantic/Azores',      label: 'Azores (AZOT)' },
  { id: 'Europe/London',        label: 'London (GMT/BST)' },
  { id: 'Europe/Paris',         label: 'Paris (CET/CEST)' },
  { id: 'Europe/Berlin',        label: 'Berlin (CET/CEST)' },
  { id: 'Europe/Helsinki',      label: 'Helsinki (EET/EEST)' },
  { id: 'Europe/Istanbul',      label: 'Istanbul (TRT)' },
  { id: 'Asia/Dubai',           label: 'Dubai (GST)' },
  { id: 'Asia/Karachi',         label: 'Karachi (PKT)' },
  { id: 'Asia/Kolkata',         label: 'India (IST)' },
  { id: 'Asia/Dhaka',           label: 'Dhaka (BST)' },
  { id: 'Asia/Bangkok',         label: 'Bangkok (ICT)' },
  { id: 'Asia/Singapore',       label: 'Singapore (SGT)' },
  { id: 'Asia/Shanghai',        label: 'Beijing/Shanghai (CST)' },
  { id: 'Asia/Tokyo',           label: 'Tokyo (JST)' },
  { id: 'Australia/Adelaide',   label: 'Adelaide (ACST)' },
  { id: 'Australia/Sydney',     label: 'Sydney (AEST/AEDT)' },
  { id: 'Pacific/Auckland',     label: 'Auckland (NZST/NZDT)' },
  { id: 'UTC',                  label: 'UTC' },
];

const zonesJson = JSON.stringify(ZONES);

const T = {
  en: {
    title: 'Time Zone Converter 2026 – Free, Instant, 25+ Zones',
    metaDesc: 'Convert time between any two time zones instantly. Supports 25+ zones including UTC. Shows local time, UTC offset and time difference — free, no sign-up.',
    kicker: 'Time Zone Converter',
    headline: 'Convert<br><em>time zones</em>',
    subhead: 'Convert any date and time between 25+ time zones instantly.',
    fromLabel: 'From time zone',
    toLabel: 'To time zone',
    dateLabel: 'Date',
    timeLabel: 'Time',
    swapBtn: '⇄ Swap zones',
    calcBtn: '→ Convert',
    tipText: '"The world runs on 24 different clocks. This tool lets you read them all."',
    resultsHeader: 'Converted time',
    fromTimeLbl: 'Original time', toTimeLbl: 'Converted time',
    fromOffsetLbl: 'UTC offset (from)', toOffsetLbl: 'UTC offset (to)',
    diffLbl: 'Time difference',
    errInvalid: '→ Invalid date or time. Please check your input.',
    seoH2a: 'How do time zones work?',
    seoP1: 'The world is divided into 24 primary time zones, each roughly 15 degrees of longitude apart — the angular distance the Earth rotates in one hour. Most zones are offset from Coordinated Universal Time (UTC) by a whole number of hours, but some countries use fractional offsets: India is UTC+5:30, Nepal is UTC+5:45, and Iran is UTC+3:30. The IANA Time Zone Database (also called the tz database or zoneinfo) is the authoritative global standard for time zone definitions, maintained by the Internet Assigned Numbers Authority. It covers every historical and current time zone rule change for every region on Earth. When you convert a time using this tool, the correct UTC offset for the specific date you enter is used — meaning daylight saving time transitions are handled automatically. DST shifts clocks forward by one hour in spring and back in autumn in over 70 countries, though the exact dates vary by region.',
    seoH2b: 'What is UTC offset?',
    seoP2: 'UTC offset is the signed difference between a specific time zone and Coordinated Universal Time (UTC), the successor to Greenwich Mean Time (GMT). For example, New York in winter is UTC−5 (Eastern Standard Time), meaning clocks there read 5 hours behind UTC. During daylight saving time it becomes UTC−4 (Eastern Daylight Time). London in winter is UTC+0 (GMT) and UTC+1 in summer (BST). Paris is UTC+1 in winter (CET) and UTC+2 in summer (CEST). The key difference between UTC and GMT is that UTC is a time standard based on atomic clocks and is never adjusted for daylight saving, while GMT is technically a time zone. In everyday use, UTC and GMT are effectively identical. This converter always uses the DST-aware UTC offset for the exact date you enter.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.iana.org/time-zones', label: 'IANA Time Zone Database' },
    faqs: [
      { q: 'What time is it in New York right now?', a: 'New York uses Eastern Time: UTC−5 in winter (EST, from the first Sunday in November to the second Sunday in March) and UTC−4 in summer (EDT). To see the current New York time, select "New York (EST/EDT)" as your target zone and convert from your local time. This converter uses DST-aware offsets so the result is always correct.' },
      { q: 'What is the difference between UTC and GMT?', a: 'UTC (Coordinated Universal Time) is the international time standard based on atomic clocks. GMT (Greenwich Mean Time) is a time zone centered on the Prime Meridian in London. In everyday use they are the same — both read UTC+0 — but technically UTC never adjusts for daylight saving time while the UK does observe BST in summer. For all practical conversion purposes, UTC and GMT are interchangeable.' },
      { q: 'How many time zones are there in the world?', a: 'There are 24 standard time zones based on 15-degree longitude bands, but the actual number of civil time zones in use worldwide is around 38–40, because many countries use non-standard half-hour or quarter-hour offsets (India UTC+5:30, Nepal UTC+5:45, Iran UTC+3:30) and some territories straddle multiple zones.' },
      { q: 'How does daylight saving time work?', a: 'Daylight saving time (DST) is the practice of advancing clocks by one hour in spring so that evenings have more daylight. Most of the United States, Canada, and Europe observe DST, but dates differ: the U.S. starts DST on the second Sunday in March and ends on the first Sunday in November. The EU transitions on the last Sunday of March and October. Countries near the equator and in Asia and Africa generally do not observe DST.' },
      { q: 'How do I convert EST to CET?', a: 'Eastern Standard Time (EST) is UTC−5. Central European Time (CET) is UTC+1. The difference is 6 hours: when it is noon EST, it is 6 PM CET. In summer, EST becomes EDT (UTC−4) and CET becomes CEST (UTC+2), so the difference remains 6 hours. Use this converter — select New York as the source and Paris or Berlin as the target — to get the exact converted time including DST adjustments.' },
      { q: 'What is the time difference between cities?', a: 'Common time differences (standard time, no DST): New York to London = 5 hours. New York to Paris = 6 hours. London to Tokyo = 9 hours. Los Angeles to New York = 3 hours. Los Angeles to London = 8 hours. These differences shift by 1 hour when one or both regions observes daylight saving time. Use this converter to get the exact difference for any specific date.' },
      { q: 'How do I convert time zones?', a: 'Enter the date and time in your source time zone, select both zones, and click Convert. The result shows the equivalent time in the target zone, accounting for daylight saving time.' },
      { q: 'What is UTC?', a: 'UTC (Coordinated Universal Time) is the primary time standard by which the world regulates clocks. It does not observe daylight saving time and is used as the reference point for all other time zones.' },
    ],
  },
  fr: {
    title: 'Convertisseur de fuseaux horaires – Convertir l\'heure entre n\'importe quels fuseaux | DateCalc.app',
    metaDesc: 'Convertissez l\'heure entre n\'importe quels fuseaux horaires instantanément. Prend en charge 25+ fuseaux dont UTC. Affiche l\'heure locale, le décalage UTC et la différence.',
    kicker: 'Convertisseur de fuseaux horaires',
    headline: 'Convertir les<br><em>fuseaux horaires</em>',
    subhead: 'Convertissez n\'importe quelle date et heure entre 25+ fuseaux horaires instantanément.',
    fromLabel: 'Fuseau source',
    toLabel: 'Fuseau cible',
    dateLabel: 'Date',
    timeLabel: 'Heure',
    swapBtn: '⇄ Inverser',
    calcBtn: '→ Convertir',
    tipText: '"Le monde tourne sur 24 horloges différentes. Cet outil vous permet de les lire toutes."',
    resultsHeader: 'Heure convertie',
    fromTimeLbl: 'Heure d\'origine', toTimeLbl: 'Heure convertie',
    fromOffsetLbl: 'Décalage UTC (source)', toOffsetLbl: 'Décalage UTC (cible)',
    diffLbl: 'Différence horaire',
    errInvalid: '→ Date ou heure invalide. Vérifiez votre saisie.',
    seoH2a: 'Comment fonctionnent les fuseaux horaires ?',
    seoP1: 'Le monde est divisé en 24 fuseaux horaires principaux, chacun espacé d\'environ 15 degrés de longitude — la distance angulaire que la Terre tourne en une heure. La plupart des fuseaux sont décalés par rapport au Temps Universel Coordonné (UTC) d\'un nombre entier d\'heures, mais certains pays utilisent des décalages fractionnaires : l\'Inde est UTC+5:30, le Népal UTC+5:45 et l\'Iran UTC+3:30. La base de données des fuseaux horaires IANA (aussi appelée base de données tz) est la référence mondiale pour les définitions de fuseaux horaires. Lorsque vous convertissez une heure avec cet outil, le bon décalage UTC pour la date spécifique que vous entrez est utilisé, ce qui signifie que les transitions d\'heure d\'été sont gérées automatiquement.',
    seoH2b: 'Qu\'est-ce que le décalage UTC ?',
    seoP2: 'Le décalage UTC est la différence signée entre un fuseau horaire spécifique et le Temps Universel Coordonné (UTC), le successeur du Temps Moyen de Greenwich (GMT). New York en hiver est UTC−5 (EST) et UTC−4 en été (EDT). Paris est UTC+1 en hiver (CET) et UTC+2 en été (CEST). La principale différence entre UTC et GMT est qu\'UTC est un standard de temps basé sur des horloges atomiques et n\'est jamais ajusté pour l\'heure d\'été, tandis que GMT est techniquement un fuseau horaire. Ce convertisseur utilise toujours le décalage UTC tenant compte de l\'heure d\'été pour la date exacte que vous entrez.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.iana.org/time-zones', label: 'Base de données des fuseaux horaires IANA' },
    faqs: [
      { q: 'Quelle heure est-il à New York maintenant ?', a: 'New York utilise l\'heure de l\'Est : UTC−5 en hiver (EST, du premier dimanche de novembre au deuxième dimanche de mars) et UTC−4 en été (EDT). Pour voir l\'heure actuelle à New York, sélectionnez "New York (EST/EDT)" comme fuseau cible et convertissez depuis votre heure locale. Ce convertisseur utilise des décalages tenant compte de l\'heure d\'été.' },
      { q: 'Quelle est la différence entre UTC et GMT ?', a: 'UTC (Temps Universel Coordonné) est le standard de temps international basé sur des horloges atomiques. GMT (Temps Moyen de Greenwich) est un fuseau horaire centré sur le méridien d\'origine à Londres. En usage quotidien, ils sont identiques — tous deux lisent UTC+0 — mais techniquement UTC ne s\'ajuste jamais pour l\'heure d\'été tandis que le Royaume-Uni observe l\'heure BST en été.' },
      { q: 'Combien de fuseaux horaires y a-t-il dans le monde ?', a: 'Il y a 24 fuseaux horaires standard basés sur des bandes de 15 degrés de longitude, mais le nombre réel de fuseaux civils utilisés dans le monde est d\'environ 38 à 40, car de nombreux pays utilisent des décalages non standard de demi-heure ou quart d\'heure (Inde UTC+5:30, Népal UTC+5:45, Iran UTC+3:30).' },
      { q: 'Comment fonctionne l\'heure d\'été ?', a: 'L\'heure d\'été (DST) consiste à avancer les horloges d\'une heure au printemps pour que les soirées aient plus de lumière du jour. La plupart des États-Unis, du Canada et de l\'Europe observent l\'heure d\'été, mais les dates diffèrent. Les pays proches de l\'équateur et en Asie et Afrique n\'observent généralement pas l\'heure d\'été.' },
      { q: 'Comment convertir EST en CET ?', a: 'L\'heure normale de l\'Est (EST) est UTC−5. L\'heure d\'Europe centrale (CET) est UTC+1. La différence est de 6 heures : quand il est midi EST, il est 18h CET. En été, EST devient EDT (UTC−4) et CET devient CEST (UTC+2), la différence reste donc de 6 heures. Utilisez ce convertisseur en sélectionnant New York comme source et Paris ou Berlin comme cible.' },
      { q: 'Quelle est la différence horaire entre les villes ?', a: 'Différences courantes (heure standard, sans heure d\'été) : New York — Londres = 5 heures. New York — Paris = 6 heures. Londres — Tokyo = 9 heures. Los Angeles — New York = 3 heures. Ces différences changent d\'1 heure quand l\'une ou les deux régions observe l\'heure d\'été. Utilisez ce convertisseur pour obtenir la différence exacte pour une date spécifique.' },
      { q: 'Comment convertir les fuseaux horaires ?', a: 'Entrez la date et l\'heure dans votre fuseau source, sélectionnez les deux fuseaux et cliquez sur Convertir. Le résultat affiche l\'heure équivalente dans le fuseau cible, tenant compte de l\'heure d\'été.' },
      { q: 'Qu\'est-ce que l\'UTC ?', a: 'L\'UTC (Temps Universel Coordonné) est la norme de temps principale par laquelle le monde réglemente les horloges. Il ne respecte pas l\'heure d\'été et sert de référence pour tous les autres fuseaux.' },
    ],
  },
  es: {
    title: 'Conversor de Zona Horaria 2026 – Gratis, Instantáneo, 25+ Zonas',
    metaDesc: 'Convierte la hora entre cualquier zona horaria al instante. Compatible con 25+ zonas incluyendo UTC. Muestra hora local, offset UTC y diferencia horaria — gratis.',
    kicker: 'Conversor de zona horaria',
    headline: 'Convertir<br><em>zonas horarias</em>',
    subhead: 'Convierte cualquier fecha y hora entre 25+ zonas horarias al instante.',
    fromLabel: 'Zona horaria origen',
    toLabel: 'Zona horaria destino',
    dateLabel: 'Fecha',
    timeLabel: 'Hora',
    swapBtn: '⇄ Intercambiar',
    calcBtn: '→ Convertir',
    tipText: '"El mundo funciona con 24 relojes diferentes. Esta herramienta te permite leerlos todos."',
    resultsHeader: 'Hora convertida',
    fromTimeLbl: 'Hora original', toTimeLbl: 'Hora convertida',
    fromOffsetLbl: 'Desplazamiento UTC (origen)', toOffsetLbl: 'Desplazamiento UTC (destino)',
    diffLbl: 'Diferencia horaria',
    errInvalid: '→ Fecha u hora no válida. Verifica tu entrada.',
    seoH2a: '¿Cómo funcionan las zonas horarias?',
    seoP1: 'El mundo está dividido en 24 zonas horarias principales, cada una separada aproximadamente 15 grados de longitud — la distancia angular que la Tierra rota en una hora. La mayoría de las zonas se desfasan del Tiempo Universal Coordinado (UTC) por un número entero de horas, pero algunos países usan desplazamientos fraccionarios: India es UTC+5:30, Nepal UTC+5:45 e Irán UTC+3:30. La base de datos de zonas horarias IANA (también llamada base de datos tz) es el estándar global autoritativo para las definiciones de zonas horarias, mantenida por la Autoridad de Números Asignados de Internet. Cuando conviertes una hora con esta herramienta, se usa el desplazamiento UTC correcto para la fecha específica que ingresas, lo que significa que las transiciones de horario de verano se manejan automáticamente.',
    seoH2b: '¿Qué es el desplazamiento UTC?',
    seoP2: 'El desplazamiento UTC es la diferencia con signo entre una zona horaria específica y el Tiempo Universal Coordinado (UTC), el sucesor del Tiempo Medio de Greenwich (GMT). Nueva York en invierno es UTC−5 (EST) y UTC−4 en verano (EDT). París es UTC+1 en invierno (CET) y UTC+2 en verano (CEST). La principal diferencia entre UTC y GMT es que UTC es un estándar de tiempo basado en relojes atómicos y nunca se ajusta por horario de verano, mientras que GMT es técnicamente una zona horaria. Este conversor siempre usa el desplazamiento UTC con horario de verano para la fecha exacta que ingresas.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.iana.org/time-zones', label: 'Base de datos de zonas horarias IANA' },
    faqs: [
      { q: '¿Qué hora es en Nueva York ahora mismo?', a: 'Nueva York usa la Hora del Este: UTC−5 en invierno (EST, desde el primer domingo de noviembre hasta el segundo domingo de marzo) y UTC−4 en verano (EDT). Para ver la hora actual en Nueva York, selecciona "New York (EST/EDT)" como zona destino y convierte desde tu hora local. Este conversor usa desplazamientos con horario de verano.' },
      { q: '¿Cuál es la diferencia entre UTC y GMT?', a: 'UTC (Tiempo Universal Coordinado) es el estándar de tiempo internacional basado en relojes atómicos. GMT (Tiempo Medio de Greenwich) es una zona horaria centrada en el Meridiano Principal en Londres. En uso cotidiano son idénticos — ambos leen UTC+0 — pero técnicamente UTC nunca se ajusta por horario de verano mientras que el Reino Unido observa BST en verano.' },
      { q: '¿Cuántas zonas horarias hay en el mundo?', a: 'Hay 24 zonas horarias estándar basadas en bandas de 15 grados de longitud, pero el número real de zonas civiles en uso en todo el mundo es de alrededor de 38 a 40, porque muchos países usan desplazamientos no estándar de media hora o cuarto de hora (India UTC+5:30, Nepal UTC+5:45, Irán UTC+3:30).' },
      { q: '¿Cómo funciona el horario de verano?', a: 'El horario de verano (DST) es la práctica de adelantar los relojes una hora en primavera para que las tardes tengan más luz. La mayor parte de Estados Unidos, Canadá y Europa observan el horario de verano, pero las fechas difieren. Los países cerca del ecuador y en Asia y África generalmente no observan el horario de verano.' },
      { q: '¿Cómo convierto EST a CET?', a: 'La Hora Estándar del Este (EST) es UTC−5. La Hora Central Europea (CET) es UTC+1. La diferencia es de 6 horas: cuando son las 12:00 EST, son las 18:00 CET. En verano, EST se convierte en EDT (UTC−4) y CET en CEST (UTC+2), la diferencia sigue siendo de 6 horas. Usa este conversor seleccionando Nueva York como origen y París o Berlín como destino.' },
      { q: '¿Cuál es la diferencia horaria entre ciudades?', a: 'Diferencias comunes (hora estándar, sin horario de verano): Nueva York — Londres = 5 horas. Nueva York — París = 6 horas. Londres — Tokio = 9 horas. Los Ángeles — Nueva York = 3 horas. Estas diferencias cambian 1 hora cuando una o ambas regiones observan el horario de verano. Usa este conversor para la diferencia exacta en una fecha específica.' },
      { q: '¿Cómo convierto zonas horarias?', a: 'Ingresa la fecha y hora en tu zona horaria origen, selecciona ambas zonas y haz clic en Convertir. El resultado muestra la hora equivalente en la zona destino, teniendo en cuenta el horario de verano.' },
      { q: '¿Qué es UTC?', a: 'UTC (Tiempo Universal Coordinado) es el estándar de tiempo principal por el que el mundo regula los relojes. No observa el horario de verano y se usa como referencia para todas las demás zonas horarias.' },
    ],
  },
  pt: {
    title: 'Conversor de Fuso Horário 2026 – Grátis, Instantâneo, 25+ Zonas',
    metaDesc: 'Converta horários entre qualquer fuso horário instantaneamente. Compatível com 25+ fusos incluindo UTC. Mostra hora local, offset UTC e diferença — grátis.',
    kicker: 'Conversor de Fuso Horário',
    headline: 'Conversor de<br><em>Fuso Horário</em>',
    subhead: 'Converta horários entre qualquer fuso horário instantaneamente',
    fromLabel: 'Fuso origem',
    toLabel: 'Fuso destino',
    dateLabel: 'Data',
    timeLabel: 'Hora',
    swapBtn: '⇄ Trocar fusos',
    calcBtn: '→ CONVERTER',
    tipText: '"O mundo funciona com 24 relógios diferentes. Esta ferramenta permite que você os leia todos."',
    resultsHeader: 'Horários convertidos',
    fromTimeLbl: 'Hora original', toTimeLbl: 'Hora convertida',
    fromOffsetLbl: 'Offset UTC (origem)', toOffsetLbl: 'Offset UTC (destino)',
    diffLbl: 'Diferença horária',
    errInvalid: '→ Data ou hora inválida. Verifique sua entrada.',
    labelFromZone: 'Fuso origem', labelToZone: 'Fuso destino',
    labelHour: 'Hora', labelMinute: 'Minuto',
    seoH2a: 'Como converter fusos horários?',
    seoP1: 'Para converter um horário entre fusos, selecione o fuso de origem e o destino, depois insira o horário. Esta calculadora mostra o horário convertido, o offset UTC de cada fuso e a diferença entre eles.',
    seoH2b: 'Quais fusos horários o Brasil usa?',
    seoP2: 'O Brasil tem 4 fusos horários: UTC-2 (Fernando de Noronha), UTC-3 (Brasília – BRT, a maioria do país), UTC-4 (Amazonas) e UTC-5 (Acre). O horário oficial de Brasília (BRT, UTC-3) é o mais usado.',
    faqTitle: 'Perguntas frequentes',
    source: { url: 'https://www.iana.org/time-zones', label: 'Banco de dados de fusos horários IANA' },
    faqs: [
      { q: 'Qual é o fuso horário do Brasil?', a: 'A maior parte do Brasil usa UTC-3 (Horário de Brasília). Os estados do Amazonas usam UTC-4, o Acre usa UTC-5, e Fernando de Noronha usa UTC-2.' },
      { q: 'Qual a diferença entre Brasil e Portugal?', a: 'Portugal (Lisboa) está em UTC+0 no inverno e UTC+1 no verão. A diferença para Brasília (UTC-3) é de 3 a 4 horas, dependendo do horário de verão em Portugal.' },
      { q: 'Qual a diferença entre São Paulo e Nova York?', a: 'São Paulo (UTC-3) e Nova York (UTC-5 no inverno, UTC-4 no verão) têm 1 a 2 horas de diferença. São Paulo está sempre à frente de Nova York.' },
    ],
  },
  de: {
    title: 'Zeitzonen-Umrechner 2026 – Kostenlos, Sofort, 25+ Zonen',
    metaDesc: 'Konvertiere Zeiten zwischen beliebigen Zeitzonen sofort. Unterstützt 25+ Zonen einschließlich UTC. Zeigt Ortszeit, UTC-Offset und Zeitdifferenz — kostenlos.',
    kicker: 'Zeitzonen-Umrechner',
    headline: 'Zeitzonen<br><em>umrechnen</em>',
    subhead: 'Konvertiere jedes Datum und jede Uhrzeit zwischen 25+ Zeitzonen sofort.',
    fromLabel: 'Von Zeitzone',
    toLabel: 'Nach Zeitzone',
    dateLabel: 'Datum',
    timeLabel: 'Uhrzeit',
    swapBtn: '⇄ Zonen tauschen',
    calcBtn: '→ BERECHNEN',
    tipText: '"Die Welt läuft auf 24 verschiedenen Uhren. Dieses Tool lässt Sie alle lesen."',
    resultsHeader: 'Umgerechnete Zeit',
    fromTimeLbl: 'Originalzeit', toTimeLbl: 'Umgerechnete Zeit',
    fromOffsetLbl: 'UTC-Offset (von)', toOffsetLbl: 'UTC-Offset (nach)',
    diffLbl: 'Zeitunterschied',
    errInvalid: '→ Ungültiges Datum oder Uhrzeit. Bitte überprüfen Sie Ihre Eingabe.',
    labelFromZone: 'Von Zeitzone', labelToZone: 'Nach Zeitzone',
    labelHour: 'Stunde', labelMinute: 'Minute',
    seoH2a: 'Wie funktionieren Zeitzonen?',
    seoP1: 'Die Welt ist in 24 Hauptzeitzonen aufgeteilt, jeweils etwa 15 Längengrade voneinander entfernt — der Winkelabstand, den die Erde in einer Stunde dreht. Die meisten Zonen weichen von der Koordinierten Weltzeit (UTC) um eine ganze Stundenzahl ab, aber einige Länder verwenden Bruchteilsversätze: Indien ist UTC+5:30, Nepal UTC+5:45 und Iran UTC+3:30. Die IANA-Zeitzonendatenbank (auch tz-Datenbank oder zoneinfo genannt) ist der weltweite Standard für Zeitzonendefinitionen. Wenn Sie mit diesem Tool eine Zeit umrechnen, wird der korrekte UTC-Offset für das spezifische Datum verwendet — Sommerzeit-Übergänge werden automatisch berücksichtigt.',
    seoH2b: 'Was ist der UTC-Offset?',
    seoP2: 'Der UTC-Offset ist die Vorzeichendifferenz zwischen einer bestimmten Zeitzone und der Koordinierten Weltzeit (UTC), dem Nachfolger der Greenwich Mean Time (GMT). New York ist im Winter UTC−5 (EST) und im Sommer UTC−4 (EDT). Paris ist im Winter UTC+1 (CET) und im Sommer UTC+2 (CEST). Der wesentliche Unterschied zwischen UTC und GMT ist, dass UTC ein auf Atomuhren basierender Zeitstandard ist und nie für Sommerzeit angepasst wird, während GMT technisch gesehen eine Zeitzone ist. Dieser Umrechner verwendet immer den Sommerzeit-bewussten UTC-Offset für das genaue Datum, das Sie eingeben.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.iana.org/time-zones', label: 'IANA-Zeitzonendatenbank' },
    faqs: [
      { q: 'Wie spät ist es jetzt in New York?', a: 'New York verwendet Eastern Time: UTC−5 im Winter (EST, vom ersten Sonntag im November bis zum zweiten Sonntag im März) und UTC−4 im Sommer (EDT). Um die aktuelle New Yorker Zeit zu sehen, wählen Sie „New York (EST/EDT)" als Zielzone und konvertieren von Ihrer Ortszeit. Dieser Umrechner verwendet Sommerzeit-bewusste Offsets.' },
      { q: 'Was ist der Unterschied zwischen UTC und GMT?', a: 'UTC (Koordinierte Weltzeit) ist der internationale Zeitstandard auf Basis von Atomuhren. GMT (Greenwich Mean Time) ist eine Zeitzone, die am Nullmeridian in London zentriert ist. Im alltäglichen Gebrauch sind sie identisch — beide zeigen UTC+0 — aber technisch gesehen passt UTC sich nie an die Sommerzeit an, während das Vereinigte Königreich BST im Sommer beobachtet.' },
      { q: 'Wie viele Zeitzonen gibt es auf der Welt?', a: 'Es gibt 24 Standardzeitzonen basierend auf 15-Grad-Längengradbändern, aber die tatsächliche Anzahl der zivilen Zeitzonen weltweit beträgt etwa 38–40, da viele Länder nicht-standardmäßige Halbstunden- oder Viertelstunden-Offsets verwenden (Indien UTC+5:30, Nepal UTC+5:45, Iran UTC+3:30).' },
      { q: 'Wie funktioniert die Sommerzeit?', a: 'Die Sommerzeit (DST) ist die Praxis, die Uhren im Frühling um eine Stunde vorzustellen, damit die Abende mehr Tageslicht haben. Die meisten USA, Kanada und Europa beobachten Sommerzeit, aber die Termine unterscheiden sich. Länder nahe dem Äquator sowie in Asien und Afrika beobachten generell keine Sommerzeit.' },
      { q: 'Wie rechne ich EST in CET um?', a: 'Eastern Standard Time (EST) ist UTC−5. Mitteleuropäische Zeit (CET) ist UTC+1. Der Unterschied beträgt 6 Stunden: Wenn es 12:00 Uhr EST ist, ist es 18:00 Uhr CET. Im Sommer wird EST zu EDT (UTC−4) und CET zu CEST (UTC+2), der Unterschied bleibt also 6 Stunden. Verwenden Sie diesen Umrechner — wählen Sie New York als Quelle und Paris oder Berlin als Ziel.' },
      { q: 'Was ist der Zeitunterschied zwischen Städten?', a: 'Häufige Zeitunterschiede (Normalzeit, ohne Sommerzeit): New York nach London = 5 Stunden. New York nach Paris = 6 Stunden. London nach Tokio = 9 Stunden. Los Angeles nach New York = 3 Stunden. Diese Unterschiede verschieben sich um 1 Stunde, wenn eine oder beide Regionen Sommerzeit beobachten. Verwenden Sie diesen Umrechner für den genauen Unterschied für ein bestimmtes Datum.' },
      { q: 'Wie rechne ich Zeitzonen um?', a: 'Geben Sie Datum und Uhrzeit in Ihrer Ausgangszeitzone ein, wählen Sie beide Zonen und klicken Sie auf Berechnen. Das Ergebnis zeigt die entsprechende Zeit in der Zielzone unter Berücksichtigung der Sommerzeit.' },
      { q: 'Was ist UTC?', a: 'UTC (Koordinierte Weltzeit) ist der primäre Zeitstandard, nach dem die Welt Uhren reguliert. Er beobachtet keine Sommerzeit und dient als Referenzpunkt für alle anderen Zeitzonen.' },
    ],
  },
  it: {
    title: 'Convertitore Fuso Orario 2026 – Gratis, Immediato, 25+ Zone',
    metaDesc: 'Converti l\'ora tra qualsiasi fuso orario istantaneamente. Supporta 25+ zone incluso UTC. Mostra ora locale, offset UTC e differenza oraria — gratis.',
    kicker: 'Convertitore Fuso Orario',
    headline: 'Converti<br><em>fusi orari</em>',
    subhead: 'Converti qualsiasi data e ora tra 25+ fusi orari istantaneamente.',
    fromLabel: 'Dal fuso orario',
    toLabel: 'Al fuso orario',
    dateLabel: 'Data',
    timeLabel: 'Ora',
    swapBtn: '⇄ Scambia zone',
    calcBtn: '→ CALCOLA',
    tipText: '"Il mondo gira su 24 orologi diversi. Questo strumento ti permette di leggerli tutti."',
    resultsHeader: 'Ora convertita',
    fromTimeLbl: 'Ora originale', toTimeLbl: 'Ora convertita',
    fromOffsetLbl: 'Offset UTC (da)', toOffsetLbl: 'Offset UTC (a)',
    diffLbl: 'Differenza oraria',
    errInvalid: '→ Data o ora non valida. Controlla la tua immissione.',
    labelFromZone: 'Dal fuso orario', labelToZone: 'Al fuso orario',
    labelHour: 'Ora', labelMinute: 'Minuto',
    seoH2a: 'Come funzionano i fusi orari?',
    seoP1: 'Il mondo è diviso in 24 fusi orari principali, ognuno distante circa 15 gradi di longitudine — la distanza angolare che la Terra ruota in un\'ora. La maggior parte delle zone si discosta dal Tempo Universale Coordinato (UTC) di un numero intero di ore, ma alcuni paesi usano offset frazionari: l\'India è UTC+5:30, il Nepal UTC+5:45 e l\'Iran UTC+3:30. Il database dei fusi orari IANA (detto anche database tz) è lo standard globale per le definizioni dei fusi orari. Quando converti un orario con questo strumento, viene usato l\'offset UTC corretto per la data specifica che inserisci — le transizioni dell\'ora legale sono gestite automaticamente.',
    seoH2b: 'Cos\'è l\'offset UTC?',
    seoP2: 'L\'offset UTC è la differenza con segno tra un fuso orario specifico e il Tempo Universale Coordinato (UTC), il successore del Greenwich Mean Time (GMT). New York in inverno è UTC−5 (EST) e UTC−4 in estate (EDT). Parigi è UTC+1 in inverno (CET) e UTC+2 in estate (CEST). La differenza principale tra UTC e GMT è che UTC è uno standard temporale basato su orologi atomici e non viene mai regolato per l\'ora legale, mentre GMT è tecnicamente un fuso orario. Questo convertitore usa sempre l\'offset UTC consapevole dell\'ora legale per la data esatta che inserisci.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.iana.org/time-zones', label: 'Database dei fusi orari IANA' },
    faqs: [
      { q: 'Che ore sono adesso a New York?', a: 'New York usa l\'ora orientale: UTC−5 in inverno (EST, dalla prima domenica di novembre alla seconda domenica di marzo) e UTC−4 in estate (EDT). Per vedere l\'ora corrente a New York, seleziona "New York (EST/EDT)" come zona di destinazione e converti dalla tua ora locale. Questo convertitore usa offset consapevoli dell\'ora legale.' },
      { q: 'Qual è la differenza tra UTC e GMT?', a: 'UTC (Tempo Universale Coordinato) è lo standard temporale internazionale basato su orologi atomici. GMT (Greenwich Mean Time) è un fuso orario centrato sul Meridiano di Greenwich a Londra. Nell\'uso quotidiano sono identici — entrambi mostrano UTC+0 — ma tecnicamente UTC non si adatta mai all\'ora legale mentre il Regno Unito osserva il BST in estate.' },
      { q: 'Quanti fusi orari ci sono nel mondo?', a: 'Ci sono 24 fusi orari standard basati su bande di 15 gradi di longitudine, ma il numero effettivo di fusi civili usati nel mondo è circa 38–40, perché molti paesi usano offset non standard di mezz\'ora o quarto d\'ora (India UTC+5:30, Nepal UTC+5:45, Iran UTC+3:30).' },
      { q: 'Come funziona l\'ora legale?', a: 'L\'ora legale (DST) è la pratica di spostare avanti gli orologi di un\'ora in primavera in modo che le serate abbiano più luce del giorno. La maggior parte degli Stati Uniti, del Canada e dell\'Europa osserva l\'ora legale, ma le date differiscono. I paesi vicini all\'equatore e in Asia e Africa generalmente non osservano l\'ora legale.' },
      { q: 'Come converto EST in CET?', a: 'L\'Eastern Standard Time (EST) è UTC−5. Il Central European Time (CET) è UTC+1. La differenza è di 6 ore: quando sono le 12:00 EST, sono le 18:00 CET. In estate, EST diventa EDT (UTC−4) e CET diventa CEST (UTC+2), quindi la differenza rimane 6 ore. Usa questo convertitore — seleziona New York come sorgente e Parigi o Berlino come destinazione.' },
      { q: 'Qual è la differenza oraria tra città?', a: 'Differenze orarie comuni (ora solare, senza ora legale): New York — Londra = 5 ore. New York — Parigi = 6 ore. Londra — Tokyo = 9 ore. Los Angeles — New York = 3 ore. Queste differenze si spostano di 1 ora quando una o entrambe le regioni osservano l\'ora legale. Usa questo convertitore per la differenza esatta per una data specifica.' },
      { q: 'Come faccio a convertire i fusi orari?', a: 'Inserisci la data e l\'ora nel tuo fuso orario di origine, seleziona entrambe le zone e clicca su Calcola. Il risultato mostra l\'ora equivalente nel fuso di destinazione, tenendo conto dell\'ora legale.' },
      { q: 'Cos\'è l\'UTC?', a: 'UTC (Tempo Universale Coordinato) è lo standard temporale principale con cui il mondo regola gli orologi. Non osserva l\'ora legale e viene usato come punto di riferimento per tutti gli altri fusi orari.' },
    ],
  },
  pl: {
    title: 'Przelicznik Stref Czasowych 2026 – Za Darmo, 25+ Stref',
    metaDesc: 'Przelicz czas między dowolnymi strefami czasowymi natychmiast. Obsługuje 25+ stref w tym UTC. Pokazuje czas lokalny, offset UTC i różnicę czasu — za darmo.',
    kicker: 'Przelicznik Stref Czasowych',
    headline: 'Przelicz<br><em>strefy czasowe</em>',
    subhead: 'Przelicz dowolną datę i godzinę między 25+ strefami czasowymi natychmiast.',
    fromLabel: 'Ze strefy czasowej',
    toLabel: 'Do strefy czasowej',
    dateLabel: 'Data',
    timeLabel: 'Godzina',
    swapBtn: '⇄ Zamień strefy',
    calcBtn: '→ OBLICZ',
    tipText: '"Świat chodzi na 24 różnych zegarach. To narzędzie pozwala ci je wszystkie odczytać."',
    resultsHeader: 'Przeliczony czas',
    fromTimeLbl: 'Czas oryginalny', toTimeLbl: 'Przeliczony czas',
    fromOffsetLbl: 'Offset UTC (z)', toOffsetLbl: 'Offset UTC (do)',
    diffLbl: 'Różnica czasu',
    errInvalid: '→ Nieprawidłowa data lub godzina. Sprawdź swój wpis.',
    labelFromZone: 'Ze strefy czasowej', labelToZone: 'Do strefy czasowej',
    labelHour: 'Godzina', labelMinute: 'Minuta',
    seoH2a: 'Jak działają strefy czasowe?',
    seoP1: 'Świat jest podzielony na 24 główne strefy czasowe, każda oddalona o około 15 stopni długości geograficznej — kąt, o który Ziemia obraca się w ciągu jednej godziny. Większość stref różni się od Skoordynowanego Czasu Uniwersalnego (UTC) o całkowitą liczbę godzin, ale niektóre kraje używają ułamkowych przesunięć: Indie to UTC+5:30, Nepal UTC+5:45, Iran UTC+3:30. Baza danych stref czasowych IANA (znana też jako baza tz) jest autorytatywnym globalnym standardem definicji stref czasowych. Gdy przeliczasz czas tym narzędziem, używany jest prawidłowy offset UTC dla konkretnej wprowadzonej daty — przejścia czasu letniego są obsługiwane automatycznie.',
    seoH2b: 'Co to jest offset UTC?',
    seoP2: 'Offset UTC to różnica ze znakiem między konkretną strefą czasową a Skoordynowanym Czasem Uniwersalnym (UTC), następcą Czasu Greenwich (GMT). Nowy Jork zimą to UTC−5 (EST), latem UTC−4 (EDT). Paryż zimą to UTC+1 (CET), latem UTC+2 (CEST). Kluczowa różnica między UTC a GMT polega na tym, że UTC to standard czasu oparty na zegarach atomowych i nigdy nie jest dostosowywany do czasu letniego, podczas gdy GMT jest technicznie strefą czasową. Ten przelicznik zawsze używa offsetu UTC uwzględniającego czas letni dla dokładnej daty, którą wpisujesz.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.iana.org/time-zones', label: 'Baza danych stref czasowych IANA' },
    faqs: [
      { q: 'Która godzina jest teraz w Nowym Jorku?', a: 'Nowy Jork używa czasu wschodniego: UTC−5 zimą (EST, od pierwszej niedzieli listopada do drugiej niedzieli marca) i UTC−4 latem (EDT). Aby zobaczyć aktualny czas w Nowym Jorku, wybierz "New York (EST/EDT)" jako strefę docelową i przelicz ze swojego czasu lokalnego. Ten przelicznik używa offsetów uwzględniających czas letni.' },
      { q: 'Jaka jest różnica między UTC a GMT?', a: 'UTC (Skoordynowany Czas Uniwersalny) to międzynarodowy standard czasu oparty na zegarach atomowych. GMT (Czas Greenwich) to strefa czasowa wyśrodkowana na Południku Zerowym w Londynie. W codziennym użyciu są identyczne — oba pokazują UTC+0 — ale technicznie UTC nigdy nie dostosowuje się do czasu letniego, podczas gdy Wielka Brytania obserwuje BST latem.' },
      { q: 'Ile stref czasowych jest na świecie?', a: 'Istnieje 24 standardowe strefy czasowe oparte na pasmach 15 stopni długości geograficznej, ale rzeczywista liczba cywilnych stref czasowych używanych na świecie wynosi około 38–40, ponieważ wiele krajów używa niestandardowych przesunięć o pół godziny lub kwadrans (Indie UTC+5:30, Nepal UTC+5:45, Iran UTC+3:30).' },
      { q: 'Jak działa czas letni?', a: 'Czas letni (DST) to praktyka przesuwania zegarów o godzinę do przodu wiosną, aby wieczory miały więcej światła dziennego. Większość USA, Kanady i Europy obserwuje czas letni, ale daty się różnią. Kraje bliskie równika oraz w Azji i Afryce generalnie nie obserwują czasu letniego.' },
      { q: 'Jak przeliczam EST na CET?', a: 'Eastern Standard Time (EST) to UTC−5. Czas Środkowoeuropejski (CET) to UTC+1. Różnica wynosi 6 godzin: gdy jest 12:00 EST, jest 18:00 CET. Latem EST staje się EDT (UTC−4), a CET staje się CEST (UTC+2), więc różnica nadal wynosi 6 godzin. Użyj tego przelicznika — wybierz Nowy Jork jako źródło i Paryż lub Berlin jako cel.' },
      { q: 'Jaka jest różnica czasu między miastami?', a: 'Typowe różnice czasu (czas standardowy, bez czasu letniego): Nowy Jork — Londyn = 5 godzin. Nowy Jork — Paryż = 6 godzin. Londyn — Tokio = 9 godzin. Los Angeles — Nowy Jork = 3 godziny. Różnice te przesuwają się o 1 godzinę, gdy jeden lub oba regiony obserwują czas letni. Użyj tego przelicznika dla dokładnej różnicy dla konkretnej daty.' },
      { q: 'Jak przeliczam strefy czasowe?', a: 'Wpisz datę i godzinę w swojej źródłowej strefie czasowej, wybierz obie strefy i kliknij Oblicz. Wynik pokazuje równoważny czas w strefie docelowej, uwzględniając czas letni.' },
      { q: 'Co to jest UTC?', a: 'UTC (Skoordynowany Czas Uniwersalny) to główny standard czasu, według którego świat reguluje zegary. Nie obserwuje czasu letniego i jest używany jako punkt odniesienia dla wszystkich innych stref czasowych.' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'time-zone-converter', slugs: { en: 'time-zone-converter', fr: 'fr/convertisseur-fuseaux-horaires', es: 'es/conversor-zona-horaria', pt: 'pt/conversor-fuso-horario', de: 'de/zeitzonen-umrechner', it: 'it/convertitore-fuso-orario', pl: 'pl/przelicznik-stref-czasowych' } },
  ],

  render(pageId, lang) {
    const t = T[lang];

    // Build zone options HTML
    const zoneOptions = ZONES.map(z => `<option value="${z.id}">${z.label}</option>`).join('\n        ');

    // Default from = New York (index 5), default to = London (index 9), UTC (index 25)
    const defaultFrom = 'America/New_York';
    const defaultTo = 'Europe/London';

    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

    const formGrid = `  <div class="form-grid">
    <div class="form-col">
      <div class="field-label">${t.fromLabel}</div>
      <select id="fromZone" class="calc-select">
        ${zoneOptions}
      </select>
      <div class="field-label" style="margin-top:1rem">${t.toLabel}</div>
      <select id="toZone" class="calc-select">
        ${zoneOptions}
      </select>
      <button class="swap-btn" onclick="swapZones()" style="margin-top:.8rem;background:none;border:1px solid var(--accent);color:var(--accent);padding:.4rem 1rem;cursor:pointer;font-family:inherit;font-size:.9rem">${t.swapBtn}</button>
      <div class="field-label" style="margin-top:1rem">${t.dateLabel}</div>
      <div class="date-row">
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div class="field-label" style="margin-top:.8rem">${t.timeLabel}</div>
      <div class="date-row">
        <input type="number" id="hour" placeholder="HH" min="0" max="23" inputmode="numeric" oninput="clamp(this,0,23)">
        <span>:</span>
        <input type="number" id="minute" placeholder="MM" min="0" max="59" inputmode="numeric" oninput="clamp(this,0,59)">
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col auto-info">
      <p class="tip-text">${t.tipText}</p>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroTime" style="font-size:clamp(2rem,8vw,4rem)">—</span>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.fromTimeLbl}</div><div class="fact-val" id="ffFrom">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.toTimeLbl}</div><div class="fact-val" id="ffTo">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.fromOffsetLbl}</div><div class="fact-val" id="ffFromOff">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.toOffsetLbl}</div><div class="fact-val" id="ffToOff">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.diffLbl}</div><div class="fact-val" id="ffDiff">—</div></div>
    </div>
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

    const data = JSON.stringify({ errInvalid: t.errInvalid, defaultFrom, defaultTo });

    const script = `
var D = ${data};

// Pre-select default zones
document.getElementById('fromZone').value = D.defaultFrom;
document.getElementById('toZone').value = D.defaultTo;

// Pre-fill current date/time
(function(){
  var now = new Date();
  document.getElementById('day').value = now.getDate();
  document.getElementById('month').value = now.getMonth()+1;
  document.getElementById('year').value = now.getFullYear();
  document.getElementById('hour').value = now.getHours();
  document.getElementById('minute').value = now.getMinutes();
})();

function swapZones(){
  var f = document.getElementById('fromZone').value;
  var t = document.getElementById('toZone').value;
  document.getElementById('fromZone').value = t;
  document.getElementById('toZone').value = f;
}

function getUtcOffset(tzId, date){
  // Get UTC offset in minutes for tzId at given Date
  var utcStr = date.toLocaleString('en-US', {timeZone:'UTC', hour12:false,
    year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'});
  var tzStr  = date.toLocaleString('en-US', {timeZone:tzId,  hour12:false,
    year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'});
  function parse(s){
    var m=s.match(/(\\d+)\\/(\\d+)\\/(\\d+),\\s*(\\d+):(\\d+):(\\d+)/);
    if(!m) return NaN;
    return Date.UTC(+m[3],+m[1]-1,+m[2],+m[4]===24?0:+m[4],+m[5],+m[6]);
  }
  return (parse(tzStr)-parse(utcStr))/60000;
}

function fmtOffset(mins){
  var sign = mins>=0?'+':'-';
  var abs=Math.abs(mins);
  var h=Math.floor(abs/60);
  var m=abs%60;
  return 'UTC'+sign+pad2(h)+(m?':'+pad2(m):'');
}

function pad2(n){return n<10?'0'+n:''+n;}

function fmtTimeInZone(date, tzId){
  return date.toLocaleString('en-GB', {
    timeZone: tzId,
    year:'numeric', month:'short', day:'numeric',
    hour:'2-digit', minute:'2-digit', hour12:false
  });
}

function fmtDiff(diffMin){
  var abs=Math.abs(diffMin);
  var h=Math.floor(abs/60);
  var m=abs%60;
  var sign=diffMin>=0?'+':'-';
  if(m) return sign+h+'h '+pad2(m)+'min';
  return sign+h+'h';
}

function calculate(){
  var dv=parseInt(document.getElementById('day').value);
  var mv=parseInt(document.getElementById('month').value);
  var yv=parseInt(document.getElementById('year').value);
  var hv=parseInt(document.getElementById('hour').value);
  var minv=parseInt(document.getElementById('minute').value||'0');
  var fromZone=document.getElementById('fromZone').value;
  var toZone=document.getElementById('toZone').value;
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show');
  res.classList.remove('show');

  if(!dv||!mv||!yv||isNaN(hv)||hv<0||hv>23||minv<0||minv>59){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }

  // Build a UTC timestamp for the given local time in fromZone
  // Strategy: find the UTC time such that in fromZone it reads yv/mv/dv hv:minv
  // Approximation: use offset at noon on that day
  var approx=new Date(Date.UTC(yv,mv-1,dv,12,0,0));
  var fromOff=getUtcOffset(fromZone, approx);
  var utcMs=Date.UTC(yv,mv-1,dv,hv,minv,0) - fromOff*60000;
  var utcDate=new Date(utcMs);

  var fromOffFinal=getUtcOffset(fromZone, utcDate);
  var toOffFinal=getUtcOffset(toZone, utcDate);
  var diff=toOffFinal-fromOffFinal;

  var toTimeStr=fmtTimeInZone(utcDate, toZone);
  var fromTimeStr=fmtTimeInZone(utcDate, fromZone);

  // Hero: just the time portion in target zone
  var heroStr=utcDate.toLocaleString('en-GB',{timeZone:toZone,hour:'2-digit',minute:'2-digit',hour12:false});

  document.getElementById('heroTime').textContent=heroStr;
  document.getElementById('ffFrom').textContent=fromTimeStr;
  document.getElementById('ffTo').textContent=toTimeStr;
  document.getElementById('ffFromOff').textContent=fmtOffset(fromOffFinal);
  document.getElementById('ffToOff').textContent=fmtOffset(toOffFinal);
  document.getElementById('ffDiff').textContent=fmtDiff(diff);

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
calculate();
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
