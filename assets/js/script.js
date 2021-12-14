let countdownEl = document.getElementById("timer");
let startQuizEl = document.querySelector(".answers-wrapper .start-button-wrapper #start-quiz")
let answersEl = document.querySelector(".Choices")
let answersWrapEl = document.querySelector(".problemAnswers")
let questionsEl = document.querySelector(".problemQuestions")
let firstChoiceEl = document.querySelector(".problemAnswers #firstChoice")
let secondChoiceEl = document.querySelector(".problemAnswers #secondChoice")
let thirdChoiceEl = document.querySelector(".problemAnswers #thirdChoice")
let fourthChoiceEl = document.querySelector(".problemAnswers #fourthChoice")
let footerEl = document.querySelector(".correctOrWrong")

let countdownSeconds = 90;

function countDown() {
    let countDown90 = setInterval(function(){

    countdownEl.innerHTML = countdownSeconds;
    countdownSeconds--;
    countdownEl.textContent= countdownSeconds + " seconds remaining";

    if (countdownSeconds === 0 || countdownSeconds < 0) {
        countdownEl.textContent="TIME OUT!";
        clearTimeout(countDown90)
        //displayMessage();
      }
    }, 1000);      
}

function firstPage() {
    startQuizEl.textContent= "Start Quiz";
    answersWrapEl.classList.add("display-none")
    questionsEl.innerHTML = "<h1>Coding Quiz Challenge</h1> <p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>"
    
}
firstPage()

function firstQuestion() {
    startQuizEl.classList.add("display-none")
    answersWrapEl.classList.remove("display-none")
    questionsEl.innerHTML = "<h2>Commonly used data types DO NOT Include:</h2> <p></p>"
    firstChoiceEl.textContent = "1. strings"
    let firstQ = firstChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        secondQuestion()
        debugger
    })

    secondChoiceEl.textContent = "2. booleans"
    secondChoiceEl.addEventListener("click", function(){
        yesOrNo = 1

        secondQuestion()
    })

    thirdChoiceEl.textContent = "3. alert"
    thirdChoiceEl.addEventListener("click", function(){
        yesOrNo = 0
        secondQuestion()
    })

    fourthChoiceEl.textContent = "4. numbers"
    fourthChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        secondQuestion()
    })
    if(firstQ||secondChoiceEl||fourthChoiceEl){
        countdownSeconds= countdownSeconds -10
        return countdownSeconds;
    }    
}

function secondQuestion() {
    console.log(yesOrNo)
    if(yesOrNo === 1) {
        footerEl.innerHTML = "<p>WRONG!</p>"
    }
    else if(yesOrNo === 0) {
        footerEl.innerHTML = "<p>CORRECT!</p>"
    }

    questionsEl.innerHTML = "<h2>The condition in an if/ else statement is enclosed with</h2>"
    firstChoiceEl.textContent = "1. Quotes"
    firstChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        thirdQuestion()
        return countdownSeconds;

    })

    secondChoiceEl.textContent = "2. Curly brackets"
    secondChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        thirdQuestion()
    })

    thirdChoiceEl.textContent = "3. Parenthesis"
    thirdChoiceEl.addEventListener("click", function(){
        yesOrNo = 0
        thirdQuestion()
    })

    fourthChoiceEl.textContent = "4. Square brackets"
    fourthChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        thirdQuestion()
    })
    
}

function thirdQuestion() {
    console.log(yesOrNo)
    if(yesOrNo === 1) {
        footerEl.innerHTML = "<p>WRONG!</p>"
    }
    else if(yesOrNo === 0) {
        footerEl.innerHTML = "<p>CORRECT!</p>"
    }

    questionsEl.innerHTML = "<h2>Arrays in JavaScript can be used to store</h2>"
    firstChoiceEl.textContent = "1. Numbers and Strings"
    firstChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        fourthQuestion()
    })

    secondChoiceEl.textContent = "2. other arrays"
    secondChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        fourthQuestion()
    })

    thirdChoiceEl.textContent = "3. booleans"
    thirdChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        fourthQuestion()
    })

    fourthChoiceEl.textContent = "4. all of the above"
    fourthChoiceEl.addEventListener("click", function(){
        yesOrNo = 0
        fourthQuestion()
    })
    
}

function fourthQuestion() {
    console.log(yesOrNo)
    if(yesOrNo === 1) {
        footerEl.innerHTML = "<p>WRONG!</p>"
    }
    else if(yesOrNo === 0) {
        footerEl.innerHTML = "<p>CORRECT!</p>"
    }

    questionsEl.innerHTML = "<h2>String values must be enclosed with ______ when being assigned to variables</h2>"
    firstChoiceEl.textContent = "1. commas"
    firstChoiceEl.addEventListener("click", function(){
        yesOrNo = 0
        fifthQuestion()
    })

    secondChoiceEl.textContent = "2. curly brackets"
    secondChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        fifthQuestion()
    })

    thirdChoiceEl.textContent = "3. quotes"
    thirdChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        fifthQuestion()
    })

    fourthChoiceEl.textContent = "4. parenthesis"
    fourthChoiceEl.addEventListener("click", function(){
        yesOrNo = 1
        countdownSeconds= countdownSeconds -10
        fifthQuestion()
    })
    
}

startQuizEl.addEventListener("click", countDown);
startQuizEl.addEventListener("click", firstQuestion);