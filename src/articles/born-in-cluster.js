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
  pt: {
    title: 'Lista Completa de Anos Bissextos (1900–2100)',
    metaDesc: 'Todos os anos bissextos de 1900 a 2100 numa lista completa. Inclui a regra de cálculo, por que 1900 NÃO é bissexto e por que 2000 É.',
    kicker: 'REFERÊNCIA DE CALENDÁRIO',
    h1: 'Lista Completa de Anos Bissextos (1900–2100)',
    intro: 'Um ano bissexto ocorre a cada 4 anos — com duas exceções. Aqui estão todos os anos bissextos de 1900 a 2100, além da regra simples para calculá-los.',
    sections: [
      {
        h2: 'A Regra do Ano Bissexto',
        body: `<p>Um ano é bissexto se atender às seguintes condições:</p>
<ol>
<li><strong>Divisível por 4</strong> → ano bissexto (ex.: 1904, 2004)</li>
<li><strong>Exceção:</strong> anos seculares (1800, 1900, 2100) <em>não</em> são bissextos — mesmo sendo divisíveis por 4.</li>
<li><strong>Exceção da exceção:</strong> anos seculares divisíveis por 400 <em>são</em> bissextos (ex.: 2000).</li>
</ol>
<p>Na prática: <strong>1900 NÃO é ano bissexto</strong> (divisível por 100, mas não por 400). <strong>2000 É ano bissexto</strong> (divisível por 400). <strong>2100 NÃO será ano bissexto</strong>.</p>`
      },
      {
        h2: 'Todos os Anos Bissextos 1900–2100',
        body: '<p>Nota: 1900 e 2100 <strong>não</strong> são anos bissextos. O próximo ano bissexto após 2096 é 2104.</p>',
        table: `<table>
<tr><th>Ano</th><th>Dias</th><th>Evento notável</th></tr>
<tr><td>1904</td><td>366</td><td>Feira Mundial de St. Louis</td></tr>
<tr><td>1908</td><td>366</td><td>Primeiros Jogos Olímpicos modernos em Londres</td></tr>
<tr><td>1912</td><td>366</td><td>Naufrágio do Titanic</td></tr>
<tr><td>1916</td><td>366</td><td>Batalha do Somme</td></tr>
<tr><td>1920</td><td>366</td><td>Fundação da Liga das Nações</td></tr>
<tr><td>1924</td><td>366</td><td>Primeiros Jogos Olímpicos de Inverno</td></tr>
<tr><td>1928</td><td>366</td><td>Descoberta da penicilina</td></tr>
<tr><td>1932</td><td>366</td><td>Jogos Olímpicos de Verão em Los Angeles</td></tr>
<tr><td>1936</td><td>366</td><td>Jogos Olímpicos de Verão em Berlim</td></tr>
<tr><td>1940</td><td>366</td><td>Batalha da Grã-Bretanha</td></tr>
<tr><td>1944</td><td>366</td><td>Desembarque na Normandia (Dia D)</td></tr>
<tr><td>1948</td><td>366</td><td>Fundação do Estado de Israel</td></tr>
<tr><td>1952</td><td>366</td><td>Isabel II torna-se Rainha</td></tr>
<tr><td>1956</td><td>366</td><td>Crise de Suez</td></tr>
<tr><td>1960</td><td>366</td><td>Jogos Olímpicos de Verão em Roma</td></tr>
<tr><td>1964</td><td>366</td><td>Jogos Olímpicos de Verão em Tóquio</td></tr>
<tr><td>1968</td><td>366</td><td>Órbita lunar — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Jogos Olímpicos de Munique</td></tr>
<tr><td>1976</td><td>366</td><td>Jogos Olímpicos de Verão em Montreal</td></tr>
<tr><td>1980</td><td>366</td><td>Jogos Olímpicos de Verão em Moscou</td></tr>
<tr><td>1984</td><td>366</td><td>Jogos Olímpicos de Verão em Los Angeles</td></tr>
<tr><td>1988</td><td>366</td><td>Jogos Olímpicos de Verão em Seul</td></tr>
<tr><td>1992</td><td>366</td><td>Jogos Olímpicos de Verão em Barcelona</td></tr>
<tr><td>1996</td><td>366</td><td>Jogos Olímpicos de Verão em Atlanta</td></tr>
<tr><td>2000</td><td>366</td><td>Jogos Olímpicos de Sydney; novo milênio</td></tr>
<tr><td>2004</td><td>366</td><td>Jogos Olímpicos de Verão em Atenas</td></tr>
<tr><td>2008</td><td>366</td><td>Jogos Olímpicos de Verão em Pequim</td></tr>
<tr><td>2012</td><td>366</td><td>Jogos Olímpicos de Verão em Londres</td></tr>
<tr><td>2016</td><td>366</td><td>Jogos Olímpicos de Verão no Rio</td></tr>
<tr><td>2020</td><td>366</td><td>Início da pandemia de COVID-19</td></tr>
<tr><td>2024</td><td>366</td><td>Jogos Olímpicos de Verão em Paris</td></tr>
<tr><td>2028</td><td>366</td><td>Jogos Olímpicos de Verão em Los Angeles</td></tr>
<tr><td>2032</td><td>366</td><td>Jogos Olímpicos de Verão em Brisbane</td></tr>
<tr><td>2036</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2040</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2044</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2048</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2052</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2056</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2060</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2064</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2068</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2072</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2076</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2080</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2084</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2088</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2092</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2096</td><td>366</td><td>Ano bissexto futuro</td></tr>
<tr><td>2104</td><td>366</td><td>Primeiro ano bissexto após 2100 (2100 é pulado)</td></tr>
</table>`
      },
      {
        h2: 'Por que Temos Anos Bissextos?',
        body: '<p>A Terra leva aproximadamente 365,25 dias para completar uma órbita ao redor do Sol. Um ano civil padrão tem apenas 365 dias, o que significa que perdemos cerca de um quarto de dia a cada ano. Sem os anos bissextos, o calendário se deslocaria aproximadamente <strong>1 dia a cada 4 anos</strong> — e após um século, as estações estariam defasadas 25 dias.</p><p>O sistema de anos bissextos (estabelecido pelo calendário gregoriano em 1582) corrige essa deriva acrescentando um dia extra — 29 de fevereiro — nos anos divisíveis por 4 (exceto os séculos não divisíveis por 400).</p>'
      },
    ],
    faqs: [
      { q: '1900 é um ano bissexto?', a: 'Não. 1900 é divisível por 100, mas não por 400, portanto não é um ano bissexto.' },
      { q: '2000 é um ano bissexto?', a: 'Sim. 2000 é divisível por 400, tornando-o um ano bissexto.' },
      { q: 'Qual é o próximo ano bissexto após 2024?', a: '2028 é o próximo ano bissexto após 2024.' },
      { q: 'Quantos dias tem um ano bissexto?', a: 'Um ano bissexto tem 366 dias — um a mais do que um ano padrão de 365 dias.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Nascido em 2000 — ano bissexto' },
    related: [
      { href: '/born-in-2000/', label: 'Nascido em 2000' },
      { href: '/born-in-1996/', label: 'Nascido em 1996' },
      { href: '/pt/dias-entre-datas/', label: 'Dias entre datas' },
    ],
  },
  de: {
    title: 'Vollständige Liste der Schaltjahre (1900–2100)',
    metaDesc: 'Alle Schaltjahre von 1900 bis 2100 in einer vollständigen Liste. Mit der Schaltjahrregel, warum 1900 KEIN Schaltjahr ist und warum 2000 EINES ist.',
    kicker: 'KALENDER-REFERENZ',
    h1: 'Vollständige Liste der Schaltjahre (1900–2100)',
    intro: 'Ein Schaltjahr tritt alle 4 Jahre auf — mit zwei Ausnahmen. Hier sind alle Schaltjahre von 1900 bis 2100, plus die einfache Regel zur Berechnung.',
    sections: [
      {
        h2: 'Die Schaltjahrregel',
        body: `<p>Ein Jahr ist ein Schaltjahr, wenn es folgende Bedingungen erfüllt:</p>
<ol>
<li><strong>Teilbar durch 4</strong> → Schaltjahr (z. B. 1904, 2004)</li>
<li><strong>Ausnahme:</strong> Jahrhundertjahre (1800, 1900, 2100) sind <em>keine</em> Schaltjahre — auch wenn sie durch 4 teilbar sind.</li>
<li><strong>Ausnahme der Ausnahme:</strong> Jahrhundertjahre, die durch 400 teilbar sind, <em>sind</em> Schaltjahre (z. B. 2000).</li>
</ol>
<p>In der Praxis: <strong>1900 ist KEIN Schaltjahr</strong> (durch 100, aber nicht durch 400 teilbar). <strong>2000 IST ein Schaltjahr</strong> (durch 400 teilbar). <strong>2100 wird KEIN Schaltjahr sein</strong>.</p>`
      },
      {
        h2: 'Alle Schaltjahre 1900–2100',
        body: '<p>Hinweis: 1900 und 2100 sind <strong>keine</strong> Schaltjahre. Das nächste Schaltjahr nach 2096 ist 2104.</p>',
        table: `<table>
<tr><th>Jahr</th><th>Tage</th><th>Bedeutendes Ereignis</th></tr>
<tr><td>1904</td><td>366</td><td>Weltausstellung in St. Louis</td></tr>
<tr><td>1908</td><td>366</td><td>Erste moderne Olympische Spiele in London</td></tr>
<tr><td>1912</td><td>366</td><td>Untergang der Titanic</td></tr>
<tr><td>1916</td><td>366</td><td>Schlacht an der Somme</td></tr>
<tr><td>1920</td><td>366</td><td>Gründung des Völkerbunds</td></tr>
<tr><td>1924</td><td>366</td><td>Erste Olympische Winterspiele</td></tr>
<tr><td>1928</td><td>366</td><td>Entdeckung des Penicillins</td></tr>
<tr><td>1932</td><td>366</td><td>Olympische Sommerspiele in Los Angeles</td></tr>
<tr><td>1936</td><td>366</td><td>Olympische Sommerspiele in Berlin</td></tr>
<tr><td>1940</td><td>366</td><td>Luftschlacht um England</td></tr>
<tr><td>1944</td><td>366</td><td>D-Day-Landung in der Normandie</td></tr>
<tr><td>1948</td><td>366</td><td>Gründung des Staates Israel</td></tr>
<tr><td>1952</td><td>366</td><td>Elizabeth II. wird Königin</td></tr>
<tr><td>1956</td><td>366</td><td>Suez-Krise</td></tr>
<tr><td>1960</td><td>366</td><td>Olympische Sommerspiele in Rom</td></tr>
<tr><td>1964</td><td>366</td><td>Olympische Sommerspiele in Tokio</td></tr>
<tr><td>1968</td><td>366</td><td>Mondumkreisung — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Olympische Spiele in München</td></tr>
<tr><td>1976</td><td>366</td><td>Olympische Sommerspiele in Montreal</td></tr>
<tr><td>1980</td><td>366</td><td>Olympische Sommerspiele in Moskau</td></tr>
<tr><td>1984</td><td>366</td><td>Olympische Sommerspiele in Los Angeles</td></tr>
<tr><td>1988</td><td>366</td><td>Olympische Sommerspiele in Seoul</td></tr>
<tr><td>1992</td><td>366</td><td>Olympische Sommerspiele in Barcelona</td></tr>
<tr><td>1996</td><td>366</td><td>Olympische Sommerspiele in Atlanta</td></tr>
<tr><td>2000</td><td>366</td><td>Olympische Spiele in Sydney; neues Jahrtausend</td></tr>
<tr><td>2004</td><td>366</td><td>Olympische Sommerspiele in Athen</td></tr>
<tr><td>2008</td><td>366</td><td>Olympische Sommerspiele in Peking</td></tr>
<tr><td>2012</td><td>366</td><td>Olympische Sommerspiele in London</td></tr>
<tr><td>2016</td><td>366</td><td>Olympische Sommerspiele in Rio</td></tr>
<tr><td>2020</td><td>366</td><td>Beginn der COVID-19-Pandemie</td></tr>
<tr><td>2024</td><td>366</td><td>Olympische Sommerspiele in Paris</td></tr>
<tr><td>2028</td><td>366</td><td>Olympische Sommerspiele in Los Angeles</td></tr>
<tr><td>2032</td><td>366</td><td>Olympische Sommerspiele in Brisbane</td></tr>
<tr><td>2036</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2040</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2044</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2048</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2052</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2056</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2060</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2064</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2068</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2072</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2076</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2080</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2084</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2088</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2092</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2096</td><td>366</td><td>Zukünftiges Schaltjahr</td></tr>
<tr><td>2104</td><td>366</td><td>Erstes Schaltjahr nach 2100 (2100 wird übersprungen)</td></tr>
</table>`
      },
      {
        h2: 'Warum gibt es Schaltjahre?',
        body: '<p>Die Erde benötigt ungefähr 365,25 Tage für eine vollständige Umlaufbahn um die Sonne. Ein normales Kalenderjahr hat nur 365 Tage, wodurch wir jedes Jahr etwa ein Viertel Tag verlieren. Ohne Schaltjahre würde sich der Kalender um etwa <strong>1 Tag alle 4 Jahre</strong> verschieben — und nach einem Jahrhundert wären die Jahreszeiten um 25 Tage verschoben.</p><p>Das Schaltjahrsystem (eingeführt durch den Gregorianischen Kalender 1582) korrigiert diese Abweichung, indem es in den meisten durch 4 teilbaren Jahren einen zusätzlichen Tag — den 29. Februar — einfügt.</p>'
      },
    ],
    faqs: [
      { q: 'Ist 1900 ein Schaltjahr?', a: 'Nein. 1900 ist durch 100, aber nicht durch 400 teilbar und daher kein Schaltjahr.' },
      { q: 'Ist 2000 ein Schaltjahr?', a: 'Ja. 2000 ist durch 400 teilbar und damit ein Schaltjahr.' },
      { q: 'Was ist das nächste Schaltjahr nach 2024?', a: '2028 ist das nächste Schaltjahr nach 2024.' },
      { q: 'Wie viele Tage hat ein Schaltjahr?', a: 'Ein Schaltjahr hat 366 Tage — einen mehr als ein normales Jahr mit 365 Tagen.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Geboren 2000 — Schaltjahr' },
    related: [
      { href: '/born-in-2000/', label: 'Geboren 2000' },
      { href: '/born-in-1996/', label: 'Geboren 1996' },
      { href: '/de/tage-zwischen-daten/', label: 'Tage zwischen Datumsangaben' },
    ],
  },
  it: {
    title: 'Lista Completa degli Anni Bisestili (1900–2100)',
    metaDesc: 'Tutti gli anni bisestili dal 1900 al 2100 in una lista completa. Include la regola di calcolo, perché il 1900 NON è bisestile e perché il 2000 LO È.',
    kicker: 'RIFERIMENTO CALENDARIO',
    h1: 'Lista Completa degli Anni Bisestili (1900–2100)',
    intro: 'Un anno bisestile si verifica ogni 4 anni — con due eccezioni. Ecco tutti gli anni bisestili dal 1900 al 2100, più la semplice regola per calcolarli.',
    sections: [
      {
        h2: 'La Regola degli Anni Bisestili',
        body: `<p>Un anno è bisestile se soddisfa le seguenti condizioni:</p>
<ol>
<li><strong>Divisibile per 4</strong> → anno bisestile (es. 1904, 2004)</li>
<li><strong>Eccezione:</strong> gli anni secolari (1800, 1900, 2100) <em>non</em> sono bisestili — anche se divisibili per 4.</li>
<li><strong>Eccezione dell'eccezione:</strong> gli anni secolari divisibili per 400 <em>sono</em> bisestili (es. 2000).</li>
</ol>
<p>In pratica: <strong>il 1900 NON è un anno bisestile</strong> (divisibile per 100 ma non per 400). <strong>il 2000 È un anno bisestile</strong> (divisibile per 400). <strong>il 2100 NON sarà un anno bisestile</strong>.</p>`
      },
      {
        h2: 'Tutti gli Anni Bisestili 1900–2100',
        body: '<p>Nota: 1900 e 2100 <strong>non</strong> sono anni bisestili. Il prossimo anno bisestile dopo il 2096 è il 2104.</p>',
        table: `<table>
<tr><th>Anno</th><th>Giorni</th><th>Evento notevole</th></tr>
<tr><td>1904</td><td>366</td><td>Fiera Mondiale di St. Louis</td></tr>
<tr><td>1908</td><td>366</td><td>Primi Giochi Olimpici moderni a Londra</td></tr>
<tr><td>1912</td><td>366</td><td>Affondamento del Titanic</td></tr>
<tr><td>1916</td><td>366</td><td>Battaglia della Somme</td></tr>
<tr><td>1920</td><td>366</td><td>Fondazione della Società delle Nazioni</td></tr>
<tr><td>1924</td><td>366</td><td>Primi Giochi Olimpici Invernali</td></tr>
<tr><td>1928</td><td>366</td><td>Scoperta della penicillina</td></tr>
<tr><td>1932</td><td>366</td><td>Giochi Olimpici Estivi a Los Angeles</td></tr>
<tr><td>1936</td><td>366</td><td>Giochi Olimpici Estivi a Berlino</td></tr>
<tr><td>1940</td><td>366</td><td>Battaglia d'Inghilterra</td></tr>
<tr><td>1944</td><td>366</td><td>Sbarco in Normandia (D-Day)</td></tr>
<tr><td>1948</td><td>366</td><td>Fondazione dello Stato d'Israele</td></tr>
<tr><td>1952</td><td>366</td><td>Elisabetta II diventa Regina</td></tr>
<tr><td>1956</td><td>366</td><td>Crisi di Suez</td></tr>
<tr><td>1960</td><td>366</td><td>Giochi Olimpici Estivi a Roma</td></tr>
<tr><td>1964</td><td>366</td><td>Giochi Olimpici Estivi a Tokyo</td></tr>
<tr><td>1968</td><td>366</td><td>Orbita lunare — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Giochi Olimpici di Monaco</td></tr>
<tr><td>1976</td><td>366</td><td>Giochi Olimpici Estivi a Montreal</td></tr>
<tr><td>1980</td><td>366</td><td>Giochi Olimpici Estivi a Mosca</td></tr>
<tr><td>1984</td><td>366</td><td>Giochi Olimpici Estivi a Los Angeles</td></tr>
<tr><td>1988</td><td>366</td><td>Giochi Olimpici Estivi a Seul</td></tr>
<tr><td>1992</td><td>366</td><td>Giochi Olimpici Estivi a Barcellona</td></tr>
<tr><td>1996</td><td>366</td><td>Giochi Olimpici Estivi ad Atlanta</td></tr>
<tr><td>2000</td><td>366</td><td>Giochi Olimpici di Sydney; nuovo millennio</td></tr>
<tr><td>2004</td><td>366</td><td>Giochi Olimpici Estivi ad Atene</td></tr>
<tr><td>2008</td><td>366</td><td>Giochi Olimpici Estivi a Pechino</td></tr>
<tr><td>2012</td><td>366</td><td>Giochi Olimpici Estivi a Londra</td></tr>
<tr><td>2016</td><td>366</td><td>Giochi Olimpici Estivi a Rio</td></tr>
<tr><td>2020</td><td>366</td><td>Inizio della pandemia di COVID-19</td></tr>
<tr><td>2024</td><td>366</td><td>Giochi Olimpici Estivi a Parigi</td></tr>
<tr><td>2028</td><td>366</td><td>Giochi Olimpici Estivi a Los Angeles</td></tr>
<tr><td>2032</td><td>366</td><td>Giochi Olimpici Estivi a Brisbane</td></tr>
<tr><td>2036</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2040</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2044</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2048</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2052</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2056</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2060</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2064</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2068</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2072</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2076</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2080</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2084</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2088</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2092</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2096</td><td>366</td><td>Anno bisestile futuro</td></tr>
<tr><td>2104</td><td>366</td><td>Primo anno bisestile dopo il 2100 (il 2100 viene saltato)</td></tr>
</table>`
      },
      {
        h2: 'Perché Esistono gli Anni Bisestili?',
        body: '<p>La Terra impiega circa 365,25 giorni per completare un\'orbita intorno al Sole. Un anno civile standard ha solo 365 giorni, il che significa che perdiamo circa un quarto di giorno ogni anno. Senza gli anni bisestili, il calendario slitterebbe di circa <strong>1 giorno ogni 4 anni</strong> — e dopo un secolo, le stagioni sarebbero sfasate di 25 giorni.</p><p>Il sistema degli anni bisestili (introdotto dal calendario gregoriano nel 1582) corregge questa deriva aggiungendo un giorno extra — il 29 febbraio — nella maggior parte degli anni divisibili per 4.</p>'
      },
    ],
    faqs: [
      { q: 'Il 1900 è un anno bisestile?', a: 'No. Il 1900 è divisibile per 100 ma non per 400, quindi non è un anno bisestile.' },
      { q: 'Il 2000 è un anno bisestile?', a: 'Sì. Il 2000 è divisibile per 400, il che lo rende un anno bisestile.' },
      { q: 'Qual è il prossimo anno bisestile dopo il 2024?', a: 'Il 2028 è il prossimo anno bisestile dopo il 2024.' },
      { q: 'Quanti giorni ha un anno bisestile?', a: 'Un anno bisestile ha 366 giorni — uno in più rispetto a un anno normale di 365 giorni.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Nato nel 2000 — anno bisestile' },
    related: [
      { href: '/born-in-2000/', label: 'Nato nel 2000' },
      { href: '/born-in-1996/', label: 'Nato nel 1996' },
      { href: '/it/giorni-tra-date/', label: 'Giorni tra date' },
    ],
  },
  pl: {
    title: 'Pełna Lista Lat Przestępnych (1900–2100)',
    metaDesc: 'Wszystkie lata przestępne od 1900 do 2100 w jednej pełnej liście. Zawiera regułę obliczeń, dlaczego 1900 NIE jest rokiem przestępnym i dlaczego 2000 JEST.',
    kicker: 'KALENDARZ — INFORMACJE',
    h1: 'Pełna Lista Lat Przestępnych (1900–2100)',
    intro: 'Rok przestępny występuje co 4 lata — z dwoma wyjątkami. Oto wszystkie lata przestępne od 1900 do 2100 oraz prosta reguła ich obliczania.',
    sections: [
      {
        h2: 'Reguła Roku Przestępnego',
        body: `<p>Rok jest przestępny, jeśli spełnia następujące warunki:</p>
<ol>
<li><strong>Podzielny przez 4</strong> → rok przestępny (np. 1904, 2004)</li>
<li><strong>Wyjątek:</strong> lata wiekowe (1800, 1900, 2100) <em>nie</em> są przestępne — nawet jeśli są podzielne przez 4.</li>
<li><strong>Wyjątek od wyjątku:</strong> lata wiekowe podzielne przez 400 <em>są</em> przestępne (np. 2000).</li>
</ol>
<p>W praktyce: <strong>1900 NIE jest rokiem przestępnym</strong> (podzielny przez 100, ale nie przez 400). <strong>2000 JEST rokiem przestępnym</strong> (podzielny przez 400). <strong>2100 NIE będzie rokiem przestępnym</strong>.</p>`
      },
      {
        h2: 'Wszystkie Lata Przestępne 1900–2100',
        body: '<p>Uwaga: 1900 i 2100 <strong>nie</strong> są latami przestępnymi. Następnym rokiem przestępnym po 2096 jest 2104.</p>',
        table: `<table>
<tr><th>Rok</th><th>Dni</th><th>Ważne wydarzenie</th></tr>
<tr><td>1904</td><td>366</td><td>Wystawa Światowa w St. Louis</td></tr>
<tr><td>1908</td><td>366</td><td>Pierwsze nowoczesne Igrzyska Olimpijskie w Londynie</td></tr>
<tr><td>1912</td><td>366</td><td>Zatonięcie Titanica</td></tr>
<tr><td>1916</td><td>366</td><td>Bitwa nad Sommą</td></tr>
<tr><td>1920</td><td>366</td><td>Założenie Ligi Narodów</td></tr>
<tr><td>1924</td><td>366</td><td>Pierwsze Zimowe Igrzyska Olimpijskie</td></tr>
<tr><td>1928</td><td>366</td><td>Odkrycie penicyliny</td></tr>
<tr><td>1932</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Los Angeles</td></tr>
<tr><td>1936</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Berlinie</td></tr>
<tr><td>1940</td><td>366</td><td>Bitwa o Anglię</td></tr>
<tr><td>1944</td><td>366</td><td>Lądowanie w Normandii (D-Day)</td></tr>
<tr><td>1948</td><td>366</td><td>Założenie Państwa Izrael</td></tr>
<tr><td>1952</td><td>366</td><td>Elżbieta II zostaje Królową</td></tr>
<tr><td>1956</td><td>366</td><td>Kryzys sueski</td></tr>
<tr><td>1960</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Rzymie</td></tr>
<tr><td>1964</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Tokio</td></tr>
<tr><td>1968</td><td>366</td><td>Orbita księżycowa — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Igrzyska Olimpijskie w Monachium</td></tr>
<tr><td>1976</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Montrealu</td></tr>
<tr><td>1980</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Moskwie</td></tr>
<tr><td>1984</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Los Angeles</td></tr>
<tr><td>1988</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Seulu</td></tr>
<tr><td>1992</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Barcelonie</td></tr>
<tr><td>1996</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Atlancie</td></tr>
<tr><td>2000</td><td>366</td><td>Igrzyska Olimpijskie w Sydney; nowe tysiąclecie</td></tr>
<tr><td>2004</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Atenach</td></tr>
<tr><td>2008</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Pekinie</td></tr>
<tr><td>2012</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Londynie</td></tr>
<tr><td>2016</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Rio</td></tr>
<tr><td>2020</td><td>366</td><td>Początek pandemii COVID-19</td></tr>
<tr><td>2024</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Paryżu</td></tr>
<tr><td>2028</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Los Angeles</td></tr>
<tr><td>2032</td><td>366</td><td>Letnie Igrzyska Olimpijskie w Brisbane</td></tr>
<tr><td>2036</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2040</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2044</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2048</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2052</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2056</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2060</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2064</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2068</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2072</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2076</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2080</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2084</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2088</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2092</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2096</td><td>366</td><td>Przyszły rok przestępny</td></tr>
<tr><td>2104</td><td>366</td><td>Pierwszy rok przestępny po 2100 (2100 jest pomijany)</td></tr>
</table>`
      },
      {
        h2: 'Dlaczego Mamy Lata Przestępne?',
        body: '<p>Ziemia potrzebuje około 365,25 dnia na pełny obrót wokół Słońca. Standardowy rok kalendarzowy ma tylko 365 dni, co oznacza, że co roku tracimy około ćwierć dnia. Bez lat przestępnych kalendarz przesuwałby się o około <strong>1 dzień co 4 lata</strong> — a po stuleciu pory roku byłyby przesunięte o 25 dni.</p><p>System lat przestępnych (wprowadzony przez kalendarz gregoriański w 1582 r.) koryguje to odchylenie, dodając dodatkowy dzień — 29 lutego — w większości lat podzielnych przez 4.</p>'
      },
    ],
    faqs: [
      { q: 'Czy 1900 jest rokiem przestępnym?', a: 'Nie. 1900 jest podzielny przez 100, ale nie przez 400, więc nie jest rokiem przestępnym.' },
      { q: 'Czy 2000 jest rokiem przestępnym?', a: 'Tak. 2000 jest podzielny przez 400, co czyni go rokiem przestępnym.' },
      { q: 'Jaki jest następny rok przestępny po 2024?', a: '2028 jest następnym rokiem przestępnym po 2024.' },
      { q: 'Ile dni ma rok przestępny?', a: 'Rok przestępny ma 366 dni — o jeden więcej niż standardowy rok liczący 365 dni.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Urodzony w 2000 — rok przestępny' },
    related: [
      { href: '/born-in-2000/', label: 'Urodzony w 2000' },
      { href: '/born-in-1996/', label: 'Urodzony w 1996' },
      { href: '/pl/dni-miedzy-datami/', label: 'Dni między datami' },
    ],
  },
  ja: {
    title: '閏年の完全リスト（1900年〜2100年）',
    metaDesc: '1900年から2100年までのすべての閏年を一覧にまとめました。閏年のルール、1900年が閏年でない理由、2000年が閏年である理由も解説。',
    kicker: 'カレンダー参考資料',
    h1: '閏年の完全リスト（1900年〜2100年）',
    intro: '閏年は4年ごとに訪れます — ただし2つの例外があります。1900年から2100年までのすべての閏年と、簡単な計算ルールを紹介します。',
    sections: [
      {
        h2: '閏年のルール',
        body: `<p>ある年が閏年となる条件は以下のとおりです：</p>
<ol>
<li><strong>4で割り切れる</strong> → 閏年（例：1904年、2004年）</li>
<li><strong>例外：</strong>世紀の年（1800年、1900年、2100年）は4で割り切れても<em>閏年ではありません</em>。</li>
<li><strong>例外の例外：</strong>400で割り切れる世紀の年は<em>閏年です</em>（例：2000年）。</li>
</ol>
<p>具体的には：<strong>1900年は閏年ではありません</strong>（100で割り切れるが400では割り切れない）。<strong>2000年は閏年です</strong>（400で割り切れる）。<strong>2100年は閏年になりません</strong>。</p>`
      },
      {
        h2: '1900年〜2100年の全閏年一覧',
        body: '<p>注意：1900年と2100年は<strong>閏年ではありません</strong>。2096年の次の閏年は2104年です。</p>',
        table: `<table>
<tr><th>年</th><th>日数</th><th>主な出来事</th></tr>
<tr><td>1904</td><td>366</td><td>セントルイス万博</td></tr>
<tr><td>1908</td><td>366</td><td>ロンドンで近代オリンピック開催</td></tr>
<tr><td>1912</td><td>366</td><td>タイタニック号沈没</td></tr>
<tr><td>1916</td><td>366</td><td>ソンムの戦い</td></tr>
<tr><td>1920</td><td>366</td><td>国際連盟設立</td></tr>
<tr><td>1924</td><td>366</td><td>第1回冬季オリンピック</td></tr>
<tr><td>1928</td><td>366</td><td>ペニシリン発見</td></tr>
<tr><td>1932</td><td>366</td><td>ロサンゼルス夏季オリンピック</td></tr>
<tr><td>1936</td><td>366</td><td>ベルリン夏季オリンピック</td></tr>
<tr><td>1940</td><td>366</td><td>バトル・オブ・ブリテン</td></tr>
<tr><td>1944</td><td>366</td><td>ノルマンディー上陸作戦（D-Day）</td></tr>
<tr><td>1948</td><td>366</td><td>イスラエル建国</td></tr>
<tr><td>1952</td><td>366</td><td>エリザベス2世即位</td></tr>
<tr><td>1956</td><td>366</td><td>スエズ危機</td></tr>
<tr><td>1960</td><td>366</td><td>ローマ夏季オリンピック</td></tr>
<tr><td>1964</td><td>366</td><td>東京夏季オリンピック</td></tr>
<tr><td>1968</td><td>366</td><td>月周回軌道 — アポロ8号</td></tr>
<tr><td>1972</td><td>366</td><td>ミュンヘンオリンピック</td></tr>
<tr><td>1976</td><td>366</td><td>モントリオール夏季オリンピック</td></tr>
<tr><td>1980</td><td>366</td><td>モスクワ夏季オリンピック</td></tr>
<tr><td>1984</td><td>366</td><td>ロサンゼルス夏季オリンピック</td></tr>
<tr><td>1988</td><td>366</td><td>ソウル夏季オリンピック</td></tr>
<tr><td>1992</td><td>366</td><td>バルセロナ夏季オリンピック</td></tr>
<tr><td>1996</td><td>366</td><td>アトランタ夏季オリンピック</td></tr>
<tr><td>2000</td><td>366</td><td>シドニーオリンピック；新千年紀</td></tr>
<tr><td>2004</td><td>366</td><td>アテネ夏季オリンピック</td></tr>
<tr><td>2008</td><td>366</td><td>北京夏季オリンピック</td></tr>
<tr><td>2012</td><td>366</td><td>ロンドン夏季オリンピック</td></tr>
<tr><td>2016</td><td>366</td><td>リオ夏季オリンピック</td></tr>
<tr><td>2020</td><td>366</td><td>COVID-19パンデミック始まる</td></tr>
<tr><td>2024</td><td>366</td><td>パリ夏季オリンピック</td></tr>
<tr><td>2028</td><td>366</td><td>ロサンゼルス夏季オリンピック</td></tr>
<tr><td>2032</td><td>366</td><td>ブリスベン夏季オリンピック</td></tr>
<tr><td>2036</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2040</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2044</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2048</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2052</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2056</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2060</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2064</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2068</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2072</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2076</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2080</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2084</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2088</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2092</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2096</td><td>366</td><td>将来の閏年</td></tr>
<tr><td>2104</td><td>366</td><td>2100年後最初の閏年（2100年はスキップ）</td></tr>
</table>`
      },
      {
        h2: 'なぜ閏年があるのか？',
        body: '<p>地球が太陽の周りを一周するのに約365.25日かかります。通常の暦年は365日しかないため、毎年約4分の1日ずつずれていきます。閏年がなければ、暦は<strong>4年ごとに約1日</strong>ずれ、100年後には季節が25日もずれてしまいます。</p><p>閏年制度（1582年のグレゴリオ暦によって確立）は、4で割り切れるほとんどの年に2月29日という1日を追加することでこのずれを修正します。</p>'
      },
    ],
    faqs: [
      { q: '1900年は閏年ですか？', a: 'いいえ。1900年は100で割り切れますが400では割り切れないため、閏年ではありません。' },
      { q: '2000年は閏年ですか？', a: 'はい。2000年は400で割り切れるため、閏年です。' },
      { q: '2024年の次の閏年は何年ですか？', a: '2024年の次の閏年は2028年です。' },
      { q: '閏年は何日ありますか？', a: '閏年は366日あります — 通常の365日より1日多い。' },
    ],
    pillar: { href: '/born-in-2000/', label: '2000年生まれ — 閏年' },
    related: [
      { href: '/born-in-2000/', label: '2000年生まれ' },
      { href: '/born-in-1996/', label: '1996年生まれ' },
      { href: '/ja/nichi-su-keisan/', label: '日数計算' },
    ],
  },
  ko: {
    title: '윤년 완전 목록 (1900–2100)',
    metaDesc: '1900년부터 2100년까지의 모든 윤년을 한 목록에 정리했습니다. 윤년 계산 규칙, 1900년이 윤년이 아닌 이유, 2000년이 윤년인 이유 포함.',
    kicker: '달력 참고 자료',
    h1: '윤년 완전 목록 (1900–2100)',
    intro: '윤년은 4년마다 한 번 돌아옵니다 — 두 가지 예외가 있습니다. 1900년부터 2100년까지의 모든 윤년과 간단한 계산 규칙을 소개합니다.',
    sections: [
      {
        h2: '윤년 규칙',
        body: `<p>어떤 해가 윤년이 되려면 다음 조건을 충족해야 합니다:</p>
<ol>
<li><strong>4로 나누어 떨어진다</strong> → 윤년 (예: 1904년, 2004년)</li>
<li><strong>예외:</strong> 세기 연도(1800년, 1900년, 2100년)는 4로 나누어 떨어져도 <em>윤년이 아닙니다</em>.</li>
<li><strong>예외의 예외:</strong> 400으로 나누어 떨어지는 세기 연도는 <em>윤년입니다</em> (예: 2000년).</li>
</ol>
<p>실제로: <strong>1900년은 윤년이 아닙니다</strong> (100으로는 나누어 떨어지지만 400으로는 아님). <strong>2000년은 윤년입니다</strong> (400으로 나누어 떨어짐). <strong>2100년은 윤년이 아닐 것입니다</strong>.</p>`
      },
      {
        h2: '1900–2100년 모든 윤년',
        body: '<p>참고: 1900년과 2100년은 <strong>윤년이 아닙니다</strong>. 2096년 다음 윤년은 2104년입니다.</p>',
        table: `<table>
<tr><th>연도</th><th>일수</th><th>주요 사건</th></tr>
<tr><td>1904</td><td>366</td><td>세인트루이스 세계박람회</td></tr>
<tr><td>1908</td><td>366</td><td>런던에서 근대 올림픽 개최</td></tr>
<tr><td>1912</td><td>366</td><td>타이타닉호 침몰</td></tr>
<tr><td>1916</td><td>366</td><td>솜 전투</td></tr>
<tr><td>1920</td><td>366</td><td>국제연맹 창설</td></tr>
<tr><td>1924</td><td>366</td><td>제1회 동계 올림픽</td></tr>
<tr><td>1928</td><td>366</td><td>페니실린 발견</td></tr>
<tr><td>1932</td><td>366</td><td>로스앤젤레스 하계 올림픽</td></tr>
<tr><td>1936</td><td>366</td><td>베를린 하계 올림픽</td></tr>
<tr><td>1940</td><td>366</td><td>영국 전투</td></tr>
<tr><td>1944</td><td>366</td><td>노르망디 상륙 작전 (D-데이)</td></tr>
<tr><td>1948</td><td>366</td><td>이스라엘 건국</td></tr>
<tr><td>1952</td><td>366</td><td>엘리자베스 2세 즉위</td></tr>
<tr><td>1956</td><td>366</td><td>수에즈 위기</td></tr>
<tr><td>1960</td><td>366</td><td>로마 하계 올림픽</td></tr>
<tr><td>1964</td><td>366</td><td>도쿄 하계 올림픽</td></tr>
<tr><td>1968</td><td>366</td><td>달 궤도 — 아폴로 8호</td></tr>
<tr><td>1972</td><td>366</td><td>뮌헨 올림픽</td></tr>
<tr><td>1976</td><td>366</td><td>몬트리올 하계 올림픽</td></tr>
<tr><td>1980</td><td>366</td><td>모스크바 하계 올림픽</td></tr>
<tr><td>1984</td><td>366</td><td>로스앤젤레스 하계 올림픽</td></tr>
<tr><td>1988</td><td>366</td><td>서울 하계 올림픽</td></tr>
<tr><td>1992</td><td>366</td><td>바르셀로나 하계 올림픽</td></tr>
<tr><td>1996</td><td>366</td><td>애틀랜타 하계 올림픽</td></tr>
<tr><td>2000</td><td>366</td><td>시드니 올림픽; 새 천년</td></tr>
<tr><td>2004</td><td>366</td><td>아테네 하계 올림픽</td></tr>
<tr><td>2008</td><td>366</td><td>베이징 하계 올림픽</td></tr>
<tr><td>2012</td><td>366</td><td>런던 하계 올림픽</td></tr>
<tr><td>2016</td><td>366</td><td>리우 하계 올림픽</td></tr>
<tr><td>2020</td><td>366</td><td>COVID-19 팬데믹 시작</td></tr>
<tr><td>2024</td><td>366</td><td>파리 하계 올림픽</td></tr>
<tr><td>2028</td><td>366</td><td>로스앤젤레스 하계 올림픽</td></tr>
<tr><td>2032</td><td>366</td><td>브리즈번 하계 올림픽</td></tr>
<tr><td>2036</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2040</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2044</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2048</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2052</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2056</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2060</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2064</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2068</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2072</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2076</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2080</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2084</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2088</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2092</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2096</td><td>366</td><td>미래 윤년</td></tr>
<tr><td>2104</td><td>366</td><td>2100년 이후 첫 번째 윤년 (2100년은 건너뜀)</td></tr>
</table>`
      },
      {
        h2: '윤년이 존재하는 이유',
        body: '<p>지구가 태양 주위를 한 바퀴 도는 데 약 365.25일이 걸립니다. 일반 달력 연도는 365일뿐이므로 매년 약 4분의 1일씩 차이가 생깁니다. 윤년이 없다면 달력은 <strong>4년마다 약 1일씩</strong> 어긋나고, 100년 후에는 계절이 25일이나 밀리게 됩니다.</p><p>윤년 제도(1582년 그레고리력으로 확립)는 4로 나누어 떨어지는 대부분의 해에 2월 29일을 추가하여 이 오차를 보정합니다.</p>'
      },
    ],
    faqs: [
      { q: '1900년은 윤년인가요?', a: '아닙니다. 1900년은 100으로 나누어 떨어지지만 400으로는 아니므로 윤년이 아닙니다.' },
      { q: '2000년은 윤년인가요?', a: '네. 2000년은 400으로 나누어 떨어지므로 윤년입니다.' },
      { q: '2024년 다음 윤년은 언제인가요?', a: '2024년 다음 윤년은 2028년입니다.' },
      { q: '윤년은 며칠인가요?', a: '윤년은 366일입니다 — 일반 365일보다 하루 많습니다.' },
    ],
    pillar: { href: '/born-in-2000/', label: '2000년생 — 윤년' },
    related: [
      { href: '/born-in-2000/', label: '2000년생' },
      { href: '/born-in-1996/', label: '1996년생' },
      { href: '/ko/nal-jja-gye-san/', label: '날짜 계산' },
    ],
  },
  nl: {
    title: 'Volledige Lijst van Schrikkeljaren (1900–2100)',
    metaDesc: 'Alle schrikkeljaren van 1900 tot 2100 in één complete lijst. Inclusief de schrikkeljarregel, waarom 1900 GEEN schrikkeljaar is en waarom 2000 WEL.',
    kicker: 'KALENDER REFERENTIE',
    h1: 'Volledige Lijst van Schrikkeljaren (1900–2100)',
    intro: 'Een schrikkeljaar komt elke 4 jaar voor — met twee uitzonderingen. Hier zijn alle schrikkeljaren van 1900 tot 2100, plus de eenvoudige regel om ze te berekenen.',
    sections: [
      {
        h2: 'De Schrikkeljarregel',
        body: `<p>Een jaar is een schrikkeljaar als het aan de volgende voorwaarden voldoet:</p>
<ol>
<li><strong>Deelbaar door 4</strong> → schrikkeljaar (bijv. 1904, 2004)</li>
<li><strong>Uitzondering:</strong> eeuwjaren (1800, 1900, 2100) zijn <em>geen</em> schrikkeljaren — ook al zijn ze deelbaar door 4.</li>
<li><strong>Uitzondering op de uitzondering:</strong> eeuwjaren deelbaar door 400 <em>zijn</em> schrikkeljaren (bijv. 2000).</li>
</ol>
<p>In de praktijk: <strong>1900 is GEEN schrikkeljaar</strong> (deelbaar door 100 maar niet door 400). <strong>2000 IS een schrikkeljaar</strong> (deelbaar door 400). <strong>2100 zal GEEN schrikkeljaar zijn</strong>.</p>`
      },
      {
        h2: 'Alle Schrikkeljaren 1900–2100',
        body: '<p>Let op: 1900 en 2100 zijn <strong>geen</strong> schrikkeljaren. Het volgende schrikkeljaar na 2096 is 2104.</p>',
        table: `<table>
<tr><th>Jaar</th><th>Dagen</th><th>Opmerkelijke gebeurtenis</th></tr>
<tr><td>1904</td><td>366</td><td>Wereldtentoonstelling in St. Louis</td></tr>
<tr><td>1908</td><td>366</td><td>Eerste moderne Olympische Spelen in Londen</td></tr>
<tr><td>1912</td><td>366</td><td>Vergaan van de Titanic</td></tr>
<tr><td>1916</td><td>366</td><td>Slag aan de Somme</td></tr>
<tr><td>1920</td><td>366</td><td>Oprichting van de Volkenbond</td></tr>
<tr><td>1924</td><td>366</td><td>Eerste Olympische Winterspelen</td></tr>
<tr><td>1928</td><td>366</td><td>Ontdekking van penicilline</td></tr>
<tr><td>1932</td><td>366</td><td>Olympische Zomerspelen in Los Angeles</td></tr>
<tr><td>1936</td><td>366</td><td>Olympische Zomerspelen in Berlijn</td></tr>
<tr><td>1940</td><td>366</td><td>Slag om Engeland</td></tr>
<tr><td>1944</td><td>366</td><td>D-Day landing in Normandië</td></tr>
<tr><td>1948</td><td>366</td><td>Oprichting van de Staat Israël</td></tr>
<tr><td>1952</td><td>366</td><td>Elizabeth II wordt Koningin</td></tr>
<tr><td>1956</td><td>366</td><td>Suezcrisis</td></tr>
<tr><td>1960</td><td>366</td><td>Olympische Zomerspelen in Rome</td></tr>
<tr><td>1964</td><td>366</td><td>Olympische Zomerspelen in Tokio</td></tr>
<tr><td>1968</td><td>366</td><td>Maanomloopbaan — Apollo 8</td></tr>
<tr><td>1972</td><td>366</td><td>Olympische Spelen in München</td></tr>
<tr><td>1976</td><td>366</td><td>Olympische Zomerspelen in Montreal</td></tr>
<tr><td>1980</td><td>366</td><td>Olympische Zomerspelen in Moskou</td></tr>
<tr><td>1984</td><td>366</td><td>Olympische Zomerspelen in Los Angeles</td></tr>
<tr><td>1988</td><td>366</td><td>Olympische Zomerspelen in Seoul</td></tr>
<tr><td>1992</td><td>366</td><td>Olympische Zomerspelen in Barcelona</td></tr>
<tr><td>1996</td><td>366</td><td>Olympische Zomerspelen in Atlanta</td></tr>
<tr><td>2000</td><td>366</td><td>Olympische Spelen in Sydney; nieuw millennium</td></tr>
<tr><td>2004</td><td>366</td><td>Olympische Zomerspelen in Athene</td></tr>
<tr><td>2008</td><td>366</td><td>Olympische Zomerspelen in Peking</td></tr>
<tr><td>2012</td><td>366</td><td>Olympische Zomerspelen in Londen</td></tr>
<tr><td>2016</td><td>366</td><td>Olympische Zomerspelen in Rio</td></tr>
<tr><td>2020</td><td>366</td><td>Begin van de COVID-19-pandemie</td></tr>
<tr><td>2024</td><td>366</td><td>Olympische Zomerspelen in Parijs</td></tr>
<tr><td>2028</td><td>366</td><td>Olympische Zomerspelen in Los Angeles</td></tr>
<tr><td>2032</td><td>366</td><td>Olympische Zomerspelen in Brisbane</td></tr>
<tr><td>2036</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2040</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2044</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2048</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2052</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2056</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2060</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2064</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2068</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2072</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2076</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2080</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2084</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2088</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2092</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2096</td><td>366</td><td>Toekomstig schrikkeljaar</td></tr>
<tr><td>2104</td><td>366</td><td>Eerste schrikkeljaar na 2100 (2100 wordt overgeslagen)</td></tr>
</table>`
      },
      {
        h2: 'Waarom Hebben We Schrikkeljaren?',
        body: '<p>De aarde heeft ongeveer 365,25 dagen nodig om één baan om de zon te voltooien. Een standaard kalenderjaar heeft slechts 365 dagen, waardoor we elk jaar ongeveer een kwart dag verliezen. Zonder schrikkeljaren zou de kalender zo\'n <strong>1 dag per 4 jaar</strong> verschuiven — en na een eeuw zouden de seizoenen 25 dagen uit de pas lopen.</p><p>Het schrikkeljaarssysteem (ingesteld door de Gregoriaanse kalender in 1582) corrigeert deze afwijking door in de meeste jaren die deelbaar zijn door 4 een extra dag toe te voegen — 29 februari.</p>'
      },
    ],
    faqs: [
      { q: 'Is 1900 een schrikkeljaar?', a: 'Nee. 1900 is deelbaar door 100 maar niet door 400, dus het is geen schrikkeljaar.' },
      { q: 'Is 2000 een schrikkeljaar?', a: 'Ja. 2000 is deelbaar door 400, waardoor het een schrikkeljaar is.' },
      { q: 'Wat is het volgende schrikkeljaar na 2024?', a: '2028 is het volgende schrikkeljaar na 2024.' },
      { q: 'Hoeveel dagen heeft een schrikkeljaar?', a: 'Een schrikkeljaar heeft 366 dagen — één meer dan een standaard jaar van 365 dagen.' },
    ],
    pillar: { href: '/born-in-2000/', label: 'Geboren in 2000 — schrikkeljaar' },
    related: [
      { href: '/born-in-2000/', label: 'Geboren in 2000' },
      { href: '/born-in-1996/', label: 'Geboren in 1996' },
      { href: '/nl/dagen-tussen-datums/', label: 'Dagen tussen datums' },
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
  pt: {
    title: 'Meses de Aniversário Mais Populares — Dados de Nascimento por Mês',
    metaDesc: 'Qual mês tem mais aniversários? Setembro lidera a lista. Veja o ranking completo dos meses de nascimento por percentagem de nascimentos anuais.',
    kicker: 'DADOS DE ANIVERSÁRIO',
    h1: 'Meses de Aniversário Mais Populares',
    intro: 'Sabia que nascem mais pessoas em setembro do que em qualquer outro mês? Aqui estão os dados sobre a distribuição de aniversários ao longo do ano.',
    sections: [
      {
        h2: 'Ranking dos Meses de Aniversário',
        body: '<p>Com base nos registros de nascimentos dos Estados Unidos e dados ocidentais mais amplos, veja como os aniversários se distribuem pelos 12 meses:</p>',
        table: `<table>
<tr><th>Posição</th><th>Mês</th><th>% dos nascimentos anuais (aprox.)</th></tr>
<tr><td>1</td><td>Setembro</td><td>~9,0%</td></tr>
<tr><td>2</td><td>Agosto</td><td>~8,8%</td></tr>
<tr><td>3</td><td>Julho</td><td>~8,7%</td></tr>
<tr><td>4</td><td>Outubro</td><td>~8,6%</td></tr>
<tr><td>5</td><td>Junho</td><td>~8,3%</td></tr>
<tr><td>6</td><td>Novembro</td><td>~8,2%</td></tr>
<tr><td>7</td><td>Maio</td><td>~8,1%</td></tr>
<tr><td>8</td><td>Dezembro</td><td>~8,0%</td></tr>
<tr><td>9</td><td>Abril</td><td>~7,9%</td></tr>
<tr><td>10</td><td>Março</td><td>~7,8%</td></tr>
<tr><td>11</td><td>Janeiro</td><td>~7,6%</td></tr>
<tr><td>12</td><td>Fevereiro</td><td>~7,3%</td></tr>
</table>`
      },
      {
        h2: 'Por que Setembro é o Mês Mais Popular?',
        body: '<p>Os bebês de setembro costumam ser concebidos durante as festas de fim de ano (dezembro e janeiro), uma época em que mais casais estão juntos e as taxas de concepção tendem a aumentar. Estudos mostram consistentemente um pico de nascimentos no final do verão e início de setembro em muitos países do hemisfério norte.</p><p>Os dados se confirmam ao longo de várias décadas de registros de nascimentos nos EUA, no Reino Unido e na Austrália, tornando setembro o mês de nascimento mais popular de forma consistente.</p>'
      },
      {
        h2: 'Aniversários Mais Raros',
        body: '<p><strong>29 de fevereiro (dia bissexto)</strong> é o aniversário mais raro — só ocorre a cada 4 anos. As pessoas nascidas nessa data são chamadas de "bisextos" e tecnicamente só têm um verdadeiro aniversário uma vez a cada quatro anos.</p><p>Entre as datas comuns, <strong>25 de dezembro</strong> e <strong>1º de janeiro</strong> são estatisticamente raros, provavelmente porque menos cesarianas e partos induzidos são agendados nos grandes feriados. O dia 24 de dezembro e o 4 de julho também estão entre os aniversários menos comuns nos EUA.</p>'
      },
    ],
    faqs: [
      { q: 'Qual é o mês de aniversário mais comum?', a: 'Setembro, com aproximadamente 9% de todos os nascimentos anuais.' },
      { q: 'Qual é o aniversário mais raro?', a: '29 de fevereiro (dia bissexto), que só existe em anos bissextos. Entre as datas comuns, 25 de dezembro é um dos mais raros.' },
      { q: 'Qual mês tem menos aniversários?', a: 'Fevereiro tem consistentemente menos aniversários, em parte por ter menos dias e em parte por taxas de concepção mais baixas em torno de maio.' },
      { q: 'Existe uma temporada de pico para nascimentos?', a: 'Sim. No hemisfério norte, o final do verão (agosto–setembro) é a temporada de pico de nascimentos.' },
    ],
    pillar: { href: '/born-in-1990/', label: 'Nascido em 1990?' },
    related: [
      { href: '/pt/calcular-idade/', label: 'Calculadora de idade' },
      { href: '/born-in-1990/', label: 'Nascido em 1990' },
      { href: '/born-in-2000/', label: 'Nascido em 2000' },
      { href: '/pt/lista-anos-bissextos/', label: 'Lista de anos bissextos' },
    ],
  },
  de: {
    title: 'Beliebteste Geburtsmonate — Geburtsdaten nach Monat',
    metaDesc: 'Welcher Monat hat die meisten Geburtstage? September führt die Liste an. Sehen Sie die vollständige Rangliste der Geburtsmonate nach Anteil an Jahresgeburten.',
    kicker: 'GEBURTSTAGSDATEN',
    h1: 'Beliebteste Geburtsmonate',
    intro: 'Wussten Sie, dass im September mehr Menschen geboren werden als in jedem anderen Monat? Hier sind die Daten zur Verteilung der Geburtstage über das Jahr.',
    sections: [
      {
        h2: 'Rangliste der Geburtsmonate',
        body: '<p>Basierend auf Geburtenregistern in den USA und weiteren westlichen Daten, hier die Verteilung der Geburtstage auf die 12 Monate:</p>',
        table: `<table>
<tr><th>Rang</th><th>Monat</th><th>% der Jahresgeburten (ca.)</th></tr>
<tr><td>1</td><td>September</td><td>~9,0 %</td></tr>
<tr><td>2</td><td>August</td><td>~8,8 %</td></tr>
<tr><td>3</td><td>Juli</td><td>~8,7 %</td></tr>
<tr><td>4</td><td>Oktober</td><td>~8,6 %</td></tr>
<tr><td>5</td><td>Juni</td><td>~8,3 %</td></tr>
<tr><td>6</td><td>November</td><td>~8,2 %</td></tr>
<tr><td>7</td><td>Mai</td><td>~8,1 %</td></tr>
<tr><td>8</td><td>Dezember</td><td>~8,0 %</td></tr>
<tr><td>9</td><td>April</td><td>~7,9 %</td></tr>
<tr><td>10</td><td>März</td><td>~7,8 %</td></tr>
<tr><td>11</td><td>Januar</td><td>~7,6 %</td></tr>
<tr><td>12</td><td>Februar</td><td>~7,3 %</td></tr>
</table>`
      },
      {
        h2: 'Warum ist September der beliebteste Monat?',
        body: '<p>September-Babys werden oft rund um die Feiertage (Dezember und Januar) gezeugt, einer Zeit, in der mehr Paare zusammen sind und die Konzeptionsraten tendenziell steigen. Studien zeigen durchgehend einen Geburtenspitzenwert im Spätsommer und Anfang September in vielen Ländern der nördlichen Hemisphäre.</p><p>Die Daten bestätigen sich über mehrere Jahrzehnte von Geburtenregistern in den USA, Großbritannien und Australien und machen September zum zuverlässig beliebtesten Geburtsmonat.</p>'
      },
      {
        h2: 'Seltenste Geburtstage',
        body: '<p><strong>29. Februar (Schalttag)</strong> ist der seltenste Geburtstag — er tritt nur alle 4 Jahre auf. Menschen, die an diesem Datum geboren sind, werden „Schaltjahreskinder" genannt und haben technisch gesehen nur alle vier Jahre einen echten Geburtstag.</p><p>Unter den regulären Daten sind der <strong>25. Dezember</strong> und der <strong>1. Januar</strong> statistisch selten, wohl weil an großen Feiertagen weniger Kaiserschnitte und eingeleitete Geburten geplant werden. Der 24. Dezember und der 4. Juli gehören ebenfalls zu den seltensten Geburtstagen in den USA.</p>'
      },
    ],
    faqs: [
      { q: 'Welcher Monat hat die meisten Geburtstage?', a: 'September, mit etwa 9 % aller Jahresgeburten.' },
      { q: 'Was ist der seltenste Geburtstag?', a: 'Der 29. Februar (Schalttag), der nur in Schaltjahren vorkommt. Unter den regulären Daten ist der 25. Dezember einer der seltensten.' },
      { q: 'Welcher Monat hat die wenigsten Geburtstage?', a: 'Februar hat durchgehend die wenigsten Geburtstage, teilweise wegen der geringeren Anzahl an Tagen und teilweise wegen niedrigerer Konzeptionsraten um Mai herum.' },
      { q: 'Gibt es eine Hochsaison für Geburten?', a: 'Ja. Auf der nördlichen Hemisphäre ist der Spätsommer (August–September) die Hochgeburtssaison.' },
    ],
    pillar: { href: '/born-in-1990/', label: 'Geboren 1990?' },
    related: [
      { href: '/de/alter-berechnen/', label: 'Altersrechner' },
      { href: '/born-in-1990/', label: 'Geboren 1990' },
      { href: '/born-in-2000/', label: 'Geboren 2000' },
      { href: '/de/schaltjahre-liste/', label: 'Liste der Schaltjahre' },
    ],
  },
  it: {
    title: 'Mesi di Compleanno Più Popolari — Dati di Nascita per Mese',
    metaDesc: 'Quale mese ha più compleanni? Settembre è in testa alla lista. Guarda la classifica completa dei mesi di nascita per percentuale di nascite annuali.',
    kicker: 'DATI SUL COMPLEANNO',
    h1: 'Mesi di Compleanno Più Popolari',
    intro: 'Sapevi che più persone nascono a settembre che in qualsiasi altro mese? Ecco i dati sulla distribuzione dei compleanni durante l\'anno.',
    sections: [
      {
        h2: 'Classifica dei Mesi di Compleanno',
        body: '<p>Basandosi sui registri di nascita degli Stati Uniti e su dati occidentali più ampi, ecco come si distribuiscono i compleanni nei 12 mesi:</p>',
        table: `<table>
<tr><th>Posizione</th><th>Mese</th><th>% delle nascite annuali (circa)</th></tr>
<tr><td>1</td><td>Settembre</td><td>~9,0%</td></tr>
<tr><td>2</td><td>Agosto</td><td>~8,8%</td></tr>
<tr><td>3</td><td>Luglio</td><td>~8,7%</td></tr>
<tr><td>4</td><td>Ottobre</td><td>~8,6%</td></tr>
<tr><td>5</td><td>Giugno</td><td>~8,3%</td></tr>
<tr><td>6</td><td>Novembre</td><td>~8,2%</td></tr>
<tr><td>7</td><td>Maggio</td><td>~8,1%</td></tr>
<tr><td>8</td><td>Dicembre</td><td>~8,0%</td></tr>
<tr><td>9</td><td>Aprile</td><td>~7,9%</td></tr>
<tr><td>10</td><td>Marzo</td><td>~7,8%</td></tr>
<tr><td>11</td><td>Gennaio</td><td>~7,6%</td></tr>
<tr><td>12</td><td>Febbraio</td><td>~7,3%</td></tr>
</table>`
      },
      {
        h2: 'Perché Settembre è il Mese Più Popolare?',
        body: '<p>I bambini nati a settembre vengono spesso concepiti durante le feste (dicembre e gennaio), un periodo in cui più coppie sono insieme e i tassi di concepimento tendono ad aumentare. Gli studi mostrano costantemente un picco di nascite a fine estate e inizio settembre in molti paesi dell\'emisfero settentrionale.</p><p>I dati si confermano su più decenni di registri di nascita negli USA, nel Regno Unito e in Australia, rendendo settembre il mese di nascita più costantemente popolare.</p>'
      },
      {
        h2: 'Compleanni Più Rari',
        body: '<p><strong>Il 29 febbraio (giorno bisestile)</strong> è il compleanno più raro — si verifica solo ogni 4 anni. Le persone nate in questa data sono chiamate "bisestili" e tecnicamente hanno un vero compleanno solo una volta ogni quattro anni.</p><p>Tra le date normali, il <strong>25 dicembre</strong> e il <strong>1° gennaio</strong> sono statisticamente rari, probabilmente perché nei giorni festivi principali vengono programmate meno parti cesarei e induzioni. Anche il 24 dicembre e il 4 luglio figurano tra i compleanni meno comuni negli USA.</p>'
      },
    ],
    faqs: [
      { q: 'Qual è il mese di compleanno più comune?', a: 'Settembre, con circa il 9% di tutte le nascite annuali.' },
      { q: 'Qual è il compleanno più raro?', a: 'Il 29 febbraio (giorno bisestile), che esiste solo negli anni bisestili. Tra le date normali, il 25 dicembre è uno dei più rari.' },
      { q: 'Quale mese ha meno compleanni?', a: 'Febbraio ha costantemente meno compleanni, in parte per il minor numero di giorni e in parte per i tassi di concepimento più bassi intorno a maggio.' },
      { q: 'Esiste una stagione di punta per le nascite?', a: 'Sì. Nell\'emisfero settentrionale, la fine dell\'estate (agosto–settembre) è la stagione di punta delle nascite.' },
    ],
    pillar: { href: '/born-in-1990/', label: 'Nato nel 1990?' },
    related: [
      { href: '/it/calcola-eta/', label: 'Calcolatore di età' },
      { href: '/born-in-1990/', label: 'Nato nel 1990' },
      { href: '/born-in-2000/', label: 'Nato nel 2000' },
      { href: '/it/lista-anni-bisestili/', label: 'Lista degli anni bisestili' },
    ],
  },
  pl: {
    title: 'Najpopularniejsze Miesiące Urodzin — Dane o Narodzinach według Miesiąca',
    metaDesc: 'Który miesiąc ma najwięcej urodzin? Wrzesień jest na czele listy. Sprawdź pełny ranking miesięcy urodzin według odsetka rocznych narodzin.',
    kicker: 'DANE O URODZINACH',
    h1: 'Najpopularniejsze Miesiące Urodzin',
    intro: 'Czy wiesz, że więcej ludzi rodzi się we wrześniu niż w jakimkolwiek innym miesiącu? Oto dane dotyczące rozkładu urodzin w ciągu roku.',
    sections: [
      {
        h2: 'Ranking Miesięcy Urodzin',
        body: '<p>Na podstawie rejestrów urodzin w Stanach Zjednoczonych i szerszych danych zachodnich, oto jak rozkładają się urodziny na 12 miesięcy:</p>',
        table: `<table>
<tr><th>Pozycja</th><th>Miesiąc</th><th>% rocznych narodzin (ok.)</th></tr>
<tr><td>1</td><td>Wrzesień</td><td>~9,0%</td></tr>
<tr><td>2</td><td>Sierpień</td><td>~8,8%</td></tr>
<tr><td>3</td><td>Lipiec</td><td>~8,7%</td></tr>
<tr><td>4</td><td>Październik</td><td>~8,6%</td></tr>
<tr><td>5</td><td>Czerwiec</td><td>~8,3%</td></tr>
<tr><td>6</td><td>Listopad</td><td>~8,2%</td></tr>
<tr><td>7</td><td>Maj</td><td>~8,1%</td></tr>
<tr><td>8</td><td>Grudzień</td><td>~8,0%</td></tr>
<tr><td>9</td><td>Kwiecień</td><td>~7,9%</td></tr>
<tr><td>10</td><td>Marzec</td><td>~7,8%</td></tr>
<tr><td>11</td><td>Styczeń</td><td>~7,6%</td></tr>
<tr><td>12</td><td>Luty</td><td>~7,3%</td></tr>
</table>`
      },
      {
        h2: 'Dlaczego Wrzesień jest Najpopularniejszy?',
        body: '<p>Dzieci urodzone we wrześniu są często poczęte w okolicach świąt (grudzień i styczeń), kiedy więcej par jest razem i wskaźniki poczęć mają tendencję do wzrostu. Badania konsekwentnie pokazują wzrost narodzin pod koniec lata i na początku września w wielu krajach półkuli północnej.</p><p>Dane potwierdzają się przez kilka dziesięcioleci rejestrów urodzin w USA, Wielkiej Brytanii i Australii, co czyni wrzesień najbardziej niezawodnie popularnym miesiącem urodzin.</p>'
      },
      {
        h2: 'Najrzadsze Urodziny',
        body: '<p><strong>29 lutego (dzień przestępny)</strong> to najrzadsze urodziny — istnieje tylko co 4 lata. Osoby urodzone w tej dacie są nazywane „przestępnymi" i technicznie rzecz biorąc mają prawdziwe urodziny tylko raz na cztery lata.</p><p>Wśród zwykłych dat, <strong>25 grudnia</strong> i <strong>1 stycznia</strong> są statystycznie rzadkie, prawdopodobnie dlatego, że w główne święta planuje się mniej cesarskich cięć i porodów wywołanych. 24 grudnia i 4 lipca również należą do najmniej popularnych dat urodzin w USA.</p>'
      },
    ],
    faqs: [
      { q: 'Jaki jest najpopularniejszy miesiąc urodzin?', a: 'Wrzesień, z około 9% wszystkich rocznych narodzin.' },
      { q: 'Jakie są najrzadsze urodziny?', a: '29 lutego (dzień przestępny), który istnieje tylko w latach przestępnych. Wśród zwykłych dat, 25 grudnia jest jednym z najrzadszych.' },
      { q: 'Który miesiąc ma najmniej urodzin?', a: 'Luty konsekwentnie ma najmniej urodzin, po części ze względu na mniejszą liczbę dni, a po części ze względu na niższe wskaźniki poczęć w okolicach maja.' },
      { q: 'Czy istnieje szczyt sezonu urodzin?', a: 'Tak. Na półkuli północnej koniec lata (sierpień–wrzesień) to szczytowy sezon narodzin.' },
    ],
    pillar: { href: '/born-in-1990/', label: 'Urodzony w 1990?' },
    related: [
      { href: '/pl/kalkulator-wieku/', label: 'Kalkulator wieku' },
      { href: '/born-in-1990/', label: 'Urodzony w 1990' },
      { href: '/born-in-2000/', label: 'Urodzony w 2000' },
      { href: '/pl/lista-lat-przestepnych/', label: 'Lista lat przestępnych' },
    ],
  },
  ja: {
    title: '誕生月の人気ランキング — 月別出生データ',
    metaDesc: '最も誕生日が多い月はどれ？9月がトップです。年間出生数の割合による誕生月の完全ランキングをご覧ください。',
    kicker: '誕生日データ',
    h1: '誕生月の人気ランキング',
    intro: '9月には他のどの月よりも多くの人が生まれるのをご存知ですか？年間を通じた誕生日の分布データをご紹介します。',
    sections: [
      {
        h2: '誕生月ランキング',
        body: '<p>米国の出生記録と欧米の幅広いデータに基づき、12か月間の誕生日の分布をご紹介します：</p>',
        table: `<table>
<tr><th>順位</th><th>月</th><th>年間出生数の割合（概算）</th></tr>
<tr><td>1</td><td>9月</td><td>~9.0%</td></tr>
<tr><td>2</td><td>8月</td><td>~8.8%</td></tr>
<tr><td>3</td><td>7月</td><td>~8.7%</td></tr>
<tr><td>4</td><td>10月</td><td>~8.6%</td></tr>
<tr><td>5</td><td>6月</td><td>~8.3%</td></tr>
<tr><td>6</td><td>11月</td><td>~8.2%</td></tr>
<tr><td>7</td><td>5月</td><td>~8.1%</td></tr>
<tr><td>8</td><td>12月</td><td>~8.0%</td></tr>
<tr><td>9</td><td>4月</td><td>~7.9%</td></tr>
<tr><td>10</td><td>3月</td><td>~7.8%</td></tr>
<tr><td>11</td><td>1月</td><td>~7.6%</td></tr>
<tr><td>12</td><td>2月</td><td>~7.3%</td></tr>
</table>`
      },
      {
        h2: 'なぜ9月が最も人気なのか？',
        body: '<p>9月生まれの赤ちゃんは、年末年始の祝日シーズン（12月・1月）に受胎することが多く、カップルが一緒に過ごす機会が多くなり、受胎率が高まる傾向があります。北半球の多くの国で、夏の終わりから9月初旬にかけて出生数のピークが見られることが複数の研究で一貫して示されています。</p><p>このデータは米国・英国・オーストラリアの数十年にわたる出生記録でも裏付けられており、9月は最も安定して人気の高い誕生月となっています。</p>'
      },
      {
        h2: '最もまれな誕生日',
        body: '<p><strong>2月29日（閏日）</strong>は最もまれな誕生日です — 4年に1度しかありません。この日に生まれた人は「閏年生まれ」と呼ばれ、厳密には4年に1度しか本当の誕生日を迎えません。</p><p>通常の日付の中では、<strong>12月25日</strong>と<strong>1月1日</strong>が統計的にまれで、主要な祝日には帝王切開や誘発分娩が少ないためと考えられています。12月24日と7月4日も米国で最も少ない誕生日の一つです。</p>'
      },
    ],
    faqs: [
      { q: '最も多い誕生月はどれですか？', a: '9月で、年間出生数の約9%を占めます。' },
      { q: '最もまれな誕生日はいつですか？', a: '2月29日（閏日）で、閏年にしか存在しません。通常の日付では、12月25日が最もまれな日の一つです。' },
      { q: '誕生日が最も少ない月はどれですか？', a: '2月は一貫して誕生日が最も少なく、日数が少ないことと5月ごろの受胎率が低いことが要因です。' },
      { q: '出生のピーク時期はありますか？', a: 'はい。北半球では夏の終わり（8〜9月）が出生のピーク時期です。' },
    ],
    pillar: { href: '/born-in-1990/', label: '1990年生まれ？' },
    related: [
      { href: '/ja/nenrei-keisan/', label: '年齢計算' },
      { href: '/born-in-1990/', label: '1990年生まれ' },
      { href: '/born-in-2000/', label: '2000年生まれ' },
      { href: '/ja/uruu-doshi-ichiran/', label: '閏年一覧' },
    ],
  },
  ko: {
    title: '인기 있는 생일 월 — 월별 출생 데이터',
    metaDesc: '어떤 달에 생일이 가장 많을까요? 9월이 1위입니다. 연간 출생률 비율에 따른 생일 월 전체 순위를 확인하세요.',
    kicker: '생일 데이터',
    h1: '인기 있는 생일 월',
    intro: '9월에 태어나는 사람이 다른 어느 달보다 많다는 사실을 아셨나요? 연간 생일 분포에 대한 데이터를 소개합니다.',
    sections: [
      {
        h2: '생일 월 순위',
        body: '<p>미국 출생 기록과 서방 데이터를 기반으로, 12개월에 걸친 생일 분포를 정리했습니다:</p>',
        table: `<table>
<tr><th>순위</th><th>월</th><th>연간 출생 비율 (약)</th></tr>
<tr><td>1</td><td>9월</td><td>~9.0%</td></tr>
<tr><td>2</td><td>8월</td><td>~8.8%</td></tr>
<tr><td>3</td><td>7월</td><td>~8.7%</td></tr>
<tr><td>4</td><td>10월</td><td>~8.6%</td></tr>
<tr><td>5</td><td>6월</td><td>~8.3%</td></tr>
<tr><td>6</td><td>11월</td><td>~8.2%</td></tr>
<tr><td>7</td><td>5월</td><td>~8.1%</td></tr>
<tr><td>8</td><td>12월</td><td>~8.0%</td></tr>
<tr><td>9</td><td>4월</td><td>~7.9%</td></tr>
<tr><td>10</td><td>3월</td><td>~7.8%</td></tr>
<tr><td>11</td><td>1월</td><td>~7.6%</td></tr>
<tr><td>12</td><td>2월</td><td>~7.3%</td></tr>
</table>`
      },
      {
        h2: '왜 9월이 가장 인기 있나요?',
        body: '<p>9월생 아기는 연말연시 휴가 시즌(12월~1월)에 잉태되는 경우가 많습니다. 이 시기에는 커플이 함께 보내는 시간이 많아지고 임신율이 높아지는 경향이 있습니다. 북반구 여러 나라에서 여름 말과 9월 초에 출생 급증이 일관되게 나타난다는 연구 결과가 있습니다.</p><p>이 데이터는 미국, 영국, 호주의 수십 년치 출생 기록에서도 일관되게 나타나며, 9월을 가장 안정적으로 인기 있는 출생 월로 만들고 있습니다.</p>'
      },
      {
        h2: '가장 드문 생일',
        body: '<p><strong>2월 29일(윤일)</strong>은 가장 드문 생일로, 4년에 한 번만 존재합니다. 이날 태어난 사람들은 "윤년생"이라 불리며 엄밀히 말해 4년마다 한 번씩 진짜 생일을 맞이합니다.</p><p>일반적인 날짜 중에서는 <strong>12월 25일</strong>과 <strong>1월 1일</strong>이 통계적으로 드문데, 주요 공휴일에 제왕절개와 유도분만이 적게 예약되기 때문으로 보입니다. 12월 24일과 7월 4일도 미국에서 가장 드문 생일 중 하나입니다.</p>'
      },
    ],
    faqs: [
      { q: '가장 흔한 생일 월은 언제인가요?', a: '9월로, 연간 전체 출생의 약 9%를 차지합니다.' },
      { q: '가장 드문 생일은 언제인가요?', a: '윤년에만 존재하는 2월 29일(윤일)입니다. 일반 날짜 중에서는 12월 25일이 가장 드문 날 중 하나입니다.' },
      { q: '생일이 가장 적은 달은 언제인가요?', a: '2월은 일관되게 생일이 가장 적은데, 날수가 적은 것과 5월경 임신율이 낮은 것이 원인입니다.' },
      { q: '출생 성수기가 있나요?', a: '네. 북반구에서는 여름 말(8~9월)이 출생 성수기입니다.' },
    ],
    pillar: { href: '/born-in-1990/', label: '1990년생?' },
    related: [
      { href: '/ko/na-i-gye-san/', label: '나이 계산기' },
      { href: '/born-in-1990/', label: '1990년생' },
      { href: '/born-in-2000/', label: '2000년생' },
      { href: '/ko/yun-nyeon-mok-rok/', label: '윤년 목록' },
    ],
  },
  nl: {
    title: 'Populairste Geboorte-maanden — Geboortedata per Maand',
    metaDesc: 'Welke maand heeft de meeste verjaardagen? September staat bovenaan de lijst. Bekijk de volledige ranglijst van geboorte-maanden per percentage van jaarlijkse geboorten.',
    kicker: 'VERJAARDAG DATA',
    h1: 'Populairste Geboorte-maanden',
    intro: 'Wist u dat er in september meer mensen worden geboren dan in welke andere maand dan ook? Hier zijn de gegevens over de verdeling van verjaardagen over het jaar.',
    sections: [
      {
        h2: 'Ranglijst van Geboorte-maanden',
        body: '<p>Op basis van geboorteregisters in de Verenigde Staten en bredere westerse gegevens, hier de verdeling van verjaardagen over de 12 maanden:</p>',
        table: `<table>
<tr><th>Rang</th><th>Maand</th><th>% van jaarlijkse geboorten (ca.)</th></tr>
<tr><td>1</td><td>September</td><td>~9,0%</td></tr>
<tr><td>2</td><td>Augustus</td><td>~8,8%</td></tr>
<tr><td>3</td><td>Juli</td><td>~8,7%</td></tr>
<tr><td>4</td><td>Oktober</td><td>~8,6%</td></tr>
<tr><td>5</td><td>Juni</td><td>~8,3%</td></tr>
<tr><td>6</td><td>November</td><td>~8,2%</td></tr>
<tr><td>7</td><td>Mei</td><td>~8,1%</td></tr>
<tr><td>8</td><td>December</td><td>~8,0%</td></tr>
<tr><td>9</td><td>April</td><td>~7,9%</td></tr>
<tr><td>10</td><td>Maart</td><td>~7,8%</td></tr>
<tr><td>11</td><td>Januari</td><td>~7,6%</td></tr>
<tr><td>12</td><td>Februari</td><td>~7,3%</td></tr>
</table>`
      },
      {
        h2: 'Waarom is September de Populairste Maand?',
        body: '<p>September-baby\'s worden vaak rond het feestseizoen (december en januari) verwekt, een tijd waarop meer koppels samen zijn en de conceptieraten de neiging hebben te stijgen. Studies tonen consistent een piek in geboorten aan het einde van de zomer en begin september in veel landen op het noordelijk halfrond.</p><p>De gegevens bevestigen zich over meerdere decennia van geboorteregisters in de VS, het VK en Australië, waardoor september de betrouwbaar populairste geboortemaand is.</p>'
      },
      {
        h2: 'Zeldzaamste Verjaardagen',
        body: '<p><strong>29 februari (schrikkeldag)</strong> is de zeldzaamste verjaardag — die bestaat slechts eens in de 4 jaar. Mensen geboren op deze datum worden "schrikkeljarige" genoemd en hebben technisch gezien slechts eens per vier jaar een echte verjaardag.</p><p>Onder de gewone datums zijn <strong>25 december</strong> en <strong>1 januari</strong> statistisch zeldzaam, waarschijnlijk omdat er op grote feestdagen minder keizersneden en ingeleid bevallingen worden gepland. 24 december en 4 juli behoren eveneens tot de minst voorkomende verjaardagen in de VS.</p>'
      },
    ],
    faqs: [
      { q: 'Welke maand heeft de meeste verjaardagen?', a: 'September, met ongeveer 9% van alle jaarlijkse geboorten.' },
      { q: 'Wat is de zeldzaamste verjaardag?', a: '29 februari (schrikkeldag), die alleen bestaat in schrikkeljaren. Onder gewone datums is 25 december een van de zeldzaamste.' },
      { q: 'Welke maand heeft de minste verjaardagen?', a: 'Februari heeft consistent de minste verjaardagen, deels vanwege het geringere aantal dagen en deels vanwege lagere conceptieraten rond mei.' },
      { q: 'Is er een piekseizoen voor geboorten?', a: 'Ja. Op het noordelijk halfrond is het einde van de zomer (augustus–september) het piekseizoen voor geboorten.' },
    ],
    pillar: { href: '/born-in-1990/', label: 'Geboren in 1990?' },
    related: [
      { href: '/nl/leeftijd-berekenen/', label: 'Leeftijdscalculator' },
      { href: '/born-in-1990/', label: 'Geboren in 1990' },
      { href: '/born-in-2000/', label: 'Geboren in 2000' },
      { href: '/nl/schrikkeljaren-lijst/', label: 'Lijst van schrikkeljaren' },
    ],
  },
};

// ── Module export ─────────────────────────────────────────
module.exports = {
  pages: [
    { id: 'leap-years-list',              slugs: { en: 'leap-years-list',              fr: 'fr/liste-annees-bissextiles',             es: 'es/lista-anos-bisiestos',             pt: 'pt/lista-anos-bissextos',             de: 'de/schaltjahre-liste',             it: 'it/lista-anni-bisestili',             pl: 'pl/lista-lat-przestepnych',             ja: 'ja/uruu-doshi-ichiran',             ko: 'ko/yun-nyeon-mok-rok',             nl: 'nl/schrikkeljaren-lijst' } },
    { id: 'most-popular-birthday-months', slugs: { en: 'most-popular-birthday-months', fr: 'fr/mois-anniversaire-les-plus-populaires', es: 'es/meses-de-cumpleanos-mas-populares', pt: 'pt/meses-de-aniversario-mais-populares', de: 'de/beliebteste-geburtsmonate', it: 'it/mesi-di-compleanno-piu-popolari', pl: 'pl/najpopularniejsze-miesiace-urodzin', ja: 'ja/tanjobi-no-ninki-tsuki', ko: 'ko/ingi-itneun-saengil-wol', nl: 'nl/populairste-geboorte-maanden' } },
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
