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
};

module.exports = {
  pages: [
    { id: 'baby-age-calculator', slugs: { en: 'baby-age-calculator', fr: 'fr/calculateur-age-bebe', es: 'es/calculadora-edad-bebe', pt: 'pt/calculadora-idade-bebe', de: 'de/baby-alter-rechner', it: 'it/calcolatore-eta-neonato', pl: 'pl/wiek-niemowlecia' } },
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
