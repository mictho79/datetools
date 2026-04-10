'use strict';
const T = {};

// ── Article 1: what-generation-am-i ──────────────────────
T['what-generation-am-i'] = {
  en: {
    title: 'What Generation Am I? — Complete Generational Guide',
    metaDesc: 'Find out what generation you belong to based on your birth year. Silent Generation, Baby Boomers, Gen X, Millennials, Gen Z, and Gen Alpha explained.',
    kicker: 'GENERATIONAL GUIDE',
    h1: 'What Generation Am I?',
    intro: 'Your generation is determined by your birth year. Each generation grew up during a distinct era, shaped by specific historical events, technology, and cultural shifts.',
    sections: [
      {
        h2: 'Generational Birth Year Ranges',
        body: '<p>Researchers and demographers generally define the generations as follows:</p>',
        table: `<table>
<tr><th>Generation</th><th>Birth Years</th><th>Age in 2026</th></tr>
<tr><td>The Silent Generation</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby Boomers</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Generation X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millennials (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Generation Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Generation Alpha</td><td>2013 – present</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby Boomers (1946–1964)', body: '<p>Born after World War II during a period of economic optimism, Baby Boomers witnessed the rise of television, the Cold War, and the moon landing. They are often associated with a strong work ethic and consumerism. In 2026, the youngest Boomers are 62 and the oldest are 80.</p>' },
      { h2: 'Generation X (1965–1980)', body: '<p>Often called the "forgotten generation," Gen X grew up as latchkey kids, navigating the rise of personal computers, MTV, and the end of the Cold War. They tend to be self-reliant and skeptical of institutions. In 2026, Gen X is between 46 and 61 years old.</p>' },
      { h2: 'Millennials / Gen Y (1981–1996)', body: '<p>Millennials came of age during the internet revolution and the 9/11 attacks. They are the first generation to grow up with mobile phones and social media as adults. In 2026, Millennials are between 30 and 45 years old.</p>' },
      { h2: 'Generation Z (1997–2012)', body: '<p>Gen Z are true digital natives — they have never known a world without smartphones. They grew up during the 2008 financial crisis, the rise of TikTok, and the COVID-19 pandemic. In 2026, Gen Z members are between 14 and 29 years old.</p>' },
      { h2: 'Generation Alpha (2013–present)', body: '<p>The children of Millennials, Gen Alpha are growing up entirely in a world of AI, tablets, and streaming. The oldest Generation Alpha members turn 13 in 2026.</p>' },
    ],
    faqs: [
      { q: 'What generation is someone born in 1990?', a: 'Someone born in 1990 is a Millennial (Generation Y). Millennials were born between 1981 and 1996.' },
      { q: 'What generation is someone born in 2000?', a: 'Someone born in 2000 is Generation Z. Gen Z spans birth years 1997 to 2012.' },
      { q: 'What generation is someone born in 1975?', a: 'Someone born in 1975 is Generation X. Gen X covers birth years 1965 to 1980.' },
      { q: 'Are generational ranges exact?', a: 'No. There is no single universal standard. Different researchers define slightly different cutoff years. The ranges above reflect the most widely cited definitions.' },
    ],
    pillar: { href: '/age-calculator/', label: 'Calculate your exact age' },
    related: [{ href: '/how-to-calculate-age-in-months/', label: 'Calculate age in months' }, { href: '/born-in-1990/', label: 'Born in 1990' }],
  },
  fr: {
    title: 'Quelle est ma génération ? — Guide complet des générations',
    metaDesc: 'Découvrez à quelle génération vous appartenez selon votre année de naissance : Baby-Boomers, Génération X, Millennials, Génération Z et Génération Alpha.',
    kicker: 'GUIDE DES GÉNÉRATIONS',
    h1: 'Quelle est ma génération ?',
    intro: 'Votre génération est déterminée par votre année de naissance. Chaque génération a grandi dans une époque distincte, façonnée par des événements historiques, des technologies et des changements culturels spécifiques.',
    sections: [
      {
        h2: 'Les tranches d\'âge de chaque génération',
        body: '<p>Les chercheurs et démographes définissent généralement les générations comme suit :</p>',
        table: `<table>
<tr><th>Génération</th><th>Années de naissance</th><th>Âge en 2026</th></tr>
<tr><td>Génération Silencieuse</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby-Boomers</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Génération X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millennials (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Génération Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Génération Alpha</td><td>2013 – présent</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby-Boomers (1946–1964)', body: '<p>Nés après la Seconde Guerre mondiale dans une période d\'optimisme économique, les Baby-Boomers ont assisté à l\'essor de la télévision, à la Guerre froide et à l\'alunissage. En 2026, les plus jeunes Boomers ont 62 ans et les plus âgés 80 ans.</p>' },
      { h2: 'Génération X (1965–1980)', body: '<p>Souvent surnommée la « génération oubliée », la Gen X a grandi avec l\'essor des ordinateurs personnels, de MTV et la fin de la Guerre froide. Elle est généralement autonome et méfiante envers les institutions. En 2026, la Gen X a entre 46 et 61 ans.</p>' },
      { h2: 'Millennials / Gen Y (1981–1996)', body: '<p>Les Millennials ont atteint l\'âge adulte pendant la révolution internet et les attentats du 11 septembre. Ils sont la première génération à avoir grandi avec les téléphones mobiles et les réseaux sociaux. En 2026, les Millennials ont entre 30 et 45 ans.</p>' },
      { h2: 'Génération Z (1997–2012)', body: '<p>La Gen Z est vraiment née avec le numérique — elle n\'a jamais connu un monde sans smartphones. Elle a grandi pendant la crise financière de 2008, l\'essor de TikTok et la pandémie de COVID-19. En 2026, les membres de la Gen Z ont entre 14 et 29 ans.</p>' },
      { h2: 'Génération Alpha (2013–présent)', body: '<p>Les enfants des Millennials, la Gen Alpha grandit entièrement dans un monde d\'IA, de tablettes et de streaming. Les aînés de la Génération Alpha ont 13 ans en 2026.</p>' },
    ],
    faqs: [
      { q: 'Quelle est la génération d\'une personne née en 1990 ?', a: 'Une personne née en 1990 est un Millennial (Génération Y). Les Millennials sont nés entre 1981 et 1996.' },
      { q: 'Quelle est la génération d\'une personne née en 2000 ?', a: 'Une personne née en 2000 fait partie de la Génération Z. La Gen Z couvre les années de naissance de 1997 à 2012.' },
      { q: 'Quelle est la génération d\'une personne née en 1975 ?', a: 'Une personne née en 1975 est de la Génération X. La Gen X couvre les années 1965 à 1980.' },
      { q: 'Les tranches d\'années sont-elles exactes ?', a: 'Non. Il n\'existe pas de norme universelle unique. Différents chercheurs définissent des années limites légèrement différentes. Les tranches ci-dessus reflètent les définitions les plus communément citées.' },
    ],
    pillar: { href: '/fr/calcul-age/', label: 'Calculer mon âge exact' },
    related: [{ href: '/fr/calculer-age-en-mois/', label: 'Calculer l\'âge en mois' }, { href: '/fr/nee-en-1990/', label: 'Née en 1990' }],
  },
  es: {
    title: '¿A qué generación pertenezco? — Guía completa de generaciones',
    metaDesc: 'Descubre a qué generación perteneces según tu año de nacimiento: Baby Boomers, Generación X, Millennials, Generación Z y Generación Alpha.',
    kicker: 'GUÍA GENERACIONAL',
    h1: '¿A qué generación pertenezco?',
    intro: 'Tu generación está determinada por tu año de nacimiento. Cada generación creció en una época distinta, marcada por eventos históricos, tecnología y cambios culturales específicos.',
    sections: [
      {
        h2: 'Rangos de años de nacimiento por generación',
        body: '<p>Los investigadores y demógrafos generalmente definen las generaciones de la siguiente manera:</p>',
        table: `<table>
<tr><th>Generación</th><th>Años de nacimiento</th><th>Edad en 2026</th></tr>
<tr><td>Generación Silenciosa</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby Boomers</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Generación X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millennials (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Generación Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Generación Alpha</td><td>2013 – presente</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby Boomers (1946–1964)', body: '<p>Nacidos después de la Segunda Guerra Mundial en un período de optimismo económico, los Baby Boomers fueron testigos del auge de la televisión, la Guerra Fría y el alunizaje. En 2026, los Boomers más jóvenes tienen 62 años y los mayores 80.</p>' },
      { h2: 'Generación X (1965–1980)', body: '<p>A menudo llamada la "generación olvidada", la Gen X creció con el auge de las computadoras personales, MTV y el fin de la Guerra Fría. Son generalmente autosuficientes y escépticos ante las instituciones. En 2026, la Gen X tiene entre 46 y 61 años.</p>' },
      { h2: 'Millennials / Gen Y (1981–1996)', body: '<p>Los Millennials llegaron a la adultez durante la revolución de internet y los ataques del 11 de septiembre. Son la primera generación que creció con teléfonos móviles y redes sociales. En 2026, los Millennials tienen entre 30 y 45 años.</p>' },
      { h2: 'Generación Z (1997–2012)', body: '<p>La Gen Z son verdaderos nativos digitales: nunca conocieron un mundo sin smartphones. Crecieron durante la crisis financiera de 2008, el auge de TikTok y la pandemia de COVID-19. En 2026, los miembros de la Gen Z tienen entre 14 y 29 años.</p>' },
      { h2: 'Generación Alpha (2013–presente)', body: '<p>Los hijos de los Millennials, la Gen Alpha está creciendo en un mundo de IA, tabletas y streaming. Los mayores de la Generación Alpha cumplen 13 años en 2026.</p>' },
    ],
    faqs: [
      { q: '¿A qué generación pertenece alguien nacido en 1990?', a: 'Alguien nacido en 1990 es Millennial (Generación Y). Los Millennials nacieron entre 1981 y 1996.' },
      { q: '¿A qué generación pertenece alguien nacido en 2000?', a: 'Alguien nacido en 2000 es de la Generación Z. La Gen Z abarca los años de nacimiento de 1997 a 2012.' },
      { q: '¿A qué generación pertenece alguien nacido en 1975?', a: 'Alguien nacido en 1975 es de la Generación X. La Gen X cubre los años de nacimiento de 1965 a 1980.' },
      { q: '¿Son exactos los rangos generacionales?', a: 'No. No existe un estándar universal único. Diferentes investigadores definen años de corte ligeramente distintos. Los rangos anteriores reflejan las definiciones más citadas.' },
    ],
    pillar: { href: '/es/calcular-edad/', label: 'Calcular mi edad exacta' },
    related: [{ href: '/es/calcular-edad-en-meses/', label: 'Calcular edad en meses' }, { href: '/es/nacido-en-1990/', label: 'Nacido en 1990' }],
  },
  pt: {
    title: 'A Que Geração Pertenço? — Guia Completo das Gerações',
    metaDesc: 'Descubra a que geração pertence com base no seu ano de nascimento: Baby Boomers, Geração X, Millennials, Geração Z e Geração Alpha.',
    kicker: 'GUIA DE GERAÇÕES',
    h1: 'A Que Geração Pertenço?',
    intro: 'A sua geração é determinada pelo seu ano de nascimento. Cada geração cresceu numa época distinta, moldada por eventos históricos, tecnologia e mudanças culturais específicas.',
    sections: [
      {
        h2: 'Intervalos de Anos de Nascimento por Geração',
        body: '<p>Pesquisadores e demógrafos geralmente definem as gerações da seguinte forma:</p>',
        table: `<table>
<tr><th>Geração</th><th>Anos de Nascimento</th><th>Idade em 2026</th></tr>
<tr><td>Geração Silenciosa</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby Boomers</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Geração X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millennials (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Geração Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Geração Alpha</td><td>2013 – presente</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby Boomers (1946–1964)', body: '<p>Nascidos após a Segunda Guerra Mundial num período de otimismo económico, os Baby Boomers testemunharam o surgimento da televisão, a Guerra Fria e a chegada do homem à Lua. Em 2026, os Boomers mais novos têm 62 anos e os mais velhos 80.</p>' },
      { h2: 'Geração X (1965–1980)', body: '<p>Muitas vezes chamada de "geração esquecida", a Geração X cresceu com o surgimento dos computadores pessoais, da MTV e o fim da Guerra Fria. Tendem a ser autossuficientes e céticos em relação às instituições. Em 2026, a Geração X tem entre 46 e 61 anos.</p>' },
      { h2: 'Millennials / Gen Y (1981–1996)', body: '<p>Os Millennials chegaram à idade adulta durante a revolução da internet e os ataques de 11 de setembro. São a primeira geração a crescer com telemóveis e redes sociais. Em 2026, os Millennials têm entre 30 e 45 anos.</p>' },
      { h2: 'Geração Z (1997–2012)', body: '<p>A Geração Z são verdadeiros nativos digitais — nunca conheceram um mundo sem smartphones. Cresceram durante a crise financeira de 2008, o surgimento do TikTok e a pandemia de COVID-19. Em 2026, os membros da Geração Z têm entre 14 e 29 anos.</p>' },
      { h2: 'Geração Alpha (2013–presente)', body: '<p>Os filhos dos Millennials, a Geração Alpha está a crescer inteiramente num mundo de IA, tablets e streaming. Os membros mais velhos da Geração Alpha completam 13 anos em 2026.</p>' },
    ],
    faqs: [
      { q: 'A que geração pertence alguém nascido em 1990?', a: 'Alguém nascido em 1990 é Millennial (Geração Y). Os Millennials nasceram entre 1981 e 1996.' },
      { q: 'A que geração pertence alguém nascido em 2000?', a: 'Alguém nascido em 2000 é da Geração Z. A Geração Z abrange os anos de nascimento de 1997 a 2012.' },
      { q: 'A que geração pertence alguém nascido em 1975?', a: 'Alguém nascido em 1975 é da Geração X. A Geração X cobre os anos de nascimento de 1965 a 1980.' },
      { q: 'Os intervalos geracionais são exatos?', a: 'Não. Não existe um padrão universal único. Diferentes investigadores definem anos de corte ligeiramente diferentes. Os intervalos acima refletem as definições mais amplamente citadas.' },
    ],
    pillar: { href: '/pt/calcular-idade/', label: 'Calcule a sua idade exata' },
    related: [{ href: '/pt/calcular-idade-em-meses/', label: 'Calcular idade em meses' }, { href: '/pt/nascido-em-1990/', label: 'Nascido em 1990' }],
  },
  de: {
    title: 'Welcher Generation Gehöre Ich An? — Vollständiger Generationen-Leitfaden',
    metaDesc: 'Finden Sie heraus, welcher Generation Sie angehören, basierend auf Ihrem Geburtsjahr: Baby Boomer, Generation X, Millennials, Generation Z und Generation Alpha.',
    kicker: 'GENERATIONEN-LEITFADEN',
    h1: 'Welcher Generation Gehöre Ich An?',
    intro: 'Ihre Generation wird durch Ihr Geburtsjahr bestimmt. Jede Generation wuchs in einer anderen Epoche auf, geprägt durch spezifische historische Ereignisse, Technologie und kulturelle Veränderungen.',
    sections: [
      {
        h2: 'Geburtsjahresbereiche der Generationen',
        body: '<p>Forscher und Demografen definieren die Generationen im Allgemeinen wie folgt:</p>',
        table: `<table>
<tr><th>Generation</th><th>Geburtsjahre</th><th>Alter in 2026</th></tr>
<tr><td>Die Stille Generation</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby Boomer</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Generation X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millennials (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Generation Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Generation Alpha</td><td>2013 – heute</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby Boomer (1946–1964)', body: '<p>Die Baby Boomer wurden nach dem Zweiten Weltkrieg in einer Zeit wirtschaftlichen Optimismus geboren und erlebten den Aufstieg des Fernsehens, den Kalten Krieg und die Mondlandung. Im Jahr 2026 sind die jüngsten Boomer 62 und die ältesten 80 Jahre alt.</p>' },
      { h2: 'Generation X (1965–1980)', body: '<p>Oft als die „vergessene Generation" bezeichnet, wuchs die Generation X mit dem Aufstieg der Personal Computer, MTV und dem Ende des Kalten Krieges auf. Sie sind in der Regel selbstständig und institutionskritisch. Im Jahr 2026 ist die Generation X zwischen 46 und 61 Jahre alt.</p>' },
      { h2: 'Millennials / Gen Y (1981–1996)', body: '<p>Die Millennials wurden während der Internetrevolution und der Anschläge vom 11. September erwachsen. Sie sind die erste Generation, die mit Mobiltelefonen und sozialen Medien aufgewachsen ist. Im Jahr 2026 sind die Millennials zwischen 30 und 45 Jahre alt.</p>' },
      { h2: 'Generation Z (1997–2012)', body: '<p>Die Generation Z sind echte Digital Natives — sie haben nie eine Welt ohne Smartphones gekannt. Sie wuchsen während der Finanzkrise 2008, dem Aufstieg von TikTok und der COVID-19-Pandemie auf. Im Jahr 2026 sind die Mitglieder der Generation Z zwischen 14 und 29 Jahre alt.</p>' },
      { h2: 'Generation Alpha (2013–heute)', body: '<p>Als Kinder der Millennials wächst die Generation Alpha vollständig in einer Welt der KI, Tablets und des Streamings auf. Die ältesten Mitglieder der Generation Alpha werden 2026 13 Jahre alt.</p>' },
    ],
    faqs: [
      { q: 'Welcher Generation gehört jemand an, der 1990 geboren wurde?', a: 'Jemand, der 1990 geboren wurde, ist ein Millennial (Generation Y). Millennials wurden zwischen 1981 und 1996 geboren.' },
      { q: 'Welcher Generation gehört jemand an, der 2000 geboren wurde?', a: 'Jemand, der 2000 geboren wurde, gehört zur Generation Z. Die Generation Z umfasst die Geburtsjahre 1997 bis 2012.' },
      { q: 'Welcher Generation gehört jemand an, der 1975 geboren wurde?', a: 'Jemand, der 1975 geboren wurde, gehört zur Generation X. Die Generation X umfasst die Geburtsjahre 1965 bis 1980.' },
      { q: 'Sind die Generationsbereiche exakt?', a: 'Nein. Es gibt keinen einheitlichen universellen Standard. Verschiedene Forscher definieren leicht unterschiedliche Grenzjahre. Die oben genannten Bereiche spiegeln die am häufigsten zitierten Definitionen wider.' },
    ],
    pillar: { href: '/de/alter-berechnen/', label: 'Genaues Alter berechnen' },
    related: [{ href: '/de/alter-in-monaten-berechnen/', label: 'Alter in Monaten berechnen' }, { href: '/de/geboren-1990/', label: 'Geboren 1990' }],
  },
  it: {
    title: 'A Quale Generazione Appartengo? — Guida Completa alle Generazioni',
    metaDesc: 'Scopri a quale generazione appartieni in base al tuo anno di nascita: Baby Boomer, Generazione X, Millennials, Generazione Z e Generazione Alpha.',
    kicker: 'GUIDA GENERAZIONALE',
    h1: 'A Quale Generazione Appartengo?',
    intro: 'La tua generazione è determinata dal tuo anno di nascita. Ogni generazione è cresciuta in un\'epoca distinta, plasmata da eventi storici specifici, tecnologia e cambiamenti culturali.',
    sections: [
      {
        h2: 'Intervalli di Anni di Nascita per Generazione',
        body: '<p>Ricercatori e demografi definiscono generalmente le generazioni nel modo seguente:</p>',
        table: `<table>
<tr><th>Generazione</th><th>Anni di Nascita</th><th>Età nel 2026</th></tr>
<tr><td>Generazione Silenziosa</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby Boomer</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Generazione X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millennials (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Generazione Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Generazione Alpha</td><td>2013 – presente</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby Boomer (1946–1964)', body: '<p>Nati dopo la Seconda Guerra Mondiale in un periodo di ottimismo economico, i Baby Boomer hanno assistito all\'ascesa della televisione, alla Guerra Fredda e all\'allunaggio. Nel 2026, i Boomer più giovani hanno 62 anni e i più anziani 80.</p>' },
      { h2: 'Generazione X (1965–1980)', body: '<p>Spesso chiamata la "generazione dimenticata", la Generazione X è cresciuta con l\'ascesa dei personal computer, di MTV e la fine della Guerra Fredda. Tendono a essere autonomi e scettici nei confronti delle istituzioni. Nel 2026, la Generazione X ha tra i 46 e i 61 anni.</p>' },
      { h2: 'Millennials / Gen Y (1981–1996)', body: '<p>I Millennials sono diventati adulti durante la rivoluzione di Internet e gli attacchi dell\'11 settembre. Sono la prima generazione cresciuta con i telefoni cellulari e i social media. Nel 2026, i Millennials hanno tra i 30 e i 45 anni.</p>' },
      { h2: 'Generazione Z (1997–2012)', body: '<p>La Generazione Z sono veri nativi digitali — non hanno mai conosciuto un mondo senza smartphone. Sono cresciuti durante la crisi finanziaria del 2008, l\'ascesa di TikTok e la pandemia di COVID-19. Nel 2026, i membri della Generazione Z hanno tra i 14 e i 29 anni.</p>' },
      { h2: 'Generazione Alpha (2013–presente)', body: '<p>Figli dei Millennials, la Generazione Alpha sta crescendo interamente in un mondo di IA, tablet e streaming. I membri più anziani della Generazione Alpha compiono 13 anni nel 2026.</p>' },
    ],
    faqs: [
      { q: 'A quale generazione appartiene qualcuno nato nel 1990?', a: 'Qualcuno nato nel 1990 è un Millennial (Generazione Y). I Millennials sono nati tra il 1981 e il 1996.' },
      { q: 'A quale generazione appartiene qualcuno nato nel 2000?', a: 'Qualcuno nato nel 2000 è della Generazione Z. La Generazione Z copre gli anni di nascita dal 1997 al 2012.' },
      { q: 'A quale generazione appartiene qualcuno nato nel 1975?', a: 'Qualcuno nato nel 1975 è della Generazione X. La Generazione X copre gli anni di nascita dal 1965 al 1980.' },
      { q: 'Gli intervalli generazionali sono esatti?', a: 'No. Non esiste un unico standard universale. Diversi ricercatori definiscono anni di taglio leggermente diversi. Gli intervalli sopra riportati riflettono le definizioni più ampiamente citate.' },
    ],
    pillar: { href: '/it/calcolare-eta/', label: 'Calcola la tua età esatta' },
    related: [{ href: '/it/calcolare-eta-in-mesi/', label: 'Calcolare età in mesi' }, { href: '/it/nato-nel-1990/', label: 'Nato nel 1990' }],
  },
  pl: {
    title: 'Do Jakiego Pokolenia Należę? — Kompletny Przewodnik po Pokoleniach',
    metaDesc: 'Dowiedz się, do jakiego pokolenia należysz na podstawie roku urodzenia: Baby Boomers, Pokolenie X, Millenialsi, Pokolenie Z i Pokolenie Alpha.',
    kicker: 'PRZEWODNIK POKOLENIOWY',
    h1: 'Do Jakiego Pokolenia Należę?',
    intro: 'Twoje pokolenie jest określone przez rok urodzenia. Każde pokolenie dorastało w odrębnej epoce, ukształtowanej przez konkretne wydarzenia historyczne, technologię i zmiany kulturowe.',
    sections: [
      {
        h2: 'Przedziały Lat Urodzenia dla Każdego Pokolenia',
        body: '<p>Badacze i demografowie zazwyczaj definiują pokolenia w następujący sposób:</p>',
        table: `<table>
<tr><th>Pokolenie</th><th>Lata Urodzenia</th><th>Wiek w 2026</th></tr>
<tr><td>Ciche Pokolenie</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby Boomers</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Pokolenie X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millenialsi (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Pokolenie Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Pokolenie Alpha</td><td>2013 – dziś</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby Boomers (1946–1964)', body: '<p>Urodzeni po II wojnie światowej w okresie optymizmu gospodarczego, Baby Boomers byli świadkami wzrostu popularności telewizji, zimnej wojny i lądowania na Księżycu. W 2026 roku najmłodsi Boomersi mają 62 lata, a najstarsi 80.</p>' },
      { h2: 'Pokolenie X (1965–1980)', body: '<p>Często nazywane „zapomnianym pokoleniem", Pokolenie X dorastało wraz z rozwojem komputerów osobistych, MTV i końcem zimnej wojny. Zazwyczaj są samodzielni i sceptyczni wobec instytucji. W 2026 roku Pokolenie X ma od 46 do 61 lat.</p>' },
      { h2: 'Millenialsi / Gen Y (1981–1996)', body: '<p>Millenialsi dorastali podczas rewolucji internetowej i ataków z 11 września. Są pierwszym pokoleniem, które dorastało z telefonami komórkowymi i mediami społecznościowymi. W 2026 roku Millenialsi mają od 30 do 45 lat.</p>' },
      { h2: 'Pokolenie Z (1997–2012)', body: '<p>Pokolenie Z to prawdziwi cyfrowi tubylcy — nigdy nie znali świata bez smartfonów. Dorastali podczas kryzysu finansowego 2008, wzrostu TikToka i pandemii COVID-19. W 2026 roku członkowie Pokolenia Z mają od 14 do 29 lat.</p>' },
      { h2: 'Pokolenie Alpha (2013–dziś)', body: '<p>Dzieci Millenialsów, Pokolenie Alpha dorasta w całkowicie cyfrowym świecie AI, tabletów i streamingu. Najstarsi członkowie Pokolenia Alpha kończą 13 lat w 2026 roku.</p>' },
    ],
    faqs: [
      { q: 'Do jakiego pokolenia należy ktoś urodzony w 1990 roku?', a: 'Ktoś urodzony w 1990 roku jest Millenialsem (Pokolenie Y). Millenialsi urodzili się między 1981 a 1996 rokiem.' },
      { q: 'Do jakiego pokolenia należy ktoś urodzony w 2000 roku?', a: 'Ktoś urodzony w 2000 roku należy do Pokolenia Z. Pokolenie Z obejmuje lata urodzenia od 1997 do 2012.' },
      { q: 'Do jakiego pokolenia należy ktoś urodzony w 1975 roku?', a: 'Ktoś urodzony w 1975 roku należy do Pokolenia X. Pokolenie X obejmuje lata urodzenia od 1965 do 1980.' },
      { q: 'Czy przedziały pokoleniowe są dokładne?', a: 'Nie. Nie istnieje jeden powszechny standard. Różni badacze definiują nieco inne lata graniczne. Powyższe przedziały odzwierciedlają najczęściej cytowane definicje.' },
    ],
    pillar: { href: '/pl/kalkulator-wieku/', label: 'Oblicz swój dokładny wiek' },
    related: [{ href: '/pl/obliczanie-wieku-w-miesiacach/', label: 'Oblicz wiek w miesiącach' }, { href: '/pl/urodzony-w-1990/', label: 'Urodzony w 1990' }],
  },
  ja: {
    title: '私はどの世代？ — 世代別完全ガイド',
    metaDesc: '生まれた年から自分の世代を調べましょう。サイレント世代、ベビーブーマー、X世代、ミレニアル世代、Z世代、アルファ世代を解説。',
    kicker: '世代ガイド',
    h1: '私はどの世代？',
    intro: 'あなたの世代は生まれた年によって決まります。各世代は、特定の歴史的出来事、技術、文化的変化によって形成された独自の時代に育ちました。',
    sections: [
      {
        h2: '世代別の生年範囲',
        body: '<p>研究者や人口統計学者は一般的に、世代を以下のように定義しています：</p>',
        table: `<table>
<tr><th>世代</th><th>生年</th><th>2026年の年齢</th></tr>
<tr><td>サイレント世代</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>ベビーブーマー</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>X世代</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>ミレニアル世代（Y世代）</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Z世代</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>アルファ世代</td><td>2013 – 現在</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'ベビーブーマー（1946–1964）', body: '<p>第二次世界大戦後の経済的楽観主義の時代に生まれたベビーブーマーは、テレビの普及、冷戦、月面着陸を目撃しました。2026年、最も若いブーマーは62歳、最も年上は80歳です。</p>' },
      { h2: 'X世代（1965–1980）', body: '<p>「忘れられた世代」とも呼ばれるX世代は、パソコンの普及、MTV、冷戦の終結とともに育ちました。自立心が強く、権威に懐疑的な傾向があります。2026年、X世代は46歳から61歳です。</p>' },
      { h2: 'ミレニアル世代 / Y世代（1981–1996）', body: '<p>ミレニアル世代はインターネット革命と9.11テロの時代に大人になりました。携帯電話とソーシャルメディアが普及した世界で育った最初の世代です。2026年、ミレニアル世代は30歳から45歳です。</p>' },
      { h2: 'Z世代（1997–2012）', body: '<p>Z世代はデジタルネイティブ — スマートフォンのない世界を知りません。2008年の金融危機、TikTokの台頭、COVID-19パンデミックの中で育ちました。2026年、Z世代は14歳から29歳です。</p>' },
      { h2: 'アルファ世代（2013–現在）', body: '<p>ミレニアル世代の子供たちであるアルファ世代は、AI、タブレット、ストリーミングの世界で育っています。アルファ世代の最年長メンバーは2026年に13歳になります。</p>' },
    ],
    faqs: [
      { q: '1990年生まれはどの世代ですか？', a: '1990年生まれはミレニアル世代（Y世代）です。ミレニアル世代は1981年から1996年の間に生まれました。' },
      { q: '2000年生まれはどの世代ですか？', a: '2000年生まれはZ世代です。Z世代は1997年から2012年の生まれです。' },
      { q: '1975年生まれはどの世代ですか？', a: '1975年生まれはX世代です。X世代は1965年から1980年の生まれです。' },
      { q: '世代の区切りは正確ですか？', a: 'いいえ。普遍的な単一基準はありません。研究者によって境界の年が若干異なります。上記の範囲は最も広く引用されている定義を反映しています。' },
    ],
    pillar: { href: '/ja/nenrei-keisan/', label: '正確な年齢を計算する' },
    related: [{ href: '/ja/nenrei-wo-tsuki-de-keisan-suru/', label: '月齢で年齢を計算する' }, { href: '/ja/1990-nen-umare/', label: '1990年生まれ' }],
  },
  ko: {
    title: '나는 어느 세대인가? — 세대 완전 가이드',
    metaDesc: '출생 연도를 기반으로 자신이 어느 세대에 속하는지 알아보세요. 베이비붐 세대, X세대, 밀레니얼, Z세대, 알파 세대 설명.',
    kicker: '세대 가이드',
    h1: '나는 어느 세대인가?',
    intro: '당신의 세대는 출생 연도로 결정됩니다. 각 세대는 특정 역사적 사건, 기술, 문화적 변화로 형성된 독특한 시대에 성장했습니다.',
    sections: [
      {
        h2: '세대별 출생 연도 범위',
        body: '<p>연구자와 인구통계학자들은 일반적으로 세대를 다음과 같이 정의합니다:</p>',
        table: `<table>
<tr><th>세대</th><th>출생 연도</th><th>2026년 나이</th></tr>
<tr><td>침묵의 세대</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>베이비붐 세대</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>X세대</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>밀레니얼 세대 (Y세대)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Z세대</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>알파 세대</td><td>2013 – 현재</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: '베이비붐 세대 (1946–1964)', body: '<p>제2차 세계대전 이후 경제적 낙관주의 시대에 태어난 베이비붐 세대는 텔레비전의 등장, 냉전, 달 착륙을 목격했습니다. 2026년, 가장 젊은 부머는 62세, 가장 나이 든 부머는 80세입니다.</p>' },
      { h2: 'X세대 (1965–1980)', body: '<p>종종 "잊혀진 세대"로 불리는 X세대는 개인용 컴퓨터, MTV, 냉전 종식과 함께 성장했습니다. 자립심이 강하고 기관에 대해 회의적인 경향이 있습니다. 2026년, X세대는 46세에서 61세 사이입니다.</p>' },
      { h2: '밀레니얼 세대 / Y세대 (1981–1996)', body: '<p>밀레니얼 세대는 인터넷 혁명과 9.11 테러 당시 성인이 되었습니다. 휴대폰과 소셜 미디어와 함께 성장한 최초의 세대입니다. 2026년, 밀레니얼 세대는 30세에서 45세 사이입니다.</p>' },
      { h2: 'Z세대 (1997–2012)', body: '<p>Z세대는 진정한 디지털 네이티브로, 스마트폰 없는 세상을 알지 못합니다. 2008년 금융 위기, TikTok의 부상, COVID-19 팬데믹 속에서 성장했습니다. 2026년, Z세대는 14세에서 29세 사이입니다.</p>' },
      { h2: '알파 세대 (2013–현재)', body: '<p>밀레니얼 세대의 자녀인 알파 세대는 AI, 태블릿, 스트리밍의 세계에서 완전히 성장하고 있습니다. 알파 세대 최연장자는 2026년에 13세가 됩니다.</p>' },
    ],
    faqs: [
      { q: '1990년생은 어느 세대인가요?', a: '1990년생은 밀레니얼 세대(Y세대)입니다. 밀레니얼 세대는 1981년에서 1996년 사이에 태어났습니다.' },
      { q: '2000년생은 어느 세대인가요?', a: '2000년생은 Z세대입니다. Z세대는 1997년에서 2012년 출생 연도를 포함합니다.' },
      { q: '1975년생은 어느 세대인가요?', a: '1975년생은 X세대입니다. X세대는 1965년에서 1980년 출생 연도를 포함합니다.' },
      { q: '세대 범위는 정확한가요?', a: '아니요. 단일한 보편적 기준은 없습니다. 연구자마다 경계 연도를 약간 다르게 정의합니다. 위의 범위는 가장 널리 인용되는 정의를 반영합니다.' },
    ],
    pillar: { href: '/ko/nayi-gyesan/', label: '정확한 나이 계산하기' },
    related: [{ href: '/ko/nayi-reul-dal-ro-gyesan/', label: '월 단위로 나이 계산하기' }, { href: '/ko/1990-nyeon-saeng/', label: '1990년생' }],
  },
  nl: {
    title: 'Tot Welke Generatie Behoor Ik? — Volledige Generatiegids',
    metaDesc: 'Ontdek tot welke generatie jij behoort op basis van je geboortejaar: Baby Boomers, Generatie X, Millennials, Generatie Z en Generatie Alpha.',
    kicker: 'GENERATIEGIDS',
    h1: 'Tot Welke Generatie Behoor Ik?',
    intro: 'Je generatie wordt bepaald door je geboortejaar. Elke generatie groeide op in een aparte tijd, gevormd door specifieke historische gebeurtenissen, technologie en culturele verschuivingen.',
    sections: [
      {
        h2: 'Geboortejaarranges per Generatie',
        body: '<p>Onderzoekers en demografen definiëren de generaties over het algemeen als volgt:</p>',
        table: `<table>
<tr><th>Generatie</th><th>Geboortejaren</th><th>Leeftijd in 2026</th></tr>
<tr><td>De Stille Generatie</td><td>1928 – 1945</td><td>81 – 98</td></tr>
<tr><td>Baby Boomers</td><td>1946 – 1964</td><td>62 – 80</td></tr>
<tr><td>Generatie X</td><td>1965 – 1980</td><td>46 – 61</td></tr>
<tr><td>Millennials (Gen Y)</td><td>1981 – 1996</td><td>30 – 45</td></tr>
<tr><td>Generatie Z</td><td>1997 – 2012</td><td>14 – 29</td></tr>
<tr><td>Generatie Alpha</td><td>2013 – heden</td><td>0 – 13</td></tr>
</table>`
      },
      { h2: 'Baby Boomers (1946–1964)', body: '<p>Geboren na de Tweede Wereldoorlog in een periode van economisch optimisme, zagen de Baby Boomers de opkomst van televisie, de Koude Oorlog en de maanlanding. In 2026 zijn de jongste Boomers 62 en de oudste 80 jaar.</p>' },
      { h2: 'Generatie X (1965–1980)', body: '<p>Vaak de "vergeten generatie" genoemd, groeide Generatie X op met de opkomst van personal computers, MTV en het einde van de Koude Oorlog. Ze zijn doorgaans zelfredzaam en sceptisch tegenover instituties. In 2026 is Generatie X tussen de 46 en 61 jaar oud.</p>' },
      { h2: 'Millennials / Gen Y (1981–1996)', body: '<p>Millennials werden volwassen tijdens de internetrevolutie en de aanslagen van 11 september. Ze zijn de eerste generatie die opgroeide met mobiele telefoons en sociale media. In 2026 zijn Millennials tussen de 30 en 45 jaar oud.</p>' },
      { h2: 'Generatie Z (1997–2012)', body: '<p>Generatie Z zijn echte digital natives — ze hebben nooit een wereld zonder smartphones gekend. Ze groeiden op tijdens de financiële crisis van 2008, de opkomst van TikTok en de COVID-19-pandemie. In 2026 zijn leden van Generatie Z tussen de 14 en 29 jaar oud.</p>' },
      { h2: 'Generatie Alpha (2013–heden)', body: '<p>Als kinderen van Millennials groeit Generatie Alpha volledig op in een wereld van AI, tablets en streaming. De oudste leden van Generatie Alpha worden 13 jaar in 2026.</p>' },
    ],
    faqs: [
      { q: 'Tot welke generatie behoort iemand die in 1990 is geboren?', a: 'Iemand die in 1990 is geboren is een Millennial (Generatie Y). Millennials zijn geboren tussen 1981 en 1996.' },
      { q: 'Tot welke generatie behoort iemand die in 2000 is geboren?', a: 'Iemand die in 2000 is geboren behoort tot Generatie Z. Generatie Z omvat de geboortejaren 1997 tot 2012.' },
      { q: 'Tot welke generatie behoort iemand die in 1975 is geboren?', a: 'Iemand die in 1975 is geboren behoort tot Generatie X. Generatie X omvat de geboortejaren 1965 tot 1980.' },
      { q: 'Zijn de generatieranges exact?', a: 'Nee. Er is geen enkele universele standaard. Verschillende onderzoekers hanteren iets andere grensjarentalen. De bovenstaande ranges weerspiegelen de meest geciteerde definities.' },
    ],
    pillar: { href: '/nl/leeftijd-berekenen/', label: 'Bereken je exacte leeftijd' },
    related: [{ href: '/nl/leeftijd-berekenen-in-maanden/', label: 'Leeftijd berekenen in maanden' }, { href: '/nl/geboren-in-1990/', label: 'Geboren in 1990' }],
  },
};

// ── Article 2: how-to-calculate-age-in-months ─────────────
T['how-to-calculate-age-in-months'] = {
  en: {
    title: 'How to Calculate Your Age in Months — Step-by-Step Guide',
    metaDesc: 'Learn how to calculate your exact age in months and days. Includes formula, examples, and a free age calculator.',
    kicker: 'AGE GUIDE',
    h1: 'How to Calculate Your Age in Months',
    intro: 'Knowing your age in months is useful for medical forms, developmental milestones, and legal purposes. Here is the exact method to do it.',
    sections: [
      {
        h2: 'The Simple Formula',
        body: `<p>To calculate your age in months:</p>
<ol>
<li>Count the number of full years between your birth date and today.</li>
<li>Multiply by 12.</li>
<li>Add the number of additional full months since your last birthday.</li>
</ol>
<p><strong>Example:</strong> Born March 15, 1990 — today is April 10, 2026.</p>
<ul>
<li>Full years: 2026 − 1990 = 36 years</li>
<li>Additional months: March → April = 0 full months (April 10 &lt; March 15)</li>
<li><strong>Total: 36 × 12 = 432 months</strong></li>
</ul>`
      },
      {
        h2: 'Age in Months Chart',
        body: '<p>For quick reference, here is how many months correspond to common ages:</p>',
        table: `<table>
<tr><th>Age (years)</th><th>Age (months)</th></tr>
<tr><td>1 year</td><td>12 months</td></tr>
<tr><td>5 years</td><td>60 months</td></tr>
<tr><td>10 years</td><td>120 months</td></tr>
<tr><td>18 years</td><td>216 months</td></tr>
<tr><td>25 years</td><td>300 months</td></tr>
<tr><td>30 years</td><td>360 months</td></tr>
<tr><td>40 years</td><td>480 months</td></tr>
<tr><td>50 years</td><td>600 months</td></tr>
</table>`
      },
      { h2: 'Why Age in Months Matters', body: '<p>Doctors and pediatricians track child development in months, not years, during the first 24–36 months of life. A child who is 18 months old is at a very different developmental stage than a child who is 24 months old, even though both are technically "under 2 years old."</p><p>Courts and legal systems in some countries also use age in months for custody arrangements and benefit calculations.</p>' },
    ],
    faqs: [
      { q: 'How many months old am I if I was born in 1990?', a: 'If you were born in 1990, you are approximately 420–432 months old in 2026, depending on your exact birth month.' },
      { q: 'How do I calculate a baby\'s age in months?', a: 'Count the number of complete months from the birth date to today. For example, a baby born on January 10 is exactly 3 months old on April 10.' },
      { q: 'Is there a difference between age in months and gestational age?', a: 'Yes. Gestational age is counted from conception (roughly 2 weeks before birth). Age in months is always counted from the actual birth date.' },
    ],
    pillar: { href: '/age-calculator/', label: 'Use the Age Calculator' },
    related: [{ href: '/what-generation-am-i/', label: 'What generation am I?' }, { href: '/baby-age-calculator/', label: 'Baby age calculator' }],
  },
  fr: {
    title: 'Comment calculer son âge en mois — Guide étape par étape',
    metaDesc: 'Apprenez à calculer votre âge exact en mois et en jours. Inclut la formule, des exemples et un calculateur d\'âge gratuit.',
    kicker: 'GUIDE ÂGE',
    h1: 'Comment calculer son âge en mois',
    intro: 'Connaître son âge en mois est utile pour les formulaires médicaux, les jalons de développement et les démarches administratives. Voici la méthode exacte.',
    sections: [
      {
        h2: 'La formule simple',
        body: `<p>Pour calculer votre âge en mois :</p>
<ol>
<li>Comptez le nombre d'années complètes entre votre date de naissance et aujourd'hui.</li>
<li>Multipliez par 12.</li>
<li>Ajoutez le nombre de mois complets supplémentaires depuis votre dernier anniversaire.</li>
</ol>
<p><strong>Exemple :</strong> Né le 15 mars 1990 — aujourd'hui le 10 avril 2026.</p>
<ul>
<li>Années complètes : 2026 − 1990 = 36 ans</li>
<li>Mois supplémentaires : mars → avril = 0 mois complets (le 10 avril &lt; le 15 mars)</li>
<li><strong>Total : 36 × 12 = 432 mois</strong></li>
</ul>`
      },
      {
        h2: 'Tableau âge en mois',
        body: '<p>Pour référence rapide, voici combien de mois correspondent aux âges courants :</p>',
        table: `<table>
<tr><th>Âge (années)</th><th>Âge (mois)</th></tr>
<tr><td>1 an</td><td>12 mois</td></tr>
<tr><td>5 ans</td><td>60 mois</td></tr>
<tr><td>10 ans</td><td>120 mois</td></tr>
<tr><td>18 ans</td><td>216 mois</td></tr>
<tr><td>25 ans</td><td>300 mois</td></tr>
<tr><td>30 ans</td><td>360 mois</td></tr>
<tr><td>40 ans</td><td>480 mois</td></tr>
<tr><td>50 ans</td><td>600 mois</td></tr>
</table>`
      },
      { h2: 'Pourquoi l\'âge en mois est important', body: '<p>Les médecins et pédiatres suivent le développement de l\'enfant en mois, et non en années, pendant les 24 à 36 premiers mois de vie. Un enfant de 18 mois est à un stade de développement très différent d\'un enfant de 24 mois, même si tous deux ont techniquement "moins de 2 ans".</p><p>Les tribunaux et les systèmes juridiques de certains pays utilisent également l\'âge en mois pour les arrangements de garde et les calculs de prestations.</p>' },
    ],
    faqs: [
      { q: 'Quel est mon âge en mois si je suis né en 1990 ?', a: 'Si vous êtes né en 1990, vous avez environ 420 à 432 mois en 2026, selon votre mois de naissance exact.' },
      { q: 'Comment calculer l\'âge d\'un bébé en mois ?', a: 'Comptez le nombre de mois complets écoulés depuis la date de naissance jusqu\'à aujourd\'hui. Par exemple, un bébé né le 10 janvier a exactement 3 mois le 10 avril.' },
      { q: 'Y a-t-il une différence entre l\'âge en mois et l\'âge gestationnel ?', a: 'Oui. L\'âge gestationnel est compté depuis la conception (environ 2 semaines avant la naissance). L\'âge en mois est toujours compté depuis la date de naissance réelle.' },
    ],
    pillar: { href: '/fr/calcul-age/', label: 'Utiliser le calcul d\'âge' },
    related: [{ href: '/fr/quelle-generation-suis-je/', label: 'Quelle est ma génération ?' }, { href: '/fr/age-bebe/', label: 'Calculateur d\'âge bébé' }],
  },
  es: {
    title: 'Cómo calcular tu edad en meses — Guía paso a paso',
    metaDesc: 'Aprende a calcular tu edad exacta en meses y días. Incluye fórmula, ejemplos y una calculadora de edad gratuita.',
    kicker: 'GUÍA DE EDAD',
    h1: 'Cómo calcular tu edad en meses',
    intro: 'Conocer tu edad en meses es útil para formularios médicos, hitos de desarrollo y trámites legales. Aquí está el método exacto.',
    sections: [
      {
        h2: 'La fórmula simple',
        body: `<p>Para calcular tu edad en meses:</p>
<ol>
<li>Cuenta el número de años completos entre tu fecha de nacimiento y hoy.</li>
<li>Multiplica por 12.</li>
<li>Suma el número de meses completos adicionales desde tu último cumpleaños.</li>
</ol>
<p><strong>Ejemplo:</strong> Nacido el 15 de marzo de 1990 — hoy es el 10 de abril de 2026.</p>
<ul>
<li>Años completos: 2026 − 1990 = 36 años</li>
<li>Meses adicionales: marzo → abril = 0 meses completos (10 de abril &lt; 15 de marzo)</li>
<li><strong>Total: 36 × 12 = 432 meses</strong></li>
</ul>`
      },
      {
        h2: 'Tabla de edad en meses',
        body: '<p>Para referencia rápida, aquí está cuántos meses corresponden a edades comunes:</p>',
        table: `<table>
<tr><th>Edad (años)</th><th>Edad (meses)</th></tr>
<tr><td>1 año</td><td>12 meses</td></tr>
<tr><td>5 años</td><td>60 meses</td></tr>
<tr><td>10 años</td><td>120 meses</td></tr>
<tr><td>18 años</td><td>216 meses</td></tr>
<tr><td>25 años</td><td>300 meses</td></tr>
<tr><td>30 años</td><td>360 meses</td></tr>
<tr><td>40 años</td><td>480 meses</td></tr>
<tr><td>50 años</td><td>600 meses</td></tr>
</table>`
      },
      { h2: 'Por qué importa la edad en meses', body: '<p>Los médicos y pediatras hacen seguimiento del desarrollo infantil en meses, no en años, durante los primeros 24 a 36 meses de vida. Un niño de 18 meses está en una etapa de desarrollo muy diferente a uno de 24 meses, aunque ambos tengan técnicamente "menos de 2 años".</p><p>Los tribunales y sistemas legales de algunos países también usan la edad en meses para acuerdos de custodia y cálculos de beneficios.</p>' },
    ],
    faqs: [
      { q: '¿Cuántos meses tengo si nací en 1990?', a: 'Si naciste en 1990, tienes aproximadamente 420 a 432 meses en 2026, dependiendo de tu mes de nacimiento exacto.' },
      { q: '¿Cómo calcular la edad de un bebé en meses?', a: 'Cuenta el número de meses completos desde la fecha de nacimiento hasta hoy. Por ejemplo, un bebé nacido el 10 de enero tiene exactamente 3 meses el 10 de abril.' },
      { q: '¿Hay diferencia entre edad en meses y edad gestacional?', a: 'Sí. La edad gestacional se cuenta desde la concepción (aproximadamente 2 semanas antes del nacimiento). La edad en meses siempre se cuenta desde la fecha de nacimiento real.' },
    ],
    pillar: { href: '/es/calcular-edad/', label: 'Usar la calculadora de edad' },
    related: [{ href: '/es/que-generacion-soy/', label: '¿A qué generación pertenezco?' }, { href: '/es/calculadora-edad-bebe/', label: 'Calculadora de edad bebé' }],
  },
  pt: {
    title: 'Como Calcular a Sua Idade em Meses — Guia Passo a Passo',
    metaDesc: 'Aprenda a calcular a sua idade exata em meses e dias. Inclui fórmula, exemplos e uma calculadora de idade gratuita.',
    kicker: 'GUIA DE IDADE',
    h1: 'Como Calcular a Sua Idade em Meses',
    intro: 'Saber a sua idade em meses é útil para formulários médicos, marcos de desenvolvimento e fins legais. Aqui está o método exato para o fazer.',
    sections: [
      {
        h2: 'A Fórmula Simples',
        body: `<p>Para calcular a sua idade em meses:</p>
<ol>
<li>Conte o número de anos completos entre a sua data de nascimento e hoje.</li>
<li>Multiplique por 12.</li>
<li>Adicione o número de meses completos adicionais desde o seu último aniversário.</li>
</ol>
<p><strong>Exemplo:</strong> Nascido a 15 de março de 1990 — hoje é 10 de abril de 2026.</p>
<ul>
<li>Anos completos: 2026 − 1990 = 36 anos</li>
<li>Meses adicionais: março → abril = 0 meses completos (10 de abril &lt; 15 de março)</li>
<li><strong>Total: 36 × 12 = 432 meses</strong></li>
</ul>`
      },
      {
        h2: 'Tabela de Idade em Meses',
        body: '<p>Para referência rápida, aqui está quantos meses correspondem a idades comuns:</p>',
        table: `<table>
<tr><th>Idade (anos)</th><th>Idade (meses)</th></tr>
<tr><td>1 ano</td><td>12 meses</td></tr>
<tr><td>5 anos</td><td>60 meses</td></tr>
<tr><td>10 anos</td><td>120 meses</td></tr>
<tr><td>18 anos</td><td>216 meses</td></tr>
<tr><td>25 anos</td><td>300 meses</td></tr>
<tr><td>30 anos</td><td>360 meses</td></tr>
<tr><td>40 anos</td><td>480 meses</td></tr>
<tr><td>50 anos</td><td>600 meses</td></tr>
</table>`
      },
      { h2: 'Por Que a Idade em Meses é Importante', body: '<p>Os médicos e pediatras acompanham o desenvolvimento infantil em meses, não em anos, durante os primeiros 24 a 36 meses de vida. Uma criança de 18 meses está numa fase de desenvolvimento muito diferente de uma criança de 24 meses, embora ambas sejam tecnicamente "com menos de 2 anos".</p><p>Os tribunais e sistemas jurídicos de alguns países também utilizam a idade em meses para acordos de custódia e cálculos de benefícios.</p>' },
    ],
    faqs: [
      { q: 'Quantos meses tenho se nasci em 1990?', a: 'Se nasceu em 1990, tem aproximadamente 420 a 432 meses em 2026, dependendo do seu mês de nascimento exato.' },
      { q: 'Como calcular a idade de um bebé em meses?', a: 'Conte o número de meses completos desde a data de nascimento até hoje. Por exemplo, um bebé nascido a 10 de janeiro tem exatamente 3 meses a 10 de abril.' },
      { q: 'Existe diferença entre idade em meses e idade gestacional?', a: 'Sim. A idade gestacional conta-se desde a conceção (aproximadamente 2 semanas antes do nascimento). A idade em meses conta-se sempre desde a data de nascimento real.' },
    ],
    pillar: { href: '/pt/calcular-idade/', label: 'Usar a calculadora de idade' },
    related: [{ href: '/pt/que-geracao-sou/', label: 'A que geração pertenço?' }, { href: '/pt/calculadora-idade-bebe/', label: 'Calculadora de idade bebé' }],
  },
  de: {
    title: 'Wie Berechnet Man Sein Alter in Monaten — Schritt-für-Schritt-Anleitung',
    metaDesc: 'Lernen Sie, Ihr genaues Alter in Monaten und Tagen zu berechnen. Inklusive Formel, Beispiele und einem kostenlosen Altersrechner.',
    kicker: 'ALTER-LEITFADEN',
    h1: 'Wie Berechnet Man Sein Alter in Monaten',
    intro: 'Das Wissen um das eigene Alter in Monaten ist nützlich für medizinische Formulare, Entwicklungsmeilensteine und rechtliche Zwecke. Hier ist die genaue Methode.',
    sections: [
      {
        h2: 'Die Einfache Formel',
        body: `<p>So berechnen Sie Ihr Alter in Monaten:</p>
<ol>
<li>Zählen Sie die Anzahl der vollständigen Jahre zwischen Ihrem Geburtsdatum und heute.</li>
<li>Multiplizieren Sie mit 12.</li>
<li>Addieren Sie die Anzahl der zusätzlichen vollständigen Monate seit Ihrem letzten Geburtstag.</li>
</ol>
<p><strong>Beispiel:</strong> Geboren am 15. März 1990 — heute ist der 10. April 2026.</p>
<ul>
<li>Vollständige Jahre: 2026 − 1990 = 36 Jahre</li>
<li>Zusätzliche Monate: März → April = 0 volle Monate (10. April &lt; 15. März)</li>
<li><strong>Gesamt: 36 × 12 = 432 Monate</strong></li>
</ul>`
      },
      {
        h2: 'Alter in Monaten Tabelle',
        body: '<p>Zur schnellen Referenz: So viele Monate entsprechen häufigen Altersangaben:</p>',
        table: `<table>
<tr><th>Alter (Jahre)</th><th>Alter (Monate)</th></tr>
<tr><td>1 Jahr</td><td>12 Monate</td></tr>
<tr><td>5 Jahre</td><td>60 Monate</td></tr>
<tr><td>10 Jahre</td><td>120 Monate</td></tr>
<tr><td>18 Jahre</td><td>216 Monate</td></tr>
<tr><td>25 Jahre</td><td>300 Monate</td></tr>
<tr><td>30 Jahre</td><td>360 Monate</td></tr>
<tr><td>40 Jahre</td><td>480 Monate</td></tr>
<tr><td>50 Jahre</td><td>600 Monate</td></tr>
</table>`
      },
      { h2: 'Warum das Alter in Monaten Wichtig Ist', body: '<p>Ärzte und Kinderärzte verfolgen die kindliche Entwicklung in den ersten 24 bis 36 Lebensmonaten in Monaten, nicht in Jahren. Ein 18 Monate altes Kind befindet sich in einer sehr anderen Entwicklungsphase als ein 24 Monate altes Kind, obwohl beide technisch "unter 2 Jahre alt" sind.</p><p>Gerichte und Rechtssysteme in einigen Ländern verwenden das Alter in Monaten auch für Sorgerechtsvereinbarungen und Leistungsberechnungen.</p>' },
    ],
    faqs: [
      { q: 'Wie viele Monate alt bin ich, wenn ich 1990 geboren wurde?', a: 'Wenn Sie 1990 geboren wurden, sind Sie im Jahr 2026 je nach Geburtsmonat ungefähr 420 bis 432 Monate alt.' },
      { q: 'Wie berechnet man das Alter eines Babys in Monaten?', a: 'Zählen Sie die Anzahl der vollständigen Monate vom Geburtsdatum bis heute. Ein Baby, das am 10. Januar geboren wurde, ist am 10. April genau 3 Monate alt.' },
      { q: 'Gibt es einen Unterschied zwischen Alter in Monaten und Gestationsalter?', a: 'Ja. Das Gestationsalter wird ab der Empfängnis gezählt (etwa 2 Wochen vor der Geburt). Das Alter in Monaten wird immer ab dem tatsächlichen Geburtsdatum gezählt.' },
    ],
    pillar: { href: '/de/alter-berechnen/', label: 'Den Altersrechner nutzen' },
    related: [{ href: '/de/welche-generation-bin-ich/', label: 'Welcher Generation gehöre ich an?' }, { href: '/de/baby-alter-rechner/', label: 'Baby-Altersrechner' }],
  },
  it: {
    title: 'Come Calcolare la Propria Età in Mesi — Guida Passo dopo Passo',
    metaDesc: 'Impara a calcolare la tua età esatta in mesi e giorni. Include formula, esempi e un calcolatore di età gratuito.',
    kicker: 'GUIDA ETÀ',
    h1: 'Come Calcolare la Propria Età in Mesi',
    intro: 'Conoscere la propria età in mesi è utile per moduli medici, tappe dello sviluppo e scopi legali. Ecco il metodo esatto.',
    sections: [
      {
        h2: 'La Formula Semplice',
        body: `<p>Per calcolare la tua età in mesi:</p>
<ol>
<li>Conta il numero di anni completi tra la tua data di nascita e oggi.</li>
<li>Moltiplica per 12.</li>
<li>Aggiungi il numero di mesi completi aggiuntivi dal tuo ultimo compleanno.</li>
</ol>
<p><strong>Esempio:</strong> Nato il 15 marzo 1990 — oggi è il 10 aprile 2026.</p>
<ul>
<li>Anni completi: 2026 − 1990 = 36 anni</li>
<li>Mesi aggiuntivi: marzo → aprile = 0 mesi completi (10 aprile &lt; 15 marzo)</li>
<li><strong>Totale: 36 × 12 = 432 mesi</strong></li>
</ul>`
      },
      {
        h2: 'Tabella Età in Mesi',
        body: '<p>Per riferimento rapido, ecco quanti mesi corrispondono alle età comuni:</p>',
        table: `<table>
<tr><th>Età (anni)</th><th>Età (mesi)</th></tr>
<tr><td>1 anno</td><td>12 mesi</td></tr>
<tr><td>5 anni</td><td>60 mesi</td></tr>
<tr><td>10 anni</td><td>120 mesi</td></tr>
<tr><td>18 anni</td><td>216 mesi</td></tr>
<tr><td>25 anni</td><td>300 mesi</td></tr>
<tr><td>30 anni</td><td>360 mesi</td></tr>
<tr><td>40 anni</td><td>480 mesi</td></tr>
<tr><td>50 anni</td><td>600 mesi</td></tr>
</table>`
      },
      { h2: 'Perché l\'Età in Mesi è Importante', body: '<p>Medici e pediatri seguono lo sviluppo del bambino in mesi, non in anni, durante i primi 24–36 mesi di vita. Un bambino di 18 mesi si trova in una fase di sviluppo molto diversa da un bambino di 24 mesi, anche se entrambi sono tecnicamente "sotto i 2 anni".</p><p>I tribunali e i sistemi legali di alcuni paesi usano anche l\'età in mesi per accordi di affidamento e calcoli di prestazioni.</p>' },
    ],
    faqs: [
      { q: 'Quanti mesi ho se sono nato nel 1990?', a: 'Se sei nato nel 1990, hai circa 420–432 mesi nel 2026, a seconda del tuo mese di nascita esatto.' },
      { q: 'Come calcolare l\'età di un neonato in mesi?', a: 'Conta il numero di mesi completi dalla data di nascita a oggi. Ad esempio, un bambino nato il 10 gennaio ha esattamente 3 mesi il 10 aprile.' },
      { q: 'C\'è differenza tra età in mesi ed età gestazionale?', a: 'Sì. L\'età gestazionale si conta dal concepimento (circa 2 settimane prima della nascita). L\'età in mesi si conta sempre dalla data di nascita effettiva.' },
    ],
    pillar: { href: '/it/calcolare-eta/', label: 'Usa il calcolatore di età' },
    related: [{ href: '/it/che-generazione-sono/', label: 'A quale generazione appartengo?' }, { href: '/it/calcolatore-eta-neonato/', label: 'Calcolatore età neonato' }],
  },
  pl: {
    title: 'Jak Obliczyć Swój Wiek w Miesiącach — Przewodnik Krok po Kroku',
    metaDesc: 'Dowiedz się, jak obliczyć swój dokładny wiek w miesiącach i dniach. Zawiera wzór, przykłady i bezpłatny kalkulator wieku.',
    kicker: 'PRZEWODNIK WIEKU',
    h1: 'Jak Obliczyć Swój Wiek w Miesiącach',
    intro: 'Znajomość swojego wieku w miesiącach jest przydatna w formularzach medycznych, kamieniach milowych rozwoju i celach prawnych. Oto dokładna metoda.',
    sections: [
      {
        h2: 'Prosty Wzór',
        body: `<p>Aby obliczyć wiek w miesiącach:</p>
<ol>
<li>Policz liczbę pełnych lat między datą urodzenia a dzisiejszym dniem.</li>
<li>Pomnóż przez 12.</li>
<li>Dodaj liczbę dodatkowych pełnych miesięcy od ostatnich urodzin.</li>
</ol>
<p><strong>Przykład:</strong> Urodzony 15 marca 1990 — dziś jest 10 kwietnia 2026.</p>
<ul>
<li>Pełne lata: 2026 − 1990 = 36 lat</li>
<li>Dodatkowe miesiące: marzec → kwiecień = 0 pełnych miesięcy (10 kwietnia &lt; 15 marca)</li>
<li><strong>Razem: 36 × 12 = 432 miesiące</strong></li>
</ul>`
      },
      {
        h2: 'Tabela Wieku w Miesiącach',
        body: '<p>Dla szybkiej orientacji, ile miesięcy odpowiada popularnym wiekom:</p>',
        table: `<table>
<tr><th>Wiek (lata)</th><th>Wiek (miesiące)</th></tr>
<tr><td>1 rok</td><td>12 miesięcy</td></tr>
<tr><td>5 lat</td><td>60 miesięcy</td></tr>
<tr><td>10 lat</td><td>120 miesięcy</td></tr>
<tr><td>18 lat</td><td>216 miesięcy</td></tr>
<tr><td>25 lat</td><td>300 miesięcy</td></tr>
<tr><td>30 lat</td><td>360 miesięcy</td></tr>
<tr><td>40 lat</td><td>480 miesięcy</td></tr>
<tr><td>50 lat</td><td>600 miesięcy</td></tr>
</table>`
      },
      { h2: 'Dlaczego Wiek w Miesiącach Ma Znaczenie', body: '<p>Lekarze i pediatrzy śledzą rozwój dziecka w miesiącach, nie w latach, przez pierwsze 24–36 miesięcy życia. Dziecko w wieku 18 miesięcy jest na zupełnie innym etapie rozwoju niż dziecko 24-miesięczne, choć oba są technicznie „poniżej 2 lat".</p><p>Sądy i systemy prawne niektórych krajów używają też wieku w miesiącach przy ustalaniu opieki nad dzieckiem i obliczaniu świadczeń.</p>' },
    ],
    faqs: [
      { q: 'Ile mam miesięcy, jeśli urodziłem się w 1990 roku?', a: 'Jeśli urodziłeś się w 1990 roku, masz około 420–432 miesięcy w 2026 roku, w zależności od dokładnego miesiąca urodzenia.' },
      { q: 'Jak obliczyć wiek niemowlęcia w miesiącach?', a: 'Policz liczbę pełnych miesięcy od daty urodzenia do dzisiaj. Na przykład, niemowlę urodzone 10 stycznia ma dokładnie 3 miesiące 10 kwietnia.' },
      { q: 'Czy jest różnica między wiekiem w miesiącach a wiekiem ciążowym?', a: 'Tak. Wiek ciążowy liczy się od poczęcia (około 2 tygodnie przed urodzeniem). Wiek w miesiącach zawsze liczy się od rzeczywistej daty urodzenia.' },
    ],
    pillar: { href: '/pl/kalkulator-wieku/', label: 'Użyj kalkulatora wieku' },
    related: [{ href: '/pl/do-jakiego-pokolenia-naleze/', label: 'Do jakiego pokolenia należę?' }, { href: '/pl/kalkulator-wieku-niemowlecia/', label: 'Kalkulator wieku niemowlęcia' }],
  },
  ja: {
    title: '月齢で年齢を計算する方法 — ステップバイステップガイド',
    metaDesc: '月と日数で正確な年齢を計算する方法を学びましょう。計算式、例、無料の年齢計算機を含みます。',
    kicker: '年齢計算ガイド',
    h1: '月齢で年齢を計算する方法',
    intro: '月齢を知ることは、医療フォーム、発達の節目、法的な目的に役立ちます。以下に正確な計算方法を説明します。',
    sections: [
      {
        h2: 'シンプルな計算式',
        body: `<p>月齢を計算するには：</p>
<ol>
<li>生年月日から今日までの満年数を数えます。</li>
<li>12を掛けます。</li>
<li>最後の誕生日からの追加の満月数を足します。</li>
</ol>
<p><strong>例：</strong> 1990年3月15日生まれ — 今日は2026年4月10日。</p>
<ul>
<li>満年数: 2026 − 1990 = 36年</li>
<li>追加月数: 3月 → 4月 = 0ヶ月（4月10日 &lt; 3月15日）</li>
<li><strong>合計: 36 × 12 = 432ヶ月</strong></li>
</ul>`
      },
      {
        h2: '月齢換算表',
        body: '<p>一般的な年齢が何ヶ月に相当するかの早見表です：</p>',
        table: `<table>
<tr><th>年齢（歳）</th><th>年齢（月）</th></tr>
<tr><td>1歳</td><td>12ヶ月</td></tr>
<tr><td>5歳</td><td>60ヶ月</td></tr>
<tr><td>10歳</td><td>120ヶ月</td></tr>
<tr><td>18歳</td><td>216ヶ月</td></tr>
<tr><td>25歳</td><td>300ヶ月</td></tr>
<tr><td>30歳</td><td>360ヶ月</td></tr>
<tr><td>40歳</td><td>480ヶ月</td></tr>
<tr><td>50歳</td><td>600ヶ月</td></tr>
</table>`
      },
      { h2: '月齢が重要な理由', body: '<p>医師や小児科医は、生後24〜36ヶ月の間、子供の発達を年単位ではなく月単位で追跡します。18ヶ月の子供と24ヶ月の子供は、技術的には「2歳未満」であっても、発達段階が大きく異なります。</p><p>一部の国の裁判所や法律制度も、親権の取り決めや給付金の計算に月齢を使用します。</p>' },
    ],
    faqs: [
      { q: '1990年生まれは何ヶ月ですか？', a: '1990年生まれの場合、正確な誕生月によって異なりますが、2026年には約420〜432ヶ月です。' },
      { q: '赤ちゃんの月齢はどう計算しますか？', a: '生年月日から今日までの満月数を数えます。例えば、1月10日生まれの赤ちゃんは4月10日に生後ちょうど3ヶ月です。' },
      { q: '月齢と在胎週数は違いますか？', a: 'はい。在胎週数は受精から数えます（出生のおよそ2週間前）。月齢は常に実際の出生日から数えます。' },
    ],
    pillar: { href: '/ja/nenrei-keisan/', label: '年齢計算機を使う' },
    related: [{ href: '/ja/watashi-no-sedai-wa/', label: '私はどの世代？' }, { href: '/ja/akachan-nenrei-keisan/', label: '赤ちゃん年齢計算機' }],
  },
  ko: {
    title: '월 단위로 나이 계산하는 방법 — 단계별 가이드',
    metaDesc: '월과 일수로 정확한 나이를 계산하는 방법을 알아보세요. 공식, 예시, 무료 나이 계산기 포함.',
    kicker: '나이 계산 가이드',
    h1: '월 단위로 나이 계산하는 방법',
    intro: '월 단위로 나이를 아는 것은 의료 서식, 발달 이정표, 법적 목적에 유용합니다. 정확한 계산 방법을 알려드립니다.',
    sections: [
      {
        h2: '간단한 공식',
        body: `<p>월 단위로 나이를 계산하려면:</p>
<ol>
<li>생년월일부터 오늘까지 만 연수를 세세요.</li>
<li>12를 곱하세요.</li>
<li>마지막 생일 이후 추가 만 개월 수를 더하세요.</li>
</ol>
<p><strong>예시:</strong> 1990년 3월 15일생 — 오늘은 2026년 4월 10일.</p>
<ul>
<li>만 연수: 2026 − 1990 = 36년</li>
<li>추가 개월: 3월 → 4월 = 0개월 (4월 10일 &lt; 3월 15일)</li>
<li><strong>합계: 36 × 12 = 432개월</strong></li>
</ul>`
      },
      {
        h2: '월 단위 나이 표',
        body: '<p>일반적인 나이가 몇 개월에 해당하는지 빠른 참조표입니다:</p>',
        table: `<table>
<tr><th>나이 (년)</th><th>나이 (개월)</th></tr>
<tr><td>1세</td><td>12개월</td></tr>
<tr><td>5세</td><td>60개월</td></tr>
<tr><td>10세</td><td>120개월</td></tr>
<tr><td>18세</td><td>216개월</td></tr>
<tr><td>25세</td><td>300개월</td></tr>
<tr><td>30세</td><td>360개월</td></tr>
<tr><td>40세</td><td>480개월</td></tr>
<tr><td>50세</td><td>600개월</td></tr>
</table>`
      },
      { h2: '월 단위 나이가 중요한 이유', body: '<p>의사와 소아과 의사는 생후 24~36개월 동안 아동 발달을 연 단위가 아닌 월 단위로 추적합니다. 18개월 아이와 24개월 아이는 기술적으로 모두 "2세 미만"이지만 발달 단계가 매우 다릅니다.</p><p>일부 국가의 법원 및 법률 시스템도 양육권 합의 및 급여 계산에 월 단위 나이를 사용합니다.</p>' },
    ],
    faqs: [
      { q: '1990년생이면 몇 개월인가요?', a: '1990년생이라면 정확한 출생월에 따라 2026년에 약 420~432개월입니다.' },
      { q: '아기의 월령을 어떻게 계산하나요?', a: '생년월일부터 오늘까지 완전한 달 수를 세세요. 예를 들어, 1월 10일에 태어난 아기는 4월 10일에 정확히 3개월이 됩니다.' },
      { q: '월 단위 나이와 재태 연령의 차이가 있나요?', a: '네. 재태 연령은 수정 시점(출생 약 2주 전)부터 계산됩니다. 월 단위 나이는 항상 실제 출생일부터 계산됩니다.' },
    ],
    pillar: { href: '/ko/nayi-gyesan/', label: '나이 계산기 사용하기' },
    related: [{ href: '/ko/nae-sedae-neun/', label: '나는 어느 세대인가?' }, { href: '/ko/agi-nayi-gyesan/', label: '아기 나이 계산기' }],
  },
  nl: {
    title: 'Hoe Bereken Je Je Leeftijd in Maanden — Stap-voor-Stap Gids',
    metaDesc: 'Leer hoe je je exacte leeftijd in maanden en dagen berekent. Inclusief formule, voorbeelden en een gratis leeftijdscalculator.',
    kicker: 'LEEFTIJDSGIDS',
    h1: 'Hoe Bereken Je Je Leeftijd in Maanden',
    intro: 'Je leeftijd in maanden kennen is handig voor medische formulieren, ontwikkelingsmijlpalen en juridische doeleinden. Hier is de exacte methode.',
    sections: [
      {
        h2: 'De Eenvoudige Formule',
        body: `<p>Om je leeftijd in maanden te berekenen:</p>
<ol>
<li>Tel het aantal volledige jaren tussen je geboortedatum en vandaag.</li>
<li>Vermenigvuldig met 12.</li>
<li>Voeg het aantal extra volledige maanden toe sinds je laatste verjaardag.</li>
</ol>
<p><strong>Voorbeeld:</strong> Geboren op 15 maart 1990 — vandaag is het 10 april 2026.</p>
<ul>
<li>Volledige jaren: 2026 − 1990 = 36 jaar</li>
<li>Extra maanden: maart → april = 0 volledige maanden (10 april &lt; 15 maart)</li>
<li><strong>Totaal: 36 × 12 = 432 maanden</strong></li>
</ul>`
      },
      {
        h2: 'Leeftijd in Maanden Tabel',
        body: '<p>Ter snelle referentie: hoeveel maanden overeenkomen met veelvoorkomende leeftijden:</p>',
        table: `<table>
<tr><th>Leeftijd (jaren)</th><th>Leeftijd (maanden)</th></tr>
<tr><td>1 jaar</td><td>12 maanden</td></tr>
<tr><td>5 jaar</td><td>60 maanden</td></tr>
<tr><td>10 jaar</td><td>120 maanden</td></tr>
<tr><td>18 jaar</td><td>216 maanden</td></tr>
<tr><td>25 jaar</td><td>300 maanden</td></tr>
<tr><td>30 jaar</td><td>360 maanden</td></tr>
<tr><td>40 jaar</td><td>480 maanden</td></tr>
<tr><td>50 jaar</td><td>600 maanden</td></tr>
</table>`
      },
      { h2: 'Waarom Leeftijd in Maanden Belangrijk Is', body: '<p>Artsen en kinderartsen volgen de ontwikkeling van kinderen in maanden, niet in jaren, gedurende de eerste 24–36 maanden van het leven. Een kind van 18 maanden bevindt zich in een heel andere ontwikkelingsfase dan een kind van 24 maanden, ook al zijn beide technisch "jonger dan 2 jaar".</p><p>Rechtbanken en rechtssystemen in sommige landen gebruiken ook leeftijd in maanden voor voogdijregelingen en uitkeringsberekeningen.</p>' },
    ],
    faqs: [
      { q: 'Hoeveel maanden ben ik als ik in 1990 ben geboren?', a: 'Als je in 1990 bent geboren, ben je in 2026 ongeveer 420–432 maanden oud, afhankelijk van je exacte geboortemaand.' },
      { q: 'Hoe bereken je de leeftijd van een baby in maanden?', a: 'Tel het aantal volledige maanden van de geboortedatum tot vandaag. Een baby geboren op 10 januari is op 10 april precies 3 maanden oud.' },
      { q: 'Is er een verschil tussen leeftijd in maanden en zwangerschapsduur?', a: 'Ja. Zwangerschapsduur wordt geteld vanaf de bevruchting (ongeveer 2 weken voor de geboorte). Leeftijd in maanden wordt altijd geteld vanaf de werkelijke geboortedatum.' },
    ],
    pillar: { href: '/nl/leeftijd-berekenen/', label: 'Gebruik de leeftijdscalculator' },
    related: [{ href: '/nl/welke-generatie-ben-ik/', label: 'Tot welke generatie behoor ik?' }, { href: '/nl/baby-leeftijd-calculator/', label: 'Baby leeftijdscalculator' }],
  },
};

// ── Article 3: legal-drinking-age-by-country ──────────────
T['legal-drinking-age-by-country'] = {
  en: {
    title: 'Legal Drinking Age by Country (2026) — Complete World List',
    metaDesc: 'Full list of the legal drinking age in every country in 2026. Includes purchase age, consumption age, and countries with no legal drinking age.',
    kicker: 'AGE REFERENCE',
    h1: 'Legal Drinking Age by Country (2026)',
    intro: 'The legal drinking age varies widely around the world — from 16 in some European countries to 21 in the United States. Here is the complete list.',
    sections: [
      {
        h2: 'Drinking Age by Country',
        body: '<p>Most countries set the legal drinking age at 18. The main exceptions are the United States (21), Japan (20), and a handful of countries with no minimum age.</p>',
        table: `<table>
<tr><th>Country</th><th>Legal Drinking Age</th><th>Notes</th></tr>
<tr><td>United States</td><td>21</td><td>Purchase and public consumption</td></tr>
<tr><td>Canada</td><td>18 / 19</td><td>18 in Alberta, Manitoba, Québec; 19 elsewhere</td></tr>
<tr><td>United Kingdom</td><td>18</td><td></td></tr>
<tr><td>France</td><td>18</td><td>Unified age since 2009</td></tr>
<tr><td>Germany</td><td>16 / 18</td><td>16 for beer/wine; 18 for spirits</td></tr>
<tr><td>Spain</td><td>18</td><td></td></tr>
<tr><td>Italy</td><td>18</td><td></td></tr>
<tr><td>Japan</td><td>20</td><td></td></tr>
<tr><td>South Korea</td><td>19</td><td>International age</td></tr>
<tr><td>China</td><td>18</td><td></td></tr>
<tr><td>Australia</td><td>18</td><td></td></tr>
<tr><td>Brazil</td><td>18</td><td></td></tr>
<tr><td>Mexico</td><td>18</td><td></td></tr>
<tr><td>Netherlands</td><td>18</td><td>Raised from 16 in 2014</td></tr>
<tr><td>Poland</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Countries With No Legal Drinking Age', body: '<p>A small number of countries have no national law setting a minimum drinking age. These include Cambodia, Kosovo, and a few others. In many cases, local or religious customs still regulate alcohol consumption.</p>' },
      { h2: 'Why Is the US Drinking Age 21?', body: '<p>The US raised its national minimum drinking age to 21 in 1984 through the National Minimum Drinking Age Act. States that did not comply risked losing federal highway funding. The law was primarily motivated by drunk driving statistics among young adults aged 18–20.</p>' },
    ],
    faqs: [
      { q: 'What country has the lowest drinking age?', a: 'Germany allows beer and wine consumption from age 16, one of the lowest in the world. Some countries have no legal minimum age at all.' },
      { q: 'What is the drinking age in Europe?', a: 'Most European countries set the drinking age at 18. Germany allows beer and wine at 16. Some smaller nations have no minimum.' },
      { q: 'Can you drink at 18 in the US?', a: 'No. The legal drinking age in the United States is 21 nationwide.' },
    ],
    pillar: { href: '/age-calculator/', label: 'Calculate your age' },
    related: [{ href: '/what-generation-am-i/', label: 'What generation am I?' }, { href: '/how-to-calculate-age-in-months/', label: 'Age in months' }],
  },
  fr: {
    title: 'Âge légal pour boire par pays (2026) — Liste mondiale complète',
    metaDesc: 'Liste complète de l\'âge légal pour boire de l\'alcool dans chaque pays en 2026. Inclut l\'âge d\'achat et les pays sans âge légal.',
    kicker: 'RÉFÉRENCE ÂGE',
    h1: 'Âge légal pour boire par pays (2026)',
    intro: 'L\'âge légal pour consommer de l\'alcool varie beaucoup selon les pays — de 16 ans dans certains pays européens à 21 ans aux États-Unis. Voici la liste complète.',
    sections: [
      {
        h2: 'Âge légal par pays',
        body: '<p>La plupart des pays fixent l\'âge légal de consommation d\'alcool à 18 ans. Les principales exceptions sont les États-Unis (21 ans), le Japon (20 ans) et quelques pays sans âge minimum.</p>',
        table: `<table>
<tr><th>Pays</th><th>Âge légal</th><th>Notes</th></tr>
<tr><td>États-Unis</td><td>21</td><td>Achat et consommation publique</td></tr>
<tr><td>Canada</td><td>18 / 19</td><td>18 en Alberta, Manitoba, Québec ; 19 ailleurs</td></tr>
<tr><td>Royaume-Uni</td><td>18</td><td></td></tr>
<tr><td>France</td><td>18</td><td>Âge unifié depuis 2009</td></tr>
<tr><td>Allemagne</td><td>16 / 18</td><td>16 pour bière/vin ; 18 pour spiritueux</td></tr>
<tr><td>Espagne</td><td>18</td><td></td></tr>
<tr><td>Italie</td><td>18</td><td></td></tr>
<tr><td>Japon</td><td>20</td><td></td></tr>
<tr><td>Corée du Sud</td><td>19</td><td>Âge international</td></tr>
<tr><td>Australie</td><td>18</td><td></td></tr>
<tr><td>Brésil</td><td>18</td><td></td></tr>
<tr><td>Mexique</td><td>18</td><td></td></tr>
<tr><td>Pays-Bas</td><td>18</td><td>Relevé de 16 ans en 2014</td></tr>
<tr><td>Pologne</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Pays sans âge légal de consommation', body: '<p>Un petit nombre de pays n\'ont pas de loi nationale fixant un âge minimum pour la consommation d\'alcool. Parmi eux figurent le Cambodge, le Kosovo et quelques autres. Dans de nombreux cas, des coutumes locales ou religieuses régulent néanmoins la consommation d\'alcool.</p>' },
      { h2: 'Pourquoi l\'âge légal est 21 ans aux États-Unis ?', body: '<p>Les États-Unis ont relevé leur âge légal national de consommation d\'alcool à 21 ans en 1984. Les États qui ne se conformaient pas risquaient de perdre les financements fédéraux pour leurs routes. La loi était principalement motivée par les statistiques de conduite en état d\'ivresse chez les 18–20 ans.</p>' },
    ],
    faqs: [
      { q: 'Quel pays a l\'âge légal le plus bas pour l\'alcool ?', a: 'L\'Allemagne autorise la consommation de bière et de vin à partir de 16 ans. Certains pays n\'ont pas du tout d\'âge minimum légal.' },
      { q: 'Quel est l\'âge légal pour boire en Europe ?', a: 'La plupart des pays européens fixent l\'âge légal à 18 ans. L\'Allemagne autorise la bière et le vin à 16 ans.' },
      { q: 'Peut-on boire à 18 ans aux États-Unis ?', a: 'Non. L\'âge légal de consommation d\'alcool aux États-Unis est de 21 ans à l\'échelle nationale.' },
    ],
    pillar: { href: '/fr/calcul-age/', label: 'Calculer mon âge' },
    related: [{ href: '/fr/quelle-generation-suis-je/', label: 'Quelle est ma génération ?' }, { href: '/fr/calculer-age-en-mois/', label: 'Âge en mois' }],
  },
  es: {
    title: 'Edad legal para beber por país (2026) — Lista mundial completa',
    metaDesc: 'Lista completa de la edad legal para beber alcohol en cada país en 2026. Incluye la edad de compra y los países sin edad legal.',
    kicker: 'REFERENCIA DE EDAD',
    h1: 'Edad legal para beber por país (2026)',
    intro: 'La edad legal para consumir alcohol varía mucho en todo el mundo: desde los 16 años en algunos países europeos hasta los 21 en Estados Unidos. Aquí está la lista completa.',
    sections: [
      {
        h2: 'Edad legal por país',
        body: '<p>La mayoría de los países fijan la edad legal para beber en 18 años. Las principales excepciones son Estados Unidos (21), Japón (20) y unos pocos países sin edad mínima.</p>',
        table: `<table>
<tr><th>País</th><th>Edad legal</th><th>Notas</th></tr>
<tr><td>Estados Unidos</td><td>21</td><td>Compra y consumo público</td></tr>
<tr><td>Canadá</td><td>18 / 19</td><td>18 en Alberta, Manitoba, Quebec; 19 en otros</td></tr>
<tr><td>Reino Unido</td><td>18</td><td></td></tr>
<tr><td>Francia</td><td>18</td><td>Edad unificada desde 2009</td></tr>
<tr><td>Alemania</td><td>16 / 18</td><td>16 para cerveza/vino; 18 para licores</td></tr>
<tr><td>España</td><td>18</td><td></td></tr>
<tr><td>Italia</td><td>18</td><td></td></tr>
<tr><td>Japón</td><td>20</td><td></td></tr>
<tr><td>Corea del Sur</td><td>19</td><td>Edad internacional</td></tr>
<tr><td>Australia</td><td>18</td><td></td></tr>
<tr><td>Brasil</td><td>18</td><td></td></tr>
<tr><td>México</td><td>18</td><td></td></tr>
<tr><td>Países Bajos</td><td>18</td><td>Subida de 16 en 2014</td></tr>
<tr><td>Polonia</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Países sin edad legal para beber', body: '<p>Un pequeño número de países no tienen una ley nacional que establezca una edad mínima para beber. Entre ellos se encuentran Camboya, Kosovo y algunos otros. En muchos casos, las costumbres locales o religiosas aún regulan el consumo de alcohol.</p>' },
      { h2: '¿Por qué la edad para beber en EE.UU. es 21?', body: '<p>EE.UU. elevó su edad mínima nacional para beber a 21 años en 1984. Los estados que no cumplían arriesgaban perder fondos federales para carreteras. La ley fue motivada principalmente por las estadísticas de conducción bajo los efectos del alcohol entre jóvenes de 18 a 20 años.</p>' },
    ],
    faqs: [
      { q: '¿Qué país tiene la edad legal más baja para beber?', a: 'Alemania permite el consumo de cerveza y vino desde los 16 años. Algunos países no tienen ninguna edad mínima legal.' },
      { q: '¿Cuál es la edad para beber en Europa?', a: 'La mayoría de los países europeos fijan la edad para beber en 18 años. Alemania permite cerveza y vino a los 16.' },
      { q: '¿Se puede beber a los 18 en EE.UU.?', a: 'No. La edad legal para beber en Estados Unidos es 21 años a nivel nacional.' },
    ],
    pillar: { href: '/es/calcular-edad/', label: 'Calcular mi edad' },
    related: [{ href: '/es/que-generacion-soy/', label: '¿A qué generación pertenezco?' }, { href: '/es/calcular-edad-en-meses/', label: 'Edad en meses' }],
  },
  pt: {
    title: 'Idade Legal para Beber por País (2026) — Lista Mundial Completa',
    metaDesc: 'Lista completa da idade legal para consumo de álcool em todos os países em 2026. Inclui idade de compra e países sem idade legal.',
    kicker: 'REFERÊNCIA DE IDADE',
    h1: 'Idade Legal para Beber por País (2026)',
    intro: 'A idade legal para consumir álcool varia muito em todo o mundo — de 16 anos em alguns países europeus a 21 nos Estados Unidos. Aqui está a lista completa.',
    sections: [
      {
        h2: 'Idade para Beber por País',
        body: '<p>A maioria dos países fixa a idade legal para beber nos 18 anos. As principais exceções são os Estados Unidos (21), o Japão (20) e alguns países sem idade mínima.</p>',
        table: `<table>
<tr><th>País</th><th>Idade Legal</th><th>Notas</th></tr>
<tr><td>Estados Unidos</td><td>21</td><td>Compra e consumo público</td></tr>
<tr><td>Canadá</td><td>18 / 19</td><td>18 em Alberta, Manitoba, Québec; 19 noutros</td></tr>
<tr><td>Reino Unido</td><td>18</td><td></td></tr>
<tr><td>França</td><td>18</td><td>Idade unificada desde 2009</td></tr>
<tr><td>Alemanha</td><td>16 / 18</td><td>16 para cerveja/vinho; 18 para destilados</td></tr>
<tr><td>Espanha</td><td>18</td><td></td></tr>
<tr><td>Itália</td><td>18</td><td></td></tr>
<tr><td>Japão</td><td>20</td><td></td></tr>
<tr><td>Coreia do Sul</td><td>19</td><td>Idade internacional</td></tr>
<tr><td>China</td><td>18</td><td></td></tr>
<tr><td>Austrália</td><td>18</td><td></td></tr>
<tr><td>Brasil</td><td>18</td><td></td></tr>
<tr><td>México</td><td>18</td><td></td></tr>
<tr><td>Países Baixos</td><td>18</td><td>Aumentado de 16 em 2014</td></tr>
<tr><td>Polónia</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Países Sem Idade Legal para Beber', body: '<p>Um pequeno número de países não possui lei nacional que estabeleça uma idade mínima para beber. Entre eles estão o Camboja, o Kosovo e alguns outros. Em muitos casos, costumes locais ou religiosos ainda regulam o consumo de álcool.</p>' },
      { h2: 'Por Que a Idade para Beber nos EUA é 21?', body: '<p>Os EUA aumentaram a idade mínima nacional para beber para 21 anos em 1984. Os estados que não cumprissem arriscavam perder financiamento federal para estradas. A lei foi principalmente motivada pelas estatísticas de condução sob influência de álcool entre jovens de 18 a 20 anos.</p>' },
    ],
    faqs: [
      { q: 'Qual o país com a idade legal mais baixa para beber?', a: 'A Alemanha permite o consumo de cerveja e vinho a partir dos 16 anos, uma das mais baixas do mundo. Alguns países não têm idade mínima legal.' },
      { q: 'Qual é a idade para beber na Europa?', a: 'A maioria dos países europeus fixa a idade para beber nos 18 anos. A Alemanha permite cerveja e vinho aos 16.' },
      { q: 'Pode-se beber aos 18 nos EUA?', a: 'Não. A idade legal para beber nos Estados Unidos é 21 anos a nível nacional.' },
    ],
    pillar: { href: '/pt/calcular-idade/', label: 'Calcular a minha idade' },
    related: [{ href: '/pt/que-geracao-sou/', label: 'A que geração pertenço?' }, { href: '/pt/calcular-idade-em-meses/', label: 'Idade em meses' }],
  },
  de: {
    title: 'Legales Trinkalter nach Land (2026) — Vollständige Weltliste',
    metaDesc: 'Vollständige Liste des gesetzlichen Trinkalters in jedem Land im Jahr 2026. Enthält Kaufalter und Länder ohne gesetzliches Mindestalter.',
    kicker: 'ALTER-REFERENZ',
    h1: 'Legales Trinkalter nach Land (2026)',
    intro: 'Das gesetzliche Trinkalter variiert weltweit stark — von 16 Jahren in einigen europäischen Ländern bis zu 21 in den USA. Hier ist die vollständige Liste.',
    sections: [
      {
        h2: 'Trinkalter nach Land',
        body: '<p>Die meisten Länder setzen das gesetzliche Trinkalter auf 18 Jahre fest. Die wichtigsten Ausnahmen sind die USA (21), Japan (20) und einige Länder ohne Mindestalter.</p>',
        table: `<table>
<tr><th>Land</th><th>Legales Trinkalter</th><th>Anmerkungen</th></tr>
<tr><td>Vereinigte Staaten</td><td>21</td><td>Kauf und öffentlicher Konsum</td></tr>
<tr><td>Kanada</td><td>18 / 19</td><td>18 in Alberta, Manitoba, Québec; 19 anderswo</td></tr>
<tr><td>Vereinigtes Königreich</td><td>18</td><td></td></tr>
<tr><td>Frankreich</td><td>18</td><td>Einheitliches Alter seit 2009</td></tr>
<tr><td>Deutschland</td><td>16 / 18</td><td>16 für Bier/Wein; 18 für Spirituosen</td></tr>
<tr><td>Spanien</td><td>18</td><td></td></tr>
<tr><td>Italien</td><td>18</td><td></td></tr>
<tr><td>Japan</td><td>20</td><td></td></tr>
<tr><td>Südkorea</td><td>19</td><td>Internationales Alter</td></tr>
<tr><td>China</td><td>18</td><td></td></tr>
<tr><td>Australien</td><td>18</td><td></td></tr>
<tr><td>Brasilien</td><td>18</td><td></td></tr>
<tr><td>Mexiko</td><td>18</td><td></td></tr>
<tr><td>Niederlande</td><td>18</td><td>Von 16 auf 18 erhöht im Jahr 2014</td></tr>
<tr><td>Polen</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Länder Ohne Gesetzliches Trinkalter', body: '<p>Eine kleine Anzahl von Ländern hat kein nationales Gesetz, das ein Mindesttrinkalter festlegt. Dazu gehören Kambodscha, Kosovo und einige andere. In vielen Fällen regulieren lokale oder religiöse Bräuche den Alkoholkonsum dennoch.</p>' },
      { h2: 'Warum Ist das Trinkalter in den USA 21?', body: '<p>Die USA haben ihr nationales Mindesttrinkalter 1984 auf 21 Jahre angehoben. Staaten, die nicht mitgemacht haben, riskierten den Verlust von Bundesgeldern für Straßen. Das Gesetz war hauptsächlich durch Trunkenheitsfahrt-Statistiken bei 18- bis 20-Jährigen motiviert.</p>' },
    ],
    faqs: [
      { q: 'Welches Land hat das niedrigste gesetzliche Trinkalter?', a: 'Deutschland erlaubt den Konsum von Bier und Wein ab 16 Jahren, eines der niedrigsten weltweit. Einige Länder haben überhaupt kein gesetzliches Mindestalter.' },
      { q: 'Was ist das Trinkalter in Europa?', a: 'Die meisten europäischen Länder setzen das Trinkalter auf 18 Jahre fest. Deutschland erlaubt Bier und Wein ab 16.' },
      { q: 'Darf man in den USA mit 18 trinken?', a: 'Nein. Das gesetzliche Trinkalter in den Vereinigten Staaten beträgt landesweit 21 Jahre.' },
    ],
    pillar: { href: '/de/alter-berechnen/', label: 'Mein Alter berechnen' },
    related: [{ href: '/de/welche-generation-bin-ich/', label: 'Welcher Generation gehöre ich an?' }, { href: '/de/alter-in-monaten-berechnen/', label: 'Alter in Monaten' }],
  },
  it: {
    title: 'Età Legale per Bere per Paese (2026) — Lista Mondiale Completa',
    metaDesc: 'Lista completa dell\'età legale per bere alcolici in ogni paese nel 2026. Include l\'età d\'acquisto e i paesi senza età legale.',
    kicker: 'RIFERIMENTO ETÀ',
    h1: 'Età Legale per Bere per Paese (2026)',
    intro: 'L\'età legale per consumare alcolici varia notevolmente in tutto il mondo — da 16 anni in alcuni paesi europei a 21 negli Stati Uniti. Ecco la lista completa.',
    sections: [
      {
        h2: 'Età per Bere per Paese',
        body: '<p>La maggior parte dei paesi fissa l\'età legale per bere a 18 anni. Le principali eccezioni sono gli Stati Uniti (21), il Giappone (20) e alcuni paesi senza età minima.</p>',
        table: `<table>
<tr><th>Paese</th><th>Età Legale</th><th>Note</th></tr>
<tr><td>Stati Uniti</td><td>21</td><td>Acquisto e consumo pubblico</td></tr>
<tr><td>Canada</td><td>18 / 19</td><td>18 in Alberta, Manitoba, Québec; 19 altrove</td></tr>
<tr><td>Regno Unito</td><td>18</td><td></td></tr>
<tr><td>Francia</td><td>18</td><td>Età unificata dal 2009</td></tr>
<tr><td>Germania</td><td>16 / 18</td><td>16 per birra/vino; 18 per superalcolici</td></tr>
<tr><td>Spagna</td><td>18</td><td></td></tr>
<tr><td>Italia</td><td>18</td><td></td></tr>
<tr><td>Giappone</td><td>20</td><td></td></tr>
<tr><td>Corea del Sud</td><td>19</td><td>Età internazionale</td></tr>
<tr><td>Cina</td><td>18</td><td></td></tr>
<tr><td>Australia</td><td>18</td><td></td></tr>
<tr><td>Brasile</td><td>18</td><td></td></tr>
<tr><td>Messico</td><td>18</td><td></td></tr>
<tr><td>Paesi Bassi</td><td>18</td><td>Alzata da 16 nel 2014</td></tr>
<tr><td>Polonia</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Paesi Senza Età Legale per Bere', body: '<p>Un piccolo numero di paesi non ha una legge nazionale che stabilisca un\'età minima per bere. Tra questi ci sono Cambogia, Kosovo e alcuni altri. In molti casi, le usanze locali o religiose regolano comunque il consumo di alcol.</p>' },
      { h2: 'Perché l\'Età per Bere negli USA è 21?', body: '<p>Gli USA hanno alzato l\'età minima nazionale per bere a 21 anni nel 1984. Gli stati che non si adeguavano rischiavano di perdere i finanziamenti federali per le strade. La legge fu motivata principalmente dalle statistiche sulla guida in stato di ebbrezza tra i giovani dai 18 ai 20 anni.</p>' },
    ],
    faqs: [
      { q: 'Quale paese ha l\'età legale più bassa per bere?', a: 'La Germania consente il consumo di birra e vino a partire dai 16 anni, uno dei più bassi al mondo. Alcuni paesi non hanno affatto un\'età minima legale.' },
      { q: 'Qual è l\'età per bere in Europa?', a: 'La maggior parte dei paesi europei fissa l\'età per bere a 18 anni. La Germania consente birra e vino a 16.' },
      { q: 'Si può bere a 18 anni negli USA?', a: 'No. L\'età legale per bere negli Stati Uniti è 21 anni a livello nazionale.' },
    ],
    pillar: { href: '/it/calcolare-eta/', label: 'Calcola la mia età' },
    related: [{ href: '/it/che-generazione-sono/', label: 'A quale generazione appartengo?' }, { href: '/it/calcolare-eta-in-mesi/', label: 'Età in mesi' }],
  },
  pl: {
    title: 'Legalny Wiek do Picia według Kraju (2026) — Pełna Lista Światowa',
    metaDesc: 'Pełna lista legalnego wieku do spożywania alkoholu w każdym kraju w 2026 roku. Zawiera wiek zakupu i kraje bez minimalnego wieku.',
    kicker: 'ODNIESIENIE WIEKU',
    h1: 'Legalny Wiek do Picia według Kraju (2026)',
    intro: 'Legalny wiek spożywania alkoholu znacznie różni się na całym świecie — od 16 lat w niektórych krajach europejskich do 21 w Stanach Zjednoczonych. Oto pełna lista.',
    sections: [
      {
        h2: 'Wiek do Picia według Kraju',
        body: '<p>Większość krajów ustala legalny wiek do picia na 18 lat. Głównymi wyjątkami są Stany Zjednoczone (21), Japonia (20) oraz kilka krajów bez minimalnego wieku.</p>',
        table: `<table>
<tr><th>Kraj</th><th>Legalny Wiek</th><th>Uwagi</th></tr>
<tr><td>Stany Zjednoczone</td><td>21</td><td>Zakup i spożycie publiczne</td></tr>
<tr><td>Kanada</td><td>18 / 19</td><td>18 w Albercie, Manitobie, Québecu; 19 w pozostałych</td></tr>
<tr><td>Wielka Brytania</td><td>18</td><td></td></tr>
<tr><td>Francja</td><td>18</td><td>Ujednolicony wiek od 2009</td></tr>
<tr><td>Niemcy</td><td>16 / 18</td><td>16 dla piwa/wina; 18 dla spirytualiów</td></tr>
<tr><td>Hiszpania</td><td>18</td><td></td></tr>
<tr><td>Włochy</td><td>18</td><td></td></tr>
<tr><td>Japonia</td><td>20</td><td></td></tr>
<tr><td>Korea Południowa</td><td>19</td><td>Wiek międzynarodowy</td></tr>
<tr><td>Chiny</td><td>18</td><td></td></tr>
<tr><td>Australia</td><td>18</td><td></td></tr>
<tr><td>Brazylia</td><td>18</td><td></td></tr>
<tr><td>Meksyk</td><td>18</td><td></td></tr>
<tr><td>Holandia</td><td>18</td><td>Podwyższony z 16 w 2014</td></tr>
<tr><td>Polska</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Kraje Bez Legalnego Wieku do Picia', body: '<p>Niewielka liczba krajów nie posiada prawa krajowego ustalającego minimalny wiek do picia. Należą do nich Kambodża, Kosowo i kilka innych. W wielu przypadkach lokalne lub religijne zwyczaje nadal regulują spożycie alkoholu.</p>' },
      { h2: 'Dlaczego Wiek do Picia w USA wynosi 21 lat?', body: '<p>USA podniosły krajowy minimalny wiek do picia do 21 lat w 1984 roku. Stany, które nie zastosowały się, ryzykowały utratę federalnego finansowania dróg. Ustawa była motywowana głównie statystykami dotyczącymi jazdy po spożyciu alkoholu wśród osób w wieku 18–20 lat.</p>' },
    ],
    faqs: [
      { q: 'Który kraj ma najniższy legalny wiek do picia?', a: 'Niemcy zezwalają na spożywanie piwa i wina od 16 roku życia, co jest jednym z najniższych na świecie. Niektóre kraje nie mają żadnego minimalnego wieku prawnego.' },
      { q: 'Jaki jest wiek do picia w Europie?', a: 'Większość krajów europejskich ustala wiek do picia na 18 lat. Niemcy zezwalają na piwo i wino od 16 roku życia.' },
      { q: 'Czy można pić alkohol w USA mając 18 lat?', a: 'Nie. Legalny wiek do picia alkoholu w Stanach Zjednoczonych wynosi 21 lat w całym kraju.' },
    ],
    pillar: { href: '/pl/kalkulator-wieku/', label: 'Oblicz mój wiek' },
    related: [{ href: '/pl/do-jakiego-pokolenia-naleze/', label: 'Do jakiego pokolenia należę?' }, { href: '/pl/obliczanie-wieku-w-miesiacach/', label: 'Wiek w miesiącach' }],
  },
  ja: {
    title: '国別飲酒可能年齢（2026年）— 世界完全リスト',
    metaDesc: '2026年における各国の法定飲酒年齢の完全リスト。購入年齢、飲酒年齢、飲酒年齢が定められていない国を含みます。',
    kicker: '年齢参照ガイド',
    h1: '国別飲酒可能年齢（2026年）',
    intro: '法定飲酒年齢は世界各国で大きく異なります — ヨーロッパの一部では16歳、米国では21歳。完全なリストをご覧ください。',
    sections: [
      {
        h2: '国別飲酒年齢',
        body: '<p>ほとんどの国では法定飲酒年齢を18歳と定めています。主な例外は米国（21歳）、日本（20歳）、そして最低年齢を定めていない一部の国です。</p>',
        table: `<table>
<tr><th>国</th><th>法定飲酒年齢</th><th>備考</th></tr>
<tr><td>アメリカ合衆国</td><td>21</td><td>購入・公共の場での飲酒</td></tr>
<tr><td>カナダ</td><td>18 / 19</td><td>アルバータ州・マニトバ州・ケベック州は18歳；その他は19歳</td></tr>
<tr><td>イギリス</td><td>18</td><td></td></tr>
<tr><td>フランス</td><td>18</td><td>2009年より統一</td></tr>
<tr><td>ドイツ</td><td>16 / 18</td><td>ビール・ワインは16歳；蒸留酒は18歳</td></tr>
<tr><td>スペイン</td><td>18</td><td></td></tr>
<tr><td>イタリア</td><td>18</td><td></td></tr>
<tr><td>日本</td><td>20</td><td></td></tr>
<tr><td>韓国</td><td>19</td><td>国際年齢</td></tr>
<tr><td>中国</td><td>18</td><td></td></tr>
<tr><td>オーストラリア</td><td>18</td><td></td></tr>
<tr><td>ブラジル</td><td>18</td><td></td></tr>
<tr><td>メキシコ</td><td>18</td><td></td></tr>
<tr><td>オランダ</td><td>18</td><td>2014年に16歳から引き上げ</td></tr>
<tr><td>ポーランド</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: '飲酒年齢を定めていない国', body: '<p>一部の国では、最低飲酒年齢を定める国家法が存在しません。カンボジア、コソボなどがその例です。多くの場合、地域の慣習や宗教的規範がアルコール消費を規制しています。</p>' },
      { h2: '米国の飲酒年齢はなぜ21歳なのか？', body: '<p>米国は1984年に「国家最低飲酒年齢法」を通じて最低飲酒年齢を21歳に引き上げました。従わない州は連邦道路資金を失うリスクがありました。この法律の主な動機は、18〜20歳の若者による飲酒運転の統計でした。</p>' },
    ],
    faqs: [
      { q: '飲酒年齢が最も低い国はどこですか？', a: 'ドイツは16歳からビールとワインの飲酒を許可しており、世界最低水準の一つです。最低年齢を定めていない国も一部あります。' },
      { q: 'ヨーロッパの飲酒年齢は？', a: 'ほとんどのヨーロッパ諸国は飲酒年齢を18歳と定めています。ドイツは16歳からビールとワインを許可しています。' },
      { q: '米国では18歳でお酒を飲めますか？', a: 'いいえ。米国の法定飲酒年齢は全国一律21歳です。' },
    ],
    pillar: { href: '/ja/nenrei-keisan/', label: '年齢を計算する' },
    related: [{ href: '/ja/watashi-no-sedai-wa/', label: '私はどの世代？' }, { href: '/ja/nenrei-wo-tsuki-de-keisan-suru/', label: '月齢で年齢を計算する' }],
  },
  ko: {
    title: '나라별 음주 허용 연령 (2026) — 세계 완전 목록',
    metaDesc: '2026년 각 나라의 법적 음주 허용 연령 완전 목록. 구매 연령, 음주 연령, 법적 최소 연령이 없는 나라 포함.',
    kicker: '연령 참조 가이드',
    h1: '나라별 음주 허용 연령 (2026)',
    intro: '법적 음주 허용 연령은 전 세계적으로 크게 다릅니다 — 일부 유럽 국가에서는 16세, 미국에서는 21세입니다. 완전한 목록입니다.',
    sections: [
      {
        h2: '나라별 음주 연령',
        body: '<p>대부분의 나라는 법적 음주 연령을 18세로 정하고 있습니다. 주요 예외는 미국(21세), 일본(20세), 그리고 최소 연령이 없는 일부 나라입니다.</p>',
        table: `<table>
<tr><th>나라</th><th>법적 음주 연령</th><th>비고</th></tr>
<tr><td>미국</td><td>21</td><td>구매 및 공공 음주</td></tr>
<tr><td>캐나다</td><td>18 / 19</td><td>앨버타, 매니토바, 퀘벡은 18세; 그 외 19세</td></tr>
<tr><td>영국</td><td>18</td><td></td></tr>
<tr><td>프랑스</td><td>18</td><td>2009년부터 통일</td></tr>
<tr><td>독일</td><td>16 / 18</td><td>맥주/와인은 16세; 증류주는 18세</td></tr>
<tr><td>스페인</td><td>18</td><td></td></tr>
<tr><td>이탈리아</td><td>18</td><td></td></tr>
<tr><td>일본</td><td>20</td><td></td></tr>
<tr><td>대한민국</td><td>19</td><td>국제 나이</td></tr>
<tr><td>중국</td><td>18</td><td></td></tr>
<tr><td>호주</td><td>18</td><td></td></tr>
<tr><td>브라질</td><td>18</td><td></td></tr>
<tr><td>멕시코</td><td>18</td><td></td></tr>
<tr><td>네덜란드</td><td>18</td><td>2014년 16세에서 상향</td></tr>
<tr><td>폴란드</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: '법적 음주 연령이 없는 나라', body: '<p>소수의 나라는 최소 음주 연령을 정하는 국가법이 없습니다. 캄보디아, 코소보 및 기타 몇 나라가 이에 해당합니다. 많은 경우 지역 관습이나 종교적 관행이 여전히 알코올 소비를 규제합니다.</p>' },
      { h2: '미국의 음주 연령이 왜 21세인가요?', body: '<p>미국은 1984년 국가최소음주연령법을 통해 음주 연령을 21세로 올렸습니다. 따르지 않는 주는 연방 도로 자금을 잃을 위험이 있었습니다. 이 법은 주로 18~20세 청년들의 음주 운전 통계에 의해 동기 부여되었습니다.</p>' },
    ],
    faqs: [
      { q: '음주 연령이 가장 낮은 나라는 어디인가요?', a: '독일은 16세부터 맥주와 와인 음용을 허용하며, 세계에서 가장 낮은 수준 중 하나입니다. 일부 나라는 법적 최소 연령이 전혀 없습니다.' },
      { q: '유럽의 음주 연령은 어떻게 되나요?', a: '대부분의 유럽 국가는 음주 연령을 18세로 정하고 있습니다. 독일은 16세부터 맥주와 와인을 허용합니다.' },
      { q: '미국에서 18세에 음주할 수 있나요?', a: '아니요. 미국의 법적 음주 연령은 전국 일률적으로 21세입니다.' },
    ],
    pillar: { href: '/ko/nayi-gyesan/', label: '나이 계산하기' },
    related: [{ href: '/ko/nae-sedae-neun/', label: '나는 어느 세대인가?' }, { href: '/ko/nayi-reul-dal-ro-gyesan/', label: '월 단위 나이' }],
  },
  nl: {
    title: 'Legale Drinkleeftijd per Land (2026) — Volledige Wereldlijst',
    metaDesc: 'Volledige lijst van de legale drinkleeftijd in elk land in 2026. Inclusief aankoopLeeftijd en landen zonder wettelijke minimumleeftijd.',
    kicker: 'LEEFTIJDSREFERENTIE',
    h1: 'Legale Drinkleeftijd per Land (2026)',
    intro: 'De wettelijke drinkleeftijd verschilt sterk per land — van 16 jaar in sommige Europese landen tot 21 in de Verenigde Staten. Hier is de volledige lijst.',
    sections: [
      {
        h2: 'Drinkleeftijd per Land',
        body: '<p>De meeste landen stellen de wettelijke drinkleeftijd op 18 jaar. De belangrijkste uitzonderingen zijn de VS (21), Japan (20) en een handvol landen zonder minimumleeftijd.</p>',
        table: `<table>
<tr><th>Land</th><th>Legale Drinkleeftijd</th><th>Opmerkingen</th></tr>
<tr><td>Verenigde Staten</td><td>21</td><td>Aankoop en openbaar gebruik</td></tr>
<tr><td>Canada</td><td>18 / 19</td><td>18 in Alberta, Manitoba, Québec; 19 elders</td></tr>
<tr><td>Verenigd Koninkrijk</td><td>18</td><td></td></tr>
<tr><td>Frankrijk</td><td>18</td><td>Uniforme leeftijd sinds 2009</td></tr>
<tr><td>Duitsland</td><td>16 / 18</td><td>16 voor bier/wijn; 18 voor sterkedrank</td></tr>
<tr><td>Spanje</td><td>18</td><td></td></tr>
<tr><td>Italië</td><td>18</td><td></td></tr>
<tr><td>Japan</td><td>20</td><td></td></tr>
<tr><td>Zuid-Korea</td><td>19</td><td>Internationale leeftijd</td></tr>
<tr><td>China</td><td>18</td><td></td></tr>
<tr><td>Australië</td><td>18</td><td></td></tr>
<tr><td>Brazilië</td><td>18</td><td></td></tr>
<tr><td>Mexico</td><td>18</td><td></td></tr>
<tr><td>Nederland</td><td>18</td><td>Verhoogd van 16 in 2014</td></tr>
<tr><td>Polen</td><td>18</td><td></td></tr>
</table>`
      },
      { h2: 'Landen Zonder Wettelijke Drinkleeftijd', body: '<p>Een klein aantal landen heeft geen nationale wet die een minimale drinkleeftijd vastlegt. Hieronder vallen Cambodja, Kosovo en een paar anderen. In veel gevallen reguleren lokale of religieuze gewoonten de alcoholconsumptie nog steeds.</p>' },
      { h2: 'Waarom Is de Drinkleeftijd in de VS 21?', body: '<p>De VS verhoogde de nationale minimale drinkleeftijd naar 21 jaar in 1984 via de National Minimum Drinking Age Act. Staten die niet voldeden, riskeerden federale wegfinanciering te verliezen. De wet was voornamelijk ingegeven door statistieken over rijden onder invloed onder jongvolwassenen van 18–20 jaar.</p>' },
    ],
    faqs: [
      { q: 'Welk land heeft de laagste drinkleeftijd?', a: 'Duitsland staat bier- en wijnconsumptie toe vanaf 16 jaar, een van de laagste ter wereld. Sommige landen hebben helemaal geen wettelijke minimumleeftijd.' },
      { q: 'Wat is de drinkleeftijd in Europa?', a: 'De meeste Europese landen stellen de drinkleeftijd op 18 jaar. Duitsland staat bier en wijn toe vanaf 16.' },
      { q: 'Mag je op 18 jaar drinken in de VS?', a: 'Nee. De wettelijke drinkleeftijd in de Verenigde Staten is landelijk 21 jaar.' },
    ],
    pillar: { href: '/nl/leeftijd-berekenen/', label: 'Bereken mijn leeftijd' },
    related: [{ href: '/nl/welke-generatie-ben-ik/', label: 'Tot welke generatie behoor ik?' }, { href: '/nl/leeftijd-berekenen-in-maanden/', label: 'Leeftijd in maanden' }],
  },
};

// ── Module export ─────────────────────────────────────────
module.exports = {
  pages: [
    { id: 'what-generation-am-i',          slugs: { en: 'what-generation-am-i',          fr: 'fr/quelle-generation-suis-je',      es: 'es/que-generacion-soy',         pt: 'pt/que-geracao-sou',                      de: 'de/welche-generation-bin-ich',         it: 'it/che-generazione-sono',               pl: 'pl/do-jakiego-pokolenia-naleze',          ja: 'ja/watashi-no-sedai-wa',               ko: 'ko/nae-sedae-neun',                     nl: 'nl/welke-generatie-ben-ik' } },
    { id: 'how-to-calculate-age-in-months', slugs: { en: 'how-to-calculate-age-in-months', fr: 'fr/calculer-age-en-mois',           es: 'es/calcular-edad-en-meses',     pt: 'pt/calcular-idade-em-meses',              de: 'de/alter-in-monaten-berechnen',        it: 'it/calcolare-eta-in-mesi',              pl: 'pl/obliczanie-wieku-w-miesiacach',        ja: 'ja/nenrei-wo-tsuki-de-keisan-suru',     ko: 'ko/nayi-reul-dal-ro-gyesan',            nl: 'nl/leeftijd-berekenen-in-maanden' } },
    { id: 'legal-drinking-age-by-country',  slugs: { en: 'legal-drinking-age-by-country',  fr: 'fr/age-legal-alcool-par-pays',      es: 'es/edad-legal-alcohol-por-pais', pt: 'pt/idade-legal-para-beber-por-pais',     de: 'de/legales-trinkalter-nach-land',      it: 'it/eta-legale-per-bere-per-paese',      pl: 'pl/legalny-wiek-do-picia-wedlug-kraju',  ja: 'ja/kuni-betsu-legal-drinking-age',     ko: 'ko/nara-byeol-eumju-heogyong-yeonryeong', nl: 'nl/legale-drinkleeftijd-per-land' } },
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
