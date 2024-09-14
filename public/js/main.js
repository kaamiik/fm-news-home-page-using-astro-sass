const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btnOpen = document.querySelector(".js-btnOpen");
const btnClose = document.querySelector(".js-btnClose");
const media = window.matchMedia("(width <= 67em)");
const navContent = document.querySelector(".nav--content");
const navOverlay = document.querySelector(".nav--overlay");

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  navContent.removeAttribute("inert");
  main.setAttribute("inert", "");
  footer.setAttribute("inert", "");

  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  navContent.setAttribute("inert", "");
  main.removeAttribute("inert");
  footer.removeAttribute("inert");

  btnOpen.focus();
}

function setupNav(event) {
  if (event.matches) {
    // Is mobile
    navContent.setAttribute("inert", "");
    setTimeout(() => {
      navContent.style.display = "block";
      navOverlay.style.display = "block";
    }, 500);
  } else {
    // Is desktop
    navContent.removeAttribute("inert");
    main.removeAttribute("inert");
    footer.removeAttribute("inert");
    navContent.style.display = "";
    navOverlay.style.display = "";
  }
}

setupNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (event) {
  setupNav(event);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});
