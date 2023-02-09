const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks_container");


function toggleNav() {
    hamburgerToggler.classList.toggle("open");

    navLinksContainer.classList.toggle("open");
}


