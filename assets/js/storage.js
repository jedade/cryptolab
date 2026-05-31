// Simple localStorage-backed progression & badges
const CryptoLab = {
  KEY: 'cryptolab.progress.v1',

  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || { badges: {}, scores: {} }; }
    catch { return { badges: {}, scores: {} }; }
  },

  save(state) {
    localStorage.setItem(this.KEY, JSON.stringify(state));
  },

  earnBadge(id, label, emoji) {
    const state = this.load();
    if (state.badges[id]) return false;
    state.badges[id] = { label, emoji, earnedAt: new Date().toISOString() };
    this.save(state);
    return true;
  },

  recordScore(quizId, score, total) {
    const state = this.load();
    const prev = state.scores[quizId];
    if (!prev || prev.score < score) {
      state.scores[quizId] = { score, total, at: new Date().toISOString() };
      this.save(state);
    }
  },

  hasBadge(id) {
    return !!this.load().badges[id];
  },

  allBadges() {
    return this.load().badges;
  },

  showToast(message) {
    const t = document.createElement('div');
    t.className = 'fixed bottom-6 right-6 px-5 py-4 bg-amber-500/95 text-ink-900 font-semibold rounded-xl shadow-2xl z-50 fade-up';
    t.innerHTML = message;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .4s'; }, 3500);
    setTimeout(() => t.remove(), 4000);
  }
};
window.CryptoLab = CryptoLab;
