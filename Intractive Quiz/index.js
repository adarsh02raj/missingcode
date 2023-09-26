const questions = [
{
    question : "Where is Red Fort?",
    options : ["Delhi", "UP", "Punjab", "Bengalaru"],
    correctAnswer: "Delhi",
}, 
{
    question : "Where is Red Fort?",
    options : ["Delhi", "UP", "Punjab", "Bengalaru"],
    correctAnswer: "Delhi",
},
{
    question : "Where is Red Fort?",
    options : ["Delhi", "UP", "Punjab", "Bengalaru"],
    correctAnswer: "Delhi",
}
]


let currentQuestion = 0;
let score = 0;


const questionElement = document.getElementById("question");
const optionsElement = document.querySelectorAll(".options button");
const scoreElement = document.getElementById("score");

function displayQuestion(){
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    for(let i=0; i< optionsElement.length; i++){
        optionsElement[i].textContent = question.options[i];
    }
}
function checkAnswer(answer){
    const question = questions[currentQuestion];
    if ( answer === question.correctAnswer ){
        score++;
        scoreElement.textContent = `Score = ${score}`;
    }
    currentQuestion++;

    if(currentQuestion < questions.length){
        displayQuestion();
    }

    else
    alert(`Quiz Finished.
           Your Score Is = ${score}`);

}

displayQuestion();

optionsElement.forEach((option, index) => {
    option.addEventListener('click', () =>{
        checkAnswer(questions[currentQuestion].options[index]);
    })
});