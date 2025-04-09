// Create cyber grid background
function createCyberGrid() {
    const grid = document.querySelector('.cyber-grid');
    const size = 50;
    const rows = Math.ceil(window.innerHeight / size);
    const cols = Math.ceil(window.innerWidth / size);

    for (let i = 0; i < rows * cols; i++) {
        const dot = document.createElement('div');
        dot.className = 'grid-dot';
        grid.appendChild(dot);
    }
}

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation delay to timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Add scroll reveal animation
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});

// Add hover effect to cards
document.querySelectorAll('.info-card, .rule-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    const icon = element.querySelector('i');
    if (icon) {
        element.appendChild(icon.cloneNode(true));
    }
    
    function type() {
        if (i < text.length) {
            const span = document.createElement('span');
            span.textContent = text.charAt(i);
            element.appendChild(span);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add binary effect to slogan
function addBinaryEffect() {
    const slogan = document.querySelector('.slogan');
    if (!slogan) return;
    
    const originalText = slogan.textContent;
    const binaryChars = '01';
    let interval;
    
    slogan.addEventListener('mouseenter', () => {
        let iterations = 0;
        clearInterval(interval);
        
        interval = setInterval(() => {
            slogan.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return binaryChars[Math.floor(Math.random() * binaryChars.length)];
                })
                .join('');
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
            }
            
            iterations += 1/3;
        }, 30);
    });
    
    slogan.addEventListener('mouseleave', () => {
        clearInterval(interval);
        slogan.textContent = originalText;
    });
}

// Header Scroll Animation
function handleHeaderScroll() {
    const header = document.querySelector('header');
    const headerContainer = document.querySelector('.header-container');
    const scrollThreshold = 50;
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        if (window.scrollY > scrollThreshold) {
            if (!header.classList.contains('scrolled')) {
                header.classList.add('scrolled');
                headerContainer.classList.add('scrolled');
            }
        } else {
            if (header.classList.contains('scrolled')) {
                header.classList.remove('scrolled');
                headerContainer.classList.remove('scrolled');
            }
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateHeader();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    createCyberGrid();
    handleHeaderScroll();
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent.trim();
    typeWriter(heroTitle, originalText);
    
    // Add binary effect to slogan
    addBinaryEffect();

    // Add particle effect to hero section
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--x', `${Math.random() * 100}%`);
        particle.style.setProperty('--y', `${Math.random() * 100}%`);
        particle.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        hero.appendChild(particle);
    }
    
    // Add glow effect to club name
    const clubName = document.querySelector('.club-name');
    if (clubName) {
        clubName.addEventListener('mouseenter', () => {
            clubName.style.textShadow = '0 0 20px rgba(100, 255, 218, 0.8), 0 0 40px rgba(100, 255, 218, 0.6), 0 0 60px rgba(100, 255, 218, 0.4)';
        });
        
        clubName.addEventListener('mouseleave', () => {
            clubName.style.textShadow = 'var(--neon-glow)';
        });
    }
}); 