var questionArray = 0;
var playerScore = 0;
var timeLeft = 100;
var timerId;
var introPage = document.querySelector("#intro-page");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var quizQuestion = document.querySelector("#quiz-title");
var showQuestion = document.createElement("ul");


var questions = [
    {question: "Commonly used data types DO NOT include:",
    choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts"},
    
    {question: "The condition in an if/else statement is enclosed with ____.",
    choices: ["1. Quotes", "2. Curly brackets", "3. Parentheses", "4. Square brackets"],
    answer: "3. Parentheses"},
    
    {question: "Arrays in JavaScript can be used to store ____.",
    choices: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
    answer: "4. All of the above"},
    
    {question: "String values must be encosed within ____ when being assigned to variables.",
    choices: ["1. Quotes", "2. Curly brackets", "3. Parentheses", "4. Square brackets"],
    answer: "1. Quotes"},
    
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. Javascript", "2. Terminal/Bash", "3. for loops", "4. console.log"],
    answer: "4. console.log"},
    
    {question: "What is the correct syntax for referring to an external script called 'code.js'?",
    choices: ["1. <script src='code.js'>", "2. <script href='code.js'>", "3. <script ref='code.js'>", "4. <script name='code.js'>"],
    answer: "1. <script src='code.js'>"}];

var startQuiz = function() {
    timerId = setInterval(countdown, 1000);
timerEl.textContent = "Time Left: " + timeLeft + "s";
introPage.innerHTML = "";
quizDisplay();
}

var countdown = function(){
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft + "s";
    if (timeLeft <= 0){
        endQuiz();
    }
}

function adjustTime(amount) {
    timeLeft += amount;
    if (timeLeft < 0) {
        timeLeft = 0}
    timerEl.textContent = "Time left: " + timeLeft + "s"}

var quizDisplay = function(){
    showQuestion.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var displayQuestion = questions[questionArray].question;
        var questionChoices = questions[questionArray].choices;
        quizQuestion.textContent = displayQuestion;
    }
    questionChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizQuestion.appendChild(showQuestion);
        showQuestion.appendChild(listItem);
        listItem.onclick = answerQuestion;
    })
}

function answerQuestion(event) {
    var playerChoice = event.target.textContent;
    var checkAnswer = document.createElement("div");
        if (playerChoice === questions[questionArray].answer) {
            playerScore++;
        } else {
            adjustTime(-5);
        }

    questionArray++;

    if (questionArray >= questions.length) {
      endQuiz();
      checkAnswer.textContent = "Your Score is " + playerScore + "!";
    } else {
      quizDisplay();
    }
    quizQuestion.appendChild(checkAnswer);
}

function endQuiz() {
    clearInterval(timerId);
    quizQuestion.innerHTML = "";
  };

startBtn.onclick = startQuiz;
   