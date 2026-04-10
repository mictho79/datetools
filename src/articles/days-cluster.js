'use strict';
const T = {};

// ── Article 1: how-many-days-in-each-month ───────────────
T['how-many-days-in-each-month'] = {
  en: {
    title: 'How Many Days in Each Month? — Complete Calendar Reference',
    metaDesc: 'How many days are in each month of the year? January has 31, February has 28 or 29, and so on. Full table plus the knuckle trick explained.',
    kicker: 'CALENDAR REFERENCE',
    h1: 'How Many Days in Each Month?',
    intro: 'The months of the year have 28, 29, 30, or 31 days depending on the month — and whether the year is a leap year. February is the shortest, with 28 days in a regular year and 29 days in a leap year.',
    sections: [
      {
        h2: 'Days in Each Month',
        body: '<p>The table below lists every month with its day count and any notes worth knowing:</p>',
        table: `<table>
<tr><th>Month</th><th>Days</th><th>Notes</th></tr>
<tr><td>January</td><td>31</td><td></td></tr>
<tr><td>February</td><td>28</td><td>29 in a leap year</td></tr>
<tr><td>March</td><td>31</td><td></td></tr>
<tr><td>April</td><td>30</td><td></td></tr>
<tr><td>May</td><td>31</td><td></td></tr>
<tr><td>June</td><td>30</td><td></td></tr>
<tr><td>July</td><td>31</td><td></td></tr>
<tr><td>August</td><td>31</td><td></td></tr>
<tr><td>September</td><td>30</td><td></td></tr>
<tr><td>October</td><td>31</td><td></td></tr>
<tr><td>November</td><td>30</td><td></td></tr>
<tr><td>December</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'The Knuckle Trick',
        body: `<p>There is a simple mnemonic to memorise which months have 31 days: make a fist and count across your knuckles and the valleys between them, starting from your index-finger knuckle.</p>
<ul>
<li>A <strong>knuckle</strong> (raised) = <strong>31 days</strong></li>
<li>A <strong>valley</strong> (between knuckles) = <strong>30 days</strong> (or 28/29 for February)</li>
</ul>
<p>Going left to right: Jan (knuckle) = 31, Feb (valley) = 28/29, Mar (knuckle) = 31, Apr (valley) = 30, May (knuckle) = 31, Jun (valley) = 30, Jul (knuckle) = 31 — then restart from the same index-finger knuckle: Aug (knuckle) = 31, Sep (valley) = 30, Oct (knuckle) = 31, Nov (valley) = 30, Dec (knuckle) = 31.</p>
<p>Because you restart at the same knuckle for August, both July and August land on a knuckle — giving them consecutive 31-day months.</p>`
      },
      {
        h2: 'Why Does February Have Fewer Days?',
        body: `<p>The modern calendar originates from the reforms of <strong>Julius Caesar</strong> in 46 BC, who introduced the Julian calendar. Before his reform, the Roman calendar was a chaotic 355-day lunar system that required frequent corrections.</p>
<p>Caesar's astronomers aligned the year to the solar cycle of 365.25 days. February had historically been the last month of the Roman year and was used as the "leftover" month — it received whatever days were needed to balance the calendar. When emperors later added days to July (named after Julius Caesar) and August (named after Augustus), February — already the shortest — was left at 28 days.</p>
<p>The <strong>leap day</strong> (February 29) was added every four years to account for the extra 0.25 days per solar year, a practice refined further by the Gregorian calendar in 1582.</p>`
      },
    ],
    faqs: [
      { q: 'Which months have 31 days?', a: 'January, March, May, July, August, October, and December all have 31 days — seven months in total.' },
      { q: 'Which months have 30 days?', a: 'April, June, September, and November have 30 days.' },
      { q: 'How many days does February have?', a: 'February has 28 days in a regular year and 29 days in a leap year, which occurs every four years (with rare exceptions for century years).' },
      { q: 'How can I remember how many days each month has?', a: 'Use the knuckle trick: make a fist and count knuckles (31 days) and valleys (30 days or 28/29 for February) from left to right, restarting at the index knuckle after July.' },
    ],
    pillar: { href: '/days-between-dates/', label: 'Calculate days between two dates' },
    related: [
      { href: '/business-days-vs-calendar-days/', label: 'Business days vs calendar days' },
      { href: '/how-many-weeks-in-a-year/', label: 'How many weeks in a year' },
    ],
  },
  fr: {
    title: 'Combien de jours dans chaque mois ? — Référence calendrier complète',
    metaDesc: 'Combien de jours compte chaque mois de l\'année ? Tableau complet des jours par mois, astuce des phalanges et origine du mois court de février.',
    kicker: 'RÉFÉRENCE CALENDRIER',
    h1: 'Combien de jours dans chaque mois ?',
    intro: 'Les mois de l\'année comptent 28, 29, 30 ou 31 jours selon le mois — et selon que l\'année est bissextile ou non. Février est le plus court, avec 28 jours en année ordinaire et 29 jours en année bissextile.',
    sections: [
      {
        h2: 'Jours par mois',
        body: '<p>Le tableau ci-dessous liste chaque mois avec son nombre de jours et les remarques importantes :</p>',
        table: `<table>
<tr><th>Mois</th><th>Jours</th><th>Remarques</th></tr>
<tr><td>Janvier</td><td>31</td><td></td></tr>
<tr><td>Février</td><td>28</td><td>29 lors d'une année bissextile</td></tr>
<tr><td>Mars</td><td>31</td><td></td></tr>
<tr><td>Avril</td><td>30</td><td></td></tr>
<tr><td>Mai</td><td>31</td><td></td></tr>
<tr><td>Juin</td><td>30</td><td></td></tr>
<tr><td>Juillet</td><td>31</td><td></td></tr>
<tr><td>Août</td><td>31</td><td></td></tr>
<tr><td>Septembre</td><td>30</td><td></td></tr>
<tr><td>Octobre</td><td>31</td><td></td></tr>
<tr><td>Novembre</td><td>30</td><td></td></tr>
<tr><td>Décembre</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'L\'astuce des phalanges',
        body: `<p>Il existe un moyen mnémotechnique simple pour retenir quels mois ont 31 jours : serrez le poing et comptez vos phalanges et les creux entre elles, en commençant par la phalange de l'index.</p>
<ul>
<li>Une <strong>phalange</strong> (relief) = <strong>31 jours</strong></li>
<li>Un <strong>creux</strong> (entre les phalanges) = <strong>30 jours</strong> (ou 28/29 pour février)</li>
</ul>
<p>De gauche à droite : Jan (phalange) = 31, Fév (creux) = 28/29, Mar (phalange) = 31, Avr (creux) = 30, Mai (phalange) = 31, Juin (creux) = 30, Juil (phalange) = 31 — puis recommencez à la même phalange de l'index : Août (phalange) = 31, Sep (creux) = 30, Oct (phalange) = 31, Nov (creux) = 30, Déc (phalange) = 31.</p>
<p>Parce que vous recommencez à la même phalange pour août, juillet et août tombent tous deux sur une phalange — ce qui leur donne deux mois consécutifs de 31 jours.</p>`
      },
      {
        h2: 'Pourquoi février compte-t-il moins de jours ?',
        body: `<p>Le calendrier moderne est issu des réformes de <strong>Jules César</strong> en 46 av. J.-C., qui introduisit le calendrier julien. Avant sa réforme, le calendrier romain était un système lunaire chaotique de 355 jours nécessitant de fréquentes corrections.</p>
<p>Les astronomes de César alignèrent l'année sur le cycle solaire de 365,25 jours. Février était historiquement le dernier mois de l'année romaine et servait de mois « de rattrapage » — il recevait les jours nécessaires pour équilibrer le calendrier. Lorsque des empereurs ajoutèrent ensuite des jours à juillet (nommé après Jules César) et août (nommé après Auguste), février — déjà le plus court — resta à 28 jours.</p>
<p>Le <strong>jour bissextile</strong> (29 février) fut ajouté tous les quatre ans pour tenir compte des 0,25 jours supplémentaires par année solaire, une pratique affinée par le calendrier grégorien en 1582.</p>`
      },
    ],
    faqs: [
      { q: 'Quels mois ont 31 jours ?', a: 'Janvier, mars, mai, juillet, août, octobre et décembre ont 31 jours — soit sept mois au total.' },
      { q: 'Quels mois ont 30 jours ?', a: 'Avril, juin, septembre et novembre ont 30 jours.' },
      { q: 'Combien de jours a février ?', a: 'Février a 28 jours en année ordinaire et 29 jours en année bissextile, qui survient tous les quatre ans (avec de rares exceptions pour les années séculaires).' },
      { q: 'Comment retenir le nombre de jours dans chaque mois ?', a: 'Utilisez l\'astuce des phalanges : serrez le poing et comptez les phalanges (31 jours) et les creux (30 jours ou 28/29 pour février) de gauche à droite, en recommençant à la première phalange après juillet.' },
    ],
    pillar: { href: '/fr/jours-entre-deux-dates/', label: 'Calculer les jours entre deux dates' },
    related: [
      { href: '/fr/jours-ouvrables-vs-jours-calendaires/', label: 'Jours ouvrables vs jours calendaires' },
      { href: '/fr/combien-de-semaines-dans-une-annee/', label: 'Combien de semaines dans une année' },
    ],
  },
  es: {
    title: '¿Cuántos días tiene cada mes? — Referencia de calendario completa',
    metaDesc: '¿Cuántos días tiene cada mes del año? Tabla completa, el truco de los nudillos explicado y por qué febrero tiene menos días.',
    kicker: 'REFERENCIA CALENDARIO',
    h1: '¿Cuántos días tiene cada mes?',
    intro: 'Los meses del año tienen 28, 29, 30 o 31 días según el mes y si el año es bisiesto o no. Febrero es el más corto, con 28 días en un año regular y 29 días en un año bisiesto.',
    sections: [
      {
        h2: 'Días en cada mes',
        body: '<p>La siguiente tabla muestra cada mes con su número de días y las notas más importantes:</p>',
        table: `<table>
<tr><th>Mes</th><th>Días</th><th>Notas</th></tr>
<tr><td>Enero</td><td>31</td><td></td></tr>
<tr><td>Febrero</td><td>28</td><td>29 en año bisiesto</td></tr>
<tr><td>Marzo</td><td>31</td><td></td></tr>
<tr><td>Abril</td><td>30</td><td></td></tr>
<tr><td>Mayo</td><td>31</td><td></td></tr>
<tr><td>Junio</td><td>30</td><td></td></tr>
<tr><td>Julio</td><td>31</td><td></td></tr>
<tr><td>Agosto</td><td>31</td><td></td></tr>
<tr><td>Septiembre</td><td>30</td><td></td></tr>
<tr><td>Octubre</td><td>31</td><td></td></tr>
<tr><td>Noviembre</td><td>30</td><td></td></tr>
<tr><td>Diciembre</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'El truco de los nudillos',
        body: `<p>Existe un método mnemotécnico sencillo para recordar qué meses tienen 31 días: cierra el puño y cuenta tus nudillos y los valles entre ellos, empezando por el nudillo del índice.</p>
<ul>
<li>Un <strong>nudillo</strong> (elevado) = <strong>31 días</strong></li>
<li>Un <strong>valle</strong> (entre nudillos) = <strong>30 días</strong> (o 28/29 para febrero)</li>
</ul>
<p>De izquierda a derecha: Ene (nudillo) = 31, Feb (valle) = 28/29, Mar (nudillo) = 31, Abr (valle) = 30, May (nudillo) = 31, Jun (valle) = 30, Jul (nudillo) = 31 — luego reinicia desde el mismo nudillo del índice: Ago (nudillo) = 31, Sep (valle) = 30, Oct (nudillo) = 31, Nov (valle) = 30, Dic (nudillo) = 31.</p>
<p>Como reinicias en el mismo nudillo para agosto, tanto julio como agosto caen en un nudillo — dándoles dos meses consecutivos de 31 días.</p>`
      },
      {
        h2: '¿Por qué febrero tiene menos días?',
        body: `<p>El calendario moderno proviene de las reformas de <strong>Julio César</strong> en el año 46 a.C., quien introdujo el calendario juliano. Antes de su reforma, el calendario romano era un caótico sistema lunar de 355 días que requería correcciones frecuentes.</p>
<p>Los astrónomos de César alinearon el año con el ciclo solar de 365,25 días. Febrero era históricamente el último mes del año romano y se usaba como mes de "ajuste" — recibía los días necesarios para equilibrar el calendario. Cuando los emperadores añadieron posteriormente días a julio (nombrado en honor a Julio César) y agosto (nombrado en honor a Augusto), febrero — ya el más corto — quedó con 28 días.</p>
<p>El <strong>día bisiesto</strong> (29 de febrero) se añadió cada cuatro años para compensar los 0,25 días adicionales por año solar, práctica perfeccionada por el calendario gregoriano en 1582.</p>`
      },
    ],
    faqs: [
      { q: '¿Qué meses tienen 31 días?', a: 'Enero, marzo, mayo, julio, agosto, octubre y diciembre tienen 31 días — siete meses en total.' },
      { q: '¿Qué meses tienen 30 días?', a: 'Abril, junio, septiembre y noviembre tienen 30 días.' },
      { q: '¿Cuántos días tiene febrero?', a: 'Febrero tiene 28 días en un año regular y 29 días en un año bisiesto, que ocurre cada cuatro años (con raras excepciones para años seculares).' },
      { q: '¿Cómo puedo recordar cuántos días tiene cada mes?', a: 'Usa el truco de los nudillos: cierra el puño y cuenta nudillos (31 días) y valles (30 días o 28/29 para febrero) de izquierda a derecha, reiniciando en el primer nudillo después de julio.' },
    ],
    pillar: { href: '/es/dias-entre-fechas/', label: 'Calcular días entre dos fechas' },
    related: [
      { href: '/es/dias-habiles-vs-dias-calendario/', label: 'Días hábiles vs días calendario' },
      { href: '/es/cuantas-semanas-tiene-un-ano/', label: 'Cuántas semanas tiene un año' },
    ],
  },
};

// ── Article 2: business-days-vs-calendar-days ────────────
T['business-days-vs-calendar-days'] = {
  en: {
    title: 'Business Days vs Calendar Days: What\'s the Difference?',
    metaDesc: 'Business days vs calendar days explained. Learn the key differences, see an example calculation, and understand when each type of day count matters.',
    kicker: 'DATE GUIDE',
    h1: 'Business Days vs Calendar Days: What\'s the Difference?',
    intro: 'When a deadline says "5 business days," it means something very different from "5 calendar days." Understanding the distinction can save you from missing contracts, shipments, and legal deadlines.',
    sections: [
      {
        h2: 'Key Definitions',
        body: `<p><strong>Calendar days</strong> count every single day of the week — Monday through Sunday, including weekends and public holidays. When you count 7 calendar days from Monday, you land on the following Monday.</p>
<p><strong>Business days</strong> (also called working days) count only Monday through Friday, <em>excluding</em> public holidays. If a business is closed on a bank holiday, that day does not count.</p>
<ul>
<li><strong>Calendar day:</strong> Any day of the week (Mon–Sun), including weekends and holidays.</li>
<li><strong>Business day:</strong> Monday–Friday, excluding public holidays.</li>
</ul>`
      },
      {
        h2: 'Example Calculation',
        body: '<p>Suppose a contract states delivery within <strong>5 business days from Monday, April 7</strong>. Counting only weekdays, that means delivery by Friday, April 11 — Saturday and Sunday are skipped entirely.</p>',
        table: `<table>
<tr><th>Day</th><th>Calendar Day</th><th>Business Day</th></tr>
<tr><td>Monday Apr 7</td><td>Day 1</td><td>Day 1</td></tr>
<tr><td>Tuesday Apr 8</td><td>Day 2</td><td>Day 2</td></tr>
<tr><td>Wednesday Apr 9</td><td>Day 3</td><td>Day 3</td></tr>
<tr><td>Thursday Apr 10</td><td>Day 4</td><td>Day 4</td></tr>
<tr><td>Friday Apr 11</td><td>Day 5</td><td>Day 5 ✓</td></tr>
<tr><td>Saturday Apr 12</td><td>Day 6</td><td>— (weekend)</td></tr>
<tr><td>Sunday Apr 13</td><td>Day 7</td><td>— (weekend)</td></tr>
<tr><td>Monday Apr 14</td><td>Day 8</td><td>Day 6 (if needed)</td></tr>
</table>`
      },
      {
        h2: 'When Does It Matter?',
        body: `<p>The distinction between business and calendar days is critical in several real-world contexts:</p>
<ul>
<li><strong>Contracts and legal deadlines:</strong> Courts and contracts typically use business days for response deadlines, appeal windows, and notice periods.</li>
<li><strong>Shipping and delivery:</strong> Courier services often quote business-day delivery times. A "3-business-day" shipment ordered on Friday may not arrive until Wednesday.</li>
<li><strong>Payroll:</strong> Some payroll cycles count bi-weekly business days, affecting when deposits clear.</li>
<li><strong>Banking:</strong> Fund transfers and cheque clearances are measured in business days, not calendar days.</li>
</ul>`
      },
      {
        h2: 'Public Holidays',
        body: `<p>Public holidays vary significantly by country, state, and even industry. In the United States, federal holidays are not always observed by every employer. In the United Kingdom, bank holidays differ between England, Scotland, and Northern Ireland.</p>
<p>When counting business days for a deadline, always check whether any public holidays fall within the window — each one adds an extra calendar day to the overall count. Some contracts explicitly define which holiday schedule applies.</p>`
      },
    ],
    faqs: [
      { q: 'Is Saturday a business day?', a: 'No. In most countries, Saturday and Sunday are not business days. Business days are Monday through Friday, excluding public holidays.' },
      { q: 'Are business days the same worldwide?', a: 'Not exactly. In some countries (such as Israel or Saudi Arabia), the working week runs Sunday–Thursday. Most Western countries use Monday–Friday as business days.' },
      { q: 'How do I count 10 business days from today?', a: 'Start from tomorrow and count forward, skipping every Saturday and Sunday. For every public holiday that falls in the window, add one more calendar day to the end.' },
      { q: 'Does "within 5 business days" include the start day?', a: 'It depends on the wording. "Within 5 business days" typically means 5 full business days after the start date — not counting Day 0. Always clarify if the language is ambiguous.' },
    ],
    pillar: { href: '/business-days-calculator/', label: 'Calculate business days between dates' },
    related: [
      { href: '/how-many-days-in-each-month/', label: 'How many days in each month' },
      { href: '/days-between-dates/', label: 'Days between dates calculator' },
    ],
  },
  fr: {
    title: 'Jours ouvrables vs jours calendaires : quelle différence ?',
    metaDesc: 'Jours ouvrables contre jours calendaires expliqués. Comprenez la différence clé, voyez un exemple de calcul et sachez quand chaque type de décompte s\'applique.',
    kicker: 'GUIDE DATES',
    h1: 'Jours ouvrables vs jours calendaires : quelle différence ?',
    intro: 'Lorsqu\'un délai mentionne « 5 jours ouvrables », cela signifie quelque chose de très différent de « 5 jours calendaires ». Comprendre cette distinction peut vous éviter de manquer des échéances contractuelles, de livraison ou légales.',
    sections: [
      {
        h2: 'Définitions clés',
        body: `<p><strong>Les jours calendaires</strong> comptent tous les jours de la semaine — du lundi au dimanche, y compris les week-ends et les jours fériés. Si vous comptez 7 jours calendaires à partir d'un lundi, vous arrivez au lundi suivant.</p>
<p><strong>Les jours ouvrables</strong> (ou jours ouvrés) comptent uniquement du lundi au vendredi, <em>hors</em> jours fériés. Si une entreprise est fermée un jour férié, ce jour ne compte pas.</p>
<ul>
<li><strong>Jour calendaire :</strong> tout jour de la semaine (lun–dim), y compris week-ends et jours fériés.</li>
<li><strong>Jour ouvrable :</strong> du lundi au vendredi, hors jours fériés.</li>
</ul>`
      },
      {
        h2: 'Exemple de calcul',
        body: '<p>Supposons qu\'un contrat prévoie une livraison dans <strong>5 jours ouvrables à partir du lundi 7 avril</strong>. En ne comptant que les jours de semaine, cela signifie une livraison au plus tard le vendredi 11 avril — samedi et dimanche sont ignorés.</p>',
        table: `<table>
<tr><th>Jour</th><th>Jour calendaire</th><th>Jour ouvrable</th></tr>
<tr><td>Lundi 7 avr.</td><td>Jour 1</td><td>Jour 1</td></tr>
<tr><td>Mardi 8 avr.</td><td>Jour 2</td><td>Jour 2</td></tr>
<tr><td>Mercredi 9 avr.</td><td>Jour 3</td><td>Jour 3</td></tr>
<tr><td>Jeudi 10 avr.</td><td>Jour 4</td><td>Jour 4</td></tr>
<tr><td>Vendredi 11 avr.</td><td>Jour 5</td><td>Jour 5 ✓</td></tr>
<tr><td>Samedi 12 avr.</td><td>Jour 6</td><td>— (week-end)</td></tr>
<tr><td>Dimanche 13 avr.</td><td>Jour 7</td><td>— (week-end)</td></tr>
<tr><td>Lundi 14 avr.</td><td>Jour 8</td><td>Jour 6 (si nécessaire)</td></tr>
</table>`
      },
      {
        h2: 'Quand cela est-il important ?',
        body: `<p>La distinction entre jours ouvrables et jours calendaires est cruciale dans plusieurs situations concrètes :</p>
<ul>
<li><strong>Contrats et délais légaux :</strong> les tribunaux et les contrats utilisent généralement les jours ouvrables pour les délais de réponse, les fenêtres d'appel et les périodes de préavis.</li>
<li><strong>Livraison et expédition :</strong> les transporteurs citent souvent des délais en jours ouvrables. Un envoi « 3 jours ouvrables » commandé le vendredi peut n'arriver que le mercredi.</li>
<li><strong>Paie :</strong> certains cycles de paie comptent les jours ouvrables bimensuels, ce qui affecte le moment où les virements sont crédités.</li>
<li><strong>Banque :</strong> les transferts de fonds et les délais d'encaissement des chèques sont mesurés en jours ouvrables.</li>
</ul>`
      },
      {
        h2: 'Jours fériés',
        body: `<p>Les jours fériés varient considérablement selon les pays, les régions et même les secteurs d'activité. En France, les jours fériés légaux sont au nombre de onze, mais les conventions collectives peuvent en prévoir davantage.</p>
<p>Lorsque vous comptez des jours ouvrables pour un délai, vérifiez toujours si des jours fériés tombent dans la période — chacun ajoute un jour calendaire supplémentaire au décompte global. Certains contrats précisent explicitement le calendrier des jours fériés applicable.</p>`
      },
    ],
    faqs: [
      { q: 'Le samedi est-il un jour ouvrable ?', a: 'Non. Dans la plupart des pays, le samedi et le dimanche ne sont pas des jours ouvrables. Les jours ouvrables vont du lundi au vendredi, hors jours fériés.' },
      { q: 'Les jours ouvrables sont-ils les mêmes partout dans le monde ?', a: 'Pas exactement. Dans certains pays (comme Israël ou l\'Arabie saoudite), la semaine de travail va du dimanche au jeudi. La plupart des pays occidentaux utilisent du lundi au vendredi.' },
      { q: 'Comment compter 10 jours ouvrables à partir d\'aujourd\'hui ?', a: 'Commencez à partir de demain et comptez vers l\'avenir, en sautant chaque samedi et dimanche. Pour chaque jour férié tombant dans la période, ajoutez un jour calendaire supplémentaire à la fin.' },
      { q: '« Dans les 5 jours ouvrables » inclut-il le jour de départ ?', a: 'Cela dépend de la formulation. « Dans les 5 jours ouvrables » signifie généralement 5 jours ouvrables complets après la date de départ — le jour J n\'est pas comptabilisé. Clarifiez toujours si le texte est ambigu.' },
    ],
    pillar: { href: '/fr/calculateur-jours-ouvrables/', label: 'Calculer les jours ouvrables entre deux dates' },
    related: [
      { href: '/fr/combien-de-jours-par-mois/', label: 'Combien de jours dans chaque mois' },
      { href: '/fr/jours-entre-deux-dates/', label: 'Calculateur de jours entre deux dates' },
    ],
  },
  es: {
    title: 'Días hábiles vs días calendario: ¿cuál es la diferencia?',
    metaDesc: 'Días hábiles contra días calendario explicados. Aprende la diferencia clave, ve un ejemplo de cálculo y entiende cuándo aplica cada tipo de conteo.',
    kicker: 'GUÍA DE FECHAS',
    h1: 'Días hábiles vs días calendario: ¿cuál es la diferencia?',
    intro: 'Cuando un plazo dice "5 días hábiles", significa algo muy diferente a "5 días calendario". Entender la distinción puede evitarte perder contratos, envíos y plazos legales.',
    sections: [
      {
        h2: 'Definiciones clave',
        body: `<p><strong>Los días calendario</strong> cuentan todos los días de la semana — de lunes a domingo, incluyendo fines de semana y festivos. Si cuentas 7 días calendario desde un lunes, llegas al lunes siguiente.</p>
<p><strong>Los días hábiles</strong> (también llamados días laborables) cuentan solo de lunes a viernes, <em>excluyendo</em> los días festivos. Si una empresa está cerrada un día festivo, ese día no cuenta.</p>
<ul>
<li><strong>Día calendario:</strong> cualquier día de la semana (lun–dom), incluidos fines de semana y festivos.</li>
<li><strong>Día hábil:</strong> de lunes a viernes, excluyendo días festivos.</li>
</ul>`
      },
      {
        h2: 'Ejemplo de cálculo',
        body: '<p>Supongamos que un contrato establece la entrega en <strong>5 días hábiles desde el lunes 7 de abril</strong>. Contando solo días laborables, eso significa entrega el viernes 11 de abril como máximo — sábado y domingo se saltan por completo.</p>',
        table: `<table>
<tr><th>Día</th><th>Día calendario</th><th>Día hábil</th></tr>
<tr><td>Lunes 7 abr.</td><td>Día 1</td><td>Día 1</td></tr>
<tr><td>Martes 8 abr.</td><td>Día 2</td><td>Día 2</td></tr>
<tr><td>Miércoles 9 abr.</td><td>Día 3</td><td>Día 3</td></tr>
<tr><td>Jueves 10 abr.</td><td>Día 4</td><td>Día 4</td></tr>
<tr><td>Viernes 11 abr.</td><td>Día 5</td><td>Día 5 ✓</td></tr>
<tr><td>Sábado 12 abr.</td><td>Día 6</td><td>— (fin de semana)</td></tr>
<tr><td>Domingo 13 abr.</td><td>Día 7</td><td>— (fin de semana)</td></tr>
<tr><td>Lunes 14 abr.</td><td>Día 8</td><td>Día 6 (si necesario)</td></tr>
</table>`
      },
      {
        h2: '¿Cuándo importa la diferencia?',
        body: `<p>La distinción entre días hábiles y días calendario es crítica en varios contextos del mundo real:</p>
<ul>
<li><strong>Contratos y plazos legales:</strong> los tribunales y contratos suelen usar días hábiles para los plazos de respuesta, ventanas de apelación y períodos de preaviso.</li>
<li><strong>Envíos y entregas:</strong> los servicios de mensajería suelen cotizar tiempos de entrega en días hábiles. Un envío de "3 días hábiles" pedido el viernes puede no llegar hasta el miércoles.</li>
<li><strong>Nómina:</strong> algunos ciclos de nómina cuentan días hábiles quincenales, lo que afecta cuándo se acreditan los depósitos.</li>
<li><strong>Banca:</strong> las transferencias de fondos y el cobro de cheques se miden en días hábiles, no en días calendario.</li>
</ul>`
      },
      {
        h2: 'Días festivos',
        body: `<p>Los días festivos varían significativamente según el país, el estado e incluso la industria. En España, existen festivos nacionales, autonómicos y locales que pueden reducir el número de días hábiles en un período determinado.</p>
<p>Al contar días hábiles para un plazo, comprueba siempre si hay días festivos dentro de la ventana temporal — cada uno añade un día calendario adicional al recuento total. Algunos contratos definen explícitamente qué calendario de festivos aplica.</p>`
      },
    ],
    faqs: [
      { q: '¿El sábado es un día hábil?', a: 'No. En la mayoría de los países, el sábado y el domingo no son días hábiles. Los días hábiles son de lunes a viernes, excluyendo días festivos.' },
      { q: '¿Son iguales los días hábiles en todo el mundo?', a: 'No exactamente. En algunos países (como Israel o Arabia Saudí), la semana laboral va de domingo a jueves. La mayoría de los países occidentales usan de lunes a viernes como días hábiles.' },
      { q: '¿Cómo cuento 10 días hábiles desde hoy?', a: 'Empieza desde mañana y cuenta hacia adelante, saltando cada sábado y domingo. Por cada día festivo que caiga en la ventana, añade un día calendario adicional al final.' },
      { q: '¿"En 5 días hábiles" incluye el día de inicio?', a: 'Depende de la redacción. "En 5 días hábiles" normalmente significa 5 días hábiles completos después de la fecha de inicio — sin contar el día 0. Clarifica siempre si el lenguaje es ambiguo.' },
    ],
    pillar: { href: '/es/calculadora-dias-habiles/', label: 'Calcular días hábiles entre fechas' },
    related: [
      { href: '/es/cuantos-dias-tiene-cada-mes/', label: 'Cuántos días tiene cada mes' },
      { href: '/es/dias-entre-fechas/', label: 'Calculadora de días entre fechas' },
    ],
  },
};

// ── Article 3: how-many-weeks-in-a-year ──────────────────
T['how-many-weeks-in-a-year'] = {
  en: {
    title: 'How Many Weeks in a Year? Regular, Leap & ISO 53-Week Years',
    metaDesc: 'A regular year has 52 weeks and 1 day. A leap year has 52 weeks and 2 days. Learn about ISO 53-week years and which years have them (2020–2032).',
    kicker: 'CALENDAR GUIDE',
    h1: 'How Many Weeks in a Year?',
    intro: 'A regular year has 52 weeks and 1 day. A leap year has 52 weeks and 2 days. Here is everything you need to know — including why some years have 53 ISO weeks.',
    sections: [
      {
        h2: 'Regular Year vs Leap Year',
        body: '<p>The number of weeks in a year depends on whether the year has 365 or 366 days:</p>',
        table: `<table>
<tr><th>Year type</th><th>Days</th><th>Weeks</th><th>Extra days</th></tr>
<tr><td>Regular year</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 remainder 1)</td></tr>
<tr><td>Leap year</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 remainder 2)</td></tr>
</table>`
      },
      {
        h2: 'Why Some Years Have 53 ISO Weeks',
        body: `<p>The <strong>ISO 8601</strong> standard defines Week 1 of a year as the week containing the year's first Thursday. A week always runs Monday to Sunday.</p>
<p>Because of this definition, some years have a <strong>Week 53</strong>. This happens when January 1 falls on a Thursday in a regular year, or when January 1 or 2 falls on a Thursday in a leap year. In these cases, the last days of December belong to Week 53 of the old year rather than Week 1 of the new year.</p>
<p>Roughly 71 out of every 400 years (about 17.75%) contain an ISO Week 53.</p>`
      },
      {
        h2: 'Years with 53 ISO Weeks (2020–2032)',
        body: '<p>The following recent and upcoming years contain 53 ISO weeks:</p>',
        table: `<table>
<tr><th>Year</th><th>Jan 1 falls on</th><th>ISO weeks</th></tr>
<tr><td>2020</td><td>Wednesday</td><td>53</td></tr>
<tr><td>2026</td><td>Thursday</td><td>53</td></tr>
<tr><td>2032</td><td>Thursday</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Practical Uses',
        body: `<p>Knowing how many weeks are in a year is useful for several everyday situations:</p>
<ul>
<li><strong>Payroll:</strong> Employees paid bi-weekly receive 26 pay cheques per year (52 weeks ÷ 2). But because 52 weeks × 2 weeks = 364 days — one day short of 365 — every few years a payroll cycle produces 27 pay periods instead of 26, affecting budgets.</li>
<li><strong>Project planning:</strong> Quarterly plans (13 weeks each) assume 52 weeks per year. A 53-week year means one quarter will have 14 weeks.</li>
<li><strong>Retail and fiscal years:</strong> Many retailers use a 4-4-5 or 4-5-4 week calendar, and a 53-week year requires an adjustment to keep fiscal years aligned with the calendar.</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Does a year always have 52 weeks?', a: 'Almost always. Every year has 52 complete weeks plus either 1 extra day (regular year) or 2 extra days (leap year). Under the ISO 8601 standard, some years are assigned 53 numbered weeks.' },
      { q: 'What years have 53 ISO weeks?', a: 'Recent 53-week years include 2020 and 2026. The next is 2032. They occur when January 1 falls on a Thursday (regular year), or January 1 or 2 falls on a Thursday (leap year).' },
      { q: 'How many weeks are in a leap year?', a: 'A leap year has 366 days, which equals 52 weeks and 2 days. Like a regular year, it can also have 53 ISO weeks if the year starts on Thursday or the right configuration exists.' },
      { q: 'How many bi-weekly pay periods are in a year?', a: 'Usually 26. Divide 52 weeks by 2. However, because the year is actually 365 days (not 364), about every 5–7 years a 27th bi-weekly pay period occurs.' },
    ],
    pillar: { href: '/week-number/', label: 'Find the current week number' },
    related: [
      { href: '/how-many-days-in-each-month/', label: 'How many days in each month' },
      { href: '/week-number/', label: 'Current week number calculator' },
    ],
  },
  fr: {
    title: 'Combien de semaines dans une année ? Année normale, bissextile et ISO',
    metaDesc: 'Une année ordinaire compte 52 semaines et 1 jour. Une année bissextile en compte 52 et 2 jours. Découvrez aussi les années à 53 semaines ISO (2020–2032).',
    kicker: 'GUIDE CALENDRIER',
    h1: 'Combien de semaines dans une année ?',
    intro: 'Une année ordinaire compte 52 semaines et 1 jour. Une année bissextile en compte 52 et 2 jours. Voici tout ce que vous devez savoir — y compris pourquoi certaines années ont 53 semaines ISO.',
    sections: [
      {
        h2: 'Année ordinaire vs année bissextile',
        body: '<p>Le nombre de semaines dans une année dépend de si elle compte 365 ou 366 jours :</p>',
        table: `<table>
<tr><th>Type d'année</th><th>Jours</th><th>Semaines</th><th>Jours restants</th></tr>
<tr><td>Année ordinaire</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 reste 1)</td></tr>
<tr><td>Année bissextile</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 reste 2)</td></tr>
</table>`
      },
      {
        h2: 'Pourquoi certaines années ont 53 semaines ISO',
        body: `<p>La norme <strong>ISO 8601</strong> définit la Semaine 1 d'une année comme la semaine contenant le premier jeudi de l'année. Une semaine va toujours du lundi au dimanche.</p>
