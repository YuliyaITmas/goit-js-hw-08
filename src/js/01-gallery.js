// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

function makeGalleryCardsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
  <div><a class="gallery__item" href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a></div>`;
    })
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = makeGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

  let lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
      scrollZoom: false,
    });
