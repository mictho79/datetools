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
  pt: {
    title: 'Quantos dias tem cada mês? — Referência completa de calendário',
    metaDesc: 'Quantos dias tem cada mês do ano? Janeiro tem 31, fevereiro tem 28 ou 29, e assim por diante. Tabela completa e o truque dos nós dos dedos explicado.',
    kicker: 'REFERÊNCIA DE CALENDÁRIO',
    h1: 'Quantos dias tem cada mês?',
    intro: 'Os meses do ano têm 28, 29, 30 ou 31 dias dependendo do mês — e se o ano é bissexto ou não. Fevereiro é o mais curto, com 28 dias em um ano regular e 29 dias em um ano bissexto.',
    sections: [
      {
        h2: 'Dias em cada mês',
        body: '<p>A tabela abaixo lista cada mês com sua contagem de dias e observações importantes:</p>',
        table: `<table>
<tr><th>Mês</th><th>Dias</th><th>Observações</th></tr>
<tr><td>Janeiro</td><td>31</td><td></td></tr>
<tr><td>Fevereiro</td><td>28</td><td>29 em ano bissexto</td></tr>
<tr><td>Março</td><td>31</td><td></td></tr>
<tr><td>Abril</td><td>30</td><td></td></tr>
<tr><td>Maio</td><td>31</td><td></td></tr>
<tr><td>Junho</td><td>30</td><td></td></tr>
<tr><td>Julho</td><td>31</td><td></td></tr>
<tr><td>Agosto</td><td>31</td><td></td></tr>
<tr><td>Setembro</td><td>30</td><td></td></tr>
<tr><td>Outubro</td><td>31</td><td></td></tr>
<tr><td>Novembro</td><td>30</td><td></td></tr>
<tr><td>Dezembro</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'O truque dos nós dos dedos',
        body: `<p>Existe um método mnemônico simples para memorizar quais meses têm 31 dias: feche o punho e conte os nós dos dedos e os vales entre eles, começando pelo nó do dedo indicador.</p>
<ul>
<li>Um <strong>nó</strong> (elevado) = <strong>31 dias</strong></li>
<li>Um <strong>vale</strong> (entre os nós) = <strong>30 dias</strong> (ou 28/29 para fevereiro)</li>
</ul>
<p>Da esquerda para a direita: Jan (nó) = 31, Fev (vale) = 28/29, Mar (nó) = 31, Abr (vale) = 30, Mai (nó) = 31, Jun (vale) = 30, Jul (nó) = 31 — depois recomece no mesmo nó do indicador: Ago (nó) = 31, Set (vale) = 30, Out (nó) = 31, Nov (vale) = 30, Dez (nó) = 31.</p>
<p>Como você recomeça no mesmo nó para agosto, julho e agosto ficam ambos em um nó — dando a eles dois meses consecutivos de 31 dias.</p>`
      },
      {
        h2: 'Por que fevereiro tem menos dias?',
        body: `<p>O calendário moderno origina-se das reformas de <strong>Júlio César</strong> em 46 a.C., que introduziu o calendário juliano. Antes de sua reforma, o calendário romano era um caótico sistema lunar de 355 dias que exigia correções frequentes.</p>
<p>Os astrônomos de César alinharam o ano ao ciclo solar de 365,25 dias. Fevereiro era historicamente o último mês do ano romano e era usado como mês "de sobra" — recebia os dias necessários para equilibrar o calendário. Quando os imperadores adicionaram posteriormente dias a julho (nomeado em homenagem a Júlio César) e agosto (nomeado em homenagem a Augusto), fevereiro — já o mais curto — ficou com 28 dias.</p>
<p>O <strong>dia bissexto</strong> (29 de fevereiro) foi adicionado a cada quatro anos para compensar os 0,25 dias extras por ano solar, prática refinada pelo calendário gregoriano em 1582.</p>`
      },
    ],
    faqs: [
      { q: 'Quais meses têm 31 dias?', a: 'Janeiro, março, maio, julho, agosto, outubro e dezembro têm 31 dias — sete meses no total.' },
      { q: 'Quais meses têm 30 dias?', a: 'Abril, junho, setembro e novembro têm 30 dias.' },
      { q: 'Quantos dias fevereiro tem?', a: 'Fevereiro tem 28 dias em um ano regular e 29 dias em um ano bissexto, que ocorre a cada quatro anos (com raras exceções para anos seculares).' },
      { q: 'Como posso lembrar quantos dias cada mês tem?', a: 'Use o truque dos nós dos dedos: feche o punho e conte nós (31 dias) e vales (30 dias ou 28/29 para fevereiro) da esquerda para a direita, recomeçando no primeiro nó após julho.' },
    ],
    pillar: { href: '/pt/dias-entre-datas/', label: 'Calcular dias entre duas datas' },
    related: [
      { href: '/pt/dias-uteis-vs-dias-corridos/', label: 'Dias úteis vs dias corridos' },
      { href: '/pt/quantas-semanas-tem-um-ano/', label: 'Quantas semanas tem um ano' },
    ],
  },
  de: {
    title: 'Wie viele Tage hat jeder Monat? — Vollständige Kalenderreferenz',
    metaDesc: 'Wie viele Tage hat jeder Monat im Jahr? Januar hat 31, Februar hat 28 oder 29, und so weiter. Vollständige Tabelle und der Knöchel-Trick erklärt.',
    kicker: 'KALENDERREFERENZ',
    h1: 'Wie viele Tage hat jeder Monat?',
    intro: 'Die Monate des Jahres haben 28, 29, 30 oder 31 Tage — je nach Monat und ob es sich um ein Schaltjahr handelt. Februar ist der kürzeste Monat mit 28 Tagen in einem normalen Jahr und 29 Tagen in einem Schaltjahr.',
    sections: [
      {
        h2: 'Tage in jedem Monat',
        body: '<p>Die folgende Tabelle listet jeden Monat mit seiner Tageszahl und wichtigen Hinweisen auf:</p>',
        table: `<table>
<tr><th>Monat</th><th>Tage</th><th>Hinweise</th></tr>
<tr><td>Januar</td><td>31</td><td></td></tr>
<tr><td>Februar</td><td>28</td><td>29 im Schaltjahr</td></tr>
<tr><td>März</td><td>31</td><td></td></tr>
<tr><td>April</td><td>30</td><td></td></tr>
<tr><td>Mai</td><td>31</td><td></td></tr>
<tr><td>Juni</td><td>30</td><td></td></tr>
<tr><td>Juli</td><td>31</td><td></td></tr>
<tr><td>August</td><td>31</td><td></td></tr>
<tr><td>September</td><td>30</td><td></td></tr>
<tr><td>Oktober</td><td>31</td><td></td></tr>
<tr><td>November</td><td>30</td><td></td></tr>
<tr><td>Dezember</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'Der Knöchel-Trick',
        body: `<p>Es gibt eine einfache Gedächtnisstütze, um sich zu merken, welche Monate 31 Tage haben: Ballen Sie die Faust und zählen Sie über Ihre Knöchel und die Täler dazwischen, beginnend beim Zeigefingerknöchel.</p>
<ul>
<li>Ein <strong>Knöchel</strong> (erhöht) = <strong>31 Tage</strong></li>
<li>Ein <strong>Tal</strong> (zwischen Knöcheln) = <strong>30 Tage</strong> (oder 28/29 für Februar)</li>
</ul>
<p>Von links nach rechts: Jan (Knöchel) = 31, Feb (Tal) = 28/29, Mär (Knöchel) = 31, Apr (Tal) = 30, Mai (Knöchel) = 31, Jun (Tal) = 30, Jul (Knöchel) = 31 — dann beim gleichen Zeigefingerknöchel neu beginnen: Aug (Knöchel) = 31, Sep (Tal) = 30, Okt (Knöchel) = 31, Nov (Tal) = 30, Dez (Knöchel) = 31.</p>
<p>Da Sie für August beim gleichen Knöchel neu beginnen, landen sowohl Juli als auch August auf einem Knöchel — was ihnen zwei aufeinanderfolgende Monate mit 31 Tagen gibt.</p>`
      },
      {
        h2: 'Warum hat Februar weniger Tage?',
        body: `<p>Der moderne Kalender geht auf die Reformen von <strong>Julius Cäsar</strong> im Jahr 46 v. Chr. zurück, der den julianischen Kalender einführte. Vor seiner Reform war der römische Kalender ein chaotisches Mondsystem mit 355 Tagen, das häufige Korrekturen erforderte.</p>
<p>Cäsars Astronomen richteten das Jahr am Sonnenzyklus von 365,25 Tagen aus. Februar war historisch gesehen der letzte Monat des römischen Jahres und diente als "Restmonat" — er erhielt die Tage, die zum Ausgleich des Kalenders benötigt wurden. Als Kaiser später dem Juli (benannt nach Julius Cäsar) und August (benannt nach Augustus) Tage hinzufügten, blieb der Februar — ohnehin der kürzeste — bei 28 Tagen.</p>
<p>Der <strong>Schalttag</strong> (29. Februar) wurde alle vier Jahre hinzugefügt, um die zusätzlichen 0,25 Tage pro Sonnenjahr auszugleichen — eine Praxis, die durch den gregorianischen Kalender im Jahr 1582 weiter verfeinert wurde.</p>`
      },
    ],
    faqs: [
      { q: 'Welche Monate haben 31 Tage?', a: 'Januar, März, Mai, Juli, August, Oktober und Dezember haben alle 31 Tage — insgesamt sieben Monate.' },
      { q: 'Welche Monate haben 30 Tage?', a: 'April, Juni, September und November haben 30 Tage.' },
      { q: 'Wie viele Tage hat Februar?', a: 'Februar hat 28 Tage in einem normalen Jahr und 29 Tage in einem Schaltjahr, das alle vier Jahre vorkommt (mit seltenen Ausnahmen für Säkularjahre).' },
      { q: 'Wie kann ich mir merken, wie viele Tage jeder Monat hat?', a: 'Benutzen Sie den Knöchel-Trick: Ballen Sie die Faust und zählen Sie Knöchel (31 Tage) und Täler (30 Tage oder 28/29 für Februar) von links nach rechts und beginnen Sie nach Juli beim ersten Knöchel neu.' },
    ],
    pillar: { href: '/de/tage-zwischen-daten/', label: 'Tage zwischen zwei Daten berechnen' },
    related: [
      { href: '/de/werktage-vs-kalendertage/', label: 'Werktage vs Kalendertage' },
      { href: '/de/wie-viele-wochen-hat-ein-jahr/', label: 'Wie viele Wochen hat ein Jahr' },
    ],
  },
  it: {
    title: 'Quanti giorni ha ogni mese? — Riferimento completo del calendario',
    metaDesc: 'Quanti giorni ha ogni mese dell\'anno? Gennaio ha 31, febbraio ne ha 28 o 29 e così via. Tabella completa e il trucco delle nocche spiegato.',
    kicker: 'RIFERIMENTO CALENDARIO',
    h1: 'Quanti giorni ha ogni mese?',
    intro: 'I mesi dell\'anno hanno 28, 29, 30 o 31 giorni a seconda del mese — e se l\'anno è bisestile o meno. Febbraio è il più corto, con 28 giorni in un anno normale e 29 in un anno bisestile.',
    sections: [
      {
        h2: 'Giorni in ogni mese',
        body: '<p>La tabella seguente elenca ogni mese con il numero di giorni e le note più importanti:</p>',
        table: `<table>
<tr><th>Mese</th><th>Giorni</th><th>Note</th></tr>
<tr><td>Gennaio</td><td>31</td><td></td></tr>
<tr><td>Febbraio</td><td>28</td><td>29 in un anno bisestile</td></tr>
<tr><td>Marzo</td><td>31</td><td></td></tr>
<tr><td>Aprile</td><td>30</td><td></td></tr>
<tr><td>Maggio</td><td>31</td><td></td></tr>
<tr><td>Giugno</td><td>30</td><td></td></tr>
<tr><td>Luglio</td><td>31</td><td></td></tr>
<tr><td>Agosto</td><td>31</td><td></td></tr>
<tr><td>Settembre</td><td>30</td><td></td></tr>
<tr><td>Ottobre</td><td>31</td><td></td></tr>
<tr><td>Novembre</td><td>30</td><td></td></tr>
<tr><td>Dicembre</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'Il trucco delle nocche',
        body: `<p>Esiste un semplice metodo mnemonico per ricordare quali mesi hanno 31 giorni: stringete il pugno e contate le nocche e le valli tra di esse, partendo dalla nocca dell'indice.</p>
<ul>
<li>Una <strong>nocca</strong> (sporgente) = <strong>31 giorni</strong></li>
<li>Una <strong>valle</strong> (tra le nocche) = <strong>30 giorni</strong> (o 28/29 per febbraio)</li>
</ul>
<p>Da sinistra a destra: Gen (nocca) = 31, Feb (valle) = 28/29, Mar (nocca) = 31, Apr (valle) = 30, Mag (nocca) = 31, Giu (valle) = 30, Lug (nocca) = 31 — poi ricominciare dalla stessa nocca dell'indice: Ago (nocca) = 31, Set (valle) = 30, Ott (nocca) = 31, Nov (valle) = 30, Dic (nocca) = 31.</p>
<p>Poiché si ricomincia dalla stessa nocca per agosto, sia luglio che agosto cadono su una nocca — dando loro due mesi consecutivi da 31 giorni.</p>`
      },
      {
        h2: 'Perché febbraio ha meno giorni?',
        body: `<p>Il calendario moderno trae origine dalle riforme di <strong>Giulio Cesare</strong> nel 46 a.C., che introdusse il calendario giuliano. Prima della sua riforma, il calendario romano era un caotico sistema lunare di 355 giorni che richiedeva frequenti correzioni.</p>
<p>Gli astronomi di Cesare allinearono l'anno al ciclo solare di 365,25 giorni. Febbraio era storicamente l'ultimo mese dell'anno romano e veniva usato come mese "di resto" — riceveva i giorni necessari per bilanciare il calendario. Quando gli imperatori aggiunsero in seguito giorni a luglio (chiamato così in onore di Giulio Cesare) e agosto (in onore di Augusto), febbraio — già il più corto — rimase a 28 giorni.</p>
<p>Il <strong>giorno bisestile</strong> (29 febbraio) fu aggiunto ogni quattro anni per compensare gli 0,25 giorni extra per anno solare, pratica ulteriormente perfezionata dal calendario gregoriano nel 1582.</p>`
      },
    ],
    faqs: [
      { q: 'Quali mesi hanno 31 giorni?', a: 'Gennaio, marzo, maggio, luglio, agosto, ottobre e dicembre hanno tutti 31 giorni — sette mesi in totale.' },
      { q: 'Quali mesi hanno 30 giorni?', a: 'Aprile, giugno, settembre e novembre hanno 30 giorni.' },
      { q: 'Quanti giorni ha febbraio?', a: 'Febbraio ha 28 giorni in un anno normale e 29 giorni in un anno bisestile, che si verifica ogni quattro anni (con rare eccezioni per gli anni secolari).' },
      { q: 'Come posso ricordare quanti giorni ha ogni mese?', a: 'Usa il trucco delle nocche: stringi il pugno e conta nocche (31 giorni) e valli (30 giorni o 28/29 per febbraio) da sinistra a destra, ricominciando alla prima nocca dopo luglio.' },
    ],
    pillar: { href: '/it/giorni-tra-le-date/', label: 'Calcola i giorni tra due date' },
    related: [
      { href: '/it/giorni-lavorativi-vs-giorni-calendario/', label: 'Giorni lavorativi vs giorni calendario' },
      { href: '/it/quante-settimane-ha-un-anno/', label: 'Quante settimane ha un anno' },
    ],
  },
  pl: {
    title: 'Ile dni ma każdy miesiąc? — Kompletna tabela kalendarza',
    metaDesc: 'Ile dni ma każdy miesiąc roku? Styczeń ma 31, luty ma 28 lub 29 i tak dalej. Pełna tabela i sztuczka z kostkami dłoni wyjaśniona.',
    kicker: 'TABELA KALENDARZA',
    h1: 'Ile dni ma każdy miesiąc?',
    intro: 'Miesiące roku mają 28, 29, 30 lub 31 dni w zależności od miesiąca — i od tego, czy rok jest przestępny. Luty jest najkrótszy: 28 dni w zwykłym roku i 29 dni w roku przestępnym.',
    sections: [
      {
        h2: 'Dni w każdym miesiącu',
        body: '<p>Poniższa tabela zawiera każdy miesiąc z liczbą dni i ważnymi uwagami:</p>',
        table: `<table>
<tr><th>Miesiąc</th><th>Dni</th><th>Uwagi</th></tr>
<tr><td>Styczeń</td><td>31</td><td></td></tr>
<tr><td>Luty</td><td>28</td><td>29 w roku przestępnym</td></tr>
<tr><td>Marzec</td><td>31</td><td></td></tr>
<tr><td>Kwiecień</td><td>30</td><td></td></tr>
<tr><td>Maj</td><td>31</td><td></td></tr>
<tr><td>Czerwiec</td><td>30</td><td></td></tr>
<tr><td>Lipiec</td><td>31</td><td></td></tr>
<tr><td>Sierpień</td><td>31</td><td></td></tr>
<tr><td>Wrzesień</td><td>30</td><td></td></tr>
<tr><td>Październik</td><td>31</td><td></td></tr>
<tr><td>Listopad</td><td>30</td><td></td></tr>
<tr><td>Grudzień</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'Sztuczka z kostkami dłoni',
        body: `<p>Istnieje prosty sposób mnemoniczny, by zapamiętać, które miesiące mają 31 dni: zaciśnij pięść i licz kostki dłoni oraz doliny między nimi, zaczynając od kostki palca wskazującego.</p>
<ul>
<li><strong>Kostka</strong> (wypukła) = <strong>31 dni</strong></li>
<li><strong>Dolina</strong> (między kostkami) = <strong>30 dni</strong> (lub 28/29 dla lutego)</li>
</ul>
<p>Od lewej do prawej: Sty (kostka) = 31, Lut (dolina) = 28/29, Mar (kostka) = 31, Kwi (dolina) = 30, Maj (kostka) = 31, Cze (dolina) = 30, Lip (kostka) = 31 — następnie wróć do tej samej kostki wskaziciela: Sie (kostka) = 31, Wrz (dolina) = 30, Paź (kostka) = 31, Lis (dolina) = 30, Gru (kostka) = 31.</p>
<p>Ponieważ dla sierpnia zaczynasz od tej samej kostki, zarówno lipiec, jak i sierpień lądują na kostce — dając im dwa kolejne miesiące po 31 dni.</p>`
      },
      {
        h2: 'Dlaczego luty ma mniej dni?',
        body: `<p>Współczesny kalendarz wywodzi się z reform <strong>Juliusza Cezara</strong> w 46 roku p.n.e., który wprowadził kalendarz juliański. Przed jego reformą kalendarz rzymski był chaotycznym systemem księżycowym liczącym 355 dni, wymagającym częstych korekt.</p>
<p>Astronomowie Cezara dostosowali rok do cyklu słonecznego wynoszącego 365,25 dnia. Luty był historycznie ostatnim miesiącem roku rzymskiego i służył jako miesiąc "resztkowy" — otrzymywał dni potrzebne do zrównoważenia kalendarza. Gdy cesarze dodali później dni do lipca (nazwanego na cześć Juliusza Cezara) i sierpnia (nazwanego na cześć Augusta), luty — już najkrótszy — pozostał przy 28 dniach.</p>
<p><strong>Dzień przestępny</strong> (29 lutego) był dodawany co cztery lata, aby uwzględnić dodatkowe 0,25 dnia w roku słonecznym — praktykę tę udoskonalił kalendarz gregoriański w 1582 roku.</p>`
      },
    ],
    faqs: [
      { q: 'Które miesiące mają 31 dni?', a: 'Styczeń, marzec, maj, lipiec, sierpień, październik i grudzień mają po 31 dni — łącznie siedem miesięcy.' },
      { q: 'Które miesiące mają 30 dni?', a: 'Kwiecień, czerwiec, wrzesień i listopad mają 30 dni.' },
      { q: 'Ile dni ma luty?', a: 'Luty ma 28 dni w zwykłym roku i 29 dni w roku przestępnym, który występuje co cztery lata (z rzadkimi wyjątkami dla lat stuletnich).' },
      { q: 'Jak zapamiętać liczbę dni w każdym miesiącu?', a: 'Użyj sztuczki z kostkami dłoni: zaciśnij pięść i licz kostki (31 dni) i doliny (30 dni lub 28/29 dla lutego) od lewej do prawej, zaczynając od nowa przy pierwszej kostce po lipcu.' },
    ],
    pillar: { href: '/pl/dni-miedzy-datami/', label: 'Oblicz dni między dwiema datami' },
    related: [
      { href: '/pl/dni-robocze-vs-dni-kalendarzowe/', label: 'Dni robocze vs dni kalendarzowe' },
      { href: '/pl/ile-tygodni-ma-rok/', label: 'Ile tygodni ma rok' },
    ],
  },
  ja: {
    title: '各月の日数は何日？ — カレンダー完全ガイド',
    metaDesc: '各月の日数を一覧で確認。1月は31日、2月は28日または29日など。完全な表と指の関節を使った覚え方を解説。',
    kicker: 'カレンダーガイド',
    h1: '各月の日数は何日？',
    intro: '1年の各月は28、29、30、または31日あります。月によって異なり、うるう年かどうかによっても変わります。2月が最も短く、通常年は28日、うるう年は29日です。',
    sections: [
      {
        h2: '各月の日数',
        body: '<p>以下の表に各月の日数と重要な注意事項をまとめました：</p>',
        table: `<table>
<tr><th>月</th><th>日数</th><th>備考</th></tr>
<tr><td>1月</td><td>31</td><td></td></tr>
<tr><td>2月</td><td>28</td><td>うるう年は29日</td></tr>
<tr><td>3月</td><td>31</td><td></td></tr>
<tr><td>4月</td><td>30</td><td></td></tr>
<tr><td>5月</td><td>31</td><td></td></tr>
<tr><td>6月</td><td>30</td><td></td></tr>
<tr><td>7月</td><td>31</td><td></td></tr>
<tr><td>8月</td><td>31</td><td></td></tr>
<tr><td>9月</td><td>30</td><td></td></tr>
<tr><td>10月</td><td>31</td><td></td></tr>
<tr><td>11月</td><td>30</td><td></td></tr>
<tr><td>12月</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: '指の関節を使った覚え方',
        body: `<p>31日ある月を覚える簡単な方法があります。握り拳を作り、人差し指の関節から始めて、関節と谷を順番に数えます。</p>
<ul>
<li><strong>関節</strong>（出っ張り）= <strong>31日</strong></li>
<li><strong>谷</strong>（くぼみ）= <strong>30日</strong>（または2月は28/29日）</li>
</ul>
<p>左から右へ：1月（関節）= 31、2月（谷）= 28/29、3月（関節）= 31、4月（谷）= 30、5月（関節）= 31、6月（谷）= 30、7月（関節）= 31 — その後、同じ人差し指の関節から再スタート：8月（関節）= 31、9月（谷）= 30、10月（関節）= 31、11月（谷）= 30、12月（関節）= 31。</p>
<p>8月で同じ関節から始めるため、7月と8月がどちらも関節に来ます。そのため連続して31日の月が並びます。</p>`
      },
      {
        h2: 'なぜ2月は日数が少ないのか？',
        body: `<p>現代の暦は、紀元前46年の<strong>ユリウス・カエサル</strong>の改革に由来します。彼はユリウス暦を導入しました。改革以前のローマ暦は355日の混乱した太陰暦で、頻繁な修正が必要でした。</p>
<p>カエサルの天文学者たちは1年を365.25日の太陽周期に合わせました。2月はローマ年の歴史的に最後の月であり、カレンダーを調整するための「余り」の月として使われていました。後に皇帝たちが7月（ユリウス・カエサルにちなんで命名）と8月（アウグストゥスにちなんで命名）に日数を追加したため、すでに最も短い2月は28日のままとなりました。</p>
<p><strong>うるう日</strong>（2月29日）は太陽年の0.25日分を補うために4年ごとに追加され、この慣行は1582年のグレゴリオ暦によってさらに改良されました。</p>`
      },
    ],
    faqs: [
      { q: '31日ある月はどれですか？', a: '1月、3月、5月、7月、8月、10月、12月の7か月が31日あります。' },
      { q: '30日ある月はどれですか？', a: '4月、6月、9月、11月が30日あります。' },
      { q: '2月は何日ですか？', a: '通常年は28日、うるう年は29日です。うるう年は4年ごとに来ます（100年ごとの例外を除く）。' },
      { q: '各月の日数を覚えるコツは？', a: '指の関節を使った方法がおすすめです。握り拳を作り、関節（31日）と谷（30日または2月は28/29日）を左から右へ数え、7月の後は最初の関節から再スタートします。' },
    ],
    pillar: { href: '/ja/hi-zuke-no-aida-no-nichi-su/', label: '2つの日付間の日数を計算' },
    related: [
      { href: '/ja/eigyo-bi-vs-karendar-bi/', label: '営業日 vs カレンダー日' },
      { href: '/ja/ichi-nen-no-shu-su/', label: '1年の週数' },
    ],
  },
  ko: {
    title: '각 달의 일수는 몇 일인가요? — 완전한 달력 참조',
    metaDesc: '1년 각 달의 일수는? 1월은 31일, 2월은 28일 또는 29일 등. 완전한 표와 주먹 관절 암기법 설명.',
    kicker: '달력 가이드',
    h1: '각 달의 일수는 몇 일인가요?',
    intro: '1년의 각 달은 28, 29, 30 또는 31일입니다. 달에 따라 다르고 윤년 여부에 따라서도 달라집니다. 2월이 가장 짧아서 보통 해에는 28일, 윤년에는 29일입니다.',
    sections: [
      {
        h2: '각 달의 일수',
        body: '<p>아래 표에 각 달의 일수와 주요 참고 사항이 정리되어 있습니다:</p>',
        table: `<table>
<tr><th>월</th><th>일수</th><th>비고</th></tr>
<tr><td>1월</td><td>31</td><td></td></tr>
<tr><td>2월</td><td>28</td><td>윤년에는 29일</td></tr>
<tr><td>3월</td><td>31</td><td></td></tr>
<tr><td>4월</td><td>30</td><td></td></tr>
<tr><td>5월</td><td>31</td><td></td></tr>
<tr><td>6월</td><td>30</td><td></td></tr>
<tr><td>7월</td><td>31</td><td></td></tr>
<tr><td>8월</td><td>31</td><td></td></tr>
<tr><td>9월</td><td>30</td><td></td></tr>
<tr><td>10월</td><td>31</td><td></td></tr>
<tr><td>11월</td><td>30</td><td></td></tr>
<tr><td>12월</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: '주먹 관절 암기법',
        body: `<p>31일 있는 달을 기억하는 간단한 방법이 있습니다. 주먹을 쥐고 검지 관절부터 시작해서 관절과 골짜기를 순서대로 셉니다.</p>
<ul>
<li><strong>관절</strong>（볼록한 부분）= <strong>31일</strong></li>
<li><strong>골짜기</strong>（오목한 부분）= <strong>30일</strong>（또는 2월은 28/29일）</li>
</ul>
<p>왼쪽에서 오른쪽으로: 1월(관절) = 31, 2월(골짜기) = 28/29, 3월(관절) = 31, 4월(골짜기) = 30, 5월(관절) = 31, 6월(골짜기) = 30, 7월(관절) = 31 — 그런 다음 같은 검지 관절부터 다시 시작: 8월(관절) = 31, 9월(골짜기) = 30, 10월(관절) = 31, 11월(골짜기) = 30, 12월(관절) = 31.</p>
<p>8월에 같은 관절에서 다시 시작하기 때문에 7월과 8월이 모두 관절에 위치해 연속으로 31일인 달이 됩니다.</p>`
      },
      {
        h2: '왜 2월은 일수가 적을까요?',
        body: `<p>현대 달력은 기원전 46년 <strong>율리우스 카이사르</strong>의 개혁에서 비롯되었으며, 그는 율리우스력을 도입했습니다. 개혁 이전 로마 달력은 잦은 수정이 필요한 혼란스러운 355일짜리 태음력이었습니다.</p>
<p>카이사르의 천문학자들은 1년을 365.25일의 태양 주기에 맞췄습니다. 2월은 역사적으로 로마 달력의 마지막 달이었으며 달력의 균형을 맞추기 위한 '남는' 달로 사용되었습니다. 이후 황제들이 7월(율리우스 카이사르의 이름을 딴)과 8월(아우구스투스의 이름을 딴)에 날을 추가하자 이미 가장 짧았던 2월은 28일로 남게 되었습니다.</p>
<p><strong>윤일</strong>(2월 29일)은 태양년의 0.25일을 보완하기 위해 4년마다 추가되었으며, 이 관행은 1582년 그레고리력에 의해 더욱 정교해졌습니다.</p>`
      },
    ],
    faqs: [
      { q: '31일인 달은 어떤 달인가요?', a: '1월, 3월, 5월, 7월, 8월, 10월, 12월이 모두 31일입니다 — 총 7개월입니다.' },
      { q: '30일인 달은 어떤 달인가요?', a: '4월, 6월, 9월, 11월이 30일입니다.' },
      { q: '2월은 며칠인가요?', a: '보통 해에는 28일, 윤년에는 29일입니다. 윤년은 4년마다 돌아옵니다(100년 단위 예외 포함).' },
      { q: '각 달의 일수를 어떻게 기억하나요?', a: '주먹 관절 암기법을 사용하세요. 주먹을 쥐고 관절(31일)과 골짜기(30일 또는 2월은 28/29일)를 왼쪽에서 오른쪽으로 세고, 7월 이후에는 첫 번째 관절부터 다시 시작합니다.' },
    ],
    pillar: { href: '/ko/nal-jja-sa-i-il-su/', label: '두 날짜 사이의 일수 계산' },
    related: [
      { href: '/ko/yeong-eop-il-vs-dal-ryeok-il/', label: '영업일 vs 달력 일수' },
      { href: '/ko/il-nyeon-ui-ju-su/', label: '1년의 주수' },
    ],
  },
  nl: {
    title: 'Hoeveel dagen heeft elke maand? — Volledige kalenderreferentie',
    metaDesc: 'Hoeveel dagen heeft elke maand van het jaar? Januari heeft 31, februari heeft 28 of 29, enzovoort. Volledige tabel en de knokkeltruc uitgelegd.',
    kicker: 'KALENDERREFERENTIE',
    h1: 'Hoeveel dagen heeft elke maand?',
    intro: 'De maanden van het jaar hebben 28, 29, 30 of 31 dagen, afhankelijk van de maand — en of het een schrikkeljaar is. Februari is de kortste maand met 28 dagen in een gewoon jaar en 29 dagen in een schrikkeljaar.',
    sections: [
      {
        h2: 'Dagen per maand',
        body: '<p>De onderstaande tabel toont elke maand met het aantal dagen en belangrijke opmerkingen:</p>',
        table: `<table>
<tr><th>Maand</th><th>Dagen</th><th>Opmerkingen</th></tr>
<tr><td>Januari</td><td>31</td><td></td></tr>
<tr><td>Februari</td><td>28</td><td>29 in een schrikkeljaar</td></tr>
<tr><td>Maart</td><td>31</td><td></td></tr>
<tr><td>April</td><td>30</td><td></td></tr>
<tr><td>Mei</td><td>31</td><td></td></tr>
<tr><td>Juni</td><td>30</td><td></td></tr>
<tr><td>Juli</td><td>31</td><td></td></tr>
<tr><td>Augustus</td><td>31</td><td></td></tr>
<tr><td>September</td><td>30</td><td></td></tr>
<tr><td>Oktober</td><td>31</td><td></td></tr>
<tr><td>November</td><td>30</td><td></td></tr>
<tr><td>December</td><td>31</td><td></td></tr>
</table>`
      },
      {
        h2: 'De knokkeltruc',
        body: `<p>Er is een eenvoudig ezelsbruggetje om te onthouden welke maanden 31 dagen hebben: maak een vuist en tel de knokkels en de dalen ertussen, te beginnen bij de knokkel van de wijsvinger.</p>
<ul>
<li>Een <strong>knokkel</strong> (verhoogd) = <strong>31 dagen</strong></li>
<li>Een <strong>dal</strong> (tussen knokkels) = <strong>30 dagen</strong> (of 28/29 voor februari)</li>
</ul>
<p>Van links naar rechts: Jan (knokkel) = 31, Feb (dal) = 28/29, Mrt (knokkel) = 31, Apr (dal) = 30, Mei (knokkel) = 31, Jun (dal) = 30, Jul (knokkel) = 31 — dan opnieuw beginnen bij dezelfde wijsvingerknokkel: Aug (knokkel) = 31, Sep (dal) = 30, Okt (knokkel) = 31, Nov (dal) = 30, Dec (knokkel) = 31.</p>
<p>Doordat u voor augustus opnieuw bij dezelfde knokkel begint, vallen zowel juli als augustus op een knokkel — zodat ze twee opeenvolgende maanden van 31 dagen hebben.</p>`
      },
      {
        h2: 'Waarom heeft februari minder dagen?',
        body: `<p>De moderne kalender is afkomstig van de hervormingen van <strong>Julius Caesar</strong> in 46 v.Chr., die de Juliaanse kalender invoerde. Vóór zijn hervorming was de Romeinse kalender een chaotisch maandstelsel van 355 dagen dat frequente correcties vereiste.</p>
<p>Caesars astronomen stemden het jaar af op de zonscyclus van 365,25 dagen. Februari was historisch gezien de laatste maand van het Romeinse jaar en diende als "restmaand" — het ontving de dagen die nodig waren om de kalender in balans te houden. Toen keizers later dagen toevoegden aan juli (vernoemd naar Julius Caesar) en augustus (vernoemd naar Augustus), bleef februari — al de kortste — bij 28 dagen.</p>
<p>De <strong>schrikkeldag</strong> (29 februari) werd elke vier jaar toegevoegd om de extra 0,25 dagen per zonnejaar te compenseren, een praktijk die verder werd verfijnd door de Gregoriaanse kalender in 1582.</p>`
      },
    ],
    faqs: [
      { q: 'Welke maanden hebben 31 dagen?', a: 'Januari, maart, mei, juli, augustus, oktober en december hebben allemaal 31 dagen — zeven maanden in totaal.' },
      { q: 'Welke maanden hebben 30 dagen?', a: 'April, juni, september en november hebben 30 dagen.' },
      { q: 'Hoeveel dagen heeft februari?', a: 'Februari heeft 28 dagen in een gewoon jaar en 29 dagen in een schrikkeljaar, dat om de vier jaar voorkomt (met zeldzame uitzonderingen voor eeuwjaren).' },
      { q: 'Hoe kan ik onthouden hoeveel dagen elke maand heeft?', a: 'Gebruik de knokkeltruc: maak een vuist en tel knokkels (31 dagen) en dalen (30 dagen of 28/29 voor februari) van links naar rechts, en begin opnieuw bij de eerste knokkel na juli.' },
    ],
    pillar: { href: '/nl/dagen-tussen-datums/', label: 'Bereken dagen tussen twee datums' },
    related: [
      { href: '/nl/werkdagen-vs-kalenderdagen/', label: 'Werkdagen vs kalenderdagen' },
      { href: '/nl/hoeveel-weken-heeft-een-jaar/', label: 'Hoeveel weken heeft een jaar' },
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
  pt: {
    title: 'Dias úteis vs dias corridos: qual é a diferença?',
    metaDesc: 'Dias úteis versus dias corridos explicados. Aprenda as diferenças principais, veja um exemplo de cálculo e entenda quando cada tipo de contagem importa.',
    kicker: 'GUIA DE DATAS',
    h1: 'Dias úteis vs dias corridos: qual é a diferença?',
    intro: 'Quando um prazo diz "5 dias úteis", significa algo muito diferente de "5 dias corridos". Entender a distinção pode evitar que você perca contratos, entregas e prazos legais.',
    sections: [
      {
        h2: 'Definições principais',
        body: `<p><strong>Dias corridos</strong> contam todos os dias da semana — de segunda a domingo, incluindo fins de semana e feriados. Quando você conta 7 dias corridos a partir de uma segunda-feira, chega à segunda-feira seguinte.</p>
<p><strong>Dias úteis</strong> (também chamados de dias de trabalho) contam apenas de segunda a sexta, <em>excluindo</em> feriados. Se uma empresa estiver fechada num feriado, esse dia não conta.</p>
<ul>
<li><strong>Dia corrido:</strong> qualquer dia da semana (seg–dom), incluindo fins de semana e feriados.</li>
<li><strong>Dia útil:</strong> de segunda a sexta, excluindo feriados.</li>
</ul>`
      },
      {
        h2: 'Exemplo de cálculo',
        body: '<p>Suponha que um contrato preveja entrega em <strong>5 dias úteis a partir de segunda-feira, 7 de abril</strong>. Contando apenas dias úteis, isso significa entrega até sexta-feira, 11 de abril — sábado e domingo são ignorados.</p>',
        table: `<table>
<tr><th>Dia</th><th>Dia corrido</th><th>Dia útil</th></tr>
<tr><td>Segunda, 7 abr.</td><td>Dia 1</td><td>Dia 1</td></tr>
<tr><td>Terça, 8 abr.</td><td>Dia 2</td><td>Dia 2</td></tr>
<tr><td>Quarta, 9 abr.</td><td>Dia 3</td><td>Dia 3</td></tr>
<tr><td>Quinta, 10 abr.</td><td>Dia 4</td><td>Dia 4</td></tr>
<tr><td>Sexta, 11 abr.</td><td>Dia 5</td><td>Dia 5 ✓</td></tr>
<tr><td>Sábado, 12 abr.</td><td>Dia 6</td><td>— (fim de semana)</td></tr>
<tr><td>Domingo, 13 abr.</td><td>Dia 7</td><td>— (fim de semana)</td></tr>
<tr><td>Segunda, 14 abr.</td><td>Dia 8</td><td>Dia 6 (se necessário)</td></tr>
</table>`
      },
      {
        h2: 'Quando isso importa?',
        body: `<p>A distinção entre dias úteis e dias corridos é crítica em vários contextos do mundo real:</p>
<ul>
<li><strong>Contratos e prazos legais:</strong> tribunais e contratos geralmente usam dias úteis para prazos de resposta, janelas de recurso e períodos de aviso prévio.</li>
<li><strong>Envio e entrega:</strong> serviços de courier frequentemente cotam prazos de entrega em dias úteis. Um envio de "3 dias úteis" feito na sexta pode não chegar até a quarta.</li>
<li><strong>Folha de pagamento:</strong> alguns ciclos de pagamento contam dias úteis quinzenais, afetando quando os depósitos são compensados.</li>
<li><strong>Banco:</strong> transferências de fundos e compensações de cheques são medidas em dias úteis, não em dias corridos.</li>
</ul>`
      },
      {
        h2: 'Feriados',
        body: `<p>Os feriados variam significativamente por país, estado e até setor. No Brasil, há feriados nacionais, estaduais e municipais que podem reduzir o número de dias úteis em um período.</p>
<p>Ao contar dias úteis para um prazo, verifique sempre se há feriados dentro do período — cada um adiciona um dia corrido extra ao total. Alguns contratos definem explicitamente qual calendário de feriados se aplica.</p>`
      },
    ],
    faqs: [
      { q: 'Sábado é dia útil?', a: 'Não. Na maioria dos países, sábado e domingo não são dias úteis. Dias úteis são de segunda a sexta, excluindo feriados.' },
      { q: 'Os dias úteis são iguais em todo o mundo?', a: 'Não exatamente. Em alguns países (como Israel ou Arábia Saudita), a semana de trabalho vai de domingo a quinta. A maioria dos países ocidentais usa de segunda a sexta como dias úteis.' },
      { q: 'Como conto 10 dias úteis a partir de hoje?', a: 'Comece a partir de amanhã e conte para frente, pulando cada sábado e domingo. Para cada feriado que cair no período, adicione mais um dia corrido ao final.' },
      { q: '"Em 5 dias úteis" inclui o dia de início?', a: 'Depende da redação. "Em 5 dias úteis" geralmente significa 5 dias úteis completos após a data de início — sem contar o Dia 0. Sempre esclareça se a linguagem for ambígua.' },
    ],
    pillar: { href: '/pt/calculadora-dias-uteis/', label: 'Calcular dias úteis entre datas' },
    related: [
      { href: '/pt/quantos-dias-tem-cada-mes/', label: 'Quantos dias tem cada mês' },
      { href: '/pt/dias-entre-datas/', label: 'Calculadora de dias entre datas' },
    ],
  },
  de: {
    title: 'Werktage vs Kalendertage: Was ist der Unterschied?',
    metaDesc: 'Werktage gegen Kalendertage erklärt. Lernen Sie die wichtigsten Unterschiede, sehen Sie ein Berechnungsbeispiel und verstehen Sie, wann welche Zählung relevant ist.',
    kicker: 'DATUMSRATGEBER',
    h1: 'Werktage vs Kalendertage: Was ist der Unterschied?',
    intro: 'Wenn eine Frist „5 Werktage" besagt, bedeutet das etwas ganz anderes als „5 Kalendertage". Das Verständnis dieses Unterschieds kann Ihnen helfen, Verträge, Lieferungen und rechtliche Fristen nicht zu verpassen.',
    sections: [
      {
        h2: 'Wichtige Definitionen',
        body: `<p><strong>Kalendertage</strong> zählen jeden einzelnen Tag der Woche — Montag bis Sonntag, einschließlich Wochenenden und Feiertagen. Wenn Sie 7 Kalendertage ab einem Montag zählen, landen Sie am folgenden Montag.</p>
<p><strong>Werktage</strong> (auch Arbeitstage genannt) zählen nur Montag bis Freitag, <em>ohne</em> Feiertage. Wenn ein Betrieb an einem Feiertag geschlossen ist, zählt dieser Tag nicht.</p>
<ul>
<li><strong>Kalendertag:</strong> jeder Tag der Woche (Mo–So), einschließlich Wochenenden und Feiertagen.</li>
<li><strong>Werktag:</strong> Montag–Freitag, ohne Feiertage.</li>
</ul>`
      },
      {
        h2: 'Berechnungsbeispiel',
        body: '<p>Angenommen, ein Vertrag sieht eine Lieferung innerhalb von <strong>5 Werktagen ab Montag, dem 7. April</strong> vor. Nur Wochentage zählend bedeutet das eine Lieferung bis spätestens Freitag, den 11. April — Samstag und Sonntag werden vollständig übersprungen.</p>',
        table: `<table>
<tr><th>Tag</th><th>Kalendertag</th><th>Werktag</th></tr>
<tr><td>Montag, 7. Apr.</td><td>Tag 1</td><td>Tag 1</td></tr>
<tr><td>Dienstag, 8. Apr.</td><td>Tag 2</td><td>Tag 2</td></tr>
<tr><td>Mittwoch, 9. Apr.</td><td>Tag 3</td><td>Tag 3</td></tr>
<tr><td>Donnerstag, 10. Apr.</td><td>Tag 4</td><td>Tag 4</td></tr>
<tr><td>Freitag, 11. Apr.</td><td>Tag 5</td><td>Tag 5 ✓</td></tr>
<tr><td>Samstag, 12. Apr.</td><td>Tag 6</td><td>— (Wochenende)</td></tr>
<tr><td>Sonntag, 13. Apr.</td><td>Tag 7</td><td>— (Wochenende)</td></tr>
<tr><td>Montag, 14. Apr.</td><td>Tag 8</td><td>Tag 6 (falls nötig)</td></tr>
</table>`
      },
      {
        h2: 'Wann spielt der Unterschied eine Rolle?',
        body: `<p>Der Unterschied zwischen Werktagen und Kalendertagen ist in mehreren realen Kontexten entscheidend:</p>
<ul>
<li><strong>Verträge und rechtliche Fristen:</strong> Gerichte und Verträge verwenden in der Regel Werktage für Antwortfristen, Einspruchsfristen und Kündigungsfristen.</li>
<li><strong>Versand und Lieferung:</strong> Kurierdienste geben Lieferzeiten oft in Werktagen an. Eine "3-Werktage"-Sendung, die freitags aufgegeben wird, kommt möglicherweise erst mittwochs an.</li>
<li><strong>Lohnabrechnung:</strong> Einige Lohnzyklen zählen zweiwöchentliche Werktage, was beeinflusst, wann Überweisungen gutgeschrieben werden.</li>
<li><strong>Banking:</strong> Überweisungen und Scheckeinlösungen werden in Werktagen, nicht in Kalendertagen gemessen.</li>
</ul>`
      },
      {
        h2: 'Feiertage',
        body: `<p>Feiertage variieren erheblich je nach Land, Bundesland und sogar Branche. In Deutschland gibt es bundesweite und länderspezifische Feiertage, die die Anzahl der Werktage in einem Zeitraum verringern können.</p>
<p>Wenn Sie Werktage für eine Frist zählen, prüfen Sie immer, ob Feiertage in den Zeitraum fallen — jeder davon fügt dem Gesamtzeitraum einen zusätzlichen Kalendertag hinzu. Einige Verträge legen ausdrücklich fest, welcher Feiertagskalender gilt.</p>`
      },
    ],
    faqs: [
      { q: 'Ist Samstag ein Werktag?', a: 'Nein. In den meisten Ländern sind Samstag und Sonntag keine Werktage. Werktage sind Montag bis Freitag, ohne Feiertage.' },
      { q: 'Sind Werktage weltweit gleich?', a: 'Nicht genau. In einigen Ländern (z. B. Israel oder Saudi-Arabien) läuft die Arbeitswoche von Sonntag bis Donnerstag. Die meisten westlichen Länder nutzen Montag–Freitag als Werktage.' },
      { q: 'Wie zähle ich 10 Werktage ab heute?', a: 'Beginnen Sie ab morgen und zählen Sie vorwärts, indem Sie jeden Samstag und Sonntag überspringen. Für jeden Feiertag, der in den Zeitraum fällt, fügen Sie am Ende einen weiteren Kalendertag hinzu.' },
      { q: 'Ist „innerhalb von 5 Werktagen" einschließlich des Starttages?', a: 'Das hängt von der Formulierung ab. „Innerhalb von 5 Werktagen" bedeutet in der Regel 5 vollständige Werktage nach dem Startdatum — ohne Tag 0. Klären Sie dies immer, wenn die Sprache unklar ist.' },
    ],
    pillar: { href: '/de/werktage-rechner/', label: 'Werktage zwischen Daten berechnen' },
    related: [
      { href: '/de/wie-viele-tage-hat-jeder-monat/', label: 'Wie viele Tage hat jeder Monat' },
      { href: '/de/tage-zwischen-daten/', label: 'Tage-zwischen-Daten-Rechner' },
    ],
  },
  it: {
    title: 'Giorni lavorativi vs giorni calendario: qual è la differenza?',
    metaDesc: 'Giorni lavorativi contro giorni calendario spiegati. Scopri le differenze chiave, vedi un esempio di calcolo e capisci quando conta ogni tipo di conteggio.',
    kicker: 'GUIDA DATE',
    h1: 'Giorni lavorativi vs giorni calendario: qual è la differenza?',
    intro: 'Quando una scadenza dice "5 giorni lavorativi", significa qualcosa di molto diverso da "5 giorni calendario". Capire la distinzione può salvarti dal perdere contratti, spedizioni e scadenze legali.',
    sections: [
      {
        h2: 'Definizioni chiave',
        body: `<p><strong>I giorni calendario</strong> contano ogni singolo giorno della settimana — dal lunedì alla domenica, compresi i weekend e i festivi. Se conti 7 giorni calendario da un lunedì, arrivi al lunedì successivo.</p>
<p><strong>I giorni lavorativi</strong> (detti anche giorni feriali) contano solo dal lunedì al venerdì, <em>escludendo</em> i giorni festivi. Se un'azienda è chiusa in un giorno festivo, quel giorno non conta.</p>
<ul>
<li><strong>Giorno calendario:</strong> qualsiasi giorno della settimana (lun–dom), compresi weekend e festivi.</li>
<li><strong>Giorno lavorativo:</strong> lunedì–venerdì, esclusi i giorni festivi.</li>
</ul>`
      },
      {
        h2: 'Esempio di calcolo',
        body: '<p>Supponiamo che un contratto preveda la consegna entro <strong>5 giorni lavorativi da lunedì 7 aprile</strong>. Contando solo i giorni feriali, significa consegna entro venerdì 11 aprile — sabato e domenica vengono saltati completamente.</p>',
        table: `<table>
<tr><th>Giorno</th><th>Giorno calendario</th><th>Giorno lavorativo</th></tr>
<tr><td>Lunedì 7 apr.</td><td>Giorno 1</td><td>Giorno 1</td></tr>
<tr><td>Martedì 8 apr.</td><td>Giorno 2</td><td>Giorno 2</td></tr>
<tr><td>Mercoledì 9 apr.</td><td>Giorno 3</td><td>Giorno 3</td></tr>
<tr><td>Giovedì 10 apr.</td><td>Giorno 4</td><td>Giorno 4</td></tr>
<tr><td>Venerdì 11 apr.</td><td>Giorno 5</td><td>Giorno 5 ✓</td></tr>
<tr><td>Sabato 12 apr.</td><td>Giorno 6</td><td>— (weekend)</td></tr>
<tr><td>Domenica 13 apr.</td><td>Giorno 7</td><td>— (weekend)</td></tr>
<tr><td>Lunedì 14 apr.</td><td>Giorno 8</td><td>Giorno 6 (se necessario)</td></tr>
</table>`
      },
      {
        h2: 'Quando fa la differenza?',
        body: `<p>La distinzione tra giorni lavorativi e giorni calendario è fondamentale in diversi contesti concreti:</p>
<ul>
<li><strong>Contratti e scadenze legali:</strong> i tribunali e i contratti usano generalmente i giorni lavorativi per le scadenze di risposta, i termini di appello e i periodi di preavviso.</li>
<li><strong>Spedizioni e consegne:</strong> i corrieri spesso indicano i tempi di consegna in giorni lavorativi. Una spedizione "3 giorni lavorativi" ordinata il venerdì potrebbe arrivare solo il mercoledì.</li>
<li><strong>Paghe:</strong> alcuni cicli di paghe contano i giorni lavorativi bisettimanali, influenzando quando i versamenti vengono accreditati.</li>
<li><strong>Banche:</strong> i bonifici e i tempi di compensazione degli assegni sono misurati in giorni lavorativi, non in giorni calendario.</li>
</ul>`
      },
      {
        h2: 'Giorni festivi',
        body: `<p>I giorni festivi variano notevolmente per paese, regione e persino settore. In Italia esistono festività nazionali e locali che possono ridurre il numero di giorni lavorativi in un determinato periodo.</p>
<p>Quando conti i giorni lavorativi per una scadenza, verifica sempre se nel periodo ricadono giorni festivi — ognuno aggiunge un giorno calendario in più al totale. Alcuni contratti specificano esplicitamente quale calendario festivo si applica.</p>`
      },
    ],
    faqs: [
      { q: 'Il sabato è un giorno lavorativo?', a: 'No. Nella maggior parte dei Paesi, sabato e domenica non sono giorni lavorativi. I giorni lavorativi vanno dal lunedì al venerdì, esclusi i festivi.' },
      { q: 'I giorni lavorativi sono uguali in tutto il mondo?', a: 'Non esattamente. In alcuni Paesi (come Israele o l\'Arabia Saudita), la settimana lavorativa va da domenica a giovedì. La maggior parte dei Paesi occidentali usa lunedì–venerdì come giorni lavorativi.' },
      { q: 'Come conto 10 giorni lavorativi da oggi?', a: 'Inizia da domani e conta in avanti, saltando ogni sabato e domenica. Per ogni giorno festivo che cade nel periodo, aggiungi un giorno calendario in più alla fine.' },
      { q: '"Entro 5 giorni lavorativi" include il giorno di inizio?', a: 'Dipende dalla formulazione. "Entro 5 giorni lavorativi" di solito significa 5 giorni lavorativi completi dopo la data di inizio — senza contare il Giorno 0. Chiarisci sempre se il linguaggio è ambiguo.' },
    ],
    pillar: { href: '/it/calcolatore-giorni-lavorativi/', label: 'Calcola giorni lavorativi tra date' },
    related: [
      { href: '/it/quanti-giorni-ha-ogni-mese/', label: 'Quanti giorni ha ogni mese' },
      { href: '/it/giorni-tra-le-date/', label: 'Calcolatore di giorni tra le date' },
    ],
  },
  pl: {
    title: 'Dni robocze vs dni kalendarzowe: jaka jest różnica?',
    metaDesc: 'Dni robocze versus dni kalendarzowe wyjaśnione. Poznaj kluczowe różnice, zobacz przykład obliczeń i zrozum, kiedy każdy rodzaj liczenia ma znaczenie.',
    kicker: 'PORADNIK DAT',
    h1: 'Dni robocze vs dni kalendarzowe: jaka jest różnica?',
    intro: 'Gdy termin mówi „5 dni roboczych", oznacza to coś zupełnie innego niż „5 dni kalendarzowych". Zrozumienie tej różnicy może uchronić cię przed przegapieniem umów, dostaw i terminów prawnych.',
    sections: [
      {
        h2: 'Kluczowe definicje',
        body: `<p><strong>Dni kalendarzowe</strong> liczą każdy dzień tygodnia — od poniedziałku do niedzieli, włącznie z weekendami i świętami. Gdy liczysz 7 dni kalendarzowych od poniedziałku, trafiasz na następny poniedziałek.</p>
<p><strong>Dni robocze</strong> (nazywane też dniami pracującymi) liczą tylko poniedziałek–piątek, <em>z wyjątkiem</em> dni ustawowo wolnych. Jeśli firma jest zamknięta w święto, ten dzień nie liczy się.</p>
<ul>
<li><strong>Dzień kalendarzowy:</strong> każdy dzień tygodnia (pon–niedz), włącznie z weekendami i świętami.</li>
<li><strong>Dzień roboczy:</strong> poniedziałek–piątek, z wyjątkiem dni wolnych.</li>
</ul>`
      },
      {
        h2: 'Przykład obliczeń',
        body: '<p>Załóżmy, że umowa przewiduje dostawę w ciągu <strong>5 dni roboczych od poniedziałku, 7 kwietnia</strong>. Licząc tylko dni powszednie, oznacza to dostawę najpóźniej w piątek, 11 kwietnia — sobota i niedziela są całkowicie pomijane.</p>',
        table: `<table>
<tr><th>Dzień</th><th>Dzień kalendarzowy</th><th>Dzień roboczy</th></tr>
<tr><td>Poniedziałek, 7 kwi.</td><td>Dzień 1</td><td>Dzień 1</td></tr>
<tr><td>Wtorek, 8 kwi.</td><td>Dzień 2</td><td>Dzień 2</td></tr>
<tr><td>Środa, 9 kwi.</td><td>Dzień 3</td><td>Dzień 3</td></tr>
<tr><td>Czwartek, 10 kwi.</td><td>Dzień 4</td><td>Dzień 4</td></tr>
<tr><td>Piątek, 11 kwi.</td><td>Dzień 5</td><td>Dzień 5 ✓</td></tr>
<tr><td>Sobota, 12 kwi.</td><td>Dzień 6</td><td>— (weekend)</td></tr>
<tr><td>Niedziela, 13 kwi.</td><td>Dzień 7</td><td>— (weekend)</td></tr>
<tr><td>Poniedziałek, 14 kwi.</td><td>Dzień 8</td><td>Dzień 6 (jeśli potrzeba)</td></tr>
</table>`
      },
      {
        h2: 'Kiedy to ma znaczenie?',
        body: `<p>Rozróżnienie między dniami roboczymi a kalendarzowymi jest kluczowe w kilku rzeczywistych kontekstach:</p>
<ul>
<li><strong>Umowy i terminy prawne:</strong> sądy i umowy zazwyczaj używają dni roboczych dla terminów odpowiedzi, okien odwoławczych i okresów wypowiedzenia.</li>
<li><strong>Wysyłka i dostawa:</strong> firmy kurierskie często podają czasy dostawy w dniach roboczych. Przesyłka „3 dni robocze" złożona w piątek może nie dotrzeć do środy.</li>
<li><strong>Lista płac:</strong> niektóre cykle płacowe liczą dwutygodniowe dni robocze, wpływając na to, kiedy depozyty się rozliczają.</li>
<li><strong>Bankowość:</strong> przelewy i czasy realizacji czeków mierzone są w dniach roboczych, nie kalendarzowych.</li>
</ul>`
      },
      {
        h2: 'Dni wolne od pracy',
        body: `<p>Dni wolne od pracy różnią się znacznie w zależności od kraju, regionu, a nawet branży. W Polsce istnieją ogólnokrajowe dni ustawowo wolne od pracy, które zmniejszają liczbę dni roboczych w danym okresie.</p>
<p>Licząc dni robocze dla terminu, zawsze sprawdź, czy w oknie czasowym nie przypadają dni wolne — każdy z nich dodaje jeden dodatkowy dzień kalendarzowy do ogólnego liczenia. Niektóre umowy wyraźnie określają, który harmonogram dni wolnych obowiązuje.</p>`
      },
    ],
    faqs: [
      { q: 'Czy sobota jest dniem roboczym?', a: 'Nie. W większości krajów sobota i niedziela nie są dniami roboczymi. Dni robocze to poniedziałek–piątek, z wyjątkiem dni ustawowo wolnych.' },
      { q: 'Czy dni robocze są takie same na całym świecie?', a: 'Nie do końca. W niektórych krajach (np. Izraelu czy Arabii Saudyjskiej) tydzień pracy trwa od niedzieli do czwartku. Większość krajów zachodnich stosuje poniedziałek–piątek jako dni robocze.' },
      { q: 'Jak liczyć 10 dni roboczych od dziś?', a: 'Zacznij od jutra i licz do przodu, pomijając każdą sobotę i niedzielę. Za każde święto przypadające w oknie, dodaj jeden dzień kalendarzowy na końcu.' },
      { q: 'Czy „w ciągu 5 dni roboczych" obejmuje dzień początkowy?', a: 'To zależy od sformułowania. „W ciągu 5 dni roboczych" zazwyczaj oznacza 5 pełnych dni roboczych po dacie rozpoczęcia — bez liczenia Dnia 0. Zawsze wyjaśniaj, jeśli język jest niejednoznaczny.' },
    ],
    pillar: { href: '/pl/kalkulator-dni-roboczych/', label: 'Oblicz dni robocze między datami' },
    related: [
      { href: '/pl/ile-dni-ma-kazdy-miesiac/', label: 'Ile dni ma każdy miesiąc' },
      { href: '/pl/dni-miedzy-datami/', label: 'Kalkulator dni między datami' },
    ],
  },
  ja: {
    title: '営業日 vs カレンダー日：違いは何ですか？',
    metaDesc: '営業日とカレンダー日の違いを解説。主な違い、計算例、そして各日数カウントが重要な場面を解説します。',
    kicker: '日付ガイド',
    h1: '営業日 vs カレンダー日：違いは何ですか？',
    intro: '締め切りが「5営業日」と書いてある場合、「5日間」とは大きく異なります。この違いを理解することで、契約・配送・法的期限を見落とすリスクを防げます。',
    sections: [
      {
        h2: '主な定義',
        body: `<p><strong>カレンダー日</strong>は月曜日から日曜日まで、週末や祝日を含むすべての日を数えます。月曜日から7カレンダー日を数えると、翌週の月曜日になります。</p>
<p><strong>営業日</strong>（稼働日とも言う）は月曜日から金曜日のみを数え、<em>祝日は除外します</em>。祝日に会社が休業している場合、その日は含まれません。</p>
<ul>
<li><strong>カレンダー日：</strong>週の任意の日（月〜日）、週末や祝日を含む。</li>
<li><strong>営業日：</strong>月曜日〜金曜日、祝日を除く。</li>
</ul>`
      },
      {
        h2: '計算例',
        body: '<p>契約書に<strong>4月7日（月曜日）から5営業日以内の配達</strong>と記載されている場合、平日のみを数えると4月11日（金曜日）までが期限です。土曜日と日曜日はスキップされます。</p>',
        table: `<table>
<tr><th>曜日</th><th>カレンダー日</th><th>営業日</th></tr>
<tr><td>月曜 4/7</td><td>1日目</td><td>1日目</td></tr>
<tr><td>火曜 4/8</td><td>2日目</td><td>2日目</td></tr>
<tr><td>水曜 4/9</td><td>3日目</td><td>3日目</td></tr>
<tr><td>木曜 4/10</td><td>4日目</td><td>4日目</td></tr>
<tr><td>金曜 4/11</td><td>5日目</td><td>5日目 ✓</td></tr>
<tr><td>土曜 4/12</td><td>6日目</td><td>— (週末)</td></tr>
<tr><td>日曜 4/13</td><td>7日目</td><td>— (週末)</td></tr>
<tr><td>月曜 4/14</td><td>8日目</td><td>6日目（必要な場合）</td></tr>
</table>`
      },
      {
        h2: 'どんな場面で重要ですか？',
        body: `<p>営業日とカレンダー日の違いは、さまざまな実際の場面で重要です：</p>
<ul>
<li><strong>契約と法的期限：</strong>裁判所や契約書では通常、回答期限・異議申立期間・通知期間に営業日が使われます。</li>
<li><strong>配送と物流：</strong>宅配業者は多くの場合、配達日数を営業日で表示します。金曜日に発注した「3営業日配達」は水曜日まで届かない場合があります。</li>
<li><strong>給与計算：</strong>一部の給与サイクルでは隔週の営業日を数えるため、入金日に影響することがあります。</li>
<li><strong>銀行：</strong>振込や小切手の決済は営業日で測られます。カレンダー日ではありません。</li>
</ul>`
      },
      {
        h2: '祝日について',
        body: `<p>祝日は国、地域、業界によって大きく異なります。日本では国民の祝日のほか、振替休日もあり、これらがすべて営業日の計算に影響します。</p>
<p>期限までの営業日を数える場合、その期間内に祝日が含まれているかどうかを必ず確認してください。祝日が1日あるごとに、全体の日数が1日増えます。契約によっては、適用する祝日カレンダーが明記されていることもあります。</p>`
      },
    ],
    faqs: [
      { q: '土曜日は営業日ですか？', a: 'いいえ。ほとんどの国で土曜日と日曜日は営業日ではありません。営業日は月曜日から金曜日で、祝日を除きます。' },
      { q: '営業日は世界中で同じですか？', a: '必ずしもそうではありません。イスラエルやサウジアラビアなどの国では、日曜日〜木曜日が稼働日です。多くの西洋諸国では月曜日〜金曜日を営業日としています。' },
      { q: '今日から10営業日を数えるにはどうすればよいですか？', a: '明日から数え始め、土曜日と日曜日をスキップします。その期間内に祝日がある場合は、最後にカレンダー日を1日追加してください。' },
      { q: '「5営業日以内」に開始日は含まれますか？', a: '表現によって異なります。「5営業日以内」は通常、開始日を含まない5営業日を意味します（0日目は数えない）。表現が曖昧な場合は必ず確認してください。' },
    ],
    pillar: { href: '/ja/eigyo-bi-keisan/', label: '日付間の営業日を計算' },
    related: [
      { href: '/ja/tsuki-goto-no-nichi-su/', label: '各月の日数' },
      { href: '/ja/hi-zuke-no-aida-no-nichi-su/', label: '日付間の日数計算ツール' },
    ],
  },
  ko: {
    title: '영업일 vs 달력 일수: 차이점은 무엇인가요?',
    metaDesc: '영업일과 달력 일수 차이 설명. 주요 차이점, 계산 예시, 각 일수 계산이 중요한 상황을 알아보세요.',
    kicker: '날짜 가이드',
    h1: '영업일 vs 달력 일수: 차이점은 무엇인가요?',
    intro: '마감일이 "영업일 5일"이라고 할 때 "5일"과는 매우 다른 의미입니다. 이 차이를 이해하면 계약, 배송, 법적 기한을 놓치지 않을 수 있습니다.',
    sections: [
      {
        h2: '주요 정의',
        body: `<p><strong>달력 일수</strong>는 월요일부터 일요일까지 주말과 공휴일을 포함한 모든 날을 셉니다. 월요일부터 달력 7일을 세면 다음 주 월요일이 됩니다.</p>
<p><strong>영업일</strong>（근무일이라고도 함）은 공휴일을 <em>제외한</em> 월요일부터 금요일만 셉니다. 공휴일에 회사가 휴업하면 그날은 포함되지 않습니다.</p>
<ul>
<li><strong>달력 일수:</strong> 주말과 공휴일을 포함한 주의 모든 날（월~일）.</li>
<li><strong>영업일:</strong> 공휴일을 제외한 월요일~금요일.</li>
</ul>`
      },
      {
        h2: '계산 예시',
        body: '<p>계약서에 <strong>4월 7일 월요일부터 5영업일 이내 배송</strong>이라고 적혀 있다면, 평일만 세면 4월 11일 금요일까지가 기한입니다. 토요일과 일요일은 완전히 건너뜁니다.</p>',
        table: `<table>
<tr><th>요일</th><th>달력 일수</th><th>영업일</th></tr>
<tr><td>월요일 4/7</td><td>1일</td><td>1일</td></tr>
<tr><td>화요일 4/8</td><td>2일</td><td>2일</td></tr>
<tr><td>수요일 4/9</td><td>3일</td><td>3일</td></tr>
<tr><td>목요일 4/10</td><td>4일</td><td>4일</td></tr>
<tr><td>금요일 4/11</td><td>5일</td><td>5일 ✓</td></tr>
<tr><td>토요일 4/12</td><td>6일</td><td>— (주말)</td></tr>
<tr><td>일요일 4/13</td><td>7일</td><td>— (주말)</td></tr>
<tr><td>월요일 4/14</td><td>8일</td><td>6일（필요 시）</td></tr>
</table>`
      },
      {
        h2: '언제 중요한가요?',
        body: `<p>영업일과 달력 일수의 구분은 다양한 실제 상황에서 매우 중요합니다:</p>
<ul>
<li><strong>계약 및 법적 기한:</strong> 법원과 계약서는 보통 답변 기한, 항소 기간, 통보 기간에 영업일을 사용합니다.</li>
<li><strong>배송 및 물류:</strong> 택배 서비스는 배달 시간을 영업일로 표시합니다. 금요일에 주문한 "3영업일 배송"은 수요일까지 도착하지 않을 수 있습니다.</li>
<li><strong>급여 계산:</strong> 일부 급여 주기는 격주 영업일을 세며, 이는 입금 시점에 영향을 줍니다.</li>
<li><strong>은행:</strong> 자금 이체와 수표 결제는 달력 일수가 아닌 영업일로 측정됩니다.</li>
</ul>`
      },
      {
        h2: '공휴일',
        body: `<p>공휴일은 나라, 주, 심지어 업종에 따라 크게 다릅니다. 한국에는 법정 공휴일과 대체 공휴일이 있어 특정 기간의 영업일 수에 영향을 미칩니다.</p>
<p>기한을 위해 영업일을 셀 때는 해당 기간 내에 공휴일이 있는지 항상 확인하세요. 공휴일 하나마다 전체 일수에 달력 하루가 추가됩니다. 일부 계약서는 적용할 공휴일 일정을 명시하기도 합니다.</p>`
      },
    ],
    faqs: [
      { q: '토요일은 영업일인가요?', a: '아닙니다. 대부분의 나라에서 토요일과 일요일은 영업일이 아닙니다. 영업일은 공휴일을 제외한 월요일~금요일입니다.' },
      { q: '영업일은 전 세계적으로 동일한가요?', a: '꼭 그렇지는 않습니다. 이스라엘이나 사우디아라비아 같은 일부 국가에서는 일요일~목요일이 근무일입니다. 대부분의 서양 국가는 월요일~금요일을 영업일로 사용합니다.' },
      { q: '오늘부터 10영업일을 어떻게 세나요?', a: '내일부터 시작해서 앞으로 세고, 토요일과 일요일을 건너뜁니다. 해당 기간 내에 공휴일이 있으면 마지막에 달력 하루를 추가하세요.' },
      { q: '"5영업일 이내"에 시작일이 포함되나요?', a: '표현에 따라 다릅니다. "5영업일 이내"는 보통 시작일을 포함하지 않는 5영업일을 의미합니다（0일은 세지 않음）. 표현이 모호하면 항상 확인하세요.' },
    ],
    pillar: { href: '/ko/yeong-eop-il-gyesan/', label: '날짜 사이의 영업일 계산' },
    related: [
      { href: '/ko/wol-byeol-il-su/', label: '각 달의 일수' },
      { href: '/ko/nal-jja-sa-i-il-su/', label: '날짜 사이 일수 계산기' },
    ],
  },
  nl: {
    title: 'Werkdagen vs kalenderdagen: wat is het verschil?',
    metaDesc: 'Werkdagen versus kalenderdagen uitgelegd. Leer de belangrijkste verschillen, bekijk een rekenvoorbeeld en begrijp wanneer elk type telt.',
    kicker: 'DATUMGIDS',
    h1: 'Werkdagen vs kalenderdagen: wat is het verschil?',
    intro: 'Wanneer een deadline "5 werkdagen" vermeldt, betekent dat iets heel anders dan "5 kalenderdagen". Het verschil begrijpen kan voorkomen dat u contracten, leveringen en wettelijke termijnen mist.',
    sections: [
      {
        h2: 'Belangrijkste definities',
        body: `<p><strong>Kalenderdagen</strong> tellen elke dag van de week — maandag tot en met zondag, inclusief weekenden en feestdagen. Als u 7 kalenderdagen vanaf maandag telt, komt u op de volgende maandag uit.</p>
<p><strong>Werkdagen</strong> (ook wel werktagen of zakelijke dagen) tellen alleen maandag tot en met vrijdag, <em>exclusief</em> feestdagen. Als een bedrijf op een feestdag gesloten is, telt die dag niet mee.</p>
<ul>
<li><strong>Kalenderdag:</strong> elke dag van de week (ma–zo), inclusief weekenden en feestdagen.</li>
<li><strong>Werkdag:</strong> maandag–vrijdag, exclusief feestdagen.</li>
</ul>`
      },
      {
        h2: 'Rekenvoorbeeld',
        body: '<p>Stel dat een contract levering binnen <strong>5 werkdagen vanaf maandag 7 april</strong> voorschrijft. Alleen weekdagen tellend betekent dat levering uiterlijk vrijdag 11 april — zaterdag en zondag worden volledig overgeslagen.</p>',
        table: `<table>
<tr><th>Dag</th><th>Kalenderdag</th><th>Werkdag</th></tr>
<tr><td>Maandag 7 apr.</td><td>Dag 1</td><td>Dag 1</td></tr>
<tr><td>Dinsdag 8 apr.</td><td>Dag 2</td><td>Dag 2</td></tr>
<tr><td>Woensdag 9 apr.</td><td>Dag 3</td><td>Dag 3</td></tr>
<tr><td>Donderdag 10 apr.</td><td>Dag 4</td><td>Dag 4</td></tr>
<tr><td>Vrijdag 11 apr.</td><td>Dag 5</td><td>Dag 5 ✓</td></tr>
<tr><td>Zaterdag 12 apr.</td><td>Dag 6</td><td>— (weekend)</td></tr>
<tr><td>Zondag 13 apr.</td><td>Dag 7</td><td>— (weekend)</td></tr>
<tr><td>Maandag 14 apr.</td><td>Dag 8</td><td>Dag 6 (indien nodig)</td></tr>
</table>`
      },
      {
        h2: 'Wanneer maakt het verschil uit?',
        body: `<p>Het onderscheid tussen werkdagen en kalenderdagen is cruciaal in verschillende praktische situaties:</p>
<ul>
<li><strong>Contracten en juridische termijnen:</strong> rechtbanken en contracten gebruiken doorgaans werkdagen voor reactietermijnen, beroepstermijnen en opzegtermijnen.</li>
<li><strong>Verzending en levering:</strong> koeriersdiensten vermelden levertijden vaak in werkdagen. Een "3-werkdagen"-zending die op vrijdag wordt besteld, kan pas op woensdag aankomen.</li>
<li><strong>Salarisadministratie:</strong> sommige salarisperioden tellen tweewekelijkse werkdagen, wat beïnvloedt wanneer stortingen worden verwerkt.</li>
<li><strong>Bankieren:</strong> geldoverschrijvingen en cheque-verrekeningen worden gemeten in werkdagen, niet in kalenderdagen.</li>
</ul>`
      },
      {
        h2: 'Feestdagen',
        body: `<p>Feestdagen variëren aanzienlijk per land, provincie en zelfs per sector. In Nederland zijn er nationale feestdagen die het aantal werkdagen in een periode kunnen verminderen.</p>
<p>Controleer bij het tellen van werkdagen voor een deadline altijd of er feestdagen in het venster vallen — elke feestdag voegt een extra kalenderdag toe aan het totaal. Sommige contracten bepalen uitdrukkelijk welk feestdagenrooster van toepassing is.</p>`
      },
    ],
    faqs: [
      { q: 'Is zaterdag een werkdag?', a: 'Nee. In de meeste landen zijn zaterdag en zondag geen werkdagen. Werkdagen zijn maandag tot en met vrijdag, exclusief feestdagen.' },
      { q: 'Zijn werkdagen overal ter wereld hetzelfde?', a: 'Niet precies. In sommige landen (zoals Israël of Saudi-Arabië) loopt de werkweek van zondag tot donderdag. De meeste westerse landen gebruiken maandag–vrijdag als werkdagen.' },
      { q: 'Hoe tel ik 10 werkdagen vanaf vandaag?', a: 'Begin vanaf morgen en tel vooruit, waarbij u elke zaterdag en zondag overslaat. Voeg voor elke feestdag die in het venster valt aan het einde een kalenderdag toe.' },
      { q: 'Is "binnen 5 werkdagen" inclusief de startdag?', a: 'Dat hangt af van de bewoordingen. "Binnen 5 werkdagen" betekent doorgaans 5 volledige werkdagen na de startdatum — Dag 0 telt niet mee. Verduidelijk dit altijd als de taal dubbelzinnig is.' },
    ],
    pillar: { href: '/nl/werkdagen-rekenmachine/', label: 'Werkdagen tussen datums berekenen' },
    related: [
      { href: '/nl/hoeveel-dagen-heeft-elke-maand/', label: 'Hoeveel dagen heeft elke maand' },
      { href: '/nl/dagen-tussen-datums/', label: 'Dagen-tussen-datums rekenmachine' },
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
  pt: {
    title: 'Quantas semanas tem um ano? Anos regulares, bissextos e ISO',
    metaDesc: 'Um ano regular tem 52 semanas e 1 dia. Um ano bissexto tem 52 semanas e 2 dias. Saiba sobre os anos ISO com 53 semanas e quais anos os têm (2020–2032).',
    kicker: 'GUIA DE CALENDÁRIO',
    h1: 'Quantas semanas tem um ano?',
    intro: 'Um ano regular tem 52 semanas e 1 dia. Um ano bissexto tem 52 semanas e 2 dias. Aqui está tudo o que você precisa saber — incluindo por que alguns anos têm 53 semanas ISO.',
    sections: [
      {
        h2: 'Ano regular vs ano bissexto',
        body: '<p>O número de semanas em um ano depende de ele ter 365 ou 366 dias:</p>',
        table: `<table>
<tr><th>Tipo de ano</th><th>Dias</th><th>Semanas</th><th>Dias extras</th></tr>
<tr><td>Ano regular</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 resto 1)</td></tr>
<tr><td>Ano bissexto</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 resto 2)</td></tr>
</table>`
      },
      {
        h2: 'Por que alguns anos têm 53 semanas ISO',
        body: `<p>O padrão <strong>ISO 8601</strong> define a Semana 1 de um ano como a semana que contém a primeira quinta-feira do ano. Uma semana sempre vai de segunda a domingo.</p>
<p>Por causa dessa definição, alguns anos têm uma <strong>Semana 53</strong>. Isso ocorre quando 1.º de janeiro cai em quinta-feira em um ano regular, ou quando 1.º ou 2 de janeiro cai em quinta-feira em um ano bissexto. Nesses casos, os últimos dias de dezembro pertencem à Semana 53 do ano anterior, e não à Semana 1 do novo ano.</p>
<p>Aproximadamente 71 de cada 400 anos (cerca de 17,75%) contêm uma Semana ISO 53.</p>`
      },
      {
        h2: 'Anos com 53 semanas ISO (2020–2032)',
        body: '<p>Os seguintes anos recentes e futuros contêm 53 semanas ISO:</p>',
        table: `<table>
<tr><th>Ano</th><th>1.º de janeiro cai em</th><th>Semanas ISO</th></tr>
<tr><td>2020</td><td>Quarta-feira</td><td>53</td></tr>
<tr><td>2026</td><td>Quinta-feira</td><td>53</td></tr>
<tr><td>2032</td><td>Quinta-feira</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Usos práticos',
        body: `<p>Saber quantas semanas tem um ano é útil em várias situações do cotidiano:</p>
<ul>
<li><strong>Folha de pagamento:</strong> funcionários pagos quinzenalmente recebem 26 contracheques por ano (52 semanas ÷ 2). Mas como 52 semanas × 2 = 364 dias — um dia a menos que 365 — a cada alguns anos um ciclo de pagamento produz 27 períodos em vez de 26, afetando os orçamentos.</li>
<li><strong>Planejamento de projetos:</strong> planos trimestrais (13 semanas cada) assumem 52 semanas por ano. Um ano com 53 semanas significa que um trimestre terá 14 semanas.</li>
<li><strong>Anos fiscais e varejo:</strong> muitos varejistas usam um calendário 4-4-5 ou 4-5-4, e um ano com 53 semanas requer um ajuste para manter os anos fiscais alinhados com o calendário.</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Um ano sempre tem 52 semanas?', a: 'Quase sempre. Todo ano tem 52 semanas completas mais 1 dia extra (ano regular) ou 2 dias extras (ano bissexto). Pelo padrão ISO 8601, alguns anos recebem 53 semanas numeradas.' },
      { q: 'Quais anos têm 53 semanas ISO?', a: 'Anos recentes com 53 semanas incluem 2020 e 2026. O próximo é 2032. Eles ocorrem quando 1.º de janeiro cai em quinta-feira (ano regular), ou quando 1.º ou 2 de janeiro cai em quinta-feira (ano bissexto).' },
      { q: 'Quantas semanas tem um ano bissexto?', a: 'Um ano bissexto tem 366 dias, o que equivale a 52 semanas e 2 dias. Como um ano regular, também pode ter 53 semanas ISO se o ano começar na configuração certa.' },
      { q: 'Quantos períodos de pagamento quinzenal há em um ano?', a: 'Geralmente 26. Divida 52 semanas por 2. No entanto, como o ano tem 365 dias (não 364), aproximadamente a cada 5 a 7 anos ocorre um 27.º período de pagamento quinzenal.' },
    ],
    pillar: { href: '/pt/numero-da-semana/', label: 'Encontrar o número da semana atual' },
    related: [
      { href: '/pt/quantos-dias-tem-cada-mes/', label: 'Quantos dias tem cada mês' },
      { href: '/pt/numero-da-semana/', label: 'Calculadora de número de semana' },
    ],
  },
  de: {
    title: 'Wie viele Wochen hat ein Jahr? Normaljahr, Schaltjahr und ISO',
    metaDesc: 'Ein Normaljahr hat 52 Wochen und 1 Tag. Ein Schaltjahr hat 52 Wochen und 2 Tage. Erfahren Sie mehr über ISO-Jahre mit 53 Wochen und welche Jahre das betrifft (2020–2032).',
    kicker: 'KALENDERRATGEBER',
    h1: 'Wie viele Wochen hat ein Jahr?',
    intro: 'Ein Normaljahr hat 52 Wochen und 1 Tag. Ein Schaltjahr hat 52 Wochen und 2 Tage. Hier erfahren Sie alles Wichtige — einschließlich der Frage, warum manche Jahre 53 ISO-Wochen haben.',
    sections: [
      {
        h2: 'Normaljahr vs Schaltjahr',
        body: '<p>Die Anzahl der Wochen in einem Jahr hängt davon ab, ob das Jahr 365 oder 366 Tage hat:</p>',
        table: `<table>
<tr><th>Jahrestyp</th><th>Tage</th><th>Wochen</th><th>Resttage</th></tr>
<tr><td>Normaljahr</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 Rest 1)</td></tr>
<tr><td>Schaltjahr</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 Rest 2)</td></tr>
</table>`
      },
      {
        h2: 'Warum manche Jahre 53 ISO-Wochen haben',
        body: `<p>Die Norm <strong>ISO 8601</strong> definiert die Woche 1 eines Jahres als die Woche, die den ersten Donnerstag des Jahres enthält. Eine Woche läuft immer von Montag bis Sonntag.</p>
<p>Aufgrund dieser Definition haben manche Jahre eine <strong>Woche 53</strong>. Das tritt auf, wenn der 1. Januar in einem Normaljahr auf einen Donnerstag fällt, oder wenn der 1. oder 2. Januar in einem Schaltjahr auf einen Donnerstag fällt. In diesen Fällen gehören die letzten Dezembertage zur Woche 53 des alten Jahres und nicht zur Woche 1 des neuen Jahres.</p>
<p>Ungefähr 71 von 400 Jahren (ca. 17,75 %) enthalten eine ISO-Woche 53.</p>`
      },
      {
        h2: 'Jahre mit 53 ISO-Wochen (2020–2032)',
        body: '<p>Die folgenden vergangenen und kommenden Jahre enthalten 53 ISO-Wochen:</p>',
        table: `<table>
<tr><th>Jahr</th><th>1. Januar fällt auf</th><th>ISO-Wochen</th></tr>
<tr><td>2020</td><td>Mittwoch</td><td>53</td></tr>
<tr><td>2026</td><td>Donnerstag</td><td>53</td></tr>
<tr><td>2032</td><td>Donnerstag</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Praktische Anwendungen',
        body: `<p>Zu wissen, wie viele Wochen ein Jahr hat, ist in verschiedenen Alltagssituationen nützlich:</p>
<ul>
<li><strong>Lohnabrechnung:</strong> Zweiwöchentlich bezahlte Mitarbeiter erhalten 26 Gehaltsabrechnungen pro Jahr (52 Wochen ÷ 2). Da aber 52 Wochen × 2 = 364 Tage — einen Tag weniger als 365 — entsteht alle paar Jahre ein Lohnzyklus mit 27 Zahlungsperioden statt 26, was Budgets beeinflusst.</li>
<li><strong>Projektplanung:</strong> Quartalspläne (je 13 Wochen) gehen von 52 Wochen pro Jahr aus. Ein Jahr mit 53 Wochen bedeutet, dass ein Quartal 14 Wochen haben wird.</li>
<li><strong>Einzelhandel und Geschäftsjahre:</strong> Viele Einzelhändler verwenden einen 4-4-5- oder 4-5-4-Wochenkalender, und ein 53-Wochen-Jahr erfordert eine Anpassung, um die Geschäftsjahre am Kalender auszurichten.</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Hat ein Jahr immer 52 Wochen?', a: 'Fast immer. Jedes Jahr hat 52 vollständige Wochen plus 1 extra Tag (Normaljahr) oder 2 extra Tage (Schaltjahr). Nach dem ISO-8601-Standard werden manchen Jahren 53 nummerierte Wochen zugewiesen.' },
      { q: 'Welche Jahre haben 53 ISO-Wochen?', a: 'Aktuelle 53-Wochen-Jahre sind 2020 und 2026. Das nächste ist 2032. Sie treten auf, wenn der 1. Januar auf einen Donnerstag fällt (Normaljahr) oder wenn der 1. oder 2. Januar auf einen Donnerstag fällt (Schaltjahr).' },
      { q: 'Wie viele Wochen hat ein Schaltjahr?', a: 'Ein Schaltjahr hat 366 Tage, was 52 Wochen und 2 Tagen entspricht. Wie ein Normaljahr kann es auch 53 ISO-Wochen haben, wenn das Jahr mit der richtigen Konfiguration beginnt.' },
      { q: 'Wie viele zweiwöchentliche Gehaltszahlungen gibt es in einem Jahr?', a: 'Normalerweise 26. Teilen Sie 52 Wochen durch 2. Da das Jahr jedoch 365 Tage hat (nicht 364), tritt etwa alle 5–7 Jahre eine 27. zweiwöchentliche Gehaltsperiode auf.' },
    ],
    pillar: { href: '/de/wochennummer/', label: 'Aktuelle Kalenderwoche ermitteln' },
    related: [
      { href: '/de/wie-viele-tage-hat-jeder-monat/', label: 'Wie viele Tage hat jeder Monat' },
      { href: '/de/wochennummer/', label: 'Kalenderwochen-Rechner' },
    ],
  },
  it: {
    title: 'Quante settimane ha un anno? Anno normale, bisestile e ISO',
    metaDesc: 'Un anno normale ha 52 settimane e 1 giorno. Un anno bisestile ne ha 52 e 2 giorni. Scopri gli anni ISO con 53 settimane e quali anni li hanno (2020–2032).',
    kicker: 'GUIDA AL CALENDARIO',
    h1: 'Quante settimane ha un anno?',
    intro: 'Un anno normale ha 52 settimane e 1 giorno. Un anno bisestile ha 52 settimane e 2 giorni. Ecco tutto quello che devi sapere — incluso perché alcuni anni hanno 53 settimane ISO.',
    sections: [
      {
        h2: 'Anno normale vs anno bisestile',
        body: '<p>Il numero di settimane in un anno dipende dal fatto che abbia 365 o 366 giorni:</p>',
        table: `<table>
<tr><th>Tipo di anno</th><th>Giorni</th><th>Settimane</th><th>Giorni in più</th></tr>
<tr><td>Anno normale</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 resto 1)</td></tr>
<tr><td>Anno bisestile</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 resto 2)</td></tr>
</table>`
      },
      {
        h2: 'Perché alcuni anni hanno 53 settimane ISO',
        body: `<p>Lo standard <strong>ISO 8601</strong> definisce la Settimana 1 di un anno come la settimana che contiene il primo giovedì dell'anno. Una settimana va sempre da lunedì a domenica.</p>
<p>A causa di questa definizione, alcuni anni hanno una <strong>Settimana 53</strong>. Questo accade quando il 1° gennaio cade di giovedì in un anno normale, oppure quando il 1° o il 2 gennaio cade di giovedì in un anno bisestile. In questi casi, gli ultimi giorni di dicembre appartengono alla Settimana 53 dell'anno precedente anziché alla Settimana 1 del nuovo anno.</p>
<p>Circa 71 anni su 400 (circa il 17,75%) contengono una Settimana ISO 53.</p>`
      },
      {
        h2: 'Anni con 53 settimane ISO (2020–2032)',
        body: '<p>I seguenti anni recenti e futuri contengono 53 settimane ISO:</p>',
        table: `<table>
<tr><th>Anno</th><th>Il 1° gennaio cade di</th><th>Settimane ISO</th></tr>
<tr><td>2020</td><td>Mercoledì</td><td>53</td></tr>
<tr><td>2026</td><td>Giovedì</td><td>53</td></tr>
<tr><td>2032</td><td>Giovedì</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Usi pratici',
        body: `<p>Sapere quante settimane ha un anno è utile in diverse situazioni quotidiane:</p>
<ul>
<li><strong>Paghe:</strong> i dipendenti pagati ogni due settimane ricevono 26 buste paga all'anno (52 settimane ÷ 2). Ma poiché 52 settimane × 2 = 364 giorni — un giorno in meno di 365 — ogni qualche anno un ciclo di paghe produce 27 periodi invece di 26, influenzando i budget.</li>
<li><strong>Pianificazione dei progetti:</strong> i piani trimestrali (13 settimane ciascuno) presuppongono 52 settimane all'anno. Un anno di 53 settimane significa che un trimestre avrà 14 settimane.</li>
<li><strong>Anni fiscali e commercio al dettaglio:</strong> molti rivenditori usano un calendario 4-4-5 o 4-5-4, e un anno di 53 settimane richiede un aggiustamento per mantenere gli anni fiscali allineati al calendario.</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Un anno ha sempre 52 settimane?', a: 'Quasi sempre. Ogni anno ha 52 settimane complete più 1 giorno extra (anno normale) o 2 giorni extra (anno bisestile). Secondo lo standard ISO 8601, ad alcuni anni vengono assegnate 53 settimane numerate.' },
      { q: 'Quali anni hanno 53 settimane ISO?', a: 'Gli anni recenti con 53 settimane includono il 2020 e il 2026. Il prossimo è il 2032. Si verificano quando il 1° gennaio cade di giovedì (anno normale) o quando il 1° o 2 gennaio cade di giovedì (anno bisestile).' },
      { q: 'Quante settimane ha un anno bisestile?', a: 'Un anno bisestile ha 366 giorni, pari a 52 settimane e 2 giorni. Come un anno normale, può avere 53 settimane ISO se l\'anno inizia con la configurazione giusta.' },
      { q: 'Quanti periodi di paga bisettimanali ci sono in un anno?', a: 'Di solito 26. Dividi 52 settimane per 2. Tuttavia, poiché l\'anno ha 365 giorni (non 364), circa ogni 5–7 anni si verifica un 27° periodo di paga bisettimanale.' },
    ],
    pillar: { href: '/it/numero-settimana/', label: 'Trova il numero della settimana corrente' },
    related: [
      { href: '/it/quanti-giorni-ha-ogni-mese/', label: 'Quanti giorni ha ogni mese' },
      { href: '/it/numero-settimana/', label: 'Calcolatore numero settimana' },
    ],
  },
  pl: {
    title: 'Ile tygodni ma rok? Rok zwykły, przestępny i ISO',
    metaDesc: 'Zwykły rok ma 52 tygodnie i 1 dzień. Rok przestępny ma 52 tygodnie i 2 dni. Dowiedz się o latach ISO z 53 tygodniami i które lata je mają (2020–2032).',
    kicker: 'PORADNIK KALENDARZA',
    h1: 'Ile tygodni ma rok?',
    intro: 'Zwykły rok ma 52 tygodnie i 1 dzień. Rok przestępny ma 52 tygodnie i 2 dni. Oto wszystko, co musisz wiedzieć — w tym dlaczego niektóre lata mają 53 tygodnie ISO.',
    sections: [
      {
        h2: 'Rok zwykły vs rok przestępny',
        body: '<p>Liczba tygodni w roku zależy od tego, czy rok ma 365 czy 366 dni:</p>',
        table: `<table>
<tr><th>Typ roku</th><th>Dni</th><th>Tygodnie</th><th>Dni dodatkowe</th></tr>
<tr><td>Rok zwykły</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 reszta 1)</td></tr>
<tr><td>Rok przestępny</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 reszta 2)</td></tr>
</table>`
      },
      {
        h2: 'Dlaczego niektóre lata mają 53 tygodnie ISO',
        body: `<p>Norma <strong>ISO 8601</strong> definiuje Tydzień 1 roku jako tydzień zawierający pierwszy czwartek roku. Tydzień zawsze trwa od poniedziałku do niedzieli.</p>
<p>Ze względu na tę definicję, niektóre lata mają <strong>Tydzień 53</strong>. Dzieje się tak, gdy 1 stycznia przypada w czwartek w zwykłym roku, lub gdy 1 lub 2 stycznia przypada w czwartek w roku przestępnym. W takich przypadkach ostatnie dni grudnia należą do Tygodnia 53 starego roku, a nie do Tygodnia 1 nowego roku.</p>
<p>Mniej więcej 71 na 400 lat (około 17,75%) zawiera ISO Tydzień 53.</p>`
      },
      {
        h2: 'Lata z 53 tygodniami ISO (2020–2032)',
        body: '<p>Następujące niedawne i nadchodzące lata zawierają 53 tygodnie ISO:</p>',
        table: `<table>
<tr><th>Rok</th><th>1 stycznia przypada w</th><th>Tygodnie ISO</th></tr>
<tr><td>2020</td><td>Środa</td><td>53</td></tr>
<tr><td>2026</td><td>Czwartek</td><td>53</td></tr>
<tr><td>2032</td><td>Czwartek</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Praktyczne zastosowania',
        body: `<p>Wiedza o tym, ile tygodni ma rok, przydaje się w wielu codziennych sytuacjach:</p>
<ul>
<li><strong>Lista płac:</strong> pracownicy opłacani co dwa tygodnie otrzymują 26 wypłat w roku (52 tygodnie ÷ 2). Ale ponieważ 52 tygodnie × 2 = 364 dni — o jeden dzień mniej niż 365 — co kilka lat cykl płacowy daje 27 okresów zamiast 26, wpływając na budżety.</li>
<li><strong>Planowanie projektów:</strong> plany kwartalne (po 13 tygodni) zakładają 52 tygodnie w roku. Rok z 53 tygodniami oznacza, że jeden kwartał będzie miał 14 tygodni.</li>
<li><strong>Lata fiskalne i handel detaliczny:</strong> wielu detalistów używa kalendarza 4-4-5 lub 4-5-4, a rok z 53 tygodniami wymaga korekty, aby lata fiskalne były zgodne z kalendarzem.</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Czy rok zawsze ma 52 tygodnie?', a: 'Prawie zawsze. Każdy rok ma 52 pełne tygodnie plus 1 dodatkowy dzień (rok zwykły) lub 2 dodatkowe dni (rok przestępny). Według normy ISO 8601 niektóre lata mają przypisane 53 numerowane tygodnie.' },
      { q: 'Które lata mają 53 tygodnie ISO?', a: 'Ostatnie lata z 53 tygodniami to 2020 i 2026. Następne to 2032. Występują gdy 1 stycznia przypada w czwartek (rok zwykły) lub gdy 1 lub 2 stycznia przypada w czwartek (rok przestępny).' },
      { q: 'Ile tygodni ma rok przestępny?', a: 'Rok przestępny ma 366 dni, co odpowiada 52 tygodniom i 2 dniom. Podobnie jak rok zwykły, może mieć 53 tygodnie ISO, jeśli rok zaczyna się z odpowiednią konfiguracją.' },
      { q: 'Ile dwutygodniowych okresów wypłat jest w roku?', a: 'Zwykle 26. Podziel 52 tygodnie przez 2. Jednak ponieważ rok ma 365 dni (nie 364), mniej więcej co 5–7 lat pojawia się 27. dwutygodniowy okres wypłaty.' },
    ],
    pillar: { href: '/pl/numer-tygodnia/', label: 'Znajdź aktualny numer tygodnia' },
    related: [
      { href: '/pl/ile-dni-ma-kazdy-miesiac/', label: 'Ile dni ma każdy miesiąc' },
      { href: '/pl/numer-tygodnia/', label: 'Kalkulator numeru tygodnia' },
    ],
  },
  ja: {
    title: '1年の週数は？通常年・うるう年・ISO週',
    metaDesc: '通常年は52週と1日。うるう年は52週と2日。ISO 53週年とはどんな年か、2020〜2032年の該当年を解説。',
    kicker: 'カレンダーガイド',
    h1: '1年の週数は？',
    intro: '通常年は52週と1日あります。うるう年は52週と2日あります。なぜ一部の年がISO 53週を持つのかを含め、知っておくべきことをすべて解説します。',
    sections: [
      {
        h2: '通常年 vs うるう年',
        body: '<p>1年の週数は、その年が365日か366日かによって異なります：</p>',
        table: `<table>
<tr><th>年の種類</th><th>日数</th><th>週数</th><th>余り日数</th></tr>
<tr><td>通常年</td><td>365</td><td>52</td><td>1日（365 ÷ 7 = 52余り1）</td></tr>
<tr><td>うるう年</td><td>366</td><td>52</td><td>2日（366 ÷ 7 = 52余り2）</td></tr>
</table>`
      },
      {
        h2: 'なぜ一部の年はISO 53週を持つのか',
        body: `<p><strong>ISO 8601</strong>規格では、1年の第1週をその年の最初の木曜日を含む週と定義しています。週は常に月曜日から日曜日まで続きます。</p>
<p>この定義により、一部の年には<strong>第53週</strong>が発生します。これは、通常年で1月1日が木曜日に当たる場合、またはうるう年で1月1日または2日が木曜日に当たる場合に起きます。その場合、12月の最後の数日は新年の第1週ではなく旧年の第53週に属します。</p>
<p>400年のうち約71年（約17.75%）がISO第53週を含みます。</p>`
      },
      {
        h2: 'ISO 53週の年（2020〜2032年）',
        body: '<p>最近および今後のISO 53週を含む年は次のとおりです：</p>',
        table: `<table>
<tr><th>年</th><th>1月1日の曜日</th><th>ISO週数</th></tr>
<tr><td>2020</td><td>水曜日</td><td>53</td></tr>
<tr><td>2026</td><td>木曜日</td><td>53</td></tr>
<tr><td>2032</td><td>木曜日</td><td>53</td></tr>
</table>`
      },
      {
        h2: '実際の活用場面',
        body: `<p>1年の週数を知ることはさまざまな日常場面で役立ちます：</p>
<ul>
<li><strong>給与計算：</strong>隔週払いの従業員は1年に26回の給与を受け取ります（52週÷2）。しかし52週×2=364日で365日より1日少ないため、数年に1度27回目の給与期間が生じ、予算に影響することがあります。</li>
<li><strong>プロジェクト計画：</strong>四半期計画（各13週）は52週を前提とします。53週の年では1つの四半期が14週になります。</li>
<li><strong>小売業・会計年度：</strong>多くの小売業者は4-4-5や4-5-4の週カレンダーを使用しており、53週の年では会計年度をカレンダーに合わせるための調整が必要になります。</li>
</ul>`
      },
    ],
    faqs: [
      { q: '1年は必ず52週ですか？', a: 'ほぼ常にそうです。すべての年は52の完全な週に加えて1日（通常年）または2日（うるう年）の余りがあります。ISO 8601規格では、一部の年に53の番号付き週が割り当てられます。' },
      { q: 'ISO 53週の年はどれですか？', a: '最近のISO 53週の年には2020年と2026年があります。次は2032年です。通常年で1月1日が木曜日に当たるか、うるう年で1月1日または2日が木曜日に当たる場合に発生します。' },
      { q: 'うるう年は何週ありますか？', a: 'うるう年は366日で52週と2日に相当します。通常年と同様に、年の始まりが正しい構成であればISO 53週を持つこともあります。' },
      { q: '1年に隔週払いの給与期間はいくつありますか？', a: '通常は26回です。52週を2で割ります。ただし年は365日（364日ではない）であるため、約5〜7年ごとに27回目の隔週給与期間が発生します。' },
    ],
    pillar: { href: '/ja/shu-ban-go/', label: '現在の週番号を調べる' },
    related: [
      { href: '/ja/tsuki-goto-no-nichi-su/', label: '各月の日数' },
      { href: '/ja/shu-ban-go/', label: '週番号計算ツール' },
    ],
  },
  ko: {
    title: '1년의 주수는? 보통 해, 윤년, ISO 주수',
    metaDesc: '보통 해는 52주 1일. 윤년은 52주 2일. ISO 53주 해에 대해 알아보고 해당 연도(2020~2032)를 확인하세요.',
    kicker: '달력 가이드',
    h1: '1년의 주수는?',
    intro: '보통 해는 52주 1일이 있습니다. 윤년은 52주 2일이 있습니다. 일부 해에 ISO 53주가 있는 이유를 포함해 알아야 할 모든 것을 설명합니다.',
    sections: [
      {
        h2: '보통 해 vs 윤년',
        body: '<p>1년의 주수는 365일인지 366일인지에 따라 달라집니다:</p>',
        table: `<table>
<tr><th>연도 유형</th><th>일수</th><th>주수</th><th>남는 일수</th></tr>
<tr><td>보통 해</td><td>365</td><td>52</td><td>1일（365 ÷ 7 = 52 나머지 1）</td></tr>
<tr><td>윤년</td><td>366</td><td>52</td><td>2일（366 ÷ 7 = 52 나머지 2）</td></tr>
</table>`
      },
      {
        h2: '왜 일부 해는 ISO 53주를 가질까요?',
        body: `<p><strong>ISO 8601</strong> 표준은 해당 연도의 첫 번째 목요일을 포함하는 주를 그 해의 제1주로 정의합니다. 한 주는 항상 월요일부터 일요일까지입니다.</p>
<p>이 정의 때문에 일부 해에는 <strong>제53주</strong>가 생깁니다. 이는 보통 해에서 1월 1일이 목요일에 해당하거나, 윤년에서 1월 1일 또는 2일이 목요일에 해당할 때 발생합니다. 이 경우 12월의 마지막 날들은 새해 제1주가 아닌 이전 해의 제53주에 속합니다.</p>
<p>400년 중 약 71년（약 17.75%）이 ISO 제53주를 포함합니다.</p>`
      },
      {
        h2: 'ISO 53주 해（2020~2032）',
        body: '<p>최근 및 앞으로의 ISO 53주를 포함하는 해는 다음과 같습니다:</p>',
        table: `<table>
<tr><th>연도</th><th>1월 1일 요일</th><th>ISO 주수</th></tr>
<tr><td>2020</td><td>수요일</td><td>53</td></tr>
<tr><td>2026</td><td>목요일</td><td>53</td></tr>
<tr><td>2032</td><td>목요일</td><td>53</td></tr>
</table>`
      },
      {
        h2: '실용적인 활용',
        body: `<p>1년의 주수를 아는 것은 여러 일상적인 상황에서 유용합니다:</p>
<ul>
<li><strong>급여 계산:</strong> 격주로 급여를 받는 직원은 1년에 26번 받습니다（52주 ÷ 2）. 그러나 52주 × 2 = 364일로 365일보다 1일 적기 때문에, 몇 년에 한 번 급여 주기에 27번째 기간이 생겨 예산에 영향을 미칩니다.</li>
<li><strong>프로젝트 계획:</strong> 분기 계획（각 13주）은 연간 52주를 가정합니다. 53주 해에는 한 분기가 14주가 됩니다.</li>
<li><strong>소매업 및 회계연도:</strong> 많은 소매업체는 4-4-5 또는 4-5-4 주 달력을 사용하며, 53주 해에는 회계연도를 달력에 맞추기 위한 조정이 필요합니다.</li>
</ul>`
      },
    ],
    faqs: [
      { q: '1년은 항상 52주인가요?', a: '거의 항상 그렇습니다. 모든 해는 52개의 완전한 주에 1일（보통 해）또는 2일（윤년）이 추가됩니다. ISO 8601 표준에 따라 일부 해에는 53개의 번호가 매겨진 주가 할당됩니다.' },
      { q: 'ISO 53주 해는 어떤 해인가요?', a: '최근 53주 해는 2020년과 2026년입니다. 다음은 2032년입니다. 보통 해에서 1월 1일이 목요일이거나, 윤년에서 1월 1일 또는 2일이 목요일일 때 발생합니다.' },
      { q: '윤년은 몇 주인가요?', a: '윤년은 366일로 52주 2일에 해당합니다. 보통 해와 마찬가지로, 연도가 올바른 구성으로 시작하면 ISO 53주를 가질 수 있습니다.' },
      { q: '1년에 격주 급여 기간은 몇 번인가요?', a: '보통 26번입니다. 52주를 2로 나눕니다. 그러나 1년이 365일（364일이 아님）이기 때문에 약 5~7년마다 27번째 격주 급여 기간이 발생합니다.' },
    ],
    pillar: { href: '/ko/ju-cha-beon-ho/', label: '현재 주 번호 찾기' },
    related: [
      { href: '/ko/wol-byeol-il-su/', label: '각 달의 일수' },
      { href: '/ko/ju-cha-beon-ho/', label: '주 번호 계산기' },
    ],
  },
  nl: {
    title: 'Hoeveel weken heeft een jaar? Normaal jaar, schrikkeljaar en ISO',
    metaDesc: 'Een normaal jaar heeft 52 weken en 1 dag. Een schrikkeljaar heeft 52 weken en 2 dagen. Leer over ISO-jaren met 53 weken en welke jaren dat zijn (2020–2032).',
    kicker: 'KALENDERRATGEVER',
    h1: 'Hoeveel weken heeft een jaar?',
    intro: 'Een normaal jaar heeft 52 weken en 1 dag. Een schrikkeljaar heeft 52 weken en 2 dagen. Hier vindt u alles wat u moet weten — inclusief waarom sommige jaren 53 ISO-weken hebben.',
    sections: [
      {
        h2: 'Normaal jaar vs schrikkeljaar',
        body: '<p>Het aantal weken in een jaar hangt af van of het jaar 365 of 366 dagen heeft:</p>',
        table: `<table>
<tr><th>Jaartype</th><th>Dagen</th><th>Weken</th><th>Extra dagen</th></tr>
<tr><td>Normaal jaar</td><td>365</td><td>52</td><td>1 (365 ÷ 7 = 52 rest 1)</td></tr>
<tr><td>Schrikkeljaar</td><td>366</td><td>52</td><td>2 (366 ÷ 7 = 52 rest 2)</td></tr>
</table>`
      },
      {
        h2: 'Waarom sommige jaren 53 ISO-weken hebben',
        body: `<p>De norm <strong>ISO 8601</strong> definieert Week 1 van een jaar als de week die de eerste donderdag van het jaar bevat. Een week loopt altijd van maandag tot en met zondag.</p>
<p>Door deze definitie hebben sommige jaren een <strong>Week 53</strong>. Dit gebeurt wanneer 1 januari op een donderdag valt in een normaal jaar, of wanneer 1 of 2 januari op een donderdag valt in een schrikkeljaar. In deze gevallen horen de laatste dagen van december bij Week 53 van het oude jaar in plaats van bij Week 1 van het nieuwe jaar.</p>
<p>Ongeveer 71 van de 400 jaar (circa 17,75%) bevatten een ISO-week 53.</p>`
      },
      {
        h2: 'Jaren met 53 ISO-weken (2020–2032)',
        body: '<p>De volgende recente en komende jaren bevatten 53 ISO-weken:</p>',
        table: `<table>
<tr><th>Jaar</th><th>1 januari valt op</th><th>ISO-weken</th></tr>
<tr><td>2020</td><td>Woensdag</td><td>53</td></tr>
<tr><td>2026</td><td>Donderdag</td><td>53</td></tr>
<tr><td>2032</td><td>Donderdag</td><td>53</td></tr>
</table>`
      },
      {
        h2: 'Praktisch nut',
        body: `<p>Weten hoeveel weken een jaar heeft, is nuttig in diverse alledaagse situaties:</p>
<ul>
<li><strong>Salarisadministratie:</strong> Tweewekelijks betaalde medewerkers ontvangen 26 salarisstroken per jaar (52 weken ÷ 2). Maar omdat 52 weken × 2 = 364 dagen — één dag minder dan 365 — ontstaat om de paar jaar een salarisperiode met 27 in plaats van 26 betalingen, wat budgetten beïnvloedt.</li>
<li><strong>Projectplanning:</strong> Kwartaalplannen (elk 13 weken) gaan uit van 52 weken per jaar. Een jaar met 53 weken betekent dat één kwartaal 14 weken zal hebben.</li>
<li><strong>Detailhandel en boekjaren:</strong> Veel retailers gebruiken een 4-4-5 of 4-5-4 weekkalender, en een jaar met 53 weken vereist een aanpassing om boekjaren met de kalender in lijn te houden.</li>
</ul>`
      },
    ],
    faqs: [
      { q: 'Heeft een jaar altijd 52 weken?', a: 'Bijna altijd. Elk jaar heeft 52 volledige weken plus 1 extra dag (normaal jaar) of 2 extra dagen (schrikkeljaar). Volgens de ISO 8601-norm krijgen sommige jaren 53 genummerde weken toegewezen.' },
      { q: 'Welke jaren hebben 53 ISO-weken?', a: 'Recente jaren met 53 weken zijn 2020 en 2026. Het volgende is 2032. Ze treden op wanneer 1 januari op een donderdag valt (normaal jaar), of wanneer 1 of 2 januari op een donderdag valt (schrikkeljaar).' },
      { q: 'Hoeveel weken heeft een schrikkeljaar?', a: 'Een schrikkeljaar heeft 366 dagen, wat overeenkomt met 52 weken en 2 dagen. Net als een normaal jaar kan het ook 53 ISO-weken hebben als het jaar op de juiste manier begint.' },
      { q: 'Hoeveel tweewekelijkse salarisperioden zijn er in een jaar?', a: 'Doorgaans 26. Deel 52 weken door 2. Echter, omdat het jaar 365 dagen heeft (niet 364), treedt ongeveer om de 5–7 jaar een 27e tweewekelijkse salarisperiode op.' },
    ],
    pillar: { href: '/nl/weeknummer/', label: 'Huidige weeknummer vinden' },
    related: [
      { href: '/nl/hoeveel-dagen-heeft-elke-maand/', label: 'Hoeveel dagen heeft elke maand' },
      { href: '/nl/weeknummer/', label: 'Weeknummer rekenmachine' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'how-many-days-in-each-month',    slugs: { en: 'how-many-days-in-each-month',    fr: 'fr/combien-de-jours-par-mois',          es: 'es/cuantos-dias-tiene-cada-mes',      pt: 'pt/quantos-dias-tem-cada-mes',       de: 'de/wie-viele-tage-hat-jeder-monat',   it: 'it/quanti-giorni-ha-ogni-mese',          pl: 'pl/ile-dni-ma-kazdy-miesiac',      ja: 'ja/tsuki-goto-no-nichi-su',    ko: 'ko/wol-byeol-il-su',          nl: 'nl/hoeveel-dagen-heeft-elke-maand' } },
    { id: 'business-days-vs-calendar-days', slugs: { en: 'business-days-vs-calendar-days', fr: 'fr/jours-ouvrables-vs-jours-calendaires', es: 'es/dias-habiles-vs-dias-calendario',   pt: 'pt/dias-uteis-vs-dias-corridos',     de: 'de/werktage-vs-kalendertage',         it: 'it/giorni-lavorativi-vs-giorni-calendario', pl: 'pl/dni-robocze-vs-dni-kalendarzowe', ja: 'ja/eigyo-bi-vs-karendar-bi', ko: 'ko/yeong-eop-il-vs-dal-ryeok-il', nl: 'nl/werkdagen-vs-kalenderdagen' } },
    { id: 'how-many-weeks-in-a-year',       slugs: { en: 'how-many-weeks-in-a-year',       fr: 'fr/combien-de-semaines-dans-une-annee',  es: 'es/cuantas-semanas-tiene-un-ano',     pt: 'pt/quantas-semanas-tem-um-ano',      de: 'de/wie-viele-wochen-hat-ein-jahr',    it: 'it/quante-settimane-ha-un-anno',         pl: 'pl/ile-tygodni-ma-rok',        ja: 'ja/ichi-nen-no-shu-su',        ko: 'ko/il-nyeon-ui-ju-su',        nl: 'nl/hoeveel-weken-heeft-een-jaar' } },
  ],
  render(id, lang) {
    const t = T[id][lang];
    return { title: t.title, metaDesc: t.metaDesc, kicker: t.kicker, h1: t.h1, intro: t.intro, sections: t.sections, faqs: t.faqs, pillar: t.pillar, related: t.related };
  },
};
