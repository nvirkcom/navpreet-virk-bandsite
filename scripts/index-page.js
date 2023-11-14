class Comment {
  constructor(author, date, text) {
    this.author = author;
    this.date = date;
    this.text = text;
  }

  getAuthor() {
    return this.author;
  }

  getDate() {
    return this.date;
  }

  getText() {
    return this.text;
  }
}

function addFakeComments() {
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
  });
}
addFakeComments();

function getCommentHTML(comment, fakeComment) {
  const commentContainerEl = document.createElement("article");
  commentContainerEl.classList.add("comment__container");

  if (fakeComment) {
    const avatarPlaceholderEl = document.createElement("div");
    avatarPlaceholderEl.classList.add("avatar");
    avatarPlaceholderEl.classList.add("avatar--placeholder");
    commentContainerEl.append(avatarPlaceholderEl);
  } else {
    const avatarEl = document.createElement("img");
    avatarEl.alt = "Mohan Muruge face profile";
    avatarEl.src = "./assets/images/mohan-muruge.jpg";
    avatarEl.classList.add("avatar");
    commentContainerEl.append(avatarEl);
  }

  const commentContentEl = document.createElement("div");
  commentContentEl.classList.add("comment__content");
  commentContainerEl.append(commentContentEl);

  const commentRowEl = document.createElement("div");
  commentRowEl.classList.add("comment__row");
  commentContentEl.append(commentRowEl);

  const commentAuthorEl = document.createElement("h3");
  commentAuthorEl.classList.add("comment__author");
  commentAuthorEl.textContent = comment.getAuthor();
  commentRowEl.append(commentAuthorEl);

  const commentDateEl = document.createElement("p");
  commentDateEl.classList.add("comment__date");
  const date = new Date(comment.getDate());
  commentDateEl.textContent = moment(date).fromNow();
  commentRowEl.append(commentDateEl);

  const commentTextEl = document.createElement("p");
  commentTextEl.textContent = comment.getText();
  commentContentEl.append(commentTextEl);

  return commentContainerEl;
}

let comments = [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (isValidForm(e.target)) {
    const newComment = new Comment(
      e.target.author.value,
      Date.now(),
      e.target.comment.value
    );
    if (comments.length === 0) {
      setInterval(() => {
        addCommentsToHTML();
      }, 1000);
    }
    comments.push(newComment);
    addCommentsToHTML();
    e.target.reset();
  }
});

function addCommentsToHTML(newComment) {
  const commentList = document.getElementById("comment-list");
  commentList.innerHTML = "";
  comments.forEach((comment) => {
    commentList.prepend(getCommentHTML(comment));
  });
}

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
