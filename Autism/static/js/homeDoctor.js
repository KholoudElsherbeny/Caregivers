$(function () {
  $('.menu-link').click(function () {
    $('.menu-link').removeClass('is-active');
    $(this).addClass('is-active');
  });
});

$(function () {
  $('.main-header-link').click(function () {
    $('.main-header-link').removeClass('is-active');
    $(this).addClass('is-active');
  });
});

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove('is-active'));
    dropdown.classList.add('is-active');
  });
});

$('.search-bar input')
  .focus(function () {
    $('.header').addClass('wide');
  })
  .blur(function () {
    $('.header').removeClass('wide');
  });

$(document).click(function (e) {
  var container = $('.status-button');
  var dd = $('.dropdown');
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass('is-active');
  }
});

$(function () {
  $('.dropdown').on('click', function (e) {
    $('.content-wrapper').addClass('overlay');
    e.stopPropagation();
  });
  $(document).on('click', function (e) {
    if ($(e.target).is('.dropdown') === false) {
      $('.content-wrapper').removeClass('overlay');
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
  },
});
///////////////////////////////////////////

// const myVariable = 'Hello, world!';
// export { myVariable };
  
const app = Vue.createApp({
  data() {
    return {
      dataPatient: '',
      username: '',
      address: '',
      username2: '',
      address2: '',
      username3: '',
      address3: '',
      id: ''
    };
  },
  mounted() {
    this.updateDoctorProfile();
  },
  methods: {
    updateDoctorProfile() {
      axios
        .get('https://caregivers.serveo.net/api/patients/', {})
        .then((response) => {
          this.dataPatient = response.data;
          // console.log(this.dataDoctor);
          const lastThreeItems = this.dataPatient.slice(
            Math.max(this.dataPatient.length - 3, 0)
          );
          // console.log(lastThreeItems);
          console.log(lastThreeItems[0]);
          const username =
            lastThreeItems[0].user.first_name +
            ' ' +
            lastThreeItems[0].user.last_name;
          // document.getElementById('username').value = username;
          this.username = username;
          const address = lastThreeItems[0].user.address;
          this.address = address;
          const username2 =
            lastThreeItems[1].user.first_name +
            ' ' +
            lastThreeItems[1].user.last_name;
          this.username2 = username2;
          const address2 = lastThreeItems[1].user.address;
          this.address2 = address2;
          const username3 =
            lastThreeItems[2].user.first_name +
            ' ' +
            lastThreeItems[2].user.last_name;
          this.username3 = username3;
          const address3 = lastThreeItems[2].user.address;
          this.address3 = address3;
          const myButton = document.querySelector('#gobook');
          myButton.addEventListener('click', () => {
            const Id = lastThreeItems[0];
            // console.log(Id);
            localStorage.setItem('Key', Id);
            window.location.assign('autisticThree.html');
          });
          const myButton2 = document.querySelector('#gobook2');
          myButton2.addEventListener('click', () => {
            const Id = lastThreeItems[1];
            localStorage.setItem('Key', Id);
            window.location.assign('autisticTwo.html');
          });
          const myButton3 = document.querySelector('#gobook3');
          myButton3.addEventListener('click', () => {
            const Id = lastThreeItems[2];
            localStorage.setItem('Key', Id);
            window.location.assign('autistic.html');
          });
        })
        .catch((error) => {
          console.log(error);
          console.log('Erorr');
        });
    },
  },
});
app.mount('.patients');
