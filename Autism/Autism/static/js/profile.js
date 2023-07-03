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
  $('.status-button:not(.open)').on('click', function (e) {
    $('.overlay-app').addClass('is-active');
  });
  $('.pop-up .close').click(function () {
    $('.overlay-app').removeClass('is-active');
  });
});

$('.status-button:not(.open)').click(function () {
  $('.pop-up').addClass('visible');
});

$('.pop-up .close').click(function () {
  $('.pop-up').removeClass('visible');
});

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

const buttonEl = document.querySelector('.book');
const inputEl = document.querySelector('.inputEl');
const listEl = document.querySelector('.listEl');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('h4');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}
buttonEl.addEventListener('click', addGoal);

const buttonEl2 = document.querySelector('.book2');
const inputEl2 = document.querySelector('.inputEl2');
const listEl2 = document.querySelector('.listEl2');
function addGoal2() {
  const enteredValue2 = inputEl2.value;
  const listItemEl2 = document.createElement('h4');
  listItemEl2.textContent = enteredValue2;
  listEl2.appendChild(listItemEl2);
  inputEl2.value = '';
}
buttonEl2.addEventListener('click', addGoal2);
// const token = localStorage.getItem('session_token');
// axios.defaults.headers.common['Accept-Language'] = `en`;
// axios.defaults.headers.common['Authorization'] = `Token ${token}`;
// axios.defaults.headers.common['Content-Type'] = 'Application/json';
// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.baseURL = 'https://caregivers.serveo.net/api';

const app = Vue.createApp({
  data() {
    return {
      doctor: {},
      profilePicture: null,
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      phone: '',
      address: '',
      date_of_birth: '',
      password: '',
      gender: '',
      price: '',
      dataProfile: '',
    };
  },
  mounted() {
    this.getDoctorProfile();
  },
  methods: {
    getDoctorProfile() {
      fetch('https://caregivers.serveo.net/api/doctor/me/', {
        headers: {
          Accept: 'application/json',
          Authorization: 'Token 00d20d1e5ab2a4065e13e83d9428d4d41e60a3ea',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.dataProfile = data;
          console.log(this.dataProfile.user);
          const first_name = this.dataProfile.user.first_name;
          document.getElementById('first_name1').value = first_name;
          const last_name = this.dataProfile.user.last_name;
          document.getElementById('last_name1').value = last_name;
          const email = this.dataProfile.user.email;
          document.getElementById('email1').value = email;
          const phone = this.dataProfile.user.phone;
          document.getElementById('phone1').value = phone;
          const address = this.dataProfile.user.address;
          document.getElementById('address1').value = address;
          const date_of_birth = this.dataProfile.user.date_of_birth;
          document.getElementById('date_of_birth1').value = date_of_birth;
          const gender = this.dataProfile.user.gender;
          document.getElementById('gender1').value = gender;
          const price = this.dataProfile.price;
          document.getElementById('price1').value = price;
        });
    },
    updateDoctorProfile() {
      const formData = new FormData();
      formData.append('user.first_name', this.first_name);
      formData.append('user.last_name', this.last_name);
      formData.append('user.phone', this.phone);
       formData.append('user.email', this.email);
      formData.append('user.address', this.address);
      formData.append('user.date_of_birth', this.date_of_birth);
      formData.append('user.gender', this.gender[0]);
      formData.append('price', this.price);
      formData.append('profile_picture', this.profilePicture);

      axios
        .put('https://caregivers.serveo.net/api/doctor/me/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Token 00d20d1e5ab2a4065e13e83d9428d4d41e60a3ea',
          },
        })
        .then((response) => {
          this.dataProfile = response.data;
          console.log(this.dataProfile);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    onProfilePictureChange() {
      this.profilePicture = this.$refs.profilePicture.files[0];
    },
  },
});
app.mount('.content-wrapper');