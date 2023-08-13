// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')

const marckup = galleryItems.map(({preview, original, description}) => {
return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');

galleryList.innerHTML = marckup


galleryList.addEventListener('click', onClickPhoto)

function onClickPhoto(e) {
    if (e.target.nodeName !== "IMG") {
        return
    }
    e.preventDefault();
}
var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});

