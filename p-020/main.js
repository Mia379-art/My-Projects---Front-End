const searchBarContainerEL = document.querySelector(".search-bar-container")

const glsEL = document.querySelector(".gls")

glsEL.addEventListener("click", () => {
    searchBarContainerEL.classList.toggle("active")
});