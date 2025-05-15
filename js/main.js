// Smooth scrolling for navigation links

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileNav = document.querySelector('.mobile-nav-links');
    hamburger.addEventListener('click', function () {
        const isOpen = mobileNav.classList.toggle('open');
        document.body.classList.toggle('mobile-nav-open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close mobile menu on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('open');
            document.body.classList.remove('mobile-nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}); 