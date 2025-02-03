document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectionAll(".blog a");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Redirecting to the full article");
    });
  });
});

function postComment() {
  let commentInput = document.getElementById("commentInput").ariaValueMax;
  if (commentInput.trim() === "") {
    alert("Write a comment before posting!");
    return;
  }
  let commentList = document.getElementById("commentsList");
  let newComment = document.createElement("p");
  newComment.textContent = commentInput;
  newComment.style.padding = "10px";
  newComment.style.background = "#eee";
  newComment.style.borderRadius = "5px";
  newComment.style.marginTop = "5px";

  commentList.appendChild(newComment);

  document.getElementById("commentInput").value = ""; // Clear input
}


function subscribeNewsletter() {
  let email = document.getElementById("emailInput").value;
  let message = document.getElementById("subscribeMessage");

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Thank you for subscribing!";
  message.style.color = "lightgreen";

  document.getElementById("emailInput").value = ""; // Clear input
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let fadeElements = document.querySelectorAll(".fade-in");

  function checkScroll() {
    let triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach((el) => {
      let elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on load
});
