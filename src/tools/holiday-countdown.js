// Holiday Countdowns: New Year, Halloween, Easter

const HOLIDAYS = {
  'new-year': {
    en: {
      title: 'Days Until New Year 2027 – New Year Countdown | DateCalc.app',
      metaDesc: 'How many days until New Year? Live countdown to January 1 in days, hours, minutes and seconds.',
      kicker: 'New Year Countdown',
      headline: 'Days until<br><em>New Year</em>',
      subhead: 'Live countdown to January 1 — days, hours, minutes, seconds.',
      resultsHeader: 'New Year countdown',
      heroSuffix: 'days',
      weeksLbl: 'weeks', hoursLbl: 'hours', monthsLbl: 'months',
      dateLbl: 'New Year date', dayLbl: 'Day of week', yearLbl: 'Year',
      seoH2a: 'When is New Year\'s Day?',
      seoP1: 'New Year\'s Day is always January 1. The countdown above updates automatically based on today\'s date and counts down to midnight on January 1 of the next year.',
      seoH2b: 'New Year traditions around the world',
      seoP2: 'New Year is celebrated on January 1 in most countries following the Gregorian calendar. Some cultures celebrate the new year on different dates — the Chinese New Year, for example, falls between January 21 and February 20.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'How many days until New Year 2027?', a: 'The countdown above shows the exact number of days until January 1, 2027. It updates automatically every time you open the page.' },
        { q: 'What day is New Year 2027?', a: 'New Year\'s Day 2027 (January 1, 2027) is a Friday.' },
        { q: 'How many hours until New Year?', a: 'Multiply the days remaining by 24 to get approximate hours. The live counter above shows the precise hour and minute count.' },
        { q: 'What time does New Year start?', a: 'New Year begins at midnight (00:00) local time on January 1. This calculator counts down to midnight based on your device\'s clock.' },
      ],
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    },
    fr: {
      title: 'Combien de jours avant le Nouvel An 2027 ? Compte à rebours',
      metaDesc: 'Combien de jours avant le Nouvel An ? Compte à rebours jusqu\'au 1er janvier en jours, heures, minutes et secondes.',
      kicker: 'Compte à rebours Nouvel An',
      headline: 'Jours avant<br><em>le Nouvel An</em>',
      subhead: 'Compte à rebours jusqu\'au 1er janvier — jours, heures, minutes, secondes.',
      resultsHeader: 'Compte à rebours Nouvel An',
      heroSuffix: 'jours',
      weeksLbl: 'semaines', hoursLbl: 'heures', monthsLbl: 'mois',
      dateLbl: 'Date du Nouvel An', dayLbl: 'Jour de la semaine', yearLbl: 'Année',
      seoH2a: 'Quand est le Jour de l\'An ?',
      seoP1: 'Le Jour de l\'An est toujours le 1er janvier. Le compte à rebours ci-dessus se met à jour automatiquement et décompte jusqu\'à minuit le 1er janvier de l\'année suivante.',
      seoH2b: 'Les traditions du Nouvel An dans le monde',
      seoP2: 'Le Nouvel An est célébré le 1er janvier dans la plupart des pays suivant le calendrier grégorien. Certaines cultures le célèbrent à des dates différentes — le Nouvel An chinois tombe entre le 21 janvier et le 20 février.',
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Combien de jours avant le Nouvel An 2027 ?', a: 'Le compte à rebours ci-dessus affiche le nombre exact de jours jusqu\'au 1er janvier 2027.' },
        { q: 'Quel jour est le 1er janvier 2027 ?', a: 'Le Jour de l\'An 2027 (1er janvier 2027) est un vendredi.' },
        { q: 'Combien d\'heures avant le Nouvel An ?', a: 'Multipliez les jours restants par 24 pour obtenir les heures approximatives. Le compteur en direct affiche les heures et minutes précises.' },
        { q: 'À quelle heure commence le Nouvel An ?', a: 'Le Nouvel An commence à minuit (00:00) heure locale le 1er janvier.' },
      ],
      weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    },
    es: {
      title: 'Días para Año Nuevo 2027 – Cuenta regresiva | DateCalc.app',
      metaDesc: '¿Cuántos días faltan para Año Nuevo? Cuenta regresiva hasta el 1 de enero en días, horas, minutos y segundos.',
      kicker: 'Cuenta regresiva Año Nuevo',
      headline: 'Días para<br><em>Año Nuevo</em>',
      subhead: 'Cuenta regresiva hasta el 1 de enero — días, horas, minutos, segundos.',
      resultsHeader: 'Cuenta regresiva Año Nuevo',
      heroSuffix: 'días',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Fecha de Año Nuevo', dayLbl: 'Día de la semana', yearLbl: 'Año',
      seoH2a: '¿Cuándo es el Año Nuevo?',
      seoP1: 'El Día de Año Nuevo es siempre el 1 de enero. La cuenta regresiva anterior se actualiza automáticamente y cuenta hasta la medianoche del 1 de enero del año siguiente.',
      seoH2b: 'Tradiciones de Año Nuevo en todo el mundo',
      seoP2: 'El Año Nuevo se celebra el 1 de enero en la mayoría de países que siguen el calendario gregoriano. Algunas culturas lo celebran en fechas diferentes — el Año Nuevo chino cae entre el 21 de enero y el 20 de febrero.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cuántos días faltan para Año Nuevo 2027?', a: 'La cuenta regresiva anterior muestra el número exacto de días hasta el 1 de enero de 2027.' },
        { q: '¿Qué día es el 1 de enero de 2027?', a: 'El Día de Año Nuevo 2027 (1 de enero de 2027) es viernes.' },
        { q: '¿Cuántas horas faltan para Año Nuevo?', a: 'Multiplica los días restantes por 24 para obtener las horas aproximadas.' },
        { q: '¿A qué hora empieza el Año Nuevo?', a: 'El Año Nuevo comienza a la medianoche (00:00) hora local el 1 de enero.' },
      ],
      weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    },
    pt: {
      title: 'Quantos Dias para o Ano Novo 2027? Contagem Regressiva',
      metaDesc: 'Quantos dias faltam para o Ano Novo? Contagem regressiva ao vivo até 1º de janeiro de 2027 em dias, horas, minutos e segundos — em tempo real.',
      kicker: 'Contagem do Ano Novo',
      headline: 'Quantos dias<br>até o<br><em>Ano Novo?</em>',
      subhead: 'Contagem regressiva ao vivo até 1º de janeiro de 2027',
      resultsHeader: 'Faltam para o Ano Novo',
      heroSuffix: 'dias',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Data do Ano Novo', dayLbl: 'Dia da semana', yearLbl: 'Ano',
      unitDays: 'dias', unitHours: 'horas', unitMinutes: 'minutos', unitSeconds: 'segundos',
      seoH2a: 'Quantos dias faltam para o Ano Novo?',
      seoP1: 'Esta página mostra uma contagem regressiva em tempo real até o Ano Novo (1º de janeiro de 2027).',
      seoH2b: 'Tradições de Ano Novo no Brasil',
      seoP2: 'No Brasil, o Réveillon é celebrado com fogos de artifício, especialmente em praias como Copacabana no Rio de Janeiro. Muitos usam roupas brancas e fazem oferendas ao mar.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Quantos dias faltam para o Ano Novo?', a: 'Veja o contador acima — mostra em tempo real os dias, horas, minutos e segundos até 1º de janeiro de 2027.' },
        { q: 'Em que dia da semana cai o Ano Novo 2027?', a: 'O Ano Novo de 2027 (1º de janeiro) cai em uma sexta-feira.' },
      ],
      weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
      months: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
      source: null,
    },
    de: {
      title: 'Wie viele Tage bis Neujahr 2027? Countdown',
      metaDesc: 'Wie viele Tage noch bis Neujahr? Live-Countdown bis zum 1. Januar 2027 in Tagen, Stunden, Minuten und Sekunden — in Echtzeit aktualisiert.',
      kicker: 'Neujahrs-Countdown',
      headline: 'Tage bis<br><em>Neujahr</em>',
      subhead: 'Live-Countdown bis zum 1. Januar — Tage, Stunden, Minuten, Sekunden.',
      resultsHeader: 'Countdown bis Neujahr',
      heroSuffix: 'Tage',
      weeksLbl: 'Wochen', hoursLbl: 'Stunden', monthsLbl: 'Monate',
      dateLbl: 'Neujahrsdatum', dayLbl: 'Wochentag', yearLbl: 'Jahr',
      unitDays: 'Tage', unitHours: 'Stunden', unitMinutes: 'Minuten', unitSeconds: 'Sekunden',
      seoH2a: 'Wann ist Neujahr?',
      seoP1: 'Neujahr ist immer am 1. Januar. Der obige Countdown aktualisiert sich automatisch basierend auf dem heutigen Datum und zählt bis Mitternacht am 1. Januar des nächsten Jahres herunter.',
      seoH2b: 'Neujahrstraditionen auf der ganzen Welt',
      seoP2: 'Neujahr wird am 1. Januar in den meisten Ländern nach dem gregorianischen Kalender gefeiert. Einige Kulturen feiern das neue Jahr an anderen Terminen — das chinesische Neujahr fällt beispielsweise zwischen dem 21. Januar und dem 20. Februar.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Wie viele Tage noch bis Neujahr 2027?', a: 'Der Countdown oben zeigt die genaue Anzahl der Tage bis zum 1. Januar 2027. Er wird automatisch bei jedem Öffnen der Seite aktualisiert.' },
        { q: 'Auf welchen Wochentag fällt der 1. Januar 2027?', a: 'Neujahr 2027 (1. Januar 2027) fällt auf einen Freitag.' },
        { q: 'Wie viele Stunden noch bis Neujahr?', a: 'Multipliziere die verbleibenden Tage mit 24, um die ungefähren Stunden zu erhalten. Der Live-Zähler oben zeigt die genaue Stunden- und Minutenanzahl.' },
        { q: 'Wann beginnt das neue Jahr?', a: 'Das neue Jahr beginnt um Mitternacht (00:00 Uhr) Ortszeit am 1. Januar. Dieser Rechner zählt bis Mitternacht basierend auf der Uhr deines Geräts.' },
      ],
      weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
      months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      source: null,
    },
    it: {
      title: 'Quanti Giorni a Capodanno 2027? Conto alla Rovescia',
      metaDesc: 'Quanti giorni mancano a Capodanno? Conto alla rovescia live fino al 1° gennaio 2027 in giorni, ore, minuti e secondi — in tempo reale.',
      kicker: 'Conto alla Rovescia di Capodanno',
      headline: 'Giorni a<br><em>Capodanno</em>',
      subhead: 'Conto alla rovescia live fino al 1° gennaio — giorni, ore, minuti, secondi.',
      resultsHeader: 'Conto alla rovescia Capodanno',
      heroSuffix: 'giorni',
      weeksLbl: 'settimane', hoursLbl: 'ore', monthsLbl: 'mesi',
      dateLbl: 'Data di Capodanno', dayLbl: 'Giorno della settimana', yearLbl: 'Anno',
      unitDays: 'giorni', unitHours: 'ore', unitMinutes: 'minuti', unitSeconds: 'secondi',
      seoH2a: 'Quando è Capodanno?',
      seoP1: 'Capodanno è sempre il 1° gennaio. Il conto alla rovescia qui sopra si aggiorna automaticamente in base alla data odierna e conta fino alla mezzanotte del 1° gennaio dell\'anno successivo.',
      seoH2b: 'Tradizioni di Capodanno nel mondo',
      seoP2: 'Il Capodanno è celebrato il 1° gennaio nella maggior parte dei paesi che seguono il calendario gregoriano. Alcune culture lo festeggiano in date diverse — il Capodanno cinese, ad esempio, cade tra il 21 gennaio e il 20 febbraio.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Quanti giorni mancano a Capodanno 2027?', a: 'Il conto alla rovescia qui sopra mostra il numero esatto di giorni fino al 1° gennaio 2027. Si aggiorna automaticamente ogni volta che apri la pagina.' },
        { q: 'Che giorno è il 1° gennaio 2027?', a: 'Il giorno di Capodanno 2027 (1° gennaio 2027) è un venerdì.' },
        { q: 'Quante ore mancano a Capodanno?', a: 'Moltiplica i giorni rimasti per 24 per ottenere le ore approssimative. Il contatore live qui sopra mostra il conteggio preciso di ore e minuti.' },
        { q: 'A che ora inizia il nuovo anno?', a: 'Il nuovo anno inizia a mezzanotte (00:00) ora locale il 1° gennaio. Questo calcolatore conta fino alla mezzanotte basandosi sull\'orologio del tuo dispositivo.' },
      ],
      weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
      months: ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
      source: null,
    },
    pl: {
      title: 'Ile Dni do Nowego Roku 2027? Odliczanie na Żywo',
      metaDesc: 'Ile dni zostało do Nowego Roku? Odliczanie na żywo do 1 stycznia 2027 w dniach, godzinach, minutach i sekundach — aktualizowane w czasie rzeczywistym.',
      kicker: 'Odliczanie do Nowego Roku',
      headline: 'Dni do<br><em>Nowego Roku</em>',
      subhead: 'Odliczanie na żywo do 1 stycznia — dni, godziny, minuty, sekundy.',
      resultsHeader: 'Odliczanie do Nowego Roku',
      heroSuffix: 'dni',
      weeksLbl: 'tygodnie', hoursLbl: 'godziny', monthsLbl: 'miesiące',
      dateLbl: 'Data Nowego Roku', dayLbl: 'Dzień tygodnia', yearLbl: 'Rok',
      unitDays: 'dni', unitHours: 'godzin', unitMinutes: 'minut', unitSeconds: 'sekund',
      seoH2a: 'Kiedy jest Nowy Rok?',
      seoP1: 'Nowy Rok wypada zawsze 1 stycznia. Powyższe odliczanie aktualizuje się automatycznie na podstawie dzisiejszej daty i odlicza do północy 1 stycznia następnego roku.',
      seoH2b: 'Tradycje noworoczne na całym świecie',
      seoP2: 'Nowy Rok jest obchodzony 1 stycznia w większości krajów korzystających z kalendarza gregoriańskiego. Niektóre kultury świętują nowy rok w innych terminach — chiński Nowy Rok przypada między 21 stycznia a 20 lutego.',
      faqTitle: 'Często zadawane pytania',
      faqs: [
        { q: 'Ile dni do Nowego Roku 2027?', a: 'Powyższe odliczanie pokazuje dokładną liczbę dni do 1 stycznia 2027. Aktualizuje się automatycznie za każdym razem, gdy otwierasz stronę.' },
        { q: 'Na jaki dzień tygodnia wypada 1 stycznia 2027?', a: 'Nowy Rok 2027 (1 stycznia 2027) wypada w piątek.' },
        { q: 'Ile godzin do Nowego Roku?', a: 'Pomnóż pozostałe dni przez 24, aby uzyskać przybliżoną liczbę godzin. Licznik na żywo pokazuje dokładną liczbę godzin i minut.' },
        { q: 'O której godzinie zaczyna się Nowy Rok?', a: 'Nowy Rok zaczyna się o północy (00:00) czasu lokalnego 1 stycznia. Ten kalkulator odlicza do północy na podstawie zegara twojego urządzenia.' },
      ],
      weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
      months: ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'],
      source: null,
    },
    ja: {
      title: '新年まで何日？ 2027年新年カウントダウン',
      metaDesc: '新年まで何日？2027年1月1日まで日・時間・分・秒のリアルタイムカウントダウン。',
      kicker: '新年カウントダウン',
      headline: '<em>新年</em>まで<br>の日数',
      subhead: '1月1日までのリアルタイムカウントダウン — 日・時間・分・秒。',
      resultsHeader: '新年カウントダウン',
      heroSuffix: '日',
      weeksLbl: '週', hoursLbl: '時間', monthsLbl: 'ヶ月',
      dateLbl: '新年の日付', dayLbl: '曜日', yearLbl: '年',
      unitDays: '日', unitHours: '時間', unitMinutes: '分', unitSeconds: '秒',
      seoH2a: '元日はいつですか？',
      seoP1: '元日は常に1月1日です。上のカウントダウンは今日の日付に基づいて自動的に更新され、翌年の1月1日の真夜中までカウントダウンします。',
      seoH2b: '世界の新年の伝統',
      seoP2: 'グレゴリオ暦を採用しているほとんどの国では1月1日に新年を祝います。一部の文化では異なる日付に新年を祝います — 例えば中国の旧正月は1月21日から2月20日の間に当たります。',
      faqTitle: 'よくある質問',
      faqs: [
        { q: '2027年の新年まで何日ありますか？', a: '上のカウントダウンに2027年1月1日までの正確な日数が表示されます。ページを開くたびに自動的に更新されます。' },
        { q: '2027年1月1日は何曜日ですか？', a: '2027年の元日（2027年1月1日）は金曜日です。' },
        { q: '新年まで何時間ありますか？', a: '残り日数を24倍すると大まかな時間数が得られます。上のリアルタイムカウンターに正確な時間と分数が表示されます。' },
        { q: '新年はいつ始まりますか？', a: '新年は1月1日の現地時間の真夜中（00:00）に始まります。この計算ツールはデバイスの時計に基づいて真夜中までカウントダウンします。' },
      ],
      weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
      months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      source: null,
    },
    ko: {
      title: '새해까지 며칠? 2027년 새해 카운트다운',
      metaDesc: '새해까지 며칠? 2027년 1월 1일까지 일, 시간, 분, 초의 실시간 카운트다운.',
      kicker: '새해 카운트다운',
      headline: '<em>새해</em>까지<br>남은 일수',
      subhead: '1월 1일까지 실시간 카운트다운 — 일, 시간, 분, 초.',
      resultsHeader: '새해 카운트다운',
      heroSuffix: '일',
      weeksLbl: '주', hoursLbl: '시간', monthsLbl: '개월',
      dateLbl: '새해 날짜', dayLbl: '요일', yearLbl: '연도',
      unitDays: '일', unitHours: '시간', unitMinutes: '분', unitSeconds: '초',
      seoH2a: '새해 첫날은 언제인가요?',
      seoP1: '새해 첫날은 항상 1월 1일입니다. 위의 카운트다운은 오늘 날짜를 기준으로 자동 업데이트되며 다음 해 1월 1일 자정까지 카운트다운합니다.',
      seoH2b: '세계의 새해 전통',
      seoP2: '그레고리력을 따르는 대부분의 국가에서는 1월 1일에 새해를 축하합니다. 일부 문화에서는 다른 날짜에 새해를 축하합니다 — 예를 들어 중국 새해는 1월 21일에서 2월 20일 사이에 옵니다.',
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '2027년 새해까지 며칠 남았나요?', a: '위의 카운트다운에 2027년 1월 1일까지 정확한 일수가 표시됩니다. 페이지를 열 때마다 자동으로 업데이트됩니다.' },
        { q: '2027년 1월 1일은 무슨 요일인가요?', a: '2027년 새해 첫날(2027년 1월 1일)은 금요일입니다.' },
        { q: '새해까지 몇 시간 남았나요?', a: '남은 일수에 24를 곱하면 대략적인 시간을 얻을 수 있습니다. 위의 실시간 카운터에 정확한 시간과 분이 표시됩니다.' },
        { q: '새해는 언제 시작하나요?', a: '새해는 1월 1일 현지 시간 자정(00:00)에 시작됩니다. 이 계산기는 디바이스의 시계를 기준으로 자정까지 카운트다운합니다.' },
      ],
      weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      source: null,
    },
    nl: {
      title: 'Hoeveel Dagen tot Nieuwjaar? 2027 Nieuwjaarsaftelling',
      metaDesc: 'Hoeveel dagen tot Nieuwjaar? Live aftelling tot 1 januari 2027 in dagen, uren, minuten en seconden.',
      kicker: 'Nieuwjaarsaftelling',
      headline: 'Dagen tot<br><em>Nieuwjaar</em>',
      subhead: 'Live aftelling tot 1 januari — dagen, uren, minuten, seconden.',
      resultsHeader: 'Nieuwjaarsaftelling',
      heroSuffix: 'dagen',
      weeksLbl: 'weken', hoursLbl: 'uren', monthsLbl: 'maanden',
      dateLbl: 'Nieuwjaarsdatum', dayLbl: 'Dag van de week', yearLbl: 'Jaar',
      unitDays: 'dagen', unitHours: 'uren', unitMinutes: 'minuten', unitSeconds: 'seconden',
      seoH2a: 'Wanneer is Nieuwjaarsdag?',
      seoP1: 'Nieuwjaarsdag is altijd 1 januari. De aftelling hierboven wordt automatisch bijgewerkt op basis van de datum van vandaag en telt af tot middernacht op 1 januari van het volgende jaar.',
      seoH2b: 'Nieuwjaarstradities over de hele wereld',
      seoP2: 'Nieuwjaar wordt op 1 januari gevierd in de meeste landen die de Gregoriaanse kalender volgen. Sommige culturen vieren het nieuwe jaar op andere datums — het Chinees Nieuwjaar valt bijvoorbeeld tussen 21 januari en 20 februari.',
      faqTitle: 'Veelgestelde vragen',
      faqs: [
        { q: 'Hoeveel dagen tot Nieuwjaar 2027?', a: 'De aftelling hierboven toont het exacte aantal dagen tot 1 januari 2027. Het wordt automatisch bijgewerkt elke keer dat je de pagina opent.' },
        { q: 'Op welke dag valt Nieuwjaar 2027?', a: 'Nieuwjaarsdag 2027 (1 januari 2027) is een vrijdag.' },
        { q: 'Hoeveel uur tot Nieuwjaar?', a: 'Vermenigvuldig de resterende dagen met 24 voor het geschatte aantal uren. De live teller hierboven toont het precieze uur- en minutenaantal.' },
        { q: 'Hoe laat begint het Nieuwe Jaar?', a: 'Het Nieuwe Jaar begint om middernacht (00:00) lokale tijd op 1 januari. Deze calculator telt af tot middernacht op basis van de klok van je apparaat.' },
      ],
      weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
      months: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],
      source: null,
    },
  },
  'halloween': {
    en: {
      title: 'Days Until Halloween 2026 – Halloween Countdown | DateCalc.app',
      metaDesc: 'How many days until Halloween? Live countdown to October 31 in days, hours, minutes and seconds.',
      kicker: 'Halloween Countdown',
      headline: 'Days until<br><em>Halloween</em>',
      subhead: 'Live countdown to October 31 — days, hours, minutes, seconds.',
      resultsHeader: 'Halloween countdown',
      heroSuffix: 'days',
      weeksLbl: 'weeks', hoursLbl: 'hours', monthsLbl: 'months',
      dateLbl: 'Halloween date', dayLbl: 'Day of week', yearLbl: 'Year',
      seoH2a: 'When is Halloween?',
      seoP1: 'Halloween is always October 31. The countdown above updates automatically and counts down to midnight on October 31 of the current or next year.',
      seoH2b: 'Halloween traditions',
      seoP2: 'Halloween originated from the ancient Celtic festival of Samhain. Today it is celebrated in many countries with costumes, trick-or-treating, and jack-o-lanterns. It is especially popular in the USA, Canada, Ireland, and the UK.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'How many days until Halloween 2026?', a: 'The countdown above shows the exact number of days until October 31, 2026. It updates automatically every time you open the page.' },
        { q: 'What day is Halloween 2026?', a: 'Halloween 2026 (October 31, 2026) is a Saturday.' },
        { q: 'How many weeks until Halloween?', a: 'Divide the days remaining by 7 to get the approximate weeks. The live counter shows the precise breakdown.' },
        { q: 'What time does Halloween start?', a: 'Halloween is all day on October 31. Trick-or-treating typically happens in the evening, starting around 6 PM.' },
      ],
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    },
    fr: {
      title: 'Jours avant Halloween 2026 – Compte à rebours | DateCalc.app',
      metaDesc: 'Combien de jours avant Halloween ? Compte à rebours jusqu\'au 31 octobre en jours, heures, minutes et secondes.',
      kicker: 'Compte à rebours Halloween',
      headline: 'Jours avant<br><em>Halloween</em>',
      subhead: 'Compte à rebours jusqu\'au 31 octobre — jours, heures, minutes, secondes.',
      resultsHeader: 'Compte à rebours Halloween',
      heroSuffix: 'jours',
      weeksLbl: 'semaines', hoursLbl: 'heures', monthsLbl: 'mois',
      dateLbl: 'Date d\'Halloween', dayLbl: 'Jour de la semaine', yearLbl: 'Année',
      seoH2a: 'Quand est Halloween ?',
      seoP1: 'Halloween est toujours le 31 octobre. Le compte à rebours ci-dessus se met à jour automatiquement et décompte jusqu\'à minuit le 31 octobre.',
      seoH2b: 'Les traditions d\'Halloween',
      seoP2: 'Halloween est originaire de l\'ancienne fête celtique de Samhain. Aujourd\'hui, il est célébré dans de nombreux pays avec des costumes, du trick-or-treating et des citrouilles sculptées.',
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Combien de jours avant Halloween 2026 ?', a: 'Le compte à rebours ci-dessus affiche le nombre exact de jours jusqu\'au 31 octobre 2026.' },
        { q: 'Quel jour est Halloween 2026 ?', a: 'Halloween 2026 (31 octobre 2026) est un samedi.' },
        { q: 'Combien de semaines avant Halloween ?', a: 'Divisez les jours restants par 7 pour obtenir les semaines approximatives.' },
        { q: 'À quelle heure commence Halloween ?', a: 'Halloween dure toute la journée du 31 octobre. Les distributions de bonbons ont généralement lieu le soir, à partir de 18h.' },
      ],
      weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    },
    es: {
      title: '¿Cuántos días faltan para Halloween 2026? Cuenta regresiva',
      metaDesc: '¿Cuántos días quedan para Halloween 2026? Cuenta regresiva en vivo hasta el 31 de octubre en días, horas, minutos y segundos — actualizado al instante.',
      kicker: 'Cuenta regresiva Halloween',
      headline: 'Días para<br><em>Halloween</em>',
      subhead: 'Cuenta regresiva hasta el 31 de octubre — días, horas, minutos, segundos.',
      resultsHeader: 'Cuenta regresiva Halloween',
      heroSuffix: 'días',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Fecha de Halloween', dayLbl: 'Día de la semana', yearLbl: 'Año',
      seoH2a: '¿Cuándo es Halloween?',
      seoP1: 'Halloween es siempre el 31 de octubre. La cuenta regresiva anterior se actualiza automáticamente y cuenta hasta la medianoche del 31 de octubre.',
      seoH2b: 'Tradiciones de Halloween',
      seoP2: 'Halloween se originó en el antiguo festival celta de Samhain. Hoy se celebra en muchos países con disfraces, trick-or-treating y calabazas talladas.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cuántos días faltan para Halloween 2026?', a: 'La cuenta regresiva anterior muestra el número exacto de días hasta el 31 de octubre de 2026.' },
        { q: '¿Qué día es Halloween 2026?', a: 'Halloween 2026 (31 de octubre de 2026) es sábado.' },
        { q: '¿Cuántas semanas faltan para Halloween?', a: 'Divide los días restantes entre 7 para obtener las semanas aproximadas.' },
        { q: '¿A qué hora empieza Halloween?', a: 'Halloween dura todo el día el 31 de octubre. El trick-or-treating típicamente ocurre por la tarde, comenzando alrededor de las 6 PM.' },
      ],
      weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    },
    pt: {
      title: 'Quantos Dias para o Halloween 2026? Contagem Regressiva',
      metaDesc: 'Quantos dias faltam para o Halloween 2026? Contagem regressiva ao vivo até 31 de outubro em dias, horas, minutos e segundos — atualizado ao instante.',
      kicker: 'Contagem do Halloween',
      headline: 'Quantos dias<br>até o<br><em>Halloween?</em>',
      subhead: 'Contagem regressiva ao vivo até 31 de outubro de 2026',
      resultsHeader: 'Faltam para o Halloween',
      heroSuffix: 'dias',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Data do Halloween', dayLbl: 'Dia da semana', yearLbl: 'Ano',
      unitDays: 'dias', unitHours: 'horas', unitMinutes: 'minutos', unitSeconds: 'segundos',
      seoH2a: 'Quantos dias faltam para o Halloween?',
      seoP1: 'Esta página mostra uma contagem regressiva em tempo real até o Halloween (31 de outubro).',
      seoH2b: 'O Halloween no Brasil',
      seoP2: 'Embora não seja feriado oficial no Brasil, o Halloween ganhou popularidade com festas temáticas, especialmente entre jovens e em casas de festas e baladas.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Quantos dias faltam para o Halloween?', a: 'Veja o contador acima para ver exatamente quantos dias, horas, minutos e segundos faltam para o Halloween de 2026.' },
        { q: 'Em que dia cai o Halloween em 2026?', a: 'O Halloween de 2026 cai no sábado, dia 31 de outubro.' },
      ],
      weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
      months: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
      source: null,
    },
    de: {
      title: 'Wie viele Tage bis Halloween 2026? Countdown',
      metaDesc: 'Wie viele Tage noch bis Halloween? Live-Countdown bis zum 31. Oktober in Tagen, Stunden, Minuten und Sekunden — in Echtzeit aktualisiert.',
      kicker: 'Halloween-Countdown',
      headline: 'Tage bis<br><em>Halloween</em>',
      subhead: 'Live-Countdown bis zum 31. Oktober — Tage, Stunden, Minuten, Sekunden.',
      resultsHeader: 'Countdown bis Halloween',
      heroSuffix: 'Tage',
      weeksLbl: 'Wochen', hoursLbl: 'Stunden', monthsLbl: 'Monate',
      dateLbl: 'Halloween-Datum', dayLbl: 'Wochentag', yearLbl: 'Jahr',
      unitDays: 'Tage', unitHours: 'Stunden', unitMinutes: 'Minuten', unitSeconds: 'Sekunden',
      seoH2a: 'Wann ist Halloween?',
      seoP1: 'Halloween ist immer am 31. Oktober. Der obige Countdown aktualisiert sich automatisch und zählt bis Mitternacht am 31. Oktober herunter.',
      seoH2b: 'Halloween-Traditionen',
      seoP2: 'Halloween stammt vom antiken keltischen Fest Samhain ab. Heute wird es in vielen Ländern mit Kostümen, Trick-or-Treating und Kürbislaternen gefeiert. Besonders beliebt ist es in den USA, Kanada, Irland und Großbritannien.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Wie viele Tage noch bis Halloween 2026?', a: 'Der Countdown oben zeigt die genaue Anzahl der Tage bis zum 31. Oktober 2026. Er wird automatisch bei jedem Öffnen der Seite aktualisiert.' },
        { q: 'Auf welchen Wochentag fällt Halloween 2026?', a: 'Halloween 2026 (31. Oktober 2026) fällt auf einen Samstag.' },
        { q: 'Wie viele Wochen noch bis Halloween?', a: 'Teile die verbleibenden Tage durch 7, um die ungefähren Wochen zu erhalten. Der Live-Zähler zeigt die genaue Aufschlüsselung.' },
        { q: 'Wann beginnt Halloween?', a: 'Halloween dauert den ganzen Tag am 31. Oktober. Trick-or-Treating findet typischerweise am Abend statt, beginnend gegen 18 Uhr.' },
      ],
      weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
      months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      source: null,
    },
    it: {
      title: 'Quanti Giorni a Halloween 2026? Conto alla Rovescia',
      metaDesc: 'Quanti giorni mancano a Halloween 2026? Conto alla rovescia live fino al 31 ottobre in giorni, ore, minuti e secondi — aggiornato istantaneamente.',
      kicker: 'Conto alla Rovescia di Halloween',
      headline: 'Giorni a<br><em>Halloween</em>',
      subhead: 'Conto alla rovescia live fino al 31 ottobre — giorni, ore, minuti, secondi.',
      resultsHeader: 'Conto alla rovescia Halloween',
      heroSuffix: 'giorni',
      weeksLbl: 'settimane', hoursLbl: 'ore', monthsLbl: 'mesi',
      dateLbl: 'Data di Halloween', dayLbl: 'Giorno della settimana', yearLbl: 'Anno',
      unitDays: 'giorni', unitHours: 'ore', unitMinutes: 'minuti', unitSeconds: 'secondi',
      seoH2a: 'Quando è Halloween?',
      seoP1: 'Halloween è sempre il 31 ottobre. Il conto alla rovescia qui sopra si aggiorna automaticamente e conta fino alla mezzanotte del 31 ottobre.',
      seoH2b: 'Tradizioni di Halloween',
      seoP2: 'Halloween ha origine dall\'antico festival celtico di Samhain. Oggi è celebrato in molti paesi con costumi, dolcetto o scherzetto e lanterne di zucca. È particolarmente popolare negli USA, Canada, Irlanda e Regno Unito.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Quanti giorni mancano a Halloween 2026?', a: 'Il conto alla rovescia qui sopra mostra il numero esatto di giorni fino al 31 ottobre 2026. Si aggiorna automaticamente ogni volta che apri la pagina.' },
        { q: 'Che giorno è Halloween 2026?', a: 'Halloween 2026 (31 ottobre 2026) è un sabato.' },
        { q: 'Quante settimane mancano a Halloween?', a: 'Dividi i giorni rimasti per 7 per ottenere le settimane approssimative. Il contatore live mostra la suddivisione precisa.' },
        { q: 'A che ora inizia Halloween?', a: 'Halloween dura tutto il giorno il 31 ottobre. Il dolcetto o scherzetto si svolge tipicamente la sera, a partire dalle 18:00.' },
      ],
      weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
      months: ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
      source: null,
    },
    pl: {
      title: 'Ile Dni do Halloween 2026? Odliczanie na Żywo',
      metaDesc: 'Ile dni zostało do Halloween 2026? Odliczanie na żywo do 31 października w dniach, godzinach, minutach i sekundach — aktualizowane w czasie rzeczywistym.',
      kicker: 'Odliczanie do Halloween',
      headline: 'Dni do<br><em>Halloween</em>',
      subhead: 'Odliczanie na żywo do 31 października — dni, godziny, minuty, sekundy.',
      resultsHeader: 'Odliczanie do Halloween',
      heroSuffix: 'dni',
      weeksLbl: 'tygodnie', hoursLbl: 'godziny', monthsLbl: 'miesiące',
      dateLbl: 'Data Halloween', dayLbl: 'Dzień tygodnia', yearLbl: 'Rok',
      unitDays: 'dni', unitHours: 'godzin', unitMinutes: 'minut', unitSeconds: 'sekund',
      seoH2a: 'Kiedy jest Halloween?',
      seoP1: 'Halloween wypada zawsze 31 października. Powyższe odliczanie aktualizuje się automatycznie i odlicza do północy 31 października.',
      seoH2b: 'Tradycje Halloween',
      seoP2: 'Halloween wywodzi się ze starożytnego celtyckiego święta Samhain. Dziś jest obchodzone w wielu krajach z kostiumami, cukierek albo psikus i lampionami z dyni. Szczególnie popularne jest w USA, Kanadzie, Irlandii i Wielkiej Brytanii.',
      faqTitle: 'Często zadawane pytania',
      faqs: [
        { q: 'Ile dni do Halloween 2026?', a: 'Powyższe odliczanie pokazuje dokładną liczbę dni do 31 października 2026. Aktualizuje się automatycznie za każdym razem, gdy otwierasz stronę.' },
        { q: 'Na jaki dzień tygodnia wypada Halloween 2026?', a: 'Halloween 2026 (31 października 2026) wypada w sobotę.' },
        { q: 'Ile tygodni do Halloween?', a: 'Podziel pozostałe dni przez 7, aby uzyskać przybliżoną liczbę tygodni. Licznik na żywo pokazuje dokładny podział.' },
        { q: 'O której godzinie zaczyna się Halloween?', a: 'Halloween trwa cały dzień 31 października. Cukierek albo psikus odbywa się typowo wieczorem, zaczynając około 18:00.' },
      ],
      weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
      months: ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'],
      source: null,
    },
    ja: {
      title: 'ハロウィンまで何日？ 2026年ハロウィンカウントダウン',
      metaDesc: 'ハロウィンまで何日？10月31日まで日・時間・分・秒のリアルタイムカウントダウン。',
      kicker: 'ハロウィンカウントダウン',
      headline: '<em>ハロウィン</em>まで<br>の日数',
      subhead: '10月31日までのリアルタイムカウントダウン — 日・時間・分・秒。',
      resultsHeader: 'ハロウィンカウントダウン',
      heroSuffix: '日',
      weeksLbl: '週', hoursLbl: '時間', monthsLbl: 'ヶ月',
      dateLbl: 'ハロウィンの日付', dayLbl: '曜日', yearLbl: '年',
      unitDays: '日', unitHours: '時間', unitMinutes: '分', unitSeconds: '秒',
      seoH2a: 'ハロウィンはいつですか？',
      seoP1: 'ハロウィンは常に10月31日です。上のカウントダウンは自動的に更新され、当年または翌年の10月31日の真夜中までカウントダウンします。',
      seoH2b: 'ハロウィンの伝統',
      seoP2: 'ハロウィンは古代ケルトのサウィン祭に由来します。今日では多くの国でコスチューム、トリック・オア・トリート、ジャック・オー・ランタンとともに祝われます。特に米国、カナダ、アイルランド、英国で人気があります。',
      faqTitle: 'よくある質問',
      faqs: [
        { q: '2026年のハロウィンまで何日ありますか？', a: '上のカウントダウンに2026年10月31日までの正確な日数が表示されます。ページを開くたびに自動的に更新されます。' },
        { q: '2026年のハロウィンは何曜日ですか？', a: '2026年のハロウィン（2026年10月31日）は土曜日です。' },
        { q: 'ハロウィンまで何週間ありますか？', a: '残り日数を7で割ると大まかな週数が得られます。ライブカウンターに正確な内訳が表示されます。' },
        { q: 'ハロウィンはいつ始まりますか？', a: 'ハロウィンは10月31日終日です。トリック・オア・トリートは通常夕方、午後6時頃から始まります。' },
      ],
      weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
      months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      source: null,
    },
    ko: {
      title: '할로윈까지 며칠? 2026년 할로윈 카운트다운',
      metaDesc: '할로윈까지 며칠? 10월 31일까지 일, 시간, 분, 초의 실시간 카운트다운.',
      kicker: '할로윈 카운트다운',
      headline: '<em>할로윈</em>까지<br>남은 일수',
      subhead: '10월 31일까지 실시간 카운트다운 — 일, 시간, 분, 초.',
      resultsHeader: '할로윈 카운트다운',
      heroSuffix: '일',
      weeksLbl: '주', hoursLbl: '시간', monthsLbl: '개월',
      dateLbl: '할로윈 날짜', dayLbl: '요일', yearLbl: '연도',
      unitDays: '일', unitHours: '시간', unitMinutes: '분', unitSeconds: '초',
      seoH2a: '할로윈은 언제인가요?',
      seoP1: '할로윈은 항상 10월 31일입니다. 위의 카운트다운은 자동으로 업데이트되며 당해 또는 다음 해 10월 31일 자정까지 카운트다운합니다.',
      seoH2b: '할로윈 전통',
      seoP2: '할로윈은 고대 켈트족의 사윈 축제에서 유래했습니다. 오늘날 많은 국가에서 코스튬, 트릭 오어 트릿, 호박 등불과 함께 기념됩니다. 특히 미국, 캐나다, 아일랜드, 영국에서 인기가 많습니다.',
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '2026년 할로윈까지 며칠 남았나요?', a: '위의 카운트다운에 2026년 10월 31일까지 정확한 일수가 표시됩니다. 페이지를 열 때마다 자동으로 업데이트됩니다.' },
        { q: '2026년 할로윈은 무슨 요일인가요?', a: '2026년 할로윈(2026년 10월 31일)은 토요일입니다.' },
        { q: '할로윈까지 몇 주 남았나요?', a: '남은 일수를 7로 나누면 대략적인 주수가 나옵니다. 실시간 카운터에 정확한 분류가 표시됩니다.' },
        { q: '할로윈은 언제 시작하나요?', a: '할로윈은 10월 31일 하루 종일입니다. 트릭 오어 트릿은 보통 저녁, 오후 6시경부터 시작됩니다.' },
      ],
      weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      source: null,
    },
    nl: {
      title: 'Hoeveel Dagen tot Halloween? 2026 Halloween Aftelling',
      metaDesc: 'Hoeveel dagen tot Halloween? Live aftelling tot 31 oktober in dagen, uren, minuten en seconden.',
      kicker: 'Halloween Aftelling',
      headline: 'Dagen tot<br><em>Halloween</em>',
      subhead: 'Live aftelling tot 31 oktober — dagen, uren, minuten, seconden.',
      resultsHeader: 'Halloween aftelling',
      heroSuffix: 'dagen',
      weeksLbl: 'weken', hoursLbl: 'uren', monthsLbl: 'maanden',
      dateLbl: 'Halloweendatum', dayLbl: 'Dag van de week', yearLbl: 'Jaar',
      unitDays: 'dagen', unitHours: 'uren', unitMinutes: 'minuten', unitSeconds: 'seconden',
      seoH2a: 'Wanneer is Halloween?',
      seoP1: 'Halloween is altijd op 31 oktober. De aftelling hierboven wordt automatisch bijgewerkt en telt af tot middernacht op 31 oktober.',
      seoH2b: 'Halloweentradities',
      seoP2: 'Halloween is afkomstig van het oude Keltische feest Samhain. Tegenwoordig wordt het in veel landen gevierd met kostuums, trick-or-treating en pompoenlantaarns. Het is bijzonder populair in de VS, Canada, Ierland en het VK.',
      faqTitle: 'Veelgestelde vragen',
      faqs: [
        { q: 'Hoeveel dagen tot Halloween 2026?', a: 'De aftelling hierboven toont het exacte aantal dagen tot 31 oktober 2026. Het wordt automatisch bijgewerkt elke keer dat je de pagina opent.' },
        { q: 'Op welke dag valt Halloween 2026?', a: 'Halloween 2026 (31 oktober 2026) is een zaterdag.' },
        { q: 'Hoeveel weken tot Halloween?', a: 'Deel de resterende dagen door 7 voor het geschatte aantal weken. De live teller toont de exacte uitsplitsing.' },
        { q: 'Hoe laat begint Halloween?', a: 'Halloween duurt de hele dag op 31 oktober. Trick-or-treating vindt meestal \'s avonds plaats, vanaf ongeveer 18:00 uur.' },
      ],
      weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
      months: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],
      source: null,
    },
  },
  'easter': {
    en: {
      title: 'Days Until Easter 2026 – Easter Countdown | DateCalc.app',
      metaDesc: 'How many days until Easter? Live countdown to Easter Sunday in days, hours, minutes and seconds. Easter date calculated automatically.',
      kicker: 'Easter Countdown',
      headline: 'Days until<br><em>Easter</em>',
      subhead: 'Live countdown to Easter Sunday — the date is calculated automatically each year.',
      resultsHeader: 'Easter countdown',
      heroSuffix: 'days',
      weeksLbl: 'weeks', hoursLbl: 'hours', monthsLbl: 'months',
      dateLbl: 'Easter date', dayLbl: 'Day of week', yearLbl: 'Year',
      seoH2a: 'When is Easter?',
      seoP1: 'Easter Sunday falls on the first Sunday after the first full moon following the spring equinox (March 21). This means Easter can fall between March 22 and April 25. The date is calculated using the Gregorian algorithm (Meeus/Jones/Butcher).',
      seoH2b: 'How is the Easter date calculated?',
      seoP2: 'The Easter date is determined by ecclesiastical rules established in 325 AD at the Council of Nicaea. The calculation uses a fixed ecclesiastical "full moon" table rather than the actual astronomical full moon, which is why Easter sometimes seems to miss the real full moon.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'When is Easter 2026?', a: 'Easter 2026 falls on April 5, 2026. The countdown above updates automatically to show the next upcoming Easter.' },
        { q: 'When is Easter 2027?', a: 'Easter 2027 falls on March 28, 2027.' },
        { q: 'Why does Easter change every year?', a: 'Easter is a moveable feast tied to the lunar calendar. It falls on the first Sunday after the first ecclesiastical full moon on or after March 21.' },
        { q: 'Is Orthodox Easter the same date?', a: 'No. Orthodox Easter (Eastern Christianity) uses the Julian calendar for the calculation, which often results in a different date, typically 1–5 weeks after Western Easter.' },
      ],
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    },
    fr: {
      title: 'Jours avant Pâques 2026 – Compte à rebours | DateCalc.app',
      metaDesc: 'Combien de jours avant Pâques ? Compte à rebours jusqu\'au dimanche de Pâques en jours, heures, minutes et secondes.',
      kicker: 'Compte à rebours Pâques',
      headline: 'Jours avant<br><em>Pâques</em>',
      subhead: 'Compte à rebours jusqu\'au dimanche de Pâques — la date est calculée automatiquement chaque année.',
      resultsHeader: 'Compte à rebours Pâques',
      heroSuffix: 'jours',
      weeksLbl: 'semaines', hoursLbl: 'heures', monthsLbl: 'mois',
      dateLbl: 'Date de Pâques', dayLbl: 'Jour de la semaine', yearLbl: 'Année',
      seoH2a: 'Quand est Pâques ?',
      seoP1: 'Le dimanche de Pâques tombe le premier dimanche après la première pleine lune suivant l\'équinoxe de printemps (21 mars). Cela signifie que Pâques peut tomber entre le 22 mars et le 25 avril.',
      seoH2b: 'Comment la date de Pâques est-elle calculée ?',
      seoP2: 'La date de Pâques est déterminée par des règles ecclésiastiques établies en 325 après J.-C. au Concile de Nicée. Le calcul utilise un tableau de "pleine lune" ecclésiastique fixe plutôt que la vraie pleine lune astronomique.',
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Quand est Pâques 2026 ?', a: 'Pâques 2026 tombe le 5 avril 2026.' },
        { q: 'Quand est Pâques 2027 ?', a: 'Pâques 2027 tombe le 28 mars 2027.' },
        { q: 'Pourquoi Pâques change-t-il chaque année ?', a: 'Pâques est une fête mobile liée au calendrier lunaire. Il tombe le premier dimanche après la première pleine lune ecclésiastique le ou après le 21 mars.' },
        { q: 'Pâques orthodoxe est-il à la même date ?', a: 'Non. Pâques orthodoxe utilise le calendrier julien, ce qui donne souvent une date différente, généralement 1 à 5 semaines après Pâques occidental.' },
      ],
      weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    },
    es: {
      title: 'Días para Pascua 2026 – Cuenta regresiva | DateCalc.app',
      metaDesc: '¿Cuántos días faltan para Pascua? Cuenta regresiva hasta el Domingo de Pascua en días, horas, minutos y segundos.',
      kicker: 'Cuenta regresiva Pascua',
      headline: 'Días para<br><em>Pascua</em>',
      subhead: 'Cuenta regresiva hasta el Domingo de Pascua — la fecha se calcula automáticamente cada año.',
      resultsHeader: 'Cuenta regresiva Pascua',
      heroSuffix: 'días',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Fecha de Pascua', dayLbl: 'Día de la semana', yearLbl: 'Año',
      seoH2a: '¿Cuándo es Pascua?',
      seoP1: 'El Domingo de Pascua cae el primer domingo después de la primera luna llena que sigue al equinoccio de primavera (21 de marzo). Esto significa que Pascua puede caer entre el 22 de marzo y el 25 de abril.',
      seoH2b: '¿Cómo se calcula la fecha de Pascua?',
      seoP2: 'La fecha de Pascua está determinada por reglas eclesiásticas establecidas en el año 325 d.C. en el Concilio de Nicea. El cálculo utiliza una tabla de "luna llena" eclesiástica fija en lugar de la luna llena astronómica real.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cuándo es Pascua 2026?', a: 'Pascua 2026 cae el 5 de abril de 2026.' },
        { q: '¿Cuándo es Pascua 2027?', a: 'Pascua 2027 cae el 28 de marzo de 2027.' },
        { q: '¿Por qué Pascua cambia cada año?', a: 'Pascua es una fiesta movible vinculada al calendario lunar. Cae el primer domingo después de la primera luna llena eclesiástica el 21 de marzo o después.' },
        { q: '¿Es la Pascua ortodoxa la misma fecha?', a: 'No. La Pascua ortodoxa usa el calendario juliano, lo que a menudo resulta en una fecha diferente, generalmente 1-5 semanas después de la Pascua occidental.' },
      ],
      weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    },
    pt: {
      title: 'Quantos Dias para a Páscoa 2026? Contagem Regressiva',
      metaDesc: 'Quantos dias faltam para a Páscoa? Contagem regressiva ao vivo até o Domingo de Páscoa em dias, horas, minutos e segundos.',
      kicker: 'Contagem da Páscoa',
      headline: 'Quantos dias<br>até a<br><em>Páscoa?</em>',
      subhead: 'Contagem regressiva ao vivo até o Domingo de Páscoa de 2026',
      resultsHeader: 'Faltam para a Páscoa',
      heroSuffix: 'dias',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Data da Páscoa', dayLbl: 'Dia da semana', yearLbl: 'Ano',
      unitDays: 'dias', unitHours: 'horas', unitMinutes: 'minutos', unitSeconds: 'segundos',
      seoH2a: 'Quantos dias faltam para a Páscoa?',
      seoP1: 'Esta página mostra uma contagem regressiva em tempo real até a Páscoa. A data da Páscoa varia a cada ano e é calculada automaticamente.',
      seoH2b: 'Quando é a Páscoa?',
      seoP2: 'A Páscoa é um feriado móvel cristão que cai entre 22 de março e 25 de abril, no primeiro domingo após a lua cheia que segue o equinócio de primavera.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Quando é a Páscoa em 2026?', a: 'A Páscoa de 2026 cai em 5 de abril de 2026.' },
        { q: 'Como a data da Páscoa é calculada?', a: 'A Páscoa cai no primeiro domingo após a primeira lua cheia após o equinócio de março (21 de março). O cálculo é feito pelo algoritmo de Gauss.' },
      ],
      weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
      months: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
      source: null,
    },
    de: {
      title: 'Wie viele Tage bis Ostern 2026? Countdown',
      metaDesc: 'Wie viele Tage noch bis Ostern? Live-Countdown bis zum Ostersonntag in Tagen, Stunden, Minuten und Sekunden. Osterdatum wird automatisch berechnet.',
      kicker: 'Oster-Countdown',
      headline: 'Tage bis<br><em>Ostern</em>',
      subhead: 'Live-Countdown bis zum Ostersonntag — das Datum wird automatisch jedes Jahr berechnet.',
      resultsHeader: 'Countdown bis Ostern',
      heroSuffix: 'Tage',
      weeksLbl: 'Wochen', hoursLbl: 'Stunden', monthsLbl: 'Monate',
      dateLbl: 'Osterdatum', dayLbl: 'Wochentag', yearLbl: 'Jahr',
      unitDays: 'Tage', unitHours: 'Stunden', unitMinutes: 'Minuten', unitSeconds: 'Sekunden',
      seoH2a: 'Wann ist Ostern?',
      seoP1: 'Ostersonntag fällt auf den ersten Sonntag nach dem ersten Vollmond nach der Frühlings-Tag-und-Nacht-Gleiche (21. März). Das bedeutet, Ostern kann zwischen dem 22. März und dem 25. April fallen. Das Datum wird mit dem gregorianischen Algorithmus (Meeus/Jones/Butcher) berechnet.',
      seoH2b: 'Wie wird das Osterdatum berechnet?',
      seoP2: 'Das Osterdatum wird durch kirchliche Regeln bestimmt, die 325 n. Chr. beim Konzil von Nicäa festgelegt wurden. Die Berechnung verwendet eine feste kirchliche „Vollmond"-Tabelle statt des tatsächlichen astronomischen Vollmonds, weshalb Ostern manchmal nicht mit dem echten Vollmond übereinstimmt.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Wann ist Ostern 2026?', a: 'Ostern 2026 fällt auf den 5. April 2026. Der Countdown oben aktualisiert sich automatisch, um das nächste bevorstehende Ostern anzuzeigen.' },
        { q: 'Wann ist Ostern 2027?', a: 'Ostern 2027 fällt auf den 28. März 2027.' },
        { q: 'Warum ändert sich Ostern jedes Jahr?', a: 'Ostern ist ein bewegliches Fest, das an den Mondkalender gebunden ist. Es fällt auf den ersten Sonntag nach dem ersten kirchlichen Vollmond am oder nach dem 21. März.' },
        { q: 'Ist das orthodoxe Ostern am selben Datum?', a: 'Nein. Das orthodoxe Ostern (östliches Christentum) verwendet für die Berechnung den julianischen Kalender, was oft zu einem anderen Datum führt, typischerweise 1–5 Wochen nach dem westlichen Ostern.' },
      ],
      weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
      months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      source: null,
    },
    it: {
      title: 'Quanti Giorni a Pasqua 2026? Conto alla Rovescia',
      metaDesc: 'Quanti giorni mancano a Pasqua? Conto alla rovescia live fino alla Domenica di Pasqua in giorni, ore, minuti e secondi. Data calcolata automaticamente.',
      kicker: 'Conto alla Rovescia di Pasqua',
      headline: 'Giorni a<br><em>Pasqua</em>',
      subhead: 'Conto alla rovescia live fino alla Domenica di Pasqua — la data è calcolata automaticamente ogni anno.',
      resultsHeader: 'Conto alla rovescia Pasqua',
      heroSuffix: 'giorni',
      weeksLbl: 'settimane', hoursLbl: 'ore', monthsLbl: 'mesi',
      dateLbl: 'Data di Pasqua', dayLbl: 'Giorno della settimana', yearLbl: 'Anno',
      unitDays: 'giorni', unitHours: 'ore', unitMinutes: 'minuti', unitSeconds: 'secondi',
      seoH2a: 'Quando è Pasqua?',
      seoP1: 'La Domenica di Pasqua cade la prima domenica dopo il primo plenilunio successivo all\'equinozio di primavera (21 marzo). Questo significa che la Pasqua può cadere tra il 22 marzo e il 25 aprile. La data è calcolata con l\'algoritmo gregoriano (Meeus/Jones/Butcher).',
      seoH2b: 'Come si calcola la data di Pasqua?',
      seoP2: 'La data di Pasqua è determinata da regole ecclesiastiche stabilite nel 325 d.C. al Concilio di Nicea. Il calcolo usa una tabella di "luna piena" ecclesiastica fissa invece della vera luna piena astronomica, motivo per cui la Pasqua a volte sembra non coincidere con la vera luna piena.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Quando è Pasqua 2026?', a: 'La Pasqua 2026 cade il 5 aprile 2026. Il conto alla rovescia qui sopra si aggiorna automaticamente per mostrare la prossima Pasqua.' },
        { q: 'Quando è Pasqua 2027?', a: 'La Pasqua 2027 cade il 28 marzo 2027.' },
        { q: 'Perché la Pasqua cambia ogni anno?', a: 'La Pasqua è una festa mobile legata al calendario lunare. Cade la prima domenica dopo il primo plenilunio ecclesiastico il 21 marzo o dopo.' },
        { q: 'La Pasqua ortodossa è alla stessa data?', a: 'No. La Pasqua ortodossa (cristianesimo orientale) usa il calendario giuliano per il calcolo, il che spesso porta a una data diversa, tipicamente 1–5 settimane dopo la Pasqua occidentale.' },
      ],
      weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
      months: ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
      source: null,
    },
    pl: {
      title: 'Ile Dni do Wielkanocy 2026? Odliczanie na Żywo',
      metaDesc: 'Ile dni zostało do Wielkanocy? Odliczanie na żywo do Niedzieli Wielkanocnej w dniach, godzinach, minutach i sekundach. Data obliczana automatycznie.',
      kicker: 'Odliczanie do Wielkanocy',
      headline: 'Dni do<br><em>Wielkanocy</em>',
      subhead: 'Odliczanie na żywo do Niedzieli Wielkanocnej — data obliczana automatycznie każdego roku.',
      resultsHeader: 'Odliczanie do Wielkanocy',
      heroSuffix: 'dni',
      weeksLbl: 'tygodnie', hoursLbl: 'godziny', monthsLbl: 'miesiące',
      dateLbl: 'Data Wielkanocy', dayLbl: 'Dzień tygodnia', yearLbl: 'Rok',
      unitDays: 'dni', unitHours: 'godzin', unitMinutes: 'minut', unitSeconds: 'sekund',
      seoH2a: 'Kiedy jest Wielkanoc?',
      seoP1: 'Niedziela Wielkanocna przypada na pierwszą niedzielę po pierwszej pełni księżyca następującej po wiosennym zrównaniu dnia z nocą (21 marca). Oznacza to, że Wielkanoc może wypaść między 22 marca a 25 kwietnia. Data obliczana jest algorytmem gregoriańskim (Meeus/Jones/Butcher).',
      seoH2b: 'Jak obliczana jest data Wielkanocy?',
      seoP2: 'Data Wielkanocy jest wyznaczana przez zasady kościelne ustalone w 325 r. na Soborze Nicejskim. Obliczenie używa ustalonej kościelnej tabeli „pełni księżyca" zamiast rzeczywistej astronomicznej pełni, dlatego Wielkanoc czasem nie pokrywa się z prawdziwą pełnią księżyca.',
      faqTitle: 'Często zadawane pytania',
      faqs: [
        { q: 'Kiedy jest Wielkanoc 2026?', a: 'Wielkanoc 2026 wypada 5 kwietnia 2026. Powyższe odliczanie aktualizuje się automatycznie, aby pokazać kolejną nadchodzącą Wielkanoc.' },
        { q: 'Kiedy jest Wielkanoc 2027?', a: 'Wielkanoc 2027 wypada 28 marca 2027.' },
        { q: 'Dlaczego Wielkanoc zmienia się co roku?', a: 'Wielkanoc jest świętem ruchomym powiązanym z kalendarzem księżycowym. Wypada w pierwszą niedzielę po pierwszej kościelnej pełni księżyca 21 marca lub po tej dacie.' },
        { q: 'Czy prawosławna Wielkanoc jest w tym samym terminie?', a: 'Nie. Prawosławna Wielkanoc (chrześcijaństwo wschodnie) używa kalendarza juliańskiego do obliczeń, co często daje inną datę, zazwyczaj 1–5 tygodni po zachodniej Wielkanocy.' },
      ],
      weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
      months: ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'],
      source: null,
    },
    ja: {
      title: 'イースターまで何日？ 2026年イースターカウントダウン',
      metaDesc: 'イースターまで何日？イースターの日曜日まで日・時間・分・秒のリアルタイムカウントダウン。日付は自動計算されます。',
      kicker: 'イースターカウントダウン',
      headline: '<em>イースター</em>まで<br>の日数',
      subhead: 'イースターの日曜日までのリアルタイムカウントダウン — 毎年自動的に日付を計算します。',
      resultsHeader: 'イースターカウントダウン',
      heroSuffix: '日',
      weeksLbl: '週', hoursLbl: '時間', monthsLbl: 'ヶ月',
      dateLbl: 'イースターの日付', dayLbl: '曜日', yearLbl: '年',
      unitDays: '日', unitHours: '時間', unitMinutes: '分', unitSeconds: '秒',
      seoH2a: 'イースターはいつですか？',
      seoP1: 'イースターの日曜日は春分（3月21日）後の最初の満月の後の最初の日曜日に当たります。つまりイースターは3月22日〜4月25日の間に当たります。日付はグレゴリオ暦のアルゴリズム（Meeus/Jones/Butcher）で計算されます。',
      seoH2b: 'イースターの日付はどうやって計算されますか？',
      seoP2: 'イースターの日付は325年のニカイア公会議で定められた教会の規則で決まります。計算は実際の天文学的な満月ではなく固定された教会の「満月」表を使用しています。そのためイースターが本物の満月とずれることがあります。',
      faqTitle: 'よくある質問',
      faqs: [
        { q: '2026年のイースターはいつですか？', a: '2026年のイースターは2026年4月5日です。上のカウントダウンは次のイースターを表示するよう自動的に更新されます。' },
        { q: '2027年のイースターはいつですか？', a: '2027年のイースターは2027年3月28日です。' },
        { q: 'なぜイースターは毎年変わるのですか？', a: 'イースターは太陰暦に結びついた移動祝日です。3月21日以降の最初の教会的満月の後の最初の日曜日に当たります。' },
        { q: '正教会のイースターは同じ日ですか？', a: 'いいえ。正教会のイースター（東方キリスト教）はユリウス暦を使って計算するため、しばしば異なる日付になります。通常は西方のイースターの1〜5週後です。' },
      ],
      weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
      months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      source: null,
    },
    ko: {
      title: '부활절까지 며칠? 2026년 부활절 카운트다운',
      metaDesc: '부활절까지 며칠? 부활절 일요일까지 일, 시간, 분, 초의 실시간 카운트다운. 날짜는 자동으로 계산됩니다.',
      kicker: '부활절 카운트다운',
      headline: '<em>부활절</em>까지<br>남은 일수',
      subhead: '부활절 일요일까지 실시간 카운트다운 — 매년 자동으로 날짜를 계산합니다.',
      resultsHeader: '부활절 카운트다운',
      heroSuffix: '일',
      weeksLbl: '주', hoursLbl: '시간', monthsLbl: '개월',
      dateLbl: '부활절 날짜', dayLbl: '요일', yearLbl: '연도',
      unitDays: '일', unitHours: '시간', unitMinutes: '분', unitSeconds: '초',
      seoH2a: '부활절은 언제인가요?',
      seoP1: '부활절 일요일은 춘분(3월 21일) 이후 첫 번째 보름달 다음의 첫 번째 일요일입니다. 이는 부활절이 3월 22일에서 4월 25일 사이에 올 수 있음을 의미합니다. 날짜는 그레고리력 알고리즘(Meeus/Jones/Butcher)으로 계산됩니다.',
      seoH2b: '부활절 날짜는 어떻게 계산되나요?',
      seoP2: '부활절 날짜는 325년 니케아 공의회에서 확립된 교회 규칙에 의해 결정됩니다. 계산은 실제 천문학적 보름달이 아닌 고정된 교회의 "보름달" 표를 사용합니다.',
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '2026년 부활절은 언제인가요?', a: '2026년 부활절은 2026년 4월 5일입니다. 위의 카운트다운은 다음 부활절을 표시하도록 자동으로 업데이트됩니다.' },
        { q: '2027년 부활절은 언제인가요?', a: '2027년 부활절은 2027년 3월 28일입니다.' },
        { q: '왜 부활절은 매년 바뀌나요?', a: '부활절은 태음력에 연결된 이동 축일입니다. 3월 21일 이후 첫 번째 교회적 보름달 다음의 첫 번째 일요일에 옵니다.' },
        { q: '정교회 부활절도 같은 날인가요?', a: '아니요. 정교회 부활절(동방 기독교)은 계산에 율리우스력을 사용하여 종종 다른 날짜가 됩니다. 일반적으로 서방 부활절보다 1~5주 후입니다.' },
      ],
      weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      source: null,
    },
    nl: {
      title: 'Hoeveel Dagen tot Pasen? 2026 Pasen Aftelling',
      metaDesc: 'Hoeveel dagen tot Pasen? Live aftelling tot Eerste Paasdag in dagen, uren, minuten en seconden. Paasdatum automatisch berekend.',
      kicker: 'Pasen Aftelling',
      headline: 'Dagen tot<br><em>Pasen</em>',
      subhead: 'Live aftelling tot Eerste Paasdag — de datum wordt elk jaar automatisch berekend.',
      resultsHeader: 'Pasen aftelling',
      heroSuffix: 'dagen',
      weeksLbl: 'weken', hoursLbl: 'uren', monthsLbl: 'maanden',
      dateLbl: 'Paasdag datum', dayLbl: 'Dag van de week', yearLbl: 'Jaar',
      unitDays: 'dagen', unitHours: 'uren', unitMinutes: 'minuten', unitSeconds: 'seconden',
      seoH2a: 'Wanneer is Pasen?',
      seoP1: 'Eerste Paasdag valt op de eerste zondag na de eerste volle maan na het lentepunt (21 maart). Dit betekent dat Pasen tussen 22 maart en 25 april kan vallen. De datum wordt berekend met het Gregoriaanse algoritme (Meeus/Jones/Butcher).',
      seoH2b: 'Hoe wordt de Paasdatum berekend?',
      seoP2: 'De Paasdatum wordt bepaald door kerkelijke regels die in 325 na Christus werden vastgesteld op het Concilie van Nicea. De berekening gebruikt een vaste kerkelijke "volle maan"-tabel in plaats van de werkelijke astronomische volle maan, waardoor Pasen soms de echte volle maan lijkt te missen.',
      faqTitle: 'Veelgestelde vragen',
      faqs: [
        { q: 'Wanneer is Pasen 2026?', a: 'Pasen 2026 valt op 5 april 2026. De aftelling hierboven wordt automatisch bijgewerkt om het volgende Pasen te tonen.' },
        { q: 'Wanneer is Pasen 2027?', a: 'Pasen 2027 valt op 28 maart 2027.' },
        { q: 'Waarom verandert Pasen elk jaar?', a: 'Pasen is een bewegelijk feest gebonden aan de maankalender. Het valt op de eerste zondag na de eerste kerkelijke volle maan op of na 21 maart.' },
        { q: 'Is het Orthodoxe Pasen op dezelfde datum?', a: 'Nee. Het Orthodoxe Pasen (oosters christendom) gebruikt de Juliaanse kalender voor de berekening, wat vaak een andere datum oplevert, doorgaans 1–5 weken na het westerse Pasen.' },
      ],
      weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
      months: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],
      source: null,
    },
  },
};

