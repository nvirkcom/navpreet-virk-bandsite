// Gallery Modal
const galleryImageListItemImages = document.querySelectorAll(
  ".gallery__image-list-item img"
);
const galleryModal = document.querySelector("#gallery__modal");
const galleryModalImage = document.querySelector("#gallery__modal-image");
const galleryModalClose = document.querySelector("#gallery__modal-close");

// Add Click Event Listener to Gallery Images
galleryImageListItemImages.forEach((img) => {
  img.addEventListener("click", () => {
    previewImage(img);
  });
});

// Add Click Event Listener to Modal Close Button
galleryModalClose.addEventListener("click", () => {
  closeModal();
});

// Preview Image Function
function previewImage(img) {
  galleryModalImage.alt = img.alt;
  galleryModalImage.src = img.src;

  galleryModal.classList.add("gallery__modal--show");
  galleryModal.classList.remove("gallery__modal--hidden");
  setTimeout(() => {
    document.body.style.overflow = "hidden";
  }, 125);
}

// Modal Close Function
function closeModal() {
  setTimeout(() => {
    galleryModalImage.alt = "";
    galleryModalImage.src = "";
  }, 250);

  galleryModal.classList.remove("gallery__modal--show");
  galleryModal.classList.add("gallery__modal--hidden");
  document.body.style.overflow = "auto";
}
