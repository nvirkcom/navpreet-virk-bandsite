// Comments
const comments = [
  {
    author: "Connor Walton",
    date: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    author: "Emilie Beach",
    date: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    author: "Miles Acosta",
    date: "12/20/2020",
    text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

const commentList = document.querySelector("#comment-list");

comments.forEach((comment) => addCommentToPage(comment));

function addCommentToPage(commentObj) {
  const comment = createComment(commentObj);
  const divider = createEl({
    className: "conversation__divider",
    tagName: "hr",
  });
  commentList.append(comment);
  commentList.append(divider);
}

function createComment(commentObj) {
  const commentContainer = createEl({
    className: "conversation__comment-container",
    tagName: "article",
  });
  const avatar = createEl({
    className: "conversation__avatar--placeholder",
    tagName: "div",
  });
  commentContainer.append(avatar);
  const comment = createEl({
    className: "conversation__comment-content",
    tagName: "div",
  });
  commentContainer.append(comment);
  const row = createEl({
    className: "conversation__comment-content-row",
    tagName: "div",
  });
  comment.append(row);
  const author = createEl({
    className: "conversation__comment-content-name",
    tagName: "h3",
    text: commentObj.author,
  });
  row.append(author);
  const date = createEl({
    className: "conversation__comment-content-date",
    tagName: "p",
    text: commentObj.date,
  });
  row.append(date);
  const text = createEl({
    tagName: "p",
    text: commentObj.text,
  });
  comment.append(text);

  return commentContainer;
}

function createEl({ className, tagName, text }) {
  const el = document.createElement(tagName);
  text ? (el.textContent = text) : null;
  className ? el.classList.add(className) : null;
  return el;
}

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
