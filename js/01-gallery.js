import { galleryItems } from './gallery-items.js';
// Change code below this line
const array = `${galleryItems}`;
for (let index = 0; index < array.length; ++index) {
    const element = array[index];
    const instance = basicLightbox.create(`
    <li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="small-image.jpg"
          data-source="large-image.jpg"
          alt="./gallery-items.js/description"
        />
      </a>
    </li>
    `)
    instance.show()
};

const instance = basicLightbox.create(`
    <div class="modal">
        <img>
            src = "./gallery-items.js/original"
        </img>
    </div>
`)

instance.show()