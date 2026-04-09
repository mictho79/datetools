// Business Days Calculator

const T = {
  en: {
    title: 'Business Days Calculator – Count Working Days | DateCalc.app',
    metaDesc: 'Calculate the number of business days between two dates, or add business days to a date. Excludes weekends.',
    kicker: 'Business Days Calculator',
    headline: 'Count<br><em>working</em> days',
    subhead: 'Calculate business days between dates, or find a date X working days from now.',
    mode1Label: 'Count between two dates',
    mode2Label: 'Add business days to a date',
    startLabel: 'Start date',
    endLabel: 'End date',
    todayBtn: 'Today',
    addLabel: 'Business days to add',
    calcBtn: '→ Calculate',
    tipText: '"Time is money. Count it wisely."',
    examples: ['Count business days this month', 'Add 10 business days to today', '30 working days from today'],
    resultsHeader1: 'Business days',
    resultsHeader2: 'Result date',
    businessDaysLbl: 'business days',
    weekendsLbl: 'weekends',
    totalDaysLbl: 'total days',
    weeksLbl: 'weeks',
    weekdayLbl: 'Day of week',
    startDayLbl: 'Start day',
    endDayLbl: 'End day',
    errInvalid: '→ Invalid date. Please check your input.',
    errOrder: '→ End date must be after start date.',
    errAmount: '→ Please enter a valid number of days.',
    seoH2a: 'What are business days?',
    seoP1: 'Business days — also called working days or weekdays — are Monday through Friday, excluding Saturday and Sunday. They are the standard unit of time used in commerce, banking, legal proceedings, and government administration. When a contract says "payment within 5 business days," it means 5 Monday-through-Friday days, not 5 calendar days. Public and federal holidays are not automatically excluded by this calculator because they vary by country, region, state, and year. For example, the U.S. has 11 federal holidays, but individual states may observe additional ones. The U.S. Department of Labor maintains the official list of federal holidays. For a simple Monday-through-Friday count without holidays, this calculator is perfectly accurate. If you need to exclude specific holidays, subtract them manually from the result.',
    seoH2b: 'How to calculate business days between two dates',
    seoP2: 'To count business days between two dates: list every date in the range from start to end inclusive, then count only those that fall on Monday through Friday. This calculator performs that count automatically and also shows the total calendar days and number of weekend days for context. The "Add business days" mode works in reverse: starting from a date, it advances one weekday at a time until the target count is reached, automatically skipping all Saturdays and Sundays. This is the correct method used in legal and financial contexts when a deadline is defined as "N business days from today."',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'U.S. Department of Labor – Federal Holidays' },
    faqs: [
      { q: 'What is a business day?', a: 'A business day is any day that is not a Saturday, Sunday, or public holiday. In most countries this means Monday through Friday. Banks, courts, and government agencies typically operate on business days only. When contracts, regulations, or deadlines refer to "business days," they mean weekdays excluding weekends — and usually excluding official public holidays as well.' },
      { q: 'How many business days are in a month?', a: 'A typical month contains 20–23 business days, depending on the month and year. February in a common year has 20 business days (4 full weeks). Months with 31 days can have up to 23. To get the exact count for any specific month, enter the first and last day of that month in this calculator.' },
      { q: 'How do I add 10 business days to today?', a: 'Select "Add business days to a date," enter today\'s date as the start, enter 10 in the business days field, and click Calculate. The result shows the exact date 10 working days from now, skipping all Saturdays and Sundays. For example, starting on a Monday, 10 business days later is the Monday of the third week (2 calendar weeks later).' },
      { q: 'How do I calculate business days excluding holidays?', a: 'This calculator excludes weekends automatically. To exclude public holidays, first get the business day count, then subtract the number of official holidays that fall within your date range. Most countries have 8–13 public holidays per year. The U.S. has 11 federal holidays; check the Department of Labor website for the current list.' },
      { q: 'What is 5 business days from today?', a: 'Five business days from any Monday is the following Monday. From a Tuesday, it is the following Tuesday, and so on — because 5 weekdays is exactly one working week. However, if the start date is mid-week, the end date will land one week later on the same day. Use the "Add business days" mode and enter 5 to get the exact date.' },
      { q: 'How many calendar days are 30 business days?', a: '30 business days is always 6 calendar weeks (42 days) if there are no holidays, because 5 business days per week × 6 weeks = 30. However, it can be 43–46 calendar days if the start or end of the period falls mid-week and spans additional weekend days. Use the calculator to get the precise calendar date.' },
      { q: 'Does this calculator exclude public holidays?', a: 'No — public holidays vary by country, region, and year. This calculator excludes only weekends (Saturday and Sunday). Subtract the number of relevant holidays from the result manually.' },
      { q: 'What if I need to exclude specific holidays?', a: 'After getting the result, subtract the number of public holidays that fall within the range. Most countries have 8–12 public holidays per year.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  },
  fr: {
    title: 'Calculateur de jours ouvrables – Compter les jours travaillés | DateCalc.app',
    metaDesc: 'Calculez le nombre de jours ouvrables entre deux dates, ou ajoutez des jours ouvrables à une date. Exclut les week-ends.',
    kicker: 'Calculateur de jours ouvrables',
    headline: 'Compter<br>les jours <em>ouvrables</em>',
    subhead: 'Calculez les jours ouvrables entre deux dates, ou trouvez une date X jours ouvrables à partir de maintenant.',
    mode1Label: 'Compter entre deux dates',
    mode2Label: 'Ajouter des jours ouvrables à une date',
    startLabel: 'Date de début',
    endLabel: 'Date de fin',
    todayBtn: 'Aujourd\'hui',
    addLabel: 'Jours ouvrables à ajouter',
    calcBtn: '→ Calculer',
    tipText: '"Le temps c\'est de l\'argent. Comptez-le judicieusement."',
    examples: ['Jours ouvrables ce mois-ci', 'Ajouter 10 jours ouvrables à aujourd\'hui', '30 jours ouvrables à partir d\'aujourd\'hui'],
    resultsHeader1: 'Jours ouvrables',
    resultsHeader2: 'Date résultante',
    businessDaysLbl: 'jours ouvrables',
    weekendsLbl: 'week-ends',
    totalDaysLbl: 'jours au total',
    weeksLbl: 'semaines',
    weekdayLbl: 'Jour de la semaine',
    startDayLbl: 'Jour de début',
    endDayLbl: 'Jour de fin',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errOrder: '→ La date de fin doit être après la date de début.',
    errAmount: '→ Veuillez entrer un nombre de jours valide.',
    seoH2a: 'Que sont les jours ouvrables ?',
    seoP1: 'Les jours ouvrables — aussi appelés jours travaillés ou jours de semaine — sont du lundi au vendredi, excluant le samedi et le dimanche. Ils constituent l\'unité de temps standard utilisée dans le commerce, la banque, les procédures juridiques et l\'administration gouvernementale. Lorsqu\'un contrat stipule "paiement dans les 5 jours ouvrables", cela signifie 5 jours du lundi au vendredi, pas 5 jours calendaires. Les jours fériés ne sont pas automatiquement exclus par ce calculateur car ils varient selon le pays, la région et l\'année. Pour un simple décompte lundi-vendredi sans jours fériés, ce calculateur est parfaitement précis. Pour exclure des jours fériés spécifiques, soustrayez-les manuellement du résultat.',
    seoH2b: 'Comment calculer les jours ouvrables entre deux dates',
    seoP2: 'Pour compter les jours ouvrables entre deux dates : listez chaque date de la plage du début à la fin inclus, puis ne comptez que celles qui tombent du lundi au vendredi. Ce calculateur effectue ce décompte automatiquement et affiche également le total de jours calendaires et le nombre de jours de week-end. Le mode "Ajouter des jours ouvrables" fonctionne en sens inverse : à partir d\'une date, il avance d\'un jour ouvrable à la fois jusqu\'à atteindre le nombre cible, en sautant automatiquement tous les samedis et dimanches.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'Département du Travail des États-Unis – Jours fériés fédéraux' },
    faqs: [
      { q: 'Qu\'est-ce qu\'un jour ouvrable ?', a: 'Un jour ouvrable est tout jour qui n\'est pas un samedi, dimanche ou jour férié. Dans la plupart des pays, cela signifie du lundi au vendredi. Les banques, tribunaux et agences gouvernementales opèrent généralement uniquement les jours ouvrables. Lorsque les contrats ou réglementations mentionnent des "jours ouvrables", ils excluent les week-ends et généralement aussi les jours fériés officiels.' },
      { q: 'Combien de jours ouvrables y a-t-il dans un mois ?', a: 'Un mois typique compte 20 à 23 jours ouvrables, selon le mois et l\'année. Février en année normale compte 20 jours ouvrables (4 semaines complètes). Les mois de 31 jours peuvent en avoir jusqu\'à 23. Pour obtenir le décompte exact d\'un mois spécifique, entrez le premier et le dernier jour de ce mois dans ce calculateur.' },
      { q: 'Comment ajouter 10 jours ouvrables à aujourd\'hui ?', a: 'Sélectionnez "Ajouter des jours ouvrables", entrez la date d\'aujourd\'hui comme début, entrez 10 dans le champ des jours ouvrables et cliquez sur Calculer. Le résultat affiche la date exacte 10 jours ouvrables à partir de maintenant, en sautant tous les samedis et dimanches.' },
      { q: 'Comment calculer les jours ouvrables en excluant les jours fériés ?', a: 'Ce calculateur exclut automatiquement les week-ends. Pour exclure les jours fériés, obtenez d\'abord le décompte des jours ouvrables, puis soustrayez le nombre de jours fériés officiels qui tombent dans votre plage de dates. La plupart des pays ont 8 à 13 jours fériés par an.' },
      { q: 'Quelle est la date dans 5 jours ouvrables ?', a: 'Cinq jours ouvrables à partir d\'un lundi correspondent au lundi suivant. D\'un mardi, au mardi suivant — car 5 jours de semaine équivalent exactement à une semaine de travail. Utilisez le mode "Ajouter des jours ouvrables" et entrez 5 pour obtenir la date exacte.' },
      { q: 'Combien de jours calendaires font 30 jours ouvrables ?', a: '30 jours ouvrables correspondent toujours à 6 semaines calendaires (42 jours) s\'il n\'y a pas de jours fériés, car 5 jours ouvrables × 6 semaines = 30. Cela peut représenter 43 à 46 jours calendaires selon les week-ends qui tombent en début ou fin de période. Utilisez le calculateur pour obtenir la date calendaire précise.' },
      { q: 'Ce calculateur exclut-il les jours fériés ?', a: 'Non — les jours fériés varient selon le pays, la région et l\'année. Ce calculateur exclut uniquement les week-ends (samedi et dimanche). Soustrayez manuellement le nombre de jours fériés pertinents du résultat.' },
      { q: 'Comment exclure des jours fériés spécifiques ?', a: 'Après avoir obtenu le résultat, soustrayez le nombre de jours fériés qui tombent dans la plage. La plupart des pays ont 8 à 12 jours fériés par an.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
  },
  es: {
    title: 'Calculadora de días hábiles – Contar días laborables | DateCalc.app',
    metaDesc: 'Calcula el número de días hábiles entre dos fechas, o añade días hábiles a una fecha. Excluye los fines de semana.',
    kicker: 'Calculadora de días hábiles',
    headline: 'Contar<br>días <em>hábiles</em>',
    subhead: 'Calcula los días hábiles entre fechas, o encuentra una fecha X días laborables a partir de ahora.',
    mode1Label: 'Contar entre dos fechas',
    mode2Label: 'Añadir días hábiles a una fecha',
    startLabel: 'Fecha de inicio',
    endLabel: 'Fecha de fin',
    todayBtn: 'Hoy',
    addLabel: 'Días hábiles a añadir',
    calcBtn: '→ Calcular',
    tipText: '"El tiempo es dinero. Cuéntalo sabiamente."',
    examples: ['Días hábiles este mes', 'Añadir 10 días hábiles a hoy', '30 días laborables desde hoy'],
    resultsHeader1: 'Días hábiles',
    resultsHeader2: 'Fecha resultado',
    businessDaysLbl: 'días hábiles',
    weekendsLbl: 'fines de semana',
    totalDaysLbl: 'días totales',
    weeksLbl: 'semanas',
    weekdayLbl: 'Día de la semana',
    startDayLbl: 'Día de inicio',
    endDayLbl: 'Día de fin',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errOrder: '→ La fecha de fin debe ser posterior a la de inicio.',
    errAmount: '→ Por favor ingresa un número de días válido.',
    seoH2a: '¿Qué son los días hábiles?',
    seoP1: 'Los días hábiles — también llamados días laborables o días de semana — son de lunes a viernes, excluyendo el sábado y el domingo. Son la unidad de tiempo estándar utilizada en el comercio, la banca, los procedimientos legales y la administración gubernamental. Cuando un contrato dice "pago en 5 días hábiles", significa 5 días de lunes a viernes, no 5 días calendario. Los días festivos no son excluidos automáticamente por esta calculadora porque varían por país, región y año. Para un simple conteo de lunes a viernes sin festivos, esta calculadora es perfectamente precisa. Para excluir festivos específicos, réstalos manualmente del resultado.',
    seoH2b: 'Cómo calcular los días hábiles entre dos fechas',
    seoP2: 'Para contar días hábiles entre dos fechas: lista cada fecha del rango desde el inicio hasta el fin inclusive, luego cuenta solo las que caen de lunes a viernes. Esta calculadora realiza ese conteo automáticamente y también muestra el total de días calendario y el número de días de fin de semana. El modo "Añadir días hábiles" funciona al revés: desde una fecha, avanza un día laborable a la vez hasta alcanzar el conteo objetivo, saltando automáticamente todos los sábados y domingos.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'Departamento de Trabajo de EE. UU. – Días festivos federales' },
    faqs: [
      { q: '¿Qué es un día hábil?', a: 'Un día hábil es cualquier día que no sea sábado, domingo o día festivo. En la mayoría de los países esto significa de lunes a viernes. Los bancos, tribunales y agencias gubernamentales generalmente operan solo en días hábiles. Cuando los contratos o regulaciones mencionan "días hábiles", excluyen los fines de semana y generalmente también los días festivos oficiales.' },
      { q: '¿Cuántos días hábiles hay en un mes?', a: 'Un mes típico tiene 20–23 días hábiles, dependiendo del mes y el año. Febrero en año común tiene 20 días hábiles (4 semanas completas). Los meses de 31 días pueden tener hasta 23. Para obtener el conteo exacto de un mes específico, ingresa el primer y último día de ese mes en esta calculadora.' },
      { q: '¿Cómo añado 10 días hábiles a hoy?', a: 'Selecciona "Añadir días hábiles", ingresa la fecha de hoy como inicio, ingresa 10 en el campo de días hábiles y haz clic en Calcular. El resultado muestra la fecha exacta 10 días laborables a partir de ahora, saltando todos los sábados y domingos.' },
      { q: '¿Cómo calculo los días hábiles excluyendo días festivos?', a: 'Esta calculadora excluye los fines de semana automáticamente. Para excluir festivos, primero obtén el conteo de días hábiles, luego resta el número de festivos oficiales que caen en tu rango de fechas. La mayoría de los países tienen 8–13 días festivos al año.' },
      { q: '¿Cuál es la fecha en 5 días hábiles?', a: 'Cinco días hábiles desde cualquier lunes corresponden al lunes siguiente. Desde un martes, al martes siguiente — porque 5 días laborables equivalen exactamente a una semana de trabajo. Usa el modo "Añadir días hábiles" e ingresa 5 para obtener la fecha exacta.' },
      { q: '¿Cuántos días calendario son 30 días hábiles?', a: '30 días hábiles siempre son 6 semanas calendario (42 días) si no hay festivos, ya que 5 días hábiles × 6 semanas = 30. Puede ser 43–46 días calendario según los fines de semana que caigan al inicio o final del período. Usa la calculadora para obtener la fecha calendario precisa.' },
      { q: '¿Esta calculadora excluye los días festivos?', a: 'No — los días festivos varían por país, región y año. Esta calculadora excluye solo los fines de semana (sábado y domingo). Resta manualmente el número de días festivos relevantes del resultado.' },
      { q: '¿Qué pasa si necesito excluir días festivos específicos?', a: 'Después de obtener el resultado, resta el número de días festivos que caen dentro del rango. La mayoría de los países tienen 8–12 días festivos por año.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  },
  pt: {
    title: 'Calculadora de Dias Úteis 2026 – Contar Dias Úteis | Grátis',
    metaDesc: 'Calcule dias úteis entre duas datas. Exclui fins de semana e feriados. Resultado imediato — grátis, sem cadastro.',
    kicker: 'Dias Úteis',
    headline: 'Calculadora de<br><em>Dias Úteis</em>',
    subhead: 'Calcule o número de dias úteis entre duas datas',
    mode1Label: 'Contar entre duas datas',
    mode2Label: 'Adicionar dias úteis a uma data',
    startLabel: 'Data de início',
    endLabel: 'Data de fim',
    todayBtn: 'Hoje',
    addLabel: 'Dias úteis a adicionar',
    calcBtn: '→ CALCULAR',
    tipText: '"O tempo é dinheiro. Conte-o com sabedoria."',
    examples: ['Dias úteis neste mês', 'Adicionar 10 dias úteis a hoje', '30 dias úteis a partir de hoje'],
    resultsHeader1: 'Dias úteis',
    resultsHeader2: 'Data resultante',
    businessDaysLbl: 'dias úteis',
    weekendsLbl: 'fins de semana',
    totalDaysLbl: 'dias totais',
    weeksLbl: 'semanas',
    weekdayLbl: 'Dia da semana',
    startDayLbl: 'Dia inicial',
    endDayLbl: 'Dia final',
    errInvalid: 'Data inválida. Verifique dia, mês e ano.',
    errOrder: 'A data de início deve ser anterior à data de término.',
    errAmount: '→ Insira um número de dias válido.',
    unitDays: 'dias úteis',
    seoH2a: 'O que são dias úteis?',
    seoP1: 'Dias úteis são os dias da semana em que o comércio e os serviços funcionam normalmente — geralmente de segunda a sexta-feira, excluindo fins de semana e feriados nacionais.',
    seoH2b: 'Como contar dias úteis entre duas datas?',
    seoP2: 'Para contar dias úteis, some todos os dias entre as duas datas e subtraia os sábados, domingos e feriados. Esta calculadora faz isso automaticamente.',
    faqTitle: 'Perguntas frequentes',
    source: null,
    faqs: [
      { q: 'Como calcular 30 dias úteis a partir de hoje?', a: 'Use a calculadora: insira a data de hoje como início, depois conte 30 dias úteis para frente. Ou use a calculadora de data para adicionar dias corridos e depois subtrair fins de semana.' },
      { q: 'Sábado conta como dia útil?', a: 'Geralmente não. A maioria das definições de dias úteis exclui sábados e domingos. Alguns setores consideram o sábado como meio dia útil, mas no padrão geral, sábado não é dia útil.' },
      { q: 'Feriados são excluídos?', a: 'Esta calculadora exclui fins de semana. Para feriados específicos, verifique o calendário do seu país ou estado.' },
    ],
    weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
    months: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
  },
  de: {
    title: 'Arbeitstage-Rechner 2026 – Werktage zählen | Kostenlos',
    metaDesc: 'Berechnen Sie die Anzahl der Arbeitstage zwischen zwei Daten oder addieren Sie Werktage zu einem Datum. Schließt Wochenenden aus.',
    kicker: 'Arbeitstage-Rechner',
    headline: 'Werktage<br><em>zählen</em>',
    subhead: 'Arbeitstage zwischen Daten berechnen oder ein Datum X Werktage ab heute finden.',
    mode1Label: 'Zwischen zwei Daten zählen',
    mode2Label: 'Arbeitstage zu einem Datum addieren',
    startLabel: 'Startdatum',
    endLabel: 'Enddatum',
    todayBtn: 'Heute',
    addLabel: 'Arbeitstage hinzufügen',
    calcBtn: '→ BERECHNEN',
    tipText: '"Zeit ist Geld. Zähle sie weise."',
    examples: ['Arbeitstage diesen Monat zählen', '10 Arbeitstage zu heute addieren', '30 Werktage ab heute'],
    resultsHeader1: 'Arbeitstage',
    resultsHeader2: 'Ergebnisdatum',
    businessDaysLbl: 'Arbeitstage',
    weekendsLbl: 'Wochenenden',
    totalDaysLbl: 'Tage insgesamt',
    weeksLbl: 'Wochen',
    weekdayLbl: 'Wochentag',
    startDayLbl: 'Starttag',
    endDayLbl: 'Endtag',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfen Sie Ihre Eingabe.',
    errOrder: '→ Das Enddatum muss nach dem Startdatum liegen.',
    errAmount: '→ Bitte geben Sie eine gültige Anzahl von Tagen ein.',
    unitDays: 'Tage',
    seoH2a: 'Was sind Arbeitstage?',
    seoP1: 'Arbeitstage — auch Werktage oder Wochentage genannt — sind Montag bis Freitag, ohne Samstag und Sonntag. Sie sind die Standardzeiteinheit in Handel, Bankwesen, Rechtsverfahren und Staatsverwaltung. Wenn ein Vertrag „Zahlung innerhalb von 5 Arbeitstagen" besagt, sind 5 Montag-bis-Freitag-Tage gemeint, keine 5 Kalendertage. Feiertage werden von diesem Rechner nicht automatisch ausgeschlossen, da sie je nach Land, Region und Jahr variieren. Für eine einfache Montag-bis-Freitag-Zählung ohne Feiertage ist dieser Rechner vollkommen genau. Wenn Sie bestimmte Feiertage ausschließen möchten, ziehen Sie diese manuell vom Ergebnis ab.',
    seoH2b: 'Wie berechnet man Arbeitstage zwischen zwei Daten?',
    seoP2: 'Um Arbeitstage zwischen zwei Daten zu zählen: Listen Sie jedes Datum im Bereich von Anfang bis Ende auf, dann zählen Sie nur die Tage, die auf Montag bis Freitag fallen. Dieser Rechner führt diese Zählung automatisch durch und zeigt auch die gesamten Kalendertage und die Anzahl der Wochenendtage. Der Modus „Arbeitstage addieren" funktioniert umgekehrt: Ausgehend von einem Datum rückt er jeweils einen Werktag vor, bis die Zielanzahl erreicht ist, und überspringt dabei automatisch alle Samstage und Sonntage.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'U.S. Department of Labor – Bundesfeiertage' },
    faqs: [
      { q: 'Was ist ein Arbeitstag?', a: 'Ein Arbeitstag ist jeder Tag, der kein Samstag, Sonntag oder gesetzlicher Feiertag ist. In den meisten Ländern bedeutet das Montag bis Freitag. Wenn Verträge oder Vorschriften von „Arbeitstagen" sprechen, sind Wochentage ohne Wochenenden gemeint — und in der Regel auch ohne offizielle Feiertage.' },
      { q: 'Wie viele Arbeitstage hat ein Monat?', a: 'Ein typischer Monat enthält 20–23 Arbeitstage, je nach Monat und Jahr. Februar im normalen Jahr hat 20 Arbeitstage (4 volle Wochen). Monate mit 31 Tagen können bis zu 23 haben. Für die genaue Zählung eines bestimmten Monats geben Sie den ersten und letzten Tag dieses Monats in diesen Rechner ein.' },
      { q: 'Wie addiere ich 10 Arbeitstage zu heute?', a: 'Wählen Sie „Arbeitstage addieren", geben Sie das heutige Datum als Start ein, tragen Sie 10 in das Arbeitstage-Feld ein und klicken Sie auf Berechnen. Das Ergebnis zeigt das genaue Datum 10 Werktage ab heute, unter Auslassung aller Samstage und Sonntage.' },
      { q: 'Wie berechne ich Arbeitstage ohne Feiertage?', a: 'Dieser Rechner schließt Wochenenden automatisch aus. Um Feiertage auszuschließen, ermitteln Sie zuerst die Anzahl der Arbeitstage und ziehen dann die Anzahl der offiziellen Feiertage ab, die in Ihren Datumsbereich fallen. Die meisten Länder haben 8–13 Feiertage pro Jahr.' },
      { q: 'Welches Datum ist in 5 Arbeitstagen?', a: 'Fünf Arbeitstage ab einem Montag ist der folgende Montag. Ab einem Dienstag ist es der folgende Dienstag — denn 5 Werktage sind genau eine Arbeitswoche. Verwenden Sie den Modus „Arbeitstage addieren" und geben Sie 5 ein, um das genaue Datum zu erhalten.' },
      { q: 'Wie viele Kalendertage sind 30 Arbeitstage?', a: '30 Arbeitstage sind immer 6 Kalenderwochen (42 Tage), wenn keine Feiertage fallen, da 5 Arbeitstage × 6 Wochen = 30. Es können 43–46 Kalendertage sein, wenn der Beginn oder das Ende des Zeitraums in die Mitte der Woche fällt. Verwenden Sie den Rechner, um das genaue Kalenderdatum zu erhalten.' },
      { q: 'Schließt dieser Rechner Feiertage aus?', a: 'Nein — Feiertage variieren nach Land, Region und Jahr. Dieser Rechner schließt nur Wochenenden (Samstag und Sonntag) aus. Ziehen Sie die Anzahl der relevanten Feiertage manuell vom Ergebnis ab.' },
      { q: 'Was tun, wenn ich bestimmte Feiertage ausschließen möchte?', a: 'Ziehen Sie nach Erhalt des Ergebnisses die Anzahl der Feiertage ab, die in den Bereich fallen. Die meisten Länder haben 8–12 Feiertage pro Jahr.' },
    ],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  },
  it: {
    title: 'Calcolatore Giorni Lavorativi 2026 – Conta i Giorni Lavorativi | Gratis',
    metaDesc: 'Calcola il numero di giorni lavorativi tra due date, o aggiungi giorni lavorativi a una data. Esclude i fine settimana.',
    kicker: 'Calcolatore Giorni Lavorativi',
    headline: 'Conta i<br>giorni <em>lavorativi</em>',
    subhead: 'Calcola i giorni lavorativi tra date, o trova una data X giorni lavorativi da oggi.',
    mode1Label: 'Conta tra due date',
    mode2Label: 'Aggiungi giorni lavorativi a una data',
    startLabel: 'Data di inizio',
    endLabel: 'Data di fine',
    todayBtn: 'Oggi',
    addLabel: 'Giorni lavorativi da aggiungere',
    calcBtn: '→ CALCOLA',
    tipText: '"Il tempo è denaro. Contalo saggiamente."',
    examples: ['Conta giorni lavorativi questo mese', 'Aggiungi 10 giorni lavorativi a oggi', '30 giorni lavorativi da oggi'],
    resultsHeader1: 'Giorni lavorativi',
    resultsHeader2: 'Data risultante',
    businessDaysLbl: 'giorni lavorativi',
    weekendsLbl: 'fine settimana',
    totalDaysLbl: 'giorni totali',
    weeksLbl: 'settimane',
    weekdayLbl: 'Giorno della settimana',
    startDayLbl: 'Giorno iniziale',
    endDayLbl: 'Giorno finale',
    errInvalid: '→ Data non valida. Controlla la tua immissione.',
    errOrder: '→ La data di fine deve essere successiva alla data di inizio.',
    errAmount: '→ Inserisci un numero di giorni valido.',
    unitDays: 'giorni lavorativi',
    seoH2a: 'Cosa sono i giorni lavorativi?',
    seoP1: 'I giorni lavorativi — chiamati anche giorni feriali o giorni della settimana — sono dal lunedì al venerdì, esclusi sabato e domenica. Sono l\'unità di tempo standard usata nel commercio, bancario, nei procedimenti legali e nell\'amministrazione pubblica. Quando un contratto dice "pagamento entro 5 giorni lavorativi", significa 5 giorni da lunedì a venerdì, non 5 giorni di calendario. I giorni festivi non sono automaticamente esclusi da questo calcolatore perché variano per paese, regione e anno. Per un semplice conteggio da lunedì a venerdì senza festività, questo calcolatore è perfettamente accurato. Se è necessario escludere festività specifiche, sottraile manualmente dal risultato.',
    seoH2b: 'Come calcolare i giorni lavorativi tra due date',
    seoP2: 'Per contare i giorni lavorativi tra due date: elenca ogni data nell\'intervallo dall\'inizio alla fine inclusi, poi conta solo quelle che cadono da lunedì a venerdì. Questo calcolatore esegue quel conteggio automaticamente e mostra anche i giorni di calendario totali e il numero di giorni del fine settimana. La modalità "Aggiungi giorni lavorativi" funziona al contrario: a partire da una data, avanza di un giorno feriale alla volta fino a raggiungere il conteggio obiettivo, saltando automaticamente tutti i sabati e le domeniche.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'Dipartimento del Lavoro degli Stati Uniti – Festività federali' },
    faqs: [
      { q: 'Cos\'è un giorno lavorativo?', a: 'Un giorno lavorativo è qualsiasi giorno che non è sabato, domenica o festivo. Nella maggior parte dei paesi significa da lunedì a venerdì. Banche, tribunali e agenzie governative operano tipicamente solo nei giorni lavorativi. Quando contratti o regolamenti menzionano "giorni lavorativi", intendono i giorni feriali, escludendo fine settimana e di solito anche le festività ufficiali.' },
      { q: 'Quanti giorni lavorativi ci sono in un mese?', a: 'Un mese tipico contiene 20–23 giorni lavorativi, a seconda del mese e dell\'anno. Febbraio in un anno comune ha 20 giorni lavorativi (4 settimane intere). I mesi con 31 giorni possono averne fino a 23. Per ottenere il conteggio esatto di un mese specifico, inserisci il primo e l\'ultimo giorno di quel mese in questo calcolatore.' },
      { q: 'Come aggiungo 10 giorni lavorativi a oggi?', a: 'Seleziona "Aggiungi giorni lavorativi", inserisci la data di oggi come inizio, inserisci 10 nel campo dei giorni lavorativi e clicca su Calcola. Il risultato mostra la data esatta 10 giorni lavorativi da oggi, saltando tutti i sabati e le domeniche.' },
      { q: 'Come calcolo i giorni lavorativi escludendo le festività?', a: 'Questo calcolatore esclude automaticamente i fine settimana. Per escludere le festività, ottieni prima il conteggio dei giorni lavorativi, poi sottrai il numero di festività ufficiali che cadono nel tuo intervallo di date. La maggior parte dei paesi ha 8–13 festività all\'anno.' },
      { q: 'Quale data è tra 5 giorni lavorativi?', a: 'Cinque giorni lavorativi da un lunedì è il lunedì successivo. Da un martedì, è il martedì successivo — perché 5 giorni feriali sono esattamente una settimana lavorativa. Usa la modalità "Aggiungi giorni lavorativi" e inserisci 5 per ottenere la data esatta.' },
      { q: 'Quanti giorni di calendario sono 30 giorni lavorativi?', a: '30 giorni lavorativi sono sempre 6 settimane di calendario (42 giorni) se non ci sono festività, perché 5 giorni lavorativi × 6 settimane = 30. Possono essere 43–46 giorni di calendario se l\'inizio o la fine del periodo cade a metà settimana. Usa il calcolatore per ottenere la data di calendario precisa.' },
      { q: 'Questo calcolatore esclude le festività?', a: 'No — le festività variano per paese, regione e anno. Questo calcolatore esclude solo i fine settimana (sabato e domenica). Sottrai manualmente il numero di festività rilevanti dal risultato.' },
      { q: 'Cosa fare se devo escludere festività specifiche?', a: 'Dopo aver ottenuto il risultato, sottrai il numero di festività che cadono nell\'intervallo. La maggior parte dei paesi ha 8–12 festività all\'anno.' },
    ],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    months: ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
  },
  pl: {
    title: 'Kalkulator Dni Roboczych 2026 – Licz Dni Robocze | Za Darmo',
    metaDesc: 'Oblicz liczbę dni roboczych między dwiema datami lub dodaj dni robocze do daty. Wyklucza weekendy.',
    kicker: 'Kalkulator Dni Roboczych',
    headline: 'Liczenie<br>dni <em>roboczych</em>',
    subhead: 'Oblicz dni robocze między datami lub znajdź datę X dni roboczych od teraz.',
    mode1Label: 'Licz między dwiema datami',
    mode2Label: 'Dodaj dni robocze do daty',
    startLabel: 'Data początkowa',
    endLabel: 'Data końcowa',
    todayBtn: 'Dzisiaj',
    addLabel: 'Dni robocze do dodania',
    calcBtn: '→ OBLICZ',
    tipText: '"Czas to pieniądz. Licz go mądrze."',
    examples: ['Licz dni robocze w tym miesiącu', 'Dodaj 10 dni roboczych do dziś', '30 dni roboczych od dziś'],
    resultsHeader1: 'Dni robocze',
    resultsHeader2: 'Data wynikowa',
    businessDaysLbl: 'dni roboczych',
    weekendsLbl: 'weekendy',
    totalDaysLbl: 'dni łącznie',
    weeksLbl: 'tygodnie',
    weekdayLbl: 'Dzień tygodnia',
    startDayLbl: 'Dzień początkowy',
    endDayLbl: 'Dzień końcowy',
    errInvalid: '→ Nieprawidłowa data. Sprawdź swój wpis.',
    errOrder: '→ Data końcowa musi być późniejsza niż data początkowa.',
    errAmount: '→ Podaj prawidłową liczbę dni.',
    unitDays: 'dni roboczych',
    seoH2a: 'Co to są dni robocze?',
    seoP1: 'Dni robocze — zwane też dniami powszednimi lub roboczymi — to poniedziałek przez piątek, z wyłączeniem soboty i niedzieli. Są standardową jednostką czasu używaną w handlu, bankowości, postępowaniach prawnych i administracji rządowej. Gdy umowa mówi „zapłata w ciągu 5 dni roboczych", oznacza to 5 dni od poniedziałku do piątku, a nie 5 dni kalendarzowych. Dni wolne nie są automatycznie wyłączane przez ten kalkulator, ponieważ różnią się w zależności od kraju, regionu i roku. Do prostego liczenia od poniedziałku do piątku bez świąt ten kalkulator jest w pełni dokładny. Aby wykluczyć określone święta, odejmij je ręcznie od wyniku.',
    seoH2b: 'Jak obliczać dni robocze między dwiema datami?',
    seoP2: 'Aby policzyć dni robocze między dwiema datami: wylistuj każdą datę w zakresie od początku do końca włącznie, a następnie zlicz tylko te, które przypadają od poniedziałku do piątku. Ten kalkulator wykonuje to obliczenie automatycznie i wyświetla też łączną liczbę dni kalendarzowych oraz liczbę dni weekendowych. Tryb „Dodaj dni robocze" działa odwrotnie: zaczynając od daty, przesuwa się o jeden dzień roboczy na raz do osiągnięcia docelowej liczby, automatycznie pomijając wszystkie soboty i niedziele.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'Departament Pracy USA – Federalne dni wolne' },
    faqs: [
      { q: 'Co to jest dzień roboczy?', a: 'Dzień roboczy to każdy dzień niebędący sobotą, niedzielą ani świętem ustawowo wolnym. W większości krajów oznacza to poniedziałek przez piątek. Banki, sądy i urzędy państwowe zazwyczaj pracują wyłącznie w dni robocze. Gdy umowy lub przepisy mówią o „dniach roboczych", mają na myśli dni powszednie z wyłączeniem weekendów — i zazwyczaj oficjalnych świąt.' },
      { q: 'Ile dni roboczych ma miesiąc?', a: 'Typowy miesiąc zawiera 20–23 dni robocze, zależnie od miesiąca i roku. Luty w roku zwykłym ma 20 dni roboczych (4 pełne tygodnie). Miesiące 31-dniowe mogą mieć do 23. Aby uzyskać dokładną liczbę dla konkretnego miesiąca, wpisz pierwszy i ostatni dzień tego miesiąca w tym kalkulatorze.' },
      { q: 'Jak dodać 10 dni roboczych do dziś?', a: 'Wybierz „Dodaj dni robocze", wpisz dzisiejszą datę jako początek, wprowadź 10 w pole dni roboczych i kliknij Oblicz. Wynik pokazuje dokładną datę 10 dni roboczych od teraz, pomijając wszystkie soboty i niedziele.' },
      { q: 'Jak obliczać dni robocze z wyłączeniem świąt?', a: 'Ten kalkulator automatycznie wyklucza weekendy. Aby wykluczyć święta, najpierw uzyskaj liczbę dni roboczych, a następnie odejmij liczbę oficjalnych świąt przypadających w Twoim zakresie dat. Większość krajów ma 8–13 świąt rocznie.' },
      { q: 'Jaka data wypada za 5 dni roboczych?', a: 'Pięć dni roboczych od dowolnego poniedziałku to następny poniedziałek. Od wtorku to następny wtorek — ponieważ 5 dni powszednich to dokładnie jeden tydzień roboczy. Użyj trybu „Dodaj dni robocze" i wpisz 5, aby uzyskać dokładną datę.' },
      { q: 'Ile dni kalendarzowych to 30 dni roboczych?', a: '30 dni roboczych to zawsze 6 tygodni kalendarzowych (42 dni), jeśli nie ma świąt, bo 5 dni roboczych × 6 tygodni = 30. Może to być 43–46 dni kalendarzowych, jeśli początek lub koniec okresu wypada w środku tygodnia. Użyj kalkulatora, aby uzyskać dokładną datę.' },
      { q: 'Czy ten kalkulator wyklucza święta?', a: 'Nie — święta różnią się w zależności od kraju, regionu i roku. Ten kalkulator wyklucza tylko weekendy (sobota i niedziela). Ręcznie odejmij liczbę odpowiednich świąt od wyniku.' },
      { q: 'Co zrobić, gdy chcę wykluczyć konkretne święta?', a: 'Po uzyskaniu wyniku odejmij liczbę świąt przypadających w zakresie. Większość krajów ma 8–12 świąt rocznie.' },
    ],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    months: ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'],
  },
  ja: {
    title: '平日計算ツール 2026 – 営業日の計算 | 無料',
    metaDesc: '2つの日付間の営業日数を計算、または日付に営業日数を加算します。週末を除外します。',
    kicker: '営業日計算ツール',
    headline: '<em>営業日</em>の<br>計算',
    subhead: '日付間の営業日数を計算、または今から X 営業日後の日付を求めます。',
    mode1Label: '2つの日付間で数える',
    mode2Label: '日付に営業日数を加算',
    startLabel: '開始日',
    endLabel: '終了日',
    todayBtn: '今日',
    addLabel: '加算する営業日数',
    calcBtn: '→ 計算する',
    tipText: '"時間はお金です。賢く数えましょう。"',
    examples: ['今月の営業日を数える', '今日から10営業日後', '今日から30営業日後'],
    resultsHeader1: '営業日数',
    resultsHeader2: '計算結果の日付',
    businessDaysLbl: '営業日',
    weekendsLbl: '週末',
    totalDaysLbl: '合計日数',
    weeksLbl: '週',
    weekdayLbl: '曜日',
    startDayLbl: '開始曜日',
    endDayLbl: '終了曜日',
    errInvalid: '→ 無効な日付です。入力を確認してください。',
    errOrder: '→ 終了日は開始日より後にしてください。',
    errAmount: '→ 有効な日数を入力してください。',
    unitDays: '営業日',
    seoH2a: '営業日とは何ですか？',
    seoP1: '営業日（平日または就業日とも呼ばれる）は月曜日から金曜日で、土曜日と日曜日を除きます。商取引、銀行業務、法的手続き、政府行政で使用される標準的な時間単位です。契約書に「5営業日以内に支払い」とある場合、5つの平日（月〜金）を意味し、5暦日ではありません。このツールでは祝日は自動的に除外されません。単純な月〜金の計算（祝日なし）には本ツールで十分正確です。特定の祝日を除外するには、結果から手動で引いてください。',
    seoH2b: '2つの日付間の営業日数の計算方法は？',
    seoP2: '2つの日付間の営業日数を数えるには：開始日から終了日まで（含む）のすべての日付を列挙し、月〜金に当たる日だけを数えます。「営業日を加算」モードはその逆で、開始日から1営業日ずつ進み、目標の日数に達するまでのすべての土日を自動的にスキップします。',
    faqTitle: 'よくある質問',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: '米国労働省 – 連邦祝日' },
    faqs: [
      { q: '営業日とは何ですか？', a: '営業日とは土曜日、日曜日、法定祝日以外の日です。ほとんどの国では月曜日から金曜日を意味します。銀行、裁判所、政府機関は通常、営業日のみ業務を行います。' },
      { q: '1ヶ月の営業日数は何日ですか？', a: '一般的な月は20〜23営業日を含みます（月と年によって異なります）。通常年の2月は20営業日（4完全週）です。31日の月は最大23日になる場合があります。' },
      { q: '今日から10営業日後はいつですか？', a: '「営業日を加算」を選択し、今日を開始日として入力し、10と営業日数を入力して「計算する」をクリックしてください。結果はすべての土日をスキップした10営業日後の正確な日付を示します。' },
      { q: '祝日を除いた営業日の計算方法は？', a: 'このツールは週末を自動的に除外します。祝日を除外するには、最初に営業日数を取得し、そのあとで日付範囲に含まれる祝日の数を引いてください。' },
      { q: '5営業日後の日付はいつですか？', a: 'どの月曜日から5営業日後も次の月曜日です。火曜日から5営業日後は次の火曜日です。5営業日はちょうど1業務週だからです。' },
      { q: '30営業日は何暦日ですか？', a: '祝日なしの場合、30営業日は常に6暦週（42日）です（5営業日×6週=30）。開始または終了が週の途中の場合は43〜46暦日になる場合があります。' },
      { q: 'このツールは祝日を除外しますか？', a: '除外しません。祝日は国、地域、年によって異なります。このツールは週末（土曜日と日曜日）のみを除外します。結果から該当する祝日の数を手動で引いてください。' },
      { q: '特定の祝日を除外したい場合はどうすればよいですか？', a: '結果を取得した後、対象範囲に含まれる祝日の数を引いてください。ほとんどの国では年間8〜12の祝日があります。' },
    ],
    weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  },
  ko: {
    title: '영업일 계산기 2026 – 평일 계산 | 무료',
    metaDesc: '두 날짜 사이의 영업일 수를 계산하거나 날짜에 영업일을 더합니다. 주말을 제외합니다.',
    kicker: '영업일 계산기',
    headline: '<em>영업일</em><br>계산',
    subhead: '날짜 사이의 영업일을 계산하거나 지금부터 X 영업일 후의 날짜를 구하세요.',
    mode1Label: '두 날짜 사이 계산',
    mode2Label: '날짜에 영업일 더하기',
    startLabel: '시작 날짜',
    endLabel: '종료 날짜',
    todayBtn: '오늘',
    addLabel: '더할 영업일 수',
    calcBtn: '→ 계산하기',
    tipText: '"시간은 돈입니다. 현명하게 계산하세요."',
    examples: ['이번 달 영업일 계산', '오늘부터 10영업일 후', '오늘부터 30영업일 후'],
    resultsHeader1: '영업일 수',
    resultsHeader2: '계산 결과 날짜',
    businessDaysLbl: '영업일',
    weekendsLbl: '주말',
    totalDaysLbl: '총 일수',
    weeksLbl: '주',
    weekdayLbl: '요일',
    startDayLbl: '시작 요일',
    endDayLbl: '종료 요일',
    errInvalid: '→ 유효하지 않은 날짜입니다. 입력을 확인하세요.',
    errOrder: '→ 종료 날짜는 시작 날짜보다 이후여야 합니다.',
    errAmount: '→ 유효한 일수를 입력하세요.',
    unitDays: '영업일',
    seoH2a: '영업일이란 무엇인가요?',
    seoP1: '영업일(평일 또는 근무일이라고도 함)은 토요일과 일요일을 제외한 월요일부터 금요일입니다. 상업, 은행업, 법적 절차, 정부 행정에서 사용되는 표준 시간 단위입니다. 계약서에 "5영업일 이내 지불"이라고 명시되어 있다면, 이는 5일(월~금)을 의미하며 5 달력 일이 아닙니다. 이 계산기는 공휴일을 자동으로 제외하지 않습니다.',
    seoH2b: '두 날짜 사이의 영업일을 계산하는 방법은?',
    seoP2: '두 날짜 사이의 영업일을 세려면: 시작일부터 종료일까지(포함) 모든 날짜를 나열하고, 월~금에 해당하는 날만 셉니다. "영업일 더하기" 모드는 그 반대입니다. 시작 날짜에서 하루씩 진행하여 목표 일수에 도달할 때까지 모든 토요일과 일요일을 자동으로 건너뜁니다.',
    faqTitle: '자주 묻는 질문',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: '미국 노동부 – 연방 공휴일' },
    faqs: [
      { q: '영업일이란 무엇인가요?', a: '영업일은 토요일, 일요일, 법정 공휴일이 아닌 날입니다. 대부분의 국가에서 월요일부터 금요일을 의미합니다. 은행, 법원, 정부 기관은 일반적으로 영업일에만 운영됩니다.' },
      { q: '한 달에 영업일이 몇 일인가요?', a: '일반적인 달은 20~23 영업일을 포함합니다(월과 연도에 따라 다름). 일반 연도의 2월은 20 영업일(4 완전한 주)입니다. 31일 달은 최대 23일이 될 수 있습니다.' },
      { q: '오늘부터 10영업일 후는 언제인가요?', a: '"영업일 더하기"를 선택하고, 오늘을 시작 날짜로 입력하고, 10을 영업일 수로 입력한 다음 "계산하기"를 클릭하세요. 결과는 모든 토요일과 일요일을 건너뛴 10영업일 후의 정확한 날짜를 보여줍니다.' },
      { q: '공휴일을 제외한 영업일 계산 방법은?', a: '이 계산기는 주말을 자동으로 제외합니다. 공휴일을 제외하려면 먼저 영업일 수를 구한 다음, 날짜 범위에 포함된 공휴일 수를 빼세요.' },
      { q: '5영업일 후의 날짜는 언제인가요?', a: '어떤 월요일에서 5영업일 후도 다음 월요일입니다. 화요일에서 5영업일 후는 다음 화요일입니다. 5영업일이 정확히 1주 근무일이기 때문입니다.' },
      { q: '30영업일은 몇 달력 일인가요?', a: '공휴일이 없는 경우 30영업일은 항상 6달력 주(42일)입니다(5영업일×6주=30). 시작 또는 종료가 주 중간인 경우 43~46달력 일이 될 수 있습니다.' },
      { q: '이 계산기는 공휴일을 제외하나요?', a: '아니요. 공휴일은 국가, 지역, 연도에 따라 다릅니다. 이 계산기는 주말(토요일과 일요일)만 제외합니다. 결과에서 해당 공휴일 수를 수동으로 빼세요.' },
      { q: '특정 공휴일을 제외하고 싶다면?', a: '결과를 얻은 후 범위에 포함된 공휴일 수를 빼세요. 대부분의 국가는 연간 8~12개의 공휴일이 있습니다.' },
    ],
    weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  },
  nl: {
    title: 'Werkdagen Calculator 2026 – Bereken Werkdagen | Gratis',
    metaDesc: 'Bereken het aantal werkdagen tussen twee datums of tel werkdagen op bij een datum. Sluit weekenden uit.',
    kicker: 'Werkdagen Calculator',
    headline: 'Berekenen<br><em>werkdagen</em>',
    subhead: 'Bereken werkdagen tussen datums of vind de datum X werkdagen vanaf nu.',
    mode1Label: 'Tellen tussen twee datums',
    mode2Label: 'Werkdagen optellen bij datum',
    startLabel: 'Begindatum',
    endLabel: 'Einddatum',
    todayBtn: 'Vandaag',
    addLabel: 'Werkdagen op te tellen',
    calcBtn: '→ BEREKEN',
    tipText: '"Tijd is geld. Tel het verstandig."',
    examples: ['Tel werkdagen in deze maand', 'Voeg 10 werkdagen toe aan vandaag', '30 werkdagen vanaf vandaag'],
    resultsHeader1: 'Werkdagen',
    resultsHeader2: 'Resulterende datum',
    businessDaysLbl: 'werkdagen',
    weekendsLbl: 'weekenden',
    totalDaysLbl: 'dagen totaal',
    weeksLbl: 'weken',
    weekdayLbl: 'Dag van de week',
    startDayLbl: 'Begindag',
    endDayLbl: 'Einddag',
    errInvalid: '→ Ongeldige datum. Controleer je invoer.',
    errOrder: '→ De einddatum moet na de begindatum liggen.',
    errAmount: '→ Voer een geldig aantal dagen in.',
    unitDays: 'werkdagen',
    seoH2a: 'Wat zijn werkdagen?',
    seoP1: 'Werkdagen — ook wel weekdagen of arbeidsdagen genoemd — zijn maandag tot en met vrijdag, met uitzondering van zaterdag en zondag. Ze zijn de standaardeenheid voor tijd in de handel, bankwezen, juridische procedures en overheidsadministratie. Als een contract "betaling binnen 5 werkdagen" zegt, betekent dat 5 maandag-tot-vrijdag dagen, niet 5 kalenderdagen. Feestdagen worden door deze calculator niet automatisch uitgesloten omdat ze per land, regio en jaar verschillen.',
    seoH2b: 'Hoe bereken je werkdagen tussen twee datums?',
    seoP2: 'Om werkdagen tussen twee datums te tellen: maak een lijst van elke datum in het bereik van begin tot eind (inclusief), en tel dan alleen de datums die op maandag tot vrijdag vallen. De modus "Werkdagen optellen" werkt omgekeerd: vanaf een datum beweegt hij één werkdag per keer, en slaat automatisch alle zaterdagen en zondagen over.',
    faqTitle: 'Veelgestelde vragen',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'US Department of Labor – Federale feestdagen' },
    faqs: [
      { q: 'Wat is een werkdag?', a: 'Een werkdag is elke dag die geen zaterdag, zondag of wettelijke feestdag is. In de meeste landen betekent dat maandag tot en met vrijdag. Banken, rechtbanken en overheidsinstanties werken doorgaans alleen op werkdagen.' },
      { q: 'Hoeveel werkdagen heeft een maand?', a: 'Een typische maand bevat 20–23 werkdagen, afhankelijk van de maand en het jaar. Februari in een gewoon jaar heeft 20 werkdagen (4 volledige weken). Maanden van 31 dagen kunnen tot 23 hebben.' },
      { q: 'Hoe tel ik 10 werkdagen op bij vandaag?', a: 'Selecteer "Werkdagen optellen bij datum", voer de datum van vandaag in als startdatum, voer 10 in als werkdagen en klik op Berekenen. Het resultaat toont de exacte datum 10 werkdagen vanaf nu, waarbij alle zaterdagen en zondagen worden overgeslagen.' },
      { q: 'Hoe bereken ik werkdagen met uitzondering van feestdagen?', a: 'Deze calculator sluit weekenden automatisch uit. Om feestdagen uit te sluiten, verkrijg eerst het aantal werkdagen en trek dan het aantal officiële feestdagen in je datumbereik af.' },
      { q: 'Welke datum is het over 5 werkdagen?', a: 'Vijf werkdagen na elke maandag is de volgende maandag. Vanaf dinsdag is het de volgende dinsdag — want 5 werkdagen is precies één werkweek.' },
      { q: 'Hoeveel kalenderdagen zijn 30 werkdagen?', a: '30 werkdagen zijn altijd 6 kalenderweken (42 dagen) als er geen feestdagen zijn, want 5 werkdagen × 6 weken = 30. Het kunnen 43–46 kalenderdagen zijn als het begin of einde midden in de week valt.' },
      { q: 'Sluit deze calculator feestdagen uit?', a: 'Nee — feestdagen verschillen per land, regio en jaar. Deze calculator sluit alleen weekenden (zaterdag en zondag) uit. Trek handmatig het aantal relevante feestdagen af van het resultaat.' },
      { q: 'Wat als ik specifieke feestdagen wil uitsluiten?', a: 'Trek na het verkrijgen van het resultaat het aantal feestdagen in het bereik af. De meeste landen hebben 8–12 feestdagen per jaar.' },
    ],
    weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
    months: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],
  },
};

module.exports = {
  pages: [
    { id: 'business-days-calculator', slugs: { en: 'business-days-calculator', fr: 'fr/calculateur-jours-ouvrables', es: 'es/calculadora-dias-habiles', pt: 'pt/calculadora-dias-uteis', de: 'de/arbeitstage-rechner', it: 'it/calcolatore-giorni-lavorativi', pl: 'pl/kalkulator-dni-roboczych', ja: 'ja/eigyounichu', ko: 'ko/yeongeopil-gyesan-gi', nl: 'nl/werkdagen-calculator' } },
  ],

  render(pageId, lang) {
    const t = T[lang];

    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

    const formGrid = `  <div class="form-grid">
    <div class="form-col">
      <div class="mode-row" style="display:flex;gap:1.2rem;margin-bottom:1.4rem;flex-wrap:wrap;">
        <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.85rem;letter-spacing:.04em;text-transform:uppercase;">
          <input type="radio" name="bdMode" id="mode1" value="1" checked onchange="switchMode(1)" style="accent-color:var(--accent);">
          ${t.mode1Label}
        </label>
        <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.85rem;letter-spacing:.04em;text-transform:uppercase;">
          <input type="radio" name="bdMode" id="mode2" value="2" onchange="switchMode(2)" style="accent-color:var(--accent);">
          ${t.mode2Label}
        </label>
      </div>
      <div class="field-label">${t.startLabel} <button type="button" onclick="setToday('start')" style="background:none;border:none;font-family:'Space Mono',monospace;font-size:.6rem;color:var(--accent);cursor:pointer;letter-spacing:.05em;text-transform:uppercase;padding:0 .4rem">${t.todayBtn}</button></div>
      <div class="date-row">
        <input type="number" id="d1" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="m1" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="y1" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div id="endDateBlock">
        <div class="field-label" style="margin-top:1.5rem">${t.endLabel} <button type="button" onclick="setToday('end')" style="background:none;border:none;font-family:'Space Mono',monospace;font-size:.6rem;color:var(--accent);cursor:pointer;letter-spacing:.05em;text-transform:uppercase;padding:0 .4rem">${t.todayBtn}</button></div>
        <div class="date-row">
          <input type="number" id="d2" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
          <span>/</span>
          <input type="number" id="m2" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
          <span>/</span>
          <input type="number" id="y2" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
        </div>
      </div>
      <div id="addDaysBlock" style="display:none">
        <div class="field-label" style="margin-top:1.5rem">${t.addLabel}</div>
        <div class="op-row">
          <input type="number" id="addAmount" placeholder="0" min="1" max="9999" inputmode="numeric" style="width:5ch" oninput="clamp(this,1,9999)">
        </div>
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => `<li onclick="fillExample(${i})">${ex} →</li>`).join('\n        ')}
      </ul>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header" id="resultsHeader">${t.resultsHeader1}</div>
    <div id="heroMode1">
      <div class="age-display">
        <span class="age-number" id="heroBizDays">—</span>
        <span class="age-suffix">${t.businessDaysLbl}</span>
      </div>
      <div class="stats-strip cols-3">
        <div class="stat-item"><div class="stat-num" id="statWeekends">—</div><div class="stat-lbl">${t.weekendsLbl}</div></div>
        <div class="stat-item"><div class="stat-num" id="statTotalDays">—</div><div class="stat-lbl">${t.totalDaysLbl}</div></div>
        <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeksLbl}</div></div>
      </div>
      <div class="facts-row">
        <div class="fact-item"><div class="fact-key">${t.startDayLbl}</div><div class="fact-val" id="ffStartDay">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.endDayLbl}</div><div class="fact-val" id="ffEndDay">—</div></div>
      </div>
    </div>
    <div id="heroMode2" style="display:none">
      <div class="result-date" id="resultDate">—</div>
      <div class="result-date-sub" id="resultSub"></div>
      <div class="facts-row">
        <div class="fact-item"><div class="fact-key">${t.weekdayLbl}</div><div class="fact-val" id="ffResultDay">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.startDayLbl}</div><div class="fact-val" id="ffResultStart">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.totalDaysLbl}</div><div class="fact-val" id="ffResultTotal">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.weeksLbl}</div><div class="fact-val" id="ffResultWeeks">—</div></div>
      </div>
    </div>
  </div>`;

    const faqHTML = t.faqs.map(f =>
      `    <div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`
    ).join('\n');

    const seoBlock = `  <div class="seo-block">
    <div><h2>${t.seoH2a}</h2><p>${t.seoP1}</p></div>
    <div><h2>${t.seoH2b}</h2><p>${t.seoP2}</p></div>
  </div>
  <div class="faq-block">
    <h2>${t.faqTitle}</h2>
${faqHTML}
  </div>`;

    const data = JSON.stringify({
      errInvalid: t.errInvalid,
      errOrder: t.errOrder,
      errAmount: t.errAmount,
      resultsHeader1: t.resultsHeader1,
      resultsHeader2: t.resultsHeader2,
      weekDays: t.weekDays,
      months: t.months,
      businessDaysLbl: t.businessDaysLbl,
    });

    const script = `
var D = ${data};
var _currentMode = 1;
function fmt(n){return n.toLocaleString();}

function switchMode(mode){
  _currentMode = mode;
  document.getElementById('endDateBlock').style.display = mode===1?'':'none';
  document.getElementById('addDaysBlock').style.display = mode===2?'':'none';
  document.getElementById('results').classList.remove('show');
}

function setToday(which){
  var now = new Date();
  var suffix = which==='start'?'1':'2';
  document.getElementById('d'+suffix).value = now.getDate();
  document.getElementById('m'+suffix).value = now.getMonth()+1;
  document.getElementById('y'+suffix).value = now.getFullYear();
}

function parseDate(d,m,y){
  if(!d||!m||!y) return null;
  var dt = new Date(y,m-1,d);
  return (dt.getDate()===d)?dt:null;
}

function countBusiness(d1, d2){
  var count = 0, cur = new Date(d1);
  while(cur <= d2){
    var day = cur.getDay();
    if(day !== 0 && day !== 6) count++;
    cur.setDate(cur.getDate()+1);
  }
  return count;
}

function addBusinessDays(date, n){
  var result = new Date(date);
  var added = 0;
  while(added < n){
    result.setDate(result.getDate()+1);
    var day = result.getDay();
    if(day !== 0 && day !== 6) added++;
  }
  return result;
}

function fillExample(idx){
  var now = new Date();
  if(idx===0){
    // Count business days this month
    document.getElementById('mode1').checked = true; switchMode(1);
    document.getElementById('d1').value=1;
    document.getElementById('m1').value=now.getMonth()+1;
    document.getElementById('y1').value=now.getFullYear();
    var lastDay = new Date(now.getFullYear(), now.getMonth()+1, 0);
    document.getElementById('d2').value=lastDay.getDate();
    document.getElementById('m2').value=now.getMonth()+1;
    document.getElementById('y2').value=now.getFullYear();
  } else if(idx===1){
    // Add 10 business days to today
    document.getElementById('mode2').checked = true; switchMode(2);
    document.getElementById('d1').value=now.getDate();
    document.getElementById('m1').value=now.getMonth()+1;
    document.getElementById('y1').value=now.getFullYear();
    document.getElementById('addAmount').value=10;
  } else {
    // 30 working days from today
    document.getElementById('mode2').checked = true; switchMode(2);
    document.getElementById('d1').value=now.getDate();
    document.getElementById('m1').value=now.getMonth()+1;
    document.getElementById('y1').value=now.getFullYear();
    document.getElementById('addAmount').value=30;
  }
  calculate();
}

function calculate(){
  var d1=parseInt(document.getElementById('d1').value);
  var m1=parseInt(document.getElementById('m1').value);
  var y1=parseInt(document.getElementById('y1').value);
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');

  var date1=parseDate(d1,m1,y1);
  if(!date1){err.textContent=D.errInvalid; err.classList.add('show'); return;}

  if(_currentMode===1){
    var d2=parseInt(document.getElementById('d2').value);
    var m2=parseInt(document.getElementById('m2').value);
    var y2=parseInt(document.getElementById('y2').value);
    var date2=parseDate(d2,m2,y2);
    if(!date2){err.textContent=D.errInvalid; err.classList.add('show'); return;}
    if(date2<date1){err.textContent=D.errOrder; err.classList.add('show'); return;}

    var bizDays=countBusiness(date1,date2);
    var totalDays=Math.round((date2-date1)/86400000)+1;
    var weekends=totalDays-bizDays;
    var weeks=Math.floor(totalDays/7);

    document.getElementById('resultsHeader').textContent=D.resultsHeader1;
    document.getElementById('heroMode1').style.display='';
    document.getElementById('heroMode2').style.display='none';
    document.getElementById('heroBizDays').textContent=fmt(bizDays);
    document.getElementById('statWeekends').textContent=fmt(weekends);
    document.getElementById('statTotalDays').textContent=fmt(totalDays);
    document.getElementById('statWeeks').textContent=fmt(weeks);
    document.getElementById('ffStartDay').textContent=D.weekDays[date1.getDay()];
    document.getElementById('ffEndDay').textContent=D.weekDays[date2.getDay()];
  } else {
    var amount=parseInt(document.getElementById('addAmount').value);
    if(isNaN(amount)||amount<1){err.textContent=D.errAmount; err.classList.add('show'); return;}

    var result=addBusinessDays(date1,amount);
    var totalCalDays=Math.round((result-date1)/86400000);
    var calWeeks=Math.floor(totalCalDays/7);
    var dateStr=result.getDate()+' '+D.months[result.getMonth()]+' '+result.getFullYear();

    document.getElementById('resultsHeader').textContent=D.resultsHeader2;
    document.getElementById('heroMode1').style.display='none';
    document.getElementById('heroMode2').style.display='';
    document.getElementById('resultDate').textContent=dateStr;
    document.getElementById('resultSub').textContent='+ '+amount+' '+D.businessDaysLbl;
    document.getElementById('ffResultDay').textContent=D.weekDays[result.getDay()];
    document.getElementById('ffResultStart').textContent=D.weekDays[date1.getDay()];
    document.getElementById('ffResultTotal').textContent=fmt(totalCalDays);
    document.getElementById('ffResultWeeks').textContent=fmt(calWeeks);
  }

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

// Pre-fill start with today
(function(){
  var now = new Date();
  document.getElementById('d1').value=now.getDate();
  document.getElementById('m1').value=now.getMonth()+1;
  document.getElementById('y1').value=now.getFullYear();
})();

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
