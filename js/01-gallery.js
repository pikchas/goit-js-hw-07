import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const makeGallery = galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);

console.log(makeGallery);
