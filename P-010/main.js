const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (e) => {
  console.log(event.pageX - btnEl.offsetLeft);
  console.log(event.pageY - btnEl.offsetTop);

  btnEl.style.setProperty("--xPos", x + "px")
  btnEl.style.setProperty("--yPos", y + "px");

});
   