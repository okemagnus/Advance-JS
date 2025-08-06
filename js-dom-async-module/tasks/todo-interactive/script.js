document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("#todo-list li");

  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      toggleComplete(item);
    });
  });
});

function toggleComplete(item) {
  const checkIcon = item.querySelector(".checkmark");
  const isCompleted = item.style.color === "green";

  if (isCompleted) {
    item.style.color = "gray";
    checkIcon.style.display = "none";
  } else {
    item.style.color = "green";
    checkIcon.style.display = "inline";
  }
}
