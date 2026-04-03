// Dog Age Calculator

const T = {
  en: {
    title: 'Dog Age Calculator – Convert Dog Years to Human Years | DateCalc.app',
    metaDesc: 'How old is your dog in human years? Enter your dog\'s age and breed size for an accurate dog-to-human age conversion.',
    kicker: 'Dog Age Calculator',
    headline: 'How old is<br>my <em>dog</em>?',
    subhead: 'Convert your dog\'s age to human years based on breed size.',
    dogAgeLabel: 'Dog\'s age (years)',
    sizeLabel: 'Breed size',
    sizes: { small: 'Small (under 10 kg)', medium: 'Medium (10–25 kg)', large: 'Large (25–45 kg)', giant: 'Giant (over 45 kg)' },
    calcBtn: '→ Convert',
    tipText: '"Dogs don\'t count years. They count belly rubs."',
    examples: ['Labrador, 3 years', 'Chihuahua, 8 years', 'German Shepherd, 5 years'],
    resultsHeader: 'Your dog\'s age',
    heroSuffix: 'human years',
    dogYearsLbl: 'Dog years', lifeStage: 'Life stage', sizeResult: 'Breed size', formula: 'Formula used',
    stages: ['Puppy','Young Adult','Adult','Mature','Senior','Geriatric'],
    stageYears: [1, 3, 7, 10, 12, 15],
    errInvalid: '→ Please enter a valid dog age (1–30).',
    seoH2a: 'How to convert dog years to human years',
    seoP1: 'The old "multiply by 7" rule is a myth rooted in the simple observation that humans live about 7 times longer than dogs on average. In reality, dogs age much faster in their early years and more slowly later on. Year 1 of a dog\'s life equals roughly 15 human years because puppies reach sexual maturity, grow their adult teeth, and develop full motor skills all within 12 months. Year 2 adds about 9 more years (bringing the total to 24), as dogs reach full social and emotional maturity. After that, each additional year adds 4–7 human years depending on breed size. A 3-year-old Labrador retriever is the equivalent of a 32-year-old human. A 10-year-old Chihuahua is about 56. This calculator uses the breed-size-adjusted formula endorsed by veterinarians and popularized by the American Kennel Club.',
    seoH2b: 'Why do larger dogs age faster?',
    seoP2: 'Large and giant breeds have shorter average lifespans (8–10 years for giants like Great Danes) compared to small breeds (14–16 years for Chihuahuas and Toy Poodles). Scientists believe this is because larger dogs grow much faster in puppyhood, which accelerates oxidative stress and cellular aging processes. A study published in the American Naturalist found that every 4.4 lbs (2 kg) of extra body mass reduced life expectancy by about one month. Giant breeds like Saint Bernards and Irish Wolfhounds are considered senior at just 5–6 years, while a small terrier might not reach senior status until 10. Understanding your dog\'s life stage helps you schedule the right veterinary screenings — senior dogs benefit from biannual check-ups and bloodwork to catch age-related conditions early.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', label: 'American Kennel Club – How to Calculate Dog Years' },
    faqs: [
      { q: 'How old is my dog in human years?', a: 'Use the size-adjusted formula: year 1 = 15 human years, year 2 adds 9 (total 24), then each additional year adds 4 years for small breeds, 5 for medium, 6 for large, and 7 for giant breeds. Enter your dog\'s age and breed size above for an instant result.' },
      { q: 'Is the "7 dog years = 1 human year" rule a myth?', a: 'Yes, it is an oversimplification. The ratio varies dramatically by age: a 1-year-old dog is more like a 15-year-old human, not a 7-year-old. The 1:7 rule is roughly accurate only around age 7 for medium dogs, which is why it became popular. For any other age or breed size, the adjusted formula in this calculator is far more accurate.' },
      { q: 'How old is a 7-year-old dog in human years?', a: 'A 7-year-old medium dog (10–25 kg) is approximately 49 human years old. A large dog (25–45 kg) would be 51, and a small dog would be 47. The old "times 7" rule would give 49 for all, which is roughly correct at this age but inaccurate for young dogs.' },
      { q: 'How old is a 1-year-old dog in human years?', a: 'A 1-year-old dog is roughly equivalent to a 15-year-old human. At this age, dogs are fully sexually mature and have reached about 90% of their adult size.' },
      { q: 'What age is considered senior for a dog?', a: 'It depends on breed size. Small breeds (under 10 kg) are considered senior around 10–12 years. Medium breeds reach senior status at about 8–10 years, large breeds at 7–8 years, and giant breeds as early as 5–6 years. Senior dogs benefit from more frequent vet check-ups and age-appropriate nutrition.' },
      { q: 'How long do dogs live on average?', a: 'Average dog lifespan ranges from about 8 years for giant breeds like Great Danes to 16 or more years for small breeds like Chihuahuas and Dachshunds. Mixed-breed dogs often live slightly longer than purebreds due to hybrid vigor. Diet, exercise, and veterinary care all significantly affect longevity.' },
      { q: 'What is the dog age for a Labrador?', a: 'Labradors are a large breed (25–35 kg), so they age at roughly 6 human years per dog year after age 2. A 3-year-old Labrador is about 30 in human years, a 7-year-old is roughly 48, and a 10-year-old Labrador is about 66 in human years. Labs are considered senior at around 7–8 years.' },
      { q: 'What is the oldest dog ever recorded?', a: 'The oldest dog ever recorded was Bobi, a Rafeiro do Alentejo from Portugal, who lived to 31 years and 165 days, certified by Guinness World Records.' },
    ],
  },
  fr: {
    title: 'Calculateur d\'âge du chien – Convertir les années chien en années humaines | DateCalc.app',
    metaDesc: 'Quel âge a votre chien en années humaines ? Entrez l\'âge de votre chien et sa taille pour une conversion précise.',
    kicker: 'Calculateur d\'âge du chien',
    headline: 'Quel âge a<br>mon <em>chien</em> ?',
    subhead: 'Convertissez l\'âge de votre chien en années humaines selon sa taille.',
    dogAgeLabel: 'Âge du chien (années)',
    sizeLabel: 'Taille de la race',
    sizes: { small: 'Petit (moins de 10 kg)', medium: 'Moyen (10–25 kg)', large: 'Grand (25–45 kg)', giant: 'Géant (plus de 45 kg)' },
    calcBtn: '→ Convertir',
    tipText: '"Les chiens ne comptent pas les années. Ils comptent les câlins."',
    examples: ['Labrador, 3 ans', 'Chihuahua, 8 ans', 'Berger allemand, 5 ans'],
    resultsHeader: 'L\'âge de votre chien',
    heroSuffix: 'ans (humain)',
    dogYearsLbl: 'Années chien', lifeStage: 'Stade de vie', sizeResult: 'Taille', formula: 'Formule utilisée',
    stages: ['Chiot','Jeune adulte','Adulte','Mature','Senior','Gériatrique'],
    stageYears: [1, 3, 7, 10, 12, 15],
    errInvalid: '→ Veuillez entrer un âge valide (1–30).',
    seoH2a: 'Comment convertir les années chien en années humaines',
    seoP1: 'La règle "multiplier par 7" est un mythe. En réalité, les chiens vieillissent beaucoup plus vite dans leurs premières années et plus lentement ensuite. La première année d\'un chien équivaut à environ 15 ans humains, car les chiots atteignent la maturité sexuelle, développent leurs dents adultes et toutes leurs capacités motrices en seulement 12 mois. La deuxième année ajoute environ 9 ans (24 au total), puis chaque année suivante ajoute 4 à 7 ans selon la taille de la race. Un Labrador de 3 ans correspond à un humain d\'environ 32 ans. Un Chihuahua de 10 ans équivaut à environ 56 ans. Ce calculateur utilise la formule ajustée selon la taille, recommandée par les vétérinaires.',
    seoH2b: 'Pourquoi les grands chiens vieillissent-ils plus vite ?',
    seoP2: 'Les grandes et très grandes races ont une espérance de vie plus courte (8–10 ans pour les géants comme le Dogue allemand) par rapport aux petites races (14–16 ans pour les Chihuahuas). Les scientifiques pensent que cela est dû à une croissance beaucoup plus rapide en phase de chiot, ce qui accélère le stress oxydatif et le vieillissement cellulaire. Une étude publiée dans l\'American Naturalist a révélé que chaque 2 kg supplémentaires réduisaient l\'espérance de vie d\'environ un mois. Les races géantes comme le Saint-Bernard sont considérées seniors dès 5–6 ans, tandis qu\'un petit terrier n\'atteint ce stade qu\'à 10 ans. Connaître le stade de vie de votre chien aide à planifier les bilans vétérinaires appropriés.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', label: 'American Kennel Club – Comment calculer les années chien' },
    faqs: [
      { q: 'Quel âge a mon chien en années humaines ?', a: 'Utilisez la formule ajustée selon la taille : année 1 = 15 ans humains, année 2 ajoute 9 (total 24), puis chaque année suivante ajoute 4 ans pour les petites races, 5 pour les moyennes, 6 pour les grandes et 7 pour les géantes. Entrez l\'âge et la taille de votre chien ci-dessus pour un résultat immédiat.' },
      { q: 'La règle "7 années chien = 1 année humaine" est-elle un mythe ?', a: 'Oui, c\'est une simplification excessive. Le rapport varie considérablement selon l\'âge : un chien de 1 an correspond à un humain de 15 ans, pas 7. La règle 1:7 n\'est approximativement correcte qu\'autour de 7 ans pour les chiens de taille moyenne. Pour tout autre âge ou taille, la formule ajustée de ce calculateur est bien plus précise.' },
      { q: 'Quel âge a un chien de 7 ans en années humaines ?', a: 'Un chien moyen (10–25 kg) de 7 ans a environ 49 ans humains. Un grand chien aurait 51 ans, un petit chien 47 ans. La règle "fois 7" donne 49 pour tous, ce qui est approximativement correct à cet âge mais inexact pour les jeunes chiens.' },
      { q: 'Quel âge a un chien de 1 an en années humaines ?', a: 'Un chien de 1 an équivaut à environ 15 ans humains. À cet âge, les chiens sont sexuellement matures et ont atteint environ 90 % de leur taille adulte.' },
      { q: 'À quel âge un chien est-il considéré senior ?', a: 'Cela dépend de la taille. Les petites races (moins de 10 kg) sont considérées seniors vers 10–12 ans. Les races moyennes atteignent ce stade à 8–10 ans, les grandes à 7–8 ans, et les géantes dès 5–6 ans. Les chiens seniors bénéficient de visites vétérinaires plus fréquentes et d\'une nutrition adaptée à leur âge.' },
      { q: 'Quelle est l\'espérance de vie d\'un chien ?', a: 'L\'espérance de vie moyenne varie d\'environ 8 ans pour les races géantes comme le Dogue allemand à 16 ans ou plus pour les petites races comme les Chihuahuas. Les chiens croisés vivent souvent légèrement plus longtemps que les chiens de race pure. L\'alimentation, l\'exercice et les soins vétérinaires influencent considérablement la longévité.' },
      { q: 'Quel est l\'âge d\'un Labrador en années humaines ?', a: 'Les Labradors sont une grande race (25–35 kg), ils vieillissent donc d\'environ 6 ans humains par année chien après l\'âge de 2 ans. Un Labrador de 3 ans a environ 30 ans humains, un Labrador de 7 ans environ 48 ans, et un Labrador de 10 ans environ 66 ans. Les Labradors sont considérés seniors vers 7–8 ans.' },
      { q: 'Quel est le chien le plus vieux jamais enregistré ?', a: 'Le chien le plus vieux jamais enregistré était Bobi, un Rafeiro do Alentejo portugais, qui a vécu 31 ans et 165 jours.' },
    ],
  },
  es: {
    title: 'Calculadora de edad del perro – Convertir años perro a años humanos | DateCalc.app',
    metaDesc: '¿Cuántos años tiene tu perro en años humanos? Ingresa la edad de tu perro y su tamaño para una conversión precisa.',
    kicker: 'Calculadora de edad del perro',
    headline: '¿Cuántos años<br>tiene mi <em>perro</em>?',
    subhead: 'Convierte la edad de tu perro a años humanos según el tamaño de la raza.',
    dogAgeLabel: 'Edad del perro (años)',
    sizeLabel: 'Tamaño de la raza',
    sizes: { small: 'Pequeño (menos de 10 kg)', medium: 'Mediano (10–25 kg)', large: 'Grande (25–45 kg)', giant: 'Gigante (más de 45 kg)' },
    calcBtn: '→ Convertir',
    tipText: '"Los perros no cuentan los años. Cuentan los mimos."',
    examples: ['Labrador, 3 años', 'Chihuahua, 8 años', 'Pastor alemán, 5 años'],
    resultsHeader: 'La edad de tu perro',
    heroSuffix: 'años (humano)',
    dogYearsLbl: 'Años perro', lifeStage: 'Etapa de vida', sizeResult: 'Tamaño', formula: 'Fórmula usada',
    stages: ['Cachorro','Adulto joven','Adulto','Maduro','Senior','Geriátrico'],
    stageYears: [1, 3, 7, 10, 12, 15],
    errInvalid: '→ Por favor ingresa una edad válida (1–30).',
    seoH2a: 'Cómo convertir años de perro a años humanos',
    seoP1: 'La regla de "multiplicar por 7" es un mito. En realidad, los perros envejecen mucho más rápido en sus primeros años y más lentamente después. El primer año de vida de un perro equivale a aproximadamente 15 años humanos, ya que los cachorros alcanzan la madurez sexual, desarrollan sus dientes adultos y todas sus habilidades motoras en solo 12 meses. El segundo año agrega unos 9 años más (24 en total), luego cada año adicional agrega 4–7 años según el tamaño de la raza. Un Labrador de 3 años equivale a un humano de unos 32 años. Un Chihuahua de 10 años equivale a unos 56. Esta calculadora usa la fórmula ajustada por tamaño recomendada por veterinarios.',
    seoH2b: '¿Por qué los perros grandes envejecen más rápido?',
    seoP2: 'Las razas grandes y gigantes tienen una esperanza de vida más corta (8–10 años para gigantes como el Gran Danés) en comparación con las razas pequeñas (14–16 años para los Chihuahuas). Los científicos creen que esto se debe a que los perros más grandes crecen mucho más rápido en la etapa de cachorro, lo que acelera el estrés oxidativo y el envejecimiento celular. Un estudio publicado en el American Naturalist encontró que cada 2 kg adicionales de masa corporal reducían la esperanza de vida aproximadamente un mes. Las razas gigantes como el San Bernardo se consideran senior a los 5–6 años, mientras que un terrier pequeño no alcanza ese estado hasta los 10. Conocer la etapa de vida de tu perro ayuda a planificar las revisiones veterinarias adecuadas.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', label: 'American Kennel Club – Cómo calcular los años del perro' },
    faqs: [
      { q: '¿Cuántos años tiene mi perro en años humanos?', a: 'Usa la fórmula ajustada por tamaño: año 1 = 15 años humanos, año 2 agrega 9 (total 24), luego cada año adicional agrega 4 para razas pequeñas, 5 para medianas, 6 para grandes y 7 para gigantes. Ingresa la edad y el tamaño de tu perro arriba para un resultado inmediato.' },
      { q: '¿Es un mito que 7 años perro equivalen a 1 año humano?', a: 'Sí, es una simplificación excesiva. La proporción varía enormemente según la edad: un perro de 1 año se parece más a un humano de 15 años, no de 7. La regla 1:7 solo es aproximadamente correcta alrededor de los 7 años para perros medianos. Para cualquier otra edad o tamaño, la fórmula ajustada de esta calculadora es mucho más precisa.' },
      { q: '¿Cuántos años tiene un perro de 7 años en años humanos?', a: 'Un perro mediano (10–25 kg) de 7 años tiene aproximadamente 49 años humanos. Un perro grande tendría 51, y uno pequeño 47.' },
      { q: '¿Cuántos años tiene un perro de 1 año en años humanos?', a: 'Un perro de 1 año equivale a aproximadamente 15 años humanos. A esta edad, los perros son sexualmente maduros y han alcanzado el 90% de su tamaño adulto.' },
      { q: '¿A qué edad se considera senior un perro?', a: 'Depende del tamaño. Las razas pequeñas (menos de 10 kg) se consideran senior alrededor de los 10–12 años. Las razas medianas alcanzan esta etapa a los 8–10 años, las grandes a los 7–8 años, y las gigantes a los 5–6 años. Los perros senior se benefician de visitas veterinarias más frecuentes y nutrición adaptada a su edad.' },
      { q: '¿Cuánto viven los perros en promedio?', a: 'La esperanza de vida promedio varía de unos 8 años para razas gigantes como el Gran Danés a 16 años o más para razas pequeñas como los Chihuahuas. Los perros mestizos suelen vivir un poco más que los de raza pura. La dieta, el ejercicio y la atención veterinaria afectan significativamente la longevidad.' },
      { q: '¿Cuántos años humanos tiene un Labrador?', a: 'Los Labradores son una raza grande (25–35 kg), por lo que envejecen aproximadamente 6 años humanos por año perro después de los 2 años. Un Labrador de 3 años tiene unos 30 años humanos, uno de 7 años unos 48, y uno de 10 años unos 66 años humanos. Los Labradores se consideran senior alrededor de los 7–8 años.' },
      { q: '¿Cuál es el perro más viejo jamás registrado?', a: 'El perro más viejo jamás registrado fue Bobi, un Rafeiro do Alentejo de Portugal, que vivió 31 años y 165 días.' },
    ],
  },
  pt: {
    title: 'Calculadora de Idade do Cachorro em Anos Humanos | DateCalc',
    metaDesc: 'Converta a idade do seu cachorro em anos humanos. Baseado no tamanho do cão — raças pequenas, médias e grandes. Grátis e instantâneo.',
    kicker: 'Idade do Cachorro',
    headline: 'Calculadora de<br><em>Idade do<br>Cachorro</em>',
    subhead: 'Converta a idade do seu cachorro em anos humanos equivalentes',
    resultsHeader: 'Idade em anos humanos',
    errInvalid: 'Por favor, insira uma idade válida entre 0 e 30.',
    labelAge: 'Idade do cachorro (anos)',
    labelSize: 'Tamanho',
    sizes: { small: 'Pequeno (menos de 10 kg)', medium: 'Médio (10–25 kg)', large: 'Grande (25–45 kg)', giant: 'Gigante (mais de 45 kg)' },
    btnCalc: '→ CALCULAR',
    unitHumanYears: 'anos humanos',
    examples: ['Labrador, 3 anos', 'Chihuahua, 8 anos', 'Pastor alemão, 5 anos'],
    seoH2a: 'Como converter a idade do cachorro em anos humanos?',
    seoP1: 'A conversão de idade canina em anos humanos não é simples como multiplicar por 7. Cães amadurecem rapidamente nos primeiros anos e depois mais devagar. Além disso, cães de raças grandes envelhecem mais rápido que raças pequenas. Esta calculadora usa tabelas científicas baseadas no tamanho do animal.',
    seoH2b: 'Por que o tamanho importa no cálculo?',
    seoP2: 'Raças grandes têm vida mais curta que raças pequenas. Um cão grande de 10 anos equivale a cerca de 66 anos humanos, enquanto um cão pequeno de 10 anos equivale a cerca de 56 anos humanos.',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      { q: 'Meu cachorro tem 7 anos — quantos anos humanos são?', a: 'Depende do tamanho. Um cachorro pequeno de 7 anos tem cerca de 44 anos humanos. Um cachorro grande de 7 anos tem cerca de 50 anos humanos. Use a calculadora para o número exato.' },
      { q: 'Por que não basta multiplicar por 7?', a: 'A regra dos 7 é uma simplificação. Cães amadurecem muito mais rápido no início da vida — o primeiro ano canino equivale a cerca de 15 anos humanos. Depois o ritmo diminui.' },
      { q: 'Qual é a expectativa de vida dos cães?', a: 'Varia muito por raça e tamanho. Raças pequenas vivem em média 12–16 anos. Raças grandes vivem em média 8–12 anos.' },
    ],
    source: { url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', label: 'American Kennel Club – Calculadora de Idade Canina' },
  },
  de: {
    title: 'Hund-Altersrechner – Hundejahre in Menschenjahre umrechnen | DateCalc.app',
    metaDesc: 'Wie alt ist dein Hund in Menschenjahren? Gib das Alter deines Hundes und die Rassengroße ein für eine genaue Umrechnung.',
    kicker: 'Hund-Altersrechner',
    headline: 'Wie alt ist<br>mein <em>Hund</em>?',
    subhead: 'Rechne das Alter deines Hundes basierend auf der Rassengröße in Menschenjahre um.',
    dogAgeLabel: 'Alter des Hundes (Jahre)',
    sizeLabel: 'Rassengröße',
    sizes: { small: 'Klein (unter 10 kg)', medium: 'Mittel (10–25 kg)', large: 'Groß (25–45 kg)', giant: 'Riesig (über 45 kg)' },
    calcBtn: '→ BERECHNEN',
    tipText: '"Hunde zählen keine Jahre. Sie zählen Bauchkrauler."',
    examples: ['Labrador, 3 Jahre', 'Chihuahua, 8 Jahre', 'Schäferhund, 5 Jahre'],
    resultsHeader: 'Das Alter deines Hundes',
    heroSuffix: 'Menschenjahre',
    dogYearsLbl: 'Hundejahre', lifeStage: 'Lebensphase', sizeResult: 'Rassengröße', formula: 'Verwendete Formel',
    stages: ['Welpe','Junger Erwachsener','Erwachsen','Reif','Senior','Geriatrisch'],
    stageYears: [1, 3, 7, 10, 12, 15],
    errInvalid: '→ Bitte gib ein gültiges Alter ein (1–30).',
    seoH2a: 'Wie rechnet man Hundejahre in Menschenjahre um?',
    seoP1: 'Die alte Regel „mit 7 multiplizieren" ist ein Mythos. In Wirklichkeit altern Hunde in ihren frühen Jahren viel schneller und später langsamer. Das erste Lebensjahr eines Hundes entspricht etwa 15 Menschenjahren, da Welpen in nur 12 Monaten die Geschlechtsreife erreichen, ihre Erwachsenenzähne entwickeln und vollständige motorische Fähigkeiten ausbilden. Das zweite Jahr fügt etwa 9 weitere Jahre hinzu (insgesamt 24), da Hunde die volle soziale und emotionale Reife erreichen. Danach fügt jedes zusätzliche Jahr je nach Rassengröße 4–7 Menschenjahre hinzu. Ein 3-jähriger Labrador entspricht einem 32-jährigen Menschen.',
    seoH2b: 'Warum altern größere Hunde schneller?',
    seoP2: 'Große und riesige Rassen haben eine kürzere durchschnittliche Lebensdauer (8–10 Jahre für Riesen wie die Deutsche Dogge) im Vergleich zu kleinen Rassen (14–16 Jahre für Chihuahuas). Wissenschaftler glauben, dass dies daran liegt, dass größere Hunde in der Welpenphase viel schneller wachsen, was oxidativen Stress und zelluläre Alterungsprozesse beschleunigt. Riesige Rassen wie Bernhardiner und Irische Wolfshunde gelten schon mit 5–6 Jahren als Senior, während ein kleiner Terrier diesen Status erst mit 10 Jahren erreicht.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', label: 'American Kennel Club – Hundejahre berechnen' },
    faqs: [
      { q: 'Wie alt ist mein Hund in Menschenjahren?', a: 'Verwende die größenangepasste Formel: Jahr 1 = 15 Menschenjahre, Jahr 2 fügt 9 hinzu (insgesamt 24), dann fügt jedes zusätzliche Jahr 4 Jahre für kleine Rassen, 5 für mittlere, 6 für große und 7 für Riesenrassen hinzu. Gib oben das Alter und die Größe deines Hundes ein für ein sofortiges Ergebnis.' },
      { q: 'Ist die Regel „7 Hundejahre = 1 Menschenjahr" ein Mythos?', a: 'Ja, es ist eine Vereinfachung. Das Verhältnis variiert stark nach Alter: Ein 1-jähriger Hund entspricht eher einem 15-jährigen Menschen, nicht einem 7-jährigen. Die 1:7-Regel ist nur bei etwa 7 Jahren für mittelgroße Hunde ungefähr korrekt. Für jedes andere Alter oder jede andere Rassengröße ist die angepasste Formel in diesem Rechner viel genauer.' },
      { q: 'Wie alt ist ein 7-jähriger Hund in Menschenjahren?', a: 'Ein 7-jähriger mittelgroßer Hund (10–25 kg) ist ungefähr 49 Menschenjahre alt. Ein großer Hund wäre 51, ein kleiner Hund 47. Die alte „mal 7"-Regel würde 49 für alle ergeben, was in diesem Alter ungefähr stimmt, aber für junge Hunde ungenau ist.' },
      { q: 'Wie alt ist ein 1-jähriger Hund in Menschenjahren?', a: 'Ein 1-jähriger Hund entspricht ungefähr einem 15-jährigen Menschen. In diesem Alter sind Hunde vollständig geschlechtsreif und haben etwa 90 % ihrer Erwachsenengröße erreicht.' },
      { q: 'Ab welchem Alter gilt ein Hund als Senior?', a: 'Das hängt von der Rassengröße ab. Kleine Rassen (unter 10 kg) gelten um 10–12 Jahre als Senior. Mittelgroße Rassen erreichen den Senior-Status bei etwa 8–10 Jahren, große bei 7–8 Jahren und Riesenrassen bereits bei 5–6 Jahren. Senior-Hunde profitieren von häufigeren Tierarztbesuchen.' },
      { q: 'Wie lange leben Hunde im Durchschnitt?', a: 'Die durchschnittliche Lebenserwartung von Hunden reicht von etwa 8 Jahren bei Riesenrassen wie der Deutschen Dogge bis zu 16 oder mehr Jahren bei kleinen Rassen wie Chihuahuas. Mischlingshunde leben oft etwas länger als Reinrassige aufgrund von Mischungsheterosis.' },
      { q: 'Wie alt ist ein Labrador in Menschenjahren?', a: 'Labradors sind eine große Rasse (25–35 kg) und altern nach dem Alter von 2 Jahren mit etwa 6 Menschenjahren pro Hundejahr. Ein 3-jähriger Labrador hat etwa 30 Menschenjahre, ein 7-jähriger etwa 48 und ein 10-jähriger etwa 66 Menschenjahre. Labradors gelten bei etwa 7–8 Jahren als Senior.' },
      { q: 'Was war der älteste jemals aufgezeichnete Hund?', a: 'Der älteste jemals aufgezeichnete Hund war Bobi, ein Rafeiro do Alentejo aus Portugal, der 31 Jahre und 165 Tage alt wurde, zertifiziert vom Guinness-Weltrekord.' },
    ],
  },
  it: {
    title: 'Calcolatore Età Cane – Anni del Cane in Anni Umani | DateCalc.app',
    metaDesc: 'Quanti anni ha il tuo cane in anni umani? Inserisci l\'età del tuo cane e la taglia della razza per una conversione accurata.',
    kicker: 'Calcolatore età cane',
    headline: 'Quanti anni ha<br>il mio <em>cane</em>?',
    subhead: 'Converti l\'età del tuo cane in anni umani in base alla taglia della razza.',
    dogAgeLabel: 'Età del cane (anni)',
    sizeLabel: 'Taglia della razza',
    sizes: { small: 'Piccolo (meno di 10 kg)', medium: 'Medio (10–25 kg)', large: 'Grande (25–45 kg)', giant: 'Gigante (oltre 45 kg)' },
    calcBtn: '→ CALCOLA',
    tipText: '"I cani non contano gli anni. Contano le coccole."',
    examples: ['Labrador, 3 anni', 'Chihuahua, 8 anni', 'Pastore tedesco, 5 anni'],
    resultsHeader: 'L\'età del tuo cane',
    heroSuffix: 'anni umani',
    dogYearsLbl: 'Anni cane', lifeStage: 'Fase della vita', sizeResult: 'Taglia', formula: 'Formula usata',
    stages: ['Cucciolo','Giovane adulto','Adulto','Maturo','Senior','Geriatrico'],
    stageYears: [1, 3, 7, 10, 12, 15],
    errInvalid: '→ Inserisci un\'età valida (1–30).',
    seoH2a: 'Come convertire gli anni del cane in anni umani',
    seoP1: 'La vecchia regola "moltiplica per 7" è un mito. In realtà, i cani invecchiano molto più velocemente nei primi anni e più lentamente in seguito. Il primo anno di vita di un cane equivale a circa 15 anni umani, poiché i cuccioli raggiungono la maturità sessuale, sviluppano i denti adulti e acquisiscono le capacità motorie complete in soli 12 mesi. Il secondo anno aggiunge circa 9 anni (24 in totale), poi ogni anno aggiuntivo aggiunge 4–7 anni umani a seconda della taglia. Un Labrador di 3 anni equivale a un umano di circa 32 anni.',
    seoH2b: 'Perché i cani più grandi invecchiano più velocemente?',
    seoP2: 'Le razze grandi e giganti hanno una durata di vita media più breve (8–10 anni per i giganti come il Danese) rispetto alle razze piccole (14–16 anni per i Chihuahua). Gli scienziati ritengono che ciò sia dovuto al fatto che i cani più grandi crescono molto più velocemente nel periodo cucciolo, il che accelera lo stress ossidativo e i processi di invecchiamento cellulare. Razze giganti come il San Bernardo sono considerate senior già a 5–6 anni, mentre un piccolo terrier potrebbe non raggiungere lo stato senior fino ai 10 anni.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', label: 'American Kennel Club – Come calcolare gli anni del cane' },
    faqs: [
      { q: 'Quanti anni ha il mio cane in anni umani?', a: 'Usa la formula adattata alla taglia: anno 1 = 15 anni umani, anno 2 aggiunge 9 (totale 24), poi ogni anno aggiuntivo aggiunge 4 anni per le razze piccole, 5 per le medie, 6 per le grandi e 7 per le giganti. Inserisci l\'età e la taglia del tuo cane sopra per un risultato immediato.' },
      { q: 'La regola "7 anni cane = 1 anno umano" è un mito?', a: 'Sì, è una semplificazione eccessiva. Il rapporto varia enormemente per età: un cane di 1 anno assomiglia più a un umano di 15 anni, non di 7. La regola 1:7 è approssimativamente corretta solo intorno ai 7 anni per i cani di taglia media. Per qualsiasi altra età o taglia, la formula adattata di questo calcolatore è molto più accurata.' },
      { q: 'Quanti anni ha un cane di 7 anni in anni umani?', a: 'Un cane di taglia media (10–25 kg) di 7 anni ha circa 49 anni umani. Un cane grande avrebbe 51, uno piccolo 47.' },
      { q: 'Quanti anni ha un cane di 1 anno in anni umani?', a: 'Un cane di 1 anno equivale a circa 15 anni umani. A questa età, i cani sono completamente sessualmente maturi e hanno raggiunto circa il 90% della loro taglia adulta.' },
      { q: 'A che età un cane è considerato senior?', a: 'Dipende dalla taglia della razza. Le razze piccole (meno di 10 kg) sono considerate senior intorno ai 10–12 anni. Le razze medie raggiungono lo status senior a 8–10 anni, le grandi a 7–8 anni, e le giganti già a 5–6 anni. I cani senior beneficiano di visite veterinarie più frequenti.' },
      { q: 'Quanto vivono i cani in media?', a: 'La durata di vita media dei cani varia da circa 8 anni per le razze giganti come il Danese a 16 o più anni per le razze piccole come i Chihuahua. I cani meticci spesso vivono un po\' più a lungo dei purosangue grazie alla diversità genetica.' },
      { q: 'Quanti anni ha un Labrador in anni umani?', a: 'I Labrador sono una razza grande (25–35 kg), quindi invecchiano di circa 6 anni umani per anno cane dopo i 2 anni. Un Labrador di 3 anni ha circa 30 anni umani, uno di 7 anni circa 48, e uno di 10 anni circa 66 anni umani. I Labrador sono considerati senior intorno ai 7–8 anni.' },
      { q: 'Qual è il cane più vecchio mai registrato?', a: 'Il cane più vecchio mai registrato era Bobi, un Rafeiro do Alentejo del Portogallo, che è vissuto 31 anni e 165 giorni, certificato dal Guinness World Records.' },
    ],
  },
  pl: {
    title: 'Kalkulator Wieku Psa – Zamień Lata Psa na Lata Ludzkie | DateCalc.app',
    metaDesc: 'Ile lat ma twój pies w latach ludzkich? Wprowadź wiek psa i rozmiar rasy, aby uzyskać dokładne przeliczenie.',
    kicker: 'Kalkulator wieku psa',
    headline: 'Ile lat<br>ma mój <em>pies</em>?',
    subhead: 'Przelicz wiek swojego psa na lata ludzkie w oparciu o rozmiar rasy.',
    dogAgeLabel: 'Wiek psa (lata)',
    sizeLabel: 'Rozmiar rasy',
    sizes: { small: 'Mały (poniżej 10 kg)', medium: 'Średni (10–25 kg)', large: 'Duży (25–45 kg)', giant: 'Olbrzym (ponad 45 kg)' },
    calcBtn: '→ OBLICZ',
    tipText: '"Psy nie liczą lat. Liczą drapanie po brzuchu."',
    examples: ['Labrador, 3 lata', 'Chihuahua, 8 lat', 'Owczarek, 5 lat'],
    resultsHeader: 'Wiek twojego psa',
    heroSuffix: 'lat ludzkich',
    dogYearsLbl: 'Psie lata', lifeStage: 'Etap życia', sizeResult: 'Rozmiar rasy', formula: 'Użyta formuła',
    stages: ['Szczenię','Młody dorosły','Dorosły','Dojrzały','Senior','Geriatryczny'],
    stageYears: [1, 3, 7, 10, 12, 15],
    errInvalid: '→ Wprowadź prawidłowy wiek psa (1–30).',
    seoH2a: 'Jak przeliczać lata psa na lata ludzkie?',
    seoP1: 'Stara zasada „mnożenia przez 7" to mit. W rzeczywistości psy starzeją się znacznie szybciej we wczesnych latach, a wolniej później. Pierwszy rok życia psa odpowiada około 15 ludzkim latom, ponieważ szczenięta osiągają dojrzałość płciową, rozwijają dorosłe zęby i pełne zdolności motoryczne w ciągu zaledwie 12 miesięcy. Drugi rok dodaje około 9 lat (łącznie 24), po czym każdy kolejny rok dodaje 4–7 ludzkich lat w zależności od rozmiaru rasy. 3-letni labrador odpowiada 32-letniemu człowiekowi.',
    seoH2b: 'Dlaczego większe psy starzeją się szybciej?',
    seoP2: 'Duże i olbrzymie rasy mają krótszą przeciętną długość życia (8–10 lat dla olbrzymów jak dog niemiecki) w porównaniu do małych ras (14–16 lat dla chihuahua). Naukowcy uważają, że wynika to z faktu, że większe psy rosną znacznie szybciej w okresie szczeniaka, co przyspiesza stres oksydacyjny i procesy starzenia komórkowego. Olbrzymie rasy jak bernardyn czy chart irlandzki są uważane za seniory już w wieku 5–6 lat, podczas gdy mały terier może nie osiągnąć tego statusu do 10 lat.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', label: 'American Kennel Club – Jak obliczać lata psa' },
    faqs: [
      { q: 'Ile lat ma mój pies w latach ludzkich?', a: 'Użyj formuły dostosowanej do rozmiaru: rok 1 = 15 ludzkich lat, rok 2 dodaje 9 (razem 24), potem każdy dodatkowy rok dodaje 4 lata dla małych ras, 5 dla średnich, 6 dla dużych i 7 dla olbrzymich. Wprowadź wiek i rozmiar psa powyżej, aby uzyskać natychmiastowy wynik.' },
      { q: 'Czy zasada „7 psich lat = 1 ludzki rok" to mit?', a: 'Tak, to uproszczenie. Stosunek dramatycznie zmienia się z wiekiem: 1-roczny pies jest bardziej jak 15-letni człowiek, nie 7-letni. Reguła 1:7 jest w przybliżeniu poprawna tylko około 7 lat dla psów średniej wielkości. Dla każdego innego wieku lub rozmiaru rasy, dostosowana formuła w tym kalkulatorze jest znacznie dokładniejsza.' },
      { q: 'Ile lat ma 7-letni pies w latach ludzkich?', a: '7-letni pies średniej wielkości (10–25 kg) ma około 49 lat ludzkich. Duży pies miałby 51, mały pies 47.' },
      { q: 'Ile lat ma roczny pies w latach ludzkich?', a: 'Roczny pies odpowiada mniej więcej 15-letniemu człowiekowi. W tym wieku psy są w pełni dojrzałe płciowo i osiągnęły około 90% swojego dorosłego rozmiaru.' },
      { q: 'W jakim wieku pies jest uważany za seniora?', a: 'To zależy od rozmiaru rasy. Małe rasy (poniżej 10 kg) są uważane za seniorów w wieku około 10–12 lat. Rasy średnie osiągają ten status w 8–10 latach, duże w 7–8 latach, a olbrzymie już w 5–6 latach. Psy seniorzy korzystają z częstszych wizyt weterynaryjnych.' },
      { q: 'Jak długo żyją psy średnio?', a: 'Średnia długość życia psa waha się od około 8 lat dla olbrzymich ras jak dog niemiecki do 16 lub więcej lat dla małych ras jak chihuahua. Psy mieszane często żyją nieco dłużej niż rasowe dzięki heterozji hybrydowej.' },
      { q: 'Ile lat ludzkich ma labrador?', a: 'Labradory to duże rasy (25–35 kg), więc starzeją się z szybkością około 6 ludzkich lat na psie rok po 2 roku życia. 3-letni labrador ma około 30 ludzkich lat, 7-letni około 48, a 10-letni labrador około 66 lat ludzkich. Labradory są uważane za seniorów w wieku około 7–8 lat.' },
      { q: 'Jaki był najstarszy kiedykolwiek zarejestrowany pies?', a: 'Najstarszym kiedykolwiek zarejestrowanym psem był Bobi, rafeiro do Alentejo z Portugalii, który żył 31 lat i 165 dni, certyfikowany przez Księgę Rekordów Guinnessa.' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'dog-age-calculator', slugs: { en: 'dog-age-calculator', fr: 'fr/calculateur-age-chien', es: 'es/calculadora-edad-perro', pt: 'pt/calculadora-idade-cachorro', de: 'de/hund-alter-rechner', it: 'it/calcolatore-eta-cane', pl: 'pl/wiek-psa' } },
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
      <div class="field-label">${t.dogAgeLabel}</div>
      <div class="date-row">
        <input type="number" id="dogAge" placeholder="0" min="0" max="30" inputmode="numeric" oninput="clamp(this,0,30)" style="width:4ch">
      </div>
      <div class="field-label" style="margin-top:1.5rem">${t.sizeLabel}</div>
      <div class="op-row" style="flex-direction:column;gap:.5rem;align-items:flex-start">
        <label style="font-size:.85rem;color:var(--muted);cursor:pointer"><input type="radio" name="size" value="small" style="accent-color:var(--accent)"> ${t.sizes.small}</label>
        <label style="font-size:.85rem;color:var(--muted);cursor:pointer"><input type="radio" name="size" value="medium" checked style="accent-color:var(--accent)"> ${t.sizes.medium}</label>
        <label style="font-size:.85rem;color:var(--muted);cursor:pointer"><input type="radio" name="size" value="large" style="accent-color:var(--accent)"> ${t.sizes.large}</label>
        <label style="font-size:.85rem;color:var(--muted);cursor:pointer"><input type="radio" name="size" value="giant" style="accent-color:var(--accent)"> ${t.sizes.giant}</label>
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => {
          const args = [[3,'medium'],[8,'small'],[5,'large']][i];
          return `<li onclick="fillExample(${args[0]},'${args[1]}')">${ex} →</li>`;
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
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.dogYearsLbl}</div><div class="fact-val" id="ffDogYears">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.lifeStage}</div><div class="fact-val" id="ffStage">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.sizeResult}</div><div class="fact-val" id="ffSize">—</div></div>
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

    const sizeLabels = {
      small: t.sizes.small, medium: t.sizes.medium,
      large: t.sizes.large, giant: t.sizes.giant,
    };
    const data = JSON.stringify({
      errInvalid: t.errInvalid,
      stages: t.stages,
      stageYears: t.stageYears,
      sizeLabels,
    });

    const script = `
var D = ${data};

function dogToHuman(age, size) {
  var perYear = { small:4, medium:5, large:6, giant:7 };
  if (age <= 0) return 0;
  if (age === 1) return 15;
  if (age === 2) return 24;
  return 24 + (age - 2) * perYear[size];
}

function getStage(age) {
  var yrs = D.stageYears;
  for (var i = yrs.length - 1; i >= 0; i--) if (age >= yrs[i]) return D.stages[i];
  return D.stages[0];
}

function fillExample(age, size) {
  document.getElementById('dogAge').value = age;
  document.querySelectorAll('input[name="size"]').forEach(function(r){ r.checked = r.value === size; });
  calculate();
}

function calculate() {
  var age = parseInt(document.getElementById('dogAge').value);
  var size = document.querySelector('input[name="size"]:checked').value;
  var err = document.getElementById('errorLine');
  var res = document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');

  if (!age || age < 1 || age > 30) { err.textContent = D.errInvalid; err.classList.add('show'); return; }

  var human = dogToHuman(age, size);
  document.getElementById('heroAge').textContent = human;
  document.getElementById('ffDogYears').textContent = age;
  document.getElementById('ffStage').textContent = getStage(age);
  document.getElementById('ffSize').textContent = D.sizeLabels[size];
  res.classList.add('show');
  res.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('keydown', function(e){ if(e.key==='Enter') calculate(); });
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
