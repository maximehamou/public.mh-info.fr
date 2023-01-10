// Reducing the desktop menu after scroll
window.onscroll = function () {
  if (window.location.href.includes("en")) {
    reduceMenuAfterScrollEN();
  } else {
    reduceMenuAfterScrollFR();
  }
};

const desktopMenu = document.querySelector(".desktop-menu");
const linksOfDesktopMenuFR = document.querySelectorAll(
  "nav.container-menuFR a"
);
const linksOfDesktopMenuEN = document.querySelectorAll(
  "nav.container-menuEN a"
);

const modeIcon = document.querySelector(
  "nav.container-menuFR > i, nav.container-menuEN > i"
);

function reduceMenuAfterScrollFR() {
  for (let i = 0; i < linksOfDesktopMenuFR.length; i++) {
    if (document.documentElement.scrollTop > 71) {
      desktopMenu.style.height = "40px";
      linksOfDesktopMenuFR[i].style.padding = "12px 12px";
      modeIcon.style.padding = "10px 12px";
    } else {
      desktopMenu.style.height = "118px";
      linksOfDesktopMenuFR[i].style.padding = "51px 12px";
      modeIcon.style.padding = "49px 12px";
    }
  }
}

function reduceMenuAfterScrollEN() {
  for (let i = 0; i < linksOfDesktopMenuEN.length; i++) {
    if (document.documentElement.scrollTop > 71) {
      desktopMenu.style.height = "40px";
      linksOfDesktopMenuEN[i].style.padding = "12px 12px";
      modeIcon.style.padding = "10px 12px";
    } else {
      desktopMenu.style.height = "118px";
      linksOfDesktopMenuEN[i].style.padding = "51px 12px";
      modeIcon.style.padding = "49px 12px";
    }
  }
}

// Reload page before unload on a tag click
// const articleFeedsAnchors = document.querySelectorAll(
//   "div[class*='article-feed'] a"
// );

// function reload() {
//   window.onbeforeunload = window.location.reload();
//   window.location = articleFeedsAnchorsHrefs;
// }

// for (let i = 0; articleFeedsAnchors.length; i++) {
//   articleFeedsAnchors[i].setAttribute("onclick", "reload()");
//   console.log(articleFeedsAnchors[i]);
//   var articleFeedsAnchorsHrefs = articleFeedsAnchors[i].getAttribute("href");
// }
