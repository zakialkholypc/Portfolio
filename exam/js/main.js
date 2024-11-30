$(document).ready(function () {
    var $successSection = $('.success');
    var $numElements = $('.num');
    var scrolled = false;

    $(window).scroll(function () {
        var offset = $successSection.offset().top;
        var scrollTop = $(window).scrollTop();
        var height = $(window).height();

        if (scrollTop + height > offset && !scrolled) {
            scrolled = true;
            $numElements.each(function () {
                $(this).prop('counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
});


//====================================about======================================
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    const aboutSection = document.querySelector('.about');
    function handleScroll() {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            progressBars.forEach((bar) => {
                const targetWidthMatch = bar.getAttribute('style').match(/width:\s*(\d+)%/);

                if (targetWidthMatch) {
                    const targetWidth = targetWidthMatch[1] + '%';

                    bar.style.width = '20%';
                    bar.style.transition = 'none';

                    bar.offsetWidth;

                    setTimeout(() => {
                        bar.style.transition = 'width 1s ease-in-out';
                        bar.style.width = targetWidth;
                    }, 0);
                }
            });
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

// =====================Nav Bar ==========================
window.onscroll = function () {
    const navbar = document.getElementById('navbar');
    const brand = document.querySelector('.navbar-brand');
    const bars = document.querySelector('.my-size');
    const navLinks = document.querySelectorAll('.nav-link');
    const viewportHeight = window.innerHeight * 0.9;


    if (window.scrollY > viewportHeight) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('position-absolute');
        navbar.classList.remove('mt-4');
        navbar.classList.add('fixed-top');
        document.body.classList.add('unscrolled-white');
        bars.classList.remove('my-color-toggle');
        bars.classList.add('text-dark');
        brand.classList.remove('my-color-toggle');
        brand.classList.add('text-dark');
        navLinks.forEach(link => {
            link.classList.remove('my-color-toggle');
            link.classList.add('text-dark');
        });
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('position-absolute');
        navbar.classList.add('mt-4');
        navbar.classList.remove('fixed-top');
        document.body.classList.remove('unscrolled-white');
        bars.classList.remove('text-dark');
        bars.classList.add('my-color-toggle');
        brand.classList.remove('text-dark');
        brand.classList.add('my-color-toggle');
        navLinks.forEach(link => {
            link.classList.remove('text-dark');
            link.classList.add('my-color-toggle');
        });
    }
};
// ======================== Iam ===========================
const words = ["Larry Daniels", "Designer", "Developer"];
const element = document.querySelector('.typed-word');
let currentWordIndex = 0;
let currentCharacterIndex = 0;
let typingSpeed = 50;
let deletingSpeed = 50;

// Function to type out the words  
function type() {
    element.style.opacity = 1; // Ensure the element is visible  
    if (currentCharacterIndex < words[currentWordIndex].length) {
        element.textContent += words[currentWordIndex].charAt(currentCharacterIndex);
        currentCharacterIndex++;
        // Add a slight randomness to typing speed  
        setTimeout(type, typingSpeed + Math.random() * 1);
    } else {
        setTimeout(deleteWord, 1000);
    }
}

// Function to delete the words  
function deleteWord() {
    if (currentCharacterIndex > 0) {
        element.textContent = words[currentWordIndex].substring(0, currentCharacterIndex - 1);
        currentCharacterIndex--;
        setTimeout(deleteWord, deletingSpeed + Math.random() * 1);
    } else {
        element.style.opacity = 0;
        setTimeout(() => {

            currentWordIndex = (currentWordIndex + 1) % words.length;
            currentCharacterIndex = 0;
            element.textContent = '';
            element.style.opacity = 1;
            setTimeout(type, 500);
        }, 0);
    }
}

type();