// Hub pages: /birth-years/ and /year-in-history/ (+ 9 translations each = 20 pages total)
// Fixes the orphan-page problem for born-in-YYYY and what-happened-in-YYYY pages.

const LANGS = ['en', 'fr', 'es', 'pt', 'de', 'it', 'pl', 'ja', 'ko', 'nl'];

const HUB_SLUGS = {
  birth: {
    en: 'birth-years',
    fr: 'fr/annees-de-naissance',
    es: 'es/anos-de-nacimiento',
    pt: 'pt/anos-de-nascimento',
    de: 'de/geburtsjahre',
    it: 'it/anni-di-nascita',
    pl: 'pl/lata-urodzenia',
    ja: 'ja/umare-doshi',
    ko: 'ko/chulsaeng-yeondo',
    nl: 'nl/geboortejaren',
  },
  event: {
    en: 'year-in-history',
    fr: 'fr/evenements-par-annee',
    es: 'es/acontecimientos-por-ano',
    pt: 'pt/eventos-por-ano',
    de: 'de/ereignisse-nach-jahr',
    it: 'it/eventi-per-anno',
    pl: 'pl/wydarzenia-wedlug-roku',
    ja: 'ja/nenkan-dekigoto',
    ko: 'ko/yeondo-byeol-sageon',
    nl: 'nl/gebeurtenissen-per-jaar',
  },
};

const BIRTH_YEARS = [];
for (let y = 1930; y <= 2024; y++) BIRTH_YEARS.push(y);

const EVENT_YEARS = [];
for (let y = 1905; y <= 2025; y++) EVENT_YEARS.push(y);

// Slug-builders for individual year pages (mirrors src/tools/born-in.js and src/tools/year-events.js)
const BORN_HREF = {
  en: y => `/born-in-${y}/`,
  fr: y => `/fr/ne-en-${y}/`,
  es: y => `/es/nacido-en-${y}/`,
  pt: y => `/pt/nascido-em-${y}/`,
  de: y => `/de/geboren-in-${y}/`,
  it: y => `/it/nato-nel-${y}/`,
  pl: y => `/pl/urodzony-w-${y}/`,
  ja: y => `/ja/umareta-${y}/`,
  ko: y => `/ko/taeeona-${y}/`,
  nl: y => `/nl/geboren-in-${y}/`,
};

const EVENT_HREF = {
  en: y => `/what-happened-in-${y}/`,
  fr: y => `/fr/que-s-est-il-passe-en-${y}/`,
  es: y => `/es/que-paso-en-${y}/`,
  pt: y => `/pt/o-que-aconteceu-em-${y}/`,
  de: y => `/de/was-geschah-${y}/`,
  it: y => `/it/cosa-e-successo-nel-${y}/`,
  pl: y => `/pl/co-sie-wydarzylo-w-${y}/`,
  ja: y => `/ja/nani-ga-okita-${y}/`,
  ko: y => `/ko/museun-il-i-${y}/`,
  nl: y => `/nl/wat-gebeurde-er-in-${y}/`,
};

