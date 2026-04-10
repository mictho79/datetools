'use strict';
const T = {};

// ── Article 1: leap-years-list ────────────────────────────
T['leap-years-list'] = {
  en: {
    title: 'Complete List of Leap Years (1900–2100)',
    metaDesc: 'Every leap year from 1900 to 2100 in one complete list. Includes the leap year rule, why 1900 is NOT a leap year, and why 2000 IS.',
    kicker: 'CALENDAR REFERENCE',
    h1: 'Complete List of Leap Years (1900–2100)',
    intro: 'A leap year occurs every 4 years — with two exceptions. Here is every leap year from 1900 to 2100, plus the simple rule to calculate them.',
    sections: [
      {
        h2: 'The Leap Year Rule',
        body: `<p>A year is a leap year if it meets the following conditions:</p>
<ol>
<li><strong>Divisible by 4</strong> → leap year (e.g. 1904, 2004)</li>
<li><strong>Exception:</strong> Century years (1800, 1900, 2100) are <em>not</em> leap years — even though they are divisible by 4.</li>
<li><strong>Exception to the exception:</strong> Century years divisible by 400 <em>are</em> leap years (e.g. 2000).</li>
</ol>
<p>In practice: <strong>1900 is NOT a leap year</strong> (divisible by 100 but not 400). <strong>2000 IS a leap year</strong> (divisible by 400). <strong>2100 will NOT be a leap year</strong>.</p>`
      },
      {
        h2: 'All Leap Years 1900–2100',
        body: '<p>Note: 1900 and 2100 are <strong>not</strong> leap years. The next leap year after 2096 is 2104.</p>',
        table: `<table>
<tr><th>Year</th><th>Day count</th><th>Notable event</th></tr>
<tr><td>1904</td><td>366</td><td>St. Louis World's Fair</td></tr>
<tr><td>1908</td><td>366</td><td>First modern Olympics in London</td></tr>
<tr><td>1912</td><td>366</td><td>RMS Titanic sinks</td></tr>
<tr><td>1916</td><td>366</td><td>Battle of the Somme</td></tr>
<tr><td>1920</td><td>366</td><td>League of Nations founded</td></tr>
<tr><td>1924</td><td>366</td><td>First Winter Olympics</td></tr>
<tr><td>1928</td><td>366</td><td>Penicillin discovered</td></tr>
<tr><td>1932</td><td>366</td><td>Los Angeles Summer Olympics</td></tr>
<tr><td>1936</td><td>366</td><td>Berlin Summer Olympics</td></tr>
<tr><td>1940</td><td>366</td><td>Battle of Britain</td></tr>
<tr><td>1944</td><td>366</td><td>D-Day landings</td></tr>
<tr><td>1948</td><td>366</td><td>State of Israel founded</td></tr>
<tr><td>1952</td><td>366</td><td>Elizabeth II becomes Queen</td></tr>
<tr><td>1956</td><td>366</td><td>Suez Crisis</td></tr>
<tr><td>1960</td><td>366</td><td>Rome Summer Olympics</td></tr>
<tr><td>1964</td><td>366</td><td>Tokyo Summer Olympics</td></tr>
<tr><td>1968</td><td>366</td><td>Moon orbit — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Munich Olympics</td></tr>
<tr><td>1976</td><td>366</td><td>Montreal Summer Olympics</td></tr>
<tr><td>1980</td><td>366</td><td>Moscow Summer Olympics</td></tr>
<tr><td>1984</td><td>366</td><td>Los Angeles Summer Olympics</td></tr>
<tr><td>1988</td><td>366</td><td>Seoul Summer Olympics</td></tr>
<tr><td>1992</td><td>366</td><td>Barcelona Summer Olympics</td></tr>
<tr><td>1996</td><td>366</td><td>Atlanta Summer Olympics</td></tr>
<tr><td>2000</td><td>366</td><td>Sydney Olympics; new millennium</td></tr>
<tr><td>2004</td><td>366</td><td>Athens Summer Olympics</td></tr>
<tr><td>2008</td><td>366</td><td>Beijing Summer Olympics</td></tr>
<tr><td>2012</td><td>366</td><td>London Summer Olympics</td></tr>
<tr><td>2016</td><td>366</td><td>Rio Summer Olympics</td></tr>
<tr><td>2020</td><td>366</td><td>COVID-19 pandemic begins</td></tr>
<tr><td>2024</td><td>366</td><td>Paris Summer Olympics</td></tr>
<tr><td>2028</td><td>366</td><td>Los Angeles Summer Olympics</td></tr>
<tr><td>2032</td><td>366</td><td>Brisbane Summer Olympics</td></tr>
<tr><td>2036</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2040</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2044</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2048</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2052</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2056</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2060</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2064</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2068</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2072</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2076</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2080</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2084</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2088</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2092</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2096</td><td>366</td><td>Future leap year</td></tr>
<tr><td>2104</td><td>366</td><td>First leap year after 2100 (2100 is skipped)</td></tr>
</table>`
      },
      {
        h2: 'Why Do We Have Leap Years?',
        body: '<p>Earth takes approximately 365.25 days to complete one orbit around the sun. A standard calendar year has only 365 days, which means we lose about a quarter of a day each year. Without leap years, the calendar would drift roughly <strong>1 day every 4 years</strong> — and after a century, the seasons would be off by 25 days.</p><p>The leap year system (established by the Gregorian calendar in 1582) corrects for this drift by adding an extra day — February 29 — in most years divisible by 4.</p>'
      },
    ],
    faqs: [
      { q: 'Is 1900 a leap year?', a: 'No. 1900 is divisible by 100 but not by 400, so it is not a leap year.' },
      { q: 'Is 2000 a leap year?', a: 'Yes. 2000 is divisible by 400, making it a leap year.' },
      { q: 'What is the next leap year after 2024?', a: '2028 is the next leap year after 2024.' },
      { q: 'How many days does a leap year have?', a: 'A leap year has 366 days — one more than a standard year of 365 days.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Born in 2000 — leap year' },
    related: [
      { href: '/born-in-2000/', label: 'Born in 2000' },
      { href: '/born-in-1996/', label: 'Born in 1996' },
      { href: '/days-between-dates/', label: 'Days between dates' },
    ],
  },
  fr: {
    title: 'Liste complète des années bissextiles (1900–2100)',
    metaDesc: 'Toutes les années bissextiles de 1900 à 2100 en une seule liste complète. Inclut la règle de calcul, pourquoi 1900 n\'est PAS bissextile et pourquoi 2000 l\'est.',
    kicker: 'RÉFÉRENCE CALENDRIER',
    h1: 'Liste complète des années bissextiles (1900–2100)',
    intro: 'Une année bissextile se produit tous les 4 ans — avec deux exceptions. Voici toutes les années bissextiles de 1900 à 2100, ainsi que la règle simple pour les calculer.',
    sections: [
      {
        h2: 'La règle des années bissextiles',
        body: `<p>Une année est bissextile si elle remplit les conditions suivantes :</p>
<ol>
<li><strong>Divisible par 4</strong> → année bissextile (ex. 1904, 2004)</li>
<li><strong>Exception :</strong> les années séculaires (1800, 1900, 2100) ne sont <em>pas</em> bissextiles — même si elles sont divisibles par 4.</li>
<li><strong>Exception à l'exception :</strong> les années séculaires divisibles par 400 <em>sont</em> bissextiles (ex. 2000).</li>
</ol>
<p>En pratique : <strong>1900 n'est PAS une année bissextile</strong> (divisible par 100 mais pas par 400). <strong>2000 EST une année bissextile</strong> (divisible par 400). <strong>2100 ne sera PAS une année bissextile</strong>.</p>`
      },
      {
        h2: 'Toutes les années bissextiles 1900–2100',
        body: '<p>Remarque : 1900 et 2100 ne sont <strong>pas</strong> des années bissextiles. La prochaine année bissextile après 2096 est 2104.</p>',
        table: `<table>
<tr><th>Année</th><th>Nombre de jours</th><th>Événement notable</th></tr>
<tr><td>1904</td><td>366</td><td>Exposition universelle de Saint-Louis</td></tr>
<tr><td>1908</td><td>366</td><td>Premiers Jeux olympiques modernes à Londres</td></tr>
<tr><td>1912</td><td>366</td><td>Le Titanic coule</td></tr>
<tr><td>1916</td><td>366</td><td>Bataille de la Somme</td></tr>
<tr><td>1920</td><td>366</td><td>Fondation de la Société des Nations</td></tr>
<tr><td>1924</td><td>366</td><td>Premiers Jeux olympiques d'hiver</td></tr>
<tr><td>1928</td><td>366</td><td>Découverte de la pénicilline</td></tr>
<tr><td>1932</td><td>366</td><td>Jeux olympiques d'été de Los Angeles</td></tr>
<tr><td>1936</td><td>366</td><td>Jeux olympiques d'été de Berlin</td></tr>
<tr><td>1940</td><td>366</td><td>Bataille d'Angleterre</td></tr>
<tr><td>1944</td><td>366</td><td>Débarquement en Normandie (D-Day)</td></tr>
<tr><td>1948</td><td>366</td><td>Fondation de l'État d'Israël</td></tr>
<tr><td>1952</td><td>366</td><td>Élisabeth II devient Reine</td></tr>
<tr><td>1956</td><td>366</td><td>Crise de Suez</td></tr>
<tr><td>1960</td><td>366</td><td>Jeux olympiques d'été de Rome</td></tr>
<tr><td>1964</td><td>366</td><td>Jeux olympiques d'été de Tokyo</td></tr>
<tr><td>1968</td><td>366</td><td>Orbite lunaire — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Jeux olympiques de Munich</td></tr>
<tr><td>1976</td><td>366</td><td>Jeux olympiques d'été de Montréal</td></tr>
<tr><td>1980</td><td>366</td><td>Jeux olympiques d'été de Moscou</td></tr>
<tr><td>1984</td><td>366</td><td>Jeux olympiques d'été de Los Angeles</td></tr>
<tr><td>1988</td><td>366</td><td>Jeux olympiques d'été de Séoul</td></tr>
<tr><td>1992</td><td>366</td><td>Jeux olympiques d'été de Barcelone</td></tr>
<tr><td>1996</td><td>366</td><td>Jeux olympiques d'été d'Atlanta</td></tr>
<tr><td>2000</td><td>366</td><td>Jeux olympiques de Sydney ; nouveau millénaire</td></tr>
<tr><td>2004</td><td>366</td><td>Jeux olympiques d'été d'Athènes</td></tr>
<tr><td>2008</td><td>366</td><td>Jeux olympiques d'été de Pékin</td></tr>
<tr><td>2012</td><td>366</td><td>Jeux olympiques d'été de Londres</td></tr>
<tr><td>2016</td><td>366</td><td>Jeux olympiques d'été de Rio</td></tr>
<tr><td>2020</td><td>366</td><td>Début de la pandémie de COVID-19</td></tr>
<tr><td>2024</td><td>366</td><td>Jeux olympiques d'été de Paris</td></tr>
<tr><td>2028</td><td>366</td><td>Jeux olympiques d'été de Los Angeles</td></tr>
<tr><td>2032</td><td>366</td><td>Jeux olympiques d'été de Brisbane</td></tr>
<tr><td>2036</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2040</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2044</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2048</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2052</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2056</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2060</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2064</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2068</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2072</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2076</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2080</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2084</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2088</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2092</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2096</td><td>366</td><td>Année bissextile future</td></tr>
<tr><td>2104</td><td>366</td><td>Première année bissextile après 2100 (2100 est sautée)</td></tr>
</table>`
      },
      {
        h2: 'Pourquoi avons-nous des années bissextiles ?',
        body: '<p>La Terre met environ 365,25 jours pour effectuer une orbite complète autour du Soleil. Une année civile ordinaire ne compte que 365 jours, ce qui signifie que nous perdons environ un quart de jour chaque année. Sans les années bissextiles, le calendrier décalerait d\'environ <strong>1 jour tous les 4 ans</strong> — et au bout d\'un siècle, les saisons auraient un décalage de 25 jours.</p><p>Le système des années bissextiles (établi par le calendrier grégorien en 1582) corrige cette dérive en ajoutant un jour supplémentaire — le 29 février — lors des années divisibles par 4 (sauf les siècles non divisibles par 400).</p>'
      },
    ],
    faqs: [
      { q: '1900 est-elle une année bissextile ?', a: 'Non. 1900 est divisible par 100 mais pas par 400, donc ce n\'est pas une année bissextile.' },
      { q: '2000 est-elle une année bissextile ?', a: 'Oui. 2000 est divisible par 400, ce qui en fait une année bissextile.' },
      { q: 'Quelle est la prochaine année bissextile après 2024 ?', a: '2028 est la prochaine année bissextile après 2024.' },
      { q: 'Combien de jours compte une année bissextile ?', a: 'Une année bissextile compte 366 jours — un de plus qu\'une année ordinaire de 365 jours.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Né en 2000 — année bissextile' },
    related: [
      { href: '/born-in-2000/', label: 'Né en 2000' },
      { href: '/born-in-1996/', label: 'Né en 1996' },
      { href: '/fr/jours-entre-dates/', label: 'Jours entre deux dates' },
    ],
  },
  es: {
    title: 'Lista completa de años bisiestos (1900–2100)',
    metaDesc: 'Todos los años bisiestos de 1900 a 2100 en una lista completa. Incluye la regla de cálculo, por qué 1900 NO es bisiesto y por qué 2000 SÍ lo es.',
    kicker: 'REFERENCIA DE CALENDARIO',
    h1: 'Lista completa de años bisiestos (1900–2100)',
    intro: 'Un año bisiesto ocurre cada 4 años — con dos excepciones. Aquí están todos los años bisiestos de 1900 a 2100, además de la regla sencilla para calcularlos.',
    sections: [
      {
        h2: 'La regla del año bisiesto',
        body: `<p>Un año es bisiesto si cumple las siguientes condiciones:</p>
<ol>
<li><strong>Divisible entre 4</strong> → año bisiesto (ej. 1904, 2004)</li>
<li><strong>Excepción:</strong> los años seculares (1800, 1900, 2100) <em>no</em> son bisiestos, aunque sean divisibles entre 4.</li>
<li><strong>Excepción a la excepción:</strong> los años seculares divisibles entre 400 <em>sí</em> son bisiestos (ej. 2000).</li>
</ol>
<p>En la práctica: <strong>1900 NO es un año bisiesto</strong> (divisible entre 100 pero no entre 400). <strong>2000 SÍ es un año bisiesto</strong> (divisible entre 400). <strong>2100 NO será un año bisiesto</strong>.</p>`
      },
      {
        h2: 'Todos los años bisiestos 1900–2100',
        body: '<p>Nota: 1900 y 2100 <strong>no</strong> son años bisiestos. El siguiente año bisiesto después de 2096 es 2104.</p>',
        table: `<table>
<tr><th>Año</th><th>Días</th><th>Evento notable</th></tr>
<tr><td>1904</td><td>366</td><td>Feria Mundial de San Luis</td></tr>
<tr><td>1908</td><td>366</td><td>Primeros Juegos Olímpicos modernos en Londres</td></tr>
<tr><td>1912</td><td>366</td><td>Se hunde el Titanic</td></tr>
<tr><td>1916</td><td>366</td><td>Batalla del Somme</td></tr>
<tr><td>1920</td><td>366</td><td>Fundación de la Sociedad de Naciones</td></tr>
<tr><td>1924</td><td>366</td><td>Primeros Juegos Olímpicos de invierno</td></tr>
<tr><td>1928</td><td>366</td><td>Descubrimiento de la penicilina</td></tr>
<tr><td>1932</td><td>366</td><td>Juegos Olímpicos de verano en Los Ángeles</td></tr>
<tr><td>1936</td><td>366</td><td>Juegos Olímpicos de verano en Berlín</td></tr>
<tr><td>1940</td><td>366</td><td>Batalla de Gran Bretaña</td></tr>
<tr><td>1944</td><td>366</td><td>Desembarco de Normandía (Día D)</td></tr>
<tr><td>1948</td><td>366</td><td>Fundación del Estado de Israel</td></tr>
<tr><td>1952</td><td>366</td><td>Isabel II se convierte en Reina</td></tr>
<tr><td>1956</td><td>366</td><td>Crisis de Suez</td></tr>
<tr><td>1960</td><td>366</td><td>Juegos Olímpicos de verano en Roma</td></tr>
<tr><td>1964</td><td>366</td><td>Juegos Olímpicos de verano en Tokio</td></tr>
<tr><td>1968</td><td>366</td><td>Órbita lunar — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Juegos Olímpicos de Múnich</td></tr>
<tr><td>1976</td><td>366</td><td>Juegos Olímpicos de verano en Montreal</td></tr>
<tr><td>1980</td><td>366</td><td>Juegos Olímpicos de verano en Moscú</td></tr>
<tr><td>1984</td><td>366</td><td>Juegos Olímpicos de verano en Los Ángeles</td></tr>
<tr><td>1988</td><td>366</td><td>Juegos Olímpicos de verano en Seúl</td></tr>
<tr><td>1992</td><td>366</td><td>Juegos Olímpicos de verano en Barcelona</td></tr>
<tr><td>1996</td><td>366</td><td>Juegos Olímpicos de verano en Atlanta</td></tr>
<tr><td>2000</td><td>366</td><td>Juegos Olímpicos de Sídney; nuevo milenio</td></tr>
<tr><td>2004</td><td>366</td><td>Juegos Olímpicos de verano en Atenas</td></tr>
<tr><td>2008</td><td>366</td><td>Juegos Olímpicos de verano en Pekín</td></tr>
<tr><td>2012</td><td>366</td><td>Juegos Olímpicos de verano en Londres</td></tr>
<tr><td>2016</td><td>366</td><td>Juegos Olímpicos de verano en Río</td></tr>
<tr><td>2020</td><td>366</td><td>Inicio de la pandemia de COVID-19</td></tr>
<tr><td>2024</td><td>366</td><td>Juegos Olímpicos de verano en París</td></tr>
<tr><td>2028</td><td>366</td><td>Juegos Olímpicos de verano en Los Ángeles</td></tr>
<tr><td>2032</td><td>366</td><td>Juegos Olímpicos de verano en Brisbane</td></tr>
<tr><td>2036</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2040</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2044</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2048</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2052</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2056</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2060</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2064</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2068</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2072</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2076</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2080</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2084</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2088</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2092</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2096</td><td>366</td><td>Año bisiesto futuro</td></tr>
<tr><td>2104</td><td>366</td><td>Primer año bisiesto después de 2100 (2100 se omite)</td></tr>
</table>`
      },
      {
        h2: '¿Por qué tenemos años bisiestos?',
        body: '<p>La Tierra tarda aproximadamente 365,25 días en completar una órbita alrededor del Sol. Un año civil estándar tiene solo 365 días, lo que significa que perdemos cerca de un cuarto de día cada año. Sin los años bisiestos, el calendario se desplazaría aproximadamente <strong>1 día cada 4 años</strong> — y tras un siglo, las estaciones estarían desfasadas 25 días.</p><p>El sistema de años bisiestos (establecido por el calendario gregoriano en 1582) corrige este desfase añadiendo un día extra — el 29 de febrero — en los años divisibles entre 4 (excepto los siglos no divisibles entre 400).</p>'
      },
    ],
    faqs: [
      { q: '¿Es 1900 un año bisiesto?', a: 'No. 1900 es divisible entre 100 pero no entre 400, por lo que no es un año bisiesto.' },
      { q: '¿Es 2000 un año bisiesto?', a: 'Sí. 2000 es divisible entre 400, lo que lo convierte en un año bisiesto.' },
      { q: '¿Cuál es el próximo año bisiesto después de 2024?', a: '2028 es el próximo año bisiesto después de 2024.' },
      { q: '¿Cuántos días tiene un año bisiesto?', a: 'Un año bisiesto tiene 366 días — uno más que un año estándar de 365 días.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Nacido en 2000 — año bisiesto' },
    related: [
      { href: '/born-in-2000/', label: 'Nacido en 2000' },
      { href: '/born-in-1996/', label: 'Nacido en 1996' },
      { href: '/es/dias-entre-fechas/', label: 'Días entre fechas' },
    ],
  },
};

// ── Article 2: most-popular-birthday-months ───────────────
T['most-popular-birthday-months'] = {
  en: {
    title: 'Most Popular Birthday Months — Birth Data by Month',
    metaDesc: 'Which month has the most birthdays? September tops the list. See the full ranking of birthday months by percentage of annual births.',
    kicker: 'BIRTHDAY DATA',
    h1: 'Most Popular Birthday Months',
    intro: 'Did you know that more people are born in September than any other month? Here is the data on birthday distribution across the year.',
    sections: [
      {
        h2: 'Birthday Month Rankings',
        body: '<p>Based on birth records in the United States and broader Western data, here is how birthdays are distributed across the 12 months:</p>',
        table: `<table>
<tr><th>Rank</th><th>Month</th><th>% of annual births (approx.)</th></tr>
<tr><td>1</td><td>September</td><td>~9.0%</td></tr>
<tr><td>2</td><td>August</td><td>~8.8%</td></tr>
<tr><td>3</td><td>July</td><td>~8.7%</td></tr>
<tr><td>4</td><td>October</td><td>~8.6%</td></tr>
<tr><td>5</td><td>June</td><td>~8.3%</td></tr>
<tr><td>6</td><td>November</td><td>~8.2%</td></tr>
<tr><td>7</td><td>May</td><td>~8.1%</td></tr>
<tr><td>8</td><td>December</td><td>~8.0%</td></tr>
<tr><td>9</td><td>April</td><td>~7.9%</td></tr>
<tr><td>10</td><td>March</td><td>~7.8%</td></tr>
<tr><td>11</td><td>January</td><td>~7.6%</td></tr>
<tr><td>12</td><td>February</td><td>~7.3%</td></tr>
</table>`
      },
      {
        h2: 'Why Is September the Most Popular?',
        body: '<p>September babies are often conceived around the holiday season (December and January), a time when more couples are together and conception rates tend to rise. Studies consistently show a spike in births in late summer and early September across many countries in the Northern Hemisphere.</p><p>The data holds up across multiple decades of birth records in the US, UK, and Australia, making September the most reliably popular birth month.</p>'
      },
      {
        h2: 'Rarest Birthdays',
        body: '<p><strong>February 29 (leap day)</strong> is the rarest birthday — it only occurs every 4 years. People born on this date are called "leaplings" and technically only have a true birthday once every four years.</p><p>Among regular dates, <strong>December 25</strong> and <strong>January 1</strong> are statistically rare, likely because fewer C-sections and induced labors are scheduled on major holidays. December 24 and July 4 also rank among the least common birthdays in the US.</p>'
      },
    ],
    faqs: [
      { q: 'What is the most common birthday month?', a: 'September, with approximately 9% of all annual births.' },
      { q: 'What is the rarest birthday?', a: 'February 29 (leap day), which only exists in leap years. Among non-leap-day dates, December 25 is one of the rarest.' },
      { q: 'What month has the fewest birthdays?', a: 'February consistently has the fewest birthdays, partly due to having fewer days and partly due to lower conception rates around May.' },
      { q: 'Is there a peak season for births?', a: 'Yes. In the Northern Hemisphere, late summer (August–September) is the peak birth season.' },
    ],
    pillar: { href: '/born-in-1990/', label: 'Born in 1990?' },
    related: [
      { href: '/age-calculator/', label: 'Age calculator' },
      { href: '/born-in-1990/', label: 'Born in 1990' },
      { href: '/born-in-2000/', label: 'Born in 2000' },
      { href: '/leap-years-list/', label: 'List of leap years' },
    ],
  },
  fr: {
    title: 'Mois d\'anniversaire les plus populaires — Données de naissance par mois',
    metaDesc: 'Quel mois a le plus d\'anniversaires ? Septembre arrive en tête. Découvrez le classement complet des mois de naissance par pourcentage de naissances annuelles.',
    kicker: 'DONNÉES SUR LES ANNIVERSAIRES',
    h1: 'Mois d\'anniversaire les plus populaires',
    intro: 'Saviez-vous que plus de personnes naissent en septembre que n\'importe quel autre mois ? Voici les données sur la répartition des anniversaires au fil de l\'année.',
    sections: [
      {
        h2: 'Classement des mois d\'anniversaire',
        body: '<p>D\'après les registres de naissances aux États-Unis et les données occidentales plus larges, voici comment les anniversaires se répartissent sur les 12 mois :</p>',
        table: `<table>
<tr><th>Rang</th><th>Mois</th><th>% des naissances annuelles (approx.)</th></tr>
<tr><td>1</td><td>Septembre</td><td>~9,0 %</td></tr>
<tr><td>2</td><td>Août</td><td>~8,8 %</td></tr>
<tr><td>3</td><td>Juillet</td><td>~8,7 %</td></tr>
<tr><td>4</td><td>Octobre</td><td>~8,6 %</td></tr>
<tr><td>5</td><td>Juin</td><td>~8,3 %</td></tr>
<tr><td>6</td><td>Novembre</td><td>~8,2 %</td></tr>
<tr><td>7</td><td>Mai</td><td>~8,1 %</td></tr>
<tr><td>8</td><td>Décembre</td><td>~8,0 %</td></tr>
<tr><td>9</td><td>Avril</td><td>~7,9 %</td></tr>
<tr><td>10</td><td>Mars</td><td>~7,8 %</td></tr>
<tr><td>11</td><td>Janvier</td><td>~7,6 %</td></tr>
<tr><td>12</td><td>Février</td><td>~7,3 %</td></tr>
</table>`
      },
      {
        h2: 'Pourquoi septembre est-il le mois le plus populaire ?',
        body: '<p>Les bébés de septembre sont souvent conçus autour des fêtes de fin d\'année (décembre et janvier), une période où davantage de couples sont réunis et où les taux de conception ont tendance à augmenter. Les études montrent systématiquement un pic des naissances à la fin de l\'été et début septembre dans de nombreux pays de l\'hémisphère nord.</p><p>Ces données se confirment sur plusieurs décennies de registres de naissances aux États-Unis, au Royaume-Uni et en Australie, faisant de septembre le mois de naissance le plus régulièrement populaire.</p>'
      },
      {
        h2: 'Les anniversaires les plus rares',
        body: '<p><strong>Le 29 février (jour bissextile)</strong> est l\'anniversaire le plus rare — il n\'existe que tous les 4 ans. Les personnes nées ce jour sont appelées « bissextiles » et n\'ont techniquement leur vrai anniversaire qu\'une fois tous les quatre ans.</p><p>Parmi les dates ordinaires, le <strong>25 décembre</strong> et le <strong>1er janvier</strong> sont statistiquement rares, probablement parce que moins de césariennes et d\'accouchements déclenchés sont planifiés les jours fériés importants. Le 24 décembre et le 4 juillet figurent également parmi les anniversaires les moins communs aux États-Unis.</p>'
      },
    ],
    faqs: [
      { q: 'Quel est le mois d\'anniversaire le plus courant ?', a: 'Septembre, avec environ 9 % de toutes les naissances annuelles.' },
      { q: 'Quel est l\'anniversaire le plus rare ?', a: 'Le 29 février (jour bissextile), qui n\'existe que pendant les années bissextiles. Parmi les dates ordinaires, le 25 décembre est l\'une des plus rares.' },
      { q: 'Quel mois a le moins d\'anniversaires ?', a: 'Février a systématiquement le moins d\'anniversaires, en partie à cause de son nombre réduit de jours et en partie à cause de taux de conception plus bas autour de mai.' },
      { q: 'Y a-t-il une saison de pointe pour les naissances ?', a: 'Oui. Dans l\'hémisphère nord, la fin de l\'été (août–septembre) est la saison de pointe des naissances.' },
    ],
    pillar: { href: '/born-in-1990/', label: 'Né en 1990 ?' },
    related: [
      { href: '/fr/calcul-age/', label: 'Calculateur d\'âge' },
      { href: '/born-in-1990/', label: 'Né en 1990' },
      { href: '/born-in-2000/', label: 'Né en 2000' },
      { href: '/fr/liste-annees-bissextiles/', label: 'Liste des années bissextiles' },
    ],
  },
  es: {
    title: 'Meses de cumpleaños más populares — Datos de nacimiento por mes',
    metaDesc: '¿Qué mes tiene más cumpleaños? Septiembre encabeza la lista. Consulta el ranking completo de meses de nacimiento por porcentaje de nacimientos anuales.',
    kicker: 'DATOS DE CUMPLEAÑOS',
    h1: 'Meses de cumpleaños más populares',
    intro: '¿Sabías que más personas nacen en septiembre que en cualquier otro mes? Aquí están los datos sobre la distribución de cumpleaños a lo largo del año.',
    sections: [
      {
        h2: 'Ranking de meses de cumpleaños',
        body: '<p>Según los registros de nacimientos en Estados Unidos y datos occidentales más amplios, así es como se distribuyen los cumpleaños en los 12 meses:</p>',
        table: `<table>
<tr><th>Posición</th><th>Mes</th><th>% de nacimientos anuales (aprox.)</th></tr>
<tr><td>1</td><td>Septiembre</td><td>~9,0 %</td></tr>
<tr><td>2</td><td>Agosto</td><td>~8,8 %</td></tr>
<tr><td>3</td><td>Julio</td><td>~8,7 %</td></tr>
<tr><td>4</td><td>Octubre</td><td>~8,6 %</td></tr>
<tr><td>5</td><td>Junio</td><td>~8,3 %</td></tr>
<tr><td>6</td><td>Noviembre</td><td>~8,2 %</td></tr>
<tr><td>7</td><td>Mayo</td><td>~8,1 %</td></tr>
<tr><td>8</td><td>Diciembre</td><td>~8,0 %</td></tr>
<tr><td>9</td><td>Abril</td><td>~7,9 %</td></tr>
<tr><td>10</td><td>Marzo</td><td>~7,8 %</td></tr>
<tr><td>11</td><td>Enero</td><td>~7,6 %</td></tr>
<tr><td>12</td><td>Febrero</td><td>~7,3 %</td></tr>
</table>`
      },
      {
        h2: '¿Por qué septiembre es el mes más popular?',
        body: '<p>Los bebés de septiembre suelen ser concebidos alrededor de las fiestas navideñas (diciembre y enero), una época en la que más parejas están juntas y las tasas de concepción tienden a aumentar. Los estudios muestran sistemáticamente un pico de nacimientos a finales del verano y principios de septiembre en muchos países del hemisferio norte.</p><p>Los datos se confirman en varias décadas de registros de nacimientos en EE. UU., Reino Unido y Australia, lo que hace de septiembre el mes de nacimiento más popular de forma constante.</p>'
      },
      {
        h2: 'Cumpleaños más raros',
        body: '<p><strong>El 29 de febrero (día bisiesto)</strong> es el cumpleaños más raro — solo existe cada 4 años. Las personas nacidas en esa fecha se llaman "bisiestos" y técnicamente solo tienen un verdadero cumpleaños una vez cada cuatro años.</p><p>Entre las fechas ordinarias, el <strong>25 de diciembre</strong> y el <strong>1 de enero</strong> son estadísticamente raros, probablemente porque se programan menos cesáreas y partos inducidos en las grandes festividades. El 24 de diciembre y el 4 de julio también figuran entre los cumpleaños menos comunes en EE. UU.</p>'
      },
    ],
    faqs: [
      { q: '¿Cuál es el mes de cumpleaños más común?', a: 'Septiembre, con aproximadamente el 9 % de todos los nacimientos anuales.' },
      { q: '¿Cuál es el cumpleaños más raro?', a: 'El 29 de febrero (día bisiesto), que solo existe en los años bisiestos. Entre las fechas ordinarias, el 25 de diciembre es uno de los más raros.' },
      { q: '¿Qué mes tiene menos cumpleaños?', a: 'Febrero tiene sistemáticamente menos cumpleaños, en parte por tener menos días y en parte por las menores tasas de concepción alrededor de mayo.' },
      { q: '¿Existe una temporada alta de nacimientos?', a: 'Sí. En el hemisferio norte, el final del verano (agosto–septiembre) es la temporada alta de nacimientos.' },
    ],
    pillar: { href: '/born-in-1990/', label: '¿Nacido en 1990?' },
    related: [
      { href: '/es/calcular-edad/', label: 'Calculadora de edad' },
      { href: '/born-in-1990/', label: 'Nacido en 1990' },
      { href: '/born-in-2000/', label: 'Nacido en 2000' },
      { href: '/es/lista-anos-bisiestos/', label: 'Lista de años bisiestos' },
    ],
  },
};

// ── Module export ─────────────────────────────────────────
module.exports = {
  pages: [
    { id: 'leap-years-list',              slugs: { en: 'leap-years-list',              fr: 'fr/liste-annees-bissextiles',             es: 'es/lista-anos-bisiestos' } },
    { id: 'most-popular-birthday-months', slugs: { en: 'most-popular-birthday-months', fr: 'fr/mois-anniversaire-les-plus-populaires', es: 'es/meses-de-cumpleanos-mas-populares' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return {
      title:    t.title,
      metaDesc: t.metaDesc,
      kicker:   t.kicker,
      h1:       t.h1,
      intro:    t.intro,
      sections: t.sections,
      faqs:     t.faqs,
      pillar:   t.pillar,
      related:  t.related,
    };
  },
};
