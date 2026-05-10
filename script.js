// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    // Apply stored preferences on every page load
    applyTheme();
    applyLang();
    // Scroll reveal
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});

// ===================== SCROLL REVEAL =====================
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 120) {
            el.classList.add('active');
        }
    });
}

// ===================== THEME TOGGLE =====================
function toggleTheme() {
    const current = localStorage.getItem('iks-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('iks-theme', next);
    applyTheme();
}

function applyTheme() {
    const theme = localStorage.getItem('iks-theme') || 'light';
    const btn = document.getElementById('theme-btn');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        if (btn) btn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        if (btn) btn.textContent = '🌙';
    }
}

// ===================== LANGUAGE TOGGLE =====================
function toggleLang() {
    const current = localStorage.getItem('iks-lang') || 'en';
    const next = current === 'en' ? 'hi' : 'en';
    localStorage.setItem('iks-lang', next);
    applyLang();
}

function applyLang() {
    const lang = localStorage.getItem('iks-lang') || 'en';
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang === 'en' ? 'हिं' : 'EN';

    // Swap all elements with data-en / data-hi attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-hi');
        if (text) el.textContent = text;
    });

    // ID-based translations (from page-specific translations.js)
    if (window.IKS_TRANSLATIONS) {
        Object.keys(window.IKS_TRANSLATIONS).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.textContent = lang === 'hi'
                    ? window.IKS_TRANSLATIONS[id].hi
                    : window.IKS_TRANSLATIONS[id].en;
            }
        });
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
}
