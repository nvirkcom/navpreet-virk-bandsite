// Comment Class
class Comment {
  constructor(author, date, text, avatar) {
    this.author = author;
    this.avatar = `https://i.pravatar.cc/150?u=${this.author}`;
    this.date = date;
    this.text = text;
  }

  getAuthor() {
    return this.author;
  }

  getAvatar() {
    return this.avatar;
  }

  getDate() {
    return this.date;
  }

  getText() {
    return this.text;
  }

  setAvatar(avatar) {
    this.avatar = avatar;
  }
}

// Comments Array
let comments = [];

// Add Fake Comments to DOM
function addFakeComments() {
  // Fake Comments Array
  const fakeComments = [
    new Comment(
      "Connor Walton",
      "02/17/2021",
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic deserves reverence. Let us appreciate this for what it is and what it contains."
    ),
    new Comment(
      "Emilie Beach",
      "01/09/2021",
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    ),
    new Comment(
      "Miles Acosta",
      "12/20/2020",
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."
    ),
  ];
  const commentList = document.getElementById("comment-list");

  fakeComments.forEach((comment) => {
    commentList.append(getCommentHTML(comment, true));
    comments.push(comment);
  });
}
addFakeComments();

// Generate Comment HTML
function getCommentHTML(comment, fakeComment) {
  const commentContainerEl = document.createElement("article");
  commentContainerEl.classList.add("comment__container");

  // If it'a fake comment create an avatar placeholder
  if (fakeComment || comment.getAvatar()) {
    const avatarEl = document.createElement("img");
    avatarEl.alt = "User avatar";
    avatarEl.src = comment.getAvatar();
    avatarEl.classList.add("avatar");
    commentContainerEl.append(avatarEl);
  } else {
    // Else create an avatar with photo
    const avatarEl = document.createElement("img");
    avatarEl.alt = "Mohan Muruge face profile";
    avatarEl.src = "./assets/images/mohan-muruge.jpg";
    avatarEl.classList.add("avatar");
    commentContainerEl.append(avatarEl);
  }

  // Comment Content
  const commentContentEl = document.createElement("div");
  commentContentEl.classList.add("comment__content");
  commentContainerEl.append(commentContentEl);

  // Comment Row
  const commentRowEl = document.createElement("div");
  commentRowEl.classList.add("comment__row");
  commentContentEl.append(commentRowEl);

  // Comment Author
  const commentAuthorEl = document.createElement("h3");
  commentAuthorEl.classList.add("comment__author");
  commentAuthorEl.textContent = comment.getAuthor();
  commentRowEl.append(commentAuthorEl);

  // Comment Date
  const commentDateEl = document.createElement("p");
  commentDateEl.classList.add("comment__date");
  const date = new Date(comment.getDate());
  commentDateEl.textContent = moment(date).fromNow();
  commentRowEl.append(commentDateEl);

  // Comment Text
  const commentTextEl = document.createElement("p");
  commentTextEl.textContent = comment.getText();
  commentContentEl.append(commentTextEl);

  // Return Comment Container
  return commentContainerEl;
}

// Form Submit Event Listener
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Validate Form
  if (isValidForm(e.target)) {
    const newComment = new Comment(
      e.target.author.value,
      Date.now(),
      e.target.comment.value
    );
    newComment.setAvatar("./assets/images/mohan-muruge.jpg");
    // When first comment is added start an interval to update time when comment was added
    if (comments.length === 0) {
      setInterval(() => {
        addCommentsToHTML();
      }, 5000);
    }
    comments.push(newComment);
    addCommentsToHTML();
    e.target.reset();
  }
});

// Add comments to HTML
function addCommentsToHTML(newComment) {
  const commentList = document.getElementById("comment-list");
  commentList.innerHTML = "";
  comments.forEach((comment) => {
    commentList.prepend(getCommentHTML(comment));
  });
}

// Validate Form
function isValidForm(form) {
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

  return isValid;
}
