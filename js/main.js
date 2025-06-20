// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navLinks a, .menuButton, .exploreButton, .logoLink');
    
    // Add smooth scrolling to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Skip if it's an external link or doesn't start with #
            if (!targetId || !targetId.startsWith('#')) {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar hide/show animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let isScrolling = false;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when user scrolls down
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down - hide navbar
            header.classList.add('hidden');
        } else {
            // Scrolling up - show navbar
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
        isScrolling = false;
    }
    
    // Throttle scroll events for better performance
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            requestAnimationFrame(handleScroll);
            isScrolling = true;
        }
    });
});

// Add active state to navigation links based on current section
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navLinks a');
    
    function updateActiveNavLink() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.navLinks a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Throttle scroll events for better performance
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            requestAnimationFrame(updateActiveNavLink);
            isScrolling = true;
        }
    });
    
    // Update on page load
    updateActiveNavLink();
});

// Scroll animations for menu items and review cards
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menuItem');
    const reviewCards = document.querySelectorAll('.reviewCard');
    const testimonialsContent = document.querySelector('.testimonialsContent');
    
    // Create intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe menu items
    menuItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe review cards
    reviewCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe testimonials content
    if (testimonialsContent) {
        observer.observe(testimonialsContent);
    }
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navLinks');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    const navLinkItems = document.querySelectorAll('.navLinks a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}); 