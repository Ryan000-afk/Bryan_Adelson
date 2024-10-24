document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    const sections = document.querySelectorAll('main section');
    const footer = document.querySelector('footer');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        sections.forEach(section => {
            section.style.display = nav.classList.contains('show') ? 'none' : 'block';
        });
        footer.style.display = nav.classList.contains('show') ? 'none' : 'block';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});