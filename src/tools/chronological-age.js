// Chronological Age Calculator

const T = {
  en: {
    title: 'Chronological Age Calculator – Exact Age in Years, Months & Days | DateCalc.app',
    metaDesc: 'Calculate chronological age from date of birth to any reference date. Get exact age in years, months, weeks, days and hours — used in medical, educational and developmental contexts.',
    kicker: 'Chronological Age Calculator',
    headline: 'Chronological<br><em>age</em>',
    subhead: 'Calculate the exact chronological age between any two dates — years, months, weeks, and days.',
    dobLabel: 'Date of birth',
    refLabel: 'Reference date (leave blank for today)',
    calcBtn: '→ Calculate',
    tipText: '"Chronological age is the number of years, months and days since birth — the most precise measure of time lived."',
    examples: ['Assessment date: today', 'School enrollment check', 'Medical form calculation'],
    resultsHeader: 'Chronological age',
    heroSuffix: 'years',
    months: 'months', weeks: 'weeks', days: 'days', hours: 'hours',
    zodiacLbl: 'Zodiac', genLbl: 'Generation', dayLbl: 'Day born', leapLbl: 'Leap years lived',
    errInvalid: '→ Invalid date. Please check your input.',
    errFuture: '→ Date of birth cannot be after the reference date.',
    nextBdayIn: 'Next birthday in',
    nextBdayToday: '🎉 Happy Birthday!',
    dayWord: ['day', 'days'],
    pY: 'y', pM: 'mo', pD: 'd',
    zodiacSigns: ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn'],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    gens: [{y:1928,n:'Silent Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
    seoH2a: 'What is chronological age?',
    seoP1: 'Chronological age is the precise amount of time that has elapsed since a person\'s birth, expressed in years, months, and days. It is the most objective measure of age because it is based purely on elapsed calendar time, with no inference about physical condition, cognitive ability, or maturity. Chronological age is used across many contexts: pediatricians use it to compare a child\'s development against standard milestone charts; schools use it to determine enrollment eligibility (for example, many states require a child to be 5 years old by September 1 to start kindergarten); psychologists use it as the denominator when calculating IQ ratios; insurers use it to determine risk categories and premium rates; and legal systems use it to define majority, consent, and criminal responsibility. Unlike biological age or mental age, chronological age is entirely objective and universally agreed upon.',
    seoH2b: 'How to calculate chronological age',
    seoP2: 'To calculate chronological age accurately, subtract the date of birth from the reference date using a three-step process. First, subtract the birth day from the reference day — if the result is negative, borrow days from the previous month. Second, subtract the birth month from the reference month — if negative, borrow 12 months and subtract 1 from the year. Third, subtract the birth year. For example: a child born March 15, 2018, assessed October 20, 2025. Days: 20 − 15 = 5 days. Months: 10 − 3 = 7 months. Years: 2025 − 2018 = 7 years. Result: 7 years, 7 months, 5 days. This calculator handles all edge cases automatically, including month-end borrowing, leap years, and any reference date from the past, present, or future.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Cognitive Development' },
    faqs: [
      { q: 'What is chronological age in psychology?', a: 'In psychology, chronological age (CA) is the actual elapsed time since birth, used as a baseline for comparing developmental, cognitive, and behavioral measures. The classic IQ formula divides mental age by chronological age and multiplies by 100. Modern IQ tests have moved away from this formula, but chronological age remains central to developmental assessments, milestone tracking, and educational placement decisions.' },
      { q: 'What is the difference between chronological age and mental age?', a: 'Chronological age (CA) is the actual time elapsed since birth — purely objective. Mental age (MA) is a measure of cognitive ability relative to what is typical for a given chronological age. A 10-year-old who scores as well as an average 13-year-old on cognitive tests has a mental age of 13 but a chronological age of 10. The two can differ significantly in both directions.' },
      { q: 'How do I calculate chronological age for school enrollment?', a: 'Most schools calculate chronological age by comparing the child\'s date of birth against a cutoff date (e.g., September 1). The child must have turned the required age (typically 5 for kindergarten) on or before that date. Enter the birth date and the enrollment cutoff date into this calculator to get the exact age at enrollment.' },
      { q: 'What is the chronological age formula?', a: 'The formula is: CA = Reference Date − Date of Birth, expressed in years, months, and days. The calculation requires careful handling of month-end borrowing and leap years. This calculator applies the formula correctly for any two dates, including past and future reference dates.' },
      { q: 'How is chronological age used for insurance?', a: 'Insurance companies use chronological age to determine risk categories, set premium rates, and define policy eligibility. Life insurance premiums typically increase with each birthday. Health insurance plans often have age-based pricing bands (e.g., 18–29, 30–39). Many policies also have age cutoffs for enrollment or coverage. The exact age in years and months can affect which tier applies.' },
      { q: 'How is chronological age used for standardized tests?', a: 'Most standardized psychological and educational tests are norm-referenced by age group. A test-taker\'s raw score is compared against the scores of others in the same chronological age bracket (typically defined in years and months) to produce a standard score or percentile rank. Using an incorrect chronological age — even by a few months — can shift a score into a different normative group and significantly affect the result.' },
      { q: 'What is chronological age used for?', a: 'Chronological age is used in pediatric assessments, school enrollment eligibility, developmental milestone tracking, insurance calculations, and standardized test score interpretation.' },
      { q: 'Can I calculate chronological age for a past date?', a: 'Yes. Enter the date of birth and any reference date — past, present, or future. The calculator will compute the exact chronological age between those two dates.' },
    ],
  },
  fr: {
    title: 'Calculateur d\'âge chronologique – Âge exact en années, mois et jours | DateCalc.app',
    metaDesc: 'Calculez l\'âge chronologique de la date de naissance à n\'importe quelle date de référence. Utilisé en contexte médical, éducatif et développemental.',
    kicker: 'Âge chronologique',
    headline: 'Âge<br><em>chronologique</em>',
    subhead: 'Calculez l\'âge chronologique exact entre deux dates — années, mois, semaines et jours.',
    dobLabel: 'Date de naissance',
    refLabel: 'Date de référence (laisser vide pour aujourd\'hui)',
    calcBtn: '→ Calculer',
    tipText: '"L\'âge chronologique est le nombre d\'années, de mois et de jours depuis la naissance — la mesure la plus précise du temps vécu."',
    examples: ['Date d\'évaluation : aujourd\'hui', 'Vérification d\'inscription scolaire', 'Calcul pour formulaire médical'],
    resultsHeader: 'Âge chronologique',
    heroSuffix: 'ans',
    months: 'mois', weeks: 'semaines', days: 'jours', hours: 'heures',
    zodiacLbl: 'Zodiaque', genLbl: 'Génération', dayLbl: 'Jour de naissance', leapLbl: 'Années bissextiles vécues',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errFuture: '→ La date de naissance ne peut pas être après la date de référence.',
    nextBdayIn: 'Prochain anniversaire dans',
    nextBdayToday: '🎉 Joyeux anniversaire !',
    dayWord: ['jour', 'jours'],
    pY: 'a', pM: 'mo', pD: 'j',
    zodiacSigns: ['Capricorne','Verseau','Poissons','Bélier','Taureau','Gémeaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire','Capricorne'],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    gens: [{y:1928,n:'Génération Silencieuse'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Génération X'},{y:1981,n:'Millénial'},{y:1997,n:'Génération Z'},{y:2013,n:'Génération Alpha'}],
    seoH2a: 'Qu\'est-ce que l\'âge chronologique ?',
    seoP1: 'L\'âge chronologique est la mesure précise du temps écoulé depuis la naissance d\'une personne, exprimé en années, mois et jours. C\'est la mesure d\'âge la plus objective car elle est basée uniquement sur le temps calendaire écoulé, sans inférence sur l\'état physique, les capacités cognitives ou la maturité. L\'âge chronologique est utilisé dans de nombreux contextes : les pédiatres l\'utilisent pour comparer le développement d\'un enfant aux tableaux de jalons standard ; les écoles l\'utilisent pour déterminer l\'éligibilité à l\'inscription ; les psychologues l\'utilisent pour calculer les ratios de QI ; les assureurs l\'utilisent pour définir les catégories de risque et les taux de prime. Contrairement à l\'âge biologique ou mental, l\'âge chronologique est entièrement objectif.',
    seoH2b: 'Comment calculer l\'âge chronologique ?',
    seoP2: 'Pour calculer l\'âge chronologique avec précision, soustrayez la date de naissance de la date de référence en trois étapes. D\'abord, soustrayez le jour de naissance du jour de référence — si le résultat est négatif, empruntez des jours du mois précédent. Ensuite, soustrayez le mois de naissance — si négatif, empruntez 12 mois. Enfin, soustrayez l\'année. Par exemple : enfant né le 15 mars 2018, évalué le 20 octobre 2025. Résultat : 7 ans, 7 mois, 5 jours. Ce calculateur gère automatiquement tous les cas particuliers.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Développement cognitif' },
    faqs: [
      { q: 'Qu\'est-ce que l\'âge chronologique en psychologie ?', a: 'En psychologie, l\'âge chronologique (AC) est le temps réel écoulé depuis la naissance, utilisé comme référence pour comparer les mesures développementales, cognitives et comportementales. La formule classique du QI divise l\'âge mental par l\'âge chronologique et multiplie par 100. L\'âge chronologique reste central dans les évaluations développementales et les décisions de placement éducatif.' },
      { q: 'Quelle est la différence entre âge chronologique et âge mental ?', a: 'L\'âge chronologique (AC) est le temps réel écoulé depuis la naissance — purement objectif. L\'âge mental (AM) est une mesure des capacités cognitives par rapport à ce qui est typique pour un âge chronologique donné. Un enfant de 10 ans qui obtient les résultats d\'un enfant de 13 ans a un âge mental de 13 ans mais un âge chronologique de 10 ans.' },
      { q: 'Comment calculer l\'âge chronologique pour l\'inscription scolaire ?', a: 'La plupart des écoles calculent l\'âge chronologique en comparant la date de naissance de l\'enfant à une date limite (par exemple le 1er septembre). L\'enfant doit avoir atteint l\'âge requis à cette date. Entrez la date de naissance et la date limite dans ce calculateur pour obtenir l\'âge exact à l\'inscription.' },
      { q: 'Quelle est la formule de l\'âge chronologique ?', a: 'La formule est : AC = Date de référence − Date de naissance, exprimé en années, mois et jours. Le calcul nécessite une gestion correcte des emprunts de fin de mois et des années bissextiles. Ce calculateur applique la formule correctement pour toutes les dates.' },
      { q: 'Comment l\'âge chronologique est-il utilisé pour les assurances ?', a: 'Les compagnies d\'assurance utilisent l\'âge chronologique pour déterminer les catégories de risque, fixer les taux de prime et définir l\'éligibilité aux polices. Les primes d\'assurance-vie augmentent généralement à chaque anniversaire. Les plans d\'assurance maladie ont souvent des tranches de tarification par âge. L\'âge exact en années et mois peut déterminer quelle tranche s\'applique.' },
      { q: 'Comment l\'âge chronologique est-il utilisé pour les tests standardisés ?', a: 'La plupart des tests psychologiques et éducatifs standardisés sont normés par groupe d\'âge. Le score brut est comparé aux scores d\'autres personnes dans la même tranche d\'âge chronologique (définie en années et mois) pour produire un score standard ou un rang percentile. Utiliser un âge chronologique incorrect peut déplacer un score dans un groupe normatif différent.' },
      { q: 'À quoi sert l\'âge chronologique ?', a: 'L\'âge chronologique est utilisé dans les évaluations pédiatriques, l\'éligibilité scolaire, le suivi des étapes développementales, les calculs d\'assurance et l\'interprétation des tests standardisés.' },
      { q: 'Puis-je calculer l\'âge chronologique pour une date passée ?', a: 'Oui. Entrez la date de naissance et toute date de référence — passée, présente ou future. Le calculateur calculera l\'âge chronologique exact entre ces deux dates.' },
    ],
  },
  es: {
    title: 'Calculadora de edad cronológica – Edad exacta en años, meses y días | DateCalc.app',
    metaDesc: 'Calcula la edad cronológica desde la fecha de nacimiento hasta cualquier fecha de referencia. Usado en contextos médicos, educativos y de desarrollo.',
    kicker: 'Edad cronológica',
    headline: 'Edad<br><em>cronológica</em>',
    subhead: 'Calcula la edad cronológica exacta entre dos fechas — años, meses, semanas y días.',
    dobLabel: 'Fecha de nacimiento',
    refLabel: 'Fecha de referencia (dejar en blanco para hoy)',
    calcBtn: '→ Calcular',
    tipText: '"La edad cronológica es el número de años, meses y días desde el nacimiento — la medida más precisa del tiempo vivido."',
    examples: ['Fecha de evaluación: hoy', 'Verificación de matrícula escolar', 'Cálculo para formulario médico'],
    resultsHeader: 'Edad cronológica',
    heroSuffix: 'años',
    months: 'meses', weeks: 'semanas', days: 'días', hours: 'horas',
    zodiacLbl: 'Zodiaco', genLbl: 'Generación', dayLbl: 'Día de nacimiento', leapLbl: 'Años bisiestos vividos',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errFuture: '→ La fecha de nacimiento no puede ser posterior a la fecha de referencia.',
    nextBdayIn: 'Próximo cumpleaños en',
    nextBdayToday: '🎉 ¡Feliz cumpleaños!',
    dayWord: ['día', 'días'],
    pY: 'a', pM: 'me', pD: 'd',
    zodiacSigns: ['Capricornio','Acuario','Piscis','Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio'],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    gens: [{y:1928,n:'Generación Silenciosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generación X'},{y:1981,n:'Millennial'},{y:1997,n:'Generación Z'},{y:2013,n:'Generación Alfa'}],
    seoH2a: '¿Qué es la edad cronológica?',
    seoP1: 'La edad cronológica es la medida precisa del tiempo transcurrido desde el nacimiento de una persona, expresada en años, meses y días. Es la medida de edad más objetiva porque se basa puramente en el tiempo calendario transcurrido, sin inferencia sobre condición física, capacidad cognitiva o madurez. La edad cronológica se usa en muchos contextos: los pediatras la usan para comparar el desarrollo de un niño con las tablas de hitos estándar; las escuelas la usan para determinar la elegibilidad de inscripción; los psicólogos la usan para calcular cocientes de inteligencia; las aseguradoras la usan para definir categorías de riesgo y tarifas de primas. A diferencia de la edad biológica o mental, la edad cronológica es completamente objetiva.',
    seoH2b: 'Cómo calcular la edad cronológica',
    seoP2: 'Para calcular la edad cronológica con precisión, resta la fecha de nacimiento de la fecha de referencia en tres pasos. Primero, resta el día de nacimiento del día de referencia — si el resultado es negativo, toma prestados días del mes anterior. Segundo, resta el mes de nacimiento — si es negativo, toma prestados 12 meses. Tercero, resta el año. Por ejemplo: un niño nacido el 15 de marzo de 2018, evaluado el 20 de octubre de 2025. Resultado: 7 años, 7 meses, 5 días. Esta calculadora maneja automáticamente todos los casos especiales.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Desarrollo cognitivo' },
    faqs: [
      { q: '¿Qué es la edad cronológica en psicología?', a: 'En psicología, la edad cronológica (EC) es el tiempo real transcurrido desde el nacimiento, usado como línea base para comparar medidas del desarrollo, cognitivas y conductuales. La fórmula clásica del CI divide la edad mental entre la edad cronológica y multiplica por 100. La edad cronológica sigue siendo central en evaluaciones del desarrollo y decisiones de colocación educativa.' },
      { q: '¿Cuál es la diferencia entre edad cronológica y edad mental?', a: 'La edad cronológica (EC) es el tiempo real transcurrido desde el nacimiento — puramente objetiva. La edad mental (EM) es una medida de la capacidad cognitiva en relación con lo que es típico para una edad cronológica dada. Un niño de 10 años que obtiene los resultados de un niño de 13 tiene una edad mental de 13 pero una edad cronológica de 10.' },
      { q: '¿Cómo calculo la edad cronológica para la inscripción escolar?', a: 'La mayoría de las escuelas calculan la edad cronológica comparando la fecha de nacimiento del niño con una fecha límite (por ejemplo, el 1 de septiembre). El niño debe haber cumplido la edad requerida en esa fecha. Ingresa la fecha de nacimiento y la fecha límite en esta calculadora para obtener la edad exacta en la inscripción.' },
      { q: '¿Cuál es la fórmula de la edad cronológica?', a: 'La fórmula es: EC = Fecha de referencia − Fecha de nacimiento, expresada en años, meses y días. El cálculo requiere el manejo correcto del préstamo de fin de mes y los años bisiestos. Esta calculadora aplica la fórmula correctamente para cualquier par de fechas.' },
      { q: '¿Cómo se usa la edad cronológica para seguros?', a: 'Las aseguradoras usan la edad cronológica para determinar categorías de riesgo, fijar tarifas de primas y definir la elegibilidad de pólizas. Las primas de seguro de vida típicamente aumentan con cada cumpleaños. Los planes de salud a menudo tienen bandas de precios basadas en edad. La edad exacta en años y meses puede determinar qué nivel aplica.' },
      { q: '¿Cómo se usa la edad cronológica en pruebas estandarizadas?', a: 'La mayoría de las pruebas psicológicas y educativas estandarizadas están normadas por grupo de edad cronológica. La puntuación bruta se compara con las de otros en el mismo rango de edad cronológica (definido en años y meses) para producir una puntuación estándar o rango percentil. Usar una edad cronológica incorrecta puede desplazar una puntuación a un grupo normativo diferente.' },
      { q: '¿Para qué se usa la edad cronológica?', a: 'La edad cronológica se usa en evaluaciones pediátricas, elegibilidad escolar, seguimiento de hitos del desarrollo, cálculos de seguros e interpretación de pruebas estandarizadas.' },
      { q: '¿Puedo calcular la edad cronológica para una fecha pasada?', a: 'Sí. Ingresa la fecha de nacimiento y cualquier fecha de referencia — pasada, presente o futura. La calculadora calculará la edad cronológica exacta entre esas dos fechas.' },
    ],
  },
  pt: {
    title: 'Calculadora de Idade Cronológica – Anos, Meses e Dias | DateCalc',
    metaDesc: 'Calcule a idade cronológica exata entre duas datas. Mostra anos, meses e dias completos — grátis, sem cadastro.',
    kicker: 'Idade Cronológica',
    headline: 'Calculadora de<br><em>Idade<br>Cronológica</em>',
    subhead: 'Calcule a diferença exata entre duas datas em anos, meses e dias',
    resultsHeader: 'Idade cronológica',
    errInvalid: 'Data inválida. Verifique dia, mês e ano.',
    errOrder: 'A data de início deve ser anterior à data de término.',
    labelStartDay: 'Dia inicial', labelStartMonth: 'Mês inicial', labelStartYear: 'Ano inicial',
    labelEndDay: 'Dia final', labelEndMonth: 'Mês final', labelEndYear: 'Ano final',
    btnCalc: '→ CALCULAR',
    unitYears: 'anos', unitMonths: 'meses', unitDays: 'dias',
    seoH2a: 'O que é idade cronológica?',
    seoP1: 'A idade cronológica é a quantidade de tempo decorrido desde o nascimento de uma pessoa, medida em anos, meses e dias completos. É a medida mais comum de idade e é usada em contextos médicos, educacionais e legais.',
    seoH2b: 'Quando a idade cronológica é importante?',
    seoP2: 'A idade cronológica é importante em avaliações de desenvolvimento infantil, elegibilidade para benefícios, diagnósticos médicos e planejamento educacional. Use esta calculadora para obter a diferença exata entre qualquer duas datas.',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      { q: 'O que é idade cronológica?', a: 'A idade cronológica é o tempo decorrido desde o nascimento, expresso em anos, meses e dias. É diferente da idade biológica, que reflete o estado de saúde celular.' },
      { q: 'Como calcular a idade cronológica exata?', a: 'Insira as datas de início e fim nesta calculadora. Ela calcula automaticamente os anos, meses e dias completos entre as duas datas.' },
      { q: 'Posso calcular a diferença entre qualquer duas datas?', a: 'Sim. Esta calculadora funciona para qualquer par de datas — não apenas idades. Use-a para calcular a duração de um projeto, período de emprego ou qualquer intervalo de tempo.' },
    ],
    source: null,
  },
  de: {
    title: 'Chronologisches Alter Rechner – Exaktes Alter in Jahren, Monaten & Tagen | DateCalc.app',
    metaDesc: 'Berechne das chronologische Alter vom Geburtsdatum bis zu einem beliebigen Referenzdatum. Exaktes Alter in Jahren, Monaten, Wochen, Tagen und Stunden — für medizinische, bildungsbezogene und entwicklungsrelevante Zwecke.',
    kicker: 'Chronologisches Alter',
    headline: 'Chronologisches<br><em>Alter</em>',
    subhead: 'Berechne das genaue chronologische Alter zwischen zwei Daten — Jahre, Monate, Wochen und Tage.',
    dobLabel: 'Geburtsdatum',
    refLabel: 'Referenzdatum (leer lassen für heute)',
    calcBtn: '→ BERECHNEN',
    tipText: '"Das chronologische Alter ist die Anzahl der Jahre, Monate und Tage seit der Geburt — das präziseste Maß gelebter Zeit."',
    examples: ['Bewertungsdatum: heute', 'Schulanmeldungsprüfung', 'Berechnung für Formular'],
    resultsHeader: 'Chronologisches Alter',
    heroSuffix: 'Jahre',
    months: 'Monate', weeks: 'Wochen', days: 'Tage', hours: 'Stunden',
    zodiacLbl: 'Sternzeichen', genLbl: 'Generation', dayLbl: 'Geburtstag', leapLbl: 'Gelebte Schaltjahre',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfe deine Eingabe.',
    errFuture: '→ Das Geburtsdatum darf nicht nach dem Referenzdatum liegen.',
    nextBdayIn: 'Nächster Geburtstag in',
    nextBdayToday: '🎉 Herzlichen Glückwunsch zum Geburtstag!',
    dayWord: ['Tag', 'Tagen'],
    pY: 'J', pM: 'Mo', pD: 'T',
    zodiacSigns: ['Steinbock','Wassermann','Fische','Widder','Stier','Zwillinge','Krebs','Löwe','Jungfrau','Waage','Skorpion','Schütze','Steinbock'],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    gens: [{y:1928,n:'Stille Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
    seoH2a: 'Was ist das chronologische Alter?',
    seoP1: 'Das chronologische Alter ist die genaue Zeitspanne, die seit der Geburt einer Person vergangen ist, ausgedrückt in Jahren, Monaten und Tagen. Es ist das objektivste Maß für das Alter, da es sich ausschließlich auf die verstrichene Kalenderzeit stützt, ohne Schlussfolgerungen über körperlichen Zustand, kognitive Fähigkeiten oder Reife. Das chronologische Alter wird in vielen Bereichen verwendet: Kinderärzte nutzen es, um die Entwicklung eines Kindes mit Standard-Meilenstein-Tabellen zu vergleichen; Schulen nutzen es, um die Einschulungsberechtigung zu bestimmen; Psychologen nutzen es als Nenner bei der Berechnung von IQ-Quotienten; Versicherungen nutzen es für Risikokategorien und Prämiensätze; und Rechtssysteme nutzen es, um Volljährigkeit und Verantwortlichkeit zu definieren.',
    seoH2b: 'Wie berechnet man das chronologische Alter?',
    seoP2: 'Um das chronologische Alter genau zu berechnen, subtrahiert man das Geburtsdatum vom Referenzdatum in drei Schritten. Zuerst subtrahiert man den Geburtstag vom Referenztag — ist das Ergebnis negativ, leiht man Tage vom Vormonat. Dann subtrahiert man den Geburtsmonat — ist das Ergebnis negativ, leiht man 12 Monate und zieht 1 vom Jahr ab. Schließlich subtrahiert man das Geburtsjahr. Beispiel: Ein Kind, geboren am 15. März 2018, bewertet am 20. Oktober 2025. Ergebnis: 7 Jahre, 7 Monate, 5 Tage. Dieser Rechner behandelt alle Sonderfälle automatisch.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Kognitive Entwicklung' },
    faqs: [
      { q: 'Was ist das chronologische Alter in der Psychologie?', a: 'In der Psychologie ist das chronologische Alter (CA) die tatsächlich verstrichene Zeit seit der Geburt, die als Grundlage für den Vergleich von Entwicklungs-, Kognitions- und Verhaltensmaßen verwendet wird. Die klassische IQ-Formel teilt das geistige Alter durch das chronologische Alter und multipliziert mit 100. Das chronologische Alter bleibt zentral für Entwicklungsbeurteilungen und Bildungsplatzierungsentscheidungen.' },
      { q: 'Was ist der Unterschied zwischen chronologischem und geistigem Alter?', a: 'Das chronologische Alter ist die tatsächlich verstrichene Zeit seit der Geburt — rein objektiv. Das geistige Alter ist ein Maß für die kognitive Fähigkeit im Verhältnis zu dem, was für ein bestimmtes chronologisches Alter typisch ist. Ein 10-Jähriger, der so gut wie ein durchschnittlicher 13-Jähriger bei kognitiven Tests abschneidet, hat ein geistiges Alter von 13, aber ein chronologisches Alter von 10.' },
      { q: 'Wie berechne ich das chronologische Alter für die Schulanmeldung?', a: 'Die meisten Schulen berechnen das chronologische Alter, indem sie das Geburtsdatum des Kindes mit einem Stichtag vergleichen (z.B. dem 1. September). Das Kind muss das erforderliche Alter an oder vor diesem Datum erreicht haben. Gib das Geburtsdatum und den Anmeldestichtag in diesen Rechner ein, um das genaue Alter bei der Anmeldung zu erhalten.' },
      { q: 'Was ist die Formel für das chronologische Alter?', a: 'Die Formel lautet: CA = Referenzdatum − Geburtsdatum, ausgedrückt in Jahren, Monaten und Tagen. Die Berechnung erfordert eine sorgfältige Behandlung von Monatsende-Überträgen und Schaltjahren. Dieser Rechner wendet die Formel korrekt für beliebige Datumspaare an.' },
      { q: 'Wie wird das chronologische Alter für Versicherungen verwendet?', a: 'Versicherungsgesellschaften verwenden das chronologische Alter, um Risikokategorien zu bestimmen, Prämiensätze festzulegen und die Versicherungsberechtigung zu definieren. Lebensversicherungsprämien steigen in der Regel mit jedem Geburtstag. Krankenversicherungspläne haben oft altersbasierte Preisbänder.' },
      { q: 'Wie wird das chronologische Alter für standardisierte Tests verwendet?', a: 'Die meisten standardisierten psychologischen und bildungsbezogenen Tests sind nach Altersgruppen normiert. Der Rohwert eines Prüflings wird mit den Werten anderer in der gleichen chronologischen Altersklasse verglichen, um einen Standardwert oder Perzentilrang zu erhalten. Ein falsches chronologisches Alter kann eine Punktzahl in eine andere normative Gruppe verschieben.' },
      { q: 'Wofür wird das chronologische Alter verwendet?', a: 'Das chronologische Alter wird für pädiatrische Beurteilungen, Schuleignungsprüfungen, Entwicklungsmeilenstein-Verfolgung, Versicherungsberechnungen und die Interpretation standardisierter Tests verwendet.' },
      { q: 'Kann ich das chronologische Alter für ein vergangenes Datum berechnen?', a: 'Ja. Gib das Geburtsdatum und ein beliebiges Referenzdatum ein — vergangen, gegenwärtig oder zukünftig. Der Rechner berechnet das genaue chronologische Alter zwischen diesen beiden Daten.' },
    ],
  },
  it: {
    title: 'Calcolatore Età Cronologica – Età Esatta in Anni, Mesi e Giorni | DateCalc.app',
    metaDesc: 'Calcola l\'età cronologica dalla data di nascita a qualsiasi data di riferimento. Usato in contesti medici, educativi e dello sviluppo.',
    kicker: 'Età Cronologica',
    headline: 'Età<br><em>cronologica</em>',
    subhead: 'Calcola l\'età cronologica esatta tra due date — anni, mesi, settimane e giorni.',
    dobLabel: 'Data di nascita',
    refLabel: 'Data di riferimento (lascia vuoto per oggi)',
    calcBtn: '→ CALCOLA',
    tipText: '"L\'età cronologica è il numero di anni, mesi e giorni dalla nascita — la misura più precisa del tempo vissuto."',
    examples: ['Data di valutazione: oggi', 'Verifica iscrizione scolastica', 'Calcolo per modulo medico'],
    resultsHeader: 'Età cronologica',
    heroSuffix: 'anni',
    months: 'mesi', weeks: 'settimane', days: 'giorni', hours: 'ore',
    zodiacLbl: 'Segno zodiacale', genLbl: 'Generazione', dayLbl: 'Giorno di nascita', leapLbl: 'Anni bisestili vissuti',
    errInvalid: '→ Data non valida. Controlla i dati inseriti.',
    errFuture: '→ La data di nascita non può essere successiva alla data di riferimento.',
    nextBdayIn: 'Prossimo compleanno tra',
    nextBdayToday: '🎉 Buon compleanno!',
    dayWord: ['giorno', 'giorni'],
    pY: 'a', pM: 'me', pD: 'g',
    zodiacSigns: ['Capricorno','Acquario','Pesci','Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario','Capricorno'],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    gens: [{y:1928,n:'Generazione Silenziosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generazione X'},{y:1981,n:'Millennial'},{y:1997,n:'Generazione Z'},{y:2013,n:'Generazione Alpha'}],
    seoH2a: 'Cos\'è l\'età cronologica?',
    seoP1: 'L\'età cronologica è la misura precisa del tempo trascorso dalla nascita di una persona, espressa in anni, mesi e giorni. È la misura dell\'età più oggettiva perché si basa puramente sul tempo di calendario trascorso, senza inferenze sulle condizioni fisiche, le capacità cognitive o la maturità. L\'età cronologica viene usata in molti contesti: i pediatri la usano per confrontare lo sviluppo di un bambino con le tabelle standard; le scuole la usano per determinare l\'idoneità all\'iscrizione; gli psicologi la usano come denominatore nel calcolo dei quozienti di intelligenza; le assicurazioni la usano per le categorie di rischio e le tariffe premium.',
    seoH2b: 'Come calcolare l\'età cronologica',
    seoP2: 'Per calcolare l\'età cronologica con precisione, sottrai la data di nascita dalla data di riferimento in tre passaggi. Prima sottrai il giorno di nascita dal giorno di riferimento — se il risultato è negativo, prendi in prestito giorni dal mese precedente. Poi sottrai il mese di nascita — se negativo, prendi in prestito 12 mesi. Infine sottrai l\'anno. Esempio: un bambino nato il 15 marzo 2018, valutato il 20 ottobre 2025. Risultato: 7 anni, 7 mesi, 5 giorni. Questo calcolatore gestisce automaticamente tutti i casi particolari.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Sviluppo cognitivo' },
    faqs: [
      { q: 'Cos\'è l\'età cronologica in psicologia?', a: 'In psicologia, l\'età cronologica (EC) è il tempo reale trascorso dalla nascita, usato come riferimento per confrontare misure dello sviluppo, cognitive e comportamentali. La formula classica del QI divide l\'età mentale per l\'età cronologica e moltiplica per 100. L\'età cronologica rimane centrale nelle valutazioni dello sviluppo e nelle decisioni di collocazione educativa.' },
      { q: 'Qual è la differenza tra età cronologica ed età mentale?', a: 'L\'età cronologica è il tempo reale trascorso dalla nascita — puramente oggettiva. L\'età mentale è una misura della capacità cognitiva rispetto a ciò che è tipico per una data età cronologica. Un bambino di 10 anni che ottiene i risultati di un 13enne ha un\'età mentale di 13 ma un\'età cronologica di 10.' },
      { q: 'Come calcolo l\'età cronologica per l\'iscrizione scolastica?', a: 'La maggior parte delle scuole calcola l\'età cronologica confrontando la data di nascita del bambino con una data limite (es. 1° settembre). Il bambino deve aver compiuto l\'età richiesta entro quella data. Inserisci la data di nascita e la data limite in questo calcolatore per ottenere l\'età esatta all\'iscrizione.' },
      { q: 'Qual è la formula dell\'età cronologica?', a: 'La formula è: EC = Data di riferimento − Data di nascita, espressa in anni, mesi e giorni. Il calcolo richiede una gestione attenta dei prestiti di fine mese e degli anni bisestili. Questo calcolatore applica la formula correttamente per qualsiasi coppia di date.' },
      { q: 'Come viene usata l\'età cronologica per le assicurazioni?', a: 'Le compagnie assicurative usano l\'età cronologica per determinare le categorie di rischio, fissare le tariffe dei premi e definire l\'idoneità alla polizza. I premi delle assicurazioni sulla vita aumentano tipicamente ad ogni compleanno. I piani sanitari hanno spesso fasce di prezzo basate sull\'età.' },
      { q: 'Come viene usata l\'età cronologica per i test standardizzati?', a: 'La maggior parte dei test psicologici ed educativi standardizzati sono normati per fascia d\'età. Il punteggio grezzo di un candidato viene confrontato con i punteggi degli altri nella stessa fascia d\'età cronologica per produrre un punteggio standard o un rango percentile. Un\'età cronologica errata può spostare un punteggio in un gruppo normativo diverso.' },
      { q: 'A cosa serve l\'età cronologica?', a: 'L\'età cronologica viene usata nelle valutazioni pediatriche, nell\'idoneità scolastica, nel monitoraggio delle tappe dello sviluppo, nei calcoli assicurativi e nell\'interpretazione dei test standardizzati.' },
      { q: 'Posso calcolare l\'età cronologica per una data passata?', a: 'Sì. Inserisci la data di nascita e qualsiasi data di riferimento — passata, presente o futura. Il calcolatore calcolerà l\'età cronologica esatta tra quelle due date.' },
    ],
  },
  pl: {
    title: 'Kalkulator Wieku Chronologicznego – Dokładny Wiek w Latach, Miesiącach i Dniach | DateCalc.app',
    metaDesc: 'Oblicz wiek chronologiczny od daty urodzenia do dowolnej daty referencyjnej. Stosowany w kontekstach medycznych, edukacyjnych i rozwojowych.',
    kicker: 'Wiek Chronologiczny',
    headline: 'Wiek<br><em>chronologiczny</em>',
    subhead: 'Oblicz dokładny wiek chronologiczny między dwiema datami — lata, miesiące, tygodnie i dni.',
    dobLabel: 'Data urodzenia',
    refLabel: 'Data referencyjna (zostaw puste dla dzisiaj)',
    calcBtn: '→ OBLICZ',
    tipText: '"Wiek chronologiczny to liczba lat, miesięcy i dni od urodzenia — najdokładniejsza miara przeżytego czasu."',
    examples: ['Data oceny: dzisiaj', 'Sprawdzenie zapisu do szkoły', 'Obliczenie do formularza medycznego'],
    resultsHeader: 'Wiek chronologiczny',
    heroSuffix: 'lat',
    months: 'miesiące', weeks: 'tygodnie', days: 'dni', hours: 'godziny',
    zodiacLbl: 'Znak zodiaku', genLbl: 'Pokolenie', dayLbl: 'Dzień urodzenia', leapLbl: 'Przeżyte lata przestępne',
    errInvalid: '→ Nieprawidłowa data. Sprawdź wprowadzone dane.',
    errFuture: '→ Data urodzenia nie może być późniejsza niż data referencyjna.',
    nextBdayIn: 'Następne urodziny za',
    nextBdayToday: '🎉 Wszystkiego najlepszego z okazji urodzin!',
    dayWord: ['dzień', 'dni'],
    pY: 'l', pM: 'mies', pD: 'd',
    zodiacSigns: ['Koziorożec','Wodnik','Ryby','Baran','Byk','Bliźnięta','Rak','Lew','Panna','Waga','Skorpion','Strzelec','Koziorożec'],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    gens: [{y:1928,n:'Ciche Pokolenie'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Pokolenie X'},{y:1981,n:'Millennial'},{y:1997,n:'Pokolenie Z'},{y:2013,n:'Pokolenie Alpha'}],
    seoH2a: 'Czym jest wiek chronologiczny?',
    seoP1: 'Wiek chronologiczny to precyzyjna miara czasu, który upłynął od narodzin danej osoby, wyrażona w latach, miesiącach i dniach. Jest to najbardziej obiektywna miara wieku, ponieważ opiera się wyłącznie na upływie czasu kalendarzowego, bez wnioskowania o stanie fizycznym, zdolnościach poznawczych czy dojrzałości. Wiek chronologiczny jest używany w wielu kontekstach: pediatrzy używają go do porównywania rozwoju dziecka ze standardowymi tabelami kamieni milowych; szkoły używają go do określania uprawnień do zapisów; psycholodzy używają go jako mianownik przy obliczaniu ilorazów inteligencji; ubezpieczyciele używają go dla kategorii ryzyka i stawek składek.',
    seoH2b: 'Jak obliczać wiek chronologiczny?',
    seoP2: 'Aby dokładnie obliczyć wiek chronologiczny, odejmij datę urodzenia od daty referencyjnej w trzech krokach. Po pierwsze odejmij dzień urodzenia od dnia referencyjnego — jeśli wynik jest ujemny, pożycz dni z poprzedniego miesiąca. Po drugie odejmij miesiąc urodzenia — jeśli ujemny, pożycz 12 miesięcy i odejmij 1 od roku. Po trzecie odejmij rok urodzenia. Przykład: dziecko urodzone 15 marca 2018 roku, oceniane 20 października 2025 roku. Wynik: 7 lat, 7 miesięcy, 5 dni. Ten kalkulator obsługuje automatycznie wszystkie szczególne przypadki.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Rozwój poznawczy' },
    faqs: [
      { q: 'Czym jest wiek chronologiczny w psychologii?', a: 'W psychologii wiek chronologiczny (WC) to rzeczywisty czas upłynięty od urodzenia, używany jako punkt odniesienia do porównywania miar rozwojowych, poznawczych i behawioralnych. Klasyczna formuła IQ dzieli wiek umysłowy przez wiek chronologiczny i mnoży przez 100. Wiek chronologiczny pozostaje centralny w ocenach rozwojowych i decyzjach o plasowaniu edukacyjnym.' },
      { q: 'Jaka jest różnica między wiekiem chronologicznym a umysłowym?', a: 'Wiek chronologiczny to rzeczywisty czas upłynięty od urodzenia — całkowicie obiektywny. Wiek umysłowy to miara zdolności poznawczych w stosunku do tego, co jest typowe dla danego wieku chronologicznego. Dziesięciolatek, który osiąga wyniki 13-latka w testach poznawczych, ma wiek umysłowy 13 lat, ale wiek chronologiczny 10 lat.' },
      { q: 'Jak obliczyć wiek chronologiczny dla zapisu do szkoły?', a: 'Większość szkół oblicza wiek chronologiczny, porównując datę urodzenia dziecka z datą graniczną (np. 1 września). Dziecko musi osiągnąć wymagany wiek w tej dacie lub przed nią. Wprowadź datę urodzenia i datę graniczną zapisu do tego kalkulatora, aby uzyskać dokładny wiek przy zapisie.' },
      { q: 'Jaka jest formuła wieku chronologicznego?', a: 'Formuła to: WC = Data referencyjna − Data urodzenia, wyrażona w latach, miesiącach i dniach. Obliczenie wymaga ostrożnego obsługiwania pożyczek końca miesiąca i lat przestępnych. Ten kalkulator stosuje formułę poprawnie dla dowolnych dwóch dat.' },
      { q: 'Jak wiek chronologiczny jest używany w ubezpieczeniach?', a: 'Firmy ubezpieczeniowe używają wieku chronologicznego do określania kategorii ryzyka, ustalania stawek składek i definiowania uprawnień do polis. Składki ubezpieczenia na życie zazwyczaj rosną z każdymi urodzinami. Plany ubezpieczenia zdrowotnego często mają przedziały cenowe oparte na wieku.' },
      { q: 'Jak wiek chronologiczny jest używany w testach standaryzowanych?', a: 'Większość standaryzowanych testów psychologicznych i edukacyjnych jest znormalizowana według grup wiekowych. Surowy wynik zdającego jest porównywany z wynikami innych w tej samej klasie wieku chronologicznego, aby uzyskać wynik standardowy lub rangę percentylową. Użycie nieprawidłowego wieku chronologicznego może przesunąć wynik do innej grupy normatywnej.' },
      { q: 'Do czego służy wiek chronologiczny?', a: 'Wiek chronologiczny jest używany w ocenach pediatrycznych, uprawnieniach szkolnych, śledzeniu kamieni milowych rozwoju, obliczeniach ubezpieczeniowych i interpretacji testów standaryzowanych.' },
      { q: 'Czy mogę obliczyć wiek chronologiczny dla przeszłej daty?', a: 'Tak. Wprowadź datę urodzenia i dowolną datę referencyjną — przeszłą, obecną lub przyszłą. Kalkulator obliczy dokładny wiek chronologiczny między tymi dwiema datami.' },
    ],
  },
  ja: {
    title: '暦年齢計算ツール – 年・月・日での正確な年齢 | DateCalc.app',
    metaDesc: '誕生日から任意の参照日までの暦年齢を計算します。医療・教育・発達評価に使用されます。',
    kicker: '暦年齢',
    headline: '<em>暦年齢</em>',
    subhead: '2つの日付間の正確な暦年齢を計算します — 年、月、週、日。',
    dobLabel: '誕生日',
    refLabel: '参照日（空白の場合は今日）',
    calcBtn: '→ 計算する',
    tipText: '"暦年齢とは誕生から経過した年・月・日数 — 生きた時間の最も正確な測定値。"',
    examples: ['評価日：今日', '就学資格の確認', '医療フォームへの記入'],
    resultsHeader: '暦年齢',
    heroSuffix: '歳',
    months: 'ヶ月', weeks: '週', days: '日', hours: '時間',
    zodiacLbl: '星座', genLbl: '世代', dayLbl: '誕生曜日', leapLbl: '経験した閏年',
    errInvalid: '→ 無効な日付です。入力を確認してください。',
    errFuture: '→ 誕生日は参照日より後にできません。',
    nextBdayIn: '次の誕生日まであと',
    nextBdayToday: '🎉 お誕生日おめでとうございます！',
    dayWord: ['日', '日'],
    pY: '歳', pM: 'ヶ月', pD: '日',
    zodiacSigns: ['山羊座','水瓶座','魚座','牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座'],
    weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    gens: [{y:1928,n:'サイレント世代'},{y:1946,n:'ベビーブーマー'},{y:1965,n:'X世代'},{y:1981,n:'ミレニアル世代'},{y:1997,n:'Z世代'},{y:2013,n:'アルファ世代'}],
    seoH2a: '暦年齢とは何ですか？',
    seoP1: '暦年齢は、ある人の誕生から経過した時間の正確な測定値で、年・月・日で表されます。これは最も客観的な年齢の測定値で、純粋に暦時間の経過に基づいており、身体状態、認知能力、成熟度についての推測はありません。暦年齢は多くの場面で使用されます：小児科医は子供の発達を標準的なマイルストーン表と比較するために使用します。学校は就学資格を決定するために使用します。心理学者はIQを計算する際の分母として使用します。保険会社はリスク区分と保険料設定に使用します。',
    seoH2b: '暦年齢の計算方法は？',
    seoP2: '暦年齢を正確に計算するには、誕生日を参照日から3段階で引きます。まず、誕生日の日数を参照日の日数から引きます。マイナスになる場合は前月から日数を借ります。次に、誕生月を参照月から引きます。マイナスの場合は12ヶ月借りて年から1を引きます。最後に、生まれ年を引きます。例：2018年3月15日生まれ、2025年10月20日評価。結果：7歳7ヶ月5日。',
    faqTitle: 'よくある質問',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – 認知発達' },
    faqs: [
      { q: '心理学における暦年齢とは？', a: '心理学では、暦年齢（CA）は誕生から経過した実際の時間で、発達・認知・行動指標を比較するための基準点として使用されます。古典的なIQ式は精神年齢を暦年齢で割り100を掛けます。' },
      { q: '暦年齢と精神年齢の違いは何ですか？', a: '暦年齢は誕生から経過した実際の時間 — 完全に客観的です。精神年齢は特定の暦年齢で典型的なパフォーマンスと比較した認知能力の測定値です。認知テストで13歳並みの成績を出す10歳は精神年齢13歳ですが暦年齢は10歳です。' },
      { q: '就学のための暦年齢の計算方法は？', a: '多くの学校は、子供の誕生日をカットオフ日（例：9月1日）と比較して暦年齢を計算します。子供はその日付またはそれ以前に必要な年齢に達している必要があります。誕生日と就学カットオフ日をこのツールに入力して就学時の正確な年齢を確認してください。' },
      { q: '暦年齢の計算式は何ですか？', a: '計算式は：CA = 参照日 − 誕生日、年・月・日で表されます。計算では月末の借り受けと閏年の処理が必要です。このツールは任意の2つの日付に対して正しく計算します。' },
      { q: '保険で暦年齢はどのように使われますか？', a: '保険会社はリスク区分の決定、保険料の設定、保険適格性の定義に暦年齢を使用します。生命保険の保険料は通常、誕生日ごとに上がります。健康保険プランには年齢に基づく料金帯があることが多いです。' },
      { q: '標準化されたテストで暦年齢はどのように使われますか？', a: 'ほとんどの標準化された心理・教育テストは年齢グループで正規化されています。受験者の素点は同じ暦年齢層の他の人のスコアと比較して標準スコアや百分位ランクを得ます。' },
      { q: '暦年齢は何に使われますか？', a: '暦年齢は小児科評価、就学資格、発達マイルストーンの追跡、保険計算、標準化テストの解釈に使用されます。' },
      { q: '過去の日付の暦年齢を計算できますか？', a: 'はい。誕生日と任意の参照日（過去・現在・未来）を入力してください。ツールはその2つの日付間の正確な暦年齢を計算します。' },
    ],
  },
  ko: {
    title: '역연령 계산기 – 년, 월, 일로 정확한 나이 | DateCalc.app',
    metaDesc: '생일부터 임의의 참조일까지의 역연령을 계산합니다. 의료, 교육, 발달 평가에 사용됩니다.',
    kicker: '역연령',
    headline: '<em>역연령</em>',
    subhead: '두 날짜 사이의 정확한 역연령을 계산합니다 — 년, 월, 주, 일.',
    dobLabel: '생일',
    refLabel: '참조일 (비워두면 오늘)',
    calcBtn: '→ 계산하기',
    tipText: '"역연령은 생일로부터 경과한 년, 월, 일수 — 살아온 시간의 가장 정확한 측정값."',
    examples: ['평가일: 오늘', '취학 자격 확인', '의료 양식 작성'],
    resultsHeader: '역연령',
    heroSuffix: '세',
    months: '개월', weeks: '주', days: '일', hours: '시간',
    zodiacLbl: '별자리', genLbl: '세대', dayLbl: '태어난 요일', leapLbl: '경험한 윤년',
    errInvalid: '→ 유효하지 않은 날짜입니다. 입력을 확인하세요.',
    errFuture: '→ 생일은 참조일보다 이후일 수 없습니다.',
    nextBdayIn: '다음 생일까지',
    nextBdayToday: '🎉 생일 축하합니다!',
    dayWord: ['일', '일'],
    pY: '세', pM: '개월', pD: '일',
    zodiacSigns: ['염소자리','물병자리','물고기자리','양자리','황소자리','쌍둥이자리','게자리','사자자리','처녀자리','천칭자리','전갈자리','사수자리','염소자리'],
    weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    gens: [{y:1928,n:'침묵의 세대'},{y:1946,n:'베이비붐 세대'},{y:1965,n:'X세대'},{y:1981,n:'밀레니얼 세대'},{y:1997,n:'Z세대'},{y:2013,n:'알파 세대'}],
    seoH2a: '역연령이란 무엇인가요?',
    seoP1: '역연령은 어떤 사람의 출생으로부터 경과한 시간을 년, 월, 일로 표현한 정확한 측정값입니다. 이것은 가장 객관적인 나이 측정값으로, 순수하게 달력 시간의 경과에 기반하며 신체 상태, 인지 능력 또는 성숙도에 대한 추론이 없습니다. 역연령은 많은 맥락에서 사용됩니다: 소아과 의사는 아동의 발달을 표준 마일스톤 표와 비교하는 데 사용합니다. 학교는 취학 자격을 결정하는 데 사용합니다. 심리학자는 IQ를 계산할 때 분모로 사용합니다.',
    seoH2b: '역연령 계산 방법은?',
    seoP2: '역연령을 정확하게 계산하려면 생일을 참조일에서 3단계로 빼야 합니다. 먼저 생일의 일수를 참조일의 일수에서 뺍니다. 음수가 되면 전달에서 일수를 빌립니다. 다음으로 생일의 월을 참조일의 월에서 뺍니다. 음수의 경우 12개월을 빌리고 연도에서 1을 뺍니다. 마지막으로 출생 연도를 뺍니다. 예: 2018년 3월 15일 출생, 2025년 10월 20일 평가. 결과: 7세 7개월 5일.',
    faqTitle: '자주 묻는 질문',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – 인지 발달' },
    faqs: [
      { q: '심리학에서 역연령이란?', a: '심리학에서 역연령(CA)은 출생으로부터 경과한 실제 시간으로, 발달적, 인지적, 행동적 측정값을 비교하는 기준점으로 사용됩니다. 고전적인 IQ 공식은 정신 연령을 역연령으로 나누고 100을 곱합니다.' },
      { q: '역연령과 정신 연령의 차이는 무엇인가요?', a: '역연령은 출생으로부터 경과한 실제 시간 — 완전히 객관적입니다. 정신 연령은 특정 역연령에서 전형적인 성취와 비교한 인지 능력의 측정값입니다.' },
      { q: '취학을 위한 역연령 계산 방법은?', a: '대부분의 학교는 아동의 생일을 기준일(예: 9월 1일)과 비교하여 역연령을 계산합니다. 아동은 그 날짜 또는 그 이전에 필요한 나이에 달해야 합니다.' },
      { q: '역연령 계산 공식은 무엇인가요?', a: '공식은: CA = 참조일 − 생일, 년, 월, 일로 표현됩니다. 계산에는 월말 빌림과 윤년의 처리가 필요합니다. 이 계산기는 임의의 두 날짜에 대해 올바르게 계산합니다.' },
      { q: '보험에서 역연령은 어떻게 사용되나요?', a: '보험 회사는 위험 범주 결정, 보험료 설정, 보험 자격 정의에 역연령을 사용합니다. 생명보험료는 일반적으로 생일마다 오릅니다.' },
      { q: '표준화된 테스트에서 역연령은 어떻게 사용되나요?', a: '대부분의 표준화된 심리 및 교육 테스트는 연령 그룹으로 정규화됩니다. 응시자의 원점수는 같은 역연령 층의 다른 사람들의 점수와 비교하여 표준 점수나 백분위 순위를 얻습니다.' },
      { q: '역연령은 무엇에 사용되나요?', a: '역연령은 소아과 평가, 취학 자격, 발달 마일스톤 추적, 보험 계산, 표준화 테스트 해석에 사용됩니다.' },
      { q: '과거 날짜의 역연령을 계산할 수 있나요?', a: '네. 생일과 임의의 참조일(과거, 현재 또는 미래)을 입력하세요. 계산기는 두 날짜 사이의 정확한 역연령을 계산합니다.' },
    ],
  },
  nl: {
    title: 'Chronologische Leeftijdscalculator – Exacte Leeftijd in Jaren, Maanden en Dagen | DateCalc.app',
    metaDesc: 'Bereken de chronologische leeftijd van geboortedatum tot een referentiedatum. Gebruikt in medische, educatieve en ontwikkelingscontexten.',
    kicker: 'Chronologische Leeftijd',
    headline: 'Chronologische<br><em>leeftijd</em>',
    subhead: 'Bereken de exacte chronologische leeftijd tussen twee datums — jaren, maanden, weken en dagen.',
    dobLabel: 'Geboortedatum',
    refLabel: 'Referentiedatum (leeg laten voor vandaag)',
    calcBtn: '→ BEREKEN',
    tipText: '"Chronologische leeftijd is het aantal jaren, maanden en dagen vanaf de geboorte — de meest nauwkeurige maatstaf voor doorleefde tijd."',
    examples: ['Beoordelingsdatum: vandaag', 'Schooltoelating controleren', 'Medisch formulier invullen'],
    resultsHeader: 'Chronologische leeftijd',
    heroSuffix: 'jaar',
    months: 'maanden', weeks: 'weken', days: 'dagen', hours: 'uren',
    zodiacLbl: 'Sterrenbeeld', genLbl: 'Generatie', dayLbl: 'Geboortedag', leapLbl: 'Doorleefde schrikkeljaren',
    errInvalid: '→ Ongeldige datum. Controleer je invoer.',
    errFuture: '→ De geboortedatum kan niet na de referentiedatum liggen.',
    nextBdayIn: 'Volgende verjaardag over',
    nextBdayToday: '🎉 Van harte gefeliciteerd met je verjaardag!',
    dayWord: ['dag', 'dagen'],
    pY: 'j', pM: 'mnd', pD: 'd',
    zodiacSigns: ['Steenbok','Waterman','Vissen','Ram','Stier','Tweelingen','Kreeft','Leeuw','Maagd','Weegschaal','Schorpioen','Boogschutter','Steenbok'],
    weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
    gens: [{y:1928,n:'Stille Generatie'},{y:1946,n:'Babyboomers'},{y:1965,n:'Generatie X'},{y:1981,n:'Millennials'},{y:1997,n:'Generatie Z'},{y:2013,n:'Generatie Alpha'}],
    seoH2a: 'Wat is chronologische leeftijd?',
    seoP1: 'Chronologische leeftijd is de precieze maatstaf van de tijd die is verstreken sinds de geboorte van een persoon, uitgedrukt in jaren, maanden en dagen. Het is de meest objectieve maatstaf van leeftijd, omdat het uitsluitend gebaseerd is op de verstrijking van kalendertijd, zonder gevolgtrekkingen over fysieke conditie, cognitieve vermogens of rijpheid. Chronologische leeftijd wordt in veel contexten gebruikt: kinderartsen gebruiken het om de ontwikkeling van een kind te vergelijken met standaard mijlpaaltabellen; scholen gebruiken het om toelatingsrechten te bepalen; psychologen gebruiken het als noemer bij het berekenen van IQ-scores; verzekeraars gebruiken het voor risicocategorieën en premietarieven.',
    seoH2b: 'Hoe bereken je chronologische leeftijd?',
    seoP2: 'Om chronologische leeftijd nauwkeurig te berekenen, trek je de geboortedatum af van de referentiedatum in drie stappen. Trek eerst de geboortedag af van de referentiedag — als het resultaat negatief is, leen dan dagen van de vorige maand. Trek dan de geboortemaand af — als negatief, leen 12 maanden en trek 1 af van het jaar. Trek ten slotte het geboortejaar af. Voorbeeld: kind geboren op 15 maart 2018, beoordeeld op 20 oktober 2025. Resultaat: 7 jaar, 7 maanden, 5 dagen.',
    faqTitle: 'Veelgestelde vragen',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Cognitieve ontwikkeling' },
    faqs: [
      { q: 'Wat is chronologische leeftijd in de psychologie?', a: 'In de psychologie is chronologische leeftijd (CA) de werkelijke verstreken tijd sinds de geboorte, gebruikt als referentiepunt voor het vergelijken van ontwikkelings-, cognitieve en gedragsmetingen. De klassieke IQ-formule deelt mentale leeftijd door chronologische leeftijd en vermenigvuldigt met 100.' },
      { q: 'Wat is het verschil tussen chronologische en mentale leeftijd?', a: 'Chronologische leeftijd is de werkelijke tijd verstreken sinds de geboorte — volledig objectief. Mentale leeftijd is een maatstaf van cognitieve vermogens ten opzichte van wat typisch is voor een bepaalde chronologische leeftijd.' },
      { q: 'Hoe bereken je chronologische leeftijd voor schooltoelating?', a: 'De meeste scholen berekenen de chronologische leeftijd door de geboortedatum van het kind te vergelijken met een afsluitdatum (bijv. 1 september). Het kind moet de vereiste leeftijd hebben bereikt op of voor die datum. Voer de geboortedatum en de toelatingsafsluitdatum in deze calculator in voor de exacte leeftijd bij toelating.' },
      { q: 'Wat is de formule voor chronologische leeftijd?', a: 'De formule is: CA = Referentiedatum − Geboortedatum, uitgedrukt in jaren, maanden en dagen. De berekening vereist zorgvuldige behandeling van maandeind-leningen en schrikkeljaren. Deze calculator past de formule correct toe voor elke twee datums.' },
      { q: 'Hoe wordt chronologische leeftijd gebruikt in verzekeringen?', a: 'Verzekeringsmaatschappijen gebruiken chronologische leeftijd om risicocategorieën te bepalen, premietarieven in te stellen en polisrechten te definiëren. Levensverzekeringspremies stijgen doorgaans bij elke verjaardag.' },
      { q: 'Hoe wordt chronologische leeftijd gebruikt bij gestandaardiseerde tests?', a: 'De meeste gestandaardiseerde psychologische en educatieve tests zijn genormaliseerd naar leeftijdsgroepen. De ruwe score van een deelnemer wordt vergeleken met de scores van anderen in dezelfde chronologische leeftijdsklasse.' },
      { q: 'Waarvoor wordt chronologische leeftijd gebruikt?', a: 'Chronologische leeftijd wordt gebruikt bij pediatrische beoordelingen, schooltoelatingsrechten, het bijhouden van ontwikkelingsmijlpalen, verzekeringsberekeningen en de interpretatie van gestandaardiseerde tests.' },
      { q: 'Kan ik chronologische leeftijd berekenen voor een datum in het verleden?', a: 'Ja. Voer de geboortedatum en een willekeurige referentiedatum in — verleden, heden of toekomst. De calculator berekent de exacte chronologische leeftijd tussen die twee datums.' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'chronological-age-calculator', slugs: { en: 'chronological-age-calculator', fr: 'fr/age-chronologique', es: 'es/edad-cronologica', pt: 'pt/idade-cronologica', de: 'de/chronologisches-alter', it: 'it/eta-cronologica', pl: 'pl/wiek-chronologiczny', ja: 'ja/jikan-nenrei', ko: 'ko/sigan-nai', nl: 'nl/chronologische-leeftijd' } },
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
      <div class="field-label">${t.dobLabel}</div>
      <div class="date-row">
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="1900" max="2026" inputmode="numeric" oninput="clamp(this,1900,2026)">
      </div>
      <div class="field-label" style="margin-top:1rem">${t.refLabel}</div>
      <div class="date-row">
        <input type="number" id="rDay" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="rMonth" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="rYear" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroAge">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="precise-age" id="preciseAge"></div>
    <div class="stats-strip">
      <div class="stat-item"><div class="stat-num" id="statMonths">—</div><div class="stat-lbl">${t.months}</div></div>
      <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeks}</div></div>
      <div class="stat-item"><div class="stat-num" id="statDays">—</div><div class="stat-lbl">${t.days}</div></div>
      <div class="stat-item"><div class="stat-num" id="statHours">—</div><div class="stat-lbl">${t.hours}</div></div>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.zodiacLbl}</div><div class="fact-val" id="ffZodiac">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.genLbl}</div><div class="fact-val" id="ffGen">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.dayLbl}</div><div class="fact-val" id="ffDay">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.leapLbl}</div><div class="fact-val" id="ffLeap">—</div></div>
    </div>
    <div class="bday-banner" id="bdayBanner"></div>
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
      zodiacSigns: t.zodiacSigns,
      weekDays: t.weekDays,
      gens: t.gens,
      errInvalid: t.errInvalid,
      errFuture: t.errFuture,
      nextBdayIn: t.nextBdayIn,
      nextBdayToday: t.nextBdayToday,
      dayWord: t.dayWord,
      pY: t.pY, pM: t.pM, pD: t.pD,
    });

    const script = `
var D = ${data};

function fmt(n){return n.toLocaleString();}
function pad2(n){return n<10?'0'+n:''+n;}

function getZodiac(d,m){
  var b=[20,19,20,20,21,21,22,22,22,22,21,21];
  var idx=(m===1&&d<=b[0])||(m===12&&d>b[11])?0:d<=b[m-1]?m-1:m;
  return D.zodiacSigns[idx];
}

function getGen(y){
  var gs=D.gens;
  for(var i=gs.length-1;i>=0;i--) if(y>=gs[i].y) return gs[i].n;
  return gs[0].n;
}

function leapCount(from,to){
  var c=0;
  for(var y=from;y<=to;y++) if((y%4===0&&y%100!==0)||y%400===0) c++;
  return c;
}

function calculate(){
  var d=parseInt(document.getElementById('day').value);
  var m=parseInt(document.getElementById('month').value);
  var y=parseInt(document.getElementById('year').value);
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show');
  res.classList.remove('show');
  document.getElementById('preciseAge').textContent='';

  if(!d||!m||!y||d<1||d>31||m<1||m>12||y<1900||y>2026){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }
  var bday=new Date(y,m-1,d);
  if(isNaN(bday)||bday.getDate()!==d){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }

  var rd=parseInt(document.getElementById('rDay').value);
  var rm=parseInt(document.getElementById('rMonth').value);
  var ry=parseInt(document.getElementById('rYear').value);
  var ref;
  if(rd&&rm&&ry){
    ref=new Date(ry,rm-1,rd);
    if(isNaN(ref)||ref.getDate()!==rd){err.textContent=D.errInvalid; err.classList.add('show'); return;}
  } else {
    ref=new Date(); ref.setHours(0,0,0,0);
  }

  if(bday>ref){err.textContent=D.errFuture; err.classList.add('show'); return;}

  var ageY=ref.getFullYear()-bday.getFullYear();
  var ageM=ref.getMonth()-bday.getMonth();
  var ageD2=ref.getDate()-bday.getDate();
  if(ageD2<0){ageM--; ageD2+=new Date(ref.getFullYear(),ref.getMonth(),0).getDate();}
  if(ageM<0){ageY--; ageM+=12;}

  var totalDays=Math.floor((ref-bday)/86400000);
  var totalWeeks=Math.floor(totalDays/7);
  var totalMonths=ageY*12+ageM;
  var totalHours=totalDays*24;
  var leaps=leapCount(y, ref.getFullYear());

  var next=new Date(ref.getFullYear(),m-1,d);
  if(next<=ref) next.setFullYear(next.getFullYear()+1);
  var daysNext=Math.ceil((next-ref)/86400000);

  // Show precise breakdown
  var parts=[];
  if(ageY>0) parts.push(ageY+D.pY);
  if(ageM>0) parts.push(ageM+D.pM);
  if(ageD2>0) parts.push(ageD2+D.pD);
  document.getElementById('preciseAge').textContent=parts.join(' · ');

  document.getElementById('heroAge').textContent=ageY;
  document.getElementById('statMonths').textContent=fmt(totalMonths);
  document.getElementById('statWeeks').textContent=fmt(totalWeeks);
  document.getElementById('statDays').textContent=fmt(totalDays);
  document.getElementById('statHours').textContent=fmt(totalHours);
  document.getElementById('ffZodiac').textContent=getZodiac(d,m);
  document.getElementById('ffGen').textContent=getGen(y);
  document.getElementById('ffDay').textContent=D.weekDays[bday.getDay()];
  document.getElementById('ffLeap').textContent=leaps;

  var banner=document.getElementById('bdayBanner');
  if(daysNext===0){
    banner.textContent=D.nextBdayToday;
  } else {
    var dw=daysNext===1?D.dayWord[0]:D.dayWord[1];
    banner.textContent=D.nextBdayIn+' '+daysNext+' '+dw;
  }

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
