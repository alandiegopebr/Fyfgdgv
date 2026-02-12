// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active link
            document.querySelectorAll('nav a').forEach(link => {
                link.style.background = '';
                link.style.color = '#667eea';
            });
            this.style.background = '#667eea';
            this.style.color = 'white';
        }
    });
});

// Highlight navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '#667eea';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.background = '#667eea';
            link.style.color = 'white';
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all content cards and ingredient cards
document.querySelectorAll('.content-card, .ingredient-card, .tip-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add interactive effects to recipe examples
document.querySelectorAll('.example').forEach(example => {
    example.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});

// Console message for developers
console.log('🍣 Welcome to Sushi Master Academy! 🍣');
console.log('May your rolls be tight and your fish be fresh!');
