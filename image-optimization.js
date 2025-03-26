/* Image Optimization JavaScript for CB Swartz Art Website */

document.addEventListener('DOMContentLoaded', function() {
    // Implement lazy loading for images
    function implementLazyLoading() {
        // Get all images that don't already have loading="lazy"
        const images = document.querySelectorAll('img:not([loading])');
        
        // Add loading="lazy" attribute to all images
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
        
        // Create IntersectionObserver for more advanced lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // If image has data-src, replace src with data-src
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        // If image has data-srcset, replace srcset with data-srcset
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.removeAttribute('data-srcset');
                        }
                        // Stop observing the image
                        observer.unobserve(img);
                    }
                });
            });
            
            // Get all images with data-src or data-srcset
            const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            // Simply load all images immediately
            const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
            lazyImages.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                    img.removeAttribute('data-srcset');
                }
            });
        }
    }
    
    // Add responsive image srcset for different screen sizes
    function addResponsiveImageSrcset() {
        // Get all images that don't have srcset
        const images = document.querySelectorAll('img:not([srcset]):not([data-srcset])');
        
        images.forEach(img => {
            // Skip SVG images and icons
            if (img.src.includes('.svg') || img.width < 50 || img.height < 50) {
                return;
            }
            
            // Get the image source
            const src = img.src;
            
            // Skip if src is not available
            if (!src) return;
            
            // Extract the filename and extension
            const lastDotIndex = src.lastIndexOf('.');
            const lastSlashIndex = src.lastIndexOf('/');
            
            if (lastDotIndex === -1 || lastSlashIndex === -1) return;
            
            const filename = src.substring(lastSlashIndex + 1, lastDotIndex);
            const extension = src.substring(lastDotIndex);
            const basePath = src.substring(0, lastSlashIndex + 1);
            
            // Create srcset for responsive images
            // This assumes you have created different sized versions of the images
            // with naming convention: filename-small.jpg, filename-medium.jpg, etc.
            const srcset = `
                ${basePath}${filename}-small${extension} 400w,
                ${basePath}${filename}-medium${extension} 800w,
                ${basePath}${filename}${extension} 1200w
            `;
            
            // Add sizes attribute based on image's current size and position
            const imgWidth = img.width;
            let sizes;
            
            if (imgWidth > 800) {
                sizes = '(max-width: 768px) 100vw, 1200px';
            } else if (imgWidth > 400) {
                sizes = '(max-width: 768px) 100vw, 800px';
            } else {
                sizes = '(max-width: 768px) 100vw, 400px';
            }
            
            // Use data attributes for lazy loading
            img.setAttribute('data-srcset', srcset.trim());
            img.setAttribute('data-sizes', sizes);
        });
    }
    
    // Convert images to WebP format where supported
    function detectWebPSupport() {
        const elem = document.createElement('canvas');
        if (elem.getContext && elem.getContext('2d')) {
            // Was able to create a canvas element
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
        return false;
    }
    
    function useWebPImages() {
        if (detectWebPSupport()) {
            // Browser supports WebP, replace jpg/png with WebP versions
            const images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]');
            
            images.forEach(img => {
                const src = img.src;
                // Replace extension with .webp
                const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                
                // Create a new image to test if WebP version exists
                const testImg = new Image();
                testImg.onload = function() {
                    // WebP version exists, replace the src
                    img.src = webpSrc;
                };
                testImg.onerror = function() {
                    // WebP version doesn't exist, keep original
                    console.log('WebP version not available for: ' + src);
                };
                testImg.src = webpSrc;
            });
        }
    }
    
    // Add image dimensions to prevent layout shifts
    function addImageDimensions() {
        const images = document.querySelectorAll('img:not([width]):not([height])');
        
        images.forEach(img => {
            // If the image is already loaded, use its natural dimensions
            if (img.complete && img.naturalWidth !== 0) {
                img.setAttribute('width', img.naturalWidth);
                img.setAttribute('height', img.naturalHeight);
            } else {
                // Otherwise, wait for the image to load
                img.onload = function() {
                    img.setAttribute('width', img.naturalWidth);
                    img.setAttribute('height', img.naturalHeight);
                };
            }
        });
    }
    
    // Execute all image optimization functions
    implementLazyLoading();
    addResponsiveImageSrcset();
    useWebPImages();
    addImageDimensions();
});
