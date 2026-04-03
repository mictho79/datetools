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
    { id: 'new-year',  slugs: { en: 'days-until-new-year',  fr: 'fr/jours-avant-nouvel-an', es: 'es/dias-para-ano-nuevo', pt: 'pt/dias-para-ano-novo', de: 'de/tage-bis-neujahr', it: 'it/giorni-a-capodanno', pl: 'pl/ile-dni-do-nowego-roku' } },
    { id: 'halloween', slugs: { en: 'days-until-halloween',  fr: 'fr/jours-avant-halloween',  es: 'es/dias-para-halloween',  pt: 'pt/dias-para-o-halloween', de: 'de/tage-bis-halloween', it: 'it/giorni-a-halloween', pl: 'pl/ile-dni-do-halloween' } },
    { id: 'easter',    slugs: { en: 'days-until-easter',     fr: 'fr/jours-avant-paques',     es: 'es/dias-para-pascua',    pt: 'pt/dias-para-a-pascoa',   de: 'de/tage-bis-ostern', it: 'it/giorni-a-pasqua', pl: 'pl/ile-dni-do-wielkanocy' } },
  ],
  render(pageId, lang) {
    return renderHoliday(pageId, lang);
  },
};
