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
};

module.exports = {
  pages: [
    { id: 'iso-week-number-explained',  slugs: { en: 'iso-week-number-explained',  fr: 'fr/explication-numero-semaine-iso', es: 'es/explicacion-numero-semana-iso' } },
    { id: 'week-numbers-2025-calendar', slugs: { en: 'week-numbers-2025-calendar', fr: 'fr/calendrier-numeros-semaine-2025', es: 'es/calendario-numeros-semana-2025' } },
    { id: 'what-week-number-is-it',     slugs: { en: 'what-week-number-is-it',     fr: 'fr/quel-est-le-numero-de-semaine',  es: 'es/que-numero-de-semana-es' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
