$(function () {
    $(".menu-link").click(function () {
     $(".menu-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
});
   
$(function () {
    $(".main-header-link").click(function () {
     $(".main-header-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
});
   
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
     e.stopPropagation();
     dropdowns.forEach((c) => c.classList.remove("is-active"));
     dropdown.classList.add("is-active");
    });
});
   
$(".search-bar input")
.focus(function () {
     $(".header").addClass("wide");
})
.blur(function () {
    $(".header").removeClass("wide");
});
   
$(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
     dd.removeClass("is-active");
    }
});
   
$(function () {
    $(".dropdown").on("click", function (e) {
     $(".content-wrapper").addClass("overlay");
     e.stopPropagation();
    });
    $(document).on("click", function (e) {
     if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
     }
    });
});

$(function () {
  $('.status-button:not(.close)').on('click', function (e) {
    $('.overlay-app').addClass('is-active');
  });
  $('.pop-up .open').click(function () {
    $('.overlay-app').removeClass('is-active');
  });
});

$('.status-button:not(.close)').click(function () {
  $('.pop-up').addClass('visible');
});

$('.pop-up .open').click(function () {
  $('.pop-up').removeClass('visible');
});   

// $(function () {
//     $(".status-button:not(.open)").on("click", function (e) {
//      $(".overlay-app").addClass("is-active");
//     });
//     $(".pop-up .close").click(function () {
//      $(".overlay-app").removeClass("is-active");
//     });
// });
   
// $(".status-button:not(.open)").click(function () {
//     $(".pop-up").addClass("visible");
// });
   
// $(".pop-up .close").click(function () {
//     $(".pop-up").removeClass("visible");
// });

const toggleButton = document.querySelector('.dark-light');
// const toggleButton = document.querySelector('.light-mode');

   
toggleButton.addEventListener('click', () => {
   document.body.classList.toggle('light-mode');
   //document.body.classList.toggle('dark-light');
});

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

  AOS.init();
  let openBtn = document.querySelector(".info-card__btn");
  let cloBtn1 = document.querySelector(".overLay .close-btn");
  let overLay1 = document.querySelector(".overLay");
openBtn.addEventListener('click' , ()=>{
    overLay1.classList.add("open-lay");
});
//close
cloBtn1.addEventListener('click' , function(){
    overLay1.classList.remove("open-lay");
});

let openBtn2 = document.querySelector(".info-card__btn2");
let cloBtn2 = document.querySelector(".overLay2 .close-btn");
let overLay2 = document.querySelector(".overLay2");
openBtn2.addEventListener('click' , function(){
    overLay2.classList.add("open-lay2")
});
cloBtn2.addEventListener('click' , function(){
    overLay2.classList.remove("open-lay2")
});

let openBtn3 = document.querySelector(".info-card__btn3");
let cloBtn3 = document.querySelector(".overLay3 .close-btn");
let overLay3 = document.querySelector(".overLay3");
openBtn3.addEventListener('click' , function(){
    overLay3.classList.add("open-lay3")
});
cloBtn3.addEventListener('click' , function(){
    overLay3.classList.remove("open-lay3")
});
///////////////////////////////////////////
