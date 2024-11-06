// import { photoswipe } from './dist/index.es.js';
import { photoswipe } from './src/index.js';

document.addEventListener('DOMContentLoaded', evt => {
    let el = document.querySelector('#gallery');
    let pswipe = photoswipe(el, {children: 'a'});

    pswipe.disabled = true;
})
