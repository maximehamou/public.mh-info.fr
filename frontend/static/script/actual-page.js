// FR
if (window.location.pathname == "/") {
  const actualPage = document.querySelectorAll(".accueil");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/tous-les-articles/") {
  const actualPage = document.querySelectorAll(".tous-les-articles");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/sciences/") {
  const actualPage = document.querySelectorAll(".sciences");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/actualites/") {
  const actualPage = document.querySelectorAll(".actualites");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/histoire/") {
  const actualPage = document.querySelectorAll(".histoire");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/livres/") {
  const actualPage = document.querySelectorAll(".livres");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/le-saviez-vous/") {
  const actualPage = document.querySelectorAll(".le-saviez-vous");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/archives/") {
  const actualPage = document.querySelectorAll(".archives");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

// EN
if (window.location.pathname == "/en/") {
  const actualPage = document.querySelectorAll(".home");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/en/all-articles/") {
  const actualPage = document.querySelectorAll(".all-articles");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}

if (window.location.pathname == "/en/sciences/") {
  const actualPage = document.querySelectorAll(".sciences");

  for (let i = 0; i < actualPage.length; i++) {
    actualPage[i].removeAttribute("id");
    actualPage[i].setAttribute("id", "active");
  }
}
