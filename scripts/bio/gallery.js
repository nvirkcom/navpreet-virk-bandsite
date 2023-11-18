// Array of image object with alt and src properties
const IMAGES = [
  {
    alt: "A crowd of people at a concert",
    src: "./assets/images/photo-gallery-1.jpg",
  },
  {
    alt: "A woman with her arms up and her eyes closed",
    src: "./assets/images/photo-gallery-2.jpg",
  },
  {
    alt: "A crowd of people raising their hands in a concert",
    src: "./assets/images/photo-gallery-3.jpg",
  },
  {
    alt: "A woman standing on a stage with her arms raised",
    src: "./assets/images/photo-gallery-4.jpg",
  },
  {
    alt: "A crowd of people watching a concert",
    src: "./assets/images/photo-gallery-5.jpg",
  },
  {
    alt: "A man in black shirt and black pants on stage",
    src: "./assets/images/photo-gallery-6.jpg",
  },
  {
    alt: "A crowd at a concert",
    src: "./assets/images/photo-gallery-7.jpg",
  },
  {
    alt: "A person is touching a DJ console",
    src: "./assets/images/photo-gallery-8.jpg",
  },
  {
    alt: "A crowd of people at a concert",
    src: "./assets/images/photo-gallery-9.jpg",
  },
];

// This function add images to the gallery section
function addImagesToGallery() {
  const IMAGE_LIST = document.getElementById("image-list");

  IMAGES.forEach((image) => {
    const LI_EL = document.createElement("li");
    LI_EL.classList.add("image-list__item");

    const IMAGE_EL = document.createElement("img");
    ["alt", "src"].forEach((attribute) => {
      IMAGE_EL.setAttribute(attribute, image[attribute]);
    });

    // Event listener to open the modal
    IMAGE_EL.addEventListener("click", (e) => {
      openModal(e.target);
    });

    LI_EL.append(IMAGE_EL);
    IMAGE_LIST.append(LI_EL);
  });
}
addImagesToGallery();

// Modal
const MODAL = document.getElementById("modal");
const MODAL_IMAGE = document.getElementById("modal-image");

// Open Modal
function openModal(image) {
  MODAL_IMAGE.alt = image.alt;
  MODAL_IMAGE.src = image.src;

  MODAL.classList.add("modal--show");
  MODAL.classList.remove("modal--hidden");
  setTimeout(() => {
    document.body.style.overflow = "hidden";
  });
}

// Close Modal
document.getElementById("modal-close-button").addEventListener("click", () => {
  setTimeout(() => {
    MODAL_IMAGE.alt = "";
    MODAL_IMAGE.src = "";
  }, 250);

  MODAL.classList.remove("modal--show");
  MODAL.classList.add("modal--hidden");
  document.body.removeAttribute("style");
});
