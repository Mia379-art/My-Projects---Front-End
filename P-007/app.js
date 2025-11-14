const formEL = document.querySelectorAll(".form");
const inputEL = document.querySelectorAll(".input");
const listEL = document.querySelector(".list");


listEL.innerHTML = "";


formEL.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    toDolist();
  });
});


function toDolist() {
  inputEL.forEach((input) => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
      ${taskText} 
      <i class="fas fa-check-square"></i>
      <i class="fas fa-trash"></i>
    `;

    const checkBtn = li.querySelector(".fa-check-square");
    checkBtn.addEventListener("click", () => {
      li.classList.toggle("checked");
    });

    const trashBtn = li.querySelector(".fa-trash");
    trashBtn.addEventListener("click", () => {
      li.remove();
    });

    listEL.appendChild(li);
    input.value = "";
  });
}
