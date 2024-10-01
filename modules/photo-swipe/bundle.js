import './photoswipe.css';
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

export default function Photoswipe(options) {
    options.pswpModule = () => PhotoSwipe; 
    const lightbox = new PhotoSwipeLightbox(options)
    lightbox.init();  
}
