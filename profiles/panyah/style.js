// ใช้ ScrollReveal สำหรับการทำ animation เมื่อ scroll หน้าจอลงมา
ScrollReveal().reveal('.profile-left', {
    delay: 200,
    distance: '50px',
    origin: 'left'
});
ScrollReveal().reveal('.profile-right', {
    delay: 400,
    distance: '50px',
    origin: 'right'
});
ScrollReveal().reveal('.about-me', {
    delay: 600,
    distance: '50px',
    origin: 'bottom'
});
ScrollReveal().reveal('.t-shaped-skills', {
    delay: 700,
    distance: '50px',
    origin: 'bottom'
});
ScrollReveal().reveal('.portfolio', {
    delay: 800,
    distance: '50px',
    origin: 'bottom'
});

// JavaScript สำหรับ Parallax Effect (รูปโปรไฟล์)
document.addEventListener('mousemove', (e) => {
    const profileCard = document.querySelector('.profile-card');
    const profilePic = document.querySelector('.profile-pic');
    
    // คำนวณตำแหน่งเมาส์
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    // ให้การ์ดและรูปภาพขยับเล็กน้อย
    profileCard.style.transform = `rotateY(${x / 5}deg) rotateX(${y / 5}deg)`;
    profilePic.style.transform = `translate(${x}px, ${y}px)`;
});