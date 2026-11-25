

console.log("Software Engineering Hub Connected!");


// ==========================================
// 1. ACTIVE NAVIGATION
// ==========================================

const navLinks = document.querySelectorAll(".nav-links a");

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(function(link) {

    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }

});


// ==========================================
// 2. READING PROGRESS BAR
// ==========================================

const progressBar = document.createElement("div");

progressBar.id = "readingProgress";

document.body.appendChild(progressBar);


// ==========================================
// 3. BACK TO TOP BUTTON
// ==========================================

const topButton = document.createElement("button");

topButton.id = "backToTop";
topButton.innerHTML = "↑";
topButton.title = "Back to Top";

document.body.appendChild(topButton);


// ==========================================
// 4. ADD EXTRA STYLES
// ==========================================

const extraStyles = document.createElement("style");

extraStyles.textContent = `

    #readingProgress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        width: 0%;
        background: linear-gradient(90deg, #5b8cff, #a66cff);
        z-index: 9999;
    }

    #backToTop {
        position: fixed;
        bottom: 25px;
        right: 25px;
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: #5b8cff;
        color: white;
        font-size: 25px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: 0.3s;
    }

    #backToTop:hover {
        background: #a66cff;
        transform: translateY(-4px);
    }

    .nav-links a.active {
        color: #5b8cff;
        font-weight: bold;
    }

`;

document.head.appendChild(extraStyles);


// ==========================================
// 5. SCROLL PROGRESS
// ==========================================

window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

    progressBar.style.width = progress + "%";

    if (scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


// ==========================================
// 6. BACK TO TOP FUNCTION
// ==========================================

topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// 7. QUIZ QUESTIONS
// ==========================================

const questions = [

    {
        question: "What is Software Engineering?",
        options: [
            "Creating computer hardware",
            "A systematic approach to software development",
            "Only writing computer programs",
            "Managing computer networks"
        ],
        answer: 1,
        explanation: "Software Engineering uses systematic methods to develop and maintain software."
    },

    {
        question: "What does SDLC stand for?",
        options: [
            "Software Design Life Code",
            "System Development Logic Control",
            "Software Development Life Cycle",
            "Software Data Link Connection"
        ],
        answer: 2,
        explanation: "SDLC stands for Software Development Life Cycle."
    },

    {
        question: "Which is the first phase of SDLC?",
        options: [
            "Testing",
            "Planning",
            "Deployment",
            "Maintenance"
        ],
        answer: 1,
        explanation: "Planning is the starting phase of the software development process."
    },

    {
        question: "Which model follows a sequential approach?",
        options: [
            "Agile Model",
            "Spiral Model",
            "Waterfall Model",
            "Prototype Model"
        ],
        answer: 2,
        explanation: "The Waterfall Model completes phases one after another."
    },

    {
        question: "Which model focuses on iterative development?",
        options: [
            "Waterfall",
            "Agile",
            "V-Model",
            "None of these"
        ],
        answer: 1,
        explanation: "Agile develops software in small iterations and improves it continuously."
    },

    {
        question: "What is the main purpose of software testing?",
        options: [
            "To find defects and verify software quality",
            "To design hardware",
            "To increase file size",
            "To remove documentation"
        ],
        answer: 0,
        explanation: "Testing helps identify defects and check whether software meets requirements."
    },

    {
        question: "Which phase involves writing program code?",
        options: [
            "Planning",
            "Design",
            "Implementation",
            "Maintenance"
        ],
        answer: 2,
        explanation: "Implementation is the phase where developers write the actual code."
    },

    {
        question: "What is a prototype?",
        options: [
            "A final software product",
            "An early working model of software",
            "A programming language",
            "A testing error"
        ],
        answer: 1,
        explanation: "A prototype is an early model used to understand and refine requirements."
    },

    {
        question: "Which model gives special importance to risk analysis?",
        options: [
            "Waterfall",
            "Agile",
            "Spiral",
            "V-Model"
        ],
        answer: 2,
        explanation: "Risk analysis is a major activity in every Spiral Model cycle."
    },

    {
        question: "What happens during the deployment phase?",
        options: [
            "Requirements are collected",
            "Software is released for users",
            "The system is designed",
            "Only errors are documented"
        ],
        answer: 1,
        explanation: "Deployment makes the developed software available to users."
    },

    {
        question: "Which phase comes after system design?",
        options: [
            "Maintenance",
            "Planning",
            "Implementation",
            "Requirement Analysis"
        ],
        answer: 2,
        explanation: "Implementation generally follows system design."
    },

    {
        question: "What is corrective maintenance?",
        options: [
            "Adding new features",
            "Fixing errors after release",
            "Changing the software's color",
            "Planning a new project"
        ],
        answer: 1,
        explanation: "Corrective maintenance fixes defects discovered after software release."
    },

    {
        question: "Why are diagrams used in Software Engineering?",
        options: [
            "To make files larger",
            "To replace all coding",
            "To visually explain processes and structures",
            "To delete software"
        ],
        answer: 2,
        explanation: "Diagrams make complex processes easier to understand."
    },

    {
        question: "Which of these is NOT a typical SDLC phase?",
        options: [
            "Requirement Analysis",
            "System Design",
            "Testing",
            "Playing Games"
        ],
        answer: 3,
        explanation: "Playing games is not a standard software development phase."
    },

    {
        question: "What is the main goal of Software Engineering?",
        options: [
            "Developing reliable and maintainable software",
            "Creating only websites",
            "Avoiding software testing",
            "Making computers faster physically"
        ],
        answer: 0,
        explanation: "Software Engineering aims to produce reliable, efficient and maintainable software."
    }

];


// ==========================================
// 8. QUIZ ELEMENTS
// ==========================================

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");
const feedbackElement = document.getElementById("feedback");
const questionCount = document.getElementById("questionCount");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progressBar");
const resultBox = document.getElementById("resultBox");
const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const restartButton = document.getElementById("restartBtn");

let currentQuestion = 0;
let score = 0;
let answered = false;


// ==========================================
// 9. LOAD QUESTION
// ==========================================

function loadQuestion() {

    if (!questionElement) return;

    answered = false;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    optionsElement.innerHTML = "";

    feedbackElement.textContent = "";

    nextButton.disabled = true;

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question →";

    current.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.className = "option-btn";

        button.textContent =
            String.fromCharCode(65 + index) + ". " + option;

        button.addEventListener("click", function() {

            checkAnswer(index, button);

        });

        optionsElement.appendChild(button);

    });

    progressElement.style.width =
        (currentQuestion / questions.length) * 100 + "%";

}


