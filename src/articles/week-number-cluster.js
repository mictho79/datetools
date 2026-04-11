'use strict';
const T = {};

// ── Article 1: iso-week-number-explained ─────────────────────
T['iso-week-number-explained'] = {
  en: {
    title: 'ISO Week Number Explained — How Week Numbering Works',
    metaDesc: 'What is an ISO week number? How ISO 8601 week numbering works, how week 1 is defined, and why some years have 53 weeks.',
    kicker: 'WEEK NUMBER GUIDE',
    h1: 'ISO Week Number Explained',
    intro: 'An ISO week number is a standardized way to number the weeks of the year, defined by the ISO 8601 international standard. Week 1 is the week containing the first Thursday of the year — and every week runs Monday to Sunday.',
    sections: [
      {
        h2: 'What is an ISO week number?',
        body: `<p>ISO week numbering assigns a number from 1 to 52 (or 53) to each week of the year. It is defined by the <strong>ISO 8601</strong> standard, used in business, logistics, and government across Europe and internationally.</p>
<p>Key rules:</p>
<ul>
<li>Weeks run <strong>Monday to Sunday</strong></li>
<li>Week 1 is the week containing the first Thursday of January</li>
<li>Most years have 52 weeks; some have 53</li>
<li>The week year and the calendar year can differ by 1–3 days at year boundaries</li>
</ul>`
      },
      {
        h2: 'How is week 1 defined?',
        body: `<p>Week 1 is the week that contains <strong>January 4</strong>. This is equivalent to saying: the week containing the first Thursday of the year.</p>
<p>This means January 1 is sometimes in week 52 or 53 of the <em>previous</em> year. For example:</p>
<ul>
<li>January 1, 2016 was a Friday → it belonged to week 53 of <strong>2015</strong></li>
<li>January 1, 2018 was a Monday → week 1 of <strong>2018</strong> started that day</li>
</ul>
<p>Conversely, late December days can fall in week 1 of the <em>next</em> year. December 31, 2018 was a Monday — it was in week 1 of <strong>2019</strong>.</p>`
      },
      {
        h2: 'Why do some years have 53 weeks?',
        body: `<p>A regular year has 52 weeks and 1 extra day. A leap year has 52 weeks and 2 extra days. When January 1 falls on a <strong>Thursday</strong>, the year has 53 ISO weeks. Leap years that start on a <strong>Wednesday</strong> also get 53 weeks.</p>
<p>Recent years with 53 ISO weeks: 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'ISO week numbering vs US week numbering',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (international)</th><th>US / Canada</th></tr>
<tr><td>First day of week</td><td>Monday</td><td>Sunday</td></tr>
<tr><td>Week 1 definition</td><td>Contains January 4 (first Thursday)</td><td>Contains January 1</td></tr>
<tr><td>Used in</td><td>Europe, business, logistics</td><td>USA, Canada, Japan</td></tr>
<tr><td>Years with 53 weeks</td><td>Years starting on Thu (or Wed in leap)</td><td>Years starting on Sun (or Sat in leap)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'What week number is it today?', a: 'Use the week number calculator on this site — it shows the current ISO week number updated in real time.' },
      { q: 'Does week 1 always start on January 1?', a: 'No. ISO week 1 starts on Monday of the week containing January 4. January 1 can fall in week 52 or 53 of the previous year if it is a Friday, Saturday, or Sunday.' },
      { q: 'How many weeks are in 2025?', a: '2025 has 52 ISO weeks. Week 1 of 2025 started on Monday, December 30, 2024. Week 52 ends on Sunday, December 28, 2025.' },
      { q: 'How many weeks are in 2026?', a: '2026 has 53 ISO weeks, because January 1, 2026 falls on a Thursday. Week 53 of 2026 contains December 28–January 3, 2027.' },
      { q: 'What is the difference between week number and calendar week?', a: '"Week number" and "calendar week" (KW in German, CW in English) both refer to ISO week numbers — they are the same thing. The term "calendar week" is common in German-speaking countries and business contexts.' },
    ],
    pillar: { href: '/week-number/', label: 'Week Number Calculator' },
    related: [
      { href: '/how-many-weeks-in-a-year/', label: 'How many weeks in a year?' },
      { href: '/week-numbers-2025-calendar/', label: 'Week numbers 2025 calendar' },
      { href: '/what-week-number-is-it/', label: 'What week number is it?' },
    ],
  },
  fr: {
    title: 'Numéro de semaine ISO expliqué — Comment fonctionne la numérotation des semaines',
    metaDesc: "Qu'est-ce qu'un numéro de semaine ISO ? Comment fonctionne la numérotation ISO 8601, comment la semaine 1 est définie, et pourquoi certaines années ont 53 semaines.",
    kicker: 'GUIDE NUMÉRO DE SEMAINE',
    h1: 'Numéro de semaine ISO expliqué',
    intro: "Un numéro de semaine ISO est une façon standardisée de numéroter les semaines de l'année, définie par la norme internationale ISO 8601. La semaine 1 est la semaine contenant le premier jeudi de l'année — et chaque semaine va du lundi au dimanche.",
    sections: [
      {
        h2: "Qu'est-ce qu'un numéro de semaine ISO ?",
        body: `<p>La numérotation ISO des semaines attribue un numéro de 1 à 52 (ou 53) à chaque semaine de l'année. Elle est définie par la norme <strong>ISO 8601</strong>, utilisée dans les entreprises, la logistique et les administrations en Europe et à l'international.</p>
<p>Règles principales :</p>
<ul>
<li>Les semaines vont du <strong>lundi au dimanche</strong></li>
<li>La semaine 1 est la semaine contenant le premier jeudi de janvier</li>
<li>La plupart des années ont 52 semaines ; certaines en ont 53</li>
<li>L'année-semaine et l'année civile peuvent différer de 1 à 3 jours aux limites de l'année</li>
</ul>`
      },
      {
        h2: 'Comment la semaine 1 est-elle définie ?',
        body: `<p>La semaine 1 est la semaine qui contient le <strong>4 janvier</strong>. Cela équivaut à dire : la semaine contenant le premier jeudi de l'année.</p>
<p>Cela signifie que le 1er janvier se trouve parfois dans la semaine 52 ou 53 de l'année <em>précédente</em>. Par exemple :</p>
<ul>
<li>Le 1er janvier 2016 était un vendredi → il appartenait à la semaine 53 de <strong>2015</strong></li>
<li>Le 1er janvier 2018 était un lundi → la semaine 1 de <strong>2018</strong> a commencé ce jour-là</li>
</ul>
<p>À l'inverse, les derniers jours de décembre peuvent tomber dans la semaine 1 de l'année <em>suivante</em>. Le 31 décembre 2018 était un lundi — il était dans la semaine 1 de <strong>2019</strong>.</p>`
      },
      {
        h2: "Pourquoi certaines années ont-elles 53 semaines ?",
        body: `<p>Une année ordinaire compte 52 semaines et 1 jour supplémentaire. Une année bissextile compte 52 semaines et 2 jours supplémentaires. Lorsque le 1er janvier tombe un <strong>jeudi</strong>, l'année compte 53 semaines ISO. Les années bissextiles qui commencent un <strong>mercredi</strong> ont également 53 semaines.</p>
<p>Années récentes avec 53 semaines ISO : 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'Numérotation ISO vs numérotation américaine',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (international)</th><th>États-Unis / Canada</th></tr>
<tr><td>Premier jour de la semaine</td><td>Lundi</td><td>Dimanche</td></tr>
<tr><td>Définition de la semaine 1</td><td>Contient le 4 janvier (premier jeudi)</td><td>Contient le 1er janvier</td></tr>
<tr><td>Utilisé dans</td><td>Europe, entreprises, logistique</td><td>États-Unis, Canada, Japon</td></tr>
<tr><td>Années avec 53 semaines</td><td>Années commençant un jeu. (ou mer. en bissextile)</td><td>Années commençant un dim. (ou sam. en bissextile)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Quel est le numéro de semaine aujourd\'hui ?', a: 'Utilisez le calculateur de numéro de semaine sur ce site — il affiche le numéro de semaine ISO actuel mis à jour en temps réel.' },
      { q: 'La semaine 1 commence-t-elle toujours le 1er janvier ?', a: "Non. La semaine ISO 1 commence le lundi de la semaine contenant le 4 janvier. Le 1er janvier peut tomber dans la semaine 52 ou 53 de l'année précédente s'il est un vendredi, samedi ou dimanche." },
      { q: 'Combien de semaines y a-t-il en 2025 ?', a: '2025 compte 52 semaines ISO. La semaine 1 de 2025 a commencé le lundi 30 décembre 2024. La semaine 52 se termine le dimanche 28 décembre 2025.' },
      { q: 'Combien de semaines y a-t-il en 2026 ?', a: '2026 compte 53 semaines ISO, car le 1er janvier 2026 tombe un jeudi. La semaine 53 de 2026 contient les jours du 28 décembre au 3 janvier 2027.' },
      { q: 'Quelle est la différence entre numéro de semaine et semaine calendaire ?', a: '« Numéro de semaine » et « semaine calendaire » (KW en allemand, CW en anglais) désignent tous deux les numéros de semaine ISO — c\'est la même chose. Le terme « semaine calendaire » est courant dans les pays germanophones et les contextes professionnels.' },
    ],
    pillar: { href: '/week-number/', label: 'Calculateur de numéro de semaine' },
    related: [
      { href: '/how-many-weeks-in-a-year/', label: 'Combien de semaines dans une année ?' },
      { href: '/week-numbers-2025-calendar/', label: 'Calendrier numéros de semaine 2025' },
      { href: '/what-week-number-is-it/', label: 'Quel est le numéro de semaine ?' },
    ],
  },
  es: {
    title: 'Número de semana ISO explicado — Cómo funciona la numeración de semanas',
    metaDesc: '¿Qué es un número de semana ISO? Cómo funciona la numeración de semanas ISO 8601, cómo se define la semana 1 y por qué algunos años tienen 53 semanas.',
    kicker: 'GUÍA NÚMERO DE SEMANA',
    h1: 'Número de semana ISO explicado',
    intro: 'Un número de semana ISO es una forma estandarizada de numerar las semanas del año, definida por la norma internacional ISO 8601. La semana 1 es la semana que contiene el primer jueves del año — y cada semana va de lunes a domingo.',
    sections: [
      {
        h2: '¿Qué es un número de semana ISO?',
        body: `<p>La numeración ISO de semanas asigna un número del 1 al 52 (o 53) a cada semana del año. Está definida por la norma <strong>ISO 8601</strong>, utilizada en empresas, logística y administraciones en Europa e internacionalmente.</p>
<p>Reglas principales:</p>
<ul>
<li>Las semanas van de <strong>lunes a domingo</strong></li>
<li>La semana 1 es la semana que contiene el primer jueves de enero</li>
<li>La mayoría de los años tienen 52 semanas; algunos tienen 53</li>
<li>El año-semana y el año calendario pueden diferir entre 1 y 3 días en los límites del año</li>
</ul>`
      },
      {
        h2: '¿Cómo se define la semana 1?',
        body: `<p>La semana 1 es la semana que contiene el <strong>4 de enero</strong>. Esto equivale a decir: la semana que contiene el primer jueves del año.</p>
<p>Esto significa que el 1 de enero a veces cae en la semana 52 o 53 del año <em>anterior</em>. Por ejemplo:</p>
<ul>
<li>El 1 de enero de 2016 era viernes → pertenecía a la semana 53 de <strong>2015</strong></li>
<li>El 1 de enero de 2018 era lunes → la semana 1 de <strong>2018</strong> comenzó ese día</li>
</ul>
<p>Por el contrario, los últimos días de diciembre pueden caer en la semana 1 del año <em>siguiente</em>. El 31 de diciembre de 2018 era lunes — estaba en la semana 1 de <strong>2019</strong>.</p>`
      },
      {
        h2: '¿Por qué algunos años tienen 53 semanas?',
        body: `<p>Un año regular tiene 52 semanas y 1 día extra. Un año bisiesto tiene 52 semanas y 2 días extra. Cuando el 1 de enero cae en <strong>jueves</strong>, el año tiene 53 semanas ISO. Los años bisiestos que comienzan en <strong>miércoles</strong> también tienen 53 semanas.</p>
<p>Años recientes con 53 semanas ISO: 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'Numeración ISO vs numeración estadounidense',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (internacional)</th><th>EE.UU. / Canadá</th></tr>
<tr><td>Primer día de la semana</td><td>Lunes</td><td>Domingo</td></tr>
<tr><td>Definición de semana 1</td><td>Contiene el 4 de enero (primer jueves)</td><td>Contiene el 1 de enero</td></tr>
<tr><td>Usado en</td><td>Europa, empresas, logística</td><td>EE.UU., Canadá, Japón</td></tr>
<tr><td>Años con 53 semanas</td><td>Años que empiezan en jue. (o mié. en bisiesto)</td><td>Años que empiezan en dom. (o sáb. en bisiesto)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '¿Qué número de semana es hoy?', a: 'Usa la calculadora de número de semana en este sitio — muestra el número de semana ISO actual actualizado en tiempo real.' },
      { q: '¿La semana 1 siempre empieza el 1 de enero?', a: 'No. La semana ISO 1 comienza el lunes de la semana que contiene el 4 de enero. El 1 de enero puede caer en la semana 52 o 53 del año anterior si es viernes, sábado o domingo.' },
      { q: '¿Cuántas semanas tiene 2025?', a: '2025 tiene 52 semanas ISO. La semana 1 de 2025 comenzó el lunes 30 de diciembre de 2024. La semana 52 termina el domingo 28 de diciembre de 2025.' },
      { q: '¿Cuántas semanas tiene 2026?', a: '2026 tiene 53 semanas ISO, porque el 1 de enero de 2026 cae en jueves. La semana 53 de 2026 comprende del 28 de diciembre al 3 de enero de 2027.' },
      { q: '¿Cuál es la diferencia entre número de semana y semana calendario?', a: '"Número de semana" y "semana calendario" (KW en alemán, CW en inglés) hacen referencia a los mismos números de semana ISO. El término "semana calendario" es común en los países de habla alemana y en contextos empresariales.' },
    ],
    pillar: { href: '/week-number/', label: 'Calculadora de número de semana' },
    related: [
      { href: '/how-many-weeks-in-a-year/', label: '¿Cuántas semanas tiene un año?' },
      { href: '/week-numbers-2025-calendar/', label: 'Calendario números de semana 2025' },
      { href: '/what-week-number-is-it/', label: '¿Qué número de semana es?' },
    ],
  },
  pt: {
    title: "Número de Semana ISO Explicado — Como Funciona a Numeração de Semanas",
    metaDesc: "O que é um número de semana ISO? Como funciona a numeração ISO 8601, como a semana 1 é definida e por que alguns anos têm 53 semanas.",
    kicker: 'GUIA NÚMERO DE SEMANA',
    h1: "Número de Semana ISO Explicado",
    intro: "Um número de semana ISO é uma forma padronizada de numerar as semanas do ano, definida pela norma internacional ISO 8601. A semana 1 é a semana que contém a primeira quinta-feira do ano — e cada semana vai de segunda a domingo.",
    sections: [
      {
        h2: "O que é um número de semana ISO?",
        body: `<p>A numeração ISO de semanas atribui um número de 1 a 52 (ou 53) a cada semana do ano. É definida pela norma <strong>ISO 8601</strong>, utilizada em empresas, logística e administrações na Europa e internacionalmente.</p>
<p>Regras principais:</p>
<ul>
<li>As semanas vão de <strong>segunda a domingo</strong></li>
<li>A semana 1 é a semana que contém a primeira quinta-feira de janeiro</li>
<li>A maioria dos anos tem 52 semanas; alguns têm 53</li>
<li>O ano-semana e o ano civil podem diferir entre 1 e 3 dias nos limites do ano</li>
</ul>`
      },
      {
        h2: "Como a semana 1 é definida?",
        body: `<p>A semana 1 é a semana que contém o <strong>4 de janeiro</strong>. Isso equivale a dizer: a semana que contém a primeira quinta-feira do ano.</p>
<p>Isso significa que o 1 de janeiro às vezes cai na semana 52 ou 53 do ano <em>anterior</em>. Por exemplo:</p>
<ul>
<li>1 de janeiro de 2016 era sexta-feira → pertencia à semana 53 de <strong>2015</strong></li>
<li>1 de janeiro de 2018 era segunda-feira → a semana 1 de <strong>2018</strong> começou nesse dia</li>
</ul>
<p>Por outro lado, os últimos dias de dezembro podem cair na semana 1 do ano <em>seguinte</em>. 31 de dezembro de 2018 era segunda-feira — estava na semana 1 de <strong>2019</strong>.</p>`
      },
      {
        h2: "Por que alguns anos têm 53 semanas?",
        body: `<p>Um ano regular tem 52 semanas e 1 dia extra. Um ano bissexto tem 52 semanas e 2 dias extras. Quando o 1 de janeiro cai numa <strong>quinta-feira</strong>, o ano tem 53 semanas ISO. Anos bissextos que começam numa <strong>quarta-feira</strong> também têm 53 semanas.</p>
<p>Anos recentes com 53 semanas ISO: 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'Numeração ISO vs numeração americana',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (internacional)</th><th>EUA / Canadá</th></tr>
<tr><td>Primeiro dia da semana</td><td>Segunda-feira</td><td>Domingo</td></tr>
<tr><td>Definição da semana 1</td><td>Contém 4 de janeiro (primeira quinta-feira)</td><td>Contém 1 de janeiro</td></tr>
<tr><td>Usado em</td><td>Europa, empresas, logística</td><td>EUA, Canadá, Japão</td></tr>
<tr><td>Anos com 53 semanas</td><td>Anos que começam na qui. (ou qua. em bissexto)</td><td>Anos que começam no dom. (ou sáb. em bissexto)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: "Que número de semana é hoje?", a: "Use a calculadora de número de semana neste site — ela mostra o número de semana ISO atual atualizado em tempo real." },
      { q: "A semana 1 começa sempre no 1 de janeiro?", a: "Não. A semana ISO 1 começa na segunda-feira da semana que contém o 4 de janeiro. O 1 de janeiro pode cair na semana 52 ou 53 do ano anterior se for sexta, sábado ou domingo." },
      { q: "Quantas semanas tem 2025?", a: "2025 tem 52 semanas ISO. A semana 1 de 2025 começou na segunda-feira, 30 de dezembro de 2024. A semana 52 termina no domingo, 28 de dezembro de 2025." },
      { q: "Quantas semanas tem 2026?", a: "2026 tem 53 semanas ISO, porque o 1 de janeiro de 2026 cai numa quinta-feira. A semana 53 de 2026 vai de 28 de dezembro a 3 de janeiro de 2027." },
      { q: "Qual é a diferença entre número de semana e semana calendário?", a: '"Número de semana" e "semana calendário" referem-se aos mesmos números de semana ISO. O termo "semana calendário" é comum em países de língua alemã e contextos empresariais.' },
    ],
    pillar: { href: '/week-number/', label: 'Calculadora de Número de Semana' },
    related: [
      { href: '/pt/quantas-semanas-tem-um-ano/', label: 'Quantas semanas tem um ano?' },
      { href: '/pt/calendario-numeros-semana-2025/', label: 'Calendário números de semana 2025' },
      { href: '/pt/qual-e-o-numero-da-semana/', label: 'Que número de semana é?' },
    ],
  },
  de: {
    title: 'ISO Kalenderwoche erklärt — Wie die Wochennummerierung funktioniert',
    metaDesc: 'Was ist eine ISO Kalenderwoche? Wie die ISO 8601 Wochennummerierung funktioniert, wie Woche 1 definiert wird und warum manche Jahre 53 Wochen haben.',
    kicker: 'LEITFADEN KALENDERWOCHE',
    h1: 'ISO Kalenderwoche erklärt',
    intro: 'Eine ISO Kalenderwoche ist eine standardisierte Methode zur Nummerierung der Wochen des Jahres, definiert durch die internationale Norm ISO 8601. Woche 1 ist die Woche, die den ersten Donnerstag des Jahres enthält — jede Woche läuft von Montag bis Sonntag.',
    sections: [
      {
        h2: 'Was ist eine ISO Kalenderwoche?',
        body: `<p>Die ISO-Wochennummerierung weist jeder Woche des Jahres eine Nummer von 1 bis 52 (oder 53) zu. Sie ist durch die Norm <strong>ISO 8601</strong> definiert und wird in Unternehmen, Logistik und Behörden in Europa und weltweit verwendet.</p>
<p>Wichtige Regeln:</p>
<ul>
<li>Wochen laufen von <strong>Montag bis Sonntag</strong></li>
<li>Woche 1 ist die Woche, die den ersten Donnerstag im Januar enthält</li>
<li>Die meisten Jahre haben 52 Wochen; manche haben 53</li>
<li>Das Wochenjahr und das Kalenderjahr können an Jahresgrenzen um 1–3 Tage abweichen</li>
</ul>`
      },
      {
        h2: 'Wie wird Woche 1 definiert?',
        body: `<p>Woche 1 ist die Woche, die den <strong>4. Januar</strong> enthält. Das entspricht der Aussage: die Woche mit dem ersten Donnerstag des Jahres.</p>
<p>Das bedeutet, der 1. Januar liegt manchmal in Woche 52 oder 53 des <em>Vorjahres</em>. Zum Beispiel:</p>
<ul>
<li>1. Januar 2016 war ein Freitag → gehörte zu Woche 53 von <strong>2015</strong></li>
<li>1. Januar 2018 war ein Montag → Woche 1 von <strong>2018</strong> begann an diesem Tag</li>
</ul>
<p>Umgekehrt können späte Dezembertage in Woche 1 des <em>nächsten</em> Jahres fallen. Der 31. Dezember 2018 war ein Montag — er lag in Woche 1 von <strong>2019</strong>.</p>`
      },
      {
        h2: 'Warum haben manche Jahre 53 Wochen?',
        body: `<p>Ein normales Jahr hat 52 Wochen und 1 Extratag. Ein Schaltjahr hat 52 Wochen und 2 Extratage. Wenn der 1. Januar auf einen <strong>Donnerstag</strong> fällt, hat das Jahr 53 ISO-Wochen. Schaltjahre, die an einem <strong>Mittwoch</strong> beginnen, erhalten ebenfalls 53 Wochen.</p>
<p>Aktuelle Jahre mit 53 ISO-Wochen: 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'ISO-Wochennummerierung vs. US-Wochennummerierung',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (international)</th><th>USA / Kanada</th></tr>
<tr><td>Erster Wochentag</td><td>Montag</td><td>Sonntag</td></tr>
<tr><td>Definition Woche 1</td><td>Enthält den 4. Januar (erster Donnerstag)</td><td>Enthält den 1. Januar</td></tr>
<tr><td>Verwendet in</td><td>Europa, Unternehmen, Logistik</td><td>USA, Kanada, Japan</td></tr>
<tr><td>Jahre mit 53 Wochen</td><td>Jahre, die mit Do. beginnen (oder Mi. im Schaltjahr)</td><td>Jahre, die mit So. beginnen (oder Sa. im Schaltjahr)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Welche Kalenderwoche haben wir heute?', a: 'Nutzen Sie den Kalenderwochen-Rechner auf dieser Website — er zeigt die aktuelle ISO-Kalenderwoche in Echtzeit an.' },
      { q: 'Beginnt Woche 1 immer am 1. Januar?', a: 'Nein. ISO-Woche 1 beginnt am Montag der Woche, die den 4. Januar enthält. Der 1. Januar kann in Woche 52 oder 53 des Vorjahres fallen, wenn er auf einen Freitag, Samstag oder Sonntag fällt.' },
      { q: 'Wie viele Wochen hat 2025?', a: '2025 hat 52 ISO-Wochen. Woche 1 von 2025 begann am Montag, 30. Dezember 2024. Woche 52 endet am Sonntag, 28. Dezember 2025.' },
      { q: 'Wie viele Wochen hat 2026?', a: '2026 hat 53 ISO-Wochen, weil der 1. Januar 2026 auf einen Donnerstag fällt. Woche 53 von 2026 umfasst den 28. Dezember bis 3. Januar 2027.' },
      { q: 'Was ist der Unterschied zwischen Wochennummer und Kalenderwoche?', a: '"Wochennummer" und "Kalenderwoche" (KW) bezeichnen beide ISO-Wochennummern — sie sind dasselbe. Der Begriff "Kalenderwoche" ist in deutschsprachigen Ländern und im Geschäftsumfeld üblich.' },
    ],
    pillar: { href: '/week-number/', label: 'Kalenderwochen-Rechner' },
    related: [
      { href: '/de/wie-viele-wochen-hat-ein-jahr/', label: 'Wie viele Wochen hat ein Jahr?' },
      { href: '/de/kalenderwochen-2025/', label: 'Kalenderwochen 2025' },
      { href: '/de/welche-kalenderwoche-ist-heute/', label: 'Welche Kalenderwoche ist heute?' },
    ],
  },
  it: {
    title: 'Numero Settimana ISO Spiegato — Come Funziona la Numerazione delle Settimane',
    metaDesc: "Cos'è un numero di settimana ISO? Come funziona la numerazione ISO 8601, come si definisce la settimana 1 e perché alcuni anni hanno 53 settimane.",
    kicker: 'GUIDA NUMERO SETTIMANA',
    h1: 'Numero Settimana ISO Spiegato',
    intro: "Un numero di settimana ISO è un modo standardizzato di numerare le settimane dell'anno, definito dalla norma internazionale ISO 8601. La settimana 1 è la settimana che contiene il primo giovedì dell'anno — e ogni settimana va da lunedì a domenica.",
    sections: [
      {
        h2: "Cos'è un numero di settimana ISO?",
        body: `<p>La numerazione ISO delle settimane assegna un numero da 1 a 52 (o 53) a ogni settimana dell'anno. È definita dalla norma <strong>ISO 8601</strong>, usata in aziende, logistica e pubblica amministrazione in Europa e a livello internazionale.</p>
<p>Regole principali:</p>
<ul>
<li>Le settimane vanno da <strong>lunedì a domenica</strong></li>
<li>La settimana 1 è la settimana che contiene il primo giovedì di gennaio</li>
<li>La maggior parte degli anni ha 52 settimane; alcuni ne hanno 53</li>
<li>L'anno-settimana e l'anno civile possono differire di 1–3 giorni ai confini dell'anno</li>
</ul>`
      },
      {
        h2: 'Come si definisce la settimana 1?',
        body: `<p>La settimana 1 è la settimana che contiene il <strong>4 gennaio</strong>. Equivale a dire: la settimana che contiene il primo giovedì dell'anno.</p>
<p>Ciò significa che il 1° gennaio a volte cade nella settimana 52 o 53 dell'anno <em>precedente</em>. Ad esempio:</p>
<ul>
<li>Il 1° gennaio 2016 era venerdì → apparteneva alla settimana 53 del <strong>2015</strong></li>
<li>Il 1° gennaio 2018 era lunedì → la settimana 1 del <strong>2018</strong> è iniziata quel giorno</li>
</ul>
<p>Al contrario, gli ultimi giorni di dicembre possono cadere nella settimana 1 dell'anno <em>successivo</em>. Il 31 dicembre 2018 era lunedì — era nella settimana 1 del <strong>2019</strong>.</p>`
      },
      {
        h2: 'Perché alcuni anni hanno 53 settimane?',
        body: `<p>Un anno regolare ha 52 settimane e 1 giorno extra. Un anno bisestile ha 52 settimane e 2 giorni extra. Quando il 1° gennaio cade di <strong>giovedì</strong>, l'anno ha 53 settimane ISO. Anche gli anni bisestili che iniziano di <strong>mercoledì</strong> hanno 53 settimane.</p>
<p>Anni recenti con 53 settimane ISO: 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'Numerazione ISO vs numerazione americana',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (internazionale)</th><th>USA / Canada</th></tr>
<tr><td>Primo giorno della settimana</td><td>Lunedì</td><td>Domenica</td></tr>
<tr><td>Definizione settimana 1</td><td>Contiene il 4 gennaio (primo giovedì)</td><td>Contiene il 1° gennaio</td></tr>
<tr><td>Usato in</td><td>Europa, aziende, logistica</td><td>USA, Canada, Giappone</td></tr>
<tr><td>Anni con 53 settimane</td><td>Anni che iniziano di gio. (o mer. negli anni bisestili)</td><td>Anni che iniziano di dom. (o sab. negli anni bisestili)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: "Che numero di settimana è oggi?", a: "Usa il calcolatore di numero di settimana su questo sito — mostra il numero di settimana ISO aggiornato in tempo reale." },
      { q: "La settimana 1 inizia sempre il 1° gennaio?", a: "No. La settimana ISO 1 inizia il lunedì della settimana che contiene il 4 gennaio. Il 1° gennaio può cadere nella settimana 52 o 53 dell'anno precedente se è venerdì, sabato o domenica." },
      { q: "Quante settimane ha il 2025?", a: "Il 2025 ha 52 settimane ISO. La settimana 1 del 2025 è iniziata lunedì 30 dicembre 2024. La settimana 52 termina domenica 28 dicembre 2025." },
      { q: "Quante settimane ha il 2026?", a: "Il 2026 ha 53 settimane ISO, perché il 1° gennaio 2026 cade di giovedì. La settimana 53 del 2026 va dal 28 dicembre al 3 gennaio 2027." },
      { q: "Qual è la differenza tra numero di settimana e settimana di calendario?", a: '"Numero di settimana" e "settimana di calendario" si riferiscono agli stessi numeri di settimana ISO. Il termine "settimana di calendario" è comune nei paesi di lingua tedesca e in ambito aziendale.' },
    ],
    pillar: { href: '/week-number/', label: 'Calcolatore Numero Settimana' },
    related: [
      { href: '/it/quante-settimane-ha-un-anno/', label: 'Quante settimane ha un anno?' },
      { href: '/it/calendario-numeri-settimana-2025/', label: 'Calendario numeri settimana 2025' },
      { href: '/it/che-numero-di-settimana-e/', label: 'Che numero di settimana è?' },
    ],
  },
  pl: {
    title: 'Numer Tygodnia ISO Wyjaśniony — Jak Działa Numeracja Tygodni',
    metaDesc: 'Co to jest numer tygodnia ISO? Jak działa numeracja ISO 8601, jak definiowany jest tydzień 1 i dlaczego niektóre lata mają 53 tygodnie.',
    kicker: 'PRZEWODNIK NUMER TYGODNIA',
    h1: 'Numer Tygodnia ISO Wyjaśniony',
    intro: 'Numer tygodnia ISO to ustandaryzowany sposób numerowania tygodni roku, zdefiniowany przez międzynarodową normę ISO 8601. Tydzień 1 to tydzień zawierający pierwszy czwartek roku — każdy tydzień biegnie od poniedziałku do niedzieli.',
    sections: [
      {
        h2: 'Co to jest numer tygodnia ISO?',
        body: `<p>Numeracja ISO tygodni przypisuje każdemu tygodniowi roku numer od 1 do 52 (lub 53). Jest zdefiniowana przez normę <strong>ISO 8601</strong> i stosowana w firmach, logistyce i administracji w Europie i na całym świecie.</p>
<p>Główne zasady:</p>
<ul>
<li>Tygodnie biegną od <strong>poniedziałku do niedzieli</strong></li>
<li>Tydzień 1 to tydzień zawierający pierwszy czwartek stycznia</li>
<li>Większość lat ma 52 tygodnie; niektóre mają 53</li>
<li>Rok tygodniowy i rok kalendarzowy mogą się różnić o 1–3 dni na granicach roku</li>
</ul>`
      },
      {
        h2: 'Jak definiowany jest tydzień 1?',
        body: `<p>Tydzień 1 to tydzień zawierający <strong>4 stycznia</strong>. Jest to równoznaczne ze stwierdzeniem: tydzień zawierający pierwszy czwartek roku.</p>
<p>Oznacza to, że 1 stycznia czasami przypada w tygodniu 52 lub 53 <em>poprzedniego</em> roku. Na przykład:</p>
<ul>
<li>1 stycznia 2016 był piątek → należał do tygodnia 53 roku <strong>2015</strong></li>
<li>1 stycznia 2018 był poniedziałek → tydzień 1 roku <strong>2018</strong> zaczął się tego dnia</li>
</ul>
<p>Odwrotnie, ostatnie dni grudnia mogą przypadać w tygodniu 1 <em>następnego</em> roku. 31 grudnia 2018 był poniedziałek — był w tygodniu 1 roku <strong>2019</strong>.</p>`
      },
      {
        h2: 'Dlaczego niektóre lata mają 53 tygodnie?',
        body: `<p>Zwykły rok ma 52 tygodnie i 1 dodatkowy dzień. Rok przestępny ma 52 tygodnie i 2 dodatkowe dni. Gdy 1 stycznia przypada w <strong>czwartek</strong>, rok ma 53 tygodnie ISO. Lata przestępne zaczynające się w <strong>środę</strong> również mają 53 tygodnie.</p>
<p>Ostatnie lata z 53 tygodniami ISO: 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'Numeracja ISO vs numeracja amerykańska',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (międzynarodowy)</th><th>USA / Kanada</th></tr>
<tr><td>Pierwszy dzień tygodnia</td><td>Poniedziałek</td><td>Niedziela</td></tr>
<tr><td>Definicja tygodnia 1</td><td>Zawiera 4 stycznia (pierwszy czwartek)</td><td>Zawiera 1 stycznia</td></tr>
<tr><td>Stosowany w</td><td>Europa, firmy, logistyka</td><td>USA, Kanada, Japonia</td></tr>
<tr><td>Lata z 53 tygodniami</td><td>Lata zaczynające się w czw. (lub śr. w przestępnym)</td><td>Lata zaczynające się w niedz. (lub sob. w przestępnym)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Który numer tygodnia jest teraz?', a: 'Skorzystaj z kalkulatora numeru tygodnia na tej stronie — pokazuje aktualny numer tygodnia ISO aktualizowany w czasie rzeczywistym.' },
      { q: 'Czy tydzień 1 zawsze zaczyna się 1 stycznia?', a: 'Nie. Tydzień ISO 1 zaczyna się w poniedziałek tygodnia zawierającego 4 stycznia. 1 stycznia może przypadać w tygodniu 52 lub 53 poprzedniego roku, jeśli przypada w piątek, sobotę lub niedzielę.' },
      { q: 'Ile tygodni ma 2025?', a: '2025 ma 52 tygodnie ISO. Tydzień 1 roku 2025 zaczął się w poniedziałek, 30 grudnia 2024. Tydzień 52 kończy się w niedzielę, 28 grudnia 2025.' },
      { q: 'Ile tygodni ma 2026?', a: '2026 ma 53 tygodnie ISO, ponieważ 1 stycznia 2026 przypada w czwartek. Tydzień 53 roku 2026 obejmuje 28 grudnia – 3 stycznia 2027.' },
      { q: 'Jaka jest różnica między numerem tygodnia a tygodniem kalendarzowym?', a: '"Numer tygodnia" i "tydzień kalendarzowy" (KW po niemiecku) oznaczają to samo — numery tygodni ISO. Termin "tydzień kalendarzowy" jest powszechny w krajach niemieckojęzycznych i w kontekstach biznesowych.' },
    ],
    pillar: { href: '/week-number/', label: 'Kalkulator Numeru Tygodnia' },
    related: [
      { href: '/pl/ile-tygodni-ma-rok/', label: 'Ile tygodni ma rok?' },
      { href: '/pl/kalendarz-numerow-tygodni-2025/', label: 'Kalendarz numerów tygodni 2025' },
      { href: '/pl/ktory-tydzien-roku-jest-teraz/', label: 'Który numer tygodnia jest teraz?' },
    ],
  },
  ja: {
    title: 'ISO週番号の解説 — 週番号の仕組み',
    metaDesc: 'ISO週番号とは何か？ISO 8601の週番号の仕組み、第1週の定義、そして一部の年に第53週がある理由を解説します。',
    kicker: '週番号ガイド',
    h1: 'ISO週番号の解説',
    intro: 'ISO週番号とは、国際規格ISO 8601で定められた、年の週を番号付けする標準化された方法です。第1週はその年の最初の木曜日を含む週で、各週は月曜日から日曜日までです。',
    sections: [
      {
        h2: 'ISO週番号とは？',
        body: `<p>ISOの週番号は、年の各週に1から52（または53）の番号を割り当てます。<strong>ISO 8601</strong>規格で定義され、ヨーロッパおよび国際的にビジネス、物流、行政で使用されています。</p>
<p>主なルール：</p>
<ul>
<li>週は<strong>月曜日から日曜日</strong>まで</li>
<li>第1週は1月の最初の木曜日を含む週</li>
<li>ほとんどの年は52週だが、一部の年は53週ある</li>
<li>週年と暦年は年の境界で1〜3日ずれることがある</li>
</ul>`
      },
      {
        h2: '第1週はどのように定義されるか？',
        body: `<p>第1週は<strong>1月4日</strong>を含む週です。これは「その年の最初の木曜日を含む週」と同等の意味です。</p>
<p>つまり、1月1日が<em>前年</em>の第52週または第53週に含まれることがあります。例えば：</p>
<ul>
<li>2016年1月1日は金曜日 → <strong>2015年</strong>の第53週に属した</li>
<li>2018年1月1日は月曜日 → <strong>2018年</strong>の第1週がその日から始まった</li>
</ul>
<p>逆に、12月末の日が<em>翌年</em>の第1週に入ることもあります。2018年12月31日は月曜日 — <strong>2019年</strong>の第1週に属しました。</p>`
      },
      {
        h2: 'なぜ一部の年は53週あるのか？',
        body: `<p>通常の年は52週と1日余ります。閏年は52週と2日余ります。1月1日が<strong>木曜日</strong>に当たる年は53週のISOが存在します。<strong>水曜日</strong>始まりの閏年も53週になります。</p>
<p>最近の53週ある年：2015年、2020年、2026年、2032年。</p>`
      },
      {
        h2: 'ISO週番号対米国週番号',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601（国際）</th><th>米国・カナダ</th></tr>
<tr><td>週の開始曜日</td><td>月曜日</td><td>日曜日</td></tr>
<tr><td>第1週の定義</td><td>1月4日を含む（最初の木曜日）</td><td>1月1日を含む</td></tr>
<tr><td>使用地域</td><td>ヨーロッパ、ビジネス、物流</td><td>米国、カナダ、日本</td></tr>
<tr><td>53週ある年</td><td>木曜始まり（閏年は水曜始まり）</td><td>日曜始まり（閏年は土曜始まり）</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '今日は何週目ですか？', a: 'このサイトの週番号計算ツールをご利用ください — リアルタイムで更新された現在のISO週番号を表示します。' },
      { q: '第1週は常に1月1日から始まりますか？', a: 'いいえ。ISO第1週は1月4日を含む週の月曜日から始まります。1月1日が金曜日、土曜日、または日曜日の場合、前年の第52週または第53週に含まれることがあります。' },
      { q: '2025年は何週ありますか？', a: '2025年は52週のISOです。2025年の第1週は2024年12月30日（月曜日）に始まりました。第52週は2025年12月28日（日曜日）に終わります。' },
      { q: '2026年は何週ありますか？', a: '2026年1月1日が木曜日のため、2026年は53週のISOとなります。2026年の第53週は12月28日から2027年1月3日です。' },
      { q: '週番号とカレンダー週の違いは何ですか？', a: '「週番号」と「カレンダー週（KW）」はどちらもISO週番号を指します。「カレンダー週」という用語はドイツ語圏やビジネスの文脈でよく使われます。' },
    ],
    pillar: { href: '/week-number/', label: '週番号計算ツール' },
    related: [
      { href: '/ja/ichi-nen-no-shu-su/', label: '1年は何週ですか？' },
      { href: '/ja/2025-nen-shu-bango/', label: '2025年週番号カレンダー' },
      { href: '/ja/ima-nan-shu-bango/', label: '今何週目ですか？' },
    ],
  },
  ko: {
    title: 'ISO 주 번호 설명 — 주 번호 체계 작동 방식',
    metaDesc: 'ISO 주 번호란 무엇인가요? ISO 8601 주 번호 체계 작동 방식, 1주차 정의 방법, 일부 연도에 53주가 있는 이유를 알아보세요.',
    kicker: '주 번호 가이드',
    h1: 'ISO 주 번호 설명',
    intro: 'ISO 주 번호는 국제 표준 ISO 8601에 따라 정의된 연간 주를 번호로 매기는 표준화된 방법입니다. 1주차는 해당 연도의 첫 번째 목요일이 포함된 주이며, 각 주는 월요일부터 일요일까지 이어집니다.',
    sections: [
      {
        h2: 'ISO 주 번호란 무엇인가요?',
        body: `<p>ISO 주 번호는 연간 각 주에 1에서 52(또는 53)까지의 번호를 부여합니다. <strong>ISO 8601</strong> 표준에 의해 정의되며 유럽 및 국제적으로 비즈니스, 물류, 정부 기관에서 사용됩니다.</p>
<p>주요 규칙:</p>
<ul>
<li>주는 <strong>월요일부터 일요일</strong>까지</li>
<li>1주차는 1월의 첫 번째 목요일이 포함된 주</li>
<li>대부분의 연도는 52주이며 일부는 53주</li>
<li>주 연도와 달력 연도는 연도 경계에서 1~3일 차이날 수 있음</li>
</ul>`
      },
      {
        h2: '1주차는 어떻게 정의되나요?',
        body: `<p>1주차는 <strong>1월 4일</strong>이 포함된 주입니다. 이는 "해당 연도의 첫 번째 목요일이 포함된 주"와 동일한 의미입니다.</p>
<p>즉, 1월 1일이 <em>전년도</em>의 52주차 또는 53주차에 속할 수 있습니다. 예를 들어:</p>
<ul>
<li>2016년 1월 1일은 금요일 → <strong>2015년</strong> 53주차에 속함</li>
<li>2018년 1월 1일은 월요일 → <strong>2018년</strong> 1주차가 그날 시작됨</li>
</ul>
<p>반대로, 12월 말일이 <em>다음 해</em>의 1주차에 속할 수 있습니다. 2018년 12월 31일은 월요일이었고 — <strong>2019년</strong> 1주차에 속했습니다.</p>`
      },
      {
        h2: '일부 연도에는 왜 53주가 있나요?',
        body: `<p>일반적인 해는 52주와 하루가 남습니다. 윤년은 52주와 이틀이 남습니다. 1월 1일이 <strong>목요일</strong>인 해는 ISO 53주차가 생깁니다. <strong>수요일</strong>로 시작하는 윤년도 53주가 됩니다.</p>
<p>53주가 있는 최근 연도: 2015년, 2020년, 2026년, 2032년.</p>`
      },
      {
        h2: 'ISO 주 번호 vs 미국 주 번호',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (국제)</th><th>미국 / 캐나다</th></tr>
<tr><td>주 시작 요일</td><td>월요일</td><td>일요일</td></tr>
<tr><td>1주차 정의</td><td>1월 4일 포함 (첫 번째 목요일)</td><td>1월 1일 포함</td></tr>
<tr><td>사용 지역</td><td>유럽, 비즈니스, 물류</td><td>미국, 캐나다, 일본</td></tr>
<tr><td>53주인 연도</td><td>목요일로 시작하는 해 (윤년은 수요일)</td><td>일요일로 시작하는 해 (윤년은 토요일)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '오늘은 몇 주차인가요?', a: '이 사이트의 주 번호 계산기를 사용하세요 — 실시간으로 업데이트된 현재 ISO 주 번호를 보여줍니다.' },
      { q: '1주차는 항상 1월 1일에 시작하나요?', a: '아니요. ISO 1주차는 1월 4일이 포함된 주의 월요일에 시작합니다. 1월 1일이 금요일, 토요일 또는 일요일이면 전년도 52주차 또는 53주차에 속할 수 있습니다.' },
      { q: '2025년은 몇 주인가요?', a: '2025년은 ISO 52주입니다. 2025년 1주차는 2024년 12월 30일 월요일에 시작되었습니다. 52주차는 2025년 12월 28일 일요일에 끝납니다.' },
      { q: '2026년은 몇 주인가요?', a: '2026년 1월 1일이 목요일이기 때문에 2026년은 ISO 53주입니다. 2026년 53주차는 12월 28일부터 2027년 1월 3일까지입니다.' },
      { q: '주 번호와 달력 주의 차이점은 무엇인가요?', a: '"주 번호"와 "달력 주(KW)"는 모두 ISO 주 번호를 가리킵니다. "달력 주"라는 용어는 독일어권 국가와 비즈니스 맥락에서 자주 사용됩니다.' },
    ],
    pillar: { href: '/week-number/', label: '주 번호 계산기' },
    related: [
      { href: '/ko/il-nyeon-ui-ju-su/', label: '1년은 몇 주인가요?' },
      { href: '/ko/2025-nyeon-ju-beon-ho/', label: '2025년 주 번호 캘린더' },
      { href: '/ko/hyeon-jae-myeot-jju-il-kka/', label: '지금은 몇 주차인가요?' },
    ],
  },
  nl: {
    title: 'ISO Weeknummer Uitgelegd — Hoe de Weeknummering Werkt',
    metaDesc: 'Wat is een ISO weeknummer? Hoe de ISO 8601 weeknummering werkt, hoe week 1 wordt gedefinieerd en waarom sommige jaren 53 weken hebben.',
    kicker: 'WEEKNUMMER GIDS',
    h1: 'ISO Weeknummer Uitgelegd',
    intro: 'Een ISO weeknummer is een gestandaardiseerde manier om de weken van het jaar te nummeren, gedefinieerd door de internationale norm ISO 8601. Week 1 is de week die de eerste donderdag van het jaar bevat — elke week loopt van maandag tot zondag.',
    sections: [
      {
        h2: 'Wat is een ISO weeknummer?',
        body: `<p>ISO weeknummering kent elk week van het jaar een nummer toe van 1 tot 52 (of 53). Het is gedefinieerd door de norm <strong>ISO 8601</strong> en wordt gebruikt in het bedrijfsleven, de logistiek en overheid in Europa en internationaal.</p>
<p>Belangrijkste regels:</p>
<ul>
<li>Weken lopen van <strong>maandag tot zondag</strong></li>
<li>Week 1 is de week die de eerste donderdag van januari bevat</li>
<li>De meeste jaren hebben 52 weken; sommige hebben er 53</li>
<li>Het weekjaar en het kalenderjaar kunnen aan de jaargrenzen 1–3 dagen van elkaar afwijken</li>
</ul>`
      },
      {
        h2: 'Hoe wordt week 1 gedefinieerd?',
        body: `<p>Week 1 is de week die <strong>4 januari</strong> bevat. Dit is gelijk aan: de week die de eerste donderdag van het jaar bevat.</p>
<p>Dit betekent dat 1 januari soms in week 52 of 53 van het <em>vorige</em> jaar valt. Bijvoorbeeld:</p>
<ul>
<li>1 januari 2016 was een vrijdag → het viel in week 53 van <strong>2015</strong></li>
<li>1 januari 2018 was een maandag → week 1 van <strong>2018</strong> begon die dag</li>
</ul>
<p>Omgekeerd kunnen late decemberdagen in week 1 van het <em>volgende</em> jaar vallen. 31 december 2018 was een maandag — het viel in week 1 van <strong>2019</strong>.</p>`
      },
      {
        h2: 'Waarom hebben sommige jaren 53 weken?',
        body: `<p>Een gewoon jaar heeft 52 weken en 1 extra dag. Een schrikkeljaar heeft 52 weken en 2 extra dagen. Als 1 januari op een <strong>donderdag</strong> valt, heeft het jaar 53 ISO-weken. Schrikkeljaren die op een <strong>woensdag</strong> beginnen, krijgen ook 53 weken.</p>
<p>Recente jaren met 53 ISO-weken: 2015, 2020, 2026, 2032.</p>`
      },
      {
        h2: 'ISO weeknummering vs Amerikaanse weeknummering',
        body: '',
        table: `<table>
<tr><th></th><th>ISO 8601 (internationaal)</th><th>VS / Canada</th></tr>
<tr><td>Eerste dag van de week</td><td>Maandag</td><td>Zondag</td></tr>
<tr><td>Definitie week 1</td><td>Bevat 4 januari (eerste donderdag)</td><td>Bevat 1 januari</td></tr>
<tr><td>Gebruikt in</td><td>Europa, bedrijven, logistiek</td><td>VS, Canada, Japan</td></tr>
<tr><td>Jaren met 53 weken</td><td>Jaren die beginnen op do. (of wo. in schrikkeljaar)</td><td>Jaren die beginnen op zo. (of za. in schrikkeljaar)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Wat is het huidige weeknummer?', a: 'Gebruik de weeknummerberekening op deze site — het toont het huidige ISO weeknummer live bijgewerkt.' },
      { q: 'Begint week 1 altijd op 1 januari?', a: 'Nee. ISO week 1 begint op de maandag van de week die 4 januari bevat. 1 januari kan in week 52 of 53 van het vorige jaar vallen als het een vrijdag, zaterdag of zondag is.' },
      { q: 'Hoeveel weken heeft 2025?', a: '2025 heeft 52 ISO-weken. Week 1 van 2025 begon op maandag 30 december 2024. Week 52 eindigt op zondag 28 december 2025.' },
      { q: 'Hoeveel weken heeft 2026?', a: '2026 heeft 53 ISO-weken, omdat 1 januari 2026 op een donderdag valt. Week 53 van 2026 omvat 28 december tot 3 januari 2027.' },
      { q: 'Wat is het verschil tussen weeknummer en kalenderweek?', a: '"Weeknummer" en "kalenderweek" (KW in het Duits) verwijzen beide naar ISO weeknummers — ze zijn hetzelfde. De term "kalenderweek" is gebruikelijk in Duitstalige landen en in zakelijke contexten.' },
    ],
    pillar: { href: '/week-number/', label: 'Weeknummer Berekenen' },
    related: [
      { href: '/nl/hoeveel-weken-heeft-een-jaar/', label: 'Hoeveel weken heeft een jaar?' },
      { href: '/nl/weeknummers-2025-kalender/', label: 'Weeknummers 2025 kalender' },
      { href: '/nl/welk-weeknummer-is-het/', label: 'Welk weeknummer is het?' },
    ],
  },
};

// ── Article 2: week-numbers-2025-calendar ─────────────────────
T['week-numbers-2025-calendar'] = {
  en: {
    title: 'Week Numbers 2025 — Complete Calendar with Start and End Dates',
    metaDesc: 'Full week number calendar for 2025. All 52 ISO weeks with start (Monday) and end (Sunday) dates. Easy reference for planning and scheduling.',
    kicker: 'WEEK NUMBER REFERENCE',
    h1: 'Week Numbers 2025 — Full Calendar',
    intro: 'Here is the complete ISO week number calendar for 2025. All 52 weeks are listed with their start date (Monday) and end date (Sunday). Week 1 of 2025 started on Monday, December 30, 2024.',
    sections: [
      {
        h2: 'Week numbers 2025 — all 52 weeks',
        body: '<p>Each row shows the ISO week number, the Monday it starts on, and the Sunday it ends on.</p>',
        table: `<table>
<tr><th>Week</th><th>Start (Monday)</th><th>End (Sunday)</th></tr>
<tr><td>W01</td><td>30 Dec 2024</td><td>5 Jan 2025</td></tr>
<tr><td>W02</td><td>6 Jan</td><td>12 Jan</td></tr>
<tr><td>W03</td><td>13 Jan</td><td>19 Jan</td></tr>
<tr><td>W04</td><td>20 Jan</td><td>26 Jan</td></tr>
<tr><td>W05</td><td>27 Jan</td><td>2 Feb</td></tr>
<tr><td>W06</td><td>3 Feb</td><td>9 Feb</td></tr>
<tr><td>W07</td><td>10 Feb</td><td>16 Feb</td></tr>
<tr><td>W08</td><td>17 Feb</td><td>23 Feb</td></tr>
<tr><td>W09</td><td>24 Feb</td><td>2 Mar</td></tr>
<tr><td>W10</td><td>3 Mar</td><td>9 Mar</td></tr>
<tr><td>W11</td><td>10 Mar</td><td>16 Mar</td></tr>
<tr><td>W12</td><td>17 Mar</td><td>23 Mar</td></tr>
<tr><td>W13</td><td>24 Mar</td><td>30 Mar</td></tr>
<tr><td>W14</td><td>31 Mar</td><td>6 Apr</td></tr>
<tr><td>W15</td><td>7 Apr</td><td>13 Apr</td></tr>
<tr><td>W16</td><td>14 Apr</td><td>20 Apr</td></tr>
<tr><td>W17</td><td>21 Apr</td><td>27 Apr</td></tr>
<tr><td>W18</td><td>28 Apr</td><td>4 May</td></tr>
<tr><td>W19</td><td>5 May</td><td>11 May</td></tr>
<tr><td>W20</td><td>12 May</td><td>18 May</td></tr>
<tr><td>W21</td><td>19 May</td><td>25 May</td></tr>
<tr><td>W22</td><td>26 May</td><td>1 Jun</td></tr>
<tr><td>W23</td><td>2 Jun</td><td>8 Jun</td></tr>
<tr><td>W24</td><td>9 Jun</td><td>15 Jun</td></tr>
<tr><td>W25</td><td>16 Jun</td><td>22 Jun</td></tr>
<tr><td>W26</td><td>23 Jun</td><td>29 Jun</td></tr>
<tr><td>W27</td><td>30 Jun</td><td>6 Jul</td></tr>
<tr><td>W28</td><td>7 Jul</td><td>13 Jul</td></tr>
<tr><td>W29</td><td>14 Jul</td><td>20 Jul</td></tr>
<tr><td>W30</td><td>21 Jul</td><td>27 Jul</td></tr>
<tr><td>W31</td><td>28 Jul</td><td>3 Aug</td></tr>
<tr><td>W32</td><td>4 Aug</td><td>10 Aug</td></tr>
<tr><td>W33</td><td>11 Aug</td><td>17 Aug</td></tr>
<tr><td>W34</td><td>18 Aug</td><td>24 Aug</td></tr>
<tr><td>W35</td><td>25 Aug</td><td>31 Aug</td></tr>
<tr><td>W36</td><td>1 Sep</td><td>7 Sep</td></tr>
<tr><td>W37</td><td>8 Sep</td><td>14 Sep</td></tr>
<tr><td>W38</td><td>15 Sep</td><td>21 Sep</td></tr>
<tr><td>W39</td><td>22 Sep</td><td>28 Sep</td></tr>
<tr><td>W40</td><td>29 Sep</td><td>5 Oct</td></tr>
<tr><td>W41</td><td>6 Oct</td><td>12 Oct</td></tr>
<tr><td>W42</td><td>13 Oct</td><td>19 Oct</td></tr>
<tr><td>W43</td><td>20 Oct</td><td>26 Oct</td></tr>
<tr><td>W44</td><td>27 Oct</td><td>2 Nov</td></tr>
<tr><td>W45</td><td>3 Nov</td><td>9 Nov</td></tr>
<tr><td>W46</td><td>10 Nov</td><td>16 Nov</td></tr>
<tr><td>W47</td><td>17 Nov</td><td>23 Nov</td></tr>
<tr><td>W48</td><td>24 Nov</td><td>30 Nov</td></tr>
<tr><td>W49</td><td>1 Dec</td><td>7 Dec</td></tr>
<tr><td>W50</td><td>8 Dec</td><td>14 Dec</td></tr>
<tr><td>W51</td><td>15 Dec</td><td>21 Dec</td></tr>
<tr><td>W52</td><td>22 Dec</td><td>28 Dec</td></tr>
</table>`
      },
      {
        h2: 'Key dates in 2025 by week number',
        body: '<p>Useful reference for planning: which ISO week do major fixed dates fall in?</p>',
        table: `<table>
<tr><th>Date</th><th>Day</th><th>ISO Week</th></tr>
<tr><td>January 1, 2025</td><td>Wednesday</td><td>W01</td></tr>
<tr><td>February 14, 2025</td><td>Friday</td><td>W07</td></tr>
<tr><td>March 20, 2025 (spring equinox)</td><td>Thursday</td><td>W12</td></tr>
<tr><td>June 21, 2025 (summer solstice)</td><td>Saturday</td><td>W25</td></tr>
<tr><td>September 22, 2025 (autumn equinox)</td><td>Monday</td><td>W39</td></tr>
<tr><td>October 31, 2025</td><td>Friday</td><td>W44</td></tr>
<tr><td>December 21, 2025 (winter solstice)</td><td>Sunday</td><td>W51</td></tr>
<tr><td>December 25, 2025</td><td>Thursday</td><td>W52</td></tr>
<tr><td>December 31, 2025</td><td>Wednesday</td><td>W01 of 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'What week number is January 1, 2025?', a: 'January 1, 2025 falls in ISO week 1 of 2025. Week 1 started on Monday, December 30, 2024.' },
      { q: 'What week number is Christmas 2025?', a: 'December 25, 2025 (Thursday) is in ISO week 52 of 2025.' },
      { q: 'What week number is December 31, 2025?', a: 'December 31, 2025 (Wednesday) is in ISO week 1 of 2026 — the last days of December 2025 belong to the first week of 2026.' },
      { q: 'How many weeks does 2025 have?', a: '2025 has 52 ISO weeks. The last week of 2025 (W52) ends on Sunday, December 28, 2025.' },
    ],
    pillar: { href: '/week-number/', label: 'What week number is it today?' },
    related: [
      { href: '/iso-week-number-explained/', label: 'ISO week number explained' },
      { href: '/how-many-weeks-in-a-year/', label: 'How many weeks in a year?' },
      { href: '/how-many-days-in-each-month/', label: 'Days in each month' },
    ],
  },
  fr: {
    title: 'Numéros de semaine 2025 — Calendrier complet avec dates de début et de fin',
    metaDesc: 'Calendrier complet des numéros de semaine pour 2025. Les 52 semaines ISO avec leurs dates de début (lundi) et de fin (dimanche). Référence pratique pour la planification.',
    kicker: 'RÉFÉRENCE NUMÉROS DE SEMAINE',
    h1: 'Numéros de semaine 2025 — Calendrier complet',
    intro: "Voici le calendrier complet des numéros de semaine ISO pour 2025. Les 52 semaines sont listées avec leur date de début (lundi) et de fin (dimanche). La semaine 1 de 2025 a commencé le lundi 30 décembre 2024.",
    sections: [
      {
        h2: 'Numéros de semaine 2025 — les 52 semaines',
        body: '<p>Chaque ligne indique le numéro de semaine ISO, le lundi de début et le dimanche de fin.</p>',
        table: `<table>
<tr><th>Semaine</th><th>Début (lundi)</th><th>Fin (dimanche)</th></tr>
<tr><td>S01</td><td>30 déc. 2024</td><td>5 jan. 2025</td></tr>
<tr><td>S02</td><td>6 jan.</td><td>12 jan.</td></tr>
<tr><td>S03</td><td>13 jan.</td><td>19 jan.</td></tr>
<tr><td>S04</td><td>20 jan.</td><td>26 jan.</td></tr>
<tr><td>S05</td><td>27 jan.</td><td>2 fév.</td></tr>
<tr><td>S06</td><td>3 fév.</td><td>9 fév.</td></tr>
<tr><td>S07</td><td>10 fév.</td><td>16 fév.</td></tr>
<tr><td>S08</td><td>17 fév.</td><td>23 fév.</td></tr>
<tr><td>S09</td><td>24 fév.</td><td>2 mar.</td></tr>
<tr><td>S10</td><td>3 mar.</td><td>9 mar.</td></tr>
<tr><td>S11</td><td>10 mar.</td><td>16 mar.</td></tr>
<tr><td>S12</td><td>17 mar.</td><td>23 mar.</td></tr>
<tr><td>S13</td><td>24 mar.</td><td>30 mar.</td></tr>
<tr><td>S14</td><td>31 mar.</td><td>6 avr.</td></tr>
<tr><td>S15</td><td>7 avr.</td><td>13 avr.</td></tr>
<tr><td>S16</td><td>14 avr.</td><td>20 avr.</td></tr>
<tr><td>S17</td><td>21 avr.</td><td>27 avr.</td></tr>
<tr><td>S18</td><td>28 avr.</td><td>4 mai</td></tr>
<tr><td>S19</td><td>5 mai</td><td>11 mai</td></tr>
<tr><td>S20</td><td>12 mai</td><td>18 mai</td></tr>
<tr><td>S21</td><td>19 mai</td><td>25 mai</td></tr>
<tr><td>S22</td><td>26 mai</td><td>1 juin</td></tr>
<tr><td>S23</td><td>2 juin</td><td>8 juin</td></tr>
<tr><td>S24</td><td>9 juin</td><td>15 juin</td></tr>
<tr><td>S25</td><td>16 juin</td><td>22 juin</td></tr>
<tr><td>S26</td><td>23 juin</td><td>29 juin</td></tr>
<tr><td>S27</td><td>30 juin</td><td>6 juil.</td></tr>
<tr><td>S28</td><td>7 juil.</td><td>13 juil.</td></tr>
<tr><td>S29</td><td>14 juil.</td><td>20 juil.</td></tr>
<tr><td>S30</td><td>21 juil.</td><td>27 juil.</td></tr>
<tr><td>S31</td><td>28 juil.</td><td>3 août</td></tr>
<tr><td>S32</td><td>4 août</td><td>10 août</td></tr>
<tr><td>S33</td><td>11 août</td><td>17 août</td></tr>
<tr><td>S34</td><td>18 août</td><td>24 août</td></tr>
<tr><td>S35</td><td>25 août</td><td>31 août</td></tr>
<tr><td>S36</td><td>1 sep.</td><td>7 sep.</td></tr>
<tr><td>S37</td><td>8 sep.</td><td>14 sep.</td></tr>
<tr><td>S38</td><td>15 sep.</td><td>21 sep.</td></tr>
<tr><td>S39</td><td>22 sep.</td><td>28 sep.</td></tr>
<tr><td>S40</td><td>29 sep.</td><td>5 oct.</td></tr>
<tr><td>S41</td><td>6 oct.</td><td>12 oct.</td></tr>
<tr><td>S42</td><td>13 oct.</td><td>19 oct.</td></tr>
<tr><td>S43</td><td>20 oct.</td><td>26 oct.</td></tr>
<tr><td>S44</td><td>27 oct.</td><td>2 nov.</td></tr>
<tr><td>S45</td><td>3 nov.</td><td>9 nov.</td></tr>
<tr><td>S46</td><td>10 nov.</td><td>16 nov.</td></tr>
<tr><td>S47</td><td>17 nov.</td><td>23 nov.</td></tr>
<tr><td>S48</td><td>24 nov.</td><td>30 nov.</td></tr>
<tr><td>S49</td><td>1 déc.</td><td>7 déc.</td></tr>
<tr><td>S50</td><td>8 déc.</td><td>14 déc.</td></tr>
<tr><td>S51</td><td>15 déc.</td><td>21 déc.</td></tr>
<tr><td>S52</td><td>22 déc.</td><td>28 déc.</td></tr>
</table>`
      },
      {
        h2: 'Dates clés en 2025 par numéro de semaine',
        body: '<p>Référence utile pour la planification : dans quelle semaine ISO tombent les grandes dates fixes ?</p>',
        table: `<table>
<tr><th>Date</th><th>Jour</th><th>Semaine ISO</th></tr>
<tr><td>1er janvier 2025</td><td>Mercredi</td><td>S01</td></tr>
<tr><td>14 février 2025</td><td>Vendredi</td><td>S07</td></tr>
<tr><td>20 mars 2025 (équinoxe de printemps)</td><td>Jeudi</td><td>S12</td></tr>
<tr><td>21 juin 2025 (solstice d'été)</td><td>Samedi</td><td>S25</td></tr>
<tr><td>22 septembre 2025 (équinoxe d'automne)</td><td>Lundi</td><td>S39</td></tr>
<tr><td>31 octobre 2025</td><td>Vendredi</td><td>S44</td></tr>
<tr><td>21 décembre 2025 (solstice d'hiver)</td><td>Dimanche</td><td>S51</td></tr>
<tr><td>25 décembre 2025</td><td>Jeudi</td><td>S52</td></tr>
<tr><td>31 décembre 2025</td><td>Mercredi</td><td>S01 de 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Quel numéro de semaine est le 1er janvier 2025 ?', a: 'Le 1er janvier 2025 tombe dans la semaine ISO 1 de 2025. La semaine 1 a commencé le lundi 30 décembre 2024.' },
      { q: 'Quel numéro de semaine est Noël 2025 ?', a: 'Le 25 décembre 2025 (jeudi) est dans la semaine ISO 52 de 2025.' },
      { q: 'Quel numéro de semaine est le 31 décembre 2025 ?', a: 'Le 31 décembre 2025 (mercredi) est dans la semaine ISO 1 de 2026 — les derniers jours de décembre 2025 appartiennent à la première semaine de 2026.' },
      { q: 'Combien de semaines 2025 a-t-il ?', a: '2025 compte 52 semaines ISO. La dernière semaine de 2025 (S52) se termine le dimanche 28 décembre 2025.' },
    ],
    pillar: { href: '/week-number/', label: 'Quel numéro de semaine sommes-nous ?' },
    related: [
      { href: '/iso-week-number-explained/', label: 'Numéro de semaine ISO expliqué' },
      { href: '/how-many-weeks-in-a-year/', label: 'Combien de semaines dans une année ?' },
      { href: '/how-many-days-in-each-month/', label: 'Jours dans chaque mois' },
    ],
  },
  es: {
    title: 'Números de semana 2025 — Calendario completo con fechas de inicio y fin',
    metaDesc: 'Calendario completo de números de semana para 2025. Las 52 semanas ISO con fechas de inicio (lunes) y fin (domingo). Referencia práctica para planificación.',
    kicker: 'REFERENCIA NÚMEROS DE SEMANA',
    h1: 'Números de semana 2025 — Calendario completo',
    intro: 'Aquí está el calendario completo de números de semana ISO para 2025. Las 52 semanas se listan con su fecha de inicio (lunes) y fecha de fin (domingo). La semana 1 de 2025 comenzó el lunes 30 de diciembre de 2024.',
    sections: [
      {
        h2: 'Números de semana 2025 — las 52 semanas',
        body: '<p>Cada fila muestra el número de semana ISO, el lunes en que comienza y el domingo en que termina.</p>',
        table: `<table>
<tr><th>Semana</th><th>Inicio (lunes)</th><th>Fin (domingo)</th></tr>
<tr><td>S01</td><td>30 dic. 2024</td><td>5 ene. 2025</td></tr>
<tr><td>S02</td><td>6 ene.</td><td>12 ene.</td></tr>
<tr><td>S03</td><td>13 ene.</td><td>19 ene.</td></tr>
<tr><td>S04</td><td>20 ene.</td><td>26 ene.</td></tr>
<tr><td>S05</td><td>27 ene.</td><td>2 feb.</td></tr>
<tr><td>S06</td><td>3 feb.</td><td>9 feb.</td></tr>
<tr><td>S07</td><td>10 feb.</td><td>16 feb.</td></tr>
<tr><td>S08</td><td>17 feb.</td><td>23 feb.</td></tr>
<tr><td>S09</td><td>24 feb.</td><td>2 mar.</td></tr>
<tr><td>S10</td><td>3 mar.</td><td>9 mar.</td></tr>
<tr><td>S11</td><td>10 mar.</td><td>16 mar.</td></tr>
<tr><td>S12</td><td>17 mar.</td><td>23 mar.</td></tr>
<tr><td>S13</td><td>24 mar.</td><td>30 mar.</td></tr>
<tr><td>S14</td><td>31 mar.</td><td>6 abr.</td></tr>
<tr><td>S15</td><td>7 abr.</td><td>13 abr.</td></tr>
<tr><td>S16</td><td>14 abr.</td><td>20 abr.</td></tr>
<tr><td>S17</td><td>21 abr.</td><td>27 abr.</td></tr>
<tr><td>S18</td><td>28 abr.</td><td>4 may.</td></tr>
<tr><td>S19</td><td>5 may.</td><td>11 may.</td></tr>
<tr><td>S20</td><td>12 may.</td><td>18 may.</td></tr>
<tr><td>S21</td><td>19 may.</td><td>25 may.</td></tr>
<tr><td>S22</td><td>26 may.</td><td>1 jun.</td></tr>
<tr><td>S23</td><td>2 jun.</td><td>8 jun.</td></tr>
<tr><td>S24</td><td>9 jun.</td><td>15 jun.</td></tr>
<tr><td>S25</td><td>16 jun.</td><td>22 jun.</td></tr>
<tr><td>S26</td><td>23 jun.</td><td>29 jun.</td></tr>
<tr><td>S27</td><td>30 jun.</td><td>6 jul.</td></tr>
<tr><td>S28</td><td>7 jul.</td><td>13 jul.</td></tr>
<tr><td>S29</td><td>14 jul.</td><td>20 jul.</td></tr>
<tr><td>S30</td><td>21 jul.</td><td>27 jul.</td></tr>
<tr><td>S31</td><td>28 jul.</td><td>3 ago.</td></tr>
<tr><td>S32</td><td>4 ago.</td><td>10 ago.</td></tr>
<tr><td>S33</td><td>11 ago.</td><td>17 ago.</td></tr>
<tr><td>S34</td><td>18 ago.</td><td>24 ago.</td></tr>
<tr><td>S35</td><td>25 ago.</td><td>31 ago.</td></tr>
<tr><td>S36</td><td>1 sep.</td><td>7 sep.</td></tr>
<tr><td>S37</td><td>8 sep.</td><td>14 sep.</td></tr>
<tr><td>S38</td><td>15 sep.</td><td>21 sep.</td></tr>
<tr><td>S39</td><td>22 sep.</td><td>28 sep.</td></tr>
<tr><td>S40</td><td>29 sep.</td><td>5 oct.</td></tr>
<tr><td>S41</td><td>6 oct.</td><td>12 oct.</td></tr>
<tr><td>S42</td><td>13 oct.</td><td>19 oct.</td></tr>
<tr><td>S43</td><td>20 oct.</td><td>26 oct.</td></tr>
<tr><td>S44</td><td>27 oct.</td><td>2 nov.</td></tr>
<tr><td>S45</td><td>3 nov.</td><td>9 nov.</td></tr>
<tr><td>S46</td><td>10 nov.</td><td>16 nov.</td></tr>
<tr><td>S47</td><td>17 nov.</td><td>23 nov.</td></tr>
<tr><td>S48</td><td>24 nov.</td><td>30 nov.</td></tr>
<tr><td>S49</td><td>1 dic.</td><td>7 dic.</td></tr>
<tr><td>S50</td><td>8 dic.</td><td>14 dic.</td></tr>
<tr><td>S51</td><td>15 dic.</td><td>21 dic.</td></tr>
<tr><td>S52</td><td>22 dic.</td><td>28 dic.</td></tr>
</table>`
      },
      {
        h2: 'Fechas clave en 2025 por número de semana',
        body: '<p>Referencia útil para planificación: ¿en qué semana ISO caen las principales fechas fijas?</p>',
        table: `<table>
<tr><th>Fecha</th><th>Día</th><th>Semana ISO</th></tr>
<tr><td>1 de enero de 2025</td><td>Miércoles</td><td>S01</td></tr>
<tr><td>14 de febrero de 2025</td><td>Viernes</td><td>S07</td></tr>
<tr><td>20 de marzo de 2025 (equinoccio de primavera)</td><td>Jueves</td><td>S12</td></tr>
<tr><td>21 de junio de 2025 (solsticio de verano)</td><td>Sábado</td><td>S25</td></tr>
<tr><td>22 de septiembre de 2025 (equinoccio de otoño)</td><td>Lunes</td><td>S39</td></tr>
<tr><td>31 de octubre de 2025</td><td>Viernes</td><td>S44</td></tr>
<tr><td>21 de diciembre de 2025 (solsticio de invierno)</td><td>Domingo</td><td>S51</td></tr>
<tr><td>25 de diciembre de 2025</td><td>Jueves</td><td>S52</td></tr>
<tr><td>31 de diciembre de 2025</td><td>Miércoles</td><td>S01 de 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '¿En qué número de semana cae el 1 de enero de 2025?', a: 'El 1 de enero de 2025 cae en la semana ISO 1 de 2025. La semana 1 comenzó el lunes 30 de diciembre de 2024.' },
      { q: '¿En qué número de semana cae la Navidad de 2025?', a: 'El 25 de diciembre de 2025 (jueves) está en la semana ISO 52 de 2025.' },
      { q: '¿En qué número de semana cae el 31 de diciembre de 2025?', a: 'El 31 de diciembre de 2025 (miércoles) está en la semana ISO 1 de 2026 — los últimos días de diciembre de 2025 pertenecen a la primera semana de 2026.' },
      { q: '¿Cuántas semanas tiene 2025?', a: '2025 tiene 52 semanas ISO. La última semana de 2025 (S52) termina el domingo 28 de diciembre de 2025.' },
    ],
    pillar: { href: '/week-number/', label: '¿Qué número de semana es hoy?' },
    related: [
      { href: '/iso-week-number-explained/', label: 'Número de semana ISO explicado' },
      { href: '/how-many-weeks-in-a-year/', label: '¿Cuántas semanas tiene un año?' },
      { href: '/how-many-days-in-each-month/', label: 'Días en cada mes' },
    ],
  },
  pt: {
    title: "Números de Semana 2025 — Calendário Completo com Datas de Início e Fim",
    metaDesc: "Calendário completo de números de semana para 2025. Todas as 52 semanas ISO com datas de início (segunda) e fim (domingo). Referência fácil para planejamento.",
    kicker: 'REFERÊNCIA NÚMEROS DE SEMANA',
    h1: "Números de Semana 2025 — Calendário Completo",
    intro: "Aqui está o calendário completo de números de semana ISO para 2025. Todas as 52 semanas são listadas com a data de início (segunda-feira) e data de fim (domingo). A semana 1 de 2025 começou na segunda-feira, 30 de dezembro de 2024.",
    sections: [
      {
        h2: "Números de semana 2025 — todas as 52 semanas",
        body: '<p>Cada linha mostra o número da semana ISO, a segunda-feira em que começa e o domingo em que termina.</p>',
        table: `<table>
<tr><th>Semana</th><th>Início (segunda)</th><th>Fim (domingo)</th></tr>
<tr><td>S01</td><td>30 dez. 2024</td><td>5 jan. 2025</td></tr>
<tr><td>S02</td><td>6 jan.</td><td>12 jan.</td></tr>
<tr><td>S03</td><td>13 jan.</td><td>19 jan.</td></tr>
<tr><td>S04</td><td>20 jan.</td><td>26 jan.</td></tr>
<tr><td>S05</td><td>27 jan.</td><td>2 fev.</td></tr>
<tr><td>S06</td><td>3 fev.</td><td>9 fev.</td></tr>
<tr><td>S07</td><td>10 fev.</td><td>16 fev.</td></tr>
<tr><td>S08</td><td>17 fev.</td><td>23 fev.</td></tr>
<tr><td>S09</td><td>24 fev.</td><td>2 mar.</td></tr>
<tr><td>S10</td><td>3 mar.</td><td>9 mar.</td></tr>
<tr><td>S11</td><td>10 mar.</td><td>16 mar.</td></tr>
<tr><td>S12</td><td>17 mar.</td><td>23 mar.</td></tr>
<tr><td>S13</td><td>24 mar.</td><td>30 mar.</td></tr>
<tr><td>S14</td><td>31 mar.</td><td>6 abr.</td></tr>
<tr><td>S15</td><td>7 abr.</td><td>13 abr.</td></tr>
<tr><td>S16</td><td>14 abr.</td><td>20 abr.</td></tr>
<tr><td>S17</td><td>21 abr.</td><td>27 abr.</td></tr>
<tr><td>S18</td><td>28 abr.</td><td>4 mai.</td></tr>
<tr><td>S19</td><td>5 mai.</td><td>11 mai.</td></tr>
<tr><td>S20</td><td>12 mai.</td><td>18 mai.</td></tr>
<tr><td>S21</td><td>19 mai.</td><td>25 mai.</td></tr>
<tr><td>S22</td><td>26 mai.</td><td>1 jun.</td></tr>
<tr><td>S23</td><td>2 jun.</td><td>8 jun.</td></tr>
<tr><td>S24</td><td>9 jun.</td><td>15 jun.</td></tr>
<tr><td>S25</td><td>16 jun.</td><td>22 jun.</td></tr>
<tr><td>S26</td><td>23 jun.</td><td>29 jun.</td></tr>
<tr><td>S27</td><td>30 jun.</td><td>6 jul.</td></tr>
<tr><td>S28</td><td>7 jul.</td><td>13 jul.</td></tr>
<tr><td>S29</td><td>14 jul.</td><td>20 jul.</td></tr>
<tr><td>S30</td><td>21 jul.</td><td>27 jul.</td></tr>
<tr><td>S31</td><td>28 jul.</td><td>3 ago.</td></tr>
<tr><td>S32</td><td>4 ago.</td><td>10 ago.</td></tr>
<tr><td>S33</td><td>11 ago.</td><td>17 ago.</td></tr>
<tr><td>S34</td><td>18 ago.</td><td>24 ago.</td></tr>
<tr><td>S35</td><td>25 ago.</td><td>31 ago.</td></tr>
<tr><td>S36</td><td>1 set.</td><td>7 set.</td></tr>
<tr><td>S37</td><td>8 set.</td><td>14 set.</td></tr>
<tr><td>S38</td><td>15 set.</td><td>21 set.</td></tr>
<tr><td>S39</td><td>22 set.</td><td>28 set.</td></tr>
<tr><td>S40</td><td>29 set.</td><td>5 out.</td></tr>
<tr><td>S41</td><td>6 out.</td><td>12 out.</td></tr>
<tr><td>S42</td><td>13 out.</td><td>19 out.</td></tr>
<tr><td>S43</td><td>20 out.</td><td>26 out.</td></tr>
<tr><td>S44</td><td>27 out.</td><td>2 nov.</td></tr>
<tr><td>S45</td><td>3 nov.</td><td>9 nov.</td></tr>
<tr><td>S46</td><td>10 nov.</td><td>16 nov.</td></tr>
<tr><td>S47</td><td>17 nov.</td><td>23 nov.</td></tr>
<tr><td>S48</td><td>24 nov.</td><td>30 nov.</td></tr>
<tr><td>S49</td><td>1 dez.</td><td>7 dez.</td></tr>
<tr><td>S50</td><td>8 dez.</td><td>14 dez.</td></tr>
<tr><td>S51</td><td>15 dez.</td><td>21 dez.</td></tr>
<tr><td>S52</td><td>22 dez.</td><td>28 dez.</td></tr>
</table>`
      },
      {
        h2: "Datas importantes de 2025 por número de semana",
        body: '<p>Referência útil para planejamento: em qual semana ISO caem as principais datas fixas?</p>',
        table: `<table>
<tr><th>Data</th><th>Dia</th><th>Semana ISO</th></tr>
<tr><td>1 de janeiro de 2025</td><td>Quarta-feira</td><td>S01</td></tr>
<tr><td>14 de fevereiro de 2025</td><td>Sexta-feira</td><td>S07</td></tr>
<tr><td>20 de março de 2025 (equinócio de primavera)</td><td>Quinta-feira</td><td>S12</td></tr>
<tr><td>21 de junho de 2025 (solstício de verão)</td><td>Sábado</td><td>S25</td></tr>
<tr><td>22 de setembro de 2025 (equinócio de outono)</td><td>Segunda-feira</td><td>S39</td></tr>
<tr><td>31 de outubro de 2025</td><td>Sexta-feira</td><td>S44</td></tr>
<tr><td>21 de dezembro de 2025 (solstício de inverno)</td><td>Domingo</td><td>S51</td></tr>
<tr><td>25 de dezembro de 2025</td><td>Quinta-feira</td><td>S52</td></tr>
<tr><td>31 de dezembro de 2025</td><td>Quarta-feira</td><td>S01 de 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: "Em que número de semana cai o 1 de janeiro de 2025?", a: "1 de janeiro de 2025 cai na semana ISO 1 de 2025. A semana 1 começou na segunda-feira, 30 de dezembro de 2024." },
      { q: "Em que número de semana cai o Natal de 2025?", a: "25 de dezembro de 2025 (quinta-feira) está na semana ISO 52 de 2025." },
      { q: "Em que número de semana cai o 31 de dezembro de 2025?", a: "31 de dezembro de 2025 (quarta-feira) está na semana ISO 1 de 2026 — os últimos dias de dezembro de 2025 pertencem à primeira semana de 2026." },
      { q: "Quantas semanas tem 2025?", a: "2025 tem 52 semanas ISO. A última semana de 2025 (S52) termina no domingo, 28 de dezembro de 2025." },
    ],
    pillar: { href: '/week-number/', label: 'Qual é o número da semana hoje?' },
    related: [
      { href: '/pt/explicacao-numero-semana-iso/', label: 'Número de semana ISO explicado' },
      { href: '/pt/quantas-semanas-tem-um-ano/', label: 'Quantas semanas tem um ano?' },
      { href: '/pt/quantos-dias-tem-cada-mes/', label: 'Dias em cada mês' },
    ],
  },
  de: {
    title: 'Kalenderwochen 2025 — Vollständiger Kalender mit Start- und Enddaten',
    metaDesc: 'Vollständiger Kalenderwochen-Kalender für 2025. Alle 52 ISO-Wochen mit Start (Montag) und Ende (Sonntag). Praktische Referenz für Planung und Terminierung.',
    kicker: 'REFERENZ KALENDERWOCHEN',
    h1: 'Kalenderwochen 2025 — Vollständiger Kalender',
    intro: 'Hier ist der vollständige ISO-Kalenderwochen-Kalender für 2025. Alle 52 Wochen sind mit ihrem Startdatum (Montag) und Enddatum (Sonntag) aufgelistet. Woche 1 von 2025 begann am Montag, 30. Dezember 2024.',
    sections: [
      {
        h2: 'Kalenderwochen 2025 — alle 52 Wochen',
        body: '<p>Jede Zeile zeigt die ISO-Kalenderwoche, den Montag, an dem sie beginnt, und den Sonntag, an dem sie endet.</p>',
        table: `<table>
<tr><th>KW</th><th>Start (Montag)</th><th>Ende (Sonntag)</th></tr>
<tr><td>KW01</td><td>30. Dez. 2024</td><td>5. Jan. 2025</td></tr>
<tr><td>KW02</td><td>6. Jan.</td><td>12. Jan.</td></tr>
<tr><td>KW03</td><td>13. Jan.</td><td>19. Jan.</td></tr>
<tr><td>KW04</td><td>20. Jan.</td><td>26. Jan.</td></tr>
<tr><td>KW05</td><td>27. Jan.</td><td>2. Feb.</td></tr>
<tr><td>KW06</td><td>3. Feb.</td><td>9. Feb.</td></tr>
<tr><td>KW07</td><td>10. Feb.</td><td>16. Feb.</td></tr>
<tr><td>KW08</td><td>17. Feb.</td><td>23. Feb.</td></tr>
<tr><td>KW09</td><td>24. Feb.</td><td>2. Mär.</td></tr>
<tr><td>KW10</td><td>3. Mär.</td><td>9. Mär.</td></tr>
<tr><td>KW11</td><td>10. Mär.</td><td>16. Mär.</td></tr>
<tr><td>KW12</td><td>17. Mär.</td><td>23. Mär.</td></tr>
<tr><td>KW13</td><td>24. Mär.</td><td>30. Mär.</td></tr>
<tr><td>KW14</td><td>31. Mär.</td><td>6. Apr.</td></tr>
<tr><td>KW15</td><td>7. Apr.</td><td>13. Apr.</td></tr>
<tr><td>KW16</td><td>14. Apr.</td><td>20. Apr.</td></tr>
<tr><td>KW17</td><td>21. Apr.</td><td>27. Apr.</td></tr>
<tr><td>KW18</td><td>28. Apr.</td><td>4. Mai</td></tr>
<tr><td>KW19</td><td>5. Mai</td><td>11. Mai</td></tr>
<tr><td>KW20</td><td>12. Mai</td><td>18. Mai</td></tr>
<tr><td>KW21</td><td>19. Mai</td><td>25. Mai</td></tr>
<tr><td>KW22</td><td>26. Mai</td><td>1. Jun.</td></tr>
<tr><td>KW23</td><td>2. Jun.</td><td>8. Jun.</td></tr>
<tr><td>KW24</td><td>9. Jun.</td><td>15. Jun.</td></tr>
<tr><td>KW25</td><td>16. Jun.</td><td>22. Jun.</td></tr>
<tr><td>KW26</td><td>23. Jun.</td><td>29. Jun.</td></tr>
<tr><td>KW27</td><td>30. Jun.</td><td>6. Jul.</td></tr>
<tr><td>KW28</td><td>7. Jul.</td><td>13. Jul.</td></tr>
<tr><td>KW29</td><td>14. Jul.</td><td>20. Jul.</td></tr>
<tr><td>KW30</td><td>21. Jul.</td><td>27. Jul.</td></tr>
<tr><td>KW31</td><td>28. Jul.</td><td>3. Aug.</td></tr>
<tr><td>KW32</td><td>4. Aug.</td><td>10. Aug.</td></tr>
<tr><td>KW33</td><td>11. Aug.</td><td>17. Aug.</td></tr>
<tr><td>KW34</td><td>18. Aug.</td><td>24. Aug.</td></tr>
<tr><td>KW35</td><td>25. Aug.</td><td>31. Aug.</td></tr>
<tr><td>KW36</td><td>1. Sep.</td><td>7. Sep.</td></tr>
<tr><td>KW37</td><td>8. Sep.</td><td>14. Sep.</td></tr>
<tr><td>KW38</td><td>15. Sep.</td><td>21. Sep.</td></tr>
<tr><td>KW39</td><td>22. Sep.</td><td>28. Sep.</td></tr>
<tr><td>KW40</td><td>29. Sep.</td><td>5. Okt.</td></tr>
<tr><td>KW41</td><td>6. Okt.</td><td>12. Okt.</td></tr>
<tr><td>KW42</td><td>13. Okt.</td><td>19. Okt.</td></tr>
<tr><td>KW43</td><td>20. Okt.</td><td>26. Okt.</td></tr>
<tr><td>KW44</td><td>27. Okt.</td><td>2. Nov.</td></tr>
<tr><td>KW45</td><td>3. Nov.</td><td>9. Nov.</td></tr>
<tr><td>KW46</td><td>10. Nov.</td><td>16. Nov.</td></tr>
<tr><td>KW47</td><td>17. Nov.</td><td>23. Nov.</td></tr>
<tr><td>KW48</td><td>24. Nov.</td><td>30. Nov.</td></tr>
<tr><td>KW49</td><td>1. Dez.</td><td>7. Dez.</td></tr>
<tr><td>KW50</td><td>8. Dez.</td><td>14. Dez.</td></tr>
<tr><td>KW51</td><td>15. Dez.</td><td>21. Dez.</td></tr>
<tr><td>KW52</td><td>22. Dez.</td><td>28. Dez.</td></tr>
</table>`
      },
      {
        h2: 'Wichtige Daten 2025 nach Kalenderwoche',
        body: '<p>Nützliche Referenz für die Planung: In welcher ISO-Woche fallen die wichtigsten festen Daten?</p>',
        table: `<table>
<tr><th>Datum</th><th>Wochentag</th><th>ISO-KW</th></tr>
<tr><td>1. Januar 2025</td><td>Mittwoch</td><td>KW01</td></tr>
<tr><td>14. Februar 2025</td><td>Freitag</td><td>KW07</td></tr>
<tr><td>20. März 2025 (Frühlingsanfang)</td><td>Donnerstag</td><td>KW12</td></tr>
<tr><td>21. Juni 2025 (Sommersonnenwende)</td><td>Samstag</td><td>KW25</td></tr>
<tr><td>22. September 2025 (Herbstanfang)</td><td>Montag</td><td>KW39</td></tr>
<tr><td>31. Oktober 2025</td><td>Freitag</td><td>KW44</td></tr>
<tr><td>21. Dezember 2025 (Wintersonnenwende)</td><td>Sonntag</td><td>KW51</td></tr>
<tr><td>25. Dezember 2025</td><td>Donnerstag</td><td>KW52</td></tr>
<tr><td>31. Dezember 2025</td><td>Mittwoch</td><td>KW01 von 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'In welcher Kalenderwoche ist der 1. Januar 2025?', a: 'Der 1. Januar 2025 liegt in ISO-Woche 1 von 2025. Woche 1 begann am Montag, 30. Dezember 2024.' },
      { q: 'In welcher Kalenderwoche ist Weihnachten 2025?', a: 'Der 25. Dezember 2025 (Donnerstag) liegt in ISO-Woche 52 von 2025.' },
      { q: 'In welcher Kalenderwoche ist der 31. Dezember 2025?', a: 'Der 31. Dezember 2025 (Mittwoch) liegt in ISO-Woche 1 von 2026 — die letzten Tage des Dezembers 2025 gehören zur ersten Woche von 2026.' },
      { q: 'Wie viele Wochen hat 2025?', a: '2025 hat 52 ISO-Wochen. Die letzte Woche von 2025 (KW52) endet am Sonntag, 28. Dezember 2025.' },
    ],
    pillar: { href: '/week-number/', label: 'Welche Kalenderwoche ist heute?' },
    related: [
      { href: '/de/iso-kalenderwoche-erklaert/', label: 'ISO Kalenderwoche erklärt' },
      { href: '/de/wie-viele-wochen-hat-ein-jahr/', label: 'Wie viele Wochen hat ein Jahr?' },
      { href: '/de/wie-viele-tage-hat-jeder-monat/', label: 'Tage in jedem Monat' },
    ],
  },
  it: {
    title: 'Numeri Settimana 2025 — Calendario Completo con Date di Inizio e Fine',
    metaDesc: "Calendario completo dei numeri di settimana per il 2025. Tutte le 52 settimane ISO con date di inizio (lunedì) e fine (domenica). Riferimento pratico per la pianificazione.",
    kicker: 'RIFERIMENTO NUMERI SETTIMANA',
    h1: 'Numeri Settimana 2025 — Calendario Completo',
    intro: "Ecco il calendario completo dei numeri di settimana ISO per il 2025. Tutte le 52 settimane sono elencate con la data di inizio (lunedì) e fine (domenica). La settimana 1 del 2025 è iniziata lunedì 30 dicembre 2024.",
    sections: [
      {
        h2: "Numeri settimana 2025 — tutte le 52 settimane",
        body: "<p>Ogni riga mostra il numero di settimana ISO, il lunedì in cui inizia e la domenica in cui finisce.</p>",
        table: `<table>
<tr><th>Settimana</th><th>Inizio (lunedì)</th><th>Fine (domenica)</th></tr>
<tr><td>S01</td><td>30 dic. 2024</td><td>5 gen. 2025</td></tr>
<tr><td>S02</td><td>6 gen.</td><td>12 gen.</td></tr>
<tr><td>S03</td><td>13 gen.</td><td>19 gen.</td></tr>
<tr><td>S04</td><td>20 gen.</td><td>26 gen.</td></tr>
<tr><td>S05</td><td>27 gen.</td><td>2 feb.</td></tr>
<tr><td>S06</td><td>3 feb.</td><td>9 feb.</td></tr>
<tr><td>S07</td><td>10 feb.</td><td>16 feb.</td></tr>
<tr><td>S08</td><td>17 feb.</td><td>23 feb.</td></tr>
<tr><td>S09</td><td>24 feb.</td><td>2 mar.</td></tr>
<tr><td>S10</td><td>3 mar.</td><td>9 mar.</td></tr>
<tr><td>S11</td><td>10 mar.</td><td>16 mar.</td></tr>
<tr><td>S12</td><td>17 mar.</td><td>23 mar.</td></tr>
<tr><td>S13</td><td>24 mar.</td><td>30 mar.</td></tr>
<tr><td>S14</td><td>31 mar.</td><td>6 apr.</td></tr>
<tr><td>S15</td><td>7 apr.</td><td>13 apr.</td></tr>
<tr><td>S16</td><td>14 apr.</td><td>20 apr.</td></tr>
<tr><td>S17</td><td>21 apr.</td><td>27 apr.</td></tr>
<tr><td>S18</td><td>28 apr.</td><td>4 mag.</td></tr>
<tr><td>S19</td><td>5 mag.</td><td>11 mag.</td></tr>
<tr><td>S20</td><td>12 mag.</td><td>18 mag.</td></tr>
<tr><td>S21</td><td>19 mag.</td><td>25 mag.</td></tr>
<tr><td>S22</td><td>26 mag.</td><td>1 giu.</td></tr>
<tr><td>S23</td><td>2 giu.</td><td>8 giu.</td></tr>
<tr><td>S24</td><td>9 giu.</td><td>15 giu.</td></tr>
<tr><td>S25</td><td>16 giu.</td><td>22 giu.</td></tr>
<tr><td>S26</td><td>23 giu.</td><td>29 giu.</td></tr>
<tr><td>S27</td><td>30 giu.</td><td>6 lug.</td></tr>
<tr><td>S28</td><td>7 lug.</td><td>13 lug.</td></tr>
<tr><td>S29</td><td>14 lug.</td><td>20 lug.</td></tr>
<tr><td>S30</td><td>21 lug.</td><td>27 lug.</td></tr>
<tr><td>S31</td><td>28 lug.</td><td>3 ago.</td></tr>
<tr><td>S32</td><td>4 ago.</td><td>10 ago.</td></tr>
<tr><td>S33</td><td>11 ago.</td><td>17 ago.</td></tr>
<tr><td>S34</td><td>18 ago.</td><td>24 ago.</td></tr>
<tr><td>S35</td><td>25 ago.</td><td>31 ago.</td></tr>
<tr><td>S36</td><td>1 set.</td><td>7 set.</td></tr>
<tr><td>S37</td><td>8 set.</td><td>14 set.</td></tr>
<tr><td>S38</td><td>15 set.</td><td>21 set.</td></tr>
<tr><td>S39</td><td>22 set.</td><td>28 set.</td></tr>
<tr><td>S40</td><td>29 set.</td><td>5 ott.</td></tr>
<tr><td>S41</td><td>6 ott.</td><td>12 ott.</td></tr>
<tr><td>S42</td><td>13 ott.</td><td>19 ott.</td></tr>
<tr><td>S43</td><td>20 ott.</td><td>26 ott.</td></tr>
<tr><td>S44</td><td>27 ott.</td><td>2 nov.</td></tr>
<tr><td>S45</td><td>3 nov.</td><td>9 nov.</td></tr>
<tr><td>S46</td><td>10 nov.</td><td>16 nov.</td></tr>
<tr><td>S47</td><td>17 nov.</td><td>23 nov.</td></tr>
<tr><td>S48</td><td>24 nov.</td><td>30 nov.</td></tr>
<tr><td>S49</td><td>1 dic.</td><td>7 dic.</td></tr>
<tr><td>S50</td><td>8 dic.</td><td>14 dic.</td></tr>
<tr><td>S51</td><td>15 dic.</td><td>21 dic.</td></tr>
<tr><td>S52</td><td>22 dic.</td><td>28 dic.</td></tr>
</table>`
      },
      {
        h2: "Date importanti del 2025 per numero di settimana",
        body: "<p>Riferimento utile per la pianificazione: in quale settimana ISO cadono le principali date fisse?</p>",
        table: `<table>
<tr><th>Data</th><th>Giorno</th><th>Settimana ISO</th></tr>
<tr><td>1° gennaio 2025</td><td>Mercoledì</td><td>S01</td></tr>
<tr><td>14 febbraio 2025</td><td>Venerdì</td><td>S07</td></tr>
<tr><td>20 marzo 2025 (equinozio di primavera)</td><td>Giovedì</td><td>S12</td></tr>
<tr><td>21 giugno 2025 (solstizio d'estate)</td><td>Sabato</td><td>S25</td></tr>
<tr><td>22 settembre 2025 (equinozio d'autunno)</td><td>Lunedì</td><td>S39</td></tr>
<tr><td>31 ottobre 2025</td><td>Venerdì</td><td>S44</td></tr>
<tr><td>21 dicembre 2025 (solstizio d'inverno)</td><td>Domenica</td><td>S51</td></tr>
<tr><td>25 dicembre 2025</td><td>Giovedì</td><td>S52</td></tr>
<tr><td>31 dicembre 2025</td><td>Mercoledì</td><td>S01 del 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: "In quale numero di settimana cade il 1° gennaio 2025?", a: "Il 1° gennaio 2025 cade nella settimana ISO 1 del 2025. La settimana 1 è iniziata lunedì 30 dicembre 2024." },
      { q: "In quale numero di settimana cade il Natale 2025?", a: "Il 25 dicembre 2025 (giovedì) è nella settimana ISO 52 del 2025." },
      { q: "In quale numero di settimana cade il 31 dicembre 2025?", a: "Il 31 dicembre 2025 (mercoledì) è nella settimana ISO 1 del 2026 — gli ultimi giorni di dicembre 2025 appartengono alla prima settimana del 2026." },
      { q: "Quante settimane ha il 2025?", a: "Il 2025 ha 52 settimane ISO. L'ultima settimana del 2025 (S52) termina domenica 28 dicembre 2025." },
    ],
    pillar: { href: '/week-number/', label: "Che numero di settimana è oggi?" },
    related: [
      { href: '/it/numero-settimana-iso-spiegato/', label: 'Numero settimana ISO spiegato' },
      { href: '/it/quante-settimane-ha-un-anno/', label: 'Quante settimane ha un anno?' },
      { href: '/it/quanti-giorni-ha-ogni-mese/', label: 'Giorni in ogni mese' },
    ],
  },
  pl: {
    title: 'Numery Tygodni 2025 — Pełny Kalendarz z Datami Początku i Końca',
    metaDesc: 'Pełny kalendarz numerów tygodni na rok 2025. Wszystkie 52 tygodnie ISO z datami początku (poniedziałek) i końca (niedziela). Łatwa referencja do planowania.',
    kicker: 'REFERENCJA NUMERY TYGODNIA',
    h1: 'Numery Tygodni 2025 — Pełny Kalendarz',
    intro: 'Oto pełny kalendarz numerów tygodni ISO na rok 2025. Wszystkie 52 tygodnie są wymienione z datą początku (poniedziałek) i końca (niedziela). Tydzień 1 roku 2025 zaczął się w poniedziałek, 30 grudnia 2024.',
    sections: [
      {
        h2: 'Numery tygodni 2025 — wszystkie 52 tygodnie',
        body: '<p>Każdy wiersz pokazuje numer tygodnia ISO, poniedziałek, od którego zaczyna się tydzień, i niedzielę, na której się kończy.</p>',
        table: `<table>
<tr><th>Tydzień</th><th>Początek (pon.)</th><th>Koniec (niedz.)</th></tr>
<tr><td>T01</td><td>30 gru. 2024</td><td>5 sty. 2025</td></tr>
<tr><td>T02</td><td>6 sty.</td><td>12 sty.</td></tr>
<tr><td>T03</td><td>13 sty.</td><td>19 sty.</td></tr>
<tr><td>T04</td><td>20 sty.</td><td>26 sty.</td></tr>
<tr><td>T05</td><td>27 sty.</td><td>2 lut.</td></tr>
<tr><td>T06</td><td>3 lut.</td><td>9 lut.</td></tr>
<tr><td>T07</td><td>10 lut.</td><td>16 lut.</td></tr>
<tr><td>T08</td><td>17 lut.</td><td>23 lut.</td></tr>
<tr><td>T09</td><td>24 lut.</td><td>2 mar.</td></tr>
<tr><td>T10</td><td>3 mar.</td><td>9 mar.</td></tr>
<tr><td>T11</td><td>10 mar.</td><td>16 mar.</td></tr>
<tr><td>T12</td><td>17 mar.</td><td>23 mar.</td></tr>
<tr><td>T13</td><td>24 mar.</td><td>30 mar.</td></tr>
<tr><td>T14</td><td>31 mar.</td><td>6 kwi.</td></tr>
<tr><td>T15</td><td>7 kwi.</td><td>13 kwi.</td></tr>
<tr><td>T16</td><td>14 kwi.</td><td>20 kwi.</td></tr>
<tr><td>T17</td><td>21 kwi.</td><td>27 kwi.</td></tr>
<tr><td>T18</td><td>28 kwi.</td><td>4 maj.</td></tr>
<tr><td>T19</td><td>5 maj.</td><td>11 maj.</td></tr>
<tr><td>T20</td><td>12 maj.</td><td>18 maj.</td></tr>
<tr><td>T21</td><td>19 maj.</td><td>25 maj.</td></tr>
<tr><td>T22</td><td>26 maj.</td><td>1 cze.</td></tr>
<tr><td>T23</td><td>2 cze.</td><td>8 cze.</td></tr>
<tr><td>T24</td><td>9 cze.</td><td>15 cze.</td></tr>
<tr><td>T25</td><td>16 cze.</td><td>22 cze.</td></tr>
<tr><td>T26</td><td>23 cze.</td><td>29 cze.</td></tr>
<tr><td>T27</td><td>30 cze.</td><td>6 lip.</td></tr>
<tr><td>T28</td><td>7 lip.</td><td>13 lip.</td></tr>
<tr><td>T29</td><td>14 lip.</td><td>20 lip.</td></tr>
<tr><td>T30</td><td>21 lip.</td><td>27 lip.</td></tr>
<tr><td>T31</td><td>28 lip.</td><td>3 sie.</td></tr>
<tr><td>T32</td><td>4 sie.</td><td>10 sie.</td></tr>
<tr><td>T33</td><td>11 sie.</td><td>17 sie.</td></tr>
<tr><td>T34</td><td>18 sie.</td><td>24 sie.</td></tr>
<tr><td>T35</td><td>25 sie.</td><td>31 sie.</td></tr>
<tr><td>T36</td><td>1 wrz.</td><td>7 wrz.</td></tr>
<tr><td>T37</td><td>8 wrz.</td><td>14 wrz.</td></tr>
<tr><td>T38</td><td>15 wrz.</td><td>21 wrz.</td></tr>
<tr><td>T39</td><td>22 wrz.</td><td>28 wrz.</td></tr>
<tr><td>T40</td><td>29 wrz.</td><td>5 paź.</td></tr>
<tr><td>T41</td><td>6 paź.</td><td>12 paź.</td></tr>
<tr><td>T42</td><td>13 paź.</td><td>19 paź.</td></tr>
<tr><td>T43</td><td>20 paź.</td><td>26 paź.</td></tr>
<tr><td>T44</td><td>27 paź.</td><td>2 lis.</td></tr>
<tr><td>T45</td><td>3 lis.</td><td>9 lis.</td></tr>
<tr><td>T46</td><td>10 lis.</td><td>16 lis.</td></tr>
<tr><td>T47</td><td>17 lis.</td><td>23 lis.</td></tr>
<tr><td>T48</td><td>24 lis.</td><td>30 lis.</td></tr>
<tr><td>T49</td><td>1 gru.</td><td>7 gru.</td></tr>
<tr><td>T50</td><td>8 gru.</td><td>14 gru.</td></tr>
<tr><td>T51</td><td>15 gru.</td><td>21 gru.</td></tr>
<tr><td>T52</td><td>22 gru.</td><td>28 gru.</td></tr>
</table>`
      },
      {
        h2: 'Ważne daty 2025 według numeru tygodnia',
        body: '<p>Przydatna referencja do planowania: w którym tygodniu ISO przypadają główne stałe daty?</p>',
        table: `<table>
<tr><th>Data</th><th>Dzień</th><th>Tydzień ISO</th></tr>
<tr><td>1 stycznia 2025</td><td>Środa</td><td>T01</td></tr>
<tr><td>14 lutego 2025</td><td>Piątek</td><td>T07</td></tr>
<tr><td>20 marca 2025 (równonoc wiosenna)</td><td>Czwartek</td><td>T12</td></tr>
<tr><td>21 czerwca 2025 (przesilenie letnie)</td><td>Sobota</td><td>T25</td></tr>
<tr><td>22 września 2025 (równonoc jesienna)</td><td>Poniedziałek</td><td>T39</td></tr>
<tr><td>31 października 2025</td><td>Piątek</td><td>T44</td></tr>
<tr><td>21 grudnia 2025 (przesilenie zimowe)</td><td>Niedziela</td><td>T51</td></tr>
<tr><td>25 grudnia 2025</td><td>Czwartek</td><td>T52</td></tr>
<tr><td>31 grudnia 2025</td><td>Środa</td><td>T01 roku 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'W którym tygodniu jest 1 stycznia 2025?', a: '1 stycznia 2025 przypada w tygodniu ISO 1 roku 2025. Tydzień 1 zaczął się w poniedziałek, 30 grudnia 2024.' },
      { q: 'W którym tygodniu są Święta Bożego Narodzenia 2025?', a: '25 grudnia 2025 (czwartek) jest w tygodniu ISO 52 roku 2025.' },
      { q: 'W którym tygodniu jest 31 grudnia 2025?', a: '31 grudnia 2025 (środa) jest w tygodniu ISO 1 roku 2026 — ostatnie dni grudnia 2025 należą do pierwszego tygodnia 2026.' },
      { q: 'Ile tygodni ma 2025?', a: '2025 ma 52 tygodnie ISO. Ostatni tydzień 2025 (T52) kończy się w niedzielę, 28 grudnia 2025.' },
    ],
    pillar: { href: '/week-number/', label: 'Który numer tygodnia jest dziś?' },
    related: [
      { href: '/pl/numer-tygodnia-iso-wyjasniony/', label: 'Numer tygodnia ISO wyjaśniony' },
      { href: '/pl/ile-tygodni-ma-rok/', label: 'Ile tygodni ma rok?' },
      { href: '/pl/ile-dni-ma-kazdy-miesiac/', label: 'Dni w każdym miesiącu' },
    ],
  },
  ja: {
    title: '2025年週番号カレンダー — 開始日・終了日付きの完全カレンダー',
    metaDesc: '2025年の完全な週番号カレンダー。全52週のISO週番号と開始日（月曜日）・終了日（日曜日）一覧。計画・スケジューリングに便利な参照表。',
    kicker: '週番号リファレンス',
    h1: '2025年週番号 — 完全カレンダー',
    intro: '2025年のISO週番号完全カレンダーです。全52週が開始日（月曜日）と終了日（日曜日）とともに記載されています。2025年の第1週は2024年12月30日（月曜日）に始まりました。',
    sections: [
      {
        h2: '2025年週番号 — 全52週',
        body: '<p>各行にはISO週番号、開始の月曜日、終了の日曜日が示されています。</p>',
        table: `<table>
<tr><th>週</th><th>開始（月）</th><th>終了（日）</th></tr>
<tr><td>第1週</td><td>2024年12月30日</td><td>2025年1月5日</td></tr>
<tr><td>第2週</td><td>1月6日</td><td>1月12日</td></tr>
<tr><td>第3週</td><td>1月13日</td><td>1月19日</td></tr>
<tr><td>第4週</td><td>1月20日</td><td>1月26日</td></tr>
<tr><td>第5週</td><td>1月27日</td><td>2月2日</td></tr>
<tr><td>第6週</td><td>2月3日</td><td>2月9日</td></tr>
<tr><td>第7週</td><td>2月10日</td><td>2月16日</td></tr>
<tr><td>第8週</td><td>2月17日</td><td>2月23日</td></tr>
<tr><td>第9週</td><td>2月24日</td><td>3月2日</td></tr>
<tr><td>第10週</td><td>3月3日</td><td>3月9日</td></tr>
<tr><td>第11週</td><td>3月10日</td><td>3月16日</td></tr>
<tr><td>第12週</td><td>3月17日</td><td>3月23日</td></tr>
<tr><td>第13週</td><td>3月24日</td><td>3月30日</td></tr>
<tr><td>第14週</td><td>3月31日</td><td>4月6日</td></tr>
<tr><td>第15週</td><td>4月7日</td><td>4月13日</td></tr>
<tr><td>第16週</td><td>4月14日</td><td>4月20日</td></tr>
<tr><td>第17週</td><td>4月21日</td><td>4月27日</td></tr>
<tr><td>第18週</td><td>4月28日</td><td>5月4日</td></tr>
<tr><td>第19週</td><td>5月5日</td><td>5月11日</td></tr>
<tr><td>第20週</td><td>5月12日</td><td>5月18日</td></tr>
<tr><td>第21週</td><td>5月19日</td><td>5月25日</td></tr>
<tr><td>第22週</td><td>5月26日</td><td>6月1日</td></tr>
<tr><td>第23週</td><td>6月2日</td><td>6月8日</td></tr>
<tr><td>第24週</td><td>6月9日</td><td>6月15日</td></tr>
<tr><td>第25週</td><td>6月16日</td><td>6月22日</td></tr>
<tr><td>第26週</td><td>6月23日</td><td>6月29日</td></tr>
<tr><td>第27週</td><td>6月30日</td><td>7月6日</td></tr>
<tr><td>第28週</td><td>7月7日</td><td>7月13日</td></tr>
<tr><td>第29週</td><td>7月14日</td><td>7月20日</td></tr>
<tr><td>第30週</td><td>7月21日</td><td>7月27日</td></tr>
<tr><td>第31週</td><td>7月28日</td><td>8月3日</td></tr>
<tr><td>第32週</td><td>8月4日</td><td>8月10日</td></tr>
<tr><td>第33週</td><td>8月11日</td><td>8月17日</td></tr>
<tr><td>第34週</td><td>8月18日</td><td>8月24日</td></tr>
<tr><td>第35週</td><td>8月25日</td><td>8月31日</td></tr>
<tr><td>第36週</td><td>9月1日</td><td>9月7日</td></tr>
<tr><td>第37週</td><td>9月8日</td><td>9月14日</td></tr>
<tr><td>第38週</td><td>9月15日</td><td>9月21日</td></tr>
<tr><td>第39週</td><td>9月22日</td><td>9月28日</td></tr>
<tr><td>第40週</td><td>9月29日</td><td>10月5日</td></tr>
<tr><td>第41週</td><td>10月6日</td><td>10月12日</td></tr>
<tr><td>第42週</td><td>10月13日</td><td>10月19日</td></tr>
<tr><td>第43週</td><td>10月20日</td><td>10月26日</td></tr>
<tr><td>第44週</td><td>10月27日</td><td>11月2日</td></tr>
<tr><td>第45週</td><td>11月3日</td><td>11月9日</td></tr>
<tr><td>第46週</td><td>11月10日</td><td>11月16日</td></tr>
<tr><td>第47週</td><td>11月17日</td><td>11月23日</td></tr>
<tr><td>第48週</td><td>11月24日</td><td>11月30日</td></tr>
<tr><td>第49週</td><td>12月1日</td><td>12月7日</td></tr>
<tr><td>第50週</td><td>12月8日</td><td>12月14日</td></tr>
<tr><td>第51週</td><td>12月15日</td><td>12月21日</td></tr>
<tr><td>第52週</td><td>12月22日</td><td>12月28日</td></tr>
</table>`
      },
      {
        h2: '2025年の主要な日付と週番号',
        body: '<p>計画に役立つ参照表：主要な固定日付はどのISO週に当たるか？</p>',
        table: `<table>
<tr><th>日付</th><th>曜日</th><th>ISO週</th></tr>
<tr><td>2025年1月1日</td><td>水曜日</td><td>第1週</td></tr>
<tr><td>2025年2月14日</td><td>金曜日</td><td>第7週</td></tr>
<tr><td>2025年3月20日（春分）</td><td>木曜日</td><td>第12週</td></tr>
<tr><td>2025年6月21日（夏至）</td><td>土曜日</td><td>第25週</td></tr>
<tr><td>2025年9月22日（秋分）</td><td>月曜日</td><td>第39週</td></tr>
<tr><td>2025年10月31日</td><td>金曜日</td><td>第44週</td></tr>
<tr><td>2025年12月21日（冬至）</td><td>日曜日</td><td>第51週</td></tr>
<tr><td>2025年12月25日</td><td>木曜日</td><td>第52週</td></tr>
<tr><td>2025年12月31日</td><td>水曜日</td><td>2026年第1週</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '2025年1月1日は何週目ですか？', a: '2025年1月1日はISO第1週に属します。第1週は2024年12月30日（月曜日）に始まりました。' },
      { q: '2025年のクリスマスは何週目ですか？', a: '2025年12月25日（木曜日）はISO第52週です。' },
      { q: '2025年12月31日は何週目ですか？', a: '2025年12月31日（水曜日）は2026年のISO第1週に属します — 2025年12月末の日は2026年の第1週に入ります。' },
      { q: '2025年は何週ありますか？', a: '2025年は52週のISOです。2025年の最終週（第52週）は2025年12月28日（日曜日）に終わります。' },
    ],
    pillar: { href: '/week-number/', label: '今日は何週目ですか？' },
    related: [
      { href: '/ja/iso-shu-bango-kaisetsu/', label: 'ISO週番号の解説' },
      { href: '/ja/ichi-nen-no-shu-su/', label: '1年は何週ですか？' },
      { href: '/ja/tsuki-goto-no-nichi-su/', label: '各月の日数' },
    ],
  },
  ko: {
    title: '2025년 주 번호 캘린더 — 시작일·종료일 포함 완전 캘린더',
    metaDesc: '2025년 전체 주 번호 캘린더. ISO 52주 전체를 시작일(월요일)과 종료일(일요일)과 함께 확인하세요. 계획 및 일정 수립을 위한 쉬운 참고 자료.',
    kicker: '주 번호 참고',
    h1: '2025년 주 번호 — 전체 캘린더',
    intro: '2025년의 ISO 주 번호 완전 캘린더입니다. 52주 전체가 시작일(월요일)과 종료일(일요일)과 함께 나열되어 있습니다. 2025년 1주차는 2024년 12월 30일 월요일에 시작되었습니다.',
    sections: [
      {
        h2: '2025년 주 번호 — 전체 52주',
        body: '<p>각 행은 ISO 주 번호, 시작하는 월요일, 끝나는 일요일을 보여줍니다.</p>',
        table: `<table>
<tr><th>주차</th><th>시작(월)</th><th>종료(일)</th></tr>
<tr><td>1주</td><td>2024년 12월 30일</td><td>2025년 1월 5일</td></tr>
<tr><td>2주</td><td>1월 6일</td><td>1월 12일</td></tr>
<tr><td>3주</td><td>1월 13일</td><td>1월 19일</td></tr>
<tr><td>4주</td><td>1월 20일</td><td>1월 26일</td></tr>
<tr><td>5주</td><td>1월 27일</td><td>2월 2일</td></tr>
<tr><td>6주</td><td>2월 3일</td><td>2월 9일</td></tr>
<tr><td>7주</td><td>2월 10일</td><td>2월 16일</td></tr>
<tr><td>8주</td><td>2월 17일</td><td>2월 23일</td></tr>
<tr><td>9주</td><td>2월 24일</td><td>3월 2일</td></tr>
<tr><td>10주</td><td>3월 3일</td><td>3월 9일</td></tr>
<tr><td>11주</td><td>3월 10일</td><td>3월 16일</td></tr>
<tr><td>12주</td><td>3월 17일</td><td>3월 23일</td></tr>
<tr><td>13주</td><td>3월 24일</td><td>3월 30일</td></tr>
<tr><td>14주</td><td>3월 31일</td><td>4월 6일</td></tr>
<tr><td>15주</td><td>4월 7일</td><td>4월 13일</td></tr>
<tr><td>16주</td><td>4월 14일</td><td>4월 20일</td></tr>
<tr><td>17주</td><td>4월 21일</td><td>4월 27일</td></tr>
<tr><td>18주</td><td>4월 28일</td><td>5월 4일</td></tr>
<tr><td>19주</td><td>5월 5일</td><td>5월 11일</td></tr>
<tr><td>20주</td><td>5월 12일</td><td>5월 18일</td></tr>
<tr><td>21주</td><td>5월 19일</td><td>5월 25일</td></tr>
<tr><td>22주</td><td>5월 26일</td><td>6월 1일</td></tr>
<tr><td>23주</td><td>6월 2일</td><td>6월 8일</td></tr>
<tr><td>24주</td><td>6월 9일</td><td>6월 15일</td></tr>
<tr><td>25주</td><td>6월 16일</td><td>6월 22일</td></tr>
<tr><td>26주</td><td>6월 23일</td><td>6월 29일</td></tr>
<tr><td>27주</td><td>6월 30일</td><td>7월 6일</td></tr>
<tr><td>28주</td><td>7월 7일</td><td>7월 13일</td></tr>
<tr><td>29주</td><td>7월 14일</td><td>7월 20일</td></tr>
<tr><td>30주</td><td>7월 21일</td><td>7월 27일</td></tr>
<tr><td>31주</td><td>7월 28일</td><td>8월 3일</td></tr>
<tr><td>32주</td><td>8월 4일</td><td>8월 10일</td></tr>
<tr><td>33주</td><td>8월 11일</td><td>8월 17일</td></tr>
<tr><td>34주</td><td>8월 18일</td><td>8월 24일</td></tr>
<tr><td>35주</td><td>8월 25일</td><td>8월 31일</td></tr>
<tr><td>36주</td><td>9월 1일</td><td>9월 7일</td></tr>
<tr><td>37주</td><td>9월 8일</td><td>9월 14일</td></tr>
<tr><td>38주</td><td>9월 15일</td><td>9월 21일</td></tr>
<tr><td>39주</td><td>9월 22일</td><td>9월 28일</td></tr>
<tr><td>40주</td><td>9월 29일</td><td>10월 5일</td></tr>
<tr><td>41주</td><td>10월 6일</td><td>10월 12일</td></tr>
<tr><td>42주</td><td>10월 13일</td><td>10월 19일</td></tr>
<tr><td>43주</td><td>10월 20일</td><td>10월 26일</td></tr>
<tr><td>44주</td><td>10월 27일</td><td>11월 2일</td></tr>
<tr><td>45주</td><td>11월 3일</td><td>11월 9일</td></tr>
<tr><td>46주</td><td>11월 10일</td><td>11월 16일</td></tr>
<tr><td>47주</td><td>11월 17일</td><td>11월 23일</td></tr>
<tr><td>48주</td><td>11월 24일</td><td>11월 30일</td></tr>
<tr><td>49주</td><td>12월 1일</td><td>12월 7일</td></tr>
<tr><td>50주</td><td>12월 8일</td><td>12월 14일</td></tr>
<tr><td>51주</td><td>12월 15일</td><td>12월 21일</td></tr>
<tr><td>52주</td><td>12월 22일</td><td>12월 28일</td></tr>
</table>`
      },
      {
        h2: '2025년 주요 날짜와 주 번호',
        body: '<p>계획을 위한 유용한 참고 자료: 주요 고정 날짜는 어느 ISO 주에 해당하나요?</p>',
        table: `<table>
<tr><th>날짜</th><th>요일</th><th>ISO 주</th></tr>
<tr><td>2025년 1월 1일</td><td>수요일</td><td>1주</td></tr>
<tr><td>2025년 2월 14일</td><td>금요일</td><td>7주</td></tr>
<tr><td>2025년 3월 20일 (춘분)</td><td>목요일</td><td>12주</td></tr>
<tr><td>2025년 6월 21일 (하지)</td><td>토요일</td><td>25주</td></tr>
<tr><td>2025년 9월 22일 (추분)</td><td>월요일</td><td>39주</td></tr>
<tr><td>2025년 10월 31일</td><td>금요일</td><td>44주</td></tr>
<tr><td>2025년 12월 21일 (동지)</td><td>일요일</td><td>51주</td></tr>
<tr><td>2025년 12월 25일</td><td>목요일</td><td>52주</td></tr>
<tr><td>2025년 12월 31일</td><td>수요일</td><td>2026년 1주</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '2025년 1월 1일은 몇 주차인가요?', a: '2025년 1월 1일은 2025년 ISO 1주차에 속합니다. 1주차는 2024년 12월 30일 월요일에 시작되었습니다.' },
      { q: '2025년 크리스마스는 몇 주차인가요?', a: '2025년 12월 25일(목요일)은 2025년 ISO 52주차입니다.' },
      { q: '2025년 12월 31일은 몇 주차인가요?', a: '2025년 12월 31일(수요일)은 2026년 ISO 1주차입니다 — 2025년 12월 말일은 2026년 첫 번째 주에 속합니다.' },
      { q: '2025년은 몇 주인가요?', a: '2025년은 ISO 52주입니다. 2025년 마지막 주(52주)는 2025년 12월 28일 일요일에 끝납니다.' },
    ],
    pillar: { href: '/week-number/', label: '오늘은 몇 주차인가요?' },
    related: [
      { href: '/ko/iso-ju-beon-ho-seol-myeong/', label: 'ISO 주 번호 설명' },
      { href: '/ko/il-nyeon-ui-ju-su/', label: '1년은 몇 주인가요?' },
      { href: '/ko/wol-byeol-il-su/', label: '월별 일수' },
    ],
  },
  nl: {
    title: 'Weeknummers 2025 — Volledige Kalender met Begin- en Einddatums',
    metaDesc: 'Volledige weeknummerkalender voor 2025. Alle 52 ISO-weken met startdatum (maandag) en einddatum (zondag). Handig overzicht voor planning en scheduling.',
    kicker: 'WEEKNUMMER REFERENTIE',
    h1: 'Weeknummers 2025 — Volledige Kalender',
    intro: 'Hier is de volledige ISO weeknummerkalender voor 2025. Alle 52 weken zijn vermeld met hun startdatum (maandag) en einddatum (zondag). Week 1 van 2025 begon op maandag 30 december 2024.',
    sections: [
      {
        h2: 'Weeknummers 2025 — alle 52 weken',
        body: '<p>Elke rij toont het ISO weeknummer, de maandag waarop het begint en de zondag waarop het eindigt.</p>',
        table: `<table>
<tr><th>Week</th><th>Start (maandag)</th><th>Einde (zondag)</th></tr>
<tr><td>W01</td><td>30 dec. 2024</td><td>5 jan. 2025</td></tr>
<tr><td>W02</td><td>6 jan.</td><td>12 jan.</td></tr>
<tr><td>W03</td><td>13 jan.</td><td>19 jan.</td></tr>
<tr><td>W04</td><td>20 jan.</td><td>26 jan.</td></tr>
<tr><td>W05</td><td>27 jan.</td><td>2 feb.</td></tr>
<tr><td>W06</td><td>3 feb.</td><td>9 feb.</td></tr>
<tr><td>W07</td><td>10 feb.</td><td>16 feb.</td></tr>
<tr><td>W08</td><td>17 feb.</td><td>23 feb.</td></tr>
<tr><td>W09</td><td>24 feb.</td><td>2 mrt.</td></tr>
<tr><td>W10</td><td>3 mrt.</td><td>9 mrt.</td></tr>
<tr><td>W11</td><td>10 mrt.</td><td>16 mrt.</td></tr>
<tr><td>W12</td><td>17 mrt.</td><td>23 mrt.</td></tr>
<tr><td>W13</td><td>24 mrt.</td><td>30 mrt.</td></tr>
<tr><td>W14</td><td>31 mrt.</td><td>6 apr.</td></tr>
<tr><td>W15</td><td>7 apr.</td><td>13 apr.</td></tr>
<tr><td>W16</td><td>14 apr.</td><td>20 apr.</td></tr>
<tr><td>W17</td><td>21 apr.</td><td>27 apr.</td></tr>
<tr><td>W18</td><td>28 apr.</td><td>4 mei</td></tr>
<tr><td>W19</td><td>5 mei</td><td>11 mei</td></tr>
<tr><td>W20</td><td>12 mei</td><td>18 mei</td></tr>
<tr><td>W21</td><td>19 mei</td><td>25 mei</td></tr>
<tr><td>W22</td><td>26 mei</td><td>1 jun.</td></tr>
<tr><td>W23</td><td>2 jun.</td><td>8 jun.</td></tr>
<tr><td>W24</td><td>9 jun.</td><td>15 jun.</td></tr>
<tr><td>W25</td><td>16 jun.</td><td>22 jun.</td></tr>
<tr><td>W26</td><td>23 jun.</td><td>29 jun.</td></tr>
<tr><td>W27</td><td>30 jun.</td><td>6 jul.</td></tr>
<tr><td>W28</td><td>7 jul.</td><td>13 jul.</td></tr>
<tr><td>W29</td><td>14 jul.</td><td>20 jul.</td></tr>
<tr><td>W30</td><td>21 jul.</td><td>27 jul.</td></tr>
<tr><td>W31</td><td>28 jul.</td><td>3 aug.</td></tr>
<tr><td>W32</td><td>4 aug.</td><td>10 aug.</td></tr>
<tr><td>W33</td><td>11 aug.</td><td>17 aug.</td></tr>
<tr><td>W34</td><td>18 aug.</td><td>24 aug.</td></tr>
<tr><td>W35</td><td>25 aug.</td><td>31 aug.</td></tr>
<tr><td>W36</td><td>1 sep.</td><td>7 sep.</td></tr>
<tr><td>W37</td><td>8 sep.</td><td>14 sep.</td></tr>
<tr><td>W38</td><td>15 sep.</td><td>21 sep.</td></tr>
<tr><td>W39</td><td>22 sep.</td><td>28 sep.</td></tr>
<tr><td>W40</td><td>29 sep.</td><td>5 okt.</td></tr>
<tr><td>W41</td><td>6 okt.</td><td>12 okt.</td></tr>
<tr><td>W42</td><td>13 okt.</td><td>19 okt.</td></tr>
<tr><td>W43</td><td>20 okt.</td><td>26 okt.</td></tr>
<tr><td>W44</td><td>27 okt.</td><td>2 nov.</td></tr>
<tr><td>W45</td><td>3 nov.</td><td>9 nov.</td></tr>
<tr><td>W46</td><td>10 nov.</td><td>16 nov.</td></tr>
<tr><td>W47</td><td>17 nov.</td><td>23 nov.</td></tr>
<tr><td>W48</td><td>24 nov.</td><td>30 nov.</td></tr>
<tr><td>W49</td><td>1 dec.</td><td>7 dec.</td></tr>
<tr><td>W50</td><td>8 dec.</td><td>14 dec.</td></tr>
<tr><td>W51</td><td>15 dec.</td><td>21 dec.</td></tr>
<tr><td>W52</td><td>22 dec.</td><td>28 dec.</td></tr>
</table>`
      },
      {
        h2: 'Belangrijke data in 2025 per weeknummer',
        body: '<p>Handig overzicht voor planning: in welke ISO-week vallen de belangrijkste vaste datums?</p>',
        table: `<table>
<tr><th>Datum</th><th>Dag</th><th>ISO-week</th></tr>
<tr><td>1 januari 2025</td><td>Woensdag</td><td>W01</td></tr>
<tr><td>14 februari 2025</td><td>Vrijdag</td><td>W07</td></tr>
<tr><td>20 maart 2025 (lente-equinox)</td><td>Donderdag</td><td>W12</td></tr>
<tr><td>21 juni 2025 (zomerzonnewende)</td><td>Zaterdag</td><td>W25</td></tr>
<tr><td>22 september 2025 (herfst-equinox)</td><td>Maandag</td><td>W39</td></tr>
<tr><td>31 oktober 2025</td><td>Vrijdag</td><td>W44</td></tr>
<tr><td>21 december 2025 (winterterzonnewende)</td><td>Zondag</td><td>W51</td></tr>
<tr><td>25 december 2025</td><td>Donderdag</td><td>W52</td></tr>
<tr><td>31 december 2025</td><td>Woensdag</td><td>W01 van 2026</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'In welke week valt 1 januari 2025?', a: '1 januari 2025 valt in ISO-week 1 van 2025. Week 1 begon op maandag 30 december 2024.' },
      { q: 'In welke week valt Kerstmis 2025?', a: '25 december 2025 (donderdag) valt in ISO-week 52 van 2025.' },
      { q: 'In welke week valt 31 december 2025?', a: '31 december 2025 (woensdag) valt in ISO-week 1 van 2026 — de laatste dagen van december 2025 behoren tot de eerste week van 2026.' },
      { q: 'Hoeveel weken heeft 2025?', a: '2025 heeft 52 ISO-weken. De laatste week van 2025 (W52) eindigt op zondag 28 december 2025.' },
    ],
    pillar: { href: '/week-number/', label: 'Welk weeknummer is het vandaag?' },
    related: [
      { href: '/nl/iso-weeknummer-uitgelegd/', label: 'ISO weeknummer uitgelegd' },
      { href: '/nl/hoeveel-weken-heeft-een-jaar/', label: 'Hoeveel weken heeft een jaar?' },
      { href: '/nl/hoeveel-dagen-heeft-elke-maand/', label: 'Dagen in elke maand' },
    ],
  },
};

// ── Article 3: what-week-number-is-it ─────────────────────────
T['what-week-number-is-it'] = {
  en: {
    title: 'What Week Number Is It? — How to Find the Current Week',
    metaDesc: 'Find out what week number it is today. How to calculate the current ISO week number yourself, plus quick reference for 2025 and 2026.',
    kicker: 'WEEK NUMBER GUIDE',
    h1: 'What Week Number Is It?',
    intro: 'To find the current week number, use the week number calculator on this site — it shows the ISO 8601 week number updated in real time. You can also calculate it by hand using the rules below.',
    sections: [
      {
        h2: 'How to find the week number of any date',
        body: `<p>The ISO week number of any date can be found in 3 steps:</p>
<ol>
<li>Find the Thursday of the same week as your date (Monday = start of week)</li>
<li>Count which Thursday it is in the year — that is the week number</li>
<li>If the Thursday falls in January of the next year, the week belongs to the next year</li>
</ol>
<p><strong>Example:</strong> What week is April 10, 2026?<br>
April 10, 2026 is a Friday. The Thursday of that week is April 9. April 9 is the 99th day of 2026 → Thursday number: ⌈99/7⌉ = 15. <strong>Week 15</strong>.</p>`
      },
      {
        h2: 'Quick reference: first week of each month 2025–2026',
        body: '',
        table: `<table>
<tr><th>Month</th><th>First Monday</th><th>ISO Week</th><th>Year</th></tr>
<tr><td>January 2025</td><td>30 Dec 2024</td><td>W01</td><td>2025</td></tr>
<tr><td>February 2025</td><td>3 Feb</td><td>W06</td><td>2025</td></tr>
<tr><td>March 2025</td><td>3 Mar</td><td>W10</td><td>2025</td></tr>
<tr><td>April 2025</td><td>31 Mar</td><td>W14</td><td>2025</td></tr>
<tr><td>May 2025</td><td>5 May</td><td>W19</td><td>2025</td></tr>
<tr><td>June 2025</td><td>2 Jun</td><td>W23</td><td>2025</td></tr>
<tr><td>July 2025</td><td>30 Jun</td><td>W27</td><td>2025</td></tr>
<tr><td>August 2025</td><td>4 Aug</td><td>W32</td><td>2025</td></tr>
<tr><td>September 2025</td><td>1 Sep</td><td>W36</td><td>2025</td></tr>
<tr><td>October 2025</td><td>6 Oct</td><td>W41</td><td>2025</td></tr>
<tr><td>November 2025</td><td>3 Nov</td><td>W45</td><td>2025</td></tr>
<tr><td>December 2025</td><td>1 Dec</td><td>W49</td><td>2025</td></tr>
<tr><td>January 2026</td><td>29 Dec 2025</td><td>W01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'In Excel or Google Sheets',
        body: `<p>To get the ISO week number of any date cell (e.g. A1) in a spreadsheet:</p>
<ul>
<li><strong>Excel:</strong> <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google Sheets:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Both functions return the ISO 8601 week number directly.</p>`
      },
    ],
    faqs: [
      { q: 'What is the current week number?', a: 'Use the week number tool on this site for a live answer. As a reference: week 1 of 2026 starts on December 29, 2025.' },
      { q: 'How do I find the week number in Excel?', a: 'Use the ISOWEEKNUM function: =ISOWEEKNUM(A1) where A1 contains your date. This returns the ISO 8601 week number.' },
      { q: 'What week number is my birthday in 2026?', a: 'Enter your birthday into the week number calculator on this site and it will show you the ISO week number for any date.' },
      { q: 'Is week 1 always January 1?', a: 'No. ISO week 1 is the week containing January 4. January 1 can fall in week 52 or 53 of the previous year if it lands on a Friday, Saturday, or Sunday.' },
    ],
    pillar: { href: '/week-number/', label: 'Week Number Calculator — current week' },
    related: [
      { href: '/iso-week-number-explained/', label: 'ISO week number explained' },
      { href: '/week-numbers-2025-calendar/', label: 'Week numbers 2025 — full calendar' },
      { href: '/how-many-weeks-in-a-year/', label: 'How many weeks in a year?' },
    ],
  },
  fr: {
    title: 'Quel est le numéro de semaine ? — Comment trouver la semaine en cours',
    metaDesc: "Découvrez quel numéro de semaine nous sommes aujourd'hui. Comment calculer vous-même le numéro de semaine ISO actuel, plus une référence rapide pour 2025 et 2026.",
    kicker: 'GUIDE NUMÉRO DE SEMAINE',
    h1: 'Quel est le numéro de semaine ?',
    intro: "Pour trouver le numéro de semaine actuel, utilisez le calculateur de numéro de semaine sur ce site — il affiche le numéro de semaine ISO 8601 mis à jour en temps réel. Vous pouvez aussi le calculer à la main en suivant les règles ci-dessous.",
    sections: [
      {
        h2: 'Comment trouver le numéro de semaine de n\'importe quelle date',
        body: `<p>Le numéro de semaine ISO de n'importe quelle date peut être trouvé en 3 étapes :</p>
<ol>
<li>Trouvez le jeudi de la même semaine que votre date (lundi = début de semaine)</li>
<li>Comptez de quel jeudi il s'agit dans l'année — c'est le numéro de semaine</li>
<li>Si le jeudi tombe en janvier de l'année suivante, la semaine appartient à l'année suivante</li>
</ol>
<p><strong>Exemple :</strong> Dans quelle semaine se trouve le 10 avril 2026 ?<br>
Le 10 avril 2026 est un vendredi. Le jeudi de cette semaine est le 9 avril. Le 9 avril est le 99e jour de 2026 → numéro du jeudi : ⌈99/7⌉ = 15. <strong>Semaine 15</strong>.</p>`
      },
      {
        h2: 'Référence rapide : première semaine de chaque mois 2025–2026',
        body: '',
        table: `<table>
<tr><th>Mois</th><th>Premier lundi</th><th>Semaine ISO</th><th>Année</th></tr>
<tr><td>Janvier 2025</td><td>30 déc. 2024</td><td>S01</td><td>2025</td></tr>
<tr><td>Février 2025</td><td>3 fév.</td><td>S06</td><td>2025</td></tr>
<tr><td>Mars 2025</td><td>3 mar.</td><td>S10</td><td>2025</td></tr>
<tr><td>Avril 2025</td><td>31 mar.</td><td>S14</td><td>2025</td></tr>
<tr><td>Mai 2025</td><td>5 mai</td><td>S19</td><td>2025</td></tr>
<tr><td>Juin 2025</td><td>2 juin</td><td>S23</td><td>2025</td></tr>
<tr><td>Juillet 2025</td><td>30 juin</td><td>S27</td><td>2025</td></tr>
<tr><td>Août 2025</td><td>4 août</td><td>S32</td><td>2025</td></tr>
<tr><td>Septembre 2025</td><td>1 sep.</td><td>S36</td><td>2025</td></tr>
<tr><td>Octobre 2025</td><td>6 oct.</td><td>S41</td><td>2025</td></tr>
<tr><td>Novembre 2025</td><td>3 nov.</td><td>S45</td><td>2025</td></tr>
<tr><td>Décembre 2025</td><td>1 déc.</td><td>S49</td><td>2025</td></tr>
<tr><td>Janvier 2026</td><td>29 déc. 2025</td><td>S01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'Dans Excel ou Google Sheets',
        body: `<p>Pour obtenir le numéro de semaine ISO de n'importe quelle cellule de date (ex. A1) dans un tableur :</p>
<ul>
<li><strong>Excel :</strong> <code>=NO.SEMAINE.ISO(A1)</code> ou <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google Sheets :</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Ces fonctions retournent directement le numéro de semaine ISO 8601.</p>`
      },
    ],
    faqs: [
      { q: 'Quel est le numéro de semaine actuel ?', a: 'Utilisez l\'outil numéro de semaine sur ce site pour une réponse en direct. Pour référence : la semaine 1 de 2026 commence le 29 décembre 2025.' },
      { q: 'Comment trouver le numéro de semaine dans Excel ?', a: 'Utilisez la fonction ISOWEEKNUM : =ISOWEEKNUM(A1) où A1 contient votre date. Cela retourne le numéro de semaine ISO 8601.' },
      { q: 'Dans quelle semaine tombe mon anniversaire en 2026 ?', a: 'Entrez votre date d\'anniversaire dans le calculateur de numéro de semaine sur ce site et il vous indiquera le numéro de semaine ISO pour n\'importe quelle date.' },
      { q: 'La semaine 1 est-elle toujours le 1er janvier ?', a: 'Non. La semaine ISO 1 est la semaine contenant le 4 janvier. Le 1er janvier peut tomber dans la semaine 52 ou 53 de l\'année précédente s\'il tombe un vendredi, samedi ou dimanche.' },
    ],
    pillar: { href: '/week-number/', label: 'Calculateur de numéro de semaine — semaine actuelle' },
    related: [
      { href: '/iso-week-number-explained/', label: 'Numéro de semaine ISO expliqué' },
      { href: '/week-numbers-2025-calendar/', label: 'Numéros de semaine 2025 — calendrier complet' },
      { href: '/how-many-weeks-in-a-year/', label: 'Combien de semaines dans une année ?' },
    ],
  },
  es: {
    title: '¿Qué número de semana es? — Cómo encontrar la semana actual',
    metaDesc: 'Descubre qué número de semana es hoy. Cómo calcular por ti mismo el número de semana ISO actual, más referencia rápida para 2025 y 2026.',
    kicker: 'GUÍA NÚMERO DE SEMANA',
    h1: '¿Qué número de semana es?',
    intro: 'Para encontrar el número de semana actual, usa la calculadora de número de semana en este sitio — muestra el número de semana ISO 8601 actualizado en tiempo real. También puedes calcularlo a mano siguiendo las reglas a continuación.',
    sections: [
      {
        h2: 'Cómo encontrar el número de semana de cualquier fecha',
        body: `<p>El número de semana ISO de cualquier fecha se puede encontrar en 3 pasos:</p>
<ol>
<li>Encuentra el jueves de la misma semana que tu fecha (lunes = inicio de semana)</li>
<li>Cuenta qué jueves es en el año — ese es el número de semana</li>
<li>Si el jueves cae en enero del año siguiente, la semana pertenece al año siguiente</li>
</ol>
<p><strong>Ejemplo:</strong> ¿En qué semana está el 10 de abril de 2026?<br>
El 10 de abril de 2026 es viernes. El jueves de esa semana es el 9 de abril. El 9 de abril es el día 99 de 2026 → número de jueves: ⌈99/7⌉ = 15. <strong>Semana 15</strong>.</p>`
      },
      {
        h2: 'Referencia rápida: primera semana de cada mes 2025–2026',
        body: '',
        table: `<table>
<tr><th>Mes</th><th>Primer lunes</th><th>Semana ISO</th><th>Año</th></tr>
<tr><td>Enero 2025</td><td>30 dic. 2024</td><td>S01</td><td>2025</td></tr>
<tr><td>Febrero 2025</td><td>3 feb.</td><td>S06</td><td>2025</td></tr>
<tr><td>Marzo 2025</td><td>3 mar.</td><td>S10</td><td>2025</td></tr>
<tr><td>Abril 2025</td><td>31 mar.</td><td>S14</td><td>2025</td></tr>
<tr><td>Mayo 2025</td><td>5 may.</td><td>S19</td><td>2025</td></tr>
<tr><td>Junio 2025</td><td>2 jun.</td><td>S23</td><td>2025</td></tr>
<tr><td>Julio 2025</td><td>30 jun.</td><td>S27</td><td>2025</td></tr>
<tr><td>Agosto 2025</td><td>4 ago.</td><td>S32</td><td>2025</td></tr>
<tr><td>Septiembre 2025</td><td>1 sep.</td><td>S36</td><td>2025</td></tr>
<tr><td>Octubre 2025</td><td>6 oct.</td><td>S41</td><td>2025</td></tr>
<tr><td>Noviembre 2025</td><td>3 nov.</td><td>S45</td><td>2025</td></tr>
<tr><td>Diciembre 2025</td><td>1 dic.</td><td>S49</td><td>2025</td></tr>
<tr><td>Enero 2026</td><td>29 dic. 2025</td><td>S01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'En Excel o Google Sheets',
        body: `<p>Para obtener el número de semana ISO de cualquier celda de fecha (p. ej. A1) en una hoja de cálculo:</p>
<ul>
<li><strong>Excel:</strong> <code>=NUM.DE.SEMANA.ISO(A1)</code> o <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google Sheets:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Ambas funciones devuelven directamente el número de semana ISO 8601.</p>`
      },
    ],
    faqs: [
      { q: '¿Cuál es el número de semana actual?', a: 'Usa la herramienta de número de semana en este sitio para una respuesta en directo. Como referencia: la semana 1 de 2026 comienza el 29 de diciembre de 2025.' },
      { q: '¿Cómo encuentro el número de semana en Excel?', a: 'Usa la función ISOWEEKNUM: =ISOWEEKNUM(A1) donde A1 contiene tu fecha. Esto devuelve el número de semana ISO 8601.' },
      { q: '¿En qué número de semana cae mi cumpleaños en 2026?', a: 'Ingresa tu cumpleaños en la calculadora de número de semana en este sitio y te mostrará el número de semana ISO para cualquier fecha.' },
      { q: '¿La semana 1 siempre es el 1 de enero?', a: 'No. La semana ISO 1 es la semana que contiene el 4 de enero. El 1 de enero puede caer en la semana 52 o 53 del año anterior si cae en viernes, sábado o domingo.' },
    ],
    pillar: { href: '/week-number/', label: 'Calculadora de número de semana — semana actual' },
    related: [
      { href: '/iso-week-number-explained/', label: 'Número de semana ISO explicado' },
      { href: '/week-numbers-2025-calendar/', label: 'Números de semana 2025 — calendario completo' },
      { href: '/how-many-weeks-in-a-year/', label: '¿Cuántas semanas tiene un año?' },
    ],
  },
  pt: {
    title: "Qual é o Número da Semana? — Como Encontrar a Semana Atual",
    metaDesc: "Descubra qual é o número da semana hoje. Como calcular por si mesmo o número da semana ISO atual, mais referência rápida para 2025 e 2026.",
    kicker: 'GUIA NÚMERO DE SEMANA',
    h1: "Qual é o Número da Semana?",
    intro: "Para encontrar o número da semana atual, use a calculadora de número de semana neste site — ela mostra o número da semana ISO 8601 atualizado em tempo real. Você também pode calcular manualmente seguindo as regras abaixo.",
    sections: [
      {
        h2: "Como encontrar o número da semana de qualquer data",
        body: `<p>O número da semana ISO de qualquer data pode ser encontrado em 3 passos:</p>
<ol>
<li>Encontre a quinta-feira da mesma semana que a sua data (segunda = início da semana)</li>
<li>Conte qual quinta-feira é no ano — esse é o número da semana</li>
<li>Se a quinta-feira cair em janeiro do ano seguinte, a semana pertence ao ano seguinte</li>
</ol>
<p><strong>Exemplo:</strong> Em que semana está o dia 10 de abril de 2026?<br>
10 de abril de 2026 é sexta-feira. A quinta-feira dessa semana é 9 de abril. 9 de abril é o 99º dia de 2026 → número da quinta-feira: ⌈99/7⌉ = 15. <strong>Semana 15</strong>.</p>`
      },
      {
        h2: "Referência rápida: primeira semana de cada mês 2025–2026",
        body: '',
        table: `<table>
<tr><th>Mês</th><th>Primeira segunda</th><th>Semana ISO</th><th>Ano</th></tr>
<tr><td>Janeiro 2025</td><td>30 dez. 2024</td><td>S01</td><td>2025</td></tr>
<tr><td>Fevereiro 2025</td><td>3 fev.</td><td>S06</td><td>2025</td></tr>
<tr><td>Março 2025</td><td>3 mar.</td><td>S10</td><td>2025</td></tr>
<tr><td>Abril 2025</td><td>31 mar.</td><td>S14</td><td>2025</td></tr>
<tr><td>Maio 2025</td><td>5 mai.</td><td>S19</td><td>2025</td></tr>
<tr><td>Junho 2025</td><td>2 jun.</td><td>S23</td><td>2025</td></tr>
<tr><td>Julho 2025</td><td>30 jun.</td><td>S27</td><td>2025</td></tr>
<tr><td>Agosto 2025</td><td>4 ago.</td><td>S32</td><td>2025</td></tr>
<tr><td>Setembro 2025</td><td>1 set.</td><td>S36</td><td>2025</td></tr>
<tr><td>Outubro 2025</td><td>6 out.</td><td>S41</td><td>2025</td></tr>
<tr><td>Novembro 2025</td><td>3 nov.</td><td>S45</td><td>2025</td></tr>
<tr><td>Dezembro 2025</td><td>1 dez.</td><td>S49</td><td>2025</td></tr>
<tr><td>Janeiro 2026</td><td>29 dez. 2025</td><td>S01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: "No Excel ou Google Sheets",
        body: `<p>Para obter o número da semana ISO de qualquer célula de data (ex. A1) numa planilha:</p>
<ul>
<li><strong>Excel:</strong> <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google Sheets:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Ambas as funções retornam diretamente o número da semana ISO 8601.</p>`
      },
    ],
    faqs: [
      { q: "Qual é o número da semana atual?", a: "Use a ferramenta de número de semana neste site para uma resposta ao vivo. Como referência: a semana 1 de 2026 começa em 29 de dezembro de 2025." },
      { q: "Como encontro o número da semana no Excel?", a: "Use a função ISOWEEKNUM: =ISOWEEKNUM(A1) onde A1 contém a sua data. Isso retorna o número da semana ISO 8601." },
      { q: "Em que número de semana cai o meu aniversário em 2026?", a: "Insira a sua data de aniversário na calculadora de número de semana neste site e ela mostrará o número da semana ISO para qualquer data." },
      { q: "A semana 1 é sempre o 1 de janeiro?", a: "Não. A semana ISO 1 é a semana que contém o 4 de janeiro. O 1 de janeiro pode cair na semana 52 ou 53 do ano anterior se cair numa sexta, sábado ou domingo." },
    ],
    pillar: { href: '/week-number/', label: 'Calculadora de Número de Semana — semana atual' },
    related: [
      { href: '/pt/explicacao-numero-semana-iso/', label: 'Número de semana ISO explicado' },
      { href: '/pt/calendario-numeros-semana-2025/', label: 'Números de semana 2025 — calendário completo' },
      { href: '/pt/quantas-semanas-tem-um-ano/', label: 'Quantas semanas tem um ano?' },
    ],
  },
  de: {
    title: 'Welche Kalenderwoche ist heute? — Aktuelle Wochennummer finden',
    metaDesc: 'Herausfinden, welche Kalenderwoche heute ist. Wie man die aktuelle ISO-Wochennummer selbst berechnet, plus schnelle Referenz für 2025 und 2026.',
    kicker: 'LEITFADEN KALENDERWOCHE',
    h1: 'Welche Kalenderwoche ist heute?',
    intro: 'Um die aktuelle Kalenderwoche zu ermitteln, nutzen Sie den Kalenderwochen-Rechner auf dieser Website — er zeigt die ISO 8601 Wochennummer in Echtzeit an. Sie können sie auch manuell mit den untenstehenden Regeln berechnen.',
    sections: [
      {
        h2: 'Wie berechnet man die Wochennummer eines beliebigen Datums?',
        body: `<p>Die ISO-Wochennummer eines beliebigen Datums lässt sich in 3 Schritten ermitteln:</p>
<ol>
<li>Finden Sie den Donnerstag derselben Woche wie Ihr Datum (Montag = Wochenanfang)</li>
<li>Zählen Sie, der wievielte Donnerstag es im Jahr ist — das ist die Wochennummer</li>
<li>Fällt der Donnerstag in den Januar des nächsten Jahres, gehört die Woche zum nächsten Jahr</li>
</ol>
<p><strong>Beispiel:</strong> In welcher Woche liegt der 10. April 2026?<br>
Der 10. April 2026 ist ein Freitag. Der Donnerstag dieser Woche ist der 9. April. Der 9. April ist der 99. Tag des Jahres 2026 → Donnerstagnummer: ⌈99/7⌉ = 15. <strong>Woche 15</strong>.</p>`
      },
      {
        h2: 'Schnellreferenz: erste Woche jedes Monats 2025–2026',
        body: '',
        table: `<table>
<tr><th>Monat</th><th>Erster Montag</th><th>ISO-KW</th><th>Jahr</th></tr>
<tr><td>Januar 2025</td><td>30. Dez. 2024</td><td>KW01</td><td>2025</td></tr>
<tr><td>Februar 2025</td><td>3. Feb.</td><td>KW06</td><td>2025</td></tr>
<tr><td>März 2025</td><td>3. Mär.</td><td>KW10</td><td>2025</td></tr>
<tr><td>April 2025</td><td>31. Mär.</td><td>KW14</td><td>2025</td></tr>
<tr><td>Mai 2025</td><td>5. Mai</td><td>KW19</td><td>2025</td></tr>
<tr><td>Juni 2025</td><td>2. Jun.</td><td>KW23</td><td>2025</td></tr>
<tr><td>Juli 2025</td><td>30. Jun.</td><td>KW27</td><td>2025</td></tr>
<tr><td>August 2025</td><td>4. Aug.</td><td>KW32</td><td>2025</td></tr>
<tr><td>September 2025</td><td>1. Sep.</td><td>KW36</td><td>2025</td></tr>
<tr><td>Oktober 2025</td><td>6. Okt.</td><td>KW41</td><td>2025</td></tr>
<tr><td>November 2025</td><td>3. Nov.</td><td>KW45</td><td>2025</td></tr>
<tr><td>Dezember 2025</td><td>1. Dez.</td><td>KW49</td><td>2025</td></tr>
<tr><td>Januar 2026</td><td>29. Dez. 2025</td><td>KW01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'In Excel oder Google Sheets',
        body: `<p>Um die ISO-Wochennummer einer beliebigen Datumszelle (z. B. A1) in einer Tabellenkalkulation zu ermitteln:</p>
<ul>
<li><strong>Excel:</strong> <code>=ISOKALENDERWOCHE(A1)</code> oder <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google Sheets:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Beide Funktionen geben direkt die ISO 8601 Wochennummer zurück.</p>`
      },
    ],
    faqs: [
      { q: 'Was ist die aktuelle Kalenderwoche?', a: 'Nutzen Sie das Kalenderwochen-Tool auf dieser Website für eine Live-Antwort. Als Referenz: Woche 1 von 2026 beginnt am 29. Dezember 2025.' },
      { q: 'Wie finde ich die Wochennummer in Excel?', a: 'Verwenden Sie die Funktion ISOWEEKNUM: =ISOWEEKNUM(A1), wobei A1 Ihr Datum enthält. Das gibt die ISO 8601 Wochennummer zurück.' },
      { q: 'In welcher Woche liegt mein Geburtstag 2026?', a: 'Geben Sie Ihren Geburtstag in den Kalenderwochen-Rechner auf dieser Website ein und er zeigt Ihnen die ISO-Wochennummer für jedes Datum.' },
      { q: 'Ist Woche 1 immer der 1. Januar?', a: 'Nein. ISO-Woche 1 ist die Woche, die den 4. Januar enthält. Der 1. Januar kann in Woche 52 oder 53 des Vorjahres liegen, wenn er auf einen Freitag, Samstag oder Sonntag fällt.' },
    ],
    pillar: { href: '/week-number/', label: 'Kalenderwochen-Rechner — aktuelle Woche' },
    related: [
      { href: '/de/iso-kalenderwoche-erklaert/', label: 'ISO Kalenderwoche erklärt' },
      { href: '/de/kalenderwochen-2025/', label: 'Kalenderwochen 2025 — vollständiger Kalender' },
      { href: '/de/wie-viele-wochen-hat-ein-jahr/', label: 'Wie viele Wochen hat ein Jahr?' },
    ],
  },
  it: {
    title: "Che Numero di Settimana È? — Come Trovare la Settimana Corrente",
    metaDesc: "Scopri che numero di settimana è oggi. Come calcolare il numero di settimana ISO corrente da solo, più riferimento rapido per il 2025 e il 2026.",
    kicker: 'GUIDA NUMERO SETTIMANA',
    h1: "Che Numero di Settimana È?",
    intro: "Per trovare il numero di settimana corrente, usa il calcolatore di numero di settimana su questo sito — mostra il numero di settimana ISO 8601 aggiornato in tempo reale. Puoi anche calcolarlo a mano seguendo le regole seguenti.",
    sections: [
      {
        h2: "Come trovare il numero di settimana di qualsiasi data",
        body: `<p>Il numero di settimana ISO di qualsiasi data si trova in 3 passaggi:</p>
<ol>
<li>Trova il giovedì della stessa settimana della tua data (lunedì = inizio settimana)</li>
<li>Conta quale giovedì è nell'anno — quello è il numero di settimana</li>
<li>Se il giovedì cade in gennaio dell'anno successivo, la settimana appartiene all'anno successivo</li>
</ol>
<p><strong>Esempio:</strong> In quale settimana si trova il 10 aprile 2026?<br>
Il 10 aprile 2026 è un venerdì. Il giovedì di quella settimana è il 9 aprile. Il 9 aprile è il 99° giorno del 2026 → numero giovedì: ⌈99/7⌉ = 15. <strong>Settimana 15</strong>.</p>`
      },
      {
        h2: "Riferimento rapido: prima settimana di ogni mese 2025–2026",
        body: '',
        table: `<table>
<tr><th>Mese</th><th>Primo lunedì</th><th>Settimana ISO</th><th>Anno</th></tr>
<tr><td>Gennaio 2025</td><td>30 dic. 2024</td><td>S01</td><td>2025</td></tr>
<tr><td>Febbraio 2025</td><td>3 feb.</td><td>S06</td><td>2025</td></tr>
<tr><td>Marzo 2025</td><td>3 mar.</td><td>S10</td><td>2025</td></tr>
<tr><td>Aprile 2025</td><td>31 mar.</td><td>S14</td><td>2025</td></tr>
<tr><td>Maggio 2025</td><td>5 mag.</td><td>S19</td><td>2025</td></tr>
<tr><td>Giugno 2025</td><td>2 giu.</td><td>S23</td><td>2025</td></tr>
<tr><td>Luglio 2025</td><td>30 giu.</td><td>S27</td><td>2025</td></tr>
<tr><td>Agosto 2025</td><td>4 ago.</td><td>S32</td><td>2025</td></tr>
<tr><td>Settembre 2025</td><td>1 set.</td><td>S36</td><td>2025</td></tr>
<tr><td>Ottobre 2025</td><td>6 ott.</td><td>S41</td><td>2025</td></tr>
<tr><td>Novembre 2025</td><td>3 nov.</td><td>S45</td><td>2025</td></tr>
<tr><td>Dicembre 2025</td><td>1 dic.</td><td>S49</td><td>2025</td></tr>
<tr><td>Gennaio 2026</td><td>29 dic. 2025</td><td>S01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: "In Excel o Google Sheets",
        body: `<p>Per ottenere il numero di settimana ISO di qualsiasi cella data (es. A1) in un foglio di calcolo:</p>
<ul>
<li><strong>Excel:</strong> <code>=NUM.SETTIMANA.ISO(A1)</code> o <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google Sheets:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Entrambe le funzioni restituiscono direttamente il numero di settimana ISO 8601.</p>`
      },
    ],
    faqs: [
      { q: "Qual è il numero di settimana corrente?", a: "Usa lo strumento numero di settimana su questo sito per una risposta in tempo reale. Come riferimento: la settimana 1 del 2026 inizia il 29 dicembre 2025." },
      { q: "Come trovo il numero di settimana in Excel?", a: "Usa la funzione ISOWEEKNUM: =ISOWEEKNUM(A1) dove A1 contiene la tua data. Restituisce il numero di settimana ISO 8601." },
      { q: "In che numero di settimana cade il mio compleanno nel 2026?", a: "Inserisci il tuo compleanno nel calcolatore di numero di settimana su questo sito e ti mostrerà il numero di settimana ISO per qualsiasi data." },
      { q: "La settimana 1 è sempre il 1° gennaio?", a: "No. La settimana ISO 1 è la settimana che contiene il 4 gennaio. Il 1° gennaio può cadere nella settimana 52 o 53 dell'anno precedente se cade di venerdì, sabato o domenica." },
    ],
    pillar: { href: '/week-number/', label: 'Calcolatore Numero Settimana — settimana corrente' },
    related: [
      { href: '/it/numero-settimana-iso-spiegato/', label: 'Numero settimana ISO spiegato' },
      { href: '/it/calendario-numeri-settimana-2025/', label: 'Numeri settimana 2025 — calendario completo' },
      { href: '/it/quante-settimane-ha-un-anno/', label: 'Quante settimane ha un anno?' },
    ],
  },
  pl: {
    title: 'Który Tydzień Roku Jest Teraz? — Jak Znaleźć Bieżący Numer Tygodnia',
    metaDesc: 'Dowiedz się, który numer tygodnia jest dziś. Jak samodzielnie obliczyć bieżący numer tygodnia ISO, plus szybka referencja na 2025 i 2026.',
    kicker: 'PRZEWODNIK NUMER TYGODNIA',
    h1: 'Który Tydzień Roku Jest Teraz?',
    intro: 'Aby znaleźć bieżący numer tygodnia, skorzystaj z kalkulatora numeru tygodnia na tej stronie — pokazuje on numer tygodnia ISO 8601 aktualizowany w czasie rzeczywistym. Możesz też obliczyć go ręcznie, korzystając z poniższych zasad.',
    sections: [
      {
        h2: 'Jak znaleźć numer tygodnia dowolnej daty?',
        body: `<p>Numer tygodnia ISO dowolnej daty można znaleźć w 3 krokach:</p>
<ol>
<li>Znajdź czwartek tego samego tygodnia co Twoja data (poniedziałek = początek tygodnia)</li>
<li>Policz, który to czwartek w roku — to jest numer tygodnia</li>
<li>Jeśli czwartek przypada w styczniu następnego roku, tydzień należy do następnego roku</li>
</ol>
<p><strong>Przykład:</strong> W którym tygodniu jest 10 kwietnia 2026?<br>
10 kwietnia 2026 to piątek. Czwartek tego tygodnia to 9 kwietnia. 9 kwietnia to 99. dzień 2026 roku → numer czwartku: ⌈99/7⌉ = 15. <strong>Tydzień 15</strong>.</p>`
      },
      {
        h2: 'Szybka referencja: pierwszy tydzień każdego miesiąca 2025–2026',
        body: '',
        table: `<table>
<tr><th>Miesiąc</th><th>Pierwszy poniedziałek</th><th>Tydzień ISO</th><th>Rok</th></tr>
<tr><td>Styczeń 2025</td><td>30 gru. 2024</td><td>T01</td><td>2025</td></tr>
<tr><td>Luty 2025</td><td>3 lut.</td><td>T06</td><td>2025</td></tr>
<tr><td>Marzec 2025</td><td>3 mar.</td><td>T10</td><td>2025</td></tr>
<tr><td>Kwiecień 2025</td><td>31 mar.</td><td>T14</td><td>2025</td></tr>
<tr><td>Maj 2025</td><td>5 maj.</td><td>T19</td><td>2025</td></tr>
<tr><td>Czerwiec 2025</td><td>2 cze.</td><td>T23</td><td>2025</td></tr>
<tr><td>Lipiec 2025</td><td>30 cze.</td><td>T27</td><td>2025</td></tr>
<tr><td>Sierpień 2025</td><td>4 sie.</td><td>T32</td><td>2025</td></tr>
<tr><td>Wrzesień 2025</td><td>1 wrz.</td><td>T36</td><td>2025</td></tr>
<tr><td>Październik 2025</td><td>6 paź.</td><td>T41</td><td>2025</td></tr>
<tr><td>Listopad 2025</td><td>3 lis.</td><td>T45</td><td>2025</td></tr>
<tr><td>Grudzień 2025</td><td>1 gru.</td><td>T49</td><td>2025</td></tr>
<tr><td>Styczeń 2026</td><td>29 gru. 2025</td><td>T01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'W Excelu lub Arkuszach Google',
        body: `<p>Aby uzyskać numer tygodnia ISO dowolnej komórki z datą (np. A1) w arkuszu kalkulacyjnym:</p>
<ul>
<li><strong>Excel:</strong> <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Arkusze Google:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Obie funkcje zwracają bezpośrednio numer tygodnia ISO 8601.</p>`
      },
    ],
    faqs: [
      { q: 'Który numer tygodnia jest teraz?', a: 'Skorzystaj z narzędzia numerów tygodnia na tej stronie, aby uzyskać odpowiedź na żywo. Jako referencja: tydzień 1 roku 2026 zaczyna się 29 grudnia 2025.' },
      { q: 'Jak znaleźć numer tygodnia w Excelu?', a: 'Użyj funkcji ISOWEEKNUM: =ISOWEEKNUM(A1), gdzie A1 zawiera Twoją datę. Zwraca numer tygodnia ISO 8601.' },
      { q: 'W którym tygodniu wypada moje urodziny w 2026 roku?', a: 'Wpisz datę urodzin do kalkulatora numeru tygodnia na tej stronie, a pokaże on numer tygodnia ISO dla dowolnej daty.' },
      { q: 'Czy tydzień 1 zawsze zaczyna się 1 stycznia?', a: 'Nie. Tydzień ISO 1 to tydzień zawierający 4 stycznia. 1 stycznia może przypadać w tygodniu 52 lub 53 poprzedniego roku, jeśli przypada w piątek, sobotę lub niedzielę.' },
    ],
    pillar: { href: '/week-number/', label: 'Kalkulator Numeru Tygodnia — bieżący tydzień' },
    related: [
      { href: '/pl/numer-tygodnia-iso-wyjasniony/', label: 'Numer tygodnia ISO wyjaśniony' },
      { href: '/pl/kalendarz-numerow-tygodni-2025/', label: 'Numery tygodni 2025 — pełny kalendarz' },
      { href: '/pl/ile-tygodni-ma-rok/', label: 'Ile tygodni ma rok?' },
    ],
  },
  ja: {
    title: '今は何週目？ — 現在の週番号の調べ方',
    metaDesc: '今日が何週目かを調べる方法。現在のISO週番号を自分で計算する方法と、2025年・2026年のクイックリファレンスをご紹介します。',
    kicker: '週番号ガイド',
    h1: '今は何週目？',
    intro: '現在の週番号を調べるには、このサイトの週番号計算ツールをご利用ください — ISO 8601の週番号がリアルタイムで更新されます。下記のルールに従って手動で計算することもできます。',
    sections: [
      {
        h2: '任意の日付の週番号を調べる方法',
        body: `<p>任意の日付のISO週番号は3ステップで求められます：</p>
<ol>
<li>その日付と同じ週の木曜日を見つける（月曜日 = 週の始まり）</li>
<li>それがその年の何番目の木曜日かを数える — それが週番号</li>
<li>木曜日が翌年の1月に入る場合、その週は翌年に属する</li>
</ol>
<p><strong>例：</strong> 2026年4月10日は何週目か？<br>
2026年4月10日は金曜日です。その週の木曜日は4月9日。4月9日は2026年の第99日 → 木曜日の番号：⌈99/7⌉ = 15。<strong>第15週</strong>。</p>`
      },
      {
        h2: 'クイックリファレンス：2025〜2026年の各月の第1週',
        body: '',
        table: `<table>
<tr><th>月</th><th>最初の月曜日</th><th>ISO週</th><th>年</th></tr>
<tr><td>2025年1月</td><td>2024年12月30日</td><td>第1週</td><td>2025</td></tr>
<tr><td>2025年2月</td><td>2月3日</td><td>第6週</td><td>2025</td></tr>
<tr><td>2025年3月</td><td>3月3日</td><td>第10週</td><td>2025</td></tr>
<tr><td>2025年4月</td><td>3月31日</td><td>第14週</td><td>2025</td></tr>
<tr><td>2025年5月</td><td>5月5日</td><td>第19週</td><td>2025</td></tr>
<tr><td>2025年6月</td><td>6月2日</td><td>第23週</td><td>2025</td></tr>
<tr><td>2025年7月</td><td>6月30日</td><td>第27週</td><td>2025</td></tr>
<tr><td>2025年8月</td><td>8月4日</td><td>第32週</td><td>2025</td></tr>
<tr><td>2025年9月</td><td>9月1日</td><td>第36週</td><td>2025</td></tr>
<tr><td>2025年10月</td><td>10月6日</td><td>第41週</td><td>2025</td></tr>
<tr><td>2025年11月</td><td>11月3日</td><td>第45週</td><td>2025</td></tr>
<tr><td>2025年12月</td><td>12月1日</td><td>第49週</td><td>2025</td></tr>
<tr><td>2026年1月</td><td>2025年12月29日</td><td>第1週</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'ExcelまたはGoogleスプレッドシートで使う方法',
        body: `<p>スプレッドシートで任意の日付セル（例：A1）のISO週番号を取得するには：</p>
<ul>
<li><strong>Excel：</strong> <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Googleスプレッドシート：</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>どちらの関数もISO 8601の週番号を直接返します。</p>`
      },
    ],
    faqs: [
      { q: '現在の週番号は何ですか？', a: 'このサイトの週番号ツールでリアルタイムの答えを確認できます。参考として：2026年の第1週は2025年12月29日から始まります。' },
      { q: 'Excelで週番号を調べる方法は？', a: 'ISOWEEKNUM関数を使います：=ISOWEEKNUM(A1)（A1に日付が入力されている場合）。これがISO 8601の週番号を返します。' },
      { q: '2026年の誕生日は何週目ですか？', a: 'このサイトの週番号計算ツールに誕生日を入力すると、任意の日付のISO週番号が表示されます。' },
      { q: '第1週は常に1月1日から始まりますか？', a: 'いいえ。ISO第1週は1月4日を含む週です。1月1日が金曜日、土曜日、または日曜日の場合、前年の第52週または第53週に含まれることがあります。' },
    ],
    pillar: { href: '/week-number/', label: '週番号計算ツール — 今の週' },
    related: [
      { href: '/ja/iso-shu-bango-kaisetsu/', label: 'ISO週番号の解説' },
      { href: '/ja/2025-nen-shu-bango/', label: '2025年週番号 — 完全カレンダー' },
      { href: '/ja/ichi-nen-no-shu-su/', label: '1年は何週ですか？' },
    ],
  },
  ko: {
    title: '지금은 몇 주차인가요? — 현재 주 번호 찾는 방법',
    metaDesc: '오늘이 몇 주차인지 확인하세요. 현재 ISO 주 번호를 직접 계산하는 방법과 2025년 및 2026년 빠른 참고 자료를 제공합니다.',
    kicker: '주 번호 가이드',
    h1: '지금은 몇 주차인가요?',
    intro: '현재 주 번호를 찾으려면 이 사이트의 주 번호 계산기를 사용하세요 — ISO 8601 주 번호가 실시간으로 업데이트됩니다. 아래 규칙을 따라 직접 계산할 수도 있습니다.',
    sections: [
      {
        h2: '임의의 날짜의 주 번호를 찾는 방법',
        body: `<p>임의의 날짜의 ISO 주 번호는 3단계로 찾을 수 있습니다:</p>
<ol>
<li>해당 날짜와 같은 주의 목요일을 찾습니다 (월요일 = 주의 시작)</li>
<li>그것이 해당 연도의 몇 번째 목요일인지 세어봅니다 — 그것이 주 번호입니다</li>
<li>목요일이 다음 해 1월에 속하면, 그 주는 다음 해에 속합니다</li>
</ol>
<p><strong>예:</strong> 2026년 4월 10일은 몇 주차인가요?<br>
2026년 4월 10일은 금요일입니다. 그 주의 목요일은 4월 9일입니다. 4월 9일은 2026년의 99번째 날 → 목요일 번호: ⌈99/7⌉ = 15. <strong>15주차</strong>.</p>`
      },
      {
        h2: '빠른 참고: 2025–2026년 각 월의 첫 번째 주',
        body: '',
        table: `<table>
<tr><th>월</th><th>첫 번째 월요일</th><th>ISO 주</th><th>연도</th></tr>
<tr><td>2025년 1월</td><td>2024년 12월 30일</td><td>1주</td><td>2025</td></tr>
<tr><td>2025년 2월</td><td>2월 3일</td><td>6주</td><td>2025</td></tr>
<tr><td>2025년 3월</td><td>3월 3일</td><td>10주</td><td>2025</td></tr>
<tr><td>2025년 4월</td><td>3월 31일</td><td>14주</td><td>2025</td></tr>
<tr><td>2025년 5월</td><td>5월 5일</td><td>19주</td><td>2025</td></tr>
<tr><td>2025년 6월</td><td>6월 2일</td><td>23주</td><td>2025</td></tr>
<tr><td>2025년 7월</td><td>6월 30일</td><td>27주</td><td>2025</td></tr>
<tr><td>2025년 8월</td><td>8월 4일</td><td>32주</td><td>2025</td></tr>
<tr><td>2025년 9월</td><td>9월 1일</td><td>36주</td><td>2025</td></tr>
<tr><td>2025년 10월</td><td>10월 6일</td><td>41주</td><td>2025</td></tr>
<tr><td>2025년 11월</td><td>11월 3일</td><td>45주</td><td>2025</td></tr>
<tr><td>2025년 12월</td><td>12월 1일</td><td>49주</td><td>2025</td></tr>
<tr><td>2026년 1월</td><td>2025년 12월 29일</td><td>1주</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'Excel 또는 Google 스프레드시트에서',
        body: `<p>스프레드시트에서 임의의 날짜 셀(예: A1)의 ISO 주 번호를 구하려면:</p>
<ul>
<li><strong>Excel:</strong> <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google 스프레드시트:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>두 함수 모두 ISO 8601 주 번호를 직접 반환합니다.</p>`
      },
    ],
    faqs: [
      { q: '현재 주 번호는 무엇인가요?', a: '이 사이트의 주 번호 도구를 사용하면 실시간 답변을 얻을 수 있습니다. 참고로: 2026년 1주차는 2025년 12월 29일에 시작합니다.' },
      { q: 'Excel에서 주 번호를 찾는 방법은?', a: 'ISOWEEKNUM 함수를 사용하세요: =ISOWEEKNUM(A1), 여기서 A1은 날짜가 포함된 셀입니다. ISO 8601 주 번호를 반환합니다.' },
      { q: '2026년 내 생일은 몇 주차인가요?', a: '이 사이트의 주 번호 계산기에 생일을 입력하면 임의의 날짜의 ISO 주 번호를 알 수 있습니다.' },
      { q: '1주차는 항상 1월 1일인가요?', a: '아니요. ISO 1주차는 1월 4일이 포함된 주입니다. 1월 1일이 금요일, 토요일 또는 일요일이면 전년도 52주차 또는 53주차에 속할 수 있습니다.' },
    ],
    pillar: { href: '/week-number/', label: '주 번호 계산기 — 현재 주' },
    related: [
      { href: '/ko/iso-ju-beon-ho-seol-myeong/', label: 'ISO 주 번호 설명' },
      { href: '/ko/2025-nyeon-ju-beon-ho/', label: '2025년 주 번호 — 전체 캘린더' },
      { href: '/ko/il-nyeon-ui-ju-su/', label: '1년은 몇 주인가요?' },
    ],
  },
  nl: {
    title: 'Welk Weeknummer Is Het? — Hoe de Huidige Week te Vinden',
    metaDesc: 'Ontdek welk weeknummer het vandaag is. Hoe je zelf het huidige ISO weeknummer berekent, plus snelle referentie voor 2025 en 2026.',
    kicker: 'WEEKNUMMER GIDS',
    h1: 'Welk Weeknummer Is Het?',
    intro: 'Om het huidige weeknummer te vinden, gebruik je de weeknummerberekening op deze site — die toont het ISO 8601 weeknummer live bijgewerkt. Je kunt het ook zelf uitrekenen met de onderstaande regels.',
    sections: [
      {
        h2: 'Hoe vind je het weeknummer van een willekeurige datum?',
        body: `<p>Het ISO weeknummer van een willekeurige datum vind je in 3 stappen:</p>
<ol>
<li>Zoek de donderdag van dezelfde week als jouw datum (maandag = begin van de week)</li>
<li>Tel welke donderdag het is in het jaar — dat is het weeknummer</li>
<li>Als de donderdag in januari van het volgende jaar valt, behoort de week tot het volgende jaar</li>
</ol>
<p><strong>Voorbeeld:</strong> In welke week valt 10 april 2026?<br>
10 april 2026 is een vrijdag. De donderdag van die week is 9 april. 9 april is de 99e dag van 2026 → donderdagnummer: ⌈99/7⌉ = 15. <strong>Week 15</strong>.</p>`
      },
      {
        h2: 'Snelreferentie: eerste week van elke maand 2025–2026',
        body: '',
        table: `<table>
<tr><th>Maand</th><th>Eerste maandag</th><th>ISO-week</th><th>Jaar</th></tr>
<tr><td>Januari 2025</td><td>30 dec. 2024</td><td>W01</td><td>2025</td></tr>
<tr><td>Februari 2025</td><td>3 feb.</td><td>W06</td><td>2025</td></tr>
<tr><td>Maart 2025</td><td>3 mrt.</td><td>W10</td><td>2025</td></tr>
<tr><td>April 2025</td><td>31 mrt.</td><td>W14</td><td>2025</td></tr>
<tr><td>Mei 2025</td><td>5 mei</td><td>W19</td><td>2025</td></tr>
<tr><td>Juni 2025</td><td>2 jun.</td><td>W23</td><td>2025</td></tr>
<tr><td>Juli 2025</td><td>30 jun.</td><td>W27</td><td>2025</td></tr>
<tr><td>Augustus 2025</td><td>4 aug.</td><td>W32</td><td>2025</td></tr>
<tr><td>September 2025</td><td>1 sep.</td><td>W36</td><td>2025</td></tr>
<tr><td>Oktober 2025</td><td>6 okt.</td><td>W41</td><td>2025</td></tr>
<tr><td>November 2025</td><td>3 nov.</td><td>W45</td><td>2025</td></tr>
<tr><td>December 2025</td><td>1 dec.</td><td>W49</td><td>2025</td></tr>
<tr><td>Januari 2026</td><td>29 dec. 2025</td><td>W01</td><td>2026</td></tr>
</table>`
      },
      {
        h2: 'In Excel of Google Sheets',
        body: `<p>Om het ISO weeknummer van een willekeurige datumcel (bijv. A1) in een spreadsheet te vinden:</p>
<ul>
<li><strong>Excel:</strong> <code>=ISOWEEKNUM(A1)</code></li>
<li><strong>Google Sheets:</strong> <code>=ISOWEEKNUM(A1)</code></li>
</ul>
<p>Beide functies geven direct het ISO 8601 weeknummer terug.</p>`
      },
    ],
    faqs: [
      { q: 'Wat is het huidige weeknummer?', a: 'Gebruik de weeknummertool op deze site voor een live antwoord. Ter referentie: week 1 van 2026 begint op 29 december 2025.' },
      { q: 'Hoe vind ik het weeknummer in Excel?', a: 'Gebruik de functie ISOWEEKNUM: =ISOWEEKNUM(A1) waarbij A1 jouw datum bevat. Dit geeft het ISO 8601 weeknummer terug.' },
      { q: 'In welke week valt mijn verjaardag in 2026?', a: 'Voer je verjaardag in de weeknummerberekening op deze site in en die toont je het ISO weeknummer voor elke datum.' },
      { q: 'Is week 1 altijd 1 januari?', a: 'Nee. ISO week 1 is de week die 4 januari bevat. 1 januari kan in week 52 of 53 van het vorige jaar vallen als het een vrijdag, zaterdag of zondag is.' },
    ],
    pillar: { href: '/week-number/', label: 'Weeknummer Berekenen — huidige week' },
    related: [
      { href: '/nl/iso-weeknummer-uitgelegd/', label: 'ISO weeknummer uitgelegd' },
      { href: '/nl/weeknummers-2025-kalender/', label: 'Weeknummers 2025 — volledige kalender' },
      { href: '/nl/hoeveel-weken-heeft-een-jaar/', label: 'Hoeveel weken heeft een jaar?' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'iso-week-number-explained',  slugs: { en: 'iso-week-number-explained',  fr: 'fr/explication-numero-semaine-iso', es: 'es/explicacion-numero-semana-iso', pt: 'pt/explicacao-numero-semana-iso', de: 'de/iso-kalenderwoche-erklaert', it: 'it/numero-settimana-iso-spiegato', pl: 'pl/numer-tygodnia-iso-wyjasniony', ja: 'ja/iso-shu-bango-kaisetsu', ko: 'ko/iso-ju-beon-ho-seol-myeong', nl: 'nl/iso-weeknummer-uitgelegd' } },
    { id: 'week-numbers-2025-calendar', slugs: { en: 'week-numbers-2025-calendar', fr: 'fr/calendrier-numeros-semaine-2025', es: 'es/calendario-numeros-semana-2025', pt: 'pt/calendario-numeros-semana-2025', de: 'de/kalenderwochen-2025', it: 'it/calendario-numeri-settimana-2025', pl: 'pl/kalendarz-numerow-tygodni-2025', ja: 'ja/2025-nen-shu-bango', ko: 'ko/2025-nyeon-ju-beon-ho', nl: 'nl/weeknummers-2025-kalender' } },
    { id: 'what-week-number-is-it',     slugs: { en: 'what-week-number-is-it',     fr: 'fr/quel-est-le-numero-de-semaine',  es: 'es/que-numero-de-semana-es', pt: 'pt/qual-e-o-numero-da-semana', de: 'de/welche-kalenderwoche-ist-heute', it: 'it/che-numero-di-settimana-e', pl: 'pl/ktory-tydzien-roku-jest-teraz', ja: 'ja/ima-nan-shu-bango', ko: 'ko/hyeon-jae-myeot-jju-il-kka', nl: 'nl/welk-weeknummer-is-het' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
