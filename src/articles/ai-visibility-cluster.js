'use strict';
const T = {};

// ── Article 1: how-to-calculate-days-between-dates ──────────
T['how-to-calculate-days-between-dates'] = {
  en: {
    title: 'How to Calculate the Number of Days Between Two Dates',
    metaDesc: 'Step-by-step guide to calculating the number of days between two dates. Includes formula, worked examples, and how to handle leap years.',
    kicker: 'DATE CALCULATION GUIDE',
    h1: 'How to Calculate the Number of Days Between Two Dates',
    intro: 'To calculate the number of days between two dates, subtract the earlier date from the later date. There are several methods to do this accurately, depending on whether you are calculating by hand, using a spreadsheet, or using a formula.',
    sections: [
      {
        h2: 'Method 1: Count calendar days directly',
        body: `<p>The simplest approach: start from the earlier date and count forward to the later date, one day at a time. This is practical for short ranges (a few weeks) but impractical for longer ones.</p>
<p><strong>Example:</strong> How many days from April 1 to April 15?<br>
April 1 → April 15 = <strong>14 days</strong>.</p>`
      },
      {
        h2: 'Method 2: Subtract day-of-year numbers',
        body: `<p>Each day of the year has a number from 1 (January 1) to 365 (December 31). To find days between two dates in the same year, subtract the day numbers.</p>
<p><strong>Example:</strong> How many days from March 10 to November 20, 2025?</p>
<ol>
<li>March 10 = day 69 of the year</li>
<li>November 20 = day 324 of the year</li>
<li>324 − 69 = <strong>255 days</strong></li>
</ol>`,
        table: `<table>
<tr><th>Month</th><th>Day of year (first day)</th><th>Days in month</th></tr>
<tr><td>January</td><td>1</td><td>31</td></tr>
<tr><td>February</td><td>32</td><td>28 (or 29 in a leap year)</td></tr>
<tr><td>March</td><td>60 (61 in leap year)</td><td>31</td></tr>
<tr><td>April</td><td>91 (92)</td><td>30</td></tr>
<tr><td>May</td><td>121 (122)</td><td>31</td></tr>
<tr><td>June</td><td>152 (153)</td><td>30</td></tr>
<tr><td>July</td><td>182 (183)</td><td>31</td></tr>
<tr><td>August</td><td>213 (214)</td><td>31</td></tr>
<tr><td>September</td><td>244 (245)</td><td>30</td></tr>
<tr><td>October</td><td>274 (275)</td><td>31</td></tr>
<tr><td>November</td><td>305 (306)</td><td>30</td></tr>
<tr><td>December</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Method 3: Count across years',
        body: `<p>When dates span multiple years, add up the remaining days in the first year, the full days in complete middle years, and the days elapsed in the final year.</p>
<p><strong>Example:</strong> Days from June 15, 2020 to March 10, 2024:</p>
<ol>
<li>June 15 to Dec 31, 2020: 199 days remaining in 2020</li>
<li>Full year 2021: 365 days</li>
<li>Full year 2022: 365 days</li>
<li>Full year 2023: 365 days</li>
<li>Jan 1 to Mar 10, 2024: 70 days (2024 is a leap year)</li>
<li>Total: 199 + 365 + 365 + 365 + 70 = <strong>1,364 days</strong></li>
</ol>`
      },
      {
        h2: 'How leap years affect the calculation',
        body: `<p>A leap year has 366 days instead of 365. When your date range includes February 29 of a leap year, add 1 extra day. Leap years occur every 4 years: 2020, 2024, 2028, 2032…</p>
<p>If you are calculating by hand across multiple years, check whether each year in the range is a leap year and use 366 instead of 365 for those years.</p>`
      },
    ],
    faqs: [
      { q: 'How many days are between January 1 and December 31?', a: '364 days separate January 1 and December 31 (not counting the first day). The full year from January 1 to January 1 of the next year is 365 days (or 366 in a leap year).' },
      { q: 'How do I calculate the number of days between two dates in Excel?', a: 'In Excel, subtract the two date cells directly: =B1-A1. Format the result cell as a number (not a date). Excel stores dates as numbers, so subtraction gives the exact number of days.' },
      { q: 'Does the calculation include both the start and end date?', a: 'It depends on the convention. Most calculators count the gap between dates (not including either endpoint), so January 1 to January 5 = 4 days. If you need to include both days (e.g., for a rental period), add 1 to the result.' },
      { q: 'How many days between two dates that span a leap year?', a: 'If the date range includes February 29 of a leap year, add 1 extra day compared to a non-leap-year calculation. For example, January 1, 2024 to January 1, 2025 = 366 days (2024 is a leap year).' },
      { q: 'What is the fastest way to calculate days between dates?', a: 'Use an online date calculator (like the one on this site). Enter the two dates and the calculator instantly returns the number of days, weeks, months, and years between them.' },
    ],
    pillar: { href: '/days-between-dates/', label: 'Calculate days between dates — free tool' },
    related: [
      { href: '/how-many-days-in-each-month/', label: 'Days in each month' },
      { href: '/business-days-vs-calendar-days/', label: 'Business days vs calendar days' },
      { href: '/how-many-weeks-in-a-year/', label: 'Weeks in a year' },
    ],
  },
  fr: {
    title: 'Comment calculer le nombre de jours entre deux dates',
    metaDesc: 'Guide étape par étape pour calculer le nombre de jours entre deux dates. Inclut la formule, des exemples concrets et la gestion des années bissextiles.',
    kicker: 'GUIDE DE CALCUL DE DATES',
    h1: 'Comment calculer le nombre de jours entre deux dates',
    intro: 'Pour calculer le nombre de jours entre deux dates, soustrayez la date la plus ancienne de la date la plus récente. Il existe plusieurs méthodes pour obtenir un résultat précis, selon que vous calculez à la main, avec un tableur ou avec une formule.',
    sections: [
      {
        h2: 'Méthode 1 : compter les jours calendaires directement',
        body: `<p>L'approche la plus simple : partez de la date la plus ancienne et comptez jusqu'à la date la plus récente, jour par jour. C'est pratique pour de courtes périodes (quelques semaines), mais peu commode pour des intervalles plus longs.</p>
<p><strong>Exemple :</strong> Combien de jours du 1er avril au 15 avril ?<br>
1er avril → 15 avril = <strong>14 jours</strong>.</p>`
      },
      {
        h2: "Méthode 2 : soustraire les numéros de jour dans l'année",
        body: `<p>Chaque jour de l'année porte un numéro de 1 (1er janvier) à 365 (31 décembre). Pour trouver le nombre de jours entre deux dates de la même année, soustrayez ces numéros.</p>
<p><strong>Exemple :</strong> Combien de jours du 10 mars au 20 novembre 2025 ?</p>
<ol>
<li>10 mars = jour 69 de l'année</li>
<li>20 novembre = jour 324 de l'année</li>
<li>324 − 69 = <strong>255 jours</strong></li>
</ol>`,
        table: `<table>
<tr><th>Mois</th><th>Numéro du premier jour</th><th>Jours dans le mois</th></tr>
<tr><td>Janvier</td><td>1</td><td>31</td></tr>
<tr><td>Février</td><td>32</td><td>28 (ou 29 en année bissextile)</td></tr>
<tr><td>Mars</td><td>60 (61 en année bissextile)</td><td>31</td></tr>
<tr><td>Avril</td><td>91 (92)</td><td>30</td></tr>
<tr><td>Mai</td><td>121 (122)</td><td>31</td></tr>
<tr><td>Juin</td><td>152 (153)</td><td>30</td></tr>
<tr><td>Juillet</td><td>182 (183)</td><td>31</td></tr>
<tr><td>Août</td><td>213 (214)</td><td>31</td></tr>
<tr><td>Septembre</td><td>244 (245)</td><td>30</td></tr>
<tr><td>Octobre</td><td>274 (275)</td><td>31</td></tr>
<tr><td>Novembre</td><td>305 (306)</td><td>30</td></tr>
<tr><td>Décembre</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Méthode 3 : compter sur plusieurs années',
        body: `<p>Lorsque les dates couvrent plusieurs années, additionnez les jours restants dans la première année, les jours complets des années intermédiaires et les jours écoulés dans la dernière année.</p>
<p><strong>Exemple :</strong> Jours du 15 juin 2020 au 10 mars 2024 :</p>
<ol>
<li>15 juin au 31 décembre 2020 : 199 jours restants en 2020</li>
<li>Année complète 2021 : 365 jours</li>
<li>Année complète 2022 : 365 jours</li>
<li>Année complète 2023 : 365 jours</li>
<li>1er janvier au 10 mars 2024 : 70 jours (2024 est une année bissextile)</li>
<li>Total : 199 + 365 + 365 + 365 + 70 = <strong>1 364 jours</strong></li>
</ol>`
      },
      {
        h2: "L'impact des années bissextiles sur le calcul",
        body: `<p>Une année bissextile compte 366 jours au lieu de 365. Si votre intervalle inclut le 29 février d'une année bissextile, ajoutez 1 jour supplémentaire. Les années bissextiles surviennent tous les 4 ans : 2020, 2024, 2028, 2032…</p>
<p>Si vous calculez à la main sur plusieurs années, vérifiez si chaque année de l'intervalle est bissextile et utilisez 366 au lieu de 365 pour ces années.</p>`
      },
    ],
    faqs: [
      { q: 'Combien de jours séparent le 1er janvier du 31 décembre ?', a: "364 jours séparent le 1er janvier du 31 décembre (sans compter le premier jour). L'année complète du 1er janvier au 1er janvier de l'année suivante compte 365 jours (ou 366 pour une année bissextile)." },
      { q: 'Comment calculer le nombre de jours entre deux dates dans Excel ?', a: 'Dans Excel, soustrayez directement les deux cellules de dates : =B1-A1. Formatez la cellule résultat en nombre (et non en date). Excel stocke les dates sous forme de nombres, donc la soustraction donne le nombre exact de jours.' },
      { q: 'Le calcul inclut-il les deux dates de début et de fin ?', a: "Cela dépend de la convention. La plupart des calculateurs comptent l'écart entre les dates (sans inclure les deux extrémités), donc du 1er au 5 janvier = 4 jours. Si vous devez inclure les deux jours (par exemple pour une location), ajoutez 1 au résultat." },
      { q: 'Combien de jours entre deux dates incluant une année bissextile ?', a: "Si l'intervalle inclut le 29 février d'une année bissextile, ajoutez 1 jour supplémentaire par rapport à un calcul sans année bissextile. Par exemple, du 1er janvier 2024 au 1er janvier 2025 = 366 jours (2024 est une année bissextile)." },
      { q: 'Quelle est la façon la plus rapide de calculer les jours entre deux dates ?', a: "Utilisez un calculateur de dates en ligne (comme celui de ce site). Entrez les deux dates et le calculateur vous donne instantanément le nombre de jours, semaines, mois et années qui les séparent." },
    ],
    pillar: { href: '/fr/calculateur-jours-entre-dates/', label: 'Calculer les jours entre deux dates — outil gratuit' },
    related: [
      { href: '/fr/jours-par-mois/', label: 'Jours dans chaque mois' },
      { href: '/fr/jours-ouvrables-vs-jours-calendaires/', label: 'Jours ouvrables vs jours calendaires' },
      { href: '/fr/semaines-dans-une-annee/', label: 'Semaines dans une année' },
    ],
  },
  es: {
    title: 'Cómo calcular el número de días entre dos fechas',
    metaDesc: 'Guía paso a paso para calcular el número de días entre dos fechas. Incluye fórmula, ejemplos resueltos y cómo manejar los años bisiestos.',
    kicker: 'GUÍA DE CÁLCULO DE FECHAS',
    h1: 'Cómo calcular el número de días entre dos fechas',
    intro: 'Para calcular el número de días entre dos fechas, reste la fecha más antigua de la más reciente. Existen varios métodos para hacerlo con precisión, dependiendo de si calcula a mano, con una hoja de cálculo o con una fórmula.',
    sections: [
      {
        h2: 'Método 1: contar los días del calendario directamente',
        body: `<p>El enfoque más sencillo: comience desde la fecha más antigua y cuente hacia adelante hasta la fecha más reciente, un día a la vez. Es práctico para rangos cortos (unas pocas semanas), pero no para intervalos más largos.</p>
<p><strong>Ejemplo:</strong> ¿Cuántos días hay del 1 al 15 de abril?<br>
1 de abril → 15 de abril = <strong>14 días</strong>.</p>`
      },
      {
        h2: 'Método 2: restar los números del día del año',
        body: `<p>Cada día del año tiene un número del 1 (1 de enero) al 365 (31 de diciembre). Para encontrar los días entre dos fechas del mismo año, reste esos números.</p>
<p><strong>Ejemplo:</strong> ¿Cuántos días del 10 de marzo al 20 de noviembre de 2025?</p>
<ol>
<li>10 de marzo = día 69 del año</li>
<li>20 de noviembre = día 324 del año</li>
<li>324 − 69 = <strong>255 días</strong></li>
</ol>`,
        table: `<table>
<tr><th>Mes</th><th>Día del año (primer día)</th><th>Días del mes</th></tr>
<tr><td>Enero</td><td>1</td><td>31</td></tr>
<tr><td>Febrero</td><td>32</td><td>28 (o 29 en año bisiesto)</td></tr>
<tr><td>Marzo</td><td>60 (61 en año bisiesto)</td><td>31</td></tr>
<tr><td>Abril</td><td>91 (92)</td><td>30</td></tr>
<tr><td>Mayo</td><td>121 (122)</td><td>31</td></tr>
<tr><td>Junio</td><td>152 (153)</td><td>30</td></tr>
<tr><td>Julio</td><td>182 (183)</td><td>31</td></tr>
<tr><td>Agosto</td><td>213 (214)</td><td>31</td></tr>
<tr><td>Septiembre</td><td>244 (245)</td><td>30</td></tr>
<tr><td>Octubre</td><td>274 (275)</td><td>31</td></tr>
<tr><td>Noviembre</td><td>305 (306)</td><td>30</td></tr>
<tr><td>Diciembre</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Método 3: contar a través de varios años',
        body: `<p>Cuando las fechas abarcan varios años, sume los días restantes del primer año, los días completos de los años intermedios y los días transcurridos en el último año.</p>
<p><strong>Ejemplo:</strong> Días del 15 de junio de 2020 al 10 de marzo de 2024:</p>
<ol>
<li>15 de junio al 31 de diciembre de 2020: 199 días restantes en 2020</li>
<li>Año completo 2021: 365 días</li>
<li>Año completo 2022: 365 días</li>
<li>Año completo 2023: 365 días</li>
<li>1 de enero al 10 de marzo de 2024: 70 días (2024 es año bisiesto)</li>
<li>Total: 199 + 365 + 365 + 365 + 70 = <strong>1.364 días</strong></li>
</ol>`
      },
      {
        h2: 'Cómo afectan los años bisiestos al cálculo',
        body: `<p>Un año bisiesto tiene 366 días en lugar de 365. Si su rango de fechas incluye el 29 de febrero de un año bisiesto, añada 1 día extra. Los años bisiestos ocurren cada 4 años: 2020, 2024, 2028, 2032…</p>
<p>Si calcula a mano a lo largo de varios años, compruebe si cada año del rango es bisiesto y use 366 en lugar de 365 para esos años.</p>`
      },
    ],
    faqs: [
      { q: '¿Cuántos días hay entre el 1 de enero y el 31 de diciembre?', a: '364 días separan el 1 de enero del 31 de diciembre (sin contar el primer día). El año completo del 1 de enero al 1 de enero del año siguiente es de 365 días (o 366 en un año bisiesto).' },
      { q: '¿Cómo calculo el número de días entre dos fechas en Excel?', a: 'En Excel, reste directamente las dos celdas de fecha: =B1-A1. Formatee la celda del resultado como número (no como fecha). Excel almacena las fechas como números, por lo que la resta da el número exacto de días.' },
      { q: '¿El cálculo incluye tanto la fecha de inicio como la de fin?', a: 'Depende de la convención. La mayoría de las calculadoras cuentan la brecha entre fechas (sin incluir ninguno de los extremos), por lo que del 1 al 5 de enero = 4 días. Si necesita incluir ambos días (por ejemplo, para un periodo de alquiler), añada 1 al resultado.' },
      { q: '¿Cuántos días hay entre dos fechas que abarcan un año bisiesto?', a: 'Si el rango de fechas incluye el 29 de febrero de un año bisiesto, añada 1 día extra respecto al cálculo sin año bisiesto. Por ejemplo, del 1 de enero de 2024 al 1 de enero de 2025 = 366 días (2024 es año bisiesto).' },
      { q: '¿Cuál es la forma más rápida de calcular los días entre fechas?', a: 'Use una calculadora de fechas en línea (como la de este sitio). Introduzca las dos fechas y la calculadora devuelve al instante el número de días, semanas, meses y años que las separan.' },
    ],
    pillar: { href: '/es/calculadora-dias-entre-fechas/', label: 'Calcular días entre fechas — herramienta gratuita' },
    related: [
      { href: '/es/dias-en-cada-mes/', label: 'Días en cada mes' },
      { href: '/es/dias-habiles-vs-dias-calendario/', label: 'Días hábiles vs días calendario' },
      { href: '/es/semanas-en-un-ano/', label: 'Semanas en un año' },
    ],
  },
};

// ── Article 2: how-to-calculate-exact-age ───────────────────
T['how-to-calculate-exact-age'] = {
  en: {
    title: 'How to Calculate Your Exact Age — Years, Months, Days & More',
    metaDesc: 'How to calculate your exact age in years, months, days, weeks, and hours. Step-by-step with worked examples for any birth year.',
    kicker: 'AGE CALCULATION GUIDE',
    h1: 'How to Calculate Your Exact Age',
    intro: 'Your exact age is the time elapsed from your date of birth to today, expressed in years, months, and days. To calculate it: subtract your birth year from the current year, then adjust for whether your birthday has passed this year.',
    sections: [
      {
        h2: 'Step-by-step: age in years',
        body: `<p>To calculate age in complete years:</p>
<ol>
<li>Subtract your birth year from the current year: 2026 − birth year = approximate age</li>
<li>If your birthday has NOT yet occurred this year, subtract 1</li>
<li>If your birthday HAS occurred this year (or is today), keep the result</li>
</ol>
<p><strong>Example 1:</strong> Born September 15, 1990 — today is April 10, 2026<br>
2026 − 1990 = 36. Birthday (September 15) has not occurred yet in 2026. Age = <strong>35 years</strong>.</p>
<p><strong>Example 2:</strong> Born March 5, 1990 — today is April 10, 2026<br>
2026 − 1990 = 36. Birthday (March 5) has already occurred in 2026. Age = <strong>36 years</strong>.</p>`
      },
      {
        h2: 'Step-by-step: age in years, months, and days',
        body: `<p>For a precise age including months and days:</p>
<ol>
<li>Start with your complete years (see above)</li>
<li>Count complete months since your last birthday</li>
<li>Count remaining days since the last complete month</li>
</ol>
<p><strong>Example:</strong> Born June 20, 1988 — today is April 10, 2026</p>
<ul>
<li>Complete years: 2025 − 1988 = 37 (birthday June 20 has not passed yet in 2026)</li>
<li>Months since June 20, 2025: July, August, September, October, November, December, January, February, March = 9 complete months</li>
<li>Days since March 20: March 20 → April 10 = 21 days</li>
<li>Result: <strong>37 years, 9 months, 21 days</strong></li>
</ul>`
      },
      {
        h2: 'Age in other units',
        body: '',
        table: `<table>
<tr><th>Unit</th><th>Formula</th><th>Example (born Jan 1, 1990 → today Apr 10, 2026)</th></tr>
<tr><td>Years</td><td>Current year − birth year (adjusted)</td><td>36 years</td></tr>
<tr><td>Months</td><td>Years × 12 + extra months</td><td>~435 months</td></tr>
<tr><td>Weeks</td><td>Total days ÷ 7</td><td>~1,895 weeks</td></tr>
<tr><td>Days</td><td>Count all days from birth to today</td><td>~13,249 days</td></tr>
<tr><td>Hours</td><td>Days × 24</td><td>~317,976 hours</td></tr>
</table>`
      },
      {
        h2: 'How to calculate age for someone born in a specific year',
        body: '',
        table: `<table>
<tr><th>Birth Year</th><th>Age in 2026 (before birthday)</th><th>Age in 2026 (after birthday)</th></tr>
<tr><td>1950</td><td>75</td><td>76</td></tr>
<tr><td>1960</td><td>65</td><td>66</td></tr>
<tr><td>1970</td><td>55</td><td>56</td></tr>
<tr><td>1980</td><td>45</td><td>46</td></tr>
<tr><td>1990</td><td>35</td><td>36</td></tr>
<tr><td>2000</td><td>25</td><td>26</td></tr>
<tr><td>2010</td><td>15</td><td>16</td></tr>
<tr><td>2020</td><td>5</td><td>6</td></tr>
</table>`
      },
      {
        h2: 'Age calculation edge cases',
        body: `<p><strong>Leap day birthdays (February 29):</strong> People born on February 29 are often considered to officially turn a year older on February 28 in non-leap years, or March 1 — depending on local laws and conventions.</p>
<p><strong>Age in different countries:</strong> Most countries count age from birth (Western convention). South Korea traditionally counted age differently — a baby was born "1 year old" and everyone gained a year on January 1 — but South Korea officially moved to the international convention in 2023.</p>`
      },
    ],
    faqs: [
      { q: 'How old am I if I was born in 1990?', a: 'If you were born in 1990, you are 35 or 36 years old in 2026, depending on whether your birthday has passed. Before your birthday: 35. On or after your birthday: 36.' },
      { q: 'How old am I if I was born in 2000?', a: 'If you were born in 2000, you are 25 or 26 years old in 2026, depending on whether your birthday has passed this year.' },
      { q: 'How old am I if I was born in 1980?', a: 'If you were born in 1980, you are 45 or 46 years old in 2026, depending on whether your birthday has passed this year.' },
      { q: 'How do I calculate my age in days?', a: 'To calculate your age in days, multiply your age in years by 365.25 (to account for leap years). For an exact count, use a date calculator that counts every individual day from your birth date to today.' },
      { q: 'What is chronological age?', a: 'Chronological age is the actual amount of time that has passed since birth, measured in years (and sometimes months and days). It differs from "biological age," which refers to how old your body appears physiologically.' },
      { q: 'How do I calculate the age of someone who has died?', a: 'Subtract the birth year from the year of death, then adjust if the birthday had not yet occurred in the year of death. For example, born March 10, 1920 — died January 5, 1995: 1995 − 1920 = 75, minus 1 because January 5 is before March 10 = age 74 at death.' },
    ],
    pillar: { href: '/age-calculator/', label: 'Age Calculator — calculate instantly' },
    related: [
      { href: '/what-generation-am-i/', label: 'What generation am I?' },
      { href: '/how-to-calculate-age-in-months/', label: 'Age in months' },
      { href: '/born-in-1990/', label: 'Born in 1990' },
    ],
  },
  fr: {
    title: 'Comment calculer son âge exact — années, mois, jours et plus',
    metaDesc: "Comment calculer votre âge exact en années, mois, jours, semaines et heures. Étapes détaillées avec exemples pour n'importe quelle année de naissance.",
    kicker: "GUIDE DE CALCUL D'ÂGE",
    h1: 'Comment calculer son âge exact',
    intro: "Votre âge exact est le temps écoulé depuis votre date de naissance jusqu'à aujourd'hui, exprimé en années, mois et jours. Pour le calculer : soustrayez votre année de naissance de l'année en cours, puis ajustez selon si votre anniversaire a déjà eu lieu cette année.",
    sections: [
      {
        h2: "Étape par étape : l'âge en années",
        body: `<p>Pour calculer l'âge en années complètes :</p>
<ol>
<li>Soustrayez votre année de naissance de l'année en cours : 2026 − année de naissance = âge approximatif</li>
<li>Si votre anniversaire n'a PAS encore eu lieu cette année, soustrayez 1</li>
<li>Si votre anniversaire a déjà eu lieu cette année (ou c'est aujourd'hui), gardez le résultat</li>
</ol>
<p><strong>Exemple 1 :</strong> Né(e) le 15 septembre 1990 — aujourd'hui le 10 avril 2026<br>
2026 − 1990 = 36. L'anniversaire (15 septembre) n'a pas encore eu lieu en 2026. Âge = <strong>35 ans</strong>.</p>
<p><strong>Exemple 2 :</strong> Né(e) le 5 mars 1990 — aujourd'hui le 10 avril 2026<br>
2026 − 1990 = 36. L'anniversaire (5 mars) a déjà eu lieu en 2026. Âge = <strong>36 ans</strong>.</p>`
      },
      {
        h2: "Étape par étape : l'âge en années, mois et jours",
        body: `<p>Pour un âge précis incluant les mois et les jours :</p>
<ol>
<li>Commencez par les années complètes (voir ci-dessus)</li>
<li>Comptez les mois complets depuis votre dernier anniversaire</li>
<li>Comptez les jours restants depuis le dernier mois complet</li>
</ol>
<p><strong>Exemple :</strong> Né(e) le 20 juin 1988 — aujourd'hui le 10 avril 2026</p>
<ul>
<li>Années complètes : 2025 − 1988 = 37 (l'anniversaire du 20 juin n'a pas encore eu lieu en 2026)</li>
<li>Mois depuis le 20 juin 2025 : juillet, août, septembre, octobre, novembre, décembre, janvier, février, mars = 9 mois complets</li>
<li>Jours depuis le 20 mars : 20 mars → 10 avril = 21 jours</li>
<li>Résultat : <strong>37 ans, 9 mois, 21 jours</strong></li>
</ul>`
      },
      {
        h2: "L'âge dans d'autres unités",
        body: '',
        table: `<table>
<tr><th>Unité</th><th>Formule</th><th>Exemple (né le 1er jan. 1990 → aujourd'hui 10 avr. 2026)</th></tr>
<tr><td>Années</td><td>Année en cours − année de naissance (ajustée)</td><td>36 ans</td></tr>
<tr><td>Mois</td><td>Années × 12 + mois supplémentaires</td><td>~435 mois</td></tr>
<tr><td>Semaines</td><td>Total de jours ÷ 7</td><td>~1 895 semaines</td></tr>
<tr><td>Jours</td><td>Compter tous les jours de la naissance à aujourd'hui</td><td>~13 249 jours</td></tr>
<tr><td>Heures</td><td>Jours × 24</td><td>~317 976 heures</td></tr>
</table>`
      },
      {
        h2: "Calculer l'âge pour quelqu'un né une année précise",
        body: '',
        table: `<table>
<tr><th>Année de naissance</th><th>Âge en 2026 (avant l'anniversaire)</th><th>Âge en 2026 (après l'anniversaire)</th></tr>
<tr><td>1950</td><td>75</td><td>76</td></tr>
<tr><td>1960</td><td>65</td><td>66</td></tr>
<tr><td>1970</td><td>55</td><td>56</td></tr>
<tr><td>1980</td><td>45</td><td>46</td></tr>
<tr><td>1990</td><td>35</td><td>36</td></tr>
<tr><td>2000</td><td>25</td><td>26</td></tr>
<tr><td>2010</td><td>15</td><td>16</td></tr>
<tr><td>2020</td><td>5</td><td>6</td></tr>
</table>`
      },
      {
        h2: "Cas particuliers du calcul d'âge",
        body: `<p><strong>Anniversaires le 29 février :</strong> Les personnes nées le 29 février fêtent généralement leur anniversaire le 28 février lors des années non bissextiles, ou le 1er mars — selon les lois et conventions locales.</p>
<p><strong>L'âge selon les pays :</strong> La plupart des pays comptent l'âge à partir de la naissance (convention occidentale). La Corée du Sud calculait traditionnellement l'âge différemment — un bébé naissait « à 1 an » et tout le monde gagnait un an le 1er janvier — mais la Corée du Sud a officiellement adopté la convention internationale en 2023.</p>`
      },
    ],
    faqs: [
      { q: "Quel âge ai-je si je suis né(e) en 1990 ?", a: "Si vous êtes né(e) en 1990, vous avez 35 ou 36 ans en 2026, selon que votre anniversaire a déjà eu lieu. Avant votre anniversaire : 35 ans. Le jour de votre anniversaire ou après : 36 ans." },
      { q: "Quel âge ai-je si je suis né(e) en 2000 ?", a: "Si vous êtes né(e) en 2000, vous avez 25 ou 26 ans en 2026, selon que votre anniversaire a déjà eu lieu cette année." },
      { q: "Quel âge ai-je si je suis né(e) en 1980 ?", a: "Si vous êtes né(e) en 1980, vous avez 45 ou 46 ans en 2026, selon que votre anniversaire a déjà eu lieu cette année." },
      { q: "Comment calculer mon âge en jours ?", a: "Pour calculer votre âge en jours, multipliez votre âge en années par 365,25 (pour tenir compte des années bissextiles). Pour un décompte exact, utilisez un calculateur de dates qui compte chaque jour individuel de votre naissance à aujourd'hui." },
      { q: "Qu'est-ce que l'âge chronologique ?", a: "L'âge chronologique est la quantité réelle de temps écoulé depuis la naissance, mesurée en années (et parfois en mois et jours). Il diffère de l'«âge biologique», qui désigne l'apparence physiologique de votre corps." },
      { q: "Comment calculer l'âge d'une personne décédée ?", a: "Soustrayez l'année de naissance de l'année du décès, puis ajustez si l'anniversaire n'avait pas encore eu lieu dans l'année du décès. Par exemple, né(e) le 10 mars 1920 — décédé(e) le 5 janvier 1995 : 1995 − 1920 = 75, moins 1 car le 5 janvier est avant le 10 mars = âge de 74 ans au décès." },
    ],
    pillar: { href: '/fr/calculateur-age/', label: "Calculateur d'âge — calculez instantanément" },
    related: [
      { href: '/fr/quelle-generation-suis-je/', label: 'Quelle est ma génération ?' },
      { href: '/fr/age-en-mois/', label: 'Âge en mois' },
      { href: '/fr/ne-en-1990/', label: 'Né en 1990' },
    ],
  },
  es: {
    title: 'Cómo calcular tu edad exacta — años, meses, días y más',
    metaDesc: 'Cómo calcular tu edad exacta en años, meses, días, semanas y horas. Paso a paso con ejemplos resueltos para cualquier año de nacimiento.',
    kicker: 'GUÍA DE CÁLCULO DE EDAD',
    h1: 'Cómo calcular tu edad exacta',
    intro: 'Tu edad exacta es el tiempo transcurrido desde tu fecha de nacimiento hasta hoy, expresado en años, meses y días. Para calcularla: reste tu año de nacimiento del año actual y ajusta según si tu cumpleaños ya pasó este año.',
    sections: [
      {
        h2: 'Paso a paso: la edad en años',
        body: `<p>Para calcular la edad en años completos:</p>
<ol>
<li>Reste tu año de nacimiento del año actual: 2026 − año de nacimiento = edad aproximada</li>
<li>Si tu cumpleaños NO ha ocurrido todavía este año, reste 1</li>
<li>Si tu cumpleaños YA ocurrió este año (o es hoy), conserva el resultado</li>
</ol>
<p><strong>Ejemplo 1:</strong> Nacido/a el 15 de septiembre de 1990 — hoy es el 10 de abril de 2026<br>
2026 − 1990 = 36. El cumpleaños (15 de septiembre) aún no ha ocurrido en 2026. Edad = <strong>35 años</strong>.</p>
<p><strong>Ejemplo 2:</strong> Nacido/a el 5 de marzo de 1990 — hoy es el 10 de abril de 2026<br>
2026 − 1990 = 36. El cumpleaños (5 de marzo) ya ocurrió en 2026. Edad = <strong>36 años</strong>.</p>`
      },
      {
        h2: 'Paso a paso: la edad en años, meses y días',
        body: `<p>Para una edad precisa que incluya meses y días:</p>
<ol>
<li>Comience con los años completos (ver arriba)</li>
<li>Cuente los meses completos desde tu último cumpleaños</li>
<li>Cuente los días restantes desde el último mes completo</li>
</ol>
<p><strong>Ejemplo:</strong> Nacido/a el 20 de junio de 1988 — hoy es el 10 de abril de 2026</p>
<ul>
<li>Años completos: 2025 − 1988 = 37 (el cumpleaños del 20 de junio aún no ha pasado en 2026)</li>
<li>Meses desde el 20 de junio de 2025: julio, agosto, septiembre, octubre, noviembre, diciembre, enero, febrero, marzo = 9 meses completos</li>
<li>Días desde el 20 de marzo: 20 de marzo → 10 de abril = 21 días</li>
<li>Resultado: <strong>37 años, 9 meses, 21 días</strong></li>
</ul>`
      },
      {
        h2: 'La edad en otras unidades',
        body: '',
        table: `<table>
<tr><th>Unidad</th><th>Fórmula</th><th>Ejemplo (nacido el 1 ene. 1990 → hoy 10 abr. 2026)</th></tr>
<tr><td>Años</td><td>Año actual − año de nacimiento (ajustado)</td><td>36 años</td></tr>
<tr><td>Meses</td><td>Años × 12 + meses extra</td><td>~435 meses</td></tr>
<tr><td>Semanas</td><td>Total de días ÷ 7</td><td>~1.895 semanas</td></tr>
<tr><td>Días</td><td>Contar todos los días desde el nacimiento hasta hoy</td><td>~13.249 días</td></tr>
<tr><td>Horas</td><td>Días × 24</td><td>~317.976 horas</td></tr>
</table>`
      },
      {
        h2: 'Calcular la edad de alguien nacido en un año específico',
        body: '',
        table: `<table>
<tr><th>Año de nacimiento</th><th>Edad en 2026 (antes del cumpleaños)</th><th>Edad en 2026 (después del cumpleaños)</th></tr>
<tr><td>1950</td><td>75</td><td>76</td></tr>
<tr><td>1960</td><td>65</td><td>66</td></tr>
<tr><td>1970</td><td>55</td><td>56</td></tr>
<tr><td>1980</td><td>45</td><td>46</td></tr>
<tr><td>1990</td><td>35</td><td>36</td></tr>
<tr><td>2000</td><td>25</td><td>26</td></tr>
<tr><td>2010</td><td>15</td><td>16</td></tr>
<tr><td>2020</td><td>5</td><td>6</td></tr>
</table>`
      },
      {
        h2: 'Casos especiales del cálculo de edad',
        body: `<p><strong>Cumpleaños el 29 de febrero:</strong> Las personas nacidas el 29 de febrero suelen considerarse que cumplen años oficialmente el 28 de febrero en años no bisiestos, o el 1 de marzo — según las leyes y convenciones locales.</p>
<p><strong>La edad en diferentes países:</strong> La mayoría de los países cuentan la edad desde el nacimiento (convención occidental). Corea del Sur calculaba la edad de forma diferente — un bebé nacía con "1 año" y todos ganaban un año el 1 de enero — pero Corea del Sur adoptó oficialmente la convención internacional en 2023.</p>`
      },
    ],
    faqs: [
      { q: '¿Qué edad tengo si nací en 1990?', a: 'Si naciste en 1990, tienes 35 o 36 años en 2026, según si tu cumpleaños ya pasó. Antes de tu cumpleaños: 35. El día de tu cumpleaños o después: 36.' },
      { q: '¿Qué edad tengo si nací en 2000?', a: 'Si naciste en 2000, tienes 25 o 26 años en 2026, según si tu cumpleaños ya pasó este año.' },
      { q: '¿Qué edad tengo si nací en 1980?', a: 'Si naciste en 1980, tienes 45 o 46 años en 2026, según si tu cumpleaños ya pasó este año.' },
      { q: '¿Cómo calculo mi edad en días?', a: 'Para calcular tu edad en días, multiplica tu edad en años por 365,25 (para tener en cuenta los años bisiestos). Para un recuento exacto, usa una calculadora de fechas que cuente cada día individual desde tu fecha de nacimiento hasta hoy.' },
      { q: '¿Qué es la edad cronológica?', a: 'La edad cronológica es la cantidad real de tiempo transcurrido desde el nacimiento, medida en años (y a veces en meses y días). Difiere de la "edad biológica", que se refiere al aspecto fisiológico de tu cuerpo.' },
      { q: '¿Cómo calculo la edad de alguien que ha fallecido?', a: 'Reste el año de nacimiento del año del fallecimiento y ajusta si el cumpleaños aún no había ocurrido en el año del fallecimiento. Por ejemplo, nacido/a el 10 de marzo de 1920 — fallecido/a el 5 de enero de 1995: 1995 − 1920 = 75, menos 1 porque el 5 de enero es antes del 10 de marzo = edad de 74 años al fallecer.' },
    ],
    pillar: { href: '/es/calculadora-edad/', label: 'Calculadora de edad — calcule al instante' },
    related: [
      { href: '/es/que-generacion-soy/', label: '¿A qué generación pertenezco?' },
      { href: '/es/edad-en-meses/', label: 'Edad en meses' },
      { href: '/es/nacido-en-1990/', label: 'Nacido en 1990' },
    ],
  },
};

