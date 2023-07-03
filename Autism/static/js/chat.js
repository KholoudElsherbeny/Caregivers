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

// Collapsible
// var coll = document.getElementsByClassName('collapsible');

// for (let i = 0; i < coll.length; i++) {
//   coll[i].addEventListener('click', function () {
//     this.classList.toggle('active');

//     var content = this.nextElementSibling;

//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//     }
//   });
// }

// function getTime() {
//   let today = new Date();
//   hours = today.getHours();
//   minutes = today.getMinutes();

//   if (hours < 10) {
//     hours = '0' + hours;
//   }

//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }

//   let time = hours + ':' + minutes;
//   return time;
// }

// Gets the first message
function firstBotMessage() {
//   let firstMessage = "How's it going?";
  document.getElementById('botStarterMessage').innerHTML =
    '<p class="text">' + firstMessage + '</p>';

  let time = getTime();

  $('#chat-timestamp').append(time);
  document.getElementById('userInput').scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml =
    '<p class="text"><span>' +
    botResponse +
    '</span></p>';
  $('#chatbox').append(botHtml);

  document.getElementById('chat-bar-bottom').scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $('#textInput').val();

  if (userText == '') {
    userText = 'I love Code Palace!';
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

  $('#textInput').val('');
  $('#chatbox').append(userHtml);
  document.getElementById('chat-bar-bottom').scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

  $('#textInput').val('');
  $('#chatbox').append(userHtml);
  document.getElementById('chat-bar-bottom').scrollIntoView(true);

  //Uncomment this if you want the bot to respond to this buttonSendText event
  // setTimeout(() => {
  //     getHardResponse(sampleText);
  // }, 1000)
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText('Heart clicked!');
}

// Press enter to send a message
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