<p>En raison de cette définition, certaines années ont une <strong>Semaine 53</strong>. Cela se produit lorsque le 1er janvier tombe un jeudi en année ordinaire, ou lorsque le 1er ou le 2 janvier tombe un jeudi en année bissextile. Dans ces cas, les derniers jours de décembre appartiennent à la Semaine 53 de l'ancienne année plutôt qu'à la Semaine 1 de la nouvelle.</p>
<p>Environ 71 années sur 400 (soit environ 17,75 %) contiennent une Semaine ISO 53.</p>`
      },
      {
        h2: 'Années à 53 semaines ISO (2020–2032)',
        body: '<p>Les années récentes et prochaines contenant 53 semaines ISO sont les suivantes :</p>',
        table: `<table>
<tr><th>Année</th><th>Le 1er janvier tombe un</th><th>Semaines ISO</th></tr>
<tr><td>2020</td><td>Mercredi</td><td>53</td></tr>
<tr><td>2026</td><td>Jeudi</td><td>53</td></tr>
<tr><td>2032</td><td>Jeudi</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Utilisations pratiques',
        body: `<p>Connaître le nombre de semaines dans une année est utile dans plusieurs situations quotidiennes :</p>
<ul>
<li><strong>Paie :</strong> les employés payés toutes les deux semaines reçoivent 26 fiches de paie par an (52 semaines ÷ 2). Mais comme 52 semaines × 2 = 364 jours — un jour de moins que 365 — tous les quelques années, un cycle de paie produit 27 périodes au lieu de 26, ce qui affecte les budgets.</li>
<li><strong>Planification de projets :</strong> les plans trimestriels (13 semaines chacun) supposent 52 semaines par an. Une année à 53 semaines signifie qu'un trimestre aura 14 semaines.</li>
<li><strong>Années fiscales et commerce :</strong> de nombreux détaillants utilisent un calendrier 4-4-5 ou 4-5-4, et une année à 53 semaines nécessite un ajustement pour maintenir les années fiscales alignées sur le calendrier.</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Une année a-t-elle toujours 52 semaines ?', a: 'Presque toujours. Chaque année compte 52 semaines complètes plus 1 jour supplémentaire (année ordinaire) ou 2 jours supplémentaires (année bissextile). Selon la norme ISO 8601, certaines années se voient attribuer 53 semaines numérotées.' },
      { q: 'Quelles années ont 53 semaines ISO ?', a: 'Les années à 53 semaines récentes incluent 2020 et 2026. La prochaine est 2032. Elles surviennent lorsque le 1er janvier tombe un jeudi (année ordinaire) ou lorsque le 1er ou 2 janvier tombe un jeudi (année bissextile).' },
      { q: 'Combien de semaines compte une année bissextile ?', a: 'Une année bissextile compte 366 jours, soit 52 semaines et 2 jours. Comme une année ordinaire, elle peut aussi avoir 53 semaines ISO si l\'année commence dans la bonne configuration.' },
      { q: 'Combien de périodes de paie bimensuelles y a-t-il dans une année ?', a: 'Généralement 26. Divisez 52 semaines par 2. Cependant, comme l\'année compte 365 jours (et non 364), environ tous les 5 à 7 ans, une 27e période de paie bimensuelle se produit.' },
    ],
    pillar: { href: '/fr/numero-de-semaine/', label: 'Trouver le numéro de semaine actuel' },
    related: [
      { href: '/fr/combien-de-jours-par-mois/', label: 'Combien de jours dans chaque mois' },
      { href: '/fr/numero-de-semaine/', label: 'Calculateur de numéro de semaine' },
    ],
  },
  es: {
    title: '¿Cuántas semanas tiene un año? Año normal, bisiesto e ISO',
    metaDesc: 'Un año normal tiene 52 semanas y 1 día. Un año bisiesto tiene 52 semanas y 2 días. Descubre también los años con 53 semanas ISO (2020–2032).',
    kicker: 'GUÍA DE CALENDARIO',
    h1: '¿Cuántas semanas tiene un año?',
    intro: 'Un año regular tiene 52 semanas y 1 día. Un año bisiesto tiene 52 semanas y 2 días. Aquí tienes todo lo que necesitas saber — incluido por qué algunos años tienen 53 semanas ISO.',
    sections: [
      {
        h2: 'Año regular vs año bisiesto',
        body: '<p>El número de semanas en un año depende de si tiene 365 o 366 días:</p>',
        table: `<table>
