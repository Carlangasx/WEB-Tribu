document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            // Toggle the 'is-open' class on the navigation menu
            mainNav.classList.toggle('is-open');

            // Toggle aria-expanded attribute for accessibility
            const isOpen = mainNav.classList.contains('is-open');
            navToggle.setAttribute('aria-expanded', isOpen);

            // Optional: Change hamburger icon to 'X' when open
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (isOpen) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times'); // Font Awesome 'X' icon
                    navToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                }
            }
        });

        // Optional: Close menu when a nav link is clicked (useful for single-page sites)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-open')) {
                    mainNav.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    const icon = navToggle.querySelector('i');
                     if (icon) {
                         icon.classList.remove('fa-times');
                         icon.classList.add('fa-bars');
                     }
                     navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    const targetSectionId = 'flavors-section'; // <-- CHANGE THIS to the ID of the section you want to scroll to
    // -------------------

    const targetElement = document.getElementById(targetSectionId);

    if (targetElement) {
        // Option A: Smooth Scroll (Recommended if CSS scroll-behavior is set)
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Option B: Instant Jump (Use if you don't want smooth scroll for this)
        // targetElement.scrollIntoView();

    } else {
        console.warn(`Target section "#${targetSectionId}" not found for auto-scroll.`);
    }
}
);