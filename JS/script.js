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

window.addEventListener("load", function () {
  let preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // Small delay to ensure smooth disappearance
});

// Preloader
window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
});

// Smooth scrolling
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

