document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Create intersection observer for mobile hover effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check if the card is roughly centered in viewport
                const rect = entry.boundingClientRect;
                const viewportHeight = window.innerHeight;
                const cardCenter = rect.top + rect.height / 2;
                const viewportCenter = viewportHeight / 2;
                const threshold = viewportHeight * 0.3; // 20% tolerance
                
                if (Math.abs(cardCenter - viewportCenter) < threshold) {
                    entry.target.classList.add('mobile-hover');
                } else {
                    entry.target.classList.remove('mobile-hover');
                }
            } else {
                entry.target.classList.remove('mobile-hover');
            }
        });
    }, {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-40% 0px -40% 0px'
    });
    
    projectCards.forEach(card => observer.observe(card));
});