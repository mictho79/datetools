'use strict';
const T = {};

// ── Article 1: what-day-of-the-week-was-i-born ───────────────
T['what-day-of-the-week-was-i-born'] = {
  en: {
    title: 'What Day of the Week Was I Born? — How to Find Out',
    metaDesc: 'How to find out what day of the week you were born. Includes a lookup table for birth years 1950–2010 and the formula to calculate it yourself.',
    kicker: 'DAY OF THE WEEK GUIDE',
    h1: 'What Day of the Week Was I Born?',
    intro: 'To find out what day of the week you were born, use the "What day is it?" calculator on this site — enter your birth date and it shows the day instantly. You can also use the lookup table below for a quick answer.',
    sections: [
      {
        h2: 'Lookup table: what day was January 1 in your birth year?',
        body: '<p>If you know what day January 1 fell on in your birth year, you can count forward to your birthday. The table below shows January 1 for years 1950–2010:</p>',
        table: `<table>
<tr><th>Year</th><th>Jan 1 day</th><th>Year</th><th>Jan 1 day</th><th>Year</th><th>Jan 1 day</th></tr>
<tr><td>1950</td><td>Sunday</td><td>1970</td><td>Thursday</td><td>1990</td><td>Monday</td></tr>
<tr><td>1952</td><td>Tuesday</td><td>1972</td><td>Saturday</td><td>1992</td><td>Wednesday</td></tr>
<tr><td>1954</td><td>Friday</td><td>1974</td><td>Tuesday</td><td>1994</td><td>Saturday</td></tr>
<tr><td>1956</td><td>Sunday</td><td>1976</td><td>Thursday</td><td>1996</td><td>Monday</td></tr>
<tr><td>1958</td><td>Wednesday</td><td>1978</td><td>Sunday</td><td>1998</td><td>Thursday</td></tr>
<tr><td>1960</td><td>Friday</td><td>1980</td><td>Tuesday</td><td>2000</td><td>Saturday</td></tr>
<tr><td>1962</td><td>Monday</td><td>1982</td><td>Friday</td><td>2002</td><td>Tuesday</td></tr>
<tr><td>1964</td><td>Wednesday</td><td>1984</td><td>Sunday</td><td>2004</td><td>Thursday</td></tr>
<tr><td>1966</td><td>Saturday</td><td>1986</td><td>Wednesday</td><td>2006</td><td>Sunday</td></tr>
<tr><td>1968</td><td>Monday</td><td>1988</td><td>Friday</td><td>2008</td><td>Tuesday</td></tr>
</table>`
      },
      {
        h2: 'How to calculate it by hand',
        body: `<p>You can calculate the day of any date using this formula:</p>
<ol>
<li>Take the last two digits of the year: <em>y</em></li>
<li>Add: <em>y</em> + ⌊<em>y</em>/4⌋ + day + month_code + century_code</li>
<li>Take the result mod 7: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat</li>
</ol>
<p>Month codes: Jan=1, Feb=4, Mar=4, Apr=0, May=2, Jun=5, Jul=0, Aug=3, Sep=6, Oct=1, Nov=4, Dec=6 (January/February use previous year). Century codes: 1900s=0, 2000s=6.</p>
<p><strong>Example:</strong> What day was July 20, 1969?<br>
y=69, ⌊69/4⌋=17, day=20, month_code(Jul)=0, century(1900s)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Sunday</strong> ✓</p>`
      },
      {
        h2: 'Fun facts about birth days',
        body: `<p>Statistically, births are not evenly distributed across days of the week:</p>
<ul>
<li><strong>Tuesday and Wednesday</strong> have the most births (scheduled C-sections and inductions)</li>
<li><strong>Saturday and Sunday</strong> have the fewest (fewer elective procedures on weekends)</li>
<li>Natural (unscheduled) births are roughly equal across all 7 days</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'What day of the week was I born if I was born on January 1, 2000?', a: 'January 1, 2000 was a Saturday.' },
      { q: 'What day of the week was I born if I was born on July 4, 1990?', a: 'July 4, 1990 was a Wednesday.' },
      { q: 'What day of the week was I born if I was born on December 25, 1985?', a: 'December 25, 1985 was a Wednesday.' },
      { q: 'Is there an app that tells me what day I was born?', a: 'Yes — use the "What day is it?" calculator on this site. Enter any date and it instantly returns the day of the week, including historical dates.' },
      { q: 'What is the most common birth day of the week?', a: 'Tuesday is typically the most common birth day in countries with many hospital-scheduled births, followed closely by Wednesday. Saturday and Sunday are the least common.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: 'What Day Is It Today? — calendar tool' },
    related: [
      { href: '/days-of-the-week-names-origin/', label: 'Days of the week: name origins' },
      { href: '/does-the-week-start-on-sunday-or-monday/', label: 'Does the week start on Sunday or Monday?' },
      { href: '/what-generation-am-i/', label: 'What generation am I?' },
    ],
  },
  fr: {
    title: "Quel jour de la semaine suis-je né ? — Comment le savoir",
    metaDesc: "Comment savoir quel jour de la semaine vous êtes né. Inclut un tableau de référence pour les années de naissance 1950–2010 et la formule pour le calculer vous-même.",
    kicker: 'GUIDE JOUR DE LA SEMAINE',
    h1: "Quel jour de la semaine suis-je né ?",
    intro: "Pour savoir quel jour de la semaine vous êtes né, utilisez la calculatrice « Quel jour est-on ? » sur ce site — entrez votre date de naissance et elle affiche le jour instantanément. Vous pouvez aussi utiliser le tableau ci-dessous pour une réponse rapide.",
    sections: [
      {
        h2: 'Tableau de référence : quel jour tombait le 1er janvier de votre année de naissance ?',
        body: '<p>Si vous savez quel jour tombait le 1er janvier de votre année de naissance, vous pouvez compter jusqu\'à votre anniversaire. Le tableau ci-dessous montre le 1er janvier pour les années 1950–2010 :</p>',
        table: `<table>
<tr><th>Année</th><th>1er janv.</th><th>Année</th><th>1er janv.</th><th>Année</th><th>1er janv.</th></tr>
<tr><td>1950</td><td>Dimanche</td><td>1970</td><td>Jeudi</td><td>1990</td><td>Lundi</td></tr>
<tr><td>1952</td><td>Mardi</td><td>1972</td><td>Samedi</td><td>1992</td><td>Mercredi</td></tr>
<tr><td>1954</td><td>Vendredi</td><td>1974</td><td>Mardi</td><td>1994</td><td>Samedi</td></tr>
<tr><td>1956</td><td>Dimanche</td><td>1976</td><td>Jeudi</td><td>1996</td><td>Lundi</td></tr>
<tr><td>1958</td><td>Mercredi</td><td>1978</td><td>Dimanche</td><td>1998</td><td>Jeudi</td></tr>
<tr><td>1960</td><td>Vendredi</td><td>1980</td><td>Mardi</td><td>2000</td><td>Samedi</td></tr>
<tr><td>1962</td><td>Lundi</td><td>1982</td><td>Vendredi</td><td>2002</td><td>Mardi</td></tr>
<tr><td>1964</td><td>Mercredi</td><td>1984</td><td>Dimanche</td><td>2004</td><td>Jeudi</td></tr>
<tr><td>1966</td><td>Samedi</td><td>1986</td><td>Mercredi</td><td>2006</td><td>Dimanche</td></tr>
<tr><td>1968</td><td>Lundi</td><td>1988</td><td>Vendredi</td><td>2008</td><td>Mardi</td></tr>
</table>`
      },
      {
        h2: 'Comment le calculer à la main',
        body: `<p>Vous pouvez calculer le jour de n'importe quelle date avec cette formule :</p>
<ol>
<li>Prenez les deux derniers chiffres de l'année : <em>y</em></li>
<li>Ajoutez : <em>y</em> + ⌊<em>y</em>/4⌋ + jour + code_mois + code_siècle</li>
<li>Prenez le résultat mod 7 : 0=Dim, 1=Lun, 2=Mar, 3=Mer, 4=Jeu, 5=Ven, 6=Sam</li>
</ol>
<p>Codes des mois : Jan=1, Fév=4, Mar=4, Avr=0, Mai=2, Juin=5, Juil=0, Août=3, Sep=6, Oct=1, Nov=4, Déc=6 (janvier/février utilisent l'année précédente). Codes du siècle : 1900=0, 2000=6.</p>
<p><strong>Exemple :</strong> Quel jour était le 20 juillet 1969 ?<br>
y=69, ⌊69/4⌋=17, jour=20, code_mois(Juil)=0, siècle(1900)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Dimanche</strong> ✓</p>`
      },
      {
        h2: 'Faits amusants sur les jours de naissance',
        body: `<p>Statistiquement, les naissances ne sont pas réparties uniformément sur les jours de la semaine :</p>
<ul>
<li><strong>Mardi et mercredi</strong> ont le plus de naissances (césariennes et déclenchements programmés)</li>
<li><strong>Samedi et dimanche</strong> en ont le moins (moins d'actes médicaux programmés le week-end)</li>
<li>Les naissances naturelles (non programmées) sont à peu près égales sur les 7 jours</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Quel jour de la semaine suis-je né si je suis né le 1er janvier 2000 ?', a: 'Le 1er janvier 2000 était un samedi.' },
      { q: 'Quel jour de la semaine suis-je né si je suis né le 4 juillet 1990 ?', a: 'Le 4 juillet 1990 était un mercredi.' },
      { q: 'Quel jour de la semaine suis-je né si je suis né le 25 décembre 1985 ?', a: 'Le 25 décembre 1985 était un mercredi.' },
      { q: "Existe-t-il une application qui me dit quel jour je suis né ?", a: 'Oui — utilisez la calculatrice « Quel jour est-on ? » sur ce site. Entrez n\'importe quelle date et elle retourne instantanément le jour de la semaine, y compris pour des dates historiques.' },
      { q: 'Quel est le jour de naissance le plus courant dans la semaine ?', a: 'Le mardi est généralement le jour de naissance le plus courant dans les pays avec de nombreuses naissances programmées à l\'hôpital, suivi de près par le mercredi. Le samedi et le dimanche sont les moins courants.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Quel jour est-on aujourd'hui ? — outil calendrier" },
    related: [
      { href: '/fr/origine-noms-jours-de-la-semaine/', label: 'Jours de la semaine : origines des noms' },
      { href: '/fr/la-semaine-commence-dimanche-ou-lundi/', label: 'La semaine commence-t-elle le dimanche ou le lundi ?' },
      { href: '/fr/quelle-generation-suis-je/', label: 'De quelle génération suis-je ?' },
    ],
  },
  es: {
    title: "¿Qué día de la semana nací? — Cómo averiguarlo",
    metaDesc: "Cómo saber en qué día de la semana naciste. Incluye una tabla de referencia para años de nacimiento 1950–2010 y la fórmula para calcularlo tú mismo.",
    kicker: 'GUÍA DÍA DE LA SEMANA',
    h1: "¿Qué día de la semana nací?",
    intro: "Para saber en qué día de la semana naciste, usa la calculadora «¿Qué día es hoy?» de este sitio — ingresa tu fecha de nacimiento y muestra el día al instante. También puedes usar la tabla de referencia a continuación para una respuesta rápida.",
    sections: [
      {
        h2: 'Tabla de referencia: ¿qué día cayó el 1 de enero de tu año de nacimiento?',
        body: '<p>Si sabes qué día cayó el 1 de enero de tu año de nacimiento, puedes contar hacia adelante hasta tu cumpleaños. La tabla a continuación muestra el 1 de enero para los años 1950–2010:</p>',
        table: `<table>
<tr><th>Año</th><th>1 ene.</th><th>Año</th><th>1 ene.</th><th>Año</th><th>1 ene.</th></tr>
<tr><td>1950</td><td>Domingo</td><td>1970</td><td>Jueves</td><td>1990</td><td>Lunes</td></tr>
<tr><td>1952</td><td>Martes</td><td>1972</td><td>Sábado</td><td>1992</td><td>Miércoles</td></tr>
<tr><td>1954</td><td>Viernes</td><td>1974</td><td>Martes</td><td>1994</td><td>Sábado</td></tr>
<tr><td>1956</td><td>Domingo</td><td>1976</td><td>Jueves</td><td>1996</td><td>Lunes</td></tr>
<tr><td>1958</td><td>Miércoles</td><td>1978</td><td>Domingo</td><td>1998</td><td>Jueves</td></tr>
<tr><td>1960</td><td>Viernes</td><td>1980</td><td>Martes</td><td>2000</td><td>Sábado</td></tr>
<tr><td>1962</td><td>Lunes</td><td>1982</td><td>Viernes</td><td>2002</td><td>Martes</td></tr>
<tr><td>1964</td><td>Miércoles</td><td>1984</td><td>Domingo</td><td>2004</td><td>Jueves</td></tr>
<tr><td>1966</td><td>Sábado</td><td>1986</td><td>Miércoles</td><td>2006</td><td>Domingo</td></tr>
<tr><td>1968</td><td>Lunes</td><td>1988</td><td>Viernes</td><td>2008</td><td>Martes</td></tr>
</table>`
      },
      {
        h2: 'Cómo calcularlo a mano',
        body: `<p>Puedes calcular el día de cualquier fecha usando esta fórmula:</p>
<ol>
<li>Toma los dos últimos dígitos del año: <em>y</em></li>
<li>Suma: <em>y</em> + ⌊<em>y</em>/4⌋ + día + código_mes + código_siglo</li>
<li>Toma el resultado mod 7: 0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb</li>
</ol>
<p>Códigos de mes: Ene=1, Feb=4, Mar=4, Abr=0, May=2, Jun=5, Jul=0, Ago=3, Sep=6, Oct=1, Nov=4, Dic=6 (enero/febrero usan el año anterior). Códigos de siglo: 1900=0, 2000=6.</p>
<p><strong>Ejemplo:</strong> ¿Qué día fue el 20 de julio de 1969?<br>
y=69, ⌊69/4⌋=17, día=20, código_mes(Jul)=0, siglo(1900)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Domingo</strong> ✓</p>`
      },
      {
        h2: 'Datos curiosos sobre los días de nacimiento',
        body: `<p>Estadísticamente, los nacimientos no están distribuidos uniformemente a lo largo de los días de la semana:</p>
<ul>
<li><strong>El martes y el miércoles</strong> tienen más nacimientos (cesáreas e inducciones programadas)</li>
<li><strong>El sábado y el domingo</strong> tienen menos (menos procedimientos electivos en fin de semana)</li>
<li>Los nacimientos naturales (no programados) son aproximadamente iguales en los 7 días</li>
</ul>`
      },
    ],
    faqs: [
      { q: '¿Qué día de la semana nací si nací el 1 de enero de 2000?', a: 'El 1 de enero de 2000 fue sábado.' },
      { q: '¿Qué día de la semana nací si nací el 4 de julio de 1990?', a: 'El 4 de julio de 1990 fue miércoles.' },
      { q: '¿Qué día de la semana nací si nací el 25 de diciembre de 1985?', a: 'El 25 de diciembre de 1985 fue miércoles.' },
      { q: "¿Existe una aplicación que me diga en qué día nací?", a: 'Sí — usa la calculadora «¿Qué día es hoy?» de este sitio. Ingresa cualquier fecha y devuelve al instante el día de la semana, incluyendo fechas históricas.' },
      { q: '¿Cuál es el día de la semana más común para nacer?', a: 'El martes es típicamente el día de nacimiento más común en países con muchos nacimientos programados en hospitales, seguido de cerca por el miércoles. El sábado y el domingo son los menos comunes.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: '¿Qué día es hoy? — herramienta de calendario' },
    related: [
      { href: '/es/origen-nombres-dias-semana/', label: 'Días de la semana: origen de los nombres' },
      { href: '/es/empieza-la-semana-el-domingo-o-el-lunes/', label: '¿La semana empieza el domingo o el lunes?' },
      { href: '/es/de-que-generacion-soy/', label: '¿De qué generación soy?' },
    ],
  },
  pt: {
    title: "Que dia da semana nasci? — Como descobrir",
    metaDesc: "Como saber em que dia da semana você nasceu. Inclui uma tabela de consulta para anos de nascimento 1950–2010 e a fórmula para calcular você mesmo.",
    kicker: 'GUIA DIA DA SEMANA',
    h1: "Que dia da semana nasci?",
    intro: "Para saber em que dia da semana você nasceu, use a calculadora «Que dia é hoje?» deste site — insira sua data de nascimento e ela mostra o dia instantaneamente. Você também pode usar a tabela abaixo para uma resposta rápida.",
    sections: [
      {
        h2: 'Tabela de consulta: que dia caiu o 1º de janeiro do seu ano de nascimento?',
        body: '<p>Se você sabe que dia caiu o 1º de janeiro do seu ano de nascimento, pode contar até o seu aniversário. A tabela abaixo mostra o 1º de janeiro para os anos 1950–2010:</p>',
        table: `<table>
<tr><th>Ano</th><th>1 jan.</th><th>Ano</th><th>1 jan.</th><th>Ano</th><th>1 jan.</th></tr>
<tr><td>1950</td><td>Domingo</td><td>1970</td><td>Quinta-feira</td><td>1990</td><td>Segunda-feira</td></tr>
<tr><td>1952</td><td>Terça-feira</td><td>1972</td><td>Sábado</td><td>1992</td><td>Quarta-feira</td></tr>
<tr><td>1954</td><td>Sexta-feira</td><td>1974</td><td>Terça-feira</td><td>1994</td><td>Sábado</td></tr>
<tr><td>1956</td><td>Domingo</td><td>1976</td><td>Quinta-feira</td><td>1996</td><td>Segunda-feira</td></tr>
<tr><td>1958</td><td>Quarta-feira</td><td>1978</td><td>Domingo</td><td>1998</td><td>Quinta-feira</td></tr>
<tr><td>1960</td><td>Sexta-feira</td><td>1980</td><td>Terça-feira</td><td>2000</td><td>Sábado</td></tr>
<tr><td>1962</td><td>Segunda-feira</td><td>1982</td><td>Sexta-feira</td><td>2002</td><td>Terça-feira</td></tr>
<tr><td>1964</td><td>Quarta-feira</td><td>1984</td><td>Domingo</td><td>2004</td><td>Quinta-feira</td></tr>
<tr><td>1966</td><td>Sábado</td><td>1986</td><td>Quarta-feira</td><td>2006</td><td>Domingo</td></tr>
<tr><td>1968</td><td>Segunda-feira</td><td>1988</td><td>Sexta-feira</td><td>2008</td><td>Terça-feira</td></tr>
</table>`
      },
      {
        h2: 'Como calcular manualmente',
        body: `<p>Você pode calcular o dia de qualquer data usando esta fórmula:</p>
<ol>
<li>Pegue os dois últimos dígitos do ano: <em>y</em></li>
<li>Some: <em>y</em> + ⌊<em>y</em>/4⌋ + dia + código_mês + código_século</li>
<li>Pegue o resultado mod 7: 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sáb</li>
</ol>
<p>Códigos dos meses: Jan=1, Fev=4, Mar=4, Abr=0, Mai=2, Jun=5, Jul=0, Ago=3, Set=6, Out=1, Nov=4, Dez=6 (janeiro/fevereiro usam o ano anterior). Códigos do século: 1900=0, 2000=6.</p>
<p><strong>Exemplo:</strong> Que dia foi 20 de julho de 1969?<br>
y=69, ⌊69/4⌋=17, dia=20, código_mês(Jul)=0, século(1900)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Domingo</strong> ✓</p>`
      },
      {
        h2: 'Curiosidades sobre os dias de nascimento',
        body: `<p>Estatisticamente, os nascimentos não são distribuídos uniformemente pelos dias da semana:</p>
<ul>
<li><strong>Terça e quarta-feira</strong> têm mais nascimentos (cesáreas e induções programadas)</li>
<li><strong>Sábado e domingo</strong> têm menos (menos procedimentos eletivos nos fins de semana)</li>
<li>Nascimentos naturais (não programados) são aproximadamente iguais nos 7 dias</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Que dia da semana nasci se nasci em 1º de janeiro de 2000?', a: '1º de janeiro de 2000 foi uma sábado.' },
      { q: 'Que dia da semana nasci se nasci em 4 de julho de 1990?', a: '4 de julho de 1990 foi uma quarta-feira.' },
      { q: 'Que dia da semana nasci se nasci em 25 de dezembro de 1985?', a: '25 de dezembro de 1985 foi uma quarta-feira.' },
      { q: "Existe um aplicativo que me diga em que dia nasci?", a: 'Sim — use a calculadora «Que dia é hoje?» deste site. Insira qualquer data e ela retorna instantaneamente o dia da semana, incluindo datas históricas.' },
      { q: 'Qual é o dia da semana mais comum para nascer?', a: 'A terça-feira é tipicamente o dia de nascimento mais comum em países com muitos nascimentos programados em hospitais, seguida de perto pela quarta-feira. Sábado e domingo são os menos comuns.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: 'Que dia é hoje? — ferramenta de calendário' },
    related: [
      { href: '/pt/origem-nomes-dias-semana/', label: 'Dias da semana: origem dos nomes' },
      { href: '/pt/a-semana-comeca-no-domingo-ou-segunda/', label: 'A semana começa no domingo ou na segunda?' },
      { href: '/pt/que-geracao-sou/', label: 'Que geração sou eu?' },
    ],
  },
  de: {
    title: "An welchem Wochentag bin ich geboren? — So findest du es heraus",
    metaDesc: "Wie du herausfindest, an welchem Wochentag du geboren wurdest. Mit Nachschlagetabelle für Geburtsjahre 1950–2010 und der Formel zum selbst Berechnen.",
    kicker: 'WOCHENTAG-LEITFADEN',
    h1: "An welchem Wochentag bin ich geboren?",
    intro: "Um herauszufinden, an welchem Wochentag du geboren wurdest, nutze den Rechner «Welcher Tag ist heute?» auf dieser Website — gib dein Geburtsdatum ein und der Tag wird sofort angezeigt. Du kannst auch die Tabelle unten für eine schnelle Antwort nutzen.",
    sections: [
      {
        h2: 'Nachschlagetabelle: Welcher Wochentag war der 1. Januar in deinem Geburtsjahr?',
        body: '<p>Wenn du weißt, auf welchen Wochentag der 1. Januar in deinem Geburtsjahr fiel, kannst du bis zu deinem Geburtstag vorwärts zählen. Die Tabelle zeigt den 1. Januar für die Jahre 1950–2010:</p>',
        table: `<table>
<tr><th>Jahr</th><th>1. Jan.</th><th>Jahr</th><th>1. Jan.</th><th>Jahr</th><th>1. Jan.</th></tr>
<tr><td>1950</td><td>Sonntag</td><td>1970</td><td>Donnerstag</td><td>1990</td><td>Montag</td></tr>
<tr><td>1952</td><td>Dienstag</td><td>1972</td><td>Samstag</td><td>1992</td><td>Mittwoch</td></tr>
<tr><td>1954</td><td>Freitag</td><td>1974</td><td>Dienstag</td><td>1994</td><td>Samstag</td></tr>
<tr><td>1956</td><td>Sonntag</td><td>1976</td><td>Donnerstag</td><td>1996</td><td>Montag</td></tr>
<tr><td>1958</td><td>Mittwoch</td><td>1978</td><td>Sonntag</td><td>1998</td><td>Donnerstag</td></tr>
<tr><td>1960</td><td>Freitag</td><td>1980</td><td>Dienstag</td><td>2000</td><td>Samstag</td></tr>
<tr><td>1962</td><td>Montag</td><td>1982</td><td>Freitag</td><td>2002</td><td>Dienstag</td></tr>
<tr><td>1964</td><td>Mittwoch</td><td>1984</td><td>Sonntag</td><td>2004</td><td>Donnerstag</td></tr>
<tr><td>1966</td><td>Samstag</td><td>1986</td><td>Mittwoch</td><td>2006</td><td>Sonntag</td></tr>
<tr><td>1968</td><td>Montag</td><td>1988</td><td>Freitag</td><td>2008</td><td>Dienstag</td></tr>
</table>`
      },
      {
        h2: 'So berechnest du es von Hand',
        body: `<p>Du kannst den Wochentag eines beliebigen Datums mit dieser Formel berechnen:</p>
<ol>
<li>Nimm die letzten zwei Ziffern des Jahres: <em>y</em></li>
<li>Addiere: <em>y</em> + ⌊<em>y</em>/4⌋ + Tag + Monatscode + Jahrhundertcode</li>
<li>Berechne das Ergebnis mod 7: 0=So, 1=Mo, 2=Di, 3=Mi, 4=Do, 5=Fr, 6=Sa</li>
</ol>
<p>Monatscodes: Jan=1, Feb=4, Mär=4, Apr=0, Mai=2, Jun=5, Jul=0, Aug=3, Sep=6, Okt=1, Nov=4, Dez=6 (Januar/Februar verwenden das Vorjahr). Jahrhundertcodes: 1900er=0, 2000er=6.</p>
<p><strong>Beispiel:</strong> Welcher Tag war der 20. Juli 1969?<br>
y=69, ⌊69/4⌋=17, Tag=20, Monatscode(Jul)=0, Jahrhundert(1900er)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Sonntag</strong> ✓</p>`
      },
      {
        h2: 'Interessante Fakten über Geburtstage',
        body: `<p>Statistisch gesehen sind Geburten nicht gleichmäßig über die Wochentage verteilt:</p>
<ul>
<li><strong>Dienstag und Mittwoch</strong> haben die meisten Geburten (geplante Kaiserschnitte und Einleitungen)</li>
<li><strong>Samstag und Sonntag</strong> haben die wenigsten (weniger geplante Eingriffe am Wochenende)</li>
<li>Natürliche (ungeplante) Geburten sind über alle 7 Tage ungefähr gleich verteilt</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'An welchem Wochentag wurde ich geboren, wenn ich am 1. Januar 2000 geboren wurde?', a: 'Der 1. Januar 2000 war ein Samstag.' },
      { q: 'An welchem Wochentag wurde ich geboren, wenn ich am 4. Juli 1990 geboren wurde?', a: 'Der 4. Juli 1990 war ein Mittwoch.' },
      { q: 'An welchem Wochentag wurde ich geboren, wenn ich am 25. Dezember 1985 geboren wurde?', a: 'Der 25. Dezember 1985 war ein Mittwoch.' },
      { q: "Gibt es eine App, die mir meinen Geburtstag anzeigt?", a: 'Ja — nutze den Rechner «Welcher Tag ist heute?» auf dieser Website. Gib ein beliebiges Datum ein und er gibt sofort den Wochentag zurück, auch für historische Daten.' },
      { q: 'Was ist der häufigste Geburtstag der Woche?', a: 'Der Dienstag ist typischerweise der häufigste Geburtstag in Ländern mit vielen krankenhausgeplanten Geburten, gefolgt von Mittwoch. Samstag und Sonntag sind am seltensten.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: 'Welcher Tag ist heute? — Kalender-Tool' },
    related: [
      { href: '/de/herkunft-wochentagsnamen/', label: 'Wochentage: Herkunft der Namen' },
      { href: '/de/beginnt-die-woche-am-sonntag-oder-montag/', label: 'Beginnt die Woche am Sonntag oder Montag?' },
      { href: '/de/welche-generation-bin-ich/', label: 'Welcher Generation gehöre ich an?' },
    ],
  },
  it: {
    title: "Che giorno della settimana sono nato? — Come scoprirlo",
    metaDesc: "Come scoprire in che giorno della settimana sei nato. Include una tabella di riferimento per gli anni di nascita 1950–2010 e la formula per calcolarlo da solo.",
    kicker: 'GUIDA GIORNO DELLA SETTIMANA',
    h1: "Che giorno della settimana sono nato?",
    intro: "Per scoprire in che giorno della settimana sei nato, usa il calcolatore «Che giorno è oggi?» su questo sito — inserisci la tua data di nascita e mostra il giorno immediatamente. Puoi anche usare la tabella sottostante per una risposta rapida.",
    sections: [
      {
        h2: 'Tabella di riferimento: che giorno cadeva il 1° gennaio del tuo anno di nascita?',
        body: '<p>Se sai che giorno cadeva il 1° gennaio del tuo anno di nascita, puoi contare fino al tuo compleanno. La tabella mostra il 1° gennaio per gli anni 1950–2010:</p>',
        table: `<table>
<tr><th>Anno</th><th>1 gen.</th><th>Anno</th><th>1 gen.</th><th>Anno</th><th>1 gen.</th></tr>
<tr><td>1950</td><td>Domenica</td><td>1970</td><td>Giovedì</td><td>1990</td><td>Lunedì</td></tr>
<tr><td>1952</td><td>Martedì</td><td>1972</td><td>Sabato</td><td>1992</td><td>Mercoledì</td></tr>
<tr><td>1954</td><td>Venerdì</td><td>1974</td><td>Martedì</td><td>1994</td><td>Sabato</td></tr>
<tr><td>1956</td><td>Domenica</td><td>1976</td><td>Giovedì</td><td>1996</td><td>Lunedì</td></tr>
<tr><td>1958</td><td>Mercoledì</td><td>1978</td><td>Domenica</td><td>1998</td><td>Giovedì</td></tr>
<tr><td>1960</td><td>Venerdì</td><td>1980</td><td>Martedì</td><td>2000</td><td>Sabato</td></tr>
<tr><td>1962</td><td>Lunedì</td><td>1982</td><td>Venerdì</td><td>2002</td><td>Martedì</td></tr>
<tr><td>1964</td><td>Mercoledì</td><td>1984</td><td>Domenica</td><td>2004</td><td>Giovedì</td></tr>
<tr><td>1966</td><td>Sabato</td><td>1986</td><td>Mercoledì</td><td>2006</td><td>Domenica</td></tr>
<tr><td>1968</td><td>Lunedì</td><td>1988</td><td>Venerdì</td><td>2008</td><td>Martedì</td></tr>
</table>`
      },
      {
        h2: 'Come calcolarlo a mano',
        body: `<p>Puoi calcolare il giorno di qualsiasi data usando questa formula:</p>
<ol>
<li>Prendi le ultime due cifre dell'anno: <em>y</em></li>
<li>Somma: <em>y</em> + ⌊<em>y</em>/4⌋ + giorno + codice_mese + codice_secolo</li>
<li>Prendi il risultato mod 7: 0=Dom, 1=Lun, 2=Mar, 3=Mer, 4=Gio, 5=Ven, 6=Sab</li>
</ol>
<p>Codici mese: Gen=1, Feb=4, Mar=4, Apr=0, Mag=2, Giu=5, Lug=0, Ago=3, Set=6, Ott=1, Nov=4, Dic=6 (gennaio/febbraio usano l'anno precedente). Codici secolo: 1900=0, 2000=6.</p>
<p><strong>Esempio:</strong> Che giorno era il 20 luglio 1969?<br>
y=69, ⌊69/4⌋=17, giorno=20, codice_mese(Lug)=0, secolo(1900)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Domenica</strong> ✓</p>`
      },
      {
        h2: 'Curiosità sui giorni di nascita',
        body: `<p>Statisticamente, le nascite non sono distribuite uniformemente nei giorni della settimana:</p>
<ul>
<li><strong>Martedì e mercoledì</strong> hanno più nascite (cesarei e induzioni programmate)</li>
<li><strong>Sabato e domenica</strong> ne hanno meno (meno procedure elettive nel weekend)</li>
<li>Le nascite naturali (non programmate) sono approssimativamente uguali in tutti e 7 i giorni</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Che giorno della settimana sono nato se sono nato il 1° gennaio 2000?', a: 'Il 1° gennaio 2000 era un sabato.' },
      { q: 'Che giorno della settimana sono nato se sono nato il 4 luglio 1990?', a: 'Il 4 luglio 1990 era un mercoledì.' },
      { q: 'Che giorno della settimana sono nato se sono nato il 25 dicembre 1985?', a: 'Il 25 dicembre 1985 era un mercoledì.' },
      { q: "Esiste un'app che mi dice in che giorno sono nato?", a: 'Sì — usa il calcolatore «Che giorno è oggi?» su questo sito. Inserisci qualsiasi data e restituisce immediatamente il giorno della settimana, anche per date storiche.' },
      { q: 'Qual è il giorno della settimana più comune per nascere?', a: 'Il martedì è tipicamente il giorno di nascita più comune nei paesi con molte nascite programmate in ospedale, seguito da mercoledì. Sabato e domenica sono i meno comuni.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: 'Che giorno è oggi? — strumento calendario' },
    related: [
      { href: '/it/origine-nomi-giorni-settimana/', label: 'Giorni della settimana: origine dei nomi' },
      { href: '/it/la-settimana-inizia-domenica-o-lunedi/', label: 'La settimana inizia domenica o lunedì?' },
      { href: '/it/che-generazione-sono/', label: 'Di che generazione sono?' },
    ],
  },
  pl: {
    title: "W jaki dzień tygodnia się urodziłam? — Jak to sprawdzić",
    metaDesc: "Jak sprawdzić, w jaki dzień tygodnia się urodziłeś. Zawiera tabelę referencyjną dla lat urodzenia 1950–2010 i formułę do samodzielnego obliczenia.",
    kicker: 'PRZEWODNIK DZIEŃ TYGODNIA',
    h1: "W jaki dzień tygodnia się urodziłam?",
    intro: "Aby sprawdzić, w jaki dzień tygodnia się urodziłeś, użyj kalkulatora «Jaki dzisiaj mamy dzień?» na tej stronie — wpisz datę urodzenia, a kalkulator natychmiast pokaże dzień. Możesz też skorzystać z tabeli poniżej, by szybko znaleźć odpowiedź.",
    sections: [
      {
        h2: 'Tabela referencyjna: w jaki dzień wypadał 1 stycznia w roku Twoich urodzin?',
        body: '<p>Jeśli wiesz, w jaki dzień wypadał 1 stycznia w roku Twoich urodzin, możesz policzyć do swoich urodzin. Poniższa tabela pokazuje 1 stycznia dla lat 1950–2010:</p>',
        table: `<table>
<tr><th>Rok</th><th>1 sty.</th><th>Rok</th><th>1 sty.</th><th>Rok</th><th>1 sty.</th></tr>
<tr><td>1950</td><td>Niedziela</td><td>1970</td><td>Czwartek</td><td>1990</td><td>Poniedziałek</td></tr>
<tr><td>1952</td><td>Wtorek</td><td>1972</td><td>Sobota</td><td>1992</td><td>Środa</td></tr>
<tr><td>1954</td><td>Piątek</td><td>1974</td><td>Wtorek</td><td>1994</td><td>Sobota</td></tr>
<tr><td>1956</td><td>Niedziela</td><td>1976</td><td>Czwartek</td><td>1996</td><td>Poniedziałek</td></tr>
<tr><td>1958</td><td>Środa</td><td>1978</td><td>Niedziela</td><td>1998</td><td>Czwartek</td></tr>
<tr><td>1960</td><td>Piątek</td><td>1980</td><td>Wtorek</td><td>2000</td><td>Sobota</td></tr>
<tr><td>1962</td><td>Poniedziałek</td><td>1982</td><td>Piątek</td><td>2002</td><td>Wtorek</td></tr>
<tr><td>1964</td><td>Środa</td><td>1984</td><td>Niedziela</td><td>2004</td><td>Czwartek</td></tr>
<tr><td>1966</td><td>Sobota</td><td>1986</td><td>Środa</td><td>2006</td><td>Niedziela</td></tr>
<tr><td>1968</td><td>Poniedziałek</td><td>1988</td><td>Piątek</td><td>2008</td><td>Wtorek</td></tr>
</table>`
      },
      {
        h2: 'Jak obliczyć to ręcznie',
        body: `<p>Możesz obliczyć dzień dowolnej daty używając tej formuły:</p>
<ol>
<li>Weź dwie ostatnie cyfry roku: <em>y</em></li>
<li>Dodaj: <em>y</em> + ⌊<em>y</em>/4⌋ + dzień + kod_miesiąca + kod_stulecia</li>
<li>Weź wynik mod 7: 0=Nd, 1=Pn, 2=Wt, 3=Śr, 4=Cz, 5=Pt, 6=Sb</li>
</ol>
<p>Kody miesięcy: Sty=1, Lut=4, Mar=4, Kwi=0, Maj=2, Cze=5, Lip=0, Sie=3, Wrz=6, Paź=1, Lis=4, Gru=6 (styczeń/luty używają poprzedniego roku). Kody stulecia: 1900=0, 2000=6.</p>
<p><strong>Przykład:</strong> W jaki dzień był 20 lipca 1969?<br>
y=69, ⌊69/4⌋=17, dzień=20, kod_miesiąca(Lip)=0, stulecie(1900)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Niedziela</strong> ✓</p>`
      },
      {
        h2: 'Ciekawostki o dniach urodzenia',
        body: `<p>Statystycznie urodzenia nie są równomiernie rozłożone na dni tygodnia:</p>
<ul>
<li><strong>Wtorek i środa</strong> mają najwięcej urodzeń (planowane cesarskie cięcia i indukcje)</li>
<li><strong>Sobota i niedziela</strong> mają ich najmniej (mniej planowych zabiegów w weekendy)</li>
<li>Naturalne (nieplanowane) porody są mniej więcej równe we wszystkich 7 dniach</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'W jaki dzień tygodnia się urodziłem, jeśli urodziłem się 1 stycznia 2000?', a: '1 stycznia 2000 była sobota.' },
      { q: 'W jaki dzień tygodnia się urodziłem, jeśli urodziłem się 4 lipca 1990?', a: '4 lipca 1990 była środa.' },
      { q: 'W jaki dzień tygodnia się urodziłem, jeśli urodziłem się 25 grudnia 1985?', a: '25 grudnia 1985 była środa.' },
      { q: "Czy istnieje aplikacja, która powie mi, w jaki dzień się urodziłem?", a: 'Tak — użyj kalkulatora «Jaki dzisiaj mamy dzień?» na tej stronie. Wpisz dowolną datę, a kalkulator natychmiast zwróci dzień tygodnia, w tym daty historyczne.' },
      { q: 'Który dzień tygodnia jest najczęstszym dniem urodzenia?', a: 'Wtorek jest zazwyczaj najczęstszym dniem urodzenia w krajach z wieloma planowanymi porodami szpitalnymi, tuż za nim jest środa. Sobota i niedziela są najrzadsze.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: 'Jaki dzisiaj mamy dzień? — narzędzie kalendarza' },
    related: [
      { href: '/pl/pochodzenie-nazw-dni-tygodnia/', label: 'Dni tygodnia: pochodzenie nazw' },
      { href: '/pl/czy-tydzien-zaczyna-sie-w-niedziele-czy-poniedzialek/', label: 'Czy tydzień zaczyna się w niedzielę czy poniedziałek?' },
      { href: '/pl/do-jakiego-pokolenia-naleze/', label: 'Do jakiego pokolenia należę?' },
    ],
  },
  ja: {
    title: "生まれた曜日は何曜日？ — 調べ方ガイド",
    metaDesc: "自分が生まれた曜日を調べる方法。1950〜2010年の誕生年に対応した参照表と、手計算の公式を掲載。",
    kicker: '曜日ガイド',
    h1: "生まれた曜日は何曜日？",
    intro: "生まれた曜日を調べるには、このサイトの「今日は何曜日？」計算ツールを使ってください。生年月日を入力すると曜日が瞬時に表示されます。下の参照表を使っても素早く確認できます。",
    sections: [
      {
        h2: '参照表：あなたの生まれた年の1月1日は何曜日？',
        body: '<p>生まれた年の1月1日の曜日がわかれば、そこから誕生日まで数えることができます。以下の表は1950〜2010年の1月1日の曜日を示しています。</p>',
        table: `<table>
<tr><th>年</th><th>1月1日</th><th>年</th><th>1月1日</th><th>年</th><th>1月1日</th></tr>
<tr><td>1950</td><td>日曜日</td><td>1970</td><td>木曜日</td><td>1990</td><td>月曜日</td></tr>
<tr><td>1952</td><td>火曜日</td><td>1972</td><td>土曜日</td><td>1992</td><td>水曜日</td></tr>
<tr><td>1954</td><td>金曜日</td><td>1974</td><td>火曜日</td><td>1994</td><td>土曜日</td></tr>
<tr><td>1956</td><td>日曜日</td><td>1976</td><td>木曜日</td><td>1996</td><td>月曜日</td></tr>
<tr><td>1958</td><td>水曜日</td><td>1978</td><td>日曜日</td><td>1998</td><td>木曜日</td></tr>
<tr><td>1960</td><td>金曜日</td><td>1980</td><td>火曜日</td><td>2000</td><td>土曜日</td></tr>
<tr><td>1962</td><td>月曜日</td><td>1982</td><td>金曜日</td><td>2002</td><td>火曜日</td></tr>
<tr><td>1964</td><td>水曜日</td><td>1984</td><td>日曜日</td><td>2004</td><td>木曜日</td></tr>
<tr><td>1966</td><td>土曜日</td><td>1986</td><td>水曜日</td><td>2006</td><td>日曜日</td></tr>
<tr><td>1968</td><td>月曜日</td><td>1988</td><td>金曜日</td><td>2008</td><td>火曜日</td></tr>
</table>`
      },
      {
        h2: '手計算する方法',
        body: `<p>次の公式を使って任意の日付の曜日を計算できます：</p>
<ol>
<li>年の下2桁を取る：<em>y</em></li>
<li>計算する：<em>y</em> + ⌊<em>y</em>/4⌋ + 日 + 月コード + 世紀コード</li>
<li>結果を7で割った余り：0=日, 1=月, 2=火, 3=水, 4=木, 5=金, 6=土</li>
</ol>
<p>月コード：1月=1, 2月=4, 3月=4, 4月=0, 5月=2, 6月=5, 7月=0, 8月=3, 9月=6, 10月=1, 11月=4, 12月=6（1月・2月は前年を使用）。世紀コード：1900年代=0, 2000年代=6。</p>
<p><strong>例：</strong> 1969年7月20日は何曜日？<br>
y=69, ⌊69/4⌋=17, 日=20, 月コード(7月)=0, 世紀(1900年代)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = 日曜日</strong> ✓</p>`
      },
      {
        h2: '誕生曜日に関する豆知識',
        body: `<p>統計的に、誕生日は曜日によって偏りがあります：</p>
<ul>
<li><strong>火曜日と水曜日</strong>が最も多い（予定帝王切開と誘発分娩が多いため）</li>
<li><strong>土曜日と日曜日</strong>が最も少ない（週末は予定手術が少ないため）</li>
<li>自然分娩（予定外）は7日間でほぼ均等に分布</li>
</ul>`
      },
    ],
    faqs: [
      { q: '2000年1月1日生まれの場合、何曜日ですか？', a: '2000年1月1日は土曜日でした。' },
      { q: '1990年7月4日生まれの場合、何曜日ですか？', a: '1990年7月4日は水曜日でした。' },
      { q: '1985年12月25日生まれの場合、何曜日ですか？', a: '1985年12月25日は水曜日でした。' },
      { q: "生まれた曜日を教えてくれるアプリはありますか？", a: 'はい — このサイトの「今日は何曜日？」計算ツールをご利用ください。任意の日付を入力すると、歴史的な日付も含めて曜日が瞬時に表示されます。' },
      { q: '最も多い誕生曜日は何曜日ですか？', a: '火曜日は病院での計画的な出産が多い国では最も多い誕生曜日で、水曜日がそれに続きます。土曜日と日曜日が最も少ない曜日です。' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: '今日は何曜日？ — カレンダーツール' },
    related: [
      { href: '/ja/youbi-no-namae-no-yurai/', label: '曜日の名前の由来' },
      { href: '/ja/isshu-wa-nichiyobi-ka-getsuyobi-ka/', label: '週の始まりは日曜日？月曜日？' },
      { href: '/ja/watashi-no-sedai-wa/', label: '私の世代は？' },
    ],
  },
  ko: {
    title: "나는 무슨 요일에 태어났을까? — 알아보는 방법",
    metaDesc: "내가 태어난 요일을 알아보는 방법. 1950–2010년 출생연도 참조표와 직접 계산하는 공식 포함.",
    kicker: '요일 가이드',
    h1: "나는 무슨 요일에 태어났을까?",
    intro: "태어난 요일을 알아보려면 이 사이트의 «오늘은 무슨 요일?» 계산기를 사용하세요. 생년월일을 입력하면 즉시 요일이 표시됩니다. 아래 참조표를 이용해 빠르게 확인할 수도 있습니다.",
    sections: [
      {
        h2: '참조표: 당신이 태어난 해의 1월 1일은 무슨 요일?',
        body: '<p>태어난 해의 1월 1일 요일을 알면 생일까지 날짜를 셀 수 있습니다. 아래 표는 1950–2010년의 1월 1일 요일을 보여줍니다.</p>',
        table: `<table>
<tr><th>연도</th><th>1월 1일</th><th>연도</th><th>1월 1일</th><th>연도</th><th>1월 1일</th></tr>
<tr><td>1950</td><td>일요일</td><td>1970</td><td>목요일</td><td>1990</td><td>월요일</td></tr>
<tr><td>1952</td><td>화요일</td><td>1972</td><td>토요일</td><td>1992</td><td>수요일</td></tr>
<tr><td>1954</td><td>금요일</td><td>1974</td><td>화요일</td><td>1994</td><td>토요일</td></tr>
<tr><td>1956</td><td>일요일</td><td>1976</td><td>목요일</td><td>1996</td><td>월요일</td></tr>
<tr><td>1958</td><td>수요일</td><td>1978</td><td>일요일</td><td>1998</td><td>목요일</td></tr>
<tr><td>1960</td><td>금요일</td><td>1980</td><td>화요일</td><td>2000</td><td>토요일</td></tr>
<tr><td>1962</td><td>월요일</td><td>1982</td><td>금요일</td><td>2002</td><td>화요일</td></tr>
<tr><td>1964</td><td>수요일</td><td>1984</td><td>일요일</td><td>2004</td><td>목요일</td></tr>
<tr><td>1966</td><td>토요일</td><td>1986</td><td>수요일</td><td>2006</td><td>일요일</td></tr>
<tr><td>1968</td><td>월요일</td><td>1988</td><td>금요일</td><td>2008</td><td>화요일</td></tr>
</table>`
      },
      {
        h2: '직접 계산하는 방법',
        body: `<p>다음 공식으로 임의의 날짜의 요일을 계산할 수 있습니다:</p>
<ol>
<li>연도의 끝 두 자리를 가져옵니다: <em>y</em></li>
<li>계산: <em>y</em> + ⌊<em>y</em>/4⌋ + 일 + 월_코드 + 세기_코드</li>
<li>결과를 7로 나눈 나머지: 0=일, 1=월, 2=화, 3=수, 4=목, 5=금, 6=토</li>
</ol>
<p>월 코드: 1월=1, 2월=4, 3월=4, 4월=0, 5월=2, 6월=5, 7월=0, 8월=3, 9월=6, 10월=1, 11월=4, 12월=6 (1월·2월은 전년도 사용). 세기 코드: 1900년대=0, 2000년대=6.</p>
<p><strong>예:</strong> 1969년 7월 20일은 무슨 요일?<br>
y=69, ⌊69/4⌋=17, 일=20, 월코드(7월)=0, 세기(1900년대)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = 일요일</strong> ✓</p>`
      },
      {
        h2: '생일 요일에 관한 재미있는 사실',
        body: `<p>통계적으로 출생은 요일별로 고르게 분포하지 않습니다:</p>
<ul>
<li><strong>화요일과 수요일</strong>에 출생이 가장 많습니다 (계획 제왕절개와 유도분만이 많기 때문)</li>
<li><strong>토요일과 일요일</strong>에 가장 적습니다 (주말에는 예정 수술이 적기 때문)</li>
<li>자연분만(비계획)은 7일 모두 거의 균등하게 분포합니다</li>
</ul>`
      },
    ],
    faqs: [
      { q: '2000년 1월 1일에 태어났다면 무슨 요일인가요?', a: '2000년 1월 1일은 토요일이었습니다.' },
      { q: '1990년 7월 4일에 태어났다면 무슨 요일인가요?', a: '1990년 7월 4일은 수요일이었습니다.' },
      { q: '1985년 12월 25일에 태어났다면 무슨 요일인가요?', a: '1985년 12월 25일은 수요일이었습니다.' },
      { q: "태어난 요일을 알려주는 앱이 있나요?", a: '네 — 이 사이트의 «오늘은 무슨 요일?» 계산기를 사용하세요. 날짜를 입력하면 역사적인 날짜를 포함해 즉시 요일을 알려줍니다.' },
      { q: '가장 흔한 출생 요일은 무엇인가요?', a: '화요일은 병원 계획 출산이 많은 나라에서 가장 흔한 출생 요일이며, 수요일이 그 뒤를 잇습니다. 토요일과 일요일이 가장 적습니다.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: '오늘은 무슨 요일? — 달력 도구' },
    related: [
      { href: '/ko/yo-il-i-reum-ui-yu-rae/', label: '요일 이름의 유래' },
      { href: '/ko/ju-ga-il-yo-il-si-jak-i-il-kka-wol-yo-il-si-jak-i-il-kka/', label: '주는 일요일에 시작하나요, 월요일에 시작하나요?' },
      { href: '/ko/nae-sedae-neun/', label: '나의 세대는?' },
    ],
  },
  nl: {
    title: "Op welke dag van de week ben ik geboren? — Zo kom je erachter",
    metaDesc: "Hoe je erachter komt op welke dag van de week je geboren bent. Met opzoektabel voor geboortejaren 1950–2010 en de formule om het zelf te berekenen.",
    kicker: 'WEEKDAG GIDS',
    h1: "Op welke dag van de week ben ik geboren?",
    intro: "Om erachter te komen op welke dag van de week je geboren bent, gebruik je de calculator «Welke dag is het vandaag?» op deze site — vul je geboortedatum in en de dag wordt direct getoond. Je kunt ook de tabel hieronder gebruiken voor een snel antwoord.",
    sections: [
      {
        h2: 'Opzoektabel: op welke dag viel 1 januari in jouw geboortejaar?',
        body: '<p>Als je weet op welke dag 1 januari in jouw geboortejaar viel, kun je tellen naar je verjaardag. De tabel hieronder toont 1 januari voor de jaren 1950–2010:</p>',
        table: `<table>
<tr><th>Jaar</th><th>1 jan.</th><th>Jaar</th><th>1 jan.</th><th>Jaar</th><th>1 jan.</th></tr>
<tr><td>1950</td><td>Zondag</td><td>1970</td><td>Donderdag</td><td>1990</td><td>Maandag</td></tr>
<tr><td>1952</td><td>Dinsdag</td><td>1972</td><td>Zaterdag</td><td>1992</td><td>Woensdag</td></tr>
<tr><td>1954</td><td>Vrijdag</td><td>1974</td><td>Dinsdag</td><td>1994</td><td>Zaterdag</td></tr>
<tr><td>1956</td><td>Zondag</td><td>1976</td><td>Donderdag</td><td>1996</td><td>Maandag</td></tr>
<tr><td>1958</td><td>Woensdag</td><td>1978</td><td>Zondag</td><td>1998</td><td>Donderdag</td></tr>
<tr><td>1960</td><td>Vrijdag</td><td>1980</td><td>Dinsdag</td><td>2000</td><td>Zaterdag</td></tr>
<tr><td>1962</td><td>Maandag</td><td>1982</td><td>Vrijdag</td><td>2002</td><td>Dinsdag</td></tr>
<tr><td>1964</td><td>Woensdag</td><td>1984</td><td>Zondag</td><td>2004</td><td>Donderdag</td></tr>
<tr><td>1966</td><td>Zaterdag</td><td>1986</td><td>Woensdag</td><td>2006</td><td>Zondag</td></tr>
<tr><td>1968</td><td>Maandag</td><td>1988</td><td>Vrijdag</td><td>2008</td><td>Dinsdag</td></tr>
</table>`
      },
      {
        h2: 'Zo bereken je het met de hand',
        body: `<p>Je kunt de dag van elke datum berekenen met deze formule:</p>
<ol>
<li>Neem de laatste twee cijfers van het jaar: <em>y</em></li>
<li>Tel op: <em>y</em> + ⌊<em>y</em>/4⌋ + dag + maandcode + eeuwcode</li>
<li>Neem het resultaat mod 7: 0=Zo, 1=Ma, 2=Di, 3=Wo, 4=Do, 5=Vr, 6=Za</li>
</ol>
<p>Maandcodes: Jan=1, Feb=4, Mrt=4, Apr=0, Mei=2, Jun=5, Jul=0, Aug=3, Sep=6, Okt=1, Nov=4, Dec=6 (januari/februari gebruiken het vorige jaar). Eeuwcodes: 1900s=0, 2000s=6.</p>
<p><strong>Voorbeeld:</strong> Welke dag was 20 juli 1969?<br>
y=69, ⌊69/4⌋=17, dag=20, maandcode(Jul)=0, eeuw(1900s)=0<br>
69+17+20+0+0 = 106 → 106 mod 7 = <strong>0 = Zondag</strong> ✓</p>`
      },
      {
        h2: 'Leuke weetjes over geboortedag',
        body: `<p>Statistisch gezien zijn geboorten niet gelijkmatig verdeeld over de dagen van de week:</p>
<ul>
<li><strong>Dinsdag en woensdag</strong> hebben de meeste geboorten (geplande keizersneden en inleidingen)</li>
<li><strong>Zaterdag en zondag</strong> hebben de minste (minder geplande ingrepen in het weekend)</li>
<li>Natuurlijke (ongeplande) geboorten zijn ongeveer gelijk over alle 7 dagen</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Op welke dag van de week ben ik geboren als ik geboren ben op 1 januari 2000?', a: '1 januari 2000 was een zaterdag.' },
      { q: 'Op welke dag van de week ben ik geboren als ik geboren ben op 4 juli 1990?', a: '4 juli 1990 was een woensdag.' },
      { q: 'Op welke dag van de week ben ik geboren als ik geboren ben op 25 december 1985?', a: '25 december 1985 was een woensdag.' },
      { q: "Is er een app die me vertelt op welke dag ik geboren ben?", a: 'Ja — gebruik de calculator «Welke dag is het vandaag?» op deze site. Voer een datum in en het geeft direct de dag van de week terug, inclusief historische datums.' },
      { q: 'Wat is de meest voorkomende geboortedag van de week?', a: 'Dinsdag is doorgaans de meest voorkomende geboortedag in landen met veel ziekenhuisgeplande geboorten, gevolgd door woensdag. Zaterdag en zondag zijn het zeldzaamst.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: 'Welke dag is het vandaag? — kalendertool' },
    related: [
      { href: '/nl/oorsprong-namen-dagen-van-de-week/', label: 'Dagen van de week: oorsprong van de namen' },
      { href: '/nl/begint-de-week-op-zondag-of-maandag/', label: 'Begint de week op zondag of maandag?' },
      { href: '/nl/welke-generatie-ben-ik/', label: 'Welke generatie ben ik?' },
    ],
  },
};

// ── Article 2: days-of-the-week-names-origin ─────────────────
T['days-of-the-week-names-origin'] = {
  en: {
    title: 'Days of the Week: Name Origins and History',
    metaDesc: 'Where do the names of the days of the week come from? Roman planet gods, Norse mythology, and why different languages have different names.',
    kicker: 'CALENDAR HISTORY',
    h1: 'Days of the Week: Where Do the Names Come From?',
    intro: 'The names of the days of the week in English come from a mix of Roman planet gods and Norse mythology. Most European languages follow the same Roman pattern — but with their own variations.',
    sections: [
      {
        h2: 'English day names: Roman planets and Norse gods',
        body: '',
        table: `<table>
<tr><th>Day</th><th>Named after</th><th>Origin</th></tr>
<tr><td>Monday</td><td>Moon (Luna)</td><td>Old English: Mōnandæg ("Moon's day")</td></tr>
<tr><td>Tuesday</td><td>Tyr (Norse war god)</td><td>Old English: Tīwesdæg — replaced Roman Mars</td></tr>
<tr><td>Wednesday</td><td>Woden/Odin (Norse chief god)</td><td>Old English: Wōdnesdæg — replaced Roman Mercury</td></tr>
<tr><td>Thursday</td><td>Thor (Norse thunder god)</td><td>Old English: Þūnresdæg — replaced Roman Jupiter</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (Norse goddess)</td><td>Old English: Frīgedæg — replaced Roman Venus</td></tr>
<tr><td>Saturday</td><td>Saturn (Roman god)</td><td>Old English: Sæternesdæg — Roman name kept</td></tr>
<tr><td>Sunday</td><td>Sun (Sol)</td><td>Old English: Sunnandæg ("Sun's day")</td></tr>
</table>`
      },
      {
        h2: 'Why Tuesday through Friday have Norse names',
        body: `<p>When Germanic tribes adopted the Roman 7-day week (around the 1st–3rd century AD), they replaced the Roman planet gods with their own equivalent deities:</p>
<ul>
<li>Mars (war) → Tyr (Norse war god) → Tuesday</li>
<li>Mercury (messenger) → Woden/Odin (wisdom, travel) → Wednesday</li>
<li>Jupiter (thunder king) → Thor (thunder god) → Thursday</li>
<li>Venus (love) → Frigg or Freyja (love/fertility) → Friday</li>
</ul>
<p>Saturday kept its Roman name (Saturn had no Norse equivalent). Sunday and Monday kept celestial names shared across cultures.</p>`
      },
      {
        h2: 'Day names in other languages',
        body: '',
        table: `<table>
<tr><th>Day</th><th>French</th><th>Spanish</th><th>Italian</th><th>Origin</th></tr>
<tr><td>Monday</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (Moon)</td></tr>
<tr><td>Tuesday</td><td>mardi</td><td>martes</td><td>martedì</td><td>Mars</td></tr>
<tr><td>Wednesday</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Mercury</td></tr>
<tr><td>Thursday</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Jupiter/Jove</td></tr>
<tr><td>Friday</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Venus</td></tr>
<tr><td>Saturday</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (Hebrew)</td></tr>
<tr><td>Sunday</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Lord's Day)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Why is Wednesday spelled with a "d" that is not pronounced?', a: "Wednesday comes from \"Woden's day\" (Old English: Wōdnesdæg). The \"d\" was pronounced in Old English but was dropped in speech over time, while the spelling was preserved." },
      { q: 'Why does Saturday have a Roman name but not the others?', a: 'Saturn had no clear equivalent in Norse mythology, so Germanic tribes kept the Roman name. All other weekdays were adapted to Norse gods.' },
      { q: 'Why is Saturday "Sabbath" in Romance languages?', a: "Romance languages (French, Spanish, Italian, Portuguese) got the word from the Hebrew \"Shabbat\" via Latin \"Sabbatum.\" English instead kept the Germanic \"Saturn's day.\"" },
      { q: 'What does Sunday mean?', a: "Sunday means \"Sun's day\" — from Old English \"Sunnandæg.\" In Romance languages, Sunday became \"Lord's Day\" (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "What Day Is It Today?" },
    related: [
      { href: '/what-day-of-the-week-was-i-born/', label: 'What day of the week was I born?' },
      { href: '/does-the-week-start-on-sunday-or-monday/', label: 'Does the week start on Sunday or Monday?' },
      { href: '/world-calendar-systems/', label: 'World calendar systems' },
    ],
  },
  fr: {
    title: "Jours de la semaine : origines des noms et histoire",
    metaDesc: "D'où viennent les noms des jours de la semaine ? Les dieux planètes romains, la mythologie nordique, et pourquoi les langues ont des noms différents.",
    kicker: 'HISTOIRE DU CALENDRIER',
    h1: 'Jours de la semaine : d\'où viennent les noms ?',
    intro: "Les noms des jours de la semaine en français viennent des dieux planètes romains — et pour le samedi et le dimanche, du sabbat hébraïque et du christianisme. L'anglais suit un chemin différent avec une forte influence de la mythologie nordique.",
    sections: [
      {
        h2: 'Noms anglais des jours : planètes romaines et dieux nordiques',
        body: '',
        table: `<table>
<tr><th>Day</th><th>Named after</th><th>Origin</th></tr>
<tr><td>Monday</td><td>Moon (Luna)</td><td>Old English: Mōnandæg ("Moon's day")</td></tr>
<tr><td>Tuesday</td><td>Tyr (Norse war god)</td><td>Old English: Tīwesdæg — replaced Roman Mars</td></tr>
<tr><td>Wednesday</td><td>Woden/Odin (Norse chief god)</td><td>Old English: Wōdnesdæg — replaced Roman Mercury</td></tr>
<tr><td>Thursday</td><td>Thor (Norse thunder god)</td><td>Old English: Þūnresdæg — replaced Roman Jupiter</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (Norse goddess)</td><td>Old English: Frīgedæg — replaced Roman Venus</td></tr>
<tr><td>Saturday</td><td>Saturn (Roman god)</td><td>Old English: Sæternesdæg — Roman name kept</td></tr>
<tr><td>Sunday</td><td>Sun (Sol)</td><td>Old English: Sunnandæg ("Sun's day")</td></tr>
</table>`
      },
      {
        h2: "Pourquoi du mardi au vendredi ont des noms nordiques en anglais",
        body: `<p>Quand les tribus germaniques ont adopté la semaine romaine de 7 jours (vers le 1er–3e siècle apr. J.-C.), elles ont remplacé les dieux planètes romains par leurs propres divinités équivalentes :</p>
<ul>
<li>Mars (guerre) → Tyr (dieu nordique de la guerre) → Tuesday</li>
<li>Mercure (messager) → Woden/Odin (sagesse, voyage) → Wednesday</li>
<li>Jupiter (roi du tonnerre) → Thor (dieu du tonnerre) → Thursday</li>
<li>Vénus (amour) → Frigg ou Freyja (amour/fertilité) → Friday</li>
</ul>
<p>Saturday a conservé son nom romain (Saturne n'avait pas d'équivalent nordique). Sunday et Monday ont conservé des noms célestes partagés entre les cultures.</p>`
      },
      {
        h2: 'Noms des jours dans d\'autres langues',
        body: '',
        table: `<table>
<tr><th>Day</th><th>French</th><th>Spanish</th><th>Italian</th><th>Origin</th></tr>
<tr><td>Monday</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (Moon)</td></tr>
<tr><td>Tuesday</td><td>mardi</td><td>martes</td><td>martedì</td><td>Mars</td></tr>
<tr><td>Wednesday</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Mercury</td></tr>
<tr><td>Thursday</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Jupiter/Jove</td></tr>
<tr><td>Friday</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Venus</td></tr>
<tr><td>Saturday</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (Hebrew)</td></tr>
<tr><td>Sunday</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Lord's Day)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Pourquoi "Wednesday" est-il orthographié avec un "d" qui ne se prononce pas ?', a: "Wednesday vient de « Woden's day » (vieil anglais : Wōdnesdæg). Le « d » se prononçait en vieil anglais mais a été abandonné à l'oral au fil du temps, tandis que l'orthographe a été préservée." },
      { q: "Pourquoi Saturday a-t-il un nom romain et pas les autres ?", a: "Saturne n'avait pas d'équivalent clair dans la mythologie nordique, donc les tribus germaniques ont conservé le nom romain. Tous les autres jours de la semaine ont été adaptés aux dieux nordiques." },
      { q: 'Pourquoi Saturday est "Sabbath" dans les langues romanes ?', a: "Les langues romanes (français, espagnol, italien, portugais) ont obtenu le mot de l'hébreu « Shabbat » via le latin « Sabbatum ». L'anglais a plutôt conservé le germanisme « jour de Saturne »." },
      { q: "Que signifie Sunday ?", a: "Sunday signifie « jour du Soleil » — du vieil anglais « Sunnandæg ». Dans les langues romanes, le dimanche est devenu le « Jour du Seigneur » (dies Dominica) : dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Quel jour est-on aujourd'hui ?" },
    related: [
      { href: '/fr/quel-jour-de-la-semaine-suis-je-ne/', label: 'Quel jour de la semaine suis-je né ?' },
      { href: '/fr/la-semaine-commence-dimanche-ou-lundi/', label: 'La semaine commence-t-elle le dimanche ou le lundi ?' },
      { href: '/fr/systemes-calendriers-mondiaux/', label: 'Systèmes de calendriers dans le monde' },
    ],
  },
  es: {
    title: "Días de la semana: origen de los nombres e historia",
    metaDesc: "¿De dónde vienen los nombres de los días de la semana? Los dioses planetas romanos, la mitología nórdica y por qué distintos idiomas tienen nombres diferentes.",
    kicker: 'HISTORIA DEL CALENDARIO',
    h1: '¿De dónde vienen los nombres de los días de la semana?',
    intro: "Los nombres de los días de la semana en español provienen de los dioses planetas romanos, salvo el sábado (del hebreo Shabbat) y el domingo (del latín cristiano dies Dominica). El inglés sigue un camino distinto con una fuerte influencia de la mitología nórdica.",
    sections: [
      {
        h2: 'Nombres ingleses de los días: planetas romanos y dioses nórdicos',
        body: '',
        table: `<table>
<tr><th>Day</th><th>Named after</th><th>Origin</th></tr>
<tr><td>Monday</td><td>Moon (Luna)</td><td>Old English: Mōnandæg ("Moon's day")</td></tr>
<tr><td>Tuesday</td><td>Tyr (Norse war god)</td><td>Old English: Tīwesdæg — replaced Roman Mars</td></tr>
<tr><td>Wednesday</td><td>Woden/Odin (Norse chief god)</td><td>Old English: Wōdnesdæg — replaced Roman Mercury</td></tr>
<tr><td>Thursday</td><td>Thor (Norse thunder god)</td><td>Old English: Þūnresdæg — replaced Roman Jupiter</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (Norse goddess)</td><td>Old English: Frīgedæg — replaced Roman Venus</td></tr>
<tr><td>Saturday</td><td>Saturn (Roman god)</td><td>Old English: Sæternesdæg — Roman name kept</td></tr>
<tr><td>Sunday</td><td>Sun (Sol)</td><td>Old English: Sunnandæg ("Sun's day")</td></tr>
</table>`
      },
      {
        h2: "Por qué del martes al viernes tienen nombres nórdicos en inglés",
        body: `<p>Cuando las tribus germánicas adoptaron la semana romana de 7 días (hacia los siglos I–III d.C.), reemplazaron los dioses planetas romanos por sus propias deidades equivalentes:</p>
<ul>
<li>Marte (guerra) → Tyr (dios nórdico de la guerra) → Tuesday</li>
<li>Mercurio (mensajero) → Woden/Odín (sabiduría, viaje) → Wednesday</li>
<li>Júpiter (rey del trueno) → Thor (dios del trueno) → Thursday</li>
<li>Venus (amor) → Frigg o Freyja (amor/fertilidad) → Friday</li>
</ul>
<p>Saturday conservó su nombre romano (Saturno no tenía equivalente nórdico). Sunday y Monday conservaron nombres celestes compartidos entre culturas.</p>`
      },
      {
        h2: 'Nombres de los días en otros idiomas',
        body: '',
        table: `<table>
<tr><th>Day</th><th>French</th><th>Spanish</th><th>Italian</th><th>Origin</th></tr>
<tr><td>Monday</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (Moon)</td></tr>
<tr><td>Tuesday</td><td>mardi</td><td>martes</td><td>martedì</td><td>Mars</td></tr>
<tr><td>Wednesday</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Mercury</td></tr>
<tr><td>Thursday</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Jupiter/Jove</td></tr>
<tr><td>Friday</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Venus</td></tr>
<tr><td>Saturday</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (Hebrew)</td></tr>
<tr><td>Sunday</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Lord's Day)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '¿Por qué "Wednesday" se escribe con una "d" que no se pronuncia?', a: "Wednesday viene de «Woden's day» (inglés antiguo: Wōdnesdæg). La «d» se pronunciaba en inglés antiguo pero desapareció del habla con el tiempo, mientras que la ortografía se conservó." },
      { q: "¿Por qué Saturday tiene un nombre romano y los demás no?", a: "Saturno no tenía un equivalente claro en la mitología nórdica, por lo que las tribus germánicas conservaron el nombre romano. Todos los demás días de la semana fueron adaptados a dioses nórdicos." },
      { q: '¿Por qué Saturday es "Sabbath" en las lenguas romances?', a: "Las lenguas romances (francés, español, italiano, portugués) tomaron la palabra del hebreo «Shabbat» a través del latín «Sabbatum». El inglés, en cambio, conservó el germánico «día de Saturno»." },
      { q: "¿Qué significa Sunday?", a: "Sunday significa «día del Sol» — del inglés antiguo «Sunnandæg». En las lenguas romances, el domingo se convirtió en el «Día del Señor» (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "¿Qué día es hoy?" },
    related: [
      { href: '/es/que-dia-de-la-semana-naci/', label: '¿Qué día de la semana nací?' },
      { href: '/es/empieza-la-semana-el-domingo-o-el-lunes/', label: '¿La semana empieza el domingo o el lunes?' },
      { href: '/es/sistemas-calendarios-mundo/', label: 'Sistemas de calendarios del mundo' },
    ],
  },
  pt: {
    title: "Origem dos nomes dos dias da semana e história",
    metaDesc: "De onde vêm os nomes dos dias da semana? Os deuses planetas romanos, a mitologia nórdica e por que línguas diferentes têm nomes diferentes.",
    kicker: 'HISTÓRIA DO CALENDÁRIO',
    h1: "Dias da semana: de onde vêm os nomes?",
    intro: "Os nomes dos dias da semana em português vêm dos deuses planetas romanos — exceto sábado (do hebraico Shabbat) e domingo (do latim cristão dies Dominica). O inglês segue um caminho diferente, com forte influência da mitologia nórdica.",
    sections: [
      {
        h2: 'Nomes ingleses dos dias: planetas romanos e deuses nórdicos',
        body: '',
        table: `<table>
<tr><th>Dia</th><th>Nomeado após</th><th>Origem</th></tr>
<tr><td>Monday</td><td>Moon (Luna)</td><td>Inglês antigo: Mōnandæg ("dia da Lua")</td></tr>
<tr><td>Tuesday</td><td>Tyr (deus nórdico da guerra)</td><td>Inglês antigo: Tīwesdæg — substituiu Marte romano</td></tr>
<tr><td>Wednesday</td><td>Woden/Odin (deus supremo nórdico)</td><td>Inglês antigo: Wōdnesdæg — substituiu Mercúrio romano</td></tr>
<tr><td>Thursday</td><td>Thor (deus nórdico do trovão)</td><td>Inglês antigo: Þūnresdæg — substituiu Júpiter romano</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (deusa nórdica)</td><td>Inglês antigo: Frīgedæg — substituiu Vênus romana</td></tr>
<tr><td>Saturday</td><td>Saturno (deus romano)</td><td>Inglês antigo: Sæternesdæg — nome romano mantido</td></tr>
<tr><td>Sunday</td><td>Sol (Sun)</td><td>Inglês antigo: Sunnandæg ("dia do Sol")</td></tr>
</table>`
      },
      {
        h2: 'Por que de terça a sexta têm nomes nórdicos em inglês',
        body: `<p>Quando as tribos germânicas adotaram a semana romana de 7 dias (por volta dos séculos I–III d.C.), substituíram os deuses planetas romanos pelos seus próprios deuses equivalentes:</p>
<ul>
<li>Marte (guerra) → Tyr (deus nórdico da guerra) → Tuesday</li>
<li>Mercúrio (mensageiro) → Woden/Odin (sabedoria, viagem) → Wednesday</li>
<li>Júpiter (rei do trovão) → Thor (deus do trovão) → Thursday</li>
<li>Vênus (amor) → Frigg ou Freyja (amor/fertilidade) → Friday</li>
</ul>
<p>Saturday manteve o nome romano (Saturno não tinha equivalente nórdico). Sunday e Monday mantiveram nomes celestiais compartilhados entre culturas.</p>`
      },
      {
        h2: 'Nomes dos dias em outras línguas',
        body: '',
        table: `<table>
<tr><th>Dia</th><th>Francês</th><th>Espanhol</th><th>Italiano</th><th>Origem</th></tr>
<tr><td>Segunda-feira</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (Lua)</td></tr>
<tr><td>Terça-feira</td><td>mardi</td><td>martes</td><td>martedì</td><td>Marte</td></tr>
<tr><td>Quarta-feira</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Mercúrio</td></tr>
<tr><td>Quinta-feira</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Júpiter/Jove</td></tr>
<tr><td>Sexta-feira</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Vênus</td></tr>
<tr><td>Sábado</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (hebraico)</td></tr>
<tr><td>Domingo</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Dia do Senhor)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Por que "Wednesday" é escrito com um "d" que não é pronunciado?', a: "Wednesday vem de \"Woden's day\" (inglês antigo: Wōdnesdæg). O \"d\" era pronunciado no inglês antigo mas foi abandonado na fala ao longo do tempo, enquanto a grafia foi preservada." },
      { q: 'Por que Saturday tem um nome romano e os outros não?', a: 'Saturno não tinha um equivalente claro na mitologia nórdica, então as tribos germânicas mantiveram o nome romano. Todos os outros dias da semana foram adaptados para deuses nórdicos.' },
      { q: 'Por que Saturday é "Sabbath" nas línguas românicas?', a: "As línguas românicas (francês, espanhol, italiano, português) obtiveram a palavra do hebraico \"Shabbat\" via latim \"Sabbatum\". O inglês, em vez disso, manteve o germânico \"dia de Saturno\"." },
      { q: 'O que significa Sunday?', a: "Sunday significa \"dia do Sol\" — do inglês antigo \"Sunnandæg\". Nas línguas românicas, o domingo tornou-se o \"Dia do Senhor\" (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Que dia é hoje?" },
    related: [
      { href: '/pt/que-dia-da-semana-nasci/', label: 'Que dia da semana nasci?' },
      { href: '/pt/a-semana-comeca-no-domingo-ou-segunda/', label: 'A semana começa no domingo ou na segunda?' },
      { href: '/pt/sistemas-de-calendario-do-mundo/', label: 'Sistemas de calendário do mundo' },
    ],
  },
  de: {
    title: "Herkunft der Wochentagsnamen und ihre Geschichte",
    metaDesc: "Woher kommen die Namen der Wochentage? Römische Planetengötter, nordische Mythologie und warum verschiedene Sprachen unterschiedliche Namen haben.",
    kicker: 'KALENDERGESCHICHTE',
    h1: "Wochentage: Woher kommen die Namen?",
    intro: "Die deutschen Wochentagsnamen stammen überwiegend von römischen Planetengöttern ab. Im Englischen hingegen wurden viele römische Götter durch nordische Gottheiten ersetzt — ein Erbe der germanischen Stämme.",
    sections: [
      {
        h2: 'Englische Wochentagsnamen: römische Planeten und nordische Götter',
        body: '',
        table: `<table>
<tr><th>Tag</th><th>Benannt nach</th><th>Herkunft</th></tr>
<tr><td>Monday</td><td>Mond (Luna)</td><td>Altenglisch: Mōnandæg ("Tag des Mondes")</td></tr>
<tr><td>Tuesday</td><td>Tyr (nordischer Kriegsgott)</td><td>Altenglisch: Tīwesdæg — ersetzte den römischen Mars</td></tr>
<tr><td>Wednesday</td><td>Woden/Odin (oberster nordischer Gott)</td><td>Altenglisch: Wōdnesdæg — ersetzte den römischen Merkur</td></tr>
<tr><td>Thursday</td><td>Thor (nordischer Donnergott)</td><td>Altenglisch: Þūnresdæg — ersetzte den römischen Jupiter</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (nordische Göttin)</td><td>Altenglisch: Frīgedæg — ersetzte die römische Venus</td></tr>
<tr><td>Saturday</td><td>Saturn (römischer Gott)</td><td>Altenglisch: Sæternesdæg — römischer Name beibehalten</td></tr>
<tr><td>Sunday</td><td>Sonne (Sol)</td><td>Altenglisch: Sunnandæg ("Tag der Sonne")</td></tr>
</table>`
      },
      {
        h2: 'Warum Dienstag bis Freitag nordische Namen haben',
        body: `<p>Als germanische Stämme die römische 7-Tage-Woche übernahmen (etwa im 1.–3. Jahrhundert n. Chr.), ersetzten sie die römischen Planetengötter durch ihre eigenen entsprechenden Gottheiten:</p>
<ul>
<li>Mars (Krieg) → Tyr (nordischer Kriegsgott) → Tuesday</li>
<li>Merkur (Bote) → Woden/Odin (Weisheit, Reise) → Wednesday</li>
<li>Jupiter (Donnerkönig) → Thor (Donnergott) → Thursday</li>
<li>Venus (Liebe) → Frigg oder Freyja (Liebe/Fruchtbarkeit) → Friday</li>
</ul>
<p>Saturday behielt seinen römischen Namen (Saturn hatte kein nordisches Äquivalent). Sunday und Monday behielten himmlische Namen, die kulturübergreifend geteilt wurden.</p>`
      },
      {
        h2: 'Wochentagsnamen in anderen Sprachen',
        body: '',
        table: `<table>
<tr><th>Tag</th><th>Französisch</th><th>Spanisch</th><th>Italienisch</th><th>Herkunft</th></tr>
<tr><td>Montag</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (Mond)</td></tr>
<tr><td>Dienstag</td><td>mardi</td><td>martes</td><td>martedì</td><td>Mars</td></tr>
<tr><td>Mittwoch</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Merkur</td></tr>
<tr><td>Donnerstag</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Jupiter/Jove</td></tr>
<tr><td>Freitag</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Venus</td></tr>
<tr><td>Samstag</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (Hebräisch)</td></tr>
<tr><td>Sonntag</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Tag des Herrn)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Warum wird "Wednesday" mit einem "d" geschrieben, das nicht ausgesprochen wird?', a: "Wednesday kommt von \"Woden's day\" (Altenglisch: Wōdnesdæg). Das \"d\" wurde im Altenglischen ausgesprochen, verschwand aber im Laufe der Zeit aus der Aussprache, während die Schreibweise erhalten blieb." },
      { q: 'Warum hat Saturday einen römischen Namen, die anderen aber nicht?', a: 'Saturn hatte kein klares Äquivalent in der nordischen Mythologie, daher behielten die germanischen Stämme den römischen Namen bei. Alle anderen Wochentage wurden an nordische Götter angepasst.' },
      { q: 'Warum ist Saturday in romanischen Sprachen "Sabbath"?', a: "Romanische Sprachen (Französisch, Spanisch, Italienisch, Portugiesisch) übernahmen das Wort vom hebräischen \"Schabbat\" über das lateinische \"Sabbatum\". Das Englische behielt stattdessen das germanische \"Saturns Tag\"." },
      { q: 'Was bedeutet Sunday?', a: "Sunday bedeutet \"Tag der Sonne\" — vom altenglischen \"Sunnandæg\". In romanischen Sprachen wurde der Sonntag zum \"Tag des Herrn\" (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Welcher Tag ist heute?" },
    related: [
      { href: '/de/an-welchem-wochentag-bin-ich-geboren/', label: 'An welchem Wochentag bin ich geboren?' },
      { href: '/de/beginnt-die-woche-am-sonntag-oder-montag/', label: 'Beginnt die Woche am Sonntag oder Montag?' },
      { href: '/de/kalender-systeme-der-welt/', label: 'Kalendersysteme der Welt' },
    ],
  },
  it: {
    title: "Origine dei nomi dei giorni della settimana e storia",
    metaDesc: "Da dove vengono i nomi dei giorni della settimana? Gli dei pianeti romani, la mitologia norrena e perché lingue diverse hanno nomi diversi.",
    kicker: 'STORIA DEL CALENDARIO',
    h1: "Giorni della settimana: da dove vengono i nomi?",
    intro: "I nomi dei giorni della settimana in italiano derivano dagli dei pianeti romani, tranne sabato (dall'ebraico Shabbat) e domenica (dal latino cristiano dies Dominica). L'inglese segue un percorso diverso con una forte influenza della mitologia norrena.",
    sections: [
      {
        h2: 'Nomi inglesi dei giorni: pianeti romani e dei norreni',
        body: '',
        table: `<table>
<tr><th>Giorno</th><th>Dedicato a</th><th>Origine</th></tr>
<tr><td>Monday</td><td>Luna</td><td>Inglese antico: Mōnandæg ("giorno della Luna")</td></tr>
<tr><td>Tuesday</td><td>Tyr (dio norreno della guerra)</td><td>Inglese antico: Tīwesdæg — sostituì Marte romano</td></tr>
<tr><td>Wednesday</td><td>Woden/Odino (dio supremo norreno)</td><td>Inglese antico: Wōdnesdæg — sostituì Mercurio romano</td></tr>
<tr><td>Thursday</td><td>Thor (dio norreno del tuono)</td><td>Inglese antico: Þūnresdæg — sostituì Giove romano</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (dea norrena)</td><td>Inglese antico: Frīgedæg — sostituì Venere romana</td></tr>
<tr><td>Saturday</td><td>Saturno (dio romano)</td><td>Inglese antico: Sæternesdæg — nome romano mantenuto</td></tr>
<tr><td>Sunday</td><td>Sole (Sol)</td><td>Inglese antico: Sunnandæg ("giorno del Sole")</td></tr>
</table>`
      },
      {
        h2: "Perché da martedì a venerdì hanno nomi norreni in inglese",
        body: `<p>Quando le tribù germaniche adottarono la settimana romana di 7 giorni (intorno al I–III secolo d.C.), sostituirono gli dei pianeti romani con le proprie divinità equivalenti:</p>
<ul>
<li>Marte (guerra) → Tyr (dio norreno della guerra) → Tuesday</li>
<li>Mercurio (messaggero) → Woden/Odino (saggezza, viaggio) → Wednesday</li>
<li>Giove (re del tuono) → Thor (dio del tuono) → Thursday</li>
<li>Venere (amore) → Frigg o Freyja (amore/fertilità) → Friday</li>
</ul>
<p>Saturday mantenne il nome romano (Saturno non aveva un equivalente norreno). Sunday e Monday mantennero nomi celesti condivisi tra culture.</p>`
      },
      {
        h2: 'Nomi dei giorni in altre lingue',
        body: '',
        table: `<table>
<tr><th>Giorno</th><th>Francese</th><th>Spagnolo</th><th>Italiano</th><th>Origine</th></tr>
<tr><td>Lunedì</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna</td></tr>
<tr><td>Martedì</td><td>mardi</td><td>martes</td><td>martedì</td><td>Marte</td></tr>
<tr><td>Mercoledì</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Mercurio</td></tr>
<tr><td>Giovedì</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Giove/Jove</td></tr>
<tr><td>Venerdì</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Venere</td></tr>
<tr><td>Sabato</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (ebraico)</td></tr>
<tr><td>Domenica</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Giorno del Signore)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Perché "Wednesday" si scrive con una "d" che non si pronuncia?', a: "Wednesday viene da \"Woden's day\" (inglese antico: Wōdnesdæg). La \"d\" veniva pronunciata nell'inglese antico ma è caduta nel tempo dalla pronuncia, mentre la grafia è rimasta." },
      { q: 'Perché Saturday ha un nome romano e gli altri no?', a: "Saturno non aveva un equivalente chiaro nella mitologia norrena, quindi le tribù germaniche mantennero il nome romano. Tutti gli altri giorni della settimana furono adattati a dei norreni." },
      { q: 'Perché Saturday è "Sabbath" nelle lingue romanze?', a: "Le lingue romanze (francese, spagnolo, italiano, portoghese) presero la parola dall'ebraico \"Shabbat\" tramite il latino \"Sabbatum\". L'inglese mantenne invece il germanico \"giorno di Saturno\"." },
      { q: 'Cosa significa Sunday?', a: "Sunday significa \"giorno del Sole\" — dall'inglese antico \"Sunnandæg\". Nelle lingue romanze, la domenica divenne il \"Giorno del Signore\" (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Che giorno è oggi?" },
    related: [
      { href: '/it/che-giorno-della-settimana-sono-nato/', label: 'Che giorno della settimana sono nato?' },
      { href: '/it/la-settimana-inizia-domenica-o-lunedi/', label: 'La settimana inizia domenica o lunedì?' },
      { href: '/it/sistemi-di-calendario-del-mondo/', label: 'Sistemi di calendario del mondo' },
    ],
  },
  pl: {
    title: "Pochodzenie nazw dni tygodnia i ich historia",
    metaDesc: "Skąd pochodzą nazwy dni tygodnia? Rzymskie bóstwa planetarne, mitologia nordycka i dlaczego różne języki mają różne nazwy.",
    kicker: 'HISTORIA KALENDARZA',
    h1: "Dni tygodnia: skąd pochodzą ich nazwy?",
    intro: "Polskie nazwy dni tygodnia wywodzą się w większości z numeracji (drugi, trzeci...) lub dawnych słowiańskich tradycji. W języku angielskim nazwy dni mieszają rzymskie bóstwa planetarne z nordycką mitologią.",
    sections: [
      {
        h2: 'Angielskie nazwy dni: rzymskie planety i nordyccy bogowie',
        body: '',
        table: `<table>
<tr><th>Dzień</th><th>Nazwany od</th><th>Pochodzenie</th></tr>
<tr><td>Monday</td><td>Księżyc (Luna)</td><td>Staroangielski: Mōnandæg ("dzień Księżyca")</td></tr>
<tr><td>Tuesday</td><td>Tyr (nordycki bóg wojny)</td><td>Staroangielski: Tīwesdæg — zastąpił rzymskiego Marsa</td></tr>
<tr><td>Wednesday</td><td>Woden/Odyn (naczelny bóg nordycki)</td><td>Staroangielski: Wōdnesdæg — zastąpił rzymskiego Merkurego</td></tr>
<tr><td>Thursday</td><td>Thor (nordycki bóg piorunów)</td><td>Staroangielski: Þūnresdæg — zastąpił rzymskiego Jowisza</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (nordycka bogini)</td><td>Staroangielski: Frīgedæg — zastąpiła rzymską Wenus</td></tr>
<tr><td>Saturday</td><td>Saturn (bóg rzymski)</td><td>Staroangielski: Sæternesdæg — zachowana nazwa rzymska</td></tr>
<tr><td>Sunday</td><td>Słońce (Sol)</td><td>Staroangielski: Sunnandæg ("dzień Słońca")</td></tr>
</table>`
      },
      {
        h2: 'Dlaczego wtorek–piątek mają nordyckie nazwy w angielskim',
        body: `<p>Kiedy germańskie plemiona przyjęły rzymski 7-dniowy tydzień (ok. I–III w. n.e.), zastąpiły rzymskie bóstwa planetarne własnymi odpowiednikami:</p>
<ul>
<li>Mars (wojna) → Tyr (nordycki bóg wojny) → Tuesday</li>
<li>Merkury (posłaniec) → Woden/Odyn (mądrość, podróż) → Wednesday</li>
<li>Jowisz (król piorunów) → Thor (bóg piorunów) → Thursday</li>
<li>Wenus (miłość) → Frigg lub Freyja (miłość/płodność) → Friday</li>
</ul>
<p>Saturday zachowała swoją rzymską nazwę (Saturn nie miał nordyckiego odpowiednika). Sunday i Monday zachowały nazwy niebieskie wspólne dla wielu kultur.</p>`
      },
      {
        h2: 'Nazwy dni w innych językach',
        body: '',
        table: `<table>
<tr><th>Dzień</th><th>Francuski</th><th>Hiszpański</th><th>Włoski</th><th>Pochodzenie</th></tr>
<tr><td>Poniedziałek</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (Księżyc)</td></tr>
<tr><td>Wtorek</td><td>mardi</td><td>martes</td><td>martedì</td><td>Mars</td></tr>
<tr><td>Środa</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Merkury</td></tr>
<tr><td>Czwartek</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Jowisz/Jove</td></tr>
<tr><td>Piątek</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Wenus</td></tr>
<tr><td>Sobota</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (hebrajski)</td></tr>
<tr><td>Niedziela</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Dzień Pański)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Dlaczego "Wednesday" pisze się z "d", które nie jest wymawiane?', a: "Wednesday pochodzi od \"Woden's day\" (staroangielski: Wōdnesdæg). \"D\" było wymawiane w staroangielskim, ale zanikło w wymowie z biegiem czasu, podczas gdy pisownia została zachowana." },
      { q: 'Dlaczego Saturday ma rzymską nazwę, a pozostałe nie?', a: 'Saturn nie miał wyraźnego odpowiednika w nordyckiej mitologii, więc germańskie plemiona zachowały rzymską nazwę. Wszystkie inne dni tygodnia zostały przystosowane do nordyckich bogów.' },
      { q: 'Dlaczego Saturday to "Sabbath" w językach romańskich?', a: "Języki romańskie (francuski, hiszpański, włoski, portugalski) przejęły słowo z hebrajskiego \"Shabbat\" przez łacińskie \"Sabbatum\". Angielski zachował natomiast germańskie \"dzień Saturna\"." },
      { q: 'Co oznacza Sunday?', a: "Sunday oznacza \"dzień Słońca\" — od staroangielskiego \"Sunnandæg\". W językach romańskich niedziela stała się \"Dniem Pańskim\" (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Jaki dzisiaj mamy dzień?" },
    related: [
      { href: '/pl/w-jaki-dzien-tygodnia-sie-urodzilam/', label: 'W jaki dzień tygodnia się urodziłam?' },
      { href: '/pl/czy-tydzien-zaczyna-sie-w-niedziele-czy-poniedzialek/', label: 'Czy tydzień zaczyna się w niedzielę czy poniedziałek?' },
      { href: '/pl/systemy-kalendarzy-swiata/', label: 'Systemy kalendarzy świata' },
    ],
  },
  ja: {
    title: "曜日の名前の由来と歴史",
    metaDesc: "曜日の名前はどこから来たのか？ローマの惑星神、北欧神話、そしてなぜ言語によって名前が異なるのかを解説。",
    kicker: '暦の歴史',
    h1: "曜日の名前はどこから来たのか？",
    intro: "英語の曜日の名前はローマの惑星神と北欧神話の混合から来ています。ほとんどのヨーロッパ言語も同じローマのパターンに従っていますが、それぞれ独自の変形があります。",
    sections: [
      {
        h2: '英語の曜日名：ローマの惑星と北欧の神々',
        body: '',
        table: `<table>
<tr><th>曜日</th><th>由来の神・天体</th><th>起源</th></tr>
<tr><td>Monday</td><td>月 (Luna)</td><td>古英語: Mōnandæg（「月の日」）</td></tr>
<tr><td>Tuesday</td><td>テュール（北欧の戦神）</td><td>古英語: Tīwesdæg — ローマのマルスを置換</td></tr>
<tr><td>Wednesday</td><td>ウォーデン/オーディン（北欧主神）</td><td>古英語: Wōdnesdæg — ローマのメルクリウスを置換</td></tr>
<tr><td>Thursday</td><td>トール（北欧の雷神）</td><td>古英語: Þūnresdæg — ローマのユピテルを置換</td></tr>
<tr><td>Friday</td><td>フリッグ/フレイヤ（北欧の女神）</td><td>古英語: Frīgedæg — ローマのウェヌスを置換</td></tr>
<tr><td>Saturday</td><td>サトゥルヌス（ローマの神）</td><td>古英語: Sæternesdæg — ローマ名を保持</td></tr>
<tr><td>Sunday</td><td>太陽 (Sol)</td><td>古英語: Sunnandæg（「太陽の日」）</td></tr>
</table>`
      },
      {
        h2: '火曜〜金曜に北欧の名前がある理由',
        body: `<p>ゲルマン部族がローマの7日間の週を採用した（紀元1〜3世紀頃）とき、ローマの惑星神を自分たちの対応する神々に置き換えました：</p>
<ul>
<li>マルス（戦争）→ テュール（北欧の戦神）→ Tuesday</li>
<li>メルクリウス（使者）→ ウォーデン/オーディン（知恵、旅）→ Wednesday</li>
<li>ユピテル（雷の王）→ トール（雷神）→ Thursday</li>
<li>ウェヌス（愛）→ フリッグまたはフレイヤ（愛/豊穣）→ Friday</li>
</ul>
<p>Saturdayはローマ名を保持しました（サトゥルヌスには北欧の対応神がいなかった）。SundayとMondayは文化を超えて共有された天体名を保持しました。</p>`
      },
      {
        h2: '他の言語での曜日名',
        body: '',
        table: `<table>
<tr><th>曜日</th><th>フランス語</th><th>スペイン語</th><th>イタリア語</th><th>由来</th></tr>
<tr><td>月曜日</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna（月）</td></tr>
<tr><td>火曜日</td><td>mardi</td><td>martes</td><td>martedì</td><td>マルス</td></tr>
<tr><td>水曜日</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>メルクリウス</td></tr>
<tr><td>木曜日</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>ユピテル/ヨウェ</td></tr>
<tr><td>金曜日</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>ウェヌス</td></tr>
<tr><td>土曜日</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath（ヘブライ語）</td></tr>
<tr><td>日曜日</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica（主の日）</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'なぜ「Wednesday」は発音されない「d」が含まれているのですか？', a: "WednesdayはOld English（古英語）の「Wōdnesdæg」（ウォーデンの日）に由来します。「d」は古英語では発音されていましたが、時間とともに発音から消え、スペリングだけが残りました。" },
      { q: 'なぜSaturdayだけローマの名前なのですか？', a: 'サトゥルヌスは北欧神話に明確な対応神がいなかったため、ゲルマン部族はローマ名をそのまま使いました。他の曜日はすべて北欧の神々に置き換えられました。' },
      { q: 'なぜロマンス語ではSaturdayが「Sabbath」なのですか？', a: "ロマンス語（フランス語、スペイン語、イタリア語、ポルトガル語）はヘブライ語の「Shabbat」をラテン語「Sabbatum」を通じて取り込みました。英語は代わりにゲルマン語の「サトゥルヌスの日」を保持しました。" },
      { q: 'Sundayはどういう意味ですか？', a: "Sundayは「太陽の日」を意味します — 古英語「Sunnandæg」から。ロマンス語では日曜日は「主の日」（dies Dominica）となりました：dimanche、domingo、domenica。" },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "今日は何曜日？" },
    related: [
      { href: '/ja/umareta-youbi-wa/', label: '生まれた曜日は何曜日？' },
      { href: '/ja/isshu-wa-nichiyobi-ka-getsuyobi-ka/', label: '週の始まりは日曜日？月曜日？' },
      { href: '/ja/sekai-no-koyomi-shisutemu/', label: '世界の暦システム' },
    ],
  },
  ko: {
    title: "요일 이름의 유래와 역사",
    metaDesc: "요일 이름은 어디서 왔을까요? 로마 행성 신들, 북유럽 신화, 그리고 언어마다 이름이 다른 이유를 알아보세요.",
    kicker: '달력의 역사',
    h1: "요일의 이름은 어디서 왔을까?",
    intro: "영어의 요일 이름은 로마의 행성 신들과 북유럽 신화가 혼합된 것입니다. 대부분의 유럽 언어들도 같은 로마의 패턴을 따르지만, 각자 고유한 변형이 있습니다.",
    sections: [
      {
        h2: '영어 요일 이름: 로마 행성과 북유럽 신들',
        body: '',
        table: `<table>
<tr><th>요일</th><th>유래</th><th>기원</th></tr>
<tr><td>Monday</td><td>달 (Luna)</td><td>고대 영어: Mōnandæg ("달의 날")</td></tr>
<tr><td>Tuesday</td><td>티르 (북유럽 전쟁의 신)</td><td>고대 영어: Tīwesdæg — 로마의 마르스 대체</td></tr>
<tr><td>Wednesday</td><td>보탄/오딘 (북유럽 주신)</td><td>고대 영어: Wōdnesdæg — 로마의 머큐리 대체</td></tr>
<tr><td>Thursday</td><td>토르 (북유럽 천둥의 신)</td><td>고대 영어: Þūnresdæg — 로마의 주피터 대체</td></tr>
<tr><td>Friday</td><td>프리그/프레이야 (북유럽 여신)</td><td>고대 영어: Frīgedæg — 로마의 비너스 대체</td></tr>
<tr><td>Saturday</td><td>사투르누스 (로마 신)</td><td>고대 영어: Sæternesdæg — 로마 이름 유지</td></tr>
<tr><td>Sunday</td><td>태양 (Sol)</td><td>고대 영어: Sunnandæg ("태양의 날")</td></tr>
</table>`
      },
      {
        h2: '영어에서 화요일부터 금요일이 북유럽 이름인 이유',
        body: `<p>게르만 부족들이 로마의 7일 주기를 채택했을 때(기원전후 1~3세기경), 로마의 행성 신들을 자신들의 동등한 신들로 교체했습니다:</p>
<ul>
<li>마르스(전쟁) → 티르(북유럽 전쟁의 신) → Tuesday</li>
<li>머큐리(전령) → 보탄/오딘(지혜, 여행) → Wednesday</li>
<li>주피터(천둥의 왕) → 토르(천둥의 신) → Thursday</li>
<li>비너스(사랑) → 프리그 또는 프레이야(사랑/풍요) → Friday</li>
</ul>
<p>Saturday는 로마 이름을 유지했습니다(사투르누스는 북유럽에 해당 신이 없었음). Sunday와 Monday는 문화를 가로질러 공유된 천체 이름을 유지했습니다.</p>`
      },
      {
        h2: '다른 언어의 요일 이름',
        body: '',
        table: `<table>
<tr><th>요일</th><th>프랑스어</th><th>스페인어</th><th>이탈리아어</th><th>기원</th></tr>
<tr><td>월요일</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (달)</td></tr>
<tr><td>화요일</td><td>mardi</td><td>martes</td><td>martedì</td><td>마르스</td></tr>
<tr><td>수요일</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>머큐리</td></tr>
<tr><td>목요일</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>주피터/조브</td></tr>
<tr><td>금요일</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>비너스</td></tr>
<tr><td>토요일</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (히브리어)</td></tr>
<tr><td>일요일</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (주의 날)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: '"Wednesday"에 발음되지 않는 "d"가 있는 이유는?', a: "Wednesday는 고대 영어 \"Wōdnesdæg\"(보탄의 날)에서 왔습니다. \"d\"는 고대 영어에서 발음되었지만 시간이 지나면서 발음에서 사라졌고, 철자만 남았습니다." },
      { q: 'Saturday만 로마 이름인 이유는?', a: '사투르누스는 북유럽 신화에 명확한 해당 신이 없었기 때문에, 게르만 부족들은 로마 이름을 유지했습니다. 다른 모든 요일은 북유럽 신들에 맞게 조정되었습니다.' },
      { q: '로망스어에서 Saturday가 "Sabbath"인 이유는?', a: "로망스어(프랑스어, 스페인어, 이탈리아어, 포르투갈어)는 히브리어 \"Shabbat\"에서 라틴어 \"Sabbatum\"을 통해 단어를 받아들였습니다. 영어는 대신 게르만어의 \"토성의 날\"을 유지했습니다." },
      { q: 'Sunday는 무슨 뜻인가요?', a: "Sunday는 \"태양의 날\"을 의미합니다 — 고대 영어 \"Sunnandæg\"에서. 로망스어에서 일요일은 \"주의 날\"(dies Dominica)이 되었습니다: dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "오늘은 무슨 요일?" },
    related: [
      { href: '/ko/nae-saengil-yo-il-eun/', label: '내 생일 요일은?' },
      { href: '/ko/ju-ga-il-yo-il-si-jak-i-il-kka-wol-yo-il-si-jak-i-il-kka/', label: '주는 일요일에 시작하나요, 월요일에 시작하나요?' },
      { href: '/ko/se-gye-ui-dal-ryeok-che-gye/', label: '세계의 달력 체계' },
    ],
  },
  nl: {
    title: "Oorsprong van de namen van de dagen van de week",
    metaDesc: "Waar komen de namen van de dagen van de week vandaan? Romeinse planetaire goden, Noordse mythologie en waarom verschillende talen verschillende namen hebben.",
    kicker: 'KALENDERGESCHIEDENIS',
    h1: "Dagen van de week: waar komen de namen vandaan?",
    intro: "De namen van de dagen van de week in het Nederlands zijn deels afgeleid van Germaanse tradities, deels van Latijn. Het Engels volgt een mix van Romeinse planetaire goden en Noordse mythologie.",
    sections: [
      {
        h2: 'Engelse dagnamen: Romeinse planeten en Noordse goden',
        body: '',
        table: `<table>
<tr><th>Dag</th><th>Vernoemd naar</th><th>Oorsprong</th></tr>
<tr><td>Monday</td><td>Maan (Luna)</td><td>Oudengelses: Mōnandæg ("dag van de Maan")</td></tr>
<tr><td>Tuesday</td><td>Tyr (Noordse oorlogsgod)</td><td>Oudengels: Tīwesdæg — verving de Romeinse Mars</td></tr>
<tr><td>Wednesday</td><td>Woden/Odin (opperste Noordse god)</td><td>Oudengels: Wōdnesdæg — verving de Romeinse Mercurius</td></tr>
<tr><td>Thursday</td><td>Thor (Noordse dondergod)</td><td>Oudengels: Þūnresdæg — verving de Romeinse Jupiter</td></tr>
<tr><td>Friday</td><td>Frigg/Freyja (Noordse godin)</td><td>Oudengels: Frīgedæg — verving de Romeinse Venus</td></tr>
<tr><td>Saturday</td><td>Saturnus (Romeinse god)</td><td>Oudengels: Sæternesdæg — Romeinse naam behouden</td></tr>
<tr><td>Sunday</td><td>Zon (Sol)</td><td>Oudengels: Sunnandæg ("dag van de Zon")</td></tr>
</table>`
      },
      {
        h2: 'Waarom dinsdag tot vrijdag Noordse namen hebben in het Engels',
        body: `<p>Toen Germaanse stammen de Romeinse 7-daagse week overnamen (rond de 1e–3e eeuw na Chr.), vervingen ze de Romeinse planetaire goden door hun eigen equivalente goden:</p>
<ul>
<li>Mars (oorlog) → Tyr (Noordse oorlogsgod) → Tuesday</li>
<li>Mercurius (boodschapper) → Woden/Odin (wijsheid, reizen) → Wednesday</li>
<li>Jupiter (donderkoning) → Thor (dondergod) → Thursday</li>
<li>Venus (liefde) → Frigg of Freyja (liefde/vruchtbaarheid) → Friday</li>
</ul>
<p>Saturday behield zijn Romeinse naam (Saturnus had geen Noords equivalent). Sunday en Monday behielden hemelse namen die door culturen werden gedeeld.</p>`
      },
      {
        h2: 'Dagnamen in andere talen',
        body: '',
        table: `<table>
<tr><th>Dag</th><th>Frans</th><th>Spaans</th><th>Italiaans</th><th>Oorsprong</th></tr>
<tr><td>Maandag</td><td>lundi</td><td>lunes</td><td>lunedì</td><td>Luna (Maan)</td></tr>
<tr><td>Dinsdag</td><td>mardi</td><td>martes</td><td>martedì</td><td>Mars</td></tr>
<tr><td>Woensdag</td><td>mercredi</td><td>miércoles</td><td>mercoledì</td><td>Mercurius</td></tr>
<tr><td>Donderdag</td><td>jeudi</td><td>jueves</td><td>giovedì</td><td>Jupiter/Jove</td></tr>
<tr><td>Vrijdag</td><td>vendredi</td><td>viernes</td><td>venerdì</td><td>Venus</td></tr>
<tr><td>Zaterdag</td><td>samedi</td><td>sábado</td><td>sabato</td><td>Sabbath (Hebreeuws)</td></tr>
<tr><td>Zondag</td><td>dimanche</td><td>domingo</td><td>domenica</td><td>Dies Dominica (Dag des Heren)</td></tr>
</table>`
      },
    ],
    faqs: [
      { q: 'Waarom wordt "Wednesday" geschreven met een "d" die niet wordt uitgesproken?', a: "Wednesday komt van \"Woden's day\" (Oudengels: Wōdnesdæg). De \"d\" werd uitgesproken in het Oudengels maar verdween na verloop van tijd uit de uitspraak, terwijl de spelling bewaard bleef." },
      { q: 'Waarom heeft Saturday een Romeinse naam maar de andere niet?', a: 'Saturnus had geen duidelijk equivalent in de Noordse mythologie, dus Germaanse stammen behielden de Romeinse naam. Alle andere weekdagen werden aangepast aan Noordse goden.' },
      { q: 'Waarom is Saturday "Sabbath" in Romaanse talen?', a: "Romaanse talen (Frans, Spaans, Italiaans, Portugees) namen het woord over van het Hebreeuwse \"Shabbat\" via het Latijnse \"Sabbatum\". Het Engels behield in plaats daarvan het Germaanse \"dag van Saturnus\"." },
      { q: 'Wat betekent Sunday?', a: "Sunday betekent \"dag van de Zon\" — van het Oudengelse \"Sunnandæg\". In Romaanse talen werd zondag de \"Dag des Heren\" (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Welke dag is het vandaag?" },
    related: [
      { href: '/nl/op-welke-dag-van-de-week-ben-ik-geboren/', label: 'Op welke dag van de week ben ik geboren?' },
      { href: '/nl/begint-de-week-op-zondag-of-maandag/', label: 'Begint de week op zondag of maandag?' },
      { href: '/nl/kalender-systemen-van-de-wereld/', label: 'Kalendersystemen van de wereld' },
    ],
  },
};

// ── Article 3: does-the-week-start-on-sunday-or-monday ────────
T['does-the-week-start-on-sunday-or-monday'] = {
  en: {
    title: 'Does the Week Start on Sunday or Monday?',
    metaDesc: 'Does the week start on Sunday or Monday? ISO 8601 says Monday. The US, Canada, and Japan use Sunday. Full country breakdown.',
    kicker: 'CALENDAR GUIDE',
    h1: 'Does the Week Start on Sunday or Monday?',
    intro: 'It depends on where you are. The international ISO 8601 standard defines Monday as the first day of the week. But the United States, Canada, much of Latin America, and Japan traditionally start their week on Sunday.',
    sections: [
      {
        h2: 'Sunday-first vs Monday-first countries',
        body: '',
        table: `<table>
<tr><th>First day of week</th><th>Countries / Regions</th></tr>
<tr><td><strong>Monday</strong></td><td>Most of Europe, UK, Australia, China, Russia, most of Africa, ISO 8601 standard</td></tr>
<tr><td><strong>Sunday</strong></td><td>United States, Canada, Mexico, Brazil, Japan, South Korea, most of Latin America</td></tr>
<tr><td><strong>Saturday</strong></td><td>Some Islamic countries (Maldives, Afghanistan)</td></tr>
</table>`
      },
      {
        h2: "Why the difference?",
        body: `<p>The difference traces back to two traditions:</p>
<ul>
<li><strong>Abrahamic tradition:</strong> The Sabbath (day of rest) is the last day of the week — Saturday in Judaism, Sunday in Christianity. This makes Sunday the "first" day of the new week in religious calendars, which influenced US and Latin American calendars.</li>
<li><strong>ISO 8601 / European tradition:</strong> The international standard defines Monday as day 1 and Sunday as day 7, reflecting the secular work week pattern common in Europe.</li>
</ul>`
      },
      {
        h2: 'Impact on calendars and software',
        body: `<p>This difference affects how calendars display weeks:</p>
<ul>
<li>US calendars and Google Calendar (US locale) show Sunday as the first column</li>
<li>European calendars and ISO-compliant apps show Monday first</li>
<li>In spreadsheets: <code>=WEEKDAY(A1, 2)</code> uses Monday=1 (ISO mode)</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'What does ISO 8601 say about the first day of the week?', a: 'ISO 8601 defines Monday as day 1 and Sunday as day 7. This is the international standard used in business, logistics, and most of Europe.' },
      { q: 'Why does the US week start on Sunday?', a: 'The US convention traces back to the Judeo-Christian tradition where Sunday is the first day of the new week, following the Sabbath (Saturday).' },
      { q: 'Does Google Calendar start the week on Sunday or Monday?', a: 'Google Calendar defaults to Sunday in the US locale. You can change it in Settings → View options → Start week on → Monday.' },
      { q: 'In the Bible, what is the first day of the week?', a: 'In the Bible, Sunday is the first day of the week. Genesis describes God resting on the seventh day (Sabbath = Saturday), making Sunday the start of the new week.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "What Day Is It Today?" },
    related: [
      { href: '/days-of-the-week-names-origin/', label: 'Days of the week: name origins' },
      { href: '/iso-week-number-explained/', label: 'ISO week number explained' },
      { href: '/what-day-of-the-week-was-i-born/', label: 'What day of the week was I born?' },
    ],
  },
  fr: {
    title: 'La semaine commence-t-elle le dimanche ou le lundi ?',
    metaDesc: "La semaine commence-t-elle le dimanche ou le lundi ? La norme ISO 8601 dit lundi. Les États-Unis, le Canada et le Japon utilisent le dimanche. Tableau complet par pays.",
    kicker: 'GUIDE CALENDRIER',
    h1: 'La semaine commence-t-elle le dimanche ou le lundi ?',
    intro: "Cela dépend d'où vous êtes. La norme internationale ISO 8601 définit le lundi comme premier jour de la semaine. Mais les États-Unis, le Canada, une grande partie de l'Amérique latine et le Japon commencent traditionnellement leur semaine le dimanche.",
    sections: [
      {
        h2: 'Pays commençant le dimanche vs le lundi',
        body: '',
        table: `<table>
<tr><th>Premier jour de la semaine</th><th>Pays / Régions</th></tr>
<tr><td><strong>Lundi</strong></td><td>La plupart de l'Europe, Royaume-Uni, Australie, Chine, Russie, la majeure partie de l'Afrique, norme ISO 8601</td></tr>
<tr><td><strong>Dimanche</strong></td><td>États-Unis, Canada, Mexique, Brésil, Japon, Corée du Sud, la plupart de l'Amérique latine</td></tr>
<tr><td><strong>Samedi</strong></td><td>Certains pays islamiques (Maldives, Afghanistan)</td></tr>
</table>`
      },
      {
        h2: "Pourquoi cette différence ?",
        body: `<p>La différence remonte à deux traditions :</p>
<ul>
<li><strong>Tradition abrahamique :</strong> Le Sabbat (jour de repos) est le dernier jour de la semaine — le samedi dans le judaïsme, le dimanche dans le christianisme. Cela fait du dimanche le « premier » jour de la nouvelle semaine dans les calendriers religieux, ce qui a influencé les calendriers américains et latino-américains.</li>
<li><strong>ISO 8601 / tradition européenne :</strong> La norme internationale définit le lundi comme jour 1 et le dimanche comme jour 7, reflétant le schéma de la semaine de travail laïque courant en Europe.</li>
</ul>`
      },
      {
        h2: "Impact sur les calendriers et les logiciels",
        body: `<p>Cette différence affecte la façon dont les calendriers affichent les semaines :</p>
<ul>
<li>Les calendriers américains et Google Agenda (paramètre régional US) affichent le dimanche en première colonne</li>
<li>Les calendriers européens et les applications conformes ISO affichent le lundi en premier</li>
<li>Dans les tableurs : <code>=WEEKDAY(A1, 2)</code> utilise Lundi=1 (mode ISO)</li>
</ul>`
      },
    ],
    faqs: [
      { q: "Que dit la norme ISO 8601 sur le premier jour de la semaine ?", a: "La norme ISO 8601 définit le lundi comme jour 1 et le dimanche comme jour 7. C'est la norme internationale utilisée dans les affaires, la logistique et la majeure partie de l'Europe." },
      { q: "Pourquoi la semaine américaine commence-t-elle le dimanche ?", a: "La convention américaine remonte à la tradition judéo-chrétienne où le dimanche est le premier jour de la nouvelle semaine, après le Sabbat (samedi)." },
      { q: "Google Agenda commence-t-il la semaine le dimanche ou le lundi ?", a: "Google Agenda affiche le dimanche par défaut dans les paramètres régionaux américains. Vous pouvez le modifier dans Paramètres → Options d'affichage → Début de semaine → Lundi." },
      { q: "Dans la Bible, quel est le premier jour de la semaine ?", a: "Dans la Bible, le dimanche est le premier jour de la semaine. La Genèse décrit Dieu se reposant le septième jour (Sabbat = samedi), faisant du dimanche le début de la nouvelle semaine." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Quel jour est-on aujourd'hui ?" },
    related: [
      { href: '/fr/origine-noms-jours-de-la-semaine/', label: 'Jours de la semaine : origines des noms' },
      { href: '/fr/numero-semaine-iso-explique/', label: 'Numéro de semaine ISO expliqué' },
      { href: '/fr/quel-jour-de-la-semaine-suis-je-ne/', label: 'Quel jour de la semaine suis-je né ?' },
    ],
  },
  es: {
    title: '¿La semana empieza el domingo o el lunes?',
    metaDesc: "¿La semana empieza el domingo o el lunes? La norma ISO 8601 dice el lunes. EE.UU., Canadá y Japón usan el domingo. Desglose completo por país.",
    kicker: 'GUÍA CALENDARIOS',
    h1: '¿La semana empieza el domingo o el lunes?',
    intro: "Depende de dónde estés. La norma internacional ISO 8601 define el lunes como el primer día de la semana. Pero Estados Unidos, Canadá, gran parte de Latinoamérica y Japón comienzan tradicionalmente la semana el domingo.",
    sections: [
      {
        h2: 'Países que empiezan el domingo vs el lunes',
        body: '',
        table: `<table>
<tr><th>Primer día de la semana</th><th>Países / Regiones</th></tr>
<tr><td><strong>Lunes</strong></td><td>La mayor parte de Europa, Reino Unido, Australia, China, Rusia, la mayor parte de África, norma ISO 8601</td></tr>
<tr><td><strong>Domingo</strong></td><td>Estados Unidos, Canadá, México, Brasil, Japón, Corea del Sur, la mayor parte de Latinoamérica</td></tr>
<tr><td><strong>Sábado</strong></td><td>Algunos países islámicos (Maldivas, Afganistán)</td></tr>
</table>`
      },
      {
        h2: "¿Por qué existe esta diferencia?",
        body: `<p>La diferencia se remonta a dos tradiciones:</p>
<ul>
<li><strong>Tradición abrahámica:</strong> El Sabbat (día de descanso) es el último día de la semana — el sábado en el judaísmo, el domingo en el cristianismo. Esto convierte al domingo en el «primer» día de la nueva semana en los calendarios religiosos, lo que influyó en los calendarios de EE.UU. y Latinoamérica.</li>
<li><strong>ISO 8601 / tradición europea:</strong> La norma internacional define el lunes como día 1 y el domingo como día 7, reflejando el patrón secular de la semana laboral común en Europa.</li>
</ul>`
      },
      {
        h2: 'Impacto en calendarios y software',
        body: `<p>Esta diferencia afecta cómo los calendarios muestran las semanas:</p>
<ul>
<li>Los calendarios de EE.UU. y Google Calendar (configuración regional de EE.UU.) muestran el domingo como primera columna</li>
<li>Los calendarios europeos y las aplicaciones conformes con ISO muestran el lunes primero</li>
<li>En hojas de cálculo: <code>=WEEKDAY(A1, 2)</code> usa Lunes=1 (modo ISO)</li>
</ul>`
      },
    ],
    faqs: [
      { q: '¿Qué dice la norma ISO 8601 sobre el primer día de la semana?', a: 'La norma ISO 8601 define el lunes como día 1 y el domingo como día 7. Es la norma internacional utilizada en negocios, logística y la mayor parte de Europa.' },
      { q: '¿Por qué la semana en EE.UU. empieza el domingo?', a: 'La convención estadounidense se remonta a la tradición judeocristiana, donde el domingo es el primer día de la nueva semana, después del Sabbat (sábado).' },
      { q: '¿Google Calendar empieza la semana el domingo o el lunes?', a: 'Google Calendar muestra el domingo por defecto en la configuración regional de EE.UU. Puedes cambiarlo en Configuración → Opciones de vista → Comenzar la semana el → Lunes.' },
      { q: 'En la Biblia, ¿cuál es el primer día de la semana?', a: 'En la Biblia, el domingo es el primer día de la semana. El Génesis describe a Dios descansando el séptimo día (Sabbat = sábado), haciendo del domingo el inicio de la nueva semana.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "¿Qué día es hoy?" },
    related: [
      { href: '/es/origen-nombres-dias-semana/', label: 'Días de la semana: origen de los nombres' },
      { href: '/es/numero-semana-iso-explicado/', label: 'Número de semana ISO explicado' },
      { href: '/es/que-dia-de-la-semana-naci/', label: '¿Qué día de la semana nací?' },
    ],
  },
  pt: {
    title: "A semana começa no domingo ou na segunda-feira?",
    metaDesc: "A semana começa no domingo ou na segunda-feira? A norma ISO 8601 diz segunda-feira. EUA, Canadá e Japão usam o domingo. Detalhamento completo por país.",
    kicker: 'INÍCIO DA SEMANA',
    h1: "A semana começa no domingo ou na segunda-feira?",
    intro: "Depende de onde você está. A norma internacional ISO 8601 define a segunda-feira como o primeiro dia da semana. Mas os Estados Unidos, o Canadá, grande parte da América Latina e o Japão tradicionalmente começam a semana no domingo.",
    sections: [
      {
        h2: 'Países que começam no domingo vs na segunda-feira',
        body: '',
        table: `<table>
<tr><th>Primeiro dia da semana</th><th>Países / Regiões</th></tr>
<tr><td><strong>Segunda-feira</strong></td><td>A maior parte da Europa, Reino Unido, Austrália, China, Rússia, a maior parte da África, norma ISO 8601</td></tr>
<tr><td><strong>Domingo</strong></td><td>Estados Unidos, Canadá, México, Brasil, Japão, Coreia do Sul, a maior parte da América Latina</td></tr>
<tr><td><strong>Sábado</strong></td><td>Alguns países islâmicos (Maldivas, Afeganistão)</td></tr>
</table>`
      },
      {
        h2: "Por que essa diferença?",
        body: `<p>A diferença remonta a duas tradições:</p>
<ul>
<li><strong>Tradição abraâmica:</strong> O Sabbat (dia de descanso) é o último dia da semana — sábado no judaísmo, domingo no cristianismo. Isso torna o domingo o "primeiro" dia da nova semana nos calendários religiosos, o que influenciou os calendários dos EUA e da América Latina.</li>
<li><strong>ISO 8601 / tradição europeia:</strong> A norma internacional define a segunda-feira como dia 1 e o domingo como dia 7, refletindo o padrão secular da semana de trabalho comum na Europa.</li>
</ul>`
      },
      {
        h2: 'Impacto em calendários e softwares',
        body: `<p>Essa diferença afeta como os calendários exibem as semanas:</p>
<ul>
<li>Calendários dos EUA e Google Calendar (localidade dos EUA) mostram o domingo como primeira coluna</li>
<li>Calendários europeus e aplicativos conformes com ISO mostram a segunda-feira primeiro</li>
<li>Em planilhas: <code>=WEEKDAY(A1, 2)</code> usa Segunda=1 (modo ISO)</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'O que a norma ISO 8601 diz sobre o primeiro dia da semana?', a: 'A ISO 8601 define a segunda-feira como dia 1 e o domingo como dia 7. É a norma internacional usada em negócios, logística e na maior parte da Europa.' },
      { q: 'Por que a semana nos EUA começa no domingo?', a: 'A convenção americana remonta à tradição judaico-cristã, onde o domingo é o primeiro dia da nova semana, após o Sabbat (sábado).' },
      { q: 'O Google Calendar começa a semana no domingo ou na segunda-feira?', a: 'O Google Calendar usa o domingo por padrão na localidade dos EUA. Você pode alterá-lo em Configurações → Opções de visualização → Início da semana → Segunda-feira.' },
      { q: 'Na Bíblia, qual é o primeiro dia da semana?', a: 'Na Bíblia, o domingo é o primeiro dia da semana. O Gênesis descreve Deus descansando no sétimo dia (Sabbat = sábado), tornando o domingo o início da nova semana.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Que dia é hoje?" },
    related: [
      { href: '/pt/origem-nomes-dias-semana/', label: 'Dias da semana: origem dos nomes' },
      { href: '/pt/que-dia-da-semana-nasci/', label: 'Que dia da semana nasci?' },
      { href: '/pt/sistemas-de-calendario-do-mundo/', label: 'Sistemas de calendário do mundo' },
    ],
  },
  de: {
    title: "Beginnt die Woche am Sonntag oder Montag?",
    metaDesc: "Beginnt die Woche am Sonntag oder Montag? ISO 8601 sagt Montag. USA, Kanada und Japan verwenden Sonntag. Vollständige Länderübersicht.",
    kicker: 'WOCHENBEGINN',
    h1: "Beginnt die Woche am Sonntag oder Montag?",
    intro: "Das hängt davon ab, wo du bist. Der internationale Standard ISO 8601 definiert den Montag als ersten Tag der Woche. Aber die Vereinigten Staaten, Kanada, ein Großteil Lateinamerikas und Japan beginnen ihre Woche traditionell am Sonntag.",
    sections: [
      {
        h2: 'Länder mit Sonntag- vs. Montag-Start',
        body: '',
        table: `<table>
<tr><th>Erster Wochentag</th><th>Länder / Regionen</th></tr>
<tr><td><strong>Montag</strong></td><td>Großteil Europas, UK, Australien, China, Russland, Großteil Afrikas, ISO 8601 Standard</td></tr>
<tr><td><strong>Sonntag</strong></td><td>USA, Kanada, Mexiko, Brasilien, Japan, Südkorea, Großteil Lateinamerikas</td></tr>
<tr><td><strong>Samstag</strong></td><td>Einige islamische Länder (Malediven, Afghanistan)</td></tr>
</table>`
      },
      {
        h2: "Warum dieser Unterschied?",
        body: `<p>Der Unterschied geht auf zwei Traditionen zurück:</p>
<ul>
<li><strong>Abrahamitische Tradition:</strong> Der Sabbat (Ruhetag) ist der letzte Tag der Woche — Samstag im Judentum, Sonntag im Christentum. Das macht den Sonntag zum "ersten" Tag der neuen Woche in religiösen Kalendern, was US-amerikanische und lateinamerikanische Kalender beeinflusste.</li>
<li><strong>ISO 8601 / europäische Tradition:</strong> Der internationale Standard definiert Montag als Tag 1 und Sonntag als Tag 7, was das säkulare Arbeitswochenmuster widerspiegelt, das in Europa üblich ist.</li>
</ul>`
      },
      {
        h2: 'Auswirkungen auf Kalender und Software',
        body: `<p>Dieser Unterschied beeinflusst, wie Kalender Wochen anzeigen:</p>
<ul>
<li>US-Kalender und Google Calendar (US-Spracheinstellung) zeigen Sonntag als erste Spalte</li>
<li>Europäische Kalender und ISO-konforme Apps zeigen Montag zuerst</li>
<li>In Tabellenkalkulationen: <code>=WEEKDAY(A1, 2)</code> verwendet Montag=1 (ISO-Modus)</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Was sagt ISO 8601 über den ersten Tag der Woche?', a: 'ISO 8601 definiert Montag als Tag 1 und Sonntag als Tag 7. Das ist der internationale Standard, der in Wirtschaft, Logistik und in den meisten europäischen Ländern verwendet wird.' },
      { q: 'Warum beginnt die US-Woche am Sonntag?', a: 'Die US-Konvention geht auf die jüdisch-christliche Tradition zurück, in der der Sonntag der erste Tag der neuen Woche ist, nach dem Sabbat (Samstag).' },
      { q: 'Beginnt Google Calendar die Woche am Sonntag oder Montag?', a: 'Google Calendar startet standardmäßig mit Sonntag in der US-Spracheinstellung. Du kannst dies in Einstellungen → Anzeigeoptionen → Woche beginnt am → Montag ändern.' },
      { q: 'Was ist in der Bibel der erste Tag der Woche?', a: 'In der Bibel ist der Sonntag der erste Tag der Woche. Genesis beschreibt Gott, der am siebten Tag ruht (Sabbat = Samstag), was den Sonntag zum Beginn der neuen Woche macht.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Welcher Tag ist heute?" },
    related: [
      { href: '/de/herkunft-wochentagsnamen/', label: 'Wochentage: Herkunft der Namen' },
      { href: '/de/an-welchem-wochentag-bin-ich-geboren/', label: 'An welchem Wochentag bin ich geboren?' },
      { href: '/de/kalender-systeme-der-welt/', label: 'Kalendersysteme der Welt' },
    ],
  },
  it: {
    title: "La settimana inizia domenica o lunedì?",
    metaDesc: "La settimana inizia domenica o lunedì? La norma ISO 8601 dice lunedì. USA, Canada e Giappone usano la domenica. Dettaglio completo per paese.",
    kicker: 'INIZIO DELLA SETTIMANA',
    h1: "La settimana inizia domenica o lunedì?",
    intro: "Dipende da dove ti trovi. Lo standard internazionale ISO 8601 definisce il lunedì come primo giorno della settimana. Ma gli Stati Uniti, il Canada, gran parte dell'America Latina e il Giappone iniziano tradizionalmente la settimana di domenica.",
    sections: [
      {
        h2: 'Paesi che iniziano di domenica vs di lunedì',
        body: '',
        table: `<table>
<tr><th>Primo giorno della settimana</th><th>Paesi / Regioni</th></tr>
<tr><td><strong>Lunedì</strong></td><td>La maggior parte d'Europa, Regno Unito, Australia, Cina, Russia, la maggior parte dell'Africa, standard ISO 8601</td></tr>
<tr><td><strong>Domenica</strong></td><td>Stati Uniti, Canada, Messico, Brasile, Giappone, Corea del Sud, la maggior parte dell'America Latina</td></tr>
<tr><td><strong>Sabato</strong></td><td>Alcuni paesi islamici (Maldive, Afghanistan)</td></tr>
</table>`
      },
      {
        h2: "Perché questa differenza?",
        body: `<p>La differenza risale a due tradizioni:</p>
<ul>
<li><strong>Tradizione abramitica:</strong> Il Sabato (giorno di riposo) è l'ultimo giorno della settimana — sabato nel giudaismo, domenica nel cristianesimo. Questo rende la domenica il "primo" giorno della nuova settimana nei calendari religiosi, il che ha influenzato i calendari statunitensi e latinoamericani.</li>
<li><strong>ISO 8601 / tradizione europea:</strong> Lo standard internazionale definisce il lunedì come giorno 1 e la domenica come giorno 7, rispecchiando il modello laico della settimana lavorativa comune in Europa.</li>
</ul>`
      },
      {
        h2: 'Impatto su calendari e software',
        body: `<p>Questa differenza influenza come i calendari mostrano le settimane:</p>
<ul>
<li>I calendari statunitensi e Google Calendar (localizzazione USA) mostrano la domenica come prima colonna</li>
<li>I calendari europei e le app conformi a ISO mostrano il lunedì per primo</li>
<li>Nei fogli di calcolo: <code>=WEEKDAY(A1, 2)</code> usa Lunedì=1 (modalità ISO)</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Cosa dice la norma ISO 8601 sul primo giorno della settimana?', a: 'ISO 8601 definisce il lunedì come giorno 1 e la domenica come giorno 7. È lo standard internazionale usato in affari, logistica e nella maggior parte dell\'Europa.' },
      { q: 'Perché negli USA la settimana inizia di domenica?', a: 'La convenzione statunitense risale alla tradizione giudaico-cristiana in cui la domenica è il primo giorno della nuova settimana, dopo il Sabato (sabato).' },
      { q: 'Google Calendar inizia la settimana di domenica o di lunedì?', a: 'Google Calendar usa la domenica per impostazione predefinita nella localizzazione USA. Puoi cambiarlo in Impostazioni → Opzioni di visualizzazione → Inizio settimana → Lunedì.' },
      { q: 'Nella Bibbia, qual è il primo giorno della settimana?', a: "Nella Bibbia, la domenica è il primo giorno della settimana. La Genesi descrive Dio che riposa il settimo giorno (Sabato = sabato), rendendo la domenica l'inizio della nuova settimana." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Che giorno è oggi?" },
    related: [
      { href: '/it/origine-nomi-giorni-settimana/', label: 'Giorni della settimana: origine dei nomi' },
      { href: '/it/che-giorno-della-settimana-sono-nato/', label: 'Che giorno della settimana sono nato?' },
      { href: '/it/sistemi-di-calendario-del-mondo/', label: 'Sistemi di calendario del mondo' },
    ],
  },
  pl: {
    title: "Czy tydzień zaczyna się w niedzielę czy w poniedziałek?",
    metaDesc: "Czy tydzień zaczyna się w niedzielę czy w poniedziałek? Norma ISO 8601 mówi poniedziałek. USA, Kanada i Japonia używają niedzieli. Pełne zestawienie według krajów.",
    kicker: 'POCZĄTEK TYGODNIA',
    h1: "Czy tydzień zaczyna się w niedzielę czy w poniedziałek?",
    intro: "To zależy od tego, gdzie jesteś. Międzynarodowa norma ISO 8601 określa poniedziałek jako pierwszy dzień tygodnia. Ale Stany Zjednoczone, Kanada, duża część Ameryki Łacińskiej i Japonia tradycyjnie zaczynają tydzień w niedzielę.",
    sections: [
      {
        h2: 'Kraje zaczynające tydzień w niedzielę vs w poniedziałek',
        body: '',
        table: `<table>
<tr><th>Pierwszy dzień tygodnia</th><th>Kraje / Regiony</th></tr>
<tr><td><strong>Poniedziałek</strong></td><td>Większość Europy, Wielka Brytania, Australia, Chiny, Rosja, większość Afryki, norma ISO 8601</td></tr>
<tr><td><strong>Niedziela</strong></td><td>USA, Kanada, Meksyk, Brazylia, Japonia, Korea Południowa, większość Ameryki Łacińskiej</td></tr>
<tr><td><strong>Sobota</strong></td><td>Niektóre kraje islamskie (Malediwy, Afganistan)</td></tr>
</table>`
      },
      {
        h2: "Dlaczego ta różnica?",
        body: `<p>Różnica sięga dwóch tradycji:</p>
<ul>
<li><strong>Tradycja abrahamiczna:</strong> Szabat (dzień odpoczynku) jest ostatnim dniem tygodnia — sobota w judaizmie, niedziela w chrześcijaństwie. To sprawia, że niedziela jest "pierwszym" dniem nowego tygodnia w kalendarzach religijnych, co wpłynęło na kalendarze USA i Ameryki Łacińskiej.</li>
<li><strong>ISO 8601 / tradycja europejska:</strong> Norma międzynarodowa definiuje poniedziałek jako dzień 1, a niedzielę jako dzień 7, odzwierciedlając świecki wzorzec tygodnia pracy powszechny w Europie.</li>
</ul>`
      },
      {
        h2: 'Wpływ na kalendarze i oprogramowanie',
        body: `<p>Ta różnica wpływa na sposób wyświetlania tygodni w kalendarzach:</p>
<ul>
<li>Kalendarze USA i Google Calendar (ustawienia regionalne USA) pokazują niedzielę jako pierwszą kolumnę</li>
<li>Europejskie kalendarze i aplikacje zgodne z ISO pokazują poniedziałek jako pierwszy</li>
<li>W arkuszach kalkulacyjnych: <code>=WEEKDAY(A1, 2)</code> używa Poniedziałek=1 (tryb ISO)</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Co norma ISO 8601 mówi o pierwszym dniu tygodnia?', a: 'ISO 8601 definiuje poniedziałek jako dzień 1, a niedzielę jako dzień 7. To międzynarodowa norma stosowana w biznesie, logistyce i większości Europy.' },
      { q: 'Dlaczego tydzień w USA zaczyna się w niedzielę?', a: 'Konwencja amerykańska wywodzi się z tradycji judeochrześcijańskiej, gdzie niedziela jest pierwszym dniem nowego tygodnia, po Szabacie (sobota).' },
      { q: 'Czy Google Calendar zaczyna tydzień w niedzielę czy w poniedziałek?', a: 'Google Calendar domyślnie używa niedzieli w ustawieniach regionalnych USA. Możesz to zmienić w Ustawienia → Opcje widoku → Pierwszy dzień tygodnia → Poniedziałek.' },
      { q: 'Jaki jest pierwszy dzień tygodnia w Biblii?', a: 'W Biblii niedziela jest pierwszym dniem tygodnia. Księga Rodzaju opisuje Boga odpoczywającego siódmego dnia (Szabat = sobota), co sprawia, że niedziela jest początkiem nowego tygodnia.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Jaki dzisiaj mamy dzień?" },
    related: [
      { href: '/pl/pochodzenie-nazw-dni-tygodnia/', label: 'Dni tygodnia: pochodzenie nazw' },
      { href: '/pl/w-jaki-dzien-tygodnia-sie-urodzilam/', label: 'W jaki dzień tygodnia się urodziłam?' },
      { href: '/pl/systemy-kalendarzy-swiata/', label: 'Systemy kalendarzy świata' },
    ],
  },
  ja: {
    title: "週の始まりは日曜日？月曜日？",
    metaDesc: "週の始まりは日曜日？月曜日？ISO 8601は月曜日を定義。米国、カナダ、日本は日曜日を使用。国別の完全解説。",
    kicker: '週の始まり',
    h1: "週の始まりは日曜日か月曜日か？",
    intro: "それはあなたがどこにいるかによります。国際規格ISO 8601は月曜日を週の最初の日と定義しています。しかし米国、カナダ、中南米の多く、そして日本は伝統的に日曜日から週を始めます。",
    sections: [
      {
        h2: '日曜始まりと月曜始まりの国',
        body: '',
        table: `<table>
<tr><th>週の最初の日</th><th>国・地域</th></tr>
<tr><td><strong>月曜日</strong></td><td>ヨーロッパの大部分、英国、オーストラリア、中国、ロシア、アフリカの大部分、ISO 8601規格</td></tr>
<tr><td><strong>日曜日</strong></td><td>米国、カナダ、メキシコ、ブラジル、日本、韓国、中南米の大部分</td></tr>
<tr><td><strong>土曜日</strong></td><td>一部のイスラム諸国（モルディブ、アフガニスタン）</td></tr>
</table>`
      },
      {
        h2: "なぜ違いがあるのか？",
        body: `<p>この違いは2つの伝統に由来します：</p>
<ul>
<li><strong>アブラハムの伝統：</strong> 安息日（休息の日）は週の最後の日 — ユダヤ教では土曜日、キリスト教では日曜日。これにより日曜日が宗教的カレンダーにおける新しい週の「最初の日」となり、米国や中南米のカレンダーに影響を与えました。</li>
<li><strong>ISO 8601 / ヨーロッパの伝統：</strong> 国際規格は月曜日を1日目、日曜日を7日目と定義し、ヨーロッパで一般的な世俗的な労働週のパターンを反映しています。</li>
</ul>`
      },
      {
        h2: 'カレンダーとソフトウェアへの影響',
        body: `<p>この違いはカレンダーが週を表示する方法に影響します：</p>
<ul>
<li>米国のカレンダーとGoogle Calendar（米国ロケール）は日曜日を最初の列に表示</li>
<li>ヨーロッパのカレンダーとISO準拠アプリは月曜日を先頭に表示</li>
<li>スプレッドシートでは：<code>=WEEKDAY(A1, 2)</code> は月曜日=1を使用（ISOモード）</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'ISO 8601は週の最初の日について何と言っていますか？', a: 'ISO 8601は月曜日を1日目、日曜日を7日目と定義しています。これはビジネス、物流、ヨーロッパの大部分で使用される国際規格です。' },
      { q: '米国の週はなぜ日曜日から始まるのですか？', a: '米国の慣習はユダヤ・キリスト教の伝統に由来し、日曜日は安息日（土曜日）の後の新しい週の最初の日です。' },
      { q: 'Google Calendarは週を日曜日から始めますか、月曜日から始めますか？', a: 'Google Calendarは米国ロケールでデフォルトとして日曜日を使用します。設定 → 表示オプション → 週の開始日 → 月曜日で変更できます。' },
      { q: '聖書では週の最初の日は何曜日ですか？', a: '聖書では日曜日が週の最初の日です。創世記には神が7日目（安息日=土曜日）に休まれたと記されており、日曜日が新しい週の始まりとなります。' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "今日は何曜日？" },
    related: [
      { href: '/ja/youbi-no-namae-no-yurai/', label: '曜日の名前の由来' },
      { href: '/ja/umareta-youbi-wa/', label: '生まれた曜日は何曜日？' },
      { href: '/ja/sekai-no-koyomi-shisutemu/', label: '世界の暦システム' },
    ],
  },
  ko: {
    title: "주는 일요일에 시작하나요, 월요일에 시작하나요?",
    metaDesc: "주는 일요일에 시작하나요, 월요일에 시작하나요? ISO 8601은 월요일을 말합니다. 미국, 캐나다, 일본은 일요일을 사용합니다. 국가별 완전한 분석.",
    kicker: '주의 시작',
    h1: "주는 일요일에 시작하나요, 월요일에 시작하나요?",
    intro: "그것은 당신이 어디에 있느냐에 달려 있습니다. 국제 표준 ISO 8601은 월요일을 주의 첫 번째 날로 정의합니다. 하지만 미국, 캐나다, 라틴 아메리카 대부분, 그리고 일본은 전통적으로 일요일에 주를 시작합니다.",
    sections: [
      {
        h2: '일요일 시작 vs 월요일 시작 국가',
        body: '',
        table: `<table>
<tr><th>주의 첫 번째 날</th><th>국가 / 지역</th></tr>
<tr><td><strong>월요일</strong></td><td>유럽 대부분, 영국, 호주, 중국, 러시아, 아프리카 대부분, ISO 8601 표준</td></tr>
<tr><td><strong>일요일</strong></td><td>미국, 캐나다, 멕시코, 브라질, 일본, 한국, 라틴 아메리카 대부분</td></tr>
<tr><td><strong>토요일</strong></td><td>일부 이슬람 국가 (몰디브, 아프가니스탄)</td></tr>
</table>`
      },
      {
        h2: "왜 이런 차이가 있나요?",
        body: `<p>이 차이는 두 가지 전통으로 거슬러 올라갑니다:</p>
<ul>
<li><strong>아브라함 전통:</strong> 안식일(휴식의 날)은 주의 마지막 날입니다 — 유대교에서는 토요일, 기독교에서는 일요일. 이로 인해 일요일이 종교 달력에서 새로운 주의 "첫 번째" 날이 되었고, 미국과 라틴 아메리카 달력에 영향을 주었습니다.</li>
<li><strong>ISO 8601 / 유럽 전통:</strong> 국제 표준은 월요일을 1일, 일요일을 7일로 정의하며, 유럽에서 일반적인 세속적 업무 주간 패턴을 반영합니다.</li>
</ul>`
      },
      {
        h2: '달력과 소프트웨어에 미치는 영향',
        body: `<p>이 차이는 달력이 주를 표시하는 방식에 영향을 미칩니다:</p>
<ul>
<li>미국 달력과 Google 캘린더(미국 로케일)는 일요일을 첫 번째 열로 표시</li>
<li>유럽 달력과 ISO 준수 앱은 월요일을 먼저 표시</li>
<li>스프레드시트에서: <code>=WEEKDAY(A1, 2)</code>는 월요일=1을 사용 (ISO 모드)</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'ISO 8601은 주의 첫 번째 날에 대해 뭐라고 하나요?', a: 'ISO 8601은 월요일을 1일, 일요일을 7일로 정의합니다. 이것은 비즈니스, 물류 및 유럽 대부분에서 사용되는 국제 표준입니다.' },
      { q: '미국의 주는 왜 일요일에 시작하나요?', a: '미국 관습은 유대-기독교 전통에서 비롯된 것으로, 일요일은 안식일(토요일) 다음의 새로운 주의 첫 번째 날입니다.' },
      { q: 'Google 캘린더는 주를 일요일에 시작하나요, 월요일에 시작하나요?', a: 'Google 캘린더는 미국 로케일에서 기본값으로 일요일을 사용합니다. 설정 → 보기 옵션 → 주 시작일 → 월요일에서 변경할 수 있습니다.' },
      { q: '성경에서 주의 첫 번째 날은 무엇인가요?', a: '성경에서 일요일은 주의 첫 번째 날입니다. 창세기는 하나님이 일곱째 날(안식일=토요일)에 쉬셨다고 설명하며, 일요일을 새로운 주의 시작으로 만듭니다.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "오늘은 무슨 요일?" },
    related: [
      { href: '/ko/yo-il-i-reum-ui-yu-rae/', label: '요일 이름의 유래' },
      { href: '/ko/nae-saengil-yo-il-eun/', label: '내 생일 요일은?' },
      { href: '/ko/se-gye-ui-dal-ryeok-che-gye/', label: '세계의 달력 체계' },
    ],
  },
  nl: {
    title: "Begint de week op zondag of maandag?",
    metaDesc: "Begint de week op zondag of maandag? ISO 8601 zegt maandag. De VS, Canada en Japan gebruiken zondag. Volledig landenoverzicht.",
    kicker: 'BEGIN VAN DE WEEK',
    h1: "Begint de week op zondag of maandag?",
    intro: "Het hangt ervan af waar je bent. De internationale norm ISO 8601 definieert maandag als de eerste dag van de week. Maar de Verenigde Staten, Canada, een groot deel van Latijns-Amerika en Japan beginnen hun week traditioneel op zondag.",
    sections: [
      {
        h2: 'Landen met zondag- vs maandag-start',
        body: '',
        table: `<table>
<tr><th>Eerste dag van de week</th><th>Landen / Regio\'s</th></tr>
<tr><td><strong>Maandag</strong></td><td>Grootste deel van Europa, VK, Australië, China, Rusland, grootste deel van Afrika, ISO 8601 norm</td></tr>
<tr><td><strong>Zondag</strong></td><td>Verenigde Staten, Canada, Mexico, Brazilië, Japan, Zuid-Korea, grootste deel van Latijns-Amerika</td></tr>
<tr><td><strong>Zaterdag</strong></td><td>Sommige islamitische landen (Malediven, Afghanistan)</td></tr>
</table>`
      },
      {
        h2: "Waarom dit verschil?",
        body: `<p>Het verschil gaat terug op twee tradities:</p>
<ul>
<li><strong>Abrahamitische traditie:</strong> De Sabbat (rustdag) is de laatste dag van de week — zaterdag in het jodendom, zondag in het christendom. Dit maakt zondag de "eerste" dag van de nieuwe week in religieuze kalenders, wat de Amerikaanse en Latijns-Amerikaanse kalenders heeft beïnvloed.</li>
<li><strong>ISO 8601 / Europese traditie:</strong> De internationale norm definieert maandag als dag 1 en zondag als dag 7, wat het seculiere werkweekpatroon weerspiegelt dat gebruikelijk is in Europa.</li>
</ul>`
      },
      {
        h2: 'Impact op kalenders en software',
        body: `<p>Dit verschil beïnvloedt hoe kalenders weken weergeven:</p>
<ul>
<li>Amerikaanse kalenders en Google Calendar (VS-taalinstelling) tonen zondag als eerste kolom</li>
<li>Europese kalenders en ISO-conforme apps tonen maandag eerst</li>
<li>In spreadsheets: <code>=WEEKDAY(A1, 2)</code> gebruikt Maandag=1 (ISO-modus)</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Wat zegt ISO 8601 over de eerste dag van de week?', a: 'ISO 8601 definieert maandag als dag 1 en zondag als dag 7. Dit is de internationale norm die wordt gebruikt in het bedrijfsleven, logistiek en het grootste deel van Europa.' },
      { q: 'Waarom begint de week in de VS op zondag?', a: 'De Amerikaanse conventie gaat terug op de joods-christelijke traditie waarbij zondag de eerste dag van de nieuwe week is, na de Sabbat (zaterdag).' },
      { q: 'Begint Google Calendar de week op zondag of maandag?', a: 'Google Calendar gebruikt standaard zondag in de VS-taalinstelling. Je kunt dit wijzigen in Instellingen → Weergaveopties → Week begint op → Maandag.' },
      { q: 'Wat is in de Bijbel de eerste dag van de week?', a: 'In de Bijbel is zondag de eerste dag van de week. Genesis beschrijft God die op de zevende dag rust (Sabbat = zaterdag), waardoor zondag het begin van de nieuwe week wordt.' },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "Welke dag is het vandaag?" },
    related: [
      { href: '/nl/oorsprong-namen-dagen-van-de-week/', label: 'Dagen van de week: oorsprong van de namen' },
      { href: '/nl/op-welke-dag-van-de-week-ben-ik-geboren/', label: 'Op welke dag van de week ben ik geboren?' },
      { href: '/nl/kalender-systemen-van-de-wereld/', label: 'Kalendersystemen van de wereld' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'what-day-of-the-week-was-i-born',        slugs: { en: 'what-day-of-the-week-was-i-born',        fr: 'fr/quel-jour-de-la-semaine-suis-je-ne',     es: 'es/que-dia-de-la-semana-naci',                        pt: 'pt/que-dia-da-semana-nasci',                          de: 'de/an-welchem-wochentag-bin-ich-geboren',              it: 'it/che-giorno-della-settimana-sono-nato',              pl: 'pl/w-jaki-dzien-tygodnia-sie-urodzilam',               ja: 'ja/umareta-youbi-wa',                                  ko: 'ko/nae-saengil-yo-il-eun',                             nl: 'nl/op-welke-dag-van-de-week-ben-ik-geboren' } },
    { id: 'days-of-the-week-names-origin',            slugs: { en: 'days-of-the-week-names-origin',            fr: 'fr/origine-noms-jours-de-la-semaine',        es: 'es/origen-nombres-dias-semana',                       pt: 'pt/origem-nomes-dias-semana',                          de: 'de/herkunft-wochentagsnamen',                          it: 'it/origine-nomi-giorni-settimana',                     pl: 'pl/pochodzenie-nazw-dni-tygodnia',                     ja: 'ja/youbi-no-namae-no-yurai',                           ko: 'ko/yo-il-i-reum-ui-yu-rae',                            nl: 'nl/oorsprong-namen-dagen-van-de-week' } },
    { id: 'does-the-week-start-on-sunday-or-monday',  slugs: { en: 'does-the-week-start-on-sunday-or-monday',  fr: 'fr/la-semaine-commence-dimanche-ou-lundi',   es: 'es/empieza-la-semana-el-domingo-o-el-lunes',          pt: 'pt/a-semana-comeca-no-domingo-ou-segunda',             de: 'de/beginnt-die-woche-am-sonntag-oder-montag',          it: 'it/la-settimana-inizia-domenica-o-lunedi',             pl: 'pl/czy-tydzien-zaczyna-sie-w-niedziele-czy-poniedzialek', ja: 'ja/isshu-wa-nichiyobi-ka-getsuyobi-ka',              ko: 'ko/ju-ga-il-yo-il-si-jak-i-il-kka-wol-yo-il-si-jak-i-il-kka', nl: 'nl/begint-de-week-op-zondag-of-maandag' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
