// Dog Age Calculator

const T = {
  en: {
    title: 'Dog Age Calculator – Convert Dog Years to Human Years | Date.tools',
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
    title: 'Calculateur d\'âge du chien – Convertir les années chien en années humaines | Date.tools',
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
    title: 'Calculadora de edad del perro – Convertir años perro a años humanos | Date.tools',
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
};

module.exports = {
  pages: [
    { id: 'dog-age-calculator', slugs: { en: 'dog-age-calculator', fr: 'fr/calculateur-age-chien', es: 'es/calculadora-edad-perro' } },
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
