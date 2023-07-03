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
$('.search-bar input')
  .focus(function () {
    $('.header').addClass('wide');
  })
  .blur(function () {
    $('.header').removeClass('wide');
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
     e.stopPropagation();
     dropdowns.forEach((c) => c.classList.remove("is-active"));
     dropdown.classList.add("is-active");
    });
});
   
$(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
     dd.removeClass("is-active");
    }
});

// const dropdowns = document.querySelectorAll('.dropdown');
// dropdowns.forEach((dropdown) => {
//   dropdown.addEventListener('click', (e) => {
//     e.stopPropagation();
//     dropdowns.forEach((c) => c.classList.add('is-active'));
//     dropdown.classList.remove('is-active');
//   });
// });

// $(document).click(function (e) {
//   var container = $('.status-button');
//   var dd = $('.dropdown');
//   if (!container.is(e.target) && container.has(e.target).length === 0) {
//     dd.addClass('is-active');
//   }
// });
   
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
   
toggleButton.addEventListener('click', () => {
     document.body.classList.toggle('light-mode');
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

// const toggleButton = document.querySelector('.light-mode');

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-light');
// });

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});