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
  pt: {
    title: 'Como calcular o número de dias entre duas datas',
    metaDesc: 'Guia passo a passo para calcular o número de dias entre duas datas. Inclui fórmula, exemplos práticos e como lidar com anos bissextos.',
    kicker: 'GUIA DE CÁLCULO DE DATAS',
    h1: 'Como calcular o número de dias entre duas datas',
    intro: 'Para calcular o número de dias entre duas datas, subtraia a data mais antiga da mais recente. Existem vários métodos para fazer isso com precisão, dependendo se você está calculando à mão, usando uma planilha ou uma fórmula.',
    sections: [
      {
        h2: 'Método 1: contar os dias do calendário diretamente',
        body: `<p>A abordagem mais simples: comece pela data mais antiga e conte até a data mais recente, um dia de cada vez. É prático para períodos curtos (algumas semanas), mas impraticável para intervalos mais longos.</p>
<p><strong>Exemplo:</strong> Quantos dias de 1 de abril a 15 de abril?<br>
1 de abril → 15 de abril = <strong>14 dias</strong>.</p>`
      },
      {
        h2: 'Método 2: subtrair os números do dia do ano',
        body: `<p>Cada dia do ano tem um número de 1 (1 de janeiro) a 365 (31 de dezembro). Para encontrar os dias entre duas datas no mesmo ano, subtraia esses números.</p>
<p><strong>Exemplo:</strong> Quantos dias de 10 de março a 20 de novembro de 2025?</p>
<ol>
<li>10 de março = dia 69 do ano</li>
<li>20 de novembro = dia 324 do ano</li>
<li>324 − 69 = <strong>255 dias</strong></li>
</ol>`,
        table: `<table>
<tr><th>Mês</th><th>Dia do ano (primeiro dia)</th><th>Dias no mês</th></tr>
<tr><td>Janeiro</td><td>1</td><td>31</td></tr>
<tr><td>Fevereiro</td><td>32</td><td>28 (ou 29 em ano bissexto)</td></tr>
<tr><td>Março</td><td>60 (61 em ano bissexto)</td><td>31</td></tr>
<tr><td>Abril</td><td>91 (92)</td><td>30</td></tr>
<tr><td>Maio</td><td>121 (122)</td><td>31</td></tr>
<tr><td>Junho</td><td>152 (153)</td><td>30</td></tr>
<tr><td>Julho</td><td>182 (183)</td><td>31</td></tr>
<tr><td>Agosto</td><td>213 (214)</td><td>31</td></tr>
<tr><td>Setembro</td><td>244 (245)</td><td>30</td></tr>
<tr><td>Outubro</td><td>274 (275)</td><td>31</td></tr>
<tr><td>Novembro</td><td>305 (306)</td><td>30</td></tr>
<tr><td>Dezembro</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Método 3: contar ao longo de vários anos',
        body: `<p>Quando as datas abrangem vários anos, some os dias restantes do primeiro ano, os dias completos dos anos intermediários e os dias decorridos no último ano.</p>
<p><strong>Exemplo:</strong> Dias de 15 de junho de 2020 a 10 de março de 2024:</p>
<ol>
<li>15 de junho a 31 de dezembro de 2020: 199 dias restantes em 2020</li>
<li>Ano completo 2021: 365 dias</li>
<li>Ano completo 2022: 365 dias</li>
<li>Ano completo 2023: 365 dias</li>
<li>1 de janeiro a 10 de março de 2024: 70 dias (2024 é ano bissexto)</li>
<li>Total: 199 + 365 + 365 + 365 + 70 = <strong>1.364 dias</strong></li>
</ol>`
      },
      {
        h2: 'Como os anos bissextos afetam o cálculo',
        body: `<p>Um ano bissexto tem 366 dias em vez de 365. Se o seu intervalo de datas incluir 29 de fevereiro de um ano bissexto, adicione 1 dia extra. Os anos bissextos ocorrem a cada 4 anos: 2020, 2024, 2028, 2032…</p>
<p>Se estiver calculando à mão ao longo de vários anos, verifique se cada ano do intervalo é bissexto e use 366 em vez de 365 para esses anos.</p>`
      },
    ],
    faqs: [
      { q: 'Quantos dias há entre 1 de janeiro e 31 de dezembro?', a: '364 dias separam 1 de janeiro de 31 de dezembro (sem contar o primeiro dia). O ano completo de 1 de janeiro a 1 de janeiro do ano seguinte é de 365 dias (ou 366 em ano bissexto).' },
      { q: 'Como calcular o número de dias entre duas datas no Excel?', a: 'No Excel, subtraia diretamente as duas células de data: =B1-A1. Formate a célula do resultado como número (não como data). O Excel armazena datas como números, portanto a subtração fornece o número exato de dias.' },
      { q: 'O cálculo inclui tanto a data de início quanto a data de fim?', a: 'Depende da convenção. A maioria das calculadoras conta o intervalo entre as datas (sem incluir nenhuma das extremidades), portanto de 1 a 5 de janeiro = 4 dias. Se precisar incluir os dois dias (por exemplo, para um período de aluguel), adicione 1 ao resultado.' },
      { q: 'Quantos dias há entre duas datas que abrangem um ano bissexto?', a: 'Se o intervalo de datas incluir 29 de fevereiro de um ano bissexto, adicione 1 dia extra em comparação com um cálculo sem ano bissexto. Por exemplo, de 1 de janeiro de 2024 a 1 de janeiro de 2025 = 366 dias (2024 é ano bissexto).' },
      { q: 'Qual é a forma mais rápida de calcular os dias entre datas?', a: 'Use uma calculadora de datas online (como a deste site). Insira as duas datas e a calculadora retorna instantaneamente o número de dias, semanas, meses e anos entre elas.' },
    ],
    pillar: { href: '/pt/calcular-dias-entre-datas/', label: 'Calcular dias entre datas — ferramenta gratuita' },
    related: [
      { href: '/pt/dias-em-cada-mes/', label: 'Dias em cada mês' },
      { href: '/pt/dias-uteis-vs-dias-corridos/', label: 'Dias úteis vs dias corridos' },
      { href: '/pt/semanas-no-ano/', label: 'Semanas no ano' },
    ],
  },
  de: {
    title: 'Wie man die Anzahl der Tage zwischen zwei Daten berechnet',
    metaDesc: 'Schritt-für-Schritt-Anleitung zur Berechnung der Tage zwischen zwei Daten. Mit Formel, Rechenbeispielen und Hinweisen zu Schaltjahren.',
    kicker: 'DATUM-BERECHNUNGS-GUIDE',
    h1: 'Wie man die Anzahl der Tage zwischen zwei Daten berechnet',
    intro: 'Um die Anzahl der Tage zwischen zwei Daten zu berechnen, subtrahieren Sie das frühere Datum vom späteren. Je nachdem, ob Sie von Hand, mit einer Tabellenkalkulation oder mit einer Formel rechnen, gibt es verschiedene Methoden.',
    sections: [
      {
        h2: 'Methode 1: Kalendertage direkt zählen',
        body: `<p>Der einfachste Ansatz: Beginnen Sie beim früheren Datum und zählen Sie bis zum späteren Datum, einen Tag nach dem anderen. Dies ist bei kurzen Zeiträumen (ein paar Wochen) praktisch, bei längeren jedoch unpraktisch.</p>
<p><strong>Beispiel:</strong> Wie viele Tage liegen zwischen dem 1. und dem 15. April?<br>
1. April → 15. April = <strong>14 Tage</strong>.</p>`
      },
      {
        h2: 'Methode 2: Tagesnummern im Jahr subtrahieren',
        body: `<p>Jeder Tag des Jahres hat eine Nummer von 1 (1. Januar) bis 365 (31. Dezember). Um Tage zwischen zwei Daten im selben Jahr zu finden, subtrahieren Sie die Tagesnummern.</p>
<p><strong>Beispiel:</strong> Wie viele Tage liegen zwischen dem 10. März und dem 20. November 2025?</p>
<ol>
<li>10. März = Tag 69 des Jahres</li>
<li>20. November = Tag 324 des Jahres</li>
<li>324 − 69 = <strong>255 Tage</strong></li>
</ol>`,
        table: `<table>
<tr><th>Monat</th><th>Tag des Jahres (erster Tag)</th><th>Tage im Monat</th></tr>
<tr><td>Januar</td><td>1</td><td>31</td></tr>
<tr><td>Februar</td><td>32</td><td>28 (oder 29 im Schaltjahr)</td></tr>
<tr><td>März</td><td>60 (61 im Schaltjahr)</td><td>31</td></tr>
<tr><td>April</td><td>91 (92)</td><td>30</td></tr>
<tr><td>Mai</td><td>121 (122)</td><td>31</td></tr>
<tr><td>Juni</td><td>152 (153)</td><td>30</td></tr>
<tr><td>Juli</td><td>182 (183)</td><td>31</td></tr>
<tr><td>August</td><td>213 (214)</td><td>31</td></tr>
<tr><td>September</td><td>244 (245)</td><td>30</td></tr>
<tr><td>Oktober</td><td>274 (275)</td><td>31</td></tr>
<tr><td>November</td><td>305 (306)</td><td>30</td></tr>
<tr><td>Dezember</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Methode 3: Über mehrere Jahre hinweg zählen',
        body: `<p>Wenn die Daten mehrere Jahre umspannen, addieren Sie die verbleibenden Tage im ersten Jahr, die vollen Tage der kompletten Zwischenjahre und die abgelaufenen Tage im letzten Jahr.</p>
<p><strong>Beispiel:</strong> Tage vom 15. Juni 2020 bis zum 10. März 2024:</p>
<ol>
<li>15. Juni bis 31. Dezember 2020: 199 verbleibende Tage in 2020</li>
<li>Volles Jahr 2021: 365 Tage</li>
<li>Volles Jahr 2022: 365 Tage</li>
<li>Volles Jahr 2023: 365 Tage</li>
<li>1. Januar bis 10. März 2024: 70 Tage (2024 ist ein Schaltjahr)</li>
<li>Gesamt: 199 + 365 + 365 + 365 + 70 = <strong>1.364 Tage</strong></li>
</ol>`
      },
      {
        h2: 'Wie Schaltjahre die Berechnung beeinflussen',
        body: `<p>Ein Schaltjahr hat 366 statt 365 Tage. Wenn Ihr Zeitraum den 29. Februar eines Schaltjahres umfasst, addieren Sie 1 zusätzlichen Tag. Schaltjahre treten alle 4 Jahre auf: 2020, 2024, 2028, 2032…</p>
<p>Wenn Sie von Hand über mehrere Jahre rechnen, prüfen Sie, ob jedes Jahr im Zeitraum ein Schaltjahr ist, und verwenden Sie für diese Jahre 366 statt 365.</p>`
      },
    ],
    faqs: [
      { q: 'Wie viele Tage liegen zwischen dem 1. Januar und dem 31. Dezember?', a: '364 Tage trennen den 1. Januar vom 31. Dezember (ohne den ersten Tag zu zählen). Das vollständige Jahr vom 1. Januar bis zum 1. Januar des Folgejahres umfasst 365 Tage (oder 366 in einem Schaltjahr).' },
      { q: 'Wie berechne ich die Anzahl der Tage zwischen zwei Daten in Excel?', a: 'Subtrahieren Sie in Excel die beiden Datumszellen direkt: =B1-A1. Formatieren Sie die Ergebniszelle als Zahl (nicht als Datum). Excel speichert Datumsangaben als Zahlen, daher liefert die Subtraktion die genaue Tagesanzahl.' },
      { q: 'Werden bei der Berechnung sowohl das Start- als auch das Enddatum mitgezählt?', a: 'Das hängt von der Konvention ab. Die meisten Rechner zählen den Abstand zwischen den Daten (ohne die Endpunkte einzuschließen), sodass vom 1. bis zum 5. Januar = 4 Tage. Wenn Sie beide Tage einschließen müssen (z. B. für einen Mietzeitraum), addieren Sie 1 zum Ergebnis.' },
      { q: 'Wie viele Tage liegen zwischen zwei Daten, die ein Schaltjahr umspannen?', a: 'Wenn der Zeitraum den 29. Februar eines Schaltjahres enthält, addieren Sie im Vergleich zu einer Berechnung ohne Schaltjahr 1 zusätzlichen Tag. Zum Beispiel: 1. Januar 2024 bis 1. Januar 2025 = 366 Tage (2024 ist ein Schaltjahr).' },
      { q: 'Was ist der schnellste Weg, Tage zwischen Daten zu berechnen?', a: 'Verwenden Sie einen Online-Datumsrechner (wie den auf dieser Seite). Geben Sie die zwei Daten ein, und der Rechner liefert sofort die Anzahl der Tage, Wochen, Monate und Jahre dazwischen.' },
    ],
    pillar: { href: '/de/tage-zwischen-daten-rechner/', label: 'Tage zwischen Daten berechnen — kostenloses Tool' },
    related: [
      { href: '/de/tage-pro-monat/', label: 'Tage pro Monat' },
      { href: '/de/arbeitstage-vs-kalendertage/', label: 'Arbeitstage vs Kalendertage' },
      { href: '/de/wochen-im-jahr/', label: 'Wochen im Jahr' },
    ],
  },
  it: {
    title: 'Come calcolare il numero di giorni tra due date',
    metaDesc: 'Guida passo dopo passo per calcolare il numero di giorni tra due date. Include formula, esempi pratici e come gestire gli anni bisestili.',
    kicker: 'GUIDA AL CALCOLO DATE',
    h1: 'Come calcolare il numero di giorni tra due date',
    intro: 'Per calcolare il numero di giorni tra due date, sottrai la data più antica da quella più recente. Esistono diversi metodi per farlo con precisione, a seconda che tu stia calcolando a mano, con un foglio di calcolo o con una formula.',
    sections: [
      {
        h2: 'Metodo 1: contare i giorni del calendario direttamente',
        body: `<p>L'approccio più semplice: inizia dalla data più antica e conta fino alla data più recente, un giorno alla volta. È pratico per periodi brevi (qualche settimana), ma poco utile per intervalli più lunghi.</p>
<p><strong>Esempio:</strong> Quanti giorni dal 1 al 15 aprile?<br>
1 aprile → 15 aprile = <strong>14 giorni</strong>.</p>`
      },
      {
        h2: "Metodo 2: sottrarre i numeri del giorno dell'anno",
        body: `<p>Ogni giorno dell'anno ha un numero da 1 (1 gennaio) a 365 (31 dicembre). Per trovare i giorni tra due date nello stesso anno, sottrai quei numeri.</p>
<p><strong>Esempio:</strong> Quanti giorni dal 10 marzo al 20 novembre 2025?</p>
<ol>
<li>10 marzo = giorno 69 dell'anno</li>
<li>20 novembre = giorno 324 dell'anno</li>
<li>324 − 69 = <strong>255 giorni</strong></li>
</ol>`,
        table: `<table>
<tr><th>Mese</th><th>Giorno dell'anno (primo giorno)</th><th>Giorni nel mese</th></tr>
<tr><td>Gennaio</td><td>1</td><td>31</td></tr>
<tr><td>Febbraio</td><td>32</td><td>28 (o 29 in anno bisestile)</td></tr>
<tr><td>Marzo</td><td>60 (61 in anno bisestile)</td><td>31</td></tr>
<tr><td>Aprile</td><td>91 (92)</td><td>30</td></tr>
<tr><td>Maggio</td><td>121 (122)</td><td>31</td></tr>
<tr><td>Giugno</td><td>152 (153)</td><td>30</td></tr>
<tr><td>Luglio</td><td>182 (183)</td><td>31</td></tr>
<tr><td>Agosto</td><td>213 (214)</td><td>31</td></tr>
<tr><td>Settembre</td><td>244 (245)</td><td>30</td></tr>
<tr><td>Ottobre</td><td>274 (275)</td><td>31</td></tr>
<tr><td>Novembre</td><td>305 (306)</td><td>30</td></tr>
<tr><td>Dicembre</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Metodo 3: contare su più anni',
        body: `<p>Quando le date coprono più anni, somma i giorni rimanenti nel primo anno, i giorni completi degli anni intermedi e i giorni trascorsi nell'ultimo anno.</p>
<p><strong>Esempio:</strong> Giorni dal 15 giugno 2020 al 10 marzo 2024:</p>
<ol>
<li>Dal 15 giugno al 31 dicembre 2020: 199 giorni rimanenti nel 2020</li>
<li>Anno completo 2021: 365 giorni</li>
<li>Anno completo 2022: 365 giorni</li>
<li>Anno completo 2023: 365 giorni</li>
<li>Dal 1 gennaio al 10 marzo 2024: 70 giorni (2024 è anno bisestile)</li>
<li>Totale: 199 + 365 + 365 + 365 + 70 = <strong>1.364 giorni</strong></li>
</ol>`
      },
      {
        h2: 'Come gli anni bisestili influenzano il calcolo',
        body: `<p>Un anno bisestile ha 366 giorni invece di 365. Se il tuo intervallo include il 29 febbraio di un anno bisestile, aggiungi 1 giorno in più. Gli anni bisestili si verificano ogni 4 anni: 2020, 2024, 2028, 2032…</p>
<p>Se calcoli a mano su più anni, verifica se ogni anno dell'intervallo è bisestile e usa 366 invece di 365 per quegli anni.</p>`
      },
    ],
    faqs: [
      { q: 'Quanti giorni ci sono tra il 1 gennaio e il 31 dicembre?', a: '364 giorni separano il 1 gennaio dal 31 dicembre (senza contare il primo giorno). L\'anno completo dal 1 gennaio al 1 gennaio dell\'anno successivo è di 365 giorni (o 366 in un anno bisestile).' },
      { q: 'Come calcolare il numero di giorni tra due date in Excel?', a: 'In Excel, sottrai direttamente le due celle data: =B1-A1. Formatta la cella del risultato come numero (non come data). Excel memorizza le date come numeri, quindi la sottrazione fornisce il numero esatto di giorni.' },
      { q: 'Il calcolo include sia la data di inizio che quella di fine?', a: 'Dipende dalla convenzione. La maggior parte delle calcolatrici conta il divario tra le date (senza includere gli estremi), quindi dal 1 al 5 gennaio = 4 giorni. Se devi includere entrambi i giorni (ad esempio per un periodo di affitto), aggiungi 1 al risultato.' },
      { q: 'Quanti giorni ci sono tra due date che attraversano un anno bisestile?', a: 'Se l\'intervallo include il 29 febbraio di un anno bisestile, aggiungi 1 giorno in più rispetto a un calcolo senza anno bisestile. Ad esempio, dal 1 gennaio 2024 al 1 gennaio 2025 = 366 giorni (2024 è anno bisestile).' },
      { q: 'Qual è il modo più veloce per calcolare i giorni tra date?', a: 'Usa una calcolatrice di date online (come quella su questo sito). Inserisci le due date e la calcolatrice restituisce istantaneamente il numero di giorni, settimane, mesi e anni tra di esse.' },
    ],
    pillar: { href: '/it/calcola-giorni-tra-date/', label: 'Calcola giorni tra date — strumento gratuito' },
    related: [
      { href: '/it/giorni-in-ogni-mese/', label: 'Giorni in ogni mese' },
      { href: '/it/giorni-lavorativi-vs-giorni-calendario/', label: 'Giorni lavorativi vs giorni calendario' },
      { href: '/it/settimane-in-un-anno/', label: 'Settimane in un anno' },
    ],
  },
  pl: {
    title: 'Jak obliczyć liczbę dni między dwiema datami',
    metaDesc: 'Przewodnik krok po kroku do obliczania liczby dni między dwiema datami. Zawiera wzór, przykłady i obsługę lat przestępnych.',
    kicker: 'PRZEWODNIK OBLICZANIA DAT',
    h1: 'Jak obliczyć liczbę dni między dwiema datami',
    intro: 'Aby obliczyć liczbę dni między dwiema datami, odejmij wcześniejszą datę od późniejszej. Istnieje kilka metod, aby zrobić to dokładnie — w zależności od tego, czy liczysz ręcznie, używasz arkusza kalkulacyjnego, czy wzoru.',
    sections: [
      {
        h2: 'Metoda 1: bezpośrednie liczenie dni kalendarzowych',
        body: `<p>Najprostsza metoda: zacznij od wcześniejszej daty i licz do późniejszej, jeden dzień na raz. Jest praktyczna dla krótkich przedziałów (kilka tygodni), ale niepraktyczna dla dłuższych.</p>
<p><strong>Przykład:</strong> Ile dni jest od 1 do 15 kwietnia?<br>
1 kwietnia → 15 kwietnia = <strong>14 dni</strong>.</p>`
      },
      {
        h2: 'Metoda 2: odejmowanie numerów dni w roku',
        body: `<p>Każdy dzień roku ma numer od 1 (1 stycznia) do 365 (31 grudnia). Aby znaleźć dni między dwiema datami w tym samym roku, odejmij te numery.</p>
<p><strong>Przykład:</strong> Ile dni od 10 marca do 20 listopada 2025?</p>
<ol>
<li>10 marca = dzień 69 roku</li>
<li>20 listopada = dzień 324 roku</li>
<li>324 − 69 = <strong>255 dni</strong></li>
</ol>`,
        table: `<table>
<tr><th>Miesiąc</th><th>Dzień roku (pierwszy dzień)</th><th>Dni w miesiącu</th></tr>
<tr><td>Styczeń</td><td>1</td><td>31</td></tr>
<tr><td>Luty</td><td>32</td><td>28 (lub 29 w roku przestępnym)</td></tr>
<tr><td>Marzec</td><td>60 (61 w roku przestępnym)</td><td>31</td></tr>
<tr><td>Kwiecień</td><td>91 (92)</td><td>30</td></tr>
<tr><td>Maj</td><td>121 (122)</td><td>31</td></tr>
<tr><td>Czerwiec</td><td>152 (153)</td><td>30</td></tr>
<tr><td>Lipiec</td><td>182 (183)</td><td>31</td></tr>
<tr><td>Sierpień</td><td>213 (214)</td><td>31</td></tr>
<tr><td>Wrzesień</td><td>244 (245)</td><td>30</td></tr>
<tr><td>Październik</td><td>274 (275)</td><td>31</td></tr>
<tr><td>Listopad</td><td>305 (306)</td><td>30</td></tr>
<tr><td>Grudzień</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Metoda 3: liczenie przez kilka lat',
        body: `<p>Gdy daty obejmują kilka lat, zsumuj pozostałe dni w pierwszym roku, pełne dni w całych latach pośrednich i dni upłynięte w ostatnim roku.</p>
<p><strong>Przykład:</strong> Dni od 15 czerwca 2020 do 10 marca 2024:</p>
<ol>
<li>Od 15 czerwca do 31 grudnia 2020: 199 pozostałych dni w 2020</li>
<li>Pełny rok 2021: 365 dni</li>
<li>Pełny rok 2022: 365 dni</li>
<li>Pełny rok 2023: 365 dni</li>
<li>Od 1 stycznia do 10 marca 2024: 70 dni (2024 to rok przestępny)</li>
<li>Łącznie: 199 + 365 + 365 + 365 + 70 = <strong>1364 dni</strong></li>
</ol>`
      },
      {
        h2: 'Jak lata przestępne wpływają na obliczenia',
        body: `<p>Rok przestępny ma 366 dni zamiast 365. Jeśli Twój przedział dat obejmuje 29 lutego roku przestępnego, dodaj 1 dodatkowy dzień. Lata przestępne występują co 4 lata: 2020, 2024, 2028, 2032…</p>
<p>Jeśli liczysz ręcznie przez kilka lat, sprawdź, czy każdy rok w przedziale jest przestępny i użyj 366 zamiast 365 dla tych lat.</p>`
      },
    ],
    faqs: [
      { q: 'Ile dni jest między 1 stycznia a 31 grudnia?', a: '364 dni dzielą 1 stycznia od 31 grudnia (bez liczenia pierwszego dnia). Pełny rok od 1 stycznia do 1 stycznia następnego roku to 365 dni (lub 366 w roku przestępnym).' },
      { q: 'Jak obliczyć liczbę dni między dwiema datami w Excelu?', a: 'W Excelu odejmij bezpośrednio dwie komórki z datami: =B1-A1. Sformatuj komórkę z wynikiem jako liczbę (nie jako datę). Excel przechowuje daty jako liczby, więc odejmowanie daje dokładną liczbę dni.' },
      { q: 'Czy obliczenie uwzględnia zarówno datę początkową, jak i końcową?', a: 'Zależy to od konwencji. Większość kalkulatorów liczy odstęp między datami (nie uwzględniając żadnego z końców), więc od 1 do 5 stycznia = 4 dni. Jeśli musisz uwzględnić oba dni (np. dla okresu wynajmu), dodaj 1 do wyniku.' },
      { q: 'Ile dni jest między dwiema datami obejmującymi rok przestępny?', a: 'Jeśli przedział dat obejmuje 29 lutego roku przestępnego, dodaj 1 dodatkowy dzień w porównaniu z obliczeniem bez roku przestępnego. Na przykład: od 1 stycznia 2024 do 1 stycznia 2025 = 366 dni (2024 to rok przestępny).' },
      { q: 'Jaki jest najszybszy sposób obliczania dni między datami?', a: 'Użyj internetowego kalkulatora dat (takiego jak ten na tej stronie). Wpisz dwie daty, a kalkulator natychmiast zwróci liczbę dni, tygodni, miesięcy i lat między nimi.' },
    ],
    pillar: { href: '/pl/kalkulator-dni-miedzy-datami/', label: 'Oblicz dni między datami — darmowe narzędzie' },
    related: [
      { href: '/pl/dni-w-kazdym-miesiacu/', label: 'Dni w każdym miesiącu' },
      { href: '/pl/dni-robocze-vs-dni-kalendarzowe/', label: 'Dni robocze vs dni kalendarzowe' },
      { href: '/pl/tygodnie-w-roku/', label: 'Tygodnie w roku' },
    ],
  },
  ja: {
    title: '2つの日付の間の日数を計算する方法',
    metaDesc: '2つの日付の間の日数を計算するためのステップバイステップガイド。計算式、実例、うるう年の扱い方を含みます。',
    kicker: 'DATE KEISAN GUIDE',
    h1: '2つの日付の間の日数を計算する方法',
    intro: '2つの日付の間の日数を計算するには、早い日付を遅い日付から引きます。手計算、表計算ソフト、数式のどれを使うかによって、正確に計算するための方法がいくつかあります。',
    sections: [
      {
        h2: '方法1：カレンダーの日数を直接数える',
        body: `<p>最も簡単な方法：早い日付から遅い日付まで、1日ずつ数えます。数週間程度の短い期間には実用的ですが、長い期間には不向きです。</p>
<p><strong>例：</strong> 4月1日から4月15日まで何日ありますか？<br>
4月1日 → 4月15日 = <strong>14日</strong>。</p>`
      },
      {
        h2: '方法2：年間の通し日番号で引き算する',
        body: `<p>年の各日には1（1月1日）から365（12月31日）までの番号があります。同じ年の2つの日付の間の日数を求めるには、日番号を引き算します。</p>
<p><strong>例：</strong> 2025年3月10日から11月20日まで何日ありますか？</p>
<ol>
<li>3月10日 = 年の69日目</li>
<li>11月20日 = 年の324日目</li>
<li>324 − 69 = <strong>255日</strong></li>
</ol>`,
        table: `<table>
<tr><th>月</th><th>年間通し日（月初）</th><th>月の日数</th></tr>
<tr><td>1月</td><td>1</td><td>31</td></tr>
<tr><td>2月</td><td>32</td><td>28（うるう年は29）</td></tr>
<tr><td>3月</td><td>60（うるう年は61）</td><td>31</td></tr>
<tr><td>4月</td><td>91 (92)</td><td>30</td></tr>
<tr><td>5月</td><td>121 (122)</td><td>31</td></tr>
<tr><td>6月</td><td>152 (153)</td><td>30</td></tr>
<tr><td>7月</td><td>182 (183)</td><td>31</td></tr>
<tr><td>8月</td><td>213 (214)</td><td>31</td></tr>
<tr><td>9月</td><td>244 (245)</td><td>30</td></tr>
<tr><td>10月</td><td>274 (275)</td><td>31</td></tr>
<tr><td>11月</td><td>305 (306)</td><td>30</td></tr>
<tr><td>12月</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: '方法3：複数年にわたって数える',
        body: `<p>日付が複数年にまたがる場合、最初の年の残り日数、中間の完全な年の日数、最終年の経過日数を合計します。</p>
<p><strong>例：</strong> 2020年6月15日から2024年3月10日までの日数：</p>
<ol>
<li>2020年6月15日〜12月31日：2020年の残り199日</li>
<li>2021年全体：365日</li>
<li>2022年全体：365日</li>
<li>2023年全体：365日</li>
<li>2024年1月1日〜3月10日：70日（2024年はうるう年）</li>
<li>合計：199 + 365 + 365 + 365 + 70 = <strong>1,364日</strong></li>
</ol>`
      },
      {
        h2: 'うるう年が計算に与える影響',
        body: `<p>うるう年は365日ではなく366日あります。日付の範囲にうるう年の2月29日が含まれる場合は、1日加算してください。うるう年は4年ごとに発生します：2020年、2024年、2028年、2032年…</p>
<p>複数年にわたって手計算する場合は、範囲内の各年がうるう年かどうかを確認し、該当する年には365の代わりに366を使用してください。</p>`
      },
    ],
    faqs: [
      { q: '1月1日から12月31日まで何日ありますか？', a: '1月1日と12月31日の間には364日あります（最初の日は数えません）。1月1日から翌年1月1日までの1年全体は365日（うるう年は366日）です。' },
      { q: 'Excelで2つの日付の間の日数を計算するには？', a: 'Excelでは、2つの日付セルを直接引き算します：=B1-A1。結果セルを数値としてフォーマットしてください（日付としてではなく）。Excelは日付を数値として保存するため、引き算で正確な日数が求められます。' },
      { q: '計算には開始日と終了日の両方が含まれますか？', a: '慣例によります。ほとんどの計算機は日付間の差（両端を含まない）を数えるため、1月1日から5日 = 4日となります。両日を含める必要がある場合（例：レンタル期間）は、結果に1を加えてください。' },
      { q: 'うるう年をまたぐ2つの日付の間の日数は？', a: '日付の範囲にうるう年の2月29日が含まれる場合、うるう年なしの計算より1日多くなります。例えば、2024年1月1日から2025年1月1日 = 366日（2024年はうるう年）。' },
      { q: '日付間の日数を計算する最も速い方法は？', a: 'オンラインの日付計算機（このサイトのものなど）を使いましょう。2つの日付を入力するだけで、その間の日数・週数・月数・年数が即座に表示されます。' },
    ],
    pillar: { href: '/ja/hi-zuke-keisan/', label: '日付間の日数計算 — 無料ツール' },
    related: [
      { href: '/ja/tsuki-no-hi-su/', label: '各月の日数' },
      { href: '/ja/eigyo-bi-vs-koyomi-bi/', label: '営業日 vs 暦日' },
      { href: '/ja/nen-no-shu-su/', label: '年間の週数' },
    ],
  },
  ko: {
    title: '두 날짜 사이의 일수를 계산하는 방법',
    metaDesc: '두 날짜 사이의 일수를 계산하는 단계별 가이드. 공식, 풀이 예제, 윤년 처리 방법을 포함합니다.',
    kicker: 'NAL JJA GYESAN GUIDE',
    h1: '두 날짜 사이의 일수를 계산하는 방법',
    intro: '두 날짜 사이의 일수를 계산하려면 이른 날짜에서 늦은 날짜를 빼면 됩니다. 손으로 계산하든, 스프레드시트를 쓰든, 수식을 사용하든 정확하게 계산할 수 있는 여러 방법이 있습니다.',
    sections: [
      {
        h2: '방법 1: 달력 일수 직접 세기',
        body: `<p>가장 간단한 방법: 이른 날짜에서 시작해 늦은 날짜까지 하루씩 셉니다. 짧은 기간(몇 주)에는 실용적이지만 긴 기간에는 비효율적입니다.</p>
<p><strong>예시:</strong> 4월 1일부터 4월 15일까지 며칠입니까?<br>
4월 1일 → 4월 15일 = <strong>14일</strong>.</p>`
      },
      {
        h2: '방법 2: 연간 일련번호로 빼기',
        body: `<p>연중 각 날에는 1(1월 1일)부터 365(12월 31일)까지의 번호가 있습니다. 같은 해의 두 날짜 사이의 일수를 구하려면 일련번호를 빼면 됩니다.</p>
<p><strong>예시:</strong> 2025년 3월 10일부터 11월 20일까지 며칠입니까?</p>
<ol>
<li>3월 10일 = 연중 69번째 날</li>
<li>11월 20일 = 연중 324번째 날</li>
<li>324 − 69 = <strong>255일</strong></li>
</ol>`,
        table: `<table>
<tr><th>월</th><th>연간 일련번호(월 첫날)</th><th>해당 월 일수</th></tr>
<tr><td>1월</td><td>1</td><td>31</td></tr>
<tr><td>2월</td><td>32</td><td>28 (윤년에는 29)</td></tr>
<tr><td>3월</td><td>60 (윤년에는 61)</td><td>31</td></tr>
<tr><td>4월</td><td>91 (92)</td><td>30</td></tr>
<tr><td>5월</td><td>121 (122)</td><td>31</td></tr>
<tr><td>6월</td><td>152 (153)</td><td>30</td></tr>
<tr><td>7월</td><td>182 (183)</td><td>31</td></tr>
<tr><td>8월</td><td>213 (214)</td><td>31</td></tr>
<tr><td>9월</td><td>244 (245)</td><td>30</td></tr>
<tr><td>10월</td><td>274 (275)</td><td>31</td></tr>
<tr><td>11월</td><td>305 (306)</td><td>30</td></tr>
<tr><td>12월</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: '방법 3: 여러 해에 걸쳐 계산하기',
        body: `<p>날짜가 여러 해에 걸치는 경우, 첫 해의 남은 일수, 완전한 중간 연도의 일수, 마지막 해의 경과 일수를 합산합니다.</p>
<p><strong>예시:</strong> 2020년 6월 15일부터 2024년 3월 10일까지의 일수:</p>
<ol>
<li>2020년 6월 15일 ~ 12월 31일: 2020년 남은 199일</li>
<li>2021년 전체: 365일</li>
<li>2022년 전체: 365일</li>
<li>2023년 전체: 365일</li>
<li>2024년 1월 1일 ~ 3월 10일: 70일 (2024년은 윤년)</li>
<li>합계: 199 + 365 + 365 + 365 + 70 = <strong>1,364일</strong></li>
</ol>`
      },
      {
        h2: '윤년이 계산에 미치는 영향',
        body: `<p>윤년은 365일이 아닌 366일입니다. 날짜 범위에 윤년의 2월 29일이 포함되면 하루를 추가합니다. 윤년은 4년마다 발생합니다: 2020, 2024, 2028, 2032…</p>
<p>여러 해에 걸쳐 손으로 계산할 때는 범위 내 각 연도가 윤년인지 확인하고, 해당 연도에는 365 대신 366을 사용하세요.</p>`
      },
    ],
    faqs: [
      { q: '1월 1일과 12월 31일 사이에 며칠이 있습니까?', a: '1월 1일과 12월 31일 사이에는 364일이 있습니다(첫째 날 미포함). 1월 1일부터 다음 해 1월 1일까지의 한 해는 365일(윤년에는 366일)입니다.' },
      { q: 'Excel에서 두 날짜 사이의 일수를 계산하려면 어떻게 합니까?', a: 'Excel에서는 두 날짜 셀을 직접 빼면 됩니다: =B1-A1. 결과 셀을 날짜가 아닌 숫자 서식으로 지정하세요. Excel은 날짜를 숫자로 저장하므로 뺄셈으로 정확한 일수를 구할 수 있습니다.' },
      { q: '계산에 시작일과 종료일이 모두 포함됩니까?', a: '관례에 따라 다릅니다. 대부분의 계산기는 날짜 사이의 간격(양 끝 날짜 미포함)을 세므로, 1월 1일부터 5일까지 = 4일입니다. 양일을 모두 포함해야 하는 경우(예: 임대 기간)에는 결과에 1을 더하세요.' },
      { q: '윤년에 걸친 두 날짜 사이에 며칠이 있습니까?', a: '날짜 범위에 윤년의 2월 29일이 포함되면, 윤년 없는 계산보다 1일 더 많습니다. 예를 들어, 2024년 1월 1일부터 2025년 1월 1일 = 366일(2024년은 윤년)입니다.' },
      { q: '날짜 사이의 일수를 계산하는 가장 빠른 방법은 무엇입니까?', a: '온라인 날짜 계산기(이 사이트의 것 등)를 사용하세요. 두 날짜를 입력하면 그 사이의 일수, 주수, 월수, 연수가 즉시 표시됩니다.' },
    ],
    pillar: { href: '/ko/nal-jja-gyesan-gi/', label: '날짜 사이 일수 계산 — 무료 도구' },
    related: [
      { href: '/ko/wol-byeol-il-su/', label: '각 월의 일수' },
      { href: '/ko/yeong-eop-il-vs-koyomi-il/', label: '영업일 vs 달력일' },
      { href: '/ko/yon-gan-ju-su/', label: '연간 주수' },
    ],
  },
  nl: {
    title: 'Hoe het aantal dagen tussen twee datums te berekenen',
    metaDesc: 'Stap-voor-stap handleiding voor het berekenen van het aantal dagen tussen twee datums. Inclusief formule, uitgewerkte voorbeelden en omgang met schrikkeljaren.',
    kicker: 'DATUM BEREKENINGS GIDS',
    h1: 'Hoe het aantal dagen tussen twee datums te berekenen',
    intro: 'Om het aantal dagen tussen twee datums te berekenen, trekt u de vroegste datum af van de laatste. Er zijn verschillende methoden om dit nauwkeurig te doen, afhankelijk of u met de hand, een spreadsheet of een formule rekent.',
    sections: [
      {
        h2: 'Methode 1: kalenderdagen direct tellen',
        body: `<p>De eenvoudigste aanpak: begin bij de vroegste datum en tel naar de laatste datum, één dag tegelijk. Dit is praktisch voor korte periodes (een paar weken), maar niet voor langere periodes.</p>
<p><strong>Voorbeeld:</strong> Hoeveel dagen van 1 april tot 15 april?<br>
1 april → 15 april = <strong>14 dagen</strong>.</p>`
      },
      {
        h2: 'Methode 2: dagnummers in het jaar aftrekken',
        body: `<p>Elke dag van het jaar heeft een nummer van 1 (1 januari) tot 365 (31 december). Om dagen tussen twee datums in hetzelfde jaar te vinden, trekt u de dagnummers af.</p>
<p><strong>Voorbeeld:</strong> Hoeveel dagen van 10 maart tot 20 november 2025?</p>
<ol>
<li>10 maart = dag 69 van het jaar</li>
<li>20 november = dag 324 van het jaar</li>
<li>324 − 69 = <strong>255 dagen</strong></li>
</ol>`,
        table: `<table>
<tr><th>Maand</th><th>Dag van het jaar (eerste dag)</th><th>Dagen in de maand</th></tr>
<tr><td>Januari</td><td>1</td><td>31</td></tr>
<tr><td>Februari</td><td>32</td><td>28 (of 29 in een schrikkeljaar)</td></tr>
<tr><td>Maart</td><td>60 (61 in schrikkeljaar)</td><td>31</td></tr>
<tr><td>April</td><td>91 (92)</td><td>30</td></tr>
<tr><td>Mei</td><td>121 (122)</td><td>31</td></tr>
<tr><td>Juni</td><td>152 (153)</td><td>30</td></tr>
<tr><td>Juli</td><td>182 (183)</td><td>31</td></tr>
<tr><td>Augustus</td><td>213 (214)</td><td>31</td></tr>
<tr><td>September</td><td>244 (245)</td><td>30</td></tr>
<tr><td>Oktober</td><td>274 (275)</td><td>31</td></tr>
<tr><td>November</td><td>305 (306)</td><td>30</td></tr>
<tr><td>December</td><td>335 (336)</td><td>31</td></tr>
</table>`
      },
      {
        h2: 'Methode 3: tellen over meerdere jaren',
        body: `<p>Als datums meerdere jaren beslaan, tel dan de resterende dagen in het eerste jaar op bij de volledige dagen van complete tussenjaren en de verstreken dagen in het laatste jaar.</p>
<p><strong>Voorbeeld:</strong> Dagen van 15 juni 2020 tot 10 maart 2024:</p>
<ol>
<li>15 juni tot 31 december 2020: 199 resterende dagen in 2020</li>
<li>Volledig jaar 2021: 365 dagen</li>
<li>Volledig jaar 2022: 365 dagen</li>
<li>Volledig jaar 2023: 365 dagen</li>
<li>1 januari tot 10 maart 2024: 70 dagen (2024 is een schrikkeljaar)</li>
<li>Totaal: 199 + 365 + 365 + 365 + 70 = <strong>1.364 dagen</strong></li>
</ol>`
      },
      {
        h2: 'Hoe schrikkeljaren de berekening beïnvloeden',
        body: `<p>Een schrikkeljaar heeft 366 dagen in plaats van 365. Als uw datumbereik 29 februari van een schrikkeljaar omvat, voeg dan 1 dag extra toe. Schrikkeljaren komen elke 4 jaar voor: 2020, 2024, 2028, 2032…</p>
<p>Als u met de hand over meerdere jaren rekent, controleer dan of elk jaar in het bereik een schrikkeljaar is en gebruik 366 in plaats van 365 voor die jaren.</p>`
      },
    ],
    faqs: [
      { q: 'Hoeveel dagen zijn er tussen 1 januari en 31 december?', a: '364 dagen scheiden 1 januari van 31 december (zonder de eerste dag mee te tellen). Het volledige jaar van 1 januari tot 1 januari van het volgende jaar is 365 dagen (of 366 in een schrikkeljaar).' },
      { q: 'Hoe bereken ik het aantal dagen tussen twee datums in Excel?', a: 'Trek in Excel de twee datumcellen direct van elkaar af: =B1-A1. Formatteer de resultaatcel als getal (niet als datum). Excel slaat datums op als getallen, dus aftrekken geeft het exacte aantal dagen.' },
      { q: 'Zijn zowel de begin- als einddatum inbegrepen in de berekening?', a: 'Dat hangt van de conventie af. De meeste rekenmachines tellen het verschil tussen datums (zonder de eindpunten mee te tellen), dus 1 januari tot 5 januari = 4 dagen. Als u beide dagen moet mee tellen (bijv. voor een huurperiode), voeg dan 1 toe aan het resultaat.' },
      { q: 'Hoeveel dagen zijn er tussen twee datums die een schrikkeljaar omspannen?', a: 'Als het datumbereik 29 februari van een schrikkeljaar omvat, voeg dan 1 extra dag toe vergeleken met een berekening zonder schrikkeljaar. Bijvoorbeeld: 1 januari 2024 tot 1 januari 2025 = 366 dagen (2024 is een schrikkeljaar).' },
      { q: 'Wat is de snelste manier om dagen tussen datums te berekenen?', a: 'Gebruik een online datumcalculator (zoals die op deze site). Voer de twee datums in en de calculator geeft direct het aantal dagen, weken, maanden en jaren daartussen.' },
    ],
    pillar: { href: '/nl/dagen-berekenen-tussen-datums/', label: 'Dagen berekenen tussen datums — gratis tool' },
    related: [
      { href: '/nl/dagen-per-maand/', label: 'Dagen per maand' },
      { href: '/nl/werkdagen-vs-kalenderdagen/', label: 'Werkdagen vs kalenderdagen' },
      { href: '/nl/weken-per-jaar/', label: 'Weken per jaar' },
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
  pt: {
    title: 'Como calcular sua idade exata — anos, meses, dias e mais',
    metaDesc: 'Como calcular sua idade exata em anos, meses, dias, semanas e horas. Passo a passo com exemplos práticos para qualquer ano de nascimento.',
    kicker: 'GUIA DE CÁLCULO DE IDADE',
    h1: 'Como calcular sua idade exata',
    intro: 'Sua idade exata é o tempo decorrido desde sua data de nascimento até hoje, expresso em anos, meses e dias. Para calculá-la: subtraia seu ano de nascimento do ano atual e ajuste conforme seu aniversário já passou ou não neste ano.',
    sections: [
      {
        h2: 'Passo a passo: a idade em anos',
        body: `<p>Para calcular a idade em anos completos:</p>
<ol>
<li>Subtraia seu ano de nascimento do ano atual: 2026 − ano de nascimento = idade aproximada</li>
<li>Se seu aniversário ainda NÃO ocorreu neste ano, subtraia 1</li>
<li>Se seu aniversário JÁ ocorreu neste ano (ou é hoje), mantenha o resultado</li>
</ol>
<p><strong>Exemplo 1:</strong> Nascido em 15 de setembro de 1990 — hoje é 10 de abril de 2026<br>
2026 − 1990 = 36. O aniversário (15 de setembro) ainda não ocorreu em 2026. Idade = <strong>35 anos</strong>.</p>
<p><strong>Exemplo 2:</strong> Nascido em 5 de março de 1990 — hoje é 10 de abril de 2026<br>
2026 − 1990 = 36. O aniversário (5 de março) já ocorreu em 2026. Idade = <strong>36 anos</strong>.</p>`
      },
      {
        h2: 'Passo a passo: a idade em anos, meses e dias',
        body: `<p>Para uma idade precisa incluindo meses e dias:</p>
<ol>
<li>Comece pelos anos completos (veja acima)</li>
<li>Conte os meses completos desde seu último aniversário</li>
<li>Conte os dias restantes desde o último mês completo</li>
</ol>
<p><strong>Exemplo:</strong> Nascido em 20 de junho de 1988 — hoje é 10 de abril de 2026</p>
<ul>
<li>Anos completos: 2025 − 1988 = 37 (o aniversário de 20 de junho ainda não passou em 2026)</li>
<li>Meses desde 20 de junho de 2025: julho, agosto, setembro, outubro, novembro, dezembro, janeiro, fevereiro, março = 9 meses completos</li>
<li>Dias desde 20 de março: 20 de março → 10 de abril = 21 dias</li>
<li>Resultado: <strong>37 anos, 9 meses, 21 dias</strong></li>
</ul>`
      },
      {
        h2: 'Idade em outras unidades',
        body: '',
        table: `<table>
<tr><th>Unidade</th><th>Fórmula</th><th>Exemplo (nascido em 1 jan. 1990 → hoje 10 abr. 2026)</th></tr>
<tr><td>Anos</td><td>Ano atual − ano de nascimento (ajustado)</td><td>36 anos</td></tr>
<tr><td>Meses</td><td>Anos × 12 + meses extras</td><td>~435 meses</td></tr>
<tr><td>Semanas</td><td>Total de dias ÷ 7</td><td>~1.895 semanas</td></tr>
<tr><td>Dias</td><td>Contar todos os dias do nascimento até hoje</td><td>~13.249 dias</td></tr>
<tr><td>Horas</td><td>Dias × 24</td><td>~317.976 horas</td></tr>
</table>`
      },
      {
        h2: 'Como calcular a idade de alguém nascido em um ano específico',
        body: '',
        table: `<table>
<tr><th>Ano de nascimento</th><th>Idade em 2026 (antes do aniversário)</th><th>Idade em 2026 (após o aniversário)</th></tr>
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
        h2: 'Casos especiais no cálculo de idade',
        body: `<p><strong>Aniversários em 29 de fevereiro:</strong> Pessoas nascidas em 29 de fevereiro geralmente são consideradas um ano mais velhas em 28 de fevereiro em anos não bissextos, ou em 1 de março — dependendo das leis e convenções locais.</p>
<p><strong>Idade em diferentes países:</strong> A maioria dos países conta a idade a partir do nascimento (convenção ocidental). A Coreia do Sul calculava a idade de forma diferente — um bebê nascia com "1 ano" e todos ganhavam um ano em 1 de janeiro — mas a Coreia do Sul adotou oficialmente a convenção internacional em 2023.</p>`
      },
    ],
    faqs: [
      { q: 'Quantos anos tenho se nasci em 1990?', a: 'Se você nasceu em 1990, tem 35 ou 36 anos em 2026, dependendo se seu aniversário já passou. Antes do aniversário: 35. No dia do aniversário ou depois: 36.' },
      { q: 'Quantos anos tenho se nasci em 2000?', a: 'Se você nasceu em 2000, tem 25 ou 26 anos em 2026, dependendo se seu aniversário já passou neste ano.' },
      { q: 'Quantos anos tenho se nasci em 1980?', a: 'Se você nasceu em 1980, tem 45 ou 46 anos em 2026, dependendo se seu aniversário já passou neste ano.' },
      { q: 'Como calcular minha idade em dias?', a: 'Para calcular sua idade em dias, multiplique sua idade em anos por 365,25 (para contabilizar os anos bissextos). Para um contagem exata, use uma calculadora de datas que conta cada dia individual desde sua data de nascimento até hoje.' },
      { q: 'O que é idade cronológica?', a: 'A idade cronológica é a quantidade real de tempo decorrida desde o nascimento, medida em anos (e às vezes meses e dias). É diferente da "idade biológica", que se refere à aparência fisiológica do seu corpo.' },
      { q: 'Como calcular a idade de alguém que faleceu?', a: 'Subtraia o ano de nascimento do ano do falecimento e ajuste se o aniversário ainda não havia ocorrido no ano da morte. Por exemplo, nascido em 10 de março de 1920 — falecido em 5 de janeiro de 1995: 1995 − 1920 = 75, menos 1 porque 5 de janeiro é antes de 10 de março = 74 anos ao falecer.' },
    ],
    pillar: { href: '/pt/calculadora-de-idade/', label: 'Calculadora de idade — calcule instantaneamente' },
    related: [
      { href: '/pt/de-que-geracao-sou/', label: 'De que geração sou?' },
      { href: '/pt/idade-em-meses/', label: 'Idade em meses' },
      { href: '/pt/nascido-em-1990/', label: 'Nascido em 1990' },
    ],
  },
  de: {
    title: 'Wie man sein genaues Alter berechnet — Jahre, Monate, Tage und mehr',
    metaDesc: 'Wie man sein genaues Alter in Jahren, Monaten, Tagen, Wochen und Stunden berechnet. Schritt-für-Schritt mit Beispielen für jedes Geburtsjahr.',
    kicker: 'ALTER-BERECHNUNGS-GUIDE',
    h1: 'Wie man sein genaues Alter berechnet',
    intro: 'Ihr genaues Alter ist die Zeit, die seit Ihrem Geburtsdatum bis heute vergangen ist, ausgedrückt in Jahren, Monaten und Tagen. Zur Berechnung: Subtrahieren Sie Ihr Geburtsjahr vom aktuellen Jahr und passen Sie das Ergebnis an, je nachdem ob Ihr Geburtstag in diesem Jahr bereits stattgefunden hat.',
    sections: [
      {
        h2: 'Schritt für Schritt: Alter in Jahren',
        body: `<p>So berechnen Sie das Alter in vollständigen Jahren:</p>
<ol>
<li>Subtrahieren Sie Ihr Geburtsjahr vom aktuellen Jahr: 2026 − Geburtsjahr = ungefähres Alter</li>
<li>Wenn Ihr Geburtstag in diesem Jahr NOCH NICHT stattgefunden hat, subtrahieren Sie 1</li>
<li>Wenn Ihr Geburtstag in diesem Jahr bereits stattgefunden hat (oder heute ist), behalten Sie das Ergebnis</li>
</ol>
<p><strong>Beispiel 1:</strong> Geboren am 15. September 1990 — heute ist der 10. April 2026<br>
2026 − 1990 = 36. Geburtstag (15. September) hat in 2026 noch nicht stattgefunden. Alter = <strong>35 Jahre</strong>.</p>
<p><strong>Beispiel 2:</strong> Geboren am 5. März 1990 — heute ist der 10. April 2026<br>
2026 − 1990 = 36. Geburtstag (5. März) hat in 2026 bereits stattgefunden. Alter = <strong>36 Jahre</strong>.</p>`
      },
      {
        h2: 'Schritt für Schritt: Alter in Jahren, Monaten und Tagen',
        body: `<p>Für ein genaues Alter einschließlich Monate und Tage:</p>
<ol>
<li>Beginnen Sie mit den vollständigen Jahren (siehe oben)</li>
<li>Zählen Sie vollständige Monate seit Ihrem letzten Geburtstag</li>
<li>Zählen Sie verbleibende Tage seit dem letzten vollständigen Monat</li>
</ol>
<p><strong>Beispiel:</strong> Geboren am 20. Juni 1988 — heute ist der 10. April 2026</p>
<ul>
<li>Vollständige Jahre: 2025 − 1988 = 37 (Geburtstag 20. Juni hat 2026 noch nicht stattgefunden)</li>
<li>Monate seit dem 20. Juni 2025: Juli, August, September, Oktober, November, Dezember, Januar, Februar, März = 9 vollständige Monate</li>
<li>Tage seit dem 20. März: 20. März → 10. April = 21 Tage</li>
<li>Ergebnis: <strong>37 Jahre, 9 Monate, 21 Tage</strong></li>
</ul>`
      },
      {
        h2: 'Alter in anderen Einheiten',
        body: '',
        table: `<table>
<tr><th>Einheit</th><th>Formel</th><th>Beispiel (geboren 1. Jan. 1990 → heute 10. Apr. 2026)</th></tr>
<tr><td>Jahre</td><td>Aktuelles Jahr − Geburtsjahr (angepasst)</td><td>36 Jahre</td></tr>
<tr><td>Monate</td><td>Jahre × 12 + extra Monate</td><td>~435 Monate</td></tr>
<tr><td>Wochen</td><td>Gesamttage ÷ 7</td><td>~1.895 Wochen</td></tr>
<tr><td>Tage</td><td>Alle Tage von Geburt bis heute zählen</td><td>~13.249 Tage</td></tr>
<tr><td>Stunden</td><td>Tage × 24</td><td>~317.976 Stunden</td></tr>
</table>`
      },
      {
        h2: 'Alter berechnen für jemanden aus einem bestimmten Geburtsjahr',
        body: '',
        table: `<table>
<tr><th>Geburtsjahr</th><th>Alter in 2026 (vor dem Geburtstag)</th><th>Alter in 2026 (nach dem Geburtstag)</th></tr>
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
        h2: 'Sonderfälle bei der Altersberechnung',
        body: `<p><strong>Geburtstage am 29. Februar:</strong> Menschen, die am 29. Februar geboren sind, feiern ihren Geburtstag in Nicht-Schaltjahren meist am 28. Februar oder am 1. März — je nach lokalen Gesetzen und Konventionen.</p>
<p><strong>Alter in verschiedenen Ländern:</strong> Die meisten Länder zählen das Alter ab Geburt (westliche Konvention). Südkorea berechnete das Alter traditionell anders — ein Baby wurde als „1 Jahr alt" geboren und alle wurden am 1. Januar ein Jahr älter — aber Südkorea wechselte 2023 offiziell zur internationalen Konvention.</p>`
      },
    ],
    faqs: [
      { q: 'Wie alt bin ich, wenn ich 1990 geboren wurde?', a: 'Wenn Sie 1990 geboren wurden, sind Sie 2026 entweder 35 oder 36 Jahre alt, abhängig davon, ob Ihr Geburtstag bereits stattgefunden hat. Vor dem Geburtstag: 35. Am oder nach dem Geburtstag: 36.' },
      { q: 'Wie alt bin ich, wenn ich 2000 geboren wurde?', a: 'Wenn Sie 2000 geboren wurden, sind Sie 2026 entweder 25 oder 26 Jahre alt, abhängig davon, ob Ihr Geburtstag in diesem Jahr bereits stattgefunden hat.' },
      { q: 'Wie alt bin ich, wenn ich 1980 geboren wurde?', a: 'Wenn Sie 1980 geboren wurden, sind Sie 2026 entweder 45 oder 46 Jahre alt, abhängig davon, ob Ihr Geburtstag in diesem Jahr bereits stattgefunden hat.' },
      { q: 'Wie berechne ich mein Alter in Tagen?', a: 'Um Ihr Alter in Tagen zu berechnen, multiplizieren Sie Ihr Alter in Jahren mit 365,25 (um Schaltjahre zu berücksichtigen). Für eine genaue Zählung nutzen Sie einen Datumsrechner, der jeden einzelnen Tag von Ihrem Geburtsdatum bis heute zählt.' },
      { q: 'Was ist das chronologische Alter?', a: 'Das chronologische Alter ist die tatsächlich seit der Geburt vergangene Zeit, gemessen in Jahren (und manchmal Monaten und Tagen). Es unterscheidet sich vom „biologischen Alter", das sich auf das physiologische Erscheinungsbild des Körpers bezieht.' },
      { q: 'Wie berechne ich das Alter einer verstorbenen Person?', a: 'Subtrahieren Sie das Geburtsjahr vom Todesjahr und passen Sie das Ergebnis an, wenn der Geburtstag im Todesjahr noch nicht stattgefunden hatte. Zum Beispiel: geboren am 10. März 1920 — gestorben am 5. Januar 1995: 1995 − 1920 = 75, minus 1, da der 5. Januar vor dem 10. März liegt = Alter 74 beim Tod.' },
    ],
    pillar: { href: '/de/altersrechner/', label: 'Altersrechner — sofort berechnen' },
    related: [
      { href: '/de/welche-generation-bin-ich/', label: 'Welcher Generation gehöre ich an?' },
      { href: '/de/alter-in-monaten/', label: 'Alter in Monaten' },
      { href: '/de/geboren-1990/', label: 'Geboren 1990' },
    ],
  },
  it: {
    title: 'Come calcolare la tua età esatta — anni, mesi, giorni e altro',
    metaDesc: 'Come calcolare la tua età esatta in anni, mesi, giorni, settimane e ore. Passo dopo passo con esempi per qualsiasi anno di nascita.',
    kicker: 'GUIDA AL CALCOLO ETÀ',
    h1: 'Come calcolare la tua età esatta',
    intro: 'La tua età esatta è il tempo trascorso dalla tua data di nascita a oggi, espresso in anni, mesi e giorni. Per calcolarla: sottrai il tuo anno di nascita dall\'anno corrente e aggiusta il risultato in base al fatto che il tuo compleanno sia già avvenuto quest\'anno.',
    sections: [
      {
        h2: 'Passo dopo passo: l\'età in anni',
        body: `<p>Per calcolare l'età in anni completi:</p>
<ol>
<li>Sottrai il tuo anno di nascita dall'anno corrente: 2026 − anno di nascita = età approssimativa</li>
<li>Se il tuo compleanno NON è ancora avvenuto quest'anno, sottrai 1</li>
<li>Se il tuo compleanno È già avvenuto quest'anno (o è oggi), mantieni il risultato</li>
</ol>
<p><strong>Esempio 1:</strong> Nato il 15 settembre 1990 — oggi è il 10 aprile 2026<br>
2026 − 1990 = 36. Il compleanno (15 settembre) non è ancora avvenuto nel 2026. Età = <strong>35 anni</strong>.</p>
<p><strong>Esempio 2:</strong> Nato il 5 marzo 1990 — oggi è il 10 aprile 2026<br>
2026 − 1990 = 36. Il compleanno (5 marzo) è già avvenuto nel 2026. Età = <strong>36 anni</strong>.</p>`
      },
      {
        h2: 'Passo dopo passo: l\'età in anni, mesi e giorni',
        body: `<p>Per un'età precisa con mesi e giorni:</p>
<ol>
<li>Inizia con gli anni completi (vedi sopra)</li>
<li>Conta i mesi completi dal tuo ultimo compleanno</li>
<li>Conta i giorni rimanenti dall'ultimo mese completo</li>
</ol>
<p><strong>Esempio:</strong> Nato il 20 giugno 1988 — oggi è il 10 aprile 2026</p>
<ul>
<li>Anni completi: 2025 − 1988 = 37 (il compleanno del 20 giugno non è ancora passato nel 2026)</li>
<li>Mesi dal 20 giugno 2025: luglio, agosto, settembre, ottobre, novembre, dicembre, gennaio, febbraio, marzo = 9 mesi completi</li>
<li>Giorni dal 20 marzo: 20 marzo → 10 aprile = 21 giorni</li>
<li>Risultato: <strong>37 anni, 9 mesi, 21 giorni</strong></li>
</ul>`
      },
      {
        h2: 'L\'età in altre unità',
        body: '',
        table: `<table>
<tr><th>Unità</th><th>Formula</th><th>Esempio (nato il 1 gen. 1990 → oggi 10 apr. 2026)</th></tr>
<tr><td>Anni</td><td>Anno corrente − anno di nascita (aggiustato)</td><td>36 anni</td></tr>
<tr><td>Mesi</td><td>Anni × 12 + mesi extra</td><td>~435 mesi</td></tr>
<tr><td>Settimane</td><td>Giorni totali ÷ 7</td><td>~1.895 settimane</td></tr>
<tr><td>Giorni</td><td>Contare tutti i giorni dalla nascita a oggi</td><td>~13.249 giorni</td></tr>
<tr><td>Ore</td><td>Giorni × 24</td><td>~317.976 ore</td></tr>
</table>`
      },
      {
        h2: 'Calcolare l\'età per qualcuno nato in un anno specifico',
        body: '',
        table: `<table>
<tr><th>Anno di nascita</th><th>Età nel 2026 (prima del compleanno)</th><th>Età nel 2026 (dopo il compleanno)</th></tr>
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
        h2: 'Casi particolari nel calcolo dell\'età',
        body: `<p><strong>Compleanni il 29 febbraio:</strong> Le persone nate il 29 febbraio festeggia solitamente il compleanno il 28 febbraio negli anni non bisestili, o il 1 marzo — a seconda delle leggi e convenzioni locali.</p>
<p><strong>L'età nei diversi paesi:</strong> La maggior parte dei paesi conta l'età dalla nascita (convenzione occidentale). La Corea del Sud calcolava l'età in modo diverso — un neonato nasceva con "1 anno" e tutti guadagnavano un anno il 1 gennaio — ma la Corea del Sud ha adottato ufficialmente la convenzione internazionale nel 2023.</p>`
      },
    ],
    faqs: [
      { q: 'Quanti anni ho se sono nato nel 1990?', a: 'Se sei nato nel 1990, hai 35 o 36 anni nel 2026, a seconda che il tuo compleanno sia già passato. Prima del compleanno: 35. Il giorno del compleanno o dopo: 36.' },
      { q: 'Quanti anni ho se sono nato nel 2000?', a: 'Se sei nato nel 2000, hai 25 o 26 anni nel 2026, a seconda che il tuo compleanno sia già passato quest\'anno.' },
      { q: 'Quanti anni ho se sono nato nel 1980?', a: 'Se sei nato nel 1980, hai 45 o 46 anni nel 2026, a seconda che il tuo compleanno sia già passato quest\'anno.' },
      { q: 'Come calcolo la mia età in giorni?', a: 'Per calcolare la tua età in giorni, moltiplica la tua età in anni per 365,25 (per tenere conto degli anni bisestili). Per un conteggio esatto, usa una calcolatrice di date che conta ogni singolo giorno dalla tua data di nascita a oggi.' },
      { q: 'Cos\'è l\'età cronologica?', a: 'L\'età cronologica è la quantità effettiva di tempo trascorso dalla nascita, misurata in anni (e a volte mesi e giorni). È diversa dall\'"età biologica", che si riferisce all\'aspetto fisiologico del corpo.' },
      { q: 'Come calcolo l\'età di qualcuno che è morto?', a: 'Sottrai l\'anno di nascita dall\'anno della morte, poi aggiusta se il compleanno non era ancora avvenuto nell\'anno della morte. Ad esempio, nato il 10 marzo 1920 — morto il 5 gennaio 1995: 1995 − 1920 = 75, meno 1 perché il 5 gennaio è prima del 10 marzo = 74 anni alla morte.' },
    ],
    pillar: { href: '/it/calcolatore-eta/', label: 'Calcolatore di età — calcola istantaneamente' },
    related: [
      { href: '/it/a-che-generazione-appartengo/', label: 'A che generazione appartengo?' },
      { href: '/it/eta-in-mesi/', label: 'Età in mesi' },
      { href: '/it/nato-nel-1990/', label: 'Nato nel 1990' },
    ],
  },
  pl: {
    title: 'Jak obliczyć swój dokładny wiek — lata, miesiące, dni i więcej',
    metaDesc: 'Jak obliczyć swój dokładny wiek w latach, miesiącach, dniach, tygodniach i godzinach. Krok po kroku z przykładami dla każdego roku urodzenia.',
    kicker: 'PRZEWODNIK OBLICZANIA WIEKU',
    h1: 'Jak obliczyć swój dokładny wiek',
    intro: 'Twój dokładny wiek to czas, który upłynął od Twojej daty urodzenia do dziś, wyrażony w latach, miesiącach i dniach. Aby go obliczyć: odejmij swój rok urodzenia od bieżącego roku, a następnie dostosuj wynik w zależności od tego, czy Twoje urodziny już w tym roku minęły.',
    sections: [
      {
        h2: 'Krok po kroku: wiek w latach',
        body: `<p>Aby obliczyć wiek w pełnych latach:</p>
<ol>
<li>Odejmij swój rok urodzenia od bieżącego roku: 2026 − rok urodzenia = przybliżony wiek</li>
<li>Jeśli Twoje urodziny JESZCZE NIE nastąpiły w tym roku, odejmij 1</li>
<li>Jeśli Twoje urodziny JUŻ nastąpiły w tym roku (lub są dzisiaj), zachowaj wynik</li>
</ol>
<p><strong>Przykład 1:</strong> Urodzony 15 września 1990 — dziś jest 10 kwietnia 2026<br>
2026 − 1990 = 36. Urodziny (15 września) jeszcze nie nastąpiły w 2026. Wiek = <strong>35 lat</strong>.</p>
<p><strong>Przykład 2:</strong> Urodzony 5 marca 1990 — dziś jest 10 kwietnia 2026<br>
2026 − 1990 = 36. Urodziny (5 marca) już nastąpiły w 2026. Wiek = <strong>36 lat</strong>.</p>`
      },
      {
        h2: 'Krok po kroku: wiek w latach, miesiącach i dniach',
        body: `<p>Dla precyzyjnego wieku obejmującego miesiące i dni:</p>
<ol>
<li>Zacznij od pełnych lat (patrz wyżej)</li>
<li>Policz pełne miesiące od ostatnich urodzin</li>
<li>Policz pozostałe dni od ostatniego pełnego miesiąca</li>
</ol>
<p><strong>Przykład:</strong> Urodzony 20 czerwca 1988 — dziś jest 10 kwietnia 2026</p>
<ul>
<li>Pełne lata: 2025 − 1988 = 37 (urodziny 20 czerwca jeszcze nie minęły w 2026)</li>
<li>Miesiące od 20 czerwca 2025: lipiec, sierpień, wrzesień, październik, listopad, grudzień, styczeń, luty, marzec = 9 pełnych miesięcy</li>
<li>Dni od 20 marca: 20 marca → 10 kwietnia = 21 dni</li>
<li>Wynik: <strong>37 lat, 9 miesięcy, 21 dni</strong></li>
</ul>`
      },
      {
        h2: 'Wiek w innych jednostkach',
        body: '',
        table: `<table>
<tr><th>Jednostka</th><th>Wzór</th><th>Przykład (urodzony 1 sty. 1990 → dziś 10 kwi. 2026)</th></tr>
<tr><td>Lata</td><td>Bieżący rok − rok urodzenia (dostosowany)</td><td>36 lat</td></tr>
<tr><td>Miesiące</td><td>Lata × 12 + dodatkowe miesiące</td><td>~435 miesięcy</td></tr>
<tr><td>Tygodnie</td><td>Łączna liczba dni ÷ 7</td><td>~1895 tygodni</td></tr>
<tr><td>Dni</td><td>Policz wszystkie dni od urodzenia do dziś</td><td>~13 249 dni</td></tr>
<tr><td>Godziny</td><td>Dni × 24</td><td>~317 976 godzin</td></tr>
</table>`
      },
      {
        h2: 'Obliczanie wieku osoby urodzonej w konkretnym roku',
        body: '',
        table: `<table>
<tr><th>Rok urodzenia</th><th>Wiek w 2026 (przed urodzinami)</th><th>Wiek w 2026 (po urodzinach)</th></tr>
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
        h2: 'Szczególne przypadki obliczania wieku',
        body: `<p><strong>Urodziny 29 lutego:</strong> Osoby urodzone 29 lutego oficjalnie obchodzą urodziny 28 lutego w latach nieprzestępnych lub 1 marca — w zależności od lokalnych przepisów i konwencji.</p>
<p><strong>Wiek w różnych krajach:</strong> Większość krajów liczy wiek od urodzenia (konwencja zachodnia). Korea Południowa tradycyjnie liczyła wiek inaczej — dziecko rodziło się jako „1-roczne", a wszyscy zyskiwali rok 1 stycznia — ale Korea Południowa oficjalnie przyjęła konwencję międzynarodową w 2023 roku.</p>`
      },
    ],
    faqs: [
      { q: 'Ile mam lat, jeśli urodziłem się w 1990 roku?', a: 'Jeśli urodziłeś się w 1990 roku, masz 35 lub 36 lat w 2026, w zależności od tego, czy Twoje urodziny już minęły. Przed urodzinami: 35. W dniu urodzin lub po: 36.' },
      { q: 'Ile mam lat, jeśli urodziłem się w 2000 roku?', a: 'Jeśli urodziłeś się w 2000 roku, masz 25 lub 26 lat w 2026, w zależności od tego, czy Twoje urodziny już minęły w tym roku.' },
      { q: 'Ile mam lat, jeśli urodziłem się w 1980 roku?', a: 'Jeśli urodziłeś się w 1980 roku, masz 45 lub 46 lat w 2026, w zależności od tego, czy Twoje urodziny już minęły w tym roku.' },
      { q: 'Jak obliczyć swój wiek w dniach?', a: 'Aby obliczyć swój wiek w dniach, pomnóż wiek w latach przez 365,25 (aby uwzględnić lata przestępne). Dla dokładnej liczby użyj kalkulatora dat, który liczy każdy dzień od daty urodzenia do dziś.' },
      { q: 'Co to jest wiek chronologiczny?', a: 'Wiek chronologiczny to rzeczywista ilość czasu, który upłynął od urodzenia, mierzona w latach (a czasem miesiącach i dniach). Różni się od „wieku biologicznego", który odnosi się do fizjologicznego wyglądu ciała.' },
      { q: 'Jak obliczyć wiek osoby, która zmarła?', a: 'Odejmij rok urodzenia od roku śmierci i dostosuj wynik, jeśli urodziny nie nastąpiły jeszcze w roku śmierci. Na przykład: urodzony 10 marca 1920 — zmarły 5 stycznia 1995: 1995 − 1920 = 75, minus 1 bo 5 stycznia jest przed 10 marca = wiek 74 lata w chwili śmierci.' },
    ],
    pillar: { href: '/pl/kalkulator-wieku/', label: 'Kalkulator wieku — oblicz natychmiast' },
    related: [
      { href: '/pl/do-jakiego-pokolenia-naleze/', label: 'Do jakiego pokolenia należę?' },
      { href: '/pl/wiek-w-miesiacach/', label: 'Wiek w miesiącach' },
      { href: '/pl/urodzony-w-1990/', label: 'Urodzony w 1990' },
    ],
  },
  ja: {
    title: '正確な年齢を計算する方法 — 年、月、日など',
    metaDesc: '正確な年齢を年、月、日、週、時間で計算する方法。どの生まれ年にも対応した、例付きのステップバイステップガイド。',
    kicker: 'NENREI KEISAN GUIDE',
    h1: '正確な年齢を計算する方法',
    intro: '正確な年齢とは、生年月日から今日までに経過した時間を年・月・日で表したものです。計算方法：現在の年から生まれ年を引き、今年の誕生日が既に過ぎているかどうかで調整します。',
    sections: [
      {
        h2: 'ステップバイステップ：年齢（年単位）',
        body: `<p>年単位での年齢の計算方法：</p>
<ol>
<li>現在の年から生まれ年を引く：2026 − 生まれ年 = おおよその年齢</li>
<li>今年の誕生日がまだ来ていない場合は1を引く</li>
<li>今年の誕生日が既に過ぎている（または今日が誕生日）の場合はそのまま</li>
</ol>
<p><strong>例1：</strong> 1990年9月15日生まれ — 今日は2026年4月10日<br>
2026 − 1990 = 36。誕生日（9月15日）は2026年にまだ来ていない。年齢 = <strong>35歳</strong>。</p>
<p><strong>例2：</strong> 1990年3月5日生まれ — 今日は2026年4月10日<br>
2026 − 1990 = 36。誕生日（3月5日）は2026年に既に過ぎた。年齢 = <strong>36歳</strong>。</p>`
      },
      {
        h2: 'ステップバイステップ：年齢（年・月・日単位）',
        body: `<p>月や日を含む精密な年齢の求め方：</p>
<ol>
<li>まず完全な年数を出す（上記参照）</li>
<li>直近の誕生日から何ヶ月経ったか数える</li>
<li>最後の完全な月から残り何日か数える</li>
</ol>
<p><strong>例：</strong> 1988年6月20日生まれ — 今日は2026年4月10日</p>
<ul>
<li>完全な年数：2025 − 1988 = 37（2026年の6月20日の誕生日はまだ来ていない）</li>
<li>2025年6月20日以降の月数：7月、8月、9月、10月、11月、12月、1月、2月、3月 = 9ヶ月</li>
<li>3月20日以降の日数：3月20日 → 4月10日 = 21日</li>
<li>結果：<strong>37年9ヶ月21日</strong></li>
</ul>`
      },
      {
        h2: '他の単位での年齢',
        body: '',
        table: `<table>
<tr><th>単位</th><th>計算式</th><th>例（1990年1月1日生まれ → 今日2026年4月10日）</th></tr>
<tr><td>年</td><td>現在の年 − 生まれ年（調整済み）</td><td>36歳</td></tr>
<tr><td>月</td><td>年 × 12 + 追加月数</td><td>約435ヶ月</td></tr>
<tr><td>週</td><td>総日数 ÷ 7</td><td>約1,895週</td></tr>
<tr><td>日</td><td>生まれてから今日まで全日数を数える</td><td>約13,249日</td></tr>
<tr><td>時間</td><td>日数 × 24</td><td>約317,976時間</td></tr>
</table>`
      },
      {
        h2: '特定の生まれ年の人の年齢を計算する',
        body: '',
        table: `<table>
<tr><th>生まれ年</th><th>2026年の年齢（誕生日前）</th><th>2026年の年齢（誕生日後）</th></tr>
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
        h2: '年齢計算の特殊なケース',
        body: `<p><strong>2月29日生まれの場合：</strong> 2月29日生まれの人は、うるう年でない年には2月28日または3月1日に誕生日を祝うとされています — 地元の法律や慣習によって異なります。</p>
<p><strong>各国での年齢計算：</strong> ほとんどの国は出生から年齢を数えます（西洋の慣習）。韓国では伝統的に異なる方法で年齢を計算していました — 赤ちゃんは「1歳」として生まれ、全員が1月1日に1歳加算されました — しかし韓国は2023年に正式に国際的な慣習を採用しました。</p>`
      },
    ],
    faqs: [
      { q: '1990年生まれは何歳ですか？', a: '1990年生まれの方は、2026年に35歳か36歳です。誕生日前であれば35歳、誕生日当日または後であれば36歳です。' },
      { q: '2000年生まれは何歳ですか？', a: '2000年生まれの方は、2026年に25歳か26歳です。今年の誕生日が過ぎているかどうかによります。' },
      { q: '1980年生まれは何歳ですか？', a: '1980年生まれの方は、2026年に45歳か46歳です。今年の誕生日が過ぎているかどうかによります。' },
      { q: '年齢を日数で計算するには？', a: '年齢を日数で計算するには、年齢を365.25倍します（うるう年を考慮）。正確な日数を求めるには、生年月日から今日まで毎日を数える日付計算ツールを使ってください。' },
      { q: '暦年齢とは何ですか？', a: '暦年齢（れきねんれい）とは、誕生から実際に経過した時間を年単位（時に月・日も含む）で表したものです。「生物学的年齢」（体の生理的な見た目上の年齢）とは異なります。' },
      { q: '亡くなった方の年齢を計算するには？', a: '死亡年から生まれ年を引き、死亡した年の誕生日が来ていなければ1を引きます。例：1920年3月10日生まれ — 1995年1月5日死亡：1995 − 1920 = 75、1月5日は3月10日より前なので1を引いて = 享年74歳。' },
    ],
    pillar: { href: '/ja/nenrei-keisanki/', label: '年齢計算機 — 即時計算' },
    related: [
      { href: '/ja/watashi-wa-donna-sedai/', label: '私は何世代？' },
      { href: '/ja/tsuki-de-mita-nenrei/', label: '月齢' },
      { href: '/ja/1990-nen-umare/', label: '1990年生まれ' },
    ],
  },
  ko: {
    title: '정확한 나이를 계산하는 방법 — 년, 월, 일 등',
    metaDesc: '년, 월, 일, 주, 시간 단위로 정확한 나이를 계산하는 방법. 모든 출생 연도에 대한 예제와 함께 단계별 안내.',
    kicker: 'NA YI GYESAN GUIDE',
    h1: '정확한 나이를 계산하는 방법',
    intro: '정확한 나이란 생년월일부터 오늘까지 경과한 시간을 년, 월, 일로 표현한 것입니다. 계산 방법: 현재 연도에서 태어난 연도를 빼고, 올해 생일이 지났는지 여부에 따라 조정합니다.',
    sections: [
      {
        h2: '단계별: 연 단위 나이',
        body: `<p>만 나이(연 단위)를 계산하는 방법:</p>
<ol>
<li>현재 연도에서 태어난 연도를 뺍니다: 2026 − 출생 연도 = 대략적인 나이</li>
<li>올해 생일이 아직 지나지 않았다면 1을 뺍니다</li>
<li>올해 생일이 이미 지났거나 오늘이 생일이라면 그대로 유지합니다</li>
</ol>
<p><strong>예시 1:</strong> 1990년 9월 15일 출생 — 오늘은 2026년 4월 10일<br>
2026 − 1990 = 36. 생일(9월 15일)이 2026년에 아직 지나지 않았습니다. 나이 = <strong>35세</strong>.</p>
<p><strong>예시 2:</strong> 1990년 3월 5일 출생 — 오늘은 2026년 4월 10일<br>
2026 − 1990 = 36. 생일(3월 5일)이 2026년에 이미 지났습니다. 나이 = <strong>36세</strong>.</p>`
      },
      {
        h2: '단계별: 년, 월, 일 단위 나이',
        body: `<p>월과 일을 포함한 정확한 나이 계산:</p>
<ol>
<li>완전한 연도 수부터 시작합니다(위 참조)</li>
<li>마지막 생일 이후 완전한 월 수를 셉니다</li>
<li>마지막 완전한 달 이후 남은 일수를 셉니다</li>
</ol>
<p><strong>예시:</strong> 1988년 6월 20일 출생 — 오늘은 2026년 4월 10일</p>
<ul>
<li>완전한 년수: 2025 − 1988 = 37 (2026년 6월 20일 생일이 아직 지나지 않음)</li>
<li>2025년 6월 20일 이후 월수: 7월, 8월, 9월, 10월, 11월, 12월, 1월, 2월, 3월 = 9개월</li>
<li>3월 20일 이후 일수: 3월 20일 → 4월 10일 = 21일</li>
<li>결과: <strong>37년 9개월 21일</strong></li>
</ul>`
      },
      {
        h2: '다른 단위로 표현한 나이',
        body: '',
        table: `<table>
<tr><th>단위</th><th>공식</th><th>예시 (1990년 1월 1일 출생 → 오늘 2026년 4월 10일)</th></tr>
<tr><td>년</td><td>현재 연도 − 출생 연도 (조정됨)</td><td>36세</td></tr>
<tr><td>월</td><td>년 × 12 + 추가 월</td><td>약 435개월</td></tr>
<tr><td>주</td><td>총 일수 ÷ 7</td><td>약 1,895주</td></tr>
<tr><td>일</td><td>출생부터 오늘까지 모든 날 합산</td><td>약 13,249일</td></tr>
<tr><td>시간</td><td>일수 × 24</td><td>약 317,976시간</td></tr>
</table>`
      },
      {
        h2: '특정 출생 연도의 나이 계산',
        body: '',
        table: `<table>
<tr><th>출생 연도</th><th>2026년 나이 (생일 전)</th><th>2026년 나이 (생일 후)</th></tr>
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
        h2: '나이 계산의 특수 사례',
        body: `<p><strong>2월 29일 생일:</strong> 2월 29일에 태어난 사람은 윤년이 아닌 해에는 보통 2월 28일 또는 3월 1일을 생일로 봅니다 — 지역 법률 및 관습에 따라 다릅니다.</p>
<p><strong>국가별 나이 계산:</strong> 대부분의 나라는 출생 시점부터 나이를 셉니다(서양식 관습). 한국은 전통적으로 다른 방식으로 나이를 계산했습니다 — 태어날 때부터 1살이고, 모두가 1월 1일에 한 살씩 더 먹었습니다 — 하지만 한국은 2023년에 공식적으로 국제 관습을 채택했습니다.</p>`
      },
    ],
    faqs: [
      { q: '1990년생은 몇 살입니까?', a: '1990년에 태어났다면 2026년 기준 35세 또는 36세입니다. 생일 전이면 35세, 생일 당일 또는 후면 36세입니다.' },
      { q: '2000년생은 몇 살입니까?', a: '2000년에 태어났다면 2026년 기준 25세 또는 26세입니다. 올해 생일이 지났는지 여부에 따라 다릅니다.' },
      { q: '1980년생은 몇 살입니까?', a: '1980년에 태어났다면 2026년 기준 45세 또는 46세입니다. 올해 생일이 지났는지 여부에 따라 다릅니다.' },
      { q: '나이를 일수로 계산하려면 어떻게 합니까?', a: '나이를 일수로 계산하려면 나이(년)에 365.25를 곱합니다(윤년 반영). 정확한 일수를 구하려면 생년월일부터 오늘까지 매일을 세는 날짜 계산기를 사용하세요.' },
      { q: '역연령이란 무엇입니까?', a: '역연령(曆年齡)이란 출생 이후 실제로 경과한 시간을 년 단위(때로는 월, 일 포함)로 나타낸 것입니다. 신체의 생리적 상태를 나타내는 "생물학적 나이"와는 다릅니다.' },
      { q: '사망한 사람의 나이를 계산하려면 어떻게 합니까?', a: '사망 연도에서 출생 연도를 빼고, 사망 연도에 생일이 아직 지나지 않았다면 1을 뺍니다. 예: 1920년 3월 10일 출생 — 1995년 1월 5일 사망: 1995 − 1920 = 75, 1월 5일은 3월 10일 이전이므로 1을 빼면 = 향년 74세.' },
    ],
    pillar: { href: '/ko/na-yi-gyesan-gi/', label: '나이 계산기 — 즉시 계산' },
    related: [
      { href: '/ko/na-neun-eotteon-sedae/', label: '나는 어떤 세대?' },
      { href: '/ko/wol-dan-wi-na-yi/', label: '월 단위 나이' },
      { href: '/ko/1990-nyeon-saeng/', label: '1990년생' },
    ],
  },
  nl: {
    title: 'Hoe je exacte leeftijd te berekenen — jaren, maanden, dagen en meer',
    metaDesc: 'Hoe je exacte leeftijd in jaren, maanden, dagen, weken en uren te berekenen. Stap voor stap met uitgewerkte voorbeelden voor elk geboortejaar.',
    kicker: 'LEEFTIJD BEREKENINGS GIDS',
    h1: 'Hoe je exacte leeftijd te berekenen',
    intro: 'Je exacte leeftijd is de tijd die verstreken is van je geboortedatum tot vandaag, uitgedrukt in jaren, maanden en dagen. Om te berekenen: trek je geboortejaar af van het huidige jaar en pas het aan afhankelijk of je verjaardag dit jaar al geweest is.',
    sections: [
      {
        h2: 'Stap voor stap: leeftijd in jaren',
        body: `<p>Leeftijd in volledige jaren berekenen:</p>
<ol>
<li>Trek je geboortejaar af van het huidige jaar: 2026 − geboortejaar = geschatte leeftijd</li>
<li>Als je verjaardag dit jaar NOG NIET geweest is, trek dan 1 af</li>
<li>Als je verjaardag dit jaar AL geweest is (of vandaag is), behoud het resultaat</li>
</ol>
<p><strong>Voorbeeld 1:</strong> Geboren op 15 september 1990 — vandaag is 10 april 2026<br>
2026 − 1990 = 36. Verjaardag (15 september) is in 2026 nog niet geweest. Leeftijd = <strong>35 jaar</strong>.</p>
<p><strong>Voorbeeld 2:</strong> Geboren op 5 maart 1990 — vandaag is 10 april 2026<br>
2026 − 1990 = 36. Verjaardag (5 maart) is in 2026 al geweest. Leeftijd = <strong>36 jaar</strong>.</p>`
      },
      {
        h2: 'Stap voor stap: leeftijd in jaren, maanden en dagen',
        body: `<p>Voor een exacte leeftijd inclusief maanden en dagen:</p>
<ol>
<li>Begin met de volledige jaren (zie boven)</li>
<li>Tel de volledige maanden na je laatste verjaardag</li>
<li>Tel de resterende dagen na de laatste volledige maand</li>
</ol>
<p><strong>Voorbeeld:</strong> Geboren op 20 juni 1988 — vandaag is 10 april 2026</p>
<ul>
<li>Volledige jaren: 2025 − 1988 = 37 (verjaardag 20 juni is in 2026 nog niet geweest)</li>
<li>Maanden na 20 juni 2025: juli, augustus, september, oktober, november, december, januari, februari, maart = 9 volledige maanden</li>
<li>Dagen na 20 maart: 20 maart → 10 april = 21 dagen</li>
<li>Resultaat: <strong>37 jaar, 9 maanden, 21 dagen</strong></li>
</ul>`
      },
      {
        h2: 'Leeftijd in andere eenheden',
        body: '',
        table: `<table>
<tr><th>Eenheid</th><th>Formule</th><th>Voorbeeld (geboren 1 jan. 1990 → vandaag 10 apr. 2026)</th></tr>
<tr><td>Jaren</td><td>Huidig jaar − geboortejaar (aangepast)</td><td>36 jaar</td></tr>
<tr><td>Maanden</td><td>Jaren × 12 + extra maanden</td><td>~435 maanden</td></tr>
<tr><td>Weken</td><td>Totaal aantal dagen ÷ 7</td><td>~1.895 weken</td></tr>
<tr><td>Dagen</td><td>Alle dagen van geboorte tot vandaag tellen</td><td>~13.249 dagen</td></tr>
<tr><td>Uren</td><td>Dagen × 24</td><td>~317.976 uur</td></tr>
</table>`
      },
      {
        h2: 'Leeftijd berekenen voor iemand geboren in een specifiek jaar',
        body: '',
        table: `<table>
<tr><th>Geboortejaar</th><th>Leeftijd in 2026 (voor verjaardag)</th><th>Leeftijd in 2026 (na verjaardag)</th></tr>
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
        h2: 'Bijzondere gevallen bij leeftijdsberekening',
        body: `<p><strong>Verjaardagen op 29 februari:</strong> Mensen geboren op 29 februari vieren hun verjaardag in niet-schrikkeljaren doorgaans op 28 februari of 1 maart — afhankelijk van lokale wetten en conventies.</p>
<p><strong>Leeftijd in verschillende landen:</strong> De meeste landen tellen de leeftijd vanaf de geboorte (westerse conventie). Zuid-Korea berekende leeftijd traditioneel anders — een baby werd geboren als "1 jaar oud" en iedereen werd een jaar ouder op 1 januari — maar Zuid-Korea stapte in 2023 officieel over op de internationale conventie.</p>`
      },
    ],
    faqs: [
      { q: 'Hoe oud ben ik als ik geboren ben in 1990?', a: 'Als u geboren bent in 1990, bent u in 2026 35 of 36 jaar oud, afhankelijk van of uw verjaardag al geweest is. Voor uw verjaardag: 35. Op of na uw verjaardag: 36.' },
      { q: 'Hoe oud ben ik als ik geboren ben in 2000?', a: 'Als u geboren bent in 2000, bent u in 2026 25 of 26 jaar oud, afhankelijk van of uw verjaardag dit jaar al geweest is.' },
      { q: 'Hoe oud ben ik als ik geboren ben in 1980?', a: 'Als u geboren bent in 1980, bent u in 2026 45 of 46 jaar oud, afhankelijk van of uw verjaardag dit jaar al geweest is.' },
      { q: 'Hoe bereken ik mijn leeftijd in dagen?', a: 'Om uw leeftijd in dagen te berekenen, vermenigvuldig uw leeftijd in jaren met 365,25 (om rekening te houden met schrikkeljaren). Voor een exacte telling gebruikt u een datumcalculator die elke dag vanaf uw geboortedatum tot vandaag telt.' },
      { q: 'Wat is de chronologische leeftijd?', a: 'De chronologische leeftijd is de werkelijke hoeveelheid tijd die sinds de geboorte is verstreken, gemeten in jaren (en soms maanden en dagen). Dit verschilt van de "biologische leeftijd", die verwijst naar hoe oud het lichaam er fysiologisch uitziet.' },
      { q: 'Hoe bereken ik de leeftijd van iemand die is gestorven?', a: 'Trek het geboortejaar af van het sterfjaar en pas het aan als de verjaardag in het sterfjaar nog niet had plaatsgevonden. Bijvoorbeeld: geboren op 10 maart 1920 — gestorven op 5 januari 1995: 1995 − 1920 = 75, min 1 omdat 5 januari vóór 10 maart ligt = leeftijd 74 bij overlijden.' },
    ],
    pillar: { href: '/nl/leeftijdscalculator/', label: 'Leeftijdscalculator — bereken direct' },
    related: [
      { href: '/nl/welke-generatie-ben-ik/', label: 'Welke generatie ben ik?' },
      { href: '/nl/leeftijd-in-maanden/', label: 'Leeftijd in maanden' },
      { href: '/nl/geboren-in-1990/', label: 'Geboren in 1990' },
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
  pt: {
    title: 'Perguntas frequentes sobre data e hora — 15 perguntas respondidas',
    metaDesc: 'Respostas às perguntas mais frequentes sobre cálculos de datas e horas: anos bissextos, dias do mês, números de semana, cálculos de idade, fusos horários e mais.',
    kicker: 'FAQ DATA E HORA',
    h1: 'Perguntas frequentes sobre data e hora — Respostas às perguntas comuns',
    intro: 'Aqui estão respostas diretas às perguntas mais frequentes sobre datas, horas, idades e cálculos de calendário.',
    sections: [
      {
        h2: 'Perguntas sobre o calendário',
        body: `<dl>
<dt><strong>Quantos dias há em um ano?</strong></dt>
<dd>Um ano regular tem <strong>365 dias</strong>. Um ano bissexto tem <strong>366 dias</strong>. A média é de 365,25 dias por ano, por isso adicionamos um dia bissexto a cada 4 anos.</dd>

<dt><strong>Quantas semanas há em um ano?</strong></dt>
<dd>Um ano regular tem <strong>52 semanas e 1 dia</strong>. Um ano bissexto tem <strong>52 semanas e 2 dias</strong>. Alguns anos têm 53 semanas ISO quando o 1 de janeiro cai numa quinta-feira.</dd>

<dt><strong>Quantos dias há em cada mês?</strong></dt>
<dd>Janeiro: 31 · Fevereiro: 28 (29 em ano bissexto) · Março: 31 · Abril: 30 · Maio: 31 · Junho: 30 · Julho: 31 · Agosto: 31 · Setembro: 30 · Outubro: 31 · Novembro: 30 · Dezembro: 31</dd>

<dt><strong>O que é um ano bissexto?</strong></dt>
<dd>Um ano bissexto é um ano divisível por 4 — exceto os anos seculares, que devem ser divisíveis por 400. Assim, 2000 foi ano bissexto, mas 1900 não foi. O próximo ano bissexto após 2024 é <strong>2028</strong>.</dd>

<dt><strong>O que é o número de semana ISO?</strong></dt>
<dd>O número de semana ISO é um padrão (ISO 8601) que numera as semanas do ano de 1 a 52 ou 53. A semana 1 é definida como aquela que contém a primeira quinta-feira do ano. Segunda-feira é o primeiro dia da semana ISO.</dd>
</dl>`
      },
      {
        h2: 'Perguntas sobre cálculo de idade',
        body: `<dl>
<dt><strong>Como calcular minha idade?</strong></dt>
<dd>Subtraia seu ano de nascimento do ano atual. Se seu aniversário ainda não ocorreu neste ano, subtraia 1. Exemplo: nascido em 1990, ano atual 2026, aniversário ainda não passou → idade = 35.</dd>

<dt><strong>Quantos anos tem alguém nascido em 1990?</strong></dt>
<dd>Alguém nascido em 1990 tem <strong>35 ou 36 anos em 2026</strong>, dependendo se seu aniversário já passou.</dd>

<dt><strong>Quantos anos tem alguém nascido em 2000?</strong></dt>
<dd>Alguém nascido em 2000 tem <strong>25 ou 26 anos em 2026</strong>, dependendo se seu aniversário já passou.</dd>

<dt><strong>Qual é a diferença entre calculadora de idade e calculadora de idade cronológica?</strong></dt>
<dd>Uma calculadora de idade computa quantos anos você tem desde sua data de nascimento até hoje. Uma calculadora de idade cronológica faz o mesmo, mas é especificamente usada em contextos médicos ou educacionais para medir o tempo decorrido com precisão (geralmente em anos, meses e dias) em avaliações de desenvolvimento.</dd>
</dl>`
      },
      {
        h2: 'Perguntas sobre dias e dias úteis',
        body: `<dl>
<dt><strong>Qual é a diferença entre dias corridos e dias úteis?</strong></dt>
<dd>Dias corridos contam todos os 7 dias da semana. Dias úteis (também chamados dias de trabalho) contam apenas de segunda a sexta-feira, excluindo feriados. Um prazo de 5 dias úteis a partir de segunda-feira vence na sexta; um prazo de 5 dias corridos a partir de segunda-feira vence no sábado.</dd>

<dt><strong>Quantos dias úteis há em um mês?</strong></dt>
<dd>A maioria dos meses tem <strong>20 a 23 dias úteis</strong>, dependendo do mês e de quantos fins de semana ele contém. Fevereiro tem menos (18 a 20); os meses com 31 dias que começam na segunda ou terça-feira têm mais (23).</dd>

<dt><strong>Quantos dias faltam para o Natal?</strong></dt>
<dd>O Natal é em 25 de dezembro. O número de dias depende da data de hoje — use a calculadora de contagem regressiva neste site para uma contagem exata.</dd>
</dl>`
      },
      {
        h2: 'Perguntas sobre fusos horários',
        body: `<dl>
<dt><strong>O que é UTC?</strong></dt>
<dd>UTC (Tempo Universal Coordenado) é o principal padrão de tempo do mundo. Não observa o horário de verão. Todos os outros fusos horários são expressos como deslocamentos em relação ao UTC (ex.: UTC+1, UTC−5).</dd>

<dt><strong>Qual é a diferença entre GMT e UTC?</strong></dt>
<dd>Para uso cotidiano, GMT e UTC são a mesma coisa. GMT (Greenwich Mean Time) é um fuso horário; UTC é um padrão de tempo. Eles compartilham o mesmo horário atual, mas o UTC é o padrão científico preciso usado para a medição oficial do tempo.</dd>

<dt><strong>Quantos fusos horários existem?</strong></dt>
<dd>Existem <strong>38 deslocamentos UTC padrão</strong>, variando de UTC−12:00 a UTC+14:00. Alguns países abrangem múltiplos fusos horários — a Rússia tem 11, os EUA têm 6 (excluindo territórios) e a França tem 12 (incluindo territórios ultramarinos).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: 'Quantos dias há em um ano?', a: 'Um ano regular tem 365 dias. Um ano bissexto tem 366 dias. O calendário tem em média 365,25 dias por ano, o que é corrigido adicionando um dia bissexto (29 de fevereiro) a cada 4 anos.' },
      { q: 'Quantas semanas há em um ano?', a: 'Um ano regular tem 52 semanas e 1 dia extra. Um ano bissexto tem 52 semanas e 2 dias extras. Na numeração ISO de semanas, alguns anos têm 53 semanas completas.' },
      { q: 'Qual é o número da semana atual?', a: 'O número da semana ISO atual muda toda segunda-feira. Use a calculadora de número de semana neste site para ver o número da semana de hoje para qualquer ano.' },
      { q: 'Como converter dias em meses?', a: 'Divida o número de dias por 30,44 (a média de dias por mês) para um resultado aproximado. Para uma conversão exata, use uma calculadora de datas que leva em conta a duração real de cada mês.' },
    ],
    pillar: { href: '/pt/calculadora-de-datas/', label: 'Calculadora de datas' },
    related: [
      { href: '/pt/como-calcular-dias-entre-duas-datas/', label: 'Como calcular os dias entre duas datas' },
      { href: '/pt/como-calcular-idade-exata/', label: 'Como calcular sua idade exata' },
      { href: '/pt/sistemas-de-calendario-do-mundo/', label: 'Sistemas de calendário do mundo' },
    ],
  },
  de: {
    title: 'Datum & Uhrzeit FAQ — 15 häufige Fragen beantwortet',
    metaDesc: 'Antworten auf die häufigsten Fragen zu Datum- und Zeitberechnungen: Schaltjahre, Tage pro Monat, Wochennummern, Altersberechnungen, Zeitzonen und mehr.',
    kicker: 'DATUM & UHRZEIT FAQ',
    h1: 'Datum & Uhrzeit FAQ — Häufige Fragen beantwortet',
    intro: 'Hier finden Sie direkte Antworten auf die am häufigsten gestellten Fragen zu Daten, Uhrzeiten, Alter und Kalenderberechnungen.',
    sections: [
      {
        h2: 'Kalenderfragen',
        body: `<dl>
<dt><strong>Wie viele Tage hat ein Jahr?</strong></dt>
<dd>Ein reguläres Jahr hat <strong>365 Tage</strong>. Ein Schaltjahr hat <strong>366 Tage</strong>. Das durchschnittliche Jahr hat 365,25 Tage, weshalb wir alle 4 Jahre einen Schalttag hinzufügen.</dd>

<dt><strong>Wie viele Wochen hat ein Jahr?</strong></dt>
<dd>Ein reguläres Jahr hat <strong>52 Wochen und 1 Tag</strong>. Ein Schaltjahr hat <strong>52 Wochen und 2 Tage</strong>. Manche Jahre haben 53 ISO-Kalenderwochen, wenn der 1. Januar auf einen Donnerstag fällt.</dd>

<dt><strong>Wie viele Tage hat jeder Monat?</strong></dt>
<dd>Januar: 31 · Februar: 28 (29 im Schaltjahr) · März: 31 · April: 30 · Mai: 31 · Juni: 30 · Juli: 31 · August: 31 · September: 30 · Oktober: 31 · November: 30 · Dezember: 31</dd>

<dt><strong>Was ist ein Schaltjahr?</strong></dt>
<dd>Ein Schaltjahr ist ein Jahr, das durch 4 teilbar ist — mit Ausnahme von Jahrhundertjahren, die durch 400 teilbar sein müssen. So war 2000 ein Schaltjahr, aber 1900 nicht. Das nächste Schaltjahr nach 2024 ist <strong>2028</strong>.</dd>

<dt><strong>Was ist die ISO-Wochennummer?</strong></dt>
<dd>Die ISO-Wochennummer ist ein Standard (ISO 8601), der die Wochen des Jahres von 1 bis 52 oder 53 nummeriert. Woche 1 ist die Woche, die den ersten Donnerstag des Jahres enthält. Montag ist der erste Tag der ISO-Woche.</dd>
</dl>`
      },
      {
        h2: 'Fragen zur Altersberechnung',
        body: `<dl>
<dt><strong>Wie berechne ich mein Alter?</strong></dt>
<dd>Subtrahieren Sie Ihr Geburtsjahr vom aktuellen Jahr. Wenn Ihr Geburtstag in diesem Jahr noch nicht stattgefunden hat, subtrahieren Sie 1. Beispiel: geboren 1990, aktuelles Jahr 2026, Geburtstag noch nicht gewesen → Alter = 35.</dd>

<dt><strong>Wie alt ist jemand, der 1990 geboren wurde?</strong></dt>
<dd>Jemand, der 1990 geboren wurde, ist <strong>35 oder 36 Jahre alt im Jahr 2026</strong>, je nachdem ob der Geburtstag bereits stattgefunden hat.</dd>

<dt><strong>Wie alt ist jemand, der 2000 geboren wurde?</strong></dt>
<dd>Jemand, der 2000 geboren wurde, ist <strong>25 oder 26 Jahre alt im Jahr 2026</strong>, je nachdem ob der Geburtstag bereits stattgefunden hat.</dd>

<dt><strong>Was ist der Unterschied zwischen Altersrechner und chronologischem Altersrechner?</strong></dt>
<dd>Ein Altersrechner berechnet, wie alt Sie von Ihrem Geburtsdatum bis heute sind. Ein chronologischer Altersrechner tut dasselbe, wird aber speziell in medizinischen oder pädagogischen Kontexten verwendet, um die genaue verstrichene Zeit (oft in Jahren, Monaten und Tagen) bei Entwicklungsbeurteilungen zu messen.</dd>
</dl>`
      },
      {
        h2: 'Fragen zu Tagen und Arbeitstagen',
        body: `<dl>
<dt><strong>Was ist der Unterschied zwischen Kalendertagen und Arbeitstagen?</strong></dt>
<dd>Kalendertage zählen alle 7 Tage der Woche. Arbeitstage (auch Werktage genannt) zählen nur Montag bis Freitag, ohne Feiertage. Eine 5-Arbeitstage-Frist ab Montag endet am Freitag; eine 5-Kalendertage-Frist ab Montag endet am Samstag.</dd>

<dt><strong>Wie viele Arbeitstage hat ein Monat?</strong></dt>
<dd>Die meisten Monate haben <strong>20–23 Arbeitstage</strong>, je nach Monat und Anzahl der Wochenenden. Februar hat die wenigsten (18–20); Monate mit 31 Tagen, die montags oder dienstags beginnen, haben die meisten (23).</dd>

<dt><strong>Wie viele Tage sind es bis Weihnachten?</strong></dt>
<dd>Weihnachten ist am 25. Dezember. Die Anzahl der Tage hängt vom heutigen Datum ab — nutzen Sie den Countdown-Rechner auf dieser Seite für eine genaue Zählung.</dd>
</dl>`
      },
      {
        h2: 'Fragen zu Zeitzonen',
        body: `<dl>
<dt><strong>Was ist UTC?</strong></dt>
<dd>UTC (Koordinierte Weltzeit) ist der weltweit primäre Zeitstandard. Er kennt keine Sommerzeit. Alle anderen Zeitzonen werden als Versatz zu UTC ausgedrückt (z. B. UTC+1, UTC−5).</dd>

<dt><strong>Was ist der Unterschied zwischen GMT und UTC?</strong></dt>
<dd>Für den alltäglichen Gebrauch sind GMT und UTC identisch. GMT (Greenwich Mean Time) ist eine Zeitzone; UTC ist ein Zeitstandard. Sie teilen die gleiche aktuelle Zeit, aber UTC ist der präzise wissenschaftliche Standard für die offizielle Zeitmessung.</dd>

<dt><strong>Wie viele Zeitzonen gibt es?</strong></dt>
<dd>Es gibt <strong>38 Standard-UTC-Versätze</strong>, von UTC−12:00 bis UTC+14:00. Einige Länder umspannen mehrere Zeitzonen — Russland hat 11, die USA haben 6 (ohne Territorien) und Frankreich hat 12 (einschließlich Überseegebiete).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: 'Wie viele Tage hat ein Jahr?', a: 'Ein reguläres Jahr hat 365 Tage. Ein Schaltjahr hat 366 Tage. Der Kalender hat im Durchschnitt 365,25 Tage pro Jahr, was durch das Hinzufügen eines Schalttages (29. Februar) alle 4 Jahre korrigiert wird.' },
      { q: 'Wie viele Wochen hat ein Jahr?', a: 'Ein reguläres Jahr hat 52 Wochen und 1 extra Tag. Ein Schaltjahr hat 52 Wochen und 2 extra Tage. In der ISO-Wochennummerierung haben manche Jahre 53 vollständige Wochen.' },
      { q: 'Was ist die aktuelle Wochennummer?', a: 'Die aktuelle ISO-Wochennummer ändert sich jeden Montag. Verwenden Sie den Wochennummer-Rechner auf dieser Seite, um die heutige Wochennummer für jedes Jahr zu sehen.' },
      { q: 'Wie rechne ich Tage in Monate um?', a: 'Teilen Sie die Anzahl der Tage durch 30,44 (die durchschnittlichen Tage pro Monat) für ein ungefähres Ergebnis. Für eine genaue Umrechnung verwenden Sie einen Datumsrechner, der die tatsächliche Länge jedes Monats berücksichtigt.' },
    ],
    pillar: { href: '/de/datumsrechner/', label: 'Datumsrechner' },
    related: [
      { href: '/de/tage-zwischen-zwei-daten-berechnen/', label: 'Tage zwischen zwei Daten berechnen' },
      { href: '/de/genaues-alter-berechnen/', label: 'Genaues Alter berechnen' },
      { href: '/de/weltweite-kalendersysteme/', label: 'Weltweite Kalendersysteme' },
    ],
  },
  it: {
    title: 'FAQ data e ora — 15 domande frequenti con risposta',
    metaDesc: 'Risposte alle domande più frequenti sui calcoli di date e ore: anni bisestili, giorni del mese, numeri di settimana, calcoli dell\'età, fusi orari e altro.',
    kicker: 'FAQ DATA E ORA',
    h1: 'FAQ data e ora — Domande frequenti con risposta',
    intro: 'Ecco risposte dirette alle domande più frequenti su date, orari, età e calcoli del calendario.',
    sections: [
      {
        h2: 'Domande sul calendario',
        body: `<dl>
<dt><strong>Quanti giorni ci sono in un anno?</strong></dt>
<dd>Un anno regolare ha <strong>365 giorni</strong>. Un anno bisestile ha <strong>366 giorni</strong>. La media è di 365,25 giorni per anno, ecco perché aggiungiamo un giorno bisestile ogni 4 anni.</dd>

<dt><strong>Quante settimane ci sono in un anno?</strong></dt>
<dd>Un anno regolare ha <strong>52 settimane e 1 giorno</strong>. Un anno bisestile ha <strong>52 settimane e 2 giorni</strong>. Alcuni anni hanno 53 settimane ISO quando il 1 gennaio cade di giovedì.</dd>

<dt><strong>Quanti giorni ci sono in ogni mese?</strong></dt>
<dd>Gennaio: 31 · Febbraio: 28 (29 in anno bisestile) · Marzo: 31 · Aprile: 30 · Maggio: 31 · Giugno: 30 · Luglio: 31 · Agosto: 31 · Settembre: 30 · Ottobre: 31 · Novembre: 30 · Dicembre: 31</dd>

<dt><strong>Cos'è un anno bisestile?</strong></dt>
<dd>Un anno bisestile è un anno divisibile per 4 — ad eccezione degli anni centenari, che devono essere divisibili per 400. Quindi il 2000 è stato un anno bisestile, ma il 1900 no. Il prossimo anno bisestile dopo il 2024 è il <strong>2028</strong>.</dd>

<dt><strong>Cos'è il numero di settimana ISO?</strong></dt>
<dd>Il numero di settimana ISO è uno standard (ISO 8601) che numera le settimane dell'anno da 1 a 52 o 53. La settimana 1 è definita come quella contenente il primo giovedì dell'anno. Il lunedì è il primo giorno della settimana ISO.</dd>
</dl>`
      },
      {
        h2: "Domande sul calcolo dell'età",
        body: `<dl>
<dt><strong>Come calcolo la mia età?</strong></dt>
<dd>Sottrai il tuo anno di nascita dall'anno corrente. Se il tuo compleanno non è ancora avvenuto quest'anno, sottrai 1. Esempio: nato nel 1990, anno corrente 2026, compleanno non ancora passato → età = 35.</dd>

<dt><strong>Quanti anni ha qualcuno nato nel 1990?</strong></dt>
<dd>Qualcuno nato nel 1990 ha <strong>35 o 36 anni nel 2026</strong>, a seconda che il compleanno sia già passato.</dd>

<dt><strong>Quanti anni ha qualcuno nato nel 2000?</strong></dt>
<dd>Qualcuno nato nel 2000 ha <strong>25 o 26 anni nel 2026</strong>, a seconda che il compleanno sia già passato.</dd>

<dt><strong>Qual è la differenza tra calcolatore di età e calcolatore di età cronologica?</strong></dt>
<dd>Un calcolatore di età calcola quanti anni hai dalla tua data di nascita ad oggi. Un calcolatore di età cronologica fa lo stesso, ma è utilizzato specificamente in contesti medici o educativi per misurare il tempo trascorso con precisione (spesso in anni, mesi e giorni) per valutazioni dello sviluppo.</dd>
</dl>`
      },
      {
        h2: 'Domande su giorni e giorni lavorativi',
        body: `<dl>
<dt><strong>Qual è la differenza tra giorni calendario e giorni lavorativi?</strong></dt>
<dd>I giorni calendario contano tutti i 7 giorni della settimana. I giorni lavorativi (chiamati anche giorni feriali) contano solo dal lunedì al venerdì, esclusi i giorni festivi. Una scadenza di 5 giorni lavorativi dal lunedì cade il venerdì; una scadenza di 5 giorni calendario dal lunedì cade il sabato.</dd>

<dt><strong>Quanti giorni lavorativi ci sono in un mese?</strong></dt>
<dd>La maggior parte dei mesi ha <strong>20–23 giorni lavorativi</strong>, a seconda del mese e del numero di weekend. Febbraio ha i meno (18–20); i mesi con 31 giorni che iniziano il lunedì o martedì hanno i più (23).</dd>

<dt><strong>Quanti giorni mancano a Natale?</strong></dt>
<dd>Il Natale è il 25 dicembre. Il numero di giorni dipende dalla data odierna — usa il calcolatore del conto alla rovescia su questo sito per un conteggio esatto.</dd>
</dl>`
      },
      {
        h2: 'Domande sui fusi orari',
        body: `<dl>
<dt><strong>Cos'è UTC?</strong></dt>
<dd>UTC (Tempo Universale Coordinato) è il principale standard temporale mondiale. Non osserva l'ora legale. Tutti gli altri fusi orari sono espressi come offset rispetto a UTC (es. UTC+1, UTC−5).</dd>

<dt><strong>Qual è la differenza tra GMT e UTC?</strong></dt>
<dd>Per uso quotidiano, GMT e UTC sono la stessa cosa. GMT (Greenwich Mean Time) è un fuso orario; UTC è uno standard temporale. Condividono la stessa ora attuale, ma UTC è lo standard scientifico preciso usato per la misurazione ufficiale del tempo.</dd>

<dt><strong>Quanti fusi orari esistono?</strong></dt>
<dd>Esistono <strong>38 offset UTC standard</strong>, che vanno da UTC−12:00 a UTC+14:00. Alcuni paesi comprendono più fusi orari — la Russia ne ha 11, gli USA ne hanno 6 (esclusi i territori) e la Francia ne ha 12 (inclusi i territori d'oltremare).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: 'Quanti giorni ci sono in un anno?', a: 'Un anno regolare ha 365 giorni. Un anno bisestile ha 366 giorni. Il calendario ha in media 365,25 giorni per anno, il che viene corretto aggiungendo un giorno bisestile (29 febbraio) ogni 4 anni.' },
      { q: 'Quante settimane ci sono in un anno?', a: 'Un anno regolare ha 52 settimane e 1 giorno extra. Un anno bisestile ha 52 settimane e 2 giorni extra. Nella numerazione ISO delle settimane, alcuni anni hanno 53 settimane complete.' },
      { q: "Qual è il numero di settimana corrente?", a: "Il numero di settimana ISO corrente cambia ogni lunedì. Usa il calcolatore del numero di settimana su questo sito per vedere il numero di settimana di oggi per qualsiasi anno." },
      { q: 'Come si convertono i giorni in mesi?', a: 'Dividi il numero di giorni per 30,44 (la media di giorni per mese) per un risultato approssimativo. Per una conversione esatta, usa una calcolatrice di date che tenga conto della durata effettiva di ogni mese.' },
    ],
    pillar: { href: '/it/calcolatore-date/', label: 'Calcolatore di date' },
    related: [
      { href: '/it/come-calcolare-giorni-tra-due-date/', label: 'Come calcolare i giorni tra due date' },
      { href: '/it/come-calcolare-eta-esatta/', label: 'Come calcolare la tua età esatta' },
      { href: '/it/sistemi-di-calendario-mondiali/', label: 'Sistemi di calendario mondiali' },
    ],
  },
  pl: {
    title: 'FAQ data i czas — 15 najczęstszych pytań i odpowiedzi',
    metaDesc: 'Odpowiedzi na najczęstsze pytania dotyczące obliczeń dat i godzin: lata przestępne, dni miesiąca, numery tygodni, obliczanie wieku, strefy czasowe i więcej.',
    kicker: 'FAQ DATA I CZAS',
    h1: 'FAQ data i czas — Odpowiedzi na najczęstsze pytania',
    intro: 'Tutaj znajdziesz bezpośrednie odpowiedzi na najczęściej zadawane pytania dotyczące dat, godzin, wieku i obliczeń kalendarza.',
    sections: [
      {
        h2: 'Pytania o kalendarz',
        body: `<dl>
<dt><strong>Ile dni ma rok?</strong></dt>
<dd>Zwykły rok ma <strong>365 dni</strong>. Rok przestępny ma <strong>366 dni</strong>. Średni rok ma 365,25 dnia, dlatego co 4 lata dodajemy dzień przestępny.</dd>

<dt><strong>Ile tygodni ma rok?</strong></dt>
<dd>Zwykły rok ma <strong>52 tygodnie i 1 dzień</strong>. Rok przestępny ma <strong>52 tygodnie i 2 dni</strong>. Niektóre lata mają 53 tygodnie ISO, gdy 1 stycznia przypada w czwartek.</dd>

<dt><strong>Ile dni ma każdy miesiąc?</strong></dt>
<dd>Styczeń: 31 · Luty: 28 (29 w roku przestępnym) · Marzec: 31 · Kwiecień: 30 · Maj: 31 · Czerwiec: 30 · Lipiec: 31 · Sierpień: 31 · Wrzesień: 30 · Październik: 31 · Listopad: 30 · Grudzień: 31</dd>

<dt><strong>Co to jest rok przestępny?</strong></dt>
<dd>Rok przestępny to rok podzielny przez 4 — z wyjątkiem lat stuletnich, które muszą być podzielne przez 400. Tak więc 2000 był rokiem przestępnym, ale 1900 nie był. Następny rok przestępny po 2024 to <strong>2028</strong>.</dd>

<dt><strong>Co to jest numer tygodnia ISO?</strong></dt>
<dd>Numer tygodnia ISO to standard (ISO 8601), który numeruje tygodnie roku od 1 do 52 lub 53. Tydzień 1 definiowany jest jako tydzień zawierający pierwszy czwartek roku. Poniedziałek jest pierwszym dniem tygodnia ISO.</dd>
</dl>`
      },
      {
        h2: 'Pytania o obliczanie wieku',
        body: `<dl>
<dt><strong>Jak obliczyć swój wiek?</strong></dt>
<dd>Odejmij swój rok urodzenia od bieżącego roku. Jeśli Twoje urodziny jeszcze nie nastąpiły w tym roku, odejmij 1. Przykład: urodzony w 1990, bieżący rok 2026, urodziny jeszcze nie minęły → wiek = 35.</dd>

<dt><strong>Ile lat ma ktoś urodzony w 1990 roku?</strong></dt>
<dd>Ktoś urodzony w 1990 roku ma <strong>35 lub 36 lat w 2026</strong>, w zależności od tego, czy jego urodziny już minęły.</dd>

<dt><strong>Ile lat ma ktoś urodzony w 2000 roku?</strong></dt>
<dd>Ktoś urodzony w 2000 roku ma <strong>25 lub 26 lat w 2026</strong>, w zależności od tego, czy jego urodziny już minęły.</dd>

<dt><strong>Jaka jest różnica między kalkulatorem wieku a kalkulatorem wieku chronologicznego?</strong></dt>
<dd>Kalkulator wieku oblicza, ile masz lat od daty urodzenia do dziś. Kalkulator wieku chronologicznego robi to samo, ale jest używany specyficznie w kontekstach medycznych lub edukacyjnych do precyzyjnego pomiaru upływu czasu (często w latach, miesiącach i dniach) w ocenach rozwojowych.</dd>
</dl>`
      },
      {
        h2: 'Pytania o dni i dni robocze',
        body: `<dl>
<dt><strong>Jaka jest różnica między dniami kalendarzowymi a dniami roboczymi?</strong></dt>
<dd>Dni kalendarzowe liczą wszystkie 7 dni tygodnia. Dni robocze (zwane też dniami pracy) liczą tylko dni od poniedziałku do piątku, z wyłączeniem świąt. Termin 5 dni roboczych od poniedziałku przypada w piątek; termin 5 dni kalendarzowych od poniedziałku przypada w sobotę.</dd>

<dt><strong>Ile dni roboczych ma miesiąc?</strong></dt>
<dd>Większość miesięcy ma <strong>20–23 dni robocze</strong>, w zależności od miesiąca i liczby weekendów. Luty ma ich najmniej (18–20); miesiące z 31 dniami zaczynające się w poniedziałek lub wtorek mają ich najwięcej (23).</dd>

<dt><strong>Ile dni zostało do Bożego Narodzenia?</strong></dt>
<dd>Boże Narodzenie jest 25 grudnia. Liczba dni zależy od dzisiejszej daty — użyj kalkulatora odliczania na tej stronie, aby uzyskać dokładną liczbę.</dd>
</dl>`
      },
      {
        h2: 'Pytania o strefy czasowe',
        body: `<dl>
<dt><strong>Co to jest UTC?</strong></dt>
<dd>UTC (Skoordynowany Czas Uniwersalny) to główny światowy standard czasu. Nie uwzględnia czasu letniego. Wszystkie pozostałe strefy czasowe są wyrażone jako przesunięcia względem UTC (np. UTC+1, UTC−5).</dd>

<dt><strong>Jaka jest różnica między GMT a UTC?</strong></dt>
<dd>Do codziennych celów GMT i UTC są tym samym. GMT (Greenwich Mean Time) to strefa czasowa; UTC to standard czasu. Wskazują ten sam czas bieżący, ale UTC jest precyzyjnym standardem naukowym stosowanym do oficjalnego pomiaru czasu.</dd>

<dt><strong>Ile jest stref czasowych?</strong></dt>
<dd>Istnieje <strong>38 standardowych przesunięć UTC</strong>, od UTC−12:00 do UTC+14:00. Niektóre kraje obejmują wiele stref czasowych — Rosja ma 11, USA ma 6 (bez terytoriów), a Francja ma 12 (łącznie z terytoriami zamorskimi).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: 'Ile dni ma rok?', a: 'Zwykły rok ma 365 dni. Rok przestępny ma 366 dni. Kalendarz ma średnio 365,25 dnia rocznie, co jest korygowane przez dodanie dnia przestępnego (29 lutego) co 4 lata.' },
      { q: 'Ile tygodni ma rok?', a: 'Zwykły rok ma 52 tygodnie i 1 dodatkowy dzień. Rok przestępny ma 52 tygodnie i 2 dodatkowe dni. W numeracji ISO tygodni niektóre lata mają 53 pełne tygodnie.' },
      { q: 'Jaki jest aktualny numer tygodnia?', a: 'Aktualny numer tygodnia ISO zmienia się w każdy poniedziałek. Użyj kalkulatora numeru tygodnia na tej stronie, aby zobaczyć dzisiejszy numer tygodnia dla dowolnego roku.' },
      { q: 'Jak przeliczać dni na miesiące?', a: 'Podziel liczbę dni przez 30,44 (średnia liczba dni w miesiącu), aby uzyskać przybliżony wynik. Dla dokładnej konwersji użyj kalkulatora dat, który uwzględnia rzeczywistą długość każdego miesiąca.' },
    ],
    pillar: { href: '/pl/kalkulator-dat/', label: 'Kalkulator dat' },
    related: [
      { href: '/pl/jak-obliczyc-dni-miedzy-datami/', label: 'Jak obliczyć dni między datami' },
      { href: '/pl/jak-obliczyc-dokladny-wiek/', label: 'Jak obliczyć dokładny wiek' },
      { href: '/pl/swiatowe-systemy-kalendarza/', label: 'Światowe systemy kalendarza' },
    ],
  },
  ja: {
    title: '日付・時間FAQ — よくある質問15選に回答',
    metaDesc: '日付と時間の計算に関するよくある質問への回答：うるう年、各月の日数、週番号、年齢計算、タイムゾーンなど。',
    kicker: 'HIZUKE FAQ',
    h1: '日付・時間FAQ — よくある質問に回答',
    intro: '日付、時間、年齢、カレンダー計算に関するよくある質問への直接的な回答をまとめました。',
    sections: [
      {
        h2: 'カレンダーに関する質問',
        body: `<dl>
<dt><strong>1年は何日ありますか？</strong></dt>
<dd>通常の年は<strong>365日</strong>です。うるう年は<strong>366日</strong>です。平均すると1年は365.25日で、4年ごとにうるう日を1日追加するのはそのためです。</dd>

<dt><strong>1年は何週間ありますか？</strong></dt>
<dd>通常の年は<strong>52週と1日</strong>です。うるう年は<strong>52週と2日</strong>です。1月1日が木曜日の場合、ISO暦で53週になる年もあります。</dd>

<dt><strong>各月は何日ありますか？</strong></dt>
<dd>1月: 31 · 2月: 28（うるう年は29）· 3月: 31 · 4月: 30 · 5月: 31 · 6月: 30 · 7月: 31 · 8月: 31 · 9月: 30 · 10月: 31 · 11月: 30 · 12月: 31</dd>

<dt><strong>うるう年とは何ですか？</strong></dt>
<dd>うるう年とは4で割り切れる年のことです — ただし、世紀年（100年ごとの年）は400で割り切れる必要があります。そのため2000年はうるう年でしたが、1900年はそうではありませんでした。2024年の次のうるう年は<strong>2028年</strong>です。</dd>

<dt><strong>ISO週番号とは何ですか？</strong></dt>
<dd>ISO週番号は規格（ISO 8601）で、年の週を1〜52または53と番号付けします。第1週はその年の最初の木曜日を含む週として定義されます。月曜日がISO週の最初の日です。</dd>
</dl>`
      },
      {
        h2: '年齢計算に関する質問',
        body: `<dl>
<dt><strong>年齢の計算方法は？</strong></dt>
<dd>現在の年から生まれ年を引きます。今年の誕生日がまだ来ていない場合は1を引きます。例：1990年生まれ、現在2026年、誕生日未経過 → 年齢 = 35歳。</dd>

<dt><strong>1990年生まれは何歳ですか？</strong></dt>
<dd>1990年生まれの人は<strong>2026年に35歳または36歳</strong>です。誕生日が過ぎているかどうかによります。</dd>

<dt><strong>2000年生まれは何歳ですか？</strong></dt>
<dd>2000年生まれの人は<strong>2026年に25歳または26歳</strong>です。誕生日が過ぎているかどうかによります。</dd>

<dt><strong>年齢計算ツールと暦年齢計算ツールの違いは何ですか？</strong></dt>
<dd>年齢計算ツールは生年月日から今日までの年齢を計算します。暦年齢計算ツールも同じことをしますが、医療や教育の場で発達評価のために正確な経過時間（年・月・日）を測定する目的で特に使われます。</dd>
</dl>`
      },
      {
        h2: '日数・営業日に関する質問',
        body: `<dl>
<dt><strong>暦日と営業日の違いは何ですか？</strong></dt>
<dd>暦日は週7日すべてを数えます。営業日（稼働日）は祝日を除いた月曜日から金曜日のみを数えます。月曜日から5営業日の期限は金曜日；月曜日から5暦日の期限は土曜日です。</dd>

<dt><strong>1ヶ月に営業日は何日ありますか？</strong></dt>
<dd>ほとんどの月は<strong>20〜23営業日</strong>です。月や週末の数によって異なります。2月が最も少なく（18〜20日）、月曜日か火曜日から始まる31日の月が最も多くなります（23日）。</dd>

<dt><strong>クリスマスまで何日ありますか？</strong></dt>
<dd>クリスマスは12月25日です。日数は今日の日付によって変わります — このサイトのカウントダウン計算機で正確な日数を確認できます。</dd>
</dl>`
      },
      {
        h2: 'タイムゾーンに関する質問',
        body: `<dl>
<dt><strong>UTCとは何ですか？</strong></dt>
<dd>UTC（協定世界時）は世界の主要な時間標準です。夏時間を採用しません。他のすべてのタイムゾーンはUTCからのオフセットで表されます（例：UTC+1、UTC−5）。</dd>

<dt><strong>GMTとUTCの違いは何ですか？</strong></dt>
<dd>日常的な目的では、GMTとUTCは同じです。GMT（グリニッジ標準時）はタイムゾーンであり、UTCは時間標準です。現在の時刻は同じですが、UTCは公式な計時に使われる精密な科学的標準です。</dd>

<dt><strong>タイムゾーンは何個ありますか？</strong></dt>
<dd><strong>38の標準UTCオフセット</strong>があり、UTC−12:00からUTC+14:00までの範囲です。複数のタイムゾーンにまたがる国もあります — ロシアは11、米国は6（領土除く）、フランスは12（海外領土含む）です。</dd>
</dl>`
      },
    ],
    faqs: [
      { q: '1年は何日ですか？', a: '通常の年は365日です。うるう年は366日です。カレンダーは平均して年間365.25日で、4年ごとにうるう日（2月29日）を追加することで補正されます。' },
      { q: '1年は何週間ですか？', a: '通常の年は52週と1日余りです。うるう年は52週と2日余りです。ISO週番号では、53週ある年もあります。' },
      { q: '現在の週番号は何ですか？', a: '現在のISO週番号は毎週月曜日に変わります。このサイトの週番号計算機を使って、任意の年の今日の週番号を確認してください。' },
      { q: '日数を月数に変換するには？', a: '日数を30.44（1ヶ月の平均日数）で割ると大まかな結果が得られます。正確な変換には、各月の実際の長さを考慮した日付計算機を使ってください。' },
    ],
    pillar: { href: '/ja/hi-zuke-keisanki/', label: '日付計算機' },
    related: [
      { href: '/ja/futari-no-hi-zuke-no-aida-no-hi-su/', label: '2つの日付の間の日数' },
      { href: '/ja/seikaku-na-nenrei-no-keisan-hoho/', label: '正確な年齢の計算方法' },
      { href: '/ja/sekai-no-koyomi-shisutemu/', label: '世界のカレンダーシステム' },
    ],
  },
  ko: {
    title: '날짜・시간 FAQ — 자주 묻는 질문 15가지 답변',
    metaDesc: '날짜와 시간 계산에 관한 가장 자주 묻는 질문에 대한 답변: 윤년, 월별 일수, 주 번호, 나이 계산, 시간대 등.',
    kicker: 'NAL JJA FAQ',
    h1: '날짜・시간 FAQ — 자주 묻는 질문에 대한 답변',
    intro: '날짜, 시간, 나이, 달력 계산에 관해 가장 자주 묻는 질문에 직접 답변합니다.',
    sections: [
      {
        h2: '달력 관련 질문',
        body: `<dl>
<dt><strong>1년은 며칠입니까?</strong></dt>
<dd>일반 연도는 <strong>365일</strong>입니다. 윤년은 <strong>366일</strong>입니다. 평균 연도는 365.25일이며, 이 때문에 4년마다 하루를 추가합니다.</dd>

<dt><strong>1년은 몇 주입니까?</strong></dt>
<dd>일반 연도는 <strong>52주 1일</strong>입니다. 윤년은 <strong>52주 2일</strong>입니다. 1월 1일이 목요일인 경우 ISO 달력 주수가 53주가 되는 해도 있습니다.</dd>

<dt><strong>각 월은 며칠입니까?</strong></dt>
<dd>1월: 31 · 2월: 28 (윤년에는 29) · 3월: 31 · 4월: 30 · 5월: 31 · 6월: 30 · 7월: 31 · 8월: 31 · 9월: 30 · 10월: 31 · 11월: 30 · 12월: 31</dd>

<dt><strong>윤년이란 무엇입니까?</strong></dt>
<dd>윤년은 4로 나누어지는 해입니다 — 단, 100년 단위의 연도는 400으로 나누어져야 합니다. 따라서 2000년은 윤년이지만 1900년은 아니었습니다. 2024년 다음 윤년은 <strong>2028년</strong>입니다.</dd>

<dt><strong>ISO 주 번호란 무엇입니까?</strong></dt>
<dd>ISO 주 번호는 연중 주를 1~52 또는 53으로 번호 매기는 표준(ISO 8601)입니다. 1주는 그 해의 첫 번째 목요일을 포함하는 주로 정의됩니다. 월요일이 ISO 주의 첫날입니다.</dd>
</dl>`
      },
      {
        h2: '나이 계산 관련 질문',
        body: `<dl>
<dt><strong>나이를 어떻게 계산합니까?</strong></dt>
<dd>현재 연도에서 태어난 연도를 뺍니다. 올해 생일이 아직 지나지 않았다면 1을 뺍니다. 예: 1990년생, 현재 2026년, 생일 미경과 → 나이 = 35세.</dd>

<dt><strong>1990년생은 몇 살입니까?</strong></dt>
<dd>1990년에 태어난 사람은 <strong>2026년 기준 35세 또는 36세</strong>입니다. 생일이 지났는지 여부에 따라 다릅니다.</dd>

<dt><strong>2000년생은 몇 살입니까?</strong></dt>
<dd>2000년에 태어난 사람은 <strong>2026년 기준 25세 또는 26세</strong>입니다. 생일이 지났는지 여부에 따라 다릅니다.</dd>

<dt><strong>나이 계산기와 역연령 계산기의 차이는 무엇입니까?</strong></dt>
<dd>나이 계산기는 생년월일부터 오늘까지 몇 살인지 계산합니다. 역연령 계산기도 같은 일을 하지만, 발달 평가를 위해 경과 시간(주로 년, 월, 일)을 정밀하게 측정하는 의료나 교육 환경에서 특히 사용됩니다.</dd>
</dl>`
      },
      {
        h2: '일수 및 영업일 관련 질문',
        body: `<dl>
<dt><strong>달력일과 영업일의 차이는 무엇입니까?</strong></dt>
<dd>달력일은 주 7일을 모두 셉니다. 영업일(근무일)은 공휴일을 제외한 월요일~금요일만 셉니다. 월요일부터 5영업일 기한은 금요일이며, 5달력일 기한은 토요일입니다.</dd>

<dt><strong>한 달에 영업일은 며칠입니까?</strong></dt>
<dd>대부분의 달은 <strong>20~23 영업일</strong>이며, 월과 주말 수에 따라 다릅니다. 2월이 가장 적고(18~20일), 월요일이나 화요일로 시작하는 31일짜리 달이 가장 많습니다(23일).</dd>

<dt><strong>크리스마스까지 며칠 남았습니까?</strong></dt>
<dd>크리스마스는 12월 25일입니다. 날수는 오늘 날짜에 따라 다릅니다 — 이 사이트의 카운트다운 계산기를 사용하여 정확한 날수를 확인하세요.</dd>
</dl>`
      },
      {
        h2: '시간대 관련 질문',
        body: `<dl>
<dt><strong>UTC란 무엇입니까?</strong></dt>
<dd>UTC(협정 세계시)는 세계의 주요 시간 표준입니다. 서머타임을 적용하지 않습니다. 다른 모든 시간대는 UTC로부터의 오프셋으로 표현됩니다(예: UTC+1, UTC−5).</dd>

<dt><strong>GMT와 UTC의 차이는 무엇입니까?</strong></dt>
<dd>일상적인 목적으로는 GMT와 UTC가 동일합니다. GMT(그리니치 표준시)는 시간대이고, UTC는 시간 표준입니다. 현재 시각은 같지만, UTC는 공식적인 시간 계측에 사용되는 정밀한 과학 표준입니다.</dd>

<dt><strong>시간대는 몇 개입니까?</strong></dt>
<dd><strong>38개의 표준 UTC 오프셋</strong>이 있으며, UTC−12:00부터 UTC+14:00까지입니다. 여러 시간대에 걸쳐 있는 나라도 있습니다 — 러시아는 11개, 미국은 6개(영토 제외), 프랑스는 12개(해외 영토 포함)입니다.</dd>
</dl>`
      },
    ],
    faqs: [
      { q: '1년은 며칠입니까?', a: '일반 연도는 365일입니다. 윤년은 366일입니다. 달력은 연평균 365.25일이며, 4년마다 윤일(2월 29일)을 추가함으로써 보정됩니다.' },
      { q: '1년은 몇 주입니까?', a: '일반 연도는 52주와 1일입니다. 윤년은 52주와 2일입니다. ISO 주 번호 체계에서는 53주인 해도 있습니다.' },
      { q: '현재 주 번호는 몇입니까?', a: '현재 ISO 주 번호는 매주 월요일에 바뀝니다. 이 사이트의 주 번호 계산기를 사용하여 어느 해든 오늘의 주 번호를 확인하세요.' },
      { q: '일수를 월수로 어떻게 변환합니까?', a: '일수를 30.44(월 평균 일수)로 나누면 대략적인 값을 구할 수 있습니다. 정확한 변환을 위해서는 각 달의 실제 일수를 반영하는 날짜 계산기를 사용하세요.' },
    ],
    pillar: { href: '/ko/nal-jja-gyesan-gi/', label: '날짜 계산기' },
    related: [
      { href: '/ko/du-nal-jja-sa-i-il-su-gyesan/', label: '두 날짜 사이 일수 계산' },
      { href: '/ko/jeong-hwa-han-na-yi-gyesan-bang-beob/', label: '정확한 나이 계산 방법' },
      { href: '/ko/se-gye-dal-lyeog-si-seu-tem/', label: '세계 달력 시스템' },
    ],
  },
  nl: {
    title: 'Datum & Tijd FAQ — 15 veelgestelde vragen beantwoord',
    metaDesc: 'Antwoorden op de meest gestelde vragen over datum- en tijdberekeningen: schrikkeljaren, dagen per maand, weeknummers, leeftijdsberekeningen, tijdzones en meer.',
    kicker: 'DATUM & TIJD FAQ',
    h1: 'Datum & Tijd FAQ — Veelgestelde vragen beantwoord',
    intro: 'Hier zijn directe antwoorden op de meest gestelde vragen over datums, tijden, leeftijden en kalenderberekeningen.',
    sections: [
      {
        h2: 'Kalendervragen',
        body: `<dl>
<dt><strong>Hoeveel dagen heeft een jaar?</strong></dt>
<dd>Een regulier jaar heeft <strong>365 dagen</strong>. Een schrikkeljaar heeft <strong>366 dagen</strong>. Het gemiddelde jaar heeft 365,25 dagen, daarom voegen we elke 4 jaar een schrikkeldag toe.</dd>

<dt><strong>Hoeveel weken heeft een jaar?</strong></dt>
<dd>Een regulier jaar heeft <strong>52 weken en 1 dag</strong>. Een schrikkeljaar heeft <strong>52 weken en 2 dagen</strong>. Sommige jaren hebben 53 ISO-kalenderweken wanneer 1 januari op een donderdag valt.</dd>

<dt><strong>Hoeveel dagen heeft elke maand?</strong></dt>
<dd>Januari: 31 · Februari: 28 (29 in een schrikkeljaar) · Maart: 31 · April: 30 · Mei: 31 · Juni: 30 · Juli: 31 · Augustus: 31 · September: 30 · Oktober: 31 · November: 30 · December: 31</dd>

<dt><strong>Wat is een schrikkeljaar?</strong></dt>
<dd>Een schrikkeljaar is een jaar dat deelbaar is door 4 — behalve eeuwjaren, die deelbaar moeten zijn door 400. Dus 2000 was een schrikkeljaar, maar 1900 niet. Het volgende schrikkeljaar na 2024 is <strong>2028</strong>.</dd>

<dt><strong>Wat is het ISO-weeknummer?</strong></dt>
<dd>Het ISO-weeknummer is een standaard (ISO 8601) die de weken van het jaar nummert van 1 tot 52 of 53. Week 1 is de week die de eerste donderdag van het jaar bevat. Maandag is de eerste dag van de ISO-week.</dd>
</dl>`
      },
      {
        h2: 'Vragen over leeftijdsberekening',
        body: `<dl>
<dt><strong>Hoe bereken ik mijn leeftijd?</strong></dt>
<dd>Trek uw geboortejaar af van het huidige jaar. Als uw verjaardag dit jaar nog niet geweest is, trek dan 1 af. Voorbeeld: geboren in 1990, huidig jaar 2026, verjaardag nog niet geweest → leeftijd = 35.</dd>

<dt><strong>Hoe oud is iemand die geboren is in 1990?</strong></dt>
<dd>Iemand geboren in 1990 is <strong>35 of 36 jaar oud in 2026</strong>, afhankelijk van of zijn of haar verjaardag al geweest is.</dd>

<dt><strong>Hoe oud is iemand die geboren is in 2000?</strong></dt>
<dd>Iemand geboren in 2000 is <strong>25 of 26 jaar oud in 2026</strong>, afhankelijk van of zijn of haar verjaardag al geweest is.</dd>

<dt><strong>Wat is het verschil tussen een leeftijdscalculator en een chronologische leeftijdscalculator?</strong></dt>
<dd>Een leeftijdscalculator berekent hoe oud u bent van uw geboortedatum tot vandaag. Een chronologische leeftijdscalculator doet hetzelfde, maar wordt specifiek gebruikt in medische of onderwijskundige contexten om de precieze verstreken tijd (vaak in jaren, maanden en dagen) te meten voor ontwikkelingsbeoordelingen.</dd>
</dl>`
      },
      {
        h2: 'Vragen over dagen en werkdagen',
        body: `<dl>
<dt><strong>Wat is het verschil tussen kalenderdagen en werkdagen?</strong></dt>
<dd>Kalenderdagen tellen alle 7 dagen van de week. Werkdagen (ook wel werkdagen genoemd) tellen alleen maandag tot en met vrijdag, exclusief feestdagen. Een deadline van 5 werkdagen vanaf maandag valt op vrijdag; een deadline van 5 kalenderdagen vanaf maandag valt op zaterdag.</dd>

<dt><strong>Hoeveel werkdagen heeft een maand?</strong></dt>
<dd>De meeste maanden hebben <strong>20–23 werkdagen</strong>, afhankelijk van de maand en het aantal weekenden. Februari heeft de minste (18–20); maanden met 31 dagen die op maandag of dinsdag beginnen hebben de meeste (23).</dd>

<dt><strong>Hoeveel dagen zijn er tot Kerstmis?</strong></dt>
<dd>Kerstmis is op 25 december. Het aantal dagen hangt af van de datum van vandaag — gebruik de afteltimer op deze site voor een exacte telling.</dd>
</dl>`
      },
      {
        h2: 'Vragen over tijdzones',
        body: `<dl>
<dt><strong>Wat is UTC?</strong></dt>
<dd>UTC (Coordinated Universal Time) is de primaire tijdstandaard van de wereld. Het observeert geen zomertijd. Alle andere tijdzones worden uitgedrukt als offsets ten opzichte van UTC (bijv. UTC+1, UTC−5).</dd>

<dt><strong>Wat is het verschil tussen GMT en UTC?</strong></dt>
<dd>Voor dagelijks gebruik zijn GMT en UTC hetzelfde. GMT (Greenwich Mean Time) is een tijdzone; UTC is een tijdstandaard. Ze delen dezelfde huidige tijd, maar UTC is de precieze wetenschappelijke standaard die wordt gebruikt voor officiële tijdmeting.</dd>

<dt><strong>Hoeveel tijdzones zijn er?</strong></dt>
<dd>Er zijn <strong>38 standaard UTC-offsets</strong>, variërend van UTC−12:00 tot UTC+14:00. Sommige landen beslaan meerdere tijdzones — Rusland heeft er 11, de VS heeft er 6 (exclusief gebieden) en Frankrijk heeft er 12 (inclusief overzeese gebieden).</dd>
</dl>`
      },
    ],
    faqs: [
      { q: 'Hoeveel dagen heeft een jaar?', a: 'Een regulier jaar heeft 365 dagen. Een schrikkeljaar heeft 366 dagen. Het kalender gemiddelde is 365,25 dagen per jaar, wat wordt gecorrigeerd door elke 4 jaar een schrikkeldag (29 februari) toe te voegen.' },
      { q: 'Hoeveel weken heeft een jaar?', a: 'Een regulier jaar heeft 52 weken en 1 extra dag. Een schrikkeljaar heeft 52 weken en 2 extra dagen. In ISO-weeknummering hebben sommige jaren 53 volledige weken.' },
      { q: 'Wat is het huidige weeknummer?', a: 'Het huidige ISO-weeknummer verandert elke maandag. Gebruik de weeknummercalculator op deze site om het weeknummer van vandaag voor elk jaar te zien.' },
      { q: 'Hoe zet ik dagen om naar maanden?', a: 'Deel het aantal dagen door 30,44 (het gemiddelde aantal dagen per maand) voor een benaderd resultaat. Voor een exacte conversie gebruikt u een datumcalculator die rekening houdt met de werkelijke lengte van elke maand.' },
    ],
    pillar: { href: '/nl/datumcalculator/', label: 'Datumcalculator' },
    related: [
      { href: '/nl/dagen-berekenen-tussen-twee-datums/', label: 'Dagen berekenen tussen twee datums' },
      { href: '/nl/exacte-leeftijd-berekenen/', label: 'Exacte leeftijd berekenen' },
      { href: '/nl/wereldkalendersystemen/', label: 'Wereldkalendersystemen' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'how-to-calculate-days-between-dates', slugs: { en: 'how-to-calculate-days-between-dates', fr: 'fr/comment-calculer-jours-entre-deux-dates', es: 'es/como-calcular-dias-entre-dos-fechas', pt: 'pt/como-calcular-dias-entre-duas-datas', de: 'de/tage-zwischen-zwei-daten-berechnen', it: 'it/come-calcolare-giorni-tra-due-date', pl: 'pl/jak-obliczyc-dni-miedzy-datami', ja: 'ja/futari-no-hi-zuke-no-aida-no-hi-su', ko: 'ko/du-nal-jja-sa-i-il-su-gyesan', nl: 'nl/dagen-berekenen-tussen-twee-datums' } },
    { id: 'how-to-calculate-exact-age',           slugs: { en: 'how-to-calculate-exact-age',           fr: 'fr/comment-calculer-son-age-exact',           es: 'es/como-calcular-edad-exacta',           pt: 'pt/como-calcular-idade-exata',           de: 'de/genaues-alter-berechnen',           it: 'it/come-calcolare-eta-esatta',           pl: 'pl/jak-obliczyc-dokladny-wiek',           ja: 'ja/seikaku-na-nenrei-no-keisan-hoho',  ko: 'ko/jeong-hwa-han-na-yi-gyesan-bang-beob', nl: 'nl/exacte-leeftijd-berekenen' } },
    { id: 'date-time-faq',                         slugs: { en: 'date-time-faq',                         fr: 'fr/faq-date-heure',                           es: 'es/preguntas-frecuentes-fecha-hora',   pt: 'pt/perguntas-frequentes-data-hora',   de: 'de/datum-uhrzeit-faq',               it: 'it/domande-frequenti-data-ora',       pl: 'pl/czesto-zadawane-pytania-data-czas', ja: 'ja/hizuke-jikan-faq',               ko: 'ko/nal-jja-si-gan-faq',                  nl: 'nl/datum-tijd-veelgestelde-vragen' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
