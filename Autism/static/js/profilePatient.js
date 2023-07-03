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

// buttonEl2.addEventListener('click', addGoal2);
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
      dataProfile: '',
      score_vr: '',
      score_app:'',
    };
  },
  mounted() {
    this.getPatientProfile();
  },
  methods: {
    getPatientProfile() {
      fetch('https://caregivers.serveo.net/api/patient/me/', {
        headers: {
          Accept: 'application/json',
          Authorization: 'Token f62170281ffdf476ac19e4cdea1ae28854019814',
          // Authorization: `Token ${session_token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          this.dataProfile = data;
          console.log(this.dataProfile.user);
          const first_name1 = this.dataProfile.user.first_name;
          document.getElementById('first_name').value = first_name1;
          // document.getElementById('first_name').value = first_name1;
          const last_name1 = this.dataProfile.user.last_name;
          document.getElementById('last_name').value = last_name1;
          const email1 = this.dataProfile.user.email;
          document.getElementById('email').value = email1;
          const phone1 = this.dataProfile.user.phone;
          document.getElementById('phone').value = phone1;
          const address1 = this.dataProfile.user.address;
          document.getElementById('address').value = address1;
          const date_of_birth1 = this.dataProfile.user.date_of_birth;
          document.getElementById('date_of_birth').value = date_of_birth1;
          const gender1 = this.dataProfile.user.gender;
          document.getElementById('gender').value = gender1;
          this.score_app = this.dataProfile.score_app;
          this.score_vr = this.dataProfile.score_vr;
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
      formData.append('profile_picture', this.profilePicture);

      axios
        .put('https://caregivers.serveo.net/api/patient/me/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Token f62170281ffdf476ac19e4cdea1ae28854019814',
            // Authorization: `Token ${session_token}`,
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