// ── Article 3: date-time-faq ────────────────────────────────
T['date-time-faq'] = {
  en: {
    title: 'Date & Time FAQ — 15 Common Questions Answered',
    metaDesc: 'Answers to the most common date and time calculation questions: leap years, days in a month, week numbers, age calculations, time zones, and more.',
    kicker: 'DATE & TIME FAQ',
    h1: 'Date & Time FAQ — Common Questions Answered',
    intro: 'Here are direct answers to the most frequently asked questions about dates, times, ages, and calendar calculations.',
    sections: [
      {
        h2: 'Calendar Questions',
        body: `<dl>
<dt><strong>How many days are in a year?</strong></dt>
<dd>A regular year has <strong>365 days</strong>. A leap year has <strong>366 days</strong>. The average year is 365.25 days, which is why we add a leap day every 4 years.</dd>

<dt><strong>How many weeks are in a year?</strong></dt>
<dd>A regular year has <strong>52 weeks and 1 day</strong>. A leap year has <strong>52 weeks and 2 days</strong>. Some years have 53 ISO calendar weeks when January 1 falls on a Thursday.</dd>

<dt><strong>How many days are in each month?</strong></dt>
<dd>January: 31 · February: 28 (29 in a leap year) · March: 31 · April: 30 · May: 31 · June: 30 · July: 31 · August: 31 · September: 30 · October: 31 · November: 30 · December: 31</dd>

<dt><strong>What is a leap year?</strong></dt>
<dd>A leap year is a year divisible by 4 — except for century years, which must be divisible by 400. So 2000 was a leap year, but 1900 was not. The next leap year after 2024 is <strong>2028</strong>.</dd>

<dt><strong>What is the ISO week number?</strong></dt>
<dd>The ISO week number is a standard (ISO 8601) that numbers the weeks of the year from 1 to 52 or 53. Week 1 is defined as the week containing the first Thursday of the year. Monday is the first day of the ISO week.</dd>
</dl>`
      },
      {
        h2: 'Age Calculation Questions',
        body: `<dl>
<dt><strong>How do I calculate my age?</strong></dt>
<dd>Subtract your birth year from the current year. If your birthday has not yet occurred this year, subtract 1. Example: born in 1990, current year 2026, birthday not yet passed → age = 35.</dd>

<dt><strong>How old is someone born in 1990?</strong></dt>
<dd>Someone born in 1990 is <strong>35 or 36 years old in 2026</strong>, depending on whether their birthday has passed.</dd>

<dt><strong>How old is someone born in 2000?</strong></dt>
<dd>Someone born in 2000 is <strong>25 or 26 years old in 2026</strong>, depending on whether their birthday has passed.</dd>

<dt><strong>What is the difference between age calculator and chronological age calculator?</strong></dt>
<dd>An age calculator computes how old you are from your date of birth to today. A chronological age calculator does the same, but is specifically used in medical or educational contexts to measure the precise time elapsed (often in years, months, and days) for developmental assessments.</dd>
</dl>`
      },
      {
        h2: 'Days & Business Days Questions',
        body: `<dl>
<dt><strong>What is the difference between calendar days and business days?</strong></dt>
<dd>Calendar days count all 7 days of the week. Business days (also called working days) count only Monday through Friday, excluding public holidays. A 5-business-day deadline from Monday is Friday; a 5-calendar-day deadline from Monday is Saturday.</dd>

<dt><strong>How many business days are in a month?</strong></dt>
<dd>Most months have <strong>20–23 business days</strong>, depending on the month and how many weekends it contains. February has the fewest (18–20), months with 31 days starting on Monday or Tuesday have the most (23).</dd>

<dt><strong>How many days until Christmas?</strong></dt>
<dd>Christmas is December 25. The number of days depends on today's date — use the countdown calculator on this site for an exact count.</dd>
</dl>`
      },
      {
        h2: 'Time Zone Questions',
        body: `<dl>
<dt><strong>What is UTC?</strong></dt>
<dd>UTC (Coordinated Universal Time) is the world's primary time standard. It does not observe daylight saving time. All other time zones are expressed as offsets from UTC (e.g., UTC+1, UTC−5).</dd>

<dt><strong>What is the difference between GMT and UTC?</strong></dt>
<dd>For everyday purposes, GMT and UTC are the same. GMT (Greenwich Mean Time) is a time zone; UTC is a time standard. They share the same current time, but UTC is the precise scientific standard used for official timekeeping.</dd>

<dt><strong>How many time zones are there?</strong></dt>
<dd>There are <strong>38 standard UTC offsets</strong>, ranging from UTC−12:00 to UTC+14:00. Some countries span multiple time zones — Russia has 11, the USA has 6 (excluding territories), and France has 12 (including overseas territories).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: 'How many days are in a year?', a: 'A regular year has 365 days. A leap year has 366 days. The calendar averages 365.25 days per year, which is corrected by adding a leap day (February 29) every 4 years.' },
      { q: 'How many weeks are in a year?', a: 'A regular year has 52 weeks and 1 extra day. A leap year has 52 weeks and 2 extra days. In ISO week numbering, some years have 53 complete weeks.' },
      { q: 'What is the current week number?', a: "The current ISO week number changes every Monday. Use the week number calculator on this site to see today's week number for any year." },
      { q: 'How do I convert days to months?', a: 'Divide the number of days by 30.44 (the average days per month) for an approximate result. For an exact conversion, use a date calculator that accounts for the actual length of each month.' },
    ],
    pillar: { href: '/date-calculator/', label: 'Date Calculator' },
    related: [
      { href: '/how-to-calculate-days-between-dates/', label: 'How to calculate days between dates' },
      { href: '/how-to-calculate-exact-age/', label: 'How to calculate your exact age' },
      { href: '/world-calendar-systems/', label: 'World calendar systems' },
    ],
  },
  fr: {
    title: 'FAQ date et heure — 15 questions fréquentes et leurs réponses',
    metaDesc: "Réponses aux questions les plus fréquentes sur les calculs de dates et d'heures : années bissextiles, jours d'un mois, numéros de semaine, calculs d'âge, fuseaux horaires, et plus.",
    kicker: 'FAQ DATE & HEURE',
    h1: 'FAQ date et heure — Questions fréquentes et leurs réponses',
    intro: 'Voici des réponses directes aux questions les plus fréquemment posées sur les dates, les heures, les âges et les calculs de calendrier.',
    sections: [
      {
        h2: 'Questions sur le calendrier',
        body: `<dl>
<dt><strong>Combien de jours y a-t-il dans une année ?</strong></dt>
<dd>Une année ordinaire compte <strong>365 jours</strong>. Une année bissextile en compte <strong>366</strong>. La moyenne est de 365,25 jours par an, c'est pourquoi on ajoute un jour bissextile tous les 4 ans.</dd>

<dt><strong>Combien de semaines y a-t-il dans une année ?</strong></dt>
<dd>Une année ordinaire compte <strong>52 semaines et 1 jour</strong>. Une année bissextile en compte <strong>52 semaines et 2 jours</strong>. Certaines années comportent 53 semaines ISO lorsque le 1er janvier tombe un jeudi.</dd>

<dt><strong>Combien de jours y a-t-il dans chaque mois ?</strong></dt>
<dd>Janvier : 31 · Février : 28 (29 en année bissextile) · Mars : 31 · Avril : 30 · Mai : 31 · Juin : 30 · Juillet : 31 · Août : 31 · Septembre : 30 · Octobre : 31 · Novembre : 30 · Décembre : 31</dd>

<dt><strong>Qu'est-ce qu'une année bissextile ?</strong></dt>
<dd>Une année bissextile est une année divisible par 4 — sauf les années séculaires, qui doivent être divisibles par 400. Ainsi, 2000 était une année bissextile, mais 1900 ne l'était pas. La prochaine année bissextile après 2024 est <strong>2028</strong>.</dd>

<dt><strong>Qu'est-ce que le numéro de semaine ISO ?</strong></dt>
<dd>Le numéro de semaine ISO est une norme (ISO 8601) qui numérote les semaines de l'année de 1 à 52 ou 53. La semaine 1 est définie comme celle contenant le premier jeudi de l'année. Le lundi est le premier jour de la semaine ISO.</dd>
</dl>`
      },
      {
        h2: "Questions sur le calcul d'âge",
        body: `<dl>
<dt><strong>Comment calculer mon âge ?</strong></dt>
<dd>Soustrayez votre année de naissance de l'année en cours. Si votre anniversaire n'a pas encore eu lieu cette année, soustrayez 1. Exemple : né en 1990, année en cours 2026, anniversaire pas encore passé → âge = 35 ans.</dd>

<dt><strong>Quel âge a quelqu'un né en 1990 ?</strong></dt>
<dd>Quelqu'un né en 1990 a <strong>35 ou 36 ans en 2026</strong>, selon que son anniversaire a déjà eu lieu.</dd>

<dt><strong>Quel âge a quelqu'un né en 2000 ?</strong></dt>
<dd>Quelqu'un né en 2000 a <strong>25 ou 26 ans en 2026</strong>, selon que son anniversaire a déjà eu lieu.</dd>

<dt><strong>Quelle est la différence entre calculateur d'âge et calculateur d'âge chronologique ?</strong></dt>
<dd>Un calculateur d'âge détermine votre âge depuis votre date de naissance jusqu'à aujourd'hui. Un calculateur d'âge chronologique fait la même chose, mais est utilisé spécifiquement dans des contextes médicaux ou éducatifs pour mesurer le temps écoulé avec précision (souvent en années, mois et jours) lors d'évaluations du développement.</dd>
</dl>`
      },
      {
        h2: 'Questions sur les jours et les jours ouvrables',
        body: `<dl>
<dt><strong>Quelle est la différence entre jours calendaires et jours ouvrables ?</strong></dt>
<dd>Les jours calendaires comptent les 7 jours de la semaine. Les jours ouvrables (aussi appelés jours de travail) ne comptent que du lundi au vendredi, hors jours fériés. Une échéance de 5 jours ouvrables à partir du lundi tombe le vendredi ; une échéance de 5 jours calendaires à partir du lundi tombe le samedi.</dd>

<dt><strong>Combien de jours ouvrables y a-t-il dans un mois ?</strong></dt>
<dd>La plupart des mois comptent <strong>20 à 23 jours ouvrables</strong>, selon le mois et le nombre de week-ends qu'il contient. Février en a le moins (18 à 20), les mois de 31 jours commençant un lundi ou un mardi en ont le plus (23).</dd>

<dt><strong>Combien de jours reste-t-il avant Noël ?</strong></dt>
<dd>Noël est le 25 décembre. Le nombre de jours dépend de la date d'aujourd'hui — utilisez le calculateur de compte à rebours sur ce site pour un décompte exact.</dd>
</dl>`
      },
      {
        h2: 'Questions sur les fuseaux horaires',
        body: `<dl>
<dt><strong>Qu'est-ce que l'UTC ?</strong></dt>
<dd>L'UTC (Temps universel coordonné) est la principale norme de temps mondiale. Il ne respecte pas l'heure d'été. Tous les autres fuseaux horaires sont exprimés en décalages par rapport à l'UTC (par exemple, UTC+1, UTC−5).</dd>

<dt><strong>Quelle est la différence entre GMT et UTC ?</strong></dt>
<dd>Pour un usage courant, GMT et UTC sont identiques. Le GMT (Greenwich Mean Time) est un fuseau horaire ; l'UTC est une norme de temps. Ils partagent la même heure actuelle, mais l'UTC est la norme scientifique précise utilisée pour la mesure officielle du temps.</dd>

<dt><strong>Combien y a-t-il de fuseaux horaires ?</strong></dt>
<dd>Il existe <strong>38 décalages UTC standard</strong>, allant de UTC−12:00 à UTC+14:00. Certains pays s'étendent sur plusieurs fuseaux horaires — la Russie en a 11, les États-Unis en ont 6 (hors territoires), et la France en a 12 (y compris les territoires d'outre-mer).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: 'Combien de jours y a-t-il dans une année ?', a: 'Une année ordinaire compte 365 jours. Une année bissextile en compte 366. Le calendrier fait en moyenne 365,25 jours par an, ce qui est corrigé en ajoutant un jour bissextile (29 février) tous les 4 ans.' },
      { q: 'Combien de semaines y a-t-il dans une année ?', a: 'Une année ordinaire compte 52 semaines et 1 jour supplémentaire. Une année bissextile en compte 52 semaines et 2 jours supplémentaires. Dans la numérotation ISO des semaines, certaines années ont 53 semaines complètes.' },
      { q: 'Quel est le numéro de semaine actuel ?', a: "Le numéro de semaine ISO actuel change chaque lundi. Utilisez le calculateur de numéro de semaine sur ce site pour voir le numéro de semaine du jour pour n'importe quelle année." },
      { q: 'Comment convertir des jours en mois ?', a: 'Divisez le nombre de jours par 30,44 (la moyenne de jours par mois) pour un résultat approximatif. Pour une conversion exacte, utilisez un calculateur de dates qui tient compte de la durée réelle de chaque mois.' },
    ],
    pillar: { href: '/fr/calculateur-de-dates/', label: 'Calculateur de dates' },
    related: [
      { href: '/fr/comment-calculer-jours-entre-deux-dates/', label: 'Comment calculer les jours entre deux dates' },
      { href: '/fr/comment-calculer-son-age-exact/', label: 'Comment calculer son âge exact' },
      { href: '/fr/systemes-calendaires-mondiaux/', label: 'Systèmes calendaires du monde' },
    ],
  },
  es: {
    title: 'Preguntas frecuentes sobre fecha y hora — 15 preguntas respondidas',
    metaDesc: 'Respuestas a las preguntas más frecuentes sobre cálculos de fechas y horas: años bisiestos, días del mes, números de semana, cálculos de edad, zonas horarias y más.',
    kicker: 'PREGUNTAS FRECUENTES FECHA Y HORA',
    h1: 'Preguntas frecuentes sobre fecha y hora — Respuestas a preguntas comunes',
    intro: 'Aquí encontrará respuestas directas a las preguntas más frecuentes sobre fechas, horas, edades y cálculos del calendario.',
    sections: [
      {
        h2: 'Preguntas sobre el calendario',
        body: `<dl>
<dt><strong>¿Cuántos días hay en un año?</strong></dt>
<dd>Un año ordinario tiene <strong>365 días</strong>. Un año bisiesto tiene <strong>366 días</strong>. La media es de 365,25 días por año, por eso añadimos un día bisiesto cada 4 años.</dd>

<dt><strong>¿Cuántas semanas hay en un año?</strong></dt>
<dd>Un año ordinario tiene <strong>52 semanas y 1 día</strong>. Un año bisiesto tiene <strong>52 semanas y 2 días</strong>. Algunos años tienen 53 semanas ISO cuando el 1 de enero cae en jueves.</dd>

<dt><strong>¿Cuántos días hay en cada mes?</strong></dt>
<dd>Enero: 31 · Febrero: 28 (29 en año bisiesto) · Marzo: 31 · Abril: 30 · Mayo: 31 · Junio: 30 · Julio: 31 · Agosto: 31 · Septiembre: 30 · Octubre: 31 · Noviembre: 30 · Diciembre: 31</dd>

<dt><strong>¿Qué es un año bisiesto?</strong></dt>
<dd>Un año bisiesto es un año divisible por 4 — excepto los años seculares, que deben ser divisibles por 400. Así, 2000 fue un año bisiesto, pero 1900 no lo fue. El próximo año bisiesto después de 2024 es <strong>2028</strong>.</dd>

<dt><strong>¿Qué es el número de semana ISO?</strong></dt>
<dd>El número de semana ISO es una norma (ISO 8601) que numera las semanas del año del 1 al 52 o 53. La semana 1 se define como aquella que contiene el primer jueves del año. El lunes es el primer día de la semana ISO.</dd>
</dl>`
      },
      {
        h2: 'Preguntas sobre el cálculo de edad',
        body: `<dl>
<dt><strong>¿Cómo calculo mi edad?</strong></dt>
<dd>Reste tu año de nacimiento del año actual. Si tu cumpleaños aún no ha ocurrido este año, resta 1. Ejemplo: nacido en 1990, año actual 2026, cumpleaños aún no pasado → edad = 35.</dd>

<dt><strong>¿Qué edad tiene alguien nacido en 1990?</strong></dt>
<dd>Alguien nacido en 1990 tiene <strong>35 o 36 años en 2026</strong>, según si su cumpleaños ya ha pasado.</dd>

<dt><strong>¿Qué edad tiene alguien nacido en 2000?</strong></dt>
<dd>Alguien nacido en 2000 tiene <strong>25 o 26 años en 2026</strong>, según si su cumpleaños ya ha pasado.</dd>

<dt><strong>¿Cuál es la diferencia entre calculadora de edad y calculadora de edad cronológica?</strong></dt>
<dd>Una calculadora de edad calcula cuántos años tienes desde tu fecha de nacimiento hasta hoy. Una calculadora de edad cronológica hace lo mismo, pero se usa específicamente en contextos médicos o educativos para medir el tiempo transcurrido con precisión (a menudo en años, meses y días) en evaluaciones del desarrollo.</dd>
</dl>`
      },
      {
        h2: 'Preguntas sobre días y días hábiles',
        body: `<dl>
<dt><strong>¿Cuál es la diferencia entre días calendario y días hábiles?</strong></dt>
<dd>Los días calendario cuentan los 7 días de la semana. Los días hábiles (también llamados días laborables) cuentan solo de lunes a viernes, excluyendo los días festivos. Un plazo de 5 días hábiles desde el lunes vence el viernes; un plazo de 5 días calendario desde el lunes vence el sábado.</dd>

<dt><strong>¿Cuántos días hábiles hay en un mes?</strong></dt>
<dd>La mayoría de los meses tienen <strong>20 a 23 días hábiles</strong>, según el mes y cuántos fines de semana contiene. Febrero tiene los menos (18 a 20); los meses de 31 días que empiezan en lunes o martes tienen los más (23).</dd>

<dt><strong>¿Cuántos días faltan para Navidad?</strong></dt>
<dd>La Navidad es el 25 de diciembre. El número de días depende de la fecha de hoy — use la calculadora de cuenta regresiva de este sitio para un recuento exacto.</dd>
</dl>`
      },
      {
        h2: 'Preguntas sobre zonas horarias',
        body: `<dl>
<dt><strong>¿Qué es UTC?</strong></dt>
<dd>UTC (Tiempo Universal Coordinado) es la principal norma de tiempo del mundo. No observa el horario de verano. Todas las demás zonas horarias se expresan como desplazamientos respecto al UTC (por ejemplo, UTC+1, UTC−5).</dd>

<dt><strong>¿Cuál es la diferencia entre GMT y UTC?</strong></dt>
<dd>Para uso cotidiano, GMT y UTC son lo mismo. GMT (Greenwich Mean Time) es una zona horaria; UTC es una norma de tiempo. Comparten la misma hora actual, pero UTC es la norma científica precisa utilizada para la medición oficial del tiempo.</dd>

<dt><strong>¿Cuántas zonas horarias hay?</strong></dt>
<dd>Hay <strong>38 desplazamientos UTC estándar</strong>, que van desde UTC−12:00 hasta UTC+14:00. Algunos países abarcan varias zonas horarias — Rusia tiene 11, los EE. UU. tienen 6 (sin incluir los territorios) y Francia tiene 12 (incluidos los territorios de ultramar).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: '¿Cuántos días hay en un año?', a: 'Un año ordinario tiene 365 días. Un año bisiesto tiene 366 días. El calendario promedia 365,25 días por año, lo cual se corrige añadiendo un día bisiesto (29 de febrero) cada 4 años.' },
      { q: '¿Cuántas semanas hay en un año?', a: 'Un año ordinario tiene 52 semanas y 1 día extra. Un año bisiesto tiene 52 semanas y 2 días extra. En la numeración ISO de semanas, algunos años tienen 53 semanas completas.' },
      { q: '¿Cuál es el número de semana actual?', a: 'El número de semana ISO actual cambia cada lunes. Use la calculadora de número de semana de este sitio para ver el número de semana de hoy para cualquier año.' },
      { q: '¿Cómo convierto días a meses?', a: 'Divida el número de días entre 30,44 (la media de días por mes) para obtener un resultado aproximado. Para una conversión exacta, use una calculadora de fechas que tenga en cuenta la duración real de cada mes.' },
    ],
    pillar: { href: '/es/calculadora-de-fechas/', label: 'Calculadora de fechas' },
    related: [
      { href: '/es/como-calcular-dias-entre-dos-fechas/', label: 'Cómo calcular los días entre dos fechas' },
      { href: '/es/como-calcular-edad-exacta/', label: 'Cómo calcular tu edad exacta' },
      { href: '/es/sistemas-calendarios-del-mundo/', label: 'Sistemas de calendarios del mundo' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'how-to-calculate-days-between-dates', slugs: { en: 'how-to-calculate-days-between-dates', fr: 'fr/comment-calculer-jours-entre-deux-dates', es: 'es/como-calcular-dias-entre-dos-fechas' } },
    { id: 'how-to-calculate-exact-age',           slugs: { en: 'how-to-calculate-exact-age',           fr: 'fr/comment-calculer-son-age-exact',           es: 'es/como-calcular-edad-exacta' } },
    { id: 'date-time-faq',                         slugs: { en: 'date-time-faq',                         fr: 'fr/faq-date-heure',                           es: 'es/preguntas-frecuentes-fecha-hora' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
