/* ============================================================
   CryptoLab — Fun crypto loader
   Load this in <head> for instant appearance.
============================================================ */
(function () {
  if (document.getElementById('cl-loader')) return;

  const SESSION_KEY = 'cryptolab.loader.seen';
  const isFirstVisit = !sessionStorage.getItem(SESSION_KEY);

  const loader = document.createElement('div');
  loader.id = 'cl-loader';
  if (!isFirstVisit) loader.classList.add('brief');

  if (isFirstVisit) {
    loader.innerHTML =
      '<div class="cl-content">' +
        '<div class="cl-logo">⟁</div>' +
        '<div class="cl-text"><span id="cl-decrypt-text">▓░▒▓ ▓▒░▓░</span></div>' +
        '<div class="cl-hex" id="cl-hex"></div>' +
        '<div class="cl-bar"><div class="cl-bar-fill"></div></div>' +
      '</div>';
    // Floating dots
    for (let i = 0; i < 10; i++) {
      const d = document.createElement('span');
      d.className = 'cl-dot';
      d.style.left = (10 + Math.random() * 80) + '%';
      d.style.top  = (10 + Math.random() * 80) + '%';
      d.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
      d.style.setProperty('--dy', (Math.random() * 200 - 100) + 'px');
      d.style.animationDelay = (Math.random() * 1.5) + 's';
      d.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      loader.appendChild(d);
    }
  } else {
    loader.innerHTML = '<div class="cl-content"><div class="cl-logo">⟁</div></div>';
  }

  function attach() { document.body.appendChild(loader); }
  if (document.body) attach();
  else document.addEventListener('DOMContentLoaded', attach, { once: true });

  if (isFirstVisit) {
    const targetFr = 'DÉCRYPTAGE…';
    const targetEn = 'DECRYPTING…';
    let lang;
    try { lang = localStorage.getItem('cryptolab.lang') || 'fr'; } catch { lang = 'fr'; }
    const target = lang === 'en' ? targetEn : targetFr;
    const CHARS = '!<>-_\\/[]{}—=+*^?#░▒▓01ABCDEF';
    const start = performance.now();
    const duration = 900;
    function frame(t) {
      const p = Math.min(1, (t - start) / duration);
      const txt = document.getElementById('cl-decrypt-text');
      if (txt) {
        let out = '';
        for (let i = 0; i < target.length; i++) {
          const cp = Math.min(1, Math.max(0, p * 2.2 - i / target.length * 1.4));
          if (cp >= 1) out += target[i];
          else if (target[i] === ' ') out += ' ';
          else out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        txt.textContent = out;
      }
      const hex = document.getElementById('cl-hex');
      if (hex) {
        let h = '';
        for (let i = 0; i < 28; i++) h += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
        hex.textContent = h.replace(/(.{2})/g, '$1 ').trim();
      }
      if (p < 1 || (t - start) < 1150) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const minDuration = isFirstVisit ? 1150 : 350;
  const startTime = performance.now();
  function hideLoader() {
    const elapsed = performance.now() - startTime;
    const wait = Math.max(0, minDuration - elapsed);
    setTimeout(() => {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 700);
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
    }, wait);
  }
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);
  // Safety net
  setTimeout(() => {
    if (loader && loader.parentNode) {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 700);
    }
  }, 4000);
})();
