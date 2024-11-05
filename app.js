import Photoswipe from './dist/index.es.js';

document.addEventListener('DOMContentLoaded', evt => {
    let el = document.querySelector('#gallery');
    Photoswipe(el, {children: 'a'});
})
