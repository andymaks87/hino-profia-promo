document.addEventListener('DOMContentLoaded', () => {
    const spotlight = document.getElementById('spotlight');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Lag effect for "heavy" feel
        requestAnimationFrame(() => {
            spotlight.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15) 0%, transparent 40%)`;
        });
    });

    // Parallax for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item img');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        galleryItems.forEach((img, index) => {
            const speed = index % 2 === 0 ? 0.1 : -0.1;
            img.style.transform = `scale(1.1) translateY(${scrollY * speed * 0.2}px)`;
        });
    });
});
