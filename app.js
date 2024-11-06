import { photoswipe } from './dist/index.es.js';

document.addEventListener('DOMContentLoaded', evt => {
    let el = document.querySelector('#gallery');
    photoswipe(el, {children: 'a'});
})
