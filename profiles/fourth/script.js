document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Fade-in Sections ---
    const fadeInSections = document.querySelectorAll('.js-fade-in-section');

    const sectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, sectionObserverOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Animated Skill Progress Bars ---
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    const skillObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.dataset.level;
                entry.target.style.width = `${level}%`;
                observer.unobserve(entry.target);
            }
        });
    }, skillObserverOptions);

    skillProgressBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // --- Animated Background Canvas ---
    const canvas = document.getElementById('animatedBackgroundCanvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 100; // จำนวนเส้นโค้ดที่เคลื่อนไหว
    const maxLineLength = 50; // ความยาวสูงสุดของเส้นโค้ด
    const particleSpeed = 0.5; // ความเร็วในการเคลื่อนที่

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.length = Math.random() * maxLineLength + 10;
            this.speedX = (Math.random() - 0.5) * particleSpeed * 2;
            this.speedY = (Math.random() - 0.5) * particleSpeed * 2;
            this.alpha = Math.random() * 0.7 + 0.3;
            this.character = String.fromCharCode(0x30A0 + Math.random() * 96); // ตัวอักษรญี่ปุ่น (Katakana)
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width + this.length || this.x < -this.length) {
                this.x = this.speedX > 0 ? -this.length : canvas.width + this.length;
            }
            if (this.y > canvas.height + this.length || this.y < -this.length) {
                this.y = this.speedY > 0 ? -this.length : canvas.height + this.length;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.speedX * this.length, this.y + this.speedY * this.length);
            ctx.strokeStyle = `rgba(51, 51, 51, ${this.alpha})`; // สีเทาเข้ม
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.fillStyle = `rgba(68, 114, 196, ${this.alpha})`; // สีน้ำเงินเข้ม
            ctx.font = '10px Arial';
            ctx.fillText(this.character, this.x, this.y);
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
    }

    window.addEventListener('load', () => {
        resizeCanvas();
        initParticles();
        animate();
    });

    window.addEventListener('resize', resizeCanvas);
});
