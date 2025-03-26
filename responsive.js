/* JavaScript for Mobile Responsiveness */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Toggle aria-expanded attribute for accessibility
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !expanded);
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Add touch detection
    function addTouchClass() {
        if ('ontouchstart' in document.documentElement) {
            document.documentElement.classList.add('touch-device');
        }
    }
    addTouchClass();
    
    // Responsive image loading
    function loadResponsiveImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            // Set src from data-src when in viewport
            if (isInViewport(img)) {
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
            }
        });
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Load images on scroll
    window.addEventListener('scroll', function() {
        loadResponsiveImages();
    });
    
    // Initial load of visible images
    loadResponsiveImages();
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        // Adjust any elements that need orientation-specific handling
        setTimeout(function() {
            // Allow time for orientation to complete
            // Adjust gallery layouts or other elements if needed
        }, 200);
    });
    
    // Responsive tables
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('table-responsive');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
});
