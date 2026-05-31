# 🔐 CryptoLab — Bilingue FR/EN

Plateforme interactive d'apprentissage de la cryptographie. **100% statique** (HTML/CSS/JS), zéro build, déployable gratuitement en 30 secondes. **Toggle de langue 🇫🇷/🇬🇧** dans la barre de nav.

## ✨ Contenu

### Pages principales (entièrement bilingues)
- 🏠 **Landing** — [index.html](index.html)
- 🗺️ **Timeline interactive** (20 entrées) — [timeline.html](timeline.html)
- 📚 **Catalogue catégorisé** (130+ entrées, 11 catégories filtrables) — [cryptosystemes.html](cryptosystemes.html)
- 🧮 **Mathématiques de la crypto** (12 thèmes, exemples Python) — [maths.html](maths.html)
- 💻 **Implémentations** (9 patterns de code prod commenté) — [implementations.html](implementations.html)
- 📖 **Glossaire** (60+ termes détaillés, recherche live, catégories filtrables) — [glossaire.html](glossaire.html)
- 🏆 **Mes badges** (19 badges + scores, localStorage) — [badges.html](badges.html)

### 18 pages de cryptosystèmes détaillées

Chaque page suit la structure : 📖 Présentation · ⚙️ Fonctionnement · 🧮 Mathématiques · 🔍 Simulation interactive · 💻 Code (Python + JS) · 🌍 Cas réel · 🧠 Quiz noté avec badge.

| Page | Sujet |
|---|---|
| [cesar.html](systems/cesar.html)             | Chiffre de César (substitution mono-alphabétique) |
| [al-kindi.html](systems/al-kindi.html)       | Analyse fréquentielle + outil de cassage χ² |
| [vigenere.html](systems/vigenere.html)       | Chiffre de Vigenère (polyalphabétique) |
| [enigma.html](systems/enigma.html)           | Enigma (simulateur 3 rotors historiques) |
| **[feistel.html](systems/feistel.html)**     | **Réseaux de Feistel** (DES, Blowfish, Twofish — structure générique) |
| [diffie-hellman.html](systems/diffie-hellman.html) | Échange de clés Diffie-Hellman |
| [rsa.html](systems/rsa.html)                 | RSA (génération clés + chiffre/déchiffre, BigInt) |
| [ecc.html](systems/ecc.html)                 | **Courbes elliptiques + catalogue complet des courbes** (secp256k1, P-256, Curve25519, Ed25519, BLS12-381, Brainpool, Curve448) |
| **[montgomery.html](systems/montgomery.html)** | **Courbes de Montgomery + Curve25519 + X25519** + Montgomery ladder |
| [aes.html](systems/aes.html)                 | AES (Web Crypto + PBKDF2 + GCM) |
| **[chacha20.html](systems/chacha20.html)**   | **ChaCha20 + Poly1305** (simulation ARX + Web Crypto) |
| [sha.html](systems/sha.html)                 | SHA family + effet avalanche |
| [zkp.html](systems/zkp.html)                 | Zero-Knowledge Proofs (caverne d'Ali Baba + Schnorr) |
| [homomorphe.html](systems/homomorphe.html)   | Paillier (additivement homomorphe) |
| [quantique.html](systems/quantique.html)     | BB84 — Quantum Key Distribution avec Eve |
| [post-quantique.html](systems/post-quantique.html) | Kyber / Dilithium + LWE jouet |
| [mpc.html](systems/mpc.html)                 | Shamir Secret Sharing + interpolation Lagrange |
| **[ascon.html](systems/ascon.html)**         | **Ascon** (gagnant NIST Lightweight Crypto 2023, IoT) |

## 🎨 Améliorations de cette version

- **Bilingue FR/EN** — toggle 🇫🇷/🇬🇧 dans la nav, basculement instantané
- **Animations enrichies** — gradient animé, scroll-reveal, hover lift, pulse-glow, scan-line sur formules
- **Boutons « Copier »** automatiques sur tous les blocs de code
- **Glossaire** : 60+ entrées, définitions détaillées bilingue, filtrage par catégorie
- **Nouvelle page Maths** : 12 thèmes (modulaire, premiers, Euclide, Euler, groupes, DLP, courbes, GF, lattices, entropie, complexité, anniversaire)
- **Nouvelle page Implémentations** : 9 patterns prod (AES-GCM, ChaCha20-Poly, RSA-OAEP/PSS, X25519/Ed25519, hybride E2EE, Argon2, HMAC/HKDF, JWT EdDSA, streaming files)
- **Page ECC enrichie** : 8 courbes documentées + 3 formes géométriques

## 🗂️ Structure

```
crypto/
├── index.html
├── timeline.html
├── cryptosystemes.html      ← catalogue 130+ entrées, 11 catégories
├── maths.html               ← NEW : 12 thèmes mathématiques
├── implementations.html     ← NEW : 9 patterns de code prod
├── glossaire.html           ← 60+ termes bilingue catégorisés
├── badges.html              ← 19 badges
├── systems/                 ← 18 pages détaillées
└── assets/
    ├── css/main.css         ← animations, lift, math-box, etc.
    └── js/
        ├── storage.js       ← localStorage progression
        └── i18n.js          ← NEW : FR/EN + scroll-reveal + copy buttons
```

## 🚀 Lancer en local

```bash
cd /Users/macos/Documents/crypto && python3 -m http.server 8000
# puis http://localhost:8000
```

## ☁️ Déploiement gratuit

| Service | Comment | Temps |
|---|---|---|
| **Netlify Drop** | Drag-and-drop `crypto/` sur https://app.netlify.com/drop | 10 s |
| **Cloudflare Pages** | Push GitHub → https://pages.cloudflare.com → Connect Git | 2 min |
| **Vercel** | https://vercel.com → import repo | 2 min |
| **GitHub Pages** | `git push` + Settings → Pages | 5 min |

## 🛠️ Stack

- HTML/CSS/JS vanilla
- Tailwind via CDN (zéro build)
- `BigInt` natif (RSA, ECC, Paillier, Shamir, ChaCha20)
- Web Crypto API (AES, SHA, X25519)
- `localStorage` pour badges + langue
- IntersectionObserver pour scroll-reveal
- Aucune dépendance npm

## 📌 Roadmap (suggestions)

- Traduction EN complète des 18 pages détaillées (infrastructure prête)
- Ajouter : Salsa20, RC4 (cassé), DES (historique détaillé), HMAC dédié, Argon2 dédié
- Signal Protocol (X3DH + Double Ratchet)
- TLS 1.3 handshake illustré pas à pas
- Bitcoin (SHA-256 + ECDSA secp256k1 + Merkle + PoW)
- Migration vers Next.js + MDX si SSG + SEO requis

## 📄 Licence

MIT.
