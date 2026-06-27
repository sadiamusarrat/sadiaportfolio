// ============================================
// NAVBAR - SCROLL EFFECT
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SKILL BAR ANIMATION ON SCROLL
// ============================================
const skillBars = document.querySelectorAll('.progress-fill');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CONTACT FORM (Basic validation)
// ============================================
const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }

    alert('Thank you for your message! I will get back to you soon. 😊');
    contactForm.reset();
});

console.log('🚀 Sadia Musarrat - Portfolio Website Loaded!');