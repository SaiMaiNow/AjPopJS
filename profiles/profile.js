document.addEventListener("DOMContentLoaded", function() {

    const typedTextSpan = document.querySelector('.typed');
    if (typedTextSpan) {
        const words = typedTextSpan.getAttribute('data-typed-items').split(',');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 150;

        function type() {
            const currentWord = words[wordIndex].trim();
            if (isDeleting) {
                typedTextSpan.textContent = currentWord.substring(0, charIndex--);
                delay = 75;
            } else {
                typedTextSpan.textContent = currentWord.substring(0, charIndex++);
                delay = 150;
            }

            if (!isDeleting && charIndex === currentWord.length + 1) {
                delay = 1500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 300;
            }
            setTimeout(type, delay);
        }
        type();
    }

    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const navMenu = document.querySelector('#navmenu');
    const navLinks = navMenu.querySelectorAll('a');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const body = document.querySelector('body');
    
    function openMobileMenu() {
        navMenu.classList.add('mobile-nav-active');
        overlay.classList.add('active');
        body.classList.add('mobile-nav-active');
        mobileNavToggle.style.display = 'none';
    }
    
    function closeMobileMenu() {
        navMenu.classList.remove('mobile-nav-active');
        overlay.classList.remove('active');
        body.classList.remove('mobile-nav-active');
        mobileNavToggle.style.display = 'block'; 
    }

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', openMobileMenu);
    }
    
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});
