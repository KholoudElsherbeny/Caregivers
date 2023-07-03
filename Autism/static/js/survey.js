// Select Elements
// let countSpan = document.querySelector(".quiz-app .count span");
// let bullets = document.querySelector(".bullets");
// let bulletsSpanContainer = document.querySelector(".bullets .spans");
// let quizArea = document.querySelector(".quiz-area");
// let answersArea = document.querySelector(".answers-area");
// let submitButton = document.querySelector(".submit-button");
// let resultsContainer = document.querySelector(".results");
// let countdownElement = document.querySelector(".countdown");

// // Set Options
// let currentIndex = 0;
// let rightAnswers = 0;
// let countdownInterval;

// function getQuestions() {
//   let myRequest = new XMLHttpRequest();

//   myRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       //console.log(this.readyState)
//       let questionsObject = JSON.parse(this.responseText);
//       //console.log(questionsObject)
//       // define how much of question
//       let qCount = questionsObject.length;
//       //console.log(qCount)
//       // Create Bullets + Set Questions Count
//       createBullets(qCount);

//       // Add Question Data
//       addQuestionData(questionsObject[currentIndex], qCount);

//       // Start CountDown
//       //countdown(4, qCount);

//       // Click On Submit
//       submitButton.onclick = () => {
//         // Get Right Answer
//         let theRightAnswer = questionsObject[currentIndex].right_answer;

//         // Increase Index
//         currentIndex++;

//         // Check The Answer
//         checkAnswer(theRightAnswer, qCount);

//         // Remove Previous Question
//         quizArea.innerHTML = "";
//         answersArea.innerHTML = "";

//         // Add Question Data
//         addQuestionData(questionsObject[currentIndex], qCount);

//         // Handle Bullets Class
//         handleBullets();

//         // Start CountDown
//         //clearInterval(countdownInterval);
//         //countdown(4, qCount);

//         // Show Results
//         showResults(qCount);
//       };
//     }
//   };

//   myRequest.open("GET", "html-question.json", true);
//   myRequest.send();
// }

// getQuestions();

// function createBullets(num) {
//   countSpan.innerHTML = num;

//   // Create Spans
//   for (let i = 0; i < num; i++) {
//     // Create Bullet
//     let theBullet = document.createElement("span");

//     // Check If Its First Span
//     if (i === 0) {
//       theBullet.className = "on";
//     }

//     // Append Bullets To Main Bullet Container
//     bulletsSpanContainer.appendChild(theBullet);
//   }
// }

// function addQuestionData(obj, count) {
//   if (currentIndex < count) {
//     // Create H2 Question Title
//     let questionTitle = document.createElement("h2");

//     // Create Question Text
//     let questionText = document.createTextNode(obj["title"]);

//     // Append Text To H2
//     questionTitle.appendChild(questionText);

//     // Append The H2 To The Quiz Area
//     quizArea.appendChild(questionTitle);

//     // Create The Answers
//     for (let i = 1; i <= 3; i++) {
//       // Create Main Answer Div
//       let mainDiv = document.createElement("div");

//       // Add Class To Main Div
//       mainDiv.className = "answer";

//       // Create Radio Input
//       let radioInput = document.createElement("input");

//       // Add Type + Name + Id + Data-Attribute
//       radioInput.name = "question";
//       radioInput.type = "radio";
//       radioInput.id = `answer_${i}`;
//       radioInput.dataset.answer = obj[`answer_${i}`];

//       // Make First Option Selected
//       // if ( i===1 && i!==2 && i!==3) {
//       //   radioInput.checked = true;
//       //   console.log("jjjjh");
//       //   rightAnswers += 1.5 ;
//       //   console.log(i)
//       //   console.log(rightAnswers);
//       // }
//       // else if (i === 2 && i!==1 && i!==3) {
//       //   radioInput.checked = true;
//       //   console.log("kkkkkk");
//       //   rightAnswers += 2.5 ;
//       //   console.log(rightAnswers);
//       //   console.log(i)
//       // }else if (i === 3 && i!==1 && i!==2) {
//       //   radioInput.checked = true;
//       //   console.log("bbbbbb");
//       //   rightAnswers += 3.5 ;
//       //   console.log(rightAnswers)
//       //   console.log(i)
//       // }
      
//       // Create Label
//       let theLabel = document.createElement("label");

//       // Add For Attribute
//       theLabel.htmlFor = `answer_${i}`;

//       // Create Label Text
//       let theLabelText = document.createTextNode(obj[`answer_${i}`]);
//       //console.log(theLabelText)
//       // Add The Text To Label
//       theLabel.appendChild(theLabelText);

