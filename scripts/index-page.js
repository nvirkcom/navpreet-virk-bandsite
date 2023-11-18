// API instance
const API = new BandSiteAPI("3db530b6-a408-4f63-809d-22bc38a6b3ae");
let comments;

/*
  Try enabling sounds and:
  - adding a comment without name and/or text
  - adding a comment
  - liking a comment
  - deleting a comment
*/
let soundsEnabled = false;
const DELETE_SOUND = new Audio("./assets/sounds/delete.mp3");
const ERROR_SOUND = new Audio("./assets/sounds/error.mp3");
const LIKE_SOUND = new Audio("./assets/sounds/like.mp3");
const NEW_SOUND = new Audio("./assets/sounds/new.mp3");

// Function called after page loads
async function startApp() {
  const RESPONSE = await API.getComments();
  comments = RESPONSE;
  renderComments();
  // Update comments every second
  setInterval(() => {
    renderComments();
  }, 1000);
}
startApp();

// Function to render local comments on DOM
function renderComments() {
  const COMMENT_LIST = document.getElementById("comment-list");
  COMMENT_LIST.innerHTML = "";
  comments.forEach((comment) => COMMENT_LIST.append(getCommentHTML(comment)));
}

/*
  Function to generate comment HTML
  
  Expected Input: comment Object
    {
      name: string,
      comment: string,
      id: number,
      likes: number,
      timestamp: number
    }
  
  Expected output: HTML Node
    <article class="comment__container">
      <img
        alt="comment.name avatar"
        src="https://i.pravatar.cc/150?u=comment.name"
        class="avatar"
      />
      <div class="comment__content">
        <div class="comment__row">
          <h3 class="comment__author">comment.name</h3>
          <p class="comment__date">comment.date processed with moment.js</p>
        </div>
        <p>comment.comment</p>
      </div>
    </article>
*/
function getCommentHTML(comment) {
  const COMMENT_CONTAINER = document.createElement("article");
  COMMENT_CONTAINER.classList.add("comment__container");

  const AVATAR = document.createElement("img");
  AVATAR.alt = `${comment.name} avatar`;
  AVATAR.src = `https://i.pravatar.cc/150?u=${comment.name}`;
  AVATAR.classList.add("avatar");
  COMMENT_CONTAINER.append(AVATAR);

  const COMMENT_CONTENT = document.createElement("div");
  COMMENT_CONTENT.classList.add("comment__content");
  COMMENT_CONTAINER.append(COMMENT_CONTENT);

  const COMMENT_ROW = document.createElement("div");
  COMMENT_ROW.classList.add("comment__row");
  COMMENT_CONTENT.append(COMMENT_ROW);

  const COMMENT_AUTHOR = document.createElement("h3");
  COMMENT_AUTHOR.classList.add("comment__author");
  COMMENT_AUTHOR.textContent = comment.name;
  COMMENT_ROW.append(COMMENT_AUTHOR);

  const COMMENT_DATE = document.createElement("p");
  COMMENT_DATE.classList.add("comment__date");
  COMMENT_DATE.textContent = moment(comment.timestamp).fromNow();
  COMMENT_ROW.append(COMMENT_DATE);

  const COMMENT_TEXT = document.createElement("p");
  COMMENT_TEXT.textContent = comment.comment;
  COMMENT_CONTENT.append(COMMENT_TEXT);

  const ICONS_ROW = document.createElement("div");
  ICONS_ROW.classList.add("comment__row", "comment__row--icons");
  COMMENT_CONTENT.append(ICONS_ROW);

  const LIKES__CONTAINER = document.createElement("span");
  LIKES__CONTAINER.classList.add("comment__icon--container");
  ICONS_ROW.append(LIKES__CONTAINER);

  const LIKE_ICON = document.createElement("i");
  LIKE_ICON.addEventListener("click", async (e) => {
    await API.likeComment(comment.id);
    if (soundsEnabled) {
      LIKE_SOUND.currentTime = 0;
      LIKE_SOUND.play();
    }
    comment.likes++;
    e.target.nextSibling.textContent = ` ${comment.likes}`;
  });
  LIKE_ICON.classList.add(
    "bi",
    "bi-hand-thumbs-up-fill",
    "comment__icon",
    "comment__icon--like"
  );
  LIKES__CONTAINER.append(LIKE_ICON);
  LIKES__CONTAINER.append(` ${comment.likes}`);

  const DELETE_ICON = document.createElement("i");
  DELETE_ICON.addEventListener("click", async (e) => {
    await API.deleteComment(comment.id);
    if (soundsEnabled) {
      DELETE_SOUND.currentTime = 0;
      DELETE_SOUND.play();
    }
    comments.splice(comments.indexOf(comment), 1);
    renderComments();
  });
  DELETE_ICON.classList.add(
    "bi",
    "bi-trash-fill",
    "comment__icon",
    "comment__icon--delete"
  );
  ICONS_ROW.append(DELETE_ICON);

  return COMMENT_CONTAINER;
}

// Click event listener for the form button
document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (validateInputs(e.target)) {
    const RESPONSE = await API.postComment({
      name: e.target.author.value,
      comment: e.target.comment.value,
    });
    comments.reverse();
    comments.push(RESPONSE);
    comments.reverse();
    if (soundsEnabled) {
      NEW_SOUND.currentTime = 0;
      NEW_SOUND.play();
    }
    renderComments();
    e.target.reset();
  }
});

/*
  Function to validate the form inputs.
  If the inputs are invalid form__input--error class is added.
  Arguments: form element
*/
function validateInputs(form) {
  let isValid = true;

  if (form.author.value == "") {
    form.author.classList.add("form__input--error");
    isValid = false;
  } else {
    form.author.classList.remove("form__input--error");
  }

  if (form.comment.value == "") {
    form.comment.classList.add("form__input--error");
    isValid = false;
  } else {
    form.comment.classList.remove("form__input--error");
  }

  if (!isValid && soundsEnabled) {
    ERROR_SOUND.currentTime = 0;
    ERROR_SOUND.play();
  }

  return isValid;
}
