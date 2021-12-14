const quizData = [
    {
        question: "Commonly used data types DO NOT Include:",
        answers: {
        1 : "1. strings",
        2 : "2. booleans",
        3 : "3. alert",
        4 : "4. numbers"
        },
        correct: "3. alert"
    },
    {
        question: "The condition in an if/ else statement is enclosed with",
        answers: {
        1 : "1. Quotes",
        2 : "2. Curly brackets",
        3 : "3. Parenthesis",
        4 : "4. Square brackets"
        },
        correct: "3. Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        answers: {
        1 : "1. Numbers and Strings",
        2 : "2. other array",
        3 : "3. booleans",
        4 : "4. all of the above"
        },
        correct: "4. all of the above"
    },
    {
        question: "String values must be enclosed with ______ when being assigned to variables",
        answers: {
        1 : "1. commas",
        2 : "2. curly brackets",
        3 : "3. quotes",
        4 : "4. parenthesis"
        },
        correct: "1. commas"
    },
    {
        question: "This program is made by ",
        answers: {
        1 : "1. Mark",
        2 : "2. Jin",
        3 : "3. Yong",
        4 : "4. Sung"
        },
        correct: "4. Sung"
    },
]

let countdownEl = document.getElementById("timer");
let startQuizEl = document.querySelector(".answers-wrapper .start-button-wrapper #start-quiz")
let choicesEl = document.querySelectorAll(".Choices")
let answersWrapEl = document.querySelector(".problemAnswers")
let questionsEl = document.querySelector(".page-content #questions")
let footerEl = document.querySelector(".correctOrWrong")
let playerInfo = document.querySelector(".page-content #player-info")
let initialInput = document.querySelector("#initial")
let infoSubmitEl = document.querySelector(".page-content .problemQuestions #submit")
let highScoreList = document.getElementById("high-score-list")

let countdownSeconds = 90;
let quizNumber = 0;

function countDown() {
    let countDown90 = setInterval(function(){

    countdownEl.innerHTML = countdownSeconds;
    countdownSeconds--;
    countdownEl.textContent= countdownSeconds + " seconds remaining";

    if (countdownSeconds === 0 || countdownSeconds < 0) {
        countdownEl.textContent="TIME OUT!";
        clearTimeout(countDown90)
        displayMessage();
      }
    }, 1000);
}   

function displayMessage() {
    answersWrapEl.classList.add("display-none")
    footerEl.classList.add("display-none")
    playerInfo.classList.remove("display-none")
    questionsEl.innerHTML = "<h1> TIME OUT!</h1> <p>Your score is" + " " + countdownSeconds +"</p> <br>"
}

    infoSubmitEl.addEventListener("click", function(event){
        event.preventDefault();
        let output = localStorage.getItem("HighScores")
        let scoreBoardArray1 = JSON.parse(output)

        console.log(initialInput.value)
        scoreBoardArray1.push(
            {
                initial: initialInput.value,
                score: countdownSeconds
            }
        )
        
        localStorage.setItem("HighScores", JSON.stringify(scoreBoardArray1))
    });


function quizMaker(quizNumber) {
    questionsEl.innerHTML= "<h1>" + quizData[quizNumber].question + "</h1>"
    for (let i=0; i<4; i++) {
        choicesEl[i].innerHTML = quizData[quizNumber].answers[i+1]
        
    }
}

function answerCheck(i) {
    choicesEl[i].addEventListener('click', function() {
        let answer = choicesEl[i].innerText;
        console.log(answer)
        if (answer == quizData[quizNumber].correct){
        footerEl.innerHTML = "<p>CORRECT!</p>"
        }
        else {
        footerEl.innerHTML = "<p>WRONG!</p>"
        countdownSeconds= countdownSeconds - 10
        }
        console.log(quizData)

        if (quizNumber<quizData.length -1){
        quizNumber ++;
        quizStart(quizNumber)
        }
        else if (quizNumber=quizData.length){
            displayMessage();
        }
    })
}

function quizStart(quizNumber) {
    startQuizEl.classList.add("display-none")
    answersWrapEl.classList.remove("display-none")
    quizMaker(quizNumber)
    
}

for (let i = 0; i<choicesEl.length; i++){
    answerCheck(i)
}

function startGame() {
    quizStart(quizNumber)
    countDown()
}

function firstPage() {
    playerInfo.classList.add("display-none")
    startQuizEl.textContent= "Start Quiz";
    answersWrapEl.classList.add("display-none")
    questionsEl.innerHTML = "<h1>Coding Quiz Challenge</h1> <p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>"
    startQuizEl.addEventListener("click", startGame);
    highScoreOrganized()
}

let highScoreOrganized = function() {
    let output1 = localStorage.getItem("HighScores")
    let highestScores = JSON.parse(output1)
    highestScores.sort((a,b) => b.score-a.score);
    console.log(highestScores.length)

    for (i=0; i<highestScores.length; i++) {
        highScoreList.innerHTML+="<li>" + highestScores[i].initial + " / " + highestScores[i].score + "</li>" 
    }
}

firstPage()