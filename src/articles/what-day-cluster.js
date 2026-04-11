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
      { q: 'Por qué Saturday es "Sabbath" en las lenguas romances?', a: "Las lenguas romances (francés, español, italiano, portugués) tomaron la palabra del hebreo «Shabbat» a través del latín «Sabbatum». El inglés, en cambio, conservó el germánico «día de Saturno»." },
      { q: "¿Qué significa Sunday?", a: "Sunday significa «día del Sol» — del inglés antiguo «Sunnandæg». En las lenguas romances, el domingo se convirtió en el «Día del Señor» (dies Dominica): dimanche, domingo, domenica." },
    ],
    pillar: { href: '/what-day-is-it-today/', label: "¿Qué día es hoy?" },
    related: [
      { href: '/es/que-dia-de-la-semana-naci/', label: '¿Qué día de la semana nací?' },
      { href: '/es/empieza-la-semana-el-domingo-o-el-lunes/', label: '¿La semana empieza el domingo o el lunes?' },
      { href: '/es/sistemas-calendarios-mundo/', label: 'Sistemas de calendarios del mundo' },
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
};

module.exports = {
  pages: [
    { id: 'what-day-of-the-week-was-i-born',        slugs: { en: 'what-day-of-the-week-was-i-born',        fr: 'fr/quel-jour-de-la-semaine-suis-je-ne',     es: 'es/que-dia-de-la-semana-naci' } },
    { id: 'days-of-the-week-names-origin',            slugs: { en: 'days-of-the-week-names-origin',            fr: 'fr/origine-noms-jours-de-la-semaine',        es: 'es/origen-nombres-dias-semana' } },
    { id: 'does-the-week-start-on-sunday-or-monday',  slugs: { en: 'does-the-week-start-on-sunday-or-monday',  fr: 'fr/la-semaine-commence-dimanche-ou-lundi',   es: 'es/empieza-la-semana-el-domingo-o-el-lunes' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