// Per-language text for each hub
const I18N = {
  birth: {
    en: {
      title: 'Birth Year Calculator — Find Your Age by Year of Birth | DateCalc.app',
      metaDesc: 'Find your age by birth year. Every year from 1930 to 2024 — calculate how old you are in 2026, your generation, and the world you were born into.',
      kicker: 'Age by year of birth',
      h1: 'Birth Year Calculator — Find Your Age by Year of Birth',
      intro: '<p>Every year comes with its own story — the songs on the radio, the prices at the grocery store, the headlines everyone remembers. Your birth year is the starting point of that story. Whether you were born in 1935 or 2024, the pages linked below calculate your exact age in 2026 and put your year in context: the generation you belong to, the events that shaped it, and the cultural moments you lived through.</p><p>This hub covers every year from 1930 to 2024. Each year has its own page telling you how old you are today, how many days you have lived, and what your exact age will be on your next birthday. Beyond the numbers, each page surfaces music, film, technology, and historical milestones from the year you were born — a quick snapshot of the world you arrived in, useful for reunions, birthday cards, or simply curiosity.</p><p>Use the decade list below to jump straight to your year of birth. If you were born in the 1990s, follow the "1990s" row and pick your exact year. The same applies for every decade from the 1930s through the 2020s. For age calculated to the day, pair any birth-year page with our <a href="/age-calculator/">age calculator</a> — it accepts a full date and returns years, months, weeks, and days.</p>',
      pickDecade: 'Pick a decade',
      exploreCta: 'All 95 years from 1930 to 2024',
      home: 'Home',
      self: 'Birth Years',
      seeAllLabel: 'See all birth years',
    },
    fr: {
      title: 'Calculateur d\'âge par année de naissance | DateCalc.app',
      metaDesc: 'Calculez votre âge selon votre année de naissance. Chaque année de 1930 à 2024 — âge en 2026, génération, et monde dans lequel vous êtes né.',
      kicker: 'Âge par année de naissance',
      h1: 'Calculateur d\'âge par année de naissance',
      intro: '<p>Chaque année a son histoire — les chansons à la radio, les prix au supermarché, les titres que tout le monde garde en mémoire. Votre année de naissance est le point de départ de cette histoire. Que vous soyez né en 1935 ou en 2024, les pages ci-dessous calculent votre âge exact en 2026 et replacent votre année dans son contexte : la génération à laquelle vous appartenez, les événements qui l\'ont marquée, et les moments culturels que vous avez vécus.</p><p>Ce hub couvre chaque année de 1930 à 2024. Chaque année dispose de sa propre page indiquant votre âge aujourd\'hui, le nombre de jours vécus, et l\'âge que vous aurez à votre prochain anniversaire. Au-delà des chiffres, chaque page révèle la musique, le cinéma, la technologie et les grandes étapes historiques de votre année de naissance — un aperçu rapide du monde dans lequel vous êtes arrivé, utile pour des retrouvailles, une carte d\'anniversaire ou simple curiosité.</p><p>Utilisez la liste par décennie ci-dessous pour accéder directement à votre année. Si vous êtes né dans les années 1990, suivez la ligne "Années 1990" et choisissez votre année exacte. La même logique s\'applique pour chaque décennie, des années 1930 aux années 2020. Pour un âge calculé au jour près, combinez n\'importe quelle page avec notre <a href="/fr/calculateur-age/">calculateur d\'âge</a> — il accepte une date complète et renvoie années, mois, semaines et jours.</p>',
      pickDecade: 'Choisir une décennie',
      exploreCta: 'Les 95 années de 1930 à 2024',
      home: 'Accueil',
      self: 'Années de naissance',
      seeAllLabel: 'Voir toutes les années de naissance',
    },
    es: {
      title: 'Calculadora de edad por año de nacimiento | DateCalc.app',
      metaDesc: 'Calcula tu edad según tu año de nacimiento. Cada año desde 1930 hasta 2024 — edad en 2026, generación y el mundo en el que naciste.',
      kicker: 'Edad por año de nacimiento',
      h1: 'Calculadora de edad por año de nacimiento',
      intro: '<p>Cada año tiene su propia historia: las canciones de la radio, los precios del supermercado, los titulares que todos recuerdan. Tu año de nacimiento es el punto de partida de esa historia. Tanto si naciste en 1935 como en 2024, las páginas enlazadas a continuación calculan tu edad exacta en 2026 y sitúan tu año en contexto: la generación a la que perteneces, los acontecimientos que la marcaron y los momentos culturales que viviste.</p><p>Este hub cubre cada año entre 1930 y 2024. Cada año tiene su propia página que te dice qué edad tienes hoy, cuántos días has vivido y qué edad exacta tendrás en tu próximo cumpleaños. Más allá de los números, cada página muestra música, cine, tecnología e hitos históricos del año en que naciste — una instantánea rápida del mundo al que llegaste, útil para reencuentros, tarjetas de cumpleaños o simple curiosidad.</p><p>Utiliza la lista por décadas de abajo para ir directamente a tu año de nacimiento. Si naciste en los años 90, sigue la fila "Años 90" y elige tu año exacto. Lo mismo ocurre con cada década, desde los años 30 hasta los años 2020. Para una edad calculada al día, combina cualquier página con nuestra <a href="/es/calculadora-edad/">calculadora de edad</a> — acepta una fecha completa y devuelve años, meses, semanas y días.</p>',
      pickDecade: 'Elige una década',
      exploreCta: 'Los 95 años desde 1930 hasta 2024',
      home: 'Inicio',
      self: 'Años de nacimiento',
      seeAllLabel: 'Ver todos los años de nacimiento',
    },
    pt: {
      title: 'Calculadora de idade por ano de nascimento | DateCalc.app',
      metaDesc: 'Calcule sua idade pelo ano de nascimento. Todos os anos de 1930 a 2024 — idade em 2026, geração e o mundo em que você nasceu.',
      kicker: 'Idade por ano de nascimento',
      h1: 'Calculadora de idade por ano de nascimento',
      intro: '<p>Cada ano tem sua própria história: as músicas do rádio, os preços do supermercado, as manchetes que todos lembram. Seu ano de nascimento é o ponto de partida dessa história. Se você nasceu em 1935 ou em 2024, as páginas listadas abaixo calculam sua idade exata em 2026 e colocam seu ano em contexto: a geração a que você pertence, os eventos que a marcaram e os momentos culturais que você viveu.</p><p>Este hub cobre todos os anos de 1930 a 2024. Cada ano tem sua própria página que diz quantos anos você tem hoje, quantos dias já viveu e qual será sua idade exata no próximo aniversário. Além dos números, cada página destaca música, cinema, tecnologia e marcos históricos do ano em que você nasceu — um retrato rápido do mundo em que chegou, útil para reencontros, cartões de aniversário ou pura curiosidade.</p><p>Use a lista por década abaixo para ir direto ao seu ano de nascimento. Se você nasceu na década de 1990, siga a linha "Anos 1990" e escolha seu ano exato. O mesmo vale para cada década, dos anos 1930 aos anos 2020. Para uma idade calculada ao dia, combine qualquer página com nossa <a href="/pt/calculadora-idade/">calculadora de idade</a> — aceita uma data completa e retorna anos, meses, semanas e dias.</p>',
      pickDecade: 'Escolha uma década',
      exploreCta: 'Os 95 anos de 1930 a 2024',
      home: 'Início',
      self: 'Anos de nascimento',
      seeAllLabel: 'Ver todos os anos de nascimento',
    },
    de: {
      title: 'Altersrechner nach Geburtsjahr | DateCalc.app',
      metaDesc: 'Berechnen Sie Ihr Alter nach Geburtsjahr. Jedes Jahr von 1930 bis 2024 — Alter 2026, Generation und die Welt, in die Sie geboren wurden.',
      kicker: 'Alter nach Geburtsjahr',
      h1: 'Altersrechner nach Geburtsjahr',
      intro: '<p>Jedes Jahr hat seine eigene Geschichte — die Lieder im Radio, die Preise im Supermarkt, die Schlagzeilen, die alle noch erinnern. Ihr Geburtsjahr ist der Ausgangspunkt dieser Geschichte. Ob Sie 1935 oder 2024 geboren wurden, die unten verlinkten Seiten berechnen Ihr genaues Alter im Jahr 2026 und setzen Ihr Jahr in Kontext: die Generation, zu der Sie gehören, die Ereignisse, die sie geprägt haben, und die kulturellen Momente, die Sie miterlebt haben.</p><p>Dieses Hub deckt jedes Jahr von 1930 bis 2024 ab. Jedes Jahr hat eine eigene Seite, die Ihnen sagt, wie alt Sie heute sind, wie viele Tage Sie gelebt haben und wie alt Sie an Ihrem nächsten Geburtstag genau sein werden. Neben den Zahlen zeigen die Seiten Musik, Film, Technologie und historische Meilensteine Ihres Geburtsjahres — ein schneller Blick auf die Welt, in die Sie kamen, nützlich für Treffen, Geburtstagskarten oder reine Neugier.</p><p>Nutzen Sie die Jahrzehnt-Liste unten, um direkt zu Ihrem Geburtsjahr zu springen. Wer in den 1990er Jahren geboren wurde, folgt der Zeile "1990er" und wählt das genaue Jahr. Gleiches gilt für jedes Jahrzehnt, von den 1930ern bis zu den 2020ern. Für das Alter auf den Tag genau kombinieren Sie jede Seite mit unserem <a href="/de/altersrechner/">Altersrechner</a> — er akzeptiert ein vollständiges Datum und liefert Jahre, Monate, Wochen und Tage.</p>',
      pickDecade: 'Jahrzehnt auswählen',
      exploreCta: 'Alle 95 Jahre von 1930 bis 2024',
      home: 'Start',
      self: 'Geburtsjahre',
      seeAllLabel: 'Alle Geburtsjahre ansehen',
    },
    it: {
      title: 'Calcolatore di età per anno di nascita | DateCalc.app',
      metaDesc: 'Calcola la tua età in base all\'anno di nascita. Ogni anno dal 1930 al 2024 — età nel 2026, generazione e il mondo in cui sei nato.',
      kicker: 'Età per anno di nascita',
      h1: 'Calcolatore di età per anno di nascita',
      intro: '<p>Ogni anno ha la sua storia — le canzoni alla radio, i prezzi al supermercato, i titoli che tutti ricordano. Il tuo anno di nascita è il punto di partenza di quella storia. Che tu sia nato nel 1935 o nel 2024, le pagine collegate qui sotto calcolano la tua età esatta nel 2026 e mettono il tuo anno in prospettiva: la generazione a cui appartieni, gli eventi che l\'hanno plasmata e i momenti culturali che hai vissuto.</p><p>Questo hub copre ogni anno dal 1930 al 2024. Ciascun anno ha una propria pagina che indica quanti anni hai oggi, quanti giorni hai vissuto e quanti anni avrai esattamente al prossimo compleanno. Oltre ai numeri, ogni pagina racconta musica, cinema, tecnologia e tappe storiche del tuo anno di nascita — un\'istantanea rapida del mondo in cui sei arrivato, utile per rimpatriate, biglietti di compleanno o semplice curiosità.</p><p>Utilizza l\'elenco per decennio qui sotto per andare direttamente al tuo anno di nascita. Se sei nato negli anni \'90, segui la riga "Anni \'90" e scegli l\'anno esatto. Lo stesso vale per ogni decennio, dagli anni \'30 agli anni 2020. Per l\'età calcolata al giorno, abbina una qualsiasi pagina al nostro <a href="/it/calcolatore-eta/">calcolatore di età</a> — accetta una data completa e restituisce anni, mesi, settimane e giorni.</p>',
      pickDecade: 'Scegli un decennio',
      exploreCta: 'I 95 anni dal 1930 al 2024',
      home: 'Home',
      self: 'Anni di nascita',
      seeAllLabel: 'Vedi tutti gli anni di nascita',
    },
    pl: {
      title: 'Kalkulator wieku według roku urodzenia | DateCalc.app',
      metaDesc: 'Oblicz swój wiek według roku urodzenia. Każdy rok od 1930 do 2024 — wiek w 2026, pokolenie i świat, w którym się urodziłeś.',
      kicker: 'Wiek według roku urodzenia',
      h1: 'Kalkulator wieku według roku urodzenia',
      intro: '<p>Każdy rok ma swoją historię — piosenki w radiu, ceny w sklepie, nagłówki, które wszyscy pamiętają. Twój rok urodzenia to punkt wyjścia tej historii. Niezależnie od tego, czy urodziłeś się w 1935, czy w 2024 roku, strony poniżej obliczają Twój dokładny wiek w 2026 roku i umieszczają Twój rocznik w kontekście: pokolenia, do którego należysz, wydarzeń, które je ukształtowały, i kulturowych momentów, które przeżyłeś.</p><p>Ten hub obejmuje każdy rok od 1930 do 2024. Każdy rok ma własną stronę, która informuje, ile masz lat dzisiaj, ile dni przeżyłeś i ile dokładnie będziesz mieć w następne urodziny. Poza liczbami każda strona przedstawia muzykę, film, technologię i kamienie milowe Twojego roku urodzenia — szybki obraz świata, do którego przyszedłeś, przydatny przy spotkaniach, kartkach urodzinowych lub zwykłej ciekawości.</p><p>Skorzystaj z listy dekad poniżej, aby przejść bezpośrednio do swojego roku urodzenia. Jeśli urodziłeś się w latach 90., przejdź do wiersza "Lata 90." i wybierz dokładny rok. To samo dotyczy każdej dekady, od lat 30. po lata 2020. Aby uzyskać wiek z dokładnością co do dnia, połącz dowolną stronę z naszym <a href="/pl/kalkulator-wieku/">kalkulatorem wieku</a> — akceptuje pełną datę i zwraca lata, miesiące, tygodnie i dni.</p>',
      pickDecade: 'Wybierz dekadę',
      exploreCta: 'Wszystkie 95 lat od 1930 do 2024',
      home: 'Strona główna',
      self: 'Lata urodzenia',
      seeAllLabel: 'Zobacz wszystkie lata urodzenia',
    },
    ja: {
      title: '生まれ年別の年齢計算機 | DateCalc.app',
      metaDesc: '生まれ年から年齢を計算。1930年から2024年までの各年 — 2026年の年齢、世代、そしてあなたが生まれた世界。',
      kicker: '生まれ年別の年齢',
      h1: '生まれ年別の年齢計算機',
      intro: '<p>どの年にもそれぞれの物語があります — ラジオで流れた歌、スーパーマーケットの価格、誰もが覚えている見出し。あなたの生まれ年は、その物語の出発点です。1935年生まれであれ2024年生まれであれ、以下のリンク先ページは2026年時点でのあなたの正確な年齢を計算し、その年を文脈の中に置きます：あなたの属する世代、その世代を形作った出来事、そしてあなたが経験した文化的な瞬間。</p><p>このハブは1930年から2024年までのすべての年を網羅しています。各年には専用ページがあり、今日のあなたの年齢、これまで生きた日数、次の誕生日で何歳になるかを示します。数字だけでなく、各ページには生まれた年の音楽、映画、技術、歴史的な節目が掲載されています — あなたが生まれた世界のスナップショットです。同窓会、誕生日カード、あるいは単なる好奇心に役立ちます。</p><p>下の年代別リストを使って、自分の生まれ年に直接ジャンプできます。1990年代生まれなら「1990年代」の行をたどって正確な年を選びます。1930年代から2020年代までの各年代について同じことが言えます。日単位で年齢を計算するには、いずれかのページを当サイトの<a href="/ja/nenrei-keisan/">年齢計算機</a>と組み合わせてください — 完全な日付を入力すると、年、月、週、日が返されます。</p>',
      pickDecade: '年代を選択',
      exploreCta: '1930年から2024年までの95年',
      home: 'ホーム',
      self: '生まれ年',
      seeAllLabel: 'すべての生まれ年を見る',
    },
    ko: {
      title: '출생 연도별 나이 계산기 | DateCalc.app',
      metaDesc: '출생 연도로 나이를 계산하세요. 1930년부터 2024년까지 매년 — 2026년 나이, 세대, 당신이 태어난 세상.',
      kicker: '출생 연도별 나이',
      h1: '출생 연도별 나이 계산기',
      intro: '<p>모든 해에는 저마다의 이야기가 있습니다 — 라디오에서 흘러나온 노래, 슈퍼마켓의 물가, 모두가 기억하는 헤드라인. 당신의 출생 연도는 그 이야기의 출발점입니다. 1935년생이든 2024년생이든, 아래에 연결된 페이지들은 2026년 기준의 정확한 나이를 계산해 주고 당신의 해를 맥락 속에 놓습니다: 당신이 속한 세대, 그 세대를 형성한 사건들, 그리고 당신이 경험한 문화적 순간들.</p><p>이 허브는 1930년부터 2024년까지 모든 해를 다룹니다. 각 해마다 전용 페이지가 있어 오늘 당신의 나이, 지금까지 살아온 날 수, 그리고 다음 생일에 정확히 몇 살이 되는지 알려줍니다. 숫자 너머로 각 페이지는 당신이 태어난 해의 음악, 영화, 기술, 역사적 이정표를 보여줍니다 — 동창회, 생일 카드, 혹은 단순한 호기심에 유용한, 당신이 도착한 세상의 빠른 스냅숏입니다.</p><p>아래 연대별 목록을 사용하여 자신의 출생 연도로 바로 이동할 수 있습니다. 1990년대 출생이라면 "1990년대" 줄을 따라가 정확한 해를 선택하세요. 1930년대부터 2020년대까지 모든 연대가 동일합니다. 일 단위까지 나이를 계산하려면, 아무 페이지든 저희 <a href="/ko/nai-gyesan/">나이 계산기</a>와 결합하세요 — 완전한 날짜를 입력하면 연, 월, 주, 일 단위로 반환합니다.</p>',
      pickDecade: '연대 선택',
      exploreCta: '1930년부터 2024년까지 95년',
      home: '홈',
      self: '출생 연도',
      seeAllLabel: '모든 출생 연도 보기',
    },
    nl: {
      title: 'Leeftijdscalculator per geboortejaar | DateCalc.app',
      metaDesc: 'Bereken je leeftijd op basis van je geboortejaar. Elk jaar van 1930 tot 2024 — leeftijd in 2026, generatie en de wereld waarin je geboren werd.',
      kicker: 'Leeftijd per geboortejaar',
      h1: 'Leeftijdscalculator per geboortejaar',
      intro: '<p>Elk jaar heeft zijn eigen verhaal — de liedjes op de radio, de prijzen in de supermarkt, de koppen die iedereen zich herinnert. Je geboortejaar is het beginpunt van dat verhaal. Of je nu in 1935 of in 2024 geboren bent, de hieronder gelinkte pagina\'s berekenen je exacte leeftijd in 2026 en plaatsen je jaar in context: de generatie waartoe je behoort, de gebeurtenissen die haar vormden en de culturele momenten die je meemaakte.</p><p>Deze hub bestrijkt elk jaar van 1930 tot 2024. Elk jaar heeft een eigen pagina die je vertelt hoe oud je vandaag bent, hoeveel dagen je al geleefd hebt en hoe oud je precies wordt op je volgende verjaardag. Naast de cijfers belicht elke pagina muziek, film, technologie en historische mijlpalen uit je geboortejaar — een snelle momentopname van de wereld waarin je terechtkwam, handig voor reünies, verjaardagskaarten of pure nieuwsgierigheid.</p><p>Gebruik de decennialijst hieronder om direct naar je geboortejaar te springen. Als je in de jaren 90 geboren bent, volg dan de rij "Jaren 90" en kies je exacte jaar. Hetzelfde geldt voor elk decennium, van de jaren 30 tot de jaren 2020. Voor een leeftijd tot op de dag nauwkeurig combineer je elke pagina met onze <a href="/nl/leeftijdscalculator/">leeftijdscalculator</a> — die accepteert een volledige datum en geeft jaren, maanden, weken en dagen terug.</p>',
      pickDecade: 'Kies een decennium',
      exploreCta: 'Alle 95 jaar van 1930 tot 2024',
      home: 'Home',
      self: 'Geboortejaren',
      seeAllLabel: 'Bekijk alle geboortejaren',
    },
  },
  event: {
    en: {
      title: 'Year in History — Browse Events by Year | DateCalc.app',
      metaDesc: 'Browse major events by year, from 1905 to 2025. World news, music, film, technology, and culture — one dedicated page for every year.',
      kicker: 'History by year',
      h1: 'Year in History — Browse Events by Year',
      intro: '<p>History is easier to grasp one year at a time. A date in the abstract means little; a date tied to a song release, a political turning point, or the launch of a technology becomes anchor-like. This hub is a doorway to 121 single-year pages, each one devoted to a twelve-month slice of modern history from 1905 to 2025.</p><p>Each year page gathers the events that defined it — world affairs, discoveries, sports, and the culture people consumed in real time. If you want to know what happened the year your grandparents married, the year you graduated, or the year an ancestor crossed an ocean, start here. The hub acts as an index; the individual pages carry the stories.</p><p>Browse by decade below: the 1900s, 1910s, 1920s, and so on through the 2020s. Within each decade, every year is listed as a direct link. Pair this research with our <a href="/age-calculator/">age calculator</a> or the <a href="/birth-years/">birth year index</a> when you need to line up biographies, reunion programs, or simply understand how a specific year sat inside the larger arc of the century.</p>',
      pickDecade: 'Pick a decade',
      exploreCta: 'All 121 years from 1905 to 2025',
      home: 'Home',
      self: 'Year in History',
      seeAllLabel: 'See all years',
    },
    fr: {
      title: 'Événements par année — Histoire année par année | DateCalc.app',
      metaDesc: 'Parcourez les grands événements année par année, de 1905 à 2025. Actualité mondiale, musique, cinéma, technologie et culture.',
      kicker: 'Histoire année par année',
      h1: 'Événements par année — Histoire année par année',
      intro: '<p>L\'histoire se saisit mieux une année à la fois. Une date en elle-même dit peu ; une date rattachée à la sortie d\'une chanson, à un tournant politique ou à l\'arrivée d\'une technologie devient un véritable repère. Ce hub est une porte d\'entrée vers 121 pages année par année, chacune consacrée à une tranche de douze mois de l\'histoire contemporaine, de 1905 à 2025.</p><p>Chaque page rassemble les événements qui ont défini l\'année — affaires mondiales, découvertes, sport et culture vécue en temps réel. Si vous voulez savoir ce qui s\'est passé l\'année où vos grands-parents se sont mariés, l\'année de votre diplôme ou celle où un ancêtre a traversé un océan, commencez ici. Le hub sert d\'index ; les pages individuelles portent les récits.</p><p>Parcourez par décennie ci-dessous : les années 1900, 1910, 1920, et ainsi de suite jusqu\'aux années 2020. Dans chaque décennie, chaque année est un lien direct. Associez cette exploration à notre <a href="/fr/calculateur-age/">calculateur d\'âge</a> ou à l\'<a href="/fr/annees-de-naissance/">index des années de naissance</a> pour aligner biographies, programmes de retrouvailles, ou simplement comprendre la place d\'une année dans l\'arc plus large du siècle.</p>',
      pickDecade: 'Choisir une décennie',
      exploreCta: 'Les 121 années de 1905 à 2025',
      home: 'Accueil',
      self: 'Événements par année',
      seeAllLabel: 'Voir toutes les années',
    },
    es: {
      title: 'Acontecimientos por año — Historia año por año | DateCalc.app',
      metaDesc: 'Explora los grandes acontecimientos año por año, de 1905 a 2025. Noticias mundiales, música, cine, tecnología y cultura.',
      kicker: 'Historia año por año',
      h1: 'Acontecimientos por año — Historia año por año',
      intro: '<p>La historia se entiende mejor año a año. Una fecha aislada dice poco; una fecha vinculada al lanzamiento de una canción, a un giro político o a la llegada de una tecnología se convierte en referencia. Este hub es una puerta de entrada a 121 páginas, cada una dedicada a un tramo de doce meses de la historia contemporánea, de 1905 a 2025.</p><p>Cada página reúne los acontecimientos que definieron el año: asuntos mundiales, descubrimientos, deporte y la cultura que se vivía en tiempo real. Si quieres saber qué pasó el año en que se casaron tus abuelos, el de tu graduación o aquel en que un antepasado cruzó un océano, comienza aquí. El hub funciona como índice; las páginas individuales contienen los relatos.</p><p>Navega por décadas abajo: 1900, 1910, 1920, y así sucesivamente hasta los 2020. Dentro de cada década, cada año aparece como un enlace directo. Combina esta exploración con nuestra <a href="/es/calculadora-edad/">calculadora de edad</a> o con el <a href="/es/anos-de-nacimiento/">índice de años de nacimiento</a> para alinear biografías, programas de reencuentro o simplemente entender cómo encaja un año concreto en el arco más amplio del siglo.</p>',
      pickDecade: 'Elige una década',
      exploreCta: 'Los 121 años desde 1905 hasta 2025',
      home: 'Inicio',
      self: 'Acontecimientos por año',
      seeAllLabel: 'Ver todos los años',
    },
    pt: {
      title: 'Eventos por ano — História ano a ano | DateCalc.app',
      metaDesc: 'Explore os grandes eventos ano a ano, de 1905 a 2025. Notícias mundiais, música, cinema, tecnologia e cultura.',
      kicker: 'História ano a ano',
      h1: 'Eventos por ano — História ano a ano',
      intro: '<p>A história fica mais fácil de entender um ano de cada vez. Uma data isolada diz pouco; uma data ligada ao lançamento de uma canção, a uma virada política ou à chegada de uma tecnologia torna-se uma âncora. Este hub é uma porta de entrada para 121 páginas ano a ano, cada uma dedicada a um trecho de doze meses da história contemporânea, de 1905 a 2025.</p><p>Cada página reúne os eventos que definiram o ano: assuntos mundiais, descobertas, esporte e a cultura vivida em tempo real. Se quiser saber o que aconteceu no ano em que seus avós se casaram, no ano da sua formatura ou naquele em que um antepassado atravessou um oceano, comece aqui. O hub serve como índice; as páginas individuais carregam as histórias.</p><p>Navegue por década abaixo: 1900, 1910, 1920 e assim por diante até os anos 2020. Dentro de cada década, cada ano aparece como link direto. Combine esta pesquisa com nossa <a href="/pt/calculadora-idade/">calculadora de idade</a> ou com o <a href="/pt/anos-de-nascimento/">índice de anos de nascimento</a> para alinhar biografias, programas de reunião ou simplesmente entender o lugar de um ano específico no arco mais amplo do século.</p>',
      pickDecade: 'Escolha uma década',
      exploreCta: 'Os 121 anos de 1905 a 2025',
      home: 'Início',
      self: 'Eventos por ano',
      seeAllLabel: 'Ver todos os anos',
    },
    de: {
      title: 'Ereignisse nach Jahr — Geschichte Jahr für Jahr | DateCalc.app',
      metaDesc: 'Entdecken Sie bedeutende Ereignisse Jahr für Jahr, von 1905 bis 2025. Weltpolitik, Musik, Film, Technik und Kultur.',
      kicker: 'Geschichte Jahr für Jahr',
      h1: 'Ereignisse nach Jahr — Geschichte Jahr für Jahr',
      intro: '<p>Geschichte lässt sich leichter begreifen, wenn man sie Jahr für Jahr betrachtet. Ein isoliertes Datum sagt wenig; ein Datum, das an die Veröffentlichung eines Songs, eine politische Wende oder die Einführung einer Technologie gebunden ist, wird zum Ankerpunkt. Dieses Hub ist der Eingang zu 121 einzelnen Jahresseiten, jede einer Zwölfmonatsperiode der modernen Geschichte gewidmet, von 1905 bis 2025.</p><p>Jede Jahresseite versammelt die Ereignisse, die das Jahr prägten — Weltgeschehen, Entdeckungen, Sport und die Kultur, die die Menschen in Echtzeit erlebten. Wer wissen möchte, was im Jahr der Hochzeit der Großeltern passierte, im Abschlussjahr der eigenen Schulzeit oder im Jahr, in dem ein Vorfahre den Ozean überquerte, beginnt hier. Das Hub dient als Index; die einzelnen Seiten tragen die Geschichten.</p><p>Stöbern Sie unten nach Jahrzehnten: die 1900er, 1910er, 1920er und so weiter bis zu den 2020ern. Innerhalb jedes Jahrzehnts ist jedes Jahr als direkter Link aufgeführt. Kombinieren Sie diese Recherche mit unserem <a href="/de/altersrechner/">Altersrechner</a> oder dem <a href="/de/geburtsjahre/">Geburtsjahre-Index</a>, wenn Sie Biografien, Klassentreffen-Programme abgleichen oder verstehen möchten, wie ein bestimmtes Jahr im größeren Bogen des Jahrhunderts liegt.</p>',
      pickDecade: 'Jahrzehnt auswählen',
      exploreCta: 'Alle 121 Jahre von 1905 bis 2025',
      home: 'Start',
      self: 'Ereignisse nach Jahr',
      seeAllLabel: 'Alle Jahre ansehen',
    },
    it: {
      title: 'Eventi per anno — Storia anno per anno | DateCalc.app',
      metaDesc: 'Sfoglia i principali eventi anno per anno, dal 1905 al 2025. Attualità mondiale, musica, cinema, tecnologia e cultura.',
      kicker: 'Storia anno per anno',
      h1: 'Eventi per anno — Storia anno per anno',
      intro: '<p>La storia è più facile da afferrare un anno alla volta. Una data isolata dice poco; una data collegata all\'uscita di una canzone, a una svolta politica o all\'arrivo di una tecnologia diventa un vero punto di riferimento. Questo hub è una porta d\'ingresso a 121 pagine anno per anno, ciascuna dedicata a una fetta di dodici mesi di storia contemporanea, dal 1905 al 2025.</p><p>Ogni pagina annuale raccoglie gli eventi che hanno definito l\'anno: affari mondiali, scoperte, sport e la cultura vissuta in tempo reale. Se vuoi sapere cosa è successo nell\'anno del matrimonio dei tuoi nonni, nell\'anno del tuo diploma o in quello in cui un antenato ha attraversato un oceano, inizia da qui. L\'hub funge da indice; le singole pagine raccontano le storie.</p><p>Sfoglia per decennio qui sotto: gli anni \'00, \'10, \'20 del Novecento e così via fino agli anni 2020. All\'interno di ogni decennio, ciascun anno è un collegamento diretto. Abbina questa ricerca al nostro <a href="/it/calcolatore-eta/">calcolatore di età</a> o all\'<a href="/it/anni-di-nascita/">indice degli anni di nascita</a> per allineare biografie, programmi di rimpatriata o semplicemente capire come un determinato anno si colloca nell\'arco più ampio del secolo.</p>',
      pickDecade: 'Scegli un decennio',
      exploreCta: 'I 121 anni dal 1905 al 2025',
      home: 'Home',
      self: 'Eventi per anno',
      seeAllLabel: 'Vedi tutti gli anni',
    },
    pl: {
      title: 'Wydarzenia według roku — Historia rok po roku | DateCalc.app',
      metaDesc: 'Przeglądaj najważniejsze wydarzenia rok po roku, od 1905 do 2025. Wiadomości światowe, muzyka, film, technologia i kultura.',
      kicker: 'Historia rok po roku',
      h1: 'Wydarzenia według roku — Historia rok po roku',
      intro: '<p>Historię łatwiej zrozumieć rok po roku. Pojedyncza data sama w sobie mówi niewiele; data powiązana z premierą piosenki, politycznym zwrotem czy pojawieniem się nowej technologii staje się punktem odniesienia. Ten hub to brama do 121 pojedynczych stron rocznych, z których każda poświęcona jest dwunastomiesięcznemu wycinkowi nowoczesnej historii — od 1905 do 2025 roku.</p><p>Każda strona roczna zbiera wydarzenia, które zdefiniowały dany rok: politykę światową, odkrycia, sport i kulturę przeżywaną na bieżąco. Jeśli chcesz wiedzieć, co działo się w roku, w którym twoi dziadkowie wzięli ślub, w roku twojej matury lub w tym, kiedy przodek przepłynął ocean, zacznij tutaj. Hub działa jak indeks; poszczególne strony niosą opowieści.</p><p>Przeglądaj według dekady poniżej: lata 1900., 1910., 1920. i tak dalej aż po lata 2020. W obrębie każdej dekady każdy rok jest bezpośrednim odnośnikiem. Połącz tę lekturę z naszym <a href="/pl/kalkulator-wieku/">kalkulatorem wieku</a> lub z <a href="/pl/lata-urodzenia/">indeksem lat urodzenia</a>, gdy chcesz dopasować biografie, programy zjazdów klasowych lub po prostu zobaczyć, jak konkretny rok wpisuje się w szerszy łuk stulecia.</p>',
      pickDecade: 'Wybierz dekadę',
      exploreCta: 'Wszystkie 121 lat od 1905 do 2025',
      home: 'Strona główna',
      self: 'Wydarzenia według roku',
      seeAllLabel: 'Zobacz wszystkie lata',
    },
    ja: {
      title: '年代別の出来事 — 年ごとの歴史 | DateCalc.app',
      metaDesc: '1905年から2025年までの主要な出来事を年別に閲覧。世界ニュース、音楽、映画、技術、文化。',
      kicker: '年ごとの歴史',
      h1: '年代別の出来事 — 年ごとの歴史',
      intro: '<p>歴史は一年ずつ見るほうが把握しやすいものです。抽象的な日付はあまり意味を持ちませんが、曲のリリース、政治的な転機、あるいは新技術の登場と結びついた日付は拠り所となります。このハブは、1905年から2025年までの近代史を一年単位で扱う121の単年ページへの入り口です。</p><p>各年のページには、その年を特徴づけた出来事が集約されています — 世界情勢、発見、スポーツ、そして人々がリアルタイムで消費した文化です。祖父母が結婚した年、卒業した年、先祖が海を渡った年に何が起きたのかを知りたいなら、ここから始めてください。ハブは索引として機能し、個別ページが物語を運びます。</p><p>下の年代別リストを参照してください：1900年代、1910年代、1920年代、そして2020年代まで。各年代の中で各年は直接リンクとして表示されます。この資料を当サイトの<a href="/ja/nenrei-keisan/">年齢計算機</a>や<a href="/ja/umare-doshi/">生まれ年インデックス</a>と組み合わせれば、伝記や同窓会のプログラムを並べたり、ある特定の年が世紀全体の中でどのように位置づけられるかを理解したりできます。</p>',
      pickDecade: '年代を選択',
      exploreCta: '1905年から2025年までの121年',
      home: 'ホーム',
      self: '年代別の出来事',
      seeAllLabel: 'すべての年を見る',
    },
    ko: {
      title: '연도별 사건 — 해마다의 역사 | DateCalc.app',
      metaDesc: '1905년부터 2025년까지 연도별 주요 사건을 살펴보세요. 세계 뉴스, 음악, 영화, 기술, 문화.',
      kicker: '해마다의 역사',
      h1: '연도별 사건 — 해마다의 역사',
      intro: '<p>역사는 한 해씩 살펴볼 때 더 잘 이해됩니다. 추상적인 날짜는 많은 것을 전하지 못하지만, 노래 발매, 정치적 전환점, 혹은 새로운 기술의 등장과 연결된 날짜는 든든한 좌표가 됩니다. 이 허브는 1905년부터 2025년까지의 근현대사를 한 해 단위로 다루는 121개의 연도별 페이지로 들어가는 입구입니다.</p><p>각 연도 페이지에는 그 해를 규정한 사건들이 모여 있습니다 — 세계 정세, 발견, 스포츠, 그리고 사람들이 실시간으로 누린 문화입니다. 조부모가 결혼한 해, 당신이 졸업한 해, 혹은 조상이 바다를 건넌 해에 무슨 일이 있었는지 알고 싶다면 여기서 시작하세요. 허브는 색인 역할을 하고, 개별 페이지는 이야기를 담습니다.</p><p>아래 연대 목록을 둘러보세요: 1900년대, 1910년대, 1920년대, 그리고 2020년대까지. 각 연대 안에서 모든 해는 직접 링크로 제공됩니다. 이 자료를 저희 <a href="/ko/nai-gyesan/">나이 계산기</a>나 <a href="/ko/chulsaeng-yeondo/">출생 연도 색인</a>과 결합하면, 연보를 맞추거나 동창회 프로그램을 정리하거나, 특정 해가 한 세기 전체의 흐름 속에 어떻게 자리 잡는지 파악할 수 있습니다.</p>',
      pickDecade: '연대 선택',
      exploreCta: '1905년부터 2025년까지 121년',
      home: '홈',
      self: '연도별 사건',
      seeAllLabel: '모든 연도 보기',
    },
    nl: {
      title: 'Gebeurtenissen per jaar — Geschiedenis jaar voor jaar | DateCalc.app',
      metaDesc: 'Blader door belangrijke gebeurtenissen per jaar, van 1905 tot 2025. Wereldnieuws, muziek, film, technologie en cultuur.',
      kicker: 'Geschiedenis jaar voor jaar',
      h1: 'Gebeurtenissen per jaar — Geschiedenis jaar voor jaar',
      intro: '<p>Geschiedenis is gemakkelijker te vatten als je haar jaar voor jaar bekijkt. Een losstaande datum zegt weinig; een datum die gekoppeld is aan de release van een lied, een politieke wending of de introductie van een technologie wordt een ankerpunt. Deze hub is een toegangspoort tot 121 afzonderlijke jaarpagina\'s, elk gewijd aan een periode van twaalf maanden uit de moderne geschiedenis, van 1905 tot 2025.</p><p>Elke jaarpagina bundelt de gebeurtenissen die het jaar bepaalden — wereldzaken, ontdekkingen, sport en de cultuur die mensen in realtime beleefden. Wie wil weten wat er gebeurde in het jaar dat grootouders trouwden, in het jaar van de eigen diploma-uitreiking, of in het jaar dat een voorouder een oceaan overstak, begint hier. De hub werkt als index; de individuele pagina\'s dragen de verhalen.</p><p>Blader hieronder per decennium: de jaren 1900, 1910, 1920 en zo voort tot de jaren 2020. Binnen elk decennium is elk jaar een directe link. Combineer dit onderzoek met onze <a href="/nl/leeftijdscalculator/">leeftijdscalculator</a> of met de <a href="/nl/geboortejaren/">geboortejaren-index</a> wanneer je biografieën, reünieprogramma\'s wilt afstemmen of gewoon wilt begrijpen hoe een specifiek jaar past in de bredere boog van de eeuw.</p>',
      pickDecade: 'Kies een decennium',
      exploreCta: 'Alle 121 jaar van 1905 tot 2025',
      home: 'Home',
      self: 'Gebeurtenissen per jaar',
      seeAllLabel: 'Bekijk alle jaren',
    },
  },
};