// Get holiday date for a given id and year
function getHolidayDate(id, year) {
  if (id === 'new-year') return new Date(year, 0, 1);
  if (id === 'halloween') return new Date(year, 9, 31);
  if (id === 'easter') return computeEaster(year);
  return null;
}

// Meeus/Jones/Butcher Easter algorithm
function computeEasterJS() {
  return `
function computeEaster(year) {
  var a=year%19, b=Math.floor(year/100), c=year%100;
  var d=Math.floor(b/4), e=b%4;
  var f=Math.floor((b+8)/25), g=Math.floor((b-f+1)/3);
  var h=(19*a+b-d-g+15)%30;
  var i=Math.floor(c/4), k=c%4;
  var l=(32+2*e+2*i-h-k)%7;
  var m=Math.floor((a+11*h+22*l)/451);
  var month=Math.floor((h+l-7*m+114)/31)-1;
  var day=((h+l-7*m+114)%31)+1;
  return new Date(year, month, day);
}`;
}

function renderHoliday(id, lang) {
  const t = HOLIDAYS[id][lang];

  const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

  const formGrid = '';

  const resultsSection = `  <div class="results-section auto-show" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroDays">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="precise-age" id="liveTime"></div>
    <div class="stats-strip cols-3">
      <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeksLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statHours">—</div><div class="stat-lbl">${t.hoursLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statMonths">—</div><div class="stat-lbl">${t.monthsLbl}</div></div>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.dateLbl}</div><div class="fact-val" id="ffDate">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.dayLbl}</div><div class="fact-val" id="ffDay">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.yearLbl}</div><div class="fact-val" id="ffYear">—</div></div>
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

  const easterFn = id === 'easter' ? computeEasterJS() : '';
  const getTargetFn = id === 'new-year'
    ? `function getTarget(){var now=new Date();var y=now.getFullYear();var t=new Date(y,0,1);if(t<=now)t=new Date(y+1,0,1);return t;}`
    : id === 'halloween'
    ? `function getTarget(){var now=new Date();var y=now.getFullYear();var t=new Date(y,9,31);if(t<=now)t=new Date(y+1,9,31);return t;}`
    : `function getTarget(){${easterFn}var now=new Date();var y=now.getFullYear();var t=computeEaster(y);if(t<=now)t=computeEaster(y+1);return t;}`;

  const data = JSON.stringify({ weekDays: t.weekDays, months: t.months });

  const script = `
var D = ${data};
function fmt(n){return n.toLocaleString();}
function pad2(n){return n<10?'0'+n:''+n;}

${id === 'easter' ? computeEasterJS() : ''}
${getTargetFn.replace(easterFn, '')}

(function(){
  var target=getTarget();
  document.getElementById('ffDate').textContent=target.getDate()+' '+D.months[target.getMonth()]+' '+target.getFullYear();
  document.getElementById('ffDay').textContent=D.weekDays[target.getDay()];
  document.getElementById('ffYear').textContent=target.getFullYear();
})();

function tick(){
  var now=new Date();
  var target=getTarget();
  var diff=target-now;
  if(diff<0) diff=0;
  var totalSec=Math.floor(diff/1000);
  var s=totalSec%60, totalMin=Math.floor(totalSec/60);
  var min=totalMin%60, totalH=Math.floor(totalMin/60);
  var h=totalH%24, days=Math.floor(totalH/24);
  document.getElementById('heroDays').textContent=fmt(days);
  document.getElementById('liveTime').textContent=pad2(h)+'h · '+pad2(min)+'min · '+pad2(s)+'s';
  document.getElementById('statWeeks').textContent=fmt(Math.floor(days/7));
  document.getElementById('statHours').textContent=fmt(Math.floor(diff/3600000));
  document.getElementById('statMonths').textContent=Math.floor(days/30.44*10)/10;
}
tick();
setInterval(tick,1000);
`;

  return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
}

module.exports = {
  pages: [
    { id: 'new-year',  slugs: { en: 'days-until-new-year',  fr: 'fr/jours-avant-nouvel-an', es: 'es/dias-para-ano-nuevo', pt: 'pt/dias-para-ano-novo', de: 'de/tage-bis-neujahr', it: 'it/giorni-a-capodanno', pl: 'pl/ile-dni-do-nowego-roku', ja: 'ja/shinnen-made', ko: 'ko/saehae-kkaji', nl: 'nl/dagen-tot-nieuwjaar' } },
    { id: 'halloween', slugs: { en: 'days-until-halloween',  fr: 'fr/jours-avant-halloween',  es: 'es/dias-para-halloween',  pt: 'pt/dias-para-o-halloween', de: 'de/tage-bis-halloween', it: 'it/giorni-a-halloween', pl: 'pl/ile-dni-do-halloween', ja: 'ja/harouin-made', ko: 'ko/hallowin-kkaji', nl: 'nl/dagen-tot-halloween' } },
    { id: 'easter',    slugs: { en: 'days-until-easter',     fr: 'fr/jours-avant-paques',     es: 'es/dias-para-pascua',    pt: 'pt/dias-para-a-pascoa',   de: 'de/tage-bis-ostern', it: 'it/giorni-a-pasqua', pl: 'pl/ile-dni-do-wielkanocy', ja: 'ja/iisutaa-made', ko: 'ko/buhwarjeol-kkaji', nl: 'nl/dagen-tot-pasen' } },
  ],
  render(pageId, lang) {
    return renderHoliday(pageId, lang);
  },
};
