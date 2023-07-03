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

handleDownloadImages = (event) => {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.querySelector('#uploaded');
    //   console.log(img);
      img.setAttribute('src', e.target.result);
      img.classList.remove('hidden');
      document.querySelector('#file-upload').classList.add('hidden');
      document.querySelector('.btn-block').classList.remove('hidden');
    };
    reader.readAsDataURL(event.target.files[0]);
  }
};

document.querySelector('#upload-btn').onclick = (event) => {
  document.querySelector('.progress-bar span').classList.add('activate');
  window.setTimeout(() => {
    event.target.innerHTML = 'Done';
  }, 2500);
};
const toggleButton = document.querySelector('.dark-light');
// const toggleButton = document.querySelector('.light-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  //document.body.classList.toggle('dark-light');
});

const app = Vue.createApp({
  data() {
    return {
      selectedFile: null,
      result: '',
    };
  },
  methods: {
    onFileInputChange(event) {
      // Update the selectedFile data property with the selected image file.
      this.selectedFile = event.target.files[0];
    },
    submitImage(e) {
      // Create a FormData object and append the selected image file to it.
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      // Make a POST request to the API endpoint using Axios.
      axios
        .post(
          'https://1089-156-206-202-105.ngrok-free.app/api/predict/',
          formData
        )
        .then((response) => {
          const predict = response.data['predictions'];
          // const button_upload = document.querySelector('#upload-btn');
          if ('Face' in predict) {
            if (predict['Face']['Autistic'] < predict['Face']['Non_Autistic']) {
              this.result = 'Non Autistic';
              // button_upload.style.backgroundColor = 'red';
            } else {
              this.result = 'Autistic';
            }
          } else if ('No face detected' in predict) {
            this.result = 'No face detected';
          } else {
            this.result = 'Image Must Include one child!';
          }
          // Do something with the response data, such as updating the UI.
          console.log(this.result);
          // console.log(response.data);
        })
        .catch((error) => {
          // Handle the error, such as displaying an error message to the user.
          console.error(error);
        });
    },
  },
});

app.mount('.center');
