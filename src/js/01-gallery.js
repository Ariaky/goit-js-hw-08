import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const cardMarkup = galleryItems
    .map(
        ({ preview, original, description}) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}">
            </a>
        </li>`
    )
    .join("");

    gallery.insertAdjacentHTML("beforeend", cardMarkup);

    const lightbox = new simpleLightbox('.gallery__link', {
        captionsData: 'alt',
        captionDelay: 250,
    });

console.log(galleryItems);