//       // Add Input + Label To Main Div
//       mainDiv.appendChild(radioInput);
//       mainDiv.appendChild(theLabel);

//       // Append All Divs To Answers Area
//       answersArea.appendChild(mainDiv);
//     }
//   }
// }

// function checkAnswer(rAnswer, count) {
//   let answers = document.getElementsByName("question");
//   let theChoosenAnswer;

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i].checked) {
//       theChoosenAnswer = answers[i].dataset.answer;
//       if(i===0){
//         rightAnswers += 1.5;
//         console.log(rightAnswers)
//       }else if (i===1){
//         rightAnswers += 2.5
//         console.log(rightAnswers)
//       }else if(i===2){
//         rightAnswers += 3.5
//         console.log(rightAnswers)
//       }

//     }
//     console.log(`choose the answer ${theChoosenAnswer}`)
//   }

//   // if (rAnswer === theChoosenAnswer) {
//   //   rightAnswers++;
//   // }
// }
// function handleBullets() {
//   let bulletsSpans = document.querySelectorAll(".bullets .spans span");
//   let arrayOfSpans = Array.from(bulletsSpans);
//   arrayOfSpans.forEach((span, index) => {
//     if (currentIndex === index) {
//       span.className = "on";
//     }
//   });
// }

// function showResults(count) {
//   let theResults;
//   if (currentIndex === count) {
//     quizArea.remove();
//     answersArea.remove();
//     submitButton.remove();
//     bullets.remove();

//     if (rightAnswers >= 0  && rightAnswers < 24) {
//       theResults = `<span class="good">No Autism</span>, ${rightAnswers} From ${52.5}`;
//     } else if (rightAnswers >= 24 && rightAnswers<=45) {
//       theResults = `<span class="perfect">Autism Spectrum Disorder</span>, ${rightAnswers} From ${52.5}`;
//     } else {
//       theResults = `<span class="bad">Autism </span>, ${rightAnswers} From ${52.5}`;
//     }

//     resultsContainer.innerHTML = theResults;
//     resultsContainer.style.padding = "10px";
//     resultsContainer.style.backgroundColor = "white";
//     resultsContainer.style.marginTop = "10px";
//   }
// }
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
/*function countdown(duration, count) {
  if (currentIndex < count) {
    let minutes, seconds;
    countdownInterval = setInterval(function () {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      countdownElement.innerHTML = `${minutes}:${seconds}`;

      if (--duration < 0) {
        clearInterval(countdownInterval);
        submitButton.click();
      }
    }, 1000);
  }
}*/

const questions = {{ questions|safe }};
  const quizArea = document.querySelector('.quiz-area');
  const submitButton = document.querySelector('.submit-button');
  const bullets = document.querySelectorAll('.bullet');
  let currentQuestionIndex = 0;

  function showQuestion(index) {
    const currentQuestion = questions[index];
    document.querySelector('#question-title').textContent = currentQuestion.title;
    const answersList = quizArea.querySelector('ul');
    answersList.innerHTML = '';
    const answer1 = document.createElement('li');
    answer1.innerHTML = `<input type="radio" name="answer" value="${currentQuestion.answer_1}">${currentQuestion.answer_1}`;
    const answer2 = document.createElement('li');
    answer2.innerHTML = `<input type="radio" name="answer" value="${currentQuestion.answer_2}">${currentQuestion.answer_2}`;
    const answer3 = document.createElement('li');
    answer3.innerHTML = `<input type="radio" name="answer" value="${currentQuestion.answer_3}">${currentQuestion.answer_3}`;
    answersList.appendChild(answer1);
    answersList.appendChild(answer2);
    answersList.appendChild(answer3);
  }

  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
      bullets[currentQuestionIndex].classList.add('active');
      bullets[currentQuestionIndex - 1].classList.remove('active');
    } else {
      // All questions have been answered, show results
      quizArea.style.display = 'none';
      submitButton.style.display = 'none';
      bullets[currentQuestionIndex - 1].classList.remove('active');
      const results = document.querySelector('.results');
      results.textContent = 'Quiz completed!';
    }
  }

  submitButton.addEventListener('click', () => {
    const selectedAnswer = quizArea.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const currentQuestion = questions[currentQuestionIndex];
      if (userAnswer === currentQuestion.right_answer) {
        bullets[currentQuestionIndex].classList.add('correct');
      } else {
        bullets[currentQuestionIndex].classList.add('incorrect');
      }
      showNextQuestion();
    }
  });

  showQuestion(currentQuestionIndex);
  bullets[currentQuestionIndex].classList.add('active');