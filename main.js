// js/main.js
'use strict';

console.log("Tribu Kombucha JS Loaded!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM ready for Tribu!");

    /**
     * ------------------------------------------
     * Sticky Header Logic
     * ------------------------------------------
     * Adds a 'scrolled' class to the header when the user scrolls down
     * past a certain point, allowing for style changes (e.g., solid background).
     */
    const siteHeader = document.getElementById('site-header');
    if (siteHeader) {
        const stickyThreshold = 20; // Pixels scrolled down to trigger the change

        const handleScroll = () => {
            if (window.scrollY > stickyThreshold) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        };

        // Initial check in case the page loads already scrolled
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true }); // Use passive listener for performance
        console.log("Sticky header logic initialized.");
    } else {
        console.warn("Header element with ID 'site-header' not found.");
    }


    /**
     * ------------------------------------------
     * Mobile Navigation Toggle
     * ------------------------------------------
     * Toggles the visibility of the mobile navigation menu when the
     * hamburger button is clicked. Updates ARIA attributes for accessibility.
     */
    const menuToggleBtn = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.main-nav'); // Assuming .main-nav is the mobile container

    if (menuToggleBtn && mobileNav) {
        menuToggleBtn.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation menu
            const isNavActive = mobileNav.classList.toggle('active');

            // Update ARIA attribute for accessibility
            menuToggleBtn.setAttribute('aria-expanded', isNavActive);

            // Optional: Change button text/icon (ensure icons are consistent)
            // Example: If using text '☰' and '✕'
            menuToggleBtn.textContent = isNavActive ? '✕' : '☰';

            // Optional: Prevent body scroll when mobile menu is open
            document.body.style.overflow = isNavActive ? 'hidden' : '';
        });

        // Optional: Close the mobile menu if a navigation link is clicked
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Only close if the menu is currently active (visible)
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    menuToggleBtn.setAttribute('aria-expanded', 'false');
                    menuToggleBtn.textContent = '☰'; // Reset icon
                    document.body.style.overflow = ''; // Re-enable body scroll
                }
            });
        });
        console.log("Mobile navigation toggle initialized.");

    } else {
        console.warn("Menu toggle button ('.menu-toggle') or navigation container ('.main-nav') not found.");
    }


    /**
     * ------------------------------------------
     * Footer Copyright Year
     * ------------------------------------------
     * Automatically updates the year in the footer copyright notice.
     */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
        console.log("Footer year updated.");
    } else {
        console.warn("Element with ID 'current-year' not found in the footer.");
    }


    // --- Placeholder for other JS functionalities ---
    // e.g., Sliders, Map Integration, Scroll Animations

}); // End DOMContentLoaded