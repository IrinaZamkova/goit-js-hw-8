import imagesData from "./gallery-items.js";

const refs = {
  galleryRef: document.querySelector(`.js-gallery`),
  closeButtonRef: document.querySelector("[data-action=close-lightbox]"),
  modalRef: document.querySelector(`.js-lightbox`),
  lightboxImgRef: document.querySelector(`.lightbox__image`),
  overlayRef: document.querySelector(`.lightbox__overlay`),
};

refs.galleryRef.addEventListener(`click`, openModal);
refs.closeButtonRef.addEventListener(`click`, closeModal);
refs.modalRef.addEventListener(`click`, closeModal);
document.addEventListener("keydown", closeModal);

const imgBoxBuilder = ({ description, original, preview }, index) => {
  const galleryItem = document.createElement("li");
  const linkItem = document.createElement("a");
  const galleryImg = document.createElement("img");

  galleryItem.classList.add("gallery__item");
  linkItem.classList.add(`gallery__link`);
  galleryImg.classList.add("gallery__image");
  galleryImg.alt = description;
  galleryImg.src = preview;
  galleryImg.dataset.source = original;
  galleryImg.dataset.index = index;
  linkItem.href = original;

  galleryItem.appendChild(linkItem);
  linkItem.appendChild(galleryImg);
  return galleryItem;
};

const creatGallery = (data) => {
  const galleryBuilder = data.map((item, i) => imgBoxBuilder(item, i));
  refs.galleryRef.append(...galleryBuilder);
};

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  refs.modalRef.classList.add(`is-open`);

  refs.lightboxImgRef.src = event.target.dataset.source;
  refs.lightboxImgRef.alt = event.target.getAttribute(`alt`);
  refs.lightboxImgRef.dataset.index = event.target.dataset.index;
  const activImg = refs.lightboxImgRef;
  function keyPress(e) {
    if (e.key === "PageDown") {
      activImg = refs.lightboxImgRef.dataset[index + 1];
    }
    if (e.key === "PageUp") {
    }
  }
}

function closeModal(event) {
  if (
    event.target.nodeName === "BUTTON" ||
    event.target.nodeName == "DIV" ||
    event.key === "Escape"
  ) {
    refs.modalRef.classList.remove(`is-open`);
    refs.lightboxImgRef.src = "";
    refs.lightboxImgRef.alt = "";
  }
}
creatGallery(imagesData);
