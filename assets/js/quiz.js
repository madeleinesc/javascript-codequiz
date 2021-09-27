// QUIZ GAME PAGE

// CONSTANTS:
//pulling from the id = "question"

const question = document.getElementById("question");
// pulling from the class name for = "choiceText" and making it into an array
const choices = Array.from(document.getElementsByClassName("choiceText"));

// track score through current game
const scoreText = document.getElementById("score");

// variables for quiz questions
// let is used for variables that are block-scoped, and can be updated but not redeclared.
let currentQuest = {};
let acceptAnswers = false;
let score = 0;     // starting the score at 0
let questionCount = 0;      // what question the user is on
// empty array of all available questions
let availQuest = [];
// each question is an object with a question field, 4 choices and an answer
let questions = [
    {
        question: "Which of the following is not a Javascript data type?",
        choice1: "undefined",
        choice2: "number",
        choice3: "boolean",
        choice4: "float",
        answer: 4
    },
    {
        question: "Javascript ignores...",
        choice1: "spaces",
        choice2: "tabs",
        choice3: "newlines",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "Which of the following in not a proper Javascript looping structure?",
        choice1: "for",
        choice2: "forwhich",
        choice3: "while",
        choice4: "dowhile",
        answer: 3
    },
    {
        question: "Javascript is ideal to...",
        choice1: "Make computations in HTML simpler",
        choice2: "Minimise storage requirements on the web server",
        choice3: "Increase the download time for the client",
        choice4: "none of the above",
        answer: 2
    },
    {
        question: "Which syntax is used to get a particular value using the tagged name?",
        choice1: "getElementID()",
        choice2: "getElementsbyName()",
        choice3: "getElementsbyTagName()",
        choice4: "getTagName()",
        answer: 3
    },
    {
        question: "What are variables used for in Javascript?",
        choice1: "storing numbers, dates or other values",
        choice2: "varying randomly",
        choice3: "causing high-school algebra flashbacks",
        choice4: "none of the above",
        answer: 1
    },
    {
        question: "Which of the following is not a valid Javascript variable name?",
        choice1: "2names",
        choice2: "_first_and_last_names",
        choice3: "FirstAndLast",
        choice4: "none of the above",
        answer: 1
    },
    {
        question: "Which statement is used to test for a specific condition?",
        choice1: "select",
        choice2: "if",
        choice3: "switch",
        choice4: "for",
        answer: 2
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<javascript>",
        choice2: "<js>",
        choice3: "<script>",
        choice4: "<scripting>",
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    },
]

const MAX_QUEST = 5; // how many questions per game

// start quiz function 
function startQuiz() {
    questionCount = 0;
    score = 0;
    // all available questions from the questions array using the spread operator
    availQuest = [...questions];
    // logs all available questions
    // CONSOLE LOG FIRST TO CHECK IF ITS WORKING: 
    newQuest();
};

// new question function 
function newQuest() {
    // if available questions.length is 0 or the question counter is greater or equal to max questions....
    if (availQuest.length === 0 || questionCount > MAX_QUEST) {
        // save user scores when game is ended
        localStorage.setItem("recentScore", score);
        // go to end quiz page
        return window.location.assign('end.html');
    }
    // when the user starts the game it will increment by 1
    questionCount++;
    // to get a random question from the array 'availableQuestions' use math random to get random question and math floor to get integer and times by the array.length
    const questionIndex = Math.floor(Math.random() * availQuest.length);
    currentQuest = availQuest[questionIndex];
    // set the question, the HTML element 'innerText' to be the currentQuestion and the question property
    question.innerText = currentQuest.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuest["choice" + number];
    });

    // to make it so the same question doesnt appear again in the current game
    availQuest.splice(questionIndex, 1);

    acceptAnswers = true;
};

// function to log each choice the user clicks on
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptAnswers) return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        // logs every answer in the current game
        // will return true for correct answer to question and false for incorrect answer
        //because one is a number and the other a string, must use == 

        let classToApply = "incorrect";
            if (selectedAnswer == currentQuest.answer) {
                classToApply = "correct";
            }
        // CONSOLE LOG FIRST TO CHECK IF ITS WORKING 
        console.log(classToApply);
        
        // apply class to container(parent)
        selectedChoice.parentElement.classList.add(classToApply);

        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
        // to get a new question after the user has picked an answer
            newQuest();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

// call startQuiz function
startQuiz();


// Rules:
// Test your knowledge of Javascript with this timed quiz!
// This is a multiple choice quiz with code-related questions.
// You must pick an answer within the time limit.
// Any incorrect answers will penalize your score time by 10 seconds.
// Press Play to start the quiz now!


// QUESTIONS:
// Which of the following is not a Javascript data type? 
// 1. undefined, 2. number, 3. boolean, 4. float.    correct answer: 4. float.

// Javascript ignores...
// 1. spaces, 2. tabs, 3. newlines, 4.all of the above.   correct answer: 4

// Which of the following in not a proper looping structure in Javascript?
// 1. for , 2. forwhich , 3. while , 4. dowhile       correct answer: 3

// Javascript is ideal to..
// 1. make computations in HTML simpler , 2. minimise storage requirements on the web server , 3. increase the download time for the client , 4. none of the above         correct answer: 2

// Which syntax is used to get a particular value using the tagged name?
// 1. getElementID() , 2. getElementsbyName() , 3. getElementsbyTageName() , 4. getTagName()         correct answer: 3

// What are variables used for in Javascript?
// 1. storing numbers, dates or other values , 2. varying randomly , 3. causing high-school algebra flashbacks , 4. none of the above    correct answer: 1

// Which of the following is not a valid Javascript variable name?
// 1. 2names , 2. _first_and_last_names , 3. FirstAndLast , 4. none of the above          correct: 1

// Using the ... statement is how you test for a specific condition.
// 1. select , 2. if , 3. switch , 4. for       correct answer: 2

// Inside which HTML element do we put the Javascript?
// 1. <javascript> , 2. <js> , 3. <script> , 4. <scripting>   correct answer: 3

// How do you write 'Hello World' in an alert box?
// 1. msgBox('Hello World'); , 2. alertBox('Hello World'); , 3. msg('Hello World'); , 4. alert('Hello World');   correct answer: 4
