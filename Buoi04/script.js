// Yeu cau 1
function changeText() {
  document.getElementById("greeting").innerText =
    "Chào mừng bạn đến với bài tập DOM!";
}

// Yeu cau 4

function changeImage() {
  document.getElementById("myImage").src =
    "https://www.svgrepo.com/show/452030/avatar-default.svg";
}

// Yeu cau 5

function toggleHighlight() {
  let p = document.getElementById("toggleClassText");

  if (!p.classList.contains("highlight")) p.classList.add("highlight");
  else p.classList.remove("highlight");
}

document.addEventListener("DOMContentLoaded", (event) => {
  // Yeu cau 2
  document
    .getElementById("box-btn")
    .addEventListener(
      "click",
      () => (document.getElementById("box").style.backgroundColor = "orange")
    );

  // Yeu cau 3
  document.getElementById("add-task").addEventListener("click", () => {
    let li = document.createElement("li");

    li.innerHTML = `<span>${
      document.getElementById("todoInput").value
    }</span> <button>Xóa</button>`;

    document.getElementById("todoList").appendChild(li);

    li.querySelector("button").addEventListener("click", (event) =>
      removeTodo(event.target)
    );
  });

  function removeTodo(buttonElement) {
    buttonElement.closest("li").remove();
  }

  document.querySelectorAll("#todoList li button").forEach((buttonElement) => {
    buttonElement.addEventListener("click", () => removeTodo(buttonElement));
  });
});