function groupByDecade(years) {
  const groups = {};
  for (const y of years) {
    const d = Math.floor(y / 10) * 10;
    (groups[d] = groups[d] || []).push(y);
  }
  return groups;
}

function decadeLabel(lang, startYear) {
  // e.g. 1990 → "1990s" (en), "Années 1990" (fr)
  switch (lang) {
    case 'fr': return `Années ${startYear}`;
    case 'es': return `Años ${startYear}`;
    case 'pt': return `Anos ${startYear}`;
    case 'de': return `${startYear}er`;
    case 'it': return `Anni ${startYear}`;
    case 'pl': return `Lata ${startYear}.`;
    case 'ja': return `${startYear}年代`;
    case 'ko': return `${startYear}년대`;
    case 'nl': return `Jaren ${startYear}`;
    default:   return `${startYear}s`;
  }
}

function decadeGrid(hubType, lang) {
  const years = hubType === 'birth' ? BIRTH_YEARS : EVENT_YEARS;
  const hrefFn = (hubType === 'birth' ? BORN_HREF : EVENT_HREF)[lang];
  const groups = groupByDecade(years);
  const keys = Object.keys(groups).map(Number).sort((a, b) => a - b);
  const rows = keys.map(d => {
    const items = groups[d].map(y => `<a href="${hrefFn(y)}" class="hub-year">${y}</a>`).join('');
    return `<div class="hub-decade-row"><span class="hub-decade-label">${decadeLabel(lang, d)}</span><div class="hub-year-grid">${items}</div></div>`;
  });
  return `<div class="hub-decades">${rows.join('')}</div>`;
}

