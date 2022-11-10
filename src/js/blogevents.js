import { setUser } from "./setApi.js";
import { getUser } from "./getApi.js";
const commentForm = document.querySelector("#publication .comment-form");
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
const nameInput = document.querySelector("#publication .name-of-user");
const nameError = document.querySelector("#publication .name-error");
const commentInput = document.querySelector("#publication .comment-field");
const commentError = document.querySelector("#publication .comment-error");
const submitButton = document.querySelector("#publication .submit-btn");
const outputNewComments = document.querySelector(
  "#publication .output-comments"
);
submitButton.addEventListener("click", (e) => {
  let nameInputCondition = false;
  let commentInputCondition = false;
  if (nameInput.value.trim().length === 0) {
    nameError.innerHTML = "<i>Empty input name* <i>";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "<i>Correct* <i>";
    nameError.style.color = "green";
    nameInputCondition = true;
  }
  if (commentInput.value.trim().length === 0) {
    commentError.innerHTML = "<i>Empty input comment* <i>";
    commentError.style.color = "red";
  } else {
    commentError.innerHTML = "<i>Correct* <i>";
    commentError.style.color = "green";
    commentInputCondition = true;
  }

  if (nameInputCondition && commentInputCondition) {
    const comments = document.createElement("div");
    comments.classList.add("comments");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("image");
    const newImage = document.createElement("img");
    newImage.src = "./assets/images/header/comment-avatar.png";
    imgDiv.append(newImage);

    const outputName = document.createElement("div");
    outputName.classList.add("user-output-name");
    const h6 = document.createElement("h6");
    outputName.append(h6);

    const commentOutput = document.createElement("div");
    commentOutput.classList.add("user-output-comment");
    const p = document.createElement("p");
    commentOutput.append(p);

    comments.append(imgDiv, outputName, commentOutput);
    outputNewComments.append(comments);

    const userInfo = {
      userName: `${nameInput.value}`,
      userComment: `${commentInput.value}`,
    };
    setUser(userInfo);
  }
});
const newInterval = setInterval(() => {
  getUser();
  clearInterval(newInterval);
}, 0);

const bars = document.querySelector("header .fa-bars");
const navbar = document.querySelector("header .col:nth-child(2) ul ");

bars.addEventListener("click", () => {
  if (navbar.classList.contains("d-block")) {
    navbar.classList.remove("d-block");
  } else {
    navbar.classList.add("d-block");
  }
});