<tr><th>Tipo de año</th><th>Días</th><th>Semanas</th><th>Días extra</th></tr>
<tr><td>Año regular</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 resto 1)</td></tr>
<tr><td>Año bisiesto</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 resto 2)</td></tr>
</table>`
      },
      {
        h2: 'Por qué algunos años tienen 53 semanas ISO',
        body: `<p>El estándar <strong>ISO 8601</strong> define la Semana 1 de un año como la semana que contiene el primer jueves del año. Una semana siempre va de lunes a domingo.</p>
<p>Debido a esta definición, algunos años tienen una <strong>Semana 53</strong>. Esto ocurre cuando el 1 de enero cae en jueves en un año regular, o cuando el 1 o 2 de enero cae en jueves en un año bisiesto. En estos casos, los últimos días de diciembre pertenecen a la Semana 53 del año anterior en lugar de la Semana 1 del nuevo año.</p>
<p>Aproximadamente 71 de cada 400 años (alrededor del 17,75 %) contienen una Semana ISO 53.</p>`
      },
      {
        h2: 'Años con 53 semanas ISO (2020–2032)',
        body: '<p>Los siguientes años recientes y próximos contienen 53 semanas ISO:</p>',
        table: `<table>
<tr><th>Año</th><th>El 1 de enero cae en</th><th>Semanas ISO</th></tr>
<tr><td>2020</td><td>Miércoles</td><td>53</td></tr>
<tr><td>2026</td><td>Jueves</td><td>53</td></tr>
<tr><td>2032</td><td>Jueves</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Usos prácticos',
        body: `<p>Saber cuántas semanas tiene un año es útil en varias situaciones cotidianas:</p>
<ul>
<li><strong>Nómina:</strong> los empleados pagados quincenalmente reciben 26 nóminas por año (52 semanas ÷ 2). Pero como 52 semanas × 2 = 364 días — un día menos que 365 — cada varios años un ciclo de nómina produce 27 períodos en lugar de 26, afectando los presupuestos.</li>
<li><strong>Planificación de proyectos:</strong> los planes trimestrales (13 semanas cada uno) asumen 52 semanas por año. Un año de 53 semanas significa que un trimestre tendrá 14 semanas.</li>
<li><strong>Años fiscales y comercio minorista:</strong> muchos minoristas usan un calendario 4-4-5 o 4-5-4, y un año de 53 semanas requiere un ajuste para mantener los años fiscales alineados con el calendario.</li>
</ul>`
      },
    ],
    faqs: [
      { q: '¿Un año siempre tiene 52 semanas?', a: 'Casi siempre. Cada año tiene 52 semanas completas más 1 día extra (año regular) o 2 días extra (año bisiesto). Según el estándar ISO 8601, algunos años se asignan 53 semanas numeradas.' },
      { q: '¿Qué años tienen 53 semanas ISO?', a: 'Años recientes con 53 semanas incluyen 2020 y 2026. El próximo es 2032. Ocurren cuando el 1 de enero cae en jueves (año regular), o cuando el 1 o 2 de enero cae en jueves (año bisiesto).' },
      { q: '¿Cuántas semanas tiene un año bisiesto?', a: 'Un año bisiesto tiene 366 días, lo que equivale a 52 semanas y 2 días. Como un año regular, también puede tener 53 semanas ISO si el año comienza con la configuración correcta.' },
      { q: '¿Cuántos períodos de pago quincenales hay en un año?', a: 'Normalmente 26. Divide 52 semanas entre 2. Sin embargo, como el año tiene 365 días (no 364), aproximadamente cada 5-7 años se produce un 27.º período de pago quincenal.' },
    ],
    pillar: { href: '/es/numero-de-semana/', label: 'Encontrar el número de semana actual' },
    related: [
      { href: '/es/cuantos-dias-tiene-cada-mes/', label: 'Cuántos días tiene cada mes' },
      { href: '/es/numero-de-semana/', label: 'Calculadora de número de semana' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'how-many-days-in-each-month',    slugs: { en: 'how-many-days-in-each-month',    fr: 'fr/combien-de-jours-par-mois',          es: 'es/cuantos-dias-tiene-cada-mes' } },
    { id: 'business-days-vs-calendar-days', slugs: { en: 'business-days-vs-calendar-days', fr: 'fr/jours-ouvrables-vs-jours-calendaires', es: 'es/dias-habiles-vs-dias-calendario' } },
    { id: 'how-many-weeks-in-a-year',       slugs: { en: 'how-many-weeks-in-a-year',       fr: 'fr/combien-de-semaines-dans-une-annee',  es: 'es/cuantas-semanas-tiene-un-ano' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
