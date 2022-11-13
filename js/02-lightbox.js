import { galleryItems } from "./gallery-items.js";
// Change code below this line
const GalleryRef = document.querySelector(".gallery");
const createImgItem = ({ preview, original, description }) => {
  const imgItem = `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  return imgItem;
};
const galleryImg = galleryItems.map(createImgItem).join("");
GalleryRef.insertAdjacentHTML("afterbegin", galleryImg);

// console.log(galleryItems);
let newGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  animationSlide: true,
});
