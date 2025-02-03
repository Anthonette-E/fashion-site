document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectionAll(".blog a");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Redirecting to the full article");
    });
  });
});
