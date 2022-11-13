import { galleryItems } from "./gallery-items.js";
// Change code below this line

const GalleryRef = document.querySelector(".gallery");
const createImgItem = ({ preview, original, description }) => {
  const imgItem = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
      </a>
</div>`;
  return imgItem;
};
const galleryImg = galleryItems.map(createImgItem).join("");

GalleryRef.insertAdjacentHTML("afterbegin", galleryImg);

function onClick(event) {
  event.preventDefault();
  if (event.target === event.CurrentTarget) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src= ${event.target.dataset.source}>
`);

  instance.show();

  document.body.addEventListener("keydown", closeModal);

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
      document.body.removeEventListener("keydown", closeModal);
    }
  }
}

GalleryRef.addEventListener("click", onClick);