// ==========================================
// 10. CHECK ANSWER
// ==========================================

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) return;

    answered = true;

    const current = questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".option-btn");

    if (selectedIndex === current.answer) {

        score++;

        selectedButton.classList.add("correct");

        feedbackElement.textContent =
            "✓ Correct Answer! " + current.explanation;

        feedbackElement.style.color = "#35c98a";

    } else {

        selectedButton.classList.add("wrong");

        allButtons[current.answer].classList.add("correct");

        feedbackElement.textContent =
            "✗ Incorrect! " + current.explanation;

        feedbackElement.style.color = "#ff647c";

    }

    allButtons.forEach(function(button) {

        button.disabled = true;

    });

    scoreElement.textContent = score;

    nextButton.disabled = false;

}


// ==========================================
// 11. NEXT QUESTION
// ==========================================

if (nextButton) {

    nextButton.addEventListener("click", function() {

        if (!answered) return;

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();

        }

    });

}


// ==========================================
// 12. SHOW FINAL RESULT
// ==========================================

function showResult() {

    document.querySelector(".question-card").style.display = "none";

    resultBox.style.display = "block";

    progressElement.style.width = "100%";

    finalScore.textContent =
        `Your Score: ${score} / ${questions.length}`;

    const percentage =
        (score / questions.length) * 100;

    if (percentage >= 80) {

        resultMessage.textContent =
            "Excellent! You have a strong understanding of Software Engineering.";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "Good Job! Keep learning and improve your knowledge.";

    } else {

        resultMessage.textContent =
            "Keep Practising! Revisit the learning pages and try again.";

    }

}


// ==========================================
// 13. RESTART QUIZ
// ==========================================

if (restartButton) {

    restartButton.addEventListener("click", function() {

        currentQuestion = 0;

        score = 0;

        answered = false;

        scoreElement.textContent = "0";

        resultBox.style.display = "none";

        document.querySelector(".question-card").style.display = "block";

        loadQuestion();

    });

}


// ==========================================
// 14. START QUIZ
// ==========================================

if (questionElement) {

    loadQuestion();

}

