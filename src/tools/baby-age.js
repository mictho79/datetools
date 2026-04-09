// Baby Age Calculator

const T = {
  en: {
    title: 'Baby Age Calculator – Age in Weeks and Months | DateCalc.app',
    metaDesc: 'Calculate your baby\'s age in weeks, days, and months from their birth date. Essential for tracking developmental milestones.',
    kicker: 'Baby Age Calculator',
    headline: 'How old is<br>my <em>baby</em>?',
    subhead: 'Enter your baby\'s birth date — get their exact age in weeks, days, and months.',
    dobLabel: 'Baby\'s date of birth',
    calcBtn: '→ Calculate',
    tipText: '"Every week is a milestone when you\'re counting from zero."',
    examples: ['Born 2 months ago', 'Born 6 months ago', 'Born 1 year ago'],
    resultsHeader: 'Baby\'s age',
    heroSuffix: 'weeks old',
    totalDaysLbl: 'days old',
    totalMonthsLbl: 'months old',
    weeksAndDaysLbl: 'weeks + days',
    errInvalid: '→ Invalid date. Please check your input.',
    errFuture: '→ Birth date cannot be in the future.',
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    seoH2a: 'Why count baby age in weeks?',
    seoP1: 'Pediatricians and child development specialists count baby age in weeks for the first three months of life because infant development happens at a pace unlike any other period. In just the first twelve weeks, a baby\'s brain doubles in size, vision develops from near-blindness to tracking faces at 12 inches, and social behavior emerges. By 4 weeks, babies can briefly lift their head during tummy time. By 8 weeks, they produce their first genuine social smile. By 12 weeks, they follow moving objects with coordinated eye movements. By 16 weeks, they laugh aloud. These changes happen so quickly that tracking age in months would obscure important developmental windows. Week-based age tracking gives parents and pediatricians a precise reference point against the developmental milestone charts published by organizations like the American Academy of Pediatrics.',
    seoH2b: 'How corrected age works for premature babies',
    seoP2: 'Premature babies (born before 37 weeks of gestation) are commonly assessed using "corrected age" rather than chronological age. Corrected age — also called adjusted age — is calculated by subtracting the number of weeks a baby was born early from their current age. For example, a baby born 8 weeks premature who is now 20 weeks old has a corrected age of 12 weeks. This distinction matters because a premature baby\'s developmental milestones should be measured against their corrected age, not their birthday. A preemie sitting up "late" at 8 months chronological age may actually be perfectly on track if their corrected age is 6 months. Pediatricians typically use corrected age for developmental assessments until 2 years of age, after which most differences have evened out.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – Developmental Milestones' },
    faqs: [
      { q: 'How old is my baby in weeks?', a: 'To calculate your baby\'s age in weeks, count the total number of days since birth and divide by 7, rounding down. This calculator does it instantly — just enter your baby\'s birth date. For example, a baby born 56 days ago is exactly 8 weeks old.' },
      { q: 'How do I calculate my baby\'s age in months and days?', a: 'Divide the total days since birth by 30.44 (average days per month) for an approximate month count, or use the calendar month method: count full calendar months elapsed, then add the remaining days. This calculator shows both total months and the precise weeks-plus-days breakdown.' },
      { q: 'What is corrected age for premature babies?', a: 'Corrected age subtracts the weeks of prematurity from the baby\'s current age. A baby born 6 weeks early who is now 20 weeks old has a corrected age of 14 weeks. Pediatricians use corrected age to assess developmental milestones until around 2 years, when most developmental gaps have closed.' },
      { q: 'When does a baby become a toddler?', a: 'The transition from baby to toddler is typically defined as 12 months (1 year) of age, though many pediatricians extend the infant period to 18 months for developmental purposes. The word "toddler" itself refers to the unsteady walking gait of children roughly 12–36 months old.' },
      { q: 'What milestones happen at each week?', a: 'Key milestones: week 4 (lifts head), week 8 (social smile), week 12 (follows movement), week 16 (laughs), week 24 (sits with support), week 36 (crawls), week 52 (first steps).' },
      { q: 'How many weeks is 3 months?', a: 'Three months is approximately 13 weeks. Because months vary in length (28–31 days), the exact number of weeks per month changes. This calculator always gives the precise week count.' },
      { q: 'How do I use a baby age calculator in weeks?', a: 'Enter your baby\'s birth day, month, and year above and click Calculate. The result shows your baby\'s age in total weeks, total days, approximate months, and the precise weeks-plus-days breakdown (e.g. "11 weeks 4 days"). This is the format most commonly used by pediatricians and milestone charts.' },
      { q: 'When do I stop counting in weeks?', a: 'Most parents switch from weeks to months at 3 months (12–13 weeks), and from months to years at 2 years. Pediatricians typically use weeks until 3 months, then months until 2 years.' },
    ],
  },
  fr: {
    title: 'Calculateur d\'âge bébé – Âge en semaines et mois | DateCalc.app',
    metaDesc: 'Calculez l\'âge de votre bébé en semaines, jours et mois à partir de sa date de naissance. Essentiel pour suivre les étapes de développement.',
    kicker: 'Calculateur d\'âge bébé',
    headline: 'Quel âge a<br>mon <em>bébé</em> ?',
    subhead: 'Entrez la date de naissance de votre bébé — obtenez son âge exact en semaines, jours et mois.',
    dobLabel: 'Date de naissance du bébé',
    calcBtn: '→ Calculer',
    tipText: '"Chaque semaine est un jalon quand on compte à partir de zéro."',
    examples: ['Né il y a 2 mois', 'Né il y a 6 mois', 'Né il y a 1 an'],
    resultsHeader: 'Âge du bébé',
    heroSuffix: 'semaines',
    totalDaysLbl: 'jours',
    totalMonthsLbl: 'mois',
    weeksAndDaysLbl: 'semaines + jours',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errFuture: '→ La date de naissance ne peut pas être dans le futur.',
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    seoH2a: 'Pourquoi compter l\'âge du bébé en semaines ?',
    seoP1: 'Les pédiatres et les spécialistes du développement de l\'enfant comptent l\'âge du bébé en semaines pendant les trois premiers mois de vie, car le développement du nourrisson se produit à un rythme sans pareil. En seulement douze semaines, le cerveau d\'un bébé double de taille, la vision passe de la quasi-cécité à la capacité de suivre les visages à 30 cm, et les comportements sociaux émergent. À 4 semaines, les bébés peuvent brièvement lever la tête en tummy time. À 8 semaines, ils produisent leur premier vrai sourire social. À 12 semaines, ils suivent les objets en mouvement avec des mouvements oculaires coordonnés. À 16 semaines, ils rient à voix haute. Ces changements se produisent si vite que compter en mois masquerait des fenêtres de développement importantes. Le suivi en semaines donne aux parents et aux pédiatres un repère précis par rapport aux tableaux de jalons du développement.',
    seoH2b: 'Comment fonctionne l\'âge corrigé pour les bébés prématurés',
    seoP2: 'Les bébés prématurés (nés avant 37 semaines de gestation) sont généralement évalués avec l\'âge corrigé plutôt que l\'âge chronologique. L\'âge corrigé — aussi appelé âge ajusté — est calculé en soustrayant le nombre de semaines de prématurité de l\'âge actuel. Par exemple, un bébé né 8 semaines tôt qui a maintenant 20 semaines a un âge corrigé de 12 semaines. Cette distinction importe car les jalons de développement d\'un bébé prématuré doivent être mesurés par rapport à son âge corrigé, pas son anniversaire. Les pédiatres utilisent généralement l\'âge corrigé jusqu\'à 2 ans, après quoi la plupart des différences se sont estompées.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – Jalons du développement' },
    faqs: [
      { q: 'Quel âge a mon bébé en semaines ?', a: 'Pour calculer l\'âge de votre bébé en semaines, comptez le nombre total de jours depuis la naissance et divisez par 7 en arrondissant vers le bas. Ce calculateur le fait instantanément — entrez simplement la date de naissance de votre bébé.' },
      { q: 'Comment calculer l\'âge de mon bébé en mois et jours ?', a: 'Divisez le total de jours depuis la naissance par 30,44 (jours moyens par mois) pour un nombre approximatif de mois, ou utilisez la méthode des mois calendaires complets plus les jours restants. Ce calculateur affiche les deux : total de mois et la décomposition précise en semaines plus jours.' },
      { q: 'Qu\'est-ce que l\'âge corrigé pour les bébés prématurés ?', a: 'L\'âge corrigé soustrait les semaines de prématurité de l\'âge actuel du bébé. Un bébé né 6 semaines tôt qui a maintenant 20 semaines a un âge corrigé de 14 semaines. Les pédiatres utilisent l\'âge corrigé pour évaluer les jalons de développement jusqu\'à environ 2 ans.' },
      { q: 'Quand un bébé devient-il un tout-petit ?', a: 'La transition de bébé à tout-petit est généralement définie à 12 mois (1 an), bien que beaucoup de pédiatres étendent la période nourrisson jusqu\'à 18 mois à des fins développementales. Le terme "tout-petit" désigne la démarche chancelante des enfants d\'environ 12 à 36 mois.' },
      { q: 'Quelles étapes se produisent chaque semaine ?', a: 'Étapes clés : semaine 4 (lève la tête), semaine 8 (sourire social), semaine 12 (suit les mouvements), semaine 16 (rit), semaine 24 (s\'assoit avec soutien), semaine 36 (rampe), semaine 52 (premiers pas).' },
      { q: 'Combien de semaines font 3 mois ?', a: 'Trois mois représentent environ 13 semaines. Parce que les mois varient en longueur (28–31 jours), le nombre exact de semaines par mois change. Ce calculateur donne toujours le nombre exact de semaines.' },
      { q: 'Comment utiliser un calculateur d\'âge bébé en semaines ?', a: 'Entrez le jour, le mois et l\'année de naissance de votre bébé ci-dessus et cliquez sur Calculer. Le résultat affiche l\'âge en semaines totales, jours totaux, mois approximatifs, et la décomposition précise semaines plus jours — le format le plus utilisé par les pédiatres.' },
      { q: 'Quand arrête-t-on de compter en semaines ?', a: 'La plupart des parents passent des semaines aux mois à 3 mois (12–13 semaines), et des mois aux années à 2 ans. Les pédiatres utilisent généralement les semaines jusqu\'à 3 mois, puis les mois jusqu\'à 2 ans.' },
    ],
  },
  es: {
    title: 'Calculadora Edad Bebé 2026 – Semanas, Meses y Días | DateCalc',
    metaDesc: 'Calcula la edad de tu bebé en semanas, días y meses desde su fecha de nacimiento. Esencial para seguir los hitos del desarrollo — gratis.',
    kicker: 'Calculadora de edad del bebé',
    headline: '¿Cuántas semanas<br>tiene mi <em>bebé</em>?',
    subhead: 'Ingresa la fecha de nacimiento de tu bebé — obtén su edad exacta en semanas, días y meses.',
    dobLabel: 'Fecha de nacimiento del bebé',
    calcBtn: '→ Calcular',
    tipText: '"Cada semana es un hito cuando se cuenta desde cero."',
    examples: ['Nacido hace 2 meses', 'Nacido hace 6 meses', 'Nacido hace 1 año'],
    resultsHeader: 'Edad del bebé',
    heroSuffix: 'semanas',
    totalDaysLbl: 'días',
    totalMonthsLbl: 'meses',
    weeksAndDaysLbl: 'semanas + días',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errFuture: '→ La fecha de nacimiento no puede ser futura.',
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    seoH2a: '¿Por qué contar la edad del bebé en semanas?',
    seoP1: 'Los pediatras y especialistas en desarrollo infantil cuentan la edad del bebé en semanas durante los primeros tres meses de vida porque el desarrollo del lactante ocurre a un ritmo sin igual. En solo doce semanas, el cerebro de un bebé duplica su tamaño, la visión pasa de la casi ceguera a seguir rostros a 30 cm, y emergen los comportamientos sociales. A las 4 semanas, los bebés pueden levantar brevemente la cabeza boca abajo. A las 8 semanas, producen su primera sonrisa social genuina. A las 12 semanas, siguen objetos en movimiento con movimientos oculares coordinados. A las 16 semanas, ríen en voz alta. Estos cambios ocurren tan rápido que contar en meses ocultaría ventanas de desarrollo importantes. El seguimiento por semanas da a los padres y pediatras un punto de referencia preciso frente a las tablas de hitos del desarrollo publicadas por la Academia Americana de Pediatría.',
    seoH2b: 'Cómo funciona la edad corregida para bebés prematuros',
    seoP2: 'Los bebés prematuros (nacidos antes de las 37 semanas de gestación) se evalúan comúnmente usando la "edad corregida" en lugar de la edad cronológica. La edad corregida — también llamada edad ajustada — se calcula restando el número de semanas de prematuridad de la edad actual. Por ejemplo, un bebé nacido 8 semanas prematuro que ahora tiene 20 semanas tiene una edad corregida de 12 semanas. Esta distinción importa porque los hitos de desarrollo de un bebé prematuro deben medirse frente a su edad corregida. Los pediatras típicamente usan la edad corregida para evaluaciones del desarrollo hasta los 2 años de edad.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – Hitos del desarrollo' },
    faqs: [
      { q: '¿Cuántas semanas tiene mi bebé?', a: 'Para calcular la edad de tu bebé en semanas, cuenta el total de días desde el nacimiento y divide entre 7, redondeando hacia abajo. Esta calculadora lo hace al instante — simplemente ingresa la fecha de nacimiento de tu bebé.' },
      { q: '¿Cómo calculo la edad de mi bebé en meses y días?', a: 'Divide el total de días desde el nacimiento entre 30,44 (días promedio por mes) para un conteo aproximado de meses, o usa el método de meses calendario completos más los días restantes. Esta calculadora muestra ambos: total de meses y el desglose preciso en semanas más días.' },
      { q: '¿Qué es la edad corregida para bebés prematuros?', a: 'La edad corregida resta las semanas de prematuridad de la edad actual del bebé. Un bebé nacido 6 semanas antes que ahora tiene 20 semanas tiene una edad corregida de 14 semanas. Los pediatras usan la edad corregida para evaluar los hitos del desarrollo hasta aproximadamente los 2 años.' },
      { q: '¿Cuándo un bebé se convierte en niño pequeño?', a: 'La transición de bebé a niño pequeño se define típicamente a los 12 meses (1 año), aunque muchos pediatras extienden el período de lactante hasta los 18 meses para propósitos del desarrollo. La palabra "toddler" en inglés se refiere a la marcha inestable de los niños de aproximadamente 12 a 36 meses.' },
      { q: '¿Qué hitos ocurren en cada semana?', a: 'Hitos clave: semana 4 (levanta la cabeza), semana 8 (sonrisa social), semana 12 (sigue el movimiento), semana 16 (ríe), semana 24 (se sienta con apoyo), semana 36 (gatea), semana 52 (primeros pasos).' },
      { q: '¿Cuántas semanas son 3 meses?', a: 'Tres meses son aproximadamente 13 semanas. Debido a que los meses varían en longitud (28–31 días), el número exacto de semanas por mes cambia. Esta calculadora siempre da el recuento preciso de semanas.' },
      { q: '¿Cómo uso una calculadora de edad del bebé en semanas?', a: 'Ingresa el día, mes y año de nacimiento de tu bebé arriba y haz clic en Calcular. El resultado muestra la edad en semanas totales, días totales, meses aproximados, y el desglose preciso en semanas más días — el formato más usado por pediatras y tablas de hitos.' },
      { q: '¿Cuándo dejo de contar en semanas?', a: 'La mayoría de los padres pasan de semanas a meses a los 3 meses (12–13 semanas), y de meses a años a los 2 años. Los pediatras típicamente usan semanas hasta los 3 meses, luego meses hasta los 2 años.' },
    ],
  },
  pt: {
    title: 'Calculadora Idade Bebê 2026 – Semanas, Meses e Dias | DateCalc',
    metaDesc: 'Calcule a idade do seu bebê em semanas, dias e meses desde a data de nascimento. Essencial para acompanhar os marcos do desenvolvimento — grátis.',
    kicker: 'Calculadora de Idade do Bebê',
    headline: 'Calculadora de<br><em>Idade do<br>Bebê</em>',
    subhead: 'Calcule a idade do seu bebê em semanas, dias e meses',
    resultsHeader: 'Idade do bebê',
    errInvalid: 'Data inválida. Por favor, verifique dia, mês e ano.',
    errFuture: 'A data não pode ser no futuro.',
    labelDay: 'Dia', labelMonth: 'Mês', labelYear: 'Ano',
    btnCalc: '→ CALCULAR',
    tipText: '"Cada semana é um marco quando se conta desde o zero."',
    examples: ['Nascido há 2 meses', 'Nascido há 6 meses', 'Nascido há 1 ano'],
    unitWeeks: 'semanas', unitDays: 'dias', unitMonths: 'meses',
    correctedLabel: 'Idade corrigida',
    prematureToggle: 'Bebê prematuro (usar idade corrigida)',
    prematureWeeksLabel: 'Semanas de gestação ao nascer',
    seoH2a: 'Como calcular a idade exata do bebê?',
    seoP1: 'A idade do bebê é calculada a partir da data de nascimento até hoje, expressa em semanas, dias e meses. Para bebês prematuros, a idade corrigida subtrai as semanas de prematuridade da idade cronológica — fornecendo uma medida mais precisa do desenvolvimento.',
    seoH2b: 'Como funciona a idade corrigida para bebês prematuros?',
    seoP2: 'A idade corrigida (ou ajustada) é usada para bebês nascidos antes de 37 semanas de gestação. É calculada subtraindo o número de semanas prematuras da idade cronológica do bebê. Use a calculadora acima e ative a opção de prematuro para calcular a idade corrigida automaticamente.',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      { q: 'Como calcular a idade do bebê em semanas?', a: 'Subtraia a data de nascimento da data de hoje para obter o total de dias, depois divida por 7. Por exemplo, um bebê de 45 dias tem 6 semanas e 3 dias. Esta calculadora faz isso automaticamente.' },
      { q: 'O que é idade corrigida para prematuros?', a: 'A idade corrigida subtrai as semanas de prematuridade da idade cronológica. Um bebê nascido 8 semanas prematuro com 6 meses de vida tem uma idade corrigida de aproximadamente 4 meses.' },
      { q: 'Até quando devo usar a idade corrigida?', a: 'A maioria dos pediatras recomenda usar a idade corrigida até os 2 anos de idade. Após isso, a maioria dos bebês prematuros alcança o desenvolvimento esperado para sua idade cronológica.' },
      { q: 'Com quantas semanas o bebê já é considerado a termo?', a: 'Um bebê é considerado a termo quando nasce entre 37 e 42 semanas de gestação. Nascimentos antes das 37 semanas são prematuros.' },
    ],
    source: { url: 'https://www.who.int/news-room/fact-sheets/detail/preterm-birth', label: 'OMS – Nascimento Prematuro' },
  },
  de: {
    title: 'Baby-Altersrechner 2026 – Alter in Wochen, Monaten & Tagen',
    metaDesc: 'Berechne das genaue Alter deines Babys in Wochen, Tagen und Monaten. Wichtig für Entwicklungsmeilensteine — kostenlos.',
    kicker: 'Baby-Altersrechner',
    headline: 'Wie alt ist<br>mein <em>Baby</em>?',
    subhead: 'Gib das Geburtsdatum deines Babys ein — erhalte das genaue Alter in Wochen, Tagen und Monaten.',
    dobLabel: 'Geburtsdatum des Babys',
    calcBtn: '→ BERECHNEN',
    tipText: '"Jede Woche ist ein Meilenstein, wenn man von null an zählt."',
    examples: ['Vor 2 Monaten geboren', 'Vor 6 Monaten geboren', 'Vor 1 Jahr geboren'],
    resultsHeader: 'Alter des Babys',
    heroSuffix: 'Wochen alt',
    totalDaysLbl: 'Tage alt',
    totalMonthsLbl: 'Monate alt',
    weeksAndDaysLbl: 'Wochen + Tage',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfe deine Eingabe.',
    errFuture: '→ Das Geburtsdatum darf nicht in der Zukunft liegen.',
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    seoH2a: 'Warum das Babyalter in Wochen zählen?',
    seoP1: 'Kinderärzte und Entwicklungsspezialisten zählen das Alter des Babys in den ersten drei Lebensmonaten in Wochen, weil die kindliche Entwicklung in einem einzigartigen Tempo verläuft. In nur zwölf Wochen verdoppelt sich das Gehirn eines Babys, die Sehkraft entwickelt sich von fast blindem Zustand bis zum Verfolgen von Gesichtern auf 30 cm Entfernung, und soziale Verhaltensweisen entstehen. Mit 4 Wochen können Babys beim Bauchlagetraining kurzzeitig den Kopf heben. Mit 8 Wochen zeigen sie ihr erstes echtes soziales Lächeln. Mit 12 Wochen folgen sie bewegten Objekten mit koordinierten Augenbewegungen. Mit 16 Wochen lachen sie laut. Diese Veränderungen geschehen so schnell, dass das Zählen in Monaten wichtige Entwicklungsfenster verbergen würde.',
    seoH2b: 'Wie funktioniert das korrigierte Alter bei Frühgeborenen?',
    seoP2: 'Frühgeborene (vor 37 Schwangerschaftswochen geboren) werden üblicherweise anhand des „korrigierten Alters" statt des chronologischen Alters beurteilt. Das korrigierte Alter — auch angepasstes Alter genannt — wird berechnet, indem die Anzahl der zu früh geborenen Wochen vom aktuellen Alter abgezogen wird. Zum Beispiel hat ein 8 Wochen zu früh geborenes Baby, das jetzt 20 Wochen alt ist, ein korrigiertes Alter von 12 Wochen. Kinderärzte verwenden das korrigierte Alter in der Regel bis zum Alter von 2 Jahren für Entwicklungsbeurteilungen.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – Entwicklungsmeilensteine' },
    faqs: [
      { q: 'Wie alt ist mein Baby in Wochen?', a: 'Um das Alter deines Babys in Wochen zu berechnen, zähle die Gesamtanzahl der Tage seit der Geburt und teile durch 7, auf- und abrunden. Dieser Rechner macht das sofort — gib einfach das Geburtsdatum deines Babys ein. Zum Beispiel ist ein Baby, das vor 56 Tagen geboren wurde, genau 8 Wochen alt.' },
      { q: 'Wie berechne ich das Alter meines Babys in Monaten und Tagen?', a: 'Teile die Gesamttage seit der Geburt durch 30,44 (durchschnittliche Tage pro Monat) für eine ungefähre Monatsanzahl, oder verwende die Kalendermonatsmethode. Dieser Rechner zeigt beides: Gesamtmonate und die genaue Wochen-plus-Tage-Aufschlüsselung.' },
      { q: 'Was ist das korrigierte Alter für Frühgeborene?', a: 'Das korrigierte Alter subtrahiert die Wochen der Frühgeburt vom aktuellen Alter des Babys. Ein Baby, das 6 Wochen zu früh geboren wurde und jetzt 20 Wochen alt ist, hat ein korrigiertes Alter von 14 Wochen. Kinderärzte verwenden das korrigierte Alter bis etwa 2 Jahren.' },
      { q: 'Wann wird ein Baby zum Kleinkind?', a: 'Der Übergang vom Baby zum Kleinkind wird üblicherweise auf 12 Monate (1 Jahr) festgelegt, obwohl viele Kinderärzte den Säuglingszeitraum für Entwicklungszwecke auf 18 Monate ausdehnen. Das Wort „Kleinkind" bezieht sich auf den unsicheren Gang von Kindern im Alter von etwa 12 bis 36 Monaten.' },
      { q: 'Welche Meilensteine gibt es in jeder Woche?', a: 'Wichtige Meilensteine: Woche 4 (hebt den Kopf), Woche 8 (soziales Lächeln), Woche 12 (folgt Bewegungen), Woche 16 (lacht), Woche 24 (sitzt mit Unterstützung), Woche 36 (krabbelt), Woche 52 (erste Schritte).' },
      { q: 'Wie viele Wochen sind 3 Monate?', a: 'Drei Monate sind ungefähr 13 Wochen. Da die Monate unterschiedlich lang sind (28–31 Tage), ändert sich die genaue Anzahl der Wochen pro Monat. Dieser Rechner gibt immer die genaue Wochenanzahl an.' },
      { q: 'Wie verwende ich einen Baby-Altersrechner in Wochen?', a: 'Gib oben den Geburtstag, den Monat und das Jahr deines Babys ein und klicke auf Berechnen. Das Ergebnis zeigt das Alter in Gesamtwochen, Gesamttagen, ungefähren Monaten und der genauen Wochen-plus-Tage-Aufschlüsselung — das Format, das von Kinderärzten am häufigsten verwendet wird.' },
      { q: 'Wann hört man auf, in Wochen zu zählen?', a: 'Die meisten Eltern wechseln mit 3 Monaten (12–13 Wochen) von Wochen zu Monaten und mit 2 Jahren von Monaten zu Jahren. Kinderärzte verwenden in der Regel bis 3 Monate Wochen, dann bis 2 Jahre Monate.' },
    ],
  },
  it: {
    title: 'Calcolo Età Neonato 2026 – Settimane, Mesi e Giorni | DateCalc',
    metaDesc: 'Calcola l\'età del tuo neonato in settimane, giorni e mesi dalla data di nascita. Essenziale per monitorare lo sviluppo — gratis.',
    kicker: 'Calcolatore età neonato',
    headline: 'Quanti mesi ha<br>il mio <em>bambino</em>?',
    subhead: 'Inserisci la data di nascita del tuo bambino — scopri la sua età esatta in settimane, giorni e mesi.',
    dobLabel: 'Data di nascita del bambino',
    calcBtn: '→ CALCOLA',
    tipText: '"Ogni settimana è un traguardo quando si conta da zero."',
    examples: ['Nato 2 mesi fa', 'Nato 6 mesi fa', 'Nato 1 anno fa'],
    resultsHeader: 'Età del bambino',
    heroSuffix: 'settimane',
    totalDaysLbl: 'giorni',
    totalMonthsLbl: 'mesi',
    weeksAndDaysLbl: 'settimane + giorni',
    errInvalid: '→ Data non valida. Controlla i dati inseriti.',
    errFuture: '→ La data di nascita non può essere nel futuro.',
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    seoH2a: 'Perché contare l\'età del bambino in settimane?',
    seoP1: 'I pediatri e gli specialisti dello sviluppo infantile contano l\'età del bambino in settimane nei primi tre mesi di vita perché lo sviluppo del neonato avviene a un ritmo senza pari. In sole dodici settimane, il cervello di un bambino raddoppia di dimensioni, la vista si sviluppa dalla quasi cecità al seguire i volti a 30 cm, e i comportamenti sociali emergono. A 4 settimane, i neonati riescono a sollevare brevemente la testa in posizione prona. A 8 settimane, producono il loro primo sorriso sociale genuino. A 12 settimane, seguono gli oggetti in movimento con movimenti oculari coordinati. A 16 settimane, ridono ad alta voce. Questi cambiamenti avvengono così rapidamente che contare in mesi oscurerebbe importanti finestre di sviluppo.',
    seoH2b: 'Come funziona l\'età corretta per i neonati prematuri?',
    seoP2: 'I neonati prematuri (nati prima di 37 settimane di gestazione) vengono comunemente valutati usando l\'"età corretta" piuttosto che l\'età cronologica. L\'età corretta — chiamata anche età aggiustata — si calcola sottraendo il numero di settimane di prematurità dall\'età attuale. Ad esempio, un bambino nato 8 settimane prematuro che ora ha 20 settimane ha un\'età corretta di 12 settimane. I pediatri utilizzano tipicamente l\'età corretta per le valutazioni dello sviluppo fino ai 2 anni di età.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – Tappe dello sviluppo' },
    faqs: [
      { q: 'Quante settimane ha il mio bambino?', a: 'Per calcolare l\'età del tuo bambino in settimane, conta il numero totale di giorni dalla nascita e dividi per 7, arrotondando verso il basso. Questo calcolatore lo fa istantaneamente — inserisci semplicemente la data di nascita del tuo bambino.' },
      { q: 'Come calcolo l\'età del mio bambino in mesi e giorni?', a: 'Dividi il totale dei giorni dalla nascita per 30,44 (giorni medi per mese) per un conteggio approssimativo dei mesi, oppure usa il metodo dei mesi calendario completi più i giorni rimanenti. Questo calcolatore mostra entrambi: totale mesi e la scomposizione precisa in settimane più giorni.' },
      { q: 'Cos\'è l\'età corretta per i neonati prematuri?', a: 'L\'età corretta sottrae le settimane di prematurità dall\'età attuale del bambino. Un bambino nato 6 settimane prematuro che ora ha 20 settimane ha un\'età corretta di 14 settimane. I pediatri usano l\'età corretta per valutare le tappe dello sviluppo fino a circa 2 anni.' },
      { q: 'Quando un bambino diventa un bimbo che cammina?', a: 'La transizione da neonato a bambino che cammina è tipicamente definita a 12 mesi (1 anno), anche se molti pediatri estendono il periodo infantile fino a 18 mesi a fini evolutivi. Il termine "toddler" si riferisce all\'andatura incerta dei bambini di circa 12-36 mesi.' },
      { q: 'Quali tappe ci sono ogni settimana?', a: 'Tappe fondamentali: settimana 4 (alza la testa), settimana 8 (sorriso sociale), settimana 12 (segue i movimenti), settimana 16 (ride), settimana 24 (siede con supporto), settimana 36 (gattonare), settimana 52 (primi passi).' },
      { q: 'Quante settimane sono 3 mesi?', a: 'Tre mesi corrispondono approssimativamente a 13 settimane. Poiché i mesi variano in lunghezza (28-31 giorni), il numero esatto di settimane per mese cambia. Questo calcolatore fornisce sempre il conteggio preciso delle settimane.' },
      { q: 'Come uso un calcolatore dell\'età del bambino in settimane?', a: 'Inserisci il giorno, il mese e l\'anno di nascita del tuo bambino sopra e clicca su Calcola. Il risultato mostra l\'età in settimane totali, giorni totali, mesi approssimativi e la scomposizione precisa settimane più giorni — il formato più usato dai pediatri.' },
      { q: 'Quando smetto di contare in settimane?', a: 'La maggior parte dei genitori passa dalle settimane ai mesi a 3 mesi (12-13 settimane), e dai mesi agli anni a 2 anni. I pediatri usano tipicamente le settimane fino a 3 mesi, poi i mesi fino a 2 anni.' },
    ],
  },
  pl: {
    title: 'Wiek Niemowlęcia 2026 – Tygodnie, Miesiące i Dni | DateCalc',
    metaDesc: 'Oblicz wiek swojego dziecka w tygodniach, dniach i miesiącach od urodzenia. Niezbędne do śledzenia kamieni milowych — za darmo.',
    kicker: 'Kalkulator wieku niemowlęcia',
    headline: 'Ile tygodni<br>ma moje <em>dziecko</em>?',
    subhead: 'Wprowadź datę urodzenia swojego dziecka — poznaj jego dokładny wiek w tygodniach, dniach i miesiącach.',
    dobLabel: 'Data urodzenia dziecka',
    calcBtn: '→ OBLICZ',
    tipText: '"Każdy tydzień to kamień milowy, kiedy liczy się od zera."',
    examples: ['Urodzone 2 miesiące temu', 'Urodzone 6 miesięcy temu', 'Urodzone 1 rok temu'],
    resultsHeader: 'Wiek dziecka',
    heroSuffix: 'tygodni',
    totalDaysLbl: 'dni',
    totalMonthsLbl: 'miesięcy',
    weeksAndDaysLbl: 'tygodnie + dni',
    errInvalid: '→ Nieprawidłowa data. Sprawdź wprowadzone dane.',
    errFuture: '→ Data urodzenia nie może być w przyszłości.',
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    seoH2a: 'Dlaczego liczyć wiek dziecka w tygodniach?',
    seoP1: 'Pediatrzy i specjaliści od rozwoju dziecka liczą wiek niemowlęcia w tygodniach przez pierwsze trzy miesiące życia, ponieważ rozwój niemowląt przebiega w wyjątkowym tempie. W zaledwie dwunastu tygodniach mózg dziecka podwaja swój rozmiar, wzrok rozwija się od prawie ślepoty do śledzenia twarzy z odległości 30 cm, a zachowania społeczne pojawiają się. W 4. tygodniu niemowlęta potrafią krótko unosić główkę w pozycji na brzuchu. W 8. tygodniu pojawia się pierwszy prawdziwy uśmiech społeczny. W 12. tygodniu śledzą poruszające się obiekty skoordynowanymi ruchami oczu. W 16. tygodniu śmieją się głośno. Te zmiany zachodzą tak szybko, że liczenie w miesiącach ukrywałoby ważne okna rozwojowe.',
    seoH2b: 'Jak działa wiek skorygowany dla wcześniaków?',
    seoP2: 'Niemowlęta urodzone przedwcześnie (przed 37. tygodniem ciąży) są oceniane z użyciem „wieku skorygowanego" zamiast wieku chronologicznego. Wiek skorygowany — zwany też wiekiem dostosowanym — oblicza się odejmując liczbę tygodni wcześniactwa od obecnego wieku. Na przykład dziecko urodzone 8 tygodni za wcześnie, które ma teraz 20 tygodni, ma wiek skorygowany 12 tygodni. Pediatrzy zazwyczaj stosują wiek skorygowany do oceny rozwoju do 2. roku życia.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – Kamienie milowe rozwoju' },
    faqs: [
      { q: 'Ile tygodni ma moje dziecko?', a: 'Aby obliczyć wiek swojego dziecka w tygodniach, policz całkowitą liczbę dni od urodzenia i podziel przez 7, zaokrąglając w dół. Ten kalkulator robi to natychmiastowo — wystarczy wprowadzić datę urodzenia dziecka.' },
      { q: 'Jak obliczyć wiek mojego dziecka w miesiącach i dniach?', a: 'Podziel całkowitą liczbę dni od urodzenia przez 30,44 (średnia liczba dni na miesiąc) dla przybliżonej liczby miesięcy lub użyj metody pełnych miesięcy kalendarzowych plus pozostałe dni. Ten kalkulator pokazuje oba: łączne miesiące i dokładny podział na tygodnie plus dni.' },
      { q: 'Czym jest wiek skorygowany dla wcześniaków?', a: 'Wiek skorygowany odejmuje tygodnie wcześniactwa od obecnego wieku dziecka. Dziecko urodzone 6 tygodni za wcześnie, które ma teraz 20 tygodni, ma wiek skorygowany 14 tygodni. Pediatrzy używają wieku skorygowanego do oceny kamieni milowych do około 2 lat.' },
      { q: 'Kiedy dziecko przestaje być niemowlęciem?', a: 'Przejście od niemowlęcia do małego dziecka jest zazwyczaj definiowane na 12 miesięcy (1 rok), choć wielu pediatrów przedłuża okres niemowlęcy do 18 miesięcy dla celów rozwojowych. Słowo „maluch" odnosi się do chwiejnego chodu dzieci w wieku około 12-36 miesięcy.' },
      { q: 'Jakie kamienie milowe pojawiają się w każdym tygodniu?', a: 'Kluczowe kamienie milowe: tydzień 4 (unosi główkę), tydzień 8 (uśmiech społeczny), tydzień 12 (śledzi ruch), tydzień 16 (śmieje się), tydzień 24 (siedzi z podparciem), tydzień 36 (raczkuje), tydzień 52 (pierwsze kroki).' },
      { q: 'Ile tygodni to 3 miesiące?', a: 'Trzy miesiące to około 13 tygodni. Ponieważ miesiące mają różną długość (28-31 dni), dokładna liczba tygodni na miesiąc zmienia się. Ten kalkulator zawsze podaje dokładną liczbę tygodni.' },
      { q: 'Jak korzystać z kalkulatora wieku dziecka w tygodniach?', a: 'Wprowadź dzień, miesiąc i rok urodzenia swojego dziecka powyżej i kliknij Oblicz. Wynik pokazuje wiek w łącznych tygodniach, łącznych dniach, przybliżonych miesiącach oraz dokładnym podziale na tygodnie plus dni — format najczęściej używany przez pediatrów.' },
      { q: 'Kiedy przestaje się liczyć w tygodniach?', a: 'Większość rodziców przechodzi z tygodni na miesiące po 3 miesiącach (12-13 tygodni), a z miesięcy na lata po 2 latach. Pediatrzy zazwyczaj używają tygodni do 3 miesięcy, potem miesięcy do 2 lat.' },
    ],
  },
  ja: {
    title: '赤ちゃんの月齢計算 2026 – 週数・日数・月数 | DateCalc',
    metaDesc: '赤ちゃんの誕生日から週数・日数・月数での正確な月齢を計算します。発達マイルストーンの追跡に必須 — 無料。',
    kicker: '赤ちゃんの月齢計算ツール',
    headline: '赤ちゃんは<br>何週<em>齢</em>？',
    subhead: '赤ちゃんの誕生日を入力して、週数・日数・月数での正確な月齢を確認しましょう。',
    dobLabel: '赤ちゃんの誕生日',
    calcBtn: '→ 計算する',
    tipText: '"ゼロから数え始めると、1週間1週間が節目になります。"',
    examples: ['2ヶ月前に生まれた', '6ヶ月前に生まれた', '1年前に生まれた'],
    resultsHeader: '赤ちゃんの月齢',
    heroSuffix: '週',
    totalDaysLbl: '日',
    totalMonthsLbl: 'ヶ月',
    weeksAndDaysLbl: '週 + 日',
    errInvalid: '→ 無効な日付です。入力を確認してください。',
    errFuture: '→ 誕生日は未来の日付にできません。',
    weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    seoH2a: 'なぜ赤ちゃんの月齢を週数で数えるのですか？',
    seoP1: '小児科医や発達の専門家は生後3ヶ月間、赤ちゃんの月齢を週数で数えます。それは乳幼児の発達が驚くほど速いペースで進むからです。わずか12週間で赤ちゃんの脳は2倍の大きさになり、視力はほぼゼロから顔を30cmの距離で追跡できるまで発達し、社会的な行動が現れます。生後4週で腹ばいで短時間頭を持ち上げられます。8週で最初の本当の社会的微笑みが現れます。12週では動く物体を協調した目の動きで追跡します。16週では声を出して笑います。',
    seoH2b: '早産児の修正月齢はどのように機能しますか？',
    seoP2: '早産児（妊娠37週未満）は実際の月齢の代わりに「修正月齢」を使って評価されます。修正月齢（調整月齢とも呼ばれます）は現在の月齢から早産週数を引いて計算します。例えば8週早く生まれ現在20週の赤ちゃんの修正月齢は12週です。小児科医は通常、発達評価に2歳まで修正月齢を使用します。',
    faqTitle: 'よくある質問',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – 発達マイルストーン' },
    faqs: [
      { q: '赤ちゃんは何週齢ですか？', a: '赤ちゃんの週齢を計算するには、誕生日からの合計日数を数え、7で割って切り捨てます。この計算ツールは即座に計算します。赤ちゃんの誕生日を入力するだけです。' },
      { q: '赤ちゃんの月齢を月数と日数で計算するにはどうすればよいですか？', a: '誕生日からの合計日数を30.44（月の平均日数）で割ると月数の近似値が得られます。あるいは完全な暦月数と残り日数を使う方法もあります。この計算ツールは両方を表示します。' },
      { q: '早産児の修正月齢とは何ですか？', a: '修正月齢は赤ちゃんの現在の月齢から早産週数を引きます。6週早く生まれ現在20週の赤ちゃんの修正月齢は14週です。小児科医は2歳頃までマイルストーンの評価に修正月齢を使用します。' },
      { q: '赤ちゃんはいつ幼児になりますか？', a: '乳児から幼児への移行は通常12ヶ月（1歳）と定義されていますが、多くの小児科医は発達目的で乳児期を18ヶ月まで延長します。' },
      { q: '各週にどんなマイルストーンがありますか？', a: '主要なマイルストーン：4週（頭を持ち上げる）、8週（社会的微笑み）、12週（動きを追跡）、16週（笑う）、24週（支えがあれば座る）、36週（ハイハイ）、52週（初めての一歩）。' },
      { q: '3ヶ月は何週ですか？', a: '3ヶ月は約13週です。月の長さが異なるため（28〜31日）、1ヶ月あたりの正確な週数は変わります。この計算ツールは常に正確な週数を表示します。' },
      { q: '赤ちゃんの週齢計算ツールの使い方は？', a: '赤ちゃんの誕生年月日を上に入力して「計算する」をクリックしてください。結果には合計週数・合計日数・おおよその月数・週+日の内訳が表示されます。' },
      { q: 'いつ週数で数えるのをやめますか？', a: 'ほとんどの親は3ヶ月（12〜13週）後に週数から月数に切り替え、2年後に月数から年数に切り替えます。' },
    ],
  },
  ko: {
    title: '아기 월령 계산기 2026 – 주수, 일수, 월수 | DateCalc',
    metaDesc: '아기의 생일로부터 주수, 일수, 월수로 정확한 월령을 계산합니다. 발달 마일스톤 추적에 필수 — 무료.',
    kicker: '아기 월령 계산기',
    headline: '우리 <em>아기</em>는<br>몇 주 됐나요?',
    subhead: '아기의 생일을 입력하면 주수, 일수, 월수로 정확한 월령을 알 수 있습니다.',
    dobLabel: '아기의 생일',
    calcBtn: '→ 계산하기',
    tipText: '"0부터 세기 시작하면 매주가 이정표가 됩니다."',
    examples: ['2개월 전 출생', '6개월 전 출생', '1년 전 출생'],
    resultsHeader: '아기의 월령',
    heroSuffix: '주',
    totalDaysLbl: '일',
    totalMonthsLbl: '개월',
    weeksAndDaysLbl: '주 + 일',
    errInvalid: '→ 유효하지 않은 날짜입니다. 입력을 확인하세요.',
    errFuture: '→ 생일은 미래 날짜가 될 수 없습니다.',
    weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    seoH2a: '왜 아기의 나이를 주수로 세나요?',
    seoP1: '소아과 의사와 발달 전문가들은 생후 3개월 동안 아기의 나이를 주수로 셉니다. 영아의 발달이 놀라운 속도로 진행되기 때문입니다. 불과 12주 동안 아기의 뇌는 두 배 크기로 커지고, 시력은 거의 없는 상태에서 30cm 거리의 얼굴을 추적할 수 있을 만큼 발달하며, 사회적 행동이 나타납니다. 4주에 아기는 엎드린 자세에서 잠깐 머리를 들 수 있습니다. 8주에 첫 번째 진정한 사회적 미소가 나타납니다. 12주에는 움직이는 물체를 협응된 눈 움직임으로 추적합니다. 16주에는 소리 내어 웃습니다.',
    seoH2b: '조산아의 교정 월령은 어떻게 작동하나요?',
    seoP2: '조산아(임신 37주 미만 출생)는 실제 월령 대신 "교정 월령"을 사용하여 평가됩니다. 교정 월령(수정 월령이라고도 함)은 현재 월령에서 조산 주수를 빼서 계산합니다. 예를 들어 8주 일찍 태어나 현재 20주인 아기의 교정 월령은 12주입니다. 소아과 의사들은 보통 2세까지 발달 평가에 교정 월령을 사용합니다.',
    faqTitle: '자주 묻는 질문',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – 발달 마일스톤' },
    faqs: [
      { q: '우리 아기는 몇 주 됐나요?', a: '아기의 주수를 계산하려면 생일로부터 총 일수를 세고 7로 나누어 내림합니다. 이 계산기는 즉시 계산합니다. 아기의 생일만 입력하면 됩니다.' },
      { q: '아기의 나이를 개월수와 일수로 계산하려면?', a: '생일로부터 총 일수를 30.44(월 평균 일수)로 나누면 개월수의 근사치가 나옵니다. 이 계산기는 두 가지 방식 모두 표시합니다.' },
      { q: '조산아의 교정 월령이란 무엇인가요?', a: '교정 월령은 아기의 현재 월령에서 조산 주수를 빼는 것입니다. 6주 일찍 태어나 현재 20주인 아기의 교정 월령은 14주입니다. 소아과 의사들은 약 2세까지 마일스톤 평가에 교정 월령을 사용합니다.' },
      { q: '아기는 언제 유아가 되나요?', a: '영아에서 유아로의 전환은 일반적으로 12개월(1세)로 정의되지만, 많은 소아과 의사들은 발달 목적을 위해 영아기를 18개월까지 연장합니다.' },
      { q: '각 주에 어떤 마일스톤이 있나요?', a: '주요 마일스톤: 4주(머리 들기), 8주(사회적 미소), 12주(움직임 추적), 16주(웃기), 24주(지지하면 앉기), 36주(기기), 52주(첫 걸음).' },
      { q: '3개월은 몇 주인가요?', a: '3개월은 약 13주입니다. 달의 길이가 다르기 때문에(28~31일) 월당 정확한 주수는 변합니다. 이 계산기는 항상 정확한 주수를 표시합니다.' },
      { q: '아기 주수 계산기 사용 방법은?', a: '위에 아기의 생년월일을 입력하고 "계산하기"를 클릭하세요. 결과에는 총 주수, 총 일수, 대략적인 개월수, 주+일의 정확한 분류가 표시됩니다.' },
      { q: '언제 주수로 세는 것을 멈추나요?', a: '대부분의 부모들은 3개월(12~13주) 후에 주수에서 개월수로, 2년 후에 개월수에서 연수로 전환합니다.' },
    ],
  },
  nl: {
    title: 'Baby Leeftijd 2026 – Weken, Maanden en Dagen | DateCalc',
    metaDesc: 'Bereken de leeftijd van je baby in weken, dagen en maanden vanaf de geboorte. Essentieel voor het bijhouden van mijlpalen — gratis.',
    kicker: 'Baby Leeftijdscalculator',
    headline: 'Hoeveel weken<br>is mijn <em>baby</em>?',
    subhead: 'Voer de geboortedatum van je baby in — ontdek de exacte leeftijd in weken, dagen en maanden.',
    dobLabel: 'Geboortedatum baby',
    calcBtn: '→ BEREKEN',
    tipText: '"Elke week is een mijlpaal als je begint te tellen bij nul."',
    examples: ['Geboren 2 maanden geleden', 'Geboren 6 maanden geleden', 'Geboren 1 jaar geleden'],
    resultsHeader: 'Leeftijd baby',
    heroSuffix: 'weken',
    totalDaysLbl: 'dagen',
    totalMonthsLbl: 'maanden',
    weeksAndDaysLbl: 'weken + dagen',
    errInvalid: '→ Ongeldige datum. Controleer je invoer.',
    errFuture: '→ De geboortedatum kan niet in de toekomst liggen.',
    weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
    seoH2a: 'Waarom de leeftijd van een baby in weken tellen?',
    seoP1: 'Kinderartsen en ontwikkelingsspecialisten tellen de leeftijd van een baby in weken gedurende de eerste drie maanden, omdat de ontwikkeling van zuigelingen in een uitzonderlijk tempo verloopt. In slechts twaalf weken verdubbelt het hersenvolume van een baby, ontwikkelt het zicht zich van bijna blind naar het volgen van gezichten op 30 cm afstand, en verschijnen sociale gedragingen. In week 4 kunnen baby\'s kort hun hoofd optillen in buikligging. In week 8 verschijnt de eerste echte sociale glimlach. In week 12 volgen ze bewegende objecten met gecoördineerde oogbewegingen. In week 16 lachen ze hardop.',
    seoH2b: 'Hoe werkt de gecorrigeerde leeftijd voor vroeggeborenen?',
    seoP2: 'Baby\'s die te vroeg zijn geboren (vóór 37 weken zwangerschap) worden beoordeeld met de "gecorrigeerde leeftijd" in plaats van de chronologische leeftijd. De gecorrigeerde leeftijd — ook wel de aangepaste leeftijd genoemd — wordt berekend door het aantal weken vroeggeboorte af te trekken van de huidige leeftijd. Een baby die 8 weken te vroeg is geboren en nu 20 weken oud is, heeft een gecorrigeerde leeftijd van 12 weken. Kinderartsen gebruiken doorgaans de gecorrigeerde leeftijd voor ontwikkelingsbeoordeling tot de leeftijd van 2 jaar.',
    faqTitle: 'Veelgestelde vragen',
    source: { url: 'https://www.aap.org/en/patient-care/developmental-milestones/', label: 'American Academy of Pediatrics – Ontwikkelingsmijlpalen' },
    faqs: [
      { q: 'Hoeveel weken is mijn baby?', a: 'Om de leeftijd van je baby in weken te berekenen, tel het totale aantal dagen vanaf de geboorte en deel door 7, naar beneden afgerond. Deze calculator doet het direct — voer gewoon de geboortedatum van je baby in.' },
      { q: 'Hoe bereken ik de leeftijd van mijn baby in maanden en dagen?', a: 'Deel het totale aantal dagen vanaf de geboorte door 30,44 (gemiddeld aantal dagen per maand) voor een benadering van de maanden. Deze calculator toont beide: totale maanden en de exacte verdeling in weken plus dagen.' },
      { q: 'Wat is de gecorrigeerde leeftijd voor vroeggeborenen?', a: 'De gecorrigeerde leeftijd trekt de weken vroeggeboorte af van de huidige leeftijd van het kind. Een baby die 6 weken te vroeg is geboren en nu 20 weken oud is, heeft een gecorrigeerde leeftijd van 14 weken. Kinderartsen gebruiken de gecorrigeerde leeftijd voor mijlpaalbeoordeling tot ongeveer 2 jaar.' },
      { q: 'Wanneer houdt een baby op een baby te zijn?', a: 'De overgang van baby naar peuter wordt gewoonlijk gedefinieerd op 12 maanden (1 jaar), hoewel veel kinderartsen de zuigelingenperiode verlengen tot 18 maanden voor ontwikkelingsdoeleinden.' },
      { q: 'Welke mijlpalen verschijnen elke week?', a: 'Belangrijke mijlpalen: week 4 (tilt hoofd op), week 8 (sociale glimlach), week 12 (volgt beweging), week 16 (lacht), week 24 (zit met ondersteuning), week 36 (kruipt), week 52 (eerste stapjes).' },
      { q: 'Hoeveel weken zijn 3 maanden?', a: 'Drie maanden zijn ongeveer 13 weken. Omdat maanden een verschillende lengte hebben (28-31 dagen), varieert het exacte aantal weken per maand. Deze calculator geeft altijd het exacte aantal weken.' },
      { q: 'Hoe gebruik ik de baby leeftijdscalculator in weken?', a: 'Voer de dag, maand en het jaar van de geboorte van je baby hierboven in en klik op Berekenen. Het resultaat toont de leeftijd in totale weken, totale dagen, geschatte maanden en de exacte verdeling in weken plus dagen.' },
      { q: 'Wanneer stop je met tellen in weken?', a: 'De meeste ouders stappen na 3 maanden (12-13 weken) over van weken naar maanden, en na 2 jaar van maanden naar jaren. Kinderartsen gebruiken doorgaans weken tot 3 maanden, dan maanden tot 2 jaar.' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'baby-age-calculator', slugs: { en: 'baby-age-calculator', fr: 'fr/calculateur-age-bebe', es: 'es/calculadora-edad-bebe', pt: 'pt/calculadora-idade-bebe', de: 'de/baby-alter-rechner', it: 'it/calcolatore-eta-neonato', pl: 'pl/wiek-niemowlecia', ja: 'ja/akachan-nenrei', ko: 'ko/agi-nai', nl: 'nl/baby-leeftijd' } },
  ],

  render(pageId, lang) {
    const t = T[lang];

    // Build example dates relative to today at render time
    const now = new Date();
    const exampleOffsets = [61, 183, 365]; // ~2 months, ~6 months, ~1 year ago in days
    const exampleDates = exampleOffsets.map(offset => {
      const d = new Date(now.getTime() - offset * 86400000);
      return { d: d.getDate(), m: d.getMonth() + 1, y: d.getFullYear() };
    });

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
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => {
          const ed = exampleDates[i];
          return `<li onclick="fillExample(${ed.d},${ed.m},${ed.y})">${ex} →</li>`;
        }).join('\n        ')}
      </ul>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroAge">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="stats-strip">
      <div class="stat-item"><div class="stat-num" id="statDays">—</div><div class="stat-lbl">${t.totalDaysLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statMonths">—</div><div class="stat-lbl">${t.totalMonthsLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statWeeksAndDays">—</div><div class="stat-lbl">${t.weeksAndDaysLbl}</div></div>
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
      errFuture: t.errFuture,
    });

    const script = `
var D = ${data};

function fmt(n){ return n.toLocaleString(); }

function fillExample(d, m, y) {
  document.getElementById('day').value = d;
  document.getElementById('month').value = m;
  document.getElementById('year').value = y;
  calculate();
}

function calculate() {
  var d = parseInt(document.getElementById('day').value);
  var m = parseInt(document.getElementById('month').value);
  var y = parseInt(document.getElementById('year').value);
  var err = document.getElementById('errorLine');
  var res = document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');

  if (!d || !m || !y || d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2026) {
    err.textContent = D.errInvalid; err.classList.add('show'); return;
  }
  var bday = new Date(y, m - 1, d);
  if (isNaN(bday) || bday.getDate() !== d) {
    err.textContent = D.errInvalid; err.classList.add('show'); return;
  }
  var today = new Date(); today.setHours(0, 0, 0, 0);
  if (bday > today) { err.textContent = D.errFuture; err.classList.add('show'); return; }

  var totalDays = Math.floor((today - bday) / 86400000);
  var totalWeeks = Math.floor(totalDays / 7);
  var remainDays = totalDays % 7;
  var totalMonthsApprox = Math.floor((totalDays / 30.44) * 10) / 10;

  document.getElementById('heroAge').textContent = totalWeeks;
  document.getElementById('statDays').textContent = fmt(totalDays);
  document.getElementById('statMonths').textContent = totalMonthsApprox;
  document.getElementById('statWeeksAndDays').textContent = totalWeeks + 'w ' + remainDays + 'd';

  res.classList.add('show');
  res.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('keydown', function(e){ if(e.key==='Enter') calculate(); });
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
