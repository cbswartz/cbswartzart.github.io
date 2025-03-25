/* SEO Optimization JavaScript for CB Swartz Art Website */

document.addEventListener('DOMContentLoaded', function() {
    // Add structured data (JSON-LD) for better search engine understanding
    function addStructuredData() {
        // Create the script element for JSON-LD
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        
        // Determine which schema to use based on the current page
        const currentPath = window.location.pathname;
        let jsonData = {};
        
        // Website schema (for all pages)
        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CB Swartz Art",
            "url": "https://cbswartzart.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cbswartzart.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };
        
        // Add page-specific schema
        if (currentPath === '/' || currentPath.includes('index')) {
            // Homepage schema
            jsonData = {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntity": {
                    "@type": "LocalBusiness",
                    "name": "CB Swartz Art",
                    "image": "https://cbswartzart.com/images/logo.jpg",
                    "description": "Custom portraits and original digital prints by CB Swartz Art.",
                    "telephone": "1-220-207-6522",
                    "email": "cbswartz21@gmail.com",
                    "url": "https://cbswartzart.com",
                    "priceRange": "$$"
                }
            };
        } else if (currentPath.includes('gallery')) {
            // Gallery page schema
            jsonData = {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Art Gallery - CB Swartz Art",
                "description": "Browse the art gallery of CB Swartz featuring charcoal portraits and original digital prints."
            };
        } else if (currentPath.includes('custom-pricing')) {
            // Pricing page schema
            jsonData = {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Custom Portrait Pricing - CB Swartz Art",
                "description": "Commission a custom portrait from CB Swartz Art. View pricing information for charcoal portraits.",
                "mainEntity": {
                    "@type": "Service",
                    "name": "Custom Portrait Service",
                    "offers": {
                        "@type": "Offer",
                        "price": "150.00",
                        "priceCurrency": "USD",
                        "priceSpecification": {
                            "@type": "PriceSpecification",
                            "price": "150.00",
                            "priceCurrency": "USD",
                            "minPrice": "150.00",
                            "maxPrice": "500.00"
                        }
                    }
                }
            };
        } else if (currentPath.includes('about')) {
            // About page schema
            jsonData = {
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "About CB Swartz - Portrait Artist",
                "description": "Learn about CB Swartz, the artist behind CB Swartz Art. Discover the story and artistic process.",
                "mainEntity": {
                    "@type": "Person",
                    "name": "CB Swartz",
                    "jobTitle": "Portrait Artist",
                    "description": "Artist specializing in custom charcoal portraits and digital art.",
                    "image": "https://cbswartzart.com/images/artist-portrait.jpg",
                    "telephone": "1-220-207-6522",
                    "email": "cbswartz21@gmail.com",
                    "url": "https://cbswartzart.com"
                }
            };
        } else if (currentPath.includes('contact')) {
            // Contact page schema
            jsonData = {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contact CB Swartz Art",
                "description": "Get in touch with CB Swartz Art for custom portrait commissions or inquiries."
            };
        }
        
        // Add the JSON-LD to the page
        script.textContent = JSON.stringify(jsonData);
        document.head.appendChild(script);
        
        // Add website schema as a separate script
        const websiteScript = document.createElement('script');
        websiteScript.type = 'application/ld+json';
        websiteScript.textContent = JSON.stringify(websiteSchema);
        document.head.appendChild(websiteScript);
    }
    
    // Add breadcrumbs for better navigation and SEO
    function addBreadcrumbs() {
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath.includes('index')) {
            return; // No breadcrumbs needed on homepage
        }
        
        // Get page title
        const pageTitle = document.title.split(' - ')[0];
        
        // Create breadcrumbs container
        const breadcrumbsContainer = document.createElement('div');
        breadcrumbsContainer.className = 'breadcrumbs-container';
        
        // Create breadcrumbs list
        const breadcrumbsList = document.createElement('ul');
        breadcrumbsList.className = 'breadcrumbs';
        
        // Add home link
        const homeLi = document.createElement('li');
        const homeLink = document.createElement('a');
        homeLink.href = '/';
        homeLink.textContent = 'Home';
        homeLi.appendChild(homeLink);
        breadcrumbsList.appendChild(homeLi);
        
        // Add current page
        const pageLi = document.createElement('li');
        pageLi.textContent = pageTitle;
        breadcrumbsList.appendChild(pageLi);
        
        // Add breadcrumbs to container
        breadcrumbsContainer.appendChild(breadcrumbsList);
        
        // Add container after header
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.parentNode.insertBefore(breadcrumbsContainer, pageHeader.nextSibling);
        }
    }
    
    // Add skip to content link for accessibility
    function addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link screen-reader-text';
        skipLink.textContent = 'Skip to content';
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add id to main content area
        const mainContent = document.querySelector('main') || document.querySelector('section:not(.site-header):not(.main-navigation)');
        if (mainContent) {
            mainContent.id = 'main-content';
        }
    }
    
    // Enhance image alt text
    function enhanceImageAltText() {
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
            // Try to generate alt text from filename or parent element
            let altText = '';
            
            // Check if image has a src attribute
            if (img.src) {
                // Extract filename from src
                const filename = img.src.split('/').pop().split('.')[0];
                // Convert filename to readable text
                altText = filename.replace(/[-_]/g, ' ').replace(/([A-Z])/g, ' $1').trim();
                // Capitalize first letter
                altText = altText.charAt(0).toUpperCase() + altText.slice(1);
            }
            
            // If no alt text could be generated, use parent heading or text
            if (!altText) {
                const parentHeading = img.closest('div').querySelector('h1, h2, h3, h4, h5, h6');
                if (parentHeading) {
                    altText = parentHeading.textContent + ' image';
                } else {
                    altText = 'CB Swartz Art image';
                }
            }
            
            img.alt = altText;
        });
    }
    
    // Add canonical links if missing
    function addCanonicalLink() {
        if (!document.querySelector('link[rel="canonical"]')) {
            const canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            canonicalLink.href = window.location.href.split('?')[0]; // Remove query parameters
            document.head.appendChild(canonicalLink);
        }
    }
    
    // Execute all SEO enhancements
    addStructuredData();
    addBreadcrumbs();
    addSkipLink();
    enhanceImageAltText();
    addCanonicalLink();
});
