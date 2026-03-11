
document.addEventListener('DOMContentLoaded', function() {
    // 1. Typing animation for name
    const nameElement = document.querySelector('.name');
    const nameText = nameElement.textContent;
    nameElement.textContent = '';
    
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 300); // Adjust timing for typing speed
        }
    }
    
    
    setTimeout(typeWriter, 500);
    
    // 2. Add active class to navigation based on scroll position
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav-bar-link');
    
    function highlightNavOnScroll() {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    
    const style = document.createElement('style');
    style.textContent = `
        .nav-bar-link.active {
            color: #FFD700;
        }
        .nav-bar-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    
    highlightNavOnScroll();
});