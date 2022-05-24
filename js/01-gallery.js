import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// 2. Ми повішали цю розмітку на існуючий елемент
const gallery = document.querySelector(".gallery");
const galleryCards = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryCards);
// 1. Створили функцію яка рендерить усю галерею і створили строку розмітки
function createGallery (galleryItems){
    return galleryItems.map(
     ({preview, original, description}) => {
     return `  <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
     }
    )
    .join('');
    };

// 3. Реалізовуємо делегування 
gallery.addEventListener('click', onGalleryClick);

// 4. Перевіряємо функціонал - куди клацнули.
function onGalleryClick(event){
event.preventDefault()
const isImage = event.target.classList.contains('gallery__image');
if(!isImage){
  return;
}
// 5. Використовуємо бібліотеку для вікдриття зображення у модальному вікні
const imageOriginalSize = basicLightbox.create(
      `<img width="1400" height="900" 
        src="${event.target.dataset.source}">`
    )
    imageOriginalSize.show();
};

