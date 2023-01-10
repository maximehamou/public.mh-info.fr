<template>
  <div class="waiting-container">
    <div>
      <div class="ellipse-container">
        <div class="ellipse"></div>
      </div>
      <div class="ellipse-container">
        <div class="ellipse"></div>
      </div>
      <div class="ellipse-container">
        <div class="ellipse"></div>
      </div>
      <div>
        <div class="core"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.waiting-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    @keyframes rotate {
      from {
        rotate: 0deg;
      }

      to {
        rotate: 360deg;
      }
    }

    width: 65px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 3s infinite linear rotate;
  }

  .ellipse-container {
    position: absolute;
    overflow: hidden;

    &:nth-child(1) {
      @keyframes atomAnimation1 {
        from {
          width: 0;
        }
        70% {
          width: 65px;
        }
        to {
          width: 65px;
        }
      }

      animation: 1.2s infinite alternate-reverse linear atomAnimation1;
    }

    &:nth-child(2) {
      @keyframes atomAnimation2 {
        from {
          width: 0;
        }
        70% {
          width: 65px;
        }
        to {
          width: 65px;
        }
      }

      rotate: 55deg;
      animation: 1.2s infinite alternate-reverse linear atomAnimation2;
    }

    &:nth-child(3) {
      @keyframes atomAnimation3 {
        from {
          width: 0;
        }
        70% {
          width: 65px;
        }
        to {
          width: 65px;
        }
      }

      rotate: -55deg;
      animation: 1.2s infinite alternate-reverse linear atomAnimation3;
    }

    .ellipse {
      width: 65px;
      height: 170px;
      border-radius: 50%;

      &:before {
        content: "";
        box-sizing: border-box;
        width: 65px;
        height: 170px;
        position: absolute;
        z-index: -1;
        inset: 0;
        padding: 3px;
        border-radius: 50%;
        background: linear-gradient(to right, #080436, #e6d0d0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
      }
    }
  }
  div:has(.core):not(.waiting-container > div) {
    width: fit-content;

    .core {
      width: 10px;
      height: 10px;
      border-radius: 50%;

      &:before {
        content: "";
        box-sizing: border-box;
        width: 10px;
        height: 10px;
        position: absolute;
        top: calc(50% - 5px) !important;
        left: calc(50% - 5px) !important;
        z-index: -1;
        inset: 0;
        padding: 3px;
        border-radius: 50%;
        background: linear-gradient(to right, #080436, #e6d0d0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
      }
    }
  }
}
</style>

<script>
if (typeof document !== "undefined") {
  const containerOfWaitingContainer = document.querySelectorAll(
    "*:has(:scope > .waiting-container)"
  );
  const waitingContainer = document.querySelectorAll(".waiting-container");
  const waitingContainerDiv = document.querySelectorAll(
    ".waiting-container > div"
  );

  for (let i = 0; i < containerOfWaitingContainer.length; i++) {
    if (
      waitingContainer[i].offsetHeight < waitingContainerDiv[i].offsetHeight
    ) {
      waitingContainerDiv[i].style.scale = String(
        waitingContainer[i].offsetHeight / waitingContainerDiv[i].offsetHeight
      );
    } else if (
      waitingContainer[i].offsetWidth < waitingContainerDiv[i].offsetHeight
    ) {
      waitingContainerDiv[i].style.scale = String(
        waitingContainer[i].offsetWidth / waitingContainerDiv[i].offsetHeight
      );
    }
  }
}

export default {
  mounted() {
    if (typeof document !== "undefined") {
      const article = document.querySelectorAll(
        ".article, .img, .article-image"
      );

      for (let i = 0; i < article.length; i++) {
        if (article[i].style.backgroundImage.includes("uploads")) {
          document.querySelectorAll(".waiting-container")[i].style.display =
            "none";
        } else if (
          article[i].style.backgroundImage.includes("uploads") == false
        ) {
          document.querySelectorAll(".waiting-container")[i].style.display =
            "flex";
        }
      }

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutationRecord) {
          for (let i = 0; i < article.length; i++) {
            if (article[i].style.backgroundImage.includes("uploads")) {
              document.querySelectorAll(".waiting-container")[i].style.display =
                "none";
            } else if (
              article[i].style.backgroundImage.includes("uploads") == false
            ) {
              document.querySelectorAll(".waiting-container")[i].style.display =
                "flex";
            }
          }
        });
      });

      for (let i = 0; i < article.length; i++) {
        observer.observe(article[i], {
          attributes: true,
          attributeFilter: ["style"],
        });
      }
    }
  },
};
</script>
