/* ============================================================
   CryptoLab — Internationalization (FR / EN)
   ============================================================
   Usage in HTML:
     <span data-i18n="nav.timeline">Timeline</span>
     <span data-i18n-attr="placeholder" data-i18n="search.placeholder">...</span>

   API:
     CryptoLabI18n.setLang('en' | 'fr')
     CryptoLabI18n.t('nav.timeline')
============================================================ */
(function () {
  const STORAGE_KEY = 'cryptolab.lang';
  const DEFAULT = 'fr';

  // Shared dictionaries -----------------------------------------------------
  const DICT = {
    fr: {
      // Nav
      'nav.timeline':       'Timeline',
      'nav.cryptosystems':  'Cryptosystèmes',
      'nav.maths':          'Mathématiques',
      'nav.implementations':'Implémentations',
      'nav.glossary':       'Glossaire',
      'nav.badges':         '🏆 Mes badges',
      'nav.about':          '👤 Qui suis-je',

      // Common
      'common.explore':     'Explorer',
      'common.back':        '← Retour',
      'common.soon':        '🔒 Bientôt disponible',
      'common.available':   '✓ Disponible',
      'common.concept':     '📖 Notion',
      'common.search':      '🔍 Rechercher…',
      'common.encrypt':     '🔒 Chiffrer',
      'common.decrypt':     '🔓 Déchiffrer',
      'common.validate':    'Valider',
      'common.reset':       'Réinitialiser',
      'common.run':         '⚡ Lancer',
      'common.copy':        'Copier',
      'common.copied':      'Copié !',
      'common.score':       'Score',
      'common.result':      'Résultat',
      'common.explanation': 'Explication',

      // Landing
      'home.tag':           '⚡ Apprentissage interactif',
      'home.title1':        'Comprendre la cryptographie,',
      'home.title2':        "de l'histoire aux systèmes modernes",
      'home.subtitle':      "Explore, expérimente et maîtrise les systèmes cryptographiques. Une plateforme construite autour d'une timeline historique, de simulations mathématiques, de code exécutable et de défis gamifiés.",
      'home.cta.timeline':  '🗺️ Explorer la timeline',
      'home.cta.start':     '🚀 Commencer à apprendre',
      'home.concepts':      'Les concepts clés',
      'home.crypto':        'Cryptographie',
      'home.crypto.d':      "L'art et la science de protéger l'information par le chiffrement.",
      'home.cryptology':    'Cryptologie',
      'home.cryptology.d':  'La discipline englobant cryptographie et cryptanalyse.',
      'home.cryptosystem':  'Cryptosystème',
      'home.cryptosystem.d':'Un ensemble complet : algorithme + clés + protocole.',
      'home.encdec':        'Chiffrement / Déchiffrement',
      'home.encdec.d':      'Transformer un message clair en message secret (et l\'inverse).',
      'home.path':          "Ton parcours d'apprentissage",
      'home.path.sub':      'Chaque cryptosystème suit la même structure pour ancrer la connaissance.',
      'home.step1':         '01 — Comprendre',
      'home.step1.t':       'Présentation & maths',
      'home.step1.d':       'Histoire, inventeurs, fondements mathématiques.',
      'home.step2':         '02 — Expérimenter',
      'home.step2.t':       'Simulation & code',
      'home.step2.d':       'Manipule les paramètres en direct, lis le code Python/JS.',
      'home.step3':         '03 — Valider',
      'home.step3.t':       'Quiz & badges',
      'home.step3.d':       'Teste tes connaissances et gagne des badges.',
      'home.footer':        '© 2026 CryptoLab — Plateforme éducative open source',

      // Timeline page
      'timeline.title':     '🗺️ Timeline interactive',
      'timeline.intro':     "De l'Antiquité aux algorithmes post-quantiques — survole une période pour voir un aperçu, clique pour explorer un cryptosystème en profondeur.",

      // Catalog page
      'catalog.title':      '📚 Catalogue des cryptosystèmes',
      'catalog.intro':      "L'ensemble du paysage cryptographique organisé par catégorie. Clique sur une fiche disponible pour explorer en profondeur (théorie, maths, simulation, code, quiz).",
      'catalog.filter.all': 'Tout',

      // Glossary
      'glossary.title':     '📚 Glossaire',
      'glossary.intro':     'Tous les termes essentiels — définitions claires et détaillées, recherche en direct.',
      'glossary.empty':     'Aucun terme ne correspond à ta recherche.',

      // Badges
      'badges.title':       '🏆 Mes badges',
      'badges.intro':       'Ta progression personnelle, sauvegardée dans ton navigateur.',
      'badges.all':         'Tous les badges',
      'badges.scores':      'Mes scores',
      'badges.empty':       'Aucun quiz complété pour le moment.',
      'badges.reset':       '🗑️ Réinitialiser ma progression',
      'badges.confirm':     'Effacer toute ta progression ?',
      'badges.earned':      'Obtenu le',
      'badges.notearned':   '🔒 Non obtenu',
      'badges.best':        'Meilleur score',

      // Maths page
      'maths.title':        '🧮 Les mathématiques de la cryptographie',
      'maths.intro':        "Sans maths, pas de crypto moderne. Voici les outils que tu rencontreras partout — chaque concept est expliqué, illustré, et accompagné d'exemples Python pratiques.",

      // Implementations page
      'impl.title':         '💻 Implémentations réelles',
      'impl.intro':         "Code de production commenté ligne par ligne pour chaque cryptosystème. Tu peux le copier, le coller, le réutiliser — c'est pensé pour ça.",

      // Sections (re-used across pages)
      'sec.presentation':   '📖 1. Présentation',
      'sec.howitworks':     '⚙️ 2. Fonctionnement',
      'sec.maths':          '🧮 3. Mathématiques',
      'sec.simulation':     '🔍 4. Simulation interactive',
      'sec.code':           '💻 5. Code',
      'sec.realworld':      '🌍 6. Cas réel & limites',
      'sec.quiz':           '🧠 7. Quiz',

      // Detail-page common UI
      'detail.back':        '← Retour à la timeline',
      'detail.inventor':    'Inventeur',
      'detail.author':      'Auteur',
      'detail.authors':     'Auteurs',
      'detail.year':        'Année',
      'detail.type':        'Type',
      'detail.standard':    'Standard',
      'detail.message':     'Message',
      'detail.plaintext':   'Texte clair',
      'detail.ciphertext':  'Texte chiffré',
      'detail.key':         'Clé',
      'detail.mode':        'Mode',
      'detail.result':      'Résultat',
      'detail.formula':     'Formule',
      'detail.strengths':   '✓ Forces',
      'detail.usages':      '✓ Usages',
      'detail.limits':      '✗ Limites',
      'detail.pitfalls':    '✗ Pièges',
      'detail.see_steps':   'Voir les étapes intermédiaires',
      'detail.run':         '⚡ Lancer',
      'detail.encrypt':     '🔒 Chiffrer',
      'detail.decrypt':     '🔓 Déchiffrer',
      'detail.generate':    '🔑 Générer les clés',

      // Quiz UI
      'quiz.submit':        'Valider le quiz',
      'quiz.score':         'Score',
      'quiz.perfect':       '🎉 Sans-faute !',
      'quiz.ok':            '👍 Pas mal — relis les sections ratées.',
      'quiz.retry':         '📚 Réessaie après avoir revu la théorie.',
      'quiz.explanation':   'Explication',
      'quiz.badge.unlocked':'Badge débloqué',

      // Catalog statuses
      'status.ready':       '✓ Disponible',
      'status.soon':        '🔒 Bientôt',
      'status.concept':     '📖 Notion',
      'card.explore':       '→ Explorer',
      'card.soon':          '🔒 Bientôt disponible',

      // Home page extra
      'home.cta.maths':     '📐 Maths de la crypto',
      'home.stat.systems':  'cryptosystèmes',
      'home.stat.terms':    'termes glossaire',
      'home.stat.badges':   'badges à gagner',
      'home.stat.langs':    'langues',
      'home.scroll':        '⌄ Faire défiler ⌄',
      'home.concepts.sub':  'Quatre fondations à connaître avant de plonger.',
      'home.final.title':   '📚 Prêt à plonger dans la cryptographie ?',
      'home.final.sub':     'César, Vigenère, Enigma, RSA, ECC, Curve25519, ChaCha20, AES, SHA, Feistel, ZKP, Homomorphe, MPC, Ascon, BB84 quantique, Post-quantique…',
      'home.final.cta':     'Voir le catalogue complet',
      'home.final.cta2':    '💻 Code de production',
    },

    en: {
      // Nav
      'nav.timeline':       'Timeline',
      'nav.cryptosystems':  'Cryptosystems',
      'nav.maths':          'Mathematics',
      'nav.implementations':'Implementations',
      'nav.glossary':       'Glossary',
      'nav.badges':         '🏆 My badges',
      'nav.about':          '👤 About me',

      // Common
      'common.explore':     'Explore',
      'common.back':        '← Back',
      'common.soon':        '🔒 Coming soon',
      'common.available':   '✓ Available',
      'common.concept':     '📖 Concept',
      'common.search':      '🔍 Search…',
      'common.encrypt':     '🔒 Encrypt',
      'common.decrypt':     '🔓 Decrypt',
      'common.validate':    'Submit',
      'common.reset':       'Reset',
      'common.run':         '⚡ Run',
      'common.copy':        'Copy',
      'common.copied':      'Copied!',
      'common.score':       'Score',
      'common.result':      'Result',
      'common.explanation': 'Explanation',

      // Landing
      'home.tag':           '⚡ Interactive learning',
      'home.title1':        'Master cryptography,',
      'home.title2':        'from history to modern systems',
      'home.subtitle':      'Explore, experiment, and master cryptographic systems. A platform built around a historical timeline, mathematical simulations, runnable code, and gamified challenges.',
      'home.cta.timeline':  '🗺️ Explore the timeline',
      'home.cta.start':     '🚀 Start learning',
      'home.concepts':      'Key concepts',
      'home.crypto':        'Cryptography',
      'home.crypto.d':      'The art and science of protecting information through encryption.',
      'home.cryptology':    'Cryptology',
      'home.cryptology.d':  'The discipline encompassing both cryptography and cryptanalysis.',
      'home.cryptosystem':  'Cryptosystem',
      'home.cryptosystem.d':'A complete bundle: algorithm + keys + protocol.',
      'home.encdec':        'Encryption / Decryption',
      'home.encdec.d':      'Transforming plaintext into ciphertext (and back).',
      'home.path':          'Your learning path',
      'home.path.sub':      'Every cryptosystem follows the same structure so knowledge sticks.',
      'home.step1':         '01 — Understand',
      'home.step1.t':       'Presentation & math',
      'home.step1.d':       'History, inventors, mathematical foundations.',
      'home.step2':         '02 — Experiment',
      'home.step2.t':       'Simulation & code',
      'home.step2.d':       'Tweak parameters live, read the Python/JS code.',
      'home.step3':         '03 — Validate',
      'home.step3.t':       'Quiz & badges',
      'home.step3.d':       'Test your knowledge and earn badges.',
      'home.footer':        '© 2026 CryptoLab — Open-source learning platform',

      // Timeline page
      'timeline.title':     '🗺️ Interactive timeline',
      'timeline.intro':     'From Antiquity to post-quantum algorithms — hover an era for a quick view, click to dive into a cryptosystem in depth.',

      // Catalog page
      'catalog.title':      '📚 Cryptosystems catalogue',
      'catalog.intro':      'The full cryptographic landscape, organized by category. Click an available card to dive deep (theory, math, simulation, code, quiz).',
      'catalog.filter.all': 'All',

      // Glossary
      'glossary.title':     '📚 Glossary',
      'glossary.intro':     'All the essential terms — clear, detailed definitions, live search.',
      'glossary.empty':     'No term matches your search.',

      // Badges
      'badges.title':       '🏆 My badges',
      'badges.intro':       'Your personal progress, saved in your browser.',
      'badges.all':         'All badges',
      'badges.scores':      'My scores',
      'badges.empty':       'No quiz completed yet.',
      'badges.reset':       '🗑️ Reset my progress',
      'badges.confirm':     'Erase all your progress?',
      'badges.earned':      'Earned on',
      'badges.notearned':   '🔒 Not earned',
      'badges.best':        'Best score',

      // Maths page
      'maths.title':        '🧮 The mathematics of cryptography',
      'maths.intro':        'No math, no modern crypto. Here are the tools you will meet everywhere — every concept is explained, illustrated, and paired with practical Python examples.',

      // Implementations
      'impl.title':         '💻 Real-world implementations',
      'impl.intro':         "Line-by-line commented production code for every cryptosystem. Copy it, paste it, reuse it — that's the point.",

      // Sections
      'sec.presentation':   '📖 1. Overview',
      'sec.howitworks':     '⚙️ 2. How it works',
      'sec.maths':          '🧮 3. Mathematics',
      'sec.simulation':     '🔍 4. Interactive simulation',
      'sec.code':           '💻 5. Code',
      'sec.realworld':      '🌍 6. Real world & limits',
      'sec.quiz':           '🧠 7. Quiz',

      // Detail-page common UI
      'detail.back':        '← Back to timeline',
      'detail.inventor':    'Inventor',
      'detail.author':      'Author',
      'detail.authors':     'Authors',
      'detail.year':        'Year',
      'detail.type':        'Type',
      'detail.standard':    'Standard',
      'detail.message':     'Message',
      'detail.plaintext':   'Plaintext',
      'detail.ciphertext':  'Ciphertext',
      'detail.key':         'Key',
      'detail.mode':        'Mode',
      'detail.result':      'Result',
      'detail.formula':     'Formula',
      'detail.strengths':   '✓ Strengths',
      'detail.usages':      '✓ Use cases',
      'detail.limits':      '✗ Limits',
      'detail.pitfalls':    '✗ Pitfalls',
      'detail.see_steps':   'Show intermediate steps',
      'detail.run':         '⚡ Run',
      'detail.encrypt':     '🔒 Encrypt',
      'detail.decrypt':     '🔓 Decrypt',
      'detail.generate':    '🔑 Generate keys',

      // Quiz UI
      'quiz.submit':        'Submit quiz',
      'quiz.score':         'Score',
      'quiz.perfect':       '🎉 Flawless!',
      'quiz.ok':            '👍 Not bad — re-read the sections you missed.',
      'quiz.retry':         '📚 Try again after reviewing the theory.',
      'quiz.explanation':   'Explanation',
      'quiz.badge.unlocked':'Badge unlocked',

      // Catalog statuses
      'status.ready':       '✓ Available',
      'status.soon':        '🔒 Coming',
      'status.concept':     '📖 Concept',
      'card.explore':       '→ Explore',
      'card.soon':          '🔒 Coming soon',

      // Home page extra
      'home.cta.maths':     '📐 Crypto math',
      'home.stat.systems':  'cryptosystems',
      'home.stat.terms':    'glossary terms',
      'home.stat.badges':   'badges to earn',
      'home.stat.langs':    'languages',
      'home.scroll':        '⌄ Scroll down ⌄',
      'home.concepts.sub':  'Four foundations to know before diving in.',
      'home.final.title':   '📚 Ready to dive into cryptography?',
      'home.final.sub':     'Caesar, Vigenère, Enigma, RSA, ECC, Curve25519, ChaCha20, AES, SHA, Feistel, ZKP, Homomorphic, MPC, Ascon, BB84 quantum, Post-quantum…',
      'home.final.cta':     'Browse the full catalogue',
      'home.final.cta2':    '💻 Production code',
    }
  };

  let lang = (() => {
    try { return localStorage.getItem(STORAGE_KEY) || DEFAULT; }
    catch { return DEFAULT; }
  })();

  function t(key) {
    return (DICT[lang] && DICT[lang][key]) || DICT.fr[key] || key;
  }

  function apply() {
    document.documentElement.lang = lang;
    // 1) data-i18n shared-dictionary translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const val = t(key);
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });
    // 2) data-en inline translations (page-local)
    //    On first run we save the original FR innerHTML into data-fr-orig
    document.querySelectorAll('[data-en]').forEach(el => {
      if (!el.hasAttribute('data-fr-orig')) {
        el.setAttribute('data-fr-orig', el.innerHTML);
      }
      el.innerHTML = lang === 'en'
        ? el.getAttribute('data-en')
        : el.getAttribute('data-fr-orig');
    });
    document.querySelectorAll('.lang-toggle-label').forEach(el => {
      el.textContent = lang === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN';
    });
  }

  function setLang(newLang) {
    if (newLang !== 'fr' && newLang !== 'en') return;
    lang = newLang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
    apply();
    document.dispatchEvent(new CustomEvent('lang-changed', { detail: { lang } }));
  }

  function toggle() { setLang(lang === 'fr' ? 'en' : 'fr'); }

  function init() {
    apply();
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
  }

  window.CryptoLabI18n = { t, setLang, toggle, get lang() { return lang; } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   Scroll-reveal helper (adds .visible to .reveal as they enter)
============================================================ */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function bind() {
    document.querySelectorAll('.reveal, .section-heading').forEach(el => io.observe(el));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();

/* ============================================================
   Copy-to-clipboard buttons on every <pre> code block
============================================================ */
(function () {
  function attach() {
    document.querySelectorAll('pre:not([data-copy-attached])').forEach(pre => {
      pre.setAttribute('data-copy-attached', '');
      const btn = document.createElement('button');
      btn.className = 'code-copy';
      btn.textContent = (window.CryptoLabI18n ? window.CryptoLabI18n.t('common.copy') : 'Copier');
      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code')?.textContent || pre.textContent;
        try {
          await navigator.clipboard.writeText(code);
          const original = btn.textContent;
          btn.textContent = (window.CryptoLabI18n ? window.CryptoLabI18n.t('common.copied') : 'Copié !');
          btn.style.background = 'rgba(16, 185, 129, 0.2)';
          btn.style.borderColor = 'rgba(16, 185, 129, 0.4)';
          btn.style.color = '#10b981';
          setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 1500);
        } catch (e) {}
      });
      pre.appendChild(btn);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach);
  else attach();
  // Re-bind if new <pre> are added later (e.g. on tab switch)
  const mo = new MutationObserver(attach);
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
