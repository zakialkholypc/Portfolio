document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = [
    document.getElementById("exampleInput1"),
    document.getElementById("exampleInput2"),
    document.getElementById("exampleInput4"),
  ];

  let isValid = true;

  fields.forEach((field) => {
    if (field.value.trim() === "") {
      field.classList.add("is-invalid");
      isValid = false;
    } else {
      field.classList.remove("is-invalid");
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
  }
});

// ======================== Iam ===========================
const words = ["apps", "websites", "softwares"];
const element = document.querySelector(".typed-word");
let currentWordIndex = 0;
let currentCharacterIndex = 0;
let typingSpeed = 50;
let deletingSpeed = 50;

function type() {
  element.style.opacity = 1;
  if (currentCharacterIndex < words[currentWordIndex].length) {
    element.textContent += words[currentWordIndex].charAt(
      currentCharacterIndex
    );
    currentCharacterIndex++;

    setTimeout(type, typingSpeed + Math.random() * 1);
  } else {
    setTimeout(deleteWord, 1000);
  }
}

function deleteWord() {
  if (currentCharacterIndex > 0) {
    element.textContent = words[currentWordIndex].substring(
      0,
      currentCharacterIndex - 1
    );
    currentCharacterIndex--;
    setTimeout(deleteWord, deletingSpeed + Math.random() * 1);
  } else {
    element.style.opacity = 0;
    setTimeout(() => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      currentCharacterIndex = 0;
      element.textContent = "";
      element.style.opacity = 1;
      setTimeout(type, 500);
    }, 0);
  }
}

type();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        if (target.classList.contains("services-title")) {
          target.style.transition = "opacity 1s, transform 1s";
          target.style.opacity = "1";
          target.style.transform = "translateX(0)";
        } else if (target.tagName === "H4") {
          target.style.transition = "opacity 1s, transform 1s";
          target.style.opacity = "1";
          target.style.transform = "scale(1)";
        } else if (target.tagName === "LI") {
          target.style.transition = `opacity 1s, transform 1s ${target.dataset.delay}s`;
          target.style.opacity = "1";
          target.style.transform = "translateX(0)";
        }
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelector(".services-title").style.opacity = "0";
document.querySelector(".services-title").style.transform =
  "translateX(-100px)";
observer.observe(document.querySelector(".services-title"));

document.querySelectorAll("#services .row h4").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "scale(0)";
  observer.observe(el);
});

document.querySelectorAll("#services li").forEach((el, index) => {
  el.style.opacity = "0";
  el.style.transform = "translateX(100px)";
  el.dataset.delay = index * 0.2;
  observer.observe(el);
});

// -------------------------------------------------------------------------------

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        if (document.getElementsByClassName(".team-card")) {
          target.style.transition = `opacity 1s, transform 1s ${target.dataset.delay}s`;
          target.style.opacity = "1";
          target.style.transform = "translatey(0)";
        }
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("#team .team-card").forEach((el, index) => {
  el.style.opacity = "0";
  el.style.transform = "translatey(100px)";
  el.dataset.delay = index * 0.2;
  observer2.observe(el);
});
// ---------------------------------------------------------------

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  effect: "fadeEffect", // تأثير التلاشي بين السلايدز
  fadeEffect: {
    crossFade: true,
  },
});
// =====================Nav Bar ==========================
window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const brand = document.querySelector(".navbar-brand");
  const bars = document.querySelector(".my-size");
  const navLinks = document.querySelectorAll(".nav-link");
  const viewportHeight = window.innerHeight * 0.15;
  const zaki = document.querySelectorAll(".fab");
  const logo = document.getElementById("logo");

  if (window.scrollY > viewportHeight) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("position-absolute");
    navbar.classList.remove("mt-4");
    navbar.classList.add("fixed-top");
    document.body.classList.add("unscrolled-white");
    bars.classList.remove("my-color-toggle");
    bars.classList.add("text-dark");
    brand.classList.remove("my-color-toggle");
    brand.classList.add("text-dark");
    logo.innerHTML = ` <a class="navbar-brand" href="#">
                    <img src="img/logo-dark.png" class="img-fluid w-50 " alt="logo bezel">
                </a>`;
    navLinks.forEach((link) => {
      link.classList.remove("my-color-toggle");
      link.classList.add("text-dark");
    });
    zaki.forEach((link) => {
      link.classList.remove("my-color-toggle");
      link.classList.add("text-dark");
    });
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("position-absolute");
    navbar.classList.remove("fixed-top");
    document.body.classList.remove("unscrolled-white");
    bars.classList.remove("text-dark");
    bars.classList.add("my-color-toggle");
    brand.classList.remove("text-dark");
    brand.classList.add("my-color-toggle");
    logo.innerHTML = ` <a class="navbar-brand" href="#">
    <img src="img/logo-light.png" class="img-fluid w-50 " alt="logo bezel">
</a>`;
    navLinks.forEach((link) => {
      link.classList.remove("text-dark");
      link.classList.add("my-color-toggle");
    });
    zaki.forEach((link) => {
      link.classList.remove("text-dark");
      link.classList.add("my-color-toggle");
    });
  }
};
