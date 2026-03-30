// Cat Age Calculator

const T = {
  en: {
    title: 'Cat Age Calculator – Convert Cat Years to Human Years | Date.tools',
    metaDesc: 'How old is your cat in human years? Enter your cat\'s age for an accurate cat-to-human age conversion based on veterinary guidelines.',
    kicker: 'Cat Age Calculator',
    headline: 'How old is<br>my <em>cat</em>?',
    subhead: 'Convert your cat\'s age to human years using the veterinary formula.',
    catAgeLabel: 'Cat\'s age (years)',
    calcBtn: '→ Convert',
    tipText: '"Cats don\'t live nine lives. They live one life with nine personalities."',
    examples: ['Kitten, 1 year', 'Adult cat, 5 years', 'Senior cat, 12 years'],
    resultsHeader: 'Your cat\'s age',
    heroSuffix: 'human years',
    catYearsLbl: 'Cat years', lifeStage: 'Life stage', formula: 'Formula used',
    stages: ['Kitten','Junior','Prime','Mature','Senior','Geriatric'],
    stageYears: [0, 1, 3, 7, 11, 15],
    stageLabels: ['0–6 months','7 mo – 2 yr','3–6 yr','7–10 yr','11–14 yr','15+ yr'],
    errInvalid: '→ Please enter a valid cat age (1–30).',
    seoH2a: 'How to convert cat years to human years',
    seoP1: 'The widely-used veterinary cat age formula works in three stages. The first year of a cat\'s life equals approximately 15 human years — in this time, kittens go from helpless newborns to sexually mature, fully coordinated young adults. Year 2 adds 9 more years (24 total), reflecting the continued rapid physical and behavioral development of adolescent cats. After that, each additional year adds about 4 human years. So a 5-year-old cat is approximately 36 in human years, a 10-year-old is 56, and a 15-year-old is 76. This formula was developed by veterinarians at the International Cat Care organization based on observable physical and behavioral development stages, and it provides a far more accurate picture than any simple ratio.',
    seoH2b: 'What life stage is my cat in?',
    seoP2: 'Cats progress through six recognized life stages defined by the International Cat Care organization. Kitten (0–6 months): rapid growth and socialization. Junior (7 months–2 years): continued development to full size. Prime (3–6 years): peak health and activity. Mature (7–10 years): equivalent to middle age, may slow down slightly. Senior (11–14 years): more susceptible to disease; regular vet checks recommended. Geriatric (15+ years): requires special dietary and medical attention. Indoor cats typically live 12–18 years thanks to protection from outdoor hazards; outdoor cats average 10–14 years due to exposure to traffic, predators, and infectious disease.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://icatcare.org/advice/how-old-is-my-cat-in-human-years/', label: 'International Cat Care – Cat Age in Human Years' },
    faqs: [
      { q: 'How old is my cat in human years?', a: 'Use the veterinary formula: year 1 = 15 human years, year 2 adds 9 (total 24), then each year after that adds 4. So a 3-year-old cat is about 28 in human years, a 7-year-old is 44, and a 12-year-old is 64. Enter your cat\'s age above for an instant conversion.' },
      { q: 'Is 1 cat year really 7 human years?', a: 'No — that is a common myth. A 1-year-old cat is the equivalent of about 15 human years, not 7. Cats develop extremely rapidly in their first two years. The 1:7 ratio is a rough average across a lifetime but is inaccurate at any specific age.' },
      { q: 'When is a cat considered senior?', a: 'According to International Cat Care, cats are considered senior from age 11, which is roughly equivalent to a 60-year-old human. At this stage, vets recommend biannual health screenings to catch age-related conditions like kidney disease, hyperthyroidism, and arthritis early.' },
      { q: 'How long do cats live on average?', a: 'The average domestic cat lives 12–18 years. Indoor cats typically reach the higher end of that range or beyond, while outdoor cats average 10–14 years. The oldest cat ever recorded, Creme Puff of Austin, Texas, lived to 38 years and 3 days.' },
      { q: 'Do indoor cats live longer than outdoor cats?', a: 'Yes. Indoor cats typically live 12–18 years, while outdoor cats average 10–14 years due to exposure to traffic, predators, and disease. The difference can be 4–8 years, making indoor living one of the single biggest factors in feline longevity.' },
      { q: 'What is the life expectancy of a cat by breed?', a: 'Siamese and Burmese cats are known for exceptional longevity, often reaching 15–20 years. Maine Coons and Ragdolls typically live 12–15 years. Mixed-breed (domestic shorthair or longhair) cats often live 15+ years due to genetic diversity. Smaller cat breeds generally do not show the same lifespan advantage over larger breeds as dogs do.' },
      { q: 'How old is a 10-year-old cat in human years?', a: 'A 10-year-old cat is approximately 56 in human years according to the standard conversion formula (24 + 8×4 = 56).' },
      { q: 'What is the oldest cat ever recorded?', a: 'The oldest cat ever recorded was Creme Puff from Austin, Texas, who lived to 38 years and 3 days (1967–2005), certified by Guinness World Records.' },
    ],
  },
  fr: {
    title: 'Calculateur d\'âge du chat – Convertir les années chat | Date.tools',
    metaDesc: 'Quel âge a votre chat en années humaines ? Entrez l\'âge de votre chat pour une conversion précise basée sur les recommandations vétérinaires.',
    kicker: 'Calculateur d\'âge du chat',
    headline: 'Quel âge a<br>mon <em>chat</em> ?',
    subhead: 'Convertissez l\'âge de votre chat en années humaines avec la formule vétérinaire.',
    catAgeLabel: 'Âge du chat (années)',
    calcBtn: '→ Convertir',
    tipText: '"Les chats ne vivent pas neuf vies. Ils vivent une vie avec neuf personnalités."',
    examples: ['Chaton, 1 an', 'Chat adulte, 5 ans', 'Chat senior, 12 ans'],
    resultsHeader: 'L\'âge de votre chat',
    heroSuffix: 'ans (humain)',
    catYearsLbl: 'Années chat', lifeStage: 'Stade de vie', formula: 'Formule utilisée',
    stages: ['Chaton','Junior','Prime','Mature','Senior','Gériatrique'],
    stageYears: [0, 1, 3, 7, 11, 15],
    stageLabels: ['0–6 mois','7 mo – 2 ans','3–6 ans','7–10 ans','11–14 ans','15+ ans'],
    errInvalid: '→ Veuillez entrer un âge valide (1–30).',
    seoH2a: 'Comment convertir les années chat en années humaines',
    seoP1: 'La formule vétérinaire standard fonctionne en trois étapes. La première année de vie d\'un chat équivaut à environ 15 ans humains — en ce temps, les chatons passent de nouveau-nés impuissants à jeunes adultes sexuellement matures. L\'année 2 ajoute 9 ans de plus (24 au total), reflétant le développement rapide continu des chats adolescents. Ensuite, chaque année supplémentaire ajoute environ 4 ans humains. Un chat de 5 ans correspond donc à environ 36 ans humains, un chat de 10 ans à 56 ans, et un chat de 15 ans à 76 ans. Cette formule a été développée par des vétérinaires de l\'organisation International Cat Care sur la base d\'étapes de développement physique et comportemental observables.',
    seoH2b: 'À quel stade de vie est mon chat ?',
    seoP2: 'Les chats traversent six stades de vie reconnus définis par International Cat Care. Chaton (0–6 mois) : croissance rapide et socialisation. Junior (7 mois–2 ans) : développement continu jusqu\'à la taille adulte. Prime (3–6 ans) : santé et activité au maximum. Mature (7–10 ans) : équivalent de l\'âge mûr. Senior (11–14 ans) : plus sensible aux maladies, bilans vétérinaires réguliers recommandés. Gériatrique (15+ ans) : nécessite une attention diététique et médicale particulière. Les chats d\'intérieur vivent généralement 12–18 ans ; les chats d\'extérieur en moyenne 10–14 ans.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://icatcare.org/advice/how-old-is-my-cat-in-human-years/', label: 'International Cat Care – Âge du chat en années humaines' },
    faqs: [
      { q: 'Quel âge a mon chat en années humaines ?', a: 'Utilisez la formule vétérinaire : année 1 = 15 ans humains, année 2 ajoute 9 (total 24), puis chaque année suivante ajoute 4. Un chat de 3 ans a environ 28 ans humains, un chat de 7 ans 44 ans, un chat de 12 ans 64 ans. Entrez l\'âge de votre chat ci-dessus pour une conversion instantanée.' },
      { q: '1 année chat équivaut-elle vraiment à 7 années humaines ?', a: 'Non — c\'est un mythe courant. Un chat de 1 an équivaut à environ 15 ans humains, pas 7. Les chats se développent extrêmement rapidement au cours de leurs deux premières années. Le rapport 1:7 est une moyenne approximative sur une vie mais inexact à tout âge précis.' },
      { q: 'À quel âge un chat est-il considéré senior ?', a: 'Selon International Cat Care, les chats sont considérés seniors à partir de 11 ans, ce qui équivaut approximativement à un humain de 60 ans. À ce stade, les vétérinaires recommandent des bilans de santé semestriels pour détecter précocement les maladies liées à l\'âge comme l\'insuffisance rénale, l\'hyperthyroïdie et l\'arthrite.' },
      { q: 'Quelle est l\'espérance de vie d\'un chat ?', a: 'Le chat domestique moyen vit 12–18 ans. Les chats d\'intérieur atteignent généralement la fourchette haute ou au-delà, tandis que les chats d\'extérieur vivent en moyenne 10–14 ans. Le chat le plus vieux jamais enregistré, Creme Puff d\'Austin, Texas, a vécu 38 ans et 3 jours.' },
      { q: 'Les chats d\'intérieur vivent-ils plus longtemps que les chats d\'extérieur ?', a: 'Oui. Les chats d\'intérieur vivent généralement 12–18 ans, tandis que les chats d\'extérieur ont une moyenne de 10–14 ans en raison de l\'exposition à la circulation, aux prédateurs et aux maladies. La différence peut être de 4 à 8 ans, faisant de la vie en intérieur l\'un des facteurs les plus importants pour la longévité féline.' },
      { q: 'Quelle est l\'espérance de vie d\'un chat selon la race ?', a: 'Les Siamois et les Birmans sont connus pour leur longévité exceptionnelle, atteignant souvent 15–20 ans. Les Maine Coons et les Ragdolls vivent généralement 12–15 ans. Les chats croisés vivent souvent 15 ans ou plus grâce à la diversité génétique. Les petites races de chats ne montrent pas le même avantage de longévité sur les grandes races comme chez les chiens.' },
      { q: 'Quel âge a un chat de 10 ans en années humaines ?', a: 'Un chat de 10 ans correspond à environ 56 ans humains selon la formule standard (24 + 8×4 = 56).' },
      { q: 'Quel est le chat le plus vieux jamais enregistré ?', a: 'Le chat le plus vieux jamais enregistré était Creme Puff, d\'Austin, Texas, qui a vécu 38 ans et 3 jours (1967–2005), certifié par le Guinness World Records.' },
    ],
  },
  es: {
    title: 'Calculadora de edad del gato – Convertir años gato | Date.tools',
    metaDesc: '¿Cuántos años tiene tu gato en años humanos? Ingresa la edad de tu gato para una conversión precisa basada en directrices veterinarias.',
    kicker: 'Calculadora de edad del gato',
    headline: '¿Cuántos años<br>tiene mi <em>gato</em>?',
    subhead: 'Convierte la edad de tu gato a años humanos con la fórmula veterinaria.',
    catAgeLabel: 'Edad del gato (años)',
    calcBtn: '→ Convertir',
    tipText: '"Los gatos no viven nueve vidas. Viven una vida con nueve personalidades."',
    examples: ['Gatito, 1 año', 'Gato adulto, 5 años', 'Gato senior, 12 años'],
    resultsHeader: 'La edad de tu gato',
    heroSuffix: 'años (humano)',
    catYearsLbl: 'Años gato', lifeStage: 'Etapa de vida', formula: 'Fórmula usada',
    stages: ['Gatito','Junior','Primo','Maduro','Senior','Geriátrico'],
    stageYears: [0, 1, 3, 7, 11, 15],
    stageLabels: ['0–6 meses','7 mo – 2 años','3–6 años','7–10 años','11–14 años','15+ años'],
    errInvalid: '→ Por favor ingresa una edad válida (1–30).',
    seoH2a: 'Cómo convertir años de gato a años humanos',
    seoP1: 'La fórmula veterinaria estándar funciona en tres etapas. El primer año de vida de un gato equivale a aproximadamente 15 años humanos — en este tiempo, los gatitos pasan de recién nacidos indefensos a adultos jóvenes sexualmente maduros y coordinados. El segundo año agrega unos 9 años más (24 en total), reflejando el rápido desarrollo físico y conductual continuo de los gatos adolescentes. Después de eso, cada año adicional agrega aproximadamente 4 años humanos. Así, un gato de 5 años equivale a unos 36 años humanos, uno de 10 años a 56, y uno de 15 años a 76. Esta fórmula fue desarrollada por veterinarios de International Cat Care basándose en etapas observables de desarrollo físico y conductual.',
    seoH2b: '¿En qué etapa de vida está mi gato?',
    seoP2: 'Los gatos pasan por seis etapas de vida reconocidas definidas por International Cat Care. Gatito (0–6 meses): crecimiento rápido y socialización. Junior (7 meses–2 años): desarrollo continuo hasta el tamaño adulto. Primo (3–6 años): salud y actividad en su máximo. Maduro (7–10 años): equivalente a la mediana edad. Senior (11–14 años): más susceptible a enfermedades; revisiones veterinarias regulares recomendadas. Geriátrico (15+ años): requiere atención dietética y médica especial. Los gatos de interior típicamente viven 12–18 años; los de exterior un promedio de 10–14 años.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://icatcare.org/advice/how-old-is-my-cat-in-human-years/', label: 'International Cat Care – Edad del gato en años humanos' },
    faqs: [
      { q: '¿Cuántos años tiene mi gato en años humanos?', a: 'Usa la fórmula veterinaria: año 1 = 15 años humanos, año 2 agrega 9 (total 24), luego cada año agrega 4. Un gato de 3 años tiene unos 28 años humanos, uno de 7 años 44, uno de 12 años 64. Ingresa la edad de tu gato arriba para una conversión instantánea.' },
      { q: '¿Es verdad que 1 año de gato equivale a 7 años humanos?', a: 'No, es un mito común. Un gato de 1 año equivale a unos 15 años humanos, no 7. Los gatos se desarrollan extremadamente rápido en sus primeros dos años. La proporción 1:7 es un promedio aproximado a lo largo de una vida pero inexacto a cualquier edad específica.' },
      { q: '¿A qué edad se considera senior un gato?', a: 'Según International Cat Care, los gatos se consideran senior a partir de los 11 años, lo que equivale aproximadamente a un humano de 60 años. En esta etapa, los veterinarios recomiendan revisiones de salud semestrales para detectar precozmente enfermedades relacionadas con la edad como la enfermedad renal, el hipertiroidismo y la artritis.' },
      { q: '¿Cuánto viven los gatos en promedio?', a: 'El gato doméstico promedio vive 12–18 años. Los gatos de interior suelen alcanzar el extremo superior de ese rango o más, mientras que los de exterior promedian 10–14 años. El gato más viejo jamás registrado, Creme Puff de Austin, Texas, vivió 38 años y 3 días.' },
      { q: '¿Los gatos de interior realmente viven más que los de exterior?', a: 'Sí. Los gatos de interior típicamente viven 12–18 años, mientras que los de exterior promedian 10–14 años debido a la exposición al tráfico, depredadores y enfermedades. La diferencia puede ser de 4 a 8 años, haciendo de la vida en interior uno de los mayores factores en la longevidad felina.' },
      { q: '¿Cuál es la esperanza de vida de un gato según la raza?', a: 'Los gatos Siameses y Birmanos son conocidos por su longevidad excepcional, alcanzando a menudo 15–20 años. Los Maine Coon y Ragdoll típicamente viven 12–15 años. Los gatos mestizos suelen vivir 15 años o más gracias a la diversidad genética. Las razas pequeñas de gatos no muestran la misma ventaja de longevidad sobre las grandes razas como ocurre en los perros.' },
      { q: '¿Cuántos años tiene un gato de 10 años en años humanos?', a: 'Un gato de 10 años tiene aproximadamente 56 años humanos según la fórmula estándar (24 + 8×4 = 56).' },
      { q: '¿Cuál es el gato más viejo jamás registrado?', a: 'El gato más viejo jamás registrado fue Creme Puff de Austin, Texas, que vivió 38 años y 3 días (1967–2005), certificado por el Guinness World Records.' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'cat-age-calculator', slugs: { en: 'cat-age-calculator', fr: 'fr/calculateur-age-chat', es: 'es/calculadora-edad-gato' } },
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
      <div class="field-label">${t.catAgeLabel}</div>
      <div class="date-row">
        <input type="number" id="catAge" placeholder="0" min="0" max="30" inputmode="numeric" oninput="clamp(this,0,30)" style="width:4ch">
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => {
          const args = [1, 5, 12][i];
          return `<li onclick="fillExample(${args})">${ex} →</li>`;
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
      <div class="fact-item"><div class="fact-key">${t.catYearsLbl}</div><div class="fact-val" id="ffCatYears">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.lifeStage}</div><div class="fact-val" id="ffStage">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.formula}</div><div class="fact-val" id="ffFormula">—</div></div>
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
      stages: t.stages,
      stageYears: t.stageYears,
    });

    const script = `
var D = ${data};

function catToHuman(age) {
  if (age <= 0) return 0;
  if (age === 1) return 15;
  if (age === 2) return 24;
  return 24 + (age - 2) * 4;
}

function getStage(age) {
  var yrs = D.stageYears;
  for (var i = yrs.length - 1; i >= 0; i--) if (age >= yrs[i]) return D.stages[i];
  return D.stages[0];
}

function getFormula(age) {
  if (age === 1) return '= 15';
  if (age === 2) return '15 + 9 = 24';
  return '24 + (' + age + ' − 2) × 4 = ' + catToHuman(age);
}

function fillExample(age) {
  document.getElementById('catAge').value = age;
  calculate();
}

function calculate() {
  var age = parseInt(document.getElementById('catAge').value);
  var err = document.getElementById('errorLine');
  var res = document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');

  if (!age || age < 1 || age > 30) { err.textContent = D.errInvalid; err.classList.add('show'); return; }

  var human = catToHuman(age);
  document.getElementById('heroAge').textContent = human;
  document.getElementById('ffCatYears').textContent = age;
  document.getElementById('ffStage').textContent = getStage(age);
  document.getElementById('ffFormula').textContent = getFormula(age);
  res.classList.add('show');
  res.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('keydown', function(e){ if(e.key==='Enter') calculate(); });
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
