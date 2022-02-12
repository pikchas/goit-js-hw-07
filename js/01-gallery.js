import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const makeGallery = galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" >
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
gallery.addEventListener('click', onClick);



function onClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  modalShow(e.target.dataset.source);
}

let instance;
function modalShow(src) {
  instance = basicLightbox.create(
    `<div class="modal">
      <img src="${src}" style="height:95vh; display:block"></img>
    </div>`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscClick);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscClick);
      },
    },
  );
  instance.show();
}


function onEscClick(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}


console.log(makeGallery);
