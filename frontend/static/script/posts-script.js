// Change date format
const dateNumbers = document.querySelectorAll(".date-numbers");

if (document.querySelector(".container-menuFR") !== null) {
  for (let i = 0; i < dateNumbers.length; i++) {
    const newDates = dateNumbers[i].textContent
      .replace(/\s/g, "")
      .replaceAll("-", " ")
      .split(" ")
      .reverse()
      .join()
      .replaceAll(",", "/");

    dateNumbers[i].textContent = "";
    dateNumbers[i].textContent = newDates;
  }
} else if (document.querySelector(".container-menuEN") !== null) {
  for (let i = 0; i < dateNumbers.length; i++) {
    const newDates = dateNumbers[i].textContent
      .trim()
      .replaceAll("-", " ")
      .split(" ");

    // Working for articles published form 2010 to 2099
    for (let i = 10; i < 100; i++) {
      if (newDates.includes("20" + String(i))) {
        newDates.splice(3, 1, "20" + String(i));
        newDates.splice(0, 1);
      }
    }

    dateNumbers[i].textContent = "";
    dateNumbers[i].textContent = newDates.join().replaceAll(",", "/");
  }
}

// Remove article description and modify design in "Le saviez-vous ?" articles
if (document.querySelector(".article-body h2") !== null) {
  if (
    document
      .querySelector(".article-body h2")
      .textContent.includes("Le saviez-vous")
  ) {
    document.querySelector(
      ".article-image .article-description"
    ).style.display = "none";

    const secondaryTitle = document.querySelector("h2").textContent.split(" ");
    secondaryTitle.splice(secondaryTitle.indexOf("?") + 1, 0, "<br />");
    const newSecondaryTitle = secondaryTitle.join().replaceAll(",", " ");
    document.querySelector("h2").innerHTML = newSecondaryTitle;
    document.querySelector("h2").style.textAlign = "center";
    document.querySelector("h2").style.marginBlock = "20px 50px";
    if (document.body.offsetWidth > 1000) {
      document.querySelector("h2").style.fontSize = "3vw";
    }

    document.querySelector(".article-content p").style.textAlign = "center";
    document.querySelector(".article-content p").style.margin = "0";
  }
}

// Set the width specified in the alt value (set on Strapi Content-Type Editor)
const imgs = document.querySelectorAll(".article-body img");

for (let i = 0; i < imgs.length; i++) {
  const imgAlt = imgs[i].getAttribute("alt");
  const imgAltArray = imgAlt.split("&");
  const imgAltFiltredArray = imgAltArray.filter((word) => word.includes("w"));
  const imgWidth = String(imgAltFiltredArray).slice(1);
  imgs[i].style.width = imgWidth + "px";
}

// Remplace <em> of figcaption by it
const figcaptionParagraphs = document.querySelectorAll(
  "p:has(img + em), p:has(img + em + em)"
);

for (let i = 0; i < figcaptionParagraphs.length; i++) {
  const newfigcaptionParagraphs = figcaptionParagraphs[i].innerHTML
    .replaceAll("<em>", "<figcaption>")
    .replaceAll("</em>", "</figcaption>")
    .replace("<figcaption>", "<em>")
    .replace("</figcaption>", "</em>");
  figcaptionParagraphs[i].innerHTML = newfigcaptionParagraphs;
}

// Center images and make them responsive
const imgBox = document.querySelectorAll("p:has(> img)");
const img = document.querySelectorAll("p:has(> img) img");
const articleParagraphes = document.querySelectorAll(
  ".article-content > p:not(.article-intro, .article-outro, :has(> img))"
);

for (let i = 0; i < img.length; i++) {
  if (imgBox[i].offsetWidth > img[i].offsetWidth) {
    img[i].style.margin = "0 calc((100% - " + img[i].offsetWidth + "px)/2)";
  } else if (articleParagraphes[i].offsetWidth < img[i].offsetWidth) {
    img[i].style.width = "100%";
    img[i].style.height = "auto";
    img[i].style.margin = "auto";
  }
}

// Center iframes
const iframe = document.querySelectorAll("p iframe");

for (let i = 0; i < iframe.length; i++) {
  const iframeBox = document.querySelectorAll("p iframe")[i].parentNode;

  if (iframeBox.offsetWidth > iframe[i].offsetWidth) {
    iframe[i].style.margin =
      "0 calc((100% - " + iframe[i].offsetWidth + "px)/2)";
  }

  if (articleParagraphes[i].offsetWidth < iframe[i].offsetWidth) {
    iframe[i].style.width = "100%";
    iframe[i].style.height = "auto";
  }
}

// Make MathJax expressions responsive
const mjxExpression = document.querySelectorAll("mjx-container svg");

for (
  let i = 0;
  i < document.querySelectorAll("mjx-container svg").length;
  i++
) {
  if (
    Number(
      window
        .getComputedStyle(document.querySelectorAll("mjx-container svg")[i])
        .width.replace("px", "")
    ) > articleParagraphes[i].offsetWidth
  ) {
    document.querySelectorAll("mjx-container svg")[i].style.width =
      "fit-content";
  }
}
