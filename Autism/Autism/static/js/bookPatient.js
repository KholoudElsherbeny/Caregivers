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
  $(".status-button:not(.open)").on("click", function (e) {
   $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
   $(".overlay-app").removeClass("is-active");
  });
});
 
$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});
 
$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});
 
const toggleButton = document.querySelector('.dark-light');
 
toggleButton.addEventListener('click', () => {
   document.body.classList.toggle('light-mode');
});



var sel_month,sel_date,sel_day,mins,time_hrs,time_mins;

// var messages=['You have taken a lot of time.2 minutes left. Hurry Up!','Time\'s up! Sorry. Please try again','The bank took a lot of time' ];



var formtimer,modaltimer;

$('.info').on( "submit", function(e){
  e.preventDefault();
  window.clearInterval(formtimer);
  window.clearInterval(modaltimer);
  window.location.assign('/homePatient.html')
  modaltimer=setTimeout(function(){
    window.location.replace(
      'https://caregivers24.serveo.net/api/appointment/book/'
    );
  },600000)
  $('.overlay').css('opacity','1');
  $('.overlay .loader').css({'display':'block','opacity':'1'});
  setTimeout(function(){
    $('.overlay').css('opacity','0');
  },5000);
$.ajax({
  url: 'https://caregivers24.serveo.net/api/appointment/book/',
  type: 'POST',
  Headers: {
    Authorization: 'Token 97f3d528cb30b0f83fae146a5fda52cfb37faf79',
  },
  data: {
    formdata: $(this).serialize(),
  },
})
  .done(function (data) {
    alert('suc');
    //console.log(data);
    var userdata = JSON.parse(data);
    console.log(userdata);

    var mail = '"' + userdata.user_mail + '"';
    console.log(mail);
    var options = {
      key: '97f3d528cb30b0f83fae146a5fda52cfb37faf79',
      amount: '11000', // 2000 paise = INR 20
      // "name": userdata.user_fname + " " + userdata.user_lname,
      // "email":mail,
      description: 'Purchase Description',
      image: '/your_logo.png',
      name: userdata.user_fname + ' ' + userdata.user_lname,
      handler: function (response) {
        console.log(response);
        $('.overlay').css('opacity', '1');
        $.ajax({
          url: 'https://caregivers24.serveo.net/api/appointment/book/',
          type: 'POST',
          Headers: {
            Authorization: 'Token 97f3d528cb30b0f83fae146a5fda52cfb37faf79',
          },
          data: {
            pay_id: response.razorpay_payment_id,
          },
        })
          .done(function (data) {
            if (data == 0) {
              // on amount mismatch
            } else if (data == 2) {
              // on success
              window.location.replace(
                'https://caregivers24.serveo.net/api/appointment/book/'
              );
            } else {
              //on db entry failure
            }
            console.log(data);
          })
          .fail(function (data) {
            alert(data);
          });
      },
      prefill: {
        email: userdata.user_mail,
        contact: userdata.user_mobnum,
      },
      //"prefill.name":userdata.user_fname + " " + userdata.user_lname,
      // "prefill.email":mail,
      notes: {
        system: 'TariniNetradham Appointment Slot Allocater',
        patientid: userdata.patient_id,
        dateid: userdata.date_id,
        slotid: userdata.slot_id,
      },
      theme: {
        color: '#F37254',
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  })

  .fail(function (data) {
    alert('fail');
  });
 
} )



$(':input[type=number]').on('mousewheel', function(e){
    e.preventDefault();
});


$( "input" ).focusin(function() {
console.log(this);
  $(this).siblings( "label" ).addClass('label-top');
  $(this).not("input[type=radio]").addClass('input-height');
});

$( "input" ).focusout(function() {
  if($.trim($(this).val()).length == 0){
  $(this).siblings( "label" ).removeClass('label-top');
  $(this).removeClass('input-height');
  }
});
var $currentForm,dat_id,tim_id;

$('.calendar').on("click",cal_click);


function cal_click(){
  var time=0;
  calendar=$(this);
  console.log(calendar.find('.date').html());
  sel_date=calendar.find('.date').html();
  sel_day=calendar.find('.day').html();
  sel_month=calendar.find('.month').html();
  $('.form-step[data-step="2"]').find('.form-instructions').append('<p class="selected-date">'+'Date: '+sel_date + ' '+ sel_month + '</p>');
  //console.log(gus);
  $(document).not(calendar).off("click",".calendar",cal_click);
  $('.calendar').not(calendar).css("pointer-events","none");
  
  dat_id= calendar.attr("id");

  calendar.find($('.top')).css({'bottom':'40%','transform':'rotateX(0deg)','height':'40%'});
  calendar.find($('.bottom')).css({'transform':'rotateX(92.3deg)','height':'45%'});
  setTimeout(function(){
  calendar.find($('.bottom')).css('display','none');

  },800)
  
  setTimeout(
  function() 
  {
    calendar.find($('.top')).css('bottom','45%');
  calendar.find($('.back-top')).css({'opacity':'1','transform':'rotateX(0deg)'});
  
    
  }, 1000);
  
  
  setTimeout(
  function() 
  {
  calendar.find($('.done')).addClass("drawn");
  calendar.parents('.next').addClass("ready");
    $currentForm = calendar.parents('.js-form-step'); 
    
  }, 2000);
  setTimeout(
  function() 
  {
  setupClickHandlers($currentForm);
    
    
  }, 3500);
  
  
}



$(document).on("click",".button",button_click);



function button_click(){
  var time=0, date_btn=$(this);


  $(document).off("click",".button",button_click);
  $('.button').css('pointer-events','none');
  date_btn.addClass('clicked');
  tim_id= date_btn.attr("id");
  date_btn.find($('.book')).css('display','none');
  date_btn.find($('.text')).css('display','none');
  date_btn.find($('.loader')).css('display','block');

  setTimeout( function(){
    date_btn.find($('.loader')).css('opacity','1');
  }, time+=500);

  $.ajax({
    url: 'https://caregivers24.serveo.net/api/appointment/book/',
    type: 'POST',
    Headers: {
      Authorization: 'Token 97f3d528cb30b0f83fae146a5fda52cfb37faf79',
    },
    data: {
      date_id: dat_id,
      time_id: tim_id,
    },
  })

    .done(function (data) {
      console.log(data);
      if (data > 0 && data < 25) {
        date_btn.find($('.buttondone-effect')).addClass('buttondone-success');
        date_btn.find($('.buttondone-effect')).css('opacity', '1');
        date_btn.find($('.button-done')).css('display', 'block');

        setTimeout(function () {
          date_btn.find($('.buttondone-effect')).addClass('done-effect');
          date_btn.parents('.next').addClass('ready');
          $currentForm = date_btn.parents('.js-form-step');
        }, 500);

        mins = (data - 1) * 10;
        time_hrs = 11 + ((mins / 60) | 0);
        time_mins = mins % 60;
        if (time_mins < 10) {
          time_mins = '0' + time_mins;
        }
        if (time_hrs > 12) {
          time_hrs -= 12;
        }
        console.log(time_hrs);
        console.log(time_mins);

        $('.info .selected-options').append(
          '<p class="chosen-ones">' +
            'Date: ' +
            sel_date +
            ' ' +
            sel_month +
            '</p>' +
            '<p class="chosen-ones">' +
            'Time:' +
            time_hrs +
            ':' +
            time_mins +
            '</p>'
        );
        setTimeout(function () {
          window.scroll(0, 0);
          $('.warning').css({ transform: 'translateY(0)', opacity: '1' });
        }, 5000);

        setTimeout(function () {
          setupClickHandlers($currentForm);
        }, 1000);
      } else {
        date_btn.find($('.buttondone-effect')).addClass('buttondone-success');
        date_btn.find($('.buttondone-effect')).css('opacity', '1');
        date_btn.find($('.button-done')).css('display', 'block');

        setTimeout(function () {
          date_btn.find($('.buttondone-effect')).addClass('done-effect');
          date_btn.parents('.next').addClass('ready');
          $currentForm = date_btn.parents('.js-form-step');
        }, 500);

        mins = (data - 1) * 10;
        time_hrs = 11 + ((mins / 60) | 0);
        time_mins = mins % 60;
        if (time_mins < 10) {
          time_mins = '0' + time_mins;
        }
        if (time_hrs > 12) {
          time_hrs -= 12;
        }
        // console.log(time_hrs);
        // console.log(time_mins);

        $('.info .selected-options').append(
          '<p class="chosen-ones">' +
            'Date: ' +
            sel_date +
            ' ' +
            sel_month +
            '</p>' +
            '<p class="chosen-ones">' +
            'Time:' +
            time_hrs +
            ':' +
            time_mins +
            '</p>'
        );
        setTimeout(function () {
          window.scroll(0, 0);
          $('.warning').css({ transform: 'translateY(0)', opacity: '1' });
        }, 5000);

        setTimeout(function () {
          setupClickHandlers($currentForm);
        }, 1000);
      }

      console.log(data);
      //alert("sucksess" + data );
    })
    .fail(function (data) {
      date_btn.find($('.buttondone-effect')).addClass('buttondone-success');
      date_btn.find($('.buttondone-effect')).css('opacity', '1');
      date_btn.find($('.button-done')).css('display', 'block');

      setTimeout(function () {
        date_btn.find($('.buttondone-effect')).addClass('done-effect');
        date_btn.parents('.next').addClass('ready');
        $currentForm = date_btn.parents('.js-form-step');
      }, 500);

      mins = (data - 1) * 10;
      time_hrs = 11 + ((mins / 60) | 0);
      time_mins = mins % 60;
      if (time_mins < 10) {
        time_mins = '0' + time_mins;
      }
      if (time_hrs > 12) {
        time_hrs -= 12;
      }
      // console.log(time_hrs);
      // console.log(time_mins);

      $('.info .selected-options').append(
        '<p class="chosen-ones">' +
          'Date: ' +
          sel_date +
          ' ' +
          sel_month +
          '</p>' +
          '<p class="chosen-ones">' +
          'Time:' +
          time_hrs +
          ':' +
          time_mins +
          '</p>'
      );
      setTimeout(function () {
        window.scroll(0, 0);
        $('.warning').css({ transform: 'translateY(0)', opacity: '1' });
      }, 5000);

      setTimeout(function () {
        setupClickHandlers($currentForm);
      }, 1000);
    });


 
}






var $body = $('body');
var $progressBar = $('progress');
var $animContainer = $('.animation-container');
var value = 0;
var transitionEnd = 'webkitTransitionEnd transitionend';

/**
 * Resets the form back to the default state.
 * ==========================================
 */
function formReset() {
  value = 0;
  $progressBar.val(value);
  $('form input').not('button').not('input[type=radio]').val('').removeClass('hasInput');
  $('.js-form-step').removeClass('left leaving');
  $('.js-form-step').not('.js-form-step[data-step="1"]').addClass('hidden waiting');
  $('.js-form-step[data-step="1"]').removeClass('hidden');
  $('.form-progress-indicator').not('.one').removeClass('active');
  
  $animContainer.css({
    'paddingBottom': $('.js-form-step[data-step="2"]').height() + 'px'
  });
  
  console.warn('Form reset.');
  return false;
}


/**
 * Sets up the click handlers on the form. Next/reset.
 * ===================================================
 */
function setupClickHandlers(x) {
  // console.log(x);

  // Show next form on continue click

      
      showNextForm(x);

  

  // Reset form on reset button click
  $('.js-reset').on('click', function() {
    formReset();
  });
  
  return false;
}

/**
 * Shows the next form.
 * @param - Node - The current form.
 * ======================================
 */
function showNextForm($currentForm) {
  var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
  var $nextForm = $('.js-form-step[data-step="' + (currentFormStep + 1) + '"]');

  // console.log('Current step is ' + currentFormStep);
  // console.log('The next form is # ' + $nextForm.attr('data-step'));

  $body.addClass('freeze');

  // Ensure top of form is in view
  $('html, body').animate({
    scrollTop : $progressBar.offset().top
  }, 'fast');

  // Hide current form fields
  $currentForm.addClass('leaving');
  setTimeout(function() {
    $currentForm.addClass('hidden');
  }, 500);
  
  // Animate container to height of form
  $animContainer.css({
    'paddingBottom' : $nextForm.height() + 'px'
  });  

  // Show next form fields
  $nextForm.removeClass('hidden')
           .addClass('coming')
           .one(transitionEnd, function() {
             $nextForm.removeClass('coming waiting');
           });

  // Increment value (based on 4 steps 0 - 100)
  value += 50;

  // Reset if we've reached the end
  if (value > 100) {
    formReset();
  } else {
    var indicator_status=$('.form-progress')
      .find('.form-progress-indicator.active');
    indicator_status.addClass('complete');
    indicator_status.addClass("drawn");
      indicator_status.next('.form-progress-indicator')
      .addClass('active');

    // Set progress bar to the next value
    $progressBar.val(value);
  }

  // Update hidden progress descriptor (for a11y)
  $('.js-form-progress-completion').html($progressBar.val() + '% complete');

  $body.removeClass('freeze');

  return false;
}

/**
 * Sets up and handles the float labels on the inputs.
 =====================================================
 */
function setupFloatLabels() {
  // Check the inputs to see if we should keep the label floating or not
  $('form input').not('button').on('blur', function() {

    // Different validation for different inputs
    switch (this.tagName) {
      case 'SELECT':
        if (this.value > 0) {
          this.className = 'hasInput';
        } else {
          this.className = '';
        }
        break;

      case 'INPUT':
        if (this.value !== '') {
          this.className = 'hasInput';
        } else {
          this.className = '';
        }
        break;

      default:
        break;
    }
  });
  
  return false;
}

/**
 * Gets the party started.
 * =======================
 */
// function init() {
//   formReset();
//   setupFloatLabels();
//   setupClickHandlers();
// }

// init();




