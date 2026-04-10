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
};

// ── Module export ─────────────────────────────────────────
module.exports = {
  pages: [
    { id: 'what-generation-am-i',          slugs: { en: 'what-generation-am-i',          fr: 'fr/quelle-generation-suis-je',      es: 'es/que-generacion-soy' } },
    { id: 'how-to-calculate-age-in-months', slugs: { en: 'how-to-calculate-age-in-months', fr: 'fr/calculer-age-en-mois',           es: 'es/calcular-edad-en-meses' } },
    { id: 'legal-drinking-age-by-country',  slugs: { en: 'legal-drinking-age-by-country',  fr: 'fr/age-legal-alcool-par-pays',      es: 'es/edad-legal-alcohol-por-pais' } },
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