function breadcrumbJsonLd(hubType, lang, year) {
  const t = I18N[hubType][lang];
  const homePath = lang === 'en' ? '/' : `/${lang}/`;
  const hubPath  = `/${HUB_SLUGS[hubType][lang]}/`;
  const singlePath = year != null
    ? ((hubType === 'birth' ? BORN_HREF : EVENT_HREF)[lang](year))
    : null;
  const items = [
    { "@type": "ListItem", "position": 1, "name": t.home, "item": `https://datecalc.app${homePath}` },
    { "@type": "ListItem", "position": 2, "name": t.self, "item": `https://datecalc.app${hubPath}` },
  ];
  if (year != null) items.push({ "@type": "ListItem", "position": 3, "name": String(year), "item": `https://datecalc.app${singlePath}` });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items,
  };
}

function renderHub(hubType, lang) {
  const t = I18N[hubType][lang];
  const canonical = `/${HUB_SLUGS[hubType][lang]}/`;
  const hreflang = {};
  for (const l of LANGS) hreflang[l] = `/${HUB_SLUGS[hubType][l]}/`;

  const breadcrumbLD = JSON.stringify(breadcrumbJsonLd(hubType, lang, null), null, 2);

  return {
    hubType,
    lang,
    title: t.title,
    metaDesc: t.metaDesc,
    kicker: t.kicker,
    h1: t.h1,
    intro: t.intro,
    decadeGrid: decadeGrid(hubType, lang),
    pickDecade: t.pickDecade,
    exploreCta: t.exploreCta,
    canonical,
    hreflang,
    breadcrumbLD,
  };
}

