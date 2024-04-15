import { galleryItems } from './gallery-items.js';
// Change code below this line
function createImages(image) {
    return image
      .map(
        ({ preview, original, description }) =>
          //marcajul elementelor din galerie (sablon)
          `<li class="gallery__item">
              <a class="gallery__link" target="_blank" href="${original}">
                  <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                  />
              </a>
          </li>`
      )
      .join("");
  }
  let image = document.querySelectorAll(".gallery__item")
  image[0].insertAdjacentHTML("beforeend", createImages);
  image.addEventListener("click", openModalPhotoOnClick);
  function openModalPhotoOnClick(e) {
    e.preventDefault();
    const currentImage = e.target.dataset.source;
    const instance = basicLightbox.create(
      `
      <img src="${currentImage}" width="800" height="600">
  `,
      {
        onShow: () => {
          window.addEventListener("keydown", closeOnEscClick);
        },
        onClose: () => {
          window.removeEventListener("keydown", closeOnEscClick);
        },
      }
    );
    if (e.target !== e.currentTarget) instance.show();
    function closeOnEscClick(e) {
      if (e.code === "Escape") instance.close();
    }};