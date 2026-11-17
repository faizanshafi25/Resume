const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile menu ---------------------------------------------------------------
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
}

menuBtn.addEventListener('click', () => {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
});
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
});
window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
});

// Scroll progress bar + active nav link ------------------------------------
const progress = document.getElementById('progress');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('main section[id]')];

function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';

    const marker = window.scrollY + window.innerHeight * 0.35;
    let current = '';
    sections.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id;
    });
    navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();

// Reveal on scroll ----------------------------------------------------------
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });
}

// Typing line in the hero (static when reduced motion is on) -----------------
const typed = document.getElementById('typed');
const phrases = ['learning JavaScript' , 'front-end learner', 'working towards full-stack'];

if (typed && !prefersReducedMotion) {
    let phrase = 0;
    let char = phrases[0].length;
    let deleting = true;

    function tick() {
        const text = phrases[phrase];
        typed.textContent = text.slice(0, char);

        if (deleting) {
            char -= 1;
            if (char < 0) {
                deleting = false;
                phrase = (phrase + 1) % phrases.length;
                char = 0;
            }
            return setTimeout(tick, 35);
        }

        char += 1;
        if (char > text.length) {
            deleting = true;
            return setTimeout(tick, 1800);
        }
        return setTimeout(tick, 70);
    }

    setTimeout(tick, 2200);
}

// Copy email ----------------------------------------------------------------
const copyBtn = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');

if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
        const email = document.querySelector('a[href^="mailto:"]').getAttribute('href').replace('mailto:', '');
        try {
            await navigator.clipboard.writeText(email);
            copyStatus.textContent = 'Copied ' + email;
        } catch (error) {
            copyStatus.textContent = 'Copy failed. Use the email button instead.';
        }
        setTimeout(() => { copyStatus.textContent = ''; }, 2500);
    });
}

// Footer year ---------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