// Footer "Explore" block — appended to footers sitewide
function footerExploreBlock(lang) {
  const bT = I18N.birth[lang];
  const eT = I18N.event[lang];
  const exploreLabel = {
    en: 'Explore', fr: 'Explorer', es: 'Explorar', pt: 'Explorar',
    de: 'Entdecken', it: 'Esplora', pl: 'Odkryj', ja: '探索', ko: '둘러보기', nl: 'Ontdek',
  }[lang] || 'Explore';
  return `<div class="footer-col"><strong>${exploreLabel}</strong>\n<a href="/${HUB_SLUGS.birth[lang]}/">${bT.self}</a>\n<a href="/${HUB_SLUGS.event[lang]}/">${eT.self}</a></div>`;
}

// Homepage "Browse by year" section
function homepageBrowseSection(lang) {
  const bT = I18N.birth[lang];
  const eT = I18N.event[lang];
  const heading = {
    en: 'Browse by year', fr: 'Parcourir par année', es: 'Navegar por año',
    pt: 'Navegar por ano', de: 'Nach Jahr stöbern', it: 'Sfoglia per anno',
    pl: 'Przeglądaj według roku', ja: '年から探す', ko: '연도로 찾아보기',
    nl: 'Bladeren op jaar',
  }[lang] || 'Browse by year';
  return `<section class="browse-by-year">
  <h2>${heading}</h2>
  <ul class="browse-by-year-list">
    <li><a href="/${HUB_SLUGS.birth[lang]}/"><strong>${bT.self}</strong><span>${bT.exploreCta}</span></a></li>
    <li><a href="/${HUB_SLUGS.event[lang]}/"><strong>${eT.self}</strong><span>${eT.exploreCta}</span></a></li>
  </ul>
</section>`;
}

// "See all birth years →" link (and event counterpart)
function seeAllLink(hubType, lang) {
  const t = I18N[hubType][lang];
  return `<p class="see-all-link"><a href="/${HUB_SLUGS[hubType][lang]}/">${t.seeAllLabel} →</a></p>`;
}

// For born-in/what-happened pages — BreadcrumbList JSON-LD
function breadcrumbJsonLdString(hubType, lang, year) {
  return JSON.stringify(breadcrumbJsonLd(hubType, lang, year), null, 2);
}

// Sitemap groups — each hub = one group of 10 URLs (alternates)
function sitemapGroups() {
  const birthGroup = LANGS.map(l => ({ lang: l, path: `/${HUB_SLUGS.birth[l]}/` }));
  const eventGroup = LANGS.map(l => ({ lang: l, path: `/${HUB_SLUGS.event[l]}/` }));
  return [birthGroup, eventGroup];
}

module.exports = {
  LANGS,
  HUB_SLUGS,
  BIRTH_YEARS,
  EVENT_YEARS,
  renderHub,
  footerExploreBlock,
  homepageBrowseSection,
  seeAllLink,
  breadcrumbJsonLdString,
  sitemapGroups,
  I18N,
};
