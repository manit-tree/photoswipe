import './photoswipe.css';
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

export function photoswipe(el, options) {
    options.pswpModule = () => PhotoSwipe; 
    options.gallery = el;
    const lightbox = new PhotoSwipeLightbox(options)
    lightbox.init();  
    return lightbox;
}
