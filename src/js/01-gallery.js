import SimpleLightbox from  'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = galleryItems
    .map(({ preview, original, description }) => 
        ` <a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`,)
    .join('');
  
    imageContainer.insertAdjacentHTML('afterbegin', imagesMarkup);
const lightbox = new SimpleLightbox('.gallery a', {});
console.log(galleryItems);