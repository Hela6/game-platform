
let showMenuButton = document.querySelector("#burger_btn");

showMenuButton.addEventListener("click", () => {
    deployBurgerMenu();
});

let menuLinks = document.querySelector("#menu_links");

function deployBurgerMenu() {

    if (menuLinks.style.display === "none") {
        menuLinks.style.display = "block";
    }
    else {
        menuLinks.style.display = "none";
    }
}