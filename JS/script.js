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
    let commentInput = 
    document.getElementById("commentInput").ariaValueMax;
    if (commentInput.trim() === "") {
        alert("Write a comment before posting!");
        return;
    }
    let commentList = 
    document.getElementById("commentsList");
    let newComment = 
    document.createElement("p");
      newComment.textContent = 
      commentInput;
      newComment.style.padding = "10px";
      newComment.style.background = "#eee";
      newComment.style.borderRadius = "5px";
      newComment.style.marginTop = "5px";

      commentList.appendChild(newComment);

      document.getElementById("commentInput").value = ""; // Clear input
}