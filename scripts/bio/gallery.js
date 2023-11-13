const images = [
  { alt: "Photo Gallery 1", src: "./assets/images/photo-gallery-1.jpg" },
  { alt: "Photo Gallery 2", src: "./assets/images/photo-gallery-2.jpg" },
  { alt: "Photo Gallery 3", src: "./assets/images/photo-gallery-3.jpg" },
  { alt: "Photo Gallery 4", src: "./assets/images/photo-gallery-4.jpg" },
  { alt: "Photo Gallery 5", src: "./assets/images/photo-gallery-5.jpg" },
  { alt: "Photo Gallery 6", src: "./assets/images/photo-gallery-6.jpg" },
  { alt: "Photo Gallery 7", src: "./assets/images/photo-gallery-7.jpg" },
  { alt: "Photo Gallery 8", src: "./assets/images/photo-gallery-8.jpg" },
  { alt: "Photo Gallery 9", src: "./assets/images/photo-gallery-9.jpg" },
];

function addImagesToGallery() {
  const imageList = document.getElementById("image-list");

  images.forEach((image) => {
    const liEl = document.createElement("li");
    liEl.classList.add("image-list__item");

    const imageEl = document.createElement("img");
    ["alt", "data-image-id", "src"].forEach((attribute) => {
      imageEl.setAttribute(attribute, image[attribute]);
    });
    imageEl.addEventListener("click", (e) => {
      openModal(e.target);
    });

    liEl.append(imageEl);
    imageList.append(liEl);
  });
}
addImagesToGallery();

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");

function openModal(image) {
  modalImage.alt = image.alt;
  modalImage.src = image.src;

  modal.classList.add("modal--show");
  modal.classList.remove("modal--hidden");
  setTimeout(() => {
    document.body.style.overflow = "hidden";
  });
}

document.getElementById("modal-close-button").addEventListener("click", () => {
  setTimeout(() => {
    modalImage.alt = "";
    modalImage.src = "";
  }, 250);

  modal.classList.remove("modal--show");
  modal.classList.add("modal--hidden");
  document.body.removeAttribute("style");
});
