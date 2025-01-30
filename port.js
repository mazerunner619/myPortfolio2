$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".nav-item").css("color", "rgba(0, 0, 0, 0.7)");
    $(".navbar-brand").css("color", "black");
    document.getElementById("navbar").style.background = "rgb(0, 255, 255)";
  } else {
    $(".nav-item").css("color", "rgba(255,255,255,0.6)");
    $(".navbar-brand").css("color", "white");
    document.getElementById("navbar").style.background = "none";
  }
};

var i = 0;

$("#tbtn").click(function () {
  if (i == 0) {
    $(".navbar").css("margin-bottom", "-1%");
    i = 1;
  } else {
    $(".navbar").css("margin-bottom", "-12%");
    i = 0;
  }
});

$(document).ready(function () {
  setTimeout(() => {
    $(".cover-text p").slideDown();
    document.querySelector(".cover-text h1").style.fontSize = "500%";
  }, 800);
});

document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  ); // Trigger when 20% of the element is visible
  hiddenElements.forEach((el) => observer.observe(el));
});